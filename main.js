import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import * as CANNON from 'cannon-es';
import { Howl, Howler } from 'howler/src/howler.core';

import './style.css';

const DEBUG = false;
const N_DICE = 1;
const DIE_EDGE_LENGTH = 1.6; // cm
const ROOM_EDGE_LENGTH = 30;

const params = {
	segments: 50,
	edgeRadius: 0.07,
	notchRadius: 0.2,
	notchDepth: 0.12,
};

const instructionsEl = document.querySelector('.instructions');
const resultEl = document.querySelector('.result');
const canvasEl = document.querySelector('canvas');
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x001000);
const renderer = new THREE.WebGLRenderer({
	canvas: canvasEl,
});
const physicsWorld = new CANNON.World({
	gravity: new CANNON.Vec3(0, -98, 0),
	allowSleep: true,
});
physicsWorld.defaultContactMaterial.restitution = 0.25;

/**
 * Sounds.
 */
const SOUND_NAMES = ['one', 'two', 'three', 'four', 'five', 'six'];
const sound = new Howl({
	src: ['/audio/sounds.ogg', '/audio/sounds.m4a', '/audio/sounds.mp3', '/audio/sounds.ac3'],
	sprite: {
		five: [0, 707.3696145124716],
		four: [2000, 671.5873015873015],
		one: [4000, 733.5600907029481],
		six: [6000, 817.3922902494332],
		three: [8000, 654.9659863945578],
		two: [10000, 618.2993197278907],
	},
});

/**
 * Utility functions.
 */
function setSize() {
	// Update sizes.
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera.
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer.
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function notchWave(v) {
	v = (1 / params.notchRadius) * v;
	v = Math.PI * Math.max(-1, Math.min(1, v));
	return params.notchDepth * (Math.cos(v) + 1);
}
const notch = pos => notchWave(pos[0]) * notchWave(pos[1]);

function getFacePosition(position) {
	// The vertex is on the die’s face. It doesn’t need to be rounded, but we
	// need to add some notches for the pips.
	const offset = 0.23 * DIE_EDGE_LENGTH;

	const absX = Math.abs(position.x);
	const absY = Math.abs(position.y);
	const absZ = Math.abs(position.z);
	let face;
	if (absY > absX && absY > absZ) {
		face = position.y > 0 ? 1 : 6;
	} else if (absX > absZ) {
		face = position.x > 0 ? 2 : 5;
	} else {
		face = position.z > 0 ? 3 : 4;
	}

	const newPosition = position.clone();
	switch (face) {
		case 1:
			newPosition.y -= notch([newPosition.x, newPosition.z]);
			break;
		case 2:
			newPosition.x -= notch([newPosition.y + offset, newPosition.z + offset]);
			newPosition.x -= notch([newPosition.y - offset, newPosition.z - offset]);
			break;
		case 3:
			newPosition.z -= notch([newPosition.x - offset, newPosition.y + offset]);
			newPosition.z -= notch([newPosition.x, newPosition.y]);
			newPosition.z -= notch([newPosition.x + offset, newPosition.y - offset]);
			break;
		case 4:
			newPosition.z += notch([newPosition.x + offset, newPosition.y + offset]);
			newPosition.z += notch([newPosition.x + offset, newPosition.y - offset]);
			newPosition.z += notch([newPosition.x - offset, newPosition.y + offset]);
			newPosition.z += notch([newPosition.x - offset, newPosition.y - offset]);
			break;
		case 5:
			newPosition.x += notch([newPosition.y + offset, newPosition.z + offset]);
			newPosition.x += notch([newPosition.y + offset, newPosition.z - offset]);
			newPosition.x += notch([newPosition.y, newPosition.z]);
			newPosition.x += notch([newPosition.y - offset, newPosition.z + offset]);
			newPosition.x += notch([newPosition.y - offset, newPosition.z - offset]);
			break;
		case 6:
			newPosition.y += notch([newPosition.x + offset, newPosition.z + offset]);
			newPosition.y += notch([newPosition.x + offset, newPosition.z]);
			newPosition.y += notch([newPosition.x + offset, newPosition.z - offset]);
			newPosition.y += notch([newPosition.x - offset, newPosition.z + offset]);
			newPosition.y += notch([newPosition.x - offset, newPosition.z]);
			newPosition.y += notch([newPosition.x - offset, newPosition.z - offset]);
			break;
		default:
			// Do nothing.
			break;
	}

	return newPosition;
}

function getEdgePosition(position, subCubeCorner, addition, isXOutside, isYOutside, isZOutside) {
	// Edges work the same as corners, except the position remains unchanged on
	// one axis.
	const newPosition = position.clone();
	if (isXOutside && isYOutside) {
		// The vertex is close to a box edge parallel to the Z axis.
		addition.z = 0;
		addition.normalize().multiplyScalar(DIE_EDGE_LENGTH * params.edgeRadius);
		newPosition.x = subCubeCorner.x + addition.x;
		newPosition.y = subCubeCorner.y + addition.y;
	} else if (isXOutside && isZOutside) {
		// The vertex is close to a box edge parallel to the Y axis.
		addition.y = 0;
		addition.normalize().multiplyScalar(DIE_EDGE_LENGTH * params.edgeRadius);
		newPosition.x = subCubeCorner.x + addition.x;
		newPosition.z = subCubeCorner.z + addition.z;
	} else {
		// The vertex is close to a box edge parallel to the X axis.
		addition.x = 0;
		addition.normalize().multiplyScalar(DIE_EDGE_LENGTH * params.edgeRadius);
		newPosition.y = subCubeCorner.y + addition.y;
		newPosition.z = subCubeCorner.z + addition.z;
	}

	return newPosition;
}

function getCornerPosition(subCubeCorner, addition) {
	addition.normalize().multiplyScalar(DIE_EDGE_LENGTH * params.edgeRadius);
	return subCubeCorner.add(addition);
}

function createOuterDieGeometry() {
	// Create a box geometry with the desired number of segments.
	let boxGeometry = new THREE.BoxGeometry(
		DIE_EDGE_LENGTH,
		DIE_EDGE_LENGTH,
		DIE_EDGE_LENGTH,
		params.segments,
		params.segments,
		params.segments
	);

	// By default, box geometry has duplicated vertices at the “seams” (edges)
	// to properly wrap textures. We’re not going to use textures, and
	// duplicates cause issues with `computeVertexNormals()`.
	boxGeometry.deleteAttribute('normal');
	boxGeometry.deleteAttribute('uv');
	boxGeometry = BufferGeometryUtils.mergeVertices(boxGeometry);

	const positionAttribute = boxGeometry.attributes.position;
	const nVertices = positionAttribute.count;

	// Imagine a smaller “sub-cube” centered inside the die. Any vertex outside
	// than the sub-cube on more than one axis will be considered a corner or
	// edge, and thus rounded.
	const subCubeHalfSize = DIE_EDGE_LENGTH * (0.5 - params.edgeRadius);

	for (let i = 0; i < nVertices; ++i) {
		let vertexPosition = new THREE.Vector3().fromBufferAttribute(positionAttribute, i);

		const isXOutside = Math.abs(vertexPosition.x) > subCubeHalfSize;
		const isYOutside = Math.abs(vertexPosition.y) > subCubeHalfSize;
		const isZOutside = Math.abs(vertexPosition.z) > subCubeHalfSize;

		const nOutsideAxes = isXOutside + isYOutside + isZOutside;

		if (nOutsideAxes <= 1) {
			vertexPosition = getFacePosition(vertexPosition);
		} else {
			// Create a vector from the center of the sub-cube to whichever
			// sub-cube corner is closest to the current vertex.
			const subCubeCorner = new THREE.Vector3(
				Math.sign(vertexPosition.x),
				Math.sign(vertexPosition.y),
				Math.sign(vertexPosition.z)
			).multiplyScalar(subCubeHalfSize);

			// Create another vector from subCubeCorner to the current vertex.
			// This will eventually be normalized to a consistent radius to
			// achieve a rounding effect.
			const addition = new THREE.Vector3().subVectors(vertexPosition, subCubeCorner);

			if (nOutsideAxes === 2) {
				vertexPosition = getEdgePosition(
					vertexPosition,
					subCubeCorner,
					addition,
					isXOutside,
					isYOutside,
					isZOutside
				);
			} else {
				vertexPosition = getCornerPosition(subCubeCorner, addition);
			}
		}

		positionAttribute.setXYZ(i, vertexPosition.x, vertexPosition.y, vertexPosition.z);
	}

	boxGeometry.computeVertexNormals();

	return boxGeometry;
}

function createInnerDieGeometry() {
	const baseGeometry = new THREE.PlaneGeometry(
		DIE_EDGE_LENGTH - 2 * params.edgeRadius,
		DIE_EDGE_LENGTH - 2 * params.edgeRadius
	);
	const offset = DIE_EDGE_LENGTH * 0.483;
	return BufferGeometryUtils.mergeBufferGeometries([
		baseGeometry.clone().translate(0, 0, offset),
		baseGeometry.clone().translate(0, 0, -offset),
		baseGeometry
			.clone()
			.rotateX(0.5 * Math.PI)
			.translate(0, offset, 0),
		baseGeometry
			.clone()
			.rotateX(0.5 * Math.PI)
			.translate(0, -offset, 0),
		baseGeometry
			.clone()
			.rotateY(0.5 * Math.PI)
			.translate(offset, 0, 0),
		baseGeometry
			.clone()
			.rotateY(0.5 * Math.PI)
			.translate(-offset, 0, 0),
	]);
}

const dieMaterial = new THREE.MeshStandardMaterial({
	color: 0xd2d1c9,
	metalness: 0.1,
	roughness: 0.4,
});
const pipMaterial = new THREE.MeshStandardMaterial({
	color: 0x000000,
	metalness: 0.8,
	roughness: 0.2,
	side: THREE.DoubleSide,
});
function createDieMesh() {
	const group = new THREE.Group();

	const outerGeometry = createOuterDieGeometry();
	const outer = new THREE.Mesh(outerGeometry, dieMaterial);

	const innerGeometry = createInnerDieGeometry();
	const inner = new THREE.Mesh(innerGeometry, pipMaterial);

	group.add(outer, inner);
	return group;
}

const createDie = (() => {
	// Cache the die mesh and clone it so we don’t have to recreate it.
	const dieMesh = createDieMesh();
	return function createDie() {
		const mesh = dieMesh.clone();
		const halfLength = DIE_EDGE_LENGTH * 0.5;
		const body = new CANNON.Body({
			mass: 1,
			shape: new CANNON.Box(new CANNON.Vec3(halfLength, halfLength, halfLength)),
			sleepTimeLimit: 0.2,
			allowSleep: false, // Changed during first throw.
		});
		return [mesh, body];
	};
})();

function addDieEvents(body) {
	body.addEventListener('sleep', e => {
		body.allowSleep = false;

		// Check the dice rotation.
		const euler = new CANNON.Vec3();
		body.quaternion.toEuler(euler);

		const eps = 0.1;
		let isZero = angle => Math.abs(angle) < eps;
		let isHalfPi = angle => Math.abs(angle - 0.5 * Math.PI) < eps;
		let isMinusHalfPi = angle => Math.abs(0.5 * Math.PI + angle) < eps;
		let isPiOrMinusPi = angle => Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

		if (isZero(euler.z)) {
			if (isZero(euler.x)) {
				commitResult(1);
			} else if (isHalfPi(euler.x)) {
				commitResult(4);
			} else if (isMinusHalfPi(euler.x)) {
				commitResult(3);
			} else if (isPiOrMinusPi(euler.x)) {
				commitResult(6);
			} else {
				// It landed on an edge. Wait for it to fall on side and fire
				// the event again.
				dice.body.allowSleep = true;
			}
		} else if (isHalfPi(euler.z)) {
			commitResult(2);
		} else if (isMinusHalfPi(euler.z)) {
			commitResult(5);
		} else {
			// It landed on an edge. Wait for it to fall on side and fire the
			// event again
			dice.body.allowSleep = true;
		}
	});
}

const [clearResults, commitResult] = (() => {
	let results = [];
	const clearResults = () => {
		results = [];
		resultEl.textContent = '';
	};
	const commitResult = result => {
		results.push(result);
		sound.play(SOUND_NAMES[result - 1]);
		if (results.length === N_DICE) {
			if (N_DICE === 1) {
				resultEl.textContent = results[0];
				return;
			}
			const sum = results.reduce((a, b) => a + b);
			resultEl.textContent = `${results /*sort((a, z) => z - a)*/
				.join(' + ')} = ${sum}`;
		}
	};
	return [clearResults, commitResult];
})();

function addRoom() {
	// Add the visual component.
	const floorMesh = new THREE.Mesh(
		new THREE.PlaneGeometry(1000, 1000),
		new THREE.MeshStandardMaterial({
			color: 0x001000,
		})
	);
	floorMesh.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);
	scene.add(floorMesh);

	const floor = new CANNON.Body({
		type: CANNON.Body.STATIC,
		shape: new CANNON.Plane(),
		// material: new CANNON.Material({
		// 	friction: 0.1,
		// 	restitution: 0.2,
		// 	contactEquationStiffness: 0,
		// 	contactEquationRelaxation: 0.03,
		// 	contactEquationRegularizationTime: 3,
		// }),
	});
	floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);
	physicsWorld.addBody(floor);
}

/**
 * Scene objects.
 */
// Dice.
const dice = Array.from({ length: N_DICE }, createDie);
dice.forEach(([dieMesh, dieBody]) => {
	scene.add(dieMesh);
	physicsWorld.addBody(dieBody);
	addDieEvents(dieBody);
});

// Room.
addRoom();

// Lighting.
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(ROOM_EDGE_LENGTH / 2, ROOM_EDGE_LENGTH, ROOM_EDGE_LENGTH / 2);
directionalLight.target.position.set(-ROOM_EDGE_LENGTH / 2, 0, -ROOM_EDGE_LENGTH / 2);
directionalLight.target.updateWorldMatrix();
scene.add(directionalLight);

// Axis debug.
const axesHelper = new THREE.AxesHelper(5);
axesHelper.visible = DEBUG;
scene.add(axesHelper);

// Camera.
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
camera.position.x = ROOM_EDGE_LENGTH / 2;
camera.position.y = ROOM_EDGE_LENGTH;
camera.position.z = ROOM_EDGE_LENGTH / 2;
camera.near = 0.1;
camera.far = 100;
scene.add(camera);

/**
 * User actions.
 */
const initialPosition = new THREE.Vector3(0, ROOM_EDGE_LENGTH * 0.8, (ROOM_EDGE_LENGTH / 2) * 0.8);
const initialDirection = new THREE.Vector3(0, 0, -1);
function throwDice() {
	if (!started) {
		instructionsEl.remove();
		started = true;
	}

	const nDice = dice.length;
	dice.forEach(([dieMesh, dieBody], i) => {
		// Reset any state and velocity from the prior throw.
		clearResults();
		dieBody.allowSleep = true;
		dieBody.velocity.setZero();
		dieBody.angularVelocity.set(Math.random() * Math.PI * 8, 0, Math.random() * Math.PI * 8);

		// Reset the position and apply a random rotation to the die.
		const newPosition = new THREE.Vector3(((nDice - 1) / 2 - i) * DIE_EDGE_LENGTH * 2, 0, 0).add(initialPosition);
		dieBody.position.copy(newPosition);
		dieMesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random());
		dieBody.quaternion.copy(dieMesh.quaternion);

		// Apply an initial impulse to “throw” the die.
		const force = (3 + 5 * Math.random()) * 7;
		dieBody.applyImpulse(new CANNON.Vec3(initialDirection.x, initialDirection.y, initialDirection.z).scale(force));
	});
}
// Call throwDice() whenever the viewport is clicked or space is pressed.
window.addEventListener('click', throwDice);
window.addEventListener('keydown', e => {
	if (e.code === 'Space') {
		throwDice();
	}
});

/**
 * Render loop.
 */
const cameraOffset = new THREE.Vector3(DIE_EDGE_LENGTH, DIE_EDGE_LENGTH * 2, DIE_EDGE_LENGTH);
function tick(t) {
	requestAnimationFrame(tick);

	physicsWorld.fixedStep();
	dice.forEach(([dieMesh, dieBody]) => {
		dieMesh.position.copy(dieBody.position);
		dieMesh.quaternion.copy(dieBody.quaternion);
	});

	// Update the camera.
	camera.position.copy(dice[0][0].position).add(cameraOffset);
	camera.lookAt(dice[0][0].position);

	// Render.
	renderer.render(scene, camera);
}

/**
 * Startup.
 */
let started = false;
window.addEventListener('resize', setSize);
setSize();
requestAnimationFrame(tick);
