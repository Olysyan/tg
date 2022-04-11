(()=>{"use strict";var e,r,t={2993:(e,r,t)=>{var n=t(5802);"undefined"!=typeof window&&window.innerHeight,Math.round(425),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]);const a=new Set(["image/png","image/gif","image/jpeg"]),o=new Set(["video/mp4"]);new Set([...a,...o]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]),self.onerror=e=>{console.error(e),i({type:"unhandledError",error:{message:e.error.message||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(e=>{console.error(e),i({type:"unhandledError",error:{message:e.reason.message||"Uncaught rejection in worker"}})}));const s=new Map;function i(e,r){r?postMessage(e,r):postMessage(e)}let c;self.importScripts("rlottie-wasm.js");const l=new Promise((e=>{Module.onRuntimeInitialized=()=>{c={init:Module.cwrap("lottie_init","",[]),destroy:Module.cwrap("lottie_destroy","",["number"]),resize:Module.cwrap("lottie_resize","",["number","number","number"]),buffer:Module.cwrap("lottie_buffer","number",["number"]),render:Module.cwrap("lottie_render","",["number","number"]),loadFromData:Module.cwrap("lottie_load_from_data","number",["number","number"])},e()}})),d=new Map;async function u(e){const r=await fetch(e),t=r.headers.get("Content-Type");if(null!=t&&t.startsWith("text/"))return r.text();const a=await r.arrayBuffer();return(0,n.inflate)(a,{to:"string"})}function m(e,r,t){const n=r?30:60,a=JSON.parse(e).fr||n,o=a%n==0?a/n:1;return{reduceFactor:o,msPerFrame:1e3/(a/o),reducedFramesCount:Math.ceil(t/o)}}var p;p={init:async function(e,r,t,n,a){c||await l;const o=await u(r),s=allocate(intArrayFromString(o),"i8",0),i=c.init(),p=c.loadFromData(i,s);c.resize(i,t,t);const{reduceFactor:g,msPerFrame:f,reducedFramesCount:h}=m(o,n,p);d.set(e,{imgSize:t,reduceFactor:g,handle:i}),a(g,f,h)},changeData:async function(e,r,t,n){c||await l;const a=await u(r),o=allocate(intArrayFromString(a),"i8",0),{handle:s}=d.get(e),i=c.loadFromData(s,o),{reduceFactor:p,msPerFrame:g,reducedFramesCount:f}=m(a,t,i);n(p,g,f)},renderFrames:async function(e,r,t,n){c||await l;const{imgSize:a,reduceFactor:o,handle:s}=d.get(e);for(let e=r;e<=t;e++){const r=e*o;c.render(s,r);const t=c.buffer(s),i=Module.HEAPU8.subarray(t,t+a*a*4);n(e,new Uint8ClampedArray(i).buffer)}},destroy:function(e){const r=d.get(e);c.destroy(r.handle),d.delete(e)}},onmessage=async e=>{const{data:r}=e;switch(r.type){case"callMethod":{const{messageId:e,name:t,args:n}=r;try{if(e){const r=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];const a=t[t.length-1];i({type:"methodCallback",messageId:e,callbackArgs:t},a instanceof ArrayBuffer?[a]:void 0)};s.set(e,r),n.push(r)}const[r,a]=await p[t](...n)||[];e&&i({type:"methodResponse",messageId:e,response:r},a)}catch(r){e&&i({type:"methodResponse",messageId:e,error:{message:r.message}})}e&&s.delete(e);break}case"cancelProgress":{const e=s.get(r.messageId);e&&(e.isCanceled=!0);break}}}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,a.x=()=>{var e=a.O(void 0,[802],(()=>a(2993)));return a.O(e)},e=[],a.O=(r,t,n,o)=>{if(!t){var s=1/0;for(d=0;d<e.length;d++){for(var[t,n,o]=e[d],i=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](t[c])))?t.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=n();void 0!==l&&(r=l)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,n,o]},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+".acd83f1b28a8893b9dba.js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={354:1};a.f.i=(r,t)=>{e[r]||importScripts(a.p+a.u(r))};var r=self.webpackChunktelegram_t=self.webpackChunktelegram_t||[],t=r.push.bind(r);r.push=r=>{var[n,o,s]=r;for(var i in o)a.o(o,i)&&(a.m[i]=o[i]);for(s&&s(a);n.length;)e[n.pop()]=1;t(r)}})(),r=a.x,a.x=()=>a.e(802).then(r),a.x()})();
//# sourceMappingURL=354.27d980b897e4dbb1cb45.js.map