(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},Fi={},du={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),ip=Symbol.for("react.memo"),op=Symbol.for("react.lazy"),$a=Symbol.iterator;function sp(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,hu={};function Pr(e,t,r){this.props=e,this.context=t,this.refs=hu,this.updater=r||pu}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=Pr.prototype;function Ds(e,t,r){this.props=e,this.context=t,this.refs=hu,this.updater=r||pu}var Bs=Ds.prototype=new mu;Bs.constructor=Ds;fu(Bs,Pr.prototype);Bs.isPureReactComponent=!0;var Ua=Array.isArray,gu=Object.prototype.hasOwnProperty,Fs={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gu.call(t,n)&&!vu.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Sn,type:e,key:o,ref:a,props:i,_owner:Fs.current}}function ap(e,t){return{$$typeof:Sn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $s(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sn}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Va=/\/+/g;function oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function Xn(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sn:case Yd:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+oo(a,0):n,Ua(i)?(r="",e!=null&&(r=e.replace(Va,"$&/")+"/"),Xn(i,t,r,"",function(c){return c})):i!=null&&($s(i)&&(i=ap(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Va,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Ua(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+oo(o,l);a+=Xn(o,t,r,u,i)}else if(u=sp(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+oo(o,l++),a+=Xn(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Pn(e,t,r){if(e==null)return e;var n=[],i=0;return Xn(e,n,"","",function(o){return t.call(r,o,i++)}),n}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Yn={transition:null},cp={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Yn,ReactCurrentOwner:Fs};function xu(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Pn,forEach:function(e,t,r){Pn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pn(e,function(){t++}),t},toArray:function(e){return Pn(e,function(t){return t})||[]},only:function(e){if(!$s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Pr;U.Fragment=Gd;U.Profiler=Zd;U.PureComponent=Ds;U.StrictMode=Jd;U.Suspense=np;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;U.act=xu;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=fu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Fs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)gu.call(t,u)&&!vu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Sn,type:e.type,key:i,ref:o,props:n,_owner:a}};U.createContext=function(e){return e={$$typeof:tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};U.createElement=yu;U.createFactory=function(e){var t=yu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:rp,render:e}};U.isValidElement=$s;U.lazy=function(e){return{$$typeof:op,_payload:{_status:-1,_result:e},_init:up}};U.memo=function(e,t){return{$$typeof:ip,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Yn.transition;Yn.transition={};try{e()}finally{Yn.transition=t}};U.unstable_act=xu;U.useCallback=function(e,t){return je.current.useCallback(e,t)};U.useContext=function(e){return je.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return je.current.useDeferredValue(e)};U.useEffect=function(e,t){return je.current.useEffect(e,t)};U.useId=function(){return je.current.useId()};U.useImperativeHandle=function(e,t,r){return je.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return je.current.useMemo(e,t)};U.useReducer=function(e,t,r){return je.current.useReducer(e,t,r)};U.useRef=function(e){return je.current.useRef(e)};U.useState=function(e){return je.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return je.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return je.current.useTransition()};U.version="18.3.1";du.exports=U;var R=du.exports;const dp=Xd(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=R,fp=Symbol.for("react.element"),hp=Symbol.for("react.fragment"),mp=Object.prototype.hasOwnProperty,gp=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)mp.call(t,n)&&!vp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:fp,type:e,key:o,ref:a,props:i,_owner:gp.current}}Fi.Fragment=hp;Fi.jsx=ku;Fi.jsxs=ku;cu.exports=Fi;var s=cu.exports,Oo={},wu={exports:{}},Re={},ju={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var I=N.length;N.push(M);e:for(;0<I;){var S=I-1>>>1,B=N[S];if(0<i(B,M))N[S]=M,N[I]=B,I=S;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var M=N[0],I=N.pop();if(I!==M){N[0]=I;e:for(var S=0,B=N.length,re=B>>>1;S<re;){var y=2*(S+1)-1,T=N[y],F=y+1,O=N[F];if(0>i(T,I))F<B&&0>i(O,T)?(N[S]=O,N[F]=I,S=F):(N[S]=T,N[y]=I,S=y);else if(F<B&&0>i(O,I))N[S]=O,N[F]=I,S=F;else break e}}return M}function i(N,M){var I=N.sortIndex-M.sortIndex;return I!==0?I:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],v=1,g=null,f=3,m=!1,x=!1,j=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var M=r(c);M!==null;){if(M.callback===null)n(c);else if(M.startTime<=N)n(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=r(c)}}function k(N){if(j=!1,h(N),!x)if(r(u)!==null)x=!0,it(b);else{var M=r(c);M!==null&&ot(k,M.startTime-N)}}function b(N,M){x=!1,j&&(j=!1,p(P),P=-1),m=!0;var I=f;try{for(h(M),g=r(u);g!==null&&(!(g.expirationTime>M)||N&&!_());){var S=g.callback;if(typeof S=="function"){g.callback=null,f=g.priorityLevel;var B=S(g.expirationTime<=M);M=e.unstable_now(),typeof B=="function"?g.callback=B:g===r(u)&&n(u),h(M)}else n(u);g=r(u)}if(g!==null)var re=!0;else{var y=r(c);y!==null&&ot(k,y.startTime-M),re=!1}return re}finally{g=null,f=I,m=!1}}var E=!1,z=null,P=-1,$=5,D=-1;function _(){return!(e.unstable_now()-D<$)}function H(){if(z!==null){var N=e.unstable_now();D=N;var M=!0;try{M=z(!0,N)}finally{M?ee():(E=!1,z=null)}}else E=!1}var ee;if(typeof d=="function")ee=function(){d(H)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,nt=he.port2;he.port1.onmessage=H,ee=function(){nt.postMessage(null)}}else ee=function(){w(H,0)};function it(N){z=N,E||(E=!0,ee())}function ot(N,M){P=w(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,it(b))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var I=f;f=M;try{return N()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=f;f=N;try{return M()}finally{f=I}},e.unstable_scheduleCallback=function(N,M,I){var S=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?S+I:S):I=S,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,N={id:v++,callback:M,priorityLevel:N,startTime:I,expirationTime:B,sortIndex:-1},I>S?(N.sortIndex=I,t(c,N),r(u)===null&&N===r(c)&&(j?(p(P),P=-1):j=!0,ot(k,I-S))):(N.sortIndex=B,t(u,N),x||m||(x=!0,it(b))),N},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(N){var M=f;return function(){var I=f;f=M;try{return N.apply(this,arguments)}finally{f=I}}}})(Su);ju.exports=Su;var yp=ju.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=R,Ae=yp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cu=new Set,on={};function Jt(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(on[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa={},Ha={};function wp(e){return Mo.call(Ha,e)?!0:Mo.call(qa,e)?!1:kp.test(e)?Ha[e]=!0:(qa[e]=!0,!1)}function jp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,r,n){if(t===null||typeof t>"u"||jp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Us,Vs);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Us,Vs);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Us,Vs);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function qs(e,t,r,n){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,r,i,n)&&(r=null),n||i===null?wp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var yt=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tn=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Io=Symbol.for("react.profiler"),bu=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),Ws=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Qs=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,so;function qr(e){if(so===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||""}return`
`+so+e}var ao=!1;function lo(e,t){if(!e||ao)return"";ao=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{ao=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qr(e):""}function Cp(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=lo(e.type,!1),e;case 11:return e=lo(e.type.render,!1),e;case 1:return e=lo(e.type,!0),e;default:return""}}function Fo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case Io:return"Profiler";case Hs:return"StrictMode";case Do:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case bu:return(e._context.displayName||"Context")+".Provider";case Ws:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qs:return t=e.displayName||null,t!==null?t:Fo(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Fo(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fo(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Np(e){var t=Eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=Np(e))}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Eu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $o(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Qa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ot(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pu(e,t){t=t.checked,t!=null&&qs(e,"checked",t,!1)}function Uo(e,t){Pu(e,t);var r=Ot(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ka(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vo(e,t,r){(t!=="number"||fi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Hr=Array.isArray;function hr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ot(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(Hr(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ot(r)}}function Tu(e,t){var r=Ot(t.value),n=Ot(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Au(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Au(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rn,Ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rn=Rn||document.createElement("div"),Rn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_p=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){_p.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function Lu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function Ou(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Lu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Ep=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(e,t){if(t){if(Ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,mr=null,gr=null;function Ga(e){if(e=Nn(e)){if(typeof Xo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Hi(t),Xo(e.stateNode,e.type,t))}}function Mu(e){mr?gr?gr.push(e):gr=[e]:mr=e}function Iu(){if(mr){var e=mr,t=gr;if(gr=mr=null,Ga(e),t)for(e=0;e<t.length;e++)Ga(t[e])}}function Du(e,t){return e(t)}function Bu(){}var uo=!1;function Fu(e,t,r){if(uo)return e(t,r);uo=!0;try{return Du(e,t,r)}finally{uo=!1,(mr!==null||gr!==null)&&(Bu(),Iu())}}function an(e,t){var r=e.stateNode;if(r===null)return null;var n=Hi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Yo=!1;if(ht)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Yo=!1}function zp(e,t,r,n,i,o,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(v){this.onError(v)}}var Yr=!1,hi=null,mi=!1,Go=null,Pp={onError:function(e){Yr=!0,hi=e}};function Tp(e,t,r,n,i,o,a,l,u){Yr=!1,hi=null,zp.apply(Pp,arguments)}function Ap(e,t,r,n,i,o,a,l,u){if(Tp.apply(this,arguments),Yr){if(Yr){var c=hi;Yr=!1,hi=null}else throw Error(C(198));mi||(mi=!0,Go=c)}}function Zt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function $u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(Zt(e)!==e)throw Error(C(188))}function Rp(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ja(i),e;if(o===n)return Ja(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Uu(e){return e=Rp(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var qu=Ae.unstable_scheduleCallback,Za=Ae.unstable_cancelCallback,Lp=Ae.unstable_shouldYield,Op=Ae.unstable_requestPaint,ie=Ae.unstable_now,Mp=Ae.unstable_getCurrentPriorityLevel,Xs=Ae.unstable_ImmediatePriority,Hu=Ae.unstable_UserBlockingPriority,gi=Ae.unstable_NormalPriority,Ip=Ae.unstable_LowPriority,Wu=Ae.unstable_IdlePriority,$i=null,Ze=null;function Dp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:$p,Bp=Math.log,Fp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Bp(e)/Fp|0)|0}var Ln=64,On=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=Wr(l):(o&=a,o!==0&&(n=Wr(o)))}else a=r&~i,a!==0?n=Wr(a):o!==0&&(n=Wr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Qe(t),i=1<<r,n|=e[r],t&=~i;return n}function Up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qe(o),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Up(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=Ln;return Ln<<=1,!(Ln&4194240)&&(Ln=64),e}function co(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Cn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=r}function qp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Qe(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Ys(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Qe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var W=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xu,Gs,Yu,Gu,Ju,Zo=!1,Mn=[],Nt=null,_t=null,Et=null,ln=new Map,un=new Map,jt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function el(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function Ir(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Nn(t),t!==null&&Gs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wp(e,t,r,n,i){switch(t){case"focusin":return Nt=Ir(Nt,e,t,r,n,i),!0;case"dragenter":return _t=Ir(_t,e,t,r,n,i),!0;case"mouseover":return Et=Ir(Et,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return ln.set(o,Ir(ln.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,un.set(o,Ir(un.get(o)||null,e,t,r,n,i)),!0}return!1}function Zu(e){var t=Ut(e.target);if(t!==null){var r=Zt(t);if(r!==null){if(t=r.tag,t===13){if(t=$u(r),t!==null){e.blockedOn=t,Ju(e.priority,function(){Yu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ko=n,r.target.dispatchEvent(n),Ko=null}else return t=Nn(r),t!==null&&Gs(t),e.blockedOn=r,!1;t.shift()}return!0}function tl(e,t,r){Gn(e)&&r.delete(t)}function Qp(){Zo=!1,Nt!==null&&Gn(Nt)&&(Nt=null),_t!==null&&Gn(_t)&&(_t=null),Et!==null&&Gn(Et)&&(Et=null),ln.forEach(tl),un.forEach(tl)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Qp)))}function cn(e){function t(i){return Dr(i,e)}if(0<Mn.length){Dr(Mn[0],e);for(var r=1;r<Mn.length;r++){var n=Mn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nt!==null&&Dr(Nt,e),_t!==null&&Dr(_t,e),Et!==null&&Dr(Et,e),ln.forEach(t),un.forEach(t),r=0;r<jt.length;r++)n=jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<jt.length&&(r=jt[0],r.blockedOn===null);)Zu(r),r.blockedOn===null&&jt.shift()}var vr=yt.ReactCurrentBatchConfig,yi=!0;function Kp(e,t,r,n){var i=W,o=vr.transition;vr.transition=null;try{W=1,Js(e,t,r,n)}finally{W=i,vr.transition=o}}function Xp(e,t,r,n){var i=W,o=vr.transition;vr.transition=null;try{W=4,Js(e,t,r,n)}finally{W=i,vr.transition=o}}function Js(e,t,r,n){if(yi){var i=es(e,t,r,n);if(i===null)wo(e,t,n,xi,r),el(e,n);else if(Wp(i,e,t,r,n))n.stopPropagation();else if(el(e,n),t&4&&-1<Hp.indexOf(e)){for(;i!==null;){var o=Nn(i);if(o!==null&&Xu(o),o=es(e,t,r,n),o===null&&wo(e,t,n,xi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else wo(e,t,n,null,r)}}var xi=null;function es(e,t,r,n){if(xi=null,e=Ks(n),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=$u(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case Xs:return 1;case Hu:return 4;case gi:case Ip:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var Ct=null,Zs=null,Jn=null;function tc(){if(Jn)return Jn;var e,t=Zs,r=t.length,n,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Jn=i.slice(e,1<n?1-n:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function rl(){return!1}function Le(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?In:rl,this.isPropagationStopped=rl,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Le(Tr),bn=Z({},Tr,{view:0,detail:0}),Yp=Le(bn),po,fo,Br,Ui=Z({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(po=e.screenX-Br.screenX,fo=e.screenY-Br.screenY):fo=po=0,Br=e),po)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),nl=Le(Ui),Gp=Z({},Ui,{dataTransfer:0}),Jp=Le(Gp),Zp=Z({},bn,{relatedTarget:0}),ho=Le(Zp),ef=Z({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=Le(ef),rf=Z({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=Le(rf),of=Z({},Tr,{data:0}),il=Le(of),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function ta(){return uf}var cf=Z({},bn,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=Le(cf),pf=Z({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ol=Le(pf),ff=Z({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),hf=Le(ff),mf=Z({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gf=Le(mf),vf=Z({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=Le(vf),xf=[9,13,27,32],ra=ht&&"CompositionEvent"in window,Gr=null;ht&&"documentMode"in document&&(Gr=document.documentMode);var kf=ht&&"TextEvent"in window&&!Gr,rc=ht&&(!ra||Gr&&8<Gr&&11>=Gr),sl=" ",al=!1;function nc(e,t){switch(e){case"keyup":return xf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function wf(e,t){switch(e){case"compositionend":return ic(t);case"keypress":return t.which!==32?null:(al=!0,sl);case"textInput":return e=t.data,e===sl&&al?null:e;default:return null}}function jf(e,t){if(ir)return e==="compositionend"||!ra&&nc(e,t)?(e=tc(),Jn=Zs=Ct=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rc&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function oc(e,t,r,n){Mu(n),t=ki(t,"onChange"),0<t.length&&(r=new ea("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Jr=null,dn=null;function Cf(e){gc(e,0)}function Vi(e){var t=ar(e);if(zu(t))return e}function bf(e,t){if(e==="change")return t}var sc=!1;if(ht){var mo;if(ht){var go="oninput"in document;if(!go){var ul=document.createElement("div");ul.setAttribute("oninput","return;"),go=typeof ul.oninput=="function"}mo=go}else mo=!1;sc=mo&&(!document.documentMode||9<document.documentMode)}function cl(){Jr&&(Jr.detachEvent("onpropertychange",ac),dn=Jr=null)}function ac(e){if(e.propertyName==="value"&&Vi(dn)){var t=[];oc(t,dn,e,Ks(e)),Fu(Cf,t)}}function Nf(e,t,r){e==="focusin"?(cl(),Jr=t,dn=r,Jr.attachEvent("onpropertychange",ac)):e==="focusout"&&cl()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(dn)}function Ef(e,t){if(e==="click")return Vi(t)}function zf(e,t){if(e==="input"||e==="change")return Vi(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Pf;function pn(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Mo.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function dl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pl(e,t){var r=dl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dl(r)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fi(e.document)}return t}function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=uc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&lc(r.ownerDocument.documentElement,r)){if(n!==null&&na(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=pl(r,o);var a=pl(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=ht&&"documentMode"in document&&11>=document.documentMode,or=null,ts=null,Zr=null,rs=!1;function fl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rs||or==null||or!==fi(n)||(n=or,"selectionStart"in n&&na(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Zr&&pn(Zr,n)||(Zr=n,n=ki(ts,"onSelect"),0<n.length&&(t=new ea("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=or)))}function Dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sr={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},vo={},cc={};ht&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function qi(e){if(vo[e])return vo[e];if(!sr[e])return e;var t=sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in cc)return vo[e]=t[r];return e}var dc=qi("animationend"),pc=qi("animationiteration"),fc=qi("animationstart"),hc=qi("transitionend"),mc=new Map,hl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){mc.set(e,t),Jt(t,[e])}for(var yo=0;yo<hl.length;yo++){var xo=hl[yo],Rf=xo.toLowerCase(),Lf=xo[0].toUpperCase()+xo.slice(1);It(Rf,"on"+Lf)}It(dc,"onAnimationEnd");It(pc,"onAnimationIteration");It(fc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(hc,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function ml(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ap(n,t,void 0,e),e.currentTarget=null}function gc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;ml(i,l,c),o=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;ml(i,l,c),o=u}}}if(mi)throw e=Go,mi=!1,Go=null,e}function K(e,t){var r=t[as];r===void 0&&(r=t[as]=new Set);var n=e+"__bubble";r.has(n)||(vc(t,e,2,!1),r.add(n))}function ko(e,t,r){var n=0;t&&(n|=4),vc(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function fn(e){if(!e[Bn]){e[Bn]=!0,Cu.forEach(function(r){r!=="selectionchange"&&(Of.has(r)||ko(r,!1,e),ko(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bn]||(t[Bn]=!0,ko("selectionchange",!1,t))}}function vc(e,t,r,n){switch(ec(t)){case 1:var i=Kp;break;case 4:i=Xp;break;default:i=Js}r=i.bind(null,t,r,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function wo(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ut(l),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}l=l.parentNode}}n=n.return}Fu(function(){var c=o,v=Ks(r),g=[];e:{var f=mc.get(e);if(f!==void 0){var m=ea,x=e;switch(e){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":m=df;break;case"focusin":x="focus",m=ho;break;case"focusout":x="blur",m=ho;break;case"beforeblur":case"afterblur":m=ho;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hf;break;case dc:case pc:case fc:m=tf;break;case hc:m=gf;break;case"scroll":m=Yp;break;case"wheel":m=yf;break;case"copy":case"cut":case"paste":m=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ol}var j=(t&4)!==0,w=!j&&e==="scroll",p=j?f!==null?f+"Capture":null:f;j=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,p!==null&&(k=an(d,p),k!=null&&j.push(hn(d,k,h)))),w)break;d=d.return}0<j.length&&(f=new m(f,x,null,r,v),g.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&r!==Ko&&(x=r.relatedTarget||r.fromElement)&&(Ut(x)||x[mt]))break e;if((m||f)&&(f=v.window===v?v:(f=v.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=r.relatedTarget||r.toElement,m=c,x=x?Ut(x):null,x!==null&&(w=Zt(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(j=nl,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=ol,k="onPointerLeave",p="onPointerEnter",d="pointer"),w=m==null?f:ar(m),h=x==null?f:ar(x),f=new j(k,d+"leave",m,r,v),f.target=w,f.relatedTarget=h,k=null,Ut(v)===c&&(j=new j(p,d+"enter",x,r,v),j.target=h,j.relatedTarget=w,k=j),w=k,m&&x)t:{for(j=m,p=x,d=0,h=j;h;h=er(h))d++;for(h=0,k=p;k;k=er(k))h++;for(;0<d-h;)j=er(j),d--;for(;0<h-d;)p=er(p),h--;for(;d--;){if(j===p||p!==null&&j===p.alternate)break t;j=er(j),p=er(p)}j=null}else j=null;m!==null&&gl(g,f,m,j,!1),x!==null&&w!==null&&gl(g,w,x,j,!0)}}e:{if(f=c?ar(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=bf;else if(ll(f))if(sc)b=zf;else{b=_f;var E=Nf}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Ef);if(b&&(b=b(e,c))){oc(g,b,r,v);break e}E&&E(e,f,c),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Vo(f,"number",f.value)}switch(E=c?ar(c):window,e){case"focusin":(ll(E)||E.contentEditable==="true")&&(or=E,ts=c,Zr=null);break;case"focusout":Zr=ts=or=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,fl(g,r,v);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":fl(g,r,v)}var z;if(ra)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ir?nc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(rc&&r.locale!=="ko"&&(ir||P!=="onCompositionStart"?P==="onCompositionEnd"&&ir&&(z=tc()):(Ct=v,Zs="value"in Ct?Ct.value:Ct.textContent,ir=!0)),E=ki(c,P),0<E.length&&(P=new il(P,e,null,r,v),g.push({event:P,listeners:E}),z?P.data=z:(z=ic(r),z!==null&&(P.data=z)))),(z=kf?wf(e,r):jf(e,r))&&(c=ki(c,"onBeforeInput"),0<c.length&&(v=new il("onBeforeInput","beforeinput",null,r,v),g.push({event:v,listeners:c}),v.data=z))}gc(g,t)})}function hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ki(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=an(e,r),o!=null&&n.unshift(hn(e,o,i)),o=an(e,t),o!=null&&n.push(hn(e,o,i))),e=e.return}return n}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gl(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=an(r,o),u!=null&&a.unshift(hn(r,u,l))):i||(u=an(r,o),u!=null&&a.push(hn(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Mf=/\r\n?/g,If=/\u0000|\uFFFD/g;function vl(e){return(typeof e=="string"?e:""+e).replace(Mf,`
`).replace(If,"")}function Fn(e,t,r){if(t=vl(t),vl(e)!==t&&r)throw Error(C(425))}function wi(){}var ns=null,is=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,yl=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof yl<"u"?function(e){return yl.resolve(null).then(e).catch(Ff)}:ss;function Ff(e){setTimeout(function(){throw e})}function jo(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),cn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);cn(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Je="__reactFiber$"+Ar,mn="__reactProps$"+Ar,mt="__reactContainer$"+Ar,as="__reactEvents$"+Ar,$f="__reactListeners$"+Ar,Uf="__reactHandles$"+Ar;function Ut(e){var t=e[Je];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mt]||r[Je]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xl(e);e!==null;){if(r=e[Je])return r;e=xl(e)}return t}e=r,r=e.parentNode}return null}function Nn(e){return e=e[Je]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Hi(e){return e[mn]||null}var ls=[],lr=-1;function Dt(e){return{current:e}}function X(e){0>lr||(e.current=ls[lr],ls[lr]=null,lr--)}function Q(e,t){lr++,ls[lr]=e.current,e.current=t}var Mt={},xe=Dt(Mt),Ne=Dt(!1),Qt=Mt;function jr(e,t){var r=e.type.contextTypes;if(!r)return Mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function ji(){X(Ne),X(xe)}function kl(e,t,r){if(xe.current!==Mt)throw Error(C(168));Q(xe,t),Q(Ne,r)}function yc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,bp(e)||"Unknown",i));return Z({},r,n)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Qt=xe.current,Q(xe,e),Q(Ne,Ne.current),!0}function wl(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=yc(e,t,Qt),n.__reactInternalMemoizedMergedChildContext=e,X(Ne),X(xe),Q(xe,e)):X(Ne),Q(Ne,r)}var ut=null,Wi=!1,So=!1;function xc(e){ut===null?ut=[e]:ut.push(e)}function Vf(e){Wi=!0,xc(e)}function Bt(){if(!So&&ut!==null){So=!0;var e=0,t=W;try{var r=ut;for(W=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ut=null,Wi=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),qu(Xs,Bt),i}finally{W=t,So=!1}}return null}var ur=[],cr=0,Ci=null,bi=0,Oe=[],Me=0,Kt=null,dt=1,pt="";function Ft(e,t){ur[cr++]=bi,ur[cr++]=Ci,Ci=e,bi=t}function kc(e,t,r){Oe[Me++]=dt,Oe[Me++]=pt,Oe[Me++]=Kt,Kt=e;var n=dt;e=pt;var i=32-Qe(n)-1;n&=~(1<<i),r+=1;var o=32-Qe(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,dt=1<<32-Qe(t)+i|r<<i|n,pt=o+e}else dt=1<<o|r<<i|n,pt=e}function ia(e){e.return!==null&&(Ft(e,1),kc(e,1,0))}function oa(e){for(;e===Ci;)Ci=ur[--cr],ur[cr]=null,bi=ur[--cr],ur[cr]=null;for(;e===Kt;)Kt=Oe[--Me],Oe[Me]=null,pt=Oe[--Me],Oe[Me]=null,dt=Oe[--Me],Oe[Me]=null}var Te=null,Pe=null,Y=!1,We=null;function wc(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function jl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Pe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Kt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Te=e,Pe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(Y){var t=Pe;if(t){var r=t;if(!jl(e,t)){if(us(e))throw Error(C(418));t=zt(r.nextSibling);var n=Te;t&&jl(e,t)?wc(n,r):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(us(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function Sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function $n(e){if(e!==Te)return!1;if(!Y)return Sl(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Pe)){if(us(e))throw jc(),Error(C(418));for(;t;)wc(e,t),t=zt(t.nextSibling)}if(Sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Pe=zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Te?zt(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=Pe;e;)e=zt(e.nextSibling)}function Sr(){Pe=Te=null,Y=!1}function sa(e){We===null?We=[e]:We.push(e)}var qf=yt.ReactCurrentBatchConfig;function Fr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function Un(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cl(e){var t=e._init;return t(e._payload)}function Sc(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Rt(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,k){return d===null||d.tag!==6?(d=Po(h,p.mode,k),d.return=p,d):(d=i(d,h),d.return=p,d)}function u(p,d,h,k){var b=h.type;return b===nr?v(p,d,h.props.children,k,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===kt&&Cl(b)===d.type)?(k=i(d,h.props),k.ref=Fr(p,d,h),k.return=p,k):(k=si(h.type,h.key,h.props,null,p.mode,k),k.ref=Fr(p,d,h),k.return=p,k)}function c(p,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=To(h,p.mode,k),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function v(p,d,h,k,b){return d===null||d.tag!==7?(d=Wt(h,p.mode,k,b),d.return=p,d):(d=i(d,h),d.return=p,d)}function g(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Po(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tn:return h=si(d.type,d.key,d.props,null,p.mode,h),h.ref=Fr(p,null,d),h.return=p,h;case rr:return d=To(d,p.mode,h),d.return=p,d;case kt:var k=d._init;return g(p,k(d._payload),h)}if(Hr(d)||Or(d))return d=Wt(d,p.mode,h,null),d.return=p,d;Un(p,d)}return null}function f(p,d,h,k){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(p,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:return h.key===b?u(p,d,h,k):null;case rr:return h.key===b?c(p,d,h,k):null;case kt:return b=h._init,f(p,d,b(h._payload),k)}if(Hr(h)||Or(h))return b!==null?null:v(p,d,h,k,null);Un(p,h)}return null}function m(p,d,h,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(h)||null,l(d,p,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Tn:return p=p.get(k.key===null?h:k.key)||null,u(d,p,k,b);case rr:return p=p.get(k.key===null?h:k.key)||null,c(d,p,k,b);case kt:var E=k._init;return m(p,d,h,E(k._payload),b)}if(Hr(k)||Or(k))return p=p.get(h)||null,v(d,p,k,b,null);Un(d,k)}return null}function x(p,d,h,k){for(var b=null,E=null,z=d,P=d=0,$=null;z!==null&&P<h.length;P++){z.index>P?($=z,z=null):$=z.sibling;var D=f(p,z,h[P],k);if(D===null){z===null&&(z=$);break}e&&z&&D.alternate===null&&t(p,z),d=o(D,d,P),E===null?b=D:E.sibling=D,E=D,z=$}if(P===h.length)return r(p,z),Y&&Ft(p,P),b;if(z===null){for(;P<h.length;P++)z=g(p,h[P],k),z!==null&&(d=o(z,d,P),E===null?b=z:E.sibling=z,E=z);return Y&&Ft(p,P),b}for(z=n(p,z);P<h.length;P++)$=m(z,p,P,h[P],k),$!==null&&(e&&$.alternate!==null&&z.delete($.key===null?P:$.key),d=o($,d,P),E===null?b=$:E.sibling=$,E=$);return e&&z.forEach(function(_){return t(p,_)}),Y&&Ft(p,P),b}function j(p,d,h,k){var b=Or(h);if(typeof b!="function")throw Error(C(150));if(h=b.call(h),h==null)throw Error(C(151));for(var E=b=null,z=d,P=d=0,$=null,D=h.next();z!==null&&!D.done;P++,D=h.next()){z.index>P?($=z,z=null):$=z.sibling;var _=f(p,z,D.value,k);if(_===null){z===null&&(z=$);break}e&&z&&_.alternate===null&&t(p,z),d=o(_,d,P),E===null?b=_:E.sibling=_,E=_,z=$}if(D.done)return r(p,z),Y&&Ft(p,P),b;if(z===null){for(;!D.done;P++,D=h.next())D=g(p,D.value,k),D!==null&&(d=o(D,d,P),E===null?b=D:E.sibling=D,E=D);return Y&&Ft(p,P),b}for(z=n(p,z);!D.done;P++,D=h.next())D=m(z,p,P,D.value,k),D!==null&&(e&&D.alternate!==null&&z.delete(D.key===null?P:D.key),d=o(D,d,P),E===null?b=D:E.sibling=D,E=D);return e&&z.forEach(function(H){return t(p,H)}),Y&&Ft(p,P),b}function w(p,d,h,k){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:e:{for(var b=h.key,E=d;E!==null;){if(E.key===b){if(b=h.type,b===nr){if(E.tag===7){r(p,E.sibling),d=i(E,h.props.children),d.return=p,p=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===kt&&Cl(b)===E.type){r(p,E.sibling),d=i(E,h.props),d.ref=Fr(p,E,h),d.return=p,p=d;break e}r(p,E);break}else t(p,E);E=E.sibling}h.type===nr?(d=Wt(h.props.children,p.mode,k,h.key),d.return=p,p=d):(k=si(h.type,h.key,h.props,null,p.mode,k),k.ref=Fr(p,d,h),k.return=p,p=k)}return a(p);case rr:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=To(h,p.mode,k),d.return=p,p=d}return a(p);case kt:return E=h._init,w(p,d,E(h._payload),k)}if(Hr(h))return x(p,d,h,k);if(Or(h))return j(p,d,h,k);Un(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,h),d.return=p,p=d):(r(p,d),d=Po(h,p.mode,k),d.return=p,p=d),a(p)):r(p,d)}return w}var Cr=Sc(!0),Cc=Sc(!1),Ni=Dt(null),_i=null,dr=null,aa=null;function la(){aa=dr=_i=null}function ua(e){var t=Ni.current;X(Ni),e._currentValue=t}function ds(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function yr(e,t){_i=e,aa=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(_i===null)throw Error(C(308));dr=e,_i.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Vt=null;function ca(e){Vt===null?Vt=[e]:Vt.push(e)}function bc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ca(t)):(r.next=i.next,i.next=r),t.interleaved=r,gt(e,n)}function gt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var wt=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,gt(e,r)}return i=n.interleaved,i===null?(t.next=t,ca(n)):(t.next=i.next,i.next=t),n.interleaved=t,gt(e,r)}function ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ys(e,r)}}function bl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ei(e,t,r,n){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==a&&(l===null?v.firstBaseUpdate=c:l.next=c,v.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;a=0,v=c=u=null,l=o;do{var f=l.lane,m=l.eventTime;if((n&f)===f){v!==null&&(v=v.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,j=l;switch(f=t,m=r,j.tag){case 1:if(x=j.payload,typeof x=="function"){g=x.call(m,g,f);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,f=typeof x=="function"?x.call(m,g,f):x,f==null)break e;g=Z({},g,f);break e;case 2:wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(c=v=m,u=g):v=v.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(v===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yt|=a,e.lanes=a,e.memoizedState=g}}function Nl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var _n={},et=Dt(_n),gn=Dt(_n),vn=Dt(_n);function qt(e){if(e===_n)throw Error(C(174));return e}function pa(e,t){switch(Q(vn,t),Q(gn,e),Q(et,_n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ho(t,e)}X(et),Q(et,t)}function br(){X(et),X(gn),X(vn)}function _c(e){qt(vn.current);var t=qt(et.current),r=Ho(t,e.type);t!==r&&(Q(gn,e),Q(et,r))}function fa(e){gn.current===e&&(X(et),X(gn))}var G=Dt(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function ha(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var ti=yt.ReactCurrentDispatcher,bo=yt.ReactCurrentBatchConfig,Xt=0,J=null,ae=null,ue=null,Pi=!1,en=!1,yn=0,Hf=0;function ge(){throw Error(C(321))}function ma(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Xe(e[r],t[r]))return!1;return!0}function ga(e,t,r,n,i,o){if(Xt=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Xf:Yf,e=r(n,i),en){o=0;do{if(en=!1,yn=0,25<=o)throw Error(C(301));o+=1,ue=ae=null,t.updateQueue=null,ti.current=Gf,e=r(n,i)}while(en)}if(ti.current=Ti,t=ae!==null&&ae.next!==null,Xt=0,ue=ae=J=null,Pi=!1,t)throw Error(C(300));return e}function va(){var e=yn!==0;return yn=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function $e(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function xn(e,t){return typeof t=="function"?t(e):t}function No(e){var t=$e(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=ae,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,u=null,c=o;do{var v=c.lane;if((Xt&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var g={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=g,a=n):u=u.next=g,J.lanes|=v,Yt|=v}c=c.next}while(c!==null&&c!==o);u===null?a=n:u.next=l,Xe(n,t.memoizedState)||(be=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,Yt|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _o(e){var t=$e(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Xe(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ec(){}function zc(e,t){var r=J,n=$e(),i=t(),o=!Xe(n.memoizedState,i);if(o&&(n.memoizedState=i,be=!0),n=n.queue,ya(Ac.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(r.flags|=2048,kn(9,Tc.bind(null,r,n,i,t),void 0,null),ce===null)throw Error(C(349));Xt&30||Pc(r,t,i)}return i}function Pc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Tc(e,t,r,n){t.value=r,t.getSnapshot=n,Rc(t)&&Lc(e)}function Ac(e,t,r){return r(function(){Rc(t)&&Lc(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Xe(e,r)}catch{return!0}}function Lc(e){var t=gt(e,1);t!==null&&Ke(t,e,1,-1)}function _l(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t.queue=e,e=e.dispatch=Kf.bind(null,J,e),[t.memoizedState,e]}function kn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Oc(){return $e().memoizedState}function ri(e,t,r,n){var i=Ge();J.flags|=e,i.memoizedState=kn(1|t,r,void 0,n===void 0?null:n)}function Qi(e,t,r,n){var i=$e();n=n===void 0?null:n;var o=void 0;if(ae!==null){var a=ae.memoizedState;if(o=a.destroy,n!==null&&ma(n,a.deps)){i.memoizedState=kn(t,r,o,n);return}}J.flags|=e,i.memoizedState=kn(1|t,r,o,n)}function El(e,t){return ri(8390656,8,e,t)}function ya(e,t){return Qi(2048,8,e,t)}function Mc(e,t){return Qi(4,2,e,t)}function Ic(e,t){return Qi(4,4,e,t)}function Dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,r){return r=r!=null?r.concat([e]):null,Qi(4,4,Dc.bind(null,t,e),r)}function xa(){}function Fc(e,t){var r=$e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ma(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function $c(e,t){var r=$e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ma(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Uc(e,t,r){return Xt&21?(Xe(r,t)||(r=Qu(),J.lanes|=r,Yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=r)}function Wf(e,t){var r=W;W=r!==0&&4>r?r:4,e(!0);var n=bo.transition;bo.transition={};try{e(!1),t()}finally{W=r,bo.transition=n}}function Vc(){return $e().memoizedState}function Qf(e,t,r){var n=At(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},qc(e))Hc(t,r);else if(r=bc(e,t,r,n),r!==null){var i=we();Ke(r,e,n,i),Wc(r,t,n)}}function Kf(e,t,r){var n=At(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(qc(e))Hc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,Xe(l,a)){var u=t.interleaved;u===null?(i.next=i,ca(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=bc(e,t,i,n),r!==null&&(i=we(),Ke(r,e,n,i),Wc(r,t,n))}}function qc(e){var t=e.alternate;return e===J||t!==null&&t===J}function Hc(e,t){en=Pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Wc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ys(e,r)}}var Ti={readContext:Fe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Xf={readContext:Fe,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:El,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,Dc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=Ge();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ge();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Qf.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:_l,useDebugValue:xa,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=_l(!1),t=e[0];return e=Wf.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=J,i=Ge();if(Y){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ce===null)throw Error(C(349));Xt&30||Pc(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,El(Ac.bind(null,n,o,e),[e]),n.flags|=2048,kn(9,Tc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ge(),t=ce.identifierPrefix;if(Y){var r=pt,n=dt;r=(n&~(1<<32-Qe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Hf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yf={readContext:Fe,useCallback:Fc,useContext:Fe,useEffect:ya,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Ic,useMemo:$c,useReducer:No,useRef:Oc,useState:function(){return No(xn)},useDebugValue:xa,useDeferredValue:function(e){var t=$e();return Uc(t,ae.memoizedState,e)},useTransition:function(){var e=No(xn)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:zc,useId:Vc,unstable_isNewReconciler:!1},Gf={readContext:Fe,useCallback:Fc,useContext:Fe,useEffect:ya,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Ic,useMemo:$c,useReducer:_o,useRef:Oc,useState:function(){return _o(xn)},useDebugValue:xa,useDeferredValue:function(e){var t=$e();return ae===null?t.memoizedState=e:Uc(t,ae.memoizedState,e)},useTransition:function(){var e=_o(xn)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:zc,useId:Vc,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ps(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ki={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=we(),i=At(e),o=ft(n,i);o.payload=t,r!=null&&(o.callback=r),t=Pt(e,o,i),t!==null&&(Ke(t,e,i,n),ei(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=we(),i=At(e),o=ft(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Pt(e,o,i),t!==null&&(Ke(t,e,i,n),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=we(),n=At(e),i=ft(r,n);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,n),t!==null&&(Ke(t,e,n,r),ei(t,e,n))}};function zl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!pn(r,n)||!pn(i,o):!0}function Qc(e,t,r){var n=!1,i=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=_e(t)?Qt:xe.current,n=t.contextTypes,o=(n=n!=null)?jr(e,i):Mt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function fs(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},da(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=_e(t)?Qt:xe.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ps(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),Ei(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var r="",n=t;do r+=Cp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Eo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jf=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,r){r=ft(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ri||(Ri=!0,Cs=n),hs(e,t)},r}function Xc(e,t,r){r=ft(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){hs(e,t),typeof n!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Tl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Jf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=ph.bind(null,e,t,r),t.then(e,e))}function Al(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ft(-1,1),t.tag=2,Pt(r,t,1))),r.lanes|=1),e)}var Zf=yt.ReactCurrentOwner,be=!1;function ke(e,t,r,n){t.child=e===null?Cc(t,null,r,n):Cr(t,e.child,r,n)}function Ll(e,t,r,n,i){r=r.render;var o=t.ref;return yr(t,i),n=ga(e,t,r,n,o,i),r=va(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Y&&r&&ia(t),t.flags|=1,ke(e,t,n,i),t.child)}function Ol(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Yc(e,t,o,n,i)):(e=si(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:pn,r(a,n)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Rt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(pn(o,n)&&e.ref===t.ref)if(be=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,vt(e,t,i)}return ms(e,t,r,n,i)}function Gc(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(fr,ze),ze|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(fr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Q(fr,ze),ze|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,Q(fr,ze),ze|=n;return ke(e,t,i,r),t.child}function Jc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,r,n,i){var o=_e(r)?Qt:xe.current;return o=jr(t,o),yr(t,i),r=ga(e,t,r,n,o,i),n=va(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Y&&n&&ia(t),t.flags|=1,ke(e,t,r,i),t.child)}function Ml(e,t,r,n,i){if(_e(r)){var o=!0;Si(t)}else o=!1;if(yr(t,i),t.stateNode===null)ni(e,t),Qc(t,r,n),fs(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=_e(r)?Qt:xe.current,c=jr(t,c));var v=r.getDerivedStateFromProps,g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==c)&&Pl(t,a,n,c),wt=!1;var f=t.memoizedState;a.state=f,Ei(t,n,a,i),u=t.memoizedState,l!==n||f!==u||Ne.current||wt?(typeof v=="function"&&(ps(t,r,v,n),u=t.memoizedState),(l=wt||zl(t,r,l,n,f,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Nc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ve(t.type,l),a.props=c,g=t.pendingProps,f=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=_e(r)?Qt:xe.current,u=jr(t,u));var m=r.getDerivedStateFromProps;(v=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||f!==u)&&Pl(t,a,n,u),wt=!1,f=t.memoizedState,a.state=f,Ei(t,n,a,i);var x=t.memoizedState;l!==g||f!==x||Ne.current||wt?(typeof m=="function"&&(ps(t,r,m,n),x=t.memoizedState),(c=wt||zl(t,r,c,n,f,x,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return gs(e,t,r,n,o,i)}function gs(e,t,r,n,i,o){Jc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&wl(t,r,!1),vt(e,t,o);n=t.stateNode,Zf.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,l,o)):ke(e,t,l,o),t.memoizedState=n.state,i&&wl(t,r,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?kl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kl(e,t.context,!1),pa(e,t.containerInfo)}function Il(e,t,r,n,i){return Sr(),sa(i),t.flags|=256,ke(e,t,r,n),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,r){var n=t.pendingProps,i=G.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(G,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gi(a,n,0,null),e=Wt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ys(r),t.memoizedState=vs,e):ka(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return eh(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Rt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rt(l,o):(o=Wt(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?ys(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=vs,n}return o=e.child,e=o.sibling,n=Rt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ka(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vn(e,t,r,n){return n!==null&&sa(n),Cr(t,e.child,null,r),e=ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eh(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Eo(Error(C(422))),Vn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Gi({mode:"visible",children:n.children},i,0,null),o=Wt(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=ys(a),t.memoizedState=vs,o);if(!(t.mode&1))return Vn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(C(419)),n=Eo(o,n,void 0),Vn(e,t,a,n)}if(l=(a&e.childLanes)!==0,be||l){if(n=ce,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Ke(n,e,i,-1))}return Na(),n=Eo(Error(C(421))),Vn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=zt(i.nextSibling),Te=t,Y=!0,We=null,e!==null&&(Oe[Me++]=dt,Oe[Me++]=pt,Oe[Me++]=Kt,dt=e.id,pt=e.overflow,Kt=t),t=ka(t,n.children),t.flags|=4096,t)}function Dl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ds(e.return,t,r)}function zo(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function td(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ke(e,t,n.children,r),n=G.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dl(e,r,t);else if(e.tag===19)Dl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Q(G,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&zi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),zo(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}zo(t,!0,r,null,o);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=Rt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function th(e,t,r){switch(t.tag){case 3:Zc(t),Sr();break;case 5:_c(t);break;case 1:_e(t.type)&&Si(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Q(Ni,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Q(G,G.current&1),t.flags|=128,null):r&t.child.childLanes?ed(e,t,r):(Q(G,G.current&1),e=vt(e,t,r),e!==null?e.sibling:null);Q(G,G.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return td(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(G,G.current),n)break;return null;case 22:case 23:return t.lanes=0,Gc(e,t,r)}return vt(e,t,r)}var rd,xs,nd,id;rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xs=function(){};nd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,qt(et.current);var o=null;switch(r){case"input":i=$o(e,i),n=$o(e,n),o=[];break;case"select":i=Z({},i,{value:void 0}),n=Z({},n,{value:void 0}),o=[];break;case"textarea":i=qo(e,i),n=qo(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=wi)}Wo(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(on.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(on.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&K("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};id=function(e,t,r,n){r!==n&&(t.flags|=4)};function $r(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function rh(e,t,r){var n=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return _e(t.type)&&ji(),ve(t),null;case 3:return n=t.stateNode,br(),X(Ne),X(xe),ha(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(_s(We),We=null))),xs(e,t),ve(t),null;case 5:fa(t);var i=qt(vn.current);if(r=t.type,e!==null&&t.stateNode!=null)nd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=qt(et.current),$n(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Je]=t,n[mn]=o,e=(t.mode&1)!==0,r){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(i=0;i<Qr.length;i++)K(Qr[i],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":Qa(n,o),K("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},K("invalid",n);break;case"textarea":Xa(n,o),K("invalid",n)}Wo(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Fn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Fn(n.textContent,l,e),i=["children",""+l]):on.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&K("scroll",n)}switch(r){case"input":An(n),Ka(n,o,!0);break;case"textarea":An(n),Ya(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=wi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Au(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Je]=t,e[mn]=n,rd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qo(r,n),r){case"dialog":K("cancel",e),K("close",e),i=n;break;case"iframe":case"object":case"embed":K("load",e),i=n;break;case"video":case"audio":for(i=0;i<Qr.length;i++)K(Qr[i],e);i=n;break;case"source":K("error",e),i=n;break;case"img":case"image":case"link":K("error",e),K("load",e),i=n;break;case"details":K("toggle",e),i=n;break;case"input":Qa(e,n),i=$o(e,n),K("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Z({},n,{value:void 0}),K("invalid",e);break;case"textarea":Xa(e,n),i=qo(e,n),K("invalid",e);break;default:i=n}Wo(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Ou(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ru(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&sn(e,u):typeof u=="number"&&sn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(on.hasOwnProperty(o)?u!=null&&o==="onScroll"&&K("scroll",e):u!=null&&qs(e,o,u,a))}switch(r){case"input":An(e),Ka(e,n,!1);break;case"textarea":An(e),Ya(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ot(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?hr(e,!!n.multiple,o,!1):n.defaultValue!=null&&hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=qt(vn.current),qt(et.current),$n(t)){if(n=t.stateNode,r=t.memoizedProps,n[Je]=t,(o=n.nodeValue!==r)&&(e=Te,e!==null))switch(e.tag){case 3:Fn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Je]=t,t.stateNode=n}return ve(t),null;case 13:if(X(G),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))jc(),Sr(),t.flags|=98560,o=!1;else if(o=$n(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Je]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else We!==null&&(_s(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):Na())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return br(),xs(e,t),e===null&&fn(t.stateNode.containerInfo),ve(t),null;case 10:return ua(t.type._context),ve(t),null;case 17:return _e(t.type)&&ji(),ve(t),null;case 19:if(X(G),o=t.memoizedState,o===null)return ve(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)$r(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=zi(e),a!==null){for(t.flags|=128,$r(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Q(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>_r&&(t.flags|=128,n=!0,$r(o,!1),t.lanes=4194304)}else{if(!n)if(e=zi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Y)return ve(t),null}else 2*ie()-o.renderingStartTime>_r&&r!==1073741824&&(t.flags|=128,n=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,r=G.current,Q(G,n?r&1|2:r&1),t):(ve(t),null);case 22:case 23:return ba(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function nh(e,t){switch(oa(t),t.tag){case 1:return _e(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),X(Ne),X(xe),ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fa(t),null;case 13:if(X(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(G),null;case 4:return br(),null;case 10:return ua(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var qn=!1,ye=!1,ih=typeof WeakSet=="function"?WeakSet:Set,A=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){te(e,t,n)}else r.current=null}function ks(e,t,r){try{r()}catch(n){te(e,t,n)}}var Bl=!1;function oh(e,t){if(ns=yi,e=uc(),na(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,v=0,g=e,f=null;t:for(;;){for(var m;g!==r||i!==0&&g.nodeType!==3||(l=a+i),g!==o||n!==0&&g.nodeType!==3||(u=a+n),g.nodeType===3&&(a+=g.nodeValue.length),(m=g.firstChild)!==null;)f=g,g=m;for(;;){if(g===e)break t;if(f===r&&++c===i&&(l=a),f===o&&++v===n&&(u=a),(m=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=m}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(is={focusedElem:e,selectionRange:r},yi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,w=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ve(t.type,j),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){te(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return x=Bl,Bl=!1,x}function tn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ks(t,r,o)}i=i.next}while(i!==n)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ws(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[mn],delete t[as],delete t[$f],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function Fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wi));else if(n!==4&&(e=e.child,e!==null))for(js(e,t,r),e=e.sibling;e!==null;)js(e,t,r),e=e.sibling}function Ss(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ss(e,t,r),e=e.sibling;e!==null;)Ss(e,t,r),e=e.sibling}var de=null,qe=!1;function xt(e,t,r){for(r=r.child;r!==null;)ad(e,t,r),r=r.sibling}function ad(e,t,r){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 5:ye||pr(r,t);case 6:var n=de,i=qe;de=null,xt(e,t,r),de=n,qe=i,de!==null&&(qe?(e=de,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):de.removeChild(r.stateNode));break;case 18:de!==null&&(qe?(e=de,r=r.stateNode,e.nodeType===8?jo(e.parentNode,r):e.nodeType===1&&jo(e,r),cn(e)):jo(de,r.stateNode));break;case 4:n=de,i=qe,de=r.stateNode.containerInfo,qe=!0,xt(e,t,r),de=n,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ks(r,t,a),i=i.next}while(i!==n)}xt(e,t,r);break;case 1:if(!ye&&(pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){te(r,t,l)}xt(e,t,r);break;case 21:xt(e,t,r);break;case 22:r.mode&1?(ye=(n=ye)||r.memoizedState!==null,xt(e,t,r),ye=n):xt(e,t,r);break;default:xt(e,t,r)}}function $l(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ih),t.forEach(function(n){var i=hh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ue(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,qe=!1;break e;case 3:de=l.stateNode.containerInfo,qe=!0;break e;case 4:de=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(de===null)throw Error(C(160));ad(o,a,i),de=null,qe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),n&4){try{tn(3,e,e.return),Xi(3,e)}catch(j){te(e,e.return,j)}try{tn(5,e,e.return)}catch(j){te(e,e.return,j)}}break;case 1:Ue(t,e),Ye(e),n&512&&r!==null&&pr(r,r.return);break;case 5:if(Ue(t,e),Ye(e),n&512&&r!==null&&pr(r,r.return),e.flags&32){var i=e.stateNode;try{sn(i,"")}catch(j){te(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Pu(i,o),Qo(l,a);var c=Qo(l,o);for(a=0;a<u.length;a+=2){var v=u[a],g=u[a+1];v==="style"?Ou(i,g):v==="dangerouslySetInnerHTML"?Ru(i,g):v==="children"?sn(i,g):qs(i,v,g,c)}switch(l){case"input":Uo(i,o);break;case"textarea":Tu(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?hr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[mn]=o}catch(j){te(e,e.return,j)}}break;case 6:if(Ue(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){te(e,e.return,j)}}break;case 3:if(Ue(t,e),Ye(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(j){te(e,e.return,j)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sa=ie())),n&4&&$l(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(ye=(c=ye)||v,Ue(t,e),ye=c):Ue(t,e),Ye(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(A=e,v=e.child;v!==null;){for(g=A=v;A!==null;){switch(f=A,m=f.child,f.tag){case 0:case 11:case 14:case 15:tn(4,f,f.return);break;case 1:pr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){te(n,r,j)}}break;case 5:pr(f,f.return);break;case 22:if(f.memoizedState!==null){Vl(g);continue}}m!==null?(m.return=f,A=m):Vl(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Lu("display",a))}catch(j){te(e,e.return,j)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(j){te(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ue(t,e),Ye(e),n&4&&$l(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(sd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(sn(i,""),n.flags&=-33);var o=Fl(e);Ss(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Fl(e);js(e,l,a);break;default:throw Error(C(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sh(e,t,r){A=e,ud(e)}function ud(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||qn;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ye;l=qn;var c=ye;if(qn=a,(ye=u)&&!c)for(A=i;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?ql(i):u!==null?(u.return=a,A=u):ql(i);for(;o!==null;)A=o,ud(o),o=o.sibling;A=i,qn=l,ye=c}Ul(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Ul(e)}}function Ul(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Xi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ye)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ve(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Nl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Nl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&cn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&ws(t)}catch(f){te(t,t.return,f)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Vl(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function ql(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xi(4,t)}catch(u){te(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){te(t,i,u)}}var o=t.return;try{ws(t)}catch(u){te(t,o,u)}break;case 5:var a=t.return;try{ws(t)}catch(u){te(t,a,u)}}}catch(u){te(t,t.return,u)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var ah=Math.ceil,Ai=yt.ReactCurrentDispatcher,wa=yt.ReactCurrentOwner,Be=yt.ReactCurrentBatchConfig,q=0,ce=null,oe=null,pe=0,ze=0,fr=Dt(0),le=0,wn=null,Yt=0,Yi=0,ja=0,rn=null,Ce=null,Sa=0,_r=1/0,lt=null,Ri=!1,Cs=null,Tt=null,Hn=!1,bt=null,Li=0,nn=0,bs=null,ii=-1,oi=0;function we(){return q&6?ie():ii!==-1?ii:ii=ie()}function At(e){return e.mode&1?q&2&&pe!==0?pe&-pe:qf.transition!==null?(oi===0&&(oi=Qu()),oi):(e=W,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e):1}function Ke(e,t,r,n){if(50<nn)throw nn=0,bs=null,Error(C(185));Cn(e,r,n),(!(q&2)||e!==ce)&&(e===ce&&(!(q&2)&&(Yi|=r),le===4&&St(e,pe)),Ee(e,n),r===1&&q===0&&!(t.mode&1)&&(_r=ie()+500,Wi&&Bt()))}function Ee(e,t){var r=e.callbackNode;Vp(e,t);var n=vi(e,e===ce?pe:0);if(n===0)r!==null&&Za(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Za(r),t===1)e.tag===0?Vf(Hl.bind(null,e)):xc(Hl.bind(null,e)),Bf(function(){!(q&6)&&Bt()}),r=null;else{switch(Ku(n)){case 1:r=Xs;break;case 4:r=Hu;break;case 16:r=gi;break;case 536870912:r=Wu;break;default:r=gi}r=vd(r,cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function cd(e,t){if(ii=-1,oi=0,q&6)throw Error(C(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var n=vi(e,e===ce?pe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Oi(e,n);else{t=n;var i=q;q|=2;var o=pd();(ce!==e||pe!==t)&&(lt=null,_r=ie()+500,Ht(e,t));do try{ch();break}catch(l){dd(e,l)}while(!0);la(),Ai.current=o,q=i,oe!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=Jo(e),i!==0&&(n=i,t=Ns(e,i))),t===1)throw r=wn,Ht(e,0),St(e,n),Ee(e,ie()),r;if(t===6)St(e,n);else{if(i=e.current.alternate,!(n&30)&&!lh(i)&&(t=Oi(e,n),t===2&&(o=Jo(e),o!==0&&(n=o,t=Ns(e,o))),t===1))throw r=wn,Ht(e,0),St(e,n),Ee(e,ie()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:$t(e,Ce,lt);break;case 3:if(St(e,n),(n&130023424)===n&&(t=Sa+500-ie(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ss($t.bind(null,e,Ce,lt),t);break}$t(e,Ce,lt);break;case 4:if(St(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-Qe(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ah(n/1960))-n,10<n){e.timeoutHandle=ss($t.bind(null,e,Ce,lt),n);break}$t(e,Ce,lt);break;case 5:$t(e,Ce,lt);break;default:throw Error(C(329))}}}return Ee(e,ie()),e.callbackNode===r?cd.bind(null,e):null}function Ns(e,t){var r=rn;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ce,Ce=r,t!==null&&_s(t)),e}function _s(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function lh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~ja,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Qe(t),n=1<<r;e[r]=-1,t&=~n}}function Hl(e){if(q&6)throw Error(C(327));xr();var t=vi(e,0);if(!(t&1))return Ee(e,ie()),null;var r=Oi(e,t);if(e.tag!==0&&r===2){var n=Jo(e);n!==0&&(t=n,r=Ns(e,n))}if(r===1)throw r=wn,Ht(e,0),St(e,t),Ee(e,ie()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,Ce,lt),Ee(e,ie()),null}function Ca(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(_r=ie()+500,Wi&&Bt())}}function Gt(e){bt!==null&&bt.tag===0&&!(q&6)&&xr();var t=q;q|=1;var r=Be.transition,n=W;try{if(Be.transition=null,W=1,e)return e()}finally{W=n,Be.transition=r,q=t,!(q&6)&&Bt()}}function ba(){ze=fr.current,X(fr)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Df(r)),oe!==null)for(r=oe.return;r!==null;){var n=r;switch(oa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ji();break;case 3:br(),X(Ne),X(xe),ha();break;case 5:fa(n);break;case 4:br();break;case 13:X(G);break;case 19:X(G);break;case 10:ua(n.type._context);break;case 22:case 23:ba()}r=r.return}if(ce=e,oe=e=Rt(e.current,null),pe=ze=t,le=0,wn=null,ja=Yi=Yt=0,Ce=rn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(r=Vt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Vt=null}return e}function dd(e,t){do{var r=oe;try{if(la(),ti.current=Ti,Pi){for(var n=J.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pi=!1}if(Xt=0,ue=ae=J=null,en=!1,yn=0,wa.current=null,r===null||r.return===null){le=1,wn=t,oe=null;break}e:{var o=e,a=r.return,l=r,u=t;if(t=pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=l,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var f=v.alternate;f?(v.updateQueue=f.updateQueue,v.memoizedState=f.memoizedState,v.lanes=f.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Al(a);if(m!==null){m.flags&=-257,Rl(m,a,l,o,t),m.mode&1&&Tl(o,c,t),t=m,u=c;var x=t.updateQueue;if(x===null){var j=new Set;j.add(u),t.updateQueue=j}else x.add(u);break e}else{if(!(t&1)){Tl(o,c,t),Na();break e}u=Error(C(426))}}else if(Y&&l.mode&1){var w=Al(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Rl(w,a,l,o,t),sa(Nr(u,l));break e}}o=u=Nr(u,l),le!==4&&(le=2),rn===null?rn=[o]:rn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Kc(o,u,t);bl(o,p);break e;case 1:l=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Tt===null||!Tt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Xc(o,l,t);bl(o,k);break e}}o=o.return}while(o!==null)}hd(r)}catch(b){t=b,oe===r&&r!==null&&(oe=r=r.return);continue}break}while(!0)}function pd(){var e=Ai.current;return Ai.current=Ti,e===null?Ti:e}function Na(){(le===0||le===3||le===2)&&(le=4),ce===null||!(Yt&268435455)&&!(Yi&268435455)||St(ce,pe)}function Oi(e,t){var r=q;q|=2;var n=pd();(ce!==e||pe!==t)&&(lt=null,Ht(e,t));do try{uh();break}catch(i){dd(e,i)}while(!0);if(la(),q=r,Ai.current=n,oe!==null)throw Error(C(261));return ce=null,pe=0,le}function uh(){for(;oe!==null;)fd(oe)}function ch(){for(;oe!==null&&!Lp();)fd(oe)}function fd(e){var t=gd(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?hd(e):oe=t,wa.current=null}function hd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=nh(r,t),r!==null){r.flags&=32767,oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(r=rh(r,t,ze),r!==null){oe=r;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function $t(e,t,r){var n=W,i=Be.transition;try{Be.transition=null,W=1,dh(e,t,r,n)}finally{Be.transition=i,W=n}return null}function dh(e,t,r,n){do xr();while(bt!==null);if(q&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(qp(e,o),e===ce&&(oe=ce=null,pe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hn||(Hn=!0,vd(gi,function(){return xr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var a=W;W=1;var l=q;q|=4,wa.current=null,oh(e,r),ld(r,e),Tf(is),yi=!!ns,is=ns=null,e.current=r,sh(r),Op(),q=l,W=a,Be.transition=o}else e.current=r;if(Hn&&(Hn=!1,bt=e,Li=i),o=e.pendingLanes,o===0&&(Tt=null),Dp(r.stateNode),Ee(e,ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ri)throw Ri=!1,e=Cs,Cs=null,e;return Li&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===bs?nn++:(nn=0,bs=e):nn=0,Bt(),null}function xr(){if(bt!==null){var e=Ku(Li),t=Be.transition,r=W;try{if(Be.transition=null,W=16>e?16:e,bt===null)var n=!1;else{if(e=bt,bt=null,Li=0,q&6)throw Error(C(331));var i=q;for(q|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(A=c;A!==null;){var v=A;switch(v.tag){case 0:case 11:case 15:tn(8,v,o)}var g=v.child;if(g!==null)g.return=v,A=g;else for(;A!==null;){v=A;var f=v.sibling,m=v.return;if(od(v),v===c){A=null;break}if(f!==null){f.return=m,A=f;break}A=m}}}var x=o.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var w=j.sibling;j.sibling=null,j=w}while(j!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:tn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){a=A;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,A=h;else e:for(a=d;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xi(9,l)}}catch(b){te(l,l.return,b)}if(l===a){A=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,A=k;break e}A=l.return}}if(q=i,Bt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot($i,e)}catch{}n=!0}return n}finally{W=r,Be.transition=t}}return!1}function Wl(e,t,r){t=Nr(r,t),t=Kc(e,t,1),e=Pt(e,t,1),t=we(),e!==null&&(Cn(e,1,t),Ee(e,t))}function te(e,t,r){if(e.tag===3)Wl(e,e,r);else for(;t!==null;){if(t.tag===3){Wl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Tt===null||!Tt.has(n))){e=Nr(r,e),e=Xc(t,e,1),t=Pt(t,e,1),e=we(),t!==null&&(Cn(t,1,e),Ee(t,e));break}}t=t.return}}function ph(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&r,ce===e&&(pe&r)===r&&(le===4||le===3&&(pe&130023424)===pe&&500>ie()-Sa?Ht(e,0):ja|=r),Ee(e,t)}function md(e,t){t===0&&(e.mode&1?(t=On,On<<=1,!(On&130023424)&&(On=4194304)):t=1);var r=we();e=gt(e,t),e!==null&&(Cn(e,t,r),Ee(e,r))}function fh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),md(e,r)}function hh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),md(e,r)}var gd;gd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)be=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return be=!1,th(e,t,r);be=!!(e.flags&131072)}else be=!1,Y&&t.flags&1048576&&kc(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ni(e,t),e=t.pendingProps;var i=jr(t,xe.current);yr(t,r),i=ga(null,t,n,e,i,r);var o=va();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(n)?(o=!0,Si(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,fs(t,n,e,r),t=gs(null,t,n,!0,o,r)):(t.tag=0,Y&&o&&ia(t),ke(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=gh(n),e=Ve(n,e),i){case 0:t=ms(null,t,n,e,r);break e;case 1:t=Ml(null,t,n,e,r);break e;case 11:t=Ll(null,t,n,e,r);break e;case 14:t=Ol(null,t,n,Ve(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ve(n,i),ms(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ve(n,i),Ml(e,t,n,i,r);case 3:e:{if(Zc(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Nc(e,t),Ei(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nr(Error(C(423)),t),t=Il(e,t,n,r,i);break e}else if(n!==i){i=Nr(Error(C(424)),t),t=Il(e,t,n,r,i);break e}else for(Pe=zt(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,We=null,r=Cc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),n===i){t=vt(e,t,r);break e}ke(e,t,n,r)}t=t.child}return t;case 5:return _c(t),e===null&&cs(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,os(n,i)?a=null:o!==null&&os(n,o)&&(t.flags|=32),Jc(e,t),ke(e,t,a,r),t.child;case 6:return e===null&&cs(t),null;case 13:return ed(e,t,r);case 4:return pa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cr(t,null,n,r):ke(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ve(n,i),Ll(e,t,n,i,r);case 7:return ke(e,t,t.pendingProps,r),t.child;case 8:return ke(e,t,t.pendingProps.children,r),t.child;case 12:return ke(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Q(Ni,n._currentValue),n._currentValue=a,o!==null)if(Xe(o.value,a)){if(o.children===i.children&&!Ne.current){t=vt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=ft(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),ds(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),ds(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ke(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,yr(t,r),i=Fe(i),n=n(i),t.flags|=1,ke(e,t,n,r),t.child;case 14:return n=t.type,i=Ve(n,t.pendingProps),i=Ve(n.type,i),Ol(e,t,n,i,r);case 15:return Yc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ve(n,i),ni(e,t),t.tag=1,_e(n)?(e=!0,Si(t)):e=!1,yr(t,r),Qc(t,n,i),fs(t,n,i,r),gs(null,t,n,!0,e,r);case 19:return td(e,t,r);case 22:return Gc(e,t,r)}throw Error(C(156,t.tag))};function vd(e,t){return qu(e,t)}function mh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new mh(e,t,r,n)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gh(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ws)return 11;if(e===Qs)return 14}return 2}function Rt(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function si(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")_a(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nr:return Wt(r.children,i,o,t);case Hs:a=8,i|=8;break;case Io:return e=De(12,r,t,i|2),e.elementType=Io,e.lanes=o,e;case Do:return e=De(13,r,t,i),e.elementType=Do,e.lanes=o,e;case Bo:return e=De(19,r,t,i),e.elementType=Bo,e.lanes=o,e;case _u:return Gi(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bu:a=10;break e;case Nu:a=9;break e;case Ws:a=11;break e;case Qs:a=14;break e;case kt:a=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=De(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Wt(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function Gi(e,t,r,n){return e=De(22,e,n,t),e.elementType=_u,e.lanes=r,e.stateNode={isHidden:!1},e}function Po(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function To(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ea(e,t,r,n,i,o,a,l,u){return e=new vh(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(o),e}function yh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function yd(e){if(!e)return Mt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(_e(r))return yc(e,r,t)}return t}function xd(e,t,r,n,i,o,a,l,u){return e=Ea(r,n,!0,e,i,o,a,l,u),e.context=yd(null),r=e.current,n=we(),i=At(r),o=ft(n,i),o.callback=t??null,Pt(r,o,i),e.current.lanes=i,Cn(e,i,n),Ee(e,n),e}function Ji(e,t,r,n){var i=t.current,o=we(),a=At(i);return r=yd(r),t.context===null?t.context=r:t.pendingContext=r,t=ft(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Pt(i,t,a),e!==null&&(Ke(e,i,a,o),ei(e,i,a)),a}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function za(e,t){Ql(e,t),(e=e.alternate)&&Ql(e,t)}function xh(){return null}var kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}Zi.prototype.render=Pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ji(e,t,null,null)};Zi.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Ji(null,e,null,null)}),t[mt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<jt.length&&t!==0&&t<jt[r].priority;r++);jt.splice(r,0,e),r===0&&Zu(e)}};function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kl(){}function kh(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=Mi(a);o.call(c)}}var a=xd(t,n,e,0,null,!1,!1,"",Kl);return e._reactRootContainer=a,e[mt]=a.current,fn(e.nodeType===8?e.parentNode:e),Gt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Mi(u);l.call(c)}}var u=Ea(e,0,!1,null,null,!1,!1,"",Kl);return e._reactRootContainer=u,e[mt]=u.current,fn(e.nodeType===8?e.parentNode:e),Gt(function(){Ji(t,u,r,n)}),u}function to(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Mi(a);l.call(u)}}Ji(t,a,e,i)}else a=kh(r,t,e,i,n);return Mi(a)}Xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wr(t.pendingLanes);r!==0&&(Ys(t,r|1),Ee(t,ie()),!(q&6)&&(_r=ie()+500,Bt()))}break;case 13:Gt(function(){var n=gt(e,1);if(n!==null){var i=we();Ke(n,e,1,i)}}),za(e,1)}};Gs=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var r=we();Ke(t,e,134217728,r)}za(e,134217728)}};Yu=function(e){if(e.tag===13){var t=At(e),r=gt(e,t);if(r!==null){var n=we();Ke(r,e,t,n)}za(e,t)}};Gu=function(){return W};Ju=function(e,t){var r=W;try{return W=e,t()}finally{W=r}};Xo=function(e,t,r){switch(t){case"input":if(Uo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Hi(n);if(!i)throw Error(C(90));zu(n),Uo(n,i)}}}break;case"textarea":Tu(e,r);break;case"select":t=r.value,t!=null&&hr(e,!!r.multiple,t,!1)}};Du=Ca;Bu=Gt;var wh={usingClientEntryPoint:!1,Events:[Nn,ar,Hi,Mu,Iu,Ca]},Ur={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jh={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{$i=Wn.inject(jh),Ze=Wn}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wh;Re.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(t))throw Error(C(200));return yh(e,t,null,r)};Re.createRoot=function(e,t){if(!Ta(e))throw Error(C(299));var r=!1,n="",i=kd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ea(e,1,!1,null,null,r,!1,n,i),e[mt]=t.current,fn(e.nodeType===8?e.parentNode:e),new Pa(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Uu(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Gt(e)};Re.hydrate=function(e,t,r){if(!eo(t))throw Error(C(200));return to(null,e,t,!0,r)};Re.hydrateRoot=function(e,t,r){if(!Ta(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=kd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=xd(t,null,e,1,r??null,i,!1,o,a),e[mt]=t.current,fn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Zi(t)};Re.render=function(e,t,r){if(!eo(t))throw Error(C(200));return to(null,e,t,!1,r)};Re.unmountComponentAtNode=function(e){if(!eo(e))throw Error(C(40));return e._reactRootContainer?(Gt(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Re.unstable_batchedUpdates=Ca;Re.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!eo(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return to(e,t,r,!1,n)};Re.version="18.3.1-next-f1338f8080-20240426";function wd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wd)}catch(e){console.error(e)}}wd(),wu.exports=Re;var Sh=wu.exports,Xl=Sh;Oo.createRoot=Xl.createRoot,Oo.hydrateRoot=Xl.hydrateRoot;const rt=Object.create(null);rt.open="0";rt.close="1";rt.ping="2";rt.pong="3";rt.message="4";rt.upgrade="5";rt.noop="6";const ai=Object.create(null);Object.keys(rt).forEach(e=>{ai[rt[e]]=e});const Es={type:"error",data:"parser error"},jd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Sd=typeof ArrayBuffer=="function",Cd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Aa=({type:e,data:t},r,n)=>jd&&t instanceof Blob?r?n(t):Yl(t,n):Sd&&(t instanceof ArrayBuffer||Cd(t))?r?n(t):Yl(new Blob([t]),n):n(rt[e]+(t||"")),Yl=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function Gl(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ao;function Ch(e,t){if(jd&&e.data instanceof Blob)return e.data.arrayBuffer().then(Gl).then(t);if(Sd&&(e.data instanceof ArrayBuffer||Cd(e.data)))return t(Gl(e.data));Aa(e,!1,r=>{Ao||(Ao=new TextEncoder),t(Ao.encode(r))})}const Jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Kr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Jl.length;e++)Kr[Jl.charCodeAt(e)]=e;const bh=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),v=new Uint8Array(c);for(n=0;n<r;n+=4)o=Kr[e.charCodeAt(n)],a=Kr[e.charCodeAt(n+1)],l=Kr[e.charCodeAt(n+2)],u=Kr[e.charCodeAt(n+3)],v[i++]=o<<2|a>>4,v[i++]=(a&15)<<4|l>>2,v[i++]=(l&3)<<6|u&63;return c},Nh=typeof ArrayBuffer=="function",Ra=(e,t)=>{if(typeof e!="string")return{type:"message",data:bd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:_h(e.substring(1),t)}:ai[r]?e.length>1?{type:ai[r],data:e.substring(1)}:{type:ai[r]}:Es},_h=(e,t)=>{if(Nh){const r=bh(e);return bd(r,t)}else return{base64:!0,data:e}},bd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Nd="",Eh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{Aa(o,!1,l=>{n[a]=l,++i===r&&t(n.join(Nd))})})},zh=(e,t)=>{const r=e.split(Nd),n=[];for(let i=0;i<r.length;i++){const o=Ra(r[i],t);if(n.push(o),o.type==="error")break}return n};function Ph(){return new TransformStream({transform(e,t){Ch(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let Ro;function Qn(e){return e.reduce((t,r)=>t+r.length,0)}function Kn(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Th(e,t){Ro||(Ro=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(Qn(r)<1)break;const u=Kn(r,1);o=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Qn(r)<2)break;const u=Kn(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Qn(r)<8)break;const u=Kn(r,8),c=new DataView(u.buffer,u.byteOffset,u.length),v=c.getUint32(0);if(v>Math.pow(2,21)-1){l.enqueue(Es);break}i=v*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Qn(r)<i)break;const u=Kn(r,i);l.enqueue(Ra(o?u:Ro.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(Es);break}}}})}const _d=4;function se(e){if(e)return Ah(e)}function Ah(e){for(var t in se.prototype)e[t]=se.prototype[t];return e}se.prototype.on=se.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};se.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};se.prototype.off=se.prototype.removeListener=se.prototype.removeAllListeners=se.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};se.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};se.prototype.emitReserved=se.prototype.emit;se.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};se.prototype.hasListeners=function(e){return!!this.listeners(e).length};const ro=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Ie=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Rh="arraybuffer";function Ed(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Lh=Ie.setTimeout,Oh=Ie.clearTimeout;function no(e,t){t.useNativeTimers?(e.setTimeoutFn=Lh.bind(Ie),e.clearTimeoutFn=Oh.bind(Ie)):(e.setTimeoutFn=Ie.setTimeout.bind(Ie),e.clearTimeoutFn=Ie.clearTimeout.bind(Ie))}const Mh=1.33;function Ih(e){return typeof e=="string"?Dh(e):Math.ceil((e.byteLength||e.size)*Mh)}function Dh(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function zd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Bh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Fh(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class $h extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class La extends se{constructor(t){super(),this.writable=!1,no(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new $h(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Ra(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Bh(t);return r.length?"?"+r:""}}class Uh extends La{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};zh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Eh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=zd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Pd=!1;try{Pd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Vh=Pd;function qh(){}class Hh extends Uh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class tt extends se{constructor(t,r,n){super(),this.createRequest=t,no(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Ed(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=tt.requestsCount++,tt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=qh,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete tt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}tt.requestsCount=0;tt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Zl);else if(typeof addEventListener=="function"){const e="onpagehide"in Ie?"pagehide":"unload";addEventListener(e,Zl,!1)}}function Zl(){for(let e in tt.requests)tt.requests.hasOwnProperty(e)&&tt.requests[e].abort()}const Wh=function(){const e=Td({xdomain:!1});return e&&e.responseType!==null}();class Qh extends Hh{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Wh&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new tt(Td,this.uri(),t)}}function Td(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Vh))return new XMLHttpRequest}catch{}if(!t)try{return new Ie[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ad=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Kh extends La{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Ad?{}:Ed(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Aa(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&ro(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=zd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Lo=Ie.WebSocket||Ie.MozWebSocket;class Xh extends Kh{createSocket(t,r,n){return Ad?new Lo(t,r,n):r?new Lo(t,r):new Lo(t)}doWrite(t,r){this.ws.send(r)}}class Yh extends La{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Th(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Ph();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&ro(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Gh={websocket:Xh,webtransport:Yh,polling:Qh},Jh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Zh=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function zs(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=Jh.exec(e||""),o={},a=14;for(;a--;)o[Zh[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=em(o,o.path),o.queryKey=tm(o,o.query),o}function em(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function tm(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Ps=typeof addEventListener=="function"&&typeof removeEventListener=="function",li=[];Ps&&addEventListener("offline",()=>{li.forEach(e=>e())},!1);class Lt extends se{constructor(t,r){if(super(),this.binaryType=Rh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=zs(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=zs(r.host).host);no(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fh(this.opts.query)),Ps&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},li.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=_d,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Lt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Lt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ih(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ro(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Lt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ps&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=li.indexOf(this._offlineEventListener);n!==-1&&li.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Lt.protocol=_d;class rm extends Lt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Lt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Lt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=r.name,this.emitReserved("upgradeError",f)}}))};function o(){n||(n=!0,v(),r.close(),r=null)}const a=g=>{const f=new Error("probe error: "+g);f.transport=r.name,o(),this.emitReserved("upgradeError",f)};function l(){a("transport closed")}function u(){a("socket closed")}function c(g){r&&g.name!==r.name&&o()}const v=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let nm=class extends rm{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>Gh[o]).filter(o=>!!o)),super(n?i:t,i)}};function im(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=zs(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const om=typeof ArrayBuffer=="function",sm=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Rd=Object.prototype.toString,am=typeof Blob=="function"||typeof Blob<"u"&&Rd.call(Blob)==="[object BlobConstructor]",lm=typeof File=="function"||typeof File<"u"&&Rd.call(File)==="[object FileConstructor]";function Oa(e){return om&&(e instanceof ArrayBuffer||sm(e))||am&&e instanceof Blob||lm&&e instanceof File}function ui(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ui(e[r]))return!0;return!1}if(Oa(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ui(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ui(e[r]))return!0;return!1}function um(e){const t=[],r=e.data,n=e;return n.data=ci(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ci(e,t,r){if(!e)return e;if(Oa(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ci(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ci(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ci(e[i],t));return n}return e}function cm(e,t){return e.data=Ts(e.data,t),delete e.attachments,e}function Ts(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Ts(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Ts(e[r],t));return e}const dm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var V;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(V||(V={}));class pm{constructor(t){this.replacer=t}encode(t){return(t.type===V.EVENT||t.type===V.ACK)&&ui(t)?this.encodeAsBinary({type:t.type===V.EVENT?V.BINARY_EVENT:V.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===V.BINARY_EVENT||t.type===V.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=um(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Ma extends se{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===V.BINARY_EVENT;n||r.type===V.BINARY_ACK?(r.type=n?V.EVENT:V.ACK,this.reconstructor=new fm(r)):super.emitReserved("decoded",r)}else if(Oa(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(V[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===V.BINARY_EVENT||n.type===V.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!hm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(Ma.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case V.CONNECT:return eu(r);case V.DISCONNECT:return r===void 0;case V.CONNECT_ERROR:return typeof r=="string"||eu(r);case V.EVENT:case V.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&dm.indexOf(r[0])===-1);case V.ACK:case V.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class fm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=cm(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const hm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function eu(e){return Object.prototype.toString.call(e)==="[object Object]"}const mm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Ma,Encoder:pm,get PacketType(){return V}},Symbol.toStringTag,{value:"Module"}));function He(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const gm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ld extends se{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[He(t,"open",this.onopen.bind(this)),He(t,"packet",this.onpacket.bind(this)),He(t,"error",this.onerror.bind(this)),He(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(gm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:V.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,g=r.pop();this._registerAckCallback(v,g),a.id=v}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:V.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case V.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case V.EVENT:case V.BINARY_EVENT:this.onevent(t);break;case V.ACK:case V.BINARY_ACK:this.onack(t);break;case V.DISCONNECT:this.ondisconnect();break;case V.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:V.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:V.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Rr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Rr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Rr.prototype.reset=function(){this.attempts=0};Rr.prototype.setMin=function(e){this.ms=e};Rr.prototype.setMax=function(e){this.max=e};Rr.prototype.setJitter=function(e){this.jitter=e};class As extends se{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,no(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Rr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||mm;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new nm(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=He(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=He(r,"error",o);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(He(t,"ping",this.onping.bind(this)),He(t,"data",this.ondata.bind(this)),He(t,"error",this.onerror.bind(this)),He(t,"close",this.onclose.bind(this)),He(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){ro(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ld(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vr={};function di(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=im(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=Vr[i]&&o in Vr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new As(n,t):(Vr[i]||(Vr[i]=new As(n,t)),u=Vr[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(di,{Manager:As,Socket:Ld,io:di,connect:di});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Od=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ym={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=R.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},u)=>R.createElement("svg",{ref:u,...ym,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Od("lucide",i),...l},[...a.map(([c,v])=>R.createElement(c,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=R.forwardRef(({className:n,...i},o)=>R.createElement(xm,{ref:o,iconNode:t,className:Od(`lucide-${vm(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=L("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=L("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=L("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=L("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=L("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=L("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=L("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=L("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=L("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=L("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=L("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=L("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=L("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=L("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=L("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=L("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=L("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=L("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=L("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=L("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=L("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=L("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=L("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=L("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=L("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=L("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=L("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=L("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=L("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=L("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=L("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=L("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=L("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=L("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=L("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=L("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=L("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=L("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=L("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=L("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=L("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=L("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=L("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xm({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const o=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),u=Number(n||0).toFixed(2);function c(P,$){const D=$.length.toString().padStart(2,"0");return`${P}${D}${$}`}const v=c("00","br.gov.bcb.pix"),g=c("01",o),f=c("26",`${v}${g}`),m=c("52","0000"),x=c("53","986"),j=c("54",u),w=c("58","BR"),p=c("59",a),d=c("60",l),h=c("05",i||"***"),k=c("62",h),b=`000201${f}${m}${x}${j}${w}${p}${d}${k}6304`;let E=65535;for(let P=0;P<b.length;P++){E^=b.charCodeAt(P)<<8;for(let $=0;$<8;$++)E&32768?E=(E<<1^4129)&65535:E=E<<1&65535}const z=(E&65535).toString(16).toUpperCase().padStart(4,"0");return`${b}${z}`}function Ym({socket:e,menu:t,operador:r,onEnviarPedido:n}){const[i,o]=R.useState(""),[a,l]=R.useState([]),[u,c]=R.useState("todas"),[v,g]=R.useState(null),[f,m]=R.useState("cardapio"),[x,j]=R.useState("pix"),[w,p]=R.useState(""),[d,h]=R.useState(()=>{const y=new Date;return y.setDate(y.getDate()+7),y.toISOString().split("T")[0]}),[k,b]=R.useState(null),[E,z]=R.useState(!1),[P,$]=R.useState(!1);R.useEffect(()=>{fetch("/api/pix-config").then(y=>y.json()).then(y=>b(y)).catch(y=>console.error("Erro ao carregar chave PIX:",y))},[]);const D=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],_=t&&Array.isArray(t.categorias)?t.categorias:[],H=y=>{if(y.categoria)return y.categoria;const T=_.find(F=>F.id===y.categoriaId);return T?T.nome:"Geral"},ee=["todas",...new Set(D.map(y=>H(y)))],he=y=>{l(T=>T.find(O=>O.id===y.id)?T.map(O=>O.id===y.id?{...O,quantidade:O.quantidade+1}:O):[...T,{...y,quantidade:1,observacao:""}])},nt=(y,T)=>{l(F=>F.map(O=>{if(O.id===y){const me=O.quantidade+T;return me>0?{...O,quantidade:me}:null}return O}).filter(Boolean))},it=(y,T)=>{l(F=>F.map(O=>O.id===y?{...O,observacao:T}:O))},ot=y=>{l(T=>T.filter(F=>F.id!==y))},N=a.reduce((y,T)=>y+T.preco*T.quantidade,0),M=a.reduce((y,T)=>y+T.quantidade,0),I=k!=null&&k.chavePix?Xm({chave:k.chavePix,nome:k.nomeBeneficiario,cidade:k.cidadeBeneficiario,valor:N}):"",S=()=>{I&&(navigator.clipboard.writeText(I),$(!0),setTimeout(()=>$(!1),3e3))},B=y=>{if(y&&y.preventDefault(),!i.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(a.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(x==="pagar_depois"){if(!w.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!d){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const T={cliente:i.trim(),criadoPor:r?r.nome:"Caixa",itens:a.map(O=>({id:O.id,nome:O.nome,preco:O.preco,quantidade:O.quantidade,observacao:O.observacao||""})),total:N,formaPagamento:x,telefoneCliente:x==="pagar_depois"?w.trim():w.trim()||void 0,dataCobranca:x==="pagar_depois"?d:void 0},F=n||(e?(O,me)=>e.emit("criar_pedido",O,me):null);F?F(T,O=>{var st,En;const me=((st=O==null?void 0:O.order)==null?void 0:st.numero)||((En=O==null?void 0:O.pedido)==null?void 0:En.numero)||"OK";g(`Pedido #${me} enviado para a cozinha!`),z(!1),o(""),p(""),l([]),j("pix"),m("cardapio"),setTimeout(()=>g(null),4e3)}):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then(O=>O.json()).then(O=>{O&&O.order&&(g(`Pedido #${O.order.numero} enviado para a cozinha!`),z(!1),o(""),p(""),l([]),j("pix"),m("cardapio"),setTimeout(()=>g(null),4e3))}).catch(O=>{console.error("Erro ao enviar pedido:",O),alert("Erro ao comunicar com o servidor.")})},re=D.filter(y=>{const T=y.disponivel!==!1&&y.ativo!==!1,F=H(y),O=u==="todas"||F===u||y.categoriaId===u;return T&&O});return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
        .caixa-container {
          display: grid;
          grid-template-columns: 1fr 440px;
          gap: 1.25rem;
          min-height: calc(100dvh - 110px);
        }

        .mobile-view-toggle {
          display: none;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          background: var(--app-surface-1);
          padding: 0.35rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
          margin-bottom: 0.75rem;
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .mobile-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem;
          border: none;
          background: transparent;
          color: var(--app-ink-muted);
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: var(--radius-md);
          cursor: pointer;
        }

        .mobile-toggle-btn.active {
          background: var(--primary);
          color: var(--on-primary);
        }

        .mobile-cart-float-bar {
          display: none;
          position: fixed;
          bottom: 4.8rem;
          left: 0.75rem;
          right: 0.75rem;
          background: var(--primary);
          color: var(--on-primary);
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          font-size: 0.95rem;
          justify-content: space-between;
          align-items: center;
          z-index: 90;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .caixa-container {
            grid-template-columns: 1fr;
            display: flex;
            flex-direction: column;
          }

          .mobile-view-toggle {
            display: grid;
          }

          .caixa-carrinho-col {
            padding-bottom: 6rem !important;
          }

          .caixa-cardapio-col.mobile-hidden,
          .caixa-carrinho-col.mobile-hidden {
            display: none !important;
          }

          .mobile-cart-float-bar.mobile-show-float {
            display: flex !important;
          }
        }

        .caixa-cardapio-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cat-pills {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-btn {
          padding: 0.55rem 1.1rem;
          border-radius: var(--radius-pill);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
          min-height: 40px;
        }

        .cat-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        }

        .produtos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.85rem;
        }

        .prod-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 0.9rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          cursor: pointer;
          transition: border-color 130ms ease, background 130ms ease;
          min-height: 140px;
          -webkit-tap-highlight-color: transparent;
        }

        .prod-card:hover {
          border-color: var(--primary);
          background: var(--app-surface-2);
        }

        .prod-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-title);
          line-height: 1.25;
        }

        .prod-cat {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-block;
          margin-bottom: 0.2rem;
        }

        .prod-desc {
          font-size: 0.82rem;
          color: var(--app-ink-muted);
          line-height: 1.35;
          margin-top: 0.35rem;
        }

        .prod-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 0.4rem;
        }

        .prod-preco {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--status-pronto);
        }

        .prod-add-btn {
          background: var(--primary);
          color: var(--on-primary);
          border: none;
          border-radius: var(--radius-md);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Carrinho Panel */
        .caixa-carrinho-col {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: fit-content;
        }

        .carrinho-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .carrinho-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cliente-input-box {
          background: var(--app-canvas);
          border: 2px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .cliente-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-title);
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          width: 100%;
        }

        .carrinho-itens {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-right: 0.3rem;
          min-height: 160px;
        }

        .carrinho-item {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .item-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .item-nome {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-title);
        }

        .item-qtd-ctrl {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--app-canvas);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--app-border);
        }

        .qtd-btn {
          background: none;
          border: none;
          color: var(--app-ink);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem;
          border-radius: var(--radius-sm);
          min-width: 32px;
          min-height: 32px;
        }

        .qtd-val {
          font-weight: 700;
          font-size: 0.95rem;
          min-width: 22px;
          text-align: center;
          color: var(--text-title);
        }

        .item-preco {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--status-pronto);
        }

        .obs-input {
          background: var(--app-canvas);
          border: 1px dashed var(--app-border);
          border-radius: var(--radius-sm);
          padding: 0.35rem 0.5rem;
          font-size: 0.82rem;
          color: var(--text-title);
          width: 100%;
          outline: none;
        }

        /* Grid de Forma de Pagamento */
        .pgto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
        }

        .pgto-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-md);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          min-height: 40px;
        }

        .pgto-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        }

        .pgto-btn.pagar-depois.active {
          background: var(--status-preparo);
          color: #ffffff;
          border-color: var(--status-preparo);
        }

        .carrinho-footer {
          border-top: 1px solid var(--app-border);
          padding-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .total-label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--app-ink-muted);
        }

        .total-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--status-pronto);
        }

        .btn-enviar {
          width: 100%;
          padding: 0.9rem;
          font-size: 1.05rem;
        }

        /* Modal Overlay PIX */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
          padding: 1rem;
        }

        .modal-card-pix {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 440px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${f==="cardapio"?"active":""}`,onClick:()=>m("cardapio"),children:[s.jsx(Wd,{size:16})," Cardápio de Produtos"]}),s.jsxs("button",{className:`mobile-toggle-btn ${f==="carrinho"?"active":""}`,onClick:()=>m("carrinho"),children:[s.jsx(ct,{size:16})," Comanda (",M,")"]})]}),s.jsxs("div",{className:`caixa-cardapio-col ${f!=="cardapio"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(ct,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),v&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(Da,{size:18}),s.jsx("span",{children:v})]}),s.jsx("div",{className:"cat-pills",children:ee.map(y=>s.jsx("button",{className:`cat-btn ${u===y?"active":""}`,onClick:()=>c(y),children:y==="todas"?"Todas as Categorias":y},y))}),s.jsx("div",{className:"produtos-grid",children:re.map(y=>s.jsxs("div",{className:"prod-card",onClick:()=>he(y),children:[s.jsxs("div",{children:[s.jsx("span",{className:"prod-cat",children:H(y)}),s.jsx("div",{className:"prod-title",children:y.nome}),y.descricao&&s.jsx("div",{className:"prod-desc",children:y.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("span",{className:"prod-preco",children:["R$ ",(y.preco||0).toFixed(2)]}),s.jsx("button",{className:"prod-add-btn",title:"Adicionar ao Pedido",children:s.jsx(Ms,{size:18})})]})]},y.id))})]}),s.jsxs("div",{className:`caixa-carrinho-col ${f!=="carrinho"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsxs("div",{className:"carrinho-title",children:[s.jsx(ct,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Comanda Atual"})]}),a.length>0&&s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:()=>l([]),children:"Limpar"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx(Er,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:i,onChange:y=>o(y.target.value)})]})]}),s.jsx("div",{className:"carrinho-itens",children:a.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(ct,{size:36,opacity:.4}),s.jsx("p",{children:"Nenhum item adicionado ainda."}),s.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):a.map(y=>s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:y.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(y.preco*y.quantidade).toFixed(2)]})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>nt(y.id,-1),children:s.jsx(Rm,{size:14})}),s.jsx("span",{className:"qtd-val",children:y.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>nt(y.id,1),children:s.jsx(Ms,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>ot(y.id),children:s.jsx(Di,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(zm,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:y.observacao,onChange:T=>it(y.id,T.target.value)})]})]},y.id))}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${x==="pix"?"active":""}`,onClick:()=>j("pix"),children:[s.jsx(pi,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="dinheiro"?"active":""}`,onClick:()=>j("dinheiro"),children:[s.jsx($d,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="debito"?"active":""}`,onClick:()=>j("debito"),children:[s.jsx(pi,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="credito"?"active":""}`,onClick:()=>j("credito"),children:[s.jsx(pi,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${x==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>j("pagar_depois"),children:[s.jsx(Id,{size:16})," Pagar Depois (Fiado)"]})]}),x==="pix"&&N>0&&s.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>z(!0),children:[s.jsx(iu,{size:18})," Gerar QR Code PIX (R$ ",N.toFixed(2),")"]}),x==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Os,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:w,onChange:y=>p(y.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(io,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:d,onChange:y=>h(y.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Fd,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",N.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:B,disabled:a.length===0||!i.trim(),children:[s.jsx(ou,{size:18})," Enviar para Cozinha"]})]})]}),E&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card-pix",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[s.jsx(iu,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>z(!1),children:s.jsx(Km,{size:16})})]}),s.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",s.jsx("strong",{style:{color:"var(--text-title)"},children:i||"Cliente no Caixa"})]}),I?s.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(I)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):s.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),s.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",N.toFixed(2)]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",s.jsx("strong",{children:(k==null?void 0:k.nomeBeneficiario)||"Festa do Morango"})," (",k==null?void 0:k.chavePix,")"]}),I&&s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:s.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:S,children:[P?s.jsx(kr,{size:16,color:"var(--primary)"}):s.jsx(bm,{size:16}),P?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[s.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>z(!1),children:"Voltar"}),s.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:B,disabled:a.length===0||!i.trim(),children:[s.jsx(ou,{size:16})," Confirmar & Enviar"]})]})]})}),s.jsxs("div",{className:`mobile-cart-float-bar ${f==="cardapio"&&a.length>0?"mobile-show-float":""}`,onClick:()=>m("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(ct,{size:20}),s.jsxs("span",{children:["Ver Pedido (",M," ",M===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",N.toFixed(2)," →"]})]})]})}function Gm({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=R.useState(Date.now()),[a,l]=R.useState("ativos");R.useEffect(()=>{const m=setInterval(()=>{o(Date.now())},1e3);return()=>clearInterval(m)},[]);const u=e.filter(m=>m.status==="pendente"||m.status==="em_preparo"||m.status==="entrega_parcial"),c=u.filter(m=>a==="pendentes"?m.status==="pendente":a==="preparo"?m.status==="em_preparo":a==="parcial"?m.status==="entrega_parcial":a==="meus"&&t?m.preparadoPor&&m.preparadoPor.includes(t.nome):!0),v=m=>{const x=new Date(m).getTime(),j=i-x;return Math.floor(j/6e4)},g=m=>{const x=new Date(m).getTime(),j=Math.max(0,i-x),w=Math.floor(j/6e4),p=Math.floor(j%6e4/1e3);return`${String(w).padStart(2,"0")}:${String(p).padStart(2,"0")}`},f=m=>{const x=v(m);return x>=10?"urgente":x>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
        .cozinha-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cozinha-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        @media (max-width: 768px) {
          .cozinha-header {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
            padding: 0.85rem;
          }
          .cozinha-header .nav-tabs {
            display: flex !important;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding: 0.25rem;
          }
        }

        .cozinha-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
        }

        .kds-card {
          background: var(--app-surface-1);
          border: 2px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 130ms ease, transform 130ms ease;
        }

        .kds-card.normal {
          border-color: rgba(21, 107, 22, 0.4);
        }

        .kds-card.alerta {
          border-color: var(--status-preparo);
        }

        .kds-card.urgente {
          border-color: var(--primary);
          animation: pulseBorder 1.5s infinite;
        }

        @keyframes pulseBorder {
          0%, 100% { border-color: var(--primary); }
          50% { border-color: #ff5247; }
        }

        .kds-card-header {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .comanda-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.6rem;
          color: var(--text-title);
          line-height: 1;
        }

        .cliente-nome {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--blue-link);
        }

        .preparador-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--status-preparo);
          background: rgba(230, 134, 25, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(230, 134, 25, 0.3);
          margin-top: 0.2rem;
        }

        .timer-box {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: monospace;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
          background: var(--app-canvas);
        }

        .timer-box.normal { color: var(--status-pronto); }
        .timer-box.alerta { color: var(--status-preparo); }
        .timer-box.urgente { color: var(--primary); }

        .kds-card-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .kds-item-row {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 0.6rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          transition: all 130ms ease;
        }

        .kds-item-row.item-entregue {
          opacity: 0.55;
          text-decoration: line-through;
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.25);
        }

        .item-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
        }

        .item-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .item-qtd-badge {
          background: var(--primary);
          color: var(--on-primary);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.95rem;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .item-titulo {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-title);
        }

        .item-check-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--app-border);
          background: var(--app-canvas);
          color: var(--text-title);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 130ms ease;
        }

        .item-check-btn.checked {
          background: var(--status-pronto);
          color: #ffffff;
          border-color: var(--status-pronto);
        }

        .item-obs-highlight {
          background: rgba(255, 229, 143, 0.12);
          color: var(--text-obs);
          border: 1px solid rgba(255, 229, 143, 0.3);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }

        .kds-card-footer {
          padding: 0.8rem 1rem;
          background: var(--app-surface-2);
          border-top: 1px solid var(--app-border);
        }

        .btn-kds {
          width: 100%;
          padding: 0.85rem;
          font-size: 1rem;
          border-radius: var(--radius-md);
        }

        .kds-vazio {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          background: var(--app-surface-1);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--app-border);
          color: var(--app-ink-muted);
          gap: 0.8rem;
        }
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(jn,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",u.length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",u.filter(m=>m.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",u.filter(m=>m.status==="em_preparo").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",u.filter(m=>m.status==="entrega_parcial").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",u.filter(m=>m.preparadoPor&&m.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:c.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Ii,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):c.map(m=>{const x=f(m.criadoEm),j=g(m.criadoEm),w=m.itens.reduce((h,k)=>h+(k.quantidade||1),0),p=m.itens.filter(h=>h.entregue).reduce((h,k)=>h+(k.quantidade||1),0),d=p>0&&p<w;return s.jsxs("div",{className:`kds-card ${x}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",m.numero]}),s.jsx("div",{className:"cliente-nome",children:m.cliente}),m.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",m.dataCobranca?new Date(m.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:m.formaPagamento?m.formaPagamento.toUpperCase():"PIX"}),m.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx(Er,{size:12}),s.jsxs("span",{children:["Preparo: ",m.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?s.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",p,"/",w,")"]}):s.jsx("span",{className:`badge badge-${m.status==="pendente"?"pendente":"preparo"}`,children:m.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${x}`,children:[s.jsx(io,{size:14}),s.jsx("span",{children:j})]})]})]}),s.jsxs("div",{className:"kds-card-body",children:[s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[s.jsx(Ud,{size:14,color:"var(--primary)"}),s.jsxs("span",{children:["Clique no item para marcar entrega parcial (",p,"/",w," entregues):"]})]}),m.itens.map((h,k)=>s.jsxs("div",{className:`kds-item-row ${h.entregue?"item-entregue":""}`,children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("div",{className:"item-info",children:[s.jsxs("span",{className:"item-qtd-badge",children:[h.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:h.nome})]}),s.jsxs("button",{type:"button",className:`item-check-btn ${h.entregue?"checked":""}`,onClick:()=>n&&n(m.id,k,!h.entregue),title:h.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[h.entregue?s.jsx(qd,{size:14}):s.jsx(Hd,{size:14}),s.jsx("span",{children:h.entregue?"Entregue":"Entregar"})]})]}),h.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(Am,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",h.observacao]})]})]},k))]}),s.jsx("div",{className:"kds-card-footer",children:m.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(m.id,"em_preparo"),children:[s.jsx(Mm,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(m.id,"pronto"),children:[s.jsx(Ia,{size:18})," Pronto / Chamar Cliente"]})})]},m.id)})})]})}let tr=null;function Jm(){if(!tr){const e=window.AudioContext||window.webkitAudioContext;e&&(tr=new e)}return tr&&tr.state==="suspended"&&tr.resume(),tr}function lu(){try{const e=Jm();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function Zm({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=R.useState(!0);R.useEffect(()=>{t&&t.status==="pronto"&&i&&lu()},[t,i]);const a=e.filter(c=>c.status==="pronto"||c.status==="entrega_parcial"),l=e.filter(c=>c.status==="entregue").slice(0,8),u=t&&(t.status==="pronto"||t.status==="entrega_parcial")?t:a[0];return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
        .chamada-tv-container {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.25rem;
          height: calc(100dvh - 110px);
        }

        @media (max-width: 1024px) {
          .chamada-tv-container {
            grid-template-columns: 1fr;
            height: auto !important;
          }
        }

        .tv-main-panel {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .tv-panel-controls {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .destaque-label {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .destaque-card {
          width: 100%;
          max-width: 700px;
          background: var(--app-surface-2);
          border: 3px solid var(--status-pronto);
          border-radius: var(--radius-lg);
          padding: clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 1.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .destaque-comanda {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          color: var(--text-title);
          line-height: 1;
        }

        .destaque-cliente {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 6vw, 3rem);
          font-weight: 900;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
          word-break: break-word;
        }

        .destaque-itens-box {
          width: 100%;
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }

        .destaque-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.6rem;
          background: var(--app-surface-2);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .destaque-item-row.item-entregue {
          opacity: 0.5;
          text-decoration: line-through;
        }

        .destaque-acoes {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          gap: 0.5rem;
        }

        .tv-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .sidebar-section {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .sidebar-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.6rem;
        }

        .prontos-lista {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
          max-height: 280px;
        }

        @media (max-width: 1024px) {
          .prontos-lista {
            max-height: none !important;
            overflow-y: visible !important;
          }
        }

        .pronto-item {
          background: var(--app-surface-2);
          border: 1px solid var(--status-pronto);
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 130ms ease;
        }

        .pronto-item:hover {
          background: var(--app-border);
        }

        .entregues-lista {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .entregue-chip {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          color: var(--app-ink-muted);
          padding: 0.4rem 0.7rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .chamada-vazio {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--app-ink-muted);
          padding: 3rem 1rem;
        }
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{o(!i),i||lu()},children:[i?s.jsx(qm,{size:18,color:"var(--status-pronto)"}):s.jsx(Hm,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(Ia,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),u?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",u.numero]}),s.jsx("div",{className:"destaque-cliente",children:u.cliente}),u.itens&&s.jsxs("div",{className:"destaque-itens-box",children:[s.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[s.jsx("span",{children:"Conferência de Itens no Balcão:"}),s.jsxs("span",{style:{color:"var(--primary)"},children:[u.itens.filter(c=>c.entregue).length," de ",u.itens.length," entregues"]})]}),u.itens.map((c,v)=>{const g=!!c.entregue;return s.jsxs("div",{className:`destaque-item-row ${g?"item-entregue":""}`,style:{background:g?"rgba(16, 185, 129, 0.12)":"var(--app-surface-2)",border:g?"1px solid var(--primary)":"1px solid var(--app-border)",transition:"all 130ms ease"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{className:g?"badge badge-pronto":"badge badge-pendente",children:[c.quantidade,"x"]}),s.jsx("span",{style:{color:"var(--text-title)",textDecoration:g?"line-through":"none",fontWeight:700},children:c.nome}),c.observacao&&s.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",c.observacao,")"]})]}),s.jsxs("button",{type:"button",className:`btn ${g?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:f=>{f.stopPropagation(),n&&n(u.id,v,!g)},children:[g?s.jsx(qd,{size:16}):s.jsx(Hd,{size:16}),s.jsx("span",{children:g?"✓ Entregue":"Dar Baixa"})]})]},v)})]}),s.jsx("div",{className:"destaque-acoes",children:s.jsxs("button",{className:"btn btn-success",style:{flex:1,padding:"0.9rem",fontSize:"1.05rem",borderRadius:"var(--radius-md)"},onClick:()=>r(u.id,"entregue"),children:[s.jsx(au,{size:20})," Finalizar & Entregar Todos os Itens"]})})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Bi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Ii,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",a.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:a.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):a.map(c=>s.jsxs("div",{className:"pronto-item",onClick:()=>r(c.id,"entregue"),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",c.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:c.cliente}),c.status==="entrega_parcial"&&s.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",c.itens?c.itens.filter(v=>v.entregue).length:0,"/",c.itens?c.itens.length:0,")"]})]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",fontSize:"0.8rem"},children:["Entregue ",s.jsx(Md,{size:14})]})]},c.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(au,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:l.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):l.map(c=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",c.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:c.cliente})]},c.id))})]})]})]})}const Qd=[{id:"burger",nome:"Hambúrguer",component:s.jsx(wm,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(Im,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(Nm,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(Cm,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(Om,{size:18})},{id:"coffee",nome:"Café",component:s.jsx(Sm,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(zr,{size:18})}];function uu(e){const t=Qd.find(r=>r.id===e);return t?t.component:s.jsx(zr,{size:16})}function eg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o}){const[a,l]=R.useState("todas"),[u,c]=R.useState(""),[v,g]=R.useState(!1),[f,m]=R.useState(!1),[x,j]=R.useState(null),[w,p]=R.useState(""),[d,h]=R.useState(""),[k,b]=R.useState(""),[E,z]=R.useState(""),[P,$]=R.useState(""),[D,_]=R.useState("burger"),H=(e==null?void 0:e.categorias)||[],ee=(e==null?void 0:e.produtos)||[],he=ee.filter(S=>{const B=a==="todas"||S.categoriaId===a,re=!u.trim()||S.nome.toLowerCase().includes(u.toLowerCase())||S.descricao&&S.descricao.toLowerCase().includes(u.toLowerCase());return B&&re}),nt=(S=null)=>{var B;S?(j(S),p(S.nome),h(S.categoriaId),b(S.preco.toString()),z(S.descricao||"")):(j(null),p(""),h(((B=H[0])==null?void 0:B.id)||"lanches"),b(""),z("")),g(!0)},it=()=>{$(""),_("burger"),m(!0)},ot=S=>{if(S.preventDefault(),!w.trim()||!k||!d){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:x?x.id:void 0,categoriaId:d,nome:w.trim(),preco:parseFloat(k),descricao:E.trim(),disponivel:x?x.disponivel:!0}),g(!1)},N=S=>{if(S.preventDefault(),!P.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:P.trim(),icone:D}),m(!1)},M=S=>{window.confirm(`Tem certeza que deseja excluir o produto "${S.nome}"?`)&&r(S.id)},I=S=>{const B=ee.filter(re=>re.categoriaId===S.id).length;if(B>0){alert(`Não é possível excluir a categoria "${S.nome}" pois ela possui ${B} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${S.nome}"?`)&&o(S.id).then(re=>{re&&re.error?alert(re.error):a===S.id&&l("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
        .cardapio-crud-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .crud-topbar {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .crud-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .search-box {
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          max-width: 320px;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-title);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }

        .cat-pills-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.4rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
        }

        .cat-pill-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
          box-shadow: 0 2px 8px var(--primary-glow);
        }

        .crud-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          box-shadow: var(--shadow-md);
        }

        .crud-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .crud-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .crud-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          vertical-align: middle;
        }

        .crud-table tr:hover td {
          background: var(--app-surface-2);
        }

        .action-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          justify-content: flex-end;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 1rem;
        }

        .modal-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 520px;
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .icone-selector {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.3rem;
        }

        .icone-opt {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-md);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .icone-opt.selected {
          border-color: var(--primary);
          background: var(--primary);
          color: var(--on-primary);
        }
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(zr,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Vd,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:S=>c(S.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:it,children:[s.jsx(tu,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>nt(),children:[s.jsx(Ms,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${a==="todas"?"active":""}`,onClick:()=>l("todas"),children:[s.jsx(Wd,{size:14})," Todas (",ee.length,")"]}),H.map(S=>{const B=ee.filter(re=>re.categoriaId===S.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${a===S.id?"active":""}`,onClick:()=>l(S.id),children:[uu(S.icone)," ",s.jsx("span",{children:S.nome})," (",B,")"]}),B===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>I(S),children:s.jsx(Di,{size:13})})]},S.id)})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:he.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"6",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(Fd,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):he.map(S=>{const B=H.find(re=>re.id===S.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(S.id),children:S.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Fm,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Bm,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:S.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[uu(B==null?void 0:B.icone)," ",(B==null?void 0:B.nome)||S.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",S.preco.toFixed(2)]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:S.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>nt(S),children:[s.jsx(Lm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>M(S),children:[s.jsx(Di,{size:14})," Excluir"]})]})})]},S.id)})})]})}),v&&s.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(zr,{size:20,color:"var(--primary)"}),s.jsx("span",{children:x?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:ot,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:w,onChange:S=>p(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:d,onChange:S=>h(S.target.value),required:!0,children:H.map(S=>s.jsx("option",{value:S.id,children:S.nome},S.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:k,onChange:S=>b(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:E,onChange:S=>z(S.target.value)})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(kr,{size:18})," Salvar Produto"]})]})]})]})}),f&&s.jsx("div",{className:"modal-backdrop",onClick:()=>m(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(tu,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:N,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:P,onChange:S=>$(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:Qd.map(S=>s.jsxs("button",{type:"button",className:`icone-opt ${D===S.id?"selected":""}`,onClick:()=>_(S.id),children:[S.component,s.jsx("span",{children:S.nome})]},S.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>m(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(kr,{size:18})," Criar Categoria"]})]})]})]})})]})}function tg({pedidos:e,operador:t}){const[r,n]=R.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Ba,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const o=w=>{n(p=>p===w?null:w)},a=(w,p)=>{w.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${p}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(d=>d.json()).catch(d=>console.error("Erro ao quitar pagamento:",d))},l=w=>w.statusPagamento==="pago"?!1:w.statusPagamento==="pendente_pagamento"||w.formaPagamento==="pagar_depois",u=e.filter(w=>w.status!=="cancelado"),c=u.filter(w=>!l(w)),v=u.filter(w=>l(w)),g=c.reduce((w,p)=>w+(Number(p.total)||0),0),f=v.reduce((w,p)=>w+(Number(p.total)||0),0),m=u.length,x=m>0?(g+f)/m:0,j=w=>{if(w.formaPagamento==="pagar_depois"||w.statusPagamento==="pendente_pagamento"){const p=w.dataCobranca?new Date(w.dataCobranca).toLocaleDateString():"Sem Data";return w.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(kr,{size:12})," Pagar Depois (Quitado ",p,")"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(io,{size:12})," Pagar Depois (Cobrar: ",p,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(pi,{size:12})," ",w.formaPagamento?w.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
        .vendas-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .vendas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .metric-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon-box {
          background: rgba(21, 107, 22, 0.12);
          color: var(--primary);
          padding: 0.7rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-family: var(--font-title);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-title);
          line-height: 1.1;
        }

        /* Desktop Table View */
        .vendas-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
        }

        .vendas-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .vendas-table th {
          background: var(--app-surface-2);
          padding: 0.75rem 0.9rem;
          font-family: var(--font-title);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .vendas-table td {
          padding: 0.75rem 0.9rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .vendas-table tr:hover td {
          background: var(--app-surface-2);
        }

        /* Mobile Card Accordion View */
        .vendas-mobile-list {
          display: none;
          flex-direction: column;
          gap: 0.6rem;
        }

        .venda-card-mobile {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .venda-card-mobile:active {
          background: var(--app-surface-2);
        }

        .venda-card-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .venda-card-details {
          border-top: 1px dashed var(--app-border);
          padding-top: 0.55rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        @media (max-width: 768px) {
          .vendas-table-wrapper {
            display: none;
          }
          .vendas-mobile-list {
            display: flex;
          }
        }
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Rs,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Controle de Cobrança"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsx("span",{children:"Tempo Real"})})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx($d,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",g.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(Id,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",f.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(ct,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total de Comandas"}),s.jsxs("div",{className:"metric-value",children:[m," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx($m,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",x.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:u.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"2.5rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido registrado no sistema ainda."})}):u.map(w=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",w.numero]})}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:w.cliente}),w.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(Os,{size:12}),s.jsx("span",{children:w.telefoneCliente})]})]}),s.jsx("td",{children:j(w)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(w.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${w.status==="pronto"?"pronto":w.status==="entregue"?"entregue":"preparo"}`,children:w.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.85rem"},children:[s.jsxs("div",{children:["Lançado: ",s.jsx("strong",{children:w.criadoPor||"Caixa"})]}),w.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Preparo: ",w.preparadoPor]})]}),s.jsx("td",{children:s.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:l(w)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:p=>a(p,w.id),children:[s.jsx(kr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ii,{size:15})," Quitado"]})})})]},w.id))})]})}),s.jsx("div",{className:"vendas-mobile-list",children:u.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido registrado no sistema ainda."}):u.map(w=>{const p=r===w.id;return s.jsxs("div",{className:"venda-card-mobile",onClick:()=>o(w.id),children:[s.jsxs("div",{className:"venda-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",w.numero]}),s.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:w.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(w.total)||0).toFixed(2)]}),p?s.jsx(Bd,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Dd,{size:16,color:"var(--app-ink-muted)"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[s.jsx("div",{children:j(w)}),s.jsx("span",{className:`badge badge-${w.status==="pronto"?"pronto":w.status==="entregue"?"entregue":"preparo"}`,children:w.status.toUpperCase()})]}),p&&s.jsxs("div",{className:"venda-card-details",children:[w.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[s.jsx(Os,{size:13}),s.jsxs("span",{children:["Contato / WhatsApp: ",s.jsx("strong",{children:w.telefoneCliente})]})]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem"},children:[s.jsxs("span",{children:["Lançado: ",s.jsx("strong",{children:w.criadoPor||"Caixa"})]}),w.preparadoPor&&s.jsxs("span",{children:["Cozinha: ",s.jsx("strong",{children:w.preparadoPor})]})]}),s.jsx("div",{style:{marginTop:"0.3rem",display:"flex",justifyContent:"flex-end"},children:l(w)?s.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:d=>a(d,w.id),children:[s.jsx(kr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ii,{size:15})," Pagamento Confirmado / Quitado"]})})]})]},w.id)})})]})}function rg({operador:e}){const[t,r]=R.useState([]),[n,i]=R.useState(!1),[o,a]=R.useState(!1),[l,u]=R.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[c,v]=R.useState({}),[g,f]=R.useState(null),m=e&&e.role==="master",[x,j]=R.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[w,p]=R.useState(!1);R.useEffect(()=>{m&&(k(),d())},[m]);const d=()=>{fetch("/api/pix-config").then(_=>_.json()).then(_=>{_&&_.chavePix&&j(_)}).catch(_=>console.error("Erro ao carregar PIX config:",_))},h=_=>{_.preventDefault(),p(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(H=>H.json()).then(H=>{p(!1),H&&H.status==="success"?(f("Chave PIX atualizada com sucesso!"),setTimeout(()=>f(null),4e3)):alert(H.error||"Erro ao salvar chave PIX.")}).catch(()=>{p(!1),alert("Erro de conexão ao salvar chave PIX.")})},k=()=>{fetch("/api/users").then(_=>_.json()).then(_=>r(_)).catch(_=>console.error("Erro ao carregar usuários:",_))};if(!m)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Ba,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const b=_=>{v(H=>({...H,[_]:!H[_]}))},E=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},z=_=>{u({..._}),a(!0),i(!0)},P=_=>{if(_.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const H=o?`/api/users/${l.id}`:"/api/users";fetch(H,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(he=>he.json()).then(he=>{he&&he.status==="success"?(f(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),k(),setTimeout(()=>f(null),4e3)):alert(he.error||"Erro ao salvar usuário.")}).catch(he=>alert("Erro de conexão com o servidor."))},$=(_,H)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${H}"?`)&&fetch(`/api/users/${_}`,{method:"DELETE"}).then(ee=>ee.json()).then(ee=>{ee&&ee.status==="success"?(f(`Conta de "${H}" excluída com sucesso.`),k(),setTimeout(()=>f(null),4e3)):alert(ee.error||"Erro ao excluir conta.")})},D=_=>{switch(_){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(km,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(ct,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(jn,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Bi,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:_})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
        .usuarios-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .usuarios-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        .usuarios-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .usuarios-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .usuarios-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .usuarios-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .usuarios-table tr:hover td {
          background: var(--app-surface-2);
        }

        /* Insígnias em Tons de Verde Hasteados */
        .badge-role-master {
          background-color: #eef7ec !important;
          color: #156b16 !important;
          border: 1px solid #b7dfb8 !important;
        }

        .badge-role-caixa {
          background-color: #e6f9f0 !important;
          color: #0d8a57 !important;
          border: 1px solid #a3ebc9 !important;
        }

        .badge-role-cozinha {
          background-color: #f2f7ed !important;
          color: #4a7c2a !important;
          border: 1px solid #cae0ba !important;
        }

        .badge-role-tv {
          background-color: #e8f5f3 !important;
          color: #207a6d !important;
          border: 1px solid #b2e0d8 !important;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 1rem;
        }

        .modal-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 480px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Is,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:E,children:[s.jsx(Vm,{size:18})," Nova Conta"]})]}),g&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(Da,{size:18}),s.jsx("span",{children:g})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(_=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:_.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:_.usuario})}),s.jsx("td",{children:D(_.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:c[_.id]?_.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>b(_.id),title:"Revelar/Ocultar Senha",children:c[_.id]?s.jsx(_m,{size:14}):s.jsx(Em,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>z(_),children:[s.jsx(Dm,{size:14})," Editar"]}),_.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>$(_.id,_.nome),children:[s.jsx(Di,{size:14})," Excluir"]})]})})]},_.id))})]})}),s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[s.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Pm,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),s.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",s.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),s.jsxs("form",{onSubmit:h,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),s.jsxs("select",{className:"form-input",value:x.tipoChave,onChange:_=>j({...x,tipoChave:_.target.value}),children:[s.jsx("option",{value:"email",children:"E-mail"}),s.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),s.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),s.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Chave PIX *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:x.chavePix,onChange:_=>j({...x,chavePix:_.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:x.nomeBeneficiario,onChange:_=>j({...x,nomeBeneficiario:_.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cidade *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:x.cidadeBeneficiario,onChange:_=>j({...x,cidadeBeneficiario:_.target.value}),required:!0})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:w,children:w?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Er,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:_=>u({...l,nome:_.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:_=>u({...l,usuario:_.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:_=>u({...l,senha:_.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:_=>u({...l,role:_.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function ng({logs:e,operador:t}){const[r,n]=R.useState(""),[i,o]=R.useState("todas"),[a,l]=R.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Ba,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const c=f=>{l(m=>m===f?null:f)},v=e.filter(f=>{const m=i==="todas"||f.acao===i,x=r.toLowerCase().trim(),j=!x||String(f.numeroPedido).includes(x)||f.cliente&&f.cliente.toLowerCase().includes(x)||f.usuario&&f.usuario.toLowerCase().includes(x)||f.descricao&&f.descricao.toLowerCase().includes(x);return m&&j}),g=f=>{switch(f){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(jm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(jn,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ia,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Da,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:f})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
        .logs-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .logs-topbar {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0.85rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.55rem 0.85rem;
          min-width: 240px;
          max-width: 380px;
          flex: 1;
        }

        .search-input {
          border: none;
          background: transparent;
          color: var(--text-title);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          outline: none;
          width: 100%;
          padding: 0;
          min-height: auto;
        }

        .search-input::placeholder {
          color: var(--app-ink-muted);
        }

        .logs-pills-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.3rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.8rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          white-space: nowrap;
          min-height: 38px;
        }

        .cat-pill-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        }

        /* Desktop Table View */
        .logs-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
        }

        .logs-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .logs-table th {
          background: var(--app-surface-2);
          padding: 0.75rem 0.9rem;
          font-family: var(--font-title);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .logs-table td {
          padding: 0.75rem 0.9rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          vertical-align: top;
        }

        .logs-table tr:hover td {
          background: var(--app-surface-2);
        }

        .log-time {
          font-family: monospace;
          font-size: 0.82rem;
          color: var(--app-ink-muted);
          white-space: nowrap;
        }

        .item-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.45rem;
          font-size: 0.8rem;
          color: var(--text-title);
        }

        /* Mobile Card Accordion View */
        .logs-mobile-list {
          display: none;
          flex-direction: column;
          gap: 0.6rem;
        }

        .log-card-mobile {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .log-card-mobile:active {
          background: var(--app-surface-2);
        }

        .log-card-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .log-card-details {
          border-top: 1px dashed var(--app-border);
          padding-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        @media (max-width: 768px) {
          .logs-table-wrapper {
            display: none;
          }
          .logs-mobile-list {
            display: flex;
          }
        }
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Ls,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Vd,{size:16,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:f=>n(f.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(f=>f.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(f=>f.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(f=>f.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(f=>f.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:v.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):v.map(f=>{const m=new Date(f.timestamp),x=`${m.toLocaleDateString()} ${m.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(io,{size:13}),s.jsx("span",{children:x})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx(Er,{size:14,color:"var(--primary)"}),s.jsx("span",{children:f.usuario})]})}),s.jsx("td",{children:g(f.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",f.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",f.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:f.descricao}),f.itens&&Array.isArray(f.itens)&&f.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:f.itens.map((j,w)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(Ud,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[j.quantidade,"x"]}),s.jsx("span",{children:j.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(j.preco*j.quantidade).toFixed(2),")"]}),j.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",j.observacao,"]"]})]},w))})]})]},f.id)})})]})}),s.jsx("div",{className:"logs-mobile-list",children:v.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):v.map(f=>{const m=new Date(f.timestamp),x=m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),j=a===f.id;return s.jsxs("div",{className:"log-card-mobile",onClick:()=>c(f.id),children:[s.jsxs("div",{className:"log-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",f.numeroPedido]}),s.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:f.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[g(f.acao),s.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:x}),j?s.jsx(Bd,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Dd,{size:16,color:"var(--app-ink-muted)"})]})]}),j&&s.jsxs("div",{className:"log-card-details",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[s.jsx(Er,{size:13,color:"var(--primary)"}),s.jsxs("span",{children:["Operador: ",s.jsx("strong",{children:f.usuario})]}),s.jsxs("span",{style:{marginLeft:"auto"},children:[m.toLocaleDateString()," ",m.toLocaleTimeString()]})]}),s.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:f.descricao}),f.itens&&Array.isArray(f.itens)&&f.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:f.itens.map((w,p)=>s.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[w.quantidade,"x"]})," ",w.nome," (R$ ",(w.preco*w.quantidade).toFixed(2),")",w.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",w.observacao,"]"]})]},p))})]})]},f.id)})})]})}const ne=di(window.location.origin,{transports:["websocket","polling"]});function ig(){const[e,t]=R.useState("caixa"),[r,n]=R.useState(!1),[i,o]=R.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");R.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i)},[i]);const[a,l]=R.useState(()=>{try{const y=localStorage.getItem("operador_lanchonete");return y?JSON.parse(y):null}catch{return null}}),[u,c]=R.useState(""),[v,g]=R.useState(""),[f,m]=R.useState(null),[x,j]=R.useState(!1),[w,p]=R.useState([]),[d,h]=R.useState([]),[k,b]=R.useState([]),[E,z]=R.useState(null);R.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const P=()=>{o(y=>y==="escuro"?"claro":"escuro")};R.useEffect(()=>{fetch("/api/logs").then(y=>y.json()).then(y=>b(y)).catch(y=>console.error("Erro ao buscar logs:",y))},[]);const $=y=>{if(y.preventDefault(),m(null),!u.trim()||!v.trim()){m("Preencha usuário e senha.");return}j(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:v.trim()})}).then(T=>T.json()).then(T=>{if(j(!1),T&&T.status==="success"){const F=T.user;l(F),localStorage.setItem("operador_lanchonete",JSON.stringify(F)),F.role==="cozinha"?t("cozinha"):F.role==="tv"?t("chamada"):t("caixa")}else m(T.error||"Credenciais inválidas.")}).catch(T=>{j(!1),m("Erro de conexão com o servidor.")})},D=()=>{l(null),localStorage.removeItem("operador_lanchonete"),c(""),g(""),m(null)};R.useEffect(()=>(ne.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),ne.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),ne.on("pedidos_iniciais",y=>{p(Array.isArray(y)?y:[])}),ne.on("cardapio_inicial",y=>{h(Array.isArray(y)?y:y&&Array.isArray(y.produtos)?y.produtos:[])}),ne.on("novo_pedido_criado",y=>{p(T=>[y,...T.filter(F=>F.id!==y.id)])}),ne.on("status_pedido_atualizado",y=>{p(T=>T.map(F=>F.id===y.id?y:F))}),ne.on("pedido_chamado",y=>{z(y)}),ne.on("cardapio_atualizado",y=>{h(Array.isArray(y)?y:y&&Array.isArray(y.produtos)?y.produtos:[])}),ne.on("novo_log_auditoria",y=>{b(T=>[y,...T.filter(F=>F.id!==y.id)])}),()=>{ne.off("connect"),ne.off("disconnect"),ne.off("pedidos_iniciais"),ne.off("cardapio_inicial"),ne.off("novo_pedido_criado"),ne.off("status_pedido_atualizado"),ne.off("pedido_chamado"),ne.off("cardapio_atualizado"),ne.off("novo_log_auditoria")}),[]);const _=(y,T)=>{ne.emit("criar_pedido",{...y,criadoPor:a?`${a.nome}`:"Caixa"},T)},H=(y,T)=>{ne.emit("mudar_status_pedido",{id:y,status:T,preparadoPor:a?`${a.nome}`:"Cozinha"})},ee=(y,T,F)=>{p(O=>O.map(me=>{if(me.id!==y)return me;const st=(me.itens||[]).map((at,Lr)=>{if(Lr!==T)return at;const Kd=F!==void 0?F:!at.entregue;return{...at,entregue:Kd}}),En=st.reduce((at,Lr)=>at+(Lr.quantidade||1),0),Fa=st.filter(at=>at.entregue).reduce((at,Lr)=>at+(Lr.quantidade||1),0);let zn=me.status;return Fa>=En?zn="entregue":Fa>0?zn="entrega_parcial":(me.status==="entregue"||me.status==="entrega_parcial")&&(zn="em_preparo"),{...me,itens:st,status:zn}})),ne.emit("alternar_item_entregue",{orderId:y,itemIndex:T,entregue:F,operadorNome:a?`${a.nome}`:"Atendente"}),fetch(`/api/orders/${y}/itens/${T}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:F,operadorNome:a?`${a.nome}`:"Atendente"})}).then(O=>O.json()).then(O=>{O&&O.order&&p(me=>me.map(st=>st.id===O.order.id?O.order:st))}).catch(O=>console.error("Erro ao alternar item:",O))},he=y=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then(T=>T.json()).catch(T=>console.error("Erro ao salvar produto:",T))},nt=y=>{fetch(`/api/menu/produto/${y}`,{method:"DELETE"}).then(T=>T.json()).catch(T=>console.error("Erro ao excluir produto:",T))},it=y=>{fetch(`/api/menu/produto/${y}/disponivel`,{method:"PATCH"}).then(T=>T.json()).catch(T=>console.error("Erro ao alterar disponibilidade:",T))},ot=y=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then(T=>T.json()).catch(T=>console.error("Erro ao salvar categoria:",T))},N=y=>fetch(`/api/menu/categoria/${y}`,{method:"DELETE"}).then(T=>T.json());if(!a)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
          .login-gate-screen {
            min-height: 100vh;
            min-height: 100dvh;
            background: var(--app-canvas);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .login-gate-card {
            background: var(--app-surface-1);
            border: 1px solid var(--app-border);
            border-radius: var(--radius-lg);
            width: 100%;
            max-width: 440px;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .login-brand {
            display: flex;
            align-items: center;
            gap: 0.85rem;
          }

          .login-brand-icon {
            background: var(--primary);
            color: var(--on-primary);
            padding: 0.6rem 0.8rem;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 14px var(--primary-glow);
          }

          .login-brand-title {
            font-family: var(--font-display);
            font-size: 1.5rem;
            font-weight: 900;
            color: var(--text-title);
            line-height: 1.1;
          }

          .login-brand-subtitle {
            font-size: 0.82rem;
            color: var(--primary);
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:P,title:"Alternar Tema",children:i==="escuro"?s.jsx(su,{size:16,color:"var(--status-preparo)"}):s.jsx(nu,{size:16,color:"var(--primary)"})})]}),f&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(Um,{size:18}),s.jsx("span",{children:f})]}),s.jsxs("form",{onSubmit:$,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:y=>c(y.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:v,onChange:y=>g(y.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:x,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[x?"Autenticando...":"Entrar no Sistema"," ",s.jsx(Md,{size:18})]})]})]})]});const M=a.role==="master"||a.role==="caixa",I=a.role==="master",S=a.role==="master",B=a.role==="master"||a.role==="caixa",re=a.role==="master"||a.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[M&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(ct,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(jn,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Bi,{size:18})," Chamada TV"]}),B&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Rs,{size:18})," Vendas"]}),re&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Ls,{size:18})," Logs"]}),I&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(zr,{size:18})," Cardápio"]}),S&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Is,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:D,title:`Operador: ${a.nome} (${a.role.toUpperCase()}) - Clique para sair`,children:[s.jsx(Er,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:a.nome}),s.jsx(Tm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:P,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(su,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(nu,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Qm,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Wm,{size:14})," Conectando..."]})]})]})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(M?s.jsx(Ym,{menu:d,operador:a,onEnviarPedido:_}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ru,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",a.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(Gm,{pedidos:w,operador:a,onMudarStatus:H,onAlternarItemEntregue:ee}),e==="chamada"&&s.jsx(Zm,{pedidos:w,ultimoPedidoChamado:E,onMudarStatus:H,onAlternarItemEntregue:ee}),e==="vendas"&&s.jsx(tg,{pedidos:w,operador:a}),e==="logs"&&s.jsx(ng,{logs:k,operador:a}),e==="cardapio"&&(I?s.jsx(eg,{menu:d,onSalvarProduto:he,onExcluirProduto:nt,onToggleDisponivel:it,onSalvarCategoria:ot,onExcluirCategoria:N}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ru,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&s.jsx(rg,{operador:a})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[M&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(ct,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(jn,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Bi,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),B&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Rs,{size:20}),s.jsx("span",{children:"Vendas"})]}),re&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Ls,{size:20}),s.jsx("span",{children:"Logs"})]}),I&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(zr,{size:20}),s.jsx("span",{children:"Cardápio"})]}),S&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Is,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}Oo.createRoot(document.getElementById("root")).render(s.jsx(dp.StrictMode,{children:s.jsx(ig,{})}));
