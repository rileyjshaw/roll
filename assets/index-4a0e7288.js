(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dr="149",Sl=0,Wr=1,El=2,Da=1,Tl=2,Fi=3,Sn=0,Tt=1,mn=2,wn=0,di=1,Hr=2,qr=3,Xr=4,Al=5,ui=100,Cl=101,Ll=102,jr=103,Yr=104,Pl=200,Rl=201,Dl=202,Il=203,Ia=204,za=205,zl=206,Fl=207,Nl=208,Bl=209,Ol=210,Ul=0,kl=1,Gl=2,Mr=3,Vl=4,Wl=5,Hl=6,ql=7,Fa=0,Xl=1,jl=2,gn=0,Yl=1,$l=2,Zl=3,Kl=4,Jl=5,Na=300,pi=301,mi=302,Sr=303,Er=304,ws=306,Tr=1e3,Gt=1001,Ar=1002,gt=1003,$r=1004,Fs=1005,It=1006,Ql=1007,Ui=1008,Vn=1009,ec=1010,tc=1011,Ba=1012,nc=1013,On=1014,Un=1015,ki=1016,ic=1017,sc=1018,fi=1020,rc=1021,Vt=1023,oc=1024,ac=1025,kn=1026,gi=1027,lc=1028,cc=1029,uc=1030,hc=1031,dc=1033,Ns=33776,Bs=33777,Os=33778,Us=33779,Zr=35840,Kr=35841,Jr=35842,Qr=35843,fc=36196,eo=37492,to=37496,no=37808,io=37809,so=37810,ro=37811,oo=37812,ao=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,ks=36492,pc=36283,_o=36284,vo=36285,xo=36286,Wn=3e3,Ge=3001,mc=3200,gc=3201,Oa=0,_c=1,Zt="srgb",Gi="srgb-linear",Gs=7680,vc=519,yo=35044,bo="300 es",Cr=1035;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,wo=180/Math.PI;function Vi(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[c&255]+ht[c>>8&255]+ht[c>>16&255]+ht[c>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function St(c,e,t){return Math.max(e,Math.min(t,c))}function xc(c,e){return(c%e+e)%e}function Ws(c,e,t){return(1-t)*c+t*e}function Mo(c){return(c&c-1)===0&&c!==0}function Lr(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function ji(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function bt(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],h=n[1],f=n[4],r=n[7],l=n[2],d=n[5],g=n[8],m=i[0],p=i[3],_=i[6],v=i[1],x=i[4],b=i[7],M=i[2],A=i[5],R=i[8];return s[0]=o*m+a*v+u*M,s[3]=o*p+a*x+u*A,s[6]=o*_+a*b+u*R,s[1]=h*m+f*v+r*M,s[4]=h*p+f*x+r*A,s[7]=h*_+f*b+r*R,s[2]=l*m+d*v+g*M,s[5]=l*p+d*x+g*A,s[8]=l*_+d*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*a*h-n*s*f+n*a*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],h=e[7],f=e[8],r=f*o-a*h,l=a*u-f*s,d=h*s-o*u,g=t*r+n*l+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=r*m,e[1]=(i*h-f*n)*m,e[2]=(a*n-i*o)*m,e[3]=l*m,e[4]=(f*t-i*u)*m,e[5]=(i*s-a*t)*m,e[6]=d*m,e[7]=(n*u-h*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*a)+o+e,-i*h,i*u,-i*(-h*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Et;function Ua(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function ys(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function Gn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function vs(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const qs={[Zt]:{[Gi]:Gn},[Gi]:{[Zt]:vs}},pt={legacyMode:!0,get workingColorSpace(){return Gi},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.legacyMode||e===t||!e||!t)return c;if(qs[e]&&qs[e][t]!==void 0){const n=qs[e][t];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}},ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={r:0,g:0,b:0},Bt={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function Xs(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}function $i(c,e){return e.r=c.r,e.g=c.g,e.b=c.b,e}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=xc(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xs(o,s,e+1/3),this.g=Xs(o,s,e),this.b=Xs(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(s[1])/360,h=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,h,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zt){const n=ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return pt.fromWorkingColorSpace($i(this,Je),e),St(Je.r*255,0,255)<<16^St(Je.g*255,0,255)<<8^St(Je.b*255,0,255)<<0}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace($i(this,Je),t);const n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let u,h;const f=(a+o)/2;if(a===o)u=0,h=0;else{const r=o-a;switch(h=f<=.5?r/(o+a):r/(2-o-a),o){case n:u=(i-s)/r+(i<s?6:0);break;case i:u=(s-n)/r+2;break;case s:u=(n-i)/r+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace($i(this,Je),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=Zt){return pt.fromWorkingColorSpace($i(this,Je),e),e!==Zt?`color(${e} ${Je.r} ${Je.g} ${Je.b})`:`rgb(${Je.r*255|0},${Je.g*255|0},${Je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Yi);const n=Ws(Bt.h,Yi.h,t),i=Ws(Bt.s,Yi.s,t),s=Ws(Bt.l,Yi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=ka;let Xn;class Ga{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=ys("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Va{constructor(e=null){this.isSource=!0,this.uuid=Vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(js(i[o].image)):s.push(js(i[o]))}else s=js(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function js(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Ga.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yc=0;class At extends vi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Gt,i=Gt,s=It,o=Ui,a=Vt,u=Vn,h=At.DEFAULT_ANISOTROPY,f=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Vi(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Na)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Na;At.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],r=u[8],l=u[1],d=u[5],g=u[9],m=u[2],p=u[6],_=u[10];if(Math.abs(f-l)<.01&&Math.abs(r-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+l)<.1&&Math.abs(r+m)<.1&&Math.abs(g+p)<.1&&Math.abs(h+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,b=(d+1)/2,M=(_+1)/2,A=(f+l)/4,R=(r+m)/4,w=(g+p)/4;return x>b&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=R/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=w/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(r-m)*(r-m)+(l-f)*(l-f));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(r-m)/v,this.z=(l-f)/v,this.w=Math.acos((h+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hn extends vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wa extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bc extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Wi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let u=n[i+0],h=n[i+1],f=n[i+2],r=n[i+3];const l=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=r;return}if(a===1){e[t+0]=l,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(r!==m||u!==l||h!==d||f!==g){let p=1-a;const _=u*l+h*d+f*g+r*m,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),A=Math.atan2(M,_*v);p=Math.sin(p*A)/M,a=Math.sin(a*A)/M}const b=a*v;if(u=u*p+l*b,h=h*p+d*b,f=f*p+g*b,r=r*p+m*b,p===1-a){const M=1/Math.sqrt(u*u+h*h+f*f+r*r);u*=M,h*=M,f*=M,r*=M}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=r}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],u=n[i+1],h=n[i+2],f=n[i+3],r=s[o],l=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+f*r+u*d-h*l,e[t+1]=u*g+f*l+h*r-a*d,e[t+2]=h*g+f*d+a*l-u*r,e[t+3]=f*g-a*r-u*l-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,h=a(n/2),f=a(i/2),r=a(s/2),l=u(n/2),d=u(i/2),g=u(s/2);switch(o){case"XYZ":this._x=l*f*r+h*d*g,this._y=h*d*r-l*f*g,this._z=h*f*g+l*d*r,this._w=h*f*r-l*d*g;break;case"YXZ":this._x=l*f*r+h*d*g,this._y=h*d*r-l*f*g,this._z=h*f*g-l*d*r,this._w=h*f*r+l*d*g;break;case"ZXY":this._x=l*f*r-h*d*g,this._y=h*d*r+l*f*g,this._z=h*f*g+l*d*r,this._w=h*f*r-l*d*g;break;case"ZYX":this._x=l*f*r-h*d*g,this._y=h*d*r+l*f*g,this._z=h*f*g-l*d*r,this._w=h*f*r+l*d*g;break;case"YZX":this._x=l*f*r+h*d*g,this._y=h*d*r+l*f*g,this._z=h*f*g-l*d*r,this._w=h*f*r-l*d*g;break;case"XZY":this._x=l*f*r-h*d*g,this._y=h*d*r-l*f*g,this._z=h*f*g+l*d*r,this._w=h*f*r+l*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],u=t[9],h=t[2],f=t[6],r=t[10],l=n+a+r;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(f-u)*d,this._y=(s-h)*d,this._z=(o-i)*d}else if(n>a&&n>r){const d=2*Math.sqrt(1+n-a-r);this._w=(f-u)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+h)/d}else if(a>r){const d=2*Math.sqrt(1+a-n-r);this._w=(s-h)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(u+f)/d}else{const d=2*Math.sqrt(1+r-n-a);this._w=(o-i)/d,this._x=(s+h)/d,this._y=(u+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*a+i*h-s*u,this._y=i*f+o*u+s*a-n*h,this._z=s*f+o*h+n*u-i*a,this._w=o*f-n*a-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),f=Math.atan2(h,a),r=Math.sin((1-t)*f)/h,l=Math.sin(t*f)/h;return this._w=o*r+this._w*l,this._x=n*r+this._x*l,this._y=i*r+this._y*l,this._z=s*r+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(So.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(So.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,u=e.w,h=u*t+o*i-a*n,f=u*n+a*t-s*i,r=u*i+s*n-o*t,l=-s*t-o*n-a*i;return this.x=h*u+l*-s+f*-a-r*-o,this.y=f*u+l*-o+r*-s-h*-a,this.z=r*u+l*-a+h*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-s*a,this.y=s*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new O,So=new Wi;class Hi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,h=e.length;u<h;u+=3){const f=e[u],r=e[u+1],l=e[u+2];f<t&&(t=f),r<n&&(n=r),l<i&&(i=l),f>s&&(s=f),r>o&&(o=r),l>a&&(a=l)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,h=e.count;u<h;u++){const f=e.getX(u),r=e.getY(u),l=e.getZ(u);f<t&&(t=f),r<n&&(n=r),l<i&&(i=l),f>s&&(s=f),r>o&&(o=r),l>a&&(a=l)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox),$s.applyMatrix4(e.matrixWorld),this.union($s);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Zi.subVectors(this.max,Mi),jn.subVectors(e.a,Mi),Yn.subVectors(e.b,Mi),$n.subVectors(e.c,Mi),_n.subVectors(Yn,jn),vn.subVectors($n,Yn),Rn.subVectors(jn,$n);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Rn.z,Rn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Rn.z,0,-Rn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Rn.y,Rn.x,0];return!Zs(t,jn,Yn,$n,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,jn,Yn,$n,Zi))?!1:(Ki.crossVectors(_n,vn),t=[Ki.x,Ki.y,Ki.z],Zs(t,jn,Yn,$n,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new O,new O,new O,new O,new O,new O,new O,new O],Pn=new O,$s=new Hi,jn=new O,Yn=new O,$n=new O,_n=new O,vn=new O,Rn=new O,Mi=new O,Zi=new O,Ki=new O,Dn=new O;function Zs(c,e,t,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){Dn.fromArray(c,s);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),u=e.dot(Dn),h=t.dot(Dn),f=n.dot(Dn);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>a)return!1}return!0}const wc=new Hi,Si=new O,Ks=new O;class Ms{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Si,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Ks)),this.expandByPoint(Si.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new O,Js=new O,Ji=new O,xn=new O,Qs=new O,Qi=new O,er=new O;let Ha=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.direction).multiplyScalar(t).add(this.origin),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Js.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),a=xn.dot(this.direction),u=-xn.dot(Ji),h=xn.lengthSq(),f=Math.abs(1-o*o);let r,l,d,g;if(f>0)if(r=o*u-a,l=o*a-u,g=s*f,r>=0)if(l>=-g)if(l<=g){const m=1/f;r*=m,l*=m,d=r*(r+o*l+2*a)+l*(o*r+l+2*u)+h}else l=s,r=Math.max(0,-(o*l+a)),d=-r*r+l*(l+2*u)+h;else l=-s,r=Math.max(0,-(o*l+a)),d=-r*r+l*(l+2*u)+h;else l<=-g?(r=Math.max(0,-(-o*s+a)),l=r>0?-s:Math.min(Math.max(-s,-u),s),d=-r*r+l*(l+2*u)+h):l<=g?(r=0,l=Math.min(Math.max(-s,-u),s),d=l*(l+2*u)+h):(r=Math.max(0,-(o*s+a)),l=r>0?s:Math.min(Math.max(-s,-u),s),d=-r*r+l*(l+2*u)+h);else l=o>0?-s:s,r=Math.max(0,-(o*l+a)),d=-r*r+l*(l+2*u)+h;return n&&n.copy(this.direction).multiplyScalar(r).add(this.origin),i&&i.copy(Ji).multiplyScalar(l).add(Js),d}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,u;const h=1/this.direction.x,f=1/this.direction.y,r=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,i=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,i=(e.min.x-l.x)*h),f>=0?(s=(e.min.y-l.y)*f,o=(e.max.y-l.y)*f):(s=(e.max.y-l.y)*f,o=(e.min.y-l.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),r>=0?(a=(e.min.z-l.z)*r,u=(e.max.z-l.z)*r):(a=(e.max.z-l.z)*r,u=(e.min.z-l.z)*r),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,s){Qs.subVectors(t,e),Qi.subVectors(n,e),er.crossVectors(Qs,Qi);let o=this.direction.dot(er),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const u=a*this.direction.dot(Qi.crossVectors(xn,Qi));if(u<0)return null;const h=a*this.direction.dot(Qs.cross(xn));if(h<0||u+h>o)return null;const f=-a*xn.dot(er);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ze{constructor(){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,u,h,f,r,l,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=u,_[2]=h,_[6]=f,_[10]=r,_[14]=l,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),r=Math.sin(s);if(e.order==="XYZ"){const l=o*f,d=o*r,g=a*f,m=a*r;t[0]=u*f,t[4]=-u*r,t[8]=h,t[1]=d+g*h,t[5]=l-m*h,t[9]=-a*u,t[2]=m-l*h,t[6]=g+d*h,t[10]=o*u}else if(e.order==="YXZ"){const l=u*f,d=u*r,g=h*f,m=h*r;t[0]=l+m*a,t[4]=g*a-d,t[8]=o*h,t[1]=o*r,t[5]=o*f,t[9]=-a,t[2]=d*a-g,t[6]=m+l*a,t[10]=o*u}else if(e.order==="ZXY"){const l=u*f,d=u*r,g=h*f,m=h*r;t[0]=l-m*a,t[4]=-o*r,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*f,t[9]=m-l*a,t[2]=-o*h,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const l=o*f,d=o*r,g=a*f,m=a*r;t[0]=u*f,t[4]=g*h-d,t[8]=l*h+m,t[1]=u*r,t[5]=m*h+l,t[9]=d*h-g,t[2]=-h,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const l=o*u,d=o*h,g=a*u,m=a*h;t[0]=u*f,t[4]=m-l*r,t[8]=g*r+d,t[1]=r,t[5]=o*f,t[9]=-a*f,t[2]=-h*f,t[6]=d*r+g,t[10]=l-m*r}else if(e.order==="XZY"){const l=o*u,d=o*h,g=a*u,m=a*h;t[0]=u*f,t[4]=-r,t[8]=h*f,t[1]=l*r+m,t[5]=o*f,t[9]=d*r-g,t[2]=g*r-d,t[6]=a*f,t[10]=m*r+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,Sc)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),yn.crossVectors(n,wt),yn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),yn.crossVectors(n,wt)),yn.normalize(),es.crossVectors(wt,yn),i[0]=yn.x,i[4]=es.x,i[8]=wt.x,i[1]=yn.y,i[5]=es.y,i[9]=wt.y,i[2]=yn.z,i[6]=es.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],h=n[12],f=n[1],r=n[5],l=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],v=n[3],x=n[7],b=n[11],M=n[15],A=i[0],R=i[4],w=i[8],E=i[12],D=i[1],k=i[5],W=i[9],L=i[13],P=i[2],I=i[6],N=i[10],Z=i[14],U=i[3],j=i[7],J=i[11],re=i[15];return s[0]=o*A+a*D+u*P+h*U,s[4]=o*R+a*k+u*I+h*j,s[8]=o*w+a*W+u*N+h*J,s[12]=o*E+a*L+u*Z+h*re,s[1]=f*A+r*D+l*P+d*U,s[5]=f*R+r*k+l*I+d*j,s[9]=f*w+r*W+l*N+d*J,s[13]=f*E+r*L+l*Z+d*re,s[2]=g*A+m*D+p*P+_*U,s[6]=g*R+m*k+p*I+_*j,s[10]=g*w+m*W+p*N+_*J,s[14]=g*E+m*L+p*Z+_*re,s[3]=v*A+x*D+b*P+M*U,s[7]=v*R+x*k+b*I+M*j,s[11]=v*w+x*W+b*N+M*J,s[15]=v*E+x*L+b*Z+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],u=e[9],h=e[13],f=e[2],r=e[6],l=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*u*r-i*h*r-s*a*l+n*h*l+i*a*d-n*u*d)+m*(+t*u*d-t*h*l+s*o*l-i*o*d+i*h*f-s*u*f)+p*(+t*h*r-t*a*d-s*o*r+n*o*d+s*a*f-n*h*f)+_*(-i*a*f-t*u*r+t*a*l+i*o*r-n*o*l+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],h=e[7],f=e[8],r=e[9],l=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],v=r*p*h-m*l*h+m*u*d-a*p*d-r*u*_+a*l*_,x=g*l*h-f*p*h-g*u*d+o*p*d+f*u*_-o*l*_,b=f*m*h-g*r*h+g*a*d-o*m*d-f*a*_+o*r*_,M=g*r*u-f*m*u-g*a*l+o*m*l+f*a*p-o*r*p,A=t*v+n*x+i*b+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(m*l*s-r*p*s-m*i*d+n*p*d+r*i*_-n*l*_)*R,e[2]=(a*p*s-m*u*s+m*i*h-n*p*h-a*i*_+n*u*_)*R,e[3]=(r*u*s-a*l*s-r*i*h+n*l*h+a*i*d-n*u*d)*R,e[4]=x*R,e[5]=(f*p*s-g*l*s+g*i*d-t*p*d-f*i*_+t*l*_)*R,e[6]=(g*u*s-o*p*s-g*i*h+t*p*h+o*i*_-t*u*_)*R,e[7]=(o*l*s-f*u*s+f*i*h-t*l*h-o*i*d+t*u*d)*R,e[8]=b*R,e[9]=(g*r*s-f*m*s-g*n*d+t*m*d+f*n*_-t*r*_)*R,e[10]=(o*m*s-g*a*s+g*n*h-t*m*h-o*n*_+t*a*_)*R,e[11]=(f*a*s-o*r*s-f*n*h+t*r*h+o*n*d-t*a*d)*R,e[12]=M*R,e[13]=(f*m*i-g*r*i+g*n*l-t*m*l-f*n*p+t*r*p)*R,e[14]=(g*a*i-o*m*i-g*n*u+t*m*u+o*n*p-t*a*p)*R,e[15]=(o*r*i-f*a*i+f*n*u-t*r*u-o*n*l+t*a*l)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,h=s*o,f=s*a;return this.set(h*o+n,h*a-i*u,h*u+i*a,0,h*a+i*u,f*a+n,f*u-i*o,0,h*u-i*a,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,h=s+s,f=o+o,r=a+a,l=s*h,d=s*f,g=s*r,m=o*f,p=o*r,_=a*r,v=u*h,x=u*f,b=u*r,M=n.x,A=n.y,R=n.z;return i[0]=(1-(m+_))*M,i[1]=(d+b)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-b)*A,i[5]=(1-(l+_))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(p-v)*R,i[10]=(1-(l+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),a=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);const h=1/s,f=1/o,r=1/a;return Ot.elements[0]*=h,Ot.elements[1]*=h,Ot.elements[2]*=h,Ot.elements[4]*=f,Ot.elements[5]*=f,Ot.elements[6]*=f,Ot.elements[8]*=r,Ot.elements[9]*=r,Ot.elements[10]*=r,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),r=(n+i)/(n-i),l=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=h,a[9]=r,a[13]=0,a[2]=0,a[6]=0,a[10]=l,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,u=1/(t-e),h=1/(n-i),f=1/(o-s),r=(t+e)*u,l=(n+i)*h,d=(o+s)*f;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-r,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-l,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new O,Ot=new Ze,Mc=new O(0,0,0),Sc=new O(1,1,1),yn=new O,es=new O,wt=new O,Eo=new Ze,To=new Wi;class Ss{constructor(e=0,t=0,n=0,i=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],u=i[1],h=i[5],f=i[9],r=i[2],l=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-r,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-r,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-St(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-r,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ec=0;const Ao=new O,Kn=new Wi,on=new Ze,ts=new O,Ei=new O,Tc=new O,Ac=new Wi,Co=new O(1,0,0),Lo=new O(0,1,0),Po=new O(0,0,1),Cc={type:"added"},Ro={type:"removed"};class lt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new O,t=new Ss,n=new Wi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Et}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ei,ts,this.up):on.lookAt(ts,Ei,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(on),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ro)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ro)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Tc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Ac,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const r=u[h];s(e.shapes,r)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(s(e.materials,this.material[u]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),r=o(e.shapes),l=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),r.length>0&&(n.shapes=r),l.length>0&&(n.skeletons=l),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const u=[];for(const h in a){const f=a[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new O(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new O,an=new O,tr=new O,ln=new O,Jn=new O,Qn=new O,Do=new O,nr=new O,ir=new O,sr=new O;class pn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ut.subVectors(i,t),an.subVectors(n,t),tr.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(an),u=Ut.dot(tr),h=an.dot(an),f=an.dot(tr),r=o*h-a*a;if(r===0)return s.set(-2,-1,-1);const l=1/r,d=(h*u-a*f)*l,g=(o*f-a*u)*l;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,i,s,o,a,u){return this.getBarycoord(e,t,n,i,ln),u.set(0,0),u.addScaledVector(s,ln.x),u.addScaledVector(o,ln.y),u.addScaledVector(a,ln.z),u}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),an.subVectors(e,t),Ut.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ut.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return pn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Jn.subVectors(i,n),Qn.subVectors(s,n),nr.subVectors(e,n);const u=Jn.dot(nr),h=Qn.dot(nr);if(u<=0&&h<=0)return t.copy(n);ir.subVectors(e,i);const f=Jn.dot(ir),r=Qn.dot(ir);if(f>=0&&r<=f)return t.copy(i);const l=u*r-f*h;if(l<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(Jn,o);sr.subVectors(e,s);const d=Jn.dot(sr),g=Qn.dot(sr);if(g>=0&&d<=g)return t.copy(s);const m=d*h-u*g;if(m<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(Qn,a);const p=f*g-d*r;if(p<=0&&r-f>=0&&d-g>=0)return Do.subVectors(s,i),a=(r-f)/(r-f+(d-g)),t.copy(i).addScaledVector(Do,a);const _=1/(p+m+l);return o=m*_,a=l*_,t.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lc=0,xi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=di,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ia,this.blendDst=za,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Xa extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new O,ns=new Oe;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ja extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ya extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pc=0;const Dt=new Ze,rr=new lt,ei=new O,Mt=new Hi,Ti=new Hi,rt=new O;class Qt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ua(e)?Ya:ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return rr.lookAt(e),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(Mt.min,Ti.min),Mt.expandByPoint(rt),rt.addVectors(Mt.max,Ti.max),Mt.expandByPoint(rt)):(Mt.expandByPoint(Ti.min),Mt.expandByPoint(Ti.max))}Mt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)rt.fromBufferAttribute(a,h),u&&(ei.fromBufferAttribute(e,h),rt.add(ei)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,h=[],f=[];for(let D=0;D<a;D++)h[D]=new O,f[D]=new O;const r=new O,l=new O,d=new O,g=new Oe,m=new Oe,p=new Oe,_=new O,v=new O;function x(D,k,W){r.fromArray(i,D*3),l.fromArray(i,k*3),d.fromArray(i,W*3),g.fromArray(o,D*2),m.fromArray(o,k*2),p.fromArray(o,W*2),l.sub(r),d.sub(r),m.sub(g),p.sub(g);const L=1/(m.x*p.y-p.x*m.y);isFinite(L)&&(_.copy(l).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(L),v.copy(d).multiplyScalar(m.x).addScaledVector(l,-p.x).multiplyScalar(L),h[D].add(_),h[k].add(_),h[W].add(_),f[D].add(v),f[k].add(v),f[W].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,k=b.length;D<k;++D){const W=b[D],L=W.start,P=W.count;for(let I=L,N=L+P;I<N;I+=3)x(n[I+0],n[I+1],n[I+2])}const M=new O,A=new O,R=new O,w=new O;function E(D){R.fromArray(s,D*3),w.copy(R);const k=h[D];M.copy(k),M.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(w,k);const L=A.dot(f[D])<0?-1:1;u[D*4]=M.x,u[D*4+1]=M.y,u[D*4+2]=M.z,u[D*4+3]=L}for(let D=0,k=b.length;D<k;++D){const W=b[D],L=W.start,P=W.count;for(let I=L,N=L+P;I<N;I+=3)E(n[I+0]),E(n[I+1]),E(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,d=n.count;l<d;l++)n.setXYZ(l,0,0,0);const i=new O,s=new O,o=new O,a=new O,u=new O,h=new O,f=new O,r=new O;if(e)for(let l=0,d=e.count;l<d;l+=3){const g=e.getX(l+0),m=e.getX(l+1),p=e.getX(l+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),f.subVectors(o,s),r.subVectors(i,s),f.cross(r),a.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),h.fromBufferAttribute(n,p),a.add(f),u.add(f),h.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,u.x,u.y,u.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let l=0,d=t.count;l<d;l+=3)i.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),f.subVectors(o,s),r.subVectors(i,s),f.cross(r),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,u){const h=a.array,f=a.itemSize,r=a.normalized,l=new h.constructor(u.length*f);let d=0,g=0;for(let m=0,p=u.length;m<p;m++){a.isInterleavedBufferAttribute?d=u[m]*a.data.stride+a.offset:d=u[m]*f;for(let _=0;_<f;_++)l[g++]=h[d++]}return new _t(l,f,r)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],h=e(u,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const u=[],h=s[a];for(let f=0,r=h.length;f<r;f++){const l=h[f],d=e(l,n);u.push(d)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let r=0,l=h.length;r<l;r++){const d=h[r];f.push(d.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],r=s[h];for(let l=0,d=r.length;l<d;l++)f.push(r[l].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const r=o[h];this.addGroup(r.start,r.count,r.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new Ze,ti=new Ha,or=new Ms,Ai=new O,Ci=new O,Li=new O,ar=new O,is=new O,ss=new Oe,rs=new Oe,os=new Oe,lr=new O,as=new O;class Wt extends lt{constructor(e=new Qt,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=a[u],r=s[u];f!==0&&(ar.fromBufferAttribute(r,e),o?is.addScaledVector(ar,f):is.addScaledVector(ar.sub(t),f))}t.add(is)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),e.ray.intersectsSphere(or)===!1)||(Io.copy(s).invert(),ti.copy(e.ray).applyMatrix4(Io),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,h=n.attributes.uv,f=n.attributes.uv2,r=n.groups,l=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=r.length;d<g;d++){const m=r[d],p=i[m.materialIndex],_=Math.max(m.start,l.start),v=Math.min(a.count,Math.min(m.start+m.count,l.start+l.count));for(let x=_,b=v;x<b;x+=3){const M=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);o=ls(this,p,e,ti,h,f,M,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,l.start),g=Math.min(a.count,l.start+l.count);for(let m=d,p=g;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);o=ls(this,i,e,ti,h,f,_,v,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let d=0,g=r.length;d<g;d++){const m=r[d],p=i[m.materialIndex],_=Math.max(m.start,l.start),v=Math.min(u.count,Math.min(m.start+m.count,l.start+l.count));for(let x=_,b=v;x<b;x+=3){const M=x,A=x+1,R=x+2;o=ls(this,p,e,ti,h,f,M,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,l.start),g=Math.min(u.count,l.start+l.count);for(let m=d,p=g;m<p;m+=3){const _=m,v=m+1,x=m+2;o=ls(this,i,e,ti,h,f,_,v,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Rc(c,e,t,n,i,s,o,a){let u;if(e.side===Tt?u=n.intersectTriangle(o,s,i,!0,a):u=n.intersectTriangle(i,s,o,e.side===Sn,a),u===null)return null;as.copy(a),as.applyMatrix4(c.matrixWorld);const h=t.ray.origin.distanceTo(as);return h<t.near||h>t.far?null:{distance:h,point:as.clone(),object:c}}function ls(c,e,t,n,i,s,o,a,u){c.getVertexPosition(o,Ai),c.getVertexPosition(a,Ci),c.getVertexPosition(u,Li);const h=Rc(c,e,t,n,Ai,Ci,Li,lr);if(h){i&&(ss.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,a),os.fromBufferAttribute(i,u),h.uv=pn.getUV(lr,Ai,Ci,Li,ss,rs,os,new Oe)),s&&(ss.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,a),os.fromBufferAttribute(s,u),h.uv2=pn.getUV(lr,Ai,Ci,Li,ss,rs,os,new Oe));const f={a:o,b:a,c:u,normal:new O,materialIndex:0};pn.getNormal(Ai,Ci,Li,f.normal),h.face=f}return h}class yi extends Qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],r=[];let l=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(r,2));function g(m,p,_,v,x,b,M,A,R,w,E){const D=b/R,k=M/w,W=b/2,L=M/2,P=A/2,I=R+1,N=w+1;let Z=0,U=0;const j=new O;for(let J=0;J<N;J++){const re=J*k-L;for(let F=0;F<I;F++){const $=F*D-W;j[m]=$*v,j[p]=re*x,j[_]=P,h.push(j.x,j.y,j.z),j[m]=0,j[p]=0,j[_]=A>0?1:-1,f.push(j.x,j.y,j.z),r.push(F/R),r.push(1-J/w),Z+=1}}for(let J=0;J<w;J++)for(let re=0;re<R;re++){const F=l+re+I*J,$=l+re+I*(J+1),te=l+(re+1)+I*(J+1),ie=l+(re+1)+I*J;u.push(F,$,ie),u.push($,te,ie),U+=6}a.addGroup(d,U,E),d+=U,l+=Z}}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(c){const e={};for(let t=0;t<c.length;t++){const n=_i(c[t]);for(const i in n)e[i]=n[i]}return e}function Dc(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function $a(c){return c.getRenderTarget()===null&&c.outputEncoding===Ge?Zt:Gi}const Ic={clone:_i,merge:mt};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Za extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Nc extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new zt(ni,ii,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new zt(ni,ii,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new zt(ni,ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zt(ni,ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new zt(ni,ii,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const h=new zt(ni,ii,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,u,h]=this.children,f=e.getRenderTarget(),r=e.toneMapping,l=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(f),e.toneMapping=r,e.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class Ka extends At{constructor(e,t,n,i,s,o,a,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,s,o,a,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yi(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:wn});s.uniforms.tEquirect.value=t;const o=new Wt(i,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=It),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const cr=new O,Oc=new O,Uc=new Et;let zn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cr.subVectors(n,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uc.getNormalMatrix(e),i=this.coplanarPoint(cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const si=new Ms,cs=new O;class Ir{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,o=new zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],u=n[4],h=n[5],f=n[6],r=n[7],l=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,r-u,m-l,x-p).normalize(),t[1].setComponents(a+i,r+u,m+l,x+p).normalize(),t[2].setComponents(a+s,r+h,m+d,x+_).normalize(),t[3].setComponents(a-s,r-h,m-d,x-_).normalize(),t[4].setComponents(a-o,r-f,m-g,x-v).normalize(),t[5].setComponents(a+o,r+f,m+g,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cs.x=i.normal.x>0?e.max.x:e.min.x,cs.y=i.normal.y>0?e.max.y:e.min.y,cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ja(){let c=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function kc(c,e){const t=e.isWebGL2,n=new WeakMap;function i(h,f){const r=h.array,l=h.usage,d=c.createBuffer();c.bindBuffer(f,d),c.bufferData(f,r,l),h.onUploadCallback();let g;if(r instanceof Float32Array)g=5126;else if(r instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(r instanceof Int16Array)g=5122;else if(r instanceof Uint32Array)g=5125;else if(r instanceof Int32Array)g=5124;else if(r instanceof Int8Array)g=5120;else if(r instanceof Uint8Array)g=5121;else if(r instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);return{buffer:d,type:g,bytesPerElement:r.BYTES_PER_ELEMENT,version:h.version}}function s(h,f,r){const l=f.array,d=f.updateRange;c.bindBuffer(r,h),d.count===-1?c.bufferSubData(r,0,l):(t?c.bufferSubData(r,d.offset*l.BYTES_PER_ELEMENT,l,d.offset,d.count):c.bufferSubData(r,d.offset*l.BYTES_PER_ELEMENT,l.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);f&&(c.deleteBuffer(f.buffer),n.delete(h))}function u(h,f){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const r=n.get(h);r===void 0?n.set(h,i(h,f)):r.version<h.version&&(s(r.buffer,h,f),r.version=h.version)}return{get:o,remove:a,update:u}}class qi extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),h=a+1,f=u+1,r=e/a,l=t/u,d=[],g=[],m=[],p=[];for(let _=0;_<f;_++){const v=_*l-o;for(let x=0;x<h;x++){const b=x*r-s;g.push(b,-v,0),m.push(0,0,1),p.push(x/a),p.push(1-_/u)}}for(let _=0;_<u;_++)for(let v=0;v<a;v++){const x=v+h*_,b=v+h*(_+1),M=v+1+h*(_+1),A=v+1+h*_;d.push(x,b,A),d.push(b,M,A)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(m,3)),this.setAttribute("uv",new qt(p,2))}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jc="vec3 transformed = vec3( position );",Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Zc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,th=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,oh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ah=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ch=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ah=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ph=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ih=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Fh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ad=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Gc,alphamap_pars_fragment:Vc,alphatest_fragment:Wc,alphatest_pars_fragment:Hc,aomap_fragment:qc,aomap_pars_fragment:Xc,begin_vertex:jc,beginnormal_vertex:Yc,bsdfs:$c,iridescence_fragment:Zc,bumpmap_pars_fragment:Kc,clipping_planes_fragment:Jc,clipping_planes_pars_fragment:Qc,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:su,color_vertex:ru,common:ou,cube_uv_reflection_fragment:au,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:uu,emissivemap_fragment:hu,emissivemap_pars_fragment:du,encodings_fragment:fu,encodings_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:vu,envmap_physical_pars_fragment:Pu,envmap_vertex:xu,fog_vertex:yu,fog_pars_vertex:bu,fog_fragment:wu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_fragment:Eu,lightmap_pars_fragment:Tu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Cu,lights_pars_begin:Lu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Du,lights_phong_fragment:Iu,lights_phong_pars_fragment:zu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Bu,lights_fragment_maps:Ou,lights_fragment_end:Uu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Wu,map_fragment:Hu,map_pars_fragment:qu,map_particle_fragment:Xu,map_particle_pars_fragment:ju,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:$u,morphcolor_vertex:Zu,morphnormal_vertex:Ku,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:eh,normal_fragment_maps:th,normal_pars_fragment:nh,normal_pars_vertex:ih,normal_vertex:sh,normalmap_pars_fragment:rh,clearcoat_normal_fragment_begin:oh,clearcoat_normal_fragment_maps:ah,clearcoat_pars_fragment:lh,iridescence_pars_fragment:ch,output_fragment:uh,packing:hh,premultiplied_alpha_fragment:dh,project_vertex:fh,dithering_fragment:ph,dithering_pars_fragment:mh,roughnessmap_fragment:gh,roughnessmap_pars_fragment:_h,shadowmap_pars_fragment:vh,shadowmap_pars_vertex:xh,shadowmap_vertex:yh,shadowmask_pars_fragment:bh,skinbase_vertex:wh,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:Eh,specularmap_fragment:Th,specularmap_pars_fragment:Ah,tonemapping_fragment:Ch,tonemapping_pars_fragment:Lh,transmission_fragment:Ph,transmission_pars_fragment:Rh,uv_pars_fragment:Dh,uv_pars_vertex:Ih,uv_vertex:zh,uv2_pars_fragment:Fh,uv2_pars_vertex:Nh,uv2_vertex:Bh,worldpos_vertex:Oh,background_vert:Uh,background_frag:kh,backgroundCube_vert:Gh,backgroundCube_frag:Vh,cube_vert:Wh,cube_frag:Hh,depth_vert:qh,depth_frag:Xh,distanceRGBA_vert:jh,distanceRGBA_frag:Yh,equirect_vert:$h,equirect_frag:Zh,linedashed_vert:Kh,linedashed_frag:Jh,meshbasic_vert:Qh,meshbasic_frag:ed,meshlambert_vert:td,meshlambert_frag:nd,meshmatcap_vert:id,meshmatcap_frag:sd,meshnormal_vert:rd,meshnormal_frag:od,meshphong_vert:ad,meshphong_frag:ld,meshphysical_vert:cd,meshphysical_frag:ud,meshtoon_vert:hd,meshtoon_frag:dd,points_vert:fd,points_frag:pd,shadow_vert:md,shadow_frag:gd,sprite_vert:_d,sprite_frag:vd},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},Kt={basic:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:mt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:mt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:mt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:mt([se.common,se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:mt([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Kt.physical={uniforms:mt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const us={r:0,b:0,g:0};function xd(c,e,t,n,i,s,o){const a=new Be(0);let u=s===!0?0:1,h,f,r=null,l=0,d=null;function g(p,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=c.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,u):x&&x.isColor&&(m(x,1),v=!0),(c.autoClear||v)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ws)?(f===void 0&&(f=new Wt(new yi(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:_i(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=x.encoding!==Ge,(r!==x||l!==x.version||d!==c.toneMapping)&&(f.material.needsUpdate=!0,r=x,l=x.version,d=c.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Wt(new qi(2,2),new qn({name:"BackgroundMaterial",uniforms:_i(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==Ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(r!==x||l!==x.version||d!==c.toneMapping)&&(h.material.needsUpdate=!0,r=x,l=x.version,d=c.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function m(p,_){p.getRGB(us,$a(c)),n.buffers.color.setClear(us.r,us.g,us.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),u=_,m(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,m(a,u)},render:g}}function yd(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=p(null);let h=u,f=!1;function r(P,I,N,Z,U){let j=!1;if(o){const J=m(Z,N,I);h!==J&&(h=J,d(h.object)),j=_(P,Z,N,U),j&&v(P,Z,N,U)}else{const J=I.wireframe===!0;(h.geometry!==Z.id||h.program!==N.id||h.wireframe!==J)&&(h.geometry=Z.id,h.program=N.id,h.wireframe=J,j=!0)}U!==null&&t.update(U,34963),(j||f)&&(f=!1,w(P,I,N,Z),U!==null&&c.bindBuffer(34963,t.get(U).buffer))}function l(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?c.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?c.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,I,N){const Z=N.wireframe===!0;let U=a[P.id];U===void 0&&(U={},a[P.id]=U);let j=U[I.id];j===void 0&&(j={},U[I.id]=j);let J=j[Z];return J===void 0&&(J=p(l()),j[Z]=J),J}function p(P){const I=[],N=[],Z=[];for(let U=0;U<i;U++)I[U]=0,N[U]=0,Z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:Z,object:P,attributes:{},index:null}}function _(P,I,N,Z){const U=h.attributes,j=I.attributes;let J=0;const re=N.getAttributes();for(const F in re)if(re[F].location>=0){const te=U[F];let ie=j[F];if(ie===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;J++}return h.attributesNum!==J||h.index!==Z}function v(P,I,N,Z){const U={},j=I.attributes;let J=0;const re=N.getAttributes();for(const F in re)if(re[F].location>=0){let te=j[F];te===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),U[F]=ie,J++}h.attributes=U,h.attributesNum=J,h.index=Z}function x(){const P=h.newAttributes;for(let I=0,N=P.length;I<N;I++)P[I]=0}function b(P){M(P,0)}function M(P,I){const N=h.newAttributes,Z=h.enabledAttributes,U=h.attributeDivisors;N[P]=1,Z[P]===0&&(c.enableVertexAttribArray(P),Z[P]=1),U[P]!==I&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),U[P]=I)}function A(){const P=h.newAttributes,I=h.enabledAttributes;for(let N=0,Z=I.length;N<Z;N++)I[N]!==P[N]&&(c.disableVertexAttribArray(N),I[N]=0)}function R(P,I,N,Z,U,j){n.isWebGL2===!0&&(N===5124||N===5125)?c.vertexAttribIPointer(P,I,N,U,j):c.vertexAttribPointer(P,I,N,Z,U,j)}function w(P,I,N,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=Z.attributes,j=N.getAttributes(),J=I.defaultAttributeValues;for(const re in j){const F=j[re];if(F.location>=0){let $=U[re];if($===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const te=$.normalized,ie=$.itemSize,V=t.get($);if(V===void 0)continue;const we=V.buffer,pe=V.type,me=V.bytesPerElement;if($.isInterleavedBufferAttribute){const ue=$.data,Ue=ue.stride,Ee=$.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)M(F.location+be,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<F.locationSize;be++)b(F.location+be);c.bindBuffer(34962,we);for(let be=0;be<F.locationSize;be++)R(F.location+be,ie/F.locationSize,pe,te,Ue*me,(Ee+ie/F.locationSize*be)*me)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)M(F.location+ue,$.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<F.locationSize;ue++)b(F.location+ue);c.bindBuffer(34962,we);for(let ue=0;ue<F.locationSize;ue++)R(F.location+ue,ie/F.locationSize,pe,te,ie*me,ie/F.locationSize*ue*me)}}else if(J!==void 0){const te=J[re];if(te!==void 0)switch(te.length){case 2:c.vertexAttrib2fv(F.location,te);break;case 3:c.vertexAttrib3fv(F.location,te);break;case 4:c.vertexAttrib4fv(F.location,te);break;default:c.vertexAttrib1fv(F.location,te)}}}}A()}function E(){W();for(const P in a){const I=a[P];for(const N in I){const Z=I[N];for(const U in Z)g(Z[U].object),delete Z[U];delete I[N]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const N in I){const Z=I[N];for(const U in Z)g(Z[U].object),delete Z[U];delete I[N]}delete a[P.id]}function k(P){for(const I in a){const N=a[I];if(N[P.id]===void 0)continue;const Z=N[P.id];for(const U in Z)g(Z[U].object),delete Z[U];delete N[P.id]}}function W(){L(),f=!0,h!==u&&(h=u,d(h.object))}function L(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:r,reset:W,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function bd(c,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,f){c.drawArrays(s,h,f),t.update(f,s,1)}function u(h,f,r){if(r===0)return;let l,d;if(i)l=c,d="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[d](s,h,f,r),t.update(f,s,r)}this.setMode=o,this.render=a,this.renderInstances=u}function wd(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const h=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,r=c.getParameter(34930),l=c.getParameter(35660),d=c.getParameter(3379),g=c.getParameter(34076),m=c.getParameter(34921),p=c.getParameter(36347),_=c.getParameter(36348),v=c.getParameter(36349),x=l>0,b=o||e.has("OES_texture_float"),M=x&&b,A=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:r,maxVertexTextures:l,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:A}}function Md(c){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zn,a=new Et,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(r,l){const d=r.length!==0||l||n!==0||i;return i=l,n=r.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(r,l){t=f(r,l,0)},this.setState=function(r,l,d){const g=r.clippingPlanes,m=r.clipIntersection,p=r.clipShadows,_=c.get(r);if(!i||g===null||g.length===0||s&&!p)s?f(null):h();else{const v=s?0:n,x=v*4;let b=_.clippingState||null;u.value=b,b=f(g,l,x,d);for(let M=0;M!==x;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(r,l,d,g){const m=r!==null?r.length:0;let p=null;if(m!==0){if(p=u.value,g!==!0||p===null){const _=d+m*4,v=l.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,b=d;x!==m;++x,b+=4)o.copy(r[x]).applyMatrix4(v,a),o.normal.toArray(p,b),p[b+3]=o.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Sd(c){let e=new WeakMap;function t(o,a){return a===Sr?o.mapping=pi:a===Er&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sr||a===Er)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Bc(u.height/2);return h.fromEquirectangularTexture(c,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qa extends Za{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,zo=[.125,.215,.35,.446,.526,.582],Nn=20,ur=new Qa,Fo=new Be;let hr=null;const Fn=(1+Math.sqrt(5))/2,ri=1/Fn,No=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Fn,ri),new O(0,Fn,-ri),new O(ri,0,Fn),new O(-ri,0,Fn),new O(Fn,ri,0),new O(-Fn,ri,0)];class Bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:ki,format:Vt,encoding:Wn,depthBuffer:!1},i=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(s)),this._blurMaterial=Td(s,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,r=f.autoClear,l=f.toneMapping;f.getClearColor(Fo),f.toneMapping=gn,f.autoClear=!1;const d=new Xa({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new Wt(new yi,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Fo),m=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,u[_],0),a.lookAt(h[_],0,0)):v===1?(a.up.set(0,0,u[_]),a.lookAt(0,h[_],0)):(a.up.set(0,u[_],0),a.lookAt(0,0,h[_]));const x=this._cubeSize;hs(i,v*x,_>2?x:0,x,x),f.setRenderTarget(i),m&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=l,f.autoClear=r,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;hs(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=No[(i-1)%No.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,r=new Wt(this._lodPlanes[i],h),l=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nn-1),m=s/g,p=isFinite(s)?1+Math.floor(f*m):Nn;p>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);const _=[];let v=0;for(let R=0;R<Nn;++R){const w=R/m,E=Math.exp(-w*w/2);_.push(E),R===0?v+=E:R<p&&(v+=2*E)}for(let R=0;R<_.length;R++)_[R]=_[R]/v;l.envMap.value=e.texture,l.samples.value=p,l.weights.value=_,l.latitudinal.value=o==="latitudinal",a&&(l.poleAxis.value=a);const{_lodMax:x}=this;l.dTheta.value=g,l.mipInt.value=x-n;const b=this._sizeLods[i],M=3*b*(i>x-hi?i-x+hi:0),A=4*(this._cubeSize-b);hs(t,M,A,3*b,2*b),u.setRenderTarget(t),u.render(r,ur)}}function Ed(c){const e=[],t=[],n=[];let i=c;const s=c-hi+1+zo.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>c-hi?u=zo[o-c+hi-1]:o===0&&(u=0),n.push(u);const h=1/(a-2),f=-h,r=1+h,l=[f,f,r,f,r,r,f,f,r,r,f,r],d=6,g=6,m=3,p=2,_=1,v=new Float32Array(m*g*d),x=new Float32Array(p*g*d),b=new Float32Array(_*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,w=A>2?0:-1,E=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];v.set(E,m*g*A),x.set(l,p*g*A);const D=[A,A,A,A,A,A];b.set(D,_*g*A)}const M=new Qt;M.setAttribute("position",new _t(v,m)),M.setAttribute("uv",new _t(x,p)),M.setAttribute("faceIndex",new _t(b,_)),e.push(M),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(c,e,t){const n=new Hn(c,e,t);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function Td(c,e,t){const n=new Float32Array(Nn),i=new O(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Uo(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ko(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ad(c){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,h=u===Sr||u===Er,f=u===pi||u===mi;if(h||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let r=e.get(a);return t===null&&(t=new Bo(c)),r=h?t.fromEquirectangular(a,r):t.fromCubemap(a,r),e.set(a,r),r.texture}else{if(e.has(a))return e.get(a).texture;{const r=a.image;if(h&&r&&r.height>0||f&&r&&i(r)){t===null&&(t=new Bo(c));const l=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,l),a.addEventListener("dispose",s),l.texture}else return null}}}return a}function i(a){let u=0;const h=6;for(let f=0;f<h;f++)a[f]!==void 0&&u++;return u===h}function s(a){const u=a.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cd(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ld(c,e,t,n){const i={},s=new WeakMap;function o(r){const l=r.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);l.removeEventListener("dispose",o),delete i[l.id];const d=s.get(l);d&&(e.remove(d),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function a(r,l){return i[l.id]===!0||(l.addEventListener("dispose",o),i[l.id]=!0,t.memory.geometries++),l}function u(r){const l=r.attributes;for(const g in l)e.update(l[g],34962);const d=r.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function h(r){const l=[],d=r.index,g=r.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let x=0,b=v.length;x<b;x+=3){const M=v[x+0],A=v[x+1],R=v[x+2];l.push(M,A,A,R,R,M)}}else{const v=g.array;m=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const M=x+0,A=x+1,R=x+2;l.push(M,A,A,R,R,M)}}const p=new(Ua(l)?Ya:ja)(l,1);p.version=m;const _=s.get(r);_&&e.remove(_),s.set(r,p)}function f(r){const l=s.get(r);if(l){const d=r.index;d!==null&&l.version<d.version&&h(r)}else h(r);return s.get(r)}return{get:a,update:u,getWireframeAttribute:f}}function Pd(c,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}let a,u;function h(l){a=l.type,u=l.bytesPerElement}function f(l,d){c.drawElements(s,d,a,l*u),t.update(d,s,1)}function r(l,d,g){if(g===0)return;let m,p;if(i)m=c,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,l*u,g),t.update(d,s,g)}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=r}function Rd(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dd(c,e){return c[0]-e[0]}function Id(c,e){return Math.abs(e[1])-Math.abs(c[1])}function zd(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function u(h,f,r,l){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==p){let N=function(){P.dispose(),s.delete(f),f.removeEventListener("dispose",N)};var g=N;_!==void 0&&_.texture.dispose();const b=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],E=f.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),A===!0&&(D=3);let k=f.attributes.position.count*D,W=1;k>e.maxTextureSize&&(W=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const L=new Float32Array(k*W*4*p),P=new Wa(L,k,W,p);P.type=Un,P.needsUpdate=!0;const I=D*4;for(let Z=0;Z<p;Z++){const U=R[Z],j=w[Z],J=E[Z],re=k*W*4*Z;for(let F=0;F<U.count;F++){const $=F*I;b===!0&&(o.fromBufferAttribute(U,F),L[re+$+0]=o.x,L[re+$+1]=o.y,L[re+$+2]=o.z,L[re+$+3]=0),M===!0&&(o.fromBufferAttribute(j,F),L[re+$+4]=o.x,L[re+$+5]=o.y,L[re+$+6]=o.z,L[re+$+7]=0),A===!0&&(o.fromBufferAttribute(J,F),L[re+$+8]=o.x,L[re+$+9]=o.y,L[re+$+10]=o.z,L[re+$+11]=J.itemSize===4?o.w:1)}}_={count:p,texture:P,size:new Oe(k,W)},s.set(f,_),f.addEventListener("dispose",N)}let v=0;for(let b=0;b<d.length;b++)v+=d[b];const x=f.morphTargetsRelative?1:1-v;l.getUniforms().setValue(c,"morphTargetBaseInfluence",x),l.getUniforms().setValue(c,"morphTargetInfluences",d),l.getUniforms().setValue(c,"morphTargetsTexture",_.texture,t),l.getUniforms().setValue(c,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[f.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];n[f.id]=p}for(let M=0;M<m;M++){const A=p[M];A[0]=M,A[1]=d[M]}p.sort(Id);for(let M=0;M<8;M++)M<m&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Dd);const _=f.morphAttributes.position,v=f.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const A=a[M],R=A[0],w=A[1];R!==Number.MAX_SAFE_INTEGER&&w?(_&&f.getAttribute("morphTarget"+M)!==_[R]&&f.setAttribute("morphTarget"+M,_[R]),v&&f.getAttribute("morphNormal"+M)!==v[R]&&f.setAttribute("morphNormal"+M,v[R]),i[M]=w,x+=w):(_&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),v&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),i[M]=0)}const b=f.morphTargetsRelative?1:1-x;l.getUniforms().setValue(c,"morphTargetBaseInfluence",b),l.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:u}}function Fd(c,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,r=e.get(u,f);return i.get(r)!==h&&(e.update(r),i.set(r,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),r}function o(){i=new WeakMap}function a(u){const h=u.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const el=new At,tl=new Wa,nl=new bc,il=new Ka,Go=[],Vo=[],Wo=new Float32Array(16),Ho=new Float32Array(9),qo=new Float32Array(4);function bi(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=Go[i];if(s===void 0&&(s=new Float32Array(i),Go[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,c[o].toArray(s,a)}return s}function et(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function tt(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function Es(c,e){let t=Vo[e];t===void 0&&(t=new Int32Array(e),Vo[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function Nd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Bd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;c.uniform2fv(this.addr,e),tt(t,e)}}function Od(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;c.uniform3fv(this.addr,e),tt(t,e)}}function Ud(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;c.uniform4fv(this.addr,e),tt(t,e)}}function kd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;qo.set(n),c.uniformMatrix2fv(this.addr,!1,qo),tt(t,n)}}function Gd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Ho.set(n),c.uniformMatrix3fv(this.addr,!1,Ho),tt(t,n)}}function Vd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Wo.set(n),c.uniformMatrix4fv(this.addr,!1,Wo),tt(t,n)}}function Wd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Hd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;c.uniform2iv(this.addr,e),tt(t,e)}}function qd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;c.uniform3iv(this.addr,e),tt(t,e)}}function Xd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;c.uniform4iv(this.addr,e),tt(t,e)}}function jd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Yd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;c.uniform2uiv(this.addr,e),tt(t,e)}}function $d(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;c.uniform3uiv(this.addr,e),tt(t,e)}}function Zd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;c.uniform4uiv(this.addr,e),tt(t,e)}}function Kd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||el,i)}function Jd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nl,i)}function Qd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||il,i)}function ef(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tl,i)}function tf(c){switch(c){case 5126:return Nd;case 35664:return Bd;case 35665:return Od;case 35666:return Ud;case 35674:return kd;case 35675:return Gd;case 35676:return Vd;case 5124:case 35670:return Wd;case 35667:case 35671:return Hd;case 35668:case 35672:return qd;case 35669:case 35673:return Xd;case 5125:return jd;case 36294:return Yd;case 36295:return $d;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return ef}}function nf(c,e){c.uniform1fv(this.addr,e)}function sf(c,e){const t=bi(e,this.size,2);c.uniform2fv(this.addr,t)}function rf(c,e){const t=bi(e,this.size,3);c.uniform3fv(this.addr,t)}function of(c,e){const t=bi(e,this.size,4);c.uniform4fv(this.addr,t)}function af(c,e){const t=bi(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function lf(c,e){const t=bi(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function cf(c,e){const t=bi(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function uf(c,e){c.uniform1iv(this.addr,e)}function hf(c,e){c.uniform2iv(this.addr,e)}function df(c,e){c.uniform3iv(this.addr,e)}function ff(c,e){c.uniform4iv(this.addr,e)}function pf(c,e){c.uniform1uiv(this.addr,e)}function mf(c,e){c.uniform2uiv(this.addr,e)}function gf(c,e){c.uniform3uiv(this.addr,e)}function _f(c,e){c.uniform4uiv(this.addr,e)}function vf(c,e,t){const n=this.cache,i=e.length,s=Es(t,i);et(n,s)||(c.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||el,s[o])}function xf(c,e,t){const n=this.cache,i=e.length,s=Es(t,i);et(n,s)||(c.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nl,s[o])}function yf(c,e,t){const n=this.cache,i=e.length,s=Es(t,i);et(n,s)||(c.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||il,s[o])}function bf(c,e,t){const n=this.cache,i=e.length,s=Es(t,i);et(n,s)||(c.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tl,s[o])}function wf(c){switch(c){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return of;case 35674:return af;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return uf;case 35667:case 35671:return hf;case 35668:case 35672:return df;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return bf}}class Mf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tf(t.type)}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Xo(c,e){c.seq.push(e),c.map[e.id]=e}function Tf(c,e,t){const n=c.name,i=n.length;for(dr.lastIndex=0;;){const s=dr.exec(n),o=dr.lastIndex;let a=s[1];const u=s[2]==="]",h=s[3];if(u&&(a=a|0),h===void 0||h==="["&&o+2===i){Xo(t,h===void 0?new Mf(a,c,e):new Sf(a,c,e));break}else{let r=t.map[a];r===void 0&&(r=new Ef(a),Xo(t,r)),t=r}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function jo(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let Af=0;function Cf(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Lf(c){switch(c){case Wn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Yo(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cf(c.getShaderSource(e),o)}else return i}function Pf(c,e){const t=Lf(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rf(c,e){let t;switch(e){case Yl:t="Linear";break;case $l:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Df(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function If(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zf(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:c.getAttribLocation(e,o),locationSize:a}}return t}function Ni(c){return c!==""}function $o(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(c){return c.replace(Ff,Nf)}function Nf(c,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pr(t)}const Bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(c){return c.replace(Bf,Of)}function Of(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jo(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uf(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function kf(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gf(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vf(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Fa:e="ENVMAP_BLENDING_MULTIPLY";break;case Xl:e="ENVMAP_BLENDING_MIX";break;case jl:e="ENVMAP_BLENDING_ADD";break}return e}function Wf(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hf(c,e,t,n){const i=c.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=Uf(t),h=kf(t),f=Gf(t),r=Vf(t),l=Wf(t),d=t.isWebGL2?"":Df(t),g=If(s),m=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ni).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Ni).join(`
`),_.length>0&&(_+=`
`)):(p=[Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),_=[d,Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+r:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Te.tonemapping_pars_fragment:"",t.toneMapping!==gn?Rf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Pf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),o=Pr(o),o=$o(o,t),o=Zo(o,t),a=Pr(a),a=$o(a,t),a=Zo(a,t),o=Ko(o),a=Ko(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+p+o,b=v+_+a,M=jo(i,35633,x),A=jo(i,35632,b);if(i.attachShader(m,M),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),c.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(A).trim();let W=!0,L=!0;if(i.getProgramParameter(m,35714)===!1){W=!1;const P=Yo(i,M,"vertex"),I=Yo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+P+`
`+I)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||k==="")&&(L=!1);L&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new xs(i,m)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=zf(i,m)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}let qf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jf(e),t.set(e,n)),n}}class jf{constructor(e){this.id=qf++,this.code=e,this.usedTimes=0}}function Yf(c,e,t,n,i,s,o){const a=new qa,u=new Xf,h=[],f=i.isWebGL2,r=i.logarithmicDepthBuffer,l=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w,E,D,k,W){const L=k.fog,P=W.geometry,I=w.isMeshStandardMaterial?k.environment:null,N=(w.isMeshStandardMaterial?t:e).get(w.envMap||I),Z=N&&N.mapping===ws?N.image.height:null,U=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=j!==void 0?j.length:0;let re=0;P.morphAttributes.position!==void 0&&(re=1),P.morphAttributes.normal!==void 0&&(re=2),P.morphAttributes.color!==void 0&&(re=3);let F,$,te,ie;if(U){const Ue=Kt[U];F=Ue.vertexShader,$=Ue.fragmentShader}else F=w.vertexShader,$=w.fragmentShader,u.update(w),te=u.getVertexShaderID(w),ie=u.getFragmentShaderID(w);const V=c.getRenderTarget(),we=w.alphaTest>0,pe=w.clearcoat>0,me=w.iridescence>0;return{isWebGL2:f,shaderID:U,shaderName:w.type,vertexShader:F,fragmentShader:$,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:l,outputEncoding:V===null?c.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Wn,map:!!w.map,matcap:!!w.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:Z,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===_c,tangentSpaceNormalMap:w.normalMapType===Oa,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Ge,clearcoat:pe,clearcoatMap:pe&&!!w.clearcoatMap,clearcoatRoughnessMap:pe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!w.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!w.iridescenceMap,iridescenceThicknessMap:me&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===di,alphaMap:!!w.alphaMap,alphaTest:we,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!P.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:r,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&D.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:gn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mn,flipSided:w.side===Tt,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(E,w),v(E,w),E.push(c.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.combine),w.push(E.vertexUvs),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function v(w,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),w.push(a.mask)}function x(w){const E=g[w.type];let D;if(E){const k=Kt[E];D=Ic.clone(k.uniforms)}else D=w.uniforms;return D}function b(w,E){let D;for(let k=0,W=h.length;k<W;k++){const L=h[k];if(L.cacheKey===E){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Hf(c,E,w,s),h.push(D)),D}function M(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function A(w){u.remove(w)}function R(){u.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:R}}function $f(){let c=new WeakMap;function e(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function t(s){c.delete(s)}function n(s,o,a){c.get(s)[o]=a}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zf(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function Qo(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function ea(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(r,l,d,g,m,p){let _=c[e];return _===void 0?(_={id:r.id,object:r,geometry:l,material:d,groupOrder:g,renderOrder:r.renderOrder,z:m,group:p},c[e]=_):(_.id=r.id,_.object=r,_.geometry=l,_.material=d,_.groupOrder=g,_.renderOrder=r.renderOrder,_.z=m,_.group=p),e++,_}function a(r,l,d,g,m,p){const _=o(r,l,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function u(r,l,d,g,m,p){const _=o(r,l,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function h(r,l){t.length>1&&t.sort(r||Zf),n.length>1&&n.sort(l||Qo),i.length>1&&i.sort(l||Qo)}function f(){for(let r=e,l=c.length;r<l;r++){const d=c[r];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:u,finish:f,sort:h}}function Kf(){let c=new WeakMap;function e(n,i){const s=c.get(n);let o;return s===void 0?(o=new ea,c.set(n,[o])):i>=s.length?(o=new ea,s.push(o)):o=s[i],o}function t(){c=new WeakMap}return{get:e,dispose:t}}function Jf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Be};break;case"SpotLight":t={position:new O,direction:new O,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new O,halfWidth:new O,halfHeight:new O};break}return c[e.id]=t,t}}}function Qf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let ep=0;function tp(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function np(c,e){const t=new Jf,n=Qf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new O);const s=new O,o=new Ze,a=new Ze;function u(f,r){let l=0,d=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,p=0,_=0,v=0,x=0,b=0,M=0,A=0,R=0,w=0;f.sort(tp);const E=r!==!0?Math.PI:1;for(let k=0,W=f.length;k<W;k++){const L=f[k],P=L.color,I=L.intensity,N=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=P.r*I*E,d+=P.g*I*E,g+=P.b*I*E;else if(L.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],I);else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const j=L.shadow,J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=U,m++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(P).multiplyScalar(I*E),U.distance=N,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[_]=U;const j=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,L.castShadow){const J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,A++}_++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(P).multiplyScalar(I),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=U,v++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*E),U.distance=L.distance,U.decay=L.decay,L.castShadow){const j=L.shadow,J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=L.shadow.matrix,M++}i.point[p]=U,p++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(I*E),U.groundColor.copy(L.groundColor).multiplyScalar(I*E),i.hemi[x]=U,x++}}v>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=d,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==A||D.numSpotMaps!==R)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=A,D.numSpotMaps=R,i.version=ep++)}function h(f,r){let l=0,d=0,g=0,m=0,p=0;const _=r.matrixWorldInverse;for(let v=0,x=f.length;v<x;v++){const b=f[v];if(b.isDirectionalLight){const M=i.directional[l];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),l++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:u,setupView:h,state:i}}function ta(c,e){const t=new np(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(r){n.push(r)}function a(r){i.push(r)}function u(r){t.setup(n,r)}function h(r){t.setupView(n,r)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a}}function ip(c,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new ta(c,e),t.set(s,[u])):o>=a.length?(u=new ta(c,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class sp extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lp(c,e,t){let n=new Ir;const i=new Oe,s=new Oe,o=new ot,a=new sp({depthPacking:gc}),u=new rp,h={},f=t.maxTextureSize,r={[Sn]:Tt,[Tt]:Sn,[mn]:mn},l=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:op,fragmentShader:ap}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Wt(g,l),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da,this.render=function(b,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const R=c.getRenderTarget(),w=c.getActiveCubeFace(),E=c.getActiveMipmapLevel(),D=c.state;D.setBlending(wn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,W=b.length;k<W;k++){const L=b[k],P=L.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const I=P.getFrameExtents();if(i.multiply(I),s.copy(P.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/I.x),i.x=s.x*I.x,P.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/I.y),i.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null){const Z=this.type!==Fi?{minFilter:gt,magFilter:gt}:{};P.map=new Hn(i.x,i.y,Z),P.map.texture.name=L.name+".shadowMap",P.camera.updateProjectionMatrix()}c.setRenderTarget(P.map),c.clear();const N=P.getViewportCount();for(let Z=0;Z<N;Z++){const U=P.getViewport(Z);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),D.viewport(o),P.updateMatrices(L,Z),n=P.getFrustum(),x(M,A,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===Fi&&_(P,A),P.needsUpdate=!1}p.needsUpdate=!1,c.setRenderTarget(R,w,E)};function _(b,M){const A=e.update(m);l.defines.VSM_SAMPLES!==b.blurSamples&&(l.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Hn(i.x,i.y)),l.uniforms.shadow_pass.value=b.map.texture,l.uniforms.resolution.value=b.mapSize,l.uniforms.radius.value=b.radius,c.setRenderTarget(b.mapPass),c.clear(),c.renderBufferDirect(M,null,A,l,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,c.setRenderTarget(b.map),c.clear(),c.renderBufferDirect(M,null,A,d,m,null)}function v(b,M,A,R,w,E){let D=null;const k=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)D=k;else if(D=A.isPointLight===!0?u:a,c.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const W=D.uuid,L=M.uuid;let P=h[W];P===void 0&&(P={},h[W]=P);let I=P[L];I===void 0&&(I=D.clone(),P[L]=I),D=I}return D.visible=M.visible,D.wireframe=M.wireframe,E===Fi?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:r[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.map=M.map,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=R,D.farDistance=w),D}function x(b,M,A,R,w){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Fi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const k=e.update(b),W=b.material;if(Array.isArray(W)){const L=k.groups;for(let P=0,I=L.length;P<I;P++){const N=L[P],Z=W[N.materialIndex];if(Z&&Z.visible){const U=v(b,Z,R,A.near,A.far,w);c.renderBufferDirect(A,null,k,U,b,N)}}}else if(W.visible){const L=v(b,W,R,A.near,A.far,w);c.renderBufferDirect(A,null,k,L,b,null)}}const D=b.children;for(let k=0,W=D.length;k<W;k++)x(D[k],M,A,R,w)}}function cp(c,e,t){const n=t.isWebGL2;function i(){let z=!1;const H=new ot;let Q=null;const le=new ot(0,0,0,0);return{setMask:function(fe){Q!==fe&&!z&&(c.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){z=fe},setClear:function(fe,Fe,it,ut,Tn){Tn===!0&&(fe*=ut,Fe*=ut,it*=ut),H.set(fe,Fe,it,ut),le.equals(H)===!1&&(c.clearColor(fe,Fe,it,ut),le.copy(H))},reset:function(){z=!1,Q=null,le.set(-1,0,0,0)}}}function s(){let z=!1,H=null,Q=null,le=null;return{setTest:function(fe){fe?we(2929):pe(2929)},setMask:function(fe){H!==fe&&!z&&(c.depthMask(fe),H=fe)},setFunc:function(fe){if(Q!==fe){switch(fe){case Ul:c.depthFunc(512);break;case kl:c.depthFunc(519);break;case Gl:c.depthFunc(513);break;case Mr:c.depthFunc(515);break;case Vl:c.depthFunc(514);break;case Wl:c.depthFunc(518);break;case Hl:c.depthFunc(516);break;case ql:c.depthFunc(517);break;default:c.depthFunc(515)}Q=fe}},setLocked:function(fe){z=fe},setClear:function(fe){le!==fe&&(c.clearDepth(fe),le=fe)},reset:function(){z=!1,H=null,Q=null,le=null}}}function o(){let z=!1,H=null,Q=null,le=null,fe=null,Fe=null,it=null,ut=null,Tn=null;return{setTest:function(We){z||(We?we(2960):pe(2960))},setMask:function(We){H!==We&&!z&&(c.stencilMask(We),H=We)},setFunc:function(We,tn,Rt){(Q!==We||le!==tn||fe!==Rt)&&(c.stencilFunc(We,tn,Rt),Q=We,le=tn,fe=Rt)},setOp:function(We,tn,Rt){(Fe!==We||it!==tn||ut!==Rt)&&(c.stencilOp(We,tn,Rt),Fe=We,it=tn,ut=Rt)},setLocked:function(We){z=We},setClear:function(We){Tn!==We&&(c.clearStencil(We),Tn=We)},reset:function(){z=!1,H=null,Q=null,le=null,fe=null,Fe=null,it=null,ut=null,Tn=null}}}const a=new i,u=new s,h=new o,f=new WeakMap,r=new WeakMap;let l={},d={},g=new WeakMap,m=[],p=null,_=!1,v=null,x=null,b=null,M=null,A=null,R=null,w=null,E=!1,D=null,k=null,W=null,L=null,P=null;const I=c.getParameter(35661);let N=!1,Z=0;const U=c.getParameter(7938);U.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=Z>=1):U.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=Z>=2);let j=null,J={};const re=c.getParameter(3088),F=c.getParameter(2978),$=new ot().fromArray(re),te=new ot().fromArray(F);function ie(z,H,Q){const le=new Uint8Array(4),fe=c.createTexture();c.bindTexture(z,fe),c.texParameteri(z,10241,9728),c.texParameteri(z,10240,9728);for(let Fe=0;Fe<Q;Fe++)c.texImage2D(H+Fe,0,6408,1,1,0,6408,5121,le);return fe}const V={};V[3553]=ie(3553,3553,1),V[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),h.setClear(0),we(2929),u.setFunc(Mr),ct(!1),Pt(Wr),we(2884),dt(wn);function we(z){l[z]!==!0&&(c.enable(z),l[z]=!0)}function pe(z){l[z]!==!1&&(c.disable(z),l[z]=!1)}function me(z,H){return d[z]!==H?(c.bindFramebuffer(z,H),d[z]=H,n&&(z===36009&&(d[36160]=H),z===36160&&(d[36009]=H)),!0):!1}function ue(z,H){let Q=m,le=!1;if(z)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),z.isWebGLMultipleRenderTargets){const fe=z.texture;if(Q.length!==fe.length||Q[0]!==36064){for(let Fe=0,it=fe.length;Fe<it;Fe++)Q[Fe]=36064+Fe;Q.length=fe.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?c.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ue(z){return p!==z?(c.useProgram(z),p=z,!0):!1}const Ee={[ui]:32774,[Cl]:32778,[Ll]:32779};if(n)Ee[jr]=32775,Ee[Yr]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ee[jr]=z.MIN_EXT,Ee[Yr]=z.MAX_EXT)}const be={[Pl]:0,[Rl]:1,[Dl]:768,[Ia]:770,[Ol]:776,[Nl]:774,[zl]:772,[Il]:769,[za]:771,[Bl]:775,[Fl]:773};function dt(z,H,Q,le,fe,Fe,it,ut){if(z===wn){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(we(3042),_=!0),z!==Al){if(z!==v||ut!==E){if((x!==ui||A!==ui)&&(c.blendEquation(32774),x=ui,A=ui),ut)switch(z){case di:c.blendFuncSeparate(1,771,1,771);break;case Hr:c.blendFunc(1,1);break;case qr:c.blendFuncSeparate(0,769,0,1);break;case Xr:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case di:c.blendFuncSeparate(770,771,1,771);break;case Hr:c.blendFunc(770,1);break;case qr:c.blendFuncSeparate(0,769,0,1);break;case Xr:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,M=null,R=null,w=null,v=z,E=ut}return}fe=fe||H,Fe=Fe||Q,it=it||le,(H!==x||fe!==A)&&(c.blendEquationSeparate(Ee[H],Ee[fe]),x=H,A=fe),(Q!==b||le!==M||Fe!==R||it!==w)&&(c.blendFuncSeparate(be[Q],be[le],be[Fe],be[it]),b=Q,M=le,R=Fe,w=it),v=z,E=!1}function Lt(z,H){z.side===mn?pe(2884):we(2884);let Q=z.side===Tt;H&&(Q=!Q),ct(Q),z.blending===di&&z.transparent===!1?dt(wn):dt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),a.setMask(z.colorWrite);const le=z.stencilWrite;h.setTest(le),le&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?we(32926):pe(32926)}function ct(z){D!==z&&(z?c.frontFace(2304):c.frontFace(2305),D=z)}function Pt(z){z!==Sl?(we(2884),z!==k&&(z===Wr?c.cullFace(1029):z===El?c.cullFace(1028):c.cullFace(1032))):pe(2884),k=z}function Ke(z){z!==W&&(N&&c.lineWidth(z),W=z)}function Ne(z,H,Q){z?(we(32823),(L!==H||P!==Q)&&(c.polygonOffset(H,Q),L=H,P=Q)):pe(32823)}function en(z){z?we(3089):pe(3089)}function Nt(z){z===void 0&&(z=33984+I-1),j!==z&&(c.activeTexture(z),j=z)}function C(z,H,Q){Q===void 0&&(j===null?Q=33984+I-1:Q=j);let le=J[Q];le===void 0&&(le={type:void 0,texture:void 0},J[Q]=le),(le.type!==z||le.texture!==H)&&(j!==Q&&(c.activeTexture(Q),j=Q),c.bindTexture(z,H||V[z]),le.type=z,le.texture=H)}function S(){const z=J[j];z!==void 0&&z.type!==void 0&&(c.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function X(){try{c.compressedTexImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{c.compressedTexImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{c.texSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{c.texSubImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{c.texStorage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{c.texStorage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{c.texImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{c.texImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(z){$.equals(z)===!1&&(c.scissor(z.x,z.y,z.z,z.w),$.copy(z))}function ge(z){te.equals(z)===!1&&(c.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function De(z,H){let Q=r.get(H);Q===void 0&&(Q=new WeakMap,r.set(H,Q));let le=Q.get(z);le===void 0&&(le=c.getUniformBlockIndex(H,z.name),Q.set(z,le))}function Ve(z,H){const le=r.get(H).get(z);f.get(H)!==le&&(c.uniformBlockBinding(H,le,z.__bindingPointIndex),f.set(H,le))}function nt(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),l={},j=null,J={},d={},g=new WeakMap,m=[],p=null,_=!1,v=null,x=null,b=null,M=null,A=null,R=null,w=null,E=!1,D=null,k=null,W=null,L=null,P=null,$.set(0,0,c.canvas.width,c.canvas.height),te.set(0,0,c.canvas.width,c.canvas.height),a.reset(),u.reset(),h.reset()}return{buffers:{color:a,depth:u,stencil:h},enable:we,disable:pe,bindFramebuffer:me,drawBuffers:ue,useProgram:Ue,setBlending:dt,setMaterial:Lt,setFlipSided:ct,setCullFace:Pt,setLineWidth:Ke,setPolygonOffset:Ne,setScissorTest:en,activeTexture:Nt,bindTexture:C,unbindTexture:S,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:ye,texImage3D:de,updateUBOMapping:De,uniformBlockBinding:Ve,texStorage2D:K,texStorage3D:ve,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:Me,compressedTexSubImage3D:ae,scissor:xe,viewport:ge,reset:nt}}function up(c,e,t,n,i,s,o){const a=i.isWebGL2,u=i.maxTextures,h=i.maxCubemapSize,f=i.maxTextureSize,r=i.maxSamples,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return _?new OffscreenCanvas(C,S):ys("canvas")}function x(C,S,X,ee){let ne=1;if((C.width>ee||C.height>ee)&&(ne=ee/Math.max(C.width,C.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=S?Lr:Math.floor,Me=oe(ne*C.width),ae=oe(ne*C.height);m===void 0&&(m=v(Me,ae));const K=X?v(Me,ae):m;return K.width=Me,K.height=ae,K.getContext("2d").drawImage(C,0,0,Me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+ae+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Mo(C.width)&&Mo(C.height)}function M(C){return a?!1:C.wrapS!==Gt||C.wrapT!==Gt||C.minFilter!==gt&&C.minFilter!==It}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==gt&&C.minFilter!==It}function R(C){c.generateMipmap(C)}function w(C,S,X,ee,ne=!1){if(a===!1)return S;if(C!==null){if(c[C]!==void 0)return c[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=S;return S===6403&&(X===5126&&(oe=33326),X===5131&&(oe=33325),X===5121&&(oe=33321)),S===33319&&(X===5126&&(oe=33328),X===5131&&(oe=33327),X===5121&&(oe=33323)),S===6408&&(X===5126&&(oe=34836),X===5131&&(oe=34842),X===5121&&(oe=ee===Ge&&ne===!1?35907:32856),X===32819&&(oe=32854),X===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function E(C,S,X){return A(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==gt&&C.minFilter!==It?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===gt||C===$r||C===Fs?9728:9729}function k(C){const S=C.target;S.removeEventListener("dispose",k),L(S),S.isVideoTexture&&g.delete(S)}function W(C){const S=C.target;S.removeEventListener("dispose",W),I(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,ee=p.get(X);if(ee){const ne=ee[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(C),Object.keys(ee).length===0&&p.delete(X)}n.remove(C)}function P(C){const S=n.get(C);c.deleteTexture(S.__webglTexture);const X=C.source,ee=p.get(X);delete ee[S.__cacheKey],o.memory.textures--}function I(C){const S=C.texture,X=n.get(C),ee=n.get(S);if(ee.__webglTexture!==void 0&&(c.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)c.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&c.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(c.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&c.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&c.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&c.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&c.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,oe=S.length;ne<oe;ne++){const Me=n.get(S[ne]);Me.__webglTexture&&(c.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(C)}let N=0;function Z(){N=0}function U(){const C=N;return C>=u&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+u),N+=1,C}function j(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function J(C,S){const X=n.get(C);if(C.isVideoTexture&&en(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(X,C,S);return}}t.bindTexture(3553,X.__webglTexture,33984+S)}function re(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){pe(X,C,S);return}t.bindTexture(35866,X.__webglTexture,33984+S)}function F(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){pe(X,C,S);return}t.bindTexture(32879,X.__webglTexture,33984+S)}function $(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){me(X,C,S);return}t.bindTexture(34067,X.__webglTexture,33984+S)}const te={[Tr]:10497,[Gt]:33071,[Ar]:33648},ie={[gt]:9728,[$r]:9984,[Fs]:9986,[It]:9729,[Ql]:9985,[Ui]:9987};function V(C,S,X){if(X?(c.texParameteri(C,10242,te[S.wrapS]),c.texParameteri(C,10243,te[S.wrapT]),(C===32879||C===35866)&&c.texParameteri(C,32882,te[S.wrapR]),c.texParameteri(C,10240,ie[S.magFilter]),c.texParameteri(C,10241,ie[S.minFilter])):(c.texParameteri(C,10242,33071),c.texParameteri(C,10243,33071),(C===32879||C===35866)&&c.texParameteri(C,32882,33071),(S.wrapS!==Gt||S.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(C,10240,D(S.magFilter)),c.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==gt&&S.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===gt||S.minFilter!==Fs&&S.minFilter!==Ui||S.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(c.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function we(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",k));const ee=S.source;let ne=p.get(ee);ne===void 0&&(ne={},p.set(ee,ne));const oe=j(S);if(oe!==C.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[oe].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&P(S)),C.__cacheKey=oe,C.__webglTexture=ne[oe].texture}return X}function pe(C,S,X){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const ne=we(C,S),oe=S.source;t.bindTexture(ee,C.__webglTexture,33984+X);const Me=n.get(oe);if(oe.version!==Me.__version||ne===!0){t.activeTexture(33984+X),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const ae=M(S)&&b(S.image)===!1;let K=x(S.image,ae,!1,f);K=Nt(S,K);const ve=b(K)||a,ye=s.convert(S.format,S.encoding);let de=s.convert(S.type),xe=w(S.internalFormat,ye,de,S.encoding,S.isVideoTexture);V(ee,S,ve);let ge;const De=S.mipmaps,Ve=a&&S.isVideoTexture!==!0,nt=Me.__version===void 0||ne===!0,z=E(S,K,ve);if(S.isDepthTexture)xe=6402,a?S.type===Un?xe=36012:S.type===On?xe=33190:S.type===fi?xe=35056:xe=33189:S.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===kn&&xe===6402&&S.type!==Ba&&S.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=On,de=s.convert(S.type)),S.format===gi&&xe===6402&&(xe=34041,S.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=fi,de=s.convert(S.type))),nt&&(Ve?t.texStorage2D(3553,1,xe,K.width,K.height):t.texImage2D(3553,0,xe,K.width,K.height,0,ye,de,null));else if(S.isDataTexture)if(De.length>0&&ve){Ve&&nt&&t.texStorage2D(3553,z,xe,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],Ve?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,ye,de,ge.data):t.texImage2D(3553,H,xe,ge.width,ge.height,0,ye,de,ge.data);S.generateMipmaps=!1}else Ve?(nt&&t.texStorage2D(3553,z,xe,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,ye,de,K.data)):t.texImage2D(3553,0,xe,K.width,K.height,0,ye,de,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&nt&&t.texStorage3D(35866,z,xe,De[0].width,De[0].height,K.depth);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],S.format!==Vt?ye!==null?Ve?t.compressedTexSubImage3D(35866,H,0,0,0,ge.width,ge.height,K.depth,ye,ge.data,0,0):t.compressedTexImage3D(35866,H,xe,ge.width,ge.height,K.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,H,0,0,0,ge.width,ge.height,K.depth,ye,de,ge.data):t.texImage3D(35866,H,xe,ge.width,ge.height,K.depth,0,ye,de,ge.data)}else{Ve&&nt&&t.texStorage2D(3553,z,xe,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],S.format!==Vt?ye!==null?Ve?t.compressedTexSubImage2D(3553,H,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(3553,H,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,ye,de,ge.data):t.texImage2D(3553,H,xe,ge.width,ge.height,0,ye,de,ge.data)}else if(S.isDataArrayTexture)Ve?(nt&&t.texStorage3D(35866,z,xe,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,ye,de,K.data)):t.texImage3D(35866,0,xe,K.width,K.height,K.depth,0,ye,de,K.data);else if(S.isData3DTexture)Ve?(nt&&t.texStorage3D(32879,z,xe,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,ye,de,K.data)):t.texImage3D(32879,0,xe,K.width,K.height,K.depth,0,ye,de,K.data);else if(S.isFramebufferTexture){if(nt)if(Ve)t.texStorage2D(3553,z,xe,K.width,K.height);else{let H=K.width,Q=K.height;for(let le=0;le<z;le++)t.texImage2D(3553,le,xe,H,Q,0,ye,de,null),H>>=1,Q>>=1}}else if(De.length>0&&ve){Ve&&nt&&t.texStorage2D(3553,z,xe,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],Ve?t.texSubImage2D(3553,H,0,0,ye,de,ge):t.texImage2D(3553,H,xe,ye,de,ge);S.generateMipmaps=!1}else Ve?(nt&&t.texStorage2D(3553,z,xe,K.width,K.height),t.texSubImage2D(3553,0,0,0,ye,de,K)):t.texImage2D(3553,0,xe,ye,de,K);A(S,ve)&&R(ee),Me.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function me(C,S,X){if(S.image.length!==6)return;const ee=we(C,S),ne=S.source;t.bindTexture(34067,C.__webglTexture,33984+X);const oe=n.get(ne);if(ne.version!==oe.__version||ee===!0){t.activeTexture(33984+X),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,K=[];for(let H=0;H<6;H++)!Me&&!ae?K[H]=x(S.image[H],!1,!0,h):K[H]=ae?S.image[H].image:S.image[H],K[H]=Nt(S,K[H]);const ve=K[0],ye=b(ve)||a,de=s.convert(S.format,S.encoding),xe=s.convert(S.type),ge=w(S.internalFormat,de,xe,S.encoding),De=a&&S.isVideoTexture!==!0,Ve=oe.__version===void 0||ee===!0;let nt=E(S,ve,ye);V(34067,S,ye);let z;if(Me){De&&Ve&&t.texStorage2D(34067,nt,ge,ve.width,ve.height);for(let H=0;H<6;H++){z=K[H].mipmaps;for(let Q=0;Q<z.length;Q++){const le=z[Q];S.format!==Vt?de!==null?De?t.compressedTexSubImage2D(34069+H,Q,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(34069+H,Q,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+H,Q,0,0,le.width,le.height,de,xe,le.data):t.texImage2D(34069+H,Q,ge,le.width,le.height,0,de,xe,le.data)}}}else{z=S.mipmaps,De&&Ve&&(z.length>0&&nt++,t.texStorage2D(34067,nt,ge,K[0].width,K[0].height));for(let H=0;H<6;H++)if(ae){De?t.texSubImage2D(34069+H,0,0,0,K[H].width,K[H].height,de,xe,K[H].data):t.texImage2D(34069+H,0,ge,K[H].width,K[H].height,0,de,xe,K[H].data);for(let Q=0;Q<z.length;Q++){const fe=z[Q].image[H].image;De?t.texSubImage2D(34069+H,Q+1,0,0,fe.width,fe.height,de,xe,fe.data):t.texImage2D(34069+H,Q+1,ge,fe.width,fe.height,0,de,xe,fe.data)}}else{De?t.texSubImage2D(34069+H,0,0,0,de,xe,K[H]):t.texImage2D(34069+H,0,ge,de,xe,K[H]);for(let Q=0;Q<z.length;Q++){const le=z[Q];De?t.texSubImage2D(34069+H,Q+1,0,0,de,xe,le.image[H]):t.texImage2D(34069+H,Q+1,ge,de,xe,le.image[H])}}}A(S,ye)&&R(34067),oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,X,ee,ne){const oe=s.convert(X.format,X.encoding),Me=s.convert(X.type),ae=w(X.internalFormat,oe,Me,X.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ae,S.width,S.height,S.depth,0,oe,Me,null):t.texImage2D(ne,0,ae,S.width,S.height,0,oe,Me,null)),t.bindFramebuffer(36160,C),Ne(S)?l.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get(X).__webglTexture,0,Ke(S)):(ne===3553||ne>=34069&&ne<=34074)&&c.framebufferTexture2D(36160,ee,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(C,S,X){if(c.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(X||Ne(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Un?ee=36012:ne.type===On&&(ee=33190));const oe=Ke(S);Ne(S)?l.renderbufferStorageMultisampleEXT(36161,oe,ee,S.width,S.height):c.renderbufferStorageMultisample(36161,oe,ee,S.width,S.height)}else c.renderbufferStorage(36161,ee,S.width,S.height);c.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Ke(S);X&&Ne(S)===!1?c.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):Ne(S)?l.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):c.renderbufferStorage(36161,34041,S.width,S.height),c.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],Me=s.convert(oe.format,oe.encoding),ae=s.convert(oe.type),K=w(oe.internalFormat,Me,ae,oe.encoding),ve=Ke(S);X&&Ne(S)===!1?c.renderbufferStorageMultisample(36161,ve,K,S.width,S.height):Ne(S)?l.renderbufferStorageMultisampleEXT(36161,ve,K,S.width,S.height):c.renderbufferStorage(36161,K,S.width,S.height)}}c.bindRenderbuffer(36161,null)}function Ee(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,ne=Ke(S);if(S.depthTexture.format===kn)Ne(S)?l.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):c.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===gi)Ne(S)?l.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):c.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function be(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ee(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=c.createRenderbuffer(),Ue(S.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=c.createRenderbuffer(),Ue(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function dt(C,S,X){const ee=n.get(C);S!==void 0&&ue(ee.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&be(C)}function Lt(C){const S=C.texture,X=n.get(C),ee=n.get(S);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=c.createTexture()),ee.__version=S.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Me=b(C)||a;if(ne){X.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)X.__webglFramebuffer[ae]=c.createFramebuffer()}else{if(X.__webglFramebuffer=c.createFramebuffer(),oe)if(i.drawBuffers){const ae=C.texture;for(let K=0,ve=ae.length;K<ve;K++){const ye=n.get(ae[K]);ye.__webglTexture===void 0&&(ye.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ne(C)===!1){const ae=oe?S:[S];X.__webglMultisampledFramebuffer=c.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let K=0;K<ae.length;K++){const ve=ae[K];X.__webglColorRenderbuffer[K]=c.createRenderbuffer(),c.bindRenderbuffer(36161,X.__webglColorRenderbuffer[K]);const ye=s.convert(ve.format,ve.encoding),de=s.convert(ve.type),xe=w(ve.internalFormat,ye,de,ve.encoding,C.isXRRenderTarget===!0),ge=Ke(C);c.renderbufferStorageMultisample(36161,ge,xe,C.width,C.height),c.framebufferRenderbuffer(36160,36064+K,36161,X.__webglColorRenderbuffer[K])}c.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=c.createRenderbuffer(),Ue(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),V(34067,S,Me);for(let ae=0;ae<6;ae++)ue(X.__webglFramebuffer[ae],C,S,36064,34069+ae);A(S,Me)&&R(34067),t.unbindTexture()}else if(oe){const ae=C.texture;for(let K=0,ve=ae.length;K<ve;K++){const ye=ae[K],de=n.get(ye);t.bindTexture(3553,de.__webglTexture),V(3553,ye,Me),ue(X.__webglFramebuffer,C,ye,36064+K,3553),A(ye,Me)&&R(3553)}t.unbindTexture()}else{let ae=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ae=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),V(ae,S,Me),ue(X.__webglFramebuffer,C,S,36064,ae),A(S,Me)&&R(ae),t.unbindTexture()}C.depthBuffer&&be(C)}function ct(C){const S=b(C)||a,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ne=X.length;ee<ne;ee++){const oe=X[ee];if(A(oe,S)){const Me=C.isWebGLCubeRenderTarget?34067:3553,ae=n.get(oe).__webglTexture;t.bindTexture(Me,ae),R(Me),t.unbindTexture()}}}function Pt(C){if(a&&C.samples>0&&Ne(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,ee=C.height;let ne=16384;const oe=[],Me=C.stencilBuffer?33306:36096,ae=n.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){oe.push(36064+ve),C.depthBuffer&&oe.push(Me);const ye=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),K&&c.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[ve]),ye===!0&&(c.invalidateFramebuffer(36008,[Me]),c.invalidateFramebuffer(36009,[Me])),K){const de=n.get(S[ve]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,de,0)}c.blitFramebuffer(0,0,X,ee,0,0,X,ee,ne,9728),d&&c.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ve,36161,ae.__webglColorRenderbuffer[ve]);const ye=n.get(S[ve]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ve,3553,ye,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function Ke(C){return Math.min(r,C.samples)}function Ne(C){const S=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function en(C){const S=o.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function Nt(C,S){const X=C.encoding,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Cr||X!==Wn&&(X===Ge?a===!1?e.has("EXT_sRGB")===!0&&ee===Vt?(C.format=Cr,C.minFilter=It,C.generateMipmaps=!1):S=Ga.sRGBToLinear(S):(ee!==Vt||ne!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),S}this.allocateTextureUnit=U,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=re,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=dt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ne}function hp(c,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Vn)return 5121;if(s===ic)return 32819;if(s===sc)return 32820;if(s===ec)return 5120;if(s===tc)return 5122;if(s===Ba)return 5123;if(s===nc)return 5124;if(s===On)return 5125;if(s===Un)return 5126;if(s===ki)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rc)return 6406;if(s===Vt)return 6408;if(s===oc)return 6409;if(s===ac)return 6410;if(s===kn)return 6402;if(s===gi)return 34041;if(s===Cr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lc)return 6403;if(s===cc)return 36244;if(s===uc)return 33319;if(s===hc)return 33320;if(s===dc)return 36249;if(s===Ns||s===Bs||s===Os||s===Us)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ns)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ns)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zr||s===Kr||s===Jr||s===Qr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eo||s===to)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===eo)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===to)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===no||s===io||s===so||s===ro||s===oo||s===ao||s===lo||s===co||s===uo||s===ho||s===fo||s===po||s===mo||s===go)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===no)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===io)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===so)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ro)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ao)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ho)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===po)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===go)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ks)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ks)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===pc||s===_o||s===vo||s===xo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ks)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_o)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class dp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(h,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const f=h.joints["index-finger-tip"],r=h.joints["thumb-tip"],l=f.position.distanceTo(r.position),d=.02,g=.005;h.inputState.pinching&&l>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pp extends At{constructor(e,t,n,i,s,o,a,u,h,f){if(f=f!==void 0?f:kn,f!==kn&&f!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===kn&&(n=On),n===void 0&&f===gi&&(n=fi),super(null,i,s,o,a,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=u!==void 0?u:gt,this.flipY=!1,this.generateMipmaps=!1}}class mp extends vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",u=1,h=null,f=null,r=null,l=null,d=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const v=[],x=[],b=new Set,M=new Map,A=new zt;A.layers.enable(1),A.viewport=new ot;const R=new zt;R.layers.enable(2),R.viewport=new ot;const w=[A,R],E=new dp;E.layers.enable(1),E.layers.enable(2);let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=v[F];return $===void 0&&($=new fr,v[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=v[F];return $===void 0&&($=new fr,v[F]=$),$.getGripSpace()},this.getHand=function(F){let $=v[F];return $===void 0&&($=new fr,v[F]=$),$.getHandSpace()};function W(F){const $=x.indexOf(F.inputSource);if($===-1)return;const te=v[$];te!==void 0&&te.dispatchEvent({type:F.type,data:F.inputSource})}function L(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",P);for(let F=0;F<v.length;F++){const $=x[F];$!==null&&(x[F]=null,v[F].disconnect($))}D=null,k=null,e.setRenderTarget(p),d=null,l=null,r=null,i=null,_=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(F){h=F},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return r},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",L),i.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),_=new Hn(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:Vn,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let $=null,te=null,ie=null;m.depth&&(ie=m.stencil?35056:33190,$=m.stencil?gi:kn,te=m.stencil?fi:On);const V={colorFormat:32856,depthFormat:ie,scaleFactor:s};r=new XRWebGLBinding(i,t),l=r.createProjectionLayer(V),i.updateRenderState({layers:[l]}),_=new Hn(l.textureWidth,l.textureHeight,{format:Vt,type:Vn,depthTexture:new pp(l.textureWidth,l.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const we=e.properties.get(_);we.__ignoreDepthValues=l.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(F){for(let $=0;$<F.removed.length;$++){const te=F.removed[$],ie=x.indexOf(te);ie>=0&&(x[ie]=null,v[ie].disconnect(te))}for(let $=0;$<F.added.length;$++){const te=F.added[$];let ie=x.indexOf(te);if(ie===-1){for(let we=0;we<v.length;we++)if(we>=x.length){x.push(te),ie=we;break}else if(x[we]===null){x[we]=te,ie=we;break}if(ie===-1)break}const V=v[ie];V&&V.connect(te)}}const I=new O,N=new O;function Z(F,$,te){I.setFromMatrixPosition($.matrixWorld),N.setFromMatrixPosition(te.matrixWorld);const ie=I.distanceTo(N),V=$.projectionMatrix.elements,we=te.projectionMatrix.elements,pe=V[14]/(V[10]-1),me=V[14]/(V[10]+1),ue=(V[9]+1)/V[5],Ue=(V[9]-1)/V[5],Ee=(V[8]-1)/V[0],be=(we[8]+1)/we[0],dt=pe*Ee,Lt=pe*be,ct=ie/(-Ee+be),Pt=ct*-Ee;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Pt),F.translateZ(ct),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ke=pe+ct,Ne=me+ct,en=dt-Pt,Nt=Lt+(ie-Pt),C=ue*me/Ne*Ke,S=Ue*me/Ne*Ke;F.projectionMatrix.makePerspective(en,Nt,C,S,Ke,Ne)}function U(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;E.near=R.near=A.near=F.near,E.far=R.far=A.far=F.far,(D!==E.near||k!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,k=E.far);const $=F.parent,te=E.cameras;U(E,$);for(let V=0;V<te.length;V++)U(te[V],$);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),F.matrix.copy(E.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const ie=F.children;for(let V=0,we=ie.length;V<we;V++)ie[V].updateMatrixWorld(!0);te.length===2?Z(E,A,R):E.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(l===null&&d===null))return u},this.setFoveation=function(F){u=F,l!==null&&(l.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.getPlanes=function(){return b};let j=null;function J(F,$){if(f=$.getViewerPose(h||o),g=$,f!==null){const te=f.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ie=!1;te.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let V=0;V<te.length;V++){const we=te[V];let pe=null;if(d!==null)pe=d.getViewport(we);else{const ue=r.getViewSubImage(l,we);pe=ue.viewport,V===0&&(e.setRenderTargetTextures(_,ue.colorTexture,l.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(_))}let me=w[V];me===void 0&&(me=new zt,me.layers.enable(V),me.viewport=new ot,w[V]=me),me.matrix.fromArray(we.transform.matrix),me.projectionMatrix.fromArray(we.projectionMatrix),me.viewport.set(pe.x,pe.y,pe.width,pe.height),V===0&&E.matrix.copy(me.matrix),ie===!0&&E.cameras.push(me)}}for(let te=0;te<v.length;te++){const ie=x[te],V=v[te];ie!==null&&V!==void 0&&V.update(ie,$,h||o)}if(j&&j(F,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let te=null;for(const ie of b)$.detectedPlanes.has(ie)||(te===null&&(te=[]),te.push(ie));if(te!==null)for(const ie of te)b.delete(ie),M.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of $.detectedPlanes)if(!b.has(ie))b.add(ie),M.set(ie,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const V=M.get(ie);ie.lastChangedTime>V&&(M.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}g=null}const re=new Ja;re.setAnimationLoop(J),this.setAnimationLoop=function(F){j=F},this.dispose=function(){}}}function gp(c,e){function t(m,p){p.color.getRGB(m.fogColor.value,$a(c)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),h(m,p)):p.isMeshStandardMaterial?(i(m,p),r(m,p),p.isMeshPhysicalMaterial&&l(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,v):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=c.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function r(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function l(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function _p(c,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?c.getParameter(35375):0;function u(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function h(v,x){let b=i[v.id];b===void 0&&(g(v),b=f(v),i[v.id]=b,v.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(v,M);const A=e.render.frame;s[v.id]!==A&&(l(v),s[v.id]=A)}function f(v){const x=r();v.__bindingPointIndex=x;const b=c.createBuffer(),M=v.__size,A=v.usage;return c.bindBuffer(35345,b),c.bufferData(35345,M,A),c.bindBuffer(35345,null),c.bindBufferBase(35345,x,b),b}function r(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const x=i[v.id],b=v.uniforms,M=v.__cache;c.bindBuffer(35345,x);for(let A=0,R=b.length;A<R;A++){const w=b[A];if(d(w,A,M)===!0){const E=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let W=0;W<D.length;W++){const L=D[W],P=m(L);typeof L=="number"?(w.__data[0]=L,c.bufferSubData(35345,E+k,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=L.elements[0],w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=L.elements[0],w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=L.elements[0]):(L.toArray(w.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,E,w.__data)}}c.bindBuffer(35345,null)}function d(v,x,b){const M=v.value;if(b[x]===void 0){if(typeof M=="number")b[x]=M;else{const A=Array.isArray(M)?M:[M],R=[];for(let w=0;w<A.length;w++)R.push(A[w].clone());b[x]=R}return!0}else if(typeof M=="number"){if(b[x]!==M)return b[x]=M,!0}else{const A=Array.isArray(b[x])?b[x]:[b[x]],R=Array.isArray(M)?M:[M];for(let w=0;w<A.length;w++){const E=A[w];if(E.equals(R[w])===!1)return E.copy(R[w]),!0}}return!1}function g(v){const x=v.uniforms;let b=0;const M=16;let A=0;for(let R=0,w=x.length;R<w;R++){const E=x[R],D={boundary:0,storage:0},k=Array.isArray(E.value)?E.value:[E.value];for(let W=0,L=k.length;W<L;W++){const P=k[W],I=m(P);D.boundary+=I.boundary,D.storage+=I.storage}if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,R>0){A=b%M;const W=M-A;A!==0&&W-D.boundary<0&&(b+=M-A,E.__offset=b)}b+=D.storage}return A=b%M,A>0&&(b+=M-A),v.__size=b,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),c.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const v in i)c.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:u,update:h,dispose:_}}function vp(){const c=ys("canvas");return c.style.display="block",c}function sl(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:vp(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,o=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,a=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,u=c.powerPreference!==void 0?c.powerPreference:"default",h=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=c.alpha!==void 0?c.alpha:!1;let r=null,l=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,v=0,x=null,b=-1,M=null;const A=new ot,R=new ot;let w=null,E=e.width,D=e.height,k=1,W=null,L=null;const P=new ot(0,0,E,D),I=new ot(0,0,E,D);let N=!1;const Z=new Ir;let U=!1,j=!1,J=null;const re=new Ze,F=new Oe,$=new O,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return x===null?k:1}let V=t;function we(T,G){for(let q=0;q<T.length;q++){const B=T[q],Y=e.getContext(B,G);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dr}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",De,!1),V===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),V=we(G,T),V===null)throw we(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,me,ue,Ue,Ee,be,dt,Lt,ct,Pt,Ke,Ne,en,Nt,C,S,X,ee,ne,oe,Me,ae,K,ve;function ye(){pe=new Cd(V),me=new wd(V,pe,c),pe.init(me),ae=new hp(V,pe,me),ue=new cp(V,pe,me),Ue=new Rd,Ee=new $f,be=new up(V,pe,ue,Ee,me,ae,Ue),dt=new Sd(m),Lt=new Ad(m),ct=new kc(V,me),K=new yd(V,pe,ct,me),Pt=new Ld(V,ct,Ue,K),Ke=new Fd(V,Pt,ct,Ue),ne=new zd(V,me,be),S=new Md(Ee),Ne=new Yf(m,dt,Lt,pe,me,K,S),en=new gp(m,Ee),Nt=new Kf,C=new ip(pe,me),ee=new xd(m,dt,Lt,ue,Ke,f,o),X=new lp(m,Ke,me),ve=new _p(V,Ue,me,ue),oe=new bd(V,pe,Ue,me),Me=new Pd(V,pe,Ue,me),Ue.programs=Ne.programs,m.capabilities=me,m.extensions=pe,m.properties=Ee,m.renderLists=Nt,m.shadowMap=X,m.state=ue,m.info=Ue}ye();const de=new mp(m,V);this.xr=de,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(E,D,!1))},this.getSize=function(T){return T.set(E,D)},this.setSize=function(T,G,q){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,D=G,e.width=Math.floor(T*k),e.height=Math.floor(G*k),q!==!1&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(E*k,D*k).floor()},this.setDrawingBufferSize=function(T,G,q){E=T,D=G,k=q,e.width=Math.floor(T*q),e.height=Math.floor(G*q),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(P)},this.setViewport=function(T,G,q,B){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,G,q,B),ue.viewport(A.copy(P).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,G,q,B){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,G,q,B),ue.scissor(R.copy(I).multiplyScalar(k).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){ue.setScissorTest(N=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,G=!0,q=!0){let B=0;T&&(B|=16384),G&&(B|=256),q&&(B|=1024),V.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",De,!1),Nt.dispose(),C.dispose(),Ee.dispose(),dt.dispose(),Lt.dispose(),Ke.dispose(),K.dispose(),ve.dispose(),Ne.dispose(),de.dispose(),de.removeEventListener("sessionstart",le),de.removeEventListener("sessionend",fe),J&&(J.dispose(),J=null),Fe.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ue.autoReset,G=X.enabled,q=X.autoUpdate,B=X.needsUpdate,Y=X.type;ye(),Ue.autoReset=T,X.enabled=G,X.autoUpdate=q,X.needsUpdate=B,X.type=Y}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){const G=T.target;G.removeEventListener("dispose",Ve),nt(G)}function nt(T){z(T),Ee.remove(T)}function z(T){const G=Ee.get(T).programs;G!==void 0&&(G.forEach(function(q){Ne.releaseProgram(q)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,q,B,Y,_e){G===null&&(G=te);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=yl(T,G,q,B,Y);ue.setMaterial(B,Se);let Ce=q.index,Ie=1;B.wireframe===!0&&(Ce=Pt.getWireframeAttribute(q),Ie=2);const Le=q.drawRange,Pe=q.attributes.position;let qe=Le.start*Ie,xt=(Le.start+Le.count)*Ie;_e!==null&&(qe=Math.max(qe,_e.start*Ie),xt=Math.min(xt,(_e.start+_e.count)*Ie)),Ce!==null?(qe=Math.max(qe,0),xt=Math.min(xt,Ce.count)):Pe!=null&&(qe=Math.max(qe,0),xt=Math.min(xt,Pe.count));const nn=xt-qe;if(nn<0||nn===1/0)return;K.setup(Y,B,Ae,q,Ce);let An,Xe=oe;if(Ce!==null&&(An=ct.get(Ce),Xe=Me,Xe.setIndex(An)),Y.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*ie()),Xe.setMode(1)):Xe.setMode(4);else if(Y.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),ue.setLineWidth(Re*ie()),Y.isLineSegments?Xe.setMode(1):Y.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else Y.isPoints?Xe.setMode(0):Y.isSprite&&Xe.setMode(4);if(Y.isInstancedMesh)Xe.renderInstances(qe,nn,Y.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rs=Math.min(q.instanceCount,Re);Xe.renderInstances(qe,nn,Rs)}else Xe.render(qe,nn)},this.compile=function(T,G){function q(B,Y,_e){B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Tt,B.needsUpdate=!0,Rt(B,Y,_e),B.side=Sn,B.needsUpdate=!0,Rt(B,Y,_e),B.side=mn):Rt(B,Y,_e)}l=C.get(T),l.init(),g.push(l),T.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(l.pushLight(B),B.castShadow&&l.pushShadow(B))}),l.setupLights(m.physicallyCorrectLights),T.traverse(function(B){const Y=B.material;if(Y)if(Array.isArray(Y))for(let _e=0;_e<Y.length;_e++){const Se=Y[_e];q(Se,T,B)}else q(Y,T,B)}),g.pop(),l=null};let H=null;function Q(T){H&&H(T)}function le(){Fe.stop()}function fe(){Fe.start()}const Fe=new Ja;Fe.setAnimationLoop(Q),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){H=T,de.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},de.addEventListener("sessionstart",le),de.addEventListener("sessionend",fe),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,G,x),l=C.get(T,g.length),l.init(),g.push(l),re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(re),j=this.localClippingEnabled,U=S.init(this.clippingPlanes,j),r=Nt.get(T,d.length),r.init(),d.push(r),it(T,G,0,m.sortObjects),r.finish(),m.sortObjects===!0&&r.sort(W,L),U===!0&&S.beginShadows();const q=l.state.shadowsArray;if(X.render(q,T,G),U===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(r,T),l.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const B=G.cameras;for(let Y=0,_e=B.length;Y<_e;Y++){const Se=B[Y];ut(r,T,Se,Se.viewport)}}else ut(r,T,G);x!==null&&(be.updateMultisampleRenderTarget(x),be.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(m,T,G),K.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?l=g[g.length-1]:l=null,d.pop(),d.length>0?r=d[d.length-1]:r=null};function it(T,G,q,B){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)l.pushLight(T),T.castShadow&&l.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){B&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const Se=Ke.update(T),Ae=T.material;Ae.visible&&r.push(T,Se,Ae,q,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ue.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ue.render.frame),!T.frustumCulled||Z.intersectsObject(T))){B&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const Se=Ke.update(T),Ae=T.material;if(Array.isArray(Ae)){const Ce=Se.groups;for(let Ie=0,Le=Ce.length;Ie<Le;Ie++){const Pe=Ce[Ie],qe=Ae[Pe.materialIndex];qe&&qe.visible&&r.push(T,Se,qe,q,$.z,Pe)}}else Ae.visible&&r.push(T,Se,Ae,q,$.z,null)}}const _e=T.children;for(let Se=0,Ae=_e.length;Se<Ae;Se++)it(_e[Se],G,q,B)}function ut(T,G,q,B){const Y=T.opaque,_e=T.transmissive,Se=T.transparent;l.setupLightsView(q),U===!0&&S.setGlobalState(m.clippingPlanes,q),_e.length>0&&Tn(Y,G,q),B&&ue.viewport(A.copy(B)),Y.length>0&&We(Y,G,q),_e.length>0&&We(_e,G,q),Se.length>0&&We(Se,G,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Tn(T,G,q){const B=me.isWebGL2;J===null&&(J=new Hn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?ki:Vn,minFilter:Ui,samples:B&&s===!0?4:0})),m.getDrawingBufferSize(F),B?J.setSize(F.x,F.y):J.setSize(Lr(F.x),Lr(F.y));const Y=m.getRenderTarget();m.setRenderTarget(J),m.clear();const _e=m.toneMapping;m.toneMapping=gn,We(T,G,q),m.toneMapping=_e,be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J),m.setRenderTarget(Y)}function We(T,G,q){const B=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,_e=T.length;Y<_e;Y++){const Se=T[Y],Ae=Se.object,Ce=Se.geometry,Ie=B===null?Se.material:B,Le=Se.group;Ae.layers.test(q.layers)&&tn(Ae,G,q,Ce,Ie,Le)}}function tn(T,G,q,B,Y,_e){T.onBeforeRender(m,G,q,B,Y,_e),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(m,G,q,B,T,_e),Y.transparent===!0&&Y.side===mn&&Y.forceSinglePass===!1?(Y.side=Tt,Y.needsUpdate=!0,m.renderBufferDirect(q,G,B,Y,T,_e),Y.side=Sn,Y.needsUpdate=!0,m.renderBufferDirect(q,G,B,Y,T,_e),Y.side=mn):m.renderBufferDirect(q,G,B,Y,T,_e),T.onAfterRender(m,G,q,B,Y,_e)}function Rt(T,G,q){G.isScene!==!0&&(G=te);const B=Ee.get(T),Y=l.state.lights,_e=l.state.shadowsArray,Se=Y.state.version,Ae=Ne.getParameters(T,Y.state,_e,G,q),Ce=Ne.getProgramCacheKey(Ae);let Ie=B.programs;B.environment=T.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(T.isMeshStandardMaterial?Lt:dt).get(T.envMap||B.environment),Ie===void 0&&(T.addEventListener("dispose",Ve),Ie=new Map,B.programs=Ie);let Le=Ie.get(Ce);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===Se)return kr(T,Ae),Le}else Ae.uniforms=Ne.getUniforms(T),T.onBuild(q,Ae,m),T.onBeforeCompile(Ae,m),Le=Ne.acquireProgram(Ae,Ce),Ie.set(Ce,Le),B.uniforms=Ae.uniforms;const Pe=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=S.uniform),kr(T,Ae),B.needsLights=wl(T),B.lightsStateVersion=Se,B.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.directionalShadowMap.value=Y.state.directionalShadowMap,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotShadowMap.value=Y.state.spotShadowMap,Pe.spotLightMatrix.value=Y.state.spotLightMatrix,Pe.spotLightMap.value=Y.state.spotLightMap,Pe.pointShadowMap.value=Y.state.pointShadowMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const qe=Le.getUniforms(),xt=xs.seqWithValue(qe.seq,Pe);return B.currentProgram=Le,B.uniformsList=xt,Le}function kr(T,G){const q=Ee.get(T);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function yl(T,G,q,B,Y){G.isScene!==!0&&(G=te),be.resetTextureUnits();const _e=G.fog,Se=B.isMeshStandardMaterial?G.environment:null,Ae=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Wn,Ce=(B.isMeshStandardMaterial?Lt:dt).get(B.envMap||Se),Ie=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!B.normalMap&&!!q.attributes.tangent,Pe=!!q.morphAttributes.position,qe=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color,nn=B.toneMapped?m.toneMapping:gn,An=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xe=An!==void 0?An.length:0,Re=Ee.get(B),Rs=l.state.lights;if(U===!0&&(j===!0||T!==M)){const yt=T===M&&B.id===b;S.setState(B,T,yt)}let st=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Rs.state.version||Re.outputEncoding!==Ae||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ce||B.fog===!0&&Re.fog!==_e||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==S.numPlanes||Re.numIntersection!==S.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==Pe||Re.morphNormals!==qe||Re.morphColors!==xt||Re.toneMapping!==nn||me.isWebGL2===!0&&Re.morphTargetsCount!==Xe)&&(st=!0):(st=!0,Re.__version=B.version);let Cn=Re.currentProgram;st===!0&&(Cn=Rt(B,G,Y));let Gr=!1,wi=!1,Ds=!1;const ft=Cn.getUniforms(),Ln=Re.uniforms;if(ue.useProgram(Cn.program)&&(Gr=!0,wi=!0,Ds=!0),B.id!==b&&(b=B.id,wi=!0),Gr||M!==T){if(ft.setValue(V,"projectionMatrix",T.projectionMatrix),me.logarithmicDepthBuffer&&ft.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,wi=!0,Ds=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const yt=ft.map.cameraPosition;yt!==void 0&&yt.setValue(V,$.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Y.isSkinnedMesh)&&ft.setValue(V,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){ft.setOptional(V,Y,"bindMatrix"),ft.setOptional(V,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(me.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),ft.setValue(V,"boneTexture",yt.boneTexture,be),ft.setValue(V,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Is=q.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&me.isWebGL2===!0)&&ne.update(Y,q,B,Cn),(wi||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,ft.setValue(V,"receiveShadow",Y.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ln.envMap.value=Ce,Ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),wi&&(ft.setValue(V,"toneMappingExposure",m.toneMappingExposure),Re.needsLights&&bl(Ln,Ds),_e&&B.fog===!0&&en.refreshFogUniforms(Ln,_e),en.refreshMaterialUniforms(Ln,B,k,D,J),xs.upload(V,Re.uniformsList,Ln,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(V,Re.uniformsList,Ln,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(V,"center",Y.center),ft.setValue(V,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(V,"normalMatrix",Y.normalMatrix),ft.setValue(V,"modelMatrix",Y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const yt=B.uniformsGroups;for(let zs=0,Ml=yt.length;zs<Ml;zs++)if(me.isWebGL2){const Vr=yt[zs];ve.update(Vr,Cn),ve.bind(Vr,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function bl(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function wl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,G,q){Ee.get(T.texture).__webglTexture=G,Ee.get(T.depthTexture).__webglTexture=q;const B=Ee.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=q===void 0,B.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const q=Ee.get(T);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,q=0){x=T,_=G,v=q;let B=!0,Y=null,_e=!1,Se=!1;if(T){const Ce=Ee.get(T);Ce.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),B=!1):Ce.__webglFramebuffer===void 0?be.setupRenderTarget(T):Ce.__hasExternalTextures&&be.rebindTextures(T,Ee.get(T.texture).__webglTexture,Ee.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Se=!0);const Le=Ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Le[G],_e=!0):me.isWebGL2&&T.samples>0&&be.useMultisampledRTT(T)===!1?Y=Ee.get(T).__webglMultisampledFramebuffer:Y=Le,A.copy(T.viewport),R.copy(T.scissor),w=T.scissorTest}else A.copy(P).multiplyScalar(k).floor(),R.copy(I).multiplyScalar(k).floor(),w=N;if(ue.bindFramebuffer(36160,Y)&&me.drawBuffers&&B&&ue.drawBuffers(T,Y),ue.viewport(A),ue.scissor(R),ue.setScissorTest(w),_e){const Ce=Ee.get(T.texture);V.framebufferTexture2D(36160,36064,34069+G,Ce.__webglTexture,q)}else if(Se){const Ce=Ee.get(T.texture),Ie=G||0;V.framebufferTextureLayer(36160,36064,Ce.__webglTexture,q||0,Ie)}b=-1},this.readRenderTargetPixels=function(T,G,q,B,Y,_e,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){ue.bindFramebuffer(36160,Ae);try{const Ce=T.texture,Ie=Ce.format,Le=Ce.type;if(Ie!==Vt&&ae.convert(Ie)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===ki&&(pe.has("EXT_color_buffer_half_float")||me.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Le!==Vn&&ae.convert(Le)!==V.getParameter(35738)&&!(Le===Un&&(me.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-B&&q>=0&&q<=T.height-Y&&V.readPixels(G,q,B,Y,ae.convert(Ie),ae.convert(Le),_e)}finally{const Ce=x!==null?Ee.get(x).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,G,q=0){const B=Math.pow(2,-q),Y=Math.floor(G.image.width*B),_e=Math.floor(G.image.height*B);be.setTexture2D(G,0),V.copyTexSubImage2D(3553,q,0,0,T.x,T.y,Y,_e),ue.unbindTexture()},this.copyTextureToTexture=function(T,G,q,B=0){const Y=G.image.width,_e=G.image.height,Se=ae.convert(q.format),Ae=ae.convert(q.type);be.setTexture2D(q,0),V.pixelStorei(37440,q.flipY),V.pixelStorei(37441,q.premultiplyAlpha),V.pixelStorei(3317,q.unpackAlignment),G.isDataTexture?V.texSubImage2D(3553,B,T.x,T.y,Y,_e,Se,Ae,G.image.data):G.isCompressedTexture?V.compressedTexSubImage2D(3553,B,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Se,G.mipmaps[0].data):V.texSubImage2D(3553,B,T.x,T.y,Se,Ae,G.image),B===0&&q.generateMipmaps&&V.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,G,q,B,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Ce=ae.convert(B.format),Ie=ae.convert(B.type);let Le;if(B.isData3DTexture)be.setTexture3D(B,0),Le=32879;else if(B.isDataArrayTexture)be.setTexture2DArray(B,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,B.flipY),V.pixelStorei(37441,B.premultiplyAlpha),V.pixelStorei(3317,B.unpackAlignment);const Pe=V.getParameter(3314),qe=V.getParameter(32878),xt=V.getParameter(3316),nn=V.getParameter(3315),An=V.getParameter(32877),Xe=q.isCompressedTexture?q.mipmaps[0]:q.image;V.pixelStorei(3314,Xe.width),V.pixelStorei(32878,Xe.height),V.pixelStorei(3316,T.min.x),V.pixelStorei(3315,T.min.y),V.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Le,Y,G.x,G.y,G.z,_e,Se,Ae,Ce,Ie,Xe.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Le,Y,G.x,G.y,G.z,_e,Se,Ae,Ce,Xe.data)):V.texSubImage3D(Le,Y,G.x,G.y,G.z,_e,Se,Ae,Ce,Ie,Xe),V.pixelStorei(3314,Pe),V.pixelStorei(32878,qe),V.pixelStorei(3316,xt),V.pixelStorei(3315,nn),V.pixelStorei(32877,An),Y===0&&B.generateMipmaps&&V.generateMipmap(Le),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,ue.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xp extends sl{}xp.prototype.isWebGL1Renderer=!0;class yp extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class rl extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new O,ia=new O,sa=new Ze,pr=new Ha,ds=new Ms;class bp extends lt{constructor(e=new Qt,t=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)na.fromBufferAttribute(t,i-1),ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=s,e.ray.intersectsSphere(ds)===!1)return;sa.copy(i).invert(),pr.copy(e.ray).applyMatrix4(sa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=new O,f=new O,r=new O,l=new O,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=_,b=v-1;x<b;x+=d){const M=g.getX(x),A=g.getX(x+1);if(h.fromBufferAttribute(p,M),f.fromBufferAttribute(p,A),pr.distanceSqToSegment(h,f,l,r)>u)continue;l.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(l);w<e.near||w>e.far||t.push({distance:w,point:r.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=_,b=v-1;x<b;x+=d){if(h.fromBufferAttribute(p,x),f.fromBufferAttribute(p,x+1),pr.distanceSqToSegment(h,f,l,r)>u)continue;l.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(l);A<e.near||A>e.far||t.push({distance:A,point:r.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ra=new O,oa=new O;class wp extends bp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ra.fromBufferAttribute(t,i),oa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ra.distanceTo(oa);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fr extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ol extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const mr=new Ze,aa=new O,la=new O;class Mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(aa),la.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(la),t.updateMatrixWorld(),mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sp extends Mp{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tp extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap extends wp{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Qt;i.setAttribute("position",new qt(t,3)),i.setAttribute("color",new qt(n,3));const s=new rl({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Be,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dr);function Cp(c,e=!1){const t=c[0].index!==null,n=new Set(Object.keys(c[0].attributes)),i=new Set(Object.keys(c[0].morphAttributes)),s={},o={},a=c[0].morphTargetsRelative,u=new Qt;let h=0;for(let f=0;f<c.length;++f){const r=c[f];let l=0;if(t!==(r.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in r.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(r.attributes[d]),l++}if(l!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==r.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in r.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(r.morphAttributes[d])}if(e){let d;if(t)d=r.index.count;else if(r.attributes.position!==void 0)d=r.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;u.addGroup(h,d,f),h+=d}}if(t){let f=0;const r=[];for(let l=0;l<c.length;++l){const d=c[l].index;for(let g=0;g<d.count;++g)r.push(d.getX(g)+f);f+=c[l].attributes.position.count}u.setIndex(r)}for(const f in s){const r=ca(s[f]);if(!r)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+f+" attribute."),null;u.setAttribute(f,r)}for(const f in o){const r=o[f][0].length;if(r===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[f]=[];for(let l=0;l<r;++l){const d=[];for(let m=0;m<o[f].length;++m)d.push(o[f][m][l]);const g=ca(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+f+" morphAttribute."),null;u.morphAttributes[f].push(g)}}return u}function ca(c){let e,t,n,i=0;for(let a=0;a<c.length;++a){const u=c[a];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=u.array.length}const s=new e(i);let o=0;for(let a=0;a<c.length;++a)s.set(c[a].array,o),o+=c[a].array.length;return new _t(s,t,n)}function Lp(c,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=c.getIndex(),i=c.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(c.attributes),u={},h={},f=[],r=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let p=0,_=a.length;p<_;p++){const v=a[p],x=c.attributes[v];u[v]=new _t(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const b=c.morphAttributes[v];b&&(h[v]=new _t(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized))}const d=Math.log10(1/e),g=Math.pow(10,d);for(let p=0;p<s;p++){const _=n?n.getX(p):p;let v="";for(let x=0,b=a.length;x<b;x++){const M=a[x],A=c.getAttribute(M),R=A.itemSize;for(let w=0;w<R;w++)v+=`${~~(A[r[w]](_)*g)},`}if(v in t)f.push(t[v]);else{for(let x=0,b=a.length;x<b;x++){const M=a[x],A=c.getAttribute(M),R=c.morphAttributes[M],w=A.itemSize,E=u[M],D=h[M];for(let k=0;k<w;k++){const W=r[k],L=l[k];if(E[L](o,A[W](_)),R)for(let P=0,I=R.length;P<I;P++)D[P][L](o,R[P][W](_))}}t[v]=o,f.push(o),o++}}const m=c.clone();for(const p in c.attributes){const _=u[p];if(m.setAttribute(p,new _t(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),p in h)for(let v=0;v<h[p].length;v++){const x=h[p][v];m.morphAttributes[p][v]=new _t(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)}}return m.setIndex(f),m}class Ht{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],u=n[2],h=n[3],f=n[4],r=n[5],l=n[6],d=n[7],g=n[8],m=i[0],p=i[1],_=i[2],v=i[3],x=i[4],b=i[5],M=i[6],A=i[7],R=i[8];return s[0]=o*m+a*v+u*M,s[1]=o*p+a*x+u*A,s[2]=o*_+a*b+u*R,s[3]=h*m+f*v+r*M,s[4]=h*p+f*x+r*A,s[5]=h*_+f*b+r*R,s[6]=l*m+d*v+g*M,s[7]=l*p+d*x+g*A,s[8]=l*_+d*b+g*R,t}scale(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let u=3;const h=u;let f;const r=4;let l;do{if(o=h-u,s[o+i*o]===0){for(a=o+1;a<h;a++)if(s[o+i*a]!==0){f=r;do l=r-f,s[l+i*o]+=s[l+i*a];while(--f);break}}if(s[o+i*o]!==0)for(a=o+1;a<h;a++){const d=s[o+i*a]/s[o+i*o];f=r;do l=r-f,s[l+i*a]=l<=o?0:s[l+i*a]-s[l+i*o]*d;while(--f)}}while(--u);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Ht);const t=3,n=6,i=Pp;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const u=a;let h;const f=n;let r;do{if(s=u-a,i[s+n*s]===0){for(o=s+1;o<u;o++)if(i[s+n*o]!==0){h=f;do r=f-h,i[r+n*s]+=i[r+n*o];while(--h);break}}if(i[s+n*s]!==0)for(o=s+1;o<u;o++){const l=i[s+n*o]/i[s+n*s];h=f;do r=f-h,i[r+n*o]=r<=s?0:i[r+n*o]-i[r+n*s]*l;while(--h)}}while(--a);s=2;do{o=s-1;do{const l=i[s+n*o]/i[s+n*s];h=n;do r=n-h,i[r+n*o]=i[r+n*o]-i[r+n*s]*l;while(--h)}while(o--)}while(--s);s=2;do{const l=1/i[s+n*s];h=n;do r=n-h,i[r+n*s]=i[r+n*s]*l;while(--h)}while(s--);s=2;do{o=2;do{if(r=i[t+o+n*s],isNaN(r)||r===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,r)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,u=i+i,h=t*o,f=t*a,r=t*u,l=n*a,d=n*u,g=i*u,m=s*o,p=s*a,_=s*u,v=this.elements;return v[3*0+0]=1-(l+g),v[3*0+1]=f-_,v[3*0+2]=r+p,v[3*1+0]=f+_,v[3*1+1]=1-(h+g),v[3*1+2]=d-m,v[3*2+0]=r-p,v[3*2+1]=d+m,v[3*2+2]=1-(h+l),this}transpose(e){e===void 0&&(e=new Ht);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Pp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,u=this.z;return t.x=a*s-u*i,t.y=u*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ht([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Rp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Dp;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ua),ua.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Rp=new y,Dp=new y,ua=new y;class Ct{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let u=1;u<e.length;u++){let h=e[u];a&&(a.vmult(h,ha),h=ha),h.x>o.x&&(o.x=h.x),h.x<s.x&&(s.x=h.x),h.y>o.y&&(o.y=h.y),h.y<s.y&&(s.y=h.y),h.z>o.z&&(o.z=h.z),h.z<s.z&&(s.z=h.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ct().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,u=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&u}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,u){const h=this.lowerBound,f=this.upperBound;e.copy(h),t.set(f.x,h.y,h.z),n.set(f.x,f.y,h.z),i.set(h.x,f.y,f.z),s.set(f.x,h.y,f.z),o.set(h.x,f.y,h.z),a.set(h.x,h.y,f.z),u.copy(f)}toLocalFrame(e,t){const n=da,i=n[0],s=n[1],o=n[2],a=n[3],u=n[4],h=n[5],f=n[6],r=n[7];this.getCorners(i,s,o,a,u,h,f,r);for(let l=0;l!==8;l++){const d=n[l];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=da,i=n[0],s=n[1],o=n[2],a=n[3],u=n[4],h=n[5],f=n[6],r=n[7];this.getCorners(i,s,o,a,u,h,f,r);for(let l=0;l!==8;l++){const d=n[l];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,u=(this.upperBound.x-n.x)*i,h=(this.lowerBound.y-n.y)*s,f=(this.upperBound.y-n.y)*s,r=(this.lowerBound.z-n.z)*o,l=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,u),Math.min(h,f)),Math.min(r,l)),g=Math.min(Math.min(Math.max(a,u),Math.max(h,f)),Math.max(r,l));return!(g<0||d>g)}}const ha=new y,da=[new y,new y,new y,new y,new y,new y,new y,new y];class fa{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class al{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class $e{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Ip,i=zp;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new $e);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,u=e.y,h=e.z,f=e.w;return t.x=n*f+o*a+i*h-s*u,t.y=i*f+o*u+s*a-n*h,t.z=s*f+o*h+n*u-i*a,t.w=o*f-n*a-i*u-s*h,t}inverse(e){e===void 0&&(e=new $e);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new $e),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,u=this.z,h=this.w,f=h*n+a*s-u*i,r=h*i+u*n-o*s,l=h*s+o*i-a*n,d=-o*n-a*i-u*s;return t.x=f*h+d*-o+r*-u-l*-a,t.y=r*h+d*-a+l*-o-f*-u,t.z=l*h+d*-u+f*-a-r*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,u=this.z,h=this.w;switch(t){case"YZX":const f=o*a+u*h;if(f>.499&&(n=2*Math.atan2(o,h),i=Math.PI/2,s=0),f<-.499&&(n=-2*Math.atan2(o,h),i=-Math.PI/2,s=0),n===void 0){const r=o*o,l=a*a,d=u*u;n=Math.atan2(2*a*h-2*o*u,1-2*l-2*d),i=Math.asin(2*f),s=Math.atan2(2*o*h-2*a*u,1-2*r-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),u=Math.sin(e/2),h=Math.sin(t/2),f=Math.sin(n/2);return i==="XYZ"?(this.x=u*o*a+s*h*f,this.y=s*h*a-u*o*f,this.z=s*o*f+u*h*a,this.w=s*o*a-u*h*f):i==="YXZ"?(this.x=u*o*a+s*h*f,this.y=s*h*a-u*o*f,this.z=s*o*f-u*h*a,this.w=s*o*a+u*h*f):i==="ZXY"?(this.x=u*o*a-s*h*f,this.y=s*h*a+u*o*f,this.z=s*o*f+u*h*a,this.w=s*o*a-u*h*f):i==="ZYX"?(this.x=u*o*a-s*h*f,this.y=s*h*a+u*o*f,this.z=s*o*f-u*h*a,this.w=s*o*a+u*h*f):i==="YZX"?(this.x=u*o*a+s*h*f,this.y=s*h*a+u*o*f,this.z=s*o*f-u*h*a,this.w=s*o*a-u*h*f):i==="XZY"&&(this.x=u*o*a-s*h*f,this.y=s*h*a-u*o*f,this.z=s*o*f+u*h*a,this.w=s*o*a+u*h*f),this}clone(){return new $e(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new $e);const i=this.x,s=this.y,o=this.z,a=this.w;let u=e.x,h=e.y,f=e.z,r=e.w,l,d,g,m,p;return d=i*u+s*h+o*f+a*r,d<0&&(d=-d,u=-u,h=-h,f=-f,r=-r),1-d>1e-6?(l=Math.acos(d),g=Math.sin(l),m=Math.sin((1-t)*l)/g,p=Math.sin(t*l)/g):(m=1-t,p=t),n.x=m*i+p*u,n.y=m*s+p*h,n.z=m*o+p*f,n.w=m*a+p*r,n}integrate(e,t,n,i){i===void 0&&(i=new $e);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,u=this.x,h=this.y,f=this.z,r=this.w,l=t*.5;return i.x+=l*(s*r+o*f-a*h),i.y+=l*(o*r+a*u-s*f),i.z+=l*(a*r+s*h-o*u),i.w+=l*(-s*u-o*h-a*f),i}}const Ip=new y,zp=new y,Fp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class he{constructor(e){e===void 0&&(e={}),this.id=he.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}he.idCounter=0;he.types=Fp;class ze{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new $e,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ze.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ze.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(pa),pa.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const pa=new $e;class Oi extends he{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:he.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let u=0;u!==a;u++){const h=(u+1)%a;t[o[u]].vsub(t[o[h]],i),i.normalize();let f=!1;for(let r=0;r!==n.length;r++)if(n[r].almostEquals(i)||n[r].almostEquals(i)){f=!0;break}f||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Oi.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new y,o=new y;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,u,h){const f=new y;let r=-1,l=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){f.copy(n.faceNormals[g]),s.vmult(f,f);const m=f.dot(o);m>l&&(l=m,r=g)}const d=[];for(let g=0;g<n.faces[r].length;g++){const m=n.vertices[n.faces[r][g]],p=new y;p.copy(m),s.vmult(p,p),i.vadd(p,p),d.push(p)}r>=0&&this.clipFaceAgainstHull(o,e,t,d,a,u,h)}findSeparatingAxis(e,t,n,i,s,o,a,u){const h=new y,f=new y,r=new y,l=new y,d=new y,g=new y;let m=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],h);const v=p.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<m&&(m=v,o.copy(h))}else{const _=a?a.length:p.faces.length;for(let v=0;v<_;v++){const x=a?a[v]:v;h.copy(p.faceNormals[x]),n.vmult(h,h);const b=p.testSepAxis(h,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,o.copy(h))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],f);const v=p.testSepAxis(f,e,t,n,i,s);if(v===!1)return!1;v<m&&(m=v,o.copy(f))}else{const _=u?u.length:e.faces.length;for(let v=0;v<_;v++){const x=u?u[v]:v;f.copy(e.faceNormals[x]),s.vmult(f,f);const b=p.testSepAxis(f,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,o.copy(f))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],l);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],d),l.cross(d,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,o.copy(g))}}return i.vsub(t,r),r.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;Oi.project(a,e,n,i,gr),Oi.project(t,e,s,o,_r);const u=gr[0],h=gr[1],f=_r[0],r=_r[1];if(u<r||f<h)return!1;const l=u-r,d=f-h;return l<d?l:d}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const u=new y,h=new y,f=new y,r=new y,l=new y,d=new y,g=new y,m=new y,p=this,_=[],v=i,x=_;let b=-1,M=Number.MAX_VALUE;for(let D=0;D<p.faces.length;D++){u.copy(p.faceNormals[D]),n.vmult(u,u);const k=u.dot(e);k<M&&(M=k,b=D)}if(b<0)return;const A=p.faces[b];A.connectedFaces=[];for(let D=0;D<p.faces.length;D++)for(let k=0;k<p.faces[D].length;k++)A.indexOf(p.faces[D][k])!==-1&&D!==b&&A.connectedFaces.indexOf(D)===-1&&A.connectedFaces.push(D);const R=A.length;for(let D=0;D<R;D++){const k=p.vertices[A[D]],W=p.vertices[A[(D+1)%R]];k.vsub(W,h),f.copy(h),n.vmult(f,f),t.vadd(f,f),r.copy(this.faceNormals[b]),n.vmult(r,r),t.vadd(r,r),f.cross(r,l),l.negate(l),d.copy(k),n.vmult(d,d),t.vadd(d,d);const L=A.connectedFaces[D];g.copy(this.faceNormals[L]);const P=this.getPlaneConstantOfFace(L);m.copy(g),n.vmult(m,m);const I=P-m.dot(t);for(this.clipFaceAgainstPlane(v,x,m,I);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[b]);const w=this.getPlaneConstantOfFace(b);m.copy(g),n.vmult(m,m);const E=w-m.dot(t);for(let D=0;D<v.length;D++){let k=m.dot(v[D])+E;if(k<=s&&(console.log(`clamped: depth=${k} to minDist=${s}`),k=s),k<=o){const W=v[D];if(k<=1e-6){const L={point:W,normal:m,depth:k};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let u=e[e.length-1],h=e[0];s=n.dot(u)+i;for(let f=0;f<a;f++){if(h=e[f],o=n.dot(h)+i,s<0)if(o<0){const r=new y;r.copy(h),t.push(r)}else{const r=new y;u.lerp(h,s/(s-o),r),t.push(r)}else if(o<0){const r=new y;u.lerp(h,s/(s-o),r),t.push(r),t.push(h)}u=h,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,u,h,f,r,l=new y;for(let d=0;d<s.length;d++){l.copy(s[d]),t.vmult(l,l),e.vadd(l,l);const g=l;(o===void 0||g.x<o)&&(o=g.x),(h===void 0||g.x>h)&&(h=g.x),(a===void 0||g.y<a)&&(a=g.y),(f===void 0||g.y>f)&&(f=g.y),(u===void 0||g.z<u)&&(u=g.z),(r===void 0||g.z>r)&&(r=g.z)}n.set(o,a,u),i.set(h,f,r)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new y;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let u=i[a];const h=t[n[a][0]],f=new y;e.vsub(h,f);const r=u.dot(f),l=new y;o.vsub(h,l);const d=u.dot(l);if(r<0&&d>0||r>0&&d<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,a=Np;let u=0,h=0;const f=Bp,r=e.vertices;f.setZero(),ze.vectorToLocalFrame(n,i,t,a),ze.pointToLocalFrame(n,i,f,f);const l=f.dot(a);h=u=r[0].dot(a);for(let d=1;d<o;d++){const g=r[d].dot(a);g>u&&(u=g),g<h&&(h=g)}if(h-=l,u-=l,h>u){const d=h;h=u,u=d}s[0]=u,s[1]=h}}const gr=[],_r=[];new y;const Np=new y,Bp=new y;class Ts extends he{constructor(e){super({type:he.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],u=new Oi({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=u,u.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Ts.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)bn.set(s[o][0],s[o][1],s[o][2]),t.vmult(bn,bn),e.vadd(bn,bn),n(bn.x,bn.y,bn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;jt[0].set(s.x,s.y,s.z),jt[1].set(-s.x,s.y,s.z),jt[2].set(-s.x,-s.y,s.z),jt[3].set(-s.x,-s.y,-s.z),jt[4].set(s.x,-s.y,-s.z),jt[5].set(s.x,s.y,-s.z),jt[6].set(-s.x,s.y,-s.z),jt[7].set(s.x,-s.y,s.z);const o=jt[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const u=jt[a];t.vmult(u,u),e.vadd(u,u);const h=u.x,f=u.y,r=u.z;h>i.x&&(i.x=h),f>i.y&&(i.y=f),r>i.z&&(i.z=r),h<n.x&&(n.x=h),f<n.y&&(n.y=f),r<n.z&&(n.z=r)}}}const bn=new y,jt=[new y,new y,new y,new y,new y,new y,new y,new y],Nr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Br={AWAKE:0,SLEEPY:1,SLEEPING:2};class ce extends al{constructor(e){e===void 0&&(e={}),super(),this.id=ce.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ce.STATIC:ce.DYNAMIC,typeof e.type==typeof ce.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ce.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new $e,this.initQuaternion=new $e,this.previousQuaternion=new $e,this.interpolatedQuaternion=new $e,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Ht,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Ht,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ct,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ce.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ce.SLEEPING&&this.dispatchEvent(ce.wakeupEvent)}sleep(){this.sleepState=ce.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ce.AWAKE&&n<i?(this.sleepState=ce.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ce.sleepyEvent)):t===ce.SLEEPY&&n>i?this.wakeUp():t===ce.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ce.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ce.SLEEPING||this.type===ce.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new $e;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),u=o.boundingSphereRadius;a+u>i&&(i=a+u)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Op,o=Up,a=this.quaternion,u=this.aabb,h=kp;for(let f=0;f!==i;f++){const r=e[f];a.vmult(t[f],s),s.vadd(this.position,s),a.mult(n[f],o),r.calculateWorldAABB(s,o,h.lowerBound,h.upperBound),f===0?u.copy(h):u.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Gp,i=Vp;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=Hp;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;const n=qp,i=Xp;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ce.DYNAMIC&&(this.sleepState===ce.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=t,i=jp;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Yp;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;const n=$p,i=Zp;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Kp;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ts.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ce.DYNAMIC||this.type===ce.KINEMATIC)||this.sleepState===ce.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,u=this.torque,h=this.quaternion,f=this.invMass,r=this.invInertiaWorld,l=this.linearFactor,d=f*e;i.x+=a.x*d*l.x,i.y+=a.y*d*l.y,i.z+=a.z*d*l.z;const g=r.elements,m=this.angularFactor,p=u.x*m.x,_=u.y*m.y,v=u.z*m.z;s.x+=e*(g[0]*p+g[1]*_+g[2]*v),s.y+=e*(g[3]*p+g[4]*_+g[5]*v),s.z+=e*(g[6]*p+g[7]*_+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),t&&(n?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ce.idCounter=0;ce.COLLIDE_EVENT_NAME="collide";ce.DYNAMIC=Nr.DYNAMIC;ce.STATIC=Nr.STATIC;ce.KINEMATIC=Nr.KINEMATIC;ce.AWAKE=Br.AWAKE;ce.SLEEPY=Br.SLEEPY;ce.SLEEPING=Br.SLEEPING;ce.wakeupEvent={type:"wakeup"};ce.sleepyEvent={type:"sleepy"};ce.sleepEvent={type:"sleep"};const Op=new y,Up=new $e,kp=new Ct,Gp=new Ht,Vp=new Ht,Wp=new Ht,Hp=new y,qp=new y,Xp=new y,jp=new y,Yp=new y,$p=new y,Zp=new y,Kp=new y;class Jp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ce.STATIC||e.sleepState===ce.SLEEPING)&&(t.type&ce.STATIC||t.sleepState===ce.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Qp;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=em,i=tm,s=nm,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const u=i[a].id,h=s[a].id,f=u<h?`${u},${h}`:`${h},${u}`;n[f]=a,n.keys.push(f)}for(let a=0;a!==n.keys.length;a++){const u=n.keys.pop(),h=n[u];e.push(i[h]),t.push(s[h]),delete n[u]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Qp=new y;new y;new $e;new y;const em={keys:[]},tm=[],nm=[];new y;new y;new y;class im extends Jp{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let u=0;u!==s;u++)for(let h=0;h!==u;h++)o=i[u],a=i[h],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class bs{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let ll,cl,ul,hl,dl,fl,pl;const Or={CLOSEST:1,ANY:2,ALL:4};ll=he.types.SPHERE;cl=he.types.PLANE;ul=he.types.BOX;hl=he.types.CYLINDER;dl=he.types.CONVEXPOLYHEDRON;fl=he.types.HEIGHTFIELD;pl=he.types.TRIMESH;class Ye{get[ll](){return this._intersectSphere}get[cl](){return this._intersectPlane}get[ul](){return this._intersectBox}get[hl](){return this._intersectConvex}get[dl](){return this._intersectConvex}get[fl](){return this._intersectHeightfield}get[pl](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ye.ANY,this.result=new bs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Ye.ANY,this.result=t.result||new bs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ma),vr.length=0,e.broadphase.aabbQuery(e,ma,vr),this.intersectBodies(vr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=sm,s=rm;for(let o=0,a=e.shapes.length;o<a;o++){const u=e.shapes[o];if(!(n&&!u.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(u,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(xm(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,u=this.direction,h=new y(0,0,1);t.vmult(h,h);const f=new y;o.vsub(n,f);const r=f.dot(h);a.vsub(n,f);const l=f.dot(h);if(r*l>0||o.distanceTo(a)<r)return;const d=h.dot(u);if(Math.abs(d)<this.precision)return;const g=new y,m=new y,p=new y;o.vsub(n,g);const _=-h.dot(g)/d;u.scale(_,m),o.vadd(m,p),this.reportIntersection(h,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=om;o.from.copy(this.from),o.to.copy(this.to),ze.pointToLocalFrame(n,t,o.from,o.from),ze.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=am;let u,h,f,r;u=h=0,f=r=e.data.length-1;const l=new Ct;o.getAABB(l),e.getIndexOfPosition(l.lowerBound.x,l.lowerBound.y,a,!0),u=Math.max(u,a[0]),h=Math.max(h,a[1]),e.getIndexOfPosition(l.upperBound.x,l.upperBound.y,a,!0),f=Math.min(f,a[0]+1),r=Math.min(r,a[1]+1);for(let d=u;d<f;d++)for(let g=h;g<r;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,g,l),!!l.overlapsRay(o)){if(e.getConvexTrianglePillar(d,g,!1),ze.pointToWorldFrame(n,t,e.pillarOffset,fs),this._intersectConvex(e.pillarConvex,t,fs,i,s,ga),this.result.shouldStop)return;e.getConvexTrianglePillar(d,g,!0),ze.pointToWorldFrame(n,t,e.pillarOffset,fs),this._intersectConvex(e.pillarConvex,t,fs,i,s,ga)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,u=e.radius,h=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,f=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),r=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-u**2,l=f**2-4*h*r,d=lm,g=cm;if(!(l<0))if(l===0)o.lerp(a,l,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1);else{const m=(-f-Math.sqrt(l))/(2*h),p=(-f+Math.sqrt(l))/(2*h);if(m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=um,u=_a,h=o&&o.faceList||null,f=e.faces,r=e.vertices,l=e.faceNormals,d=this.direction,g=this.from,m=this.to,p=g.distanceTo(m),_=h?h.length:f.length,v=this.result;for(let x=0;!v.shouldStop&&x<_;x++){const b=h?h[x]:x,M=f[b],A=l[b],R=t,w=n;u.copy(r[M[0]]),R.vmult(u,u),u.vadd(w,u),u.vsub(g,u),R.vmult(A,a);const E=d.dot(a);if(Math.abs(E)<this.precision)continue;const D=a.dot(u)/E;if(!(D<0)){d.scale(D,vt),vt.vadd(g,vt),kt.copy(r[M[0]]),R.vmult(kt,kt),w.vadd(kt,kt);for(let k=1;!v.shouldStop&&k<M.length-1;k++){Yt.copy(r[M[k]]),$t.copy(r[M[k+1]]),R.vmult(Yt,Yt),R.vmult($t,$t),w.vadd(Yt,Yt),w.vadd($t,$t);const W=vt.distanceTo(g);!(Ye.pointInTriangle(vt,kt,Yt,$t)||Ye.pointInTriangle(vt,Yt,kt,$t))||W>p||this.reportIntersection(a,vt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=hm,u=_m,h=vm,f=_a,r=dm,l=fm,d=pm,g=gm,m=mm,p=e.indices;e.vertices;const _=this.from,v=this.to,x=this.direction;h.position.copy(n),h.quaternion.copy(t),ze.vectorToLocalFrame(n,t,x,r),ze.pointToLocalFrame(n,t,_,l),ze.pointToLocalFrame(n,t,v,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,l.x*=e.scale.x,l.y*=e.scale.y,l.z*=e.scale.z,d.vsub(l,r),r.normalize();const b=l.distanceSquared(d);e.tree.rayQuery(this,h,u);for(let M=0,A=u.length;!this.result.shouldStop&&M!==A;M++){const R=u[M];e.getNormal(R,a),e.getVertex(p[R*3],kt),kt.vsub(l,f);const w=r.dot(a),E=a.dot(f)/w;if(E<0)continue;r.scale(E,vt),vt.vadd(l,vt),e.getVertex(p[R*3+1],Yt),e.getVertex(p[R*3+2],$t);const D=vt.distanceSquared(l);!(Ye.pointInTriangle(vt,Yt,kt,$t)||Ye.pointInTriangle(vt,kt,Yt,$t))||D>b||(ze.vectorToWorldFrame(t,a,m),ze.pointToWorldFrame(n,t,vt,g),this.reportIntersection(m,g,s,i,R))}u.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,u=o.distanceTo(t),h=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(h.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ye.ALL:this.hasHit=!0,h.set(o,a,e,t,n,i,u),h.hasHit=!0,this.callback(h);break;case Ye.CLOSEST:(u<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(o,a,e,t,n,i,u));break;case Ye.ANY:this.hasHit=!0,h.hasHit=!0,h.set(o,a,e,t,n,i,u),h.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Bn),n.vsub(t,Pi),e.vsub(t,xr);const s=Bn.dot(Bn),o=Bn.dot(Pi),a=Bn.dot(xr),u=Pi.dot(Pi),h=Pi.dot(xr);let f,r;return(f=u*a-o*h)>=0&&(r=s*h-o*a)>=0&&f+r<s*u-o*o}}Ye.CLOSEST=Or.CLOSEST;Ye.ANY=Or.ANY;Ye.ALL=Or.ALL;const ma=new Ct,vr=[],Pi=new y,xr=new y,sm=new y,rm=new $e,vt=new y,kt=new y,Yt=new y,$t=new y;new y;new bs;const ga={faceList:[0]},fs=new y,om=new Ye,am=[],lm=new y,cm=new y,um=new y;new y;new y;const _a=new y,hm=new y,dm=new y,fm=new y,pm=new y,mm=new y,gm=new y;new Ct;const _m=[],vm=new ze,Bn=new y,ps=new y;function xm(c,e,t){t.vsub(c,Bn);const n=Bn.dot(e);return e.scale(n,ps),ps.vadd(c,ps),t.distanceTo(ps)}class ym{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class va{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Xi{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Xi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new va,this.jacobianElementB=new va,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,u=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,u)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,u=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,u)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,u=i.torque,h=n.invMassSolve,f=i.invMassSolve;return s.scale(h,xa),a.scale(f,ya),n.invInertiaWorldSolve.vmult(o,ba),i.invInertiaWorldSolve.vmult(u,wa),e.multiplyVectors(xa,ba)+t.multiplyVectors(ya,wa)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,u=i.invInertiaWorldSolve;let h=s+o;return a.vmult(e.rotational,ms),h+=ms.dot(e.rotational),u.vmult(t.rotational,ms),h+=ms.dot(t.rotational),h}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=bm;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Xi.idCounter=0;const xa=new y,ya=new y,ba=new y,wa=new y,ms=new y,bm=new y;class wm extends Xi{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,u=Mm,h=Sm,f=i.velocity,r=i.angularVelocity;i.force,i.torque;const l=s.velocity,d=s.angularVelocity;s.force,s.torque;const g=Em,m=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;o.cross(_,u),a.cross(_,h),_.negate(m.spatial),u.negate(m.rotational),p.spatial.copy(_),p.rotational.copy(h),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=_.dot(g),x=this.restitution+1,b=x*l.dot(_)-x*f.dot(_)+d.dot(h)-r.dot(u),M=this.computeGiMf();return-v*t-b*n-e*M}getImpactVelocityAlongNormal(){const e=Tm,t=Am,n=Cm,i=Lm,s=Pm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Mm=new y,Sm=new y,Em=new y,Tm=new y,Am=new y,Cm=new y,Lm=new y,Pm=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Ma extends Xi{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Rm,o=Dm,a=this.t;n.cross(a,s),i.cross(a,o);const u=this.jacobianElementA,h=this.jacobianElementB;a.negate(u.spatial),s.negate(u.rotational),h.spatial.copy(a),h.rotational.copy(o);const f=this.computeGW(),r=this.computeGiMf();return-f*t-e*r}}const Rm=new y,Dm=new y;class As{constructor(e,t,n){n=ym.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=As.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}As.idCounter=0;class Cs{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Cs.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Cs.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Ye;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Im extends he{constructor(){super({type:he.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){cn.set(0,0,1),t.vmult(cn,cn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),cn.x===1?i.x=e.x:cn.x===-1&&(n.x=e.x),cn.y===1?i.y=e.y:cn.y===-1&&(n.y=e.y),cn.z===1?i.z=e.z:cn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const cn=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Ct;new y;new Ct;new y;new y;new y;new y;new y;new y;new y;new Ct;new y;new ze;new Ct;class zm{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Fm extends zm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,u=t.bodies,h=u.length,f=e;let r,l,d,g,m,p;if(a!==0)for(let b=0;b!==h;b++)u[b].updateSolveMassProperties();const _=Bm,v=Om,x=Nm;_.length=a,v.length=a,x.length=a;for(let b=0;b!==a;b++){const M=o[b];x[b]=0,v[b]=M.computeB(f),_[b]=1/M.computeC()}if(a!==0){for(let A=0;A!==h;A++){const R=u[A],w=R.vlambda,E=R.wlambda;w.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){const R=o[A];r=v[A],l=_[A],p=x[A],m=R.computeGWlambda(),d=l*(r-m-R.eps*p),p+d<R.minForce?d=R.minForce-p:p+d>R.maxForce&&(d=R.maxForce-p),x[A]+=d,g+=d>0?d:-d,R.addToWlambda(d)}if(g*g<s)break}for(let A=0;A!==h;A++){const R=u[A],w=R.velocity,E=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),w.vadd(R.vlambda,w),R.wlambda.vmul(R.angularFactor,R.wlambda),E.vadd(R.wlambda,E)}let b=o.length;const M=1/f;for(;b--;)o[b].multiplier=x[b]*M}return n}}const Nm=[],Bm=[],Om=[];ce.STATIC;class Um{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class km extends Um{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const ke={sphereSphere:he.types.SPHERE,spherePlane:he.types.SPHERE|he.types.PLANE,boxBox:he.types.BOX|he.types.BOX,sphereBox:he.types.SPHERE|he.types.BOX,planeBox:he.types.PLANE|he.types.BOX,convexConvex:he.types.CONVEXPOLYHEDRON,sphereConvex:he.types.SPHERE|he.types.CONVEXPOLYHEDRON,planeConvex:he.types.PLANE|he.types.CONVEXPOLYHEDRON,boxConvex:he.types.BOX|he.types.CONVEXPOLYHEDRON,sphereHeightfield:he.types.SPHERE|he.types.HEIGHTFIELD,boxHeightfield:he.types.BOX|he.types.HEIGHTFIELD,convexHeightfield:he.types.CONVEXPOLYHEDRON|he.types.HEIGHTFIELD,sphereParticle:he.types.PARTICLE|he.types.SPHERE,planeParticle:he.types.PLANE|he.types.PARTICLE,boxParticle:he.types.BOX|he.types.PARTICLE,convexParticle:he.types.PARTICLE|he.types.CONVEXPOLYHEDRON,cylinderCylinder:he.types.CYLINDER,sphereCylinder:he.types.SPHERE|he.types.CYLINDER,planeCylinder:he.types.PLANE|he.types.CYLINDER,boxCylinder:he.types.BOX|he.types.CYLINDER,convexCylinder:he.types.CONVEXPOLYHEDRON|he.types.CYLINDER,heightfieldCylinder:he.types.HEIGHTFIELD|he.types.CYLINDER,particleCylinder:he.types.PARTICLE|he.types.CYLINDER,sphereTrimesh:he.types.SPHERE|he.types.TRIMESH,planeTrimesh:he.types.PLANE|he.types.TRIMESH};class Gm{get[ke.sphereSphere](){return this.sphereSphere}get[ke.spherePlane](){return this.spherePlane}get[ke.boxBox](){return this.boxBox}get[ke.sphereBox](){return this.sphereBox}get[ke.planeBox](){return this.planeBox}get[ke.convexConvex](){return this.convexConvex}get[ke.sphereConvex](){return this.sphereConvex}get[ke.planeConvex](){return this.planeConvex}get[ke.boxConvex](){return this.boxConvex}get[ke.sphereHeightfield](){return this.sphereHeightfield}get[ke.boxHeightfield](){return this.boxHeightfield}get[ke.convexHeightfield](){return this.convexHeightfield}get[ke.sphereParticle](){return this.sphereParticle}get[ke.planeParticle](){return this.planeParticle}get[ke.boxParticle](){return this.boxParticle}get[ke.convexParticle](){return this.convexParticle}get[ke.cylinderCylinder](){return this.convexConvex}get[ke.sphereCylinder](){return this.sphereConvex}get[ke.planeCylinder](){return this.planeConvex}get[ke.boxCylinder](){return this.boxConvex}get[ke.convexCylinder](){return this.convexConvex}get[ke.heightfieldCylinder](){return this.heightfieldCylinder}get[ke.particleCylinder](){return this.particleCylinder}get[ke.sphereTrimesh](){return this.sphereTrimesh}get[ke.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new km,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new wm(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const u=this.currentContactMaterial;a.restitution=u.restitution,a.setSpookParams(u.contactEquationStiffness,u.contactEquationRelaxation,this.world.dt);const h=n.material||e.material,f=i.material||t.material;return h&&f&&h.restitution>=0&&f.restitution>=0&&(a.restitution=h.restitution*f.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,u=this.currentContactMaterial;let h=u.friction;const f=s.material||n.material,r=o.material||i.material;if(f&&r&&f.friction>=0&&r.friction>=0&&(h=f.friction*r.friction),h>0){const l=h*(a.frictionGravity||a.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,m=g.length?g.pop():new Ma(n,i,l*d),p=g.length?g.pop():new Ma(n,i,l*d);return m.bi=p.bi=n,m.bj=p.bj=i,m.minForce=p.minForce=-l*d,m.maxForce=p.maxForce=l*d,m.ri.copy(e.ri),m.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(m.t,p.t),m.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,a.dt),p.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,a.dt),m.enabled=p.enabled=e.enabled,t.push(m,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];In.setZero(),oi.setZero(),ai.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(In.vadd(t.ni,In),oi.vadd(t.ri,oi),ai.vadd(t.rj,ai)):(In.vsub(t.ni,In),oi.vadd(t.rj,oi),ai.vadd(t.ri,ai));const o=1/e;oi.scale(o,n.ri),ai.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),In.normalize(),In.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const u=Hm,h=qm,f=Vm,r=Wm;for(let l=0,d=e.length;l!==d;l++){const g=e[l],m=t[l];let p=null;g.material&&m.material&&(p=n.getContactMaterial(g.material,m.material)||null);const _=g.type&ce.KINEMATIC&&m.type&ce.STATIC||g.type&ce.STATIC&&m.type&ce.KINEMATIC||g.type&ce.KINEMATIC&&m.type&ce.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],u),g.quaternion.vmult(g.shapeOffsets[v],f),f.vadd(g.position,f);const x=g.shapes[v];for(let b=0;b<m.shapes.length;b++){m.quaternion.mult(m.shapeOrientations[b],h),m.quaternion.vmult(m.shapeOffsets[b],r),r.vadd(m.position,r);const M=m.shapes[b];if(!(x.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&x.collisionFilterGroup)||f.distanceTo(r)>x.boundingSphereRadius+M.boundingSphereRadius)continue;let A=null;x.material&&M.material&&(A=n.getContactMaterial(x.material,M.material)||null),this.currentContactMaterial=A||p||n.defaultContactMaterial;const R=x.type|M.type,w=this[R];if(w){let E=!1;x.type<M.type?E=w.call(this,x,M,f,r,u,h,g,m,x,M,_):E=w.call(this,M,x,r,f,h,u,m,g,x,M,_),E&&_&&(n.shapeOverlapKeeper.set(x.id,M.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,n,i,s,o,a,u,h,f,r){if(r)return n.distanceSquared(i)<(e.radius+t.radius)**2;const l=this.createContactEquation(a,u,e,t,h,f);i.vsub(n,l.ni),l.ni.normalize(),l.ri.copy(l.ni),l.rj.copy(l.ni),l.ri.scale(e.radius,l.ri),l.rj.scale(-t.radius,l.rj),l.ri.vadd(n,l.ri),l.ri.vsub(a.position,l.ri),l.rj.vadd(i,l.rj),l.rj.vsub(u.position,l.rj),this.result.push(l),this.createFrictionEquationsFromContact(l,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,u,h,f,r){const l=this.createContactEquation(a,u,e,t,h,f);if(l.ni.set(0,0,1),o.vmult(l.ni,l.ni),l.ni.negate(l.ni),l.ni.normalize(),l.ni.scale(e.radius,l.ri),n.vsub(i,gs),l.ni.scale(l.ni.dot(gs),Sa),gs.vsub(Sa,l.rj),-gs.dot(l.ni)<=e.radius){if(r)return!0;const d=l.ri,g=l.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(i,g),g.vsub(u.position,g),this.result.push(l),this.createFrictionEquationsFromContact(l,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,u,h,f,r){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,u,e,t,r)}sphereBox(e,t,n,i,s,o,a,u,h,f,r){const l=this.v3pool,d=_g;n.vsub(i,_s),t.getSideNormals(d,o);const g=e.radius;let m=!1;const p=xg,_=yg,v=bg;let x=null,b=0,M=0,A=0,R=null;for(let N=0,Z=d.length;N!==Z&&m===!1;N++){const U=pg;U.copy(d[N]);const j=U.length();U.normalize();const J=_s.dot(U);if(J<j+g&&J>0){const re=mg,F=gg;re.copy(d[(N+1)%3]),F.copy(d[(N+2)%3]);const $=re.length(),te=F.length();re.normalize(),F.normalize();const ie=_s.dot(re),V=_s.dot(F);if(ie<$&&ie>-$&&V<te&&V>-te){const we=Math.abs(J-j-g);if((R===null||we<R)&&(R=we,M=ie,A=V,x=j,p.copy(U),_.copy(re),v.copy(F),b++,r))return!0}}}if(b){m=!0;const N=this.createContactEquation(a,u,e,t,h,f);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(x,p),_.scale(M,_),p.vadd(_,p),v.scale(A,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(u.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let w=l.get();const E=vg;for(let N=0;N!==2&&!m;N++)for(let Z=0;Z!==2&&!m;Z++)for(let U=0;U!==2&&!m;U++)if(w.set(0,0,0),N?w.vadd(d[0],w):w.vsub(d[0],w),Z?w.vadd(d[1],w):w.vsub(d[1],w),U?w.vadd(d[2],w):w.vsub(d[2],w),i.vadd(w,E),E.vsub(n,E),E.lengthSquared()<g*g){if(r)return!0;m=!0;const j=this.createContactEquation(a,u,e,t,h,f);j.ri.copy(E),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(w),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(u.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}l.release(w),w=null;const D=l.get(),k=l.get(),W=l.get(),L=l.get(),P=l.get(),I=d.length;for(let N=0;N!==I&&!m;N++)for(let Z=0;Z!==I&&!m;Z++)if(N%3!==Z%3){d[Z].cross(d[N],D),D.normalize(),d[N].vadd(d[Z],k),W.copy(n),W.vsub(k,W),W.vsub(i,W);const U=W.dot(D);D.scale(U,L);let j=0;for(;j===N%3||j===Z%3;)j++;P.copy(n),P.vsub(L,P),P.vsub(k,P),P.vsub(i,P);const J=Math.abs(U),re=P.length();if(J<d[j].length()&&re<g){if(r)return!0;m=!0;const F=this.createContactEquation(a,u,e,t,h,f);k.vadd(L,F.rj),F.rj.copy(F.rj),P.negate(F.ni),F.ni.normalize(),F.ri.copy(F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(n,F.ri),F.ri.normalize(),F.ri.scale(g,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(u.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}l.release(D,k,W,L,P)}planeBox(e,t,n,i,s,o,a,u,h,f,r){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,u,e,t,r)}convexConvex(e,t,n,i,s,o,a,u,h,f,r,l,d){const g=Ng;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,l,d)){const m=[],p=Bg;e.clipAgainstHull(n,s,t,i,o,g,-100,100,m);let _=0;for(let v=0;v!==m.length;v++){if(r)return!0;const x=this.createContactEquation(a,u,e,t,h,f),b=x.ri,M=x.rj;g.negate(x.ni),m[v].normal.negate(p),p.scale(m[v].depth,p),m[v].point.vadd(p,b),M.copy(m[v].point),b.vsub(n,b),M.vsub(i,M),b.vadd(n,b),b.vsub(a.position,b),M.vadd(i,M),M.vsub(u.position,M),this.result.push(x),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,o,a,u,h,f,r){const l=this.v3pool;n.vsub(i,wg);const d=t.faceNormals,g=t.faces,m=t.vertices,p=e.radius;let _=!1;for(let v=0;v!==m.length;v++){const x=m[v],b=Tg;o.vmult(x,b),i.vadd(b,b);const M=Eg;if(b.vsub(n,M),M.lengthSquared()<p*p){if(r)return!0;_=!0;const A=this.createContactEquation(a,u,e,t,h,f);A.ri.copy(M),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(p,A.ri),b.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(u.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&_===!1;v++){const b=d[v],M=g[v],A=Ag;o.vmult(b,A);const R=Cg;o.vmult(m[M[0]],R),R.vadd(i,R);const w=Lg;A.scale(-p,w),n.vadd(w,w);const E=Pg;w.vsub(R,E);const D=E.dot(A),k=Rg;if(n.vsub(R,k),D<0&&k.dot(A)>0){const W=[];for(let L=0,P=M.length;L!==P;L++){const I=l.get();o.vmult(m[M[L]],I),i.vadd(I,I),W.push(I)}if(fg(W,A,n)){if(r)return!0;_=!0;const L=this.createContactEquation(a,u,e,t,h,f);A.scale(-p,L.ri),A.negate(L.ni);const P=l.get();A.scale(-D,P);const I=l.get();A.scale(-p,I),n.vsub(i,L.rj),L.rj.vadd(I,L.rj),L.rj.vadd(P,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(u.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),l.release(P),l.release(I),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,Z=W.length;N!==Z;N++)l.release(W[N]);return}else for(let L=0;L!==M.length;L++){const P=l.get(),I=l.get();o.vmult(m[M[(L+1)%M.length]],P),o.vmult(m[M[(L+2)%M.length]],I),i.vadd(P,P),i.vadd(I,I);const N=Mg;I.vsub(P,N);const Z=Sg;N.unit(Z);const U=l.get(),j=l.get();n.vsub(P,j);const J=j.dot(Z);Z.scale(J,U),U.vadd(P,U);const re=l.get();if(U.vsub(n,re),J>0&&J*J<N.lengthSquared()&&re.lengthSquared()<p*p){if(r)return!0;const F=this.createContactEquation(a,u,e,t,h,f);U.vsub(i,F.rj),U.vsub(n,F.ni),F.ni.normalize(),F.ni.scale(p,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(u.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let $=0,te=W.length;$!==te;$++)l.release(W[$]);l.release(P),l.release(I),l.release(U),l.release(re),l.release(j);return}l.release(P),l.release(I),l.release(U),l.release(re),l.release(j)}for(let L=0,P=W.length;L!==P;L++)l.release(W[L])}}}planeConvex(e,t,n,i,s,o,a,u,h,f,r){const l=Dg,d=Ig;d.set(0,0,1),s.vmult(d,d);let g=0;const m=zg;for(let p=0;p!==t.vertices.length;p++)if(l.copy(t.vertices[p]),o.vmult(l,l),i.vadd(l,l),l.vsub(n,m),d.dot(m)<=0){if(r)return!0;const v=this.createContactEquation(a,u,e,t,h,f),x=Fg;d.scale(d.dot(m),x),l.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(d),l.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(u.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,a,u,h,f,r){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,u,e,t,r)}sphereHeightfield(e,t,n,i,s,o,a,u,h,f,r){const l=t.data,d=e.radius,g=t.elementSize,m=$g,p=Yg;ze.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-d)/g)-1,v=Math.ceil((p.x+d)/g)+1,x=Math.floor((p.y-d)/g)-1,b=Math.ceil((p.y+d)/g)+1;if(v<0||b<0||_>l.length||x>l[0].length)return;_<0&&(_=0),v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),_>=l.length&&(_=l.length-1),v>=l.length&&(v=l.length-1),b>=l[0].length&&(b=l[0].length-1),x>=l[0].length&&(x=l[0].length-1);const M=[];t.getRectMinMax(_,x,v,b,M);const A=M[0],R=M[1];if(p.z-d>R||p.z+d<A)return;const w=this.result;for(let E=_;E<v;E++)for(let D=x;D<b;D++){const k=w.length;let W=!1;if(t.getConvexTrianglePillar(E,D,!1),ze.pointToWorldFrame(i,o,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.sphereConvex(e,t.pillarConvex,n,m,s,o,a,u,e,t,r)),r&&W||(t.getConvexTrianglePillar(E,D,!0),ze.pointToWorldFrame(i,o,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.sphereConvex(e,t.pillarConvex,n,m,s,o,a,u,e,t,r)),r&&W))return!0;if(w.length-k>2)return}}boxHeightfield(e,t,n,i,s,o,a,u,h,f,r){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,u,e,t,r)}convexHeightfield(e,t,n,i,s,o,a,u,h,f,r){const l=t.data,d=t.elementSize,g=e.boundingSphereRadius,m=Xg,p=jg,_=qg;ze.pointToLocalFrame(i,o,n,_);let v=Math.floor((_.x-g)/d)-1,x=Math.ceil((_.x+g)/d)+1,b=Math.floor((_.y-g)/d)-1,M=Math.ceil((_.y+g)/d)+1;if(x<0||M<0||v>l.length||b>l[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),M<0&&(M=0),v>=l.length&&(v=l.length-1),x>=l.length&&(x=l.length-1),M>=l[0].length&&(M=l[0].length-1),b>=l[0].length&&(b=l[0].length-1);const A=[];t.getRectMinMax(v,b,x,M,A);const R=A[0],w=A[1];if(!(_.z-g>w||_.z+g<R))for(let E=v;E<x;E++)for(let D=b;D<M;D++){let k=!1;if(t.getConvexTrianglePillar(E,D,!1),ze.pointToWorldFrame(i,o,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,n,m,s,o,a,u,null,null,r,p,null)),r&&k||(t.getConvexTrianglePillar(E,D,!0),ze.pointToWorldFrame(i,o,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,n,m,s,o,a,u,null,null,r,p,null)),r&&k))return!0}}sphereParticle(e,t,n,i,s,o,a,u,h,f,r){const l=Gg;if(l.set(0,0,1),i.vsub(n,l),l.lengthSquared()<=e.radius*e.radius){if(r)return!0;const g=this.createContactEquation(u,a,t,e,h,f);l.normalize(),g.rj.copy(l),g.rj.scale(e.radius,g.rj),g.ni.copy(l),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,u,h,f,r){const l=Og;l.set(0,0,1),a.quaternion.vmult(l,l);const d=Ug;if(i.vsub(a.position,d),l.dot(d)<=0){if(r)return!0;const m=this.createContactEquation(u,a,t,e,h,f);m.ni.copy(l),m.ni.negate(m.ni),m.ri.set(0,0,0);const p=kg;l.scale(l.dot(i),p),i.vsub(p,p),m.rj.copy(p),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,u,h,f,r){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,u,e,t,r)}convexParticle(e,t,n,i,s,o,a,u,h,f,r){let l=-1;const d=Wg,g=Hg;let m=null;const p=Vg;if(p.copy(i),p.vsub(n,p),s.conjugate(Ea),Ea.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,v=e.faces.length;_!==v;_++){const x=[e.worldVertices[e.faces[_][0]]],b=e.worldFaceNormals[_];i.vsub(x[0],Ta);const M=-b.dot(Ta);if(m===null||Math.abs(M)<Math.abs(m)){if(r)return!0;m=M,l=_,d.copy(b)}}if(l!==-1){const _=this.createContactEquation(u,a,t,e,h,f);d.scale(m,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),d.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,x=_.rj;v.vadd(i,v),v.vsub(u.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,u,h,f,r){return this.convexHeightfield(t,e,i,n,o,s,u,a,h,f,r)}particleCylinder(e,t,n,i,s,o,a,u,h,f,r){return this.convexParticle(t,e,i,n,o,s,u,a,h,f,r)}sphereTrimesh(e,t,n,i,s,o,a,u,h,f,r){const l=Qm,d=eg,g=tg,m=ng,p=ig,_=sg,v=lg,x=Jm,b=Zm,M=cg;ze.pointToLocalFrame(i,o,n,p);const A=e.radius;v.lowerBound.set(p.x-A,p.y-A,p.z-A),v.upperBound.set(p.x+A,p.y+A,p.z+A),t.getTrianglesInAABB(v,M);const R=Km,w=e.radius*e.radius;for(let L=0;L<M.length;L++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[M[L]*3+P],R),R.vsub(p,b),b.lengthSquared()<=w){if(x.copy(R),ze.pointToWorldFrame(i,o,x,R),R.vsub(n,b),r)return!0;let I=this.createContactEquation(a,u,e,t,h,f);I.ni.copy(b),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(R),I.rj.vsub(u.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let L=0;L<M.length;L++)for(let P=0;P<3;P++){t.getVertex(t.indices[M[L]*3+P],l),t.getVertex(t.indices[M[L]*3+(P+1)%3],d),d.vsub(l,g),p.vsub(d,_);const I=_.dot(g);p.vsub(l,_);let N=_.dot(g);if(N>0&&I<0&&(p.vsub(l,_),m.copy(g),m.normalize(),N=_.dot(m),m.scale(N,_),_.vadd(l,_),_.distanceTo(p)<e.radius)){if(r)return!0;const U=this.createContactEquation(a,u,e,t,h,f);_.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),ze.pointToWorldFrame(i,o,_,_),_.vsub(u.position,U.rj),ze.vectorToWorldFrame(o,U.ni,U.ni),ze.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}const E=rg,D=og,k=ag,W=$m;for(let L=0,P=M.length;L!==P;L++){t.getTriangleVertices(M[L],E,D,k),t.getNormal(M[L],W),p.vsub(E,_);let I=_.dot(W);if(W.scale(I,_),p.vsub(_,_),I=_.distanceTo(p),Ye.pointInTriangle(_,E,D,k)&&I<e.radius){if(r)return!0;let N=this.createContactEquation(a,u,e,t,h,f);_.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ze.pointToWorldFrame(i,o,_,_),_.vsub(u.position,N.rj),ze.vectorToWorldFrame(o,N.ni,N.ni),ze.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,o,a,u,h,f,r){const l=new y,d=Xm;d.set(0,0,1),s.vmult(d,d);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,l);const m=new y;m.copy(l),ze.pointToWorldFrame(i,o,m,l);const p=jm;if(l.vsub(n,p),d.dot(p)<=0){if(r)return!0;const v=this.createContactEquation(a,u,e,t,h,f);v.ni.copy(d);const x=Ym;d.scale(p.dot(d),x),l.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(l),v.rj.vsub(u.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const In=new y,oi=new y,ai=new y,Vm=new y,Wm=new y,Hm=new $e,qm=new $e,Xm=new y,jm=new y,Ym=new y,$m=new y,Zm=new y;new y;const Km=new y,Jm=new y,Qm=new y,eg=new y,tg=new y,ng=new y,ig=new y,sg=new y,rg=new y,og=new y,ag=new y,lg=new Ct,cg=[],gs=new y,Sa=new y,ug=new y,hg=new y,dg=new y;function fg(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],a=ug;c[(s+1)%i].vsub(o,a);const u=hg;a.cross(e,u);const h=dg;t.vsub(o,h);const f=u.dot(h);if(n===null||f>0&&n===!0||f<=0&&n===!1){n===null&&(n=f>0);continue}else return!1}return!0}const _s=new y,pg=new y,mg=new y,gg=new y,_g=[new y,new y,new y,new y,new y,new y],vg=new y,xg=new y,yg=new y,bg=new y,wg=new y,Mg=new y,Sg=new y,Eg=new y,Tg=new y,Ag=new y,Cg=new y,Lg=new y,Pg=new y,Rg=new y;new y;new y;const Dg=new y,Ig=new y,zg=new y,Fg=new y,Ng=new y,Bg=new y,Og=new y,Ug=new y,kg=new y,Gg=new y,Ea=new $e,Vg=new y;new y;const Wg=new y,Ta=new y,Hg=new y,qg=new y,Xg=new y,jg=[0],Yg=new y,$g=new y;class Aa{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let u=0;u<s;u++){let h=!1;const f=n[u];for(;f>i[a];)a++;h=f===i[a],h||Ca(e,f)}a=0;for(let u=0;u<o;u++){let h=!1;const f=i[u];for(;f>n[a];)a++;h=n[a]===f,h||Ca(t,f)}}}function Ca(c,e){c.push((e&4294901760)>>16,e&65535)}const yr=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class Zg{constructor(){this.data={keys:[]}}get(e,t){const n=yr(e,t);return this.data[n]}set(e,t,n){const i=yr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=yr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Kg extends al{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new im,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Fm,this.constraints=[],this.narrowphase=new Gm(this),this.collisionMatrix=new fa,this.collisionMatrixPrevious=new fa,this.bodyOverlapKeeper=new Aa,this.shapeOverlapKeeper=new Aa,this.contactmaterials=[],this.contactMaterialTable=new Zg,this.defaultMaterial=new Cs("default"),this.defaultContactMaterial=new As(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof bs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Ye.ALL,n.from=e,n.to=t,n.callback=i,br.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Ye.ANY,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Ye.CLOSEST,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ce&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Qe.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Qe.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Qe.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const u=this.bodies[a];u.previousPosition.lerp(u.position,o,u.interpolatedPosition),u.previousQuaternion.slerp(u.quaternion,o,u.interpolatedQuaternion),u.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=n_,i=i_,s=this.bodies.length,o=this.bodies,a=this.solver,u=this.gravity,h=this.doProfiling,f=this.profile,r=ce.DYNAMIC;let l=-1/0;const d=this.constraints,g=t_;u.length();const m=u.x,p=u.y,_=u.z;let v=0;for(h&&(l=Qe.now()),v=0;v!==s;v++){const L=o[v];if(L.type===r){const P=L.force,I=L.mass;P.x+=I*m,P.y+=I*p,P.z+=I*_}}for(let L=0,P=this.subsystems.length;L!==P;L++)this.subsystems[L].update();h&&(l=Qe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),h&&(f.broadphase=Qe.now()-l);let x=d.length;for(v=0;v!==x;v++){const L=d[v];if(!L.collideConnected)for(let P=n.length-1;P>=0;P-=1)(L.bodyA===n[P]&&L.bodyB===i[P]||L.bodyB===n[P]&&L.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),h&&(l=Qe.now());const b=e_,M=t.length;for(v=0;v!==M;v++)b.push(t[v]);t.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),h&&(f.narrowphase=Qe.now()-l),h&&(l=Qe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=t.length;for(let L=0;L!==R;L++){const P=t[L],I=P.bi,N=P.bj,Z=P.si,U=P.sj;let j;if(I.material&&N.material?j=this.getContactMaterial(I.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,I.material&&N.material&&(I.material.friction>=0&&N.material.friction>=0&&I.material.friction*N.material.friction,I.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=I.material.restitution*N.material.restitution)),a.addEquation(P),I.allowSleep&&I.type===ce.DYNAMIC&&I.sleepState===ce.SLEEPING&&N.sleepState===ce.AWAKE&&N.type!==ce.STATIC){const J=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),re=N.sleepSpeedLimit**2;J>=re*2&&(I.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ce.DYNAMIC&&N.sleepState===ce.SLEEPING&&I.sleepState===ce.AWAKE&&I.type!==ce.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),re=I.sleepSpeedLimit**2;J>=re*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,N,!0),this.collisionMatrixPrevious.get(I,N)||(Ri.body=N,Ri.contact=P,I.dispatchEvent(Ri),Ri.body=I,N.dispatchEvent(Ri)),this.bodyOverlapKeeper.set(I.id,N.id),this.shapeOverlapKeeper.set(Z.id,U.id)}for(this.emitContactEvents(),h&&(f.makeContactConstraints=Qe.now()-l,l=Qe.now()),v=0;v!==s;v++){const L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=d.length,v=0;v!==x;v++){const L=d[v];L.update();for(let P=0,I=L.equations.length;P!==I;P++){const N=L.equations[P];a.addEquation(N)}}a.solve(e,this),h&&(f.solve=Qe.now()-l),a.removeAllEquations();const w=Math.pow;for(v=0;v!==s;v++){const L=o[v];if(L.type&r){const P=w(1-L.linearDamping,e),I=L.velocity;I.scale(P,I);const N=L.angularVelocity;if(N){const Z=w(1-L.angularDamping,e);N.scale(Z,N)}}}this.dispatchEvent(Qg),h&&(l=Qe.now());const D=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,D,k);this.clearForces(),this.broadphase.dirty=!0,h&&(f.integrate=Qe.now()-l),this.stepnumber+=1,this.dispatchEvent(Jg);let W=!0;if(this.allowSleep)for(W=!1,v=0;v!==s;v++){const L=o[v];L.sleepTick(this.time),L.sleepState!==ce.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(un,hn),e){for(let s=0,o=un.length;s<o;s+=2)Di.bodyA=this.getBodyById(un[s]),Di.bodyB=this.getBodyById(un[s+1]),this.dispatchEvent(Di);Di.bodyA=Di.bodyB=null}if(t){for(let s=0,o=hn.length;s<o;s+=2)Ii.bodyA=this.getBodyById(hn[s]),Ii.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(Ii);Ii.bodyA=Ii.bodyB=null}un.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(un,hn),n){for(let s=0,o=un.length;s<o;s+=2){const a=this.getShapeById(un[s]),u=this.getShapeById(un[s+1]);dn.shapeA=a,dn.shapeB=u,a&&(dn.bodyA=a.body),u&&(dn.bodyB=u.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}if(i){for(let s=0,o=hn.length;s<o;s+=2){const a=this.getShapeById(hn[s]),u=this.getShapeById(hn[s+1]);fn.shapeA=a,fn.shapeB=u,a&&(fn.bodyA=a.body),u&&(fn.bodyB=u.body),this.dispatchEvent(fn)}fn.bodyA=fn.bodyB=fn.shapeA=fn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ct;const br=new Ye,Qe=globalThis.performance||{};if(!Qe.now){let c=Date.now();Qe.timing&&Qe.timing.navigationStart&&(c=Qe.timing.navigationStart),Qe.now=()=>Date.now()-c}new y;const Jg={type:"postStep"},Qg={type:"preStep"},Ri={type:ce.COLLIDE_EVENT_NAME,body:null,contact:null},e_=[],t_=[],n_=[],i_=[],un=[],hn=[],Di={type:"beginContact",bodyA:null,bodyB:null},Ii={type:"endContact",bodyA:null,bodyB:null},dn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},fn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ml={};/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(c){(function(){var e=function(){this.init()};e.prototype={init:function(){var r=this||t;return r._counter=1e3,r._html5AudioPool=[],r.html5PoolSize=10,r._codecs={},r._howls=[],r._muted=!1,r._volume=1,r._canPlayEvent="canplaythrough",r._navigator=typeof window<"u"&&window.navigator?window.navigator:null,r.masterGain=null,r.noAudio=!1,r.usingWebAudio=!0,r.autoSuspend=!0,r.ctx=null,r.autoUnlock=!0,r._setup(),r},volume:function(r){var l=this||t;if(r=parseFloat(r),l.ctx||f(),typeof r<"u"&&r>=0&&r<=1){if(l._volume=r,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(r,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),m=0;m<g.length;m++){var p=l._howls[d]._soundById(g[m]);p&&p._node&&(p._node.volume=p._volume*r)}return l}return l._volume},mute:function(r){var l=this||t;l.ctx||f(),l._muted=r,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(r?0:l._volume,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),m=0;m<g.length;m++){var p=l._howls[d]._soundById(g[m]);p&&p._node&&(p._node.muted=r?!0:p._muted)}return l},stop:function(){for(var r=this||t,l=0;l<r._howls.length;l++)r._howls[l].stop();return r},unload:function(){for(var r=this||t,l=r._howls.length-1;l>=0;l--)r._howls[l].unload();return r.usingWebAudio&&r.ctx&&typeof r.ctx.close<"u"&&(r.ctx.close(),r.ctx=null,f()),r},codecs:function(r){return(this||t)._codecs[r.replace(/^x-/,"")]},_setup:function(){var r=this||t;if(r.state=r.ctx&&r.ctx.state||"suspended",r._autoSuspend(),!r.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(r._canPlayEvent="canplay")}catch{r.noAudio=!0}else r.noAudio=!0;try{var l=new Audio;l.muted&&(r.noAudio=!0)}catch{}return r.noAudio||r._setupCodecs(),r},_setupCodecs:function(){var r=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return r}if(!l||typeof l.canPlayType!="function")return r;var d=l.canPlayType("audio/mpeg;").replace(/^no$/,""),g=r._navigator?r._navigator.userAgent:"",m=g.match(/OPR\/([0-6].)/g),p=m&&parseInt(m[0].split("/")[1],10)<33,_=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,v=g.match(/Version\/(.*?) /),x=_&&v&&parseInt(v[1],10)<15;return r._codecs={mp3:!!(!p&&(d||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},r},_unlockAudio:function(){var r=this||t;if(!(r._audioUnlocked||!r.ctx)){r._audioUnlocked=!1,r.autoUnlock=!1,!r._mobileUnloaded&&r.ctx.sampleRate!==44100&&(r._mobileUnloaded=!0,r.unload()),r._scratchBuffer=r.ctx.createBuffer(1,1,22050);var l=function(d){for(;r._html5AudioPool.length<r.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,r._releaseHtml5Audio(g)}catch{r.noAudio=!0;break}for(var m=0;m<r._howls.length;m++)if(!r._howls[m]._webAudio)for(var p=r._howls[m]._getSoundIds(),_=0;_<p.length;_++){var v=r._howls[m]._soundById(p[_]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}r._autoResume();var x=r.ctx.createBufferSource();x.buffer=r._scratchBuffer,x.connect(r.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof r.ctx.resume=="function"&&r.ctx.resume(),x.onended=function(){x.disconnect(0),r._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var b=0;b<r._howls.length;b++)r._howls[b]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),r}},_obtainHtml5Audio:function(){var r=this||t;if(r._html5AudioPool.length)return r._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(r){var l=this||t;return r._unlocked&&l._html5AudioPool.push(r),l},_autoSuspend:function(){var r=this;if(!(!r.autoSuspend||!r.ctx||typeof r.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<r._howls.length;l++)if(r._howls[l]._webAudio){for(var d=0;d<r._howls[l]._sounds.length;d++)if(!r._howls[l]._sounds[d]._paused)return r}return r._suspendTimer&&clearTimeout(r._suspendTimer),r._suspendTimer=setTimeout(function(){if(r.autoSuspend){r._suspendTimer=null,r.state="suspending";var g=function(){r.state="suspended",r._resumeAfterSuspend&&(delete r._resumeAfterSuspend,r._autoResume())};r.ctx.suspend().then(g,g)}},3e4),r}},_autoResume:function(){var r=this;if(!(!r.ctx||typeof r.ctx.resume>"u"||!t.usingWebAudio))return r.state==="running"&&r.ctx.state!=="interrupted"&&r._suspendTimer?(clearTimeout(r._suspendTimer),r._suspendTimer=null):r.state==="suspended"||r.state==="running"&&r.ctx.state==="interrupted"?(r.ctx.resume().then(function(){r.state="running";for(var l=0;l<r._howls.length;l++)r._howls[l]._emit("resume")}),r._suspendTimer&&(clearTimeout(r._suspendTimer),r._suspendTimer=null)):r.state==="suspending"&&(r._resumeAfterSuspend=!0),r}};var t=new e,n=function(r){var l=this;if(!r.src||r.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(r)};n.prototype={init:function(r){var l=this;return t.ctx||f(),l._autoplay=r.autoplay||!1,l._format=typeof r.format!="string"?r.format:[r.format],l._html5=r.html5||!1,l._muted=r.mute||!1,l._loop=r.loop||!1,l._pool=r.pool||5,l._preload=typeof r.preload=="boolean"||r.preload==="metadata"?r.preload:!0,l._rate=r.rate||1,l._sprite=r.sprite||{},l._src=typeof r.src!="string"?r.src:[r.src],l._volume=r.volume!==void 0?r.volume:1,l._xhr={method:r.xhr&&r.xhr.method?r.xhr.method:"GET",headers:r.xhr&&r.xhr.headers?r.xhr.headers:null,withCredentials:r.xhr&&r.xhr.withCredentials?r.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=r.onend?[{fn:r.onend}]:[],l._onfade=r.onfade?[{fn:r.onfade}]:[],l._onload=r.onload?[{fn:r.onload}]:[],l._onloaderror=r.onloaderror?[{fn:r.onloaderror}]:[],l._onplayerror=r.onplayerror?[{fn:r.onplayerror}]:[],l._onpause=r.onpause?[{fn:r.onpause}]:[],l._onplay=r.onplay?[{fn:r.onplay}]:[],l._onstop=r.onstop?[{fn:r.onstop}]:[],l._onmute=r.onmute?[{fn:r.onmute}]:[],l._onvolume=r.onvolume?[{fn:r.onvolume}]:[],l._onrate=r.onrate?[{fn:r.onrate}]:[],l._onseek=r.onseek?[{fn:r.onseek}]:[],l._onunlock=r.onunlock?[{fn:r.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var r=this,l=null;if(t.noAudio){r._emit("loaderror",null,"No audio support.");return}typeof r._src=="string"&&(r._src=[r._src]);for(var d=0;d<r._src.length;d++){var g,m;if(r._format&&r._format[d])g=r._format[d];else{if(m=r._src[d],typeof m!="string"){r._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(m),g||(g=/\.([^.]+)$/.exec(m.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){l=r._src[d];break}}if(!l){r._emit("loaderror",null,"No codec support for selected audio sources.");return}return r._src=l,r._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(r._html5=!0,r._webAudio=!1),new i(r),r._webAudio&&o(r),r},play:function(r,l){var d=this,g=null;if(typeof r=="number")g=r,r=null;else{if(typeof r=="string"&&d._state==="loaded"&&!d._sprite[r])return null;if(typeof r>"u"&&(r="__default",!d._playLock)){for(var m=0,p=0;p<d._sounds.length;p++)d._sounds[p]._paused&&!d._sounds[p]._ended&&(m++,g=d._sounds[p]._id);m===1?r=null:g=null}}var _=g?d._soundById(g):d._inactiveSound();if(!_)return null;if(g&&!r&&(r=_._sprite||"__default"),d._state!=="loaded"){_._sprite=r,_._ended=!1;var v=_._id;return d._queue.push({event:"play",action:function(){d.play(v)}}),v}if(g&&!_._paused)return l||d._loadQueue("play"),_._id;d._webAudio&&t._autoResume();var x=Math.max(0,_._seek>0?_._seek:d._sprite[r][0]/1e3),b=Math.max(0,(d._sprite[r][0]+d._sprite[r][1])/1e3-x),M=b*1e3/Math.abs(_._rate),A=d._sprite[r][0]/1e3,R=(d._sprite[r][0]+d._sprite[r][1])/1e3;_._sprite=r,_._ended=!1;var w=function(){_._paused=!1,_._seek=x,_._start=A,_._stop=R,_._loop=!!(_._loop||d._sprite[r][2])};if(x>=R){d._ended(_);return}var E=_._node;if(d._webAudio){var D=function(){d._playLock=!1,w(),d._refreshBuffer(_);var P=_._muted||d._muted?0:_._volume;E.gain.setValueAtTime(P,t.ctx.currentTime),_._playStart=t.ctx.currentTime,typeof E.bufferSource.start>"u"?_._loop?E.bufferSource.noteGrainOn(0,x,86400):E.bufferSource.noteGrainOn(0,x,b):_._loop?E.bufferSource.start(0,x,86400):E.bufferSource.start(0,x,b),M!==1/0&&(d._endTimers[_._id]=setTimeout(d._ended.bind(d,_),M)),l||setTimeout(function(){d._emit("play",_._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?D():(d._playLock=!0,d.once("resume",D),d._clearTimer(_._id))}else{var k=function(){E.currentTime=x,E.muted=_._muted||d._muted||t._muted||E.muted,E.volume=_._volume*t.volume(),E.playbackRate=_._rate;try{var P=E.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(d._playLock=!0,w(),P.then(function(){d._playLock=!1,E._unlocked=!0,l?d._loadQueue():d._emit("play",_._id)}).catch(function(){d._playLock=!1,d._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),_._ended=!0,_._paused=!0})):l||(d._playLock=!1,w(),d._emit("play",_._id)),E.playbackRate=_._rate,E.paused){d._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}r!=="__default"||_._loop?d._endTimers[_._id]=setTimeout(d._ended.bind(d,_),M):(d._endTimers[_._id]=function(){d._ended(_),E.removeEventListener("ended",d._endTimers[_._id],!1)},E.addEventListener("ended",d._endTimers[_._id],!1))}catch(I){d._emit("playerror",_._id,I)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=d._src,E.load());var W=window&&window.ejecta||!E.readyState&&t._navigator.isCocoonJS;if(E.readyState>=3||W)k();else{d._playLock=!0,d._state="loading";var L=function(){d._state="loaded",k(),E.removeEventListener(t._canPlayEvent,L,!1)};E.addEventListener(t._canPlayEvent,L,!1),d._clearTimer(_._id)}}return _._id},pause:function(r){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(r)}}),l;for(var d=l._getSoundIds(r),g=0;g<d.length;g++){l._clearTimer(d[g]);var m=l._soundById(d[g]);if(m&&!m._paused&&(m._seek=l.seek(d[g]),m._rateSeek=0,m._paused=!0,l._stopFade(d[g]),m._node))if(l._webAudio){if(!m._node.bufferSource)continue;typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),l._cleanBuffer(m._node)}else(!isNaN(m._node.duration)||m._node.duration===1/0)&&m._node.pause();arguments[1]||l._emit("pause",m?m._id:null)}return l},stop:function(r,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(r)}}),d;for(var g=d._getSoundIds(r),m=0;m<g.length;m++){d._clearTimer(g[m]);var p=d._soundById(g[m]);p&&(p._seek=p._start||0,p._rateSeek=0,p._paused=!0,p._ended=!0,d._stopFade(g[m]),p._node&&(d._webAudio?p._node.bufferSource&&(typeof p._node.bufferSource.stop>"u"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),d._cleanBuffer(p._node)):(!isNaN(p._node.duration)||p._node.duration===1/0)&&(p._node.currentTime=p._start||0,p._node.pause(),p._node.duration===1/0&&d._clearSound(p._node))),l||d._emit("stop",p._id))}return d},mute:function(r,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(r,l)}}),d;if(typeof l>"u")if(typeof r=="boolean")d._muted=r;else return d._muted;for(var g=d._getSoundIds(l),m=0;m<g.length;m++){var p=d._soundById(g[m]);p&&(p._muted=r,p._interval&&d._stopFade(p._id),d._webAudio&&p._node?p._node.gain.setValueAtTime(r?0:p._volume,t.ctx.currentTime):p._node&&(p._node.muted=t._muted?!0:r),d._emit("mute",p._id))}return d},volume:function(){var r=this,l=arguments,d,g;if(l.length===0)return r._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var m=r._getSoundIds(),p=m.indexOf(l[0]);p>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length>=2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var _;if(typeof d<"u"&&d>=0&&d<=1){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,l)}}),r;typeof g>"u"&&(r._volume=d),g=r._getSoundIds(g);for(var v=0;v<g.length;v++)_=r._soundById(g[v]),_&&(_._volume=d,l[2]||r._stopFade(g[v]),r._webAudio&&_._node&&!_._muted?_._node.gain.setValueAtTime(d,t.ctx.currentTime):_._node&&!_._muted&&(_._node.volume=d*t.volume()),r._emit("volume",_._id))}else return _=g?r._soundById(g):r._sounds[0],_?_._volume:0;return r},fade:function(r,l,d,g){var m=this;if(m._state!=="loaded"||m._playLock)return m._queue.push({event:"fade",action:function(){m.fade(r,l,d,g)}}),m;r=Math.min(Math.max(0,parseFloat(r)),1),l=Math.min(Math.max(0,parseFloat(l)),1),d=parseFloat(d),m.volume(r,g);for(var p=m._getSoundIds(g),_=0;_<p.length;_++){var v=m._soundById(p[_]);if(v){if(g||m._stopFade(p[_]),m._webAudio&&!v._muted){var x=t.ctx.currentTime,b=x+d/1e3;v._volume=r,v._node.gain.setValueAtTime(r,x),v._node.gain.linearRampToValueAtTime(l,b)}m._startFadeInterval(v,r,l,d,p[_],typeof g>"u")}}return m},_startFadeInterval:function(r,l,d,g,m,p){var _=this,v=l,x=d-l,b=Math.abs(x/.01),M=Math.max(4,b>0?g/b:g),A=Date.now();r._fadeTo=d,r._interval=setInterval(function(){var R=(Date.now()-A)/g;A=Date.now(),v+=x*R,v=Math.round(v*100)/100,x<0?v=Math.max(d,v):v=Math.min(d,v),_._webAudio?r._volume=v:_.volume(v,r._id,!0),p&&(_._volume=v),(d<l&&v<=d||d>l&&v>=d)&&(clearInterval(r._interval),r._interval=null,r._fadeTo=null,_.volume(d,r._id),_._emit("fade",r._id))},M)},_stopFade:function(r){var l=this,d=l._soundById(r);return d&&d._interval&&(l._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,l.volume(d._fadeTo,r),d._fadeTo=null,l._emit("fade",r)),l},loop:function(){var r=this,l=arguments,d,g,m;if(l.length===0)return r._loop;if(l.length===1)if(typeof l[0]=="boolean")d=l[0],r._loop=d;else return m=r._soundById(parseInt(l[0],10)),m?m._loop:!1;else l.length===2&&(d=l[0],g=parseInt(l[1],10));for(var p=r._getSoundIds(g),_=0;_<p.length;_++)m=r._soundById(p[_]),m&&(m._loop=d,r._webAudio&&m._node&&m._node.bufferSource&&(m._node.bufferSource.loop=d,d&&(m._node.bufferSource.loopStart=m._start||0,m._node.bufferSource.loopEnd=m._stop,r.playing(p[_])&&(r.pause(p[_],!0),r.play(p[_],!0)))));return r},rate:function(){var r=this,l=arguments,d,g;if(l.length===0)g=r._sounds[0]._id;else if(l.length===1){var m=r._getSoundIds(),p=m.indexOf(l[0]);p>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var _;if(typeof d=="number"){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,l)}}),r;typeof g>"u"&&(r._rate=d),g=r._getSoundIds(g);for(var v=0;v<g.length;v++)if(_=r._soundById(g[v]),_){r.playing(g[v])&&(_._rateSeek=r.seek(g[v]),_._playStart=r._webAudio?t.ctx.currentTime:_._playStart),_._rate=d,r._webAudio&&_._node&&_._node.bufferSource?_._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):_._node&&(_._node.playbackRate=d);var x=r.seek(g[v]),b=(r._sprite[_._sprite][0]+r._sprite[_._sprite][1])/1e3-x,M=b*1e3/Math.abs(_._rate);(r._endTimers[g[v]]||!_._paused)&&(r._clearTimer(g[v]),r._endTimers[g[v]]=setTimeout(r._ended.bind(r,_),M)),r._emit("rate",_._id)}}else return _=r._soundById(g),_?_._rate:r._rate;return r},seek:function(){var r=this,l=arguments,d,g;if(l.length===0)r._sounds.length&&(g=r._sounds[0]._id);else if(l.length===1){var m=r._getSoundIds(),p=m.indexOf(l[0]);p>=0?g=parseInt(l[0],10):r._sounds.length&&(g=r._sounds[0]._id,d=parseFloat(l[0]))}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(r._state!=="loaded"||r._playLock))return r._queue.push({event:"seek",action:function(){r.seek.apply(r,l)}}),r;var _=r._soundById(g);if(_)if(typeof d=="number"&&d>=0){var v=r.playing(g);v&&r.pause(g,!0),_._seek=d,_._ended=!1,r._clearTimer(g),!r._webAudio&&_._node&&!isNaN(_._node.duration)&&(_._node.currentTime=d);var x=function(){v&&r.play(g,!0),r._emit("seek",g)};if(v&&!r._webAudio){var b=function(){r._playLock?setTimeout(b,0):x()};setTimeout(b,0)}else x()}else if(r._webAudio){var M=r.playing(g)?t.ctx.currentTime-_._playStart:0,A=_._rateSeek?_._rateSeek-_._seek:0;return _._seek+(A+M*Math.abs(_._rate))}else return _._node.currentTime;return r},playing:function(r){var l=this;if(typeof r=="number"){var d=l._soundById(r);return d?!d._paused:!1}for(var g=0;g<l._sounds.length;g++)if(!l._sounds[g]._paused)return!0;return!1},duration:function(r){var l=this,d=l._duration,g=l._soundById(r);return g&&(d=l._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var r=this,l=r._sounds,d=0;d<l.length;d++)l[d]._paused||r.stop(l[d]._id),r._webAudio||(r._clearSound(l[d]._node),l[d]._node.removeEventListener("error",l[d]._errorFn,!1),l[d]._node.removeEventListener(t._canPlayEvent,l[d]._loadFn,!1),l[d]._node.removeEventListener("ended",l[d]._endFn,!1),t._releaseHtml5Audio(l[d]._node)),delete l[d]._node,r._clearTimer(l[d]._id);var g=t._howls.indexOf(r);g>=0&&t._howls.splice(g,1);var m=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===r._src||r._src.indexOf(t._howls[d]._src)>=0){m=!1;break}return s&&m&&delete s[r._src],t.noAudio=!1,r._state="unloaded",r._sounds=[],r=null,null},on:function(r,l,d,g){var m=this,p=m["_on"+r];return typeof l=="function"&&p.push(g?{id:d,fn:l,once:g}:{id:d,fn:l}),m},off:function(r,l,d){var g=this,m=g["_on"+r],p=0;if(typeof l=="number"&&(d=l,l=null),l||d)for(p=0;p<m.length;p++){var _=d===m[p].id;if(l===m[p].fn&&_||!l&&_){m.splice(p,1);break}}else if(r)g["_on"+r]=[];else{var v=Object.keys(g);for(p=0;p<v.length;p++)v[p].indexOf("_on")===0&&Array.isArray(g[v[p]])&&(g[v[p]]=[])}return g},once:function(r,l,d){var g=this;return g.on(r,l,d,1),g},_emit:function(r,l,d){for(var g=this,m=g["_on"+r],p=m.length-1;p>=0;p--)(!m[p].id||m[p].id===l||r==="load")&&(setTimeout(function(_){_.call(this,l,d)}.bind(g,m[p].fn),0),m[p].once&&g.off(r,m[p].fn,m[p].id));return g._loadQueue(r),g},_loadQueue:function(r){var l=this;if(l._queue.length>0){var d=l._queue[0];d.event===r&&(l._queue.shift(),l._loadQueue()),r||d.action()}return l},_ended:function(r){var l=this,d=r._sprite;if(!l._webAudio&&r._node&&!r._node.paused&&!r._node.ended&&r._node.currentTime<r._stop)return setTimeout(l._ended.bind(l,r),100),l;var g=!!(r._loop||l._sprite[d][2]);if(l._emit("end",r._id),!l._webAudio&&g&&l.stop(r._id,!0).play(r._id),l._webAudio&&g){l._emit("play",r._id),r._seek=r._start||0,r._rateSeek=0,r._playStart=t.ctx.currentTime;var m=(r._stop-r._start)*1e3/Math.abs(r._rate);l._endTimers[r._id]=setTimeout(l._ended.bind(l,r),m)}return l._webAudio&&!g&&(r._paused=!0,r._ended=!0,r._seek=r._start||0,r._rateSeek=0,l._clearTimer(r._id),l._cleanBuffer(r._node),t._autoSuspend()),!l._webAudio&&!g&&l.stop(r._id,!0),l},_clearTimer:function(r){var l=this;if(l._endTimers[r]){if(typeof l._endTimers[r]!="function")clearTimeout(l._endTimers[r]);else{var d=l._soundById(r);d&&d._node&&d._node.removeEventListener("ended",l._endTimers[r],!1)}delete l._endTimers[r]}return l},_soundById:function(r){for(var l=this,d=0;d<l._sounds.length;d++)if(r===l._sounds[d]._id)return l._sounds[d];return null},_inactiveSound:function(){var r=this;r._drain();for(var l=0;l<r._sounds.length;l++)if(r._sounds[l]._ended)return r._sounds[l].reset();return new i(r)},_drain:function(){var r=this,l=r._pool,d=0,g=0;if(!(r._sounds.length<l)){for(g=0;g<r._sounds.length;g++)r._sounds[g]._ended&&d++;for(g=r._sounds.length-1;g>=0;g--){if(d<=l)return;r._sounds[g]._ended&&(r._webAudio&&r._sounds[g]._node&&r._sounds[g]._node.disconnect(0),r._sounds.splice(g,1),d--)}}},_getSoundIds:function(r){var l=this;if(typeof r>"u"){for(var d=[],g=0;g<l._sounds.length;g++)d.push(l._sounds[g]._id);return d}else return[r]},_refreshBuffer:function(r){var l=this;return r._node.bufferSource=t.ctx.createBufferSource(),r._node.bufferSource.buffer=s[l._src],r._panner?r._node.bufferSource.connect(r._panner):r._node.bufferSource.connect(r._node),r._node.bufferSource.loop=r._loop,r._loop&&(r._node.bufferSource.loopStart=r._start||0,r._node.bufferSource.loopEnd=r._stop||0),r._node.bufferSource.playbackRate.setValueAtTime(r._rate,t.ctx.currentTime),l},_cleanBuffer:function(r){var l=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&r.bufferSource&&(r.bufferSource.onended=null,r.bufferSource.disconnect(0),d))try{r.bufferSource.buffer=t._scratchBuffer}catch{}return r.bufferSource=null,l},_clearSound:function(r){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(r.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(r){this._parent=r,this.init()};i.prototype={init:function(){var r=this,l=r._parent;return r._muted=l._muted,r._loop=l._loop,r._volume=l._volume,r._rate=l._rate,r._seek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++t._counter,l._sounds.push(r),r.create(),r},create:function(){var r=this,l=r._parent,d=t._muted||r._muted||r._parent._muted?0:r._volume;return l._webAudio?(r._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),r._node.gain.setValueAtTime(d,t.ctx.currentTime),r._node.paused=!0,r._node.connect(t.masterGain)):t.noAudio||(r._node=t._obtainHtml5Audio(),r._errorFn=r._errorListener.bind(r),r._node.addEventListener("error",r._errorFn,!1),r._loadFn=r._loadListener.bind(r),r._node.addEventListener(t._canPlayEvent,r._loadFn,!1),r._endFn=r._endListener.bind(r),r._node.addEventListener("ended",r._endFn,!1),r._node.src=l._src,r._node.preload=l._preload===!0?"auto":l._preload,r._node.volume=d*t.volume(),r._node.load()),r},reset:function(){var r=this,l=r._parent;return r._muted=l._muted,r._loop=l._loop,r._volume=l._volume,r._rate=l._rate,r._seek=0,r._rateSeek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++t._counter,r},_errorListener:function(){var r=this;r._parent._emit("loaderror",r._id,r._node.error?r._node.error.code:0),r._node.removeEventListener("error",r._errorFn,!1)},_loadListener:function(){var r=this,l=r._parent;l._duration=Math.ceil(r._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),r._node.removeEventListener(t._canPlayEvent,r._loadFn,!1)},_endListener:function(){var r=this,l=r._parent;l._duration===1/0&&(l._duration=Math.ceil(r._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(r)),r._node.removeEventListener("ended",r._endFn,!1)}};var s={},o=function(r){var l=r._src;if(s[l]){r._duration=s[l].duration,h(r);return}if(/^data:[^;]+;base64,/.test(l)){for(var d=atob(l.split(",")[1]),g=new Uint8Array(d.length),m=0;m<d.length;++m)g[m]=d.charCodeAt(m);u(g.buffer,r)}else{var p=new XMLHttpRequest;p.open(r._xhr.method,l,!0),p.withCredentials=r._xhr.withCredentials,p.responseType="arraybuffer",r._xhr.headers&&Object.keys(r._xhr.headers).forEach(function(_){p.setRequestHeader(_,r._xhr.headers[_])}),p.onload=function(){var _=(p.status+"")[0];if(_!=="0"&&_!=="2"&&_!=="3"){r._emit("loaderror",null,"Failed loading audio file with status: "+p.status+".");return}u(p.response,r)},p.onerror=function(){r._webAudio&&(r._html5=!0,r._webAudio=!1,r._sounds=[],delete s[l],r.load())},a(p)}},a=function(r){try{r.send()}catch{r.onerror()}},u=function(r,l){var d=function(){l._emit("loaderror",null,"Decoding audio data failed.")},g=function(m){m&&l._sounds.length>0?(s[l._src]=m,h(l,m)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(r).then(g).catch(d):t.ctx.decodeAudioData(r,g,d)},h=function(r,l){l&&!r._duration&&(r._duration=l.duration),Object.keys(r._sprite).length===0&&(r._sprite={__default:[0,r._duration*1e3]}),r._state!=="loaded"&&(r._state="loaded",r._emit("load"),r._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var r=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=l?parseInt(l[1],10):null;if(r&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};c.Howler=t,c.Howl=n,typeof zi<"u"?(zi.HowlerGlobal=e,zi.Howler=t,zi.Howl=n,zi.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})()})(ml);const s_=!1,gl=1,at=1.6,Jt=30,Ft={segments:50,edgeRadius:.07,notchRadius:.2,notchDepth:.12},r_=document.querySelector(".instructions"),La=document.querySelector(".result"),o_=document.querySelector("canvas"),li={width:window.innerWidth,height:window.innerHeight},En=new yp;En.background=new Be(4096);const Rr=new sl({canvas:o_}),Ls=new Kg({gravity:new y(0,-98,0),allowSleep:!0});Ls.defaultContactMaterial.restitution=.25;const a_=["one","two","three","four","five","six"],l_=new ml.Howl({src:["/audio/sounds.ogg","/audio/sounds.m4a","/audio/sounds.mp3","/audio/sounds.ac3"],sprite:{five:[0,707.3696145124716],four:[2e3,671.5873015873015],one:[4e3,733.5600907029481],six:[6e3,817.3922902494332],three:[8e3,654.9659863945578],two:[1e4,618.2993197278907]}});function _l(){li.width=window.innerWidth,li.height=window.innerHeight,Xt.aspect=li.width/li.height,Xt.updateProjectionMatrix(),Rr.setSize(li.width,li.height),Rr.setPixelRatio(Math.min(window.devicePixelRatio,2))}function Pa(c){return c=1/Ft.notchRadius*c,c=Math.PI*Math.max(-1,Math.min(1,c)),Ft.notchDepth*(Math.cos(c)+1)}const He=c=>Pa(c[0])*Pa(c[1]);function c_(c){const e=.23*at,t=Math.abs(c.x),n=Math.abs(c.y),i=Math.abs(c.z);let s;n>t&&n>i?s=c.y>0?1:6:t>i?s=c.x>0?2:5:s=c.z>0?3:4;const o=c.clone();switch(s){case 1:o.y-=He([o.x,o.z]);break;case 2:o.x-=He([o.y+e,o.z+e]),o.x-=He([o.y-e,o.z-e]);break;case 3:o.z-=He([o.x-e,o.y+e]),o.z-=He([o.x,o.y]),o.z-=He([o.x+e,o.y-e]);break;case 4:o.z+=He([o.x+e,o.y+e]),o.z+=He([o.x+e,o.y-e]),o.z+=He([o.x-e,o.y+e]),o.z+=He([o.x-e,o.y-e]);break;case 5:o.x+=He([o.y+e,o.z+e]),o.x+=He([o.y+e,o.z-e]),o.x+=He([o.y,o.z]),o.x+=He([o.y-e,o.z+e]),o.x+=He([o.y-e,o.z-e]);break;case 6:o.y+=He([o.x+e,o.z+e]),o.y+=He([o.x+e,o.z]),o.y+=He([o.x+e,o.z-e]),o.y+=He([o.x-e,o.z+e]),o.y+=He([o.x-e,o.z]),o.y+=He([o.x-e,o.z-e]);break}return o}function u_(c,e,t,n,i,s){const o=c.clone();return n&&i?(t.z=0,t.normalize().multiplyScalar(at*Ft.edgeRadius),o.x=e.x+t.x,o.y=e.y+t.y):n&&s?(t.y=0,t.normalize().multiplyScalar(at*Ft.edgeRadius),o.x=e.x+t.x,o.z=e.z+t.z):(t.x=0,t.normalize().multiplyScalar(at*Ft.edgeRadius),o.y=e.y+t.y,o.z=e.z+t.z),o}function h_(c,e){return e.normalize().multiplyScalar(at*Ft.edgeRadius),c.add(e)}function d_(){let c=new yi(at,at,at,Ft.segments,Ft.segments,Ft.segments);c.deleteAttribute("normal"),c.deleteAttribute("uv"),c=Lp(c);const e=c.attributes.position,t=e.count,n=at*(.5-Ft.edgeRadius);for(let i=0;i<t;++i){let s=new O().fromBufferAttribute(e,i);const o=Math.abs(s.x)>n,a=Math.abs(s.y)>n,u=Math.abs(s.z)>n,h=o+a+u;if(h<=1)s=c_(s);else{const f=new O(Math.sign(s.x),Math.sign(s.y),Math.sign(s.z)).multiplyScalar(n),r=new O().subVectors(s,f);h===2?s=u_(s,f,r,o,a,u):s=h_(f,r)}e.setXYZ(i,s.x,s.y,s.z)}return c.computeVertexNormals(),c}function f_(){const c=new qi(at-2*Ft.edgeRadius,at-2*Ft.edgeRadius),e=at*.483;return Cp([c.clone().translate(0,0,e),c.clone().translate(0,0,-e),c.clone().rotateX(.5*Math.PI).translate(0,e,0),c.clone().rotateX(.5*Math.PI).translate(0,-e,0),c.clone().rotateY(.5*Math.PI).translate(e,0,0),c.clone().rotateY(.5*Math.PI).translate(-e,0,0)])}const p_=new Fr({color:13816265,metalness:.1,roughness:.4}),m_=new Fr({color:0,metalness:.8,roughness:.2,side:mn});function g_(){const c=new Bi,e=d_(),t=new Wt(e,p_),n=f_(),i=new Wt(n,m_);return c.add(t,i),c}const __=(()=>{const c=g_();return function(){const t=c.clone(),n=at*.5,i=new ce({mass:1,shape:new Ts(new y(n,n,n)),sleepTimeLimit:.2,allowSleep:!1});return[t,i]}})();function v_(c){c.addEventListener("sleep",e=>{c.allowSleep=!1;const t=new y;c.quaternion.toEuler(t);const n=.1;let i=u=>Math.abs(u)<n,s=u=>Math.abs(u-.5*Math.PI)<n,o=u=>Math.abs(.5*Math.PI+u)<n,a=u=>Math.abs(Math.PI-u)<n||Math.abs(Math.PI+u)<n;i(t.z)?i(t.x)?ci(1):s(t.x)?ci(4):o(t.x)?ci(3):a(t.x)?ci(6):Mn.body.allowSleep=!0:s(t.z)?ci(2):o(t.z)?ci(5):Mn.body.allowSleep=!0})}const[x_,ci]=(()=>{let c=[];return[()=>{c=[],La.textContent=""},n=>{if(c.push(n),l_.play(a_[n-1]),c.length===gl){La.textContent=c[0];return}}]})();function y_(){const c=new Wt(new qi(1e3,1e3),new Fr({color:4096}));c.quaternion.setFromAxisAngle(new O(-1,0,0),Math.PI*.5),En.add(c);const e=new ce({type:ce.STATIC,shape:new Im});e.quaternion.setFromAxisAngle(new O(-1,0,0),Math.PI*.5),Ls.addBody(e)}const Mn=Array.from({length:gl},__);Mn.forEach(([c,e])=>{En.add(c),Ls.addBody(e),v_(e)});y_();const b_=new Tp(16777215,.5);En.add(b_);const Ps=new Ep(16777215,.8);Ps.position.set(Jt/2,Jt,Jt/2);Ps.target.position.set(-Jt/2,0,-Jt/2);Ps.target.updateWorldMatrix();En.add(Ps);const vl=new Ap(5);vl.visible=s_;En.add(vl);const Xt=new zt(75,1,.1,100);Xt.position.x=Jt/2;Xt.position.y=Jt;Xt.position.z=Jt/2;Xt.near=.1;Xt.far=100;En.add(Xt);const w_=new O(0,Jt*.8,Jt/2*.8),wr=new O(0,0,-1);function Ur(){Ra||(r_.remove(),Ra=!0);const c=Mn.length;Mn.forEach(([e,t],n)=>{x_(),t.allowSleep=!0,t.velocity.setZero(),t.angularVelocity.set(Math.random()*Math.PI*8,0,Math.random()*Math.PI*8);const i=new O(((c-1)/2-n)*at*2,0,0).add(w_);t.position.copy(i),e.rotation.set(2*Math.PI*Math.random(),0,2*Math.PI*Math.random()),t.quaternion.copy(e.quaternion);const s=(3+5*Math.random())*7;t.applyImpulse(new y(wr.x,wr.y,wr.z).scale(s))})}window.addEventListener("click",Ur);window.addEventListener("touchstart",Ur);window.addEventListener("keydown",c=>{c.code==="Space"&&Ur()});const M_=new O(at,at*2,at);function xl(c){requestAnimationFrame(xl),Ls.fixedStep(),Mn.forEach(([e,t])=>{e.position.copy(t.position),e.quaternion.copy(t.quaternion)}),Xt.position.copy(Mn[0][0].position).add(M_),Xt.lookAt(Mn[0][0].position),Rr.render(En,Xt)}let Ra=!1;window.addEventListener("resize",_l);_l();requestAnimationFrame(xl);
