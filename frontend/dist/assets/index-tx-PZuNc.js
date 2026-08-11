(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Bd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},Ri={},tu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=Symbol.for("react.element"),Fd=Symbol.for("react.portal"),$d=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Kd=Symbol.for("react.memo"),Yd=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Xd(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,iu={};function Cr(e,t,r){this.props=e,this.context=t,this.refs=iu,this.updater=r||ru}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ou(){}ou.prototype=Cr.prototype;function Ps(e,t,r){this.props=e,this.context=t,this.refs=iu,this.updater=r||ru}var Ts=Ps.prototype=new ou;Ts.constructor=Ps;nu(Ts,Cr.prototype);Ts.isPureReactComponent=!0;var Aa=Array.isArray,su=Object.prototype.hasOwnProperty,Ls={current:null},au={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)su.call(t,n)&&!au.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:gn,type:e,key:o,ref:a,props:i,_owner:Ls.current}}function Gd(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function Jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ma=/\/+/g;function Ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jd(""+e.key):t.toString(36)}function Un(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gn:case Fd:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Ji(a,0):n,Aa(i)?(r="",e!=null&&(r=e.replace(Ma,"$&/")+"/"),Un(i,t,r,"",function(c){return c})):i!=null&&(Rs(i)&&(i=Gd(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ma,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Aa(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+Ji(o,l);a+=Un(o,t,r,u,i)}else if(u=Xd(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+Ji(o,l++),a+=Un(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Sn(e,t,r){if(e==null)return e;var n=[],i=0;return Un(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Vn={transition:null},ep={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Vn,ReactCurrentOwner:Ls};function uu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Sn,forEach:function(e,t,r){Sn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Sn(e,function(){t++}),t},toArray:function(e){return Sn(e,function(t){return t})||[]},only:function(e){if(!Rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Cr;B.Fragment=$d;B.Profiler=Vd;B.PureComponent=Ps;B.StrictMode=Ud;B.Suspense=Qd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep;B.act=uu;B.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=nu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ls.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)su.call(t,u)&&!au.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:gn,type:e.type,key:i,ref:o,props:n,_owner:a}};B.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hd,_context:e},e.Consumer=e};B.createElement=lu;B.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Wd,render:e}};B.isValidElement=Rs;B.lazy=function(e){return{$$typeof:Yd,_payload:{_status:-1,_result:e},_init:Zd}};B.memo=function(e,t){return{$$typeof:Kd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Vn.transition;Vn.transition={};try{e()}finally{Vn.transition=t}};B.unstable_act=uu;B.useCallback=function(e,t){return we.current.useCallback(e,t)};B.useContext=function(e){return we.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return we.current.useDeferredValue(e)};B.useEffect=function(e,t){return we.current.useEffect(e,t)};B.useId=function(){return we.current.useId()};B.useImperativeHandle=function(e,t,r){return we.current.useImperativeHandle(e,t,r)};B.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return we.current.useMemo(e,t)};B.useReducer=function(e,t,r){return we.current.useReducer(e,t,r)};B.useRef=function(e){return we.current.useRef(e)};B.useState=function(e){return we.current.useState(e)};B.useSyncExternalStore=function(e,t,r){return we.current.useSyncExternalStore(e,t,r)};B.useTransition=function(){return we.current.useTransition()};B.version="18.3.1";tu.exports=B;var L=tu.exports;const tp=Bd(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=L,np=Symbol.for("react.element"),ip=Symbol.for("react.fragment"),op=Object.prototype.hasOwnProperty,sp=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ap={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)op.call(t,n)&&!ap.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:np,type:e,key:o,ref:a,props:i,_owner:sp.current}}Ri.Fragment=ip;Ri.jsx=cu;Ri.jsxs=cu;eu.exports=Ri;var s=eu.exports,bo={},du={exports:{}},Le={},pu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var O=_.length;_.push(R);e:for(;0<O;){var w=O-1>>>1,I=_[w];if(0<i(I,R))_[w]=R,_[O]=I,O=w;else break e}}function r(_){return _.length===0?null:_[0]}function n(_){if(_.length===0)return null;var R=_[0],O=_.pop();if(O!==R){_[0]=O;e:for(var w=0,I=_.length,P=I>>>1;w<P;){var D=2*(w+1)-1,ye=_[D],Ot=D+1,jn=_[Ot];if(0>i(ye,O))Ot<I&&0>i(jn,ye)?(_[w]=jn,_[Ot]=O,w=Ot):(_[w]=ye,_[D]=O,w=D);else if(Ot<I&&0>i(jn,O))_[w]=jn,_[Ot]=O,w=Ot;else break e}}return R}function i(_,R){var O=_.sortIndex-R.sortIndex;return O!==0?O:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],v=1,g=null,p=3,m=!1,x=!1,j=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var R=r(c);R!==null;){if(R.callback===null)n(c);else if(R.startTime<=_)n(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=r(c)}}function k(_){if(j=!1,h(_),!x)if(r(u)!==null)x=!0,ee(y);else{var R=r(c);R!==null&&Ye(k,R.startTime-_)}}function y(_,R){x=!1,j&&(j=!1,f(E),E=-1),m=!0;var O=p;try{for(h(R),g=r(u);g!==null&&(!(g.expirationTime>R)||_&&!Z());){var w=g.callback;if(typeof w=="function"){g.callback=null,p=g.priorityLevel;var I=w(g.expirationTime<=R);R=e.unstable_now(),typeof I=="function"?g.callback=I:g===r(u)&&n(u),h(R)}else n(u);g=r(u)}if(g!==null)var P=!0;else{var D=r(c);D!==null&&Ye(k,D.startTime-R),P=!1}return P}finally{g=null,p=O,m=!1}}var N=!1,C=null,E=-1,H=5,M=-1;function Z(){return!(e.unstable_now()-M<H)}function ve(){if(C!==null){var _=e.unstable_now();M=_;var R=!0;try{R=C(!0,_)}finally{R?b():(N=!1,C=null)}}else N=!1}var b;if(typeof d=="function")b=function(){d(ve)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,oe=U.port2;U.port1.onmessage=ve,b=function(){oe.postMessage(null)}}else b=function(){A(ve,0)};function ee(_){C=_,N||(N=!0,b())}function Ye(_,R){E=A(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,ee(y))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var O=p;p=R;try{return _()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=p;p=_;try{return R()}finally{p=O}},e.unstable_scheduleCallback=function(_,R,O){var w=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?w+O:w):O=w,_){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=O+I,_={id:v++,callback:R,priorityLevel:_,startTime:O,expirationTime:I,sortIndex:-1},O>w?(_.sortIndex=O,t(c,_),r(u)===null&&_===r(c)&&(j?(f(E),E=-1):j=!0,Ye(k,O-w))):(_.sortIndex=I,t(u,_),x||m||(x=!0,ee(y))),_},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(_){var R=p;return function(){var O=p;p=R;try{return _.apply(this,arguments)}finally{p=O}}}})(fu);pu.exports=fu;var lp=pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=L,Te=lp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hu=new Set,Gr={};function Yt(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa={},Da={};function dp(e){return zo.call(Da,e)?!0:zo.call(Oa,e)?!1:cp.test(e)?Da[e]=!0:(Oa[e]=!0,!1)}function pp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,r,n){if(t===null||typeof t>"u"||pp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var As=/[\-:]([a-z])/g;function Ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(As,Ms);pe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(As,Ms);pe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(As,Ms);pe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,r,n){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,r,i,n)&&(r=null),n||i===null?dp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ft=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),vu=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Zi;function Dr(e){if(Zi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||""}return`
`+Zi+e}var eo=!1;function to(e,t){if(!e||eo)return"";eo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{eo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Dr(e):""}function hp(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=to(e.type,!1),e;case 11:return e=to(e.type.render,!1),e;case 1:return e=to(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zt:return"Portal";case Po:return"Profiler";case Ds:return"StrictMode";case To:return"Suspense";case Lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case Is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return t=e.displayName||null,t!==null?t:Ro(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Ro(e(t))}catch{}}return null}function mp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(t);case 8:return t===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=yu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nn(e){e._valueTracker||(e._valueTracker=gp(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=yu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ao(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ba(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Tt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ku(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function Mo(e,t){ku(e,t);var r=Tt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Oo(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fa(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Oo(e,t,r){(t!=="number"||si(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ir=Array.isArray;function dr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Tt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $a(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Ir(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Tt(r)}}function wu(e,t){var r=Tt(t.value),n=Tt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _n,Su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_n=_n||document.createElement("div"),_n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vp=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Cu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Nu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Cu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var yp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uo=null,pr=null,fr=null;function Va(e){if(e=xn(e)){if(typeof Uo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ii(t),Uo(e.stateNode,e.type,t))}}function _u(e){pr?fr?fr.push(e):fr=[e]:pr=e}function Eu(){if(pr){var e=pr,t=fr;if(fr=pr=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function bu(e,t){return e(t)}function zu(){}var ro=!1;function Pu(e,t,r){if(ro)return e(t,r);ro=!0;try{return bu(e,t,r)}finally{ro=!1,(pr!==null||fr!==null)&&(zu(),Eu())}}function Zr(e,t){var r=e.stateNode;if(r===null)return null;var n=Ii(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var Vo=!1;if(lt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Vo=!1}function xp(e,t,r,n,i,o,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(v){this.onError(v)}}var Vr=!1,ai=null,li=!1,Ho=null,kp={onError:function(e){Vr=!0,ai=e}};function wp(e,t,r,n,i,o,a,l,u){Vr=!1,ai=null,xp.apply(kp,arguments)}function jp(e,t,r,n,i,o,a,l,u){if(wp.apply(this,arguments),Vr){if(Vr){var c=ai;Vr=!1,ai=null}else throw Error(S(198));li||(li=!0,Ho=c)}}function Xt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(Xt(e)!==e)throw Error(S(188))}function Sp(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ha(i),e;if(o===n)return Ha(i),t;o=o.sibling}throw Error(S(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Lu(e){return e=Sp(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var Au=Te.unstable_scheduleCallback,qa=Te.unstable_cancelCallback,Cp=Te.unstable_shouldYield,Np=Te.unstable_requestPaint,te=Te.unstable_now,_p=Te.unstable_getCurrentPriorityLevel,$s=Te.unstable_ImmediatePriority,Mu=Te.unstable_UserBlockingPriority,ui=Te.unstable_NormalPriority,Ep=Te.unstable_LowPriority,Ou=Te.unstable_IdlePriority,Ai=null,Ze=null;function bp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Tp,zp=Math.log,Pp=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(zp(e)/Pp|0)|0}var En=64,bn=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=Br(l):(o&=a,o!==0&&(n=Br(o)))}else a=r&~i,a!==0?n=Br(a):o!==0&&(n=Br(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-We(t),i=1<<r,n|=e[r],t&=~i;return n}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-We(o),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Lp(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=En;return En<<=1,!(En&4194240)&&(En=64),e}function no(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=r}function Ap(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-We(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Us(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-We(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var V=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bu,Vs,Fu,$u,Uu,Wo=!1,zn=[],jt=null,St=null,Ct=null,en=new Map,tn=new Map,vt=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":en.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tn.delete(t.pointerId)}}function Pr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xn(t),t!==null&&Vs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,r,n,i){switch(t){case"focusin":return jt=Pr(jt,e,t,r,n,i),!0;case"dragenter":return St=Pr(St,e,t,r,n,i),!0;case"mouseover":return Ct=Pr(Ct,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return en.set(o,Pr(en.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,tn.set(o,Pr(tn.get(o)||null,e,t,r,n,i)),!0}return!1}function Vu(e){var t=Bt(e.target);if(t!==null){var r=Xt(t);if(r!==null){if(t=r.tag,t===13){if(t=Tu(r),t!==null){e.blockedOn=t,Uu(e.priority,function(){Fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);$o=n,r.target.dispatchEvent(n),$o=null}else return t=xn(r),t!==null&&Vs(t),e.blockedOn=r,!1;t.shift()}return!0}function Qa(e,t,r){Hn(e)&&r.delete(t)}function Dp(){Wo=!1,jt!==null&&Hn(jt)&&(jt=null),St!==null&&Hn(St)&&(St=null),Ct!==null&&Hn(Ct)&&(Ct=null),en.forEach(Qa),tn.forEach(Qa)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wo||(Wo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Dp)))}function rn(e){function t(i){return Tr(i,e)}if(0<zn.length){Tr(zn[0],e);for(var r=1;r<zn.length;r++){var n=zn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(jt!==null&&Tr(jt,e),St!==null&&Tr(St,e),Ct!==null&&Tr(Ct,e),en.forEach(t),tn.forEach(t),r=0;r<vt.length;r++)n=vt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<vt.length&&(r=vt[0],r.blockedOn===null);)Vu(r),r.blockedOn===null&&vt.shift()}var hr=ft.ReactCurrentBatchConfig,di=!0;function Ip(e,t,r,n){var i=V,o=hr.transition;hr.transition=null;try{V=1,Hs(e,t,r,n)}finally{V=i,hr.transition=o}}function Bp(e,t,r,n){var i=V,o=hr.transition;hr.transition=null;try{V=4,Hs(e,t,r,n)}finally{V=i,hr.transition=o}}function Hs(e,t,r,n){if(di){var i=Qo(e,t,r,n);if(i===null)ho(e,t,n,pi,r),Wa(e,n);else if(Op(i,e,t,r,n))n.stopPropagation();else if(Wa(e,n),t&4&&-1<Mp.indexOf(e)){for(;i!==null;){var o=xn(i);if(o!==null&&Bu(o),o=Qo(e,t,r,n),o===null&&ho(e,t,n,pi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else ho(e,t,n,null,r)}}var pi=null;function Qo(e,t,r,n){if(pi=null,e=Fs(n),e=Bt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Tu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case $s:return 1;case Mu:return 4;case ui:case Ep:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var xt=null,qs=null,qn=null;function qu(){if(qn)return qn;var e,t=qs,r=t.length,n,i="value"in xt?xt.value:xt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return qn=i.slice(e,1<n?1-n:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Ka(){return!1}function Re(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pn:Ka,this.isPropagationStopped=Ka,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Re(Nr),yn=G({},Nr,{view:0,detail:0}),Fp=Re(yn),io,oo,Lr,Mi=G({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(io=e.screenX-Lr.screenX,oo=e.screenY-Lr.screenY):oo=io=0,Lr=e),io)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),Ya=Re(Mi),$p=G({},Mi,{dataTransfer:0}),Up=Re($p),Vp=G({},yn,{relatedTarget:0}),so=Re(Vp),Hp=G({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Re(Hp),Wp=G({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=Re(Wp),Kp=G({},Nr,{data:0}),Xa=Re(Kp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function Qs(){return Jp}var Zp=G({},yn,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ef=Re(Zp),tf=G({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=Re(tf),rf=G({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),nf=Re(rf),of=G({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=Re(of),af=G({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Re(af),uf=[9,13,27,32],Ks=lt&&"CompositionEvent"in window,Hr=null;lt&&"documentMode"in document&&(Hr=document.documentMode);var cf=lt&&"TextEvent"in window&&!Hr,Wu=lt&&(!Ks||Hr&&8<Hr&&11>=Hr),Ja=" ",Za=!1;function Qu(e,t){switch(e){case"keyup":return uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function df(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(Za=!0,Ja);case"textInput":return e=t.data,e===Ja&&Za?null:e;default:return null}}function pf(e,t){if(tr)return e==="compositionend"||!Ks&&Qu(e,t)?(e=qu(),qn=qs=xt=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function Yu(e,t,r,n){_u(n),t=fi(t,"onChange"),0<t.length&&(r=new Ws("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var qr=null,nn=null;function hf(e){sc(e,0)}function Oi(e){var t=ir(e);if(xu(t))return e}function mf(e,t){if(e==="change")return t}var Xu=!1;if(lt){var ao;if(lt){var lo="oninput"in document;if(!lo){var tl=document.createElement("div");tl.setAttribute("oninput","return;"),lo=typeof tl.oninput=="function"}ao=lo}else ao=!1;Xu=ao&&(!document.documentMode||9<document.documentMode)}function rl(){qr&&(qr.detachEvent("onpropertychange",Gu),nn=qr=null)}function Gu(e){if(e.propertyName==="value"&&Oi(nn)){var t=[];Yu(t,nn,e,Fs(e)),Pu(hf,t)}}function gf(e,t,r){e==="focusin"?(rl(),qr=t,nn=r,qr.attachEvent("onpropertychange",Gu)):e==="focusout"&&rl()}function vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(nn)}function yf(e,t){if(e==="click")return Oi(t)}function xf(e,t){if(e==="input"||e==="change")return Oi(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:kf;function on(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!zo.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function nl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,t){var r=nl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nl(r)}}function Ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=si();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=si(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=Zu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ju(r.ownerDocument.documentElement,r)){if(n!==null&&Ys(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=il(r,o);var a=il(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=lt&&"documentMode"in document&&11>=document.documentMode,rr=null,Ko=null,Wr=null,Yo=!1;function ol(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yo||rr==null||rr!==si(n)||(n=rr,"selectionStart"in n&&Ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wr&&on(Wr,n)||(Wr=n,n=fi(Ko,"onSelect"),0<n.length&&(t=new Ws("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rr)))}function Tn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var nr={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},uo={},ec={};lt&&(ec=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Di(e){if(uo[e])return uo[e];if(!nr[e])return e;var t=nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ec)return uo[e]=t[r];return e}var tc=Di("animationend"),rc=Di("animationiteration"),nc=Di("animationstart"),ic=Di("transitionend"),oc=new Map,sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){oc.set(e,t),Yt(t,[e])}for(var co=0;co<sl.length;co++){var po=sl[co],Sf=po.toLowerCase(),Cf=po[0].toUpperCase()+po.slice(1);Rt(Sf,"on"+Cf)}Rt(tc,"onAnimationEnd");Rt(rc,"onAnimationIteration");Rt(nc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(ic,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function al(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,jp(n,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;al(i,l,c),o=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;al(i,l,c),o=u}}}if(li)throw e=Ho,li=!1,Ho=null,e}function W(e,t){var r=t[es];r===void 0&&(r=t[es]=new Set);var n=e+"__bubble";r.has(n)||(ac(t,e,2,!1),r.add(n))}function fo(e,t,r){var n=0;t&&(n|=4),ac(r,e,n,t)}var Ln="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[Ln]){e[Ln]=!0,hu.forEach(function(r){r!=="selectionchange"&&(Nf.has(r)||fo(r,!1,e),fo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ln]||(t[Ln]=!0,fo("selectionchange",!1,t))}}function ac(e,t,r,n){switch(Hu(t)){case 1:var i=Ip;break;case 4:i=Bp;break;default:i=Hs}r=i.bind(null,t,r,e),i=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ho(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Bt(l),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}l=l.parentNode}}n=n.return}Pu(function(){var c=o,v=Fs(r),g=[];e:{var p=oc.get(e);if(p!==void 0){var m=Ws,x=e;switch(e){case"keypress":if(Wn(r)===0)break e;case"keydown":case"keyup":m=ef;break;case"focusin":x="focus",m=so;break;case"focusout":x="blur",m=so;break;case"beforeblur":case"afterblur":m=so;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nf;break;case tc:case rc:case nc:m=qp;break;case ic:m=sf;break;case"scroll":m=Fp;break;case"wheel":m=lf;break;case"copy":case"cut":case"paste":m=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ga}var j=(t&4)!==0,A=!j&&e==="scroll",f=j?p!==null?p+"Capture":null:p;j=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=Zr(d,f),k!=null&&j.push(an(d,k,h)))),A)break;d=d.return}0<j.length&&(p=new m(p,x,null,r,v),g.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&r!==$o&&(x=r.relatedTarget||r.fromElement)&&(Bt(x)||x[ut]))break e;if((m||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=r.relatedTarget||r.toElement,m=c,x=x?Bt(x):null,x!==null&&(A=Xt(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(j=Ya,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ga,k="onPointerLeave",f="onPointerEnter",d="pointer"),A=m==null?p:ir(m),h=x==null?p:ir(x),p=new j(k,d+"leave",m,r,v),p.target=A,p.relatedTarget=h,k=null,Bt(v)===c&&(j=new j(f,d+"enter",x,r,v),j.target=h,j.relatedTarget=A,k=j),A=k,m&&x)t:{for(j=m,f=x,d=0,h=j;h;h=Gt(h))d++;for(h=0,k=f;k;k=Gt(k))h++;for(;0<d-h;)j=Gt(j),d--;for(;0<h-d;)f=Gt(f),h--;for(;d--;){if(j===f||f!==null&&j===f.alternate)break t;j=Gt(j),f=Gt(f)}j=null}else j=null;m!==null&&ll(g,p,m,j,!1),x!==null&&A!==null&&ll(g,A,x,j,!0)}}e:{if(p=c?ir(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var y=mf;else if(el(p))if(Xu)y=xf;else{y=vf;var N=gf}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(y=yf);if(y&&(y=y(e,c))){Yu(g,y,r,v);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Oo(p,"number",p.value)}switch(N=c?ir(c):window,e){case"focusin":(el(N)||N.contentEditable==="true")&&(rr=N,Ko=c,Wr=null);break;case"focusout":Wr=Ko=rr=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,ol(g,r,v);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":ol(g,r,v)}var C;if(Ks)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else tr?Qu(e,r)&&(E="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Wu&&r.locale!=="ko"&&(tr||E!=="onCompositionStart"?E==="onCompositionEnd"&&tr&&(C=qu()):(xt=v,qs="value"in xt?xt.value:xt.textContent,tr=!0)),N=fi(c,E),0<N.length&&(E=new Xa(E,e,null,r,v),g.push({event:E,listeners:N}),C?E.data=C:(C=Ku(r),C!==null&&(E.data=C)))),(C=cf?df(e,r):pf(e,r))&&(c=fi(c,"onBeforeInput"),0<c.length&&(v=new Xa("onBeforeInput","beforeinput",null,r,v),g.push({event:v,listeners:c}),v.data=C))}sc(g,t)})}function an(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,r),o!=null&&n.unshift(an(e,o,i)),o=Zr(e,t),o!=null&&n.push(an(e,o,i))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ll(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=Zr(r,o),u!=null&&a.unshift(an(r,u,l))):i||(u=Zr(r,o),u!=null&&a.push(an(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var _f=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function ul(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Ef,"")}function Rn(e,t,r){if(t=ul(t),ul(e)!==t&&r)throw Error(S(425))}function hi(){}var Xo=null,Go=null;function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(e){return cl.resolve(null).then(e).catch(Pf)}:Zo;function Pf(e){setTimeout(function(){throw e})}function mo(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),rn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);rn(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Je="__reactFiber$"+_r,ln="__reactProps$"+_r,ut="__reactContainer$"+_r,es="__reactEvents$"+_r,Tf="__reactListeners$"+_r,Lf="__reactHandles$"+_r;function Bt(e){var t=e[Je];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ut]||r[Je]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=dl(e);e!==null;){if(r=e[Je])return r;e=dl(e)}return t}e=r,r=e.parentNode}return null}function xn(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ii(e){return e[ln]||null}var ts=[],or=-1;function At(e){return{current:e}}function Q(e){0>or||(e.current=ts[or],ts[or]=null,or--)}function q(e,t){or++,ts[or]=e.current,e.current=t}var Lt={},ge=At(Lt),Ne=At(!1),Ht=Lt;function yr(e,t){var r=e.type.contextTypes;if(!r)return Lt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function mi(){Q(Ne),Q(ge)}function pl(e,t,r){if(ge.current!==Lt)throw Error(S(168));q(ge,t),q(Ne,r)}function lc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(S(108,mp(e)||"Unknown",i));return G({},r,n)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=ge.current,q(ge,e),q(Ne,Ne.current),!0}function fl(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=lc(e,t,Ht),n.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(ge),q(ge,e)):Q(Ne),q(Ne,r)}var it=null,Bi=!1,go=!1;function uc(e){it===null?it=[e]:it.push(e)}function Rf(e){Bi=!0,uc(e)}function Mt(){if(!go&&it!==null){go=!0;var e=0,t=V;try{var r=it;for(V=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}it=null,Bi=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Au($s,Mt),i}finally{V=t,go=!1}}return null}var sr=[],ar=0,vi=null,yi=0,Ae=[],Me=0,qt=null,ot=1,st="";function Dt(e,t){sr[ar++]=yi,sr[ar++]=vi,vi=e,yi=t}function cc(e,t,r){Ae[Me++]=ot,Ae[Me++]=st,Ae[Me++]=qt,qt=e;var n=ot;e=st;var i=32-We(n)-1;n&=~(1<<i),r+=1;var o=32-We(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,ot=1<<32-We(t)+i|r<<i|n,st=o+e}else ot=1<<o|r<<i|n,st=e}function Xs(e){e.return!==null&&(Dt(e,1),cc(e,1,0))}function Gs(e){for(;e===vi;)vi=sr[--ar],sr[ar]=null,yi=sr[--ar],sr[ar]=null;for(;e===qt;)qt=Ae[--Me],Ae[Me]=null,st=Ae[--Me],Ae[Me]=null,ot=Ae[--Me],Ae[Me]=null}var Pe=null,ze=null,K=!1,qe=null;function dc(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function hl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=qt!==null?{id:ot,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pe=e,ze=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ns(e){if(K){var t=ze;if(t){var r=t;if(!hl(e,t)){if(rs(e))throw Error(S(418));t=Nt(r.nextSibling);var n=Pe;t&&hl(e,t)?dc(n,r):(e.flags=e.flags&-4097|2,K=!1,Pe=e)}}else{if(rs(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function An(e){if(e!==Pe)return!1;if(!K)return ml(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jo(e.type,e.memoizedProps)),t&&(t=ze)){if(rs(e))throw pc(),Error(S(418));for(;t;)dc(e,t),t=Nt(t.nextSibling)}if(ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?Nt(e.stateNode.nextSibling):null;return!0}function pc(){for(var e=ze;e;)e=Nt(e.nextSibling)}function xr(){ze=Pe=null,K=!1}function Js(e){qe===null?qe=[e]:qe.push(e)}var Af=ft.ReactCurrentBatchConfig;function Rr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Mn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gl(e){var t=e._init;return t(e._payload)}function fc(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,k){return d===null||d.tag!==6?(d=So(h,f.mode,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,k){var y=h.type;return y===er?v(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===mt&&gl(y)===d.type)?(k=i(d,h.props),k.ref=Rr(f,d,h),k.return=f,k):(k=Zn(h.type,h.key,h.props,null,f.mode,k),k.ref=Rr(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Co(h,f.mode,k),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function v(f,d,h,k,y){return d===null||d.tag!==7?(d=Vt(h,f.mode,k,y),d.return=f,d):(d=i(d,h),d.return=f,d)}function g(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=So(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Cn:return h=Zn(d.type,d.key,d.props,null,f.mode,h),h.ref=Rr(f,null,d),h.return=f,h;case Zt:return d=Co(d,f.mode,h),d.return=f,d;case mt:var k=d._init;return g(f,k(d._payload),h)}if(Ir(d)||br(d))return d=Vt(d,f.mode,h,null),d.return=f,d;Mn(f,d)}return null}function p(f,d,h,k){var y=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return y!==null?null:l(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Cn:return h.key===y?u(f,d,h,k):null;case Zt:return h.key===y?c(f,d,h,k):null;case mt:return y=h._init,p(f,d,y(h._payload),k)}if(Ir(h)||br(h))return y!==null?null:v(f,d,h,k,null);Mn(f,h)}return null}function m(f,d,h,k,y){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,l(d,f,""+k,y);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Cn:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,y);case Zt:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,y);case mt:var N=k._init;return m(f,d,h,N(k._payload),y)}if(Ir(k)||br(k))return f=f.get(h)||null,v(d,f,k,y,null);Mn(d,k)}return null}function x(f,d,h,k){for(var y=null,N=null,C=d,E=d=0,H=null;C!==null&&E<h.length;E++){C.index>E?(H=C,C=null):H=C.sibling;var M=p(f,C,h[E],k);if(M===null){C===null&&(C=H);break}e&&C&&M.alternate===null&&t(f,C),d=o(M,d,E),N===null?y=M:N.sibling=M,N=M,C=H}if(E===h.length)return r(f,C),K&&Dt(f,E),y;if(C===null){for(;E<h.length;E++)C=g(f,h[E],k),C!==null&&(d=o(C,d,E),N===null?y=C:N.sibling=C,N=C);return K&&Dt(f,E),y}for(C=n(f,C);E<h.length;E++)H=m(C,f,E,h[E],k),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?E:H.key),d=o(H,d,E),N===null?y=H:N.sibling=H,N=H);return e&&C.forEach(function(Z){return t(f,Z)}),K&&Dt(f,E),y}function j(f,d,h,k){var y=br(h);if(typeof y!="function")throw Error(S(150));if(h=y.call(h),h==null)throw Error(S(151));for(var N=y=null,C=d,E=d=0,H=null,M=h.next();C!==null&&!M.done;E++,M=h.next()){C.index>E?(H=C,C=null):H=C.sibling;var Z=p(f,C,M.value,k);if(Z===null){C===null&&(C=H);break}e&&C&&Z.alternate===null&&t(f,C),d=o(Z,d,E),N===null?y=Z:N.sibling=Z,N=Z,C=H}if(M.done)return r(f,C),K&&Dt(f,E),y;if(C===null){for(;!M.done;E++,M=h.next())M=g(f,M.value,k),M!==null&&(d=o(M,d,E),N===null?y=M:N.sibling=M,N=M);return K&&Dt(f,E),y}for(C=n(f,C);!M.done;E++,M=h.next())M=m(C,f,E,M.value,k),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),d=o(M,d,E),N===null?y=M:N.sibling=M,N=M);return e&&C.forEach(function(ve){return t(f,ve)}),K&&Dt(f,E),y}function A(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===er&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Cn:e:{for(var y=h.key,N=d;N!==null;){if(N.key===y){if(y=h.type,y===er){if(N.tag===7){r(f,N.sibling),d=i(N,h.props.children),d.return=f,f=d;break e}}else if(N.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===mt&&gl(y)===N.type){r(f,N.sibling),d=i(N,h.props),d.ref=Rr(f,N,h),d.return=f,f=d;break e}r(f,N);break}else t(f,N);N=N.sibling}h.type===er?(d=Vt(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=Zn(h.type,h.key,h.props,null,f.mode,k),k.ref=Rr(f,d,h),k.return=f,f=k)}return a(f);case Zt:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Co(h,f.mode,k),d.return=f,f=d}return a(f);case mt:return N=h._init,A(f,d,N(h._payload),k)}if(Ir(h))return x(f,d,h,k);if(br(h))return j(f,d,h,k);Mn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(f,d.sibling),d=i(d,h),d.return=f,f=d):(r(f,d),d=So(h,f.mode,k),d.return=f,f=d),a(f)):r(f,d)}return A}var kr=fc(!0),hc=fc(!1),xi=At(null),ki=null,lr=null,Zs=null;function ea(){Zs=lr=ki=null}function ta(e){var t=xi.current;Q(xi),e._currentValue=t}function is(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function mr(e,t){ki=e,Zs=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(ki===null)throw Error(S(308));lr=e,ki.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ft=null;function ra(e){Ft===null?Ft=[e]:Ft.push(e)}function mc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ra(t)):(r.next=i.next,i.next=r),t.interleaved=r,ct(e,n)}function ct(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gt=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,ct(e,r)}return i=n.interleaved,i===null?(t.next=t,ra(n)):(t.next=i.next,i.next=t),n.interleaved=t,ct(e,r)}function Qn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Us(e,r)}}function vl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function wi(e,t,r,n){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==a&&(l===null?v.firstBaseUpdate=c:l.next=c,v.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;a=0,v=c=u=null,l=o;do{var p=l.lane,m=l.eventTime;if((n&p)===p){v!==null&&(v=v.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,j=l;switch(p=t,m=r,j.tag){case 1:if(x=j.payload,typeof x=="function"){g=x.call(m,g,p);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,p=typeof x=="function"?x.call(m,g,p):x,p==null)break e;g=G({},g,p);break e;case 2:gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(c=v=m,u=g):v=v.next=m,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(v===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qt|=a,e.lanes=a,e.memoizedState=g}}function yl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(S(191,i));i.call(n)}}}var kn={},et=At(kn),un=At(kn),cn=At(kn);function $t(e){if(e===kn)throw Error(S(174));return e}function ia(e,t){switch(q(cn,t),q(un,e),q(et,kn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}Q(et),q(et,t)}function wr(){Q(et),Q(un),Q(cn)}function vc(e){$t(cn.current);var t=$t(et.current),r=Io(t,e.type);t!==r&&(q(un,e),q(et,r))}function oa(e){un.current===e&&(Q(et),Q(un))}var Y=At(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function sa(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var Kn=ft.ReactCurrentDispatcher,yo=ft.ReactCurrentBatchConfig,Wt=0,X=null,se=null,le=null,Si=!1,Qr=!1,dn=0,Mf=0;function fe(){throw Error(S(321))}function aa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ke(e[r],t[r]))return!1;return!0}function la(e,t,r,n,i,o){if(Wt=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kn.current=e===null||e.memoizedState===null?Bf:Ff,e=r(n,i),Qr){o=0;do{if(Qr=!1,dn=0,25<=o)throw Error(S(301));o+=1,le=se=null,t.updateQueue=null,Kn.current=$f,e=r(n,i)}while(Qr)}if(Kn.current=Ci,t=se!==null&&se.next!==null,Wt=0,le=se=X=null,Si=!1,t)throw Error(S(300));return e}function ua(){var e=dn!==0;return dn=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Fe(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(S(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function pn(e,t){return typeof t=="function"?t(e):t}function xo(e){var t=Fe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=se,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,u=null,c=o;do{var v=c.lane;if((Wt&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var g={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=g,a=n):u=u.next=g,X.lanes|=v,Qt|=v}c=c.next}while(c!==null&&c!==o);u===null?a=n:u.next=l,Ke(n,t.memoizedState)||(Ce=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Qt|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ko(e){var t=Fe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ke(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function yc(){}function xc(e,t){var r=X,n=Fe(),i=t(),o=!Ke(n.memoizedState,i);if(o&&(n.memoizedState=i,Ce=!0),n=n.queue,ca(jc.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,fn(9,wc.bind(null,r,n,i,t),void 0,null),ue===null)throw Error(S(349));Wt&30||kc(r,t,i)}return i}function kc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wc(e,t,r,n){t.value=r,t.getSnapshot=n,Sc(t)&&Cc(e)}function jc(e,t,r){return r(function(){Sc(t)&&Cc(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ke(e,r)}catch{return!0}}function Cc(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function xl(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,X,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Nc(){return Fe().memoizedState}function Yn(e,t,r,n){var i=Ge();X.flags|=e,i.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function Fi(e,t,r,n){var i=Fe();n=n===void 0?null:n;var o=void 0;if(se!==null){var a=se.memoizedState;if(o=a.destroy,n!==null&&aa(n,a.deps)){i.memoizedState=fn(t,r,o,n);return}}X.flags|=e,i.memoizedState=fn(1|t,r,o,n)}function kl(e,t){return Yn(8390656,8,e,t)}function ca(e,t){return Fi(2048,8,e,t)}function _c(e,t){return Fi(4,2,e,t)}function Ec(e,t){return Fi(4,4,e,t)}function bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zc(e,t,r){return r=r!=null?r.concat([e]):null,Fi(4,4,bc.bind(null,t,e),r)}function da(){}function Pc(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&aa(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Tc(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&aa(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Lc(e,t,r){return Wt&21?(Ke(r,t)||(r=Du(),X.lanes|=r,Qt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=r)}function Of(e,t){var r=V;V=r!==0&&4>r?r:4,e(!0);var n=yo.transition;yo.transition={};try{e(!1),t()}finally{V=r,yo.transition=n}}function Rc(){return Fe().memoizedState}function Df(e,t,r){var n=bt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ac(e))Mc(t,r);else if(r=mc(e,t,r,n),r!==null){var i=ke();Qe(r,e,n,i),Oc(r,t,n)}}function If(e,t,r){var n=bt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Mc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,Ke(l,a)){var u=t.interleaved;u===null?(i.next=i,ra(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=mc(e,t,i,n),r!==null&&(i=ke(),Qe(r,e,n,i),Oc(r,t,n))}}function Ac(e){var t=e.alternate;return e===X||t!==null&&t===X}function Mc(e,t){Qr=Si=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Oc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Us(e,r)}}var Ci={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Bf={readContext:Be,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:kl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Yn(4194308,4,bc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Yn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yn(4,2,e,t)},useMemo:function(e,t){var r=Ge();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ge();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Df.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:xl,useDebugValue:da,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=xl(!1),t=e[0];return e=Of.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,i=Ge();if(K){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),ue===null)throw Error(S(349));Wt&30||kc(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,kl(jc.bind(null,n,o,e),[e]),n.flags|=2048,fn(9,wc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ge(),t=ue.identifierPrefix;if(K){var r=st,n=ot;r=(n&~(1<<32-We(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Mf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:Be,useCallback:Pc,useContext:Be,useEffect:ca,useImperativeHandle:zc,useInsertionEffect:_c,useLayoutEffect:Ec,useMemo:Tc,useReducer:xo,useRef:Nc,useState:function(){return xo(pn)},useDebugValue:da,useDeferredValue:function(e){var t=Fe();return Lc(t,se.memoizedState,e)},useTransition:function(){var e=xo(pn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:xc,useId:Rc,unstable_isNewReconciler:!1},$f={readContext:Be,useCallback:Pc,useContext:Be,useEffect:ca,useImperativeHandle:zc,useInsertionEffect:_c,useLayoutEffect:Ec,useMemo:Tc,useReducer:ko,useRef:Nc,useState:function(){return ko(pn)},useDebugValue:da,useDeferredValue:function(e){var t=Fe();return se===null?t.memoizedState=e:Lc(t,se.memoizedState,e)},useTransition:function(){var e=ko(pn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:xc,useId:Rc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function os(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $i={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ke(),i=bt(e),o=at(n,i);o.payload=t,r!=null&&(o.callback=r),t=_t(e,o,i),t!==null&&(Qe(t,e,i,n),Qn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ke(),i=bt(e),o=at(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=_t(e,o,i),t!==null&&(Qe(t,e,i,n),Qn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ke(),n=bt(e),i=at(r,n);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,n),t!==null&&(Qe(t,e,n,r),Qn(t,e,n))}};function wl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!on(r,n)||!on(i,o):!0}function Dc(e,t,r){var n=!1,i=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=_e(t)?Ht:ge.current,n=t.contextTypes,o=(n=n!=null)?yr(e,i):Lt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$i,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&$i.enqueueReplaceState(t,t.state,null)}function ss(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},na(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=_e(t)?Ht:ge.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(os(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$i.enqueueReplaceState(i,i.state,null),wi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var r="",n=t;do r+=hp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,r){r=at(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){_i||(_i=!0,vs=n),as(e,t)},r}function Bc(e,t,r){r=at(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){as(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){as(e,t),typeof n!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Sl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Uf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=rh.bind(null,e,t,r),t.then(e,e))}function Cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=at(-1,1),t.tag=2,_t(r,t,1))),r.lanes|=1),e)}var Vf=ft.ReactCurrentOwner,Ce=!1;function xe(e,t,r,n){t.child=e===null?hc(t,null,r,n):kr(t,e.child,r,n)}function _l(e,t,r,n,i){r=r.render;var o=t.ref;return mr(t,i),n=la(e,t,r,n,o,i),r=ua(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&r&&Xs(t),t.flags|=1,xe(e,t,n,i),t.child)}function El(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!xa(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Fc(e,t,o,n,i)):(e=Zn(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:on,r(a,n)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=zt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Fc(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(on(o,n)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,dt(e,t,i)}return ls(e,t,r,n,i)}function $c(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(cr,be),be|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(cr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,q(cr,be),be|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,q(cr,be),be|=n;return xe(e,t,i,r),t.child}function Uc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,r,n,i){var o=_e(r)?Ht:ge.current;return o=yr(t,o),mr(t,i),r=la(e,t,r,n,o,i),n=ua(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&n&&Xs(t),t.flags|=1,xe(e,t,r,i),t.child)}function bl(e,t,r,n,i){if(_e(r)){var o=!0;gi(t)}else o=!1;if(mr(t,i),t.stateNode===null)Xn(e,t),Dc(t,r,n),ss(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=_e(r)?Ht:ge.current,c=yr(t,c));var v=r.getDerivedStateFromProps,g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==c)&&jl(t,a,n,c),gt=!1;var p=t.memoizedState;a.state=p,wi(t,n,a,i),u=t.memoizedState,l!==n||p!==u||Ne.current||gt?(typeof v=="function"&&(os(t,r,v,n),u=t.memoizedState),(l=gt||wl(t,r,l,n,p,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,gc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ue(t.type,l),a.props=c,g=t.pendingProps,p=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Be(u):(u=_e(r)?Ht:ge.current,u=yr(t,u));var m=r.getDerivedStateFromProps;(v=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||p!==u)&&jl(t,a,n,u),gt=!1,p=t.memoizedState,a.state=p,wi(t,n,a,i);var x=t.memoizedState;l!==g||p!==x||Ne.current||gt?(typeof m=="function"&&(os(t,r,m,n),x=t.memoizedState),(c=gt||wl(t,r,c,n,p,x,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return us(e,t,r,n,o,i)}function us(e,t,r,n,i,o){Uc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&fl(t,r,!1),dt(e,t,o);n=t.stateNode,Vf.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,l,o)):xe(e,t,l,o),t.memoizedState=n.state,i&&fl(t,r,!0),t.child}function Vc(e){var t=e.stateNode;t.pendingContext?pl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pl(e,t.context,!1),ia(e,t.containerInfo)}function zl(e,t,r,n,i){return xr(),Js(i),t.flags|=256,xe(e,t,r,n),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,r){var n=t.pendingProps,i=Y.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(Y,i&1),e===null)return ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Hi(a,n,0,null),e=Vt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ds(r),t.memoizedState=cs,e):pa(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hf(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=zt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zt(l,o):(o=Vt(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?ds(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=cs,n}return o=e.child,e=o.sibling,n=zt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function pa(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function On(e,t,r,n){return n!==null&&Js(n),kr(t,e.child,null,r),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=wo(Error(S(422))),On(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Hi({mode:"visible",children:n.children},i,0,null),o=Vt(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&kr(t,e.child,null,a),t.child.memoizedState=ds(a),t.memoizedState=cs,o);if(!(t.mode&1))return On(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(S(419)),n=wo(o,n,void 0),On(e,t,a,n)}if(l=(a&e.childLanes)!==0,Ce||l){if(n=ue,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Qe(n,e,i,-1))}return ya(),n=wo(Error(S(421))),On(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Pe=t,K=!0,qe=null,e!==null&&(Ae[Me++]=ot,Ae[Me++]=st,Ae[Me++]=qt,ot=e.id,st=e.overflow,qt=t),t=pa(t,n.children),t.flags|=4096,t)}function Pl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),is(e.return,t,r)}function jo(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function qc(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(xe(e,t,n.children,r),n=Y.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,r,t);else if(e.tag===19)Pl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(q(Y,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ji(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),jo(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}jo(t,!0,r,null,o);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=zt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qf(e,t,r){switch(t.tag){case 3:Vc(t),xr();break;case 5:vc(t);break;case 1:_e(t.type)&&gi(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;q(xi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(q(Y,Y.current&1),t.flags|=128,null):r&t.child.childLanes?Hc(e,t,r):(q(Y,Y.current&1),e=dt(e,t,r),e!==null?e.sibling:null);q(Y,Y.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return qc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(Y,Y.current),n)break;return null;case 22:case 23:return t.lanes=0,$c(e,t,r)}return dt(e,t,r)}var Wc,ps,Qc,Kc;Wc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ps=function(){};Qc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,$t(et.current);var o=null;switch(r){case"input":i=Ao(e,i),n=Ao(e,n),o=[];break;case"select":i=G({},i,{value:void 0}),n=G({},n,{value:void 0}),o=[];break;case"textarea":i=Do(e,i),n=Do(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=hi)}Bo(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Kc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ar(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Wf(e,t,r){var n=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&mi(),he(t),null;case 3:return n=t.stateNode,wr(),Q(Ne),Q(ge),sa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(An(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ks(qe),qe=null))),ps(e,t),he(t),null;case 5:oa(t);var i=$t(cn.current);if(r=t.type,e!==null&&t.stateNode!=null)Qc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=$t(et.current),An(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Je]=t,n[ln]=o,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(i=0;i<Fr.length;i++)W(Fr[i],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":Ba(n,o),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},W("invalid",n);break;case"textarea":$a(n,o),W("invalid",n)}Bo(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Rn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Rn(n.textContent,l,e),i=["children",""+l]):Gr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&W("scroll",n)}switch(r){case"input":Nn(n),Fa(n,o,!0);break;case"textarea":Nn(n),Ua(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=hi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Je]=t,e[ln]=n,Wc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fo(r,n),r){case"dialog":W("cancel",e),W("close",e),i=n;break;case"iframe":case"object":case"embed":W("load",e),i=n;break;case"video":case"audio":for(i=0;i<Fr.length;i++)W(Fr[i],e);i=n;break;case"source":W("error",e),i=n;break;case"img":case"image":case"link":W("error",e),W("load",e),i=n;break;case"details":W("toggle",e),i=n;break;case"input":Ba(e,n),i=Ao(e,n),W("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=G({},n,{value:void 0}),W("invalid",e);break;case"textarea":$a(e,n),i=Do(e,n),W("invalid",e);break;default:i=n}Bo(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Nu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Su(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Jr(e,u):typeof u=="number"&&Jr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&Os(e,o,u,a))}switch(r){case"input":Nn(e),Fa(e,n,!1);break;case"textarea":Nn(e),Ua(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Tt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?dr(e,!!n.multiple,o,!1):n.defaultValue!=null&&dr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Kc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=$t(cn.current),$t(et.current),An(t)){if(n=t.stateNode,r=t.memoizedProps,n[Je]=t,(o=n.nodeValue!==r)&&(e=Pe,e!==null))switch(e.tag){case 3:Rn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Je]=t,t.stateNode=n}return he(t),null;case 13:if(Q(Y),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))pc(),xr(),t.flags|=98560,o=!1;else if(o=An(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else qe!==null&&(ks(qe),qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):ya())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return wr(),ps(e,t),e===null&&sn(t.stateNode.containerInfo),he(t),null;case 10:return ta(t.type._context),he(t),null;case 17:return _e(t.type)&&mi(),he(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return he(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)Ar(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ji(e),a!==null){for(t.flags|=128,Ar(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return q(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Sr&&(t.flags|=128,n=!0,Ar(o,!1),t.lanes=4194304)}else{if(!n)if(e=ji(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!K)return he(t),null}else 2*te()-o.renderingStartTime>Sr&&r!==1073741824&&(t.flags|=128,n=!0,Ar(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,r=Y.current,q(Y,n?r&1|2:r&1),t):(he(t),null);case 22:case 23:return va(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?be&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Qf(e,t){switch(Gs(t),t.tag){case 1:return _e(t.type)&&mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Q(Ne),Q(ge),sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return wr(),null;case 10:return ta(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var Dn=!1,me=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,z=null;function ur(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){J(e,t,n)}else r.current=null}function fs(e,t,r){try{r()}catch(n){J(e,t,n)}}var Tl=!1;function Yf(e,t){if(Xo=di,e=Zu(),Ys(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,v=0,g=e,p=null;t:for(;;){for(var m;g!==r||i!==0&&g.nodeType!==3||(l=a+i),g!==o||n!==0&&g.nodeType!==3||(u=a+n),g.nodeType===3&&(a+=g.nodeValue.length),(m=g.firstChild)!==null;)p=g,g=m;for(;;){if(g===e)break t;if(p===r&&++c===i&&(l=a),p===o&&++v===n&&(u=a),(m=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=m}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Go={focusedElem:e,selectionRange:r},di=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,A=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ue(t.type,j),A);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){J(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return x=Tl,Tl=!1,x}function Kr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fs(t,r,o)}i=i.next}while(i!==n)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Yc(e){var t=e.alternate;t!==null&&(e.alternate=null,Yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[ln],delete t[es],delete t[Tf],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=hi));else if(n!==4&&(e=e.child,e!==null))for(ms(e,t,r),e=e.sibling;e!==null;)ms(e,t,r),e=e.sibling}function gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gs(e,t,r),e=e.sibling;e!==null;)gs(e,t,r),e=e.sibling}var ce=null,Ve=!1;function ht(e,t,r){for(r=r.child;r!==null;)Gc(e,t,r),r=r.sibling}function Gc(e,t,r){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Ai,r)}catch{}switch(r.tag){case 5:me||ur(r,t);case 6:var n=ce,i=Ve;ce=null,ht(e,t,r),ce=n,Ve=i,ce!==null&&(Ve?(e=ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ce.removeChild(r.stateNode));break;case 18:ce!==null&&(Ve?(e=ce,r=r.stateNode,e.nodeType===8?mo(e.parentNode,r):e.nodeType===1&&mo(e,r),rn(e)):mo(ce,r.stateNode));break;case 4:n=ce,i=Ve,ce=r.stateNode.containerInfo,Ve=!0,ht(e,t,r),ce=n,Ve=i;break;case 0:case 11:case 14:case 15:if(!me&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fs(r,t,a),i=i.next}while(i!==n)}ht(e,t,r);break;case 1:if(!me&&(ur(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){J(r,t,l)}ht(e,t,r);break;case 21:ht(e,t,r);break;case 22:r.mode&1?(me=(n=me)||r.memoizedState!==null,ht(e,t,r),me=n):ht(e,t,r);break;default:ht(e,t,r)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Kf),t.forEach(function(n){var i=ih.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function $e(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ve=!1;break e;case 3:ce=l.stateNode.containerInfo,Ve=!0;break e;case 4:ce=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ce===null)throw Error(S(160));Gc(o,a,i),ce=null,Ve=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jc(t,e),t=t.sibling}function Jc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Xe(e),n&4){try{Kr(3,e,e.return),Ui(3,e)}catch(j){J(e,e.return,j)}try{Kr(5,e,e.return)}catch(j){J(e,e.return,j)}}break;case 1:$e(t,e),Xe(e),n&512&&r!==null&&ur(r,r.return);break;case 5:if($e(t,e),Xe(e),n&512&&r!==null&&ur(r,r.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(j){J(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ku(i,o),Fo(l,a);var c=Fo(l,o);for(a=0;a<u.length;a+=2){var v=u[a],g=u[a+1];v==="style"?Nu(i,g):v==="dangerouslySetInnerHTML"?Su(i,g):v==="children"?Jr(i,g):Os(i,v,g,c)}switch(l){case"input":Mo(i,o);break;case"textarea":wu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?dr(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ln]=o}catch(j){J(e,e.return,j)}}break;case 6:if($e(t,e),Xe(e),n&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){J(e,e.return,j)}}break;case 3:if($e(t,e),Xe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{rn(t.containerInfo)}catch(j){J(e,e.return,j)}break;case 4:$e(t,e),Xe(e);break;case 13:$e(t,e),Xe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=te())),n&4&&Rl(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(me=(c=me)||v,$e(t,e),me=c):$e(t,e),Xe(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(z=e,v=e.child;v!==null;){for(g=z=v;z!==null;){switch(p=z,m=p.child,p.tag){case 0:case 11:case 14:case 15:Kr(4,p,p.return);break;case 1:ur(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){J(n,r,j)}}break;case 5:ur(p,p.return);break;case 22:if(p.memoizedState!==null){Ml(g);continue}}m!==null?(m.return=p,z=m):Ml(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Cu("display",a))}catch(j){J(e,e.return,j)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(j){J(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:$e(t,e),Xe(e),n&4&&Rl(e);break;case 21:break;default:$e(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xc(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Jr(i,""),n.flags&=-33);var o=Ll(e);gs(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Ll(e);ms(e,l,a);break;default:throw Error(S(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,r){z=e,Zc(e)}function Zc(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Dn;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||me;l=Dn;var c=me;if(Dn=a,(me=u)&&!c)for(z=i;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?Ol(i):u!==null?(u.return=a,z=u):Ol(i);for(;o!==null;)z=o,Zc(o),o=o.sibling;z=i,Dn=l,me=c}Al(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Al(e)}}function Al(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ui(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!me)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ue(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&rn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&hs(t)}catch(p){J(t,t.return,p)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function Ml(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function Ol(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ui(4,t)}catch(u){J(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){J(t,i,u)}}var o=t.return;try{hs(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{hs(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Gf=Math.ceil,Ni=ft.ReactCurrentDispatcher,fa=ft.ReactCurrentOwner,Ie=ft.ReactCurrentBatchConfig,$=0,ue=null,ne=null,de=0,be=0,cr=At(0),ae=0,hn=null,Qt=0,Vi=0,ha=0,Yr=null,Se=null,ma=0,Sr=1/0,nt=null,_i=!1,vs=null,Et=null,In=!1,kt=null,Ei=0,Xr=0,ys=null,Gn=-1,Jn=0;function ke(){return $&6?te():Gn!==-1?Gn:Gn=te()}function bt(e){return e.mode&1?$&2&&de!==0?de&-de:Af.transition!==null?(Jn===0&&(Jn=Du()),Jn):(e=V,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function Qe(e,t,r,n){if(50<Xr)throw Xr=0,ys=null,Error(S(185));vn(e,r,n),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(Vi|=r),ae===4&&yt(e,de)),Ee(e,n),r===1&&$===0&&!(t.mode&1)&&(Sr=te()+500,Bi&&Mt()))}function Ee(e,t){var r=e.callbackNode;Rp(e,t);var n=ci(e,e===ue?de:0);if(n===0)r!==null&&qa(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&qa(r),t===1)e.tag===0?Rf(Dl.bind(null,e)):uc(Dl.bind(null,e)),zf(function(){!($&6)&&Mt()}),r=null;else{switch(Iu(n)){case 1:r=$s;break;case 4:r=Mu;break;case 16:r=ui;break;case 536870912:r=Ou;break;default:r=ui}r=ad(r,ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ed(e,t){if(Gn=-1,Jn=0,$&6)throw Error(S(327));var r=e.callbackNode;if(gr()&&e.callbackNode!==r)return null;var n=ci(e,e===ue?de:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=bi(e,n);else{t=n;var i=$;$|=2;var o=rd();(ue!==e||de!==t)&&(nt=null,Sr=te()+500,Ut(e,t));do try{eh();break}catch(l){td(e,l)}while(!0);ea(),Ni.current=o,$=i,ne!==null?t=0:(ue=null,de=0,t=ae)}if(t!==0){if(t===2&&(i=qo(e),i!==0&&(n=i,t=xs(e,i))),t===1)throw r=hn,Ut(e,0),yt(e,n),Ee(e,te()),r;if(t===6)yt(e,n);else{if(i=e.current.alternate,!(n&30)&&!Jf(i)&&(t=bi(e,n),t===2&&(o=qo(e),o!==0&&(n=o,t=xs(e,o))),t===1))throw r=hn,Ut(e,0),yt(e,n),Ee(e,te()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:It(e,Se,nt);break;case 3:if(yt(e,n),(n&130023424)===n&&(t=ma+500-te(),10<t)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zo(It.bind(null,e,Se,nt),t);break}It(e,Se,nt);break;case 4:if(yt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-We(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gf(n/1960))-n,10<n){e.timeoutHandle=Zo(It.bind(null,e,Se,nt),n);break}It(e,Se,nt);break;case 5:It(e,Se,nt);break;default:throw Error(S(329))}}}return Ee(e,te()),e.callbackNode===r?ed.bind(null,e):null}function xs(e,t){var r=Yr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=bi(e,t),e!==2&&(t=Se,Se=r,t!==null&&ks(t)),e}function ks(e){Se===null?Se=e:Se.push.apply(Se,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~ha,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-We(t),n=1<<r;e[r]=-1,t&=~n}}function Dl(e){if($&6)throw Error(S(327));gr();var t=ci(e,0);if(!(t&1))return Ee(e,te()),null;var r=bi(e,t);if(e.tag!==0&&r===2){var n=qo(e);n!==0&&(t=n,r=xs(e,n))}if(r===1)throw r=hn,Ut(e,0),yt(e,t),Ee(e,te()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Se,nt),Ee(e,te()),null}function ga(e,t){var r=$;$|=1;try{return e(t)}finally{$=r,$===0&&(Sr=te()+500,Bi&&Mt())}}function Kt(e){kt!==null&&kt.tag===0&&!($&6)&&gr();var t=$;$|=1;var r=Ie.transition,n=V;try{if(Ie.transition=null,V=1,e)return e()}finally{V=n,Ie.transition=r,$=t,!($&6)&&Mt()}}function va(){be=cr.current,Q(cr)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,bf(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(Gs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&mi();break;case 3:wr(),Q(Ne),Q(ge),sa();break;case 5:oa(n);break;case 4:wr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:ta(n.type._context);break;case 22:case 23:va()}r=r.return}if(ue=e,ne=e=zt(e.current,null),de=be=t,ae=0,hn=null,ha=Vi=Qt=0,Se=Yr=null,Ft!==null){for(t=0;t<Ft.length;t++)if(r=Ft[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Ft=null}return e}function td(e,t){do{var r=ne;try{if(ea(),Kn.current=Ci,Si){for(var n=X.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Si=!1}if(Wt=0,le=se=X=null,Qr=!1,dn=0,fa.current=null,r===null||r.return===null){ae=1,hn=t,ne=null;break}e:{var o=e,a=r.return,l=r,u=t;if(t=de,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=l,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Cl(a);if(m!==null){m.flags&=-257,Nl(m,a,l,o,t),m.mode&1&&Sl(o,c,t),t=m,u=c;var x=t.updateQueue;if(x===null){var j=new Set;j.add(u),t.updateQueue=j}else x.add(u);break e}else{if(!(t&1)){Sl(o,c,t),ya();break e}u=Error(S(426))}}else if(K&&l.mode&1){var A=Cl(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Nl(A,a,l,o,t),Js(jr(u,l));break e}}o=u=jr(u,l),ae!==4&&(ae=2),Yr===null?Yr=[o]:Yr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ic(o,u,t);vl(o,f);break e;case 1:l=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Bc(o,l,t);vl(o,k);break e}}o=o.return}while(o!==null)}id(r)}catch(y){t=y,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function rd(){var e=Ni.current;return Ni.current=Ci,e===null?Ci:e}function ya(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Qt&268435455)&&!(Vi&268435455)||yt(ue,de)}function bi(e,t){var r=$;$|=2;var n=rd();(ue!==e||de!==t)&&(nt=null,Ut(e,t));do try{Zf();break}catch(i){td(e,i)}while(!0);if(ea(),$=r,Ni.current=n,ne!==null)throw Error(S(261));return ue=null,de=0,ae}function Zf(){for(;ne!==null;)nd(ne)}function eh(){for(;ne!==null&&!Cp();)nd(ne)}function nd(e){var t=sd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?id(e):ne=t,fa.current=null}function id(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Qf(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ne=null;return}}else if(r=Wf(r,t,be),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ae===0&&(ae=5)}function It(e,t,r){var n=V,i=Ie.transition;try{Ie.transition=null,V=1,th(e,t,r,n)}finally{Ie.transition=i,V=n}return null}function th(e,t,r,n){do gr();while(kt!==null);if($&6)throw Error(S(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Ap(e,o),e===ue&&(ne=ue=null,de=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||In||(In=!0,ad(ui,function(){return gr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var a=V;V=1;var l=$;$|=4,fa.current=null,Yf(e,r),Jc(r,e),wf(Go),di=!!Xo,Go=Xo=null,e.current=r,Xf(r),Np(),$=l,V=a,Ie.transition=o}else e.current=r;if(In&&(In=!1,kt=e,Ei=i),o=e.pendingLanes,o===0&&(Et=null),bp(r.stateNode),Ee(e,te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(_i)throw _i=!1,e=vs,vs=null,e;return Ei&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===ys?Xr++:(Xr=0,ys=e):Xr=0,Mt(),null}function gr(){if(kt!==null){var e=Iu(Ei),t=Ie.transition,r=V;try{if(Ie.transition=null,V=16>e?16:e,kt===null)var n=!1;else{if(e=kt,kt=null,Ei=0,$&6)throw Error(S(331));var i=$;for($|=4,z=e.current;z!==null;){var o=z,a=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var v=z;switch(v.tag){case 0:case 11:case 15:Kr(8,v,o)}var g=v.child;if(g!==null)g.return=v,z=g;else for(;z!==null;){v=z;var p=v.sibling,m=v.return;if(Yc(v),v===c){z=null;break}if(p!==null){p.return=m,z=p;break}z=m}}}var x=o.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var A=j.sibling;j.sibling=null,j=A}while(j!==null)}}z=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var d=e.current;for(z=d;z!==null;){a=z;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,z=h;else e:for(a=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ui(9,l)}}catch(y){J(l,l.return,y)}if(l===a){z=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,z=k;break e}z=l.return}}if($=i,Mt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Ai,e)}catch{}n=!0}return n}finally{V=r,Ie.transition=t}}return!1}function Il(e,t,r){t=jr(r,t),t=Ic(e,t,1),e=_t(e,t,1),t=ke(),e!==null&&(vn(e,1,t),Ee(e,t))}function J(e,t,r){if(e.tag===3)Il(e,e,r);else for(;t!==null;){if(t.tag===3){Il(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Et===null||!Et.has(n))){e=jr(r,e),e=Bc(t,e,1),t=_t(t,e,1),e=ke(),t!==null&&(vn(t,1,e),Ee(t,e));break}}t=t.return}}function rh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&r,ue===e&&(de&r)===r&&(ae===4||ae===3&&(de&130023424)===de&&500>te()-ma?Ut(e,0):ha|=r),Ee(e,t)}function od(e,t){t===0&&(e.mode&1?(t=bn,bn<<=1,!(bn&130023424)&&(bn=4194304)):t=1);var r=ke();e=ct(e,t),e!==null&&(vn(e,t,r),Ee(e,r))}function nh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),od(e,r)}function ih(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),od(e,r)}var sd;sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ce=!1,qf(e,t,r);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&cc(t,yi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Xn(e,t),e=t.pendingProps;var i=yr(t,ge.current);mr(t,r),i=la(null,t,n,e,i,r);var o=ua();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(n)?(o=!0,gi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,na(t),i.updater=$i,t.stateNode=i,i._reactInternals=t,ss(t,n,e,r),t=us(null,t,n,!0,o,r)):(t.tag=0,K&&o&&Xs(t),xe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Xn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=sh(n),e=Ue(n,e),i){case 0:t=ls(null,t,n,e,r);break e;case 1:t=bl(null,t,n,e,r);break e;case 11:t=_l(null,t,n,e,r);break e;case 14:t=El(null,t,n,Ue(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),ls(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),bl(e,t,n,i,r);case 3:e:{if(Vc(t),e===null)throw Error(S(387));n=t.pendingProps,o=t.memoizedState,i=o.element,gc(e,t),wi(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jr(Error(S(423)),t),t=zl(e,t,n,r,i);break e}else if(n!==i){i=jr(Error(S(424)),t),t=zl(e,t,n,r,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,qe=null,r=hc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xr(),n===i){t=dt(e,t,r);break e}xe(e,t,n,r)}t=t.child}return t;case 5:return vc(t),e===null&&ns(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Jo(n,i)?a=null:o!==null&&Jo(n,o)&&(t.flags|=32),Uc(e,t),xe(e,t,a,r),t.child;case 6:return e===null&&ns(t),null;case 13:return Hc(e,t,r);case 4:return ia(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=kr(t,null,n,r):xe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),_l(e,t,n,i,r);case 7:return xe(e,t,t.pendingProps,r),t.child;case 8:return xe(e,t,t.pendingProps.children,r),t.child;case 12:return xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,q(xi,n._currentValue),n._currentValue=a,o!==null)if(Ke(o.value,a)){if(o.children===i.children&&!Ne.current){t=dt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=at(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),is(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(S(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),is(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,mr(t,r),i=Be(i),n=n(i),t.flags|=1,xe(e,t,n,r),t.child;case 14:return n=t.type,i=Ue(n,t.pendingProps),i=Ue(n.type,i),El(e,t,n,i,r);case 15:return Fc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ue(n,i),Xn(e,t),t.tag=1,_e(n)?(e=!0,gi(t)):e=!1,mr(t,r),Dc(t,n,i),ss(t,n,i,r),us(null,t,n,!0,e,r);case 19:return qc(e,t,r);case 22:return $c(e,t,r)}throw Error(S(156,t.tag))};function ad(e,t){return Au(e,t)}function oh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new oh(e,t,r,n)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sh(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===Bs)return 14}return 2}function zt(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zn(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")xa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case er:return Vt(r.children,i,o,t);case Ds:a=8,i|=8;break;case Po:return e=De(12,r,t,i|2),e.elementType=Po,e.lanes=o,e;case To:return e=De(13,r,t,i),e.elementType=To,e.lanes=o,e;case Lo:return e=De(19,r,t,i),e.elementType=Lo,e.lanes=o,e;case vu:return Hi(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:a=10;break e;case gu:a=9;break e;case Is:a=11;break e;case Bs:a=14;break e;case mt:a=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Vt(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function Hi(e,t,r,n){return e=De(22,e,n,t),e.elementType=vu,e.lanes=r,e.stateNode={isHidden:!1},e}function So(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function Co(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ah(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ka(e,t,r,n,i,o,a,l,u){return e=new ah(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(o),e}function lh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ld(e){if(!e)return Lt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(_e(r))return lc(e,r,t)}return t}function ud(e,t,r,n,i,o,a,l,u){return e=ka(r,n,!0,e,i,o,a,l,u),e.context=ld(null),r=e.current,n=ke(),i=bt(r),o=at(n,i),o.callback=t??null,_t(r,o,i),e.current.lanes=i,vn(e,i,n),Ee(e,n),e}function qi(e,t,r,n){var i=t.current,o=ke(),a=bt(i);return r=ld(r),t.context===null?t.context=r:t.pendingContext=r,t=at(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=_t(i,t,a),e!==null&&(Qe(e,i,a,o),Qn(e,i,a)),a}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function wa(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function uh(){return null}var cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ja(e){this._internalRoot=e}Wi.prototype.render=ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));qi(e,t,null,null)};Wi.prototype.unmount=ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){qi(null,e,null,null)}),t[ut]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<vt.length&&t!==0&&t<vt[r].priority;r++);vt.splice(r,0,e),r===0&&Vu(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fl(){}function ch(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=zi(a);o.call(c)}}var a=ud(t,n,e,0,null,!1,!1,"",Fl);return e._reactRootContainer=a,e[ut]=a.current,sn(e.nodeType===8?e.parentNode:e),Kt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=zi(u);l.call(c)}}var u=ka(e,0,!1,null,null,!1,!1,"",Fl);return e._reactRootContainer=u,e[ut]=u.current,sn(e.nodeType===8?e.parentNode:e),Kt(function(){qi(t,u,r,n)}),u}function Ki(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=zi(a);l.call(u)}}qi(t,a,e,i)}else a=ch(r,t,e,i,n);return zi(a)}Bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Br(t.pendingLanes);r!==0&&(Us(t,r|1),Ee(t,te()),!($&6)&&(Sr=te()+500,Mt()))}break;case 13:Kt(function(){var n=ct(e,1);if(n!==null){var i=ke();Qe(n,e,1,i)}}),wa(e,1)}};Vs=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var r=ke();Qe(t,e,134217728,r)}wa(e,134217728)}};Fu=function(e){if(e.tag===13){var t=bt(e),r=ct(e,t);if(r!==null){var n=ke();Qe(r,e,t,n)}wa(e,t)}};$u=function(){return V};Uu=function(e,t){var r=V;try{return V=e,t()}finally{V=r}};Uo=function(e,t,r){switch(t){case"input":if(Mo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ii(n);if(!i)throw Error(S(90));xu(n),Mo(n,i)}}}break;case"textarea":wu(e,r);break;case"select":t=r.value,t!=null&&dr(e,!!r.multiple,t,!1)}};bu=ga;zu=Kt;var dh={usingClientEntryPoint:!1,Events:[xn,ir,Ii,_u,Eu,ga]},Mr={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ph={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bn.isDisabled&&Bn.supportsFiber)try{Ai=Bn.inject(ph),Ze=Bn}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;Le.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(S(200));return lh(e,t,null,r)};Le.createRoot=function(e,t){if(!Sa(e))throw Error(S(299));var r=!1,n="",i=cd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ka(e,1,!1,null,null,r,!1,n,i),e[ut]=t.current,sn(e.nodeType===8?e.parentNode:e),new ja(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Lu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Kt(e)};Le.hydrate=function(e,t,r){if(!Qi(t))throw Error(S(200));return Ki(null,e,t,!0,r)};Le.hydrateRoot=function(e,t,r){if(!Sa(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=cd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=ud(t,null,e,1,r??null,i,!1,o,a),e[ut]=t.current,sn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Wi(t)};Le.render=function(e,t,r){if(!Qi(t))throw Error(S(200));return Ki(null,e,t,!1,r)};Le.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(S(40));return e._reactRootContainer?(Kt(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Le.unstable_batchedUpdates=ga;Le.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qi(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ki(e,t,r,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)}catch(e){console.error(e)}}dd(),du.exports=Le;var fh=du.exports,$l=fh;bo.createRoot=$l.createRoot,bo.hydrateRoot=$l.hydrateRoot;const rt=Object.create(null);rt.open="0";rt.close="1";rt.ping="2";rt.pong="3";rt.message="4";rt.upgrade="5";rt.noop="6";const ei=Object.create(null);Object.keys(rt).forEach(e=>{ei[rt[e]]=e});const ws={type:"error",data:"parser error"},pd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",fd=typeof ArrayBuffer=="function",hd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ca=({type:e,data:t},r,n)=>pd&&t instanceof Blob?r?n(t):Ul(t,n):fd&&(t instanceof ArrayBuffer||hd(t))?r?n(t):Ul(new Blob([t]),n):n(rt[e]+(t||"")),Ul=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function Vl(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let No;function hh(e,t){if(pd&&e.data instanceof Blob)return e.data.arrayBuffer().then(Vl).then(t);if(fd&&(e.data instanceof ArrayBuffer||hd(e.data)))return t(Vl(e.data));Ca(e,!1,r=>{No||(No=new TextEncoder),t(No.encode(r))})}const Hl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$r=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Hl.length;e++)$r[Hl.charCodeAt(e)]=e;const mh=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),v=new Uint8Array(c);for(n=0;n<r;n+=4)o=$r[e.charCodeAt(n)],a=$r[e.charCodeAt(n+1)],l=$r[e.charCodeAt(n+2)],u=$r[e.charCodeAt(n+3)],v[i++]=o<<2|a>>4,v[i++]=(a&15)<<4|l>>2,v[i++]=(l&3)<<6|u&63;return c},gh=typeof ArrayBuffer=="function",Na=(e,t)=>{if(typeof e!="string")return{type:"message",data:md(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:vh(e.substring(1),t)}:ei[r]?e.length>1?{type:ei[r],data:e.substring(1)}:{type:ei[r]}:ws},vh=(e,t)=>{if(gh){const r=mh(e);return md(r,t)}else return{base64:!0,data:e}},md=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},gd="",yh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{Ca(o,!1,l=>{n[a]=l,++i===r&&t(n.join(gd))})})},xh=(e,t)=>{const r=e.split(gd),n=[];for(let i=0;i<r.length;i++){const o=Na(r[i],t);if(n.push(o),o.type==="error")break}return n};function kh(){return new TransformStream({transform(e,t){hh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let _o;function Fn(e){return e.reduce((t,r)=>t+r.length,0)}function $n(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function wh(e,t){_o||(_o=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(Fn(r)<1)break;const u=$n(r,1);o=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Fn(r)<2)break;const u=$n(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Fn(r)<8)break;const u=$n(r,8),c=new DataView(u.buffer,u.byteOffset,u.length),v=c.getUint32(0);if(v>Math.pow(2,21)-1){l.enqueue(ws);break}i=v*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Fn(r)<i)break;const u=$n(r,i);l.enqueue(Na(o?u:_o.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(ws);break}}}})}const vd=4;function ie(e){if(e)return jh(e)}function jh(e){for(var t in ie.prototype)e[t]=ie.prototype[t];return e}ie.prototype.on=ie.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ie.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};ie.prototype.off=ie.prototype.removeListener=ie.prototype.removeAllListeners=ie.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};ie.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};ie.prototype.emitReserved=ie.prototype.emit;ie.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ie.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Yi=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Oe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Sh="arraybuffer";function yd(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Ch=Oe.setTimeout,Nh=Oe.clearTimeout;function Xi(e,t){t.useNativeTimers?(e.setTimeoutFn=Ch.bind(Oe),e.clearTimeoutFn=Nh.bind(Oe)):(e.setTimeoutFn=Oe.setTimeout.bind(Oe),e.clearTimeoutFn=Oe.clearTimeout.bind(Oe))}const _h=1.33;function Eh(e){return typeof e=="string"?bh(e):Math.ceil((e.byteLength||e.size)*_h)}function bh(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function xd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function zh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Ph(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class Th extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class _a extends ie{constructor(t){super(),this.writable=!1,Xi(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Th(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Na(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=zh(t);return r.length?"?"+r:""}}class Lh extends _a{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};xh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,yh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=xd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let kd=!1;try{kd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Rh=kd;function Ah(){}class Mh extends Lh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class tt extends ie{constructor(t,r,n){super(),this.createRequest=t,Xi(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=yd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=tt.requestsCount++,tt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ah,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete tt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}tt.requestsCount=0;tt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ql);else if(typeof addEventListener=="function"){const e="onpagehide"in Oe?"pagehide":"unload";addEventListener(e,ql,!1)}}function ql(){for(let e in tt.requests)tt.requests.hasOwnProperty(e)&&tt.requests[e].abort()}const Oh=function(){const e=wd({xdomain:!1});return e&&e.responseType!==null}();class Dh extends Mh{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Oh&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new tt(wd,this.uri(),t)}}function wd(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Rh))return new XMLHttpRequest}catch{}if(!t)try{return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const jd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ih extends _a{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=jd?{}:yd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Ca(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&Yi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=xd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Eo=Oe.WebSocket||Oe.MozWebSocket;class Bh extends Ih{createSocket(t,r,n){return jd?new Eo(t,r,n):r?new Eo(t,r):new Eo(t)}doWrite(t,r){this.ws.send(r)}}class Fh extends _a{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=wh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=kh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&Yi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const $h={websocket:Bh,webtransport:Fh,polling:Dh},Uh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Vh=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function js(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=Uh.exec(e||""),o={},a=14;for(;a--;)o[Vh[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Hh(o,o.path),o.queryKey=qh(o,o.query),o}function Hh(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function qh(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Ss=typeof addEventListener=="function"&&typeof removeEventListener=="function",ti=[];Ss&&addEventListener("offline",()=>{ti.forEach(e=>e())},!1);class Pt extends ie{constructor(t,r){if(super(),this.binaryType=Sh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=js(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=js(r.host).host);Xi(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ph(this.opts.query)),Ss&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ti.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=vd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Pt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Pt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Eh(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Yi(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Pt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ss&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ti.indexOf(this._offlineEventListener);n!==-1&&ti.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Pt.protocol=vd;class Wh extends Pt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Pt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Pt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=r.name,this.emitReserved("upgradeError",p)}}))};function o(){n||(n=!0,v(),r.close(),r=null)}const a=g=>{const p=new Error("probe error: "+g);p.transport=r.name,o(),this.emitReserved("upgradeError",p)};function l(){a("transport closed")}function u(){a("socket closed")}function c(g){r&&g.name!==r.name&&o()}const v=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let Qh=class extends Wh{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>$h[o]).filter(o=>!!o)),super(n?i:t,i)}};function Kh(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=js(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Yh=typeof ArrayBuffer=="function",Xh=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Sd=Object.prototype.toString,Gh=typeof Blob=="function"||typeof Blob<"u"&&Sd.call(Blob)==="[object BlobConstructor]",Jh=typeof File=="function"||typeof File<"u"&&Sd.call(File)==="[object FileConstructor]";function Ea(e){return Yh&&(e instanceof ArrayBuffer||Xh(e))||Gh&&e instanceof Blob||Jh&&e instanceof File}function ri(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ri(e[r]))return!0;return!1}if(Ea(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ri(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ri(e[r]))return!0;return!1}function Zh(e){const t=[],r=e.data,n=e;return n.data=ni(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ni(e,t,r){if(!e)return e;if(Ea(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ni(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ni(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ni(e[i],t));return n}return e}function em(e,t){return e.data=Cs(e.data,t),delete e.attachments,e}function Cs(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Cs(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Cs(e[r],t));return e}const tm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var F;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(F||(F={}));class rm{constructor(t){this.replacer=t}encode(t){return(t.type===F.EVENT||t.type===F.ACK)&&ri(t)?this.encodeAsBinary({type:t.type===F.EVENT?F.BINARY_EVENT:F.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===F.BINARY_EVENT||t.type===F.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Zh(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class ba extends ie{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===F.BINARY_EVENT;n||r.type===F.BINARY_ACK?(r.type=n?F.EVENT:F.ACK,this.reconstructor=new nm(r)):super.emitReserved("decoded",r)}else if(Ea(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(F[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===F.BINARY_EVENT||n.type===F.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!im(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(ba.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case F.CONNECT:return Wl(r);case F.DISCONNECT:return r===void 0;case F.CONNECT_ERROR:return typeof r=="string"||Wl(r);case F.EVENT:case F.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&tm.indexOf(r[0])===-1);case F.ACK:case F.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class nm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=em(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const im=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function Wl(e){return Object.prototype.toString.call(e)==="[object Object]"}const om=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ba,Encoder:rm,get PacketType(){return F}},Symbol.toStringTag,{value:"Module"}));function He(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const sm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Cd extends ie{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[He(t,"open",this.onopen.bind(this)),He(t,"packet",this.onpacket.bind(this)),He(t,"error",this.onerror.bind(this)),He(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(sm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:F.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,g=r.pop();this._registerAckCallback(v,g),a.id=v}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:F.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case F.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case F.EVENT:case F.BINARY_EVENT:this.onevent(t);break;case F.ACK:case F.BINARY_ACK:this.onack(t);break;case F.DISCONNECT:this.ondisconnect();break;case F.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:F.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:F.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Er(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Er.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Er.prototype.reset=function(){this.attempts=0};Er.prototype.setMin=function(e){this.ms=e};Er.prototype.setMax=function(e){this.max=e};Er.prototype.setJitter=function(e){this.jitter=e};class Ns extends ie{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Xi(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Er({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||om;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Qh(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=He(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=He(r,"error",o);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(He(t,"ping",this.onping.bind(this)),He(t,"data",this.ondata.bind(this)),He(t,"error",this.onerror.bind(this)),He(t,"close",this.onclose.bind(this)),He(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){Yi(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Cd(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Or={};function ii(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Kh(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=Or[i]&&o in Or[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new Ns(n,t):(Or[i]||(Or[i]=new Ns(n,t)),u=Or[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(ii,{Manager:Ns,Socket:Cd,io:ii,connect:ii});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nd=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=L.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},u)=>L.createElement("svg",{ref:u,...lm,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Nd("lucide",i),...l},[...a.map(([c,v])=>L.createElement(c,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,t)=>{const r=L.forwardRef(({className:n,...i},o)=>L.createElement(um,{ref:o,iconNode:t,className:Nd(`lucide-${am(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=T("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=T("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=T("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=T("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=T("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=T("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=T("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=T("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=T("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=T("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=T("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=T("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=T("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=T("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=T("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=T("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=T("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=T("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=T("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=T("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=T("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=T("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=T("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=T("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=T("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=T("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=T("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=T("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=T("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=T("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=T("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=T("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=T("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=T("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=T("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=T("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=T("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=T("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=T("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=T("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=T("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=T("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=T("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=T("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=T("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=T("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=T("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=T("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=T("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=T("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=T("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=T("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);function Rm(e){switch(e){case"burger":return s.jsx(Ed,{size:16});case"fries":return s.jsx(Dd,{size:16});case"drink":return s.jsx(Ld,{size:16});case"dessert":return s.jsx(Td,{size:16});case"pizza":return s.jsx(Md,{size:16});case"coffee":return s.jsx(Pd,{size:16});default:return s.jsx(pt,{size:16})}}function Am({menu:e,operador:t,onEnviarPedido:r}){const[n,i]=L.useState(""),[o,a]=L.useState(""),[l,u]=L.useState("todas"),[c,v]=L.useState([]),[g,p]=L.useState(null),[m,x]=L.useState("cardapio"),[j,A]=L.useState("pix"),[f,d]=L.useState(()=>{const b=new Date;return b.setDate(b.getDate()+7),b.toISOString().split("T")[0]}),h=(e==null?void 0:e.categorias)||[],k=(e==null?void 0:e.produtos)||[],y=l==="todas"?k:k.filter(b=>b.categoriaId===l),N=b=>{v(U=>{const oe=U.findIndex(ee=>ee.id===b.id);if(oe>=0){const ee=[...U];return ee[oe].quantidade+=1,ee}return[...U,{id:b.id,nome:b.nome,preco:b.preco,quantidade:1,observacao:""}]})},C=(b,U)=>{v(oe=>oe.map(ee=>{if(ee.id===b){const Ye=ee.quantidade+U;return Ye>0?{...ee,quantidade:Ye}:null}return ee}).filter(Boolean))},E=(b,U)=>{v(oe=>oe.map(ee=>ee.id===b?{...ee,observacao:U}:ee))},H=b=>{v(U=>U.filter(oe=>oe.id!==b))},M=c.reduce((b,U)=>b+U.preco*U.quantidade,0),Z=c.reduce((b,U)=>b+U.quantidade,0),ve=b=>{if(b.preventDefault(),!n.trim()){alert("Por favor, informe o nome do cliente!");return}if(c.length===0){alert("Selecione pelo menos um item para o pedido.");return}const U=j==="pagar_depois";if(U){if(!o.trim()){alert("Por favor, informe o telefone do cliente para a opção Pagar Depois!");return}if(!f){alert("Por favor, selecione a data de cobrança!");return}}r({cliente:n.trim(),telefoneCliente:U?o.trim():null,itens:c,formaPagamento:j,statusPagamento:U?"pendente_pagamento":"pago",dataCobranca:U?f:null},oe=>{oe&&oe.status==="success"&&(p(`Pedido #${oe.order.numero} enviado com sucesso!`),i(""),a(""),v([]),A("pix"),x("cardapio"),setTimeout(()=>p(null),4e3))})};return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
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
            display: ${m==="cardapio"?"flex":"none"} !important;
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
            padding-right: 0 !important;
          }

          .caixa-carrinho {
            display: ${m==="carrinho"?"flex":"none"} !important;
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
            display: ${m==="cardapio"&&Z>0?"flex":"none"};
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
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${m==="cardapio"?"active":""}`,onClick:()=>x("cardapio"),children:[s.jsx(pt,{size:16})," Cardápio"]}),s.jsxs("button",{className:`mobile-toggle-btn ${m==="carrinho"?"active":""}`,onClick:()=>x("carrinho"),children:[s.jsx(wt,{size:16})," Carrinho (",Z,")"]})]}),s.jsxs("div",{className:"caixa-cardapio",children:[s.jsxs("div",{className:"cat-bar",children:[s.jsxs("button",{className:`cat-btn ${l==="todas"?"active":""}`,onClick:()=>u("todas"),children:[s.jsx(pt,{size:16})," Todos"]}),h.map(b=>s.jsxs("button",{className:`cat-btn ${l===b.id?"active":""}`,onClick:()=>u(b.id),children:[Rm(b.icone)," ",s.jsx("span",{children:b.nome})]},b.id))]}),s.jsx("div",{className:"produtos-grid",children:y.map(b=>s.jsxs("div",{className:`prod-card ${b.disponivel?"":"indisponivel"}`,onClick:()=>b.disponivel&&N(b),children:[s.jsxs("div",{children:[s.jsx("div",{className:"prod-title",children:b.nome}),s.jsx("div",{className:"prod-desc",children:b.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("div",{className:"prod-preco",children:["R$ ",b.preco.toFixed(2)]}),s.jsxs("button",{className:"prod-add-btn",children:[s.jsx(bs,{size:14})," Add"]})]})]},b.id))})]}),s.jsxs("div",{className:"caixa-carrinho",children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsx(wt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Resumo do Pedido"})]}),g&&s.jsxs("div",{className:"toast-sucesso",children:[s.jsx(Ta,{size:18}),s.jsx("span",{children:g})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx(wn,{size:20,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:n,onChange:b=>i(b.target.value)})]})]}),s.jsx("div",{className:"carrinho-itens",children:c.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(wt,{size:36,strokeWidth:1.5}),s.jsx("p",{children:"Nenhum item selecionado"}),s.jsx("span",{style:{fontSize:"0.8rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):c.map(b=>s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:b.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(b.preco*b.quantidade).toFixed(2)]})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>C(b.id,-1),children:s.jsx(vm,{size:14})}),s.jsx("span",{className:"qtd-val",children:b.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>C(b.id,1),children:s.jsx(bs,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>H(b.id),children:s.jsx(Ti,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(hm,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:b.observacao,onChange:U=>E(b.id,U.target.value)})]})]},b.id))}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${j==="pix"?"active":""}`,onClick:()=>A("pix"),children:[s.jsx(oi,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${j==="dinheiro"?"active":""}`,onClick:()=>A("dinheiro"),children:[s.jsx(Rd,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${j==="debito"?"active":""}`,onClick:()=>A("debito"),children:[s.jsx(oi,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${j==="credito"?"active":""}`,onClick:()=>A("credito"),children:[s.jsx(oi,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${j==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>A("pagar_depois"),children:[s.jsx(bd,{size:16})," Pagar Depois (Fiado)"]})]}),j==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ad,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:o,onChange:b=>a(b.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Gi,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:f,onChange:b=>d(b.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(zd,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",M.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:ve,disabled:c.length===0||!n.trim(),children:[s.jsx(wm,{size:18})," Enviar para Cozinha"]})]})]}),s.jsxs("div",{className:"mobile-cart-float-bar",onClick:()=>x("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(wt,{size:20}),s.jsxs("span",{children:["Ver Pedido (",Z," ",Z===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",M.toFixed(2)," →"]})]})]})}function Mm({pedidos:e,operador:t,onMudarStatus:r}){const[n,i]=L.useState(Date.now()),[o,a]=L.useState("ativos");L.useEffect(()=>{const p=setInterval(()=>{i(Date.now())},1e3);return()=>clearInterval(p)},[]);const l=e.filter(p=>p.status==="pendente"||p.status==="em_preparo"),u=l.filter(p=>o==="pendentes"?p.status==="pendente":o==="preparo"?p.status==="em_preparo":o==="meus"&&t?p.preparadoPor&&p.preparadoPor.includes(t.nome):!0),c=p=>{const m=new Date(p).getTime(),x=n-m;return Math.floor(x/6e4)},v=p=>{const m=new Date(p).getTime(),x=Math.max(0,n-m),j=Math.floor(x/6e4),A=Math.floor(x%6e4/1e3);return`${String(j).padStart(2,"0")}:${String(A).padStart(2,"0")}`},g=p=>{const m=c(p);return m>=10?"urgente":m>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(mn,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${o==="ativos"?"active":""}`,onClick:()=>a("ativos"),children:["Todos (",l.length,")"]}),s.jsxs("button",{className:`nav-btn ${o==="pendentes"?"active":""}`,onClick:()=>a("pendentes"),children:["Novos (",l.filter(p=>p.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${o==="preparo"?"active":""}`,onClick:()=>a("preparo"),children:["Em Preparo (",l.filter(p=>p.status==="em_preparo").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${o==="meus"?"active":""}`,onClick:()=>a("meus"),children:["Meus Pedidos (",l.filter(p=>p.preparadoPor&&p.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:u.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Pa,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):u.map(p=>{const m=g(p.criadoEm),x=v(p.criadoEm);return s.jsxs("div",{className:`kds-card ${m}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",p.numero]}),s.jsx("div",{className:"cliente-nome",children:p.cliente}),p.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",p.dataCobranca?new Date(p.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:p.formaPagamento?p.formaPagamento.toUpperCase():"PIX"}),p.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx(wn,{size:12}),s.jsxs("span",{children:["Preparo: ",p.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[s.jsx("span",{className:`badge badge-${p.status==="pendente"?"pendente":"preparo"}`,children:p.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${m}`,children:[s.jsx(Gi,{size:14}),s.jsx("span",{children:x})]})]})]}),s.jsx("div",{className:"kds-card-body",children:p.itens.map((j,A)=>s.jsxs("div",{className:"kds-item-row",children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("span",{className:"item-qtd-badge",children:[j.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:j.nome})]}),j.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(gm,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",j.observacao]})]})]},A))}),s.jsx("div",{className:"kds-card-footer",children:p.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(p.id,"em_preparo"),children:[s.jsx(km,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(p.id,"pronto"),children:[s.jsx(za,{size:18})," Pronto / Chamar Cliente"]})})]},p.id)})})]})}let Jt=null;function Om(){if(!Jt){const e=window.AudioContext||window.webkitAudioContext;e&&(Jt=new e)}return Jt&&Jt.state==="suspended"&&Jt.resume(),Jt}function Jl(){try{const e=Om();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function Dm({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r}){const[n,i]=L.useState(!0);L.useEffect(()=>{t&&n&&Jl()},[t,n]);const o=e.filter(u=>u.status==="pronto"),a=e.filter(u=>u.status==="entregue").slice(0,8),l=t&&t.status==="pronto"?t:o[0];return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${n?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{i(!n),n||Jl()},children:[n?s.jsx(zm,{size:18,color:"var(--status-pronto)"}):s.jsx(Pm,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:n?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(za,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),l?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",l.numero]}),s.jsx("div",{className:"destaque-cliente",children:l.cliente}),s.jsx("div",{className:"destaque-acoes",children:s.jsxs("button",{className:"btn btn-success",style:{padding:"0.9rem 2rem",fontSize:"1.15rem",borderRadius:"var(--radius-md)"},onClick:()=>r(l.id,"entregue"),children:[s.jsx(Gl,{size:22})," Marcar como Entregue"]})})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Li,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Pa,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",o.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:o.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):o.map(u=>s.jsxs("div",{className:"pronto-item",onClick:()=>r(u.id,"entregue"),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",u.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:u.cliente})]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",fontSize:"0.8rem"},children:["Entregue ",s.jsx(_d,{size:14})]})]},u.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Gl,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:a.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):a.map(u=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",u.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:u.cliente})]},u.id))})]})]})]})}const Id=[{id:"burger",nome:"Hambúrguer",component:s.jsx(Ed,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(Dd,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(Ld,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(Td,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(Md,{size:18})},{id:"coffee",nome:"Café",component:s.jsx(Pd,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(pt,{size:18})}];function Zl(e){const t=Id.find(r=>r.id===e);return t?t.component:s.jsx(pt,{size:16})}function Im({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o}){const[a,l]=L.useState("todas"),[u,c]=L.useState(""),[v,g]=L.useState(!1),[p,m]=L.useState(!1),[x,j]=L.useState(null),[A,f]=L.useState(""),[d,h]=L.useState(""),[k,y]=L.useState(""),[N,C]=L.useState(""),[E,H]=L.useState(""),[M,Z]=L.useState("burger"),ve=(e==null?void 0:e.categorias)||[],b=(e==null?void 0:e.produtos)||[],U=b.filter(w=>{const I=a==="todas"||w.categoriaId===a,P=!u.trim()||w.nome.toLowerCase().includes(u.toLowerCase())||w.descricao&&w.descricao.toLowerCase().includes(u.toLowerCase());return I&&P}),oe=(w=null)=>{var I;w?(j(w),f(w.nome),h(w.categoriaId),y(w.preco.toString()),C(w.descricao||"")):(j(null),f(""),h(((I=ve[0])==null?void 0:I.id)||"lanches"),y(""),C("")),g(!0)},ee=()=>{H(""),Z("burger"),m(!0)},Ye=w=>{if(w.preventDefault(),!A.trim()||!k||!d){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:x?x.id:void 0,categoriaId:d,nome:A.trim(),preco:parseFloat(k),descricao:N.trim(),disponivel:x?x.disponivel:!0}),g(!1)},_=w=>{if(w.preventDefault(),!E.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:E.trim(),icone:M}),m(!1)},R=w=>{window.confirm(`Tem certeza que deseja excluir o produto "${w.nome}"?`)&&r(w.id)},O=w=>{const I=b.filter(P=>P.categoriaId===w.id).length;if(I>0){alert(`Não é possível excluir a categoria "${w.nome}" pois ela possui ${I} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${w.nome}"?`)&&o(w.id).then(P=>{P&&P.error?alert(P.error):a===w.id&&l("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(pt,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Od,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:w=>c(w.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:ee,children:[s.jsx(Ql,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>oe(),children:[s.jsx(bs,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${a==="todas"?"active":""}`,onClick:()=>l("todas"),children:[s.jsx(Sm,{size:14})," Todas (",b.length,")"]}),ve.map(w=>{const I=b.filter(P=>P.categoriaId===w.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${a===w.id?"active":""}`,onClick:()=>l(w.id),children:[Zl(w.icone)," ",s.jsx("span",{children:w.nome})," (",I,")"]}),I===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>O(w),children:s.jsx(Ti,{size:13})})]},w.id)})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:U.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"6",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(zd,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):U.map(w=>{const I=ve.find(P=>P.id===w.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(w.id),children:w.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Nm,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Cm,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:w.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[Zl(I==null?void 0:I.icone)," ",(I==null?void 0:I.nome)||w.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",w.preco.toFixed(2)]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:w.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>oe(w),children:[s.jsx(xm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>R(w),children:[s.jsx(Ti,{size:14})," Excluir"]})]})})]},w.id)})})]})}),v&&s.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:s.jsxs("div",{className:"modal-card",onClick:w=>w.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(pt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:x?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:Ye,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:A,onChange:w=>f(w.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:d,onChange:w=>h(w.target.value),required:!0,children:ve.map(w=>s.jsx("option",{value:w.id,children:w.nome},w.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:k,onChange:w=>y(w.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:N,onChange:w=>C(w.target.value)})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(Pi,{size:18})," Salvar Produto"]})]})]})]})}),p&&s.jsx("div",{className:"modal-backdrop",onClick:()=>m(!1),children:s.jsxs("div",{className:"modal-card",onClick:w=>w.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(Ql,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:E,onChange:w=>H(w.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:Id.map(w=>s.jsxs("button",{type:"button",className:`icone-opt ${M===w.id?"selected":""}`,onClick:()=>Z(w.id),children:[w.component,s.jsx("span",{children:w.nome})]},w.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>m(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(Pi,{size:18})," Criar Categoria"]})]})]})]})})]})}function Bm({pedidos:e,operador:t}){if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(La,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const n=m=>{window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${m}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(x=>x.json()).catch(x=>console.error("Erro ao quitar pagamento:",x))},i=m=>m.statusPagamento==="pago"?!1:m.statusPagamento==="pendente_pagamento"||m.formaPagamento==="pagar_depois",o=e.filter(m=>m.status!=="cancelado"),a=o.filter(m=>!i(m)),l=o.filter(m=>i(m)),u=a.reduce((m,x)=>m+(Number(x.total)||0),0),c=l.reduce((m,x)=>m+(Number(x.total)||0),0),v=o.length,g=v>0?(u+c)/v:0,p=m=>{if(m.formaPagamento==="pagar_depois"||m.statusPagamento==="pendente_pagamento"){const x=m.dataCobranca?new Date(m.dataCobranca).toLocaleDateString():"Sem Data";return m.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(Pi,{size:12})," Pagar Depois (Quitado ",x,")"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(Gi,{size:12})," Pagar Depois (Cobrar: ",x,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(oi,{size:12})," ",m.formaPagamento?m.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
        .vendas-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .vendas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }

        .metric-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon-box {
          background: rgba(21, 107, 22, 0.12);
          color: var(--primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-family: var(--font-title);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-title);
          line-height: 1.1;
        }

        .vendas-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .vendas-table {
          width: 100%;
          min-width: 800px;
          border-collapse: collapse;
          text-align: left;
        }

        .vendas-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .vendas-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .vendas-table tr:hover td {
          background: var(--app-surface-2);
        }
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(_s,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Controle de Cobrança (Pagar Depois)"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsx("span",{children:"Relatório em Tempo Real"})})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-primary-bg)",color:"var(--color-primary)"},children:s.jsx(Rd,{size:28})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",u.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(bd,{size:28})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",c.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(wt,{size:28})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total de Comandas"}),s.jsxs("div",{className:"metric-value",children:[v," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx(_m,{size:28})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",g.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:o.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido registrado no sistema ainda."})}):o.map(m=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",m.numero]})}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:m.cliente}),m.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(Ad,{size:12}),s.jsx("span",{children:m.telefoneCliente})]})]}),s.jsx("td",{children:p(m)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(m.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"?"entregue":"preparo"}`,children:m.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.85rem"},children:[s.jsxs("div",{children:["Lançado: ",s.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Preparo: ",m.preparadoPor]})]}),s.jsx("td",{children:s.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:i(m)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.4rem 0.8rem",fontSize:"0.82rem"},onClick:()=>n(m.id),children:[s.jsx(Pi,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Pa,{size:15})," Quitado"]})})})]},m.id))})]})})]})}function Fm({operador:e}){const[t,r]=L.useState([]),[n,i]=L.useState(!1),[o,a]=L.useState(!1),[l,u]=L.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[c,v]=L.useState({}),[g,p]=L.useState(null),m=e&&e.role==="master";L.useEffect(()=>{m&&x()},[m]);const x=()=>{fetch("/api/users").then(y=>y.json()).then(y=>r(y)).catch(y=>console.error("Erro ao carregar usuários:",y))};if(!m)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(La,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const j=y=>{v(N=>({...N,[y]:!N[y]}))},A=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},f=y=>{u({...y}),a(!0),i(!0)},d=y=>{if(y.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const N=o?`/api/users/${l.id}`:"/api/users";fetch(N,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(E=>E.json()).then(E=>{E&&E.status==="success"?(p(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),x(),setTimeout(()=>p(null),4e3)):alert(E.error||"Erro ao salvar usuário.")}).catch(E=>alert("Erro de conexão com o servidor."))},h=(y,N)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${N}"?`)&&fetch(`/api/users/${y}`,{method:"DELETE"}).then(C=>C.json()).then(C=>{C&&C.status==="success"?(p(`Conta de "${N}" excluída com sucesso.`),x(),setTimeout(()=>p(null),4e3)):alert(C.error||"Erro ao excluir conta.")})},k=y=>{switch(y){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(cm,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(wt,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(mn,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Li,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:y})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(zs,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:A,children:[s.jsx(bm,{size:18})," Nova Conta"]})]}),g&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(Ta,{size:18}),s.jsx("span",{children:g})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(y=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:y.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:y.usuario})}),s.jsx("td",{children:k(y.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:c[y.id]?y.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>j(y.id),title:"Revelar/Ocultar Senha",children:c[y.id]?s.jsx(pm,{size:14}):s.jsx(fm,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>f(y),children:[s.jsx(jm,{size:14})," Editar"]}),y.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>h(y.id,y.nome),children:[s.jsx(Ti,{size:14})," Excluir"]})]})})]},y.id))})]})}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(wn,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:y=>u({...l,nome:y.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:y=>u({...l,usuario:y.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:y=>u({...l,senha:y.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:y=>u({...l,role:y.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function $m({logs:e,operador:t}){const[r,n]=L.useState(""),[i,o]=L.useState("todas");if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(La,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const l=e.filter(c=>{const v=i==="todas"||c.acao===i,g=r.toLowerCase().trim(),p=!g||String(c.numeroPedido).includes(g)||c.cliente&&c.cliente.toLowerCase().includes(g)||c.usuario&&c.usuario.toLowerCase().includes(g)||c.descricao&&c.descricao.toLowerCase().includes(g);return v&&p}),u=c=>{switch(c){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(dm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(mn,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(za,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ta,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:c})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
        .logs-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .logs-topbar {
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

        .logs-pills-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.3rem;
          -webkit-overflow-scrolling: touch;
        }

        .logs-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          box-shadow: var(--shadow-md);
        }

        .logs-table {
          width: 100%;
          min-width: 800px;
          border-collapse: collapse;
          text-align: left;
        }

        .logs-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .logs-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          vertical-align: top;
        }

        .logs-table tr:hover td {
          background: var(--app-surface-2);
        }

        .log-time {
          font-family: monospace;
          font-size: 0.85rem;
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
          padding: 0.25rem 0.5rem;
          font-size: 0.82rem;
          color: var(--text-title);
        }
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Es,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria & Detalhamento de Itens"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Od,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por comanda, cliente ou operador...",value:r,onChange:c=>n(c.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos os Logs (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(c=>c.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(c=>c.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada TV (",e.filter(c=>c.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(c=>c.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:l.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro de auditoria encontrado."})}):l.map(c=>{const v=new Date(c.timestamp),g=`${v.toLocaleDateString()} ${v.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Gi,{size:13}),s.jsx("span",{children:g})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx(wn,{size:14,color:"var(--primary)"}),s.jsx("span",{children:c.usuario})]})}),s.jsx("td",{children:u(c.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",c.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",c.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.9rem",color:"var(--app-ink)",fontWeight:600},children:c.descricao}),c.itens&&Array.isArray(c.itens)&&c.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem",marginTop:"0.5rem"},children:c.itens.map((p,m)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(ym,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[p.quantidade,"x"]}),s.jsx("span",{children:p.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:700},children:["(R$ ",(p.preco*p.quantidade).toFixed(2),")"]}),p.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.78rem"},children:["[",p.observacao,"]"]})]},m))})]})]},c.id)})})]})})]})}const re=ii(window.location.origin,{transports:["websocket","polling"]});function Um(){const[e,t]=L.useState("caixa"),[r,n]=L.useState(!1),[i,o]=L.useState(()=>localStorage.getItem("tema_lanchonete")||"escuro"),[a,l]=L.useState(()=>{try{const P=localStorage.getItem("operador_lanchonete");return P?JSON.parse(P):null}catch{return null}}),[u,c]=L.useState(""),[v,g]=L.useState(""),[p,m]=L.useState(null),[x,j]=L.useState(!1),[A,f]=L.useState([]),[d,h]=L.useState({categorias:[],produtos:[]}),[k,y]=L.useState([]),[N,C]=L.useState(null);L.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const E=()=>{o(P=>P==="escuro"?"claro":"escuro")};L.useEffect(()=>{fetch("/api/logs").then(P=>P.json()).then(P=>y(P)).catch(P=>console.error("Erro ao buscar logs:",P))},[]);const H=P=>{if(P.preventDefault(),m(null),!u.trim()||!v.trim()){m("Preencha usuário e senha.");return}j(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:v.trim()})}).then(D=>D.json()).then(D=>{if(j(!1),D&&D.status==="success"){const ye=D.user;l(ye),localStorage.setItem("operador_lanchonete",JSON.stringify(ye)),ye.role==="cozinha"?t("cozinha"):ye.role==="tv"?t("chamada"):t("caixa")}else m(D.error||"Credenciais inválidas.")}).catch(D=>{j(!1),m("Erro de conexão com o servidor.")})},M=()=>{l(null),localStorage.removeItem("operador_lanchonete"),c(""),g(""),m(null)};L.useEffect(()=>(re.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),re.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),re.on("pedidos_iniciais",P=>{f(P)}),re.on("cardapio_inicial",P=>{h(P)}),re.on("novo_pedido_criado",P=>{f(D=>[P,...D.filter(ye=>ye.id!==P.id)])}),re.on("status_pedido_atualizado",P=>{f(D=>D.map(ye=>ye.id===P.id?P:ye))}),re.on("pedido_chamado",P=>{C(P)}),re.on("cardapio_atualizado",P=>{h(P)}),re.on("novo_log_auditoria",P=>{y(D=>[P,...D.filter(ye=>ye.id!==P.id)])}),()=>{re.off("connect"),re.off("disconnect"),re.off("pedidos_iniciais"),re.off("cardapio_inicial"),re.off("novo_pedido_criado"),re.off("status_pedido_atualizado"),re.off("pedido_chamado"),re.off("cardapio_atualizado"),re.off("novo_log_auditoria")}),[]);const Z=(P,D)=>{re.emit("criar_pedido",{...P,criadoPor:a?`${a.nome}`:"Caixa"},D)},ve=(P,D)=>{re.emit("mudar_status_pedido",{id:P,status:D,preparadoPor:a?`${a.nome}`:"Cozinha"})},b=P=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar produto:",D))},U=P=>{fetch(`/api/menu/produto/${P}`,{method:"DELETE"}).then(D=>D.json()).catch(D=>console.error("Erro ao excluir produto:",D))},oe=P=>{fetch(`/api/menu/produto/${P}/disponivel`,{method:"PATCH"}).then(D=>D.json()).catch(D=>console.error("Erro ao alterar disponibilidade:",D))},ee=P=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar categoria:",D))},Ye=P=>fetch(`/api/menu/categoria/${P}`,{method:"DELETE"}).then(D=>D.json());if(!a)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:E,title:"Alternar Tema",children:i==="escuro"?s.jsx(Xl,{size:16,color:"var(--status-preparo)"}):s.jsx(Yl,{size:16,color:"var(--primary)"})})]}),p&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(Em,{size:18}),s.jsx("span",{children:p})]}),s.jsxs("form",{onSubmit:H,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:P=>c(P.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:v,onChange:P=>g(P.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:x,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[x?"Autenticando...":"Entrar no Sistema"," ",s.jsx(_d,{size:18})]})]})]})]});const _=a.role==="master"||a.role==="caixa",R=a.role==="master",O=a.role==="master",w=a.role==="master"||a.role==="caixa",I=a.role==="master"||a.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[_&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(wt,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(mn,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Li,{size:18})," Chamada TV"]}),w&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(_s,{size:18})," Vendas"]}),I&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Es,{size:18})," Logs"]}),R&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(pt,{size:18})," Cardápio"]}),O&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(zs,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:M,title:`Operador: ${a.nome} (${a.role.toUpperCase()}) - Clique para sair`,children:[s.jsx(wn,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:a.nome}),s.jsx(mm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:E,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(Xl,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Yl,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Lm,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Tm,{size:14})," Conectando..."]})]})]})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(_?s.jsx(Am,{menu:d,operador:a,onEnviarPedido:Z}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Kl,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",a.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(Mm,{pedidos:A,operador:a,onMudarStatus:ve}),e==="chamada"&&s.jsx(Dm,{pedidos:A,ultimoPedidoChamado:N,onMudarStatus:ve}),e==="vendas"&&s.jsx(Bm,{pedidos:A,operador:a}),e==="logs"&&s.jsx($m,{logs:k,operador:a}),e==="cardapio"&&(R?s.jsx(Im,{menu:d,onSalvarProduto:b,onExcluirProduto:U,onToggleDisponivel:oe,onSalvarCategoria:ee,onExcluirCategoria:Ye}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Kl,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&s.jsx(Fm,{operador:a})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[_&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(wt,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(mn,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Li,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),w&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(_s,{size:20}),s.jsx("span",{children:"Vendas"})]}),I&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Es,{size:20}),s.jsx("span",{children:"Logs"})]}),R&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(pt,{size:20}),s.jsx("span",{children:"Cardápio"})]}),O&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(zs,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}bo.createRoot(document.getElementById("root")).render(s.jsx(tp.StrictMode,{children:s.jsx(Um,{})}));
