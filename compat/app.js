var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1014,p=1015,m=1016,h=1020,g=1023,_=1026,v=1027,y=2300,b=2301,x=2302,S=2400,C=2401,w=2402,T=3200,E=3201,D=`srgb`,O=`srgb-linear`,k=`display-p3`,A=`display-p3-linear`,j=`linear`,M=`srgb`,N=`rec709`,P=7680,ee=35044,F=1035,te=2e3,ne=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},re=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ie=1234567,ae=Math.PI/180,oe=180/Math.PI;function se(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(re[e&255]+re[e>>8&255]+re[e>>16&255]+re[e>>24&255]+`-`+re[t&255]+re[t>>8&255]+`-`+re[t>>16&15|64]+re[t>>24&255]+`-`+re[n&63|128]+re[n>>8&255]+`-`+re[n>>16&255]+re[n>>24&255]+re[r&255]+re[r>>8&255]+re[r>>16&255]+re[r>>24&255]).toLowerCase()}function ce(e,t,n){return Math.max(t,Math.min(n,e))}function I(e,t){return(e%t+t)%t}function le(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ue(e,t,n){return e===t?0:(n-e)/(t-e)}function de(e,t,n){return(1-n)*e+n*t}function fe(e,t,n,r){return de(e,t,1-Math.exp(-n*r))}function pe(e,t=1){return t-Math.abs(I(e,t*2)-t)}function me(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function L(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function he(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ge(e,t){return e+Math.random()*(t-e)}function R(e){return e*(.5-Math.random())}function z(e){e!==void 0&&(ie=e);let t=ie+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _e(e){return e*ae}function B(e){return e*oe}function ve(e){return!(e&e-1)&&e!==0}function ye(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function be(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function xe(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Se(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function V(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Ce={DEG2RAD:ae,RAD2DEG:oe,generateUUID:se,clamp:ce,euclideanModulo:I,mapLinear:le,inverseLerp:ue,lerp:de,damp:fe,pingpong:pe,smoothstep:me,smootherstep:L,randInt:he,randFloat:ge,randFloatSpread:R,seededRandom:z,degToRad:_e,radToDeg:B,isPowerOfTwo:ve,ceilPowerOfTwo:ye,floorPowerOfTwo:be,setQuaternionFromProperEuler:xe,normalize:V,denormalize:Se},H=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ce(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},U=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(we.makeScale(e,t)),this}rotate(e){return this.premultiply(we.makeRotation(-e)),this}translate(e,t){return this.premultiply(we.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},we=new U;function Te(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ee(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function De(){let e=Ee(`canvas`);return e.style.display=`block`,e}var Oe={};function ke(e){e in Oe||(Oe[e]=!0,console.warn(e))}var Ae=new U().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),je=new U().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Me={[O]:{transfer:j,primaries:N,toReference:e=>e,fromReference:e=>e},[D]:{transfer:M,primaries:N,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[A]:{transfer:j,primaries:`p3`,toReference:e=>e.applyMatrix3(je),fromReference:e=>e.applyMatrix3(Ae)},[k]:{transfer:M,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(je),fromReference:e=>e.applyMatrix3(Ae).convertLinearToSRGB()}},Ne=new Set([O,A]),W={enabled:!0,_workingColorSpace:O,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Ne.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Me[t].toReference,i=Me[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Me[e].primaries},getTransfer:function(e){return e===``?j:Me[e].transfer}};function Pe(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Fe(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ie,Le=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ie===void 0&&(Ie=Ee(`canvas`)),Ie.width=e.width,Ie.height=e.height;let n=Ie.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ie}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ee(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pe(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pe(t[e]/255)*255):t[e]=Pe(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Re=0,ze=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Re++}),this.uuid=se(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Be(r[t].image)):e.push(Be(r[t]))}else e=Be(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Le.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Ve=0,He=class e extends ne{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=g,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ve++}),this.uuid=se(),this.name=``,this.source=new ze(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};He.DEFAULT_IMAGE=null,He.DEFAULT_MAPPING=300,He.DEFAULT_ANISOTROPY=1;var Ue=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},We=class extends ne{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let i=new He(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ze(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ge=class extends We{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ke=class extends He{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qe=class extends He{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Je=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ce(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xe.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xe.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ye.copy(this).projectOnVector(e),this.sub(Ye)}reflect(e){return this.sub(Ye.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ce(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ye=new G,Xe=new Je,Ze=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($e.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($e.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$e.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$e):$e.fromBufferAttribute(r,t),$e.applyMatrix4(e.matrixWorld),this.expandByPoint($e);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),et.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),et.copy(e.boundingBox)),et.applyMatrix4(e.matrixWorld),this.union(et)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$e),$e.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(st),ct.subVectors(this.max,st),tt.subVectors(e.a,st),nt.subVectors(e.b,st),rt.subVectors(e.c,st),it.subVectors(nt,tt),at.subVectors(rt,nt),ot.subVectors(tt,rt);let t=[0,-it.z,it.y,0,-at.z,at.y,0,-ot.z,ot.y,it.z,0,-it.x,at.z,0,-at.x,ot.z,0,-ot.x,-it.y,it.x,0,-at.y,at.x,0,-ot.y,ot.x,0];return!dt(t,tt,nt,rt,ct)||(t=[1,0,0,0,1,0,0,0,1],!dt(t,tt,nt,rt,ct))?!1:(lt.crossVectors(it,at),t=[lt.x,lt.y,lt.z],dt(t,tt,nt,rt,ct))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$e).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($e).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qe)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qe=[new G,new G,new G,new G,new G,new G,new G,new G],$e=new G,et=new Ze,tt=new G,nt=new G,rt=new G,it=new G,at=new G,ot=new G,st=new G,ct=new G,lt=new G,ut=new G;function dt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ut.fromArray(e,a);let o=i.x*Math.abs(ut.x)+i.y*Math.abs(ut.y)+i.z*Math.abs(ut.z),s=t.dot(ut),c=n.dot(ut),l=r.dot(ut);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ft=new Ze,pt=new G,mt=new G,ht=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ft.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pt.subVectors(e,this.center);let t=pt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(pt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pt.copy(e.center).add(mt)),this.expandByPoint(pt.copy(e.center).sub(mt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gt=new G,_t=new G,vt=new G,yt=new G,bt=new G,xt=new G,St=new G,Ct=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gt.copy(this.origin).addScaledVector(this.direction,t),gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_t.copy(e).add(t).multiplyScalar(.5),vt.copy(t).sub(e).normalize(),yt.copy(this.origin).sub(_t);let i=e.distanceTo(t)*.5,a=-this.direction.dot(vt),o=yt.dot(this.direction),s=-yt.dot(vt),c=yt.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_t).addScaledVector(vt,d),f}intersectSphere(e,t){gt.subVectors(e.center,this.origin);let n=gt.dot(this.direction),r=gt.dot(gt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gt)!==null}intersectTriangle(e,t,n,r,i){bt.subVectors(t,e),xt.subVectors(n,e),St.crossVectors(bt,xt);let a=this.direction.dot(St),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yt.subVectors(this.origin,e);let s=o*this.direction.dot(xt.crossVectors(yt,xt));if(s<0)return null;let c=o*this.direction.dot(bt.cross(yt));if(c<0||s+c>a)return null;let l=-o*yt.dot(St);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Tt.setFromMatrixColumn(e,0).length(),i=1/Tt.setFromMatrixColumn(e,1).length(),a=1/Tt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dt,e,Ot)}lookAt(e,t,n){let r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),kt.crossVectors(n,jt),kt.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),kt.crossVectors(n,jt)),kt.normalize(),At.crossVectors(jt,kt),r[0]=kt.x,r[4]=At.x,r[8]=jt.x,r[1]=kt.y,r[5]=At.y,r[9]=jt.y,r[2]=kt.z,r[6]=At.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Tt.set(r[0],r[1],r[2]).length(),a=Tt.set(r[4],r[5],r[6]).length(),o=Tt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Et.copy(this);let s=1/i,c=1/a,l=1/o;return Et.elements[0]*=s,Et.elements[1]*=s,Et.elements[2]*=s,Et.elements[4]*=c,Et.elements[5]*=c,Et.elements[6]*=c,Et.elements[8]*=l,Et.elements[9]*=l,Et.elements[10]*=l,t.setFromRotationMatrix(Et),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=te){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=te){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tt=new G,Et=new wt,Dt=new G(0,0,0),Ot=new G(1,1,1),kt=new G,At=new G,jt=new G,Mt=new wt,Nt=new Je,Pt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ce(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ce(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nt.setFromEuler(this),this.setFromQuaternion(Nt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pt.DEFAULT_ORDER=`XYZ`;var Ft=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},It=0,Lt=new G,Rt=new Je,zt=new wt,Bt=new G,Vt=new G,Ht=new G,Ut=new Je,Wt=new G(1,0,0),Gt=new G(0,1,0),Kt=new G(0,0,1),qt={type:`added`},Jt={type:`removed`},Yt={type:`childadded`,child:null},Xt={type:`childremoved`,child:null},Zt=class e extends ne{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=se(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Pt,r=new Je,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new U}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ft,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rt.setFromAxisAngle(e,t),this.quaternion.multiply(Rt),this}rotateOnWorldAxis(e,t){return Rt.setFromAxisAngle(e,t),this.quaternion.premultiply(Rt),this}rotateX(e){return this.rotateOnAxis(Wt,e)}rotateY(e){return this.rotateOnAxis(Gt,e)}rotateZ(e){return this.rotateOnAxis(Kt,e)}translateOnAxis(e,t){return Lt.copy(e).applyQuaternion(this.quaternion),this.position.add(Lt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wt,e)}translateY(e){return this.translateOnAxis(Gt,e)}translateZ(e){return this.translateOnAxis(Kt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bt.copy(e):Bt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(Vt,Bt,this.up):zt.lookAt(Bt,Vt,this.up),this.quaternion.setFromRotationMatrix(zt),r&&(zt.extractRotation(r.matrixWorld),Rt.setFromRotationMatrix(zt),this.quaternion.premultiply(Rt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qt),Yt.child=e,this.dispatchEvent(Yt),Yt.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jt),Xt.child=e,this.dispatchEvent(Xt),Xt.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vt,e,Ht),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vt,Ut,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Zt.DEFAULT_UP=new G(0,1,0),Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=new G,$t=new G,en=new G,tn=new G,nn=new G,rn=new G,an=new G,on=new G,sn=new G,cn=new G,ln=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Qt.subVectors(r,t),$t.subVectors(n,t),en.subVectors(e,t);let a=Qt.dot(Qt),o=Qt.dot($t),s=Qt.dot(en),c=$t.dot($t),l=$t.dot(en),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tn)!==null&&tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,tn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,tn.x),s.addScaledVector(a,tn.y),s.addScaledVector(o,tn.z),s)}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),$t.subVectors(e,t),Qt.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Qt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;nn.subVectors(r,n),rn.subVectors(i,n),on.subVectors(e,n);let s=nn.dot(on),c=rn.dot(on);if(s<=0&&c<=0)return t.copy(n);sn.subVectors(e,r);let l=nn.dot(sn),u=rn.dot(sn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(nn,a);cn.subVectors(e,i);let f=nn.dot(cn),p=rn.dot(cn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(rn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return an.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(an,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(nn,a).addScaledVector(rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},fn={h:0,s:0,l:0};function pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var mn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=D){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=I(e,1),t=ce(t,0,1),n=ce(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pn(i,r,e+1/3),this.g=pn(i,r,e),this.b=pn(i,r,e-1/3)}return W.toWorkingColorSpace(this,r),this}setStyle(e,t=D){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=D){let n=un[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pe(e.r),this.g=Pe(e.g),this.b=Pe(e.b),this}copyLinearToSRGB(e){return this.r=Fe(e.r),this.g=Fe(e.g),this.b=Fe(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=D){return W.fromWorkingColorSpace(hn.copy(this),e),Math.round(ce(hn.r*255,0,255))*65536+Math.round(ce(hn.g*255,0,255))*256+Math.round(ce(hn.b*255,0,255))}getHexString(e=D){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,i=hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=D){W.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(fn);let n=de(dn.h,fn.h,t),r=de(dn.s,fn.s,t),i=de(dn.l,fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new mn;mn.NAMES=un;var gn=0,_n=class extends ne{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=se(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=P,this.stencilZFail=P,this.stencilZPass=P,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new mn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yn=new G,bn=new H,xn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ee,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=p,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ke(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXY(t,bn.x,bn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Se(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=V(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Se(t,this.array)),t}setX(e,t){return this.normalized&&(t=V(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Se(t,this.array)),t}setY(e,t){return this.normalized&&(t=V(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Se(t,this.array)),t}setZ(e,t){return this.normalized&&(t=V(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Se(t,this.array)),t}setW(e,t){return this.normalized&&(t=V(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=V(t,this.array),n=V(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=V(t,this.array),n=V(n,this.array),r=V(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=V(t,this.array),n=V(n,this.array),r=V(r,this.array),i=V(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Sn=class extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cn=class extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wn=class extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tn=0,En=new wt,Dn=new Zt,On=new G,kn=new Ze,An=new Ze,jn=new G,Mn=class e extends ne{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tn++}),this.uuid=se(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Te(e)?Cn:Sn)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Dn.lookAt(e),Dn.updateMatrix(),this.applyMatrix4(Dn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kn.setFromBufferAttribute(n),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];An.setFromBufferAttribute(n),this.morphTargetsRelative?(jn.addVectors(kn.min,An.min),kn.expandByPoint(jn),jn.addVectors(kn.max,An.max),kn.expandByPoint(jn)):(kn.expandByPoint(An.min),kn.expandByPoint(An.max))}kn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jn.fromBufferAttribute(a,t),o&&(On.fromBufferAttribute(e,t),jn.add(On)),r=Math.max(r,n.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new xn(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let c=new G,l=new G,u=new G,d=new H,f=new H,p=new H,m=new G,h=new G;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new G,y=new G,b=new G,x=new G;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xn(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nn=new wt,Pn=new Ct,Fn=new ht,In=new G,Ln=new G,Rn=new G,zn=new G,Bn=new G,Vn=new G,Hn=new H,Un=new H,Wn=new H,Gn=new G,Kn=new G,qn=new G,Jn=new G,Yn=new G,Xn=class extends Zt{constructor(e=new Mn,t=new vn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Bn.fromBufferAttribute(s,e),a?Vn.addScaledVector(Bn,r):Vn.addScaledVector(Bn.sub(t),r))}t.add(Vn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fn.copy(n.boundingSphere),Fn.applyMatrix4(i),Pn.copy(e.ray).recast(e.near),!(Fn.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Fn,In)===null||Pn.origin.distanceToSquared(In)>(e.far-e.near)**2))&&(Nn.copy(i).invert(),Pn.copy(e.ray).applyMatrix4(Nn),(n.boundingBox===null||Pn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Yn.copy(s),Yn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Yn);return l<n.near||l>n.far?null:{distance:l,point:Yn.clone(),object:e}}function Qn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ln),e.getVertexPosition(c,Rn),e.getVertexPosition(l,zn);let u=Zn(e,t,n,r,Ln,Rn,zn,Jn);if(u){i&&(Hn.fromBufferAttribute(i,s),Un.fromBufferAttribute(i,c),Wn.fromBufferAttribute(i,l),u.uv=ln.getInterpolation(Jn,Ln,Rn,zn,Hn,Un,Wn,new H)),a&&(Hn.fromBufferAttribute(a,s),Un.fromBufferAttribute(a,c),Wn.fromBufferAttribute(a,l),u.uv1=ln.getInterpolation(Jn,Ln,Rn,zn,Hn,Un,Wn,new H)),o&&(Gn.fromBufferAttribute(o,s),Kn.fromBufferAttribute(o,c),qn.fromBufferAttribute(o,l),u.normal=ln.getInterpolation(Jn,Ln,Rn,zn,Gn,Kn,qn,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new G,materialIndex:0};ln.getNormal(Ln,Rn,zn,e.normal),u.face=e}return u}var $n=class e extends Mn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wn(c,3)),this.setAttribute(`normal`,new wn(l,3)),this.setAttribute(`uv`,new wn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function tr(e){let t={};for(let n=0;n<e.length;n++){let r=er(e[n]);for(let e in r)t[e]=r[e]}return t}function nr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function rr(e){return e.getRenderTarget()===null?e.outputColorSpace:W.workingColorSpace}var ir={clone:er,merge:tr},ar=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,or=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sr=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ar,this.fragmentShader=or,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=nr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},cr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=te}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},lr=new G,ur=new H,dr=new H,fr=class extends cr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ae*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oe*2*Math.atan(Math.tan(ae*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,ur,dr),t.subVectors(dr,ur)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ae*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,hr=class extends Zt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fr(pr,mr,e,t);r.layers=this.layers,this.add(r);let i=new fr(pr,mr,e,t);i.layers=this.layers,this.add(i);let a=new fr(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new fr(pr,mr,e,t);o.layers=this.layers,this.add(o);let s=new fr(pr,mr,e,t);s.layers=this.layers,this.add(s);let c=new fr(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gr=class extends He{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_r=class extends Ge{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?c:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $n(5,5,5),i=new sr({name:`CubemapFromEquirect`,uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Xn(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new hr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},vr=new G,yr=new G,br=new U,xr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vr.subVectors(n,t).cross(yr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||br.getNormalMatrix(e),r=this.coplanarPoint(vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new ht,Cr=new G,wr=class{constructor(e=new xr,t=new xr,n=new xr,r=new xr,i=new xr,a=new xr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=te){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Er(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var Dr=class e extends Mn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wn(p,3)),this.setAttribute(`normal`,new wn(m,3)),this.setAttribute(`uv`,new wn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new mn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new mn(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Or={basic:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new mn(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new mn(0)},specular:{value:new mn(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:tr([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new mn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:tr([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new mn(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:tr([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:tr([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:tr([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:tr([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:tr([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:tr([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:tr([q.common,q.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:tr([q.lights,q.fog,{color:{value:new mn(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Or.physical={uniforms:tr([Or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new mn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new mn(0)},specularColor:{value:new mn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var kr={r:0,b:0,g:0},Ar=new Pt,jr=new wt;function Mr(e,t,n,r,i,a,o){let s=new mn(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new Xn(new $n(1,1,1),new sr({name:`BackgroundCubeMaterial`,uniforms:er(Or.backgroundCube.uniforms),vertexShader:Or.backgroundCube.vertexShader,fragmentShader:Or.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ar.copy(m.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jr.makeRotationFromEuler(Ar)),u.material.toneMapped=W.getTransfer(_.colorSpace)!==M,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Xn(new Dr(2,2),new sr({name:`BackgroundMaterial`,uniforms:er(Or.background.uniforms),vertexShader:Or.background.vertexShader,fragmentShader:Or.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=W.getTransfer(_.colorSpace)!==M,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(kr,rr(e)),r.buffers.color.setClear(kr.r,kr.g,kr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Nr(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Pr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Fr(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Ir(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Lr(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new _r(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Rr=class extends cr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,Br=[.125,.215,.35,.446,.526,.582],Vr=20,Hr=new Rr,Ur=new mn,Wr=null,Gr=0,Kr=0,qr=(1+Math.sqrt(5))/2,Jr=1/qr,Yr=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,qr,Jr),new G(0,qr,-Jr),new G(Jr,0,qr),new G(-Jr,0,qr),new G(qr,Jr,0),new G(-qr,Jr,0)],Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ni(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ti(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Gr,Kr),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:m,format:g,colorSpace:O,depthBuffer:!1},r=Qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zr(r)),this._blurMaterial=ei(r,e,t)}return r}_compileMaterial(e){let t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,r){let i=new fr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ur),s.toneMapping=0,s.autoClear=!1;let u=new vn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Xn(new $n,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ur),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;$r(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ni()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ti());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Xn(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;$r(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=Yr[(t-1)%Yr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Xn(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Vr;m>Vr&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);let h=[],g=0;for(let e=0;e<Vr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];$r(t,3*v*(r>_-zr?r-_+zr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Hr)}};function Zr(e){let t=[],n=[],r=[],i=e,a=e-zr+1+Br.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-zr?s=Br[o-e+zr-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Mn;h.setAttribute(`position`,new xn(f,3)),h.setAttribute(`uv`,new xn(p,2)),h.setAttribute(`faceIndex`,new xn(m,1)),t.push(h),i>zr&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Qr(e,t,n){let r=new Ge(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $r(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ei(e,t,n){let r=new Float32Array(Vr),i=new G(0,1,0);return new sr({name:`SphericalGaussianBlur`,defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ri(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ti(){return new sr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ri(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ni(){return new sr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ri(){return`

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
	`}function ii(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Xr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Xr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ai(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function oi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Te(n)?Cn:Sn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function si(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ci(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function li(e,t){return e[0]-t[0]}function ui(e,t){return Math.abs(t[1])-Math.abs(e[1])}function di(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new Ue,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let m=l.attributes.position.count*f,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*i),_=new Ke(g,m,h,i);_.type=p,_.needsUpdate=!0;let v=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=m*h*4*t;for(let t=0;t<i.count;t++){let c=t*v;e===!0&&(o.fromBufferAttribute(i,t),g[l+c+0]=o.x,g[l+c+1]=o.y,g[l+c+2]=o.z,g[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),g[l+c+4]=o.x,g[l+c+5]=o.y,g[l+c+6]=o.z,g[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),g[l+c+8]=o.x,g[l+c+9]=o.y,g[l+c+10]=o.z,g[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:_,size:new H(m,h)},a.set(l,s);function y(){_.dispose(),a.delete(l),l.removeEventListener(`dispose`,y)}l.addEventListener(`dispose`,y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(e,`morphTexture`,c.morphTexture,n);else{let t=0;for(let e=0;e<d.length;e++)t+=d[e];let n=l.morphTargetsRelative?1:1-t;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),u.getUniforms().setValue(e,`morphTargetInfluences`,d)}u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(ui);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(li);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function fi(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var pi=class extends He{constructor(e,t,n,r,i,o,s,c,l,u){if(u=u===void 0?_:u,u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=f),n===void 0&&u===1027&&(n=h),super(null,r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?a:s,this.minFilter=c===void 0?a:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mi=new He,hi=new pi(1,1);hi.compareFunction=515;var gi=new Ke,_i=new qe,vi=new gr,yi=[],bi=[],xi=new Float32Array(16),Si=new Float32Array(9),Ci=new Float32Array(4);function wi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yi[i];if(a===void 0&&(a=new Float32Array(i),yi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ti(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ei(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Di(e,t){let n=bi[t];n===void 0&&(n=new Int32Array(t),bi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Oi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2fv(this.addr,t),Ei(n,t)}}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ti(n,t))return;e.uniform3fv(this.addr,t),Ei(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4fv(this.addr,t),Ei(n,t)}}function Mi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Ci.set(r),e.uniformMatrix2fv(this.addr,!1,Ci),Ei(n,r)}}function Ni(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Si.set(r),e.uniformMatrix3fv(this.addr,!1,Si),Ei(n,r)}}function Pi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;xi.set(r),e.uniformMatrix4fv(this.addr,!1,xi),Ei(n,r)}}function Fi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ii(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2iv(this.addr,t),Ei(n,t)}}function Li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3iv(this.addr,t),Ei(n,t)}}function Ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4iv(this.addr,t),Ei(n,t)}}function zi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2uiv(this.addr,t),Ei(n,t)}}function Vi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3uiv(this.addr,t),Ei(n,t)}}function Hi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4uiv(this.addr,t),Ei(n,t)}}function Ui(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?hi:mi;n.setTexture2D(t||a,i)}function Wi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_i,i)}function Gi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vi,i)}function Ki(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gi,i)}function qi(e){switch(e){case 5126:return Oi;case 35664:return ki;case 35665:return Ai;case 35666:return ji;case 35674:return Mi;case 35675:return Ni;case 35676:return Pi;case 5124:case 35670:return Fi;case 35667:case 35671:return Ii;case 35668:case 35672:return Li;case 35669:case 35673:return Ri;case 5125:return zi;case 36294:return Bi;case 36295:return Vi;case 36296:return Hi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ui;case 35679:case 36299:case 36307:return Wi;case 35680:case 36300:case 36308:case 36293:return Gi;case 36289:case 36303:case 36311:case 36292:return Ki}}function Ji(e,t){e.uniform1fv(this.addr,t)}function Yi(e,t){let n=wi(t,this.size,2);e.uniform2fv(this.addr,n)}function Xi(e,t){let n=wi(t,this.size,3);e.uniform3fv(this.addr,n)}function Zi(e,t){let n=wi(t,this.size,4);e.uniform4fv(this.addr,n)}function Qi(e,t){let n=wi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $i(e,t){let n=wi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ea(e,t){let n=wi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ta(e,t){e.uniform1iv(this.addr,t)}function na(e,t){e.uniform2iv(this.addr,t)}function ra(e,t){e.uniform3iv(this.addr,t)}function ia(e,t){e.uniform4iv(this.addr,t)}function aa(e,t){e.uniform1uiv(this.addr,t)}function oa(e,t){e.uniform2uiv(this.addr,t)}function sa(e,t){e.uniform3uiv(this.addr,t)}function ca(e,t){e.uniform4uiv(this.addr,t)}function la(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||mi,a[e])}function ua(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_i,a[e])}function da(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vi,a[e])}function fa(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gi,a[e])}function pa(e){switch(e){case 5126:return Ji;case 35664:return Yi;case 35665:return Xi;case 35666:return Zi;case 35674:return Qi;case 35675:return $i;case 35676:return ea;case 5124:case 35670:return ta;case 35667:case 35671:return na;case 35668:case 35672:return ra;case 35669:case 35673:return ia;case 5125:return aa;case 36294:return oa;case 36295:return sa;case 36296:return ca;case 35678:case 36198:case 36298:case 36306:case 35682:return la;case 35679:case 36299:case 36307:return ua;case 35680:case 36300:case 36308:case 36293:return da;case 36289:case 36303:case 36311:case 36292:return fa}}var ma=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qi(t.type)}},ha=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pa(t.type)}},ga=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function va(e,t){e.seq.push(t),e.map[t.id]=t}function ya(e,t,n){let r=e.name,i=r.length;for(_a.lastIndex=0;;){let a=_a.exec(r),o=_a.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){va(n,l===void 0?new ma(s,e,t):new ha(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ga(s),va(n,e)),n=e}}}var ba=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ya(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function xa(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Sa=37297,Ca=0;function wa(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Ta(e){let t=W.getPrimaries(W.workingColorSpace),n=W.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case O:case A:return[r,`LinearTransferOETF`];case D:case k:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Ea(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+wa(e.getShaderSource(t),r)}return i}function Da(e,t){let n=Ta(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Oa(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function ka(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.alphaToCoverage||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Na).join(`
`)}function Aa(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Na).join(`
`)}function ja(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ma(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Na(e){return e!==``}function Pa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ia=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(e){return e.replace(Ia,za)}var Ra=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function za(e,t){let n=K[t];if(n===void 0){let e=Ra.get(t);if(e!==void 0)n=K[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return La(n)}var Ba=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(e){return e.replace(Ba,Ha)}function Ha(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ua(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	`;return e.isWebGL2&&(t+=`precision ${e.precision} sampler3D;
		precision ${e.precision} sampler2DArray;
		precision ${e.precision} sampler2DShadow;
		precision ${e.precision} samplerCubeShadow;
		precision ${e.precision} sampler2DArrayShadow;
		precision ${e.precision} isampler2D;
		precision ${e.precision} isampler3D;
		precision ${e.precision} isamplerCube;
		precision ${e.precision} isampler2DArray;
		precision ${e.precision} usampler2D;
		precision ${e.precision} usampler3D;
		precision ${e.precision} usamplerCube;
		precision ${e.precision} usampler2DArray;
		`),e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Wa(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ga(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ka(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function qa(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Ja(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ya(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wa(n),l=Ga(n),u=Ka(n),d=qa(n),f=Ja(n),p=n.isWebGL2?``:ka(n),m=Aa(n),h=ja(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),v.length>0&&(v+=`
`)):(_=[Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Na).join(`
`),v=[p,Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Oa(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Da(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Na).join(`
`)),o=La(o),o=Pa(o,n),o=Fa(o,n),s=La(s),s=Pa(s,n),s=Fa(s,n),o=Va(o),s=Va(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=xa(i,i.VERTEX_SHADER,b),C=xa(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Ea(i,S,`vertex`),r=Ea(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ba(i,g),E=Ma(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Sa)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ca++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Xa=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=Xa++,this.code=e,this.usedTimes=0}};function $a(e,t,n,r,i,a,o){let s=new Ft,c=new Za,l=new Set,u=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let k,A,j,M;if(w){let e=Or[w];k=e.vertexShader,A=e.fragmentShader}else k=a.vertexShader,A=a.fragmentShader,c.update(a),j=c.getVertexShaderID(a),M=c.getFragmentShaderID(a);let N=e.getRenderTarget(),P=v.isInstancedMesh===!0,ee=v.isBatchedMesh===!0,F=!!a.map,te=!!a.matcap,ne=!!S,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,I=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.iridescence>0,pe=a.sheen>0,me=a.transmission>0,L=ue&&!!a.anisotropyMap,he=de&&!!a.clearcoatMap,ge=de&&!!a.clearcoatNormalMap,R=de&&!!a.clearcoatRoughnessMap,z=fe&&!!a.iridescenceMap,_e=fe&&!!a.iridescenceThicknessMap,B=pe&&!!a.sheenColorMap,ve=pe&&!!a.sheenRoughnessMap,ye=!!a.specularMap,be=!!a.specularColorMap,xe=!!a.specularIntensityMap,Se=me&&!!a.transmissionMap,V=me&&!!a.thicknessMap,Ce=!!a.gradientMap,H=!!a.alphaMap,U=a.alphaTest>0,we=!!a.alphaHash,Te=!!a.extensions,Ee=0;a.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let De={isWebGL2:d,shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:k,fragmentShader:A,defines:a.defines,customVertexShaderID:j,customFragmentShaderID:M,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:ee,instancing:P,instancingColor:P&&v.instanceColor!==null,instancingMorph:P&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:N===null?e.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:O,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:te,envMap:ne,envMapMode:ne&&S.mapping,envMapCubeUVHeight:C,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:p&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:I,roughnessMap:le,anisotropy:ue,anisotropyMap:L,clearcoat:de,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:R,iridescence:fe,iridescenceMap:z,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:B,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:be,specularIntensityMap:xe,transmission:me,transmissionMap:Se,thicknessMap:V,gradientMap:Ce,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:H,alphaTest:U,alphaHash:we,combine:a.combine,mapUv:F&&g(a.map.channel),aoMapUv:re&&g(a.aoMap.channel),lightMapUv:ie&&g(a.lightMap.channel),bumpMapUv:ae&&g(a.bumpMap.channel),normalMapUv:oe&&g(a.normalMap.channel),displacementMapUv:se&&g(a.displacementMap.channel),emissiveMapUv:ce&&g(a.emissiveMap.channel),metalnessMapUv:I&&g(a.metalnessMap.channel),roughnessMapUv:le&&g(a.roughnessMap.channel),anisotropyMapUv:L&&g(a.anisotropyMap.channel),clearcoatMapUv:he&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:B&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(a.sheenRoughnessMap.channel),specularMapUv:ye&&g(a.specularMap.channel),specularColorMapUv:be&&g(a.specularColorMap.channel),specularIntensityMapUv:xe&&g(a.specularIntensityMap.channel),transmissionMapUv:Se&&g(a.transmissionMap.channel),thicknessMapUv:V&&g(a.thicknessMap.channel),alphaMapUv:H&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(oe||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(F||H),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,useLegacyLights:e._useLegacyLights,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&W.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:Te&&a.extensions.derivatives===!0,extensionFragDepth:Te&&a.extensions.fragDepth===!0,extensionDrawBuffers:Te&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:Te&&a.extensions.multiDraw===!0&&r.has(`WEBGL_multi_draw`),rendererExtensionFragDepth:d||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:d||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:d||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.instancingMorph&&s.enable(4),t.matcap&&s.enable(5),t.envMap&&s.enable(6),t.normalMapObjectSpace&&s.enable(7),t.normalMapTangentSpace&&s.enable(8),t.clearcoat&&s.enable(9),t.iridescence&&s.enable(10),t.alphaTest&&s.enable(11),t.vertexColors&&s.enable(12),t.vertexAlphas&&s.enable(13),t.vertexUv1s&&s.enable(14),t.vertexUv2s&&s.enable(15),t.vertexUv3s&&s.enable(16),t.vertexTangents&&s.enable(17),t.anisotropy&&s.enable(18),t.alphaHash&&s.enable(19),t.batching&&s.enable(20),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=Or[t];n=ir.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ya(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function eo(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function to(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function no(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ro(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||to),r.length>1&&r.sort(t||no),i.length>1&&i.sort(t||no)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function io(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ro,e.set(t,[i])):n>=r.length?(i=new ro,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ao(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new G,color:new mn};break;case`SpotLight`:n={position:new G,direction:new G,color:new mn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new mn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new mn,groundColor:new mn};break;case`RectAreaLight`:n={color:new mn,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function oo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var so=0;function co(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function lo(e,t){let n=new ao,r=oo(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new G);let a=new G,o=new wt,s=new wt;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(co);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_FLOAT_1,i.rectAreaLTC2=q.LTC_FLOAT_2):(i.rectAreaLTC1=q.LTC_HALF_1,i.rectAreaLTC2=q.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_FLOAT_1,i.rectAreaLTC2=q.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_HALF_1,i.rectAreaLTC2=q.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=so++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function uo(e,t){let n=new lo(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function fo(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new uo(e,t),n.set(r,[o])):i>=a.length?(o=new uo(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var po=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ho=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,go=`uniform sampler2D shadow_pass;
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
}`;function _o(e,t,n){let r=new wr,i=new H,o=new H,s=new Ue,c=new po({depthPacking:E}),l=new mo,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:ho,fragmentShader:go}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Mn;h.setAttribute(`position`,new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xn(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new Ge(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ge(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vo(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new Ue,r=null,i=new Ue(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?I(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new mn(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,ee=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Ue().fromArray(re),oe=new Ue().fromArray(ie);function se(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),I(e.DEPTH_TEST),c.setFunc(3),ge(!1),R(1),I(e.CULL_FACE),L(0);function I(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function le(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function ue(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function de(r,i){let a=h,o=!1;if(r){a=m.get(i),a===void 0&&(a=[],m.set(i,a));let t=r.textures;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);if(o){if(n.isWebGL2)e.drawBuffers(a);else if(t.has(`WEBGL_draw_buffers`)===!0)t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a);else throw Error(`THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension`)}}function fe(t){return g!==t&&(e.useProgram(t),g=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)pe[103]=e.MIN,pe[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(pe[103]=e.MIN_EXT,pe[104]=e.MAX_EXT)}let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function L(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(le(e.BLEND),_=!1);else if(_===!1&&(I(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(pe[n],pe[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function he(t,n){t.side===2?le(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?L(0):L(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function R(t){t===0?le(e.CULL_FACE):(I(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function z(t){t!==A&&(P&&e.lineWidth(t),A=t)}function _e(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):le(e.POLYGON_OFFSET_FILL)}function B(t){t?I(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+N-1),te!==t&&(e.activeTexture(t),te=t)}function ye(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+N-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function be(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function V(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function U(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function ke(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ae(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function je(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},te=null,ne={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new mn(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:I,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:L,setMaterial:he,setFlipSided:ge,setCullFace:R,setLineWidth:z,setPolygonOffset:_e,setScissorTest:B,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:Ee,texImage3D:De,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:we,texStorage3D:Te,texSubImage2D:V,texSubImage3D:Ce,compressedTexSubImage2D:H,compressedTexSubImage3D:U,scissor:Oe,viewport:ke,reset:Me}}function yo(e,t,d,p,m,g,_){let v=m.isWebGL2,y=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,b=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),x=new H,S=new WeakMap,C,w=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Ee(`canvas`)}function D(e,t,n,r){let i=1,a=ke(e);if((a.width>r||a.height>r)&&(i=r/Math.max(a.width,a.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let r=t?be:Math.floor,o=r(i*a.width),s=r(i*a.height);C===void 0&&(C=E(o,s));let c=n?E(o,s):C;return c.width=o,c.height=s,c.getContext(`2d`).drawImage(e,0,0,o,s),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+o+`x`+s+`).`),c}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e}return e}function O(e){let t=ke(e);return ve(t.width)&&ve(t.height)}function k(e){return v?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function A(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function M(t){e.generateMipmap(t)}function N(n,r,i,a,o=!1){if(v===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGBA){let t=o?j:W.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function P(e,t,n){return A(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t),t.isVideoTexture&&S.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ae(t)}function re(e){let t=p.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=w.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ie(e),Object.keys(r).length===0&&w.delete(n)}p.remove(e)}function ie(t){let n=p.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=w.get(r);delete i[n.__cacheKey],_.memory.textures--}function ae(t){let n=p.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=p.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),_.memory.textures--),p.remove(r[t])}p.remove(t)}let oe=0;function se(){oe=0}function ce(){let e=oe;return e>=m.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+m.maxTextures),oe+=1,e}function I(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,n){let r=p.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{R(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?R(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?R(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?z(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let pe={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},me={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},L={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,r,i){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),i?(e.texParameteri(n,e.TEXTURE_WRAP_S,pe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[r.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(r.wrapS!==1001||r.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee(r.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee(r.minFilter)),r.minFilter!==1003&&r.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,L[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1||v===!1&&r.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;if(r.anisotropy>1||p.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,m.getMaxAnisotropy())),p.get(r).__currentAnisotropy=r.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=w.get(i);a===void 0&&(a={},w.set(i,a));let o=I(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},_.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function R(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ge(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=p.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=W.getPrimaries(W.workingColorSpace),c=n.colorSpace===``?null:W.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=k(n)&&O(n.image)===!1,p=D(n.image,u,!1,m.maxTextureSize);p=Oe(n,p);let _=O(p)||v,y=g.convert(n.format,n.colorSpace),b=g.convert(n.type),x=N(n.internalFormat,y,b,n.colorSpace,n.isVideoTexture);he(i,n,_);let S,C=n.mipmaps,w=v&&n.isVideoTexture!==!0&&x!==36196,T=s.__version===void 0||a===!0,E=o.dataReady,j=P(n,p,_);if(n.isDepthTexture)x=e.DEPTH_COMPONENT,v?x=n.type===1015?e.DEPTH_COMPONENT32F:n.type===1014?e.DEPTH_COMPONENT24:n.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:n.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),n.format===1026&&x===e.DEPTH_COMPONENT&&n.type!==1012&&n.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),n.type=f,b=g.convert(n.type)),n.format===1027&&x===e.DEPTH_COMPONENT&&(x=e.DEPTH_STENCIL,n.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),n.type=h,b=g.convert(n.type))),T&&(w?d.texStorage2D(e.TEXTURE_2D,1,x,p.width,p.height):d.texImage2D(e.TEXTURE_2D,0,x,p.width,p.height,0,y,b,null));else if(n.isDataTexture){if(C.length>0&&_){w&&T&&d.texStorage2D(e.TEXTURE_2D,j,x,C[0].width,C[0].height);for(let t=0,n=C.length;t<n;t++)S=C[t],w?E&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):d.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data);n.generateMipmaps=!1}else w?(T&&d.texStorage2D(e.TEXTURE_2D,j,x,p.width,p.height),E&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,y,b,p.data)):d.texImage2D(e.TEXTURE_2D,0,x,p.width,p.height,0,y,b,p.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){w&&T&&d.texStorage3D(e.TEXTURE_2D_ARRAY,j,x,C[0].width,C[0].height,p.depth);for(let t=0,r=C.length;t<r;t++)S=C[t],n.format===1023?w?E&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,p.depth,y,b,S.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,p.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?E&&d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,p.depth,y,S.data,0,0):d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,p.depth,0,S.data,0,0)}else{w&&T&&d.texStorage2D(e.TEXTURE_2D,j,x,C[0].width,C[0].height);for(let t=0,r=C.length;t<r;t++)S=C[t],n.format===1023?w?E&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):d.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?E&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,S.data):d.compressedTexImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,S.data)}}else if(n.isDataArrayTexture)w?(T&&d.texStorage3D(e.TEXTURE_2D_ARRAY,j,x,p.width,p.height,p.depth),E&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,y,b,p.data)):d.texImage3D(e.TEXTURE_2D_ARRAY,0,x,p.width,p.height,p.depth,0,y,b,p.data);else if(n.isData3DTexture)w?(T&&d.texStorage3D(e.TEXTURE_3D,j,x,p.width,p.height,p.depth),E&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,y,b,p.data)):d.texImage3D(e.TEXTURE_3D,0,x,p.width,p.height,p.depth,0,y,b,p.data);else if(n.isFramebufferTexture){if(T){if(w)d.texStorage2D(e.TEXTURE_2D,j,x,p.width,p.height);else{let t=p.width,n=p.height;for(let r=0;r<j;r++)d.texImage2D(e.TEXTURE_2D,r,x,t,n,0,y,b,null),t>>=1,n>>=1}}}else if(C.length>0&&_){if(w&&T){let t=ke(C[0]);d.texStorage2D(e.TEXTURE_2D,j,x,t.width,t.height)}for(let t=0,n=C.length;t<n;t++)S=C[t],w?E&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,y,b,S):d.texImage2D(e.TEXTURE_2D,t,x,y,b,S);n.generateMipmaps=!1}else if(w){if(T){let t=ke(p);d.texStorage2D(e.TEXTURE_2D,j,x,t.width,t.height)}E&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,y,b,p)}else d.texImage2D(e.TEXTURE_2D,0,x,y,b,p);A(n,_)&&M(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function z(t,n,r){if(n.image.length!==6)return;let i=ge(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=p.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=W.getPrimaries(W.workingColorSpace),s=n.colorSpace===``?null:W.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!1,!0,m.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Oe(n,f[e]);let p=f[0],h=O(p)||v,_=g.convert(n.format,n.colorSpace),y=g.convert(n.type),b=N(n.internalFormat,_,y,n.colorSpace),x=v&&n.isVideoTexture!==!0,S=o.__version===void 0||i===!0,C=a.dataReady,w=P(n,p,h);he(e.TEXTURE_CUBE_MAP,n,h);let T;if(l){x&&S&&d.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,p.width,p.height);for(let t=0;t<6;t++){T=f[t].mipmaps;for(let r=0;r<T.length;r++){let i=T[r];n.format===1023?x?C&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,y,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,_,y,i.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?C&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{if(T=n.mipmaps,x&&S){T.length>0&&w++;let t=ke(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,t.width,t.height)}for(let t=0;t<6;t++)if(u){x?C&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,_,y,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,f[t].width,f[t].height,0,_,y,f[t].data);for(let n=0;n<T.length;n++){let r=T[n].image[t].image;x?C&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,_,y,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,r.width,r.height,0,_,y,r.data)}}else{x?C&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,y,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,_,y,f[t]);for(let n=0;n<T.length;n++){let r=T[n];x?C&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,_,y,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,_,y,r.image[t])}}}A(n,h)&&M(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r,i,a,o){let s=g.convert(r.format,r.colorSpace),c=g.convert(r.type),l=N(r.internalFormat,s,c,r.colorSpace);if(!p.get(n).__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Te(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.get(r).__webglTexture,0,we(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.get(r).__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=v===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||Te(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=we(n);Te(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=we(n);r&&Te(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):Te(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=g.convert(a.format,a.colorSpace),s=g.convert(a.type),c=N(a.internalFormat,o,s,a.colorSpace),l=we(n);r&&Te(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):Te(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);p.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),le(n.depthTexture,0);let r=p.get(n.depthTexture).__webglTexture,i=we(n);if(n.depthTexture.format===1026)Te(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else if(n.depthTexture.format===1027)Te(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function xe(t){let n=p.get(t),r=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);ye(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]=e.createRenderbuffer(),B(n.__webglDepthbuffer[r],t,!1)}else d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),B(n.__webglDepthbuffer,t,!1);d.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){let i=p.get(t);n!==void 0&&_e(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function V(t){let n=t.texture,r=p.get(t),i=p.get(n);t.addEventListener(`dispose`,ne);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1,c=O(t)||v;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,_.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(v&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(v&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s){if(m.drawBuffers)for(let t=0,n=a.length;t<n;t++){let n=p.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),_.memory.textures++)}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(v&&t.samples>0&&Te(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=g.convert(i.format,i.colorSpace),s=g.convert(i.type),c=N(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),B(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),he(e.TEXTURE_CUBE_MAP,n,c);for(let i=0;i<6;i++)if(v&&n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)_e(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else _e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);A(n,c)&&M(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=p.get(i);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),he(e.TEXTURE_2D,i,c),_e(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,0),A(i,c)&&M(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(v?a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),d.bindTexture(a,i.__webglTexture),he(a,n,c),v&&n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)_e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else _e(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);A(n,c)&&M(a),d.unbindTexture()}t.depthBuffer&&xe(t)}function Ce(t){let n=O(t)||v,r=t.textures;for(let i=0,a=r.length;i<a;i++){let a=r[i];if(A(a,n)){let n=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,r=p.get(a).__webglTexture;d.bindTexture(n,r),M(n),d.unbindTexture()}}}function U(t){if(v&&t.samples>0&&Te(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=[],s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=p.get(t),l=n.length>1;if(l)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let u=0;u<n.length;u++){o.push(e.COLOR_ATTACHMENT0+u),t.depthBuffer&&o.push(s);let d=c.__ignoreDepthValues!==void 0&&c.__ignoreDepthValues;if(d===!1&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),l&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[u]),d===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[s]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])),l){let t=p.get(n[u]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),b&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,o)}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let r=p.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}}function we(e){return Math.min(m.maxSamples,e.samples)}function Te(e){let n=p.get(e);return v&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function De(e){let t=_.render.frame;S.get(e)!==t&&(S.set(e,t),e.update())}function Oe(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(W.getTransfer(r)===`srgb`?v===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=F,e.minFilter=c,e.generateMipmaps=!1):n=Le.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(x.width=e.naturalWidth||e.width,x.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(x.width=e.displayWidth,x.height=e.displayHeight):(x.width=e.width,x.height=e.height),x}this.allocateTextureUnit=ce,this.resetTextureUnits=se,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Se,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Te}function bo(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=W.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var xo=class extends fr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},So=class extends Zt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Co={type:`move`},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Co)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new So;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},To=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Do=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new He,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new sr({extensions:{fragDepth:!0},vertexShader:To,fragmentShader:Eo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xn(new Dr(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Oo=class extends ne{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,p=null,m=null,y=null,b=new Do,x=t.getContextAttributes(),S=null,C=null,w=[],T=[],E=new H,D=null,O=new fr;O.layers.enable(1),O.viewport=new Ue;let k=new fr;k.layers.enable(2),k.viewport=new Ue;let A=[O,k],j=new xo;j.layers.enable(1),j.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new wo,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new wo,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new wo,w[e]=t),t.getHandSpace()};function P(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,F);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}M=null,N=null,b.reset(),e.setRenderTarget(S),m=null,p=null,u=null,r=null,C=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(S=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,F),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Ge(m.framebufferWidth,m.framebufferHeight,{format:g,type:d,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let n=null,a=null,o=null;x.depth&&(o=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=x.stencil?v:_,a=x.stencil?h:f);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(s),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),C=new Ge(p.textureWidth,p.textureHeight,{format:g,type:d,depthTexture:new pi(p.textureWidth,p.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let c=e.properties.get(C);c.__ignoreDepthValues=p.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}let te=new G,ne=new G;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;b.texture!==null&&(e.near=b.depthNear,e.far=b.depthFar),j.near=k.near=O.near=e.near,j.far=k.far=O.far=e.far,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far,O.near=M,O.far=N,k.near=M,k.far=N,O.updateProjectionMatrix(),k.updateProjectionMatrix(),e.updateProjectionMatrix());let t=e.parent,n=j.cameras;ie(j,t);for(let e=0;e<n.length;e++)ie(n[e],t);n.length===2?re(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),ae(e,j,t)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=oe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(p!==null||m!==null)return s},this.setFoveation=function(e){s=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return b.texture!==null};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),y=i,l!==null){let t=l.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(m!==null)a=m.getViewport(i);else{let t=u.getViewSubImage(p,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(C,t.colorTexture,p.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(C))}let o=A[r];o===void 0&&(o=new fr,o.layers.enable(r),o.viewport=new Ue,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&b.init(e,n,r.renderState)}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}b.render(e,j),se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),y=null}let I=new Tr;I.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},ko=new Pt,Ao=new wt;function jo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,rr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i),o=a.envMap,s=a.envMapRotation;if(o&&(r.envMap.value=o,ko.copy(s),ko.x*=-1,ko.y*=-1,ko.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ko.y*=-1,ko.z*=-1),r.envMapRotation.value.setFromMatrix4(Ao.makeRotationFromEuler(ko)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mo(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var No=class{constructor(e={}){let{canvas:t=De(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;p=n===null?a:n.getContextAttributes().alpha;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=D,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,k=null,A=new Ue,j=new Ue,M=null,N=new mn(0),P=0,ee=t.width,F=t.height,te=1,ne=null,re=null,ie=new Ue(0,0,ee,F),ae=new Ue(0,0,ee,F),oe=!1,se=new wr,ce=!1,I=!1,le=null,ue=new wt,de=new H,fe=new G,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return T===null?te:1}let L=n;function he(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r162`),t.addEventListener(`webglcontextlost`,Re,!1),t.addEventListener(`webglcontextrestored`,ze,!1),t.addEventListener(`webglcontextcreationerror`,Be,!1),L===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),L=he(t,e),L===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&L instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ge,R,z,_e,B,ve,ye,xe,Se,V,Ce,U,we,Te,Ee,Oe,ke,Ae,je,Me,Ne,W,Pe,Fe;function Ie(){ge=new ai(L),R=new Fr(L,ge,e),ge.init(R),W=new bo(L,ge,R),z=new vo(L,ge,R),_e=new ci(L),B=new eo,ve=new yo(L,ge,z,B,R,W,_e),ye=new Lr(x),xe=new ii(x),Se=new Er(L,R),Pe=new Nr(L,ge,Se,R),V=new oi(L,Se,_e,Pe),Ce=new fi(L,V,Se,_e),je=new di(L,R,ve),Oe=new Ir(B),U=new $a(x,ye,xe,ge,R,Pe,Oe),we=new jo(x,B),Te=new io,Ee=new fo(ge,R),Ae=new Mr(x,ye,xe,z,Ce,p,s),ke=new _o(x,Ce,R),Fe=new Mo(L,_e,R,z),Me=new Pr(L,ge,_e,R),Ne=new si(L,ge,_e,R),_e.programs=U.programs,x.capabilities=R,x.extensions=ge,x.properties=B,x.renderLists=Te,x.shadowMap=ke,x.state=z,x.info=_e}Ie();let Le=new Oo(x,L);this.xr=Le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(e){e!==void 0&&(te=e,this.setSize(ee,F,!1))},this.getSize=function(e){return e.set(ee,F)},this.setSize=function(e,n,r=!0){Le.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(ee=e,F=n,t.width=Math.floor(e*te),t.height=Math.floor(n*te),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ee*te,F*te).floor()},this.setDrawingBufferSize=function(e,n,r){ee=e,F=n,te=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),z.viewport(A.copy(ie).multiplyScalar(te).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),z.scissor(j.copy(ae).multiplyScalar(te).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){z.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,L.clearBufferuiv(L.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,L.clearBufferiv(L.COLOR,0,g))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Re,!1),t.removeEventListener(`webglcontextrestored`,ze,!1),t.removeEventListener(`webglcontextcreationerror`,Be,!1),Te.dispose(),Ee.dispose(),B.dispose(),ye.dispose(),xe.dispose(),Ce.dispose(),Pe.dispose(),Fe.dispose(),U.dispose(),Le.dispose(),Le.removeEventListener(`sessionstart`,Ye),Le.removeEventListener(`sessionend`,Xe),le&&=(le.dispose(),null),Ze.stop()};function Re(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function ze(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=_e.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;Ie(),_e.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function Be(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ve(e){let t=e.target;t.removeEventListener(`dispose`,Ve),He(t)}function He(e){We(e),B.remove(e)}function We(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){U.releaseProgram(e)}),e.isShaderMaterial&&U.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=pe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ot(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=V.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Pe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=Se.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*me()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*me()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ke(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,n),e.side=0,e.needsUpdate=!0,rt(e,t,n),e.side=2):rt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Ee.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(x._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ke(a,n,e),r.add(a)}else Ke(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let qe=null;function Je(e){qe&&qe(e)}function Ye(){Ze.stop()}function Xe(){Ze.start()}let Ze=new Tr;Ze.setAnimationLoop(Je),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){qe=e,Le.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},Le.addEventListener(`sessionstart`,Ye),Le.addEventListener(`sessionend`,Xe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(t),t=Le.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=Ee.get(e,b.length),v.init(),b.push(v),ue.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(ue),I=this.localClippingEnabled,ce=Oe.init(this.clippingPlanes,I),_=Te.get(e,y.length),_.init(),y.push(_),Qe(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ne,re),this.info.render.frame++,ce===!0&&Oe.beginShadows();let n=v.state.shadowsArray;if(ke.render(n,e,t),ce===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1)&&Ae.render(_,e),v.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];$e(_,e,r,r.viewport)}}else $e(_,e,t);T!==null&&(ve.updateMultisampleRenderTarget(T),ve.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Pe.resetDefaultState(),E=-1,k=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function Qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ue);let t=Ce.update(e),i=e.material;i.visible&&_.push(e,t,i,n,fe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Ce.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),fe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),fe.copy(e.boundingSphere.center)),fe.applyMatrix4(e.matrixWorld).applyMatrix4(ue)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,fe.z,o)}}else i.visible&&_.push(e,t,i,n,fe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Qe(i[e],t,n,r)}function $e(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),ce===!0&&Oe.setGlobalState(x.clippingPlanes,n),a.length>0&&et(i,a,t,n),r&&z.viewport(A.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=R.isWebGL2;le===null&&(le=new Ge(1,1,{generateMipmaps:!0,type:ge.has(`EXT_color_buffer_half_float`)?m:d,minFilter:u,samples:i?4:0})),x.getDrawingBufferSize(de),i?le.setSize(de.x,de.y):le.setSize(be(de.x),be(de.y));let a=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(N),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let o=x.toneMapping;x.toneMapping=0,tt(e,n,r),ve.updateMultisampleRenderTarget(le),ve.updateRenderTargetMipmap(le);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,nt(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(ve.updateMultisampleRenderTarget(le),ve.updateRenderTargetMipmap(le)),x.setRenderTarget(a),x.setClearColor(N,P),x.toneMapping=o}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&nt(o,t,n,s,c,l)}}function nt(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=pe);let r=B.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=U.getParameters(e,i.state,a,t,n),c=U.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?xe:ye).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ve),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return at(e,s),u}else s.uniforms=U.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=U.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Oe.uniform),at(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ba.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t,n,r,i){t.isScene!==!0&&(t=pe),ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:O,c=(r.isMeshStandardMaterial?xe:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=B.get(r),y=v.state.lights;if(ce===!0&&(I===!0||e!==k)){let t=e===k&&r.id===E;Oe.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Oe.numPlanes||_.numIntersection!==Oe.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?R.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=rt(r,t,i));let C=!1,w=!1,D=!1,A=S.getUniforms(),j=_.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,D=!0),r.id!==E&&(E=r.id,w=!0),C||k!==e){A.setValue(L,`projectionMatrix`,e.projectionMatrix),A.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(L,fe.setFromMatrixPosition(e.matrixWorld)),R.logarithmicDepthBuffer&&A.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,w=!0,D=!0)}if(i.isSkinnedMesh){A.setOptional(L,i,`bindMatrix`),A.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(R.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(L,`boneTexture`,e.boneTexture,ve)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(A.setOptional(L,i,`batchingTexture`),A.setValue(L,`batchingTexture`,i._matricesTexture,ve));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0&&R.isWebGL2===!0)&&je.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,A.setValue(L,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(j.envMap.value=c,j.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),w&&(A.setValue(L,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&st(j,D),a&&r.fog===!0&&we.refreshFogUniforms(j,a),we.refreshMaterialUniforms(j,r,te,F,le),ba.upload(L,it(_),j,ve)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ba.upload(L,it(_),j,ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(L,`center`,i.center),A.setValue(L,`modelViewMatrix`,i.modelViewMatrix),A.setValue(L,`normalMatrix`,i.normalMatrix),A.setValue(L,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(R.isWebGL2){let n=e[t];Fe.update(n,S),Fe.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=n;let r=B.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ge.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?ve.setupRenderTarget(e):s.__hasExternalTextures&&ve.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture):(z.bindFramebuffer(L.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=R.isWebGL2&&e.samples>0&&ve.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest}else A.copy(ie).multiplyScalar(te).floor(),j.copy(ae).multiplyScalar(te).floor(),M=oe;if(z.bindFramebuffer(L.FRAMEBUFFER,i)&&R.drawBuffers&&r&&z.drawBuffers(e,i),z.viewport(A),z.scissor(j),z.setScissorTest(M),a){let r=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){z.bindFramebuffer(L.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&W.convert(s)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(ge.has(`EXT_color_buffer_half_float`)||R.isWebGL2&&ge.has(`EXT_color_buffer_float`));if(c!==1009&&W.convert(c)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(R.isWebGL2||ge.has(`OES_texture_float`)||ge.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,W.convert(s),W.convert(c),a)}finally{let e=T===null?null:B.get(T).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);ve.setTexture2D(t,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,e.x,e.y,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=W.convert(n.format),s=W.convert(n.type);ve.setTexture2D(n,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,n.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=Math.round(e.max.x-e.min.x),o=Math.round(e.max.y-e.min.y),s=e.max.z-e.min.z+1,c=W.convert(r.format),l=W.convert(r.type),u;if(r.isData3DTexture)ve.setTexture3D(r,0),u=L.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)ve.setTexture2DArray(r,0),u=L.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,r.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,r.unpackAlignment);let d=L.getParameter(L.UNPACK_ROW_LENGTH),f=L.getParameter(L.UNPACK_IMAGE_HEIGHT),p=L.getParameter(L.UNPACK_SKIP_PIXELS),m=L.getParameter(L.UNPACK_SKIP_ROWS),h=L.getParameter(L.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,g.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,g.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,e.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,e.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?L.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):r.isCompressedArrayTexture?L.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data):L.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),L.pixelStorei(L.UNPACK_ROW_LENGTH,d),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,f),L.pixelStorei(L.UNPACK_SKIP_PIXELS,p),L.pixelStorei(L.UNPACK_SKIP_ROWS,m),L.pixelStorei(L.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&L.generateMipmap(u),z.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?ve.setTextureCube(e,0):e.isData3DTexture?ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ve.setTexture2DArray(e,0):ve.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,z.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return te}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=W.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},Po=class extends No{};Po.prototype.isWebGL1Renderer=!0;var Fo=class extends Zt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pt,this.environmentRotation=new Pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ee,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=se()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ke(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=se()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=se()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Lo=new G,Ro=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix4(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyNormalMatrix(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.transformDirection(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Se(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=V(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=V(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=V(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=V(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=V(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Se(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Se(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Se(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Se(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=V(t,this.array),n=V(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=V(t,this.array),n=V(n,this.array),r=V(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=V(t,this.array),n=V(n,this.array),r=V(r,this.array),i=V(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zo=class extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new mn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bo,Vo=new G,Ho=new G,Uo=new G,Wo=new H,Go=new H,Ko=new wt,qo=new G,Jo=new G,Yo=new G,Xo=new H,Zo=new H,Qo=new H,$o=class extends Zt{constructor(e=new zo){if(super(),this.isSprite=!0,this.type=`Sprite`,Bo===void 0){Bo=new Mn;let e=new Io(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Bo.setIndex([0,1,2,0,2,3]),Bo.setAttribute(`position`,new Ro(e,3,0,!1)),Bo.setAttribute(`uv`,new Ro(e,2,3,!1))}this.geometry=Bo,this.material=e,this.center=new H(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ho.setFromMatrixScale(this.matrixWorld),Ko.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ho.multiplyScalar(-Uo.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;es(qo.set(-.5,-.5,0),Uo,a,Ho,r,i),es(Jo.set(.5,-.5,0),Uo,a,Ho,r,i),es(Yo.set(.5,.5,0),Uo,a,Ho,r,i),Xo.set(0,0),Zo.set(1,0),Qo.set(1,1);let o=e.ray.intersectTriangle(qo,Jo,Yo,!1,Vo);if(o===null&&(es(Jo.set(-.5,.5,0),Uo,a,Ho,r,i),Zo.set(0,1),o=e.ray.intersectTriangle(qo,Yo,Jo,!1,Vo),o===null))return;let s=e.ray.origin.distanceTo(Vo);s<e.near||s>e.far||t.push({distance:s,point:Vo.clone(),uv:ln.getInterpolation(Vo,qo,Jo,Yo,Xo,Zo,Qo,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function es(e,t,n,r,i,a){Wo.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Go.copy(Wo):(Go.x=a*Wo.x-i*Wo.y,Go.y=i*Wo.x+a*Wo.y),e.copy(t),e.x+=Go.x,e.y+=Go.y,e.applyMatrix4(Ko)}var ts=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new mn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ns=new G,rs=new G,is=new wt,as=new Ct,os=new ht,ss=class extends Zt{constructor(e=new Mn,t=new ts){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ns.fromBufferAttribute(t,e-1),rs.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ns.distanceTo(rs);e.setAttribute(`lineDistance`,new wn(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=i,e.ray.intersectsSphere(os)===!1)return;is.copy(r).invert(),as.copy(e.ray).applyMatrix4(is);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new G,l=new G,u=new G,d=new G,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),as.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),as.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},cs=new G,ls=new G,us=class extends ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)cs.fromBufferAttribute(t,e),ls.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+cs.distanceTo(ls);e.setAttribute(`lineDistance`,new wn(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ds=class extends ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},fs=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new mn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps=new wt,ms=new Ct,hs=new ht,gs=new G,_s=class extends Zt{constructor(e=new Mn,t=new fs){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),hs.radius+=i,e.ray.intersectsSphere(hs)===!1)return;ps.copy(r).invert(),ms.copy(e.ray).applyMatrix4(ps);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);gs.fromBufferAttribute(l,n),vs(gs,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)gs.fromBufferAttribute(l,a),vs(gs,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function vs(e,t,n,r,i,a,o){let s=ms.distanceSqToPoint(e);if(s<n){let n=new G;ms.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}var ys=class extends He{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bs=new G,xs=new G,Ss=new G,Cs=new ln,ws=class extends Mn{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ae*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Cs;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Cs.getNormal(Ss),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Cs[c[e]],o=Cs[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ss.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ss.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];bs.fromBufferAttribute(a,t),xs.fromBufferAttribute(a,n),d.push(bs.x,bs.y,bs.z),d.push(xs.x,xs.y,xs.z)}this.setAttribute(`position`,new wn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ts=class e extends Mn{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new G,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new wn(s,3)),this.setAttribute(`normal`,new wn(c,3)),this.setAttribute(`uv`,new wn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Es=class e extends Mn{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new wn(p,3)),this.setAttribute(`normal`,new wn(m,3)),this.setAttribute(`uv`,new wn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ds=class extends Mn{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new G,i=new G;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),Os(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),Os(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new wn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Os(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}var ks=class extends ts{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function As(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function js(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ms=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ns=class extends Ms{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S,endingEnd:S}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case C:i=e,o=2*t-n;break;case w:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case C:a=e,s=2*n-t;break;case w:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ps=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fs=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Is=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ps(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ns(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case y:t=this.InterpolantFactoryMethodDiscrete;break;case b:t=this.InterpolantFactoryMethodLinear;break;case x:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return y;case this.InterpolantFactoryMethodLinear:return b;case this.InterpolantFactoryMethodSmooth:return x}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&js(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===x,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Is.prototype.TimeBufferType=Float32Array,Is.prototype.ValueBufferType=Float32Array,Is.prototype.DefaultInterpolation=b;var Ls=class extends Is{};Ls.prototype.ValueTypeName=`bool`,Ls.prototype.ValueBufferType=Array,Ls.prototype.DefaultInterpolation=y,Ls.prototype.InterpolantFactoryMethodLinear=void 0,Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends Is{};Rs.prototype.ValueTypeName=`color`;var zs=class extends Is{};zs.prototype.ValueTypeName=`number`;var Bs=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Je.slerpFlat(i,0,a,c-o,a,c,s);return i}},Vs=class extends Is{InterpolantFactoryMethodLinear(e){return new Bs(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName=`quaternion`,Vs.prototype.DefaultInterpolation=b,Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends Is{};Hs.prototype.ValueTypeName=`string`,Hs.prototype.ValueBufferType=Array,Hs.prototype.DefaultInterpolation=y,Hs.prototype.InterpolantFactoryMethodLinear=void 0,Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Is{};Us.prototype.ValueTypeName=`vector`;var Ws=class extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Gs=`\\[\\]\\.:\\/`,Ks=RegExp(`[\\[\\]\\.:\\/]`,`g`),qs=`[^\\[\\]\\.:\\/]`,Js=`[^`+Gs.replace(`\\.`,``)+`]`,Ys=`((?:WC+[\\/:])*)`.replace(`WC`,qs),Xs=`(WCOD+)?`.replace(`WCOD`,Js),Zs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,qs),Qs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,qs),$s=RegExp(`^`+Ys+Xs+Zs+Qs+`$`),ec=[`material`,`materials`,`bones`,`map`],tc=class{constructor(e,t,n){let r=n||nc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ks,``)}static parseTrackName(e){let t=$s.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ec.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nc.Composite=tc,nc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nc.prototype.GetterByBindingType=[nc.prototype._getValue_direct,nc.prototype._getValue_array,nc.prototype._getValue_arrayElement,nc.prototype._getValue_toArray],nc.prototype.SetterByBindingTypeAndVersioning=[[nc.prototype._setValue_direct,nc.prototype._setValue_direct_setNeedsUpdate,nc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nc.prototype._setValue_array,nc.prototype._setValue_array_setNeedsUpdate,nc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nc.prototype._setValue_arrayElement,nc.prototype._setValue_arrayElement_setNeedsUpdate,nc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nc.prototype._setValue_fromArray,nc.prototype._setValue_fromArray_setNeedsUpdate,nc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rc=class extends Io{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},ic=new wt,ac=class{constructor(e,t,n=0,r=1/0){this.ray=new Ct(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ft,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ic.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(e,t=!0,n=[]){return sc(e,this,n,t),n.sort(oc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)sc(e[r],this,n,t);return n.sort(oc),n}};function oc(e,t){return e.distance-t.distance}function sc(e,t,n,r){if(e.layers.test(t.layers)&&e.raycast(t,n),r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)sc(r[e],t,n,!0)}}var cc=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ce(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},lc=new G,uc=new G,dc=class{constructor(e=new G,t=new G){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){lc.subVectors(e,this.start),uc.subVectors(this.end,this.start);let n=uc.dot(uc),r=uc.dot(lc)/n;return t&&(r=ce(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},fc=class extends us{constructor(e=10,t=10,n=4473924,r=8947848){n=new mn(n),r=new mn(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Mn;l.setAttribute(`position`,new wn(s,3)),l.setAttribute(`color`,new wn(c,3));let u=new ts({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`162`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`162`);var pc={type:`change`},mc={type:`start`},hc={type:`end`},gc=new Ct,_c=new xr,vc=Math.cos(70*Ce.DEG2RAD),yc=class extends ne{constructor(n,r){super(),this.object=n,this.domElement=r,this.domElement.style.touchAction=`none`,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener(`keydown`,Ce),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener(`keydown`,Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pc),i.update(),o=a.NONE},this.update=function(){let e=new G,t=new Je().setFromUnitVectors(n.up,new G(0,1,0)),r=t.clone().invert(),f=new G,p=new Je,m=new G,h=2*Math.PI;return function(g=null){let _=i.object.position;e.copy(_).sub(i.target),e.applyQuaternion(t),c.setFromVector3(e),i.autoRotate&&o===a.NONE&&k(D(g)),i.enableDamping?(c.theta+=l.theta*i.dampingFactor,c.phi+=l.phi*i.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let v=i.minAzimuthAngle,y=i.maxAzimuthAngle;isFinite(v)&&isFinite(y)&&(v<-Math.PI?v+=h:v>Math.PI&&(v-=h),y<-Math.PI?y+=h:y>Math.PI&&(y-=h),v<=y?c.theta=Math.max(v,Math.min(y,c.theta)):c.theta=c.theta>(v+y)/2?Math.max(v,c.theta):Math.min(y,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let b=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)c.radius=te(c.radius);else{let e=c.radius;c.radius=te(c.radius*u),b=e!=c.radius}if(e.setFromSpherical(c),e.applyQuaternion(r),_.copy(i.target).add(e),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&C){let t=null;if(i.object.isPerspectiveCamera){let n=e.length();t=te(n*u);let r=n-t;i.object.position.addScaledVector(x,r),i.object.updateMatrixWorld(),b=!!r}else if(i.object.isOrthographicCamera){let n=new G(S.x,S.y,0);n.unproject(i.object);let r=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),b=r!==i.object.zoom;let a=new G(S.x,S.y,0);a.unproject(i.object),i.object.position.sub(a).add(n),i.object.updateMatrixWorld(),t=e.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),i.zoomToCursor=!1;t!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(t).add(i.object.position):(gc.origin.copy(i.object.position),gc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(gc.direction))<vc?n.lookAt(i.target):(_c.setFromNormalAndCoplanarPoint(i.object.up,i.target),gc.intersectPlane(_c,i.target))))}else if(i.object.isOrthographicCamera){let e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),e!==i.object.zoom&&(i.object.updateProjectionMatrix(),b=!0)}return u=1,C=!1,b||f.distanceToSquared(i.object.position)>s||8*(1-p.dot(i.object.quaternion))>s||m.distanceToSquared(i.target)>s?(i.dispatchEvent(pc),f.copy(i.object.position),p.copy(i.object.quaternion),m.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener(`contextmenu`,Te),i.domElement.removeEventListener(`pointerdown`,z),i.domElement.removeEventListener(`pointercancel`,B),i.domElement.removeEventListener(`wheel`,be),i.domElement.removeEventListener(`pointermove`,_e),i.domElement.removeEventListener(`pointerup`,B),i.domElement.getRootNode().removeEventListener(`keydown`,Se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener(`keydown`,Ce),i._domElementKeyEvents=null)};let i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o=a.NONE,s=1e-6,c=new cc,l=new cc,u=1,d=new G,f=new H,p=new H,m=new H,h=new H,g=new H,_=new H,v=new H,y=new H,b=new H,x=new G,S=new H,C=!1,w=[],T={},E=!1;function D(e){return e===null?2*Math.PI/60/60*i.autoRotateSpeed:2*Math.PI/60*i.autoRotateSpeed*e}function O(e){let t=Math.abs(e*.01);return .95**(i.zoomSpeed*t)}function k(e){l.theta-=e}function A(e){l.phi-=e}let j=function(){let e=new G;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),M=function(){let e=new G;return function(t,n){i.screenSpacePanning===!0?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(i.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),N=function(){let e=new G;return function(t,n){let r=i.domElement;if(i.object.isPerspectiveCamera){let a=i.object.position;e.copy(a).sub(i.target);let o=e.length();o*=Math.tan(i.object.fov/2*Math.PI/180),j(2*t*o/r.clientHeight,i.object.matrix),M(2*n*o/r.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(t*(i.object.right-i.object.left)/i.object.zoom/r.clientWidth,i.object.matrix),M(n*(i.object.top-i.object.bottom)/i.object.zoom/r.clientHeight,i.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),i.enablePan=!1)}}();function P(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),i.enableZoom=!1)}function ee(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),i.enableZoom=!1)}function F(e,t){if(!i.zoomToCursor)return;C=!0;let n=i.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,o=n.width,s=n.height;S.x=r/o*2-1,S.y=-(a/s)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(e){return Math.max(i.minDistance,Math.min(i.maxDistance,e))}function ne(e){f.set(e.clientX,e.clientY)}function re(e){F(e.clientX,e.clientX),v.set(e.clientX,e.clientY)}function ie(e){h.set(e.clientX,e.clientY)}function ae(e){p.set(e.clientX,e.clientY),m.subVectors(p,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p),i.update()}function oe(e){y.set(e.clientX,e.clientY),b.subVectors(y,v),b.y>0?P(O(b.y)):b.y<0&&ee(O(b.y)),v.copy(y),i.update()}function se(e){g.set(e.clientX,e.clientY),_.subVectors(g,h).multiplyScalar(i.panSpeed),N(_.x,_.y),h.copy(g),i.update()}function ce(e){F(e.clientX,e.clientY),e.deltaY<0?ee(O(e.deltaY)):e.deltaY>0&&P(O(e.deltaY)),i.update()}function I(e){let t=!1;switch(e.code){case i.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),t=!0;break;case i.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),t=!0;break;case i.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),t=!0;break;case i.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),i.update())}function le(e){if(w.length===1)f.set(e.pageX,e.pageY);else{let t=Ae(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);f.set(n,r)}}function ue(e){if(w.length===1)h.set(e.pageX,e.pageY);else{let t=Ae(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);h.set(n,r)}}function de(e){let t=Ae(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);v.set(0,i)}function fe(e){i.enableZoom&&de(e),i.enablePan&&ue(e)}function pe(e){i.enableZoom&&de(e),i.enableRotate&&le(e)}function me(e){if(w.length==1)p.set(e.pageX,e.pageY);else{let t=Ae(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);p.set(n,r)}m.subVectors(p,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p)}function L(e){if(w.length===1)g.set(e.pageX,e.pageY);else{let t=Ae(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);g.set(n,r)}_.subVectors(g,h).multiplyScalar(i.panSpeed),N(_.x,_.y),h.copy(g)}function he(e){let t=Ae(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);y.set(0,a),b.set(0,(y.y/v.y)**+i.zoomSpeed),P(b.y),v.copy(y),F((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function ge(e){i.enableZoom&&he(e),i.enablePan&&L(e)}function R(e){i.enableZoom&&he(e),i.enableRotate&&me(e)}function z(e){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(e.pointerId),i.domElement.addEventListener(`pointermove`,_e),i.domElement.addEventListener(`pointerup`,B)),!Oe(e)&&(Ee(e),e.pointerType===`touch`?U(e):ve(e)))}function _e(e){i.enabled!==!1&&(e.pointerType===`touch`?we(e):ye(e))}function B(e){switch(De(e),w.length){case 0:i.domElement.releasePointerCapture(e.pointerId),i.domElement.removeEventListener(`pointermove`,_e),i.domElement.removeEventListener(`pointerup`,B),i.dispatchEvent(hc),o=a.NONE;break;case 1:let t=w[0],n=T[t];U({pointerId:t,pageX:n.x,pageY:n.y})}}function ve(t){let n;switch(t.button){case 0:n=i.mouseButtons.LEFT;break;case 1:n=i.mouseButtons.MIDDLE;break;case 2:n=i.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(i.enableZoom===!1)return;re(t),o=a.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(i.enablePan===!1)return;ie(t),o=a.PAN}else{if(i.enableRotate===!1)return;ne(t),o=a.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(i.enableRotate===!1)return;ne(t),o=a.ROTATE}else{if(i.enablePan===!1)return;ie(t),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(mc)}function ye(e){switch(o){case a.ROTATE:if(i.enableRotate===!1)return;ae(e);break;case a.DOLLY:if(i.enableZoom===!1)return;oe(e);break;case a.PAN:if(i.enablePan===!1)return;se(e)}}function be(e){i.enabled!==!1&&i.enableZoom!==!1&&o===a.NONE&&(e.preventDefault(),i.dispatchEvent(mc),ce(xe(e)),i.dispatchEvent(hc))}function xe(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!E&&(n.deltaY*=10),n}function Se(e){e.key===`Control`&&(E=!0,i.domElement.getRootNode().addEventListener(`keyup`,V,{passive:!0,capture:!0}))}function V(e){e.key===`Control`&&(E=!1,i.domElement.getRootNode().removeEventListener(`keyup`,V,{passive:!0,capture:!0}))}function Ce(e){i.enabled!==!1&&i.enablePan!==!1&&I(e)}function U(e){switch(ke(e),w.length){case 1:switch(i.touches.ONE){case t.ROTATE:if(i.enableRotate===!1)return;le(e),o=a.TOUCH_ROTATE;break;case t.PAN:if(i.enablePan===!1)return;ue(e),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(i.touches.TWO){case t.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;fe(e),o=a.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pe(e),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(mc)}function we(e){switch(ke(e),o){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(e),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;L(e),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(e),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(e),i.update();break;default:o=a.NONE}}function Te(e){i.enabled!==!1&&e.preventDefault()}function Ee(e){w.push(e.pointerId)}function De(e){delete T[e.pointerId];for(let t=0;t<w.length;t++)if(w[t]==e.pointerId){w.splice(t,1);return}}function Oe(e){for(let t=0;t<w.length;t++)if(w[t]==e.pointerId)return!0;return!1}function ke(e){let t=T[e.pointerId];t===void 0&&(t=new H,T[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Ae(e){let t=e.pointerId===w[0]?w[1]:w[0];return T[t]}i.domElement.addEventListener(`contextmenu`,Te),i.domElement.addEventListener(`pointerdown`,z),i.domElement.addEventListener(`pointercancel`,B),i.domElement.addEventListener(`wheel`,be,{passive:!1}),i.domElement.getRootNode().addEventListener(`keydown`,Se,{passive:!0,capture:!0}),this.update()}},bc={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},xc=([e,t,n])=>{let r=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(t).forEach(e=>{r.setAttribute(e,String(t[e]))}),n?.length&&n.forEach(e=>{let t=xc(e);r.appendChild(t)}),r},Sc=(e,t={})=>xc([`svg`,{...bc,...t},e]),Cc=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),wc=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Tc=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},Ec=e=>{let t=Tc(e);return t.charAt(0).toUpperCase()+t.slice(1)},Dc=e=>Array.from(e.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Oc=e=>typeof e==`string`?e:!e||!e.class?``:e.class&&typeof e.class==`string`?e.class.split(` `):e.class&&Array.isArray(e.class)?e.class:``,kc=(e,{nameAttr:t,icons:n,attrs:r})=>{let i=e.getAttribute(t);if(i==null)return;let a=n[Ec(i)];if(!a)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let o=Dc(e),s=wc(o)?{}:{"aria-hidden":`true`},c={...bc,"data-lucide":i,...s,...r,...o},l=Oc(o),u=Oc(r),d=Cc(`lucide`,`lucide-${i}`,...l,...u);d&&Object.assign(c,{class:d});let f=Sc(a,c);return e.parentNode?.replaceChild(f,e)},Ac=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`}]],jc=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`}]],Mc=[[`path`,{d:`M12 15V3`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}],[`path`,{d:`m7 10 5 5 5-5`}]],Nc=[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`}],[`path`,{d:`m2 2 20 20`}]],Pc=[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`}]],Fc=[[`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3`}],[`path`,{d:`M21 8V5a2 2 0 0 0-2-2h-3`}],[`path`,{d:`M3 16v3a2 2 0 0 0 2 2h3`}],[`path`,{d:`M16 21h3a2 2 0 0 0 2-2v-3`}]],Ic=[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}]],Lc=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],Rc=({icons:e={},nameAttr:t=`data-lucide`,attrs:n={},root:r=document,inTemplates:i}={})=>{if(!Object.values(e).length)throw Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(r===void 0)throw Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(r=>kc(r,{nameAttr:t,icons:e,attrs:n})),i&&Array.from(r.querySelectorAll(`template`)).forEach(r=>Rc({icons:e,nameAttr:t,attrs:n,root:r.content,inTemplates:i})),t===`data-lucide`){let t=r.querySelectorAll(`[icon-name]`);t.length>0&&(console.warn(`[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide`),Array.from(t).forEach(t=>kc(t,{nameAttr:`icon-name`,icons:e,attrs:n})))}},zc={meta:{title:`Planetary Boundaries chapter opener status charts`,page:{width_mm:210,height_mm:280},data_policy:`No placeholder values are rendered. Markers render only for verified_numeric or verified_qualitative data_status values.`,basis_year:`2025`,axis_note:`축 설명 · baseline–PB–high risk 기준으로 정규화한 상대 위험 위치이며, 단위별 절대 수치 축이 아님`,footer_note:`기준연도 2025 · 출처 Planetary Health Check 2025; Richardson et al. 2023; CGDD 2023 table`,sources:[{id:`phc2025`,label:`Planetary Health Check 2025 boundary pages`,url:`https://www.planetaryhealthcheck.org/`},{id:`richardson2023`,label:`Richardson et al. 2023, Earth beyond six of nine planetary boundaries`,url:`https://www.science.org/doi/10.1126/sciadv.adh2458`},{id:`cgdd2023-table`,label:`2023 revision table, French General Commissariat for Sustainable Development, after Richardson et al. 2023`,url:`https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/la-france-face-aux-neuf-limites-planetaires/en/14-2023-revision-of-the-nine`},{id:`phc2025-exec`,label:`Planetary Health Check 2025 Executive Summary`,url:`https://www.planetaryhealthcheck.org/wp-content/uploads/PlanetaryHealthCheck2025_ExecutiveSummary.pdf`}]},chapters:[{id:`climate-change`,order:1,title_ko:`기후변화`,title_en:`Climate Change`,control_note:`대기 중 CO₂ 농도, 인위적 복사강제력`,pb_note:`CO₂ 350 ppm · RF +1.0 W/m²`,variables:[{id:`co2`,label:`CO₂ 423 ppm`,control_label:`CO₂ concentration`,unit:`ppm`,direction:`higher_is_worse`,baseline:280,boundary:350,high_risk:450,current:423,data_status:`verified_numeric`,source_ids:[`phc2025-exec`,`phc2025`,`cgdd2023-table`]},{id:`radiative-forcing`,label:`RF +2.97 W/m²`,control_label:`Radiative forcing`,unit:`W/m²`,direction:`higher_is_worse`,baseline:0,boundary:1,high_risk:1.5,current:2.97,data_status:`verified_numeric`,source_ids:[`phc2025-exec`,`phc2025`,`cgdd2023-table`]}]},{id:`biosphere-integrity`,order:2,title_ko:`생물권 온전성 변화`,title_en:`Change in Biosphere Integrity`,control_note:`유전적 다양성: 멸종률, 기능적 온전성: HANPP`,pb_note:`멸종률 10 E/MSY · HANPP 10%`,variables:[{id:`genetic-diversity`,label:`멸종률 >100 E/MSY`,control_label:`Genetic diversity`,unit:`E/MSY`,direction:`higher_is_worse`,baseline:1,boundary:10,high_risk:100,current:null,qualitative_position:`beyond_high_risk`,data_status:`verified_qualitative`,source_ids:[`phc2025`,`cgdd2023-table`]},{id:`hanpp`,label:`HANPP 30%`,control_label:`Functional integrity`,unit:`%`,direction:`higher_is_worse`,baseline:0,boundary:10,high_risk:20,current:30,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`land-system-change`,order:3,title_ko:`토지 시스템 변화`,title_en:`Land-System Change`,control_note:`원래 산림면적 대비 남아 있는 산림 비율`,pb_note:`전 지구 산림 75%`,variables:[{id:`forest-cover`,label:`산림 59%`,control_label:`Forest cover`,unit:`%`,direction:`lower_is_worse`,baseline:100,boundary:75,high_risk:54,current:59,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`freshwater-change`,order:4,title_ko:`담수 변화`,title_en:`Freshwater Change`,control_note:`Blue water 흐름 교란, Green water 토양수분 교란`,pb_note:`Blue 12.9% · Green 12.4%`,variables:[{id:`blue-water`,label:`Blue 18.2%`,control_label:`Blue water`,unit:`%`,direction:`higher_is_worse`,baseline:10.3,boundary:12.9,high_risk:50,current:18.2,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},{id:`green-water`,label:`Green 15.8%`,control_label:`Green water`,unit:`%`,direction:`higher_is_worse`,baseline:9.8,boundary:12.4,high_risk:50,current:15.8,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`biogeochemical-flows`,order:5,title_ko:`생지화학적 흐름 변화`,title_en:`Modification of Biogeochemical Flows`,control_note:`인 사용량, 인위적 질소 고정량`,pb_note:`P 6.2 Tg P/yr · N 62 Tg N/yr`,variables:[{id:`phosphorus`,label:`P 18.2 Tg/yr`,control_label:`Phosphorus flow`,unit:`Tg P/yr`,direction:`higher_is_worse`,baseline:0,boundary:6.2,high_risk:11.2,current:18.2,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},{id:`nitrogen`,label:`N 190 Tg/yr`,control_label:`Nitrogen fixation`,unit:`Tg N/yr`,direction:`higher_is_worse`,baseline:0,boundary:62,high_risk:82,current:190,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`ocean-acidification`,order:6,title_ko:`해양 산성화`,title_en:`Ocean Acidification`,control_note:`전 지구 표층해양 아라고나이트 포화도`,pb_note:`Ωarag 2.86`,variables:[{id:`aragonite-saturation`,label:`Ωarag 2.84`,control_label:`Aragonite saturation state`,unit:`Ωarag`,direction:`lower_is_worse`,baseline:3.57,boundary:2.86,high_risk:2.5,current:2.84,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`atmospheric-aerosol-loading`,order:7,title_ko:`대기 에어로졸 부하 증가`,title_en:`Increase in Atmospheric Aerosol Loading`,control_note:`남북반구 에어로졸 광학두께 차이`,pb_note:`AOD 차이 0.1`,variables:[{id:`aod-difference`,label:`AOD Δ 0.063`,control_label:`Interhemispheric AOD difference`,unit:`AOD`,direction:`higher_is_worse`,baseline:.04,boundary:.1,high_risk:.25,current:.063,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`stratospheric-ozone-depletion`,order:8,title_ko:`성층권 오존 고갈`,title_en:`Stratospheric Ozone Depletion`,control_note:`전 지구 평균 성층권 오존 농도`,pb_note:`O₃ 277.4 DU`,variables:[{id:`ozone`,label:`O₃ 285.7 DU`,control_label:`Stratospheric ozone`,unit:`DU`,direction:`lower_is_worse`,baseline:292,boundary:277.4,high_risk:261,current:285.7,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]}]},{id:`novel-entities`,order:9,title_ko:`신규 물질 도입`,title_en:`Introduction of Novel Entities`,control_note:`충분한 안전성 평가 없이 방출되는 합성화학물질 비율`,pb_note:`0% 원칙 · 고위험 정량 경계 미정`,variables:[{id:`untested-chemicals`,label:`정량 경계 미확정`,control_label:`Untested synthetic chemicals`,unit:`%`,direction:`higher_is_worse`,baseline:0,boundary:0,high_risk:null,current:null,data_status:`unresolved_boundary`,source_ids:[`phc2025`,`cgdd2023-table`]}]}]},Bc={source_archive:`단위 통합 거리화.zip`,normalization_executed:!1,aggregation_executed:!1,controls:[{chapter_id:`climate-change`,chapter_order:1,chapter_title_ko:`기후변화`,source_variable:{id:`co2`,label:`CO₂ 423 ppm`,control_label:`CO₂ concentration`,unit:`ppm`,direction:`higher_is_worse`,baseline:280,boundary:350,high_risk:450,current:423,data_status:`verified_numeric`,source_ids:[`phc2025-exec`,`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`CO₂ 423 ppm`,score_text:`1.7300`,ui_x_text:`122.28`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`climate-change`,chapter_order:1,chapter_title_ko:`기후변화`,source_variable:{id:`radiative-forcing`,label:`RF +2.97 W/m²`,control_label:`Radiative forcing`,unit:`W/m²`,direction:`higher_is_worse`,baseline:0,boundary:1,high_risk:1.5,current:2.97,data_status:`verified_numeric`,source_ids:[`phc2025-exec`,`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`RF +2.97 W/m²`,score_text:`4.9400`,ui_x_text:`176.00`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`biosphere-integrity`,chapter_order:2,chapter_title_ko:`생물권 온전성 변화`,source_variable:{id:`genetic-diversity`,label:`멸종률 >100 E/MSY`,control_label:`Genetic diversity`,unit:`E/MSY`,direction:`higher_is_worse`,baseline:1,boundary:10,high_risk:100,current:null,qualitative_position:`beyond_high_risk`,data_status:`verified_qualitative`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`멸종률 >100 E/MSY`,score_text:`3.0000`,ui_x_text:`176.00`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!1},{chapter_id:`biosphere-integrity`,chapter_order:2,chapter_title_ko:`생물권 온전성 변화`,source_variable:{id:`hanpp`,label:`HANPP 30%`,control_label:`Functional integrity`,unit:`%`,direction:`higher_is_worse`,baseline:0,boundary:10,high_risk:20,current:30,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`HANPP 30%`,score_text:`3.0000`,ui_x_text:`176.00`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`land-system-change`,chapter_order:3,chapter_title_ko:`토지 시스템 변화`,source_variable:{id:`forest-cover`,label:`산림 59%`,control_label:`Forest cover`,unit:`%`,direction:`lower_is_worse`,baseline:100,boundary:75,high_risk:54,current:59,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`산림 59%`,score_text:`1.7619`,ui_x_text:`123.43`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`freshwater-change`,chapter_order:4,chapter_title_ko:`담수 변화`,source_variable:{id:`blue-water`,label:`Blue 18.2%`,control_label:`Blue water`,unit:`%`,direction:`higher_is_worse`,baseline:10.3,boundary:12.9,high_risk:50,current:18.2,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`Blue 18.2%`,score_text:`1.1429`,ui_x_text:`101.14`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`freshwater-change`,chapter_order:4,chapter_title_ko:`담수 변화`,source_variable:{id:`green-water`,label:`Green 15.8%`,control_label:`Green water`,unit:`%`,direction:`higher_is_worse`,baseline:9.8,boundary:12.4,high_risk:50,current:15.8,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`Green 15.8%`,score_text:`1.0904`,ui_x_text:`99.26`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`biogeochemical-flows`,chapter_order:5,chapter_title_ko:`생지화학적 흐름 변화`,source_variable:{id:`phosphorus`,label:`P 18.2 Tg/yr`,control_label:`Phosphorus flow`,unit:`Tg P/yr`,direction:`higher_is_worse`,baseline:0,boundary:6.2,high_risk:11.2,current:18.2,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`P 18.2 Tg/yr`,score_text:`3.4000`,ui_x_text:`143.41`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`biogeochemical-flows`,chapter_order:5,chapter_title_ko:`생지화학적 흐름 변화`,source_variable:{id:`nitrogen`,label:`N 190 Tg/yr`,control_label:`Nitrogen fixation`,unit:`Tg N/yr`,direction:`higher_is_worse`,baseline:0,boundary:62,high_risk:82,current:190,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`N 190 Tg/yr`,score_text:`7.4000`,ui_x_text:`176.00`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`ocean-acidification`,chapter_order:6,chapter_title_ko:`해양 산성화`,source_variable:{id:`aragonite-saturation`,label:`Ωarag 2.84`,control_label:`Aragonite saturation state`,unit:`Ωarag`,direction:`lower_is_worse`,baseline:3.57,boundary:2.86,high_risk:2.5,current:2.84,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`Ωarag 2.84`,score_text:`1.0556`,ui_x_text:`98.00`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`atmospheric-aerosol-loading`,chapter_order:7,chapter_title_ko:`대기 에어로졸 부하 증가`,source_variable:{id:`aod-difference`,label:`AOD Δ 0.063`,control_label:`Interhemispheric AOD difference`,unit:`AOD`,direction:`higher_is_worse`,baseline:.04,boundary:.1,high_risk:.25,current:.063,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`AOD Δ 0.063`,score_text:`0.3833`,ui_x_text:`60.23`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`stratospheric-ozone-depletion`,chapter_order:8,chapter_title_ko:`성층권 오존 고갈`,source_variable:{id:`ozone`,label:`O₃ 285.7 DU`,control_label:`Stratospheric ozone`,unit:`DU`,direction:`lower_is_worse`,baseline:292,boundary:277.4,high_risk:261,current:285.7,data_status:`verified_numeric`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:{label:`O₃ 285.7 DU`,score_text:`0.4315`,ui_x_text:`63.03`},score_provenance:`existing SVG data-score; rounded to 4 decimal places`,numeric_observation:!0},{chapter_id:`novel-entities`,chapter_order:9,chapter_title_ko:`신규 물질 도입`,source_variable:{id:`untested-chemicals`,label:`정량 경계 미확정`,control_label:`Untested synthetic chemicals`,unit:`%`,direction:`higher_is_worse`,baseline:0,boundary:0,high_risk:null,current:null,data_status:`unresolved_boundary`,source_ids:[`phc2025`,`cgdd2023-table`]},existing_svg_marker:null,score_provenance:null,numeric_observation:!1}]},Vc={source:`04_atmospheric_pressure.zip/04_atmospheric_pressure/section_04_analysis/csv/section04_optional_xyz_energy_co2_n2o.csv`,archiveSha256:`2a32facd787472a8bb57283dc151181939bb71d1d6eb80fb2f3e352d1c311faf`,metadataSource:`04_atmospheric_pressure/section_04_analysis/csv/metadata.json`,axes:[`Fossil electricity (%)`,`Consumption CO2 (tonnes/person)`,`N2O (tonnes CO2e/person)`],sourceColumns:[{path:`data/raw/fossil_fuel_electricity_share.csv`,value_column:`Fossil fuels`,unit:`% electricity`,rows_total:7300,columns:[`Entity`,`Code`,`Year`,`Fossil fuels`],year_min:1900,year_max:2025,valid_country_rows:6131,latest_country_n:213,duplicate_entity_code_year:0,excluded_non_iso3_or_missing_code_rows:1169},{path:`data/raw/consumption_co2_per_capita.csv`,value_column:`Per capita consumption-based CO₂ emissions`,unit:`tonnes/person`,rows_total:4643,columns:[`Entity`,`Code`,`Year`,`Per capita consumption-based CO₂ emissions`],year_min:1990,year_max:2024,valid_country_rows:4064,latest_country_n:120,duplicate_entity_code_year:0,excluded_non_iso3_or_missing_code_rows:579},{path:`data/raw/nitrous_oxide_emissions_per_capita.csv`,value_column:`Per capita nitrous oxide emissions including land use`,unit:`tonnes CO2e/person`,rows_total:36439,columns:[`Entity`,`Code`,`Year`,`Per capita nitrous oxide emissions including land use`],year_min:1850,year_max:2024,valid_country_rows:34339,latest_country_n:201,duplicate_entity_code_year:0,excluded_non_iso3_or_missing_code_rows:2100}],observations:[{code:`ALB`,label:`Albania (ALB) / fossil 2024: 0 % electricity / co2_pc 2023: 1.91418 tonnes/person / n2o_pc 2024: 0.254425 tonnes CO2e/person`,xyz:[0,1.914176,.25442463]},{code:`ARE`,label:`United Arab Emirates (ARE) / fossil 2024: 68.2669 % electricity / co2_pc 2023: 23.3101 tonnes/person / n2o_pc 2024: 0.239001 tonnes CO2e/person`,xyz:[68.26695,23.31011,.23900113]},{code:`ARG`,label:`Argentina (ARG) / fossil 2025: 58.3937 % electricity / co2_pc 2023: 4.07713 tonnes/person / n2o_pc 2024: 1.14438 tonnes CO2e/person`,xyz:[58.393734,4.0771327,1.1443828]},{code:`ARM`,label:`Armenia (ARM) / fossil 2025: 34.0535 % electricity / co2_pc 2023: 2.60714 tonnes/person / n2o_pc 2024: 0.239287 tonnes CO2e/person`,xyz:[34.053497,2.607138,.23928659]},{code:`AUS`,label:`Australia (AUS) / fossil 2025: 61.3816 % electricity / co2_pc 2023: 14.0694 tonnes/person / n2o_pc 2024: 2.53728 tonnes CO2e/person`,xyz:[61.381573,14.069397,2.5372827]},{code:`AUT`,label:`Austria (AUT) / fossil 2025: 16.4026 % electricity / co2_pc 2023: 8.37513 tonnes/person / n2o_pc 2024: 0.390397 tonnes CO2e/person`,xyz:[16.402622,8.375129,.3903967]},{code:`AZE`,label:`Azerbaijan (AZE) / fossil 2025: 87.8605 % electricity / co2_pc 2023: 3.9579 tonnes/person / n2o_pc 2024: 0.287996 tonnes CO2e/person`,xyz:[87.86045,3.9579039,.2879962]},{code:`BEL`,label:`Belgium (BEL) / fossil 2025: 27.9874 % electricity / co2_pc 2023: 16.7854 tonnes/person / n2o_pc 2024: 0.713796 tonnes CO2e/person`,xyz:[27.987377,16.78538,.71379566]},{code:`BEN`,label:`Benin (BEN) / fossil 2024: 96.0396 % electricity / co2_pc 2023: 0.597672 tonnes/person / n2o_pc 2024: 0.222232 tonnes CO2e/person`,xyz:[96.039604,.5976721,.22223161]},{code:`BFA`,label:`Burkina Faso (BFA) / fossil 2024: 82.8402 % electricity / co2_pc 2023: 0.251944 tonnes/person / n2o_pc 2024: 0.421332 tonnes CO2e/person`,xyz:[82.84023,.2519438,.42133155]},{code:`BGD`,label:`Bangladesh (BGD) / fossil 2025: 97.8627 % electricity / co2_pc 2023: 0.978959 tonnes/person / n2o_pc 2024: 0.184415 tonnes CO2e/person`,xyz:[97.86267,.97895855,.18441464]},{code:`BGR`,label:`Bulgaria (BGR) / fossil 2025: 28.0822 % electricity / co2_pc 2023: 5.19584 tonnes/person / n2o_pc 2024: 0.593375 tonnes CO2e/person`,xyz:[28.082191,5.1958365,.59337515]},{code:`BHR`,label:`Bahrain (BHR) / fossil 2024: 99.7365 % electricity / co2_pc 2023: 14.0563 tonnes/person / n2o_pc 2024: 0.132865 tonnes CO2e/person`,xyz:[99.73649,14.056256,.13286453]},{code:`BLR`,label:`Belarus (BLR) / fossil 2025: 58.5724 % electricity / co2_pc 2023: 6.86157 tonnes/person / n2o_pc 2024: 1.69519 tonnes CO2e/person`,xyz:[58.572353,6.8615737,1.6951921]},{code:`BOL`,label:`Bolivia (BOL) / fossil 2025: 63.9032 % electricity / co2_pc 2023: 2.09311 tonnes/person / n2o_pc 2024: 0.841838 tonnes CO2e/person`,xyz:[63.903156,2.0931137,.84183836]},{code:`BRA`,label:`Brazil (BRA) / fossil 2025: 11.284 % electricity / co2_pc 2023: 2.22595 tonnes/person / n2o_pc 2024: 0.962132 tonnes CO2e/person`,xyz:[11.284026,2.2259502,.96213245]},{code:`BRN`,label:`Brunei (BRN) / fossil 2024: 99.8201 % electricity / co2_pc 2023: 19.3402 tonnes/person / n2o_pc 2024: 1.22918 tonnes CO2e/person`,xyz:[99.820145,19.34018,1.2291784]},{code:`BWA`,label:`Botswana (BWA) / fossil 2024: 99.7085 % electricity / co2_pc 2023: 5.84981 tonnes/person / n2o_pc 2024: 3.14435 tonnes CO2e/person`,xyz:[99.70846,5.849806,3.144348]},{code:`CAN`,label:`Canada (CAN) / fossil 2025: 23.0228 % electricity / co2_pc 2023: 13.2304 tonnes/person / n2o_pc 2024: 1.12562 tonnes CO2e/person`,xyz:[23.022808,13.230393,1.1256185]},{code:`CHE`,label:`Switzerland (CHE) / fossil 2025: 2.30698 % electricity / co2_pc 2023: 13.3396 tonnes/person / n2o_pc 2024: 0.245587 tonnes CO2e/person`,xyz:[2.3069825,13.339576,.24558713]},{code:`CHL`,label:`Chile (CHL) / fossil 2025: 33.6271 % electricity / co2_pc 2023: 4.48432 tonnes/person / n2o_pc 2024: 0.369606 tonnes CO2e/person`,xyz:[33.627117,4.4843225,.36960572]},{code:`CHN`,label:`China (CHN) / fossil 2025: 58.349 % electricity / co2_pc 2023: 7.6319 tonnes/person / n2o_pc 2024: 0.335043 tonnes CO2e/person`,xyz:[58.348953,7.6319,.33504292]},{code:`CIV`,label:`Cote d'Ivoire (CIV) / fossil 2024: 71.0843 % electricity / co2_pc 2023: 0.573214 tonnes/person / n2o_pc 2024: 0.125748 tonnes CO2e/person`,xyz:[71.084335,.5732141,.12574778]},{code:`CMR`,label:`Cameroon (CMR) / fossil 2024: 26.8595 % electricity / co2_pc 2023: 0.36598 tonnes/person / n2o_pc 2024: 0.223966 tonnes CO2e/person`,xyz:[26.859505,.36597958,.22396636]},{code:`COL`,label:`Colombia (COL) / fossil 2025: 22.9748 % electricity / co2_pc 2023: 1.99661 tonnes/person / n2o_pc 2024: 0.443285 tonnes CO2e/person`,xyz:[22.974768,1.9966097,.44328466]},{code:`CRI`,label:`Costa Rica (CRI) / fossil 2025: 0 % electricity / co2_pc 2023: 2.87762 tonnes/person / n2o_pc 2024: 0.338991 tonnes CO2e/person`,xyz:[0,2.8776224,.3389907]},{code:`CYP`,label:`Cyprus (CYP) / fossil 2025: 72.2504 % electricity / co2_pc 2023: 6.41228 tonnes/person / n2o_pc 2024: 0.265763 tonnes CO2e/person`,xyz:[72.25043,6.4122796,.26576275]},{code:`CZE`,label:`Czechia (CZE) / fossil 2025: 40.8477 % electricity / co2_pc 2023: 9.25329 tonnes/person / n2o_pc 2024: 0.623275 tonnes CO2e/person`,xyz:[40.847683,9.25329,.62327516]},{code:`DEU`,label:`Germany (DEU) / fossil 2025: 40.9075 % electricity / co2_pc 2023: 9.08926 tonnes/person / n2o_pc 2024: 0.380344 tonnes CO2e/person`,xyz:[40.907547,9.089263,.38034448]},{code:`DNK`,label:`Denmark (DNK) / fossil 2025: 8.82883 % electricity / co2_pc 2023: 8.31713 tonnes/person / n2o_pc 2024: 0.784788 tonnes CO2e/person`,xyz:[8.828829,8.317133,.7847882]},{code:`DOM`,label:`Dominican Republic (DOM) / fossil 2025: 76.1905 % electricity / co2_pc 2023: 3.56874 tonnes/person / n2o_pc 2024: 0.328756 tonnes CO2e/person`,xyz:[76.190475,3.5687382,.32875556]},{code:`ECU`,label:`Ecuador (ECU) / fossil 2025: 20.6011 % electricity / co2_pc 2023: 2.71955 tonnes/person / n2o_pc 2024: 0.244687 tonnes CO2e/person`,xyz:[20.601093,2.7195482,.24468693]},{code:`EGY`,label:`Egypt (EGY) / fossil 2025: 86.9847 % electricity / co2_pc 2023: 2.21265 tonnes/person / n2o_pc 2024: 0.195689 tonnes CO2e/person`,xyz:[86.98465,2.2126539,.19568948]},{code:`ESP`,label:`Spain (ESP) / fossil 2025: 25.3604 % electricity / co2_pc 2023: 5.43951 tonnes/person / n2o_pc 2024: 0.393401 tonnes CO2e/person`,xyz:[25.36038,5.439509,.39340076]},{code:`EST`,label:`Estonia (EST) / fossil 2025: 40.4255 % electricity / co2_pc 2023: 9.20505 tonnes/person / n2o_pc 2024: 1.25189 tonnes CO2e/person`,xyz:[40.425533,9.2050495,1.2518861]},{code:`ETH`,label:`Ethiopia (ETH) / fossil 2025: 0 % electricity / co2_pc 2023: 0.180637 tonnes/person / n2o_pc 2024: 0.39094 tonnes CO2e/person`,xyz:[0,.18063699,.39093983]},{code:`FIN`,label:`Finland (FIN) / fossil 2025: 3.65735 % electricity / co2_pc 2023: 8.47357 tonnes/person / n2o_pc 2024: 1.13448 tonnes CO2e/person`,xyz:[3.657351,8.473571,1.1344804]},{code:`FRA`,label:`France (FRA) / fossil 2025: 5.1493 % electricity / co2_pc 2023: 6.13143 tonnes/person / n2o_pc 2024: 0.489575 tonnes CO2e/person`,xyz:[5.149304,6.1314254,.48957506]},{code:`GBR`,label:`United Kingdom (GBR) / fossil 2025: 35.5821 % electricity / co2_pc 2023: 7.092 tonnes/person / n2o_pc 2024: 0.405882 tonnes CO2e/person`,xyz:[35.58209,7.092003,.40588218]},{code:`GEO`,label:`Georgia (GEO) / fossil 2025: 20.3704 % electricity / co2_pc 2023: 4.03572 tonnes/person / n2o_pc 2024: 0.497573 tonnes CO2e/person`,xyz:[20.37037,4.0357165,.49757266]},{code:`GHA`,label:`Ghana (GHA) / fossil 2024: 63.7824 % electricity / co2_pc 2023: 0.780546 tonnes/person / n2o_pc 2024: 0.196583 tonnes CO2e/person`,xyz:[63.782444,.7805456,.1965826]},{code:`GIN`,label:`Guinea (GIN) / fossil 2024: 24.8139 % electricity / co2_pc 2023: 0.44418 tonnes/person / n2o_pc 2024: 0.526096 tonnes CO2e/person`,xyz:[24.813894,.4441798,.5260961]},{code:`GRC`,label:`Greece (GRC) / fossil 2025: 50.3003 % electricity / co2_pc 2023: 6.55972 tonnes/person / n2o_pc 2024: 0.393898 tonnes CO2e/person`,xyz:[50.300323,6.559717,.3938983]},{code:`GTM`,label:`Guatemala (GTM) / fossil 2024: 31.6656 % electricity / co2_pc 2023: 1.40412 tonnes/person / n2o_pc 2024: 0.273644 tonnes CO2e/person`,xyz:[31.665611,1.4041212,.27364403]},{code:`HKG`,label:`Hong Kong (HKG) / fossil 2024: 98.9583 % electricity / co2_pc 2023: 19.3697 tonnes/person / n2o_pc 2024: 0.0596272 tonnes CO2e/person`,xyz:[98.958336,19.369726,.059627194]},{code:`HND`,label:`Honduras (HND) / fossil 2024: 44.5513 % electricity / co2_pc 2023: 0.982473 tonnes/person / n2o_pc 2024: 0.249162 tonnes CO2e/person`,xyz:[44.551285,.98247296,.24916229]},{code:`HRV`,label:`Croatia (HRV) / fossil 2025: 23.7415 % electricity / co2_pc 2023: 6.086 tonnes/person / n2o_pc 2024: 0.548164 tonnes CO2e/person`,xyz:[23.741497,6.0860047,.548164]},{code:`HUN`,label:`Hungary (HUN) / fossil 2025: 24.6769 % electricity / co2_pc 2023: 5.8564 tonnes/person / n2o_pc 2024: 0.560892 tonnes CO2e/person`,xyz:[24.676939,5.856399,.56089234]},{code:`IDN`,label:`Indonesia (IDN) / fossil 2024: 81.9104 % electricity / co2_pc 2023: 2.58959 tonnes/person / n2o_pc 2024: 0.250391 tonnes CO2e/person`,xyz:[81.91042,2.589589,.25039053]},{code:`IND`,label:`India (IND) / fossil 2025: 73.347 % electricity / co2_pc 2023: 1.76849 tonnes/person / n2o_pc 2024: 0.213658 tonnes CO2e/person`,xyz:[73.34695,1.7684926,.21365821]},{code:`IRL`,label:`Ireland (IRL) / fossil 2025: 51.8578 % electricity / co2_pc 2023: 7.85776 tonnes/person / n2o_pc 2024: 1.64946 tonnes CO2e/person`,xyz:[51.85783,7.8577633,1.6494637]},{code:`IRN`,label:`Iran (IRN) / fossil 2025: 94.2999 % electricity / co2_pc 2023: 7.37876 tonnes/person / n2o_pc 2024: 0.350073 tonnes CO2e/person`,xyz:[94.299866,7.3787613,.35007337]},{code:`ISR`,label:`Israel (ISR) / fossil 2025: 83.0694 % electricity / co2_pc 2023: 9.54158 tonnes/person / n2o_pc 2024: 0.272355 tonnes CO2e/person`,xyz:[83.06943,9.541581,.27235538]},{code:`ITA`,label:`Italy (ITA) / fossil 2025: 51.224 % electricity / co2_pc 2023: 7.21028 tonnes/person / n2o_pc 2024: 0.256446 tonnes CO2e/person`,xyz:[51.224022,7.210283,.25644588]},{code:`JAM`,label:`Jamaica (JAM) / fossil 2024: 87.3984 % electricity / co2_pc 2023: 2.93483 tonnes/person / n2o_pc 2024: 0.125765 tonnes CO2e/person`,xyz:[87.39838,2.9348342,.12576543]},{code:`JOR`,label:`Jordan (JOR) / fossil 2024: 75.9189 % electricity / co2_pc 2023: 2.78135 tonnes/person / n2o_pc 2024: 0.127585 tonnes CO2e/person`,xyz:[75.918884,2.7813537,.12758468]},{code:`JPN`,label:`Japan (JPN) / fossil 2025: 67.2946 % electricity / co2_pc 2023: 9.18462 tonnes/person / n2o_pc 2024: 0.145156 tonnes CO2e/person`,xyz:[67.294586,9.184616,.14515646]},{code:`KAZ`,label:`Kazakhstan (KAZ) / fossil 2025: 85.1403 % electricity / co2_pc 2023: 10.4602 tonnes/person / n2o_pc 2024: 0.581143 tonnes CO2e/person`,xyz:[85.14027,10.460201,.5811426]},{code:`KEN`,label:`Kenya (KEN) / fossil 2025: 9.97151 % electricity / co2_pc 2023: 0.632105 tonnes/person / n2o_pc 2024: 0.363377 tonnes CO2e/person`,xyz:[9.97151,.63210475,.3633766]},{code:`KGZ`,label:`Kyrgyzstan (KGZ) / fossil 2025: 15.2725 % electricity / co2_pc 2023: 2.7134 tonnes/person / n2o_pc 2024: 0.265778 tonnes CO2e/person`,xyz:[15.272497,2.7133956,.26577798]},{code:`KHM`,label:`Cambodia (KHM) / fossil 2025: 59.1216 % electricity / co2_pc 2023: 2.24199 tonnes/person / n2o_pc 2024: 0.258668 tonnes CO2e/person`,xyz:[59.12162,2.241986,.25866786]},{code:`KOR`,label:`South Korea (KOR) / fossil 2025: 60.0423 % electricity / co2_pc 2023: 13.6982 tonnes/person / n2o_pc 2024: 0.264682 tonnes CO2e/person`,xyz:[60.042267,13.698197,.26468247]},{code:`KWT`,label:`Kuwait (KWT) / fossil 2025: 97.7619 % electricity / co2_pc 2023: 25.2844 tonnes/person / n2o_pc 2024: 0.248284 tonnes CO2e/person`,xyz:[97.76192,25.2844,.24828401]},{code:`LAO`,label:`Laos (LAO) / fossil 2024: 23.2843 % electricity / co2_pc 2023: 1.9341 tonnes/person / n2o_pc 2024: 0.453237 tonnes CO2e/person`,xyz:[23.284267,1.9341022,.4532371]},{code:`LKA`,label:`Sri Lanka (LKA) / fossil 2025: 38.3768 % electricity / co2_pc 2023: 2.02159 tonnes/person / n2o_pc 2024: 0.0883918 tonnes CO2e/person`,xyz:[38.376812,2.021593,.08839181]},{code:`LTU`,label:`Lithuania (LTU) / fossil 2025: 22.3847 % electricity / co2_pc 2023: 7.18866 tonnes/person / n2o_pc 2024: 1.74639 tonnes CO2e/person`,xyz:[22.3847,7.188658,1.7463874]},{code:`LUX`,label:`Luxembourg (LUX) / fossil 2025: 8.44156 % electricity / co2_pc 2023: 11.0239 tonnes/person / n2o_pc 2024: 0.363234 tonnes CO2e/person`,xyz:[8.441558,11.023863,.36323404]},{code:`LVA`,label:`Latvia (LVA) / fossil 2025: 26.9537 % electricity / co2_pc 2023: 7.09831 tonnes/person / n2o_pc 2024: 1.16743 tonnes CO2e/person`,xyz:[26.953749,7.098309,1.1674343]},{code:`MAR`,label:`Morocco (MAR) / fossil 2025: 76.0449 % electricity / co2_pc 2023: 1.85385 tonnes/person / n2o_pc 2024: 0.227596 tonnes CO2e/person`,xyz:[76.044945,1.8538543,.22759555]},{code:`MDG`,label:`Madagascar (MDG) / fossil 2024: 57.6132 % electricity / co2_pc 2023: 0.205774 tonnes/person / n2o_pc 2024: 0.220015 tonnes CO2e/person`,xyz:[57.613167,.20577449,.22001484]},{code:`MEX`,label:`Mexico (MEX) / fossil 2025: 74.0623 % electricity / co2_pc 2023: 4.35463 tonnes/person / n2o_pc 2024: 0.302213 tonnes CO2e/person`,xyz:[74.06225,4.3546333,.3022128]},{code:`MLT`,label:`Malta (MLT) / fossil 2025: 84.0183 % electricity / co2_pc 2023: 26.8243 tonnes/person / n2o_pc 2024: 0.0813559 tonnes CO2e/person`,xyz:[84.018265,26.824337,.081355944]},{code:`MNG`,label:`Mongolia (MNG) / fossil 2025: 91.6409 % electricity / co2_pc 2023: 10.6659 tonnes/person / n2o_pc 2024: 4.26 tonnes CO2e/person`,xyz:[91.64087,10.665892,4.2600036]},{code:`MOZ`,label:`Mozambique (MOZ) / fossil 2024: 16.574 % electricity / co2_pc 2023: 0.428957 tonnes/person / n2o_pc 2024: 0.367139 tonnes CO2e/person`,xyz:[16.574026,.42895666,.3671388]},{code:`MUS`,label:`Mauritius (MUS) / fossil 2024: 82.1114 % electricity / co2_pc 2023: 6.21334 tonnes/person / n2o_pc 2024: 0.146327 tonnes CO2e/person`,xyz:[82.111435,6.2133427,.1463275]},{code:`MWI`,label:`Malawi (MWI) / fossil 2024: 4.37158 % electricity / co2_pc 2023: 0.153185 tonnes/person / n2o_pc 2024: 0.257319 tonnes CO2e/person`,xyz:[4.3715844,.15318492,.25731945]},{code:`MYS`,label:`Malaysia (MYS) / fossil 2025: 79.3476 % electricity / co2_pc 2023: 8.15652 tonnes/person / n2o_pc 2024: 0.24935 tonnes CO2e/person`,xyz:[79.34756,8.156515,.24935032]},{code:`NAM`,label:`Namibia (NAM) / fossil 2024: 2.43902 % electricity / co2_pc 2023: 3.25521 tonnes/person / n2o_pc 2024: 1.10368 tonnes CO2e/person`,xyz:[2.4390244,3.2552075,1.103679]},{code:`NGA`,label:`Nigeria (NGA) / fossil 2025: 68.6808 % electricity / co2_pc 2023: 0.584879 tonnes/person / n2o_pc 2024: 0.180321 tonnes CO2e/person`,xyz:[68.680786,.584879,.18032083]},{code:`NIC`,label:`Nicaragua (NIC) / fossil 2024: 37.6106 % electricity / co2_pc 2023: 1.05123 tonnes/person / n2o_pc 2024: 0.494608 tonnes CO2e/person`,xyz:[37.610622,1.0512289,.49460834]},{code:`NLD`,label:`Netherlands (NLD) / fossil 2025: 45.8432 % electricity / co2_pc 2023: 8.29891 tonnes/person / n2o_pc 2024: 0.492413 tonnes CO2e/person`,xyz:[45.84321,8.298915,.49241254]},{code:`NOR`,label:`Norway (NOR) / fossil 2025: 1.00118 % electricity / co2_pc 2023: 7.06083 tonnes/person / n2o_pc 2024: 0.749033 tonnes CO2e/person`,xyz:[1.0011815,7.0608263,.74903315]},{code:`NPL`,label:`Nepal (NPL) / fossil 2024: 0 % electricity / co2_pc 2023: 1.59218 tonnes/person / n2o_pc 2024: 0.235328 tonnes CO2e/person`,xyz:[0,1.5921838,.2353284]},{code:`NZL`,label:`New Zealand (NZL) / fossil 2025: 11.4675 % electricity / co2_pc 2023: 8.00255 tonnes/person / n2o_pc 2024: 2.5417 tonnes CO2e/person`,xyz:[11.467466,8.002548,2.5417027]},{code:`OMN`,label:`Oman (OMN) / fossil 2025: 95.458 % electricity / co2_pc 2023: 16.5093 tonnes/person / n2o_pc 2024: 0.268314 tonnes CO2e/person`,xyz:[95.457985,16.509298,.2683139]},{code:`PAK`,label:`Pakistan (PAK) / fossil 2025: 45.0956 % electricity / co2_pc 2023: 0.889301 tonnes/person / n2o_pc 2024: 0.284287 tonnes CO2e/person`,xyz:[45.095627,.88930076,.28428692]},{code:`PAN`,label:`Panama (PAN) / fossil 2024: 32.0179 % electricity / co2_pc 2023: 4.37725 tonnes/person / n2o_pc 2024: 0.286163 tonnes CO2e/person`,xyz:[32.01787,4.3772473,.28616285]},{code:`PER`,label:`Peru (PER) / fossil 2025: 36.3501 % electricity / co2_pc 2023: 2.33071 tonnes/person / n2o_pc 2024: 0.278302 tonnes CO2e/person`,xyz:[36.350098,2.330705,.27830213]},{code:`PHL`,label:`Philippines (PHL) / fossil 2025: 76.6894 % electricity / co2_pc 2023: 1.84168 tonnes/person / n2o_pc 2024: 0.158874 tonnes CO2e/person`,xyz:[76.68941,1.8416777,.15887393]},{code:`POL`,label:`Poland (POL) / fossil 2025: 68.4924 % electricity / co2_pc 2023: 7.0649 tonnes/person / n2o_pc 2024: 0.698673 tonnes CO2e/person`,xyz:[68.49244,7.064904,.6986726]},{code:`PRT`,label:`Portugal (PRT) / fossil 2025: 19.0495 % electricity / co2_pc 2023: 4.55 tonnes/person / n2o_pc 2024: 0.267535 tonnes CO2e/person`,xyz:[19.04948,4.5500045,.2675346]},{code:`PRY`,label:`Paraguay (PRY) / fossil 2025: 0 % electricity / co2_pc 2023: 1.91769 tonnes/person / n2o_pc 2024: 1.23647 tonnes CO2e/person`,xyz:[0,1.9176887,1.2364748]},{code:`QAT`,label:`Qatar (QAT) / fossil 2025: 95.9416 % electricity / co2_pc 2023: 27.6018 tonnes/person / n2o_pc 2024: 0.299968 tonnes CO2e/person`,xyz:[95.94162,27.601795,.2999684]},{code:`ROU`,label:`Romania (ROU) / fossil 2025: 32.4834 % electricity / co2_pc 2023: 4.09297 tonnes/person / n2o_pc 2024: 0.535737 tonnes CO2e/person`,xyz:[32.483437,4.092971,.5357371]},{code:`RUS`,label:`Russia (RUS) / fossil 2025: 64.3164 % electricity / co2_pc 2023: 9.66706 tonnes/person / n2o_pc 2024: 0.588604 tonnes CO2e/person`,xyz:[64.31643,9.667057,.5886041]},{code:`RWA`,label:`Rwanda (RWA) / fossil 2024: 50.4425 % electricity / co2_pc 2023: 0.25205 tonnes/person / n2o_pc 2024: 0.112941 tonnes CO2e/person`,xyz:[50.44248,.25205046,.11294135]},{code:`SAU`,label:`Saudi Arabia (SAU) / fossil 2024: 97.8401 % electricity / co2_pc 2023: 19.6639 tonnes/person / n2o_pc 2024: 0.384434 tonnes CO2e/person`,xyz:[97.84005,19.663857,.38443416]},{code:`SEN`,label:`Senegal (SEN) / fossil 2024: 80.2097 % electricity / co2_pc 2023: 1.05283 tonnes/person / n2o_pc 2024: 0.330597 tonnes CO2e/person`,xyz:[80.209694,1.0528344,.3305969]},{code:`SGP`,label:`Singapore (SGP) / fossil 2025: 94.5137 % electricity / co2_pc 2023: 32.2893 tonnes/person / n2o_pc 2024: 0.229309 tonnes CO2e/person`,xyz:[94.51371,32.289295,.22930878]},{code:`SLV`,label:`El Salvador (SLV) / fossil 2025: 13.4675 % electricity / co2_pc 2023: 1.78383 tonnes/person / n2o_pc 2024: 0.145426 tonnes CO2e/person`,xyz:[13.467492,1.7838347,.1454257]},{code:`SVK`,label:`Slovakia (SVK) / fossil 2025: 14.8454 % electricity / co2_pc 2023: 6.34915 tonnes/person / n2o_pc 2024: 0.59412 tonnes CO2e/person`,xyz:[14.845361,6.349146,.59412026]},{code:`SVN`,label:`Slovenia (SVN) / fossil 2025: 21.0916 % electricity / co2_pc 2023: 9.31617 tonnes/person / n2o_pc 2024: 0.354616 tonnes CO2e/person`,xyz:[21.091644,9.316166,.35461557]},{code:`SWE`,label:`Sweden (SWE) / fossil 2025: 1.21844 % electricity / co2_pc 2023: 5.84956 tonnes/person / n2o_pc 2024: 0.571885 tonnes CO2e/person`,xyz:[1.2184405,5.8495603,.57188517]},{code:`TGO`,label:`Togo (TGO) / fossil 2024: 70.4225 % electricity / co2_pc 2023: 1.05149 tonnes/person / n2o_pc 2024: 0.286126 tonnes CO2e/person`,xyz:[70.42254,1.0514942,.2861256]},{code:`THA`,label:`Thailand (THA) / fossil 2025: 83.4254 % electricity / co2_pc 2023: 4.2616 tonnes/person / n2o_pc 2024: 0.279897 tonnes CO2e/person`,xyz:[83.42541,4.2616014,.27989677]},{code:`TJK`,label:`Tajikistan (TJK) / fossil 2025: 5.63437 % electricity / co2_pc 2023: 1.25323 tonnes/person / n2o_pc 2024: 0.244407 tonnes CO2e/person`,xyz:[5.6343737,1.2532278,.24440701]},{code:`TTO`,label:`Trinidad and Tobago (TTO) / fossil 2024: 99.8953 % electricity / co2_pc 2023: 14.8722 tonnes/person / n2o_pc 2024: 0.882655 tonnes CO2e/person`,xyz:[99.89529,14.87219,.8826546]},{code:`TUN`,label:`Tunisia (TUN) / fossil 2025: 95.9659 % electricity / co2_pc 2023: 2.47359 tonnes/person / n2o_pc 2024: 0.272142 tonnes CO2e/person`,xyz:[95.965935,2.473592,.2721421]},{code:`TUR`,label:`Turkey (TUR) / fossil 2025: 56.7428 % electricity / co2_pc 2023: 5.53487 tonnes/person / n2o_pc 2024: 0.459212 tonnes CO2e/person`,xyz:[56.74278,5.534867,.45921156]},{code:`TWN`,label:`Taiwan (TWN) / fossil 2025: 86.6327 % electricity / co2_pc 2023: 12.6431 tonnes/person / n2o_pc 2024: 0.246698 tonnes CO2e/person`,xyz:[86.63268,12.643134,.24669845]},{code:`TZA`,label:`Tanzania (TZA) / fossil 2024: 67.0814 % electricity / co2_pc 2023: 0.387098 tonnes/person / n2o_pc 2024: 0.381852 tonnes CO2e/person`,xyz:[67.08144,.3870976,.38185158]},{code:`UGA`,label:`Uganda (UGA) / fossil 2024: 2.92599 % electricity / co2_pc 2023: 0.180893 tonnes/person / n2o_pc 2024: 0.249058 tonnes CO2e/person`,xyz:[2.9259896,.18089284,.24905837]},{code:`UKR`,label:`Ukraine (UKR) / fossil 2022: 27.8271 % electricity / co2_pc 2023: 4.40745 tonnes/person / n2o_pc 2024: 0.535299 tonnes CO2e/person`,xyz:[27.8271,4.4074507,.535299]},{code:`URY`,label:`Uruguay (URY) / fossil 2025: 2.17755 % electricity / co2_pc 2023: 3.18227 tonnes/person / n2o_pc 2024: 2.23404 tonnes CO2e/person`,xyz:[2.1775544,3.1822698,2.234042]},{code:`USA`,label:`United States (USA) / fossil 2025: 56.9984 % electricity / co2_pc 2023: 15.8137 tonnes/person / n2o_pc 2024: 0.693632 tonnes CO2e/person`,xyz:[56.998444,15.813734,.6936321]},{code:`VEN`,label:`Venezuela (VEN) / fossil 2024: 8.8606 % electricity / co2_pc 2023: 3.55168 tonnes/person / n2o_pc 2024: 0.391171 tonnes CO2e/person`,xyz:[8.860601,3.551677,.39117113]},{code:`VNM`,label:`Vietnam (VNM) / fossil 2025: 54.5824 % electricity / co2_pc 2023: 2.46918 tonnes/person / n2o_pc 2024: 0.300137 tonnes CO2e/person`,xyz:[54.582405,2.469179,.3001372]},{code:`ZAF`,label:`South Africa (ZAF) / fossil 2025: 82.1593 % electricity / co2_pc 2023: 5.14743 tonnes/person / n2o_pc 2024: 0.317064 tonnes CO2e/person`,xyz:[82.15933,5.1474295,.31706414]},{code:`ZMB`,label:`Zambia (ZMB) / fossil 2024: 12.5254 % electricity / co2_pc 2023: 0.613067 tonnes/person / n2o_pc 2024: 0.667752 tonnes CO2e/person`,xyz:[12.525355,.61306703,.6677521]},{code:`ZWE`,label:`Zimbabwe (ZWE) / fossil 2024: 42.885 % electricity / co2_pc 2023: 0.9375 tonnes/person / n2o_pc 2024: 0.317632 tonnes CO2e/person`,xyz:[42.88499,.93750024,.31763232]}]},Hc={datasets:[{id:`cc56796f9ee91266a502`,title:`01_forest_cover/processed.csv`,section:`01`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Share of land covered by forest`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:215,columns:[`iso`,`value`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/01_forest_cover/processed.csv`,sha256:`7091b9796d3eb517ee1a66cda94990d16378609b0569b26256adb90d48f50b05`}],url:`/atlas-data/cc56796f9ee91266a502.json`,defaultMode:`linear`},{id:`865d6d78398f50ff9621`,title:`01_forest_cover/source.csv`,section:`01`,role:`history`,kind:`history`,axes:[`Year`,`Share of land covered by forest`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:8078,columns:[`Entity`,`Code`,`Year`,`Share of land covered by forest`,`Share of land covered by forest (Annotations)`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/01_forest_cover/source.csv`,sha256:`e3fc91593bf3909357cdeac505b680483df08e45a63e6787d38f7578c74a9906`}],url:`/atlas-data/865d6d78398f50ff9621.json`,defaultMode:`linear`},{id:`68d8e3018500173f07ee`,title:`02_renewable_freshwater_resources/processed.csv`,section:`01`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Renewable internal freshwater resources per capita (cubic meters)`],boundaries:[`freshwater-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:181,columns:[`iso`,`value`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/02_renewable_freshwater_resources/processed.csv`,sha256:`261437de9adb1726ae2baddbeb4f427a61f17cd3848b6df2ec84ef34affbbf9b`}],url:`/atlas-data/68d8e3018500173f07ee.json`,defaultMode:`linear`},{id:`0ba1259449ea36756d02`,title:`02_renewable_freshwater_resources/source.csv`,section:`01`,role:`history`,kind:`history`,axes:[`Year`,`Renewable internal freshwater resources per capita (cubic meters)`],boundaries:[`freshwater-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:11213,columns:[`Entity`,`Code`,`Year`,`Renewable internal freshwater resources per capita (cubic meters)`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/02_renewable_freshwater_resources/source.csv`,sha256:`5b688a83691250907433624c04cea8d976941aff4fa7561244653b12a5e23bee`}],url:`/atlas-data/0ba1259449ea36756d02.json`,defaultMode:`linear`},{id:`f4513000751f00b12a90`,title:`03_red_list_index/processed.csv`,section:`01`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Red List Index`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:247,columns:[`iso`,`value`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/03_red_list_index/processed.csv`,sha256:`6c37209b76e4cda260d19c88d4667a60426af8de82ee7ee5903f1cdb5aff788e`}],url:`/atlas-data/f4513000751f00b12a90.json`,defaultMode:`linear`},{id:`7d79605a10f8d91522b9`,title:`03_red_list_index/source.csv`,section:`01`,role:`history`,kind:`history`,axes:[`Year`,`Red List Index`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:12013,columns:[`Entity`,`Code`,`Year`,`Red List Index`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/03_red_list_index/source.csv`,sha256:`55c582fb6775ca0062f0baccae884a706733a115988f3d3ef708e4c543fee52d`}],url:`/atlas-data/7d79605a10f8d91522b9.json`,defaultMode:`linear`},{id:`dfa8e5dceddea9cb6ceb`,title:`raw_xyz.csv`,section:`01`,role:`analysis`,kind:`xyz`,axes:[`forest cover (%)`,`freshwater (m3/person/year)`,`Red List Index`],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:183,columns:[`x`,`y`,`z`,`label`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/raw_xyz.csv`,sha256:`00c69aaf4267b8cac930a82137128edd1664c4a702ed7317b319ca68ef74ff2c`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/raw_xyz.csv`,sha256:`00c69aaf4267b8cac930a82137128edd1664c4a702ed7317b319ca68ef74ff2c`}],url:`/atlas-data/dfa8e5dceddea9cb6ceb.json`,defaultMode:`linear`},{id:`672f9f8cb1ec4016f4ca`,title:`stat_01_distribution.csv`,section:`01`,role:`statistics`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:15,columns:[`stat`,`indicator`,`x`,`y`,`label`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_01_distribution.csv`,sha256:`d90408a936d5209bb3c906ea8dc13b5e647dd37ecf8394eb96a5a05107042d29`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_01_distribution.csv`,sha256:`d90408a936d5209bb3c906ea8dc13b5e647dd37ecf8394eb96a5a05107042d29`}],url:`/atlas-data/672f9f8cb1ec4016f4ca.json`,defaultMode:`linear`},{id:`4c882a273a43d5225ad5`,title:`stat_02_rank_extremes.csv`,section:`01`,role:`statistics`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:60,columns:[`x`,`y`,`label`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_02_rank_extremes.csv`,sha256:`a43670704b153445dbeb8143d7ff640f7589c68a92611ec56ff2fb4a5ec95ca2`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_02_rank_extremes.csv`,sha256:`a43670704b153445dbeb8143d7ff640f7589c68a92611ec56ff2fb4a5ec95ca2`}],url:`/atlas-data/4c882a273a43d5225ad5.json`,defaultMode:`linear`},{id:`5f1104bfb26c827636c2`,title:`stat_03_association.csv`,section:`01`,role:`statistics`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:3,columns:[`x`,`y`,`label`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_03_association.csv`,sha256:`0861c81ec33e30eab36f30a5e4e867e0a843a7b3d053e70abe1a419ad5f73061`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_03_association.csv`,sha256:`0861c81ec33e30eab36f30a5e4e867e0a843a7b3d053e70abe1a419ad5f73061`}],url:`/atlas-data/5f1104bfb26c827636c2.json`,defaultMode:`linear`},{id:`978ce0d655f4459460ac`,title:`stat_04_synthesis.csv`,section:`01`,role:`statistics`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:8,columns:[`x`,`y`,`label`],sources:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_04_synthesis.csv`,sha256:`4155bbc642b891eceef80be42e5f93eb6a5bab738a4f1067dce2ffae5eaf2fde`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_04_synthesis.csv`,sha256:`4155bbc642b891eceef80be42e5f93eb6a5bab738a4f1067dce2ffae5eaf2fde`}],url:`/atlas-data/978ce0d655f4459460ac.json`,defaultMode:`linear`},{id:`2d2ef41680fd4b08eb18`,title:`04_agricultural_land_share/processed.csv`,section:`02`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Agricultural land (% of land area)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:209,columns:[`iso`,`value`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/04_agricultural_land_share/processed.csv`,sha256:`1b64df84cecd17dd206b2fd2c3a2eeb8361559f92b19c33f8b3a6390427fb554`}],url:`/atlas-data/2d2ef41680fd4b08eb18.json`,defaultMode:`linear`},{id:`e61977da5a5185db9722`,title:`04_agricultural_land_share/source.csv`,section:`02`,role:`history`,kind:`history`,axes:[`Year`,`Agricultural land (% of land area)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:12940,columns:[`Entity`,`Code`,`Year`,`Agricultural land (% of land area)`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/04_agricultural_land_share/source.csv`,sha256:`04390e1a03d4234257900f29994bde1fd996d359ef1952df3bf2bc777964af20`}],url:`/atlas-data/e61977da5a5185db9722.json`,defaultMode:`linear`},{id:`0af63e14f7b5d6a0b77c`,title:`05_arable_land_share/processed.csv`,section:`02`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Arable land (% of land area)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:206,columns:[`iso`,`value`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/05_arable_land_share/processed.csv`,sha256:`29a897365bb97d575c44bf4347d3a6016634def1b06b96f3ae2cd80ef7b0827d`}],url:`/atlas-data/0af63e14f7b5d6a0b77c.json`,defaultMode:`linear`},{id:`b12f88612680c9cd218d`,title:`05_arable_land_share/source.csv`,section:`02`,role:`history`,kind:`history`,axes:[`Year`,`Arable land (% of land area)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:12690,columns:[`Entity`,`Code`,`Year`,`Arable land (% of land area)`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/05_arable_land_share/source.csv`,sha256:`465c0ac27a138465f3630a800ee8b84e71992b141e5dc30872e51f18cf6d2e23`}],url:`/atlas-data/b12f88612680c9cd218d.json`,defaultMode:`linear`},{id:`4779653708333348e823`,title:`06_cereal_yield/processed.csv`,section:`02`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Cereals - Yield (tonnes per hectare)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:177,columns:[`iso`,`value`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/06_cereal_yield/processed.csv`,sha256:`da9a09b630860e52f8d254cafdd3c92a4be1f759c2bcf62c2bb4479b35c0c838`}],url:`/atlas-data/4779653708333348e823.json`,defaultMode:`linear`},{id:`f7fe4072213e515e83e0`,title:`06_cereal_yield/source.csv`,section:`02`,role:`history`,kind:`history`,axes:[`Year`,`Cereals - Yield (tonnes per hectare)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:13488,columns:[`Entity`,`Code`,`Year`,`Cereals - Yield (tonnes per hectare)`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/06_cereal_yield/source.csv`,sha256:`52c445126fe3454891bf6199d94640629f3374f45bbf47f85d6f5e19209aedda`}],url:`/atlas-data/f7fe4072213e515e83e0.json`,defaultMode:`linear`},{id:`e131f8e0cdb9944e85ea`,title:`07_forest_area_change_rate/processed.csv`,section:`02`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Annual change in forest area as share of forest area`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:228,columns:[`iso`,`value`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/07_forest_area_change_rate/processed.csv`,sha256:`8acd665e8294d9c6a0b2e64df326c2319343d57e19f0897401a59e5b9439abcf`}],url:`/atlas-data/e131f8e0cdb9944e85ea.json`,defaultMode:`linear`},{id:`b3be43a24c8d343a8778`,title:`07_forest_area_change_rate/source.csv`,section:`02`,role:`history`,kind:`history`,axes:[`Year`,`Annual change in forest area as share of forest area`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:8435,columns:[`Entity`,`Code`,`Year`,`Annual change in forest area as share of forest area`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/07_forest_area_change_rate/source.csv`,sha256:`30b9f992edf42e1b2078cb7245c254b387c10c43aa7c5d57ad39bf9f1dd831b4`}],url:`/atlas-data/b3be43a24c8d343a8778.json`,defaultMode:`linear`},{id:`08e23869f8da2e3e0258`,title:`projection_xy_agri_yield.csv`,section:`02`,role:`analysis`,kind:`xy`,axes:[`agricultural land (%)`,`cereal yield (t/ha)`],boundaries:[`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:180,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_xy_agri_yield.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_02_xy_land_occupation_productivity.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_02_xy_land_occupation_productivity.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`}],url:`/atlas-data/08e23869f8da2e3e0258.json`,defaultMode:`linear`},{id:`b40aafe947033b712a2d`,title:`projection_xz_agri_forest_change.csv`,section:`02`,role:`analysis`,kind:`xy`,axes:[`agricultural land (%)`,`forest change (%)`],boundaries:[`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:180,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_xz_agri_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_03_xy_land_occupation_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_03_xy_land_occupation_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`}],url:`/atlas-data/b40aafe947033b712a2d.json`,defaultMode:`linear`},{id:`c888509d56b033a7395c`,title:`projection_yz_yield_forest_change.csv`,section:`02`,role:`analysis`,kind:`xy`,axes:[`cereal yield (t/ha)`,`forest change (%)`],boundaries:[`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:180,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_yz_yield_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_04_xy_productivity_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_04_xy_productivity_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`}],url:`/atlas-data/c888509d56b033a7395c.json`,defaultMode:`linear`},{id:`507312544760135b44da`,title:`raw_xy_land_structure.csv`,section:`02`,role:`analysis`,kind:`xy`,axes:[`agricultural land (%)`,`arable land (%)`],boundaries:[`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:180,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/raw_xy_land_structure.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_01_xy_land_occupation_cultivation.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_01_xy_land_occupation_cultivation.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`}],url:`/atlas-data/507312544760135b44da.json`,defaultMode:`linear`},{id:`93ec15e3b0d287df6761`,title:`raw_xyz_land_production_forest.csv`,section:`02`,role:`analysis`,kind:`xyz`,axes:[`agricultural land (%)`,`cereal yield (t/ha)`,`forest change (%)`],boundaries:[`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:180,columns:[`x`,`y`,`z`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/raw_xyz_land_production_forest.csv`,sha256:`e2c958c22154ec1682ceaa54eb4bc36b36ac09e7a0dc242410bef36475d141f9`}],url:`/atlas-data/93ec15e3b0d287df6761.json`,defaultMode:`linear`},{id:`0cedfaa18f63bc38a678`,title:`stat_01_distribution.csv`,section:`02`,role:`statistics`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:20,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_01_distribution.csv`,sha256:`6ae57425dbb07515f31b86a27c466a4726136d3111faa838a880af7ca0d7b0e5`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_01_distribution.csv`,sha256:`6ae57425dbb07515f31b86a27c466a4726136d3111faa838a880af7ca0d7b0e5`}],url:`/atlas-data/0cedfaa18f63bc38a678.json`,defaultMode:`linear`},{id:`94cdcfa48ce79f6650c3`,title:`stat_02_association.csv`,section:`02`,role:`statistics`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:6,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_02_association.csv`,sha256:`68395d7031804750a1711ffc0a19be51a48ab3e3816f0886390443636cd8011e`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_02_association.csv`,sha256:`68395d7031804750a1711ffc0a19be51a48ab3e3816f0886390443636cd8011e`}],url:`/atlas-data/94cdcfa48ce79f6650c3.json`,defaultMode:`linear`},{id:`3c845d5799da2c56f1b0`,title:`stat_03_forest_change_direction.csv`,section:`02`,role:`statistics`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:3,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_03_forest_change_direction.csv`,sha256:`3ebdc4ef05c7f24b2a6dd0aaca3d5931b8cd9d9f3729938c8d5860f1e6ee8ad2`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_03_forest_change_direction.csv`,sha256:`3ebdc4ef05c7f24b2a6dd0aaca3d5931b8cd9d9f3729938c8d5860f1e6ee8ad2`}],url:`/atlas-data/3c845d5799da2c56f1b0.json`,defaultMode:`linear`},{id:`83006f5a80eecedc1237`,title:`stat_04_rank_extremes.csv`,section:`02`,role:`statistics`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:40,columns:[`x`,`y`,`label`],sources:[{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_04_rank_extremes.csv`,sha256:`4cc782324a9d2b91de26dfe89ea15169b6c6c55247b54a687f968da0b7256a5e`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_04_rank_extremes.csv`,sha256:`4cc782324a9d2b91de26dfe89ea15169b6c6c55247b54a687f968da0b7256a5e`}],url:`/atlas-data/83006f5a80eecedc1237.json`,defaultMode:`linear`},{id:`e778d5da416900bcc341`,title:`08_freshwater_withdrawal_pressure/processed.csv`,section:`03`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Level of water stress: freshwater withdrawal as a proportion of available freshwater resources (%) - No breakdown`],boundaries:[`freshwater-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:182,columns:[`iso`,`value`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/08_freshwater_withdrawal_pressure/processed.csv`,sha256:`e04a68aa8b3605ce21ca823ae026b202eff23802b7bb56011beecaa5b4f35d8e`}],url:`/atlas-data/e778d5da416900bcc341.json`,defaultMode:`linear`},{id:`ecb4c2fb93691e640781`,title:`08_freshwater_withdrawal_pressure/source.csv`,section:`03`,role:`history`,kind:`history`,axes:[`Year`,`Level of water stress: freshwater withdrawal as a proportion of available freshwater resources (%) - No breakdown`],boundaries:[`freshwater-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:4583,columns:[`Entity`,`Code`,`Year`,`Level of water stress: freshwater withdrawal as a proportion of available freshwater resources (%) - No breakdown`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/08_freshwater_withdrawal_pressure/source.csv`,sha256:`7e53ede8500f3ce06c98deae67d030e6581bfd34151db238e5504995196248a8`}],url:`/atlas-data/ecb4c2fb93691e640781.json`,defaultMode:`linear`},{id:`f5ac1c5aa8f781ea6b84`,title:`09_nitrogen_fertilizer/processed.csv`,section:`03`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Use of nutrient nitrogen per area of cropland`],boundaries:[`biogeochemical-flows`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:198,columns:[`iso`,`value`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/09_nitrogen_fertilizer/processed.csv`,sha256:`49facc80db0e4146f9a3d2bbe264da3dd858fc871fe7cf34bb5778323c5b5dc1`}],url:`/atlas-data/f5ac1c5aa8f781ea6b84.json`,defaultMode:`linear`},{id:`fde7978fcae145c08638`,title:`09_nitrogen_fertilizer/source.csv`,section:`03`,role:`history`,kind:`history`,axes:[`Year`,`Use of nutrient nitrogen per area of cropland`],boundaries:[`biogeochemical-flows`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:12568,columns:[`Entity`,`Code`,`Year`,`Use of nutrient nitrogen per area of cropland`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/09_nitrogen_fertilizer/source.csv`,sha256:`a45dcb40bb0e4a014d5eafcfe36aadf11854a3c47a95225d3739f4498e0feb61`}],url:`/atlas-data/fde7978fcae145c08638.json`,defaultMode:`linear`},{id:`068fd5a51cdcecab7225`,title:`10_phosphate_fertilizer/processed.csv`,section:`03`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Use of nutrient phosphate per area of cropland`],boundaries:[`biogeochemical-flows`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:197,columns:[`iso`,`value`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/10_phosphate_fertilizer/processed.csv`,sha256:`5fde646afd233c578571c880f4858b68baddb0294cf01e8ebc9c0aadaafd9d15`}],url:`/atlas-data/068fd5a51cdcecab7225.json`,defaultMode:`linear`},{id:`e82f7868c826ef122579`,title:`10_phosphate_fertilizer/source.csv`,section:`03`,role:`history`,kind:`history`,axes:[`Year`,`Use of nutrient phosphate per area of cropland`],boundaries:[`biogeochemical-flows`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:12280,columns:[`Entity`,`Code`,`Year`,`Use of nutrient phosphate per area of cropland`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/10_phosphate_fertilizer/source.csv`,sha256:`b85b8fbd065982a0fc826bdca62cdfc8d86fe8ba12297957a997b0e55f1fc22a`}],url:`/atlas-data/e82f7868c826ef122579.json`,defaultMode:`linear`},{id:`ad8681dacfb65f4e766a`,title:`11_pesticide_use_per_hectare/processed.csv`,section:`03`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Use of pesticides per area of cropland`],boundaries:[`novel-entities`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:197,columns:[`iso`,`value`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/11_pesticide_use_per_hectare/processed.csv`,sha256:`deab88e73e501006e9ff244b7ee2a6eaa23a895ed38edc41c1b0160a9c9e21d1`}],url:`/atlas-data/ad8681dacfb65f4e766a.json`,defaultMode:`linear`},{id:`85702edec1b710e9b0b6`,title:`11_pesticide_use_per_hectare/source.csv`,section:`03`,role:`history`,kind:`history`,axes:[`Year`,`Use of pesticides per area of cropland`],boundaries:[`novel-entities`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:7804,columns:[`Entity`,`Code`,`Year`,`Use of pesticides per area of cropland`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/11_pesticide_use_per_hectare/source.csv`,sha256:`00aa68f2977de03f61f30cd7f8657ff808d0af72f8e24ee43d33d8d5fad183a7`}],url:`/atlas-data/85702edec1b710e9b0b6.json`,defaultMode:`linear`},{id:`f36a10df982cfe8f7c61`,title:`12_domestic_material_consumption/processed.csv`,section:`03`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Domestic material consumption per capita, by type of raw material (tonnes) - Total or no breakdown`],boundaries:[`freshwater-change`,`novel-entities`],mappingReason:`Context only: material consumption is co-analysed with water and pesticides in section03. Not a direct PB measure.`,rowCount:226,columns:[`iso`,`value`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/12_domestic_material_consumption/processed.csv`,sha256:`3768de351d7b12fd8d73c4fa3b7f91b5cf186963cbb672d508812254acb723d8`}],url:`/atlas-data/f36a10df982cfe8f7c61.json`,defaultMode:`linear`},{id:`b15192540276e0f94e9f`,title:`12_domestic_material_consumption/source.csv`,section:`03`,role:`history`,kind:`history`,axes:[`Year`,`Domestic material consumption per capita, by type of raw material (tonnes) - Total or no breakdown`],boundaries:[`freshwater-change`,`novel-entities`],mappingReason:`Context only: material consumption is co-analysed with water and pesticides in section03. Not a direct PB measure.`,rowCount:6167,columns:[`Entity`,`Code`,`Year`,`Domestic material consumption per capita, by type of raw material (tonnes) - Total or no breakdown`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/12_domestic_material_consumption/source.csv`,sha256:`9b03569e2d23b1f98c826fdc2b78ba7b3a7bdd907ab7ef18d7b6af68ab457f50`}],url:`/atlas-data/b15192540276e0f94e9f.json`,defaultMode:`linear`},{id:`3fb696dded750ba908fd`,title:`section03_main_01_xy_extraction_material_use.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`water stress (%)`,`material consumption (tonnes/person)`],boundaries:[`freshwater-change`,`novel-entities`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_01_xy_extraction_material_use.csv`,sha256:`1a65afff9a0373ee6fa66f80465fc58a1d008579cc3ef7ad8af771bdce5845e0`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_01_xy_extraction_material_use.csv`,sha256:`1a65afff9a0373ee6fa66f80465fc58a1d008579cc3ef7ad8af771bdce5845e0`}],url:`/atlas-data/3fb696dded750ba908fd.json`,defaultMode:`linear`},{id:`6adee430170bd77152a0`,title:`section03_main_02_xyz_nutrient_chemical_input.csv`,section:`03`,role:`analysis`,kind:`xyz`,axes:[`nitrogen (kg/ha)`,`phosphate (kg/ha)`,`pesticide (kg/ha)`],boundaries:[`biogeochemical-flows`,`novel-entities`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`z`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_02_xyz_nutrient_chemical_input.csv`,sha256:`415b9cfb8a1b93ccc953ddbe246af83a31778b50df3139fc9d59be2dc791a797`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_02_xyz_nutrient_chemical_input.csv`,sha256:`415b9cfb8a1b93ccc953ddbe246af83a31778b50df3139fc9d59be2dc791a797`}],url:`/atlas-data/6adee430170bd77152a0.json`,defaultMode:`linear`},{id:`88f857abcd21575cb55f`,title:`section03_main_03_xy_nutrient_input_balance.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`nitrogen (kg/ha)`,`phosphate (kg/ha)`],boundaries:[`biogeochemical-flows`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_03_xy_nutrient_input_balance.csv`,sha256:`6700d72b21718500c76d75f16f4dc361a44f3356cabb3b928092700fb076cab3`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_03_xy_nutrient_input_balance.csv`,sha256:`6700d72b21718500c76d75f16f4dc361a44f3356cabb3b928092700fb076cab3`}],url:`/atlas-data/88f857abcd21575cb55f.json`,defaultMode:`linear`},{id:`0e9a56fee4a45b31d5b0`,title:`section03_main_04_xy_nutrient_chemical_pressure.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`nitrogen (kg/ha)`,`pesticide (kg/ha)`],boundaries:[`biogeochemical-flows`,`novel-entities`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_04_xy_nutrient_chemical_pressure.csv`,sha256:`d53a1775577f667b2dae31e6a0e48629eba1262945a0e3848c1033f45a451bb6`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_04_xy_nutrient_chemical_pressure.csv`,sha256:`d53a1775577f667b2dae31e6a0e48629eba1262945a0e3848c1033f45a451bb6`}],url:`/atlas-data/0e9a56fee4a45b31d5b0.json`,defaultMode:`linear`},{id:`753889d2bb126dae9832`,title:`section03_main_05_xy_phosphate_chemical_pressure.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`phosphate (kg/ha)`,`pesticide (kg/ha)`],boundaries:[`biogeochemical-flows`,`novel-entities`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_05_xy_phosphate_chemical_pressure.csv`,sha256:`daf1897c6db7fdc726dc03ce38e6c1127b1250692b51839a919ad03f9277bbab`}],url:`/atlas-data/753889d2bb126dae9832.json`,defaultMode:`linear`},{id:`74791f81db7fdb5832d5`,title:`section03_main_06_xy_extraction_nutrient_input.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`water stress (%)`,`nitrogen (kg/ha)`],boundaries:[`freshwater-change`,`biogeochemical-flows`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_06_xy_extraction_nutrient_input.csv`,sha256:`7bfda10e0c843672f6e3223f7c597e78cd7ddc9b6a3f94920f3c8c13308480fa`}],url:`/atlas-data/74791f81db7fdb5832d5.json`,defaultMode:`linear`},{id:`3e5d5de1fbf262706388`,title:`section03_main_07_xy_material_chemical_pressure.csv`,section:`03`,role:`analysis`,kind:`xy`,axes:[`material consumption (tonnes/person)`,`pesticide (kg/ha)`],boundaries:[`novel-entities`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:166,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_07_xy_material_chemical_pressure.csv`,sha256:`a281f51bee7bf9f3518dee6ebb6e9c241e6121365fb328e45a9635ec32eb3d59`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_07_xy_material_chemical_pressure.csv`,sha256:`a281f51bee7bf9f3518dee6ebb6e9c241e6121365fb328e45a9635ec32eb3d59`}],url:`/atlas-data/3e5d5de1fbf262706388.json`,defaultMode:`linear`},{id:`7f0848943c9639a05114`,title:`stat_01_distribution.csv`,section:`03`,role:`statistics`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:25,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_01_distribution.csv`,sha256:`692b200a7582d2a09cac1a9f8ef2091771534a3409a8662a63e82da0ccf2bac8`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_01_distribution.csv`,sha256:`692b200a7582d2a09cac1a9f8ef2091771534a3409a8662a63e82da0ccf2bac8`}],url:`/atlas-data/7f0848943c9639a05114.json`,defaultMode:`linear`},{id:`15d1ccae717c36635b42`,title:`stat_02_association.csv`,section:`03`,role:`statistics`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:10,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_02_association.csv`,sha256:`13bdf32302be917d04e9faa07e1a9c74de737c74c026098ec6d211e16439bb38`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_02_association.csv`,sha256:`13bdf32302be917d04e9faa07e1a9c74de737c74c026098ec6d211e16439bb38`}],url:`/atlas-data/15d1ccae717c36635b42.json`,defaultMode:`linear`},{id:`a3f9cbbe3254d516a6ed`,title:`stat_03_water_stress_classes.csv`,section:`03`,role:`statistics`,kind:`records`,axes:[],boundaries:[`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:5,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_03_water_stress_classes.csv`,sha256:`ee6eb440b0829cfa2d5278647f75222ea8e1c2ecd7764ad21fbce5cd03223932`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_03_water_stress_classes.csv`,sha256:`ee6eb440b0829cfa2d5278647f75222ea8e1c2ecd7764ad21fbce5cd03223932`}],url:`/atlas-data/a3f9cbbe3254d516a6ed.json`,defaultMode:`linear`},{id:`37013d1d2f95ffe064a7`,title:`stat_04_rank_extremes.csv`,section:`03`,role:`statistics`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:50,columns:[`x`,`y`,`label`],sources:[{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_04_rank_extremes.csv`,sha256:`26e8b8b6a3d2efd4f8a3d4e0b214b3a1087dac22be8a20db9bdd24fb6a5f588a`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_04_rank_extremes.csv`,sha256:`26e8b8b6a3d2efd4f8a3d4e0b214b3a1087dac22be8a20db9bdd24fb6a5f588a`}],url:`/atlas-data/37013d1d2f95ffe064a7.json`,defaultMode:`linear`},{id:`428159d8889295d2501e`,title:`13_fossil_fuel_electricity_share/processed.csv`,section:`04`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Fossil fuels`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:90,columns:[`iso`,`value`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/13_fossil_fuel_electricity_share/processed.csv`,sha256:`d31d08fcb365afc381119391d4f067a168a62795b67570ea6ecc51a730a602f1`}],url:`/atlas-data/428159d8889295d2501e.json`,defaultMode:`linear`},{id:`89c76029c81182cb0a57`,title:`13_fossil_fuel_electricity_share/source.csv`,section:`04`,role:`history`,kind:`history`,axes:[`Year`,`Fossil fuels`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:7300,columns:[`Entity`,`Code`,`Year`,`Fossil fuels`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/13_fossil_fuel_electricity_share/source.csv`,sha256:`f5bfd6c4ce2f87cd78001a26ab0e263edafe6b1cdd36b8c357a3a0bd873ccd07`}],url:`/atlas-data/89c76029c81182cb0a57.json`,defaultMode:`linear`},{id:`44cbc69fe0ff6ebb7a22`,title:`14_co2_emissions_per_capita/processed.csv`,section:`04`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`CO₂ emissions per capita`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:213,columns:[`iso`,`value`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/14_co2_emissions_per_capita/processed.csv`,sha256:`f57dfd155af4a6440af02180e02544acc16cad4c5af6fecc960e1effd3a2e18c`}],url:`/atlas-data/44cbc69fe0ff6ebb7a22.json`,defaultMode:`linear`},{id:`ce33283e213bdb768e72`,title:`14_co2_emissions_per_capita/source.csv`,section:`04`,role:`history`,kind:`history`,axes:[`Year`,`CO₂ emissions per capita`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:26509,columns:[`Entity`,`Code`,`Year`,`CO₂ emissions per capita`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/14_co2_emissions_per_capita/source.csv`,sha256:`11a3a3531e4d814f96c5b6ce1ce4888be554cab5a48fe1394ba72f1b590e976e`}],url:`/atlas-data/ce33283e213bdb768e72.json`,defaultMode:`linear`},{id:`442f33b247c5566d1137`,title:`15_methane_emissions/processed.csv`,section:`04`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Annual methane emissions including land use`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:199,columns:[`iso`,`value`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/15_methane_emissions/processed.csv`,sha256:`df3b06cb76278dff96ddff9790e471e3d7509e15a9d30491ab92f06777f8058b`}],url:`/atlas-data/442f33b247c5566d1137.json`,defaultMode:`linear`},{id:`0d0fb5a2b79fa7ee4d04`,title:`15_methane_emissions/source.csv`,section:`04`,role:`history`,kind:`history`,axes:[`Year`,`Annual methane emissions including land use`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:38150,columns:[`Entity`,`Code`,`Year`,`Annual methane emissions including land use`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/15_methane_emissions/source.csv`,sha256:`5883255ad4e84ccd73f1259eb6bd7804d858dfac93d6cc0a2809527ad7b844d4`}],url:`/atlas-data/0d0fb5a2b79fa7ee4d04.json`,defaultMode:`linear`},{id:`6af79a5fb0e404cc80a3`,title:`16_nitrous_oxide_emissions_per_capita/processed.csv`,section:`04`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Per capita nitrous oxide emissions including land use`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:201,columns:[`iso`,`value`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/16_nitrous_oxide_emissions_per_capita/processed.csv`,sha256:`fe504e311f74a5031b49138f4832683fafcf96da800d46b7acd09dd203f02632`}],url:`/atlas-data/6af79a5fb0e404cc80a3.json`,defaultMode:`linear`},{id:`7fed0f4c2a222cd2332a`,title:`16_nitrous_oxide_emissions_per_capita/source.csv`,section:`04`,role:`history`,kind:`history`,axes:[`Year`,`Per capita nitrous oxide emissions including land use`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:36439,columns:[`Entity`,`Code`,`Year`,`Per capita nitrous oxide emissions including land use`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/16_nitrous_oxide_emissions_per_capita/source.csv`,sha256:`fa9970a376a7f8c54f0749c02cc4e337bf2ed4847ac632a6c9bfdcb0447c1eea`}],url:`/atlas-data/7fed0f4c2a222cd2332a.json`,defaultMode:`linear`},{id:`410debc8efa8704a7c79`,title:`section04_main_01_xy_energy_dependence_co2_output.csv`,section:`04`,role:`analysis`,kind:`xy`,axes:[`fossil electricity (%)`,`consumption CO2 (tonnes/person)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_01_xy_energy_dependence_co2_output.csv`,sha256:`e84576e4188d97d866c5b789d93e4312f513c878b25c0159012ceb82fe487791`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_01_xy_energy_dependence_co2_output.csv`,sha256:`e84576e4188d97d866c5b789d93e4312f513c878b25c0159012ceb82fe487791`}],url:`/atlas-data/410debc8efa8704a7c79.json`,defaultMode:`linear`},{id:`4662f4da5d9370d783bf`,title:`section04_main_02_xy_co2_n2o_per_capita.csv`,section:`04`,role:`analysis`,kind:`xy`,axes:[`consumption CO2 (tonnes/person)`,`N2O (tonnes CO2e/person)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_02_xy_co2_n2o_per_capita.csv`,sha256:`9be869d70083741465e6ff857c7b9a7e8288faa5e3368e62869b925b3ddeddad`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_02_xy_co2_n2o_per_capita.csv`,sha256:`9be869d70083741465e6ff857c7b9a7e8288faa5e3368e62869b925b3ddeddad`}],url:`/atlas-data/4662f4da5d9370d783bf.json`,defaultMode:`linear`},{id:`1d6fb30337d9a1f2b7e5`,title:`section04_main_03_xy_energy_dependence_n2o_output.csv`,section:`04`,role:`analysis`,kind:`xy`,axes:[`fossil electricity (%)`,`N2O (tonnes CO2e/person)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_03_xy_energy_dependence_n2o_output.csv`,sha256:`4649b721b083518e91a52d84411666b489a0b11439d68d91704697ba08f84f0c`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_03_xy_energy_dependence_n2o_output.csv`,sha256:`4649b721b083518e91a52d84411666b489a0b11439d68d91704697ba08f84f0c`}],url:`/atlas-data/1d6fb30337d9a1f2b7e5.json`,defaultMode:`linear`},{id:`f4dacfbfa5850d69447b`,title:`section04_main_04_xy_energy_dependence_methane_total.csv`,section:`04`,role:`analysis`,kind:`xy`,axes:[`fossil electricity (%)`,`CH4 (tonnes CO2e)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_04_xy_energy_dependence_methane_total.csv`,sha256:`72efd414b8e7aa735c0a25c9b795f7a05dede86643190e2b6217fd9decdab098`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_04_xy_energy_dependence_methane_total.csv`,sha256:`72efd414b8e7aa735c0a25c9b795f7a05dede86643190e2b6217fd9decdab098`}],url:`/atlas-data/f4dacfbfa5850d69447b.json`,defaultMode:`linear`},{id:`df26c0c84db1eb2a4d19`,title:`section04_main_05_xy_co2_methane_total.csv`,section:`04`,role:`analysis`,kind:`xy`,axes:[`consumption CO2 (tonnes/person)`,`CH4 (tonnes CO2e)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_05_xy_co2_methane_total.csv`,sha256:`6912c454107bb6feae53558a52619467800abc9687d95bcfaf77f99920a48956`}],url:`/atlas-data/df26c0c84db1eb2a4d19.json`,defaultMode:`linear`},{id:`188d481de4af3df01577`,title:`section04_optional_xyz_energy_co2_n2o.csv`,section:`04`,role:`analysis`,kind:`xyz`,axes:[`fossil electricity (%)`,`consumption CO2 (tonnes/person)`,`N2O (tonnes CO2e/person)`],boundaries:[`climate-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:120,columns:[`x`,`y`,`z`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_optional_xyz_energy_co2_n2o.csv`,sha256:`ae9be18d9624d0af84d13bf06e36ba6da6963bc9e551c420a57a79d1e6cc18d2`}],url:`/atlas-data/188d481de4af3df01577.json`,defaultMode:`log`},{id:`db1ae8da7dc5ec5ee73b`,title:`stat_01_distribution.csv`,section:`04`,role:`statistics`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:20,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_01_distribution.csv`,sha256:`a7dfc712896284fb5eb67c1b09da984934894e695c8b930cba9d825b71b4f25a`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_01_distribution.csv`,sha256:`a7dfc712896284fb5eb67c1b09da984934894e695c8b930cba9d825b71b4f25a`}],url:`/atlas-data/db1ae8da7dc5ec5ee73b.json`,defaultMode:`linear`},{id:`2bd85b67e15860d8a17c`,title:`stat_02_association.csv`,section:`04`,role:`statistics`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:6,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_02_association.csv`,sha256:`a574463e8a3083f9074e558dd200c96ecdb00b971f923a4396891615e3869d4a`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_02_association.csv`,sha256:`a574463e8a3083f9074e558dd200c96ecdb00b971f923a4396891615e3869d4a`}],url:`/atlas-data/2bd85b67e15860d8a17c.json`,defaultMode:`linear`},{id:`76c75fc3490e95c3d0dc`,title:`stat_03_fossil_dependence_classes.csv`,section:`04`,role:`statistics`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:4,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_03_fossil_dependence_classes.csv`,sha256:`faf09ba4ed1ec1b915bd8b42d87e57cff30543cf439675a4d9a736e2f8385cd2`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_03_fossil_dependence_classes.csv`,sha256:`faf09ba4ed1ec1b915bd8b42d87e57cff30543cf439675a4d9a736e2f8385cd2`}],url:`/atlas-data/76c75fc3490e95c3d0dc.json`,defaultMode:`linear`},{id:`9a51f705b04357d19c64`,title:`stat_04_rank_extremes.csv`,section:`04`,role:`statistics`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:40,columns:[`x`,`y`,`label`],sources:[{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_04_rank_extremes.csv`,sha256:`739cb0bdaa1aea05eb75aa2ba6d5fb7ac4e6c7c81d822c2a7ecc37682eb67e8d`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_04_rank_extremes.csv`,sha256:`739cb0bdaa1aea05eb75aa2ba6d5fb7ac4e6c7c81d822c2a7ecc37682eb67e8d`}],url:`/atlas-data/9a51f705b04357d19c64.json`,defaultMode:`linear`},{id:`b1a9983a44278ad0ce12`,title:`17_sustainable_agricultural_land/processed.csv`,section:`05`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Proportion of agricultural area under productive and sustainable agriculture (%)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:6,columns:[`iso`,`value`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/17_sustainable_agricultural_land/processed.csv`,sha256:`37d1ca256febc82edc2f524d0979bafb97fd291fc66c1a1aaf2cb03fa1e9524c`}],url:`/atlas-data/b1a9983a44278ad0ce12.json`,defaultMode:`linear`},{id:`c4e95cb56c613a1ed595`,title:`17_sustainable_agricultural_land/source.csv`,section:`05`,role:`history`,kind:`history`,axes:[`Year`,`Proportion of agricultural area under productive and sustainable agriculture (%)`],boundaries:[`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:20,columns:[`Entity`,`Code`,`Year`,`Proportion of agricultural area under productive and sustainable agriculture (%)`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/17_sustainable_agricultural_land/source.csv`,sha256:`485a566e66613d39066675b25f73f74b07b7455078f70cb2de0e170b50a31d69`}],url:`/atlas-data/c4e95cb56c613a1ed595.json`,defaultMode:`linear`},{id:`e2268e4f8bfa7aa0146c`,title:`18_terrestrial_protected_areas/processed.csv`,section:`05`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Terrestrial protected areas (% of total land area)`],boundaries:[`biosphere-integrity`,`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:213,columns:[`iso`,`value`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/18_terrestrial_protected_areas/processed.csv`,sha256:`59c81ede709316ae6fae8f880e3e6151102d190e7b64113b5bb3232ef7550198`}],url:`/atlas-data/e2268e4f8bfa7aa0146c.json`,defaultMode:`linear`},{id:`d4bc07e12981402b6def`,title:`18_terrestrial_protected_areas/source.csv`,section:`05`,role:`history`,kind:`history`,axes:[`Year`,`Terrestrial protected areas (% of total land area)`],boundaries:[`biosphere-integrity`,`land-system-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:2915,columns:[`Entity`,`Code`,`Year`,`Terrestrial protected areas (% of total land area)`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/18_terrestrial_protected_areas/source.csv`,sha256:`dd292d5368222bb367a28b60abf8bb7a8ff79ead9b1eddb4f8a83c5d685107c0`}],url:`/atlas-data/d4bc07e12981402b6def.json`,defaultMode:`linear`},{id:`d66a58b63c516211b77e`,title:`19_marine_protected_areas/processed.csv`,section:`05`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Marine protected areas (% of territorial waters)`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:174,columns:[`iso`,`value`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/19_marine_protected_areas/processed.csv`,sha256:`6d6bff4413134854c72dbcff1e01088d769924e1efdc540d93456076b31c2ac5`}],url:`/atlas-data/d66a58b63c516211b77e.json`,defaultMode:`linear`},{id:`44856bd836e19020eb8f`,title:`19_marine_protected_areas/source.csv`,section:`05`,role:`history`,kind:`history`,axes:[`Year`,`Marine protected areas (% of territorial waters)`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:2392,columns:[`Entity`,`Code`,`Year`,`Marine protected areas (% of territorial waters)`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/19_marine_protected_areas/source.csv`,sha256:`d91176831e2429a8241d42c38b6d7f7dc05eafec3ff0f859f5e42edc96f073ab`}],url:`/atlas-data/44856bd836e19020eb8f.json`,defaultMode:`linear`},{id:`307e62ec6f9e15ffd7c2`,title:`20_marine_kba_protected_coverage/processed.csv`,section:`05`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Average proportion of Marine Key Biodiversity Areas (KBAs) covered by protected areas (%)`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:190,columns:[`iso`,`value`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/20_marine_kba_protected_coverage/processed.csv`,sha256:`ef896d8f59d6970a3c8af180be6d2460c2fbb4dfadb4ab016f106dcae04f6601`}],url:`/atlas-data/307e62ec6f9e15ffd7c2.json`,defaultMode:`linear`},{id:`645ef5ee99753e4f8589`,title:`20_marine_kba_protected_coverage/source.csv`,section:`05`,role:`history`,kind:`history`,axes:[`Year`,`Average proportion of Marine Key Biodiversity Areas (KBAs) covered by protected areas (%)`],boundaries:[`biosphere-integrity`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:5356,columns:[`Entity`,`Code`,`Year`,`Average proportion of Marine Key Biodiversity Areas (KBAs) covered by protected areas (%)`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/20_marine_kba_protected_coverage/source.csv`,sha256:`f5e2b5ad1be96c6604e92de7faa052b0e5f63c9f369af9268970d49907e27513`}],url:`/atlas-data/645ef5ee99753e4f8589.json`,defaultMode:`linear`},{id:`cabdced8011a489dc19c`,title:`21_renewable_energy_share/processed.csv`,section:`05`,role:`processed`,kind:`category`,axes:[`Entity (categorical layout)`,`Renewable energy share in the total final energy consumption (%)`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:84,columns:[`iso`,`value`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/21_renewable_energy_share/processed.csv`,sha256:`09854ba001a924ce3d3dae6d50fdb17c6887fcefbc02b8913517bbb95834e6ed`}],url:`/atlas-data/cabdced8011a489dc19c.json`,defaultMode:`linear`},{id:`9040a2b99635af369e3f`,title:`21_renewable_energy_share/source.csv`,section:`05`,role:`history`,kind:`history`,axes:[`Year`,`Renewable energy share in the total final energy consumption (%)`],boundaries:[`climate-change`],mappingReason:`Source indicator belongs to this boundary topic; raw units and years retained.`,rowCount:8309,columns:[`Entity`,`Code`,`Year`,`Renewable energy share in the total final energy consumption (%)`],sources:[{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/21_renewable_energy_share/source.csv`,sha256:`087ebaf0ace0fa40101728fe448d76ee2e294b491b5dcd386e2da32176c57191`}],url:`/atlas-data/9040a2b99635af369e3f.json`,defaultMode:`linear`},{id:`0a5d960e3063f34dc855`,title:`OUTPUT_01_land_marine_kba_XYZ.csv`,section:`05`,role:`analysis`,kind:`xyz`,axes:[`terrestrial protection (%)`,`marine protection (%)`,`marine KBA protection (%)`],boundaries:[`biosphere-integrity`,`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:160,columns:[`x`,`y`,`z`,`label`],sources:[{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_01_land_marine_kba_XYZ.csv`,sha256:`5e391c1c24e5eb617144b3a10e95cc6f0402f9268577ce0c827a0c2c2c33ff92`}],url:`/atlas-data/0a5d960e3063f34dc855.json`,defaultMode:`linear`},{id:`612323e1d9cbd2a3ce00`,title:`OUTPUT_02_land_renewable_XY.csv`,section:`05`,role:`analysis`,kind:`xy`,axes:[`renewable energy (%)`,`terrestrial protection (%)`],boundaries:[`climate-change`,`biosphere-integrity`,`land-system-change`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:160,columns:[`x`,`y`,`label`],sources:[{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_02_land_renewable_XY.csv`,sha256:`9011e6cc992973c1547d53380b3acf5671963326e29a7e7d2a3fd4e747407246`}],url:`/atlas-data/612323e1d9cbd2a3ce00.json`,defaultMode:`linear`},{id:`4276bac8f5d1cf72d4e8`,title:`OUTPUT_03_marine_renewable_XY.csv`,section:`05`,role:`analysis`,kind:`xy`,axes:[`renewable energy (%)`,`marine protection (%)`],boundaries:[`climate-change`,`biosphere-integrity`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:160,columns:[`x`,`y`,`label`],sources:[{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_03_marine_renewable_XY.csv`,sha256:`675787df24d6164cada0d53c3dde1adf91e8d163ecf19bdb767d3a5f6c4f6353`}],url:`/atlas-data/4276bac8f5d1cf72d4e8.json`,defaultMode:`linear`},{id:`9007db6d66c870534308`,title:`OUTPUT_04_marine_kba_renewable_XY.csv`,section:`05`,role:`analysis`,kind:`xy`,axes:[`renewable energy (%)`,`marine KBA protection (%)`],boundaries:[`climate-change`,`biosphere-integrity`],mappingReason:`Variables explicitly occur in this supplied analysis; contextual membership, not causal attribution.`,rowCount:160,columns:[`x`,`y`,`label`],sources:[{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_04_marine_kba_renewable_XY.csv`,sha256:`f455a1b14fead8bfc36701b34595217d5d4854aa2f1b8210af80145d83528750`}],url:`/atlas-data/9007db6d66c870534308.json`,defaultMode:`linear`},{id:`4c2a500297a9291e0868`,title:`final_reading_relations.csv`,section:`01`,role:`relations`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Source-defined variable relations, not country-to-country edges.`,rowCount:6,columns:[`section`,`node_a`,`node_b`,`spearman_rho`,`abs_rho`,`sign`,`red_edge`,`source`,`verification_status`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/final_reading_relations.csv`,sha256:`4369d999efa09e16f665f12ce8648edb7c898b5e2137f615de7012dacd005718`}],url:`/atlas-data/4c2a500297a9291e0868.json`,defaultMode:`linear`},{id:`5e3d1fb8e3c4b45f45af`,title:`final_reading_summary.csv`,section:`01`,role:`summary`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:8,columns:[`section`,`metric`,`value`,`note`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/final_reading_summary.csv`,sha256:`25a82d29be37c02657dfd160134d91504c1df49ffbf2b23f43644f38fc86b33b`}],url:`/atlas-data/5e3d1fb8e3c4b45f45af.json`,defaultMode:`linear`},{id:`5c0e90d1f1972f29d920`,title:`red_points.csv`,section:`01`,role:`red-points`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`freshwater-change`],mappingReason:`Source-defined red record; no transfer to another cohort or source series.`,rowCount:1,columns:[`section`,`output`,`chart`,`iso3`,`country`,`selection_rule`,`x_variable`,`x_value`,`y_variable`,`y_value`,`extra_variable`,`extra_value`,`threshold_1_name`,`threshold_1_value`,`threshold_2_name`,`threshold_2_value`,`group_n`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/red_points.csv`,sha256:`d5115d05e110b136a5766e2afec585653d276b93010a4c532fc917d134590644`}],url:`/atlas-data/5c0e90d1f1972f29d920.json`,defaultMode:`linear`},{id:`9eaa9dcb4eb679f3b0c0`,title:`final_reading_relations.csv`,section:`02`,role:`relations`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Source-defined variable relations, not country-to-country edges.`,rowCount:6,columns:[`section`,`node_a`,`node_b`,`spearman_rho`,`abs_rho`,`sign`,`red_edge`,`source`,`verification_status`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/final_reading_relations.csv`,sha256:`b5cf06d38912025bfd3f3dc756f4e93bd7e3b7e6e5b79cab1f630cdb2af7aceb`}],url:`/atlas-data/9eaa9dcb4eb679f3b0c0.json`,defaultMode:`linear`},{id:`83e98e0885a1a61bc671`,title:`final_reading_summary.csv`,section:`02`,role:`summary`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:8,columns:[`section`,`metric`,`value`,`note`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/final_reading_summary.csv`,sha256:`bc47704239f186f7c43370e39258fdd43618b7b2f7a6ec29ee66b714a93f3e86`}],url:`/atlas-data/83e98e0885a1a61bc671.json`,defaultMode:`linear`},{id:`498411dc54a4cf4229f6`,title:`red_points.csv`,section:`02`,role:`red-points`,kind:`records`,axes:[],boundaries:[`land-system-change`],mappingReason:`Source-defined red record; no transfer to another cohort or source series.`,rowCount:3,columns:[`section`,`output`,`chart`,`iso3`,`country`,`selection_rule`,`x_variable`,`x_value`,`y_variable`,`y_value`,`residual`,`residual_rank_desc`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/red_points.csv`,sha256:`b955509b813b03d455422512795457ee33a50bc1c7e1503e8f813878c4365de6`}],url:`/atlas-data/498411dc54a4cf4229f6.json`,defaultMode:`linear`},{id:`9db5142207e15201f49b`,title:`final_reading_relations.csv`,section:`03`,role:`relations`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Source-defined variable relations, not country-to-country edges.`,rowCount:10,columns:[`section`,`node_a`,`node_b`,`spearman_rho`,`abs_rho`,`sign`,`red_edge`,`source`,`verification_status`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/final_reading_relations.csv`,sha256:`0eeeb8e800afed4ce6c4e982915384bf8243b2e4dc6cd9bfe316b0c82cc042ad`}],url:`/atlas-data/9db5142207e15201f49b.json`,defaultMode:`linear`},{id:`6506e29360170bba4a1e`,title:`final_reading_summary.csv`,section:`03`,role:`summary`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:6,columns:[`section`,`metric`,`value`,`note`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/final_reading_summary.csv`,sha256:`c64135fb8d754163a53f10c97d0ca1bd9c4efb0c8ca0572045cb38e839d252ee`}],url:`/atlas-data/6506e29360170bba4a1e.json`,defaultMode:`linear`},{id:`389b6135fa38cfe9e867`,title:`red_points.csv`,section:`03`,role:`red-points`,kind:`records`,axes:[],boundaries:[`freshwater-change`,`biogeochemical-flows`,`novel-entities`],mappingReason:`Source-defined red record; no transfer to another cohort or source series.`,rowCount:1,columns:[`section`,`output`,`chart`,`iso3`,`country`,`selection_rule`,`water_pct_available`,`dmc_t_per_person`,`nitrogen_kg_ha`,`phosphate_kg_ha`,`pesticide_kg_ha`,`q75_water`,`q75_dmc`,`q75_nitrogen`,`q75_phosphate`,`q75_pesticide`,`intersection_n`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/red_points.csv`,sha256:`6fb09d54631d86039c95ec5be8cbfcba542c28c2e9c29d31092a78bd298a1a8c`}],url:`/atlas-data/389b6135fa38cfe9e867.json`,defaultMode:`linear`},{id:`1e64290b233788604401`,title:`final_reading_relations.csv`,section:`04`,role:`relations`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Source-defined variable relations, not country-to-country edges.`,rowCount:6,columns:[`section`,`node_a`,`node_b`,`spearman_rho`,`abs_rho`,`sign`,`red_edge`,`source`,`verification_status`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/final_reading_relations.csv`,sha256:`9b4259f32917ffc5a9c9f164a4e51958539b606add7b1d814a1827be11fd11c0`}],url:`/atlas-data/1e64290b233788604401.json`,defaultMode:`linear`},{id:`7bd69c8f17707c65de3f`,title:`final_reading_summary.csv`,section:`04`,role:`summary`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:4,columns:[`section`,`metric`,`value`,`note`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/final_reading_summary.csv`,sha256:`9356dcbdb7a2fa78cfa69982c61c6049a8f33dc4eebc26d43d8296c9e7d054fe`}],url:`/atlas-data/7bd69c8f17707c65de3f.json`,defaultMode:`linear`},{id:`3959ca1c4c17645c8743`,title:`red_points.csv`,section:`04`,role:`red-points`,kind:`records`,axes:[],boundaries:[`climate-change`],mappingReason:`Source-defined red record; no transfer to another cohort or source series.`,rowCount:3,columns:[`section`,`output`,`chart`,`iso3`,`country`,`selection_rule`,`fossil_electricity_pct`,`emission_variable`,`emission_value`,`rank_residual`,`computed_max_target`,`sample_n`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/red_points.csv`,sha256:`44b06877f5b50439bdb614de83127c11277021bad2ee4c75693fe78ce8458717`}],url:`/atlas-data/3959ca1c4c17645c8743.json`,defaultMode:`linear`},{id:`e1da6643968c699276b8`,title:`final_reading_relations.csv`,section:`05`,role:`relations`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`climate-change`],mappingReason:`Source-defined variable relations, not country-to-country edges.`,rowCount:6,columns:[`section`,`node_a`,`node_b`,`spearman_rho`,`abs_rho`,`sign`,`red_edge`,`source`,`verification_status`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/final_reading_relations.csv`,sha256:`6cbbfaed37a8f3a53dcdb419401b577ee55dddfc7486e88752701f5cd13cf218`}],url:`/atlas-data/e1da6643968c699276b8.json`,defaultMode:`linear`},{id:`08ba2d3ab7fcebc6f661`,title:`final_reading_summary.csv`,section:`05`,role:`summary`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`climate-change`],mappingReason:`Shared section analysis; not a planetary control variable.`,rowCount:3,columns:[`section`,`metric`,`value`,`note`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/final_reading_summary.csv`,sha256:`afea2d5e13bd5a01214716d23e8e05bc0000fa746d53870389ff8f941bb5e3ea`}],url:`/atlas-data/08ba2d3ab7fcebc6f661.json`,defaultMode:`linear`},{id:`8231f1c1ebf03aca3673`,title:`red_points.csv`,section:`05`,role:`red-points`,kind:`records`,axes:[],boundaries:[`biosphere-integrity`,`land-system-change`,`climate-change`],mappingReason:`Source-defined red record; no transfer to another cohort or source series.`,rowCount:1,columns:[`section`,`output`,`chart`,`iso3`,`country`,`selection_rule`,`land_protection_pct`,`marine_protection_pct`,`marine_kba_pct`,`renewable_energy_pct`,`q75_land`,`q75_marine`,`q75_kba`,`q75_renewable`,`intersection_n`],sources:[{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/red_points.csv`,sha256:`647754cffd88348d2d4831f8d95c9907a977d0fcdf4be17b9a01b2e5a4896997`}],url:`/atlas-data/8231f1c1ebf03aca3673.json`,defaultMode:`linear`}],boundaries:{"climate-change":{datasets:`428159d8889295d2501e.89c76029c81182cb0a57.44cbc69fe0ff6ebb7a22.ce33283e213bdb768e72.442f33b247c5566d1137.0d0fb5a2b79fa7ee4d04.6af79a5fb0e404cc80a3.7fed0f4c2a222cd2332a.410debc8efa8704a7c79.4662f4da5d9370d783bf.1d6fb30337d9a1f2b7e5.f4dacfbfa5850d69447b.df26c0c84db1eb2a4d19.188d481de4af3df01577.db1ae8da7dc5ec5ee73b.2bd85b67e15860d8a17c.76c75fc3490e95c3d0dc.9a51f705b04357d19c64.cabdced8011a489dc19c.9040a2b99635af369e3f.612323e1d9cbd2a3ce00.4276bac8f5d1cf72d4e8.9007db6d66c870534308.1e64290b233788604401.7bd69c8f17707c65de3f.3959ca1c4c17645c8743.e1da6643968c699276b8.08ba2d3ab7fcebc6f661.8231f1c1ebf03aca3673`.split(`.`),default:`188d481de4af3df01577`},"biosphere-integrity":{datasets:[`f4513000751f00b12a90`,`7d79605a10f8d91522b9`,`dfa8e5dceddea9cb6ceb`,`672f9f8cb1ec4016f4ca`,`4c882a273a43d5225ad5`,`5f1104bfb26c827636c2`,`978ce0d655f4459460ac`,`e2268e4f8bfa7aa0146c`,`d4bc07e12981402b6def`,`d66a58b63c516211b77e`,`44856bd836e19020eb8f`,`307e62ec6f9e15ffd7c2`,`645ef5ee99753e4f8589`,`0a5d960e3063f34dc855`,`612323e1d9cbd2a3ce00`,`4276bac8f5d1cf72d4e8`,`9007db6d66c870534308`,`4c2a500297a9291e0868`,`5e3d1fb8e3c4b45f45af`,`5c0e90d1f1972f29d920`,`e1da6643968c699276b8`,`08ba2d3ab7fcebc6f661`,`8231f1c1ebf03aca3673`],default:`dfa8e5dceddea9cb6ceb`},"land-system-change":{datasets:`cc56796f9ee91266a502.865d6d78398f50ff9621.dfa8e5dceddea9cb6ceb.672f9f8cb1ec4016f4ca.4c882a273a43d5225ad5.5f1104bfb26c827636c2.978ce0d655f4459460ac.2d2ef41680fd4b08eb18.e61977da5a5185db9722.0af63e14f7b5d6a0b77c.b12f88612680c9cd218d.4779653708333348e823.f7fe4072213e515e83e0.e131f8e0cdb9944e85ea.b3be43a24c8d343a8778.08e23869f8da2e3e0258.b40aafe947033b712a2d.c888509d56b033a7395c.507312544760135b44da.93ec15e3b0d287df6761.0cedfaa18f63bc38a678.94cdcfa48ce79f6650c3.3c845d5799da2c56f1b0.83006f5a80eecedc1237.b1a9983a44278ad0ce12.c4e95cb56c613a1ed595.e2268e4f8bfa7aa0146c.d4bc07e12981402b6def.0a5d960e3063f34dc855.612323e1d9cbd2a3ce00.4c2a500297a9291e0868.5e3d1fb8e3c4b45f45af.5c0e90d1f1972f29d920.9eaa9dcb4eb679f3b0c0.83e98e0885a1a61bc671.498411dc54a4cf4229f6.e1da6643968c699276b8.08ba2d3ab7fcebc6f661.8231f1c1ebf03aca3673`.split(`.`),default:`93ec15e3b0d287df6761`},"freshwater-change":{datasets:[`68d8e3018500173f07ee`,`0ba1259449ea36756d02`,`dfa8e5dceddea9cb6ceb`,`672f9f8cb1ec4016f4ca`,`4c882a273a43d5225ad5`,`5f1104bfb26c827636c2`,`978ce0d655f4459460ac`,`e778d5da416900bcc341`,`ecb4c2fb93691e640781`,`f36a10df982cfe8f7c61`,`b15192540276e0f94e9f`,`3fb696dded750ba908fd`,`74791f81db7fdb5832d5`,`7f0848943c9639a05114`,`15d1ccae717c36635b42`,`a3f9cbbe3254d516a6ed`,`37013d1d2f95ffe064a7`,`4c2a500297a9291e0868`,`5e3d1fb8e3c4b45f45af`,`5c0e90d1f1972f29d920`,`9db5142207e15201f49b`,`6506e29360170bba4a1e`,`389b6135fa38cfe9e867`],default:`dfa8e5dceddea9cb6ceb`},"biogeochemical-flows":{datasets:[`f5ac1c5aa8f781ea6b84`,`fde7978fcae145c08638`,`068fd5a51cdcecab7225`,`e82f7868c826ef122579`,`6adee430170bd77152a0`,`88f857abcd21575cb55f`,`0e9a56fee4a45b31d5b0`,`753889d2bb126dae9832`,`74791f81db7fdb5832d5`,`7f0848943c9639a05114`,`15d1ccae717c36635b42`,`37013d1d2f95ffe064a7`,`9db5142207e15201f49b`,`6506e29360170bba4a1e`,`389b6135fa38cfe9e867`],default:`6adee430170bd77152a0`},"novel-entities":{datasets:[`ad8681dacfb65f4e766a`,`85702edec1b710e9b0b6`,`f36a10df982cfe8f7c61`,`b15192540276e0f94e9f`,`3fb696dded750ba908fd`,`6adee430170bd77152a0`,`0e9a56fee4a45b31d5b0`,`753889d2bb126dae9832`,`3e5d5de1fbf262706388`,`7f0848943c9639a05114`,`15d1ccae717c36635b42`,`37013d1d2f95ffe064a7`,`9db5142207e15201f49b`,`6506e29360170bba4a1e`,`389b6135fa38cfe9e867`],default:`6adee430170bd77152a0`},"ocean-acidification":{datasets:[],default:null,reason:`No directly corresponding local analysis in supplied archives. Global PB controls remain available.`},"atmospheric-aerosol-loading":{datasets:[],default:null,reason:`No directly corresponding local analysis in supplied archives. Global PB controls remain available.`},"stratospheric-ozone-depletion":{datasets:[],default:null,reason:`No directly corresponding local analysis in supplied archives. Global PB controls remain available.`}},coverage:[{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/01_forest_cover/processed.csv`,sha256:`7091b9796d3eb517ee1a66cda94990d16378609b0569b26256adb90d48f50b05`,rows:215,status:`included`,dataset:`cc56796f9ee91266a502`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/01_forest_cover/source.csv`,sha256:`e3fc91593bf3909357cdeac505b680483df08e45a63e6787d38f7578c74a9906`,rows:8078,status:`included`,dataset:`865d6d78398f50ff9621`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/02_renewable_freshwater_resources/processed.csv`,sha256:`261437de9adb1726ae2baddbeb4f427a61f17cd3848b6df2ec84ef34affbbf9b`,rows:181,status:`included`,dataset:`68d8e3018500173f07ee`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/02_renewable_freshwater_resources/source.csv`,sha256:`5b688a83691250907433624c04cea8d976941aff4fa7561244653b12a5e23bee`,rows:11213,status:`included`,dataset:`0ba1259449ea36756d02`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/03_red_list_index/processed.csv`,sha256:`6c37209b76e4cda260d19c88d4667a60426af8de82ee7ee5903f1cdb5aff788e`,rows:247,status:`included`,dataset:`f4513000751f00b12a90`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/03_red_list_index/source.csv`,sha256:`55c582fb6775ca0062f0baccae884a706733a115988f3d3ef708e4c543fee52d`,rows:12013,status:`included`,dataset:`7d79605a10f8d91522b9`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/raw_xyz.csv`,sha256:`00c69aaf4267b8cac930a82137128edd1664c4a702ed7317b319ca68ef74ff2c`,rows:183,status:`included`,dataset:`dfa8e5dceddea9cb6ceb`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_01_distribution.csv`,sha256:`d90408a936d5209bb3c906ea8dc13b5e647dd37ecf8394eb96a5a05107042d29`,rows:15,status:`included`,dataset:`672f9f8cb1ec4016f4ca`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_02_rank_extremes.csv`,sha256:`a43670704b153445dbeb8143d7ff640f7589c68a92611ec56ff2fb4a5ec95ca2`,rows:60,status:`included`,dataset:`4c882a273a43d5225ad5`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_03_association.csv`,sha256:`0861c81ec33e30eab36f30a5e4e867e0a843a7b3d053e70abe1a419ad5f73061`,rows:3,status:`included`,dataset:`5f1104bfb26c827636c2`},{archive:`01_maintaining_systems.zip`,path:`01_maintaining_systems/section_01_analysis/csv/stat_04_synthesis.csv`,sha256:`4155bbc642b891eceef80be42e5f93eb6a5bab738a4f1067dce2ffae5eaf2fde`,rows:8,status:`included`,dataset:`978ce0d655f4459460ac`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/04_agricultural_land_share/processed.csv`,sha256:`1b64df84cecd17dd206b2fd2c3a2eeb8361559f92b19c33f8b3a6390427fb554`,rows:209,status:`included`,dataset:`2d2ef41680fd4b08eb18`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/04_agricultural_land_share/source.csv`,sha256:`04390e1a03d4234257900f29994bde1fd996d359ef1952df3bf2bc777964af20`,rows:12940,status:`included`,dataset:`e61977da5a5185db9722`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/05_arable_land_share/processed.csv`,sha256:`29a897365bb97d575c44bf4347d3a6016634def1b06b96f3ae2cd80ef7b0827d`,rows:206,status:`included`,dataset:`0af63e14f7b5d6a0b77c`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/05_arable_land_share/source.csv`,sha256:`465c0ac27a138465f3630a800ee8b84e71992b141e5dc30872e51f18cf6d2e23`,rows:12690,status:`included`,dataset:`b12f88612680c9cd218d`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/06_cereal_yield/processed.csv`,sha256:`da9a09b630860e52f8d254cafdd3c92a4be1f759c2bcf62c2bb4479b35c0c838`,rows:177,status:`included`,dataset:`4779653708333348e823`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/06_cereal_yield/source.csv`,sha256:`52c445126fe3454891bf6199d94640629f3374f45bbf47f85d6f5e19209aedda`,rows:13488,status:`included`,dataset:`f7fe4072213e515e83e0`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/07_forest_area_change_rate/processed.csv`,sha256:`8acd665e8294d9c6a0b2e64df326c2319343d57e19f0897401a59e5b9439abcf`,rows:228,status:`included`,dataset:`e131f8e0cdb9944e85ea`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/07_forest_area_change_rate/source.csv`,sha256:`30b9f992edf42e1b2078cb7245c254b387c10c43aa7c5d57ad39bf9f1dd831b4`,rows:8435,status:`included`,dataset:`b3be43a24c8d343a8778`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_xy_agri_yield.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`,rows:180,status:`included`,dataset:`08e23869f8da2e3e0258`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_xz_agri_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`,rows:180,status:`included`,dataset:`b40aafe947033b712a2d`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/projection_yz_yield_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`,rows:180,status:`included`,dataset:`c888509d56b033a7395c`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/raw_xy_land_structure.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`,rows:180,status:`included`,dataset:`507312544760135b44da`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/raw_xyz_land_production_forest.csv`,sha256:`e2c958c22154ec1682ceaa54eb4bc36b36ac09e7a0dc242410bef36475d141f9`,rows:180,status:`included`,dataset:`93ec15e3b0d287df6761`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_01_xy_land_occupation_cultivation.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`,rows:180,status:`duplicate`,dataset:`507312544760135b44da`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_02_xy_land_occupation_productivity.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`,rows:180,status:`duplicate`,dataset:`08e23869f8da2e3e0258`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_03_xy_land_occupation_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`,rows:180,status:`duplicate`,dataset:`b40aafe947033b712a2d`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/section02_main_04_xy_productivity_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`,rows:180,status:`duplicate`,dataset:`c888509d56b033a7395c`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_01_distribution.csv`,sha256:`6ae57425dbb07515f31b86a27c466a4726136d3111faa838a880af7ca0d7b0e5`,rows:20,status:`included`,dataset:`0cedfaa18f63bc38a678`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_02_association.csv`,sha256:`68395d7031804750a1711ffc0a19be51a48ab3e3816f0886390443636cd8011e`,rows:6,status:`included`,dataset:`94cdcfa48ce79f6650c3`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_03_forest_change_direction.csv`,sha256:`3ebdc4ef05c7f24b2a6dd0aaca3d5931b8cd9d9f3729938c8d5860f1e6ee8ad2`,rows:3,status:`included`,dataset:`3c845d5799da2c56f1b0`},{archive:`02_land_transformation.zip`,path:`02_land_transformation/section_02_analysis/csv/stat_04_rank_extremes.csv`,sha256:`4cc782324a9d2b91de26dfe89ea15169b6c6c55247b54a687f968da0b7256a5e`,rows:40,status:`included`,dataset:`83006f5a80eecedc1237`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/08_freshwater_withdrawal_pressure/processed.csv`,sha256:`e04a68aa8b3605ce21ca823ae026b202eff23802b7bb56011beecaa5b4f35d8e`,rows:182,status:`included`,dataset:`e778d5da416900bcc341`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/08_freshwater_withdrawal_pressure/source.csv`,sha256:`7e53ede8500f3ce06c98deae67d030e6581bfd34151db238e5504995196248a8`,rows:4583,status:`included`,dataset:`ecb4c2fb93691e640781`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/09_nitrogen_fertilizer/processed.csv`,sha256:`49facc80db0e4146f9a3d2bbe264da3dd858fc871fe7cf34bb5778323c5b5dc1`,rows:198,status:`included`,dataset:`f5ac1c5aa8f781ea6b84`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/09_nitrogen_fertilizer/source.csv`,sha256:`a45dcb40bb0e4a014d5eafcfe36aadf11854a3c47a95225d3739f4498e0feb61`,rows:12568,status:`included`,dataset:`fde7978fcae145c08638`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/10_phosphate_fertilizer/processed.csv`,sha256:`5fde646afd233c578571c880f4858b68baddb0294cf01e8ebc9c0aadaafd9d15`,rows:197,status:`included`,dataset:`068fd5a51cdcecab7225`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/10_phosphate_fertilizer/source.csv`,sha256:`b85b8fbd065982a0fc826bdca62cdfc8d86fe8ba12297957a997b0e55f1fc22a`,rows:12280,status:`included`,dataset:`e82f7868c826ef122579`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/11_pesticide_use_per_hectare/processed.csv`,sha256:`deab88e73e501006e9ff244b7ee2a6eaa23a895ed38edc41c1b0160a9c9e21d1`,rows:197,status:`included`,dataset:`ad8681dacfb65f4e766a`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/11_pesticide_use_per_hectare/source.csv`,sha256:`00aa68f2977de03f61f30cd7f8657ff808d0af72f8e24ee43d33d8d5fad183a7`,rows:7804,status:`included`,dataset:`85702edec1b710e9b0b6`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/12_domestic_material_consumption/processed.csv`,sha256:`3768de351d7b12fd8d73c4fa3b7f91b5cf186963cbb672d508812254acb723d8`,rows:226,status:`included`,dataset:`f36a10df982cfe8f7c61`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/12_domestic_material_consumption/source.csv`,sha256:`9b03569e2d23b1f98c826fdc2b78ba7b3a7bdd907ab7ef18d7b6af68ab457f50`,rows:6167,status:`included`,dataset:`b15192540276e0f94e9f`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_01_xy_extraction_material_use.csv`,sha256:`1a65afff9a0373ee6fa66f80465fc58a1d008579cc3ef7ad8af771bdce5845e0`,rows:166,status:`included`,dataset:`3fb696dded750ba908fd`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_02_xyz_nutrient_chemical_input.csv`,sha256:`415b9cfb8a1b93ccc953ddbe246af83a31778b50df3139fc9d59be2dc791a797`,rows:166,status:`included`,dataset:`6adee430170bd77152a0`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_03_xy_nutrient_input_balance.csv`,sha256:`6700d72b21718500c76d75f16f4dc361a44f3356cabb3b928092700fb076cab3`,rows:166,status:`included`,dataset:`88f857abcd21575cb55f`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_04_xy_nutrient_chemical_pressure.csv`,sha256:`d53a1775577f667b2dae31e6a0e48629eba1262945a0e3848c1033f45a451bb6`,rows:166,status:`included`,dataset:`0e9a56fee4a45b31d5b0`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_05_xy_phosphate_chemical_pressure.csv`,sha256:`daf1897c6db7fdc726dc03ce38e6c1127b1250692b51839a919ad03f9277bbab`,rows:166,status:`included`,dataset:`753889d2bb126dae9832`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_06_xy_extraction_nutrient_input.csv`,sha256:`7bfda10e0c843672f6e3223f7c597e78cd7ddc9b6a3f94920f3c8c13308480fa`,rows:166,status:`included`,dataset:`74791f81db7fdb5832d5`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/section03_main_07_xy_material_chemical_pressure.csv`,sha256:`a281f51bee7bf9f3518dee6ebb6e9c241e6121365fb328e45a9635ec32eb3d59`,rows:166,status:`included`,dataset:`3e5d5de1fbf262706388`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_01_distribution.csv`,sha256:`692b200a7582d2a09cac1a9f8ef2091771534a3409a8662a63e82da0ccf2bac8`,rows:25,status:`included`,dataset:`7f0848943c9639a05114`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_02_association.csv`,sha256:`13bdf32302be917d04e9faa07e1a9c74de737c74c026098ec6d211e16439bb38`,rows:10,status:`included`,dataset:`15d1ccae717c36635b42`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_03_water_stress_classes.csv`,sha256:`ee6eb440b0829cfa2d5278647f75222ea8e1c2ecd7764ad21fbce5cd03223932`,rows:5,status:`included`,dataset:`a3f9cbbe3254d516a6ed`},{archive:`03_resource_pressure.zip`,path:`03_resource_pressure/section_03_analysis/csv/stat_04_rank_extremes.csv`,sha256:`26e8b8b6a3d2efd4f8a3d4e0b214b3a1087dac22be8a20db9bdd24fb6a5f588a`,rows:50,status:`included`,dataset:`37013d1d2f95ffe064a7`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/13_fossil_fuel_electricity_share/processed.csv`,sha256:`d31d08fcb365afc381119391d4f067a168a62795b67570ea6ecc51a730a602f1`,rows:90,status:`included`,dataset:`428159d8889295d2501e`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/13_fossil_fuel_electricity_share/source.csv`,sha256:`f5bfd6c4ce2f87cd78001a26ab0e263edafe6b1cdd36b8c357a3a0bd873ccd07`,rows:7300,status:`included`,dataset:`89c76029c81182cb0a57`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/14_co2_emissions_per_capita/processed.csv`,sha256:`f57dfd155af4a6440af02180e02544acc16cad4c5af6fecc960e1effd3a2e18c`,rows:213,status:`included`,dataset:`44cbc69fe0ff6ebb7a22`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/14_co2_emissions_per_capita/source.csv`,sha256:`11a3a3531e4d814f96c5b6ce1ce4888be554cab5a48fe1394ba72f1b590e976e`,rows:26509,status:`included`,dataset:`ce33283e213bdb768e72`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/15_methane_emissions/processed.csv`,sha256:`df3b06cb76278dff96ddff9790e471e3d7509e15a9d30491ab92f06777f8058b`,rows:199,status:`included`,dataset:`442f33b247c5566d1137`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/15_methane_emissions/source.csv`,sha256:`5883255ad4e84ccd73f1259eb6bd7804d858dfac93d6cc0a2809527ad7b844d4`,rows:38150,status:`included`,dataset:`0d0fb5a2b79fa7ee4d04`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/16_nitrous_oxide_emissions_per_capita/processed.csv`,sha256:`fe504e311f74a5031b49138f4832683fafcf96da800d46b7acd09dd203f02632`,rows:201,status:`included`,dataset:`6af79a5fb0e404cc80a3`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/16_nitrous_oxide_emissions_per_capita/source.csv`,sha256:`fa9970a376a7f8c54f0749c02cc4e337bf2ed4847ac632a6c9bfdcb0447c1eea`,rows:36439,status:`included`,dataset:`7fed0f4c2a222cd2332a`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_01_xy_energy_dependence_co2_output.csv`,sha256:`e84576e4188d97d866c5b789d93e4312f513c878b25c0159012ceb82fe487791`,rows:120,status:`included`,dataset:`410debc8efa8704a7c79`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_02_xy_co2_n2o_per_capita.csv`,sha256:`9be869d70083741465e6ff857c7b9a7e8288faa5e3368e62869b925b3ddeddad`,rows:120,status:`included`,dataset:`4662f4da5d9370d783bf`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_03_xy_energy_dependence_n2o_output.csv`,sha256:`4649b721b083518e91a52d84411666b489a0b11439d68d91704697ba08f84f0c`,rows:120,status:`included`,dataset:`1d6fb30337d9a1f2b7e5`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_04_xy_energy_dependence_methane_total.csv`,sha256:`72efd414b8e7aa735c0a25c9b795f7a05dede86643190e2b6217fd9decdab098`,rows:120,status:`included`,dataset:`f4dacfbfa5850d69447b`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_main_05_xy_co2_methane_total.csv`,sha256:`6912c454107bb6feae53558a52619467800abc9687d95bcfaf77f99920a48956`,rows:120,status:`included`,dataset:`df26c0c84db1eb2a4d19`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/section04_optional_xyz_energy_co2_n2o.csv`,sha256:`ae9be18d9624d0af84d13bf06e36ba6da6963bc9e551c420a57a79d1e6cc18d2`,rows:120,status:`included`,dataset:`188d481de4af3df01577`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_01_distribution.csv`,sha256:`a7dfc712896284fb5eb67c1b09da984934894e695c8b930cba9d825b71b4f25a`,rows:20,status:`included`,dataset:`db1ae8da7dc5ec5ee73b`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_02_association.csv`,sha256:`a574463e8a3083f9074e558dd200c96ecdb00b971f923a4396891615e3869d4a`,rows:6,status:`included`,dataset:`2bd85b67e15860d8a17c`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_03_fossil_dependence_classes.csv`,sha256:`faf09ba4ed1ec1b915bd8b42d87e57cff30543cf439675a4d9a736e2f8385cd2`,rows:4,status:`included`,dataset:`76c75fc3490e95c3d0dc`},{archive:`04_atmospheric_pressure.zip`,path:`04_atmospheric_pressure/section_04_analysis/csv/stat_04_rank_extremes.csv`,sha256:`739cb0bdaa1aea05eb75aa2ba6d5fb7ac4e6c7c81d822c2a7ecc37682eb67e8d`,rows:40,status:`included`,dataset:`9a51f705b04357d19c64`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/17_sustainable_agricultural_land/processed.csv`,sha256:`37d1ca256febc82edc2f524d0979bafb97fd291fc66c1a1aaf2cb03fa1e9524c`,rows:6,status:`included`,dataset:`b1a9983a44278ad0ce12`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/17_sustainable_agricultural_land/source.csv`,sha256:`485a566e66613d39066675b25f73f74b07b7455078f70cb2de0e170b50a31d69`,rows:20,status:`included`,dataset:`c4e95cb56c613a1ed595`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/18_terrestrial_protected_areas/processed.csv`,sha256:`59c81ede709316ae6fae8f880e3e6151102d190e7b64113b5bb3232ef7550198`,rows:213,status:`included`,dataset:`e2268e4f8bfa7aa0146c`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/18_terrestrial_protected_areas/source.csv`,sha256:`dd292d5368222bb367a28b60abf8bb7a8ff79ead9b1eddb4f8a83c5d685107c0`,rows:2915,status:`included`,dataset:`d4bc07e12981402b6def`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/19_marine_protected_areas/processed.csv`,sha256:`6d6bff4413134854c72dbcff1e01088d769924e1efdc540d93456076b31c2ac5`,rows:174,status:`included`,dataset:`d66a58b63c516211b77e`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/19_marine_protected_areas/source.csv`,sha256:`d91176831e2429a8241d42c38b6d7f7dc05eafec3ff0f859f5e42edc96f073ab`,rows:2392,status:`included`,dataset:`44856bd836e19020eb8f`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/20_marine_kba_protected_coverage/processed.csv`,sha256:`ef896d8f59d6970a3c8af180be6d2460c2fbb4dfadb4ab016f106dcae04f6601`,rows:190,status:`included`,dataset:`307e62ec6f9e15ffd7c2`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/20_marine_kba_protected_coverage/source.csv`,sha256:`f5e2b5ad1be96c6604e92de7faa052b0e5f63c9f369af9268970d49907e27513`,rows:5356,status:`included`,dataset:`645ef5ee99753e4f8589`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/21_renewable_energy_share/processed.csv`,sha256:`09854ba001a924ce3d3dae6d50fdb17c6887fcefbc02b8913517bbb95834e6ed`,rows:84,status:`included`,dataset:`cabdced8011a489dc19c`},{archive:`05_maintenance_and_response.zip`,path:`05_maintenance_and_response/21_renewable_energy_share/source.csv`,sha256:`087ebaf0ace0fa40101728fe448d76ee2e294b491b5dcd386e2da32176c57191`,rows:8309,status:`included`,dataset:`9040a2b99635af369e3f`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/raw_xyz.csv`,sha256:`00c69aaf4267b8cac930a82137128edd1664c4a702ed7317b319ca68ef74ff2c`,rows:183,status:`duplicate`,dataset:`dfa8e5dceddea9cb6ceb`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_01_distribution.csv`,sha256:`d90408a936d5209bb3c906ea8dc13b5e647dd37ecf8394eb96a5a05107042d29`,rows:15,status:`duplicate`,dataset:`672f9f8cb1ec4016f4ca`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_02_rank_extremes.csv`,sha256:`a43670704b153445dbeb8143d7ff640f7589c68a92611ec56ff2fb4a5ec95ca2`,rows:60,status:`duplicate`,dataset:`4c882a273a43d5225ad5`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_03_association.csv`,sha256:`0861c81ec33e30eab36f30a5e4e867e0a843a7b3d053e70abe1a419ad5f73061`,rows:3,status:`duplicate`,dataset:`5f1104bfb26c827636c2`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/01_maintaining_systems/stat_04_synthesis.csv`,sha256:`4155bbc642b891eceef80be42e5f93eb6a5bab738a4f1067dce2ffae5eaf2fde`,rows:8,status:`duplicate`,dataset:`978ce0d655f4459460ac`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_01_xy_land_occupation_cultivation.csv`,sha256:`cf50c26d7af96556c35ccffa3a16028d795e6ec3f6bb1df9f69ae66cd0dab067`,rows:180,status:`duplicate`,dataset:`507312544760135b44da`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_02_xy_land_occupation_productivity.csv`,sha256:`fbd14fab392ececd20b7cd4f602b295825a9447549c0de8bff188faec8799902`,rows:180,status:`duplicate`,dataset:`08e23869f8da2e3e0258`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_03_xy_land_occupation_forest_change.csv`,sha256:`b0c36c95f6030df7d757dc3d00382f79924e5a4fc7a49de7dc5d6cba1ddd7346`,rows:180,status:`duplicate`,dataset:`b40aafe947033b712a2d`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/section02_main_04_xy_productivity_forest_change.csv`,sha256:`77131e196cb8cb91f9de983591641675353c32f41544fc1bf32ed3b9fbf65ef6`,rows:180,status:`duplicate`,dataset:`c888509d56b033a7395c`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_01_distribution.csv`,sha256:`6ae57425dbb07515f31b86a27c466a4726136d3111faa838a880af7ca0d7b0e5`,rows:20,status:`duplicate`,dataset:`0cedfaa18f63bc38a678`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_02_association.csv`,sha256:`68395d7031804750a1711ffc0a19be51a48ab3e3816f0886390443636cd8011e`,rows:6,status:`duplicate`,dataset:`94cdcfa48ce79f6650c3`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_03_forest_change_direction.csv`,sha256:`3ebdc4ef05c7f24b2a6dd0aaca3d5931b8cd9d9f3729938c8d5860f1e6ee8ad2`,rows:3,status:`duplicate`,dataset:`3c845d5799da2c56f1b0`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/02_land_transformation/stat_04_rank_extremes.csv`,sha256:`4cc782324a9d2b91de26dfe89ea15169b6c6c55247b54a687f968da0b7256a5e`,rows:40,status:`duplicate`,dataset:`83006f5a80eecedc1237`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_01_xy_extraction_material_use.csv`,sha256:`1a65afff9a0373ee6fa66f80465fc58a1d008579cc3ef7ad8af771bdce5845e0`,rows:166,status:`duplicate`,dataset:`3fb696dded750ba908fd`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_02_xyz_nutrient_chemical_input.csv`,sha256:`415b9cfb8a1b93ccc953ddbe246af83a31778b50df3139fc9d59be2dc791a797`,rows:166,status:`duplicate`,dataset:`6adee430170bd77152a0`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_03_xy_nutrient_input_balance.csv`,sha256:`6700d72b21718500c76d75f16f4dc361a44f3356cabb3b928092700fb076cab3`,rows:166,status:`duplicate`,dataset:`88f857abcd21575cb55f`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_04_xy_nutrient_chemical_pressure.csv`,sha256:`d53a1775577f667b2dae31e6a0e48629eba1262945a0e3848c1033f45a451bb6`,rows:166,status:`duplicate`,dataset:`0e9a56fee4a45b31d5b0`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/section03_main_07_xy_material_chemical_pressure.csv`,sha256:`a281f51bee7bf9f3518dee6ebb6e9c241e6121365fb328e45a9635ec32eb3d59`,rows:166,status:`duplicate`,dataset:`3e5d5de1fbf262706388`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_01_distribution.csv`,sha256:`692b200a7582d2a09cac1a9f8ef2091771534a3409a8662a63e82da0ccf2bac8`,rows:25,status:`duplicate`,dataset:`7f0848943c9639a05114`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_02_association.csv`,sha256:`13bdf32302be917d04e9faa07e1a9c74de737c74c026098ec6d211e16439bb38`,rows:10,status:`duplicate`,dataset:`15d1ccae717c36635b42`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_03_water_stress_classes.csv`,sha256:`ee6eb440b0829cfa2d5278647f75222ea8e1c2ecd7764ad21fbce5cd03223932`,rows:5,status:`duplicate`,dataset:`a3f9cbbe3254d516a6ed`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/03_resource_pressure/stat_04_rank_extremes.csv`,sha256:`26e8b8b6a3d2efd4f8a3d4e0b214b3a1087dac22be8a20db9bdd24fb6a5f588a`,rows:50,status:`duplicate`,dataset:`37013d1d2f95ffe064a7`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_01_xy_energy_dependence_co2_output.csv`,sha256:`e84576e4188d97d866c5b789d93e4312f513c878b25c0159012ceb82fe487791`,rows:120,status:`duplicate`,dataset:`410debc8efa8704a7c79`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_02_xy_co2_n2o_per_capita.csv`,sha256:`9be869d70083741465e6ff857c7b9a7e8288faa5e3368e62869b925b3ddeddad`,rows:120,status:`duplicate`,dataset:`4662f4da5d9370d783bf`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_03_xy_energy_dependence_n2o_output.csv`,sha256:`4649b721b083518e91a52d84411666b489a0b11439d68d91704697ba08f84f0c`,rows:120,status:`duplicate`,dataset:`1d6fb30337d9a1f2b7e5`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/section04_main_04_xy_energy_dependence_methane_total.csv`,sha256:`72efd414b8e7aa735c0a25c9b795f7a05dede86643190e2b6217fd9decdab098`,rows:120,status:`duplicate`,dataset:`f4dacfbfa5850d69447b`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_01_distribution.csv`,sha256:`a7dfc712896284fb5eb67c1b09da984934894e695c8b930cba9d825b71b4f25a`,rows:20,status:`duplicate`,dataset:`db1ae8da7dc5ec5ee73b`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_02_association.csv`,sha256:`a574463e8a3083f9074e558dd200c96ecdb00b971f923a4396891615e3869d4a`,rows:6,status:`duplicate`,dataset:`2bd85b67e15860d8a17c`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_03_fossil_dependence_classes.csv`,sha256:`faf09ba4ed1ec1b915bd8b42d87e57cff30543cf439675a4d9a736e2f8385cd2`,rows:4,status:`duplicate`,dataset:`76c75fc3490e95c3d0dc`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/04_atmospheric_pressure/stat_04_rank_extremes.csv`,sha256:`739cb0bdaa1aea05eb75aa2ba6d5fb7ac4e6c7c81d822c2a7ecc37682eb67e8d`,rows:40,status:`duplicate`,dataset:`9a51f705b04357d19c64`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_01_land_marine_kba_XYZ.csv`,sha256:`5e391c1c24e5eb617144b3a10e95cc6f0402f9268577ce0c827a0c2c2c33ff92`,rows:160,status:`included`,dataset:`0a5d960e3063f34dc855`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_02_land_renewable_XY.csv`,sha256:`9011e6cc992973c1547d53380b3acf5671963326e29a7e7d2a3fd4e747407246`,rows:160,status:`included`,dataset:`612323e1d9cbd2a3ce00`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_03_marine_renewable_XY.csv`,sha256:`675787df24d6164cada0d53c3dde1adf91e8d163ecf19bdb767d3a5f6c4f6353`,rows:160,status:`included`,dataset:`4276bac8f5d1cf72d4e8`},{archive:`final_csv_bundle.zip`,path:`final_csv_bundle/05_maintenance_and_response/OUTPUT_04_marine_kba_renewable_XY.csv`,sha256:`f455a1b14fead8bfc36701b34595217d5d4854aa2f1b8210af80145d83528750`,rows:160,status:`included`,dataset:`9007db6d66c870534308`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/final_reading_relations.csv`,sha256:`4369d999efa09e16f665f12ce8648edb7c898b5e2137f615de7012dacd005718`,rows:6,status:`included`,dataset:`4c2a500297a9291e0868`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/final_reading_summary.csv`,sha256:`25a82d29be37c02657dfd160134d91504c1df49ffbf2b23f43644f38fc86b33b`,rows:8,status:`included`,dataset:`5e3d1fb8e3c4b45f45af`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/01_maintaining_systems/red_points.csv`,sha256:`d5115d05e110b136a5766e2afec585653d276b93010a4c532fc917d134590644`,rows:1,status:`included`,dataset:`5c0e90d1f1972f29d920`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/final_reading_relations.csv`,sha256:`b5cf06d38912025bfd3f3dc756f4e93bd7e3b7e6e5b79cab1f630cdb2af7aceb`,rows:6,status:`included`,dataset:`9eaa9dcb4eb679f3b0c0`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/final_reading_summary.csv`,sha256:`bc47704239f186f7c43370e39258fdd43618b7b2f7a6ec29ee66b714a93f3e86`,rows:8,status:`included`,dataset:`83e98e0885a1a61bc671`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/02_land_transformation/red_points.csv`,sha256:`b955509b813b03d455422512795457ee33a50bc1c7e1503e8f813878c4365de6`,rows:3,status:`included`,dataset:`498411dc54a4cf4229f6`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/final_reading_relations.csv`,sha256:`0eeeb8e800afed4ce6c4e982915384bf8243b2e4dc6cd9bfe316b0c82cc042ad`,rows:10,status:`included`,dataset:`9db5142207e15201f49b`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/final_reading_summary.csv`,sha256:`c64135fb8d754163a53f10c97d0ca1bd9c4efb0c8ca0572045cb38e839d252ee`,rows:6,status:`included`,dataset:`6506e29360170bba4a1e`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/03_resource_pressure/red_points.csv`,sha256:`6fb09d54631d86039c95ec5be8cbfcba542c28c2e9c29d31092a78bd298a1a8c`,rows:1,status:`included`,dataset:`389b6135fa38cfe9e867`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/final_reading_relations.csv`,sha256:`9b4259f32917ffc5a9c9f164a4e51958539b606add7b1d814a1827be11fd11c0`,rows:6,status:`included`,dataset:`1e64290b233788604401`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/final_reading_summary.csv`,sha256:`9356dcbdb7a2fa78cfa69982c61c6049a8f33dc4eebc26d43d8296c9e7d054fe`,rows:4,status:`included`,dataset:`7bd69c8f17707c65de3f`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/04_atmospheric_pressure/red_points.csv`,sha256:`44b06877f5b50439bdb614de83127c11277021bad2ee4c75693fe78ce8458717`,rows:3,status:`included`,dataset:`3959ca1c4c17645c8743`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/final_reading_relations.csv`,sha256:`6cbbfaed37a8f3a53dcdb419401b577ee55dddfc7486e88752701f5cd13cf218`,rows:6,status:`included`,dataset:`e1da6643968c699276b8`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/final_reading_summary.csv`,sha256:`afea2d5e13bd5a01214716d23e8e05bc0000fa746d53870389ff8f941bb5e3ea`,rows:3,status:`included`,dataset:`08ba2d3ab7fcebc6f661`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/05_maintenance_and_response/red_points.csv`,sha256:`647754cffd88348d2d4831f8d95c9907a977d0fcdf4be17b9a01b2e5a4896997`,rows:1,status:`included`,dataset:`8231f1c1ebf03aca3673`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/ALL_final_reading_relations.csv`,sha256:`93f7ee40876500880ffb00a2c9089b440a682f4115b7ca5b11c146f50018872b`,rows:34,status:`union index; section files retained separately`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/ALL_final_reading_summary.csv`,sha256:`7561fe3a593a28fe202cfdcb132f607dc476734151412d0506805c43416be93e`,rows:29,status:`union index; section files retained separately`},{archive:`planetary_boundaries_redpoints_finalreading_bundle.zip`,path:`planetary_boundaries_redpoints_finalreading_bundle/ALL_red_points.csv`,sha256:`b6d6be2183ac5646522754d6d3d6c337bc6327616900644802223d2b1e695267`,rows:9,status:`union index; section files retained separately`}],archiveHashes:{"01_maintaining_systems.zip":`34b17b1bec8c076f398992e9de2e9aa183b8dc0c41f8425e24e092f1c7d85ecb`,"02_land_transformation.zip":`dd5f4ccdf518fb915e7515de7582af23c928eb82f11cbd33977d0d8577359677`,"03_resource_pressure.zip":`cbc6ecc6d285e80be93cfff92b31023e2573c237bba5afdf7d2d8e013957a637`,"04_atmospheric_pressure.zip":`2a32facd787472a8bb57283dc151181939bb71d1d6eb80fb2f3e352d1c311faf`,"05_maintenance_and_response.zip":`bb60bf6e4af72b2137c6de21a431742ac1bee816172c2060dd534d6715ea5890`,"final_csv_bundle.zip":`035561c830fd35296d5da093d4f64938b32cfcf41d578a8dd585575e3b28ad27`,"planetary_boundaries_redpoints_finalreading_bundle.zip":`f9125eceee4bf25b03a63c61a36ade7b5e6cb2857f83142e4a277fe879c7aee5`},counts:{csvFiles:133,uniqueDatasets:96,uniqueFileRows:257474}},Uc=new Map,Wc=e=>e==null||String(e).trim()===``||!Number.isFinite(Number(e))?null:Number(e);function Gc(e,t){let{columns:n,rows:r}=t,i=(e,t)=>e[n.indexOf(t)],a=[...new Set(r.map(e=>i(e,`iso`)))].sort(),o=new Map(a.map((e,t)=>[e,t])),s=r.map((t,n)=>{let r=i(t,`label`)??(e.kind===`history`?`${i(t,`Entity`)} / ${i(t,`Code`)||`REGION`} / ${i(t,`Year`)}`:i(t,`iso`)??i(t,`iso3`)??i(t,`metric`)??i(t,`node_a`)??`ROW ${n+2}`),a=i(t,`iso`)||i(t,`Code`)||i(t,`iso3`)||r.match(/\(([A-Z]{3})\)/)?.[1]||r.match(/^([A-Z]{3})\s*\//)?.[1]||i(t,`Entity`)||r,s=e.kind===`history`?i(t,`Entity`):a,c=null;(e.kind===`xyz`||e.kind===`xy`)&&(c=[Wc(i(t,`x`)),Wc(i(t,`y`)),e.kind===`xyz`?Wc(i(t,`z`)):null]),e.kind===`history`&&(c=[Wc(i(t,`Year`)),Wc(t[3]),null]),e.kind===`category`&&(c=[o.get(i(t,`iso`)),Wc(i(t,`value`)),null]);let l=c!==null&&c[0]!==null&&c[1]!==null&&(e.kind!==`xyz`||c[2]!==null);return{code:a,label:r,entity:s,xyz:c,plotted:l,raw:t,sourceRow:n+2}}),c=s.filter(e=>e.plotted),l=c.length>0&&c.every(({xyz:e})=>e.slice(1).every(e=>e===null||e>0));return{...e,records:s,observations:c,axes:e.axes,title:e.title,logAvailable:l,source:e.sources.map(({archive:e,path:t})=>`${e}/${t}`).join(`
`),omittedCount:s.length-c.length,entities:[...new Set(s.map(e=>e.entity))].sort()}}async function Kc(e,t=()=>{}){return t(`READING`),Uc.has(e.id)||Uc.set(e.id,fetch(`./${e.url.replace(/^\//,``)}`).then(async n=>{if(!n.ok)throw Error(`Cannot load ${e.title} (${n.status})`);let r=await n.text();return t(`PARSING`),Gc(e,JSON.parse(r))}).catch(t=>{throw Uc.delete(e.id),t})),Uc.get(e.id)}var qc=0,Jc=1,Yc=new G,Xc=new dc,Zc=new xr,Qc=new G,$c=new ln,el=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new il,this.unassigned=new il,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new rl(e[t]));this.compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(e){let n=e.geometry;if(n!==void 0){let r=n.attributes.position;if(r!==void 0)for(let n=0,i=r.count;n<i;n++){let i=new G;i.fromBufferAttribute(r,n).applyMatrix4(e.matrixWorld),t.push(i)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,r=t.length;n<r;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,r=-1/0,i=1/0;for(let t=0,a=n.length;t<a;t++){let a=n[t],o=a.distanceToPoint(e.origin),s=a.normal.dot(e.direction);if(o>0&&s>=0)return null;let c=s===0?0:-o/s;if(!(c<=0)&&(s>0?i=Math.min(c,i):r=Math.max(c,r),r>i))return null}return r===-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Yc)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(t.outside=e.next!==null&&e.next.face===t?e.next:null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){let n=this.removeAllVerticesFromFace(e);if(n!==void 0){if(t===void 0)this.unassigned.appendChain(n);else{let e=n;do{let n=e.next;t.distanceToPoint(e.point)>this.tolerance?this.addVertexToFace(e,t):this.unassigned.append(e),e=n}while(e!==null)}}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,r=this.tolerance,i=null;for(let n=0;n<e.length;n++){let a=e[n];if(a.mark===qc){let e=a.distanceToPoint(t.point);if(e>r&&(r=e,i=a),r>1e3*this.tolerance)break}}i!==null&&this.addVertexToFace(t,i),t=n}while(t!==null)}return this}computeExtremes(){let e=new G,t=new G,n=[],r=[];for(let e=0;e<3;e++)n[e]=r[e]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let i=0,a=this.vertices.length;i<a;i++){let a=this.vertices[i],o=a.point;for(let t=0;t<3;t++)o.getComponent(t)<e.getComponent(t)&&(e.setComponent(t,o.getComponent(t)),n[t]=a);for(let e=0;e<3;e++)o.getComponent(e)>t.getComponent(e)&&(t.setComponent(e,o.getComponent(e)),r[e]=a)}return this.tolerance=3*2**-52*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:r}}computeInitialHull(){let e=this.vertices,t=this.computeExtremes(),n=t.min,r=t.max,i=0,a=0;for(let e=0;e<3;e++){let t=r[e].point.getComponent(e)-n[e].point.getComponent(e);t>i&&(i=t,a=e)}let o=n[a],s=r[a],c,l;i=0,Xc.set(o.point,s.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s){Xc.closestPointToPoint(n.point,!0,Qc);let e=Qc.distanceToSquared(n.point);e>i&&(i=e,c=n)}}i=-1,Zc.setFromCoplanarPoints(o.point,s.point,c.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c){let e=Math.abs(Zc.distanceToPoint(n.point));e>i&&(i=e,l=n)}}let u=[];if(Zc.distanceToPoint(l.point)<0){u.push(tl.create(o,s,c),tl.create(l,s,o),tl.create(l,c,s),tl.create(l,o,c));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge(t)),u[e+1].getEdge(1).setTwin(u[t+1].getEdge(0))}}else{u.push(tl.create(o,c,s),tl.create(l,o,s),tl.create(l,s,c),tl.create(l,c,o));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge((3-e)%3)),u[e+1].getEdge(0).setTwin(u[t+1].getEdge(1))}}for(let e=0;e<4;e++)this.faces.push(u[e]);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c&&n!==l){i=this.tolerance;let e=null;for(let t=0;t<4;t++){let r=this.faces[t].distanceToPoint(n.point);r>i&&(i=r,e=this.faces[t])}e!==null&&this.addVertexToFace(n,e)}}return this}reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===qc&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,r=n.outside;do{let i=n.distanceToPoint(r.point);i>t&&(t=i,e=r),r=r.next}while(r!==null&&r.face===n);return e}}computeHorizon(e,t,n,r){this.deleteFaceVertices(n),n.mark=Jc;let i;i=t===null?t=n.getEdge(0):t.next;do{let t=i.twin,n=t.face;n.mark===qc&&(n.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,t,n,r):r.push(i)),i=i.next}while(i!==t);return this}addAdjoiningFace(e,t){let n=tl.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,r=null;for(let i=0;i<t.length;i++){let a=t[i],o=this.addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(r),this.newFaces.push(o.face),r=o}return n.next.setTwin(r),this}addVertexToHull(e){let t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}},tl=class e{constructor(){this.normal=new G,this.midpoint=new G,this.area=0,this.constant=0,this.outside=null,this.mark=qc,this.edge=null}static create(t,n,r){let i=new e,a=new nl(t,i),o=new nl(n,i),s=new nl(r,i);return a.next=s.prev=o,o.next=a.prev=s,s.next=o.prev=a,i.edge=a,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return $c.set(e.point,t.point,n.point),$c.getNormal(this.normal),$c.getMidpoint(this.midpoint),this.area=$c.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},nl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceTo(e.point)}lengthSquared(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceToSquared(e.point)}setTwin(e){return this.twin=e,e.twin=this,this}},rl=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},il=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}},al=class extends Mn{constructor(e=[]){super();let t=[],n=[],r=new el().setFromPoints(e).faces;for(let e=0;e<r.length;e++){let i=r[e],a=i.edge;do{let e=a.head().point;t.push(e.x,e.y,e.z),n.push(i.normal.x,i.normal.y,i.normal.z),a=a.next}while(a!==i.edge)}this.setAttribute(`position`,new wn(t,3)),this.setAttribute(`normal`,new wn(n,3))}};function ol(e,t=`linear`,n=e){if(![`linear`,`log`].includes(t))throw Error(`Unknown climate axis mode`);let r=e.map(({xyz:e})=>e.map((e,n)=>{if(e===null)return null;if(!Number.isFinite(e))throw Error(`Invalid analysis observation`);return t===`log`&&n>0?Math.log10(e):e}));if(r.some(e=>e.some(e=>e!==null&&!Number.isFinite(e))))throw Error(`Log axes require positive values`);let i=[0,1,2].map(e=>{let r=n.map(({xyz:t})=>t[e]).filter(e=>e!==null).map(n=>t===`log`&&e>0?Math.log10(n):n);return r.length?[Math.min(...r),Math.max(...r)]:[0,0]}),a=[8,6,8];return{mode:t,ranges:i,extent:a,positions:r.map(e=>e.map((e,t)=>{let[n,r]=i[t];return e===null||r===n?0:((e-n)/(r-n||1)-.5)*a[t]}))}}function sl(e,t,n,r){let i=`CLIMATE`,a=null,o=0,s=!1,c=window.matchMedia(`(prefers-reduced-motion: reduce)`),l=performance.now(),u=null,d=new So;d.position.fromArray(t).multiplyScalar(3.5),d.scale.setScalar(.36),n.add(d);let f=new sr({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:0},pixelRatio:{value:1},selected:{value:-1},hovered:{value:-1},overview:{value:0},projection:{value:1},observationCount:{value:e.observations.length},clock:{value:0},idle:{value:0}},vertexShader:`
      attribute float observationIndex;
      uniform float pixelRatio;
      uniform float selected;
      uniform float hovered;
      uniform float overview;
      uniform float projection;
      uniform float observationCount;
      uniform float clock;
      uniform float idle;
      varying float reveal;
      varying float scan;
      varying float hoverLight;
      varying float selectedPoint;
      varying float depthLight;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        selectedPoint = abs(observationIndex - selected) < 0.1 ? 1.0 : 0.0;
        float order = observationIndex / max(1.0, observationCount - 1.0);
        reveal = max(selectedPoint, smoothstep(order * 0.72, order * 0.72 + 0.28, projection));
        float cycle = mod(clock, 8.0);
        float scanned = mod(floor(clock / 8.0) * 17.0, max(1.0, observationCount));
        scan = idle * (abs(observationIndex - scanned) < 0.1 ? 1.0 : 0.0) * sin(clamp(cycle / 1.2, 0.0, 1.0) * 3.14159265);
        depthLight = clamp(16.0 / max(1.0, -view.z), 0.4, 1.0);
        float hoverPoint = abs(observationIndex - hovered) < 0.1 ? 1.0 : 0.0;
        hoverLight = hoverPoint;
        float detailSize = clamp(70.0 / max(1.0, -view.z), 3.8, 5.4) + selectedPoint * 2.4 + hoverPoint * 1.4;
        float overviewSize = clamp(46.0 / max(1.0, -view.z), 2.8, 4.2);
        gl_PointSize = mix(detailSize, overviewSize, overview) * pixelRatio * mix(0.9, 1.0, reveal);
        gl_Position = projectionMatrix * view;
      }`,fragmentShader:`
      uniform float opacity;
      uniform float overview;
      varying float selectedPoint;
      varying float depthLight;
      varying float reveal;
      varying float scan;
      varying float hoverLight;
      void main() {
        float radius = length(gl_PointCoord - vec2(0.5)) * 2.0;
        if (radius > 1.0) discard;
        float disc = 1.0 - smoothstep(0.48, 1.0, radius);
        // Keep source observations in the same warm white language as the
        // atlas nodes; reserve color for the selected signal and axis guide.
        vec3 color = mix(vec3(0.93, 0.92, 0.88), vec3(0.78, 0.80, 0.79), overview);
        color = mix(color, vec3(1.0, 0.30, 0.23), selectedPoint);
        color = mix(color, vec3(1.0), max(scan * 0.35, hoverLight * 0.3));
        gl_FragColor = vec4(color * 1.12, disc * depthLight * opacity * reveal);
      }`}),p=new _s(new Mn,f);d.add(p);let m=new G(-4,-3,-4),h=[new G(-2.4,-3,-4),new G(-4,-1.4,-4),new G(-4,-3,-2.4)],g=new us(new Mn().setFromPoints(h.flatMap(e=>[m,e])),new ts({color:7246488,transparent:!0,opacity:.55,depthWrite:!1}));g.visible=!1,d.add(g);let _=new So;d.add(_);let v,y=!1,b=-1,x=!1,S=0,C=null,w=Array.from({length:7},()=>{let e=document.createElement(`div`);return e.className=`country-label`,e.hidden=!0,r.append(e),e}),T=document.createElement(`div`);T.className=`climate-field-label`,T.append(document.createElement(`strong`),document.createElement(`span`)),T.hidden=!0,r.append(T);let E=[`X`,`Y`,`Z`].map((t,n)=>{let i=document.createElement(`div`);return i.className=`climate-axis-label`,i.textContent=t,i.title=e.axes[n],i.hidden=!0,r.append(i),i});function D(t){o++,a=null,v=ol(e.observations,t,e.domainObservations),p.geometry.dispose(),p.geometry=new Mn,p.geometry.setAttribute(`position`,new wn(v.positions.flat(),3)),p.geometry.setAttribute(`observationIndex`,new wn(e.observations.map((e,t)=>t),1));for(let e of[..._.children])e.geometry.dispose(),e.material.dispose(),_.remove(e);let n=v.positions.map(e=>new G(...e)),r=n[0],c=r&&n.find(e=>e.distanceToSquared(r)>1e-10),l=c&&c.clone().sub(r),u=l&&n.find(e=>l.clone().cross(e.clone().sub(r)).lengthSq()>1e-10),d=u&&l.clone().cross(u.clone().sub(r));if(s=!!(d&&n.some(e=>Math.abs(d.dot(e.clone().sub(r)))>1e-8)),s){let e=new al(n),t=new Xn(e,new vn({color:10135984,transparent:!0,opacity:.025,depthWrite:!1,side:2})),r=new us(new ws(e,1),new ts({color:10924729,transparent:!0,opacity:.13,depthWrite:!1}));_.add(t,r)}_.visible=y&&x&&s,T.children[0].textContent=`${i} / LOCAL ANALYSIS`,T.children[1].textContent=`${e.observations.length.toLocaleString(`en`)} OBSERVATIONS`;let f=e.axes.length===3?-4:0;m.set(-4,-3,f),h[0].set(-2.4,-3,f),h[1].set(-4,-1.4,f),h[2].set(-4,-3,f+1.6),g.geometry.dispose(),g.geometry=new Mn().setFromPoints(h.slice(0,e.axes.length).flatMap(e=>[m,e]))}D(e.defaultMode??`log`);function O(e){return d.localToWorld(new G(...v.positions[e]))}function k(t,n,r){t.updateMatrixWorld(),d.updateMatrixWorld();let i=`${o}/${n}/${r}/${t.matrixWorld.elements}/${t.projectionMatrix.elements}/${d.matrixWorld.elements}`;if(a?.key===i)return a.points;let s=e.observations.map((e,i)=>{let a=O(i),o=-a.clone().applyMatrix4(t.matrixWorldInverse).z,s=a.project(t);return{index:i,code:e.code,x:(s.x+1)*n/2,y:(1-s.y)*r/2,depth:o,visible:o>t.near&&s.z<1&&Math.abs(s.x)<1&&Math.abs(s.y)<1}});return a={key:i,points:s},s}return{root:d,setMode:D,worldPosition:O,projected:k,overview:!1,get data(){return e},get canSurface(){return s},setData(t,n,r){b=-1,f.uniforms.selected.value=-1,f.uniforms.hovered.value=-1,S=0,l=performance.now(),u=null,f.uniforms.projection.value=+!!c.matches,f.uniforms.observationCount.value=t.observations.length,e=t,i=r,d.position.fromArray(n).multiplyScalar(3.5),E.forEach((t,n)=>{t.title=e.axes[n]??``}),D(e.defaultMode??`linear`)},get active(){return y},get mode(){return v.mode},get selectedIndex(){return b},get positions(){return v.positions},get projectionProgress(){return f.uniforms.projection.value},fadeOut(){u=performance.now(),_.visible=!1,this.select(-1)},activate(e){y=e,_.visible=y&&x&&s,g.visible=y,e||this.select(-1)},select(e){b=e,f.uniforms.selected.value=e},hover(e){f.uniforms.hovered.value=e},setSurface(e){x=e,_.visible=y&&x&&s},pick(t,n,r,i,a){return!y||S<.2||u!==null?null:k(r,i,a).filter(r=>r.visible&&f.uniforms.projection.value>=r.index/Math.max(1,e.observations.length-1)*.72+.28&&Math.hypot(t-r.x,n-r.y)<8).sort((e,r)=>Math.hypot(t-e.x,n-e.y)-Math.hypot(t-r.x,n-r.y))[0]??null},update(n,r,i,a,o,s){g.visible=y&&!this.overview&&u===null;let p=Math.min(.1,(n-(C??n))/1e3);if(C=n,S=c.matches?y?1:.025:Ce.damp(S,y?1:.025,8,p),f.uniforms.opacity.value=S*(u===null?1:c.matches?0:Math.max(0,1-(n-u)/120)),f.uniforms.projection.value=c.matches?1:Math.min(1,Math.max(0,(n-l)/280)),f.uniforms.clock.value=n/1e3+t[0]*2+t[1]*3,f.uniforms.idle.value=this.overview&&!c.matches?1:0,f.uniforms.pixelRatio.value=o,f.uniforms.overview.value=+!!this.overview,w.forEach(e=>{e.hidden=!0}),E.forEach(e=>{e.hidden=!0}),T.hidden=!0,!y||S<.6||this.overview||u!==null)return;r.updateMatrixWorld(),d.updateMatrixWorld();let m=e=>{let t=d.localToWorld(e.clone()).project(r);return{x:(t.x+1)*i/2,y:(1-t.y)*a/2,visible:t.z>-1&&t.z<1}},_=[];h.forEach((t,n)=>{if(n>=e.axes.length)return;let r=m(t),i=E[n];!r.visible||r.x<15||r.x>s-105||r.y<120||r.y>a-105||(i.style.left=`${r.x+7}px`,i.style.top=`${r.y-4}px`,i.hidden=!1,_.push({x:r.x+7,y:r.y-4,w:16,h:14}))});let v=k(r,i,a).filter(t=>t.visible&&(t.index===b||f.uniforms.projection.value>=t.index/Math.max(1,e.observations.length-1)*.72+.28));if(v.length){let e=Math.min(...v.map(e=>e.x)),t=Math.min(...v.map(e=>e.y)),n=Math.max(30,Math.min(s-132,e-12)),r=Math.max(125,t-46);T.style.left=`${n}px`,T.style.top=`${r}px`,T.hidden=!1,_.push({x:n,y:r,w:132,h:26})}let x=Math.max(1,Math.ceil(v.length/250)),D=v.filter((e,t)=>(t%x===0||e.index===b)&&e.x>30&&e.x<s-55&&e.y>140&&e.y<a-150);D.sort((e,t)=>e.index===b?-1:t.index===b?1:e.depth-t.depth);let O=[];for(let e of D){if(O.length>=w.length)break;if(O.some(t=>Math.abs(e.x-t.x)<85&&Math.abs(e.y-t.y)<32)||_.some(t=>e.x+8<t.x+t.w+5&&e.x+36>t.x-5&&e.y-5<t.y+t.h+5&&e.y+7>t.y-5))continue;let t=w[O.length];t.textContent=e.code,t.style.left=`${e.x+8}px`,t.style.top=`${e.y-5}px`,t.classList.toggle(`active`,e.index===b),t.hidden=!1,O.push(e)}}}}var cl=e=>typeof e==`number`&&Number.isFinite(e),ll=(e,t,n)=>Math.max(t,Math.min(n,e));function ul(e){if(e.data_status!==`verified_numeric`)return null;let{baseline:t,boundary:n,high_risk:r,current:i,direction:a}=e;if(![t,n,r,i].every(cl))throw Error(`${e.id}: missing numeric input`);if(![`higher_is_worse`,`lower_is_worse`].includes(a))throw Error(`${e.id}: unknown risk direction`);if(a===`lower_is_worse`){if(!(t>n&&n>r))throw Error(`${e.id}: invalid thresholds`);return i>=n?ll((t-i)/(t-n),0,1):i>=r?1+ll((n-i)/(n-r),0,1):2+Math.max(0,(r-i)/(n-r))}if(!(t<n&&n<r))throw Error(`${e.id}: invalid thresholds`);return i<=n?ll((i-t)/(n-t),0,1):i<=r?1+ll((i-n)/(r-n),0,1):2+Math.max(0,(i-r)/(r-n))}function dl(e){if(!Array.isArray(e.chapters)||e.chapters.length!==9)throw Error(`Expected 9 boundary groups`);let t=new Set,n=new Set;return e.chapters.slice().sort((e,t)=>e.order-t.order).map(e=>{if(t.has(e.id)||n.has(e.order))throw Error(`Duplicate group`);if(t.add(e.id),n.add(e.order),!Array.isArray(e.variables)||!e.variables.length)throw Error(`Missing variables`);let r=new Set;return{id:e.id,order:e.order,name:e.title_en,nameKo:e.title_ko,controls:e.variables.map(t=>{if(r.has(t.id))throw Error(`Duplicate control`);if(r.add(t.id),![`verified_numeric`,`verified_qualitative`,`unresolved_boundary`].includes(t.data_status))throw Error(`${t.id}: unsupported status`);return{id:t.id,groupId:e.id,raw:{...t},r:ul(t),state:t.data_status===`verified_numeric`?`QUANTITATIVE`:t.data_status===`verified_qualitative`?`QUALITATIVE / NOT QUANTIFIED`:`NOT QUANTIFIED`}})}})}var fl=[`climate-change`,`biosphere-integrity`,`land-system-change`,`freshwater-change`,`biogeochemical-flows`,`ocean-acidification`,`atmospheric-aerosol-loading`,`stratospheric-ozone-depletion`,`novel-entities`],pl=Math.PI/60,ml=1e-10,hl=2e-7;function gl(e){let t=fl.indexOf(e);if(t<0)throw Error(`Unknown group: ${e}`);let n=1-2*(t+.5)/fl.length,r=t*Math.PI*(3-Math.sqrt(5)),i=Math.sqrt(1-n*n);return new G(i*Math.sin(r),n,i*Math.cos(r)).normalize()}function _l(e){return{theta:(Math.atan2(e.x,e.z)+2*Math.PI)%(2*Math.PI),phi:Math.acos(Math.max(-1,Math.min(1,e.y)))}}function vl(e,t,n=ml){if(t===null&&e===null)return{status:`NOT QUANTIFIED`,length:null,error:null,tolerance:null};if(typeof t!=`number`||!Number.isFinite(t)||t<0||!Array.isArray(e)||e.length!==3||!e.every(Number.isFinite))return{status:`FAIL`,length:null,error:null,tolerance:null};let r=Math.hypot(...e),i=Math.abs(r-t),a=n*Math.max(1,Math.abs(t));return{status:i<=a?`PASS`:`FAIL`,length:r,error:i,tolerance:a}}function yl(e){return e.map(e=>{let t=gl(e.id),n=new G().crossVectors(new G(0,1,0),t).normalize();if(e.controls.length>2)throw Error(`A new group layout policy is needed for >2 controls`);return{...e,direction:t.toArray(),..._l(t),controls:e.controls.map((r,i)=>{let a=e.controls.length===2?i===0?-pl:pl:0,o=t.clone().multiplyScalar(Math.cos(a)).addScaledVector(n,Math.sin(a)).normalize(),s=r.r===null?null:o.clone().multiplyScalar(r.r).toArray();return{...r,offset:a,direction:o.toArray(),..._l(o),position:s,validation:vl(s,r.r)}})}})}var bl=.25;function xl(e){if(e&&typeof e==`object`&&!Object.isFrozen(e)){for(let t of Object.values(e))xl(t);Object.freeze(e)}return e}function Sl(e){let t=new G(...e);if(!Number.isFinite(t.length())||t.length()<1e-12)throw Error(`Reference axis must be nonzero and finite`);t.normalize();let n=(Math.abs(t.y)>.99?new G(1,0,0):new G(0,1,0)).cross(t).normalize(),r=t.clone().cross(n).normalize();return{x:n.toArray(),y:r.toArray(),z:t.toArray(),origin:[0,0,0]}}function Cl(e,t,n,r,i=bl,a=240){let o=t*(n===1?16:n===2?r:1);return Ce.clamp(e*Math.exp(Ce.clamp(-16e-5*o,-50,50)),i,a)}function wl(e,t,n,r){let i=new G(...e),a=i.clone().applyMatrix4(t.matrixWorldInverse),o=-a.z,s=o>=t.near&&o<=t.far,c=o>1e-12?i.clone().project(t):null,l=c?[(c.x+1)*n/2,(1-c.y)*r/2]:null;return{cameraLocal:a.toArray(),depth:o,screen:l,inDepth:s,inFrustum:!!c&&s&&Math.abs(c.x)<=1&&Math.abs(c.y)<=1}}function Tl({points:e,camera:t,target:n,axis:r,width:i,height:a,overlapPixels:o=10}){t.updateMatrixWorld(!0);let s=Sl(r),c=wl([0,0,0],t,i,a),l=e.map(e=>{if(e.position===null)return{id:e.id,status:`NOT QUANTIFIED`,projection:null,bearing:null,elevation:null,axisCoordinates:null,axisAngle:null,screenOriginDistance:null,overlapIds:[]};let n=new G(...e.position),r=wl(e.position,t,i,a),[o,l,u]=r.cameraLocal,d=Math.hypot(o,u),f=Math.hypot(o,l,u),p=[s.x,s.y,s.z].map(e=>n.dot(new G(...e)));return{id:e.id,status:`QUANTITATIVE`,projection:r,bearing:d<1e-12?null:Ce.radToDeg(Math.atan2(o,-u)),elevation:f<1e-12?null:Ce.radToDeg(Math.atan2(l,d)),axisCoordinates:p,axisAngle:n.length()<1e-12?null:Ce.radToDeg(n.angleTo(new G(...s.z))),screenOriginDistance:r.inDepth&&c.inDepth?Math.hypot(r.screen[0]-c.screen[0],r.screen[1]-c.screen[1]):null,overlapIds:[]}});for(let e=0;e<l.length;e++)for(let t=e+1;t<l.length;t++){let n=l[e],r=l[t];n.projection?.inFrustum&&r.projection?.inFrustum&&Math.hypot(n.projection.screen[0]-r.projection.screen[0],n.projection.screen[1]-r.projection.screen[1])<o&&(n.overlapIds.push(r.id),r.overlapIds.push(n.id))}return{camera:{position:t.position.toArray(),target:n.toArray(),quaternion:t.quaternion.toArray(),forward:t.getWorldDirection(new G).toArray(),fov:t.fov,near:t.near,far:t.far,aspect:t.aspect,observationDistance:t.position.distanceTo(n)},viewport:{width:i,height:a,units:`CSS pixels`},projectionPlane:`camera image plane`,overlapPixels:o,basis:s,originProjection:c,points:l}}var El={"01":`FOREST / FRESHWATER / RED LIST INDEX`,"02":`LAND TRANSFORMATION`,"03":`RESOURCE PRESSURE`,"04":`ATMOSPHERIC PRESSURE`,"05":`MAINTENANCE & RESPONSE`},Dl={"672f9f8cb1ec4016f4ca":`INDICATOR DISTRIBUTIONS`,"4c882a273a43d5225ad5":`INDICATOR RANK EXTREMES`,"5f1104bfb26c827636c2":`INDICATOR ASSOCIATIONS`,"978ce0d655f4459460ac":`FOREST / FRESHWATER / RLI SYNTHESIS`,"0cedfaa18f63bc38a678":`INDICATOR DISTRIBUTIONS`,"94cdcfa48ce79f6650c3":`INDICATOR ASSOCIATIONS`,"3c845d5799da2c56f1b0":`FOREST CHANGE DIRECTION`,"83006f5a80eecedc1237":`INDICATOR RANK EXTREMES`,"7f0848943c9639a05114":`INDICATOR DISTRIBUTIONS`,"15d1ccae717c36635b42":`INDICATOR ASSOCIATIONS`,a3f9cbbe3254d516a6ed:`WATER STRESS CLASSES`,"37013d1d2f95ffe064a7":`INDICATOR RANK EXTREMES`,db1ae8da7dc5ec5ee73b:`INDICATOR DISTRIBUTIONS`,"2bd85b67e15860d8a17c":`INDICATOR ASSOCIATIONS`,"76c75fc3490e95c3d0dc":`FOSSIL ELECTRICITY CLASSES`,"9a51f705b04357d19c64":`INDICATOR RANK EXTREMES`};function Ol(e){let t=e.match(/^(.*?)\s*\(([^()]*)\)$/);return t?{name:t[1],unit:t[2]}:{name:e,unit:``}}var kl={xy:`XY`,xyz:`XYZ`,category:`ENTITY / VALUE`,history:`TIME SERIES`,records:`SOURCE RECORDS`},Al={analysis:`MULTIVARIATE ANALYSIS`,processed:`INDICATORS`,history:`TIME SERIES`,statistics:`STATISTICS`,"red-points":`SOURCE SELECTIONS`,relations:`ASSOCIATIONS`,summary:`SUMMARIES`};function jl(e){let t=e.sources.map(e=>e.path.match(/(?:^|\/)(0[1-5])_[^/]+\//)?.[1]).find(Boolean);if(!t)throw Error(`Missing source chapter: ${e.id}`);let n;return n=e.axes.length?e.axes.filter(e=>e!==`Year`&&e!==`Entity (categorical layout)`).map(e=>Ol(e).name.replace(/CO2/g,`CO₂`).replace(/N2O/g,`N₂O`).replace(/CH4/g,`CH₄`).toUpperCase()).join(` × `):Dl[e.id]?`${El[t]} / ${Dl[e.id]}`:`${El[t]} / ${Al[e.role]}`,{name:`${t} / ${n}`,format:kl[e.kind],role:Al[e.role],chapter:t}}var Ml=null;function Nl(e){let t=document.createElement(`div`);t.className=`select-control`,e.parentNode.insertBefore(t,e),t.append(e),e.classList.add(`select-native`),e.tabIndex=-1,e.setAttribute(`aria-hidden`,`true`);let n=document.createElement(`button`);n.type=`button`,n.id=`${e.id}-trigger`,n.className=`select-trigger`,n.setAttribute(`role`,`combobox`),n.setAttribute(`aria-haspopup`,`listbox`),n.setAttribute(`aria-expanded`,`false`),n.setAttribute(`aria-autocomplete`,`none`),n.setAttribute(`aria-label`,e.getAttribute(`aria-label`)||e.id);let r=document.createElement(`span`);n.append(r),t.append(n);let i=document.createElement(`div`);i.id=`${e.id}-listbox`,i.className=`select-menu`,i.setAttribute(`role`,`listbox`),i.setAttribute(`aria-label`,n.getAttribute(`aria-label`)),i.hidden=!0,document.body.append(i),n.setAttribute(`aria-controls`,i.id);let a=-1,o=``,s=0,c=()=>[...e.options].map((e,t)=>({option:e,index:t})).filter(({option:e})=>!e.disabled&&!e.parentElement.disabled);function l(){let e=n.getBoundingClientRect(),t=innerHeight-e.bottom-12,r=e.top-12,a=t<240&&r>t,o=Math.max(48,Math.min(260,a?r:t)),s=Math.min(innerWidth-24,e.width);i.style.width=`${s}px`,i.style.maxHeight=`${o}px`,i.style.left=`${Math.max(12,Math.min(e.left,innerWidth-s-12))}px`,i.style.top=a?`auto`:`${e.bottom+5}px`,i.style.bottom=a?`${innerHeight-e.top+5}px`:`auto`}function u(e){a=e;for(let t of i.querySelectorAll(`[role="option"]`))t.classList.toggle(`active`,Number(t.dataset.index)===e);let t=i.querySelector(`[data-index="${e}"]`);t&&(n.setAttribute(`aria-activedescendant`,t.id),t.scrollIntoView({block:`nearest`}))}function d(){r.textContent=e.selectedOptions[0]?.textContent||`NO DATA AVAILABLE`,n.title=r.textContent,n.disabled=e.disabled,i.replaceChildren();let t=null;[...e.options].forEach((n,r)=>{let a=n.parentElement.tagName===`OPTGROUP`?n.parentElement.label:null;if(a&&a!==t){let e=document.createElement(`div`);e.className=`select-group`,e.textContent=a,i.append(e)}t=a;let o=document.createElement(`div`);o.className=`select-option`,o.id=`${e.id}-option-${r}`,o.dataset.index=r,o.setAttribute(`role`,`option`),o.setAttribute(`aria-selected`,String(n.selected)),o.setAttribute(`aria-disabled`,String(n.disabled||!!n.parentElement.disabled));let s=document.createElement(`span`);if(s.textContent=n.textContent,o.append(s),n.dataset.meta){let e=document.createElement(`small`);e.textContent=n.dataset.meta,o.append(e)}o.addEventListener(`pointermove`,()=>{o.getAttribute(`aria-disabled`)!==`true`&&u(r)}),o.addEventListener(`pointerdown`,e=>e.preventDefault()),o.addEventListener(`click`,()=>m(r)),i.append(o)}),e.disabled?f():i.hidden||(l(),u(c().some(({index:e})=>e===a)?a:e.selectedIndex))}function f(){i.hidden=!0,n.setAttribute(`aria-expanded`,`false`),n.removeAttribute(`aria-activedescendant`),Ml?.trigger===n&&(Ml=null)}function p(){e.disabled||(Ml?.close(),Ml={trigger:n,menu:i,close:f},d(),i.hidden=!1,l(),n.setAttribute(`aria-expanded`,`true`),u(e.selectedIndex))}function m(t){if(!c().some(e=>e.index===t))return;let r=e.selectedIndex!==t;e.selectedIndex=t,f(),d(),n.focus(),r&&(e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0})))}return n.addEventListener(`click`,()=>i.hidden?p():f()),n.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&!i.hidden)e.preventDefault(),e.stopPropagation(),f();else if(e.key===`Tab`)f();else if([`ArrowDown`,`ArrowUp`,`Home`,`End`,`Enter`,` `].includes(e.key)){if(e.preventDefault(),i.hidden){p();return}if(e.key===`Enter`||e.key===` `){m(a);return}let t=c(),n=t.findIndex(({index:e})=>e===a),r=e.key===`Home`?0:e.key===`End`?t.length-1:Math.max(0,Math.min(t.length-1,n+(e.key===`ArrowDown`?1:-1)));t[r]&&u(t[r].index)}else if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),i.hidden&&p(),o=performance.now()-s>700?e.key:o+e.key,s=performance.now();let t=c().find(({option:e})=>e.textContent.toLowerCase().startsWith(o.toLowerCase()));t&&u(t.index)}}),e.addEventListener(`change`,d),new MutationObserver(d).observe(e,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),document.addEventListener(`pointerdown`,e=>{!t.contains(e.target)&&!i.contains(e.target)&&f()}),window.addEventListener(`resize`,f),window.addEventListener(`blur`,f),d(),{sync:d,close:f}}function Pl(){Ml?.close()}var Fl={sources:[{id:`665957`,author:`newlocknew`,license:`see bundled attribution`,url:`https://freesound.org/people/newlocknew/sounds/665957/`,file:`/audio/source/665957.wav`,used:!0,sha256:`f171ec4cdcf04d442aa5634848137748c49da0221233b12c76e73a640ed5e71d`},{id:`511418`,author:`Sky_Motion`,license:`CC0-1.0`,url:`https://freesound.org/people/Sky_Motion/sounds/511418/`,file:`/audio/source/511418.wav`,used:!0,sha256:`45e226657215fe7829fd249106d4383fa4b2254bcdcafcf0af03224c68cabc1b`},{id:`860912`,author:`AirwaveXV`,license:`CC0-1.0`,url:`https://freesound.org/people/AirwaveXV/sounds/860912/`,file:`/audio/source/860912.wav`,used:!0,sha256:`f6fb792231f3bb0b769d1a1958cacd7a379ae0154b25172d8b3f27b558e17606`}],samples:[{id:`flow-01`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-01.wav`,start:.35,end:1.45,duration:1.1,source:`665957`,gain:5.97316,fadeIn:.055,fadeOut:.14},{id:`flow-02`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-02.wav`,start:2.4,end:3.55,duration:1.15,source:`665957`,gain:5.75089,fadeIn:.055,fadeOut:.14},{id:`flow-03`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-03.wav`,start:4.8,end:5.7,duration:.9,source:`665957`,gain:5.48156,fadeIn:.055,fadeOut:.14},{id:`flow-04`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-04.wav`,start:7.1,end:8.5,duration:1.4,source:`665957`,gain:5.92737,fadeIn:.055,fadeOut:.14},{id:`flow-05`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-05.wav`,start:10,end:11.25,duration:1.25,source:`665957`,gain:5.91167,fadeIn:.055,fadeOut:.14},{id:`flow-06`,family:`flow`,kind:`data-stream`,file:`/audio/signals/flow-06.wav`,start:13.2,end:14.45,duration:1.25,source:`665957`,gain:6,fadeIn:.055,fadeOut:.14},{id:`detail-01`,family:`detail`,kind:`data-stream`,file:`/audio/signals/detail-01.wav`,start:.05,end:.65,duration:.6,source:`511418`,gain:5.77715,fadeIn:.055,fadeOut:.14},{id:`detail-02`,family:`detail`,kind:`data-stream`,file:`/audio/signals/detail-02.wav`,start:.45,end:1.15,duration:.6999791666666667,source:`511418`,gain:4.89561,fadeIn:.055,fadeOut:.14},{id:`detail-03`,family:`detail`,kind:`data-stream`,file:`/audio/signals/detail-03.wav`,start:1,end:1.7,duration:.7,source:`511418`,gain:4.90686,fadeIn:.055,fadeOut:.14},{id:`detail-04`,family:`detail`,kind:`data-stream`,file:`/audio/signals/detail-04.wav`,start:1.55,end:2.25,duration:.7,source:`511418`,gain:4.89806,fadeIn:.055,fadeOut:.14},{id:`micro-01`,family:`micro`,kind:`micro-scan`,file:`/audio/signals/micro-01.wav`,start:.88,end:1.08,duration:.2,source:`860912`,gain:.47556,fadeIn:.004,fadeOut:.012},{id:`micro-02`,family:`micro`,kind:`micro-scan`,file:`/audio/signals/micro-02.wav`,start:36.68,end:36.91,duration:.22997916666666668,source:`860912`,gain:.74762,fadeIn:.004,fadeOut:.012},{id:`micro-03`,family:`micro`,kind:`micro-scan`,file:`/audio/signals/micro-03.wav`,start:59.57,end:59.77,duration:.2,source:`860912`,gain:.44424,fadeIn:.004,fadeOut:.012},{id:`micro-04`,family:`micro`,kind:`micro-scan`,file:`/audio/signals/micro-04.wav`,start:74.77,end:74.99,duration:.21997916666666667,source:`860912`,gain:.60253,fadeIn:.004,fadeOut:.012}]},Il={manualAmbientVolume:.15,modeFadeSeconds:.45,primaryFamily:`detail`,enabledFamilies:[`detail`,`micro`],volumes:{ambient:.16,flow:.34,detail:.65},fragments:{flow:[.22,.55],detail:[.18,.43],micro:[.07,.12]},flow:{first:[.25,1.2],interval:[.8,3.6],nearInterval:[.22,.95],nearChance:.62,quietInterval:[3,7],quietChance:.03},detail:{first:[.5,2.5],interval:[.65,5.5],clearance:.2},micro:{gain:.36,tailLead:[.065,.11],cooldown:1.1},activity:{window:2,attack:.45,release:1.2,deadzone:.02,fullScale:.65,filterSmoothing:.8,detailDepth:0,tailThreshold:.025,tailChance:.9},maxVoices:2,minOnsetGap:.18,eq:{highpass:1100,detailHighpass:750,lowpass:9e3,shelfFrequency:5800,shelfGain:-3,flowCutoff:[5600,7200],detailCutoff:[6500,7900],microCutoff:[7400,8800]}};function Ll(e){if(e.repeat||e.isComposing||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return null;let t=e.target;return t?.isContentEditable||t?.closest?.(`input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]), textarea, select, [role="combobox"], [role="slider"]`)?null:e.key===`1`||e.code===`Numpad1`?`ambient`:e.key===`0`||e.code===`Numpad0`?`muted`:null}function Rl(e,t={}){let n=JSON.parse(JSON.stringify(Il));for(let[e,r]of Object.entries(t))n[e]=typeof r==`object`&&!Array.isArray(r)?{...n[e],...r}:r;let r=new AbortController,i=new Map,a=new Map,o=new Set,s=[],c=[],l=[],u=new Map,d=new Set,f,p,m,h,g,_,v=`auto`,y=`waiting`,b=null,x=0,S=0,C=null,w=0,T=!0,E=!1,D=!1,O=document.hidden,k=!1,A=!0,j=1,M=1/0,N=1/0,P=1/0,ee=0,F=0,te=-1/0,ne=-1/0,re=0,ie=0,ae=0,oe=-1,se=null,ce=-1/0,I=([e,t])=>e+Math.random()*(t-e),le=()=>performance.now()/1e3,ue=e=>{c.includes(e)||(c.push(e),console.warn(`[audio] `+e))};e.loop=!0,e.volume=0;let de=()=>T&&!O&&!E&&(v===`ambient`||A),fe=()=>de()?v===`ambient`?n.manualAmbientVolume:n.volumes.ambient:0,pe=()=>+!!de(),me=()=>d.forEach(e=>e(Fe()));function L(){de()||(e.pause(),x++,b=null),v===`auto`&&A||_e()}function he(t=!1,r=n.modeFadeSeconds){cancelAnimationFrame(S),S=0;let i=t?0:r*1e3,a=fe(),o=pe();p&&(p.gain.cancelScheduledValues(f.currentTime),p.gain.setValueAtTime(p.gain.value,f.currentTime),i?p.gain.setTargetAtTime(o,f.currentTime,i/3e3):p.gain.setValueAtTime(o,f.currentTime)),C={start:performance.now(),from:e.volume,to:a,gainFrom:j,gainTo:o,duration:i};let s=t=>{let n=i?Math.min(1,Math.max(0,(t-C.start)/i)):1,r=n*n*(3-2*n);e.volume=C.from+(C.to-C.from)*r,j=C.gainFrom+(C.gainTo-C.gainFrom)*r,n<1?S=requestAnimationFrame(s):(S=0,C=null,L(),me())};i?S=requestAnimationFrame(s):s(performance.now())}function ge(e){M=e+I(n.flow.first),N=n.primaryFamily===`detail`?1/0:e+I(n.detail.first||n.detail.interval),P=1/0,ee=0,F=0}function R(){l.length=0,re=0,ie=0}function z(e,t,r){let i=Math.min(.1,Math.max(0,t)),a=Number.isFinite(r)?Math.max(0,r-n.activity.deadzone):0,o=Math.min(1,a/n.activity.fullScale);o>0&&l.push({time:e,value:o,duration:i});let s=e-n.activity.window;for(;l.length&&l[0].time<=s;)l.shift();ie=Math.min(1,l.reduce((e,t)=>e+t.value*Math.min(t.duration,t.time-s),0)/n.activity.window);let c=ie>re?n.activity.attack:n.activity.release;re+=(ie-re)*(1-Math.exp(-i/c))}function _e(){for(let e of[...o]){try{e.source.stop()}catch{}e.source.disconnect(),e.gain.disconnect(),e.filter.disconnect(),o.delete(e)}}function B(e,t=n.eq.highpass){let r=f.createGain(),i=f.createBiquadFilter(),a=f.createBiquadFilter(),o=f.createBiquadFilter();return i.type=`highpass`,i.frequency.value=t,i.Q.value=.5,a.type=`highshelf`,a.frequency.value=n.eq.shelfFrequency,a.gain.value=n.eq.shelfGain,o.type=`lowpass`,o.frequency.value=n.eq.lowpass,o.Q.value=.5,r.connect(i).connect(a).connect(o).connect(e),r}function ve(){return _||(_=Promise.all(Fl.samples.map(async e=>{try{let t=await fetch(`./${e.file.replace(/^\//,``)}`,{signal:r.signal});if(!t.ok)throw Error(`HTTP `+t.status);let n=await f.decodeAudioData(await t.arrayBuffer());E||(i.set(e.id,e),a.set(e.id,n))}catch(t){!E&&t.name!==`AbortError`&&ue(e.id+`: `+t.message)}})),_)}function ye(){if(f||E)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)ue(`Web Audio unavailable; ambient remains available.`);else{try{f=new e({latencyHint:`interactive`})}catch(e){ue(`Audio context: `+e.message);return}p=f.createGain(),p.gain.value=pe(),g=f.createDynamicsCompressor(),g.threshold.value=-12,g.knee.value=6,g.ratio.value=10,g.attack.value=.006,g.release.value=.16,m=B(g),h=B(g,n.eq.detailHighpass),m.gain.value=n.volumes.flow,h.gain.value=n.volumes.detail*(1-n.activity.detailDepth),g.connect(p).connect(f.destination)}}function be(t=!1){if(!T||E||O||!t&&!de()||b||!e.paused&&y===`playing`)return;let n=++x;y=`starting`;try{e.error&&e.load();let t=e.play();b=Promise.resolve(t).then(()=>{n!==x||E||(b=null,!de()&&!C?e.pause():y=e.paused?`waiting`:`playing`,me())},e=>{n!==x||E||(b=null,y=e.name===`NotAllowedError`?`blocked`:e.name===`AbortError`?`waiting`:`error`,[`NotAllowedError`,`AbortError`].includes(e.name)||ue(`Ambient: `+e.message),me())})}catch(e){y=`error`,ue(`Ambient: `+e.message)}me()}function xe(e){T&&!E&&(D=!0,be(!!e?.isTrusted),ye(),f&&!document.hidden&&f.resume().then(()=>{!E&&f.state===`running`&&ve()}).catch(e=>ue(e.message)),me())}function Se(e){let t=Ll(e);t?(e.preventDefault(),Te(t===`ambient`&&v===`ambient`?`auto`:t,e)):e.repeat||xe(e)}function V(e){let t=[...i.values()].filter(t=>t.family===e),n=t.filter(t=>t.id!==u.get(e));return n.length&&(t=n),t[Math.floor(Math.random()*t.length)]}function Ce(e){let t=n.eq[e+`Cutoff`];return t[0]+(t[1]-t[0])*re}function H(e,t=1,r=le(),i=`autonomous`,c={}){if(!e||!de()||f?.state!==`running`||i!==`zoom`&&(v!==`auto`||!A)||i!==`zoom`&&!n.enabledFamilies.includes(e.family)||o.size>=n.maxVoices||s[s.length-1]?.family===e.family&&r-ne<n.minOnsetGap||[...o].some(t=>t.family===e.family))return!1;let l=f.createBufferSource(),d=f.createGain(),p=f.createBiquadFilter();l.buffer=a.get(e.id),p.type=`lowpass`,p.Q.value=.5;let g=c.cutoff||Ce(e.family);p.frequency.value=g;let _=f.currentTime+(c.delay||0);l.playbackRate.value=c.rate||1;let y=Math.min(l.buffer.duration,c.duration||I(n.fragments[e.family]||[l.buffer.duration,l.buffer.duration])),b=y/l.playbackRate.value,x=I([0,Math.max(0,l.buffer.duration-y)]),S=t*I(e.family===`detail`?[.88,1.06]:e.family===`micro`?[.9,1.05]:[.58,1.02]),C=Math.min(e.family===`micro`?.004:.015,b*.15),w=Math.min(e.family===`micro`?.012:.045,b*.25);d.gain.setValueAtTime(0,_),d.gain.linearRampToValueAtTime(S,_+C),d.gain.setValueAtTime(S,_+b-w),d.gain.linearRampToValueAtTime(0,_+b),l.connect(d).connect(p).connect(e.family===`detail`?h:m);let T={source:l,gain:d,filter:p,family:e.family,targetCutoff:g,tailAt:_+b-I(n.micro.tailLead),endAt:_+b,tailChecked:!1};return o.add(T),ae=Math.max(ae,o.size),l.onended=()=>{l.disconnect(),d.disconnect(),p.disconnect(),o.delete(T)},l.start(_,x,y),ne=r,e.family===`micro`&&(te=r),e.family===n.primaryFamily&&r+b,u.set(e.family,e.id),s.push({family:e.family,id:e.id,trigger:i,time:r,duration:b,offset:x,level:S,activityAtStart:re,cutoffAtStart:g}),s.length>100&&s.shift(),!0}function U(){let e=n.volumes.detail*(1-n.activity.detailDepth+n.activity.detailDepth*re);Math.abs(e-oe)>5e-4&&(h.gain.setTargetAtTime(e,f.currentTime,n.activity.filterSmoothing),oe=e);for(let e of o){let t=Ce(e.family);Math.abs(t-e.targetCutoff)>2&&(e.filter.frequency.setTargetAtTime(t,f.currentTime,n.activity.filterSmoothing),e.targetCutoff=t)}}function we(e,t,r=0){let a=e/1e3;if(!(E||!T||O)){if(se&&a>se.expires&&(se=null),se&&de()&&f?.state===`running`&&i.size===Fl.samples.length&&o.size===0){let e=se.strength;H(V(`flow`),.38+e*.12,a,`zoom`,{duration:.3+e*.12,cutoff:4700,rate:I([.94,1.04])})&&(H(V(`detail`),.5+e*.12,a,`zoom`,{delay:.08,duration:.24+e*.09,cutoff:6200}),ce=a,se=null,M=Math.max(M,a+.9),N=Math.max(N,a+.9))}if(v===`auto`&&A&&(z(a,t,r),f?.state===`running`&&i.size)){k||=(ge(a),!0),U();for(let e of[...o])e.family!==`detail`||e.tailChecked||f.currentTime<e.tailAt||(e.tailChecked=!0,!(f.currentTime>=e.endAt-.015||a-te<n.micro.cooldown)&&ie>n.activity.tailThreshold&&re>n.activity.tailThreshold&&Math.random()<n.activity.tailChance*Math.min(1,.3+re)&&H(V(`micro`),n.micro.gain,a,`activity-tail`));if(a>=M){let e=V(n.primaryFamily);if(!H(e,1,a))M=a+I([.3,1.1]);else if(Math.random()<n.flow.quietChance)ee=a+(e?.duration||0)+I(n.flow.quietInterval),M=ee,F=0;else{ee=0;let e=Math.random()<n.flow.nearChance*.8**F;M=a+I(e?n.flow.nearInterval:n.flow.interval),F=e?F+1:0}}a>=N&&(N=a<ee?ee+I([1,3]):a-ne>n.detail.clearance&&H(V(`detail`),1,a)?a+I(n.detail.interval):a+I([.2,.9]))}}}function Te(t,n){if(E||![`auto`,`ambient`,`muted`].includes(t))return;let r=v!==t;v=t,T=v!==`muted`,e.muted=!T,r&&(R(),k=!1),he(!T),T?xe(n):(se=null,_e(),e.pause()),me()}function Ee(e){Te(e?`auto`:`muted`)}function De(e){if(!E){for(let t of[`ambient`,`flow`,`detail`])Number.isFinite(e[t])&&(n.volumes[t]=Math.min(1,Math.max(0,e[t])));oe=-1,he(),f&&!E&&m.gain.setTargetAtTime(n.volumes.flow,f.currentTime,.1),me()}}function Oe(e){Number.isFinite(e)&&!E&&(n.manualAmbientVolume=Math.min(1,Math.max(0,e)),he(),me())}function ke(e,t=!1){if(E)return;let n=A!==!!e;A=!!e,v===`auto`?(n||t)&&(R(),k=!1,he(t,A?.8:1.5),A&&D&&be(),me()):me()}function Ae(){E||(O=document.hidden,_e(),R(),k=!1,he(O),O?(e.pause(),f?.suspend().catch(()=>{})):T&&D&&xe(),me())}function je(t){t.persisted?(O=!0,he(!0),_e(),R(),f?.suspend().catch(()=>{}),e.pause(),k=!1):Re()}function Me(){Ae()}function Ne(){y=`error`,ue(`Ambient load failed: `+(e.currentSrc||e.src)),me()}function W(t){t.type===`playing`?y=`playing`:t.type===`waiting`||t.type===`stalled`?y=`buffering`:t.type===`pause`&&y!==`blocked`&&y!==`error`&&(y=`waiting`),(t.type===`pause`||t.type===`ended`)&&v===`ambient`&&de()&&D&&(clearTimeout(w),w=setTimeout(()=>{w=0,v===`ambient`&&de()&&D&&e.paused&&!e.error&&y!==`blocked`&&be()},200)),me()}let Pe=[`playing`,`waiting`,`stalled`,`pause`,`ended`,`loadedmetadata`];function Fe(){return{mode:v,enabled:T,disposed:E,suspended:O,present:A,presenceGain:j,unlocked:D,playback:y,ambientPaused:e.paused,ambientMuted:e.muted,ambientVolume:e.volume,manualAmbientVolume:n.manualAmbientVolume,ambientTime:e.currentTime,ambientReadyState:e.readyState,contextState:f?.state||`not-created`,loaded:i.size,expected:Fl.samples.length,voices:o.size,peakVoices:ae,activity:re,windowActivity:ie,inputFrames:l.length,nextFlow:M,nextDetail:N,nextMicro:P,quietUntil:ee,activeVoices:[...o].map(e=>({family:e.family,cutoff:e.filter.frequency.value,targetCutoff:e.targetCutoff})),volumes:{...n.volumes},history:[...s],errors:[...c]}}function Ie(e){return d.add(e),e(Fe()),()=>d.delete(e)}function Le(e=.5){let t=le();!de()||t-ce<.8||(se={strength:Math.max(0,Math.min(1,e)),expires:t+1.2})}function Re(){E||(E=!0,r.abort(),cancelAnimationFrame(S),clearTimeout(w),_e(),R(),e.pause(),window.removeEventListener(`pointerdown`,xe,!0),window.removeEventListener(`keydown`,Se,!0),window.removeEventListener(`pagehide`,je),window.removeEventListener(`pageshow`,Me),document.removeEventListener(`visibilitychange`,Ae),e.removeEventListener(`error`,Ne),Pe.forEach(t=>e.removeEventListener(t,W)),f&&(p.disconnect(),m.disconnect(),h.disconnect(),g.disconnect(),f.close().catch(()=>{})),a.clear(),i.clear(),d.clear())}return window.addEventListener(`pointerdown`,xe,!0),window.addEventListener(`keydown`,Se,!0),window.addEventListener(`pagehide`,je),window.addEventListener(`pageshow`,Me),document.addEventListener(`visibilitychange`,Ae),e.addEventListener(`error`,Ne),Pe.forEach(t=>e.addEventListener(t,W)),{update:we,observe:Le,setEnabled:Ee,setMode:Te,setVolumes:De,setAmbientVolume:Oe,setPresence:ke,unlock:xe,dispose:Re,subscribe:Ie,snapshot:Fe,ready:()=>_||Promise.resolve(),audition:e=>H(i.get(e))}}var zl,Bl;function Vl(){if(typeof OffscreenCanvas>`u`||typeof createImageBitmap!=`function`)return!1;let e=navigator.userAgent.match(/Version\/(\d+).*Safari/);return!e||Number(e[1])>=17}async function Hl(e){zl||=new Promise((t,n)=>{if(window.pico){t(window.pico);return}let r=document.createElement(`script`);r.src=new URL(`presence/pico.js`,e).href,r.onload=()=>window.pico?t(window.pico):n(Error(`Face detector did not initialize`)),r.onerror=()=>n(Error(`Face detector could not load`)),document.head.append(r)}).catch(e=>{throw zl=null,e}),Bl||=fetch(new URL(`presence/facefinder`,e)).then(e=>{if(!e.ok)throw Error(`Face model HTTP `+e.status);return e.arrayBuffer()}).catch(e=>{throw Bl=null,e});let[t,n]=await Promise.all([zl,Bl]),r=t.unpack_cascade(new Int8Array(n)),i=document.createElement(`canvas`),a=i.getContext(`2d`);if(!a)throw Error(`Camera image canvas unavailable`);let o;return{detect(e){let n=e.videoWidth||e.naturalWidth||e.width,s=e.videoHeight||e.naturalHeight||e.height;if(!n||!s)return 0;let c=Math.min(320/n,240/s),l=Math.max(1,Math.round(n*c)),u=Math.max(1,Math.round(s*c));(i.width!==l||i.height!==u)&&(i.width=l,i.height=u,o=new Uint8Array(l*u)),a.drawImage(e,0,0,l,u);let d=a.getImageData(0,0,l,u).data;for(let e=0;e<o.length;e++)o[e]=(2*d[e*4]+7*d[e*4+1]+d[e*4+2])/10;let f=t.cluster_detections(t.run_cascade({pixels:o,nrows:u,ncols:l,ldim:l},r,{shiftfactor:.1,minsize:20,maxsize:Math.min(l,u),scalefactor:1.1}),.2);return Math.max(0,...f.filter(e=>e[3]>=20).map(e=>e[2]/l))},close(){i.width=i.height=0,o=null}}}var Ul={enter:.1,exit:.075,enterMs:500,exitMs:1200,lostMs:1800};function Wl(e,t=Ul){let n=!1,r=null;return{update(i,a){let o=n?i>=t.exit:i>=t.enter;if(o===n)r=null;else{r??=a;let s=o?t.enterMs:i===0?t.lostMs:t.exitMs;a-r>=s&&(n=o,r=null,e(n))}return n},reset(){n=!1,r=null,e(!1)}}}function Gl({button:e,status:t,sound:n,onState:r=()=>{}}){let i,a,o,s,c,l=!1,u=!1,d=0,f=0,p=!1,m,h=null,g=!1,_=-1,v={phase:`starting`,ratio:0,near:!1};function y(e,n={}){v={...v,...n,message:e},t.textContent=e,r({...v})}let b=Wl(e=>n.setPresence(e));n.setPresence(!1,!0);function x(t=`카메라 꺼짐 · 소리 대기`){d++,u=!1,l=!1,_=-1,clearInterval(o),clearTimeout(s),i?.terminate(),i=null,a?.getTracks().forEach(e=>e.stop()),a=null,c&&=(c.pause(),c.srcObject=null,c.remove(),null),b.reset(),n.setPresence(!1,!0),e.disabled=!1,e.textContent=`카메라 시작`,e.setAttribute(`aria-pressed`,`false`),m?.close(),m=null,h=null,g=!1,y(t,{phase:`off`,ratio:0,near:!1,backend:null})}async function S(){let t=++d;e.disabled=!0,e.textContent=`카메라 연결 중`,y(`접근 감지를 준비하고 있습니다`,{phase:`starting`,ratio:0,near:!1}),n.unlock();try{if(!navigator.mediaDevices?.getUserMedia)throw Error(`HTTPS 또는 localhost에서 카메라를 사용할 수 있습니다`);let n=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:`user`},audio:!1});if(t!==d){n.getTracks().forEach(e=>e.stop());return}a=n,c=document.createElement(`video`),c.muted=!0,c.playsInline=!0,c.setAttribute(`playsinline`,``),c.setAttribute(`muted`,``),c.autoplay=!0,c.className=`presence-video`,c.setAttribute(`aria-hidden`,`true`),document.body.append(c),c.srcObject=a;let r;try{await Promise.race([c.play(),new Promise((e,t)=>{r=setTimeout(()=>t(Error(`영상 재생 대기 · 카메라 시작 버튼을 눌러 주세요`)),1e4)})])}finally{clearTimeout(r)}if(t!==d)return;let p=new URL(`./`,location.href);async function _(n=``){if(!(g||t!==d)){g=!0,u=!1,l=!1,h=`main`,clearInterval(o),i?.terminate(),i=null,y(`호환 감지 엔진 준비 중`,{phase:`loading`,backend:`main`,lastError:n});try{let n=await Hl(p);if(t!==d){n.close();return}m=n,h=`main`,g=!1,clearTimeout(s),u=!0,f=performance.now(),e.disabled=!1,e.textContent=`카메라 중지`,e.setAttribute(`aria-pressed`,`true`),y(`접근 감지 중`,{phase:`active`,backend:h}),o=setInterval(w,240)}catch(e){t===d&&x(`감지 엔진 오류 · `+e.message)}}}if(s=setTimeout(()=>{t===d&&x(`감지 준비 시간이 초과됐습니다 · 다시 시작해 주세요`)},3e4),a.getVideoTracks()[0].addEventListener(`ended`,()=>{t===d&&x(`카메라 연결이 끊겼습니다 · 다시 시작해 주세요`)}),!Vl()){await _();return}try{i=new Worker(new URL(`mediapipe/presence-worker.js`,p))}catch(e){await _(e.message);return}h=`worker`,i.onerror=e=>{t===d&&_(e.message||`Worker initialization failed`)},i.onmessage=({data:n})=>{t===d&&h===`worker`&&(n.type===`error`?(console.warn(`[presence]`,n.message),_(n.message)):(n.type===`ready`&&(clearTimeout(s),u=!0,f=performance.now(),e.disabled=!1,e.textContent=`카메라 중지`,e.setAttribute(`aria-pressed`,`true`),y(`접근 감지 중 · 가까이 오면 소리가 켜집니다`,{phase:`active`,backend:h}),o=setInterval(w,100)),n.type===`result`&&(l=!1,f=performance.now(),C(n.ratio))))},i.postMessage({type:`init`,wasm:new URL(`mediapipe/wasm`,p).href,model:new URL(`mediapipe/models/face-detector.tflite`,p).href})}catch(e){t===d&&x(e.name===`NotAllowedError`?`카메라 권한을 허용한 뒤 다시 시작해 주세요`:e.name===`NotFoundError`?`연결된 카메라가 없습니다`:e.message)}}function C(e){f=performance.now();let t=!document.hidden&&b.update(e,f);y(document.hidden?`화면 비활성 · 소리 대기`:t?`사람 감지 · 근접`:e>0?`사람 감지 · 거리 대기`:`사람을 기다리는 중`,{phase:`active`,ratio:e,near:t,backend:h})}async function w(){if(!u||document.hidden||(performance.now()-f>2500&&(b.reset(),n.setPresence(!1,!0),y(`영상 확인 중 · 소리 대기`,{ratio:0,near:!1})),l||c?.readyState<2||c.currentTime===_))return;_=c.currentTime,l=!0;let e=d;try{if(m){C(m.detect(c,performance.now())),l=!1;return}let t=await createImageBitmap(c);if(e!==d||document.hidden){t.close(),l=!1;return}i.postMessage({type:`frame`,frame:t,time:performance.now()},[t])}catch(t){e===d&&x(`영상 처리 오류 · `+t.message)}}let T=()=>{u?x():S()},E=()=>{b.reset(),n.setPresence(!1,!0),u&&y(document.hidden?`화면 비활성 · 소리 대기`:`접근 감지 중 · 소리 대기`,{ratio:0,near:!1})},D=()=>x();return e.addEventListener(`click`,T),document.addEventListener(`visibilitychange`,E),window.addEventListener(`pagehide`,D),S(),{start:S,stop:x,snapshot:()=>({...v}),dispose(){p||(p=!0,x(),e.removeEventListener(`click`,T),document.removeEventListener(`visibilitychange`,E),window.removeEventListener(`pagehide`,D))}}}function Kl(){if(window.__PB_SOUND_OPERATOR__)return window.__PB_SOUND_OPERATOR__;let e=document.getElementById(`ambient-track`);document.body.append(e);let t=Rl(e),n=document.createElement(`details`);n.id=`sound-operator`,n.lang=`ko`,n.innerHTML=`<summary aria-label="운영자 사운드 설정">
    <span id="sound-mode-status" role="status" aria-live="polite">AUDIO · AUTO / 대기</span>
    <span class="sound-shortcuts"><kbd>1</kbd> AMBIENT ↔ AUTO · <kbd>0</kbd> MUTE</span>
  </summary><div class="sound-operator-body">
    <p id="sound-playback-status">소리가 안 나면 숫자 1을 누르세요.</p>
    <label for="ambient-volume">AMBIENT 음량 <output id="ambient-volume-label" for="ambient-volume">15%</output></label>
    <input id="ambient-volume" type="range" min="0" max="100" step="1" value="15" aria-label="Ambient 모드 음량" />
    <div class="sound-operator-actions"><button type="button" id="ambient-start">AMBIENT 시작 / 재시도</button><button type="button" id="audio-auto">AUTO 복귀</button><button type="button" id="audio-mute">음소거</button></div>
    <p>1 재입력: 카메라 자동 감지 복귀 · 0: 즉시 음소거</p>
  </div>`,document.body.append(n);let r=document.createElement(`div`);r.id=`exhibition-status`,r.innerHTML=`<span id="camera-monitor">CAM 준비 중</span><button type="button" id="camera-retry" hidden>카메라 재시도</button><span id="audio-monitor">AUTO · 대기</span><button type="button" id="audio-activate">오디오 허용</button><span>1 AMBIENT · 0 MUTE</span>`,document.body.append(r);let i={phase:`starting`,ratio:0,near:!1},a=(e=t.snapshot())=>{let n=i.phase===`active`?i.ratio>0?`CAM 인식 · ${i.near?`근접`:`거리 대기`} · 얼굴 ${Math.round(i.ratio*100)}%`:`CAM 사람 대기`:i.phase===`starting`?`CAM 연결 중`:`CAM ${i.message||`꺼짐`}`,a=e.playback===`playing`&&!e.ambientPaused&&!e.ambientMuted&&e.ambientVolume>0,o=e.playback===`blocked`||!e.unlocked&&e.present,s=e.enabled?a?`${e.mode.toUpperCase()} · 재생 ${Math.round(e.ambientVolume*100)}%`:e.playback===`error`?`AUDIO 오류`:o?`AUDIO 차단 · 클릭 필요`:!e.unlocked||e.contextState===`suspended`?`AUDIO 클릭 필요`:e.mode===`auto`&&!e.present?`AUTO · 근접 대기`:`AUDIO 준비 중`:`AUDIO 음소거`,c=(e,t)=>{let n=r.querySelector(e);n.textContent!==t&&(n.textContent=t)};c(`#camera-monitor`,n),c(`#audio-monitor`,s),r.dataset.playing=String(a),r.dataset.blocked=String(o),r.querySelector(`#audio-activate`).hidden=a,r.querySelector(`#camera-retry`).hidden=i.phase!==`off`,r.querySelector(`#camera-monitor`).title=`${i.message||``}${i.lastError?` / `+i.lastError:``}`};r.querySelector(`#audio-activate`).onclick=e=>t.snapshot().enabled?t.unlock(e):t.setMode(`ambient`,e);let o=document.querySelector(`.presence-controls`);o.hidden=!1,n.querySelector(`.sound-operator-body`).append(o);let s=n.querySelector(`#ambient-volume`);try{let e=localStorage.getItem(`atlas-ambient-volume`);e!==null&&Number.isFinite(Number(e))&&t.setAmbientVolume(Number(e))}catch{}s.addEventListener(`input`,()=>{t.setAmbientVolume(Number(s.value)/100);try{localStorage.setItem(`atlas-ambient-volume`,String(Number(s.value)/100))}catch{}}),n.querySelector(`#ambient-start`).onclick=e=>t.setMode(`ambient`,e),n.querySelector(`#audio-auto`).onclick=e=>t.setMode(`auto`,e),n.querySelector(`#audio-mute`).onclick=()=>t.setMode(`muted`);let c=document.getElementById(`sound-toggle`),l=e=>t.setMode(t.snapshot().enabled?`muted`:`auto`,e);c.addEventListener(`click`,l);let u=t.subscribe(e=>{a(e);let t=e.mode.toUpperCase(),r=e.playback===`playing`&&!e.ambientPaused&&e.ambientVolume>0&&!e.ambientMuted,i=e.enabled?e.playback===`error`?`오디오 오류`:e.playback===`blocked`?`재생 차단 · 1 또는 시작 버튼`:r?`재생 ${Math.round(e.ambientVolume*100)}%`:e.mode===`auto`&&!e.present?`감지 대기`:e.playback===`buffering`?`불러오는 중`:`소리 대기 · 1로 시작`:`음소거`;n.dataset.mode=e.mode,n.querySelector(`#sound-mode-status`).textContent=`AUDIO · ${t} / ${i}`,n.querySelector(`#sound-playback-status`).textContent=e.playback===`error`?`오디오 파일을 재생하지 못했습니다. 연결을 확인한 뒤 시작 버튼으로 재시도하세요.`:e.playback===`blocked`?`Safari에서 재생이 차단됐습니다. 위 시작 버튼을 클릭하거나 숫자 1로 다시 활성화하세요.`:r?`반복 재생 중 · 시스템 출력 음량은 iMac에서 조정하세요.`:`소리가 안 나면 숫자 1 또는 AMBIENT 시작 버튼을 누르세요.`,s.value=String(Math.round(e.manualAmbientVolume*100)),n.querySelector(`#ambient-volume-label`).textContent=`${s.value}%`,c.setAttribute(`aria-pressed`,String(e.enabled)),c.textContent=e.enabled?`SOUND ON`:`SOUND OFF`,c.setAttribute(`aria-label`,e.enabled?`Turn sound off`:`Return to automatic sound`),c.title=`AUDIO ${t} · 1 Ambient / Auto · 0 Mute`}),d=Gl({button:document.getElementById(`presence-start`),status:document.getElementById(`presence-status`),sound:t,onState(e){i=e,a()}});r.querySelector(`#camera-retry`).onclick=e=>{t.unlock(e),d.start()};let f=setInterval(a,500);window.__PB_AUDIO__=t;let p={sound:t,presence:d,dispose(){clearInterval(f),u(),d.dispose(),t.dispose(),c.removeEventListener(`click`,l),o.hidden=!0,document.body.append(o),n.remove(),r.remove(),delete window.__PB_SOUND_OPERATOR__}};return window.__PB_SOUND_OPERATOR__=p,p}function ql(){let e=document.createElement(`div`);e.id=`exhibition-rail`,e.innerHTML=`<section id="data-stream" aria-label="System data stream">
    <div class="stream-window"><div id="stream-lines" role="log" aria-live="off" aria-label="Recent system events and source readout"></div></div>
    <span id="stream-mode" hidden>AUTO</span><span id="stream-stage" hidden>INITIALIZING</span><span id="stream-count" hidden>0 RECORDS</span>
  </section>`;let t=document.querySelector(`.legend`);t.setAttribute(`aria-label`,`Color meanings: baseline, boundary, high risk`),document.querySelector(`.scene-bottom`).append(t);let n=document.getElementById(`local-field`),r=n.querySelector(`.dataset-picker`),i=n.querySelector(`.dataset-summary`);n.insertBefore(r,document.getElementById(`analysis-body`)),n.insertBefore(i,document.getElementById(`analysis-body`)),n.querySelector(`.eyebrow`).textContent=`DATA SELECTION`;let a=document.createElement(`div`);a.id=`data-controls`,a.append(n,document.getElementById(`inspector`)),e.append(a),document.getElementById(`viewport`).append(e);let o=document.createElement(`button`);o.type=`button`,o.id=`data-controls-toggle`,o.textContent=`DATA`,o.title=`Open data selection and readout`,o.setAttribute(`aria-controls`,`data-controls`),o.setAttribute(`aria-expanded`,`false`),o.onclick=()=>{let e=!document.body.classList.contains(`data-controls-open`);document.body.classList.toggle(`data-controls-open`,e),o.setAttribute(`aria-expanded`,String(e))},document.querySelector(`.observation-toolbar`).prepend(o),document.getElementById(`index-trigger`).hidden=!0,document.getElementById(`boundaries`).classList.add(`open`)}var Jl=140,Yl=180;function Xl(){let e=document.getElementById(`stream-lines`),t=document.getElementById(`stream-stage`),n=document.getElementById(`stream-count`),r=matchMedia(`(prefers-reduced-motion: reduce)`),i=[],a=document.createElement(`div`);a.className=`stream-track`,e.append(a);let o=0,s=null,c=!1,l=0,u=null,d=null,f=null,p=25,m=0,h=0,g=0,_=`initializing`,v=1,y=0,b=0,x=0,S=0,C=.8,w=.8,T=0,E=28,D=0,O=()=>p*8*v,k=()=>f?Number(f.currentTime||0)/1e3*O():0;function A(){f||r.matches||document.hidden||!a.childElementCount||(f=a.animate([{transform:`translate3d(0,0,0)`},{transform:`translate3d(0,-60000px,0)`}],{duration:6e4/O()*1e3,easing:`linear`,fill:`forwards`}),f.playbackRate=C)}function j(){h-=k(),f?.cancel(),f=null,a.style.top=`${h}px`,A()}function M(){if(u?.records.length&&d?.length&&D>=E){D=0,E=24+Math.floor(Math.random()*30);let e=d.shift();d.push(e);let t=e();return typeof t==`string`?{kind:`TRACE`,message:t}:{kind:`TRACE`,...t}}if(!u?.records.length){if(!d?.length)return null;let e=d.shift();d.push(e);let t=e();return typeof t==`string`?{kind:`TRACE`,important:!1,message:t}:{kind:`TRACE`,...t}}let{records:e,positions:t,pass:n,project:r}=u,i=u.index++;D++;let a=e[i],o=t[i]?.map(e=>Number(e.toFixed(3))).join(` / `),c=o?`DISPLAY XYZ ${o}`:a.plotted?`SOURCE XYZ ${a.xyz.join(` / `)}`:`SOURCE RECORD / NO SPATIAL COORDINATES`;u.index===e.length&&(u.index=0,u.pass++);let l=r&&t[i]?r(i):null;if(l){let e=l.visible?`SCREEN ${l.x.toFixed(1)} / ${l.y.toFixed(1)} · DEPTH ${l.depth.toFixed(3)}`:`OUTSIDE VIEW · DEPTH ${l.depth.toFixed(3)}`;return{kind:`TRACE`,important:l.selected,message:`${l.visible?`PROJECT`:`CLIP`} / ${s.slice(0,8)} / ROW ${a.sourceRow} / ${a.code} / ${e}`}}return{kind:`TRACE`,important:!1,message:`REPLAY ${s.slice(0,8)} / ROW ${a.sourceRow} / ${a.code} / ${c} / READOUT ${n}`}}function N(e){let t=document.createElement(`div`),n=[...e.message].reduce((e,t)=>(e*31^t.charCodeAt(0))>>>0,7);t.className=`stream-line ${e.kind.toLowerCase()}${e.important?` important`:``}${e.exceeded?` exceeded`:``} tone-${n%3}`,t.dataset.kind=e.kind;let r=document.createElement(`span`);r.className=`stream-sequence`,r.textContent=String(++o).padStart(6,`0`);let i=document.createElement(`span`);i.className=`stream-type`,i.textContent=e.kind;let s=document.createElement(`span`);s.textContent=e.message,t.append(r,i,s),a.append(t),l++}function P(){let e=Math.min(Jl,Math.ceil(m/p)+32);for(;a.childElementCount<e;){let e=i.shift()||M();if(!e)break;N(e),a.childElementCount===1&&(p=a.firstElementChild.offsetHeight||p)}let t=`${o.toLocaleString(`en`)} LINES / ${a.childElementCount} BUFFERED`;n.textContent!==t&&(n.textContent=t),A()}function ee(t,n=`observing`,i=1){if(c||document.hidden||!m){f?.pause();return}i!==v&&(j(),f?.cancel(),f=null,v=i,A()),n!==_&&(_=n,e.dataset.scenePhase=n);let o=S?Math.min(.1,Math.max(0,(t-S)/1e3)):0;if(S=t,t>=x&&(w=.6+Math.random()*.62,x=t+950+Math.random()*2450),C+=((n===`camera`||n===`projection`||t<T?Math.max(1.05,w):w)-C)*(1-Math.exp(-o/.22)),f&&Math.abs(f.playbackRate-C)>.015&&(f.updatePlaybackRate?f.updatePlaybackRate(C):f.pending||(f.playbackRate=C)),b||=t+3500+Math.random()*3500,!r.matches&&t>=b&&(y=t+100+Math.random()*280,b=y+2600+Math.random()*5100),t<y){f?.pause(),e.dataset.flow=`waiting`;return}f?.playState===`paused`&&f.play(),P();let s=r.matches?t-g>=350?p:0:k()-h;r.matches&&s&&(g=t);let l=0;for(;a.childElementCount&&s-l>=p;)a.firstElementChild.remove(),l+=p;l&&(r.matches||(h+=l),!r.matches&&!a.childElementCount&&(h=Math.floor(k()/p)*p),a.style.top=`${h}px`,P()),k()>1e4&&j(),a.childElementCount||(f?.cancel(),f=null,h=0,a.style.top=`0px`),e.dataset.flow=`continuous`}function F(e,{kind:t=`EVENT`,important:n=!1}={}){c||(i.length>=Yl&&i.shift(),i.push({message:e,kind:t,important:n}))}function te(){for(let e=i.length-1;e>=0;e--)i[e].kind===`TRACE`&&i.splice(e,1);u=null}function ne(e){T=performance.now()+(e.stage===`READY`?450:850);let n={READING:`READING SOURCE RECORDS`,PARSING:`PARSING SOURCE RECORDS`,RENDERING:`UPDATING SPATIAL GEOMETRY`,READY:`SCENE READY`,ERROR:`SOURCE ERROR`,"NO LOCAL DATA":`PLANETARY REFERENCE ONLY`};t.textContent=n[e.stage]||e.stage,F(`${n[e.stage]||e.stage} / ${e.source}${e.rows==null?``:` / ${e.rows.toLocaleString(`en`)} ROWS`}${e.error?` / ${e.error}`:``}`,{important:e.stage===`ERROR`||e.stage===`READY`})}function re(e,t,n){te(),s=e.id,D=0,F(`SOURCE LOADED / ${e.records.length.toLocaleString(`en`)} ROWS / ${e.observations.length.toLocaleString(`en`)} OBSERVATIONS`,{important:!0}),F(`MAPPING / ${e.axes.join(` / `)||`SOURCE RECORDS / NO XYZ`}`);for(let t of e.sources)F(`SOURCE / ${t.archive} / ${t.path}`,{kind:`TRACE`});let r=e.observations.length?e.observations:e.records;if(u=r.length?{records:r,positions:t,project:n,index:0,pass:1}:null,d?.length)for(let e of d){let t=e();typeof t!=`string`&&i.push({kind:`TRACE`,...t})}P()}function ie(e,n){document.getElementById(`stream-mode`).textContent=e.mode,t.textContent=e.stage,F(`${e.mode} / ${e.stage}${n.boundary?` / ${n.boundary}`:``}${e.controlId?` / ${e.controlId}`:``}${n.dataset?` / ${n.dataset}`:``}`,{important:e.stage===`SELECTING BOUNDARY`||e.stage===`MANUAL`})}let ae=()=>{document.hidden?f?.pause():f?.play()},oe=new ResizeObserver(e=>{c||(m=e[0].contentRect.height,j(),p=a.firstElementChild?.offsetHeight||p,f?.cancel(),f=null,P())});oe.observe(e);let se=()=>{j(),r.matches&&(f?.cancel(),f=null)};return r.addEventListener(`change`,se),document.addEventListener(`visibilitychange`,ae),F(`SYSTEM INITIALIZED / PLANETARY DATA ATLAS`),{add:F,process:ne,dataset:re,exploration:ie,update:ee,reference(e,{preserveSource:t=!1}={}){d=e,!t&&(te(),s=null,i.unshift(...e.map(e=>{let t=e();return typeof t==`string`?{kind:`TRACE`,message:t}:{kind:`TRACE`,...t}})),i.length>Yl&&(i.length=Yl),P())},selection(e,t=`MANUAL`){F(`${t} / SELECTING ${e}`)},getSnapshot:()=>({lines:a.childElementCount,queued:i.length,maxLines:Jl,maxQueue:Yl,source:s,sequence:o,emitted:l,replay:!!u,pass:u?.pass||0,scenePhase:_,velocity:O()*C,flow:e.dataset.flow,offset:h-k()}),dispose(){c=!0,f?.cancel(),oe.disconnect(),i.length=0,u=null,document.removeEventListener(`visibilitychange`,ae),r.removeEventListener(`change`,se)}}}function Zl({onChange:e=()=>{}}={}){let t=document.createElement(`div`);t.id=`data-process`,t.innerHTML=`<span class="process-scope"></span><output role="status" aria-live="polite" aria-atomic="true"></output>`,document.querySelector(`.scene-top`).append(t);let n=matchMedia(`(prefers-reduced-motion: reduce)`),r=0,i=()=>{++r,t.hidden=!0};function a(a,o=`DATA`){i();let s=r;t.hidden=!1,t.querySelector(`.process-scope`).textContent=`${o} /`;let c=(i,c,l)=>{if(s!==r)return;let u=t.querySelector(`output`),d=`${i}${o===`DATA`&&i===`READY`&&c!=null?` · ${c.toLocaleString(`en`)} ROWS`:``}`,f=u.textContent!==d;e({source:a,scope:o,stage:i,rows:c,error:l}),u.textContent=d,t.dataset.stage=i,i===`READY`&&(u.getAnimations().forEach(e=>e.cancel()),t.hidden=!0),t.title=l?`${a}: ${l}`:a,t.setAttribute(`aria-label`,l?`${o} / ERROR: ${l}`:`${a}: ${d}`),f&&i!==`READY`&&!n.matches&&(u.getAnimations().forEach(e=>e.cancel()),u.animate([{opacity:.5},{opacity:1}],{duration:150}))};return c(`READING`),c}return{begin:a,reset:i}}var Ql=Object.freeze({initialDelayMs:5e3,boundarySelectionMs:450,cameraDurationMs:2e3,indicatorHoldMs:1800,datasetSelectionMs:300,datasetHoldMs:5e3,datasetsPerBoundary:3,idleResumeMs:45e3,overviewHoldMs:1800,loadTimeoutMs:3e4,loop:!0});function $l(e,t={}){let n=Object.freeze({...Ql,...t}),r=new Set,i=Object.freeze({mode:`AUTO`,stage:`INITIALIZING`,boundaryId:null,controlId:null,datasetId:null,cycle:0,error:null}),a=0,o=0,s=-1,c=-1,l=[],u=!1,d=!1,f=[],p=0,m=e.boundaries;function h(e,t={}){a=0,i=Object.freeze({...i,stage:e,...t});for(let e of r)try{e(i)}catch(e){console.error(`Exploration subscriber:`,e)}}function g(){e.returnToPlanet(n.cameraDurationMs),d=!0,h(`RETURNING TO PLANET`,{controlId:null,datasetId:null})}function _(){let t=l[++c];t?(e.selectDataset(t),h(`SELECTING DATASET`,{datasetId:t,error:null})):g()}function v(){if(s++,s>=m.length){if(!n.loop||!m.length){h(`COMPLETE`);return}s=0,i=Object.freeze({...i,cycle:i.cycle+1})}let t=m[s];e.selectBoundary(t)?(l=e.datasets(),n.datasetsPerBoundary!==null&&(l=l.slice(0,n.datasetsPerBoundary)),c=-1,f=e.indicators?.()??[],p=0,h(`SELECTING BOUNDARY`,{boundaryId:t.id,controlId:f[0]??null,datasetId:null,error:null})):h(`SELECTING NEXT BOUNDARY`,{boundaryId:null,datasetId:null})}return{config:n,getState:()=>i,subscribe(e){return r.add(e),()=>r.delete(e)},userActivity(){u||(o=0,i.mode!==`MANUAL`&&(e.cancelCamera(),h(`MANUAL`,{mode:`MANUAL`})))},tick(t,{visible:r=!0,interacting:c=!1}={}){if(!u&&r){if(i.mode===`MANUAL`)o=c?0:o+t,o>=n.idleResumeMs&&(s=-1,i=Object.freeze({...i,mode:`AUTO`}),g());else if(i.stage===`INITIALIZING`&&!e.overviewReady())a=0;else switch(a+=t,i.stage){case`INITIALIZING`:a>=n.initialDelayMs&&v();break;case`SELECTING BOUNDARY`:a>=n.boundarySelectionMs&&(e.enterBoundary(n.cameraDurationMs),h(`ENTERING BOUNDARY`));break;case`ENTERING BOUNDARY`:e.cameraReady()&&(f.length?h(`VIEWING INDICATOR`):l.length?_():h(`VISUALIZATION READY`));break;case`VIEWING INDICATOR`:if(a>=n.indicatorHoldMs){let t=f[++p];t?(e.selectIndicator(t),h(`SELECTING INDICATOR`,{controlId:t})):l.length?_():g()}break;case`SELECTING INDICATOR`:a>=n.boundarySelectionMs&&(e.enterBoundary(n.cameraDurationMs),h(`ENTERING BOUNDARY`));break;case`SELECTING DATASET`:a>=n.datasetSelectionMs&&(e.openDataset(i.datasetId),h(`READING DATASET`));break;case`READING DATASET`:{let t=e.datasetStatus(i.datasetId);if(t.error||a>=n.loadTimeoutMs){e.cancelDataset();let n=t.error||`Dataset readiness timed out`;_(),h(i.stage,{error:n})}else t.ready&&e.cameraReady()&&h(`VISUALIZATION READY`);break}case`VISUALIZATION READY`:a>=n.datasetHoldMs&&_();break;case`RETURNING TO PLANET`:e.overviewReady()&&e.cameraReady()&&(d=!1,h(`SELECTING NEXT BOUNDARY`,{boundaryId:null}));break;case`SELECTING NEXT BOUNDARY`:!d&&a>=n.overviewHoldMs&&v()}}},dispose(){u=!0,r.clear()}}}function eu(e,t,n,r=!1){return Math.min(n||1,2,Math.sqrt(16e6/Math.max(1,e*t)))}var tu=new Ze,nu=new G,ru=class extends Ws{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new wn([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new wn([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new rc(t,6,1);return this.setAttribute(`instanceStart`,new Ro(n,3,0)),this.setAttribute(`instanceEnd`,new Ro(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new rc(t,6,1);return this.setAttribute(`instanceColorStart`,new Ro(n,3,0)),this.setAttribute(`instanceColorEnd`,new Ro(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ds(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),tu.setFromBufferAttribute(t),this.boundingBox.union(tu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ht),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)nu.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(nu)),nu.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(nu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}};q.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new H(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Or.line={uniforms:ir.merge([q.common,q.fog,q.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var iu=class extends sr{constructor(e){super({type:`LineMaterial`,uniforms:ir.clone(Or.line.uniforms),vertexShader:Or.line.vertexShader,fragmentShader:Or.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}},au=new G,ou=new G,su=new Ue,cu=new Ue,lu=new Ue,uu=new G,du=new wt,fu=new dc,pu=new G,mu=new Ze,hu=new ht,gu=new Ue,_u,vu;function yu(e,t,n){return gu.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),gu.multiplyScalar(1/gu.w),gu.x=vu/n.width,gu.y=vu/n.height,gu.applyMatrix4(e.projectionMatrixInverse),gu.multiplyScalar(1/gu.w),Math.abs(Math.max(gu.x,gu.y))}function bu(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){fu.start.fromBufferAttribute(i,r),fu.end.fromBufferAttribute(a,r),fu.applyMatrix4(n);let o=new G,s=new G;_u.distanceSqToSegment(fu.start,fu.end,s,o),s.distanceTo(o)<vu*.5&&t.push({point:s,pointOnLine:o,distance:_u.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function xu(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;_u.at(1,lu),lu.w=1,lu.applyMatrix4(t.matrixWorldInverse),lu.applyMatrix4(r),lu.multiplyScalar(1/lu.w),lu.x*=i.x/2,lu.y*=i.y/2,lu.z=0,uu.copy(lu),du.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(su.fromBufferAttribute(s,t),cu.fromBufferAttribute(c,t),su.w=1,cu.w=1,su.applyMatrix4(du),cu.applyMatrix4(du),su.z>u&&cu.z>u)continue;if(su.z>u){let e=su.z-cu.z,t=(su.z-u)/e;su.lerp(cu,t)}else if(cu.z>u){let e=cu.z-su.z,t=(cu.z-u)/e;cu.lerp(su,t)}su.applyMatrix4(r),cu.applyMatrix4(r),su.multiplyScalar(1/su.w),cu.multiplyScalar(1/cu.w),su.x*=i.x/2,su.y*=i.y/2,cu.x*=i.x/2,cu.y*=i.y/2,fu.start.copy(su),fu.start.z=0,fu.end.copy(cu),fu.end.z=0;let o=fu.closestPointToPointParameter(uu,!0);fu.at(o,pu);let l=Ce.lerp(su.z,cu.z,o),d=l>=-1&&l<=1,f=uu.distanceTo(pu)<vu*.5;if(d&&f){fu.start.fromBufferAttribute(s,t),fu.end.fromBufferAttribute(c,t),fu.start.applyMatrix4(a),fu.end.applyMatrix4(a);let r=new G,i=new G;_u.distanceSqToSegment(fu.start,fu.end,i,r),n.push({point:i,pointOnLine:r,distance:_u.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Su=class extends Xn{constructor(e=new ru,t=new iu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)au.fromBufferAttribute(t,e),ou.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+au.distanceTo(ou);let i=new rc(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Ro(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Ro(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;_u=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;vu=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),hu.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?vu*.5:yu(r,Math.max(r.near,hu.distanceToPoint(_u.origin)),s.resolution),hu.radius+=c,_u.intersectsSphere(hu)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),mu.copy(o.boundingBox).applyMatrix4(a);let l;l=n?vu*.5:yu(r,Math.max(r.near,mu.distanceToPoint(_u.origin)),s.resolution),mu.expandByScalar(l),_u.intersectsBox(mu)!==!1&&(n?bu(this,t):xu(this,r,t))}};function Cu(e,t){let n=[],r=[];e.traverse(e=>{e.isLine&&r.push(e)});for(let e of r){let r=e.geometry.getAttribute(`position`);if(!r||r.count<2)continue;let i=e.isLineSegments?r.count/2:r.count-+!e.isLineLoop,a=new Float32Array(i*6),o=new ru().setPositions(a),s=new iu({color:e.material.color,linewidth:Math.max(1,(e.userData.strokeWidth||(e.isLineSegments?1.1:1.6))*.7),transparent:!0,opacity:e.material.opacity,depthWrite:!1,alphaToCoverage:t});s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );`,`alpha *= 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );`)},s.customProgramCacheKey=()=>`continuous-translucent-stroke`;let c=new Su(o,s);c.frustumCulled=!1,c.renderOrder=e.renderOrder,c.onBeforeRender=()=>{},e.add(c),e.material.visible=!1,n.push({source:e,stroke:c,positions:a,count:i,version:-1,attribute:null})}return{resize(e,t){for(let{stroke:r}of n)r.material.resolution.set(e,t)},update(){for(let e of n){let{source:t,stroke:n}=e;n.material.color.copy(t.material.color),t.isGridHelper&&n.material.color.setHex(6046522),n.material.opacity=t.material.opacity;let r=t.geometry.getAttribute(`position`);if(r===e.attribute&&r.version===e.version)continue;let i=t.isLineSegments?r.count/2:r.count-+!t.isLineLoop;i!==e.count&&(e.count=i,e.positions=new Float32Array(i*6),n.geometry.dispose(),n.geometry=new ru().setPositions(e.positions));let a=e.positions;for(let e=0;e<i;e++){let n=t.isLineSegments?e*2:e,i=(n+1)%r.count;for(let t=0;t<3;t++)a[e*6+t]=r.array[n*3+t],a[e*6+3+t]=r.array[i*3+t]}n.geometry.attributes.instanceStart.data.array.set(a),n.geometry.attributes.instanceStart.data.needsUpdate=!0,e.attribute=r,e.version=r.version}},snapshot:()=>({paths:n.length,minimumWidth:Math.min(...n.map(e=>e.stroke.material.linewidth))})}}ql();var wu=Xl(),Tu=Zl({onChange:wu.process}),Eu=()=>new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Du=window.matchMedia(`(prefers-reduced-motion: reduce)`),Ou=!1,ku=null,Au=new WeakMap;function ju(e){if(Au.get(e)?.forEach(e=>e.cancel()),e.inert=!1,Du.matches)return;let t=[e.animate([{borderLeftColor:`transparent`},{borderLeftColor:`#62645e`}],{duration:140})];for(let[n,r]of e.id===`local-field`?[[`.analysis-head`,40],[`.analysis-controls`,100],[`.analysis-meta`,150]]:[[`.panel-head`,40],[`.instrument-tabs`,80],[`#reference-content`,110],[`#observer-content`,150],[`#relation-content`,180]]){let i=e.querySelector(n);i&&t.push(i.animate([{opacity:.6},{opacity:1}],{duration:180,delay:r}))}Au.set(e,t)}function Mu(e){if(Au.get(e)?.forEach(e=>e.cancel()),e.hidden||Du.matches){e.hidden=!0;return}e.inert=!0;let t=e.animate([{opacity:1},{opacity:0}],{duration:100}),n=[t];Au.set(e,n),t.onfinish=()=>{Au.get(e)===n&&(e.hidden=!0,e.inert=!1)}}Du.addEventListener(`change`,()=>{if(Du.matches)for(let e of[`local-field`,`inspector`,`analysis-body`]){let t=document.getElementById(e);t?.inert&&(t.hidden=!0,t.inert=!1),t?.getAnimations({subtree:!0}).forEach(e=>e.cancel())}});var J=e=>document.getElementById(e),Nu=J(`camera-distance`),{sound:Pu}=Kl(),Fu=e=>e==null?`NOT QUANTIFIED`:String(Number(Number(e).toPrecision(10))),Iu=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Lu=[`CLIMATE`,`BIOSPHERE`,`LAND SYSTEM`,`FRESHWATER`,`BIOGEOCHEMICAL`,`OCEAN`,`AEROSOLS`,`OZONE`,`NOVEL ENTITIES`],Ru={co2:`CO2`,"radiative-forcing":`RF`,hanpp:`HANPP`,"forest-cover":`FOREST`,"blue-water":`BLUE H2O`,"green-water":`GREEN H2O`,phosphorus:`P`,nitrogen:`N`,"aragonite-saturation":`ARAG`,"aod-difference":`AOD`,ozone:`O3`},zu=xl(yl(dl(zc))),Bu=JSON.stringify(zu),Vu=zu.flatMap(e=>e.controls),Hu=new Map([`dataset-select`,`entity-filter`,`climate-scale`].map(e=>[e,Nl(J(e))])),Uu=()=>Hu.forEach(e=>e.sync()),Wu=Vu.filter(e=>e.r!==null),Gu=Math.max(2,5,...Wu.map(e=>e.r)),Ku=document.querySelector(`.risk-scale`);Ku.style.height=`180px`,Ku.setAttribute(`aria-valuemax`,String(Gu)),document.querySelectorAll(`[data-risk-tick]`).forEach(e=>{e.style.bottom=`${Number(e.dataset.riskTick)/Gu*100}%`});function qu(e=null){let t=e?.r!=null,n=J(`risk-ruler`),r=J(`risk-stem`);if(t)n.getAnimations().forEach(e=>e.cancel()),n.title=`PLANETARY REFERENCE / ${e.raw.control_label}; not an individual CSV row value`,r.style.transitionDuration=n.hidden?`550ms`:`400ms`,J(`risk-value`).textContent=`DATA R / ${e.r.toFixed(3)}`,Ku.setAttribute(`aria-valuenow`,String(e.r)),Ku.setAttribute(`aria-valuetext`,`${e.r.toFixed(3)}; boundary 1; high risk 2`),n.hidden&&(n.hidden=!1,r.getBoundingClientRect()),r.style.height=`${e.r/Gu*100}%`;else{if(n.getAnimations().forEach(e=>e.cancel()),!n.hidden&&!Du.matches){let e=n.animate([{opacity:1},{opacity:0}],{duration:160});e.onfinish=()=>{n.hidden=!0,r.style.height=`0%`}}else n.hidden=!0,r.style.height=`0%`;Ku.removeAttribute(`aria-valuenow`),Ku.removeAttribute(`aria-valuetext`)}}var Ju=1.09,Yu=Wu.map(e=>e.r).sort((e,t)=>e-t),Xu=e=>Yu.length<2?.5:Yu.indexOf(e.r)/(Yu.length-1),Zu=new Map(zu.map(e=>{let t=e.controls.filter(e=>e.r!==null),n=t.length?t.reduce((e,t)=>e+Xu(t),0)/t.length:.5;return[e.id,n]}));for(let e of Wu){let t=Bc.controls.find(t=>t.chapter_id===e.groupId&&t.source_variable.id===e.id);if(e.r.toFixed(4)!==t?.existing_svg_marker?.score_text)throw Error(`${e.id}: source score mismatch`)}var Y=Wu[0],Qu=`boundary`,$u=!1,ed=!1,td=!1,nd=null,rd=new Map,X=zu[0],id=new Fo;id.background=new mn(0);var Z=new fr(50,1,.01,2e3),ad,od=window.__ATLAS_GRAPHICS__;try{ad=new No({...od?{canvas:od.canvas,context:od.context}:{},antialias:!0,preserveDrawingBuffer:!1}),ad.setClearColor(0,1)}catch(e){throw J(`webgl-error`).hidden=!1,J(`webgl-error`).textContent=`WebGL unavailable: ${e.message}`,e}ad.domElement.setAttribute(`aria-label`,`Planetary boundary quantitative points and reference shells`),J(`scene`).append(ad.domElement),ad.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),J(`webgl-error`).hidden=!1,J(`webgl-error`).textContent=`그래픽 연결이 일시 중단됐습니다. 복구를 기다리거나 새로고침해 주세요.`}),ad.domElement.addEventListener(`webglcontextrestored`,()=>{J(`webgl-error`).hidden=!0});var Q=new yc(Z,ad.domElement),sd=!1,cd=0,ld=0,ud=null,dd=Z.quaternion.clone(),fd=Q.target.clone(),pd=Q.getDistance();Q.addEventListener(`start`,()=>{sd=!0}),Q.addEventListener(`end`,()=>{sd=!1,cd=performance.now()+350}),Q.enableDamping=!0,Q.dampingFactor=.16,Q.enablePan=!1,Q.zoomToCursor=!1,Q.minDistance=bl,Q.maxDistance=240,Q.zoomSpeed=1,Q.mouseButtons.LEFT=e.ROTATE,Q.mouseButtons.MIDDLE=e.DOLLY,Q.mouseButtons.RIGHT=e.ROTATE,ad.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),ad.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),e.stopImmediatePropagation(),Xf(),Ou=!0,Q.autoRotate=!1,cd=performance.now()+350;let t=Q.getDistance(),n=Cl(t,e.deltaY,e.deltaMode,ad.domElement.clientHeight,Q.minDistance,Q.maxDistance);n<t?Q.dollyIn(n/t):n>t&&Q.dollyOut(t/n)},{capture:!0,passive:!1});var md=new So;id.add(md);var hd=new So;md.add(hd);var gd=new So;hd.add(gd);var _d=Vc,vd=null,yd=null,bd=0,xd=-1,Sd=null,Cd=new Map,wd=new Map(Hc.datasets.map(e=>[e.id,e])),$=sl(_d,zu[0].direction,id,J(`labels`)),Td=new Map,Ed=new Map,Dd=null,Od=null,kd=()=>16052457,Ad=()=>7827819,jd=e=>e>2?1:e>1?.92:.82,Md=new Es(.047,16,12);function Nd({core:e,middle:t,outer:n}){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`),a=i.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,e),a.addColorStop(.14,e),a.addColorStop(.25,t),a.addColorStop(.42,n),a.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=a,i.fillRect(0,0,128,128);let o=new ys(r);return o.magFilter=c,o.minFilter=c,o.generateMipmaps=!1,o}var Pd=Nd({core:`#ffffff`,middle:`#d4cec5`,outer:`#5b504a`}),Fd=Nd({core:`#fffaf5`,middle:`#f35445`,outer:`#7b2019`}),Id=document.createElement(`canvas`);Id.width=Id.height=64;var Ld=Id.getContext(`2d`),Rd=Ld.createRadialGradient(32,32,2,32,32,32);Rd.addColorStop(0,`rgba(255,111,91,.76)`),Rd.addColorStop(.24,`rgba(226,43,34,.36)`),Rd.addColorStop(1,`rgba(226,43,34,0)`),Ld.fillStyle=Rd,Ld.fillRect(0,0,64,64);var zd=new ys(Id);for(let e of Wu){let t=new Xn(Md,new vn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.fromArray(e.position),t.userData.controlId=e.id,t.userData.baseColor=kd(e.r);let n=new $o(new zo({map:Pd,transparent:!0,opacity:jd(e.r),depthTest:!1,depthWrite:!1}));n.userData.controlId=e.id,n.userData.baseMap=Pd,n.userData.baseOpacity=jd(e.r),n.renderOrder=4;let r=new $o(new zo({map:zd,transparent:!0,opacity:0,blending:2,depthTest:!1,depthWrite:!1}));r.renderOrder=3,t.userData.glow=r,t.userData.signal=n,t.add(r,n),hd.add(t),Td.set(e.id,t);let i=new ss(new Mn().setFromPoints([new G,new G(...e.position)]),new ts({color:Ad(e.r),transparent:!0,opacity:.3}));gd.add(i),Ed.set(e.id,i)}var Bd=new Map;for(let e of zu){let t=e.controls.filter(e=>e.position);if(t.length<2)continue;let n=new ss(new Mn().setFromPoints(t.map(e=>new G(...e.position))),new ts({color:15751757,transparent:!0,opacity:.82,depthWrite:!1}));n.visible=!1,n.renderOrder=5,md.add(n),Bd.set(e.id,n)}var Vd=zu[0].controls.filter(e=>e.position),Hd=Vd.reduce((e,t)=>e.add(new G(...t.position)),new G).divideScalar(Vd.length),Ud=new ss(new Mn().setFromPoints([Hd,$.root.position]),new ks({color:13911870,transparent:!0,opacity:.48,dashSize:.075,gapSize:.055,depthWrite:!1}));Ud.computeLineDistances(),Ud.visible=!1,id.add(Ud);var Wd=new So;md.add(Wd);var Gd=new Map;for(let e of Wu){let t=new G(...e.position).normalize(),n=Math.abs(t.y)>.88?new G(1,0,0):new G(0,1,0),r=new G().crossVectors(n,t).normalize(),i=Array.from({length:128},(n,i)=>{let a=i/128*Math.PI*2;return t.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a)).multiplyScalar(e.r)}),a=new ds(new Mn().setFromPoints(i),new ts({color:10107700,transparent:!0,opacity:.34}));a.userData.strokeWidth=1.9,a.userData.controlId=e.id,a.userData.groupId=e.groupId,a.userData.r=e.r;let o=Xu(e);a.userData.direction=t,a.userData.tangent=r,a.userData.percentile=o,a.userData.boundaryPercentile=Zu.get(e.groupId),a.userData.angle=o*Math.PI*2,a.userData.period=(420-a.userData.boundaryPercentile*180)*8.8,a.userData.orbitDirection=1,a.renderOrder=1,Wd.add(a),Gd.set(e.id,a)}var Kd=new Map(zu.map(e=>{let t=Zu.get(e.id);return[e.id,{angle:0,direction:1,period:(2100-t*900)*8.8,axis:new G(e.direction[0]*.22,1,e.direction[2]*.22).normalize(),quaternion:new Je}]})),qd=new fc(7,14,4929845,2365462);qd.position.set(0,-1.05,0),qd.rotation.set(-.34,.18,.12),qd.material.transparent=!0,qd.material.opacity=.32,qd.renderOrder=1,id.add(qd);var Jd=new Mn,Yd=[],Xd=[],Zd=new H,Qd=new H,$d=6806,ef=()=>($d=$d*1664525+1013904223>>>0,$d/4294967296);for(let e=0;e<2400;e++){let e=11+ef()*44,t=ef()*2-1,n=ef()*Math.PI*2,r=Math.sqrt(1-t*t);Yd.push(e*r*Math.cos(n),e*t,e*r*Math.sin(n));let i=.55+ef()*.45,a=ef()>.84;Xd.push(i,a?i*.78:i,a?i*.68:i*.96)}Jd.setAttribute(`position`,new wn(Yd,3)),Jd.setAttribute(`color`,new wn(Xd,3));var tf=new _s(Jd,new fs({size:.085,map:Pd,blending:2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.94,depthWrite:!1}));tf.renderOrder=-1,id.add(tf);var nf=new Zt;id.add(nf);var rf=new $o(new zo({map:zd,color:16755333,transparent:!0,blending:2,depthWrite:!1,depthTest:!1,opacity:.9})),af=new $o(new zo({map:Pd,color:16773068,transparent:!0,blending:2,depthWrite:!1,depthTest:!1}));rf.renderOrder=5,af.renderOrder=6,id.add(rf,af);var of=[];function sf(e,t,n=.66){let r=new So,i=new ts({color:t,transparent:!0,opacity:n});function a(t){let n=new Mn().setFromPoints(t),a=new ds(n,i);a.userData.strokeWidth=e===2?2.2:1.6,r.add(a),of.push({radius:e,geometry:n})}for(let t=0;t<6;t++){let n=t*Math.PI/6;a(Array.from({length:160},(t,r)=>{let i=r/160*Math.PI*2;return new G(e*Math.sin(i)*Math.sin(n),e*Math.cos(i),e*Math.sin(i)*Math.cos(n))}))}for(let t of[-Math.PI/3,-Math.PI/6,0,Math.PI/6,Math.PI/3])a(Array.from({length:160},(n,r)=>{let i=r/160*Math.PI*2;return new G(e*Math.cos(t)*Math.sin(i),e*Math.sin(t),e*Math.cos(t)*Math.cos(i))}));return id.add(r),r}var cf=sf(1,15130838,.88),lf=sf(2,16736330,.88),uf=Cu(id,od?.context.getContextAttributes()?.antialias??!0),df=new Xn(new Ts(.078,.087,32),new vn({color:16777215,side:2,depthTest:!1}));df.renderOrder=10,id.add(df);var ff=new Map;for(let[e,t]of zu.entries()){let n=document.createElement(`section`);n.className=`group`;let r=document.createElement(`button`);r.className=`group-title`,r.dataset.group=t.id,r.innerHTML=`<span class="number">${String(t.order).padStart(2,`0`)}</span><span>${Iu(t.name)}</span>`,r.addEventListener(`click`,()=>Nf(t)),n.append(r);for(let e of t.controls){let r=document.createElement(`button`);r.className=`control ${e.r===null?`nq`:``}`,r.dataset.control=e.id,r.innerHTML=`<span class="name">${Iu(e.raw.control_label)}</span><span class="value">${e.r===null?`NQ`:e.r.toFixed(4)}</span>`,r.addEventListener(`click`,()=>{Ff(e,t),Uf(),hf()}),n.append(r)}J(`group-list`).append(n);let i=document.createElement(`button`),a=t.controls.filter(e=>e.r===null).length;i.className=`group-label ${a?`nq`:``}`,i.dataset.groupLabel=t.id,i.title=`Boundary direction label; layout anchor only, no representative data radius`,i.innerHTML=`${String(t.order).padStart(2,`0`)} ${Lu[e]}${a?`<small>${a} NOT QUANTIFIED</small>`:``}`,i.addEventListener(`click`,()=>Nf(t)),J(`labels`).append(i),ff.set(t.id,i)}var pf=J(`boundaries`),mf=J(`index-trigger`);function hf(){pf.classList.add(`open`),mf.setAttribute(`aria-expanded`,`true`)}mf.addEventListener(`click`,()=>{let e=!pf.classList.contains(`open`);pf.classList.toggle(`open`,e),mf.setAttribute(`aria-expanded`,String(e))}),document.addEventListener(`pointerdown`,e=>{pf.contains(e.target)||hf()}),pf.addEventListener(`mouseleave`,()=>{pf.matches(`:focus-within`)||hf()}),document.querySelectorAll(`.group-title`).forEach(e=>e.addEventListener(`click`,hf));var gf=document.createElement(`div`);gf.className=`point-label`,J(`labels`).append(gf);function _f(e){return`<dl class="fields">${e.map(([e,t])=>`<div><dt>${Iu(e)}</dt><dd>${Iu(t??`NOT QUANTIFIED`)}</dd></div>`).join(``)}</dl>`}var vf=e=>Ru[e?.id]??e?.id?.toUpperCase()??Lu[X.order-1],yf=e=>{let t=Number(e).toFixed(3);return t.startsWith(`0.`)?t.slice(1):t.startsWith(`-0.`)?`-${t.slice(2)}`:t},bf=e=>e==null?`--`:`${yf(e)} DEG`,xf=e=>e==null?`--`:yf(e);function Sf(){let e=gp();return{report:e,point:e.points.find(e=>e.id===Y?.id)??null}}function Cf({point:e,report:t}){let n=t.basis.z,r=X?Lu[X.order-1]:`GROUP AXIS`;if(!Y||Y.r===null||!e)return`<div class="observer-grid">
      <div class="observer-row fixed"><span>STATE</span><span>${Y?`NOT QUANTIFIED / NO XYZ`:`GROUP DIRECTION ONLY`}</span></div>
      <div class="observer-row derived"><span>FRAME</span><span>${Iu(r)} / AXIS ${n.map(xf).join(` `)}</span></div>
      <div class="observer-row derived"><span>PROJECTED</span><span>NO POINT PROJECTION</span></div>
    </div>`;let[i,a,o]=e.axisCoordinates,s=e.projection?.screen;return`<div class="observer-grid">
    <div class="observer-row fixed"><span>DATA STATE</span><span>R ${yf(Y.r)} / WORLD XYZ FIXED</span></div>
    <div class="observer-row derived"><span>LOCAL FRAME</span><span>${Iu(r)} / X ${yf(i)} Y ${yf(a)} Z ${yf(o)}</span></div>
    <div class="observer-row derived"><span>AXIS ANGLE</span><span>${bf(e.axisAngle)} / CHANGES WITH REFERENCE AXIS</span></div>
    <div class="observer-row derived"><span>SIGHTLINE</span><span>BEARING ${bf(e.bearing)} / ELEV ${bf(e.elevation)}</span></div>
    <div class="observer-row derived"><span>DEPTH</span><span>${xf(e.projection?.depth)} / CAMERA IMAGE PLANE</span></div>
    <div class="observer-row derived"><span>SCREEN</span><span>${s?`X ${xf(s[0])} Y ${xf(s[1])}`:`OUT OF VIEW`} / CSS PX</span></div>
    <div class="observer-row derived"><span>OVERLAP</span><span>${e.overlapIds.length?e.overlapIds.map(e=>vf(Vu.find(t=>t.id===e))).join(`, `):`NONE`}</span></div>
  </div>`}function wf(){if(J(`read-status`).textContent=`DATA READY`,J(`read-status`).classList.remove(`reading`),yd){Qf(yd);return}J(`analysis-kind`).textContent=`PLANETARY REFERENCE`;let e=Of(X)?`${Hc.boundaries[X.id].datasets.length} SOURCE DATASETS`:`NO LOCAL SOURCE`;if(!Y||Y.r===null){let t=Y?vf(Y):Lu[X.order-1];J(`panel-reference`).textContent=`REFERENCE / ${t}`,J(`reference-content`).innerHTML=`<div class="reference-code">${Iu(t)}</div><div class="reference-name">${Iu(Y?.raw.control_label??X.name)}</div><div class="reference-vector">X / UNDEFINED<br>Y / UNDEFINED<br>Z / UNDEFINED<br>R / ${Y?`NOT QUANTIFIED`:`NO GROUP AGGREGATE`}</div>`,J(`distance-list`).innerHTML=`<div class="distance-row"><span class="distance-code">NO NUMERIC REFERENCE</span><span class="distance-value">--</span></div>`,J(`distance-count`).textContent=`0 DISTANCES / REFERENCE HAS NO XYZ`,J(`relation-content`).innerHTML=`<div class="relation-row"><span>GROUP</span><span>${Iu(X.name.toUpperCase())}</span></div><div class="relation-row"><span>ANALYTICAL</span><span>${e}</span></div>`,J(`observer-content`).innerHTML=Cf(Sf()),Df();return}let[t,n,r]=Y.position;J(`panel-reference`).textContent=`REFERENCE / ${vf(Y)}`,J(`reference-content`).innerHTML=`<div class="reference-code">${Iu(vf(Y))}</div><div class="reference-name">${Iu(Y.raw.control_label)} / ${Iu(X.name)}</div><div class="reference-vector">X / ${yf(t)}<br>Y / ${yf(n)}<br>Z / ${yf(r)}<br>R / ${yf(Y.r)}</div>`;let i=Wu.filter(e=>e.id!==Y.id).map(e=>({control:e,distance:new G(...e.position).distanceTo(new G(...Y.position))})).sort((e,t)=>e.distance-t.distance);J(`distance-list`).innerHTML=i.map(({control:e,distance:t})=>`<div class="distance-row ${e.groupId===Y.groupId?`same-group`:``}"><span class="distance-code">${Iu(vf(e))}</span><span class="distance-value">DIST ${yf(t)}</span></div>`).join(``),J(`distance-count`).textContent=`${i.length} OBSERVATIONS / SELECTED NODE EXCLUDED`;let a=Vu.filter(e=>e.groupId===Y.groupId&&e.id!==Y.id).map(vf);J(`relation-content`).innerHTML=`<div class="relation-row"><span>MEASURE</span><span>ORIGIN -> ${Iu(vf(Y))} / R ${yf(Y.r)}</span></div><div class="relation-row"><span>CONTROL</span><span>${Iu(X.name.toUpperCase())}</span></div><div class="relation-row"><span>PEER</span><span>${Iu(a.join(`, `)||`NONE`)}</span></div><div class="relation-row"><span>ANALYTICAL</span><span>${e}</span></div>`,J(`observer-content`).innerHTML=Cf(Sf()),Df()}var Tf=null;function Ef(){clearTimeout(Tf),J(`read-status`).textContent=`READING DATA...`,J(`read-status`).classList.remove(`reading`),J(`read-status`).offsetWidth,J(`read-status`).classList.add(`reading`),Tf=setTimeout(wf,45)}function Df(){if(!Y){let e=X.controls.filter(e=>e.r===null).length;J(`inspect-content`).innerHTML=`<div class="state ${e?`nq`:``}">BOUNDARY GROUP${e?` / NOT QUANTIFIED STATE PRESENT`:``}</div><h3>${Iu(X.name)}</h3>${_f([[`BOUNDARY`,X.nameKo],[`CONTROL VARIABLES`,X.controls.length],[`QUANTITATIVE POINTS`,X.controls.length-e],[`NOT QUANTIFIED`,e],[`REPRESENTATIVE R`,`NOT ASSIGNED`],[`GROUP THETA (rad)`,Fu(X.theta)],[`GROUP PHI (rad)`,Fu(X.phi)],[`DIRECTION X`,Fu(X.direction[0])],[`DIRECTION Y`,Fu(X.direction[1])],[`DIRECTION Z`,Fu(X.direction[2])],[`DIRECTION LENGTH`,Fu(Math.hypot(...X.direction))],[`ANGLE MEANING`,`SPATIAL LAYOUT ONLY`],[`R ORBITS`,`ONE PER QUANTIFIED CONTROL`]])}<div class="note">No boundary aggregate. Every orbit radius comes from its control variable; not-quantified controls have no orbit.</div>`;return}let e=Y.raw,t=Y.r!==null,n=If().points.find(e=>e.id===Y.id),r=t?Gd.get(Y.id):null;J(`inspect-content`).innerHTML=`<div class="state ${t?``:`nq`}">${Iu(Y.state)}</div><h3>${Iu(e.control_label)}</h3><div class="big-value ${t?``:`nq`}">${t?Y.r.toFixed(6):`NOT QUANTIFIED`}</div><div class="value-caption">${t?`DATA DISTANCE / UNIFIED RISK SCORE`:Iu(e.label)}</div>${_f([[`BOUNDARY`,X.name],[`INDICATOR`,e.control_label],[`RAW VALUE`,e.current],[`UNIT`,e.unit],[`BASELINE`,e.baseline],[`PLANETARY BOUNDARY`,e.boundary],[`HIGH RISK`,e.high_risk],[`RISK DIRECTION`,e.direction===`higher_is_worse`?`increase-is-risk`:`decrease-is-risk`],[`RISK PERCENTILE`,r?`${(r.userData.percentile*100).toFixed(0)}% OF QUANTIFIED CONTROLS`:`NOT QUANTIFIED`],[`BOUNDARY MEAN PERCENTILE`,r?`${(r.userData.boundaryPercentile*100).toFixed(0)}%`:`NOT QUANTIFIED`],[`ORBIT PERIOD`,r?`${(r.userData.period/Ju).toFixed(1)} SEC`:`NOT QUANTIFIED`],[`ORBIT DIRECTION`,r?r.userData.orbitDirection>0?`POSITIVE`:`NEGATIVE`:`NOT QUANTIFIED`],[`UNIFIED DISTANCE`,Fu(Y.r)],[`R`,Fu(Y.r)],[`THETA (rad)`,Fu(Y.theta)],[`PHI (rad)`,Fu(Y.phi)],[`X`,Fu(Y.position?.[0])],[`Y`,Fu(Y.position?.[1])],[`Z`,Fu(Y.position?.[2])],[`ANGLE MEANING`,`SPATIAL LAYOUT ONLY`],[`OFFSET (degrees)`,(Y.offset*180/Math.PI).toFixed(1)],[`R ORBIT RADIUS`,t?Fu(Y.r):`NOT QUANTIFIED / ABSENT`],[`DATA STATUS`,e.data_status]])}<div id="point-check" class="check ${t?``:`nq`} ${n?.status===`FAIL`?`fail`:``}">${t?`WORLD |position| = ${Fu(n.length)}<br>POINT ERROR = ${n.error.toExponential(3)}<br>ORBIT RADIUS ERROR = ${n.orbitRadiusError.toExponential(3)}<br>ORBIT/NODE ERROR = ${n.orbitNodeError.toExponential(3)}<br>${n.status} / POINT + LINE + ORBIT`:`NOT QUANTIFIED<br>R / XYZ / measurement line / orbit: absent`}</div>${t?`<div class="note">Orbit speed is a visual encoding of the unified-risk percentile, not an observed time-series rate.</div>`:`<div class="note">${e.qualitative_position?`Beyond high risk is qualitative. The legacy category marker 3 is not used as a radius.`:`Current and high-risk threshold are unresolved. No numerical position is assigned.`}</div>`}<div class="sources">${e.source_ids.map(e=>`<a href="${Iu(zc.meta.sources.find(t=>t.id===e).url)}" target="_blank" rel="noreferrer">${Iu(e)}</a>`).join(``)}</div>`}function Of(e){return!!Hc.boundaries[e.id]?.datasets.length}function kf(e,t=3.25){return new G(...e.direction).multiplyScalar(t)}function Af(e){_d=e,$.setData(e,X.direction,Lu[X.order-1]),Wf(),$.root.visible=e.observations.length>0,$.activate(e.observations.length>0),J(`climate-scale`).value=e.defaultMode,J(`climate-scale`).disabled=!e.observations.length,J(`climate-scale`).querySelector(`[value="log"]`).disabled=!e.logAvailable,J(`climate-surface`).disabled=!$.canSurface,J(`climate-surface`).checked=!1,$.setSurface(!1),J(`local-count`).textContent=`${e.observations.length.toLocaleString(`en`)} OBSERVATIONS / ${e.records.length.toLocaleString(`en`)} SOURCE ROWS${e.kind===`records`?` / READING RECORDS`:e.omittedCount?` / ${e.omittedCount} WITHOUT COORDINATES`:``}`,J(`local-axes`).textContent=e.axes.length?e.axes.map((e,t)=>`${`XYZ`[t]} / ${e}`).join(`  |  `):e.mappingReason,J(`local-shared`).textContent=e.boundaries.length>1?`SHARED / ${e.boundaries.map(e=>zu.find(t=>t.id===e)?.name??e).join(` / `)}`:e.mappingReason;let t=jl(e);J(`dataset-format`).textContent=`SOURCE ${t.chapter} / ${t.format} / ${t.role}`,J(`local-source`).textContent=e.source,J(`local-field`).classList.remove(`loading`,`load-error`),J(`local-field`).setAttribute(`aria-busy`,`false`),Uu(),Ud.visible=!!(X.controls.filter(e=>e.position).length&&e.observations.length)}async function jf(e){Pl();let t=jl(wd.get(e)).name;J(`scene-selection`).textContent=t,J(`scene-selection`).title=t,J(`local-title`).textContent=t,J(`local-title`).title=t;let n=Tu.begin(t),r=++bd,i=performance.now(),a=X.id;yd=null,Sd=null,vd=null,$.fadeOut(),Ud.visible=!1,J(`local-count`).textContent=`READING DATA...`,J(`local-field`).classList.add(`loading`),J(`local-field`).classList.remove(`load-error`),J(`local-field`).setAttribute(`aria-busy`,`true`);let o=jl(wd.get(e));J(`dataset-format`).textContent=`SOURCE ${o.chapter} / ${o.format} / ${o.role}`,J(`local-source`).textContent=``,J(`local-axes`).textContent=``,J(`local-shared`).textContent=``,J(`entity-filter`).disabled=!0,J(`source-record`).disabled=!0,J(`climate-scale`).disabled=!0,J(`climate-surface`).disabled=!0,J(`inspector`).hidden=!0;try{let t=await Kc(wd.get(e),n);if(r!==bd||X.id!==a)return;J(`local-count`).textContent=`DATASET LOADED`,J(`local-field`).setAttribute(`aria-busy`,`false`);let o=Du.matches?0:Math.max(0,120-(performance.now()-i));if(o&&await new Promise(e=>setTimeout(e,o)),r!==bd||X.id!==a)return;if(vd=t,Cd.set(a,e),J(`entity-filter`).replaceChildren(new Option(`ALL ENTITIES`,``)),t.kind!==`records`)for(let e of t.entities)J(`entity-filter`).add(new Option(e,e));J(`entity-filter`).disabled=t.kind===`records`,J(`source-record`).disabled=!t.records.length,J(`source-record`).min=`2`,J(`source-record`).max=String(t.records.length+1),J(`source-record`).value=`2`,n(`RENDERING`,t.records.length),Af(t);let s=$.positions;if(await Eu(),r!==bd||X.id!==a)return;n(`READY`,t.records.length),wu.dataset(t,s,e=>Gf($,e,s)),xd=r,t.observations.length&&Uf(),t.kind===`records`&&t.records.length&&(clearTimeout(Tf),yd=t.records[0],J(`inspector`).hidden=!1,Qf(yd))}catch(e){if(r!==bd)return;n(`ERROR`,null,e.message),Sd=e.message,$.activate(!1),$.root.visible=!1,J(`local-count`).textContent=`LOAD FAILED / ${e.message}`,J(`local-field`).classList.remove(`loading`),J(`local-field`).classList.add(`load-error`),J(`local-field`).setAttribute(`aria-busy`,`false`)}}function Mf(e,{autoLoad:t=!0}={}){Tu.reset(),fp(!1),++bd,vd=null,yd=null,Sd=null,$.activate(!1),$.root.visible=!1,$.root.position.copy(kf(e)),Ud.visible=!1,J(`local-field`).hidden=!1,ju(J(`local-field`)),J(`local-title`).textContent=`${String(e.order).padStart(2,`0`)} / ${Lu[e.order-1]}`;let n=Hc.boundaries[e.id];J(`dataset-select`).replaceChildren(),J(`local-count`).textContent=n.datasets.length?`READING DATA...`:`NO CORRESPONDING LOCAL DATA`,J(`local-axes`).textContent=n.reason??``,J(`local-shared`).textContent=``,J(`local-source`).textContent=``,J(`dataset-format`).textContent=n.datasets.length?``:`PLANETARY REFERENCE ONLY`,J(`local-field`).classList.remove(`loading`,`load-error`),J(`local-field`).setAttribute(`aria-busy`,`false`),J(`dataset-select`).disabled=!n.datasets.length,n.datasets.length||Tu.begin(`PLANETARY REFERENCE`)(`NO LOCAL DATA`),J(`entity-filter`).replaceChildren(new Option(`ALL ENTITIES`,``));for(let e of[`entity-filter`,`source-record`,`climate-scale`,`climate-surface`])J(e).disabled=!0;for(let e of[`analysis`,`processed`,`history`,`statistics`,`red-points`,`relations`,`summary`]){let t=n.datasets.map(e=>wd.get(e)).filter(t=>t?.role===e);if(!t.length)continue;let r=document.createElement(`optgroup`);r.label=jl(t[0]).role;for(let e of t){let t=jl(e),n=new Option(t.name,e.id);n.dataset.meta=`${t.format} · ${e.rowCount.toLocaleString(`en`)} ROWS`,r.append(n)}J(`dataset-select`).append(r)}if(t&&n.datasets.length){let t=Cd.get(e.id)??n.default;J(`dataset-select`).value=t,jf(t)}Uu()}function Nf(e){Ff(Y?.groupId===e.id?Y:e.controls.find(e=>e.r!==null)??e.controls[0],e,{scope:`boundary`}),Uf(),hf()}function Pf(e){return()=>{let t=e.position?Td.get(e.id).getWorldPosition(new G).toArray().map(e=>e.toFixed(3)).join(` / `):`NOT SPATIALIZED`;return{message:`REFERENCE / ${vf(e)} / R ${e.r??`NOT QUANTIFIED`}${e.r>1?` / BOUNDARY EXCEEDED`:``} / DISPLAY XYZ ${t}`,exceeded:e.r!=null&&e.r>1}}}function Ff(e,t,{openPanel:n=!0,autoLoad:r=!0,scope:i=`control`}={}){Qu=i,$f(null),dp(null),ed=!1,$u=!0,Q.autoRotate=!1;for(let e of rd.values())e.root.visible=!1;Y=e,X=t,pp(bp.getState().mode===`MANUAL`),wu.reference(t.controls.map(Pf)),wu.selection(`${t.name.toUpperCase()} / ${e?.raw.control_label??`BOUNDARY`}`,bp.getState().mode),n&&Mf(t,{autoLoad:r}),$.select(-1),J(`fit`).hidden=!1,qu(e),n&&(J(`inspector`).hidden=Of(t)&&bp.getState().mode===`AUTO`),J(`hover-label`).hidden=!0,document.querySelectorAll(`[data-control]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.control===Y?.id))),document.querySelectorAll(`[data-group]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.group===t.id))),document.querySelector(`.group-title[data-group="${t.id}"]`)?.scrollIntoView({block:`nearest`,behavior:`instant`});for(let[t,n]of Ed){let r=t===e?.id;n.material.color.setHex(r?14630197:Ad()),n.material.opacity=r?.95:.4}for(let[n,r]of Gd){let i=n===e?.id,a=r.userData.groupId===t.id;r.material.color.setHex(i?14630197:a?11906984:8485749),r.material.opacity=i?.96:a?.72:.5}for(let[n,r]of Td){let i=n===e?.id,a=t.controls.some(e=>e.id===n);r.material.color.setHex(i?15746106:r.userData.baseColor);let o=r.userData.signal;o.material.map=a?Fd:o.userData.baseMap,o.material.opacity=i?.82:a?.58:o.userData.baseOpacity,o.material.needsUpdate=!0,r.userData.glow.material.opacity=i?.82:a?.5:0}for(let[e,n]of Bd)n.visible=e===t.id;Ud.visible=$.active;for(let[e,n]of ff)n.classList.toggle(`selected`,e===t.id);J(`focus`).disabled=!Of(t)&&(!e||e.r===null),Of(t)||(J(`scene-selection`).textContent=e?`${e.raw.control_label.toUpperCase()}${e.r===null?` / NOT QUANTIFIED`:``}`:`${Lu[t.order-1]} / GROUP DIRECTION`),Ef()}function If(){id.updateMatrixWorld(!0);let e=nf.getWorldPosition(new G),t=Vu.map(t=>{if(t.r===null)return{id:t.id,groupId:t.groupId,r:null,position:null,status:`NOT QUANTIFIED`};let n=Td.get(t.id).getWorldPosition(new G).sub(e),r=vl(n.toArray(),t.r),i=Gd.get(t.id),a=i.userData.direction.clone().multiplyScalar(Math.cos(i.userData.angle)).addScaledVector(i.userData.tangent,Math.sin(i.userData.angle)).multiplyScalar(t.r).applyQuaternion(Kd.get(t.groupId).quaternion).applyQuaternion(md.quaternion),o=n.distanceTo(a),s=Ed.get(t.id),c=s.geometry.getAttribute(`position`),l=new G().fromBufferAttribute(c,0).applyMatrix4(s.matrixWorld).sub(e),u=new G().fromBufferAttribute(c,1).applyMatrix4(s.matrixWorld).sub(e),d=vl(u.toArray(),t.r,hl),f=u.distanceTo(n),p=i.geometry.getAttribute(`position`),m=0,h=new G().crossVectors(i.userData.direction,i.userData.tangent).normalize().applyQuaternion(Kd.get(t.groupId).quaternion).applyQuaternion(md.quaternion),g=Math.hypot(Math.abs(n.length()-t.r),Math.abs(n.dot(h)));for(let n=0;n<p.count;n++){let r=new G().fromBufferAttribute(p,n).applyMatrix4(i.matrixWorld).sub(e);m=Math.max(m,Math.abs(r.length()-t.r))}return{id:t.id,groupId:t.groupId,r:t.r,theta:t.theta,phi:t.phi,position:n.toArray(),...r,gpuError:d.error,endpointError:f,fixedCoordinateError:o,orbitRadiusError:m,orbitNodeError:g,gpuTolerance:d.tolerance,status:r.status===`PASS`&&d.status===`PASS`&&o<1e-10&&l.length()<1e-10&&f<=d.tolerance&&m<=d.tolerance&&g<=d.tolerance?`PASS`:`FAIL`}});return{groups:zu.length,quantitativePoints:Wu.length,notQuantified:Vu.length-Wu.length,passed:t.filter(e=>e.status===`PASS`).length,failed:t.filter(e=>e.status===`FAIL`).length,stateUnchanged:JSON.stringify(zu)===Bu&&t.every(e=>e.r===null||e.fixedCoordinateError<1e-10),observationDistance:Q.getDistance(),points:t}}var Lf=Math.max(...Wu.map(e=>e.r)),Rf=new G(1.3,.8,1.2).normalize(),zf=null;function Bf(){let e=Math.sqrt(4+(6.8**2-4)/1.17**2),t=tp*.42,n=J(`boundaries`).getBoundingClientRect().right+28,r=J(`exhibition-rail`).offsetLeft-28,i=Math.max(80,Math.min(np*.395,t-n,r-t)*.97),a=np/(2*Math.tan(Ce.degToRad(Z.fov/2)));return Math.max(e,Math.sqrt(4+(2*a/i)**2))}function Vf(e=Lf){let t=Z.position.clone(),n=Q.target.clone();$.active&&(J(`inspector`).hidden=!0),zf=null,Q.enabled=!0,Q.enableDamping=!1,Q.update(),Q.target.set(0,0,0);let r=Math.min(Ce.degToRad(Z.fov/2),Math.atan(Math.tan(Ce.degToRad(Z.fov/2))*Z.aspect)),i=e/Math.sin(r)*1.18;if(e===Lf){let e=new G().crossVectors(new G(0,1,0),Rf).normalize(),t=new G().crossVectors(Rf,e).normalize(),n=Math.tan(Ce.degToRad(Z.fov/2)),a=n*(ip?J(`viewport`).clientWidth/np:Z.aspect);i=Math.max(2.5/Math.sin(r),...Wu.map(r=>{let i=new G(...r.position);return i.dot(Rf)+Math.max(Math.abs(i.dot(e))/(a*.78),Math.abs(i.dot(t))/(n*.66))+.8}))}Z.position.copy(Rf).multiplyScalar(ip?Bf():Math.min(85,i)/1.35);let a=Z.position.clone();Q.update(),Q.enableDamping=!0,Du.matches||(zf={startedAt:performance.now(),duration:380,fromPosition:t,fromTarget:n,toPosition:a,toTarget:new G},Z.position.copy(t),Q.target.copy(n),Q.enabled=!1)}async function Hf(){$f(null),dp(`fit`),Tu.reset();let e=Tu.begin(`ATLAS INITIALIZATION`,`SYSTEM`);td&&e(`READY`);let t=()=>ed&&!td;ed=!0,Y=null,pp(!1),J(`fit`).hidden=!0,qu(),$u=!1,Ou=!1,++bd,clearTimeout(Tf),vd=null,yd=null,$.activate(!1),$.root.visible=!1,Ud.visible=!1,Mu(J(`inspector`)),J(`local-field`).hidden=!1,J(`local-field`).inert=!1,fp(!1),J(`local-title`).textContent=`GLOBAL FIELD`,J(`dataset-select`).replaceChildren(new Option(`SELECT A BOUNDARY`,``)),J(`dataset-select`).disabled=!0,J(`local-count`).textContent=`${Hc.datasets.length} SOURCE DATASETS / ${zu.length} BOUNDARIES`,J(`dataset-format`).textContent=``;for(let e of[`entity-filter`,`source-record`,`climate-scale`,`climate-surface`])J(e).disabled=!0;Uu(),J(`hover-label`).hidden=!0,hf(),J(`focus`).disabled=!0,J(`scene-selection`).textContent=`GLOBAL FIELD / ${zu.length} BOUNDARIES`,document.querySelectorAll(`[data-control], [data-group]`).forEach(e=>e.setAttribute(`aria-pressed`,`false`));for(let e of ff.values())e.classList.remove(`selected`);for(let e of Bd.values())e.visible=!1;for(let e of Ed.values())e.material.color.setHex(Ad()),e.material.opacity=.4;for(let e of Gd.values()){let t=e.userData.r>1;e.material.color.setHex(t?14635336:13223100),e.material.opacity=t?.82:.72}for(let[e,t]of Td){let n=Wu.find(t=>t.id===e).r>1;t.material.color.setHex(t.userData.baseColor),t.userData.signal.material.map=n?Fd:Pd,t.userData.signal.material.opacity=1,t.userData.signal.material.needsUpdate=!0,t.userData.glow.material.opacity=n?.42:.15}Vf();try{for(let n of zu){let r=Hc.boundaries[n.id].default;if(r){if(!rd.has(n.id)){let i=await Kc(wd.get(r),n=>{t()&&e?.(n)});if(t()&&e?.(`RENDERING`,i.records.length),!rd.has(n.id)){let e=sl(i,n.direction,id,document.createDocumentFragment());e.setData(i,n.direction,Lu[n.order-1]),e.overview=!0,e.activate(!0),rd.set(n.id,e)}}if(rd.get(n.id).root.visible=ed,ed){let e=rd.get(n.id),t=e.positions;wu.dataset(e.data,t,n=>Gf(e,n,t))}}}ed&&wu.reference(Wu.map(Pf),{preserveSource:!0}),await Eu(),ed&&e?.(`READY`,[...rd.values()].reduce((e,t)=>e+t.data.records.length,0)),td=!0,nd=null}catch(t){ed&&e?.(`ERROR`,null,t.message),nd=t.message,ed&&(J(`scene-selection`).textContent=`OVERVIEW LOAD FAILED / ${t.message}`)}}J(`fit`).addEventListener(`click`,()=>void Hf());function Uf(){$.active&&vd&&xd===bd&&$.positions.length?qf($.selectedIndex>=0?$.worldPosition($.selectedIndex):$.root.localToWorld($.positions.reduce((e,t)=>e.add(new G(...t)),new G).multiplyScalar(1/$.positions.length)),$.selectedIndex>=0?3.4:4.8):!Y||Y.r===null?Kf(X):qf(Td.get(Y.id).getWorldPosition(new G),Of(X)?5.3:2.5)}function Wf(){id.updateMatrixWorld(!0);let e=Y?.position?Td.get(Y.id).getWorldPosition(new G):kf(X);$.root.position.copy(e);let t=X.controls.filter(e=>e.position).map(e=>Td.get(e.id).getWorldPosition(new G)),n=t.length?t.reduce((e,t)=>e.add(t),new G).divideScalar(t.length):e,r=Ud.geometry.getAttribute(`position`);r.setXYZ(0,n.x,n.y,n.z),r.setXYZ(1,e.x,e.y,e.z),r.needsUpdate=!0,Ud.computeLineDistances()}function Gf(e,t,n=e.positions){if(!n[t])return null;let r=e.root.localToWorld(new G(...n[t])),i=r.clone().project(Z);return{x:(i.x+1)*tp/2,y:(1-i.y)*np/2,depth:-r.applyMatrix4(Z.matrixWorldInverse).z,visible:Math.abs(i.x)<1&&Math.abs(i.y)<1&&i.z>-1&&i.z<1,selected:!ed&&$.selectedIndex===t}}function Kf(e){let t=e.controls.filter(e=>e.position).map(e=>Td.get(e.id).getWorldPosition(new G)),n=kf(e);Of(e)?($.root.position.copy(n),qf(n,5.3)):t.length?qf(n,Math.max(3.2,...t.map(e=>e.distanceTo(n)*3.2))):qf(n,3.2)}function qf(e,t=2.5){Pu.observe(Math.min(1,Math.max(.2,Math.log(Math.max(1,Q.getDistance()/t))))),dp(`focus`),Q.enableDamping=!1,Q.update();let n=Z.position.clone().sub(Q.target).normalize();zf={startedAt:performance.now(),duration:Du.matches?1:380,fromPosition:Z.position.clone(),fromTarget:Q.target.clone(),toPosition:e.clone().addScaledVector(n,t),toTarget:e},Q.enabled=!1}J(`focus`).addEventListener(`click`,Uf),J(`climate-scale`).addEventListener(`change`,e=>{$.setMode(e.target.value),wu.add(`AXES / ${e.target.value.toUpperCase()} / ${_d.axes.join(` / `)}`),$.selectedIndex>=0&&Qf()}),J(`climate-surface`).addEventListener(`change`,e=>$.setSurface(e.target.checked)),J(`dataset-select`).addEventListener(`change`,e=>void jf(e.target.value)),J(`entity-filter`).addEventListener(`change`,e=>{vd&&(yd=null,J(`inspector`).hidden=!0,Af({...vd,observations:vd.observations.filter(t=>!e.target.value||t.entity===e.target.value),domainObservations:vd.observations}),wu.add(`ENTITY FILTER / ${e.target.value||`ALL ENTITIES`} / ${_d.observations.length} OBSERVATIONS`))}),J(`source-record`).addEventListener(`change`,e=>{let t=vd?.records.find(t=>t.sourceRow===Number(e.target.value));t&&(clearTimeout(Tf),yd=t,$.select(_d.observations.findIndex(e=>e.sourceRow===t.sourceRow)),J(`inspector`).hidden=!1,Qf(t))}),J(`pb-toggle`).addEventListener(`change`,e=>{cf.visible=e.target.checked}),J(`hr-toggle`).addEventListener(`change`,e=>{lf.visible=e.target.checked});var Jf=new ac,Yf=null;function Xf(){zf&&(zf=null,Q.enabled=!0,Q.enableDamping=!0)}function Zf(e){let t=ad.domElement.getBoundingClientRect();return $.pick(e.clientX-t.left,e.clientY-t.top,Z,t.width,t.height)}function Qf(e=null){let t=[...J(`reference-content`).querySelectorAll(`dd`)].map(e=>e.textContent),n=!J(`inspector`).hidden,r=e??_d.observations[$.selectedIndex];if(!r)return;bp.getState().mode===`MANUAL`&&pp(!0),yd=r,wu.selection(`SOURCE ROW ${r.sourceRow} / ${r.code}`,bp.getState().mode),J(`source-record`).value=String(r.sourceRow),J(`panel-reference`).textContent=`SOURCE ROW / ${r.sourceRow}`,J(`analysis-kind`).textContent=`LOCAL ANALYSIS`,J(`read-status`).textContent=r.plotted?`SOURCE VALUES`:`SOURCE RECORD`;let i=e=>r.raw[_d.columns.indexOf(e)],a=i(`Entity`)||i(`country`)||r.label.split(` / `)[0],o=jl(_d),s=_f(_d.columns.map((e,t)=>[e,r.raw[t]===``?`(empty)`:r.raw[t]])),c=r.plotted?`<dl class="observation-values">${_d.axes.map((e,t)=>{let n=Ol(e),a=_d.kind===`category`?i(t===0?`iso`:`value`):_d.kind===`history`?t===0?i(`Year`):r.raw[3]:i(`xyz`[t]);return`<div><dt><span>${`XYZ`[t]}</span>${Iu(n.name)}</dt><dd>${Iu(a??`(empty)`)}<small>${Iu(n.unit)}</small></dd></div>`}).join(``)}</dl>`:_f(_d.columns.filter(e=>![`label`,`section`,`output`].includes(e)).map(e=>[e.replaceAll(`_`,` `),i(e)===``?`(empty)`:i(e)]));J(`reference-content`).innerHTML=`<div class="reference-code">${Iu(r.code.length<16?r.code:`ROW ${r.sourceRow}`)}</div><div class="reference-name">${Iu(a)}</div><div class="record-dataset">${Iu(o.name)}</div>${c}<details class="source-details"><summary>ORIGINAL CSV ROW / ${r.sourceRow}</summary>${s}</details>`,J(`observer-content`).innerHTML=`<div class="note">${r.plotted?`${Iu($.mode.toUpperCase())} / ${_d.axes.length} DATA AXES`:`SOURCE RECORD / NO PLOTTED COORDINATES`}<br>SELECTED OBSERVATION / NO PLANETARY R</div>`,J(`relation-content`).innerHTML=`<div class="note">${Iu(_d.mappingReason)}</div>${_f([[`CONTEXT`,_d.boundaries.map(e=>zu.find(t=>t.id===e)?.name??e).join(` / `)]])}`,J(`distance-list`).innerHTML=`<div class="note">LOCAL DISPLAY AXES HAVE DIFFERENT UNITS. NO RISK DISTANCE ASSIGNED.</div>`,J(`distance-count`).textContent=`${_d.records.length.toLocaleString(`en`)} SOURCE ROWS`,J(`inspect-content`).innerHTML=`${_f([[`DATASET`,o.name],[`FORMAT`,o.format],[`SOURCE ROW`,r.sourceRow],[`ORIGINAL LABEL`,r.label],[`ARCHIVE / FILE`,_d.source],[`MAPPING`,_d.mappingReason],[`DISPLAY TRANSFORM`,r.plotted?$.mode===`log`?`X linear; positive Y/Z log10; local extent`:`Linear local extent; categorical X is layout only where labeled`:`NOT SPATIALIZED`],[`XY PLANE`,_d.axes.length===2?`Display Z=0 only; no third measured variable`:`N/A`],[`ATLAS ANCHOR`,`Layout only; not a risk distance`],[`EXTENT`,`Convex envelope; not a correlation or risk surface`]])}<details class="source-details"><summary>ORIGINAL CSV ROW / ${r.sourceRow}</summary>${s}</details>`,Uu(),(!n||J(`inspector`).inert)&&ju(J(`inspector`)),Du.matches||J(`reference-content`).querySelectorAll(`dd`).forEach((e,n)=>{e.textContent!==t[n]&&e.animate([{opacity:.5},{opacity:1}],{duration:150})})}function $f(e){if(Dd!==e?.id&&(Dd&&(Td.get(Dd).userData.signal.material.opacity=Od),Dd=e?.id??null,Dd)){let e=Td.get(Dd).userData.signal;Od=e.material.opacity,e.material.opacity=Math.min(1,Od+.14)}}function ep(e){let t=ad.domElement.getBoundingClientRect();Jf.setFromCamera(new H((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),Z);let n=Jf.intersectObjects([...Td.values()],!1)[0];if(n)return Vu.find(e=>e.id===n.object.userData.controlId);let r=e.clientX-t.left,i=e.clientY-t.top;return Wu.map(e=>{let n=Td.get(e.id).getWorldPosition(new G).project(Z);return{control:e,point:n,distance:Math.hypot((n.x+1)*t.width/2-r,(1-n.y)*t.height/2-i)}}).filter(e=>e.point.z>-1&&e.point.z<1&&e.distance<=14).sort((e,t)=>e.distance-t.distance)[0]?.control??null}ad.domElement.addEventListener(`pointerdown`,Xf,{capture:!0}),ad.domElement.addEventListener(`pointerdown`,e=>{Yf={x:e.clientX,y:e.clientY,button:e.button}}),ad.domElement.addEventListener(`pointerup`,e=>{let t=Yf;if(Yf=null,!t||t.button!==0||e.button!==0||Math.hypot(e.clientX-t.x,e.clientY-t.y)>5)return;let n=ep(e);if(n){Ff(n,zu.find(e=>e.id===n.groupId)),Uf();return}let r=Zf(e);r&&(clearTimeout(Tf),fp(!1),$.select(r.index),J(`inspector`).hidden=!1,up(`reference`),Qf())}),ad.domElement.addEventListener(`pointermove`,e=>{if(Zd.set(e.clientX/tp-.5,e.clientY/np-.5),ud){let t=Math.hypot(e.clientX-ud.x,e.clientY-ud.y);t>1&&(ld+=Math.min(.1,t/Math.max(1,ad.domElement.clientWidth)))}if(ud={x:e.clientX,y:e.clientY},e.buttons){$f(null),$.hover(-1),J(`hover-label`).hidden=!0;return}let t=ep(e),n=t?null:Zf(e);if(n){$f(null),$.hover(n.index);let t=_d.observations[n.index];J(`hover-label`).hidden=!1,J(`hover-label`).style.left=`${Math.min(e.clientX+12,tp-230)}px`,J(`hover-label`).style.top=`${e.clientY-22}px`,J(`hover-label`).textContent=`${t.code} / ${_d.axes[1]} ${Fu(t.xyz[1])}`,ad.domElement.style.cursor=`pointer`;return}if(ad.domElement.style.cursor=`default`,$.hover(-1),$f(t),!t){J(`hover-label`).hidden=!0;return}ad.domElement.style.cursor=`pointer`;let r=ad.domElement.getBoundingClientRect();J(`hover-label`).hidden=!1,J(`hover-label`).style.left=`${e.clientX-r.left+10}px`,J(`hover-label`).style.top=`${e.clientY-r.top+10}px`,J(`hover-label`).textContent=`${vf(t)} / R ${yf(t.r)}`}),ad.domElement.addEventListener(`pointerleave`,()=>{$f(null),$.hover(-1),J(`hover-label`).hidden=!0,ad.domElement.style.cursor=`default`}),ad.domElement.addEventListener(`pointerleave`,()=>{ud=null}),ad.domElement.addEventListener(`dblclick`,e=>{if(e.button!==0)return;let t=ep(e);if(t){Ff(t,zu.find(e=>e.id===t.groupId)),Uf();return}let n=Zf(e);n&&qf($.worldPosition(n.index),5)});var tp=1,np=1,rp=1,ip=!1,ap=Math.min(1,Math.max(.1,Number(new URL(location.href).searchParams.get(`stageScale`))||1)),op=0,sp=0,cp=performance.now();function lp(){let e=J(`viewport`).clientWidth;ip=e>=1700&&!document.body.classList.contains(`ui-hidden`),tp=Math.max(1,e),np=Math.max(1,J(`viewport`).clientHeight),ad.setPixelRatio(eu(tp,np,window.devicePixelRatio,od?.legacy)*rp*ap),ad.setSize(tp,np),Z.aspect=tp/np,Z.updateProjectionMatrix(),ip?Z.setViewOffset(tp,np,tp/2-e*.42,np*.06,tp,np):Z.clearViewOffset(),uf.resize(tp,np)}new ResizeObserver(lp).observe(J(`viewport`)),window.addEventListener(`message`,e=>{e.source===window.parent&&e.origin===location.origin&&e.data?.type===`atlas-stage-scale`&&(ap=Math.min(1,Math.max(.1,Number(e.data.scale)||1)),lp())});function up(e){document.querySelectorAll(`[data-readout-tab]`).forEach(t=>{t.setAttribute(`aria-selected`,String(t.dataset.readoutTab===e)),t.tabIndex=t.dataset.readoutTab===e?0:-1});for(let t of[`reference`,`distance`,`data`])J(`${t}-readout`).hidden=t!==e}document.querySelectorAll(`[data-readout-tab]`).forEach(e=>{let t=e.dataset.readoutTab;e.id=`${t}-tab`,e.setAttribute(`aria-controls`,`${t}-readout`),J(`${t}-readout`).setAttribute(`aria-labelledby`,e.id),e.addEventListener(`click`,()=>up(e.dataset.readoutTab)),e.addEventListener(`keydown`,t=>{let n=[...document.querySelectorAll(`[data-readout-tab]`)];if(![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t.key))return;t.preventDefault();let r=t.key===`Home`?0:t.key===`End`?n.length-1:(n.indexOf(e)+(t.key===`ArrowRight`?1:-1)+n.length)%n.length;n[r].focus(),up(n[r].dataset.readoutTab)})}),up(`reference`);function dp(e){for(let t of[`fit`,`focus`])J(t).removeAttribute(`aria-pressed`),t===e?J(t).setAttribute(`aria-current`,`true`):J(t).removeAttribute(`aria-current`)}Q.addEventListener(`start`,()=>{Ou=!0,dp(null),$f(null)});function fp(e){Pl(),J(`analysis-body`).hidden=!e,J(`analysis-toggle`).setAttribute(`aria-expanded`,String(e)),J(`analysis-toggle`).textContent=e?`−`:`+`,J(`analysis-toggle`).title=e?`Collapse analysis controls`:`Expand analysis controls`,J(`analysis-toggle`).setAttribute(`aria-label`,J(`analysis-toggle`).title),e&&!Du.matches&&J(`analysis-body`).animate([{opacity:.5},{opacity:1}],{duration:160})}J(`analysis-toggle`).addEventListener(`click`,()=>fp(J(`analysis-body`).hidden)),J(`close-inspector`).addEventListener(`click`,()=>{J(`inspector`).hidden=!0});function pp(e){document.body.classList.toggle(`data-controls-open`,e),J(`data-controls-toggle`).setAttribute(`aria-expanded`,String(e))}var mp=J(`ui-toggle`);function hp(e){document.body.classList.toggle(`ui-hidden`,e),mp.setAttribute(`aria-pressed`,String(e)),mp.textContent=e?`UI OFF`:`UI ON`,mp.setAttribute(`aria-label`,e?`Show interface`:`Hide interface`),mp.title=e?`Show interface`:`Hide interface`,e&&hf(),e&&Pl(),lp()}mp.addEventListener(`click`,()=>hp(!document.body.classList.contains(`ui-hidden`))),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(J(`inspector`).hidden=!0),e.key.toLowerCase()===`h`&&![`INPUT`,`SELECT`,`TEXTAREA`].includes(document.activeElement?.tagName)&&document.activeElement?.getAttribute(`role`)!==`combobox`&&hp(!document.body.classList.contains(`ui-hidden`))}),lp(),Hf(),Rc({icons:{Maximize:Fc,Scan:Ic,Crosshair:jc,Download:Mc,Compass:Ac,Eye:Pc,EyeOff:Nc,X:Lc}});function gp(){let e=X.id,t=Vu.map(e=>e.position?{...e,position:Td.get(e.id).getWorldPosition(new G).toArray()}:e),n=X.controls.filter(e=>e.position).map(e=>Td.get(e.id).getWorldPosition(new G)),r=n.length?n.reduce((e,t)=>e.add(t),new G).normalize().toArray():X.direction;return{selectedId:Y?.id??null,selectedGroup:X.id,referenceAxisId:e,...Tl({points:t,camera:Z,target:Q.target,axis:r,width:tp,height:np})}}function _p(){let e=[];for(let t of[document.querySelector(`.scene-bottom`),document.querySelector(`.legend`),J(`risk-ruler`),J(`exhibition-rail`),J(`local-field`),J(`inspector`)]){if(t.hidden||!t.getClientRects().length)continue;let n=t.getBoundingClientRect();e.push({x:n.left+n.width/2,y:n.top+n.height/2,w:n.width,h:n.height})}if(df.visible=!1,gf.hidden=!0,Y?.r!==null&&Y?.position){let t=Td.get(Y.id).getWorldPosition(new G);df.position.copy(t),df.quaternion.copy(Z.quaternion);let n=t.clone().project(Z);if(n.z>-1&&n.z<1&&Math.abs(n.x)<.86&&Math.abs(n.y)<.65){gf.hidden=!1;let t=(n.x*.5+.5)*tp,r=(-n.y*.5+.5)*np;gf.style.left=`${t}px`,gf.style.top=`${r}px`,gf.textContent=`DATA R / ${Y.r.toFixed(4)}`,e.push({x:t,y:r+18,w:gf.offsetWidth,h:gf.offsetHeight+12})}}for(let t of ed?zu:[X,...zu.filter(e=>e.id!==X.id)]){let n=ff.get(t.id);if(n.hidden=$.active,n.hidden)continue;let r=kf(t).project(Z);if(r.z<-1||r.z>1){n.hidden=!0;continue}let i=n.offsetWidth,a=n.offsetHeight,o=Ce.clamp((r.x*.5+.5)*tp,i/2+10,tp-i/2-10),s=Ce.clamp((-r.y*.5+.5)*np,150,np-115),c=(t,n)=>e.some(e=>Math.abs(t-e.x)<(i+e.w)/2+7&&Math.abs(n-e.y)<(a+e.h)/2+5);if(c(o,s)){let e=[];for(let t=155;t<=np-115;t+=40)for(let n=i/2+10;n<=tp-i/2-10;n+=24)c(n,t)||e.push({x:n,y:t,score:(n-o)**2+(t-s)**2});e.sort((e,t)=>e.score-t.score),e[0]&&(o=e[0].x,s=e[0].y)}n.style.left=`${o}px`,n.style.top=`${s}px`,e.push({x:o,y:s,w:i,h:a})}}function vp(e=performance.now()){let t=Z.getWorldPosition(new G),n=np/(2*Math.tan(Ce.degToRad(Z.fov/2))),r=t.length()*(ed?190:120)/n;rf.scale.set(r,r,1),af.scale.set(r*.22,r*.22,1);for(let[r,i]of Td){let a=i.userData.signal,o=Math.max(.01,i.getWorldPosition(new G).distanceTo(t)),s=r===Y?.id,c=a.userData.baseOpacity;if(ed){let t=Wu.findIndex(e=>e.id===r),n=e/1e3%7,i=Math.floor(e/7e3)%Wu.length,o=!Du.matches&&t===i?Math.sin(Math.min(1,n/1.1)*Math.PI):0;a.material.opacity=Math.min(1,.96+o*.08+(r===Dd?.14:0))}let l=o*((s?34:ed?28:c>=.6?25:22)+(r===Dd?4:0))/n;a.scale.set(l,l,1),i.userData.glow.scale.set(l*4.5,l*4.5,1)}}function yp(){if(ed)return;let{point:e}=Sf();!J(`inspector`).hidden&&!yd&&(J(`observer-content`).innerHTML=Cf({point:e,report:gp()}))}window.__PB_DEBUG__={graphics:()=>({type:od?.type||`webgl2`,legacy:!!od?.legacy,pixelRatio:ad.getPixelRatio(),width:ad.domElement.width,height:ad.domElement.height,cssWidth:tp,cssHeight:np,calls:ad.info.render.calls,antialias:ad.getContext().getContextAttributes().antialias,qualityScale:rp,strokes:uf.snapshot()}),navigation:()=>({scope:Qu,boundaryAnchor:kf(X).toArray(),fieldAnchor:$.root.position.toArray()}),backgroundMotion:()=>({starfieldAngle:jp,systemRotationAngle:kp,stars:Yd.length/3}),motion:()=>({overview:ed,motionPaused:$u,manualObservation:Ou,autoRotate:Q.autoRotate,boundaryAngles:[...Kd].map(([e,t])=>({id:e,angle:t.angle})),orbitAngles:[...Gd.values()].map(e=>e.userData.angle),reduced:Du.matches,focusing:!!zf,projection:$.projectionProgress,points:$.positions.length}),overview:()=>({active:ed,ready:td,error:nd,fields:[...rd].map(([e,t])=>({boundary:e,dataset:t.data.id,observations:t.data.observations.length,visible:t.root.visible,sources:t.data.sources}))}),atlas:()=>({dataset:vd?.id??null,error:Sd,sourceRows:vd?.records.length??0,displayed:vd?_d.observations.length:0,boundary:X.id,available:Hc.boundaries[X.id].datasets,canSurface:$.canSurface,kind:vd?.kind??null}),climate:()=>({active:$.active,mode:$.mode,selected:$.selectedIndex,positions:$.positions,projected:$.projected(Z,tp,np)}),observation:gp,snapshot:()=>({...If(),selectedId:Y?.id??null,selectedGroup:ed?null:X.id,camera:{position:Z.position.toArray(),target:Q.target.toArray(),fov:Z.fov,minDistance:Q.minDistance,maxDistance:Q.maxDistance},groupDirections:zu.map(e=>({id:e.id,direction:e.direction})),meshCount:Td.size,measurementLineCount:Ed.size,riskOrbitCount:Gd.size}),referenceCheck:()=>of.map(({radius:e,geometry:t})=>{let n=t.getAttribute(`position`),r=0;for(let t=0;t<n.count;t++)r=Math.max(r,Math.abs(Math.hypot(n.getX(t),n.getY(t),n.getZ(t))-e));return{radius:e,maxError:r,pass:r<=hl*e}}),project:e=>{let t=Td.get(e).getWorldPosition(new G).project(Z),n=ad.domElement.getBoundingClientRect();return{x:n.left+(t.x*.5+.5)*tp,y:n.top+(-t.y*.5+.5)*np}}};var bp=$l({boundaries:zu,overviewReady:()=>(td||!!nd)&&!zf,cameraReady:()=>!zf,selectBoundary(e){let t=e.controls.find(e=>e.r!==null)??e.controls[0];return!t||!Hc.boundaries[e.id]?!1:(Ff(t,e,{autoLoad:!1,scope:`boundary`}),hf(),!0)},datasets:()=>[...J(`dataset-select`).options].map(e=>e.value).filter(e=>wd.has(e)),indicators:()=>X.controls.filter(e=>e.position&&Td.has(e.id)).map(e=>e.id),selectIndicator(e){let t=X.controls.find(t=>t.id===e);t&&Td.has(e)&&Ff(t,X,{openPanel:!1,scope:`boundary`})},enterBoundary(e){Uf(),zf&&(zf.duration=e)},selectDataset(e){J(`dataset-select`).value=e,Uu()},openDataset:e=>void jf(e),datasetStatus:e=>({error:Sd,ready:vd?.id===e&&xd===bd&&(!$.active||$.projectionProgress>=1)}),cancelDataset(){++bd},returnToPlanet(e){Pl(),Hf(),zf&&(zf.duration=e)},cancelCamera(){Xf(),Ou=!0,Q.autoRotate=!1}},{initialDelayMs:6e3,boundarySelectionMs:180,cameraDurationMs:480,indicatorHoldMs:1050,datasetSelectionMs:140,datasetHoldMs:3200,overviewHoldMs:1800}),xp=e=>wu.exploration(e,{boundary:zu.find(t=>t.id===e.boundaryId)?.name.toUpperCase(),dataset:e.datasetId?jl(wd.get(e.datasetId)).name:null});bp.subscribe(xp),xp(bp.getState()),window.__PB_STREAM__={snapshot:wu.getSnapshot},window.__PB_EXPLORATION__={getState:bp.getState,subscribe:bp.subscribe,config:bp.config};var Sp=new Set,Cp=new Set;function wp(e){e.isTrusted&&(e.type===`pointerdown`&&Sp.add(e.pointerId),(e.type===`pointerup`||e.type===`pointercancel`)&&Sp.delete(e.pointerId),e.type===`keydown`&&Cp.add(e.code),e.type===`keyup`&&Cp.delete(e.code),bp.userActivity())}for(let e of[`pointerdown`,`pointerup`,`pointercancel`,`wheel`,`keydown`,`keyup`,`input`,`change`,`click`])window.addEventListener(e,wp,{capture:!0,passive:!0});function Tp(){Sp.clear(),Cp.clear()}window.addEventListener(`blur`,Tp);function Ep(){ku=null,Tp()}document.addEventListener(`visibilitychange`,Ep);var Dp=-1/0,Op=9600,kp=0,Ap=2405,jp=0;function Mp(e){let t=e*Ju;if(jp=(jp+Math.PI*2/Ap*t)%(Math.PI*2),Qd.lerp(Zd,1-Math.exp(-e*3)),tf.rotation.y=jp+Qd.x*.045,tf.rotation.x=Qd.y*.03,!$u){kp=(kp+Math.PI*2/Op*t)%(Math.PI*2),md.rotation.y=kp;for(let e of Kd.values())e.angle=(e.angle+e.direction*Math.PI*2/e.period*t+Math.PI*2)%(Math.PI*2),e.quaternion.setFromAxisAngle(e.axis,e.angle);for(let e of Wu){let n=Gd.get(e.id),r=Kd.get(e.groupId);n.userData.angle=(n.userData.angle+n.userData.orbitDirection*Math.PI*2/n.userData.period*t+Math.PI*2)%(Math.PI*2);let i=n.userData.direction.clone().multiplyScalar(Math.cos(n.userData.angle)).addScaledVector(n.userData.tangent,Math.sin(n.userData.angle)).multiplyScalar(e.r).applyQuaternion(r.quaternion);Td.get(e.id).position.copy(i),n.quaternion.copy(r.quaternion);let a=Ed.get(e.id).geometry.getAttribute(`position`);a.setXYZ(1,i.x,i.y,i.z),a.needsUpdate=!0}for(let e of zu){let t=Bd.get(e.id);if(!t)continue;let n=e.controls.filter(e=>e.position).map(e=>Td.get(e.id).position);t.geometry.setFromPoints(n)}}}function Np(e){if(!zf)return;let t=Du.matches?1:Math.min(1,(e-zf.startedAt)/zf.duration),n=1-(1-t)**3;Z.position.lerpVectors(zf.fromPosition,zf.toPosition,n),Q.target.lerpVectors(zf.fromTarget,zf.toTarget,n),t===1&&(zf=null,Q.enabled=!0,Q.enableDamping=!0)}ad.setAnimationLoop(e=>{if(document.hidden){ku=e;return}let t=Math.max(0,e-(ku??e));!zf&&t>0&&t<200&&(sp+=t,op++),e-cp>6e3&&op>90&&(sp/op>34&&rp>.72&&(rp=Math.max(.72,rp*.9),lp()),op=0,sp=0,cp=e);let n=Math.min(.05,Math.max(0,(e-(ku??e))/1e3));ku=e,Q.autoRotate=!$u&&ed&&!Ou&&!zf&&!Du.matches&&!document.hidden,Q.autoRotateSpeed=.01*Ju,!Du.matches&&!document.hidden&&Mp(n),!ed&&$.active&&Wf();for(let t of rd.values())t.root.visible&&t.update(e,Z,tp,np,ad.getPixelRatio(),tp);$.update(e,Z,tp,np,ad.getPixelRatio(),ip?J(`exhibition-rail`).offsetLeft-30:J(`inspector`).hidden?tp-30:tp-380),Np(e),Q.update(n),vp(e),uf.update(),ad.render(id,Z),_p(),yp(),wu.update(e,zf?`camera`:$.active&&$.projectionProgress<1?`projection`:ed?`orbit`:`observation`,Ju),bp.tick(t,{visible:!document.hidden,interacting:Sp.size>0||Cp.size>0});let r=Math.max(.001,Q.getDistance());!zf&&r<pd*.997&&(sd||e<cd)&&Pu.observe(.35);let i=r.toFixed(3);Nu.textContent!==i&&(Nu.textContent=i);let a=dd.angleTo(Z.quaternion)+Math.abs(Math.log(r/Math.max(.001,pd)))*.7+fd.distanceTo(Q.target)/r*.3,o=n>0?Math.max(!zf&&(sd||e<cd)?a/n:0,ld/n):0;Pu.update(e,n,o),ld=0,dd.copy(Z.quaternion),fd.copy(Q.target),pd=r,e-Dp>500&&(If().failed&&Df(),Dp=e)});