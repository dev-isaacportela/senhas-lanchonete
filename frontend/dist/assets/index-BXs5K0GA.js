(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tu={exports:{}},Ri={},ru={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yn=Symbol.for("react.element"),Ud=Symbol.for("react.portal"),Vd=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Xd=Symbol.for("react.memo"),Gd=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Jd(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iu=Object.assign,ou={};function Nr(e,t,r){this.props=e,this.context=t,this.refs=ou,this.updater=r||nu}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=Nr.prototype;function Ls(e,t,r){this.props=e,this.context=t,this.refs=ou,this.updater=r||nu}var As=Ls.prototype=new su;As.constructor=Ls;iu(As,Nr.prototype);As.isPureReactComponent=!0;var Ma=Array.isArray,au=Object.prototype.hasOwnProperty,Rs={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function uu(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)au.call(t,n)&&!lu.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:yn,type:e,key:o,ref:a,props:i,_owner:Rs.current}}function Zd(e,t){return{$$typeof:yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===yn}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Oa=/\/+/g;function Zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function Vn(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yn:case Ud:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Zi(a,0):n,Ma(i)?(r="",e!=null&&(r=e.replace(Oa,"$&/")+"/"),Vn(i,t,r,"",function(p){return p})):i!=null&&(Ms(i)&&(i=Zd(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Oa,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Ma(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+Zi(o,l);a+=Vn(o,t,r,u,i)}else if(u=Jd(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+Zi(o,l++),a+=Vn(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Cn(e,t,r){if(e==null)return e;var n=[],i=0;return Vn(e,n,"","",function(o){return t.call(r,o,i++)}),n}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},qn={transition:null},rp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:qn,ReactCurrentOwner:Rs};function cu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Cn,forEach:function(e,t,r){Cn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cn(e,function(){t++}),t},toArray:function(e){return Cn(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Nr;B.Fragment=Vd;B.Profiler=Hd;B.PureComponent=Ls;B.StrictMode=qd;B.Suspense=Yd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;B.act=cu;B.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=iu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Rs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)au.call(t,u)&&!lu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];n.children=l}return{$$typeof:yn,type:e.type,key:i,ref:o,props:n,_owner:a}};B.createContext=function(e){return e={$$typeof:Qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wd,_context:e},e.Consumer=e};B.createElement=uu;B.createFactory=function(e){var t=uu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Kd,render:e}};B.isValidElement=Ms;B.lazy=function(e){return{$$typeof:Gd,_payload:{_status:-1,_result:e},_init:tp}};B.memo=function(e,t){return{$$typeof:Xd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=qn.transition;qn.transition={};try{e()}finally{qn.transition=t}};B.unstable_act=cu;B.useCallback=function(e,t){return we.current.useCallback(e,t)};B.useContext=function(e){return we.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return we.current.useDeferredValue(e)};B.useEffect=function(e,t){return we.current.useEffect(e,t)};B.useId=function(){return we.current.useId()};B.useImperativeHandle=function(e,t,r){return we.current.useImperativeHandle(e,t,r)};B.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return we.current.useMemo(e,t)};B.useReducer=function(e,t,r){return we.current.useReducer(e,t,r)};B.useRef=function(e){return we.current.useRef(e)};B.useState=function(e){return we.current.useState(e)};B.useSyncExternalStore=function(e,t,r){return we.current.useSyncExternalStore(e,t,r)};B.useTransition=function(){return we.current.useTransition()};B.version="18.3.1";ru.exports=B;var A=ru.exports;const np=$d(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=A,op=Symbol.for("react.element"),sp=Symbol.for("react.fragment"),ap=Object.prototype.hasOwnProperty,lp=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)ap.call(t,n)&&!up.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:op,type:e,key:o,ref:a,props:i,_owner:lp.current}}Ri.Fragment=sp;Ri.jsx=du;Ri.jsxs=du;tu.exports=Ri;var s=tu.exports,zo={},pu={exports:{}},Le={},fu={exports:{}},hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,R){var O=b.length;b.push(R);e:for(;0<O;){var S=O-1>>>1,I=b[S];if(0<i(I,R))b[S]=R,b[O]=I,O=S;else break e}}function r(b){return b.length===0?null:b[0]}function n(b){if(b.length===0)return null;var R=b[0],O=b.pop();if(O!==R){b[0]=O;e:for(var S=0,I=b.length,T=I>>>1;S<T;){var D=2*(S+1)-1,ye=b[D],Ot=D+1,Sn=b[Ot];if(0>i(ye,O))Ot<I&&0>i(Sn,ye)?(b[S]=Sn,b[Ot]=O,S=Ot):(b[S]=ye,b[D]=O,S=D);else if(Ot<I&&0>i(Sn,O))b[S]=Sn,b[Ot]=O,S=Ot;else break e}}return R}function i(b,R){var O=b.sortIndex-R.sortIndex;return O!==0?O:b.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],p=[],m=1,g=null,c=3,v=!1,k=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var R=r(p);R!==null;){if(R.callback===null)n(p);else if(R.startTime<=b)n(p),R.sortIndex=R.expirationTime,t(u,R);else break;R=r(p)}}function j(b){if(w=!1,h(b),!k)if(r(u)!==null)k=!0,ee(x);else{var R=r(p);R!==null&&Ye(j,R.startTime-b)}}function x(b,R){k=!1,w&&(w=!1,f(E),E=-1),v=!0;var O=c;try{for(h(R),g=r(u);g!==null&&(!(g.expirationTime>R)||b&&!Z());){var S=g.callback;if(typeof S=="function"){g.callback=null,c=g.priorityLevel;var I=S(g.expirationTime<=R);R=e.unstable_now(),typeof I=="function"?g.callback=I:g===r(u)&&n(u),h(R)}else n(u);g=r(u)}if(g!==null)var T=!0;else{var D=r(p);D!==null&&Ye(j,D.startTime-R),T=!1}return T}finally{g=null,c=O,v=!1}}var _=!1,N=null,E=-1,q=5,M=-1;function Z(){return!(e.unstable_now()-M<q)}function ve(){if(N!==null){var b=e.unstable_now();M=b;var R=!0;try{R=N(!0,b)}finally{R?z():(_=!1,N=null)}}else _=!1}var z;if(typeof d=="function")z=function(){d(ve)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,oe=U.port2;U.port1.onmessage=ve,z=function(){oe.postMessage(null)}}else z=function(){y(ve,0)};function ee(b){N=b,_||(_=!0,z())}function Ye(b,R){E=y(function(){b(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,ee(x))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(b){switch(c){case 1:case 2:case 3:var R=3;break;default:R=c}var O=c;c=R;try{return b()}finally{c=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,R){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var O=c;c=b;try{return R()}finally{c=O}},e.unstable_scheduleCallback=function(b,R,O){var S=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?S+O:S):O=S,b){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=O+I,b={id:m++,callback:R,priorityLevel:b,startTime:O,expirationTime:I,sortIndex:-1},O>S?(b.sortIndex=O,t(p,b),r(u)===null&&b===r(p)&&(w?(f(E),E=-1):w=!0,Ye(j,O-S))):(b.sortIndex=I,t(u,b),k||v||(k=!0,ee(x))),b},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(b){var R=c;return function(){var O=c;c=R;try{return b.apply(this,arguments)}finally{c=O}}}})(hu);fu.exports=hu;var cp=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=A,Te=cp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,Zr={};function Yt(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ia={};function fp(e){return Po.call(Ia,e)?!0:Po.call(Da,e)?!1:pp.test(e)?Ia[e]=!0:(Da[e]=!0,!1)}function hp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,r,n){if(t===null||typeof t>"u"||hp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Os=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Os,Ds);pe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Os,Ds);pe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Os,Ds);pe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Is(e,t,r,n){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,r,i,n)&&(r=null),n||i===null?fp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ft=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),Fs=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),yu=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,eo;function Ir(e){if(eo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);eo=t&&t[1]||""}return`
`+eo+e}var to=!1;function ro(e,t){if(!e||to)return"";to=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var n=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){n=p}e.call(t.prototype)}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{to=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ir(e):""}function gp(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=ro(e.type,!1),e;case 11:return e=ro(e.type.render,!1),e;case 1:return e=ro(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zt:return"Portal";case To:return"Profiler";case Bs:return"StrictMode";case Lo:return"Suspense";case Ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case Fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:Ro(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Ro(e(t))}catch{}}return null}function vp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yp(e){var t=xu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _n(e){e._valueTracker||(e._valueTracker=yp(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Tt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&Is(e,"checked",t,!1)}function Oo(e,t){wu(e,t);var r=Tt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Do(e,t.type,r):t.hasOwnProperty("defaultValue")&&Do(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Do(e,t,r){(t!=="number"||ai(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Br=Array.isArray;function dr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Tt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(Br(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Tt(r)}}function ju(e,t){var r=Tt(t.value),n=Tt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bn,Cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bn=bn||document.createElement("div"),bn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function en(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xp=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Nu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function _u(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Nu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var kp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,pr=null,fr=null;function qa(e){if(e=wn(e)){if(typeof Vo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Bi(t),Vo(e.stateNode,e.type,t))}}function bu(e){pr?fr?fr.push(e):fr=[e]:pr=e}function Eu(){if(pr){var e=pr,t=fr;if(fr=pr=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function zu(e,t){return e(t)}function Pu(){}var no=!1;function Tu(e,t,r){if(no)return e(t,r);no=!0;try{return zu(e,t,r)}finally{no=!1,(pr!==null||fr!==null)&&(Pu(),Eu())}}function tn(e,t){var r=e.stateNode;if(r===null)return null;var n=Bi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var qo=!1;if(lt)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){qo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{qo=!1}function wp(e,t,r,n,i,o,a,l,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(r,p)}catch(m){this.onError(m)}}var qr=!1,li=null,ui=!1,Ho=null,jp={onError:function(e){qr=!0,li=e}};function Sp(e,t,r,n,i,o,a,l,u){qr=!1,li=null,wp.apply(jp,arguments)}function Cp(e,t,r,n,i,o,a,l,u){if(Sp.apply(this,arguments),qr){if(qr){var p=li;qr=!1,li=null}else throw Error(C(198));ui||(ui=!0,Ho=p)}}function Xt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(Xt(e)!==e)throw Error(C(188))}function Np(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ha(i),e;if(o===n)return Ha(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Au(e){return e=Np(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var Mu=Te.unstable_scheduleCallback,Wa=Te.unstable_cancelCallback,_p=Te.unstable_shouldYield,bp=Te.unstable_requestPaint,te=Te.unstable_now,Ep=Te.unstable_getCurrentPriorityLevel,Vs=Te.unstable_ImmediatePriority,Ou=Te.unstable_UserBlockingPriority,ci=Te.unstable_NormalPriority,zp=Te.unstable_LowPriority,Du=Te.unstable_IdlePriority,Mi=null,Ze=null;function Pp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Ap,Tp=Math.log,Lp=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(Tp(e)/Lp|0)|0}var En=64,zn=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=Fr(l):(o&=a,o!==0&&(n=Fr(o)))}else a=r&~i,a!==0?n=Fr(a):o!==0&&(n=Fr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-We(t),i=1<<r,n|=e[r],t&=~i;return n}function Rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-We(o),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Rp(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=En;return En<<=1,!(En&4194240)&&(En=64),e}function io(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function xn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=r}function Op(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-We(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function qs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-We(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var V=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,Hs,$u,Uu,Vu,Qo=!1,Pn=[],jt=null,St=null,Ct=null,rn=new Map,nn=new Map,vt=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nn.delete(t.pointerId)}}function Tr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wn(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ip(e,t,r,n,i){switch(t){case"focusin":return jt=Tr(jt,e,t,r,n,i),!0;case"dragenter":return St=Tr(St,e,t,r,n,i),!0;case"mouseover":return Ct=Tr(Ct,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return rn.set(o,Tr(rn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,nn.set(o,Tr(nn.get(o)||null,e,t,r,n,i)),!0}return!1}function qu(e){var t=Bt(e.target);if(t!==null){var r=Xt(t);if(r!==null){if(t=r.tag,t===13){if(t=Lu(r),t!==null){e.blockedOn=t,Vu(e.priority,function(){$u(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Uo=n,r.target.dispatchEvent(n),Uo=null}else return t=wn(r),t!==null&&Hs(t),e.blockedOn=r,!1;t.shift()}return!0}function Ka(e,t,r){Hn(e)&&r.delete(t)}function Bp(){Qo=!1,jt!==null&&Hn(jt)&&(jt=null),St!==null&&Hn(St)&&(St=null),Ct!==null&&Hn(Ct)&&(Ct=null),rn.forEach(Ka),nn.forEach(Ka)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Bp)))}function on(e){function t(i){return Lr(i,e)}if(0<Pn.length){Lr(Pn[0],e);for(var r=1;r<Pn.length;r++){var n=Pn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(jt!==null&&Lr(jt,e),St!==null&&Lr(St,e),Ct!==null&&Lr(Ct,e),rn.forEach(t),nn.forEach(t),r=0;r<vt.length;r++)n=vt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<vt.length&&(r=vt[0],r.blockedOn===null);)qu(r),r.blockedOn===null&&vt.shift()}var hr=ft.ReactCurrentBatchConfig,pi=!0;function Fp(e,t,r,n){var i=V,o=hr.transition;hr.transition=null;try{V=1,Ws(e,t,r,n)}finally{V=i,hr.transition=o}}function $p(e,t,r,n){var i=V,o=hr.transition;hr.transition=null;try{V=4,Ws(e,t,r,n)}finally{V=i,hr.transition=o}}function Ws(e,t,r,n){if(pi){var i=Ko(e,t,r,n);if(i===null)mo(e,t,n,fi,r),Qa(e,n);else if(Ip(i,e,t,r,n))n.stopPropagation();else if(Qa(e,n),t&4&&-1<Dp.indexOf(e)){for(;i!==null;){var o=wn(i);if(o!==null&&Fu(o),o=Ko(e,t,r,n),o===null&&mo(e,t,n,fi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else mo(e,t,n,null,r)}}var fi=null;function Ko(e,t,r,n){if(fi=null,e=Us(n),e=Bt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Lu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fi=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case Vs:return 1;case Ou:return 4;case ci:case zp:return 16;case Du:return 536870912;default:return 16}default:return 16}}var xt=null,Qs=null,Wn=null;function Wu(){if(Wn)return Wn;var e,t=Qs,r=t.length,n,i="value"in xt?xt.value:xt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Wn=i.slice(e,1<n?1-n:void 0)}function Qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function Ya(){return!1}function Ae(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tn:Ya,this.isPropagationStopped=Ya,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ae(_r),kn=G({},_r,{view:0,detail:0}),Up=Ae(kn),oo,so,Ar,Oi=G({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(oo=e.screenX-Ar.screenX,so=e.screenY-Ar.screenY):so=oo=0,Ar=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Xa=Ae(Oi),Vp=G({},Oi,{dataTransfer:0}),qp=Ae(Vp),Hp=G({},kn,{relatedTarget:0}),ao=Ae(Hp),Wp=G({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=Ae(Wp),Kp=G({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=Ae(Kp),Xp=G({},_r,{data:0}),Ga=Ae(Xp),Gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function Ys(){return ef}var tf=G({},kn,{key:function(e){if(e.key){var t=Gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?Qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=Ae(tf),nf=G({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=Ae(nf),of=G({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),sf=Ae(of),af=G({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),lf=Ae(af),uf=G({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=Ae(uf),df=[9,13,27,32],Xs=lt&&"CompositionEvent"in window,Hr=null;lt&&"documentMode"in document&&(Hr=document.documentMode);var pf=lt&&"TextEvent"in window&&!Hr,Qu=lt&&(!Xs||Hr&&8<Hr&&11>=Hr),Za=" ",el=!1;function Ku(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function ff(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(el=!0,Za);case"textInput":return e=t.data,e===Za&&el?null:e;default:return null}}function hf(e,t){if(tr)return e==="compositionend"||!Xs&&Ku(e,t)?(e=Wu(),Wn=Qs=xt=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function Xu(e,t,r,n){bu(n),t=hi(t,"onChange"),0<t.length&&(r=new Ks("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,sn=null;function gf(e){ac(e,0)}function Di(e){var t=ir(e);if(ku(t))return e}function vf(e,t){if(e==="change")return t}var Gu=!1;if(lt){var lo;if(lt){var uo="oninput"in document;if(!uo){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),uo=typeof rl.oninput=="function"}lo=uo}else lo=!1;Gu=lo&&(!document.documentMode||9<document.documentMode)}function nl(){Wr&&(Wr.detachEvent("onpropertychange",Ju),sn=Wr=null)}function Ju(e){if(e.propertyName==="value"&&Di(sn)){var t=[];Xu(t,sn,e,Us(e)),Tu(gf,t)}}function yf(e,t,r){e==="focusin"?(nl(),Wr=t,sn=r,Wr.attachEvent("onpropertychange",Ju)):e==="focusout"&&nl()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(sn)}function kf(e,t){if(e==="click")return Di(t)}function wf(e,t){if(e==="input"||e==="change")return Di(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:jf;function an(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Po.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ol(e,t){var r=il(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=il(r)}}function Zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ai(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=ec(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Zu(r.ownerDocument.documentElement,r)){if(n!==null&&Gs(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=ol(r,o);var a=ol(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cf=lt&&"documentMode"in document&&11>=document.documentMode,rr=null,Yo=null,Qr=null,Xo=!1;function sl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xo||rr==null||rr!==ai(n)||(n=rr,"selectionStart"in n&&Gs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qr&&an(Qr,n)||(Qr=n,n=hi(Yo,"onSelect"),0<n.length&&(t=new Ks("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rr)))}function Ln(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var nr={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionend:Ln("Transition","TransitionEnd")},co={},tc={};lt&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Ii(e){if(co[e])return co[e];if(!nr[e])return e;var t=nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in tc)return co[e]=t[r];return e}var rc=Ii("animationend"),nc=Ii("animationiteration"),ic=Ii("animationstart"),oc=Ii("transitionend"),sc=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){sc.set(e,t),Yt(t,[e])}for(var po=0;po<al.length;po++){var fo=al[po],Nf=fo.toLowerCase(),_f=fo[0].toUpperCase()+fo.slice(1);At(Nf,"on"+_f)}At(rc,"onAnimationEnd");At(nc,"onAnimationIteration");At(ic,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(oc,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function ll(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Cp(n,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,p=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;ll(i,l,p),o=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,p=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;ll(i,l,p),o=u}}}if(ui)throw e=Ho,ui=!1,Ho=null,e}function W(e,t){var r=t[ts];r===void 0&&(r=t[ts]=new Set);var n=e+"__bubble";r.has(n)||(lc(t,e,2,!1),r.add(n))}function ho(e,t,r){var n=0;t&&(n|=4),lc(r,e,n,t)}var An="_reactListening"+Math.random().toString(36).slice(2);function ln(e){if(!e[An]){e[An]=!0,mu.forEach(function(r){r!=="selectionchange"&&(bf.has(r)||ho(r,!1,e),ho(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[An]||(t[An]=!0,ho("selectionchange",!1,t))}}function lc(e,t,r,n){switch(Hu(t)){case 1:var i=Fp;break;case 4:i=$p;break;default:i=Ws}r=i.bind(null,t,r,e),i=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function mo(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Bt(l),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}l=l.parentNode}}n=n.return}Tu(function(){var p=o,m=Us(r),g=[];e:{var c=sc.get(e);if(c!==void 0){var v=Ks,k=e;switch(e){case"keypress":if(Qn(r)===0)break e;case"keydown":case"keyup":v=rf;break;case"focusin":k="focus",v=ao;break;case"focusout":k="blur",v=ao;break;case"beforeblur":case"afterblur":v=ao;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sf;break;case rc:case nc:case ic:v=Qp;break;case oc:v=lf;break;case"scroll":v=Up;break;case"wheel":v=cf;break;case"copy":case"cut":case"paste":v=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ja}var w=(t&4)!==0,y=!w&&e==="scroll",f=w?c!==null?c+"Capture":null:c;w=[];for(var d=p,h;d!==null;){h=d;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,f!==null&&(j=tn(d,f),j!=null&&w.push(un(d,j,h)))),y)break;d=d.return}0<w.length&&(c=new v(c,k,null,r,m),g.push({event:c,listeners:w}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&r!==Uo&&(k=r.relatedTarget||r.fromElement)&&(Bt(k)||k[ut]))break e;if((v||c)&&(c=m.window===m?m:(c=m.ownerDocument)?c.defaultView||c.parentWindow:window,v?(k=r.relatedTarget||r.toElement,v=p,k=k?Bt(k):null,k!==null&&(y=Xt(k),k!==y||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=p),v!==k)){if(w=Xa,j="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ja,j="onPointerLeave",f="onPointerEnter",d="pointer"),y=v==null?c:ir(v),h=k==null?c:ir(k),c=new w(j,d+"leave",v,r,m),c.target=y,c.relatedTarget=h,j=null,Bt(m)===p&&(w=new w(f,d+"enter",k,r,m),w.target=h,w.relatedTarget=y,j=w),y=j,v&&k)t:{for(w=v,f=k,d=0,h=w;h;h=Gt(h))d++;for(h=0,j=f;j;j=Gt(j))h++;for(;0<d-h;)w=Gt(w),d--;for(;0<h-d;)f=Gt(f),h--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Gt(w),f=Gt(f)}w=null}else w=null;v!==null&&ul(g,c,v,w,!1),k!==null&&y!==null&&ul(g,y,k,w,!0)}}e:{if(c=p?ir(p):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var x=vf;else if(tl(c))if(Gu)x=wf;else{x=xf;var _=yf}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(x=kf);if(x&&(x=x(e,p))){Xu(g,x,r,m);break e}_&&_(e,c,p),e==="focusout"&&(_=c._wrapperState)&&_.controlled&&c.type==="number"&&Do(c,"number",c.value)}switch(_=p?ir(p):window,e){case"focusin":(tl(_)||_.contentEditable==="true")&&(rr=_,Yo=p,Qr=null);break;case"focusout":Qr=Yo=rr=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,sl(g,r,m);break;case"selectionchange":if(Cf)break;case"keydown":case"keyup":sl(g,r,m)}var N;if(Xs)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else tr?Ku(e,r)&&(E="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Qu&&r.locale!=="ko"&&(tr||E!=="onCompositionStart"?E==="onCompositionEnd"&&tr&&(N=Wu()):(xt=m,Qs="value"in xt?xt.value:xt.textContent,tr=!0)),_=hi(p,E),0<_.length&&(E=new Ga(E,e,null,r,m),g.push({event:E,listeners:_}),N?E.data=N:(N=Yu(r),N!==null&&(E.data=N)))),(N=pf?ff(e,r):hf(e,r))&&(p=hi(p,"onBeforeInput"),0<p.length&&(m=new Ga("onBeforeInput","beforeinput",null,r,m),g.push({event:m,listeners:p}),m.data=N))}ac(g,t)})}function un(e,t,r){return{instance:e,listener:t,currentTarget:r}}function hi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=tn(e,r),o!=null&&n.unshift(un(e,o,i)),o=tn(e,t),o!=null&&n.push(un(e,o,i))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,p=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&p!==null&&(l=p,i?(u=tn(r,o),u!=null&&a.unshift(un(r,u,l))):i||(u=tn(r,o),u!=null&&a.push(un(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Ef=/\r\n?/g,zf=/\u0000|\uFFFD/g;function cl(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(zf,"")}function Rn(e,t,r){if(t=cl(t),cl(e)!==t&&r)throw Error(C(425))}function mi(){}var Go=null,Jo=null;function Zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,dl=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof dl<"u"?function(e){return dl.resolve(null).then(e).catch(Lf)}:es;function Lf(e){setTimeout(function(){throw e})}function go(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),on(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);on(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),Je="__reactFiber$"+br,cn="__reactProps$"+br,ut="__reactContainer$"+br,ts="__reactEvents$"+br,Af="__reactListeners$"+br,Rf="__reactHandles$"+br;function Bt(e){var t=e[Je];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ut]||r[Je]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pl(e);e!==null;){if(r=e[Je])return r;e=pl(e)}return t}e=r,r=e.parentNode}return null}function wn(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Bi(e){return e[cn]||null}var rs=[],or=-1;function Rt(e){return{current:e}}function Q(e){0>or||(e.current=rs[or],rs[or]=null,or--)}function H(e,t){or++,rs[or]=e.current,e.current=t}var Lt={},ge=Rt(Lt),Ne=Rt(!1),qt=Lt;function yr(e,t){var r=e.type.contextTypes;if(!r)return Lt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function gi(){Q(Ne),Q(ge)}function fl(e,t,r){if(ge.current!==Lt)throw Error(C(168));H(ge,t),H(Ne,r)}function uc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,vp(e)||"Unknown",i));return G({},r,n)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,qt=ge.current,H(ge,e),H(Ne,Ne.current),!0}function hl(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=uc(e,t,qt),n.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(ge),H(ge,e)):Q(Ne),H(Ne,r)}var it=null,Fi=!1,vo=!1;function cc(e){it===null?it=[e]:it.push(e)}function Mf(e){Fi=!0,cc(e)}function Mt(){if(!vo&&it!==null){vo=!0;var e=0,t=V;try{var r=it;for(V=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}it=null,Fi=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Mu(Vs,Mt),i}finally{V=t,vo=!1}}return null}var sr=[],ar=0,yi=null,xi=0,Re=[],Me=0,Ht=null,ot=1,st="";function Dt(e,t){sr[ar++]=xi,sr[ar++]=yi,yi=e,xi=t}function dc(e,t,r){Re[Me++]=ot,Re[Me++]=st,Re[Me++]=Ht,Ht=e;var n=ot;e=st;var i=32-We(n)-1;n&=~(1<<i),r+=1;var o=32-We(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,ot=1<<32-We(t)+i|r<<i|n,st=o+e}else ot=1<<o|r<<i|n,st=e}function Js(e){e.return!==null&&(Dt(e,1),dc(e,1,0))}function Zs(e){for(;e===yi;)yi=sr[--ar],sr[ar]=null,xi=sr[--ar],sr[ar]=null;for(;e===Ht;)Ht=Re[--Me],Re[Me]=null,st=Re[--Me],Re[Me]=null,ot=Re[--Me],Re[Me]=null}var Pe=null,ze=null,K=!1,He=null;function pc(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ml(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ht!==null?{id:ot,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pe=e,ze=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(K){var t=ze;if(t){var r=t;if(!ml(e,t)){if(ns(e))throw Error(C(418));t=Nt(r.nextSibling);var n=Pe;t&&ml(e,t)?pc(n,r):(e.flags=e.flags&-4097|2,K=!1,Pe=e)}}else{if(ns(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function gl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Mn(e){if(e!==Pe)return!1;if(!K)return gl(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zo(e.type,e.memoizedProps)),t&&(t=ze)){if(ns(e))throw fc(),Error(C(418));for(;t;)pc(e,t),t=Nt(t.nextSibling)}if(gl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?Nt(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=ze;e;)e=Nt(e.nextSibling)}function xr(){ze=Pe=null,K=!1}function ea(e){He===null?He=[e]:He.push(e)}var Of=ft.ReactCurrentBatchConfig;function Rr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function On(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vl(e){var t=e._init;return t(e._payload)}function hc(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,j){return d===null||d.tag!==6?(d=Co(h,f.mode,j),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,j){var x=h.type;return x===er?m(f,d,h.props.children,j,h.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mt&&vl(x)===d.type)?(j=i(d,h.props),j.ref=Rr(f,d,h),j.return=f,j):(j=ei(h.type,h.key,h.props,null,f.mode,j),j.ref=Rr(f,d,h),j.return=f,j)}function p(f,d,h,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=No(h,f.mode,j),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function m(f,d,h,j,x){return d===null||d.tag!==7?(d=Vt(h,f.mode,j,x),d.return=f,d):(d=i(d,h),d.return=f,d)}function g(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Co(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nn:return h=ei(d.type,d.key,d.props,null,f.mode,h),h.ref=Rr(f,null,d),h.return=f,h;case Zt:return d=No(d,f.mode,h),d.return=f,d;case mt:var j=d._init;return g(f,j(d._payload),h)}if(Br(d)||zr(d))return d=Vt(d,f.mode,h,null),d.return=f,d;On(f,d)}return null}function c(f,d,h,j){var x=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return x!==null?null:l(f,d,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Nn:return h.key===x?u(f,d,h,j):null;case Zt:return h.key===x?p(f,d,h,j):null;case mt:return x=h._init,c(f,d,x(h._payload),j)}if(Br(h)||zr(h))return x!==null?null:m(f,d,h,j,null);On(f,h)}return null}function v(f,d,h,j,x){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(h)||null,l(d,f,""+j,x);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Nn:return f=f.get(j.key===null?h:j.key)||null,u(d,f,j,x);case Zt:return f=f.get(j.key===null?h:j.key)||null,p(d,f,j,x);case mt:var _=j._init;return v(f,d,h,_(j._payload),x)}if(Br(j)||zr(j))return f=f.get(h)||null,m(d,f,j,x,null);On(d,j)}return null}function k(f,d,h,j){for(var x=null,_=null,N=d,E=d=0,q=null;N!==null&&E<h.length;E++){N.index>E?(q=N,N=null):q=N.sibling;var M=c(f,N,h[E],j);if(M===null){N===null&&(N=q);break}e&&N&&M.alternate===null&&t(f,N),d=o(M,d,E),_===null?x=M:_.sibling=M,_=M,N=q}if(E===h.length)return r(f,N),K&&Dt(f,E),x;if(N===null){for(;E<h.length;E++)N=g(f,h[E],j),N!==null&&(d=o(N,d,E),_===null?x=N:_.sibling=N,_=N);return K&&Dt(f,E),x}for(N=n(f,N);E<h.length;E++)q=v(N,f,E,h[E],j),q!==null&&(e&&q.alternate!==null&&N.delete(q.key===null?E:q.key),d=o(q,d,E),_===null?x=q:_.sibling=q,_=q);return e&&N.forEach(function(Z){return t(f,Z)}),K&&Dt(f,E),x}function w(f,d,h,j){var x=zr(h);if(typeof x!="function")throw Error(C(150));if(h=x.call(h),h==null)throw Error(C(151));for(var _=x=null,N=d,E=d=0,q=null,M=h.next();N!==null&&!M.done;E++,M=h.next()){N.index>E?(q=N,N=null):q=N.sibling;var Z=c(f,N,M.value,j);if(Z===null){N===null&&(N=q);break}e&&N&&Z.alternate===null&&t(f,N),d=o(Z,d,E),_===null?x=Z:_.sibling=Z,_=Z,N=q}if(M.done)return r(f,N),K&&Dt(f,E),x;if(N===null){for(;!M.done;E++,M=h.next())M=g(f,M.value,j),M!==null&&(d=o(M,d,E),_===null?x=M:_.sibling=M,_=M);return K&&Dt(f,E),x}for(N=n(f,N);!M.done;E++,M=h.next())M=v(N,f,E,M.value,j),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?E:M.key),d=o(M,d,E),_===null?x=M:_.sibling=M,_=M);return e&&N.forEach(function(ve){return t(f,ve)}),K&&Dt(f,E),x}function y(f,d,h,j){if(typeof h=="object"&&h!==null&&h.type===er&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Nn:e:{for(var x=h.key,_=d;_!==null;){if(_.key===x){if(x=h.type,x===er){if(_.tag===7){r(f,_.sibling),d=i(_,h.props.children),d.return=f,f=d;break e}}else if(_.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mt&&vl(x)===_.type){r(f,_.sibling),d=i(_,h.props),d.ref=Rr(f,_,h),d.return=f,f=d;break e}r(f,_);break}else t(f,_);_=_.sibling}h.type===er?(d=Vt(h.props.children,f.mode,j,h.key),d.return=f,f=d):(j=ei(h.type,h.key,h.props,null,f.mode,j),j.ref=Rr(f,d,h),j.return=f,f=j)}return a(f);case Zt:e:{for(_=h.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=No(h,f.mode,j),d.return=f,f=d}return a(f);case mt:return _=h._init,y(f,d,_(h._payload),j)}if(Br(h))return k(f,d,h,j);if(zr(h))return w(f,d,h,j);On(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(f,d.sibling),d=i(d,h),d.return=f,f=d):(r(f,d),d=Co(h,f.mode,j),d.return=f,f=d),a(f)):r(f,d)}return y}var kr=hc(!0),mc=hc(!1),ki=Rt(null),wi=null,lr=null,ta=null;function ra(){ta=lr=wi=null}function na(e){var t=ki.current;Q(ki),e._currentValue=t}function os(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function mr(e,t){wi=e,ta=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(ta!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(wi===null)throw Error(C(308));lr=e,wi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ft=null;function ia(e){Ft===null?Ft=[e]:Ft.push(e)}function gc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ia(t)):(r.next=i.next,i.next=r),t.interleaved=r,ct(e,n)}function ct(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gt=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,ct(e,r)}return i=n.interleaved,i===null?(t.next=t,ia(n)):(t.next=i.next,i.next=t),n.interleaved=t,ct(e,r)}function Kn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qs(e,r)}}function yl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ji(e,t,r,n){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,p=u.next;u.next=null,a===null?o=p:a.next=p,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=p:l.next=p,m.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;a=0,m=p=u=null,l=o;do{var c=l.lane,v=l.eventTime;if((n&c)===c){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,w=l;switch(c=t,v=r,w.tag){case 1:if(k=w.payload,typeof k=="function"){g=k.call(v,g,c);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,c=typeof k=="function"?k.call(v,g,c):k,c==null)break e;g=G({},g,c);break e;case 2:gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(p=m=v,u=g):m=m.next=v,a|=c;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;c=l,l=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(m===null&&(u=g),i.baseState=u,i.firstBaseUpdate=p,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qt|=a,e.lanes=a,e.memoizedState=g}}function xl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var jn={},et=Rt(jn),dn=Rt(jn),pn=Rt(jn);function $t(e){if(e===jn)throw Error(C(174));return e}function sa(e,t){switch(H(pn,t),H(dn,e),H(et,jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bo(t,e)}Q(et),H(et,t)}function wr(){Q(et),Q(dn),Q(pn)}function yc(e){$t(pn.current);var t=$t(et.current),r=Bo(t,e.type);t!==r&&(H(dn,e),H(et,r))}function aa(e){dn.current===e&&(Q(et),Q(dn))}var Y=Rt(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function la(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Yn=ft.ReactCurrentDispatcher,xo=ft.ReactCurrentBatchConfig,Wt=0,X=null,se=null,le=null,Ci=!1,Kr=!1,fn=0,Df=0;function fe(){throw Error(C(321))}function ua(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ke(e[r],t[r]))return!1;return!0}function ca(e,t,r,n,i,o){if(Wt=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yn.current=e===null||e.memoizedState===null?$f:Uf,e=r(n,i),Kr){o=0;do{if(Kr=!1,fn=0,25<=o)throw Error(C(301));o+=1,le=se=null,t.updateQueue=null,Yn.current=Vf,e=r(n,i)}while(Kr)}if(Yn.current=Ni,t=se!==null&&se.next!==null,Wt=0,le=se=X=null,Ci=!1,t)throw Error(C(300));return e}function da(){var e=fn!==0;return fn=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Fe(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function hn(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=Fe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=se,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,u=null,p=o;do{var m=p.lane;if((Wt&m)===m)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),n=p.hasEagerState?p.eagerState:e(n,p.action);else{var g={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(l=u=g,a=n):u=u.next=g,X.lanes|=m,Qt|=m}p=p.next}while(p!==null&&p!==o);u===null?a=n:u.next=l,Ke(n,t.memoizedState)||(Ce=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Qt|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wo(e){var t=Fe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ke(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function xc(){}function kc(e,t){var r=X,n=Fe(),i=t(),o=!Ke(n.memoizedState,i);if(o&&(n.memoizedState=i,Ce=!0),n=n.queue,pa(Sc.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,mn(9,jc.bind(null,r,n,i,t),void 0,null),ue===null)throw Error(C(349));Wt&30||wc(r,t,i)}return i}function wc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function jc(e,t,r,n){t.value=r,t.getSnapshot=n,Cc(t)&&Nc(e)}function Sc(e,t,r){return r(function(){Cc(t)&&Nc(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ke(e,r)}catch{return!0}}function Nc(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function kl(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,X,e),[t.memoizedState,e]}function mn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function _c(){return Fe().memoizedState}function Xn(e,t,r,n){var i=Ge();X.flags|=e,i.memoizedState=mn(1|t,r,void 0,n===void 0?null:n)}function $i(e,t,r,n){var i=Fe();n=n===void 0?null:n;var o=void 0;if(se!==null){var a=se.memoizedState;if(o=a.destroy,n!==null&&ua(n,a.deps)){i.memoizedState=mn(t,r,o,n);return}}X.flags|=e,i.memoizedState=mn(1|t,r,o,n)}function wl(e,t){return Xn(8390656,8,e,t)}function pa(e,t){return $i(2048,8,e,t)}function bc(e,t){return $i(4,2,e,t)}function Ec(e,t){return $i(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,r){return r=r!=null?r.concat([e]):null,$i(4,4,zc.bind(null,t,e),r)}function fa(){}function Tc(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ua(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Lc(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ua(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ac(e,t,r){return Wt&21?(Ke(r,t)||(r=Iu(),X.lanes|=r,Qt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=r)}function If(e,t){var r=V;V=r!==0&&4>r?r:4,e(!0);var n=xo.transition;xo.transition={};try{e(!1),t()}finally{V=r,xo.transition=n}}function Rc(){return Fe().memoizedState}function Bf(e,t,r){var n=Et(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(e))Oc(t,r);else if(r=gc(e,t,r,n),r!==null){var i=ke();Qe(r,e,n,i),Dc(r,t,n)}}function Ff(e,t,r){var n=Et(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Oc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,Ke(l,a)){var u=t.interleaved;u===null?(i.next=i,ia(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=gc(e,t,i,n),r!==null&&(i=ke(),Qe(r,e,n,i),Dc(r,t,n))}}function Mc(e){var t=e.alternate;return e===X||t!==null&&t===X}function Oc(e,t){Kr=Ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qs(e,r)}}var Ni={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},$f={readContext:Be,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:wl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Xn(4194308,4,zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Xn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xn(4,2,e,t)},useMemo:function(e,t){var r=Ge();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ge();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bf.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:kl,useDebugValue:fa,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=kl(!1),t=e[0];return e=If.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,i=Ge();if(K){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ue===null)throw Error(C(349));Wt&30||wc(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,wl(Sc.bind(null,n,o,e),[e]),n.flags|=2048,mn(9,jc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ge(),t=ue.identifierPrefix;if(K){var r=st,n=ot;r=(n&~(1<<32-We(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=fn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Df++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:Be,useCallback:Tc,useContext:Be,useEffect:pa,useImperativeHandle:Pc,useInsertionEffect:bc,useLayoutEffect:Ec,useMemo:Lc,useReducer:ko,useRef:_c,useState:function(){return ko(hn)},useDebugValue:fa,useDeferredValue:function(e){var t=Fe();return Ac(t,se.memoizedState,e)},useTransition:function(){var e=ko(hn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:kc,useId:Rc,unstable_isNewReconciler:!1},Vf={readContext:Be,useCallback:Tc,useContext:Be,useEffect:pa,useImperativeHandle:Pc,useInsertionEffect:bc,useLayoutEffect:Ec,useMemo:Lc,useReducer:wo,useRef:_c,useState:function(){return wo(hn)},useDebugValue:fa,useDeferredValue:function(e){var t=Fe();return se===null?t.memoizedState=e:Ac(t,se.memoizedState,e)},useTransition:function(){var e=wo(hn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:kc,useId:Rc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ss(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ui={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ke(),i=Et(e),o=at(n,i);o.payload=t,r!=null&&(o.callback=r),t=_t(e,o,i),t!==null&&(Qe(t,e,i,n),Kn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ke(),i=Et(e),o=at(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=_t(e,o,i),t!==null&&(Qe(t,e,i,n),Kn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ke(),n=Et(e),i=at(r,n);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,n),t!==null&&(Qe(t,e,n,r),Kn(t,e,n))}};function jl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!an(r,n)||!an(i,o):!0}function Ic(e,t,r){var n=!1,i=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=_e(t)?qt:ge.current,n=t.contextTypes,o=(n=n!=null)?yr(e,i):Lt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function as(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},oa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=_e(t)?qt:ge.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ss(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ui.enqueueReplaceState(i,i.state,null),ji(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var r="",n=t;do r+=gp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function jo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,r){r=at(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){bi||(bi=!0,ys=n),ls(e,t)},r}function Fc(e,t,r){r=at(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ls(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ls(e,t),typeof n!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Cl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new qf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=ih.bind(null,e,t,r),t.then(e,e))}function Nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _l(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=at(-1,1),t.tag=2,_t(r,t,1))),r.lanes|=1),e)}var Hf=ft.ReactCurrentOwner,Ce=!1;function xe(e,t,r,n){t.child=e===null?mc(t,null,r,n):kr(t,e.child,r,n)}function bl(e,t,r,n,i){r=r.render;var o=t.ref;return mr(t,i),n=ca(e,t,r,n,o,i),r=da(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&r&&Js(t),t.flags|=1,xe(e,t,n,i),t.child)}function El(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!wa(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,$c(e,t,o,n,i)):(e=ei(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:an,r(a,n)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=zt(o,n),e.ref=t.ref,e.return=t,t.child=e}function $c(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(an(o,n)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,dt(e,t,i)}return us(e,t,r,n,i)}function Uc(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(cr,Ee),Ee|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(cr,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,H(cr,Ee),Ee|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,H(cr,Ee),Ee|=n;return xe(e,t,i,r),t.child}function Vc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,r,n,i){var o=_e(r)?qt:ge.current;return o=yr(t,o),mr(t,i),r=ca(e,t,r,n,o,i),n=da(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&n&&Js(t),t.flags|=1,xe(e,t,r,i),t.child)}function zl(e,t,r,n,i){if(_e(r)){var o=!0;vi(t)}else o=!1;if(mr(t,i),t.stateNode===null)Gn(e,t),Ic(t,r,n),as(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,p=r.contextType;typeof p=="object"&&p!==null?p=Be(p):(p=_e(r)?qt:ge.current,p=yr(t,p));var m=r.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==p)&&Sl(t,a,n,p),gt=!1;var c=t.memoizedState;a.state=c,ji(t,n,a,i),u=t.memoizedState,l!==n||c!==u||Ne.current||gt?(typeof m=="function"&&(ss(t,r,m,n),u=t.memoizedState),(l=gt||jl(t,r,l,n,c,u,p))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=p,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,vc(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:Ue(t.type,l),a.props=p,g=t.pendingProps,c=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Be(u):(u=_e(r)?qt:ge.current,u=yr(t,u));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||c!==u)&&Sl(t,a,n,u),gt=!1,c=t.memoizedState,a.state=c,ji(t,n,a,i);var k=t.memoizedState;l!==g||c!==k||Ne.current||gt?(typeof v=="function"&&(ss(t,r,v,n),k=t.memoizedState),(p=gt||jl(t,r,p,n,c,k,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),a.props=n,a.state=k,a.context=u,n=p):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),n=!1)}return cs(e,t,r,n,o,i)}function cs(e,t,r,n,i,o){Vc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&hl(t,r,!1),dt(e,t,o);n=t.stateNode,Hf.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,l,o)):xe(e,t,l,o),t.memoizedState=n.state,i&&hl(t,r,!0),t.child}function qc(e){var t=e.stateNode;t.pendingContext?fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fl(e,t.context,!1),sa(e,t.containerInfo)}function Pl(e,t,r,n,i){return xr(),ea(i),t.flags|=256,xe(e,t,r,n),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,r){var n=t.pendingProps,i=Y.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Y,i&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Hi(a,n,0,null),e=Vt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ps(r),t.memoizedState=ds,e):ha(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Wf(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=zt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zt(l,o):(o=Vt(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?ps(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=ds,n}return o=e.child,e=o.sibling,n=zt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ha(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dn(e,t,r,n){return n!==null&&ea(n),kr(t,e.child,null,r),e=ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=jo(Error(C(422))),Dn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Hi({mode:"visible",children:n.children},i,0,null),o=Vt(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&kr(t,e.child,null,a),t.child.memoizedState=ps(a),t.memoizedState=ds,o);if(!(t.mode&1))return Dn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(C(419)),n=jo(o,n,void 0),Dn(e,t,a,n)}if(l=(a&e.childLanes)!==0,Ce||l){if(n=ue,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Qe(n,e,i,-1))}return ka(),n=jo(Error(C(421))),Dn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=oh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Pe=t,K=!0,He=null,e!==null&&(Re[Me++]=ot,Re[Me++]=st,Re[Me++]=Ht,ot=e.id,st=e.overflow,Ht=t),t=ha(t,n.children),t.flags|=4096,t)}function Tl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),os(e.return,t,r)}function So(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Wc(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(xe(e,t,n.children,r),n=Y.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tl(e,r,t);else if(e.tag===19)Tl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(H(Y,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Si(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),So(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}So(t,!0,r,null,o);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=zt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Qf(e,t,r){switch(t.tag){case 3:qc(t),xr();break;case 5:yc(t);break;case 1:_e(t.type)&&vi(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;H(ki,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):r&t.child.childLanes?Hc(e,t,r):(H(Y,Y.current&1),e=dt(e,t,r),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Wc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Y,Y.current),n)break;return null;case 22:case 23:return t.lanes=0,Uc(e,t,r)}return dt(e,t,r)}var Qc,fs,Kc,Yc;Qc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fs=function(){};Kc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,$t(et.current);var o=null;switch(r){case"input":i=Mo(e,i),n=Mo(e,n),o=[];break;case"select":i=G({},i,{value:void 0}),n=G({},n,{value:void 0}),o=[];break;case"textarea":i=Io(e,i),n=Io(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=mi)}Fo(r,n);var a;r=null;for(p in i)if(!n.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var l=i[p];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Zr.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in n){var u=n[p];if(l=i!=null?i[p]:void 0,n.hasOwnProperty(p)&&u!==l&&(u!=null||l!=null))if(p==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(p,r)),r=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&W("scroll",e),o||l===u||(o=[])):(o=o||[]).push(p,u))}r&&(o=o||[]).push("style",r);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};Yc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Mr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kf(e,t,r){var n=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&gi(),he(t),null;case 3:return n=t.stateNode,wr(),Q(Ne),Q(ge),la(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ws(He),He=null))),fs(e,t),he(t),null;case 5:aa(t);var i=$t(pn.current);if(r=t.type,e!==null&&t.stateNode!=null)Kc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return he(t),null}if(e=$t(et.current),Mn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Je]=t,n[cn]=o,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(i=0;i<$r.length;i++)W($r[i],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":Fa(n,o),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},W("invalid",n);break;case"textarea":Ua(n,o),W("invalid",n)}Fo(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Rn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Rn(n.textContent,l,e),i=["children",""+l]):Zr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&W("scroll",n)}switch(r){case"input":_n(n),$a(n,o,!0);break;case"textarea":_n(n),Va(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=mi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Je]=t,e[cn]=n,Qc(e,t,!1,!1),t.stateNode=e;e:{switch(a=$o(r,n),r){case"dialog":W("cancel",e),W("close",e),i=n;break;case"iframe":case"object":case"embed":W("load",e),i=n;break;case"video":case"audio":for(i=0;i<$r.length;i++)W($r[i],e);i=n;break;case"source":W("error",e),i=n;break;case"img":case"image":case"link":W("error",e),W("load",e),i=n;break;case"details":W("toggle",e),i=n;break;case"input":Fa(e,n),i=Mo(e,n),W("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=G({},n,{value:void 0}),W("invalid",e);break;case"textarea":Ua(e,n),i=Io(e,n),W("invalid",e);break;default:i=n}Fo(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?_u(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Cu(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&en(e,u):typeof u=="number"&&en(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&Is(e,o,u,a))}switch(r){case"input":_n(e),$a(e,n,!1);break;case"textarea":_n(e),Va(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Tt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?dr(e,!!n.multiple,o,!1):n.defaultValue!=null&&dr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Yc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=$t(pn.current),$t(et.current),Mn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Je]=t,(o=n.nodeValue!==r)&&(e=Pe,e!==null))switch(e.tag){case 3:Rn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Je]=t,t.stateNode=n}return he(t),null;case 13:if(Q(Y),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))fc(),xr(),t.flags|=98560,o=!1;else if(o=Mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Je]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else He!==null&&(ws(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):ka())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return wr(),fs(e,t),e===null&&ln(t.stateNode.containerInfo),he(t),null;case 10:return na(t.type._context),he(t),null;case 17:return _e(t.type)&&gi(),he(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return he(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)Mr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Si(e),a!==null){for(t.flags|=128,Mr(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Sr&&(t.flags|=128,n=!0,Mr(o,!1),t.lanes=4194304)}else{if(!n)if(e=Si(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!K)return he(t),null}else 2*te()-o.renderingStartTime>Sr&&r!==1073741824&&(t.flags|=128,n=!0,Mr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,r=Y.current,H(Y,n?r&1|2:r&1),t):(he(t),null);case 22:case 23:return xa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ee&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Yf(e,t){switch(Zs(t),t.tag){case 1:return _e(t.type)&&gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Q(Ne),Q(ge),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return aa(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return wr(),null;case 10:return na(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var In=!1,me=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,P=null;function ur(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){J(e,t,n)}else r.current=null}function hs(e,t,r){try{r()}catch(n){J(e,t,n)}}var Ll=!1;function Gf(e,t){if(Go=pi,e=ec(),Gs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,p=0,m=0,g=e,c=null;t:for(;;){for(var v;g!==r||i!==0&&g.nodeType!==3||(l=a+i),g!==o||n!==0&&g.nodeType!==3||(u=a+n),g.nodeType===3&&(a+=g.nodeValue.length),(v=g.firstChild)!==null;)c=g,g=v;for(;;){if(g===e)break t;if(c===r&&++p===i&&(l=a),c===o&&++m===n&&(u=a),(v=g.nextSibling)!==null)break;g=c,c=g.parentNode}g=v}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jo={focusedElem:e,selectionRange:r},pi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,y=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ue(t.type,w),y);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){J(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=Ll,Ll=!1,k}function Yr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hs(t,r,o)}i=i.next}while(i!==n)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ms(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Xc(e){var t=e.alternate;t!==null&&(e.alternate=null,Xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[cn],delete t[ts],delete t[Af],delete t[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gc(e){return e.tag===5||e.tag===3||e.tag===4}function Al(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=mi));else if(n!==4&&(e=e.child,e!==null))for(gs(e,t,r),e=e.sibling;e!==null;)gs(e,t,r),e=e.sibling}function vs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vs(e,t,r),e=e.sibling;e!==null;)vs(e,t,r),e=e.sibling}var ce=null,Ve=!1;function ht(e,t,r){for(r=r.child;r!==null;)Jc(e,t,r),r=r.sibling}function Jc(e,t,r){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Mi,r)}catch{}switch(r.tag){case 5:me||ur(r,t);case 6:var n=ce,i=Ve;ce=null,ht(e,t,r),ce=n,Ve=i,ce!==null&&(Ve?(e=ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ce.removeChild(r.stateNode));break;case 18:ce!==null&&(Ve?(e=ce,r=r.stateNode,e.nodeType===8?go(e.parentNode,r):e.nodeType===1&&go(e,r),on(e)):go(ce,r.stateNode));break;case 4:n=ce,i=Ve,ce=r.stateNode.containerInfo,Ve=!0,ht(e,t,r),ce=n,Ve=i;break;case 0:case 11:case 14:case 15:if(!me&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&hs(r,t,a),i=i.next}while(i!==n)}ht(e,t,r);break;case 1:if(!me&&(ur(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){J(r,t,l)}ht(e,t,r);break;case 21:ht(e,t,r);break;case 22:r.mode&1?(me=(n=me)||r.memoizedState!==null,ht(e,t,r),me=n):ht(e,t,r);break;default:ht(e,t,r)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xf),t.forEach(function(n){var i=sh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function $e(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ve=!1;break e;case 3:ce=l.stateNode.containerInfo,Ve=!0;break e;case 4:ce=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ce===null)throw Error(C(160));Jc(o,a,i),ce=null,Ve=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(p){J(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zc(t,e),t=t.sibling}function Zc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Xe(e),n&4){try{Yr(3,e,e.return),Vi(3,e)}catch(w){J(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:$e(t,e),Xe(e),n&512&&r!==null&&ur(r,r.return);break;case 5:if($e(t,e),Xe(e),n&512&&r!==null&&ur(r,r.return),e.flags&32){var i=e.stateNode;try{en(i,"")}catch(w){J(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wu(i,o),$o(l,a);var p=$o(l,o);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?_u(i,g):m==="dangerouslySetInnerHTML"?Cu(i,g):m==="children"?en(i,g):Is(i,m,g,p)}switch(l){case"input":Oo(i,o);break;case"textarea":ju(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?dr(i,!!o.multiple,v,!1):c!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[cn]=o}catch(w){J(e,e.return,w)}}break;case 6:if($e(t,e),Xe(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){J(e,e.return,w)}}break;case 3:if($e(t,e),Xe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{on(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:$e(t,e),Xe(e);break;case 13:$e(t,e),Xe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(va=te())),n&4&&Rl(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(me=(p=me)||m,$e(t,e),me=p):$e(t,e),Xe(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(g=P=m;P!==null;){switch(c=P,v=c.child,c.tag){case 0:case 11:case 14:case 15:Yr(4,c,c.return);break;case 1:ur(c,c.return);var k=c.stateNode;if(typeof k.componentWillUnmount=="function"){n=c,r=c.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){J(n,r,w)}}break;case 5:ur(c,c.return);break;case 22:if(c.memoizedState!==null){Ol(g);continue}}v!==null?(v.return=c,P=v):Ol(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Nu("display",a))}catch(w){J(e,e.return,w)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(w){J(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:$e(t,e),Xe(e),n&4&&Rl(e);break;case 21:break;default:$e(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gc(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(en(i,""),n.flags&=-33);var o=Al(e);vs(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Al(e);gs(e,l,a);break;default:throw Error(C(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e,t,r){P=e,ed(e)}function ed(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||In;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||me;l=In;var p=me;if(In=a,(me=u)&&!p)for(P=i;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?Dl(i):u!==null?(u.return=a,P=u):Dl(i);for(;o!==null;)P=o,ed(o),o=o.sibling;P=i,In=l,me=p}Ml(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Ml(e)}}function Ml(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Vi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!me)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ue(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&on(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||t.flags&512&&ms(t)}catch(c){J(t,t.return,c)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Ol(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function Dl(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Vi(4,t)}catch(u){J(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){J(t,i,u)}}var o=t.return;try{ms(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{ms(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Zf=Math.ceil,_i=ft.ReactCurrentDispatcher,ma=ft.ReactCurrentOwner,Ie=ft.ReactCurrentBatchConfig,$=0,ue=null,ne=null,de=0,Ee=0,cr=Rt(0),ae=0,gn=null,Qt=0,qi=0,ga=0,Xr=null,Se=null,va=0,Sr=1/0,nt=null,bi=!1,ys=null,bt=null,Bn=!1,kt=null,Ei=0,Gr=0,xs=null,Jn=-1,Zn=0;function ke(){return $&6?te():Jn!==-1?Jn:Jn=te()}function Et(e){return e.mode&1?$&2&&de!==0?de&-de:Of.transition!==null?(Zn===0&&(Zn=Iu()),Zn):(e=V,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function Qe(e,t,r,n){if(50<Gr)throw Gr=0,xs=null,Error(C(185));xn(e,r,n),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(qi|=r),ae===4&&yt(e,de)),be(e,n),r===1&&$===0&&!(t.mode&1)&&(Sr=te()+500,Fi&&Mt()))}function be(e,t){var r=e.callbackNode;Mp(e,t);var n=di(e,e===ue?de:0);if(n===0)r!==null&&Wa(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Wa(r),t===1)e.tag===0?Mf(Il.bind(null,e)):cc(Il.bind(null,e)),Tf(function(){!($&6)&&Mt()}),r=null;else{switch(Bu(n)){case 1:r=Vs;break;case 4:r=Ou;break;case 16:r=ci;break;case 536870912:r=Du;break;default:r=ci}r=ld(r,td.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function td(e,t){if(Jn=-1,Zn=0,$&6)throw Error(C(327));var r=e.callbackNode;if(gr()&&e.callbackNode!==r)return null;var n=di(e,e===ue?de:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=zi(e,n);else{t=n;var i=$;$|=2;var o=nd();(ue!==e||de!==t)&&(nt=null,Sr=te()+500,Ut(e,t));do try{rh();break}catch(l){rd(e,l)}while(!0);ra(),_i.current=o,$=i,ne!==null?t=0:(ue=null,de=0,t=ae)}if(t!==0){if(t===2&&(i=Wo(e),i!==0&&(n=i,t=ks(e,i))),t===1)throw r=gn,Ut(e,0),yt(e,n),be(e,te()),r;if(t===6)yt(e,n);else{if(i=e.current.alternate,!(n&30)&&!eh(i)&&(t=zi(e,n),t===2&&(o=Wo(e),o!==0&&(n=o,t=ks(e,o))),t===1))throw r=gn,Ut(e,0),yt(e,n),be(e,te()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:It(e,Se,nt);break;case 3:if(yt(e,n),(n&130023424)===n&&(t=va+500-te(),10<t)){if(di(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(It.bind(null,e,Se,nt),t);break}It(e,Se,nt);break;case 4:if(yt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-We(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zf(n/1960))-n,10<n){e.timeoutHandle=es(It.bind(null,e,Se,nt),n);break}It(e,Se,nt);break;case 5:It(e,Se,nt);break;default:throw Error(C(329))}}}return be(e,te()),e.callbackNode===r?td.bind(null,e):null}function ks(e,t){var r=Xr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=zi(e,t),e!==2&&(t=Se,Se=r,t!==null&&ws(t)),e}function ws(e){Se===null?Se=e:Se.push.apply(Se,e)}function eh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~ga,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-We(t),n=1<<r;e[r]=-1,t&=~n}}function Il(e){if($&6)throw Error(C(327));gr();var t=di(e,0);if(!(t&1))return be(e,te()),null;var r=zi(e,t);if(e.tag!==0&&r===2){var n=Wo(e);n!==0&&(t=n,r=ks(e,n))}if(r===1)throw r=gn,Ut(e,0),yt(e,t),be(e,te()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Se,nt),be(e,te()),null}function ya(e,t){var r=$;$|=1;try{return e(t)}finally{$=r,$===0&&(Sr=te()+500,Fi&&Mt())}}function Kt(e){kt!==null&&kt.tag===0&&!($&6)&&gr();var t=$;$|=1;var r=Ie.transition,n=V;try{if(Ie.transition=null,V=1,e)return e()}finally{V=n,Ie.transition=r,$=t,!($&6)&&Mt()}}function xa(){Ee=cr.current,Q(cr)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Pf(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(Zs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&gi();break;case 3:wr(),Q(Ne),Q(ge),la();break;case 5:aa(n);break;case 4:wr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:na(n.type._context);break;case 22:case 23:xa()}r=r.return}if(ue=e,ne=e=zt(e.current,null),de=Ee=t,ae=0,gn=null,ga=qi=Qt=0,Se=Xr=null,Ft!==null){for(t=0;t<Ft.length;t++)if(r=Ft[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Ft=null}return e}function rd(e,t){do{var r=ne;try{if(ra(),Yn.current=Ni,Ci){for(var n=X.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ci=!1}if(Wt=0,le=se=X=null,Kr=!1,fn=0,ma.current=null,r===null||r.return===null){ae=1,gn=t,ne=null;break}e:{var o=e,a=r.return,l=r,u=t;if(t=de,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var c=m.alternate;c?(m.updateQueue=c.updateQueue,m.memoizedState=c.memoizedState,m.lanes=c.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Nl(a);if(v!==null){v.flags&=-257,_l(v,a,l,o,t),v.mode&1&&Cl(o,p,t),t=v,u=p;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){Cl(o,p,t),ka();break e}u=Error(C(426))}}else if(K&&l.mode&1){var y=Nl(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),_l(y,a,l,o,t),ea(jr(u,l));break e}}o=u=jr(u,l),ae!==4&&(ae=2),Xr===null?Xr=[o]:Xr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Bc(o,u,t);yl(o,f);break e;case 1:l=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bt===null||!bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=Fc(o,l,t);yl(o,j);break e}}o=o.return}while(o!==null)}od(r)}catch(x){t=x,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function nd(){var e=_i.current;return _i.current=Ni,e===null?Ni:e}function ka(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Qt&268435455)&&!(qi&268435455)||yt(ue,de)}function zi(e,t){var r=$;$|=2;var n=nd();(ue!==e||de!==t)&&(nt=null,Ut(e,t));do try{th();break}catch(i){rd(e,i)}while(!0);if(ra(),$=r,_i.current=n,ne!==null)throw Error(C(261));return ue=null,de=0,ae}function th(){for(;ne!==null;)id(ne)}function rh(){for(;ne!==null&&!_p();)id(ne)}function id(e){var t=ad(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?od(e):ne=t,ma.current=null}function od(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yf(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ne=null;return}}else if(r=Kf(r,t,Ee),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ae===0&&(ae=5)}function It(e,t,r){var n=V,i=Ie.transition;try{Ie.transition=null,V=1,nh(e,t,r,n)}finally{Ie.transition=i,V=n}return null}function nh(e,t,r,n){do gr();while(kt!==null);if($&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Op(e,o),e===ue&&(ne=ue=null,de=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Bn||(Bn=!0,ld(ci,function(){return gr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var a=V;V=1;var l=$;$|=4,ma.current=null,Gf(e,r),Zc(r,e),Sf(Jo),pi=!!Go,Jo=Go=null,e.current=r,Jf(r),bp(),$=l,V=a,Ie.transition=o}else e.current=r;if(Bn&&(Bn=!1,kt=e,Ei=i),o=e.pendingLanes,o===0&&(bt=null),Pp(r.stateNode),be(e,te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=ys,ys=null,e;return Ei&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===xs?Gr++:(Gr=0,xs=e):Gr=0,Mt(),null}function gr(){if(kt!==null){var e=Bu(Ei),t=Ie.transition,r=V;try{if(Ie.transition=null,V=16>e?16:e,kt===null)var n=!1;else{if(e=kt,kt=null,Ei=0,$&6)throw Error(C(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var p=l[u];for(P=p;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Yr(8,m,o)}var g=m.child;if(g!==null)g.return=m,P=g;else for(;P!==null;){m=P;var c=m.sibling,v=m.return;if(Xc(m),m===p){P=null;break}if(c!==null){c.return=v,P=c;break}P=v}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,P=h;else e:for(a=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vi(9,l)}}catch(x){J(l,l.return,x)}if(l===a){P=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,P=j;break e}P=l.return}}if($=i,Mt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Mi,e)}catch{}n=!0}return n}finally{V=r,Ie.transition=t}}return!1}function Bl(e,t,r){t=jr(r,t),t=Bc(e,t,1),e=_t(e,t,1),t=ke(),e!==null&&(xn(e,1,t),be(e,t))}function J(e,t,r){if(e.tag===3)Bl(e,e,r);else for(;t!==null;){if(t.tag===3){Bl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bt===null||!bt.has(n))){e=jr(r,e),e=Fc(t,e,1),t=_t(t,e,1),e=ke(),t!==null&&(xn(t,1,e),be(t,e));break}}t=t.return}}function ih(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&r,ue===e&&(de&r)===r&&(ae===4||ae===3&&(de&130023424)===de&&500>te()-va?Ut(e,0):ga|=r),be(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):t=1);var r=ke();e=ct(e,t),e!==null&&(xn(e,t,r),be(e,r))}function oh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),sd(e,r)}function sh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),sd(e,r)}var ad;ad=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ce=!1,Qf(e,t,r);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&dc(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Gn(e,t),e=t.pendingProps;var i=yr(t,ge.current);mr(t,r),i=ca(null,t,n,e,i,r);var o=da();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(n)?(o=!0,vi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oa(t),i.updater=Ui,t.stateNode=i,i._reactInternals=t,as(t,n,e,r),t=cs(null,t,n,!0,o,r)):(t.tag=0,K&&o&&Js(t),xe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Gn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=lh(n),e=Ue(n,e),i){case 0:t=us(null,t,n,e,r);break e;case 1:t=zl(null,t,n,e,r);break e;case 11:t=bl(null,t,n,e,r);break e;case 14:t=El(null,t,n,Ue(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),us(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),zl(e,t,n,i,r);case 3:e:{if(qc(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,vc(e,t),ji(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jr(Error(C(423)),t),t=Pl(e,t,n,r,i);break e}else if(n!==i){i=jr(Error(C(424)),t),t=Pl(e,t,n,r,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,He=null,r=mc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xr(),n===i){t=dt(e,t,r);break e}xe(e,t,n,r)}t=t.child}return t;case 5:return yc(t),e===null&&is(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Zo(n,i)?a=null:o!==null&&Zo(n,o)&&(t.flags|=32),Vc(e,t),xe(e,t,a,r),t.child;case 6:return e===null&&is(t),null;case 13:return Hc(e,t,r);case 4:return sa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=kr(t,null,n,r):xe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),bl(e,t,n,i,r);case 7:return xe(e,t,t.pendingProps,r),t.child;case 8:return xe(e,t,t.pendingProps.children,r),t.child;case 12:return xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,H(ki,n._currentValue),n._currentValue=a,o!==null)if(Ke(o.value,a)){if(o.children===i.children&&!Ne.current){t=dt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=at(-1,r&-r),u.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?u.next=u:(u.next=m.next,m.next=u),p.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),os(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),os(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,mr(t,r),i=Be(i),n=n(i),t.flags|=1,xe(e,t,n,r),t.child;case 14:return n=t.type,i=Ue(n,t.pendingProps),i=Ue(n.type,i),El(e,t,n,i,r);case 15:return $c(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),Gn(e,t),t.tag=1,_e(n)?(e=!0,vi(t)):e=!1,mr(t,r),Ic(t,n,i),as(t,n,i,r),cs(null,t,n,!0,e,r);case 19:return Wc(e,t,r);case 22:return Uc(e,t,r)}throw Error(C(156,t.tag))};function ld(e,t){return Mu(e,t)}function ah(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new ah(e,t,r,n)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fs)return 11;if(e===$s)return 14}return 2}function zt(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ei(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")wa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case er:return Vt(r.children,i,o,t);case Bs:a=8,i|=8;break;case To:return e=De(12,r,t,i|2),e.elementType=To,e.lanes=o,e;case Lo:return e=De(13,r,t,i),e.elementType=Lo,e.lanes=o,e;case Ao:return e=De(19,r,t,i),e.elementType=Ao,e.lanes=o,e;case yu:return Hi(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:a=10;break e;case vu:a=9;break e;case Fs:a=11;break e;case $s:a=14;break e;case mt:a=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=De(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Vt(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function Hi(e,t,r,n){return e=De(22,e,n,t),e.elementType=yu,e.lanes=r,e.stateNode={isHidden:!1},e}function Co(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function No(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=io(0),this.expirationTimes=io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ja(e,t,r,n,i,o,a,l,u){return e=new uh(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(o),e}function ch(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ud(e){if(!e)return Lt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(_e(r))return uc(e,r,t)}return t}function cd(e,t,r,n,i,o,a,l,u){return e=ja(r,n,!0,e,i,o,a,l,u),e.context=ud(null),r=e.current,n=ke(),i=Et(r),o=at(n,i),o.callback=t??null,_t(r,o,i),e.current.lanes=i,xn(e,i,n),be(e,n),e}function Wi(e,t,r,n){var i=t.current,o=ke(),a=Et(i);return r=ud(r),t.context===null?t.context=r:t.pendingContext=r,t=at(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=_t(i,t,a),e!==null&&(Qe(e,i,a,o),Kn(e,i,a)),a}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Sa(e,t){Fl(e,t),(e=e.alternate)&&Fl(e,t)}function dh(){return null}var dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Qi.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Wi(e,t,null,null)};Qi.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Wi(null,e,null,null)}),t[ut]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<vt.length&&t!==0&&t<vt[r].priority;r++);vt.splice(r,0,e),r===0&&qu(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $l(){}function ph(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var p=Pi(a);o.call(p)}}var a=cd(t,n,e,0,null,!1,!1,"",$l);return e._reactRootContainer=a,e[ut]=a.current,ln(e.nodeType===8?e.parentNode:e),Kt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var p=Pi(u);l.call(p)}}var u=ja(e,0,!1,null,null,!1,!1,"",$l);return e._reactRootContainer=u,e[ut]=u.current,ln(e.nodeType===8?e.parentNode:e),Kt(function(){Wi(t,u,r,n)}),u}function Yi(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Pi(a);l.call(u)}}Wi(t,a,e,i)}else a=ph(r,t,e,i,n);return Pi(a)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(qs(t,r|1),be(t,te()),!($&6)&&(Sr=te()+500,Mt()))}break;case 13:Kt(function(){var n=ct(e,1);if(n!==null){var i=ke();Qe(n,e,1,i)}}),Sa(e,1)}};Hs=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var r=ke();Qe(t,e,134217728,r)}Sa(e,134217728)}};$u=function(e){if(e.tag===13){var t=Et(e),r=ct(e,t);if(r!==null){var n=ke();Qe(r,e,t,n)}Sa(e,t)}};Uu=function(){return V};Vu=function(e,t){var r=V;try{return V=e,t()}finally{V=r}};Vo=function(e,t,r){switch(t){case"input":if(Oo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Bi(n);if(!i)throw Error(C(90));ku(n),Oo(n,i)}}}break;case"textarea":ju(e,r);break;case"select":t=r.value,t!=null&&dr(e,!!r.multiple,t,!1)}};zu=ya;Pu=Kt;var fh={usingClientEntryPoint:!1,Events:[wn,ir,Bi,bu,Eu,ya]},Or={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Au(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fn.isDisabled&&Fn.supportsFiber)try{Mi=Fn.inject(hh),Ze=Fn}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Le.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(C(200));return ch(e,t,null,r)};Le.createRoot=function(e,t){if(!Na(e))throw Error(C(299));var r=!1,n="",i=dd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ja(e,1,!1,null,null,r,!1,n,i),e[ut]=t.current,ln(e.nodeType===8?e.parentNode:e),new Ca(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Au(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Kt(e)};Le.hydrate=function(e,t,r){if(!Ki(t))throw Error(C(200));return Yi(null,e,t,!0,r)};Le.hydrateRoot=function(e,t,r){if(!Na(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=dd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=cd(t,null,e,1,r??null,i,!1,o,a),e[ut]=t.current,ln(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Qi(t)};Le.render=function(e,t,r){if(!Ki(t))throw Error(C(200));return Yi(null,e,t,!1,r)};Le.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(C(40));return e._reactRootContainer?(Kt(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Le.unstable_batchedUpdates=ya;Le.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ki(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Yi(e,t,r,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(e){console.error(e)}}pd(),pu.exports=Le;var mh=pu.exports,Ul=mh;zo.createRoot=Ul.createRoot,zo.hydrateRoot=Ul.hydrateRoot;const rt=Object.create(null);rt.open="0";rt.close="1";rt.ping="2";rt.pong="3";rt.message="4";rt.upgrade="5";rt.noop="6";const ti=Object.create(null);Object.keys(rt).forEach(e=>{ti[rt[e]]=e});const js={type:"error",data:"parser error"},fd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",hd=typeof ArrayBuffer=="function",md=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,_a=({type:e,data:t},r,n)=>fd&&t instanceof Blob?r?n(t):Vl(t,n):hd&&(t instanceof ArrayBuffer||md(t))?r?n(t):Vl(new Blob([t]),n):n(rt[e]+(t||"")),Vl=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function ql(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let _o;function gh(e,t){if(fd&&e.data instanceof Blob)return e.data.arrayBuffer().then(ql).then(t);if(hd&&(e.data instanceof ArrayBuffer||md(e.data)))return t(ql(e.data));_a(e,!1,r=>{_o||(_o=new TextEncoder),t(_o.encode(r))})}const Hl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ur=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Hl.length;e++)Ur[Hl.charCodeAt(e)]=e;const vh=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const p=new ArrayBuffer(t),m=new Uint8Array(p);for(n=0;n<r;n+=4)o=Ur[e.charCodeAt(n)],a=Ur[e.charCodeAt(n+1)],l=Ur[e.charCodeAt(n+2)],u=Ur[e.charCodeAt(n+3)],m[i++]=o<<2|a>>4,m[i++]=(a&15)<<4|l>>2,m[i++]=(l&3)<<6|u&63;return p},yh=typeof ArrayBuffer=="function",ba=(e,t)=>{if(typeof e!="string")return{type:"message",data:gd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:xh(e.substring(1),t)}:ti[r]?e.length>1?{type:ti[r],data:e.substring(1)}:{type:ti[r]}:js},xh=(e,t)=>{if(yh){const r=vh(e);return gd(r,t)}else return{base64:!0,data:e}},gd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},vd="",kh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{_a(o,!1,l=>{n[a]=l,++i===r&&t(n.join(vd))})})},wh=(e,t)=>{const r=e.split(vd),n=[];for(let i=0;i<r.length;i++){const o=ba(r[i],t);if(n.push(o),o.type==="error")break}return n};function jh(){return new TransformStream({transform(e,t){gh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let bo;function $n(e){return e.reduce((t,r)=>t+r.length,0)}function Un(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Sh(e,t){bo||(bo=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if($n(r)<1)break;const u=Un(r,1);o=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if($n(r)<2)break;const u=Un(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if($n(r)<8)break;const u=Un(r,8),p=new DataView(u.buffer,u.byteOffset,u.length),m=p.getUint32(0);if(m>Math.pow(2,21)-1){l.enqueue(js);break}i=m*Math.pow(2,32)+p.getUint32(4),n=3}else{if($n(r)<i)break;const u=Un(r,i);l.enqueue(ba(o?u:bo.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(js);break}}}})}const yd=4;function ie(e){if(e)return Ch(e)}function Ch(e){for(var t in ie.prototype)e[t]=ie.prototype[t];return e}ie.prototype.on=ie.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ie.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};ie.prototype.off=ie.prototype.removeListener=ie.prototype.removeAllListeners=ie.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};ie.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};ie.prototype.emitReserved=ie.prototype.emit;ie.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ie.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Xi=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Oe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Nh="arraybuffer";function xd(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const _h=Oe.setTimeout,bh=Oe.clearTimeout;function Gi(e,t){t.useNativeTimers?(e.setTimeoutFn=_h.bind(Oe),e.clearTimeoutFn=bh.bind(Oe)):(e.setTimeoutFn=Oe.setTimeout.bind(Oe),e.clearTimeoutFn=Oe.clearTimeout.bind(Oe))}const Eh=1.33;function zh(e){return typeof e=="string"?Ph(e):Math.ceil((e.byteLength||e.size)*Eh)}function Ph(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function kd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Th(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Lh(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class Ah extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Ea extends ie{constructor(t){super(),this.writable=!1,Gi(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Ah(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=ba(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Th(t);return r.length?"?"+r:""}}class Rh extends Ea{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};wh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,kh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=kd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let wd=!1;try{wd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Mh=wd;function Oh(){}class Dh extends Rh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class tt extends ie{constructor(t,r,n){super(),this.createRequest=t,Gi(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=xd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=tt.requestsCount++,tt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Oh,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete tt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}tt.requestsCount=0;tt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Wl);else if(typeof addEventListener=="function"){const e="onpagehide"in Oe?"pagehide":"unload";addEventListener(e,Wl,!1)}}function Wl(){for(let e in tt.requests)tt.requests.hasOwnProperty(e)&&tt.requests[e].abort()}const Ih=function(){const e=jd({xdomain:!1});return e&&e.responseType!==null}();class Bh extends Dh{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Ih&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new tt(jd,this.uri(),t)}}function jd(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Mh))return new XMLHttpRequest}catch{}if(!t)try{return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Sd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Fh extends Ea{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Sd?{}:xd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;_a(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&Xi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=kd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Eo=Oe.WebSocket||Oe.MozWebSocket;class $h extends Fh{createSocket(t,r,n){return Sd?new Eo(t,r,n):r?new Eo(t,r):new Eo(t)}doWrite(t,r){this.ws.send(r)}}class Uh extends Ea{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Sh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=jh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&Xi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Vh={websocket:$h,webtransport:Uh,polling:Bh},qh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Hh=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ss(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=qh.exec(e||""),o={},a=14;for(;a--;)o[Hh[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Wh(o,o.path),o.queryKey=Qh(o,o.query),o}function Wh(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Qh(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Cs=typeof addEventListener=="function"&&typeof removeEventListener=="function",ri=[];Cs&&addEventListener("offline",()=>{ri.forEach(e=>e())},!1);class Pt extends ie{constructor(t,r){if(super(),this.binaryType=Nh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Ss(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Ss(r.host).host);Gi(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Lh(this.opts.query)),Cs&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ri.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=yd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Pt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Pt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=zh(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Xi(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Pt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Cs&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ri.indexOf(this._offlineEventListener);n!==-1&&ri.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Pt.protocol=yd;class Kh extends Pt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Pt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Pt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(m(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const c=new Error("probe error");c.transport=r.name,this.emitReserved("upgradeError",c)}}))};function o(){n||(n=!0,m(),r.close(),r=null)}const a=g=>{const c=new Error("probe error: "+g);c.transport=r.name,o(),this.emitReserved("upgradeError",c)};function l(){a("transport closed")}function u(){a("socket closed")}function p(g){r&&g.name!==r.name&&o()}const m=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",p)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let Yh=class extends Kh{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>Vh[o]).filter(o=>!!o)),super(n?i:t,i)}};function Xh(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Ss(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Gh=typeof ArrayBuffer=="function",Jh=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Cd=Object.prototype.toString,Zh=typeof Blob=="function"||typeof Blob<"u"&&Cd.call(Blob)==="[object BlobConstructor]",em=typeof File=="function"||typeof File<"u"&&Cd.call(File)==="[object FileConstructor]";function za(e){return Gh&&(e instanceof ArrayBuffer||Jh(e))||Zh&&e instanceof Blob||em&&e instanceof File}function ni(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ni(e[r]))return!0;return!1}if(za(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ni(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ni(e[r]))return!0;return!1}function tm(e){const t=[],r=e.data,n=e;return n.data=ii(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ii(e,t,r){if(!e)return e;if(za(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ii(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ii(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ii(e[i],t));return n}return e}function rm(e,t){return e.data=Ns(e.data,t),delete e.attachments,e}function Ns(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Ns(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Ns(e[r],t));return e}const nm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var F;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(F||(F={}));class im{constructor(t){this.replacer=t}encode(t){return(t.type===F.EVENT||t.type===F.ACK)&&ni(t)?this.encodeAsBinary({type:t.type===F.EVENT?F.BINARY_EVENT:F.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===F.BINARY_EVENT||t.type===F.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=tm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Pa extends ie{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===F.BINARY_EVENT;n||r.type===F.BINARY_ACK?(r.type=n?F.EVENT:F.ACK,this.reconstructor=new om(r)):super.emitReserved("decoded",r)}else if(za(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(F[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===F.BINARY_EVENT||n.type===F.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!sm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(Pa.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case F.CONNECT:return Ql(r);case F.DISCONNECT:return r===void 0;case F.CONNECT_ERROR:return typeof r=="string"||Ql(r);case F.EVENT:case F.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&nm.indexOf(r[0])===-1);case F.ACK:case F.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class om{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=rm(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const sm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function Ql(e){return Object.prototype.toString.call(e)==="[object Object]"}const am=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Pa,Encoder:im,get PacketType(){return F}},Symbol.toStringTag,{value:"Module"}));function qe(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const lm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Nd extends ie{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[qe(t,"open",this.onopen.bind(this)),qe(t,"packet",this.onpacket.bind(this)),qe(t,"error",this.onerror.bind(this)),qe(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(lm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:F.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const m=this.ids++,g=r.pop();this._registerAckCallback(m,g),a.id=m}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:F.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case F.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case F.EVENT:case F.BINARY_EVENT:this.onevent(t);break;case F.ACK:case F.BINARY_ACK:this.onack(t);break;case F.DISCONNECT:this.ondisconnect();break;case F.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:F.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:F.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Er(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Er.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Er.prototype.reset=function(){this.attempts=0};Er.prototype.setMin=function(e){this.ms=e};Er.prototype.setMax=function(e){this.max=e};Er.prototype.setJitter=function(e){this.jitter=e};class _s extends ie{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Gi(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Er({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||am;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Yh(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=qe(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=qe(r,"error",o);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(qe(t,"ping",this.onping.bind(this)),qe(t,"data",this.ondata.bind(this)),qe(t,"error",this.onerror.bind(this)),qe(t,"close",this.onclose.bind(this)),qe(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){Xi(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Nd(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Dr={};function oi(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Xh(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=Dr[i]&&o in Dr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new _s(n,t):(Dr[i]||(Dr[i]=new _s(n,t)),u=Dr[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(oi,{Manager:_s,Socket:Nd,io:oi,connect:oi});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_d=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},u)=>A.createElement("svg",{ref:u,...cm,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:_d("lucide",i),...l},[...a.map(([p,m])=>A.createElement(p,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=A.forwardRef(({className:n,...i},o)=>A.createElement(dm,{ref:o,iconNode:t,className:_d(`lucide-${um(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=L("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=L("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=L("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=L("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=L("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=L("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=L("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=L("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=L("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=L("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=L("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=L("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=L("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=L("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=L("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=L("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=L("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=L("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=L("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=L("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=L("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=L("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=L("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=L("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=L("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=L("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=L("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=L("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=L("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=L("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=L("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=L("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=L("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=L("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=L("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=L("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=L("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=L("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=L("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);function Mm(e){switch(e){case"burger":return s.jsx(Ed,{size:16});case"fries":return s.jsx(Bd,{size:16});case"drink":return s.jsx(Md,{size:16});case"dessert":return s.jsx(Rd,{size:16});case"pizza":return s.jsx(Dd,{size:16});case"coffee":return s.jsx(Ad,{size:16});default:return s.jsx(pt,{size:16})}}function Om({menu:e,operador:t,onEnviarPedido:r}){const[n,i]=A.useState(""),[o,a]=A.useState(""),[l,u]=A.useState("todas"),[p,m]=A.useState([]),[g,c]=A.useState(null),[v,k]=A.useState("cardapio"),[w,y]=A.useState("pix"),[f,d]=A.useState(()=>{const z=new Date;return z.setDate(z.getDate()+7),z.toISOString().split("T")[0]}),h=(e==null?void 0:e.categorias)||[],j=(e==null?void 0:e.produtos)||[],x=l==="todas"?j:j.filter(z=>z.categoriaId===l),_=z=>{m(U=>{const oe=U.findIndex(ee=>ee.id===z.id);if(oe>=0){const ee=[...U];return ee[oe].quantidade+=1,ee}return[...U,{id:z.id,nome:z.nome,preco:z.preco,quantidade:1,observacao:""}]})},N=(z,U)=>{m(oe=>oe.map(ee=>{if(ee.id===z){const Ye=ee.quantidade+U;return Ye>0?{...ee,quantidade:Ye}:null}return ee}).filter(Boolean))},E=(z,U)=>{m(oe=>oe.map(ee=>ee.id===z?{...ee,observacao:U}:ee))},q=z=>{m(U=>U.filter(oe=>oe.id!==z))},M=p.reduce((z,U)=>z+U.preco*U.quantidade,0),Z=p.reduce((z,U)=>z+U.quantidade,0),ve=z=>{if(z.preventDefault(),!n.trim()){alert("Por favor, informe o nome do cliente!");return}if(p.length===0){alert("Selecione pelo menos um item para o pedido.");return}const U=w==="pagar_depois";if(U){if(!o.trim()){alert("Por favor, informe o telefone do cliente para a opção Pagar Depois!");return}if(!f){alert("Por favor, selecione a data de cobrança!");return}}r({cliente:n.trim(),telefoneCliente:U?o.trim():null,itens:p,formaPagamento:w,statusPagamento:U?"pendente_pagamento":"pago",dataCobranca:U?f:null},oe=>{oe&&oe.status==="success"&&(c(`Pedido #${oe.order.numero} enviado com sucesso!`),i(""),a(""),m([]),y("pix"),k("cardapio"),setTimeout(()=>c(null),4e3))})};return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
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
          padding: 0.9rem 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 24px var(--primary-glow);
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          z-index: 90;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 1024px) {
          .caixa-container {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            min-height: auto !important;
          }

          .caixa-cardapio {
            display: ${v==="cardapio"?"flex":"none"} !important;
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
            padding-right: 0 !important;
          }

          .caixa-carrinho {
            display: ${v==="carrinho"?"flex":"none"} !important;
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
            padding-bottom: 6rem !important;
            margin-bottom: 2rem !important;
          }

          .mobile-view-toggle {
            display: grid;
          }

          .mobile-cart-float-bar {
            display: ${v==="cardapio"&&Z>0?"flex":"none"};
          }
        }

        .caixa-cardapio {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .cat-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
          min-height: 44px;
        }

        .cat-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
          box-shadow: 0 2px 8px var(--primary-glow);
        }

        .produtos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.85rem;
        }

        @media (min-width: 640px) {
          .produtos-grid {
            grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
            gap: 1rem;
          }
        }

        .prod-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 130ms ease;
          cursor: pointer;
          min-height: 145px;
          -webkit-tap-highlight-color: transparent;
        }

        .prod-card:active {
          transform: scale(0.98);
        }

        .prod-card:hover {
          border-color: var(--app-border-light);
          background: var(--app-surface-2);
          box-shadow: var(--shadow-sm);
        }

        .prod-card.indisponivel {
          opacity: 0.4;
          pointer-events: none;
        }

        .prod-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-title);
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }

        .prod-desc {
          font-size: 0.8rem;
          color: var(--app-ink-muted);
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prod-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .prod-preco {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--status-pronto);
        }

        .prod-add-btn {
          background: rgba(16, 185, 129, 0.12);
          color: var(--primary);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.82rem;
          min-height: 38px;
        }

        .prod-card:hover .prod-add-btn {
          background: var(--primary);
          color: var(--on-primary);
        }

        /* Resumo do Pedido / Carrinho */
        .caixa-carrinho {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .carrinho-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-title);
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .cliente-input-box {
          background: var(--app-canvas);
          border: 2px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: none;
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

        .cliente-input::placeholder {
          color: var(--app-ink-muted);
          font-weight: 400;
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

        .carrinho-vazio {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--app-ink-muted);
          text-align: center;
          gap: 0.5rem;
          padding: 2rem 0;
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

        .qtd-btn:hover {
          color: var(--primary);
          background: var(--app-surface-2);
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
          padding: 0.45rem 0.6rem;
          color: var(--text-obs);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
        }

        .obs-input:focus {
          border-color: var(--primary);
        }

        /* Seletor de Pagamento */
        .pgto-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }

        .pgto-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0.5rem 0.3rem;
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          color: var(--app-ink);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 130ms ease;
          min-height: 48px;
        }

        .pgto-btn.active {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.15);
          color: var(--primary);
        }

        .pgto-btn.active.pagar-depois {
          border-color: var(--status-preparo);
          background: rgba(230, 134, 25, 0.18);
          color: var(--status-preparo);
        }

        .carrinho-footer {
          border-top: 1px solid var(--app-border);
          padding-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .total-label {
          font-size: 0.95rem;
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
          min-height: 50px;
        }

        .toast-sucesso {
          background: rgba(45, 157, 120, 0.18);
          border: 1px solid var(--status-pronto);
          color: #4ADE80;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
        }
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${v==="cardapio"?"active":""}`,onClick:()=>k("cardapio"),children:[s.jsx(pt,{size:16})," Cardápio"]}),s.jsxs("button",{className:`mobile-toggle-btn ${v==="carrinho"?"active":""}`,onClick:()=>k("carrinho"),children:[s.jsx(wt,{size:16})," Carrinho (",Z,")"]})]}),s.jsxs("div",{className:"caixa-cardapio",children:[s.jsxs("div",{className:"cat-bar",children:[s.jsxs("button",{className:`cat-btn ${l==="todas"?"active":""}`,onClick:()=>u("todas"),children:[s.jsx(pt,{size:16})," Todos"]}),h.map(z=>s.jsxs("button",{className:`cat-btn ${l===z.id?"active":""}`,onClick:()=>u(z.id),children:[Mm(z.icone)," ",s.jsx("span",{children:z.nome})]},z.id))]}),s.jsx("div",{className:"produtos-grid",children:x.map(z=>s.jsxs("div",{className:`prod-card ${z.disponivel?"":"indisponivel"}`,onClick:()=>z.disponivel&&_(z),children:[s.jsxs("div",{children:[s.jsx("div",{className:"prod-title",children:z.nome}),s.jsx("div",{className:"prod-desc",children:z.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("div",{className:"prod-preco",children:["R$ ",z.preco.toFixed(2)]}),s.jsxs("button",{className:"prod-add-btn",children:[s.jsx(Ps,{size:14})," Add"]})]})]},z.id))})]}),s.jsxs("div",{className:"caixa-carrinho",children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsx(wt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Resumo do Pedido"})]}),g&&s.jsxs("div",{className:"toast-sucesso",children:[s.jsx(La,{size:18}),s.jsx("span",{children:g})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx(Cr,{size:20,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:n,onChange:z=>i(z.target.value)})]})]}),s.jsx("div",{className:"carrinho-itens",children:p.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(wt,{size:36,strokeWidth:1.5}),s.jsx("p",{children:"Nenhum item selecionado"}),s.jsx("span",{style:{fontSize:"0.8rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):p.map(z=>s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:z.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(z.preco*z.quantidade).toFixed(2)]})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>N(z.id,-1),children:s.jsx(xm,{size:14})}),s.jsx("span",{className:"qtd-val",children:z.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>N(z.id,1),children:s.jsx(Ps,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>q(z.id),children:s.jsx(Li,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(gm,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:z.observacao,onChange:U=>E(z.id,U.target.value)})]})]},z.id))}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${w==="pix"?"active":""}`,onClick:()=>y("pix"),children:[s.jsx(si,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="dinheiro"?"active":""}`,onClick:()=>y("dinheiro"),children:[s.jsx(Od,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="debito"?"active":""}`,onClick:()=>y("debito"),children:[s.jsx(si,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="credito"?"active":""}`,onClick:()=>y("credito"),children:[s.jsx(si,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${w==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>y("pagar_depois"),children:[s.jsx(zd,{size:16})," Pagar Depois (Fiado)"]})]}),w==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(zs,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:o,onChange:z=>a(z.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ji,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:f,onChange:z=>d(z.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ld,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",M.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:ve,disabled:p.length===0||!n.trim(),children:[s.jsx(Sm,{size:18})," Enviar para Cozinha"]})]})]}),s.jsxs("div",{className:"mobile-cart-float-bar",onClick:()=>k("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(wt,{size:20}),s.jsxs("span",{children:["Ver Pedido (",Z," ",Z===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",M.toFixed(2)," →"]})]})]})}function Dm({pedidos:e,operador:t,onMudarStatus:r}){const[n,i]=A.useState(Date.now()),[o,a]=A.useState("ativos");A.useEffect(()=>{const c=setInterval(()=>{i(Date.now())},1e3);return()=>clearInterval(c)},[]);const l=e.filter(c=>c.status==="pendente"||c.status==="em_preparo"),u=l.filter(c=>o==="pendentes"?c.status==="pendente":o==="preparo"?c.status==="em_preparo":o==="meus"&&t?c.preparadoPor&&c.preparadoPor.includes(t.nome):!0),p=c=>{const v=new Date(c).getTime(),k=n-v;return Math.floor(k/6e4)},m=c=>{const v=new Date(c).getTime(),k=Math.max(0,n-v),w=Math.floor(k/6e4),y=Math.floor(k%6e4/1e3);return`${String(w).padStart(2,"0")}:${String(y).padStart(2,"0")}`},g=c=>{const v=p(c);return v>=10?"urgente":v>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
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
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }

        .kds-card {
          background: var(--app-surface-1);
          border: 2px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
          transition: border-color 130ms ease, transform 130ms ease;
        }

        .kds-card.normal {
          border-color: rgba(45, 157, 120, 0.4);
        }

        .kds-card.alerta {
          border-color: var(--status-preparo);
        }

        .kds-card.urgente {
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(250, 15, 0, 0.4);
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
          gap: 0.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .kds-item-row:last-child {
          border-bottom: none;
        }

        .item-line {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .item-qtd-badge {
          background: var(--primary);
          color: var(--on-primary);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.95rem;
          width: 26px;
          height: 26px;
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
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(vn,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${o==="ativos"?"active":""}`,onClick:()=>a("ativos"),children:["Todos (",l.length,")"]}),s.jsxs("button",{className:`nav-btn ${o==="pendentes"?"active":""}`,onClick:()=>a("pendentes"),children:["Novos (",l.filter(c=>c.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${o==="preparo"?"active":""}`,onClick:()=>a("preparo"),children:["Em Preparo (",l.filter(c=>c.status==="em_preparo").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${o==="meus"?"active":""}`,onClick:()=>a("meus"),children:["Meus Pedidos (",l.filter(c=>c.preparadoPor&&c.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:u.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Ti,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):u.map(c=>{const v=g(c.criadoEm),k=m(c.criadoEm);return s.jsxs("div",{className:`kds-card ${v}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",c.numero]}),s.jsx("div",{className:"cliente-nome",children:c.cliente}),c.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",c.dataCobranca?new Date(c.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:c.formaPagamento?c.formaPagamento.toUpperCase():"PIX"}),c.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx(Cr,{size:12}),s.jsxs("span",{children:["Preparo: ",c.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[s.jsx("span",{className:`badge badge-${c.status==="pendente"?"pendente":"preparo"}`,children:c.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${v}`,children:[s.jsx(Ji,{size:14}),s.jsx("span",{children:k})]})]})]}),s.jsx("div",{className:"kds-card-body",children:c.itens.map((w,y)=>s.jsxs("div",{className:"kds-item-row",children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("span",{className:"item-qtd-badge",children:[w.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:w.nome})]}),w.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(ym,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",w.observacao]})]})]},y))}),s.jsx("div",{className:"kds-card-footer",children:c.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(c.id,"em_preparo"),children:[s.jsx(jm,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(c.id,"pronto"),children:[s.jsx(Ta,{size:18})," Pronto / Chamar Cliente"]})})]},c.id)})})]})}let Jt=null;function Im(){if(!Jt){const e=window.AudioContext||window.webkitAudioContext;e&&(Jt=new e)}return Jt&&Jt.state==="suspended"&&Jt.resume(),Jt}function Zl(){try{const e=Im();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function Bm({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r}){const[n,i]=A.useState(!0);A.useEffect(()=>{t&&n&&Zl()},[t,n]);const o=e.filter(u=>u.status==="pronto"),a=e.filter(u=>u.status==="entregue").slice(0,8),l=t&&t.status==="pronto"?t:o[0];return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
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
          padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 1.5rem);
          box-shadow: var(--glow-pronto);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .destaque-comanda {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 10vw, 4.5rem);
          font-weight: 900;
          color: var(--text-title);
          line-height: 1;
        }

        .destaque-cliente {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 900;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
          word-break: break-word;
          text-shadow: 0 0 25px rgba(45, 157, 120, 0.4);
        }

        .destaque-acoes {
          margin-top: 1.25rem;
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
          transform: translateX(4px);
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
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${n?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{i(!n),n||Zl()},children:[n?s.jsx(Tm,{size:18,color:"var(--status-pronto)"}):s.jsx(Lm,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:n?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(Ta,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),l?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",l.numero]}),s.jsx("div",{className:"destaque-cliente",children:l.cliente}),s.jsx("div",{className:"destaque-acoes",children:s.jsxs("button",{className:"btn btn-success",style:{padding:"0.9rem 2rem",fontSize:"1.15rem",borderRadius:"var(--radius-md)"},onClick:()=>r(l.id,"entregue"),children:[s.jsx(Jl,{size:22})," Marcar como Entregue"]})})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Ai,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Ti,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",o.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:o.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):o.map(u=>s.jsxs("div",{className:"pronto-item",onClick:()=>r(u.id,"entregue"),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",u.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:u.cliente})]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",fontSize:"0.8rem"},children:["Entregue ",s.jsx(bd,{size:14})]})]},u.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Jl,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:a.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):a.map(u=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",u.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:u.cliente})]},u.id))})]})]})]})}const Fd=[{id:"burger",nome:"Hambúrguer",component:s.jsx(Ed,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(Bd,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(Md,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(Rd,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(Dd,{size:18})},{id:"coffee",nome:"Café",component:s.jsx(Ad,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(pt,{size:18})}];function eu(e){const t=Fd.find(r=>r.id===e);return t?t.component:s.jsx(pt,{size:16})}function Fm({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o}){const[a,l]=A.useState("todas"),[u,p]=A.useState(""),[m,g]=A.useState(!1),[c,v]=A.useState(!1),[k,w]=A.useState(null),[y,f]=A.useState(""),[d,h]=A.useState(""),[j,x]=A.useState(""),[_,N]=A.useState(""),[E,q]=A.useState(""),[M,Z]=A.useState("burger"),ve=(e==null?void 0:e.categorias)||[],z=(e==null?void 0:e.produtos)||[],U=z.filter(S=>{const I=a==="todas"||S.categoriaId===a,T=!u.trim()||S.nome.toLowerCase().includes(u.toLowerCase())||S.descricao&&S.descricao.toLowerCase().includes(u.toLowerCase());return I&&T}),oe=(S=null)=>{var I;S?(w(S),f(S.nome),h(S.categoriaId),x(S.preco.toString()),N(S.descricao||"")):(w(null),f(""),h(((I=ve[0])==null?void 0:I.id)||"lanches"),x(""),N("")),g(!0)},ee=()=>{q(""),Z("burger"),v(!0)},Ye=S=>{if(S.preventDefault(),!y.trim()||!j||!d){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:k?k.id:void 0,categoriaId:d,nome:y.trim(),preco:parseFloat(j),descricao:_.trim(),disponivel:k?k.disponivel:!0}),g(!1)},b=S=>{if(S.preventDefault(),!E.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:E.trim(),icone:M}),v(!1)},R=S=>{window.confirm(`Tem certeza que deseja excluir o produto "${S.nome}"?`)&&r(S.id)},O=S=>{const I=z.filter(T=>T.categoriaId===S.id).length;if(I>0){alert(`Não é possível excluir a categoria "${S.nome}" pois ela possui ${I} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${S.nome}"?`)&&o(S.id).then(T=>{T&&T.error?alert(T.error):a===S.id&&l("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(pt,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Id,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:S=>p(S.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:ee,children:[s.jsx(Kl,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>oe(),children:[s.jsx(Ps,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${a==="todas"?"active":""}`,onClick:()=>l("todas"),children:[s.jsx(Nm,{size:14})," Todas (",z.length,")"]}),ve.map(S=>{const I=z.filter(T=>T.categoriaId===S.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${a===S.id?"active":""}`,onClick:()=>l(S.id),children:[eu(S.icone)," ",s.jsx("span",{children:S.nome})," (",I,")"]}),I===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>O(S),children:s.jsx(Li,{size:13})})]},S.id)})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:U.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"6",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(Ld,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):U.map(S=>{const I=ve.find(T=>T.id===S.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(S.id),children:S.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(bm,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(_m,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:S.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[eu(I==null?void 0:I.icone)," ",(I==null?void 0:I.nome)||S.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",S.preco.toFixed(2)]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:S.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>oe(S),children:[s.jsx(wm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>R(S),children:[s.jsx(Li,{size:14})," Excluir"]})]})})]},S.id)})})]})}),m&&s.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(pt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:k?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:Ye,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:y,onChange:S=>f(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:d,onChange:S=>h(S.target.value),required:!0,children:ve.map(S=>s.jsx("option",{value:S.id,children:S.nome},S.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:j,onChange:S=>x(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:_,onChange:S=>N(S.target.value)})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(Jr,{size:18})," Salvar Produto"]})]})]})]})}),c&&s.jsx("div",{className:"modal-backdrop",onClick:()=>v(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(Kl,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:E,onChange:S=>q(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:Fd.map(S=>s.jsxs("button",{type:"button",className:`icone-opt ${M===S.id?"selected":""}`,onClick:()=>Z(S.id),children:[S.component,s.jsx("span",{children:S.nome})]},S.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>v(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(Jr,{size:18})," Criar Categoria"]})]})]})]})})]})}function $m({pedidos:e,operador:t}){const[r,n]=A.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Aa,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const o=y=>{n(f=>f===y?null:y)},a=(y,f)=>{y.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${f}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(d=>d.json()).catch(d=>console.error("Erro ao quitar pagamento:",d))},l=y=>y.statusPagamento==="pago"?!1:y.statusPagamento==="pendente_pagamento"||y.formaPagamento==="pagar_depois",u=e.filter(y=>y.status!=="cancelado"),p=u.filter(y=>!l(y)),m=u.filter(y=>l(y)),g=p.reduce((y,f)=>y+(Number(f.total)||0),0),c=m.reduce((y,f)=>y+(Number(f.total)||0),0),v=u.length,k=v>0?(g+c)/v:0,w=y=>{if(y.formaPagamento==="pagar_depois"||y.statusPagamento==="pendente_pagamento"){const f=y.dataCobranca?new Date(y.dataCobranca).toLocaleDateString():"Sem Data";return y.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(Jr,{size:12})," Pagar Depois (Quitado ",f,")"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(Ji,{size:12})," Pagar Depois (Cobrar: ",f,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(si,{size:12})," ",y.formaPagamento?y.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(bs,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Controle de Cobrança"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsx("span",{children:"Tempo Real"})})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(Od,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",g.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(zd,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",c.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(wt,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total de Comandas"}),s.jsxs("div",{className:"metric-value",children:[v," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx(Em,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",k.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:u.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"2.5rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido registrado no sistema ainda."})}):u.map(y=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",y.numero]})}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:y.cliente}),y.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(zs,{size:12}),s.jsx("span",{children:y.telefoneCliente})]})]}),s.jsx("td",{children:w(y)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(y.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${y.status==="pronto"?"pronto":y.status==="entregue"?"entregue":"preparo"}`,children:y.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.85rem"},children:[s.jsxs("div",{children:["Lançado: ",s.jsx("strong",{children:y.criadoPor||"Caixa"})]}),y.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Preparo: ",y.preparadoPor]})]}),s.jsx("td",{children:s.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:l(y)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:f=>a(f,y.id),children:[s.jsx(Jr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ti,{size:15})," Quitado"]})})})]},y.id))})]})}),s.jsx("div",{className:"vendas-mobile-list",children:u.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido registrado no sistema ainda."}):u.map(y=>{const f=r===y.id;return s.jsxs("div",{className:"venda-card-mobile",onClick:()=>o(y.id),children:[s.jsxs("div",{className:"venda-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",y.numero]}),s.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:y.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(y.total)||0).toFixed(2)]}),f?s.jsx(Td,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Pd,{size:16,color:"var(--app-ink-muted)"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[s.jsx("div",{children:w(y)}),s.jsx("span",{className:`badge badge-${y.status==="pronto"?"pronto":y.status==="entregue"?"entregue":"preparo"}`,children:y.status.toUpperCase()})]}),f&&s.jsxs("div",{className:"venda-card-details",children:[y.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[s.jsx(zs,{size:13}),s.jsxs("span",{children:["Contato / WhatsApp: ",s.jsx("strong",{children:y.telefoneCliente})]})]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem"},children:[s.jsxs("span",{children:["Lançado: ",s.jsx("strong",{children:y.criadoPor||"Caixa"})]}),y.preparadoPor&&s.jsxs("span",{children:["Cozinha: ",s.jsx("strong",{children:y.preparadoPor})]})]}),s.jsx("div",{style:{marginTop:"0.3rem",display:"flex",justifyContent:"flex-end"},children:l(y)?s.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:d=>a(d,y.id),children:[s.jsx(Jr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ti,{size:15})," Pagamento Confirmado / Quitado"]})})]})]},y.id)})})]})}function Um({operador:e}){const[t,r]=A.useState([]),[n,i]=A.useState(!1),[o,a]=A.useState(!1),[l,u]=A.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[p,m]=A.useState({}),[g,c]=A.useState(null),v=e&&e.role==="master";A.useEffect(()=>{v&&k()},[v]);const k=()=>{fetch("/api/users").then(x=>x.json()).then(x=>r(x)).catch(x=>console.error("Erro ao carregar usuários:",x))};if(!v)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Aa,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const w=x=>{m(_=>({..._,[x]:!_[x]}))},y=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},f=x=>{u({...x}),a(!0),i(!0)},d=x=>{if(x.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const _=o?`/api/users/${l.id}`:"/api/users";fetch(_,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(E=>E.json()).then(E=>{E&&E.status==="success"?(c(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),k(),setTimeout(()=>c(null),4e3)):alert(E.error||"Erro ao salvar usuário.")}).catch(E=>alert("Erro de conexão com o servidor."))},h=(x,_)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${_}"?`)&&fetch(`/api/users/${x}`,{method:"DELETE"}).then(N=>N.json()).then(N=>{N&&N.status==="success"?(c(`Conta de "${_}" excluída com sucesso.`),k(),setTimeout(()=>c(null),4e3)):alert(N.error||"Erro ao excluir conta.")})},j=x=>{switch(x){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(pm,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(wt,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(vn,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Ai,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:x})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Ts,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:y,children:[s.jsx(Pm,{size:18})," Nova Conta"]})]}),g&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(La,{size:18}),s.jsx("span",{children:g})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:x.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:x.usuario})}),s.jsx("td",{children:j(x.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:p[x.id]?x.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>w(x.id),title:"Revelar/Ocultar Senha",children:p[x.id]?s.jsx(hm,{size:14}):s.jsx(mm,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>f(x),children:[s.jsx(Cm,{size:14})," Editar"]}),x.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>h(x.id,x.nome),children:[s.jsx(Li,{size:14})," Excluir"]})]})})]},x.id))})]})}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Cr,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:x=>u({...l,nome:x.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:x=>u({...l,usuario:x.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:x=>u({...l,senha:x.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:x=>u({...l,role:x.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function Vm({logs:e,operador:t}){const[r,n]=A.useState(""),[i,o]=A.useState("todas"),[a,l]=A.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Aa,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const p=c=>{l(v=>v===c?null:c)},m=e.filter(c=>{const v=i==="todas"||c.acao===i,k=r.toLowerCase().trim(),w=!k||String(c.numeroPedido).includes(k)||c.cliente&&c.cliente.toLowerCase().includes(k)||c.usuario&&c.usuario.toLowerCase().includes(k)||c.descricao&&c.descricao.toLowerCase().includes(k);return v&&w}),g=c=>{switch(c){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(fm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(vn,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ta,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(La,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:c})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Es,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Id,{size:16,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:c=>n(c.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(c=>c.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(c=>c.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(c=>c.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(c=>c.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:m.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):m.map(c=>{const v=new Date(c.timestamp),k=`${v.toLocaleDateString()} ${v.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ji,{size:13}),s.jsx("span",{children:k})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx(Cr,{size:14,color:"var(--primary)"}),s.jsx("span",{children:c.usuario})]})}),s.jsx("td",{children:g(c.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",c.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",c.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:c.descricao}),c.itens&&Array.isArray(c.itens)&&c.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:c.itens.map((w,y)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(km,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[w.quantidade,"x"]}),s.jsx("span",{children:w.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(w.preco*w.quantidade).toFixed(2),")"]}),w.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",w.observacao,"]"]})]},y))})]})]},c.id)})})]})}),s.jsx("div",{className:"logs-mobile-list",children:m.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):m.map(c=>{const v=new Date(c.timestamp),k=v.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),w=a===c.id;return s.jsxs("div",{className:"log-card-mobile",onClick:()=>p(c.id),children:[s.jsxs("div",{className:"log-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",c.numeroPedido]}),s.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:c.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[g(c.acao),s.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:k}),w?s.jsx(Td,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Pd,{size:16,color:"var(--app-ink-muted)"})]})]}),w&&s.jsxs("div",{className:"log-card-details",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[s.jsx(Cr,{size:13,color:"var(--primary)"}),s.jsxs("span",{children:["Operador: ",s.jsx("strong",{children:c.usuario})]}),s.jsxs("span",{style:{marginLeft:"auto"},children:[v.toLocaleDateString()," ",v.toLocaleTimeString()]})]}),s.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:c.descricao}),c.itens&&Array.isArray(c.itens)&&c.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:c.itens.map((y,f)=>s.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[y.quantidade,"x"]})," ",y.nome," (R$ ",(y.preco*y.quantidade).toFixed(2),")",y.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",y.observacao,"]"]})]},f))})]})]},c.id)})})]})}const re=oi(window.location.origin,{transports:["websocket","polling"]});function qm(){const[e,t]=A.useState("caixa"),[r,n]=A.useState(!1),[i,o]=A.useState(()=>localStorage.getItem("tema_lanchonete")||"claro"),[a,l]=A.useState(()=>{try{const T=localStorage.getItem("operador_lanchonete");return T?JSON.parse(T):null}catch{return null}}),[u,p]=A.useState(""),[m,g]=A.useState(""),[c,v]=A.useState(null),[k,w]=A.useState(!1),[y,f]=A.useState([]),[d,h]=A.useState({categorias:[],produtos:[]}),[j,x]=A.useState([]),[_,N]=A.useState(null);A.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const E=()=>{o(T=>T==="escuro"?"claro":"escuro")};A.useEffect(()=>{fetch("/api/logs").then(T=>T.json()).then(T=>x(T)).catch(T=>console.error("Erro ao buscar logs:",T))},[]);const q=T=>{if(T.preventDefault(),v(null),!u.trim()||!m.trim()){v("Preencha usuário e senha.");return}w(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:m.trim()})}).then(D=>D.json()).then(D=>{if(w(!1),D&&D.status==="success"){const ye=D.user;l(ye),localStorage.setItem("operador_lanchonete",JSON.stringify(ye)),ye.role==="cozinha"?t("cozinha"):ye.role==="tv"?t("chamada"):t("caixa")}else v(D.error||"Credenciais inválidas.")}).catch(D=>{w(!1),v("Erro de conexão com o servidor.")})},M=()=>{l(null),localStorage.removeItem("operador_lanchonete"),p(""),g(""),v(null)};A.useEffect(()=>(re.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),re.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),re.on("pedidos_iniciais",T=>{f(T)}),re.on("cardapio_inicial",T=>{h(T)}),re.on("novo_pedido_criado",T=>{f(D=>[T,...D.filter(ye=>ye.id!==T.id)])}),re.on("status_pedido_atualizado",T=>{f(D=>D.map(ye=>ye.id===T.id?T:ye))}),re.on("pedido_chamado",T=>{N(T)}),re.on("cardapio_atualizado",T=>{h(T)}),re.on("novo_log_auditoria",T=>{x(D=>[T,...D.filter(ye=>ye.id!==T.id)])}),()=>{re.off("connect"),re.off("disconnect"),re.off("pedidos_iniciais"),re.off("cardapio_inicial"),re.off("novo_pedido_criado"),re.off("status_pedido_atualizado"),re.off("pedido_chamado"),re.off("cardapio_atualizado"),re.off("novo_log_auditoria")}),[]);const Z=(T,D)=>{re.emit("criar_pedido",{...T,criadoPor:a?`${a.nome}`:"Caixa"},D)},ve=(T,D)=>{re.emit("mudar_status_pedido",{id:T,status:D,preparadoPor:a?`${a.nome}`:"Cozinha"})},z=T=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar produto:",D))},U=T=>{fetch(`/api/menu/produto/${T}`,{method:"DELETE"}).then(D=>D.json()).catch(D=>console.error("Erro ao excluir produto:",D))},oe=T=>{fetch(`/api/menu/produto/${T}/disponivel`,{method:"PATCH"}).then(D=>D.json()).catch(D=>console.error("Erro ao alterar disponibilidade:",D))},ee=T=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar categoria:",D))},Ye=T=>fetch(`/api/menu/categoria/${T}`,{method:"DELETE"}).then(D=>D.json());if(!a)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:E,title:"Alternar Tema",children:i==="escuro"?s.jsx(Gl,{size:16,color:"var(--status-preparo)"}):s.jsx(Xl,{size:16,color:"var(--primary)"})})]}),c&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(zm,{size:18}),s.jsx("span",{children:c})]}),s.jsxs("form",{onSubmit:q,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:T=>p(T.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:m,onChange:T=>g(T.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:k,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[k?"Autenticando...":"Entrar no Sistema"," ",s.jsx(bd,{size:18})]})]})]})]});const b=a.role==="master"||a.role==="caixa",R=a.role==="master",O=a.role==="master",S=a.role==="master"||a.role==="caixa",I=a.role==="master"||a.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[b&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(wt,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(vn,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Ai,{size:18})," Chamada TV"]}),S&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(bs,{size:18})," Vendas"]}),I&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Es,{size:18})," Logs"]}),R&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(pt,{size:18})," Cardápio"]}),O&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Ts,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:M,title:`Operador: ${a.nome} (${a.role.toUpperCase()}) - Clique para sair`,children:[s.jsx(Cr,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:a.nome}),s.jsx(vm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:E,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(Gl,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Xl,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Rm,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Am,{size:14})," Conectando..."]})]})]})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(b?s.jsx(Om,{menu:d,operador:a,onEnviarPedido:Z}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Yl,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",a.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(Dm,{pedidos:y,operador:a,onMudarStatus:ve}),e==="chamada"&&s.jsx(Bm,{pedidos:y,ultimoPedidoChamado:_,onMudarStatus:ve}),e==="vendas"&&s.jsx($m,{pedidos:y,operador:a}),e==="logs"&&s.jsx(Vm,{logs:j,operador:a}),e==="cardapio"&&(R?s.jsx(Fm,{menu:d,onSalvarProduto:z,onExcluirProduto:U,onToggleDisponivel:oe,onSalvarCategoria:ee,onExcluirCategoria:Ye}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Yl,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&s.jsx(Um,{operador:a})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[b&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(wt,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(vn,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Ai,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),S&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(bs,{size:20}),s.jsx("span",{children:"Vendas"})]}),I&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Es,{size:20}),s.jsx("span",{children:"Logs"})]}),R&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(pt,{size:20}),s.jsx("span",{children:"Cardápio"})]}),O&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Ts,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}zo.createRoot(document.getElementById("root")).render(s.jsx(np.StrictMode,{children:s.jsx(qm,{})}));
