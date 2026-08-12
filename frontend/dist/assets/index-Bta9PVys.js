(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bu={exports:{}},Yi={},Cu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn=Symbol.for("react.element"),ap=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),dp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),mp=Symbol.for("react.memo"),gp=Symbol.for("react.lazy"),Za=Symbol.iterator;function vp(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var Nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eu=Object.assign,_u={};function Fr(e,t,r){this.props=e,this.context=t,this.refs=_u,this.updater=r||Nu}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zu(){}zu.prototype=Fr.prototype;function Ys(e,t,r){this.props=e,this.context=t,this.refs=_u,this.updater=r||Nu}var Gs=Ys.prototype=new zu;Gs.constructor=Ys;Eu(Gs,Fr.prototype);Gs.isPureReactComponent=!0;var el=Array.isArray,Pu=Object.prototype.hasOwnProperty,Js={current:null},Tu={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,r){var n,i={},s=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Pu.call(t,n)&&!Tu.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Rn,type:e,key:s,ref:a,props:i,_owner:Js.current}}function yp(e,t){return{$$typeof:Rn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rn}function xp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var tl=/\/+/g;function go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xp(""+e.key):t.toString(36)}function ni(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Rn:case ap:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+go(a,0):n,el(i)?(r="",e!=null&&(r=e.replace(tl,"$&/")+"/"),ni(i,t,r,"",function(c){return c})):i!=null&&(Zs(i)&&(i=yp(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(tl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",el(e))for(var l=0;l<e.length;l++){s=e[l];var u=n+go(s,l);a+=ni(s,t,r,u,i)}else if(u=vp(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=n+go(s,l++),a+=ni(s,t,r,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Dn(e,t,r){if(e==null)return e;var n=[],i=0;return ni(e,n,"","",function(s){return t.call(r,s,i++)}),n}function kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ii={transition:null},wp={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ii,ReactCurrentOwner:Js};function Ru(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Dn,forEach:function(e,t,r){Dn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Dn(e,function(){t++}),t},toArray:function(e){return Dn(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Fr;H.Fragment=lp;H.Profiler=cp;H.PureComponent=Ys;H.StrictMode=up;H.Suspense=hp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp;H.act=Ru;H.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Eu({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Pu.call(t,u)&&!Tu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Rn,type:e.type,key:i,ref:s,props:n,_owner:a}};H.createContext=function(e){return e={$$typeof:pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dp,_context:e},e.Consumer=e};H.createElement=Au;H.createFactory=function(e){var t=Au.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:fp,render:e}};H.isValidElement=Zs;H.lazy=function(e){return{$$typeof:gp,_payload:{_status:-1,_result:e},_init:kp}};H.memo=function(e,t){return{$$typeof:mp,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ii.transition;ii.transition={};try{e()}finally{ii.transition=t}};H.unstable_act=Ru;H.useCallback=function(e,t){return Te.current.useCallback(e,t)};H.useContext=function(e){return Te.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};H.useEffect=function(e,t){return Te.current.useEffect(e,t)};H.useId=function(){return Te.current.useId()};H.useImperativeHandle=function(e,t,r){return Te.current.useImperativeHandle(e,t,r)};H.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Te.current.useMemo(e,t)};H.useReducer=function(e,t,r){return Te.current.useReducer(e,t,r)};H.useRef=function(e){return Te.current.useRef(e)};H.useState=function(e){return Te.current.useState(e)};H.useSyncExternalStore=function(e,t,r){return Te.current.useSyncExternalStore(e,t,r)};H.useTransition=function(){return Te.current.useTransition()};H.version="18.3.1";Cu.exports=H;var z=Cu.exports;const Mu=sp(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=z,Sp=Symbol.for("react.element"),bp=Symbol.for("react.fragment"),Cp=Object.prototype.hasOwnProperty,Np=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ep={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,t,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Cp.call(t,n)&&!Ep.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Sp,type:e,key:s,ref:a,props:i,_owner:Np.current}}Yi.Fragment=bp;Yi.jsx=Lu;Yi.jsxs=Lu;bu.exports=Yi;var o=bu.exports,Ho={},Ou={exports:{}},Ve={},Iu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var V=A.length;A.push($);e:for(;0<V;){var Y=V-1>>>1,J=A[Y];if(0<i(J,$))A[Y]=$,A[V]=J,V=Y;else break e}}function r(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var $=A[0],V=A.pop();if(V!==$){A[0]=V;e:for(var Y=0,J=A.length,qe=J>>>1;Y<qe;){var _e=2*(Y+1)-1,We=A[_e],we=_e+1,ve=A[we];if(0>i(We,V))we<J&&0>i(ve,We)?(A[Y]=ve,A[we]=V,Y=we):(A[Y]=We,A[_e]=V,Y=_e);else if(we<J&&0>i(ve,V))A[Y]=ve,A[we]=V,Y=we;else break e}}return $}function i(A,$){var V=A.sortIndex-$.sortIndex;return V!==0?V:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],k=1,v=null,h=3,y=!1,g=!1,j=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var $=r(c);$!==null;){if($.callback===null)n(c);else if($.startTime<=A)n(c),$.sortIndex=$.expirationTime,t(u,$);else break;$=r(c)}}function w(A){if(j=!1,f(A),!g)if(r(u)!==null)g=!0,De(E);else{var $=r(c);$!==null&&Ee(w,$.startTime-A)}}function E(A,$){g=!1,j&&(j=!1,p(P),P=-1),y=!0;var V=h;try{for(f($),v=r(u);v!==null&&(!(v.expirationTime>$)||A&&!m());){var Y=v.callback;if(typeof Y=="function"){v.callback=null,h=v.priorityLevel;var J=Y(v.expirationTime<=$);$=e.unstable_now(),typeof J=="function"?v.callback=J:v===r(u)&&n(u),f($)}else n(u);v=r(u)}if(v!==null)var qe=!0;else{var _e=r(c);_e!==null&&Ee(w,_e.startTime-$),qe=!1}return qe}finally{v=null,h=V,y=!1}}var _=!1,T=null,P=-1,F=5,B=-1;function m(){return!(e.unstable_now()-B<F)}function I(){if(T!==null){var A=e.unstable_now();B=A;var $=!0;try{$=T(!0,A)}finally{$?Q():(_=!1,T=null)}}else _=!1}var Q;if(typeof d=="function")Q=function(){d(I)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,ge=D.port2;D.port1.onmessage=I,Q=function(){ge.postMessage(null)}}else Q=function(){N(I,0)};function De(A){T=A,_||(_=!0,Q())}function Ee(A,$){P=N(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,De(E))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var V=h;h=$;try{return A()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=h;h=A;try{return $()}finally{h=V}},e.unstable_scheduleCallback=function(A,$,V){var Y=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=V+J,A={id:k++,callback:$,priorityLevel:A,startTime:V,expirationTime:J,sortIndex:-1},V>Y?(A.sortIndex=V,t(c,A),r(u)===null&&A===r(c)&&(j?(p(P),P=-1):j=!0,Ee(w,V-Y))):(A.sortIndex=J,t(u,A),g||y||(g=!0,De(E))),A},e.unstable_shouldYield=m,e.unstable_wrapCallback=function(A){var $=h;return function(){var V=h;h=$;try{return A.apply(this,arguments)}finally{h=V}}}})(Du);Iu.exports=Du;var _p=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=z,Ue=_p;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,mn={};function lr(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(mn[e]=t,e=0;e<t.length;e++)qu.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=Object.prototype.hasOwnProperty,Pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rl={},nl={};function Tp(e){return Wo.call(nl,e)?!0:Wo.call(rl,e)?!1:Pp.test(e)?nl[e]=!0:(rl[e]=!0,!1)}function Ap(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rp(e,t,r,n){if(t===null||typeof t>"u"||Ap(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,r,n,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ea=/[\-:]([a-z])/g;function ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ea,ta);ke[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ea,ta);ke[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ea,ta);ke[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ra(e,t,r,n){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rp(t,r,i,n)&&(r=null),n||i===null?Tp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Et=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qn=Symbol.for("react.element"),pr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),na=Symbol.for("react.strict_mode"),Qo=Symbol.for("react.profiler"),Fu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),ia=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),$u=Symbol.for("react.offscreen"),il=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=il&&e[il]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,vo;function en(e){if(vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||""}return`
`+vo+e}var yo=!1;function xo(e,t){if(!e||yo)return"";yo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{yo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function Mp(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case pr:return"Portal";case Qo:return"Profiler";case na:return"StrictMode";case Ko:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bu:return(e.displayName||"Context")+".Consumer";case Fu:return(e._context.displayName||"Context")+".Provider";case ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oa:return t=e.displayName||null,t!==null?t:Yo(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Yo(e(t))}catch{}}return null}function Lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yo(t);case 8:return t===na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e){var t=Uu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=Op(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Uu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Go(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ol(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ht(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hu(e,t){t=t.checked,t!=null&&ra(e,"checked",t,!1)}function Jo(e,t){Hu(e,t);var r=Ht(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zo(e,t,r){(t!=="number"||wi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var tn=Array.isArray;function br(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ht(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(b(92));if(tn(r)){if(1<r.length)throw Error(b(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ht(r)}}function Wu(e,t){var r=Ht(t.value),n=Ht(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ll(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bn,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bn=Bn||document.createElement("div"),Bn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ip=["Webkit","ms","Moz","O"];Object.keys(sn).forEach(function(e){Ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sn[t]=sn[e]})});function Xu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||sn.hasOwnProperty(e)&&sn[e]?(""+t).trim():t+"px"}function Yu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Xu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Dp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Dp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,Cr=null,Nr=null;function ul(e){if(e=On(e)){if(typeof os!="function")throw Error(b(280));var t=e.stateNode;t&&(t=to(t),os(e.stateNode,e.type,t))}}function Gu(e){Cr?Nr?Nr.push(e):Nr=[e]:Cr=e}function Ju(){if(Cr){var e=Cr,t=Nr;if(Nr=Cr=null,ul(e),t)for(e=0;e<t.length;e++)ul(t[e])}}function Zu(e,t){return e(t)}function ec(){}var ko=!1;function tc(e,t,r){if(ko)return e(t,r);ko=!0;try{return Zu(e,t,r)}finally{ko=!1,(Cr!==null||Nr!==null)&&(ec(),Ju())}}function vn(e,t){var r=e.stateNode;if(r===null)return null;var n=to(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(b(231,t,typeof r));return r}var ss=!1;if(St)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{ss=!1}function qp(e,t,r,n,i,s,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(k){this.onError(k)}}var an=!1,ji=null,Si=!1,as=null,Fp={onError:function(e){an=!0,ji=e}};function Bp(e,t,r,n,i,s,a,l,u){an=!1,ji=null,qp.apply(Fp,arguments)}function $p(e,t,r,n,i,s,a,l,u){if(Bp.apply(this,arguments),an){if(an){var c=ji;an=!1,ji=null}else throw Error(b(198));Si||(Si=!0,as=c)}}function ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cl(e){if(ur(e)!==e)throw Error(b(188))}function Up(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(b(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return cl(i),e;if(s===n)return cl(i),t;s=s.sibling}throw Error(b(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=s;break}if(l===n){a=!0,n=i,r=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===r){a=!0,r=s,n=i;break}if(l===n){a=!0,n=s,r=i;break}l=l.sibling}if(!a)throw Error(b(189))}}if(r.alternate!==n)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?e:t}function nc(e){return e=Up(e),e!==null?ic(e):null}function ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ic(e);if(t!==null)return t;e=e.sibling}return null}var oc=Ue.unstable_scheduleCallback,dl=Ue.unstable_cancelCallback,Vp=Ue.unstable_shouldYield,Hp=Ue.unstable_requestPaint,ue=Ue.unstable_now,Wp=Ue.unstable_getCurrentPriorityLevel,aa=Ue.unstable_ImmediatePriority,sc=Ue.unstable_UserBlockingPriority,bi=Ue.unstable_NormalPriority,Qp=Ue.unstable_LowPriority,ac=Ue.unstable_IdlePriority,Gi=null,pt=null;function Kp(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Gp,Xp=Math.log,Yp=Math.LN2;function Gp(e){return e>>>=0,e===0?32:31-(Xp(e)/Yp|0)|0}var $n=64,Un=4194304;function rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=rn(l):(s&=a,s!==0&&(n=rn(s)))}else a=r&~i,a!==0?n=rn(a):s!==0&&(n=rn(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-st(t),i=1<<r,n|=e[r],t&=~i;return n}function Jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-st(s),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Jp(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=$n;return $n<<=1,!($n&4194240)&&($n=64),e}function wo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Mn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=r}function ef(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-st(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function la(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-st(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var G=0;function uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cc,ua,dc,pc,fc,us=!1,Vn=[],Ot=null,It=null,Dt=null,yn=new Map,xn=new Map,At=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pl(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Qr(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=On(t),t!==null&&ua(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rf(e,t,r,n,i){switch(t){case"focusin":return Ot=Qr(Ot,e,t,r,n,i),!0;case"dragenter":return It=Qr(It,e,t,r,n,i),!0;case"mouseover":return Dt=Qr(Dt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return yn.set(s,Qr(yn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,xn.set(s,Qr(xn.get(s)||null,e,t,r,n,i)),!0}return!1}function hc(e){var t=Jt(e.target);if(t!==null){var r=ur(t);if(r!==null){if(t=r.tag,t===13){if(t=rc(r),t!==null){e.blockedOn=t,fc(e.priority,function(){dc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);is=n,r.target.dispatchEvent(n),is=null}else return t=On(r),t!==null&&ua(t),e.blockedOn=r,!1;t.shift()}return!0}function fl(e,t,r){oi(e)&&r.delete(t)}function nf(){us=!1,Ot!==null&&oi(Ot)&&(Ot=null),It!==null&&oi(It)&&(It=null),Dt!==null&&oi(Dt)&&(Dt=null),yn.forEach(fl),xn.forEach(fl)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,nf)))}function kn(e){function t(i){return Kr(i,e)}if(0<Vn.length){Kr(Vn[0],e);for(var r=1;r<Vn.length;r++){var n=Vn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Ot!==null&&Kr(Ot,e),It!==null&&Kr(It,e),Dt!==null&&Kr(Dt,e),yn.forEach(t),xn.forEach(t),r=0;r<At.length;r++)n=At[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<At.length&&(r=At[0],r.blockedOn===null);)hc(r),r.blockedOn===null&&At.shift()}var Er=Et.ReactCurrentBatchConfig,Ni=!0;function of(e,t,r,n){var i=G,s=Er.transition;Er.transition=null;try{G=1,ca(e,t,r,n)}finally{G=i,Er.transition=s}}function sf(e,t,r,n){var i=G,s=Er.transition;Er.transition=null;try{G=4,ca(e,t,r,n)}finally{G=i,Er.transition=s}}function ca(e,t,r,n){if(Ni){var i=cs(e,t,r,n);if(i===null)To(e,t,n,Ei,r),pl(e,n);else if(rf(i,e,t,r,n))n.stopPropagation();else if(pl(e,n),t&4&&-1<tf.indexOf(e)){for(;i!==null;){var s=On(i);if(s!==null&&cc(s),s=cs(e,t,r,n),s===null&&To(e,t,n,Ei,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else To(e,t,n,null,r)}}var Ei=null;function cs(e,t,r,n){if(Ei=null,e=sa(n),e=Jt(e),e!==null)if(t=ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=rc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ei=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case aa:return 1;case sc:return 4;case bi:case Qp:return 16;case ac:return 536870912;default:return 16}default:return 16}}var Mt=null,da=null,si=null;function gc(){if(si)return si;var e,t=da,r=t.length,n,i="value"in Mt?Mt.value:Mt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[s-n];n++);return si=i.slice(e,1<n?1-n:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function hl(){return!1}function He(e){function t(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hn:hl,this.isPropagationStopped=hl,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=He(Br),Ln=se({},Br,{view:0,detail:0}),af=He(Ln),jo,So,Xr,Ji=se({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(jo=e.screenX-Xr.screenX,So=e.screenY-Xr.screenY):So=jo=0,Xr=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:So}}),ml=He(Ji),lf=se({},Ji,{dataTransfer:0}),uf=He(lf),cf=se({},Ln,{relatedTarget:0}),bo=He(cf),df=se({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=He(df),ff=se({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hf=He(ff),mf=se({},Br,{data:0}),gl=He(mf),gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yf[e])?!!t[e]:!1}function fa(){return xf}var kf=se({},Ln,{key:function(e){if(e.key){var t=gf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wf=He(kf),jf=se({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=He(jf),Sf=se({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),bf=He(Sf),Cf=se({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=He(Cf),Ef=se({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_f=He(Ef),zf=[9,13,27,32],ha=St&&"CompositionEvent"in window,ln=null;St&&"documentMode"in document&&(ln=document.documentMode);var Pf=St&&"TextEvent"in window&&!ln,vc=St&&(!ha||ln&&8<ln&&11>=ln),yl=" ",xl=!1;function yc(e,t){switch(e){case"keyup":return zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Tf(e,t){switch(e){case"compositionend":return xc(t);case"keypress":return t.which!==32?null:(xl=!0,yl);case"textInput":return e=t.data,e===yl&&xl?null:e;default:return null}}function Af(e,t){if(hr)return e==="compositionend"||!ha&&yc(e,t)?(e=gc(),si=da=Mt=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var Rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rf[e.type]:t==="textarea"}function kc(e,t,r,n){Gu(n),t=_i(t,"onChange"),0<t.length&&(r=new pa("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var un=null,wn=null;function Mf(e){Tc(e,0)}function Zi(e){var t=vr(e);if(Vu(t))return e}function Lf(e,t){if(e==="change")return t}var wc=!1;if(St){var Co;if(St){var No="oninput"in document;if(!No){var wl=document.createElement("div");wl.setAttribute("oninput","return;"),No=typeof wl.oninput=="function"}Co=No}else Co=!1;wc=Co&&(!document.documentMode||9<document.documentMode)}function jl(){un&&(un.detachEvent("onpropertychange",jc),wn=un=null)}function jc(e){if(e.propertyName==="value"&&Zi(wn)){var t=[];kc(t,wn,e,sa(e)),tc(Mf,t)}}function Of(e,t,r){e==="focusin"?(jl(),un=t,wn=r,un.attachEvent("onpropertychange",jc)):e==="focusout"&&jl()}function If(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(wn)}function Df(e,t){if(e==="click")return Zi(t)}function qf(e,t){if(e==="input"||e==="change")return Zi(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Ff;function jn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Wo.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bl(e,t){var r=Sl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sl(r)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=wi(e.document)}return t}function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bf(e){var t=bc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Sc(r.ownerDocument.documentElement,r)){if(n!==null&&ma(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=bl(r,s);var a=bl(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=St&&"documentMode"in document&&11>=document.documentMode,mr=null,ds=null,cn=null,ps=!1;function Cl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ps||mr==null||mr!==wi(n)||(n=mr,"selectionStart"in n&&ma(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cn&&jn(cn,n)||(cn=n,n=_i(ds,"onSelect"),0<n.length&&(t=new pa("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=mr)))}function Wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},Eo={},Cc={};St&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function eo(e){if(Eo[e])return Eo[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cc)return Eo[e]=t[r];return e}var Nc=eo("animationend"),Ec=eo("animationiteration"),_c=eo("animationstart"),zc=eo("transitionend"),Pc=new Map,Nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Pc.set(e,t),lr(t,[e])}for(var _o=0;_o<Nl.length;_o++){var zo=Nl[_o],Uf=zo.toLowerCase(),Vf=zo[0].toUpperCase()+zo.slice(1);Qt(Uf,"on"+Vf)}Qt(Nc,"onAnimationEnd");Qt(Ec,"onAnimationIteration");Qt(_c,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(zc,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(nn));function El(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,$p(n,t,void 0,e),e.currentTarget=null}function Tc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;El(i,l,c),s=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;El(i,l,c),s=u}}}if(Si)throw e=as,Si=!1,as=null,e}function te(e,t){var r=t[vs];r===void 0&&(r=t[vs]=new Set);var n=e+"__bubble";r.has(n)||(Ac(t,e,2,!1),r.add(n))}function Po(e,t,r){var n=0;t&&(n|=4),Ac(r,e,n,t)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function Sn(e){if(!e[Qn]){e[Qn]=!0,qu.forEach(function(r){r!=="selectionchange"&&(Hf.has(r)||Po(r,!1,e),Po(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qn]||(t[Qn]=!0,Po("selectionchange",!1,t))}}function Ac(e,t,r,n){switch(mc(t)){case 1:var i=of;break;case 4:i=sf;break;default:i=ca}r=i.bind(null,t,r,e),i=void 0,!ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function To(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Jt(l),a===null)return;if(u=a.tag,u===5||u===6){n=s=a;continue e}l=l.parentNode}}n=n.return}tc(function(){var c=s,k=sa(r),v=[];e:{var h=Pc.get(e);if(h!==void 0){var y=pa,g=e;switch(e){case"keypress":if(ai(r)===0)break e;case"keydown":case"keyup":y=wf;break;case"focusin":g="focus",y=bo;break;case"focusout":g="blur",y=bo;break;case"beforeblur":case"afterblur":y=bo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=bf;break;case Nc:case Ec:case _c:y=pf;break;case zc:y=Nf;break;case"scroll":y=af;break;case"wheel":y=_f;break;case"copy":case"cut":case"paste":y=hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vl}var j=(t&4)!==0,N=!j&&e==="scroll",p=j?h!==null?h+"Capture":null:h;j=[];for(var d=c,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=vn(d,p),w!=null&&j.push(bn(d,w,f)))),N)break;d=d.return}0<j.length&&(h=new y(h,g,null,r,k),v.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==is&&(g=r.relatedTarget||r.fromElement)&&(Jt(g)||g[bt]))break e;if((y||h)&&(h=k.window===k?k:(h=k.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=r.relatedTarget||r.toElement,y=c,g=g?Jt(g):null,g!==null&&(N=ur(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=c),y!==g)){if(j=ml,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=vl,w="onPointerLeave",p="onPointerEnter",d="pointer"),N=y==null?h:vr(y),f=g==null?h:vr(g),h=new j(w,d+"leave",y,r,k),h.target=N,h.relatedTarget=f,w=null,Jt(k)===c&&(j=new j(p,d+"enter",g,r,k),j.target=f,j.relatedTarget=N,w=j),N=w,y&&g)t:{for(j=y,p=g,d=0,f=j;f;f=cr(f))d++;for(f=0,w=p;w;w=cr(w))f++;for(;0<d-f;)j=cr(j),d--;for(;0<f-d;)p=cr(p),f--;for(;d--;){if(j===p||p!==null&&j===p.alternate)break t;j=cr(j),p=cr(p)}j=null}else j=null;y!==null&&_l(v,h,y,j,!1),g!==null&&N!==null&&_l(v,N,g,j,!0)}}e:{if(h=c?vr(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=Lf;else if(kl(h))if(wc)E=qf;else{E=If;var _=Of}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Df);if(E&&(E=E(e,c))){kc(v,E,r,k);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&Zo(h,"number",h.value)}switch(_=c?vr(c):window,e){case"focusin":(kl(_)||_.contentEditable==="true")&&(mr=_,ds=c,cn=null);break;case"focusout":cn=ds=mr=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,Cl(v,r,k);break;case"selectionchange":if($f)break;case"keydown":case"keyup":Cl(v,r,k)}var T;if(ha)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else hr?yc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(vc&&r.locale!=="ko"&&(hr||P!=="onCompositionStart"?P==="onCompositionEnd"&&hr&&(T=gc()):(Mt=k,da="value"in Mt?Mt.value:Mt.textContent,hr=!0)),_=_i(c,P),0<_.length&&(P=new gl(P,e,null,r,k),v.push({event:P,listeners:_}),T?P.data=T:(T=xc(r),T!==null&&(P.data=T)))),(T=Pf?Tf(e,r):Af(e,r))&&(c=_i(c,"onBeforeInput"),0<c.length&&(k=new gl("onBeforeInput","beforeinput",null,r,k),v.push({event:k,listeners:c}),k.data=T))}Tc(v,t)})}function bn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function _i(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vn(e,r),s!=null&&n.unshift(bn(e,s,i)),s=vn(e,t),s!=null&&n.push(bn(e,s,i))),e=e.return}return n}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _l(e,t,r,n,i){for(var s=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=vn(r,s),u!=null&&a.unshift(bn(r,u,l))):i||(u=vn(r,s),u!=null&&a.push(bn(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Wf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function zl(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Qf,"")}function Kn(e,t,r){if(t=zl(t),zl(e)!==t&&r)throw Error(b(425))}function zi(){}var fs=null,hs=null;function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=typeof setTimeout=="function"?setTimeout:void 0,Kf=typeof clearTimeout=="function"?clearTimeout:void 0,Pl=typeof Promise=="function"?Promise:void 0,Xf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pl<"u"?function(e){return Pl.resolve(null).then(e).catch(Yf)}:gs;function Yf(e){setTimeout(function(){throw e})}function Ao(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),kn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);kn(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),dt="__reactFiber$"+$r,Cn="__reactProps$"+$r,bt="__reactContainer$"+$r,vs="__reactEvents$"+$r,Gf="__reactListeners$"+$r,Jf="__reactHandles$"+$r;function Jt(e){var t=e[dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[bt]||r[dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Tl(e);e!==null;){if(r=e[dt])return r;e=Tl(e)}return t}e=r,r=e.parentNode}return null}function On(e){return e=e[dt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function to(e){return e[Cn]||null}var ys=[],yr=-1;function Kt(e){return{current:e}}function re(e){0>yr||(e.current=ys[yr],ys[yr]=null,yr--)}function ee(e,t){yr++,ys[yr]=e.current,e.current=t}var Wt={},Ne=Kt(Wt),Le=Kt(!1),nr=Wt;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Wt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function Pi(){re(Le),re(Ne)}function Al(e,t,r){if(Ne.current!==Wt)throw Error(b(168));ee(Ne,t),ee(Le,r)}function Rc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(b(108,Lp(e)||"Unknown",i));return se({},r,n)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,nr=Ne.current,ee(Ne,e),ee(Le,Le.current),!0}function Rl(e,t,r){var n=e.stateNode;if(!n)throw Error(b(169));r?(e=Rc(e,t,nr),n.__reactInternalMemoizedMergedChildContext=e,re(Le),re(Ne),ee(Ne,e)):re(Le),ee(Le,r)}var yt=null,ro=!1,Ro=!1;function Mc(e){yt===null?yt=[e]:yt.push(e)}function Zf(e){ro=!0,Mc(e)}function Xt(){if(!Ro&&yt!==null){Ro=!0;var e=0,t=G;try{var r=yt;for(G=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}yt=null,ro=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),oc(aa,Xt),i}finally{G=t,Ro=!1}}return null}var xr=[],kr=0,Ai=null,Ri=0,Qe=[],Ke=0,ir=null,kt=1,wt="";function Yt(e,t){xr[kr++]=Ri,xr[kr++]=Ai,Ai=e,Ri=t}function Lc(e,t,r){Qe[Ke++]=kt,Qe[Ke++]=wt,Qe[Ke++]=ir,ir=e;var n=kt;e=wt;var i=32-st(n)-1;n&=~(1<<i),r+=1;var s=32-st(t)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,kt=1<<32-st(t)+i|r<<i|n,wt=s+e}else kt=1<<s|r<<i|n,wt=e}function ga(e){e.return!==null&&(Yt(e,1),Lc(e,1,0))}function va(e){for(;e===Ai;)Ai=xr[--kr],xr[kr]=null,Ri=xr[--kr],xr[kr]=null;for(;e===ir;)ir=Qe[--Ke],Qe[Ke]=null,wt=Qe[--Ke],Qe[Ke]=null,kt=Qe[--Ke],Qe[Ke]=null}var $e=null,Be=null,ne=!1,ot=null;function Oc(e,t){var r=Ye(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ml(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Be=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ir!==null?{id:kt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ye(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$e=e,Be=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(ne){var t=Be;if(t){var r=t;if(!Ml(e,t)){if(xs(e))throw Error(b(418));t=qt(r.nextSibling);var n=$e;t&&Ml(e,t)?Oc(n,r):(e.flags=e.flags&-4097|2,ne=!1,$e=e)}}else{if(xs(e))throw Error(b(418));e.flags=e.flags&-4097|2,ne=!1,$e=e}}}function Ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Xn(e){if(e!==$e)return!1;if(!ne)return Ll(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ms(e.type,e.memoizedProps)),t&&(t=Be)){if(xs(e))throw Ic(),Error(b(418));for(;t;)Oc(e,t),t=qt(t.nextSibling)}if(Ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Be=qt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=$e?qt(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=Be;e;)e=qt(e.nextSibling)}function Rr(){Be=$e=null,ne=!1}function ya(e){ot===null?ot=[e]:ot.push(e)}var eh=Et.ReactCurrentBatchConfig;function Yr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var n=r.stateNode}if(!n)throw Error(b(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,e))}return e}function Yn(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ol(e){var t=e._init;return t(e._payload)}function Dc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function s(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,w){return d===null||d.tag!==6?(d=Fo(f,p.mode,w),d.return=p,d):(d=i(d,f),d.return=p,d)}function u(p,d,f,w){var E=f.type;return E===fr?k(p,d,f.props.children,w,f.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&Ol(E)===d.type)?(w=i(d,f.props),w.ref=Yr(p,d,f),w.return=p,w):(w=hi(f.type,f.key,f.props,null,p.mode,w),w.ref=Yr(p,d,f),w.return=p,w)}function c(p,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Bo(f,p.mode,w),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function k(p,d,f,w,E){return d===null||d.tag!==7?(d=rr(f,p.mode,w,E),d.return=p,d):(d=i(d,f),d.return=p,d)}function v(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fo(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case qn:return f=hi(d.type,d.key,d.props,null,p.mode,f),f.ref=Yr(p,null,d),f.return=p,f;case pr:return d=Bo(d,p.mode,f),d.return=p,d;case Pt:var w=d._init;return v(p,w(d._payload),f)}if(tn(d)||Hr(d))return d=rr(d,p.mode,f,null),d.return=p,d;Yn(p,d)}return null}function h(p,d,f,w){var E=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:l(p,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qn:return f.key===E?u(p,d,f,w):null;case pr:return f.key===E?c(p,d,f,w):null;case Pt:return E=f._init,h(p,d,E(f._payload),w)}if(tn(f)||Hr(f))return E!==null?null:k(p,d,f,w,null);Yn(p,f)}return null}function y(p,d,f,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,l(d,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qn:return p=p.get(w.key===null?f:w.key)||null,u(d,p,w,E);case pr:return p=p.get(w.key===null?f:w.key)||null,c(d,p,w,E);case Pt:var _=w._init;return y(p,d,f,_(w._payload),E)}if(tn(w)||Hr(w))return p=p.get(f)||null,k(d,p,w,E,null);Yn(d,w)}return null}function g(p,d,f,w){for(var E=null,_=null,T=d,P=d=0,F=null;T!==null&&P<f.length;P++){T.index>P?(F=T,T=null):F=T.sibling;var B=h(p,T,f[P],w);if(B===null){T===null&&(T=F);break}e&&T&&B.alternate===null&&t(p,T),d=s(B,d,P),_===null?E=B:_.sibling=B,_=B,T=F}if(P===f.length)return r(p,T),ne&&Yt(p,P),E;if(T===null){for(;P<f.length;P++)T=v(p,f[P],w),T!==null&&(d=s(T,d,P),_===null?E=T:_.sibling=T,_=T);return ne&&Yt(p,P),E}for(T=n(p,T);P<f.length;P++)F=y(T,p,P,f[P],w),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?P:F.key),d=s(F,d,P),_===null?E=F:_.sibling=F,_=F);return e&&T.forEach(function(m){return t(p,m)}),ne&&Yt(p,P),E}function j(p,d,f,w){var E=Hr(f);if(typeof E!="function")throw Error(b(150));if(f=E.call(f),f==null)throw Error(b(151));for(var _=E=null,T=d,P=d=0,F=null,B=f.next();T!==null&&!B.done;P++,B=f.next()){T.index>P?(F=T,T=null):F=T.sibling;var m=h(p,T,B.value,w);if(m===null){T===null&&(T=F);break}e&&T&&m.alternate===null&&t(p,T),d=s(m,d,P),_===null?E=m:_.sibling=m,_=m,T=F}if(B.done)return r(p,T),ne&&Yt(p,P),E;if(T===null){for(;!B.done;P++,B=f.next())B=v(p,B.value,w),B!==null&&(d=s(B,d,P),_===null?E=B:_.sibling=B,_=B);return ne&&Yt(p,P),E}for(T=n(p,T);!B.done;P++,B=f.next())B=y(T,p,P,B.value,w),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?P:B.key),d=s(B,d,P),_===null?E=B:_.sibling=B,_=B);return e&&T.forEach(function(I){return t(p,I)}),ne&&Yt(p,P),E}function N(p,d,f,w){if(typeof f=="object"&&f!==null&&f.type===fr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case qn:e:{for(var E=f.key,_=d;_!==null;){if(_.key===E){if(E=f.type,E===fr){if(_.tag===7){r(p,_.sibling),d=i(_,f.props.children),d.return=p,p=d;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&Ol(E)===_.type){r(p,_.sibling),d=i(_,f.props),d.ref=Yr(p,_,f),d.return=p,p=d;break e}r(p,_);break}else t(p,_);_=_.sibling}f.type===fr?(d=rr(f.props.children,p.mode,w,f.key),d.return=p,p=d):(w=hi(f.type,f.key,f.props,null,p.mode,w),w.ref=Yr(p,d,f),w.return=p,p=w)}return a(p);case pr:e:{for(_=f.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){r(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Bo(f,p.mode,w),d.return=p,p=d}return a(p);case Pt:return _=f._init,N(p,d,_(f._payload),w)}if(tn(f))return g(p,d,f,w);if(Hr(f))return j(p,d,f,w);Yn(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,f),d.return=p,p=d):(r(p,d),d=Fo(f,p.mode,w),d.return=p,p=d),a(p)):r(p,d)}return N}var Mr=Dc(!0),qc=Dc(!1),Mi=Kt(null),Li=null,wr=null,xa=null;function ka(){xa=wr=Li=null}function wa(e){var t=Mi.current;re(Mi),e._currentValue=t}function ws(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _r(e,t){Li=e,xa=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(Li===null)throw Error(b(308));wr=e,Li.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Zt=null;function ja(e){Zt===null?Zt=[e]:Zt.push(e)}function Fc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ja(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ct(e,n)}function Ct(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tt=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ct(e,r)}return i=n.interleaved,i===null?(t.next=t,ja(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ct(e,r)}function li(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,la(e,r)}}function Il(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Oi(e,t,r,n){var i=e.updateQueue;Tt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var k=e.alternate;k!==null&&(k=k.updateQueue,l=k.lastBaseUpdate,l!==a&&(l===null?k.firstBaseUpdate=c:l.next=c,k.lastBaseUpdate=u))}if(s!==null){var v=i.baseState;a=0,k=c=u=null,l=s;do{var h=l.lane,y=l.eventTime;if((n&h)===h){k!==null&&(k=k.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,j=l;switch(h=t,y=r,j.tag){case 1:if(g=j.payload,typeof g=="function"){v=g.call(y,v,h);break e}v=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=j.payload,h=typeof g=="function"?g.call(y,v,h):g,h==null)break e;v=se({},v,h);break e;case 2:Tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},k===null?(c=k=y,u=v):k=k.next=y,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(k===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);sr|=a,e.lanes=a,e.memoizedState=v}}function Dl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(b(191,i));i.call(n)}}}var In={},ft=Kt(In),Nn=Kt(In),En=Kt(In);function er(e){if(e===In)throw Error(b(174));return e}function ba(e,t){switch(ee(En,t),ee(Nn,e),ee(ft,In),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}re(ft),ee(ft,t)}function Lr(){re(ft),re(Nn),re(En)}function $c(e){er(En.current);var t=er(ft.current),r=ts(t,e.type);t!==r&&(ee(Nn,e),ee(ft,r))}function Ca(e){Nn.current===e&&(re(ft),re(Nn))}var ie=Kt(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function Na(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var ui=Et.ReactCurrentDispatcher,Lo=Et.ReactCurrentBatchConfig,or=0,oe=null,pe=null,he=null,Di=!1,dn=!1,_n=0,th=0;function Se(){throw Error(b(321))}function Ea(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!lt(e[r],t[r]))return!1;return!0}function _a(e,t,r,n,i,s){if(or=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?oh:sh,e=r(n,i),dn){s=0;do{if(dn=!1,_n=0,25<=s)throw Error(b(301));s+=1,he=pe=null,t.updateQueue=null,ui.current=ah,e=r(n,i)}while(dn)}if(ui.current=qi,t=pe!==null&&pe.next!==null,or=0,he=pe=oe=null,Di=!1,t)throw Error(b(300));return e}function za(){var e=_n!==0;return _n=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function Ze(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=he===null?oe.memoizedState:he.next;if(t!==null)he=t,pe=e;else{if(e===null)throw Error(b(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function zn(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=Ze(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=pe,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=a=null,u=null,c=s;do{var k=c.lane;if((or&k)===k)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var v={lane:k,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=v,a=n):u=u.next=v,oe.lanes|=k,sr|=k}c=c.next}while(c!==null&&c!==s);u===null?a=n:u.next=l,lt(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,sr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Io(e){var t=Ze(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);lt(s,t.memoizedState)||(Me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Uc(){}function Vc(e,t){var r=oe,n=Ze(),i=t(),s=!lt(n.memoizedState,i);if(s&&(n.memoizedState=i,Me=!0),n=n.queue,Pa(Qc.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||he!==null&&he.memoizedState.tag&1){if(r.flags|=2048,Pn(9,Wc.bind(null,r,n,i,t),void 0,null),me===null)throw Error(b(349));or&30||Hc(r,t,i)}return i}function Hc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Wc(e,t,r,n){t.value=r,t.getSnapshot=n,Kc(t)&&Xc(e)}function Qc(e,t,r){return r(function(){Kc(t)&&Xc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!lt(e,r)}catch{return!0}}function Xc(e){var t=Ct(e,1);t!==null&&at(t,e,1,-1)}function ql(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t.queue=e,e=e.dispatch=ih.bind(null,oe,e),[t.memoizedState,e]}function Pn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Yc(){return Ze().memoizedState}function ci(e,t,r,n){var i=ct();oe.flags|=e,i.memoizedState=Pn(1|t,r,void 0,n===void 0?null:n)}function no(e,t,r,n){var i=Ze();n=n===void 0?null:n;var s=void 0;if(pe!==null){var a=pe.memoizedState;if(s=a.destroy,n!==null&&Ea(n,a.deps)){i.memoizedState=Pn(t,r,s,n);return}}oe.flags|=e,i.memoizedState=Pn(1|t,r,s,n)}function Fl(e,t){return ci(8390656,8,e,t)}function Pa(e,t){return no(2048,8,e,t)}function Gc(e,t){return no(4,2,e,t)}function Jc(e,t){return no(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,r){return r=r!=null?r.concat([e]):null,no(4,4,Zc.bind(null,t,e),r)}function Ta(){}function td(e,t){var r=Ze();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ea(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function rd(e,t){var r=Ze();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ea(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function nd(e,t,r){return or&21?(lt(r,t)||(r=lc(),oe.lanes|=r,sr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function rh(e,t){var r=G;G=r!==0&&4>r?r:4,e(!0);var n=Lo.transition;Lo.transition={};try{e(!1),t()}finally{G=r,Lo.transition=n}}function id(){return Ze().memoizedState}function nh(e,t,r){var n=$t(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},od(e))sd(t,r);else if(r=Fc(e,t,r,n),r!==null){var i=Pe();at(r,e,n,i),ad(r,t,n)}}function ih(e,t,r){var n=$t(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(od(e))sd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,r);if(i.hasEagerState=!0,i.eagerState=l,lt(l,a)){var u=t.interleaved;u===null?(i.next=i,ja(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=Fc(e,t,i,n),r!==null&&(i=Pe(),at(r,e,n,i),ad(r,t,n))}}function od(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function sd(e,t){dn=Di=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ad(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,la(e,r)}}var qi={readContext:Je,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},oh={readContext:Je,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Fl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ci(4194308,4,Zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var r=ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ct();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=nh.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:ql,useDebugValue:Ta,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=ql(!1),t=e[0];return e=rh.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oe,i=ct();if(ne){if(r===void 0)throw Error(b(407));r=r()}else{if(r=t(),me===null)throw Error(b(349));or&30||Hc(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Fl(Qc.bind(null,n,s,e),[e]),n.flags|=2048,Pn(9,Wc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=ct(),t=me.identifierPrefix;if(ne){var r=wt,n=kt;r=(n&~(1<<32-st(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=_n++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=th++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sh={readContext:Je,useCallback:td,useContext:Je,useEffect:Pa,useImperativeHandle:ed,useInsertionEffect:Gc,useLayoutEffect:Jc,useMemo:rd,useReducer:Oo,useRef:Yc,useState:function(){return Oo(zn)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ze();return nd(t,pe.memoizedState,e)},useTransition:function(){var e=Oo(zn)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1},ah={readContext:Je,useCallback:td,useContext:Je,useEffect:Pa,useImperativeHandle:ed,useInsertionEffect:Gc,useLayoutEffect:Jc,useMemo:rd,useReducer:Io,useRef:Yc,useState:function(){return Io(zn)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ze();return pe===null?t.memoizedState=e:nd(t,pe.memoizedState,e)},useTransition:function(){var e=Io(zn)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function js(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var io={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Pe(),i=$t(e),s=jt(n,i);s.payload=t,r!=null&&(s.callback=r),t=Ft(e,s,i),t!==null&&(at(t,e,i,n),li(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Pe(),i=$t(e),s=jt(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Ft(e,s,i),t!==null&&(at(t,e,i,n),li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Pe(),n=$t(e),i=jt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,n),t!==null&&(at(t,e,n,r),li(t,e,n))}};function Bl(e,t,r,n,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,a):t.prototype&&t.prototype.isPureReactComponent?!jn(r,n)||!jn(i,s):!0}function ld(e,t,r){var n=!1,i=Wt,s=t.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Oe(t)?nr:Ne.current,n=t.contextTypes,s=(n=n!=null)?Ar(e,i):Wt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function $l(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Ss(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Sa(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Oe(t)?nr:Ne.current,i.context=Ar(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(js(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&io.enqueueReplaceState(i,i.state,null),Oi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var r="",n=t;do r+=Mp(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Do(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lh=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,r){r=jt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Bi||(Bi=!0,Ms=n),bs(e,t)},r}function cd(e,t,r){r=jt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){bs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){bs(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Ul(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new lh;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=jh.bind(null,e,t,r),t.then(e,e))}function Vl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=jt(-1,1),t.tag=2,Ft(r,t,1))),r.lanes|=1),e)}var uh=Et.ReactCurrentOwner,Me=!1;function ze(e,t,r,n){t.child=e===null?qc(t,null,r,n):Mr(t,e.child,r,n)}function Wl(e,t,r,n,i){r=r.render;var s=t.ref;return _r(t,i),n=_a(e,t,r,n,s,i),r=za(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ne&&r&&ga(t),t.flags|=1,ze(e,t,n,i),t.child)}function Ql(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!qa(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,dd(e,t,s,n,i)):(e=hi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:jn,r(a,n)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Ut(s,n),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(jn(s,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Cs(e,t,r,n,i)}function pd(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Sr,Fe),Fe|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Sr,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ee(Sr,Fe),Fe|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ee(Sr,Fe),Fe|=n;return ze(e,t,i,r),t.child}function fd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,r,n,i){var s=Oe(r)?nr:Ne.current;return s=Ar(t,s),_r(t,i),r=_a(e,t,r,n,s,i),n=za(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ne&&n&&ga(t),t.flags|=1,ze(e,t,r,i),t.child)}function Kl(e,t,r,n,i){if(Oe(r)){var s=!0;Ti(t)}else s=!1;if(_r(t,i),t.stateNode===null)di(e,t),ld(t,r,n),Ss(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Je(c):(c=Oe(r)?nr:Ne.current,c=Ar(t,c));var k=r.getDerivedStateFromProps,v=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==c)&&$l(t,a,n,c),Tt=!1;var h=t.memoizedState;a.state=h,Oi(t,n,a,i),u=t.memoizedState,l!==n||h!==u||Le.current||Tt?(typeof k=="function"&&(js(t,r,k,n),u=t.memoizedState),(l=Tt||Bl(t,r,l,n,h,u,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Bc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:rt(t.type,l),a.props=c,v=t.pendingProps,h=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Je(u):(u=Oe(r)?nr:Ne.current,u=Ar(t,u));var y=r.getDerivedStateFromProps;(k=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||h!==u)&&$l(t,a,n,u),Tt=!1,h=t.memoizedState,a.state=h,Oi(t,n,a,i);var g=t.memoizedState;l!==v||h!==g||Le.current||Tt?(typeof y=="function"&&(js(t,r,y,n),g=t.memoizedState),(c=Tt||Bl(t,r,c,n,h,g,u)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),a.props=n,a.state=g,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Ns(e,t,r,n,s,i)}function Ns(e,t,r,n,i,s){fd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Rl(t,r,!1),Nt(e,t,s);n=t.stateNode,uh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Mr(t,e.child,null,s),t.child=Mr(t,null,l,s)):ze(e,t,l,s),t.memoizedState=n.state,i&&Rl(t,r,!0),t.child}function hd(e){var t=e.stateNode;t.pendingContext?Al(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Al(e,t.context,!1),ba(e,t.containerInfo)}function Xl(e,t,r,n,i){return Rr(),ya(i),t.flags|=256,ze(e,t,r,n),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function md(e,t,r){var n=t.pendingProps,i=ie.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,s?(n=t.mode,s=t.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ao(a,n,0,null),e=rr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=_s(r),t.memoizedState=Es,e):Aa(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ch(e,t,a,n,l,i,r);if(s){s=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Ut(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ut(l,s):(s=rr(s,a,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,a=e.child.memoizedState,a=a===null?_s(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,t.memoizedState=Es,n}return s=e.child,e=s.sibling,n=Ut(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Aa(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gn(e,t,r,n){return n!==null&&ya(n),Mr(t,e.child,null,r),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ch(e,t,r,n,i,s,a){if(r)return t.flags&256?(t.flags&=-257,n=Do(Error(b(422))),Gn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=ao({mode:"visible",children:n.children},i,0,null),s=rr(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Mr(t,e.child,null,a),t.child.memoizedState=_s(a),t.memoizedState=Es,s);if(!(t.mode&1))return Gn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(b(419)),n=Do(s,n,void 0),Gn(e,t,a,n)}if(l=(a&e.childLanes)!==0,Me||l){if(n=me,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(e,i),at(n,e,i,-1))}return Da(),n=Do(Error(b(421))),Gn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sh.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Be=qt(i.nextSibling),$e=t,ne=!0,ot=null,e!==null&&(Qe[Ke++]=kt,Qe[Ke++]=wt,Qe[Ke++]=ir,kt=e.id,wt=e.overflow,ir=t),t=Aa(t,n.children),t.flags|=4096,t)}function Yl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ws(e.return,t,r)}function qo(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function gd(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(ze(e,t,n.children,r),n=ie.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yl(e,r,t);else if(e.tag===19)Yl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ee(ie,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ii(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),qo(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}qo(t,!0,r,null,s);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,r=Ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function dh(e,t,r){switch(t.tag){case 3:hd(t),Rr();break;case 5:$c(t);break;case 1:Oe(t.type)&&Ti(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ee(Mi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):r&t.child.childLanes?md(e,t,r):(ee(ie,ie.current&1),e=Nt(e,t,r),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return gd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),n)break;return null;case 22:case 23:return t.lanes=0,pd(e,t,r)}return Nt(e,t,r)}var vd,zs,yd,xd;vd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};zs=function(){};yd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,er(ft.current);var s=null;switch(r){case"input":i=Go(e,i),n=Go(e,n),s=[];break;case"select":i=se({},i,{value:void 0}),n=se({},n,{value:void 0}),s=[];break;case"textarea":i=es(e,i),n=es(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=zi)}rs(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mn.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(s||(s=[]),s.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}r&&(s=s||[]).push("style",r);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};xd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Gr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ph(e,t,r){var n=t.pendingProps;switch(va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Oe(t.type)&&Pi(),be(t),null;case 3:return n=t.stateNode,Lr(),re(Le),re(Ne),Na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Is(ot),ot=null))),zs(e,t),be(t),null;case 5:Ca(t);var i=er(En.current);if(r=t.type,e!==null&&t.stateNode!=null)yd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(b(166));return be(t),null}if(e=er(ft.current),Xn(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[dt]=t,n[Cn]=s,e=(t.mode&1)!==0,r){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(i=0;i<nn.length;i++)te(nn[i],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":ol(n,s),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},te("invalid",n);break;case"textarea":al(n,s),te("invalid",n)}rs(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&Kn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Kn(n.textContent,l,e),i=["children",""+l]):mn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",n)}switch(r){case"input":Fn(n),sl(n,s,!0);break;case"textarea":Fn(n),ll(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=zi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[dt]=t,e[Cn]=n,vd(e,t,!1,!1),t.stateNode=e;e:{switch(a=ns(r,n),r){case"dialog":te("cancel",e),te("close",e),i=n;break;case"iframe":case"object":case"embed":te("load",e),i=n;break;case"video":case"audio":for(i=0;i<nn.length;i++)te(nn[i],e);i=n;break;case"source":te("error",e),i=n;break;case"img":case"image":case"link":te("error",e),te("load",e),i=n;break;case"details":te("toggle",e),i=n;break;case"input":ol(e,n),i=Go(e,n),te("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=se({},n,{value:void 0}),te("invalid",e);break;case"textarea":al(e,n),i=es(e,n),te("invalid",e);break;default:i=n}rs(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Yu(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ku(e,u)):s==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&gn(e,u):typeof u=="number"&&gn(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mn.hasOwnProperty(s)?u!=null&&s==="onScroll"&&te("scroll",e):u!=null&&ra(e,s,u,a))}switch(r){case"input":Fn(e),sl(e,n,!1);break;case"textarea":Fn(e),ll(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ht(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?br(e,!!n.multiple,s,!1):n.defaultValue!=null&&br(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)xd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(r=er(En.current),er(ft.current),Xn(t)){if(n=t.stateNode,r=t.memoizedProps,n[dt]=t,(s=n.nodeValue!==r)&&(e=$e,e!==null))switch(e.tag){case 3:Kn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kn(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[dt]=t,t.stateNode=n}return be(t),null;case 13:if(re(ie),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Be!==null&&t.mode&1&&!(t.flags&128))Ic(),Rr(),t.flags|=98560,s=!1;else if(s=Xn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[dt]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else ot!==null&&(Is(ot),ot=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?fe===0&&(fe=3):Da())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Lr(),zs(e,t),e===null&&Sn(t.stateNode.containerInfo),be(t),null;case 10:return wa(t.type._context),be(t),null;case 17:return Oe(t.type)&&Pi(),be(t),null;case 19:if(re(ie),s=t.memoizedState,s===null)return be(t),null;if(n=(t.flags&128)!==0,a=s.rendering,a===null)if(n)Gr(s,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ii(e),a!==null){for(t.flags|=128,Gr(s,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>Ir&&(t.flags|=128,n=!0,Gr(s,!1),t.lanes=4194304)}else{if(!n)if(e=Ii(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ne)return be(t),null}else 2*ue()-s.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,n=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(r=s.last,r!==null?r.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,r=ie.current,ee(ie,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Ia(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Fe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function fh(e,t){switch(va(t),t.tag){case 1:return Oe(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),re(Le),re(Ne),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ca(t),null;case 13:if(re(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ie),null;case 4:return Lr(),null;case 10:return wa(t.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var Jn=!1,Ce=!1,hh=typeof WeakSet=="function"?WeakSet:Set,M=null;function jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function Ps(e,t,r){try{r()}catch(n){le(e,t,n)}}var Gl=!1;function mh(e,t){if(fs=Ni,e=bc(),ma(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,k=0,v=e,h=null;t:for(;;){for(var y;v!==r||i!==0&&v.nodeType!==3||(l=a+i),v!==s||n!==0&&v.nodeType!==3||(u=a+n),v.nodeType===3&&(a+=v.nodeValue.length),(y=v.firstChild)!==null;)h=v,v=y;for(;;){if(v===e)break t;if(h===r&&++c===i&&(l=a),h===s&&++k===n&&(u=a),(y=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=y}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(hs={focusedElem:e,selectionRange:r},Ni=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var j=g.memoizedProps,N=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:rt(t.type,j),N);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return g=Gl,Gl=!1,g}function pn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ps(t,r,s)}i=i.next}while(i!==n)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ts(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Cn],delete t[vs],delete t[Gf],delete t[Jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function Jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=zi));else if(n!==4&&(e=e.child,e!==null))for(As(e,t,r),e=e.sibling;e!==null;)As(e,t,r),e=e.sibling}function Rs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Rs(e,t,r),e=e.sibling;e!==null;)Rs(e,t,r),e=e.sibling}var ye=null,nt=!1;function zt(e,t,r){for(r=r.child;r!==null;)jd(e,t,r),r=r.sibling}function jd(e,t,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Gi,r)}catch{}switch(r.tag){case 5:Ce||jr(r,t);case 6:var n=ye,i=nt;ye=null,zt(e,t,r),ye=n,nt=i,ye!==null&&(nt?(e=ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ye.removeChild(r.stateNode));break;case 18:ye!==null&&(nt?(e=ye,r=r.stateNode,e.nodeType===8?Ao(e.parentNode,r):e.nodeType===1&&Ao(e,r),kn(e)):Ao(ye,r.stateNode));break;case 4:n=ye,i=nt,ye=r.stateNode.containerInfo,nt=!0,zt(e,t,r),ye=n,nt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ps(r,t,a),i=i.next}while(i!==n)}zt(e,t,r);break;case 1:if(!Ce&&(jr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){le(r,t,l)}zt(e,t,r);break;case 21:zt(e,t,r);break;case 22:r.mode&1?(Ce=(n=Ce)||r.memoizedState!==null,zt(e,t,r),Ce=n):zt(e,t,r);break;default:zt(e,t,r)}}function Zl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new hh),t.forEach(function(n){var i=bh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function tt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,nt=!1;break e;case 3:ye=l.stateNode.containerInfo,nt=!0;break e;case 4:ye=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(ye===null)throw Error(b(160));jd(s,a,i),ye=null,nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}function Sd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ut(e),n&4){try{pn(3,e,e.return),oo(3,e)}catch(j){le(e,e.return,j)}try{pn(5,e,e.return)}catch(j){le(e,e.return,j)}}break;case 1:tt(t,e),ut(e),n&512&&r!==null&&jr(r,r.return);break;case 5:if(tt(t,e),ut(e),n&512&&r!==null&&jr(r,r.return),e.flags&32){var i=e.stateNode;try{gn(i,"")}catch(j){le(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hu(i,s),ns(l,a);var c=ns(l,s);for(a=0;a<u.length;a+=2){var k=u[a],v=u[a+1];k==="style"?Yu(i,v):k==="dangerouslySetInnerHTML"?Ku(i,v):k==="children"?gn(i,v):ra(i,k,v,c)}switch(l){case"input":Jo(i,s);break;case"textarea":Wu(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?br(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cn]=s}catch(j){le(e,e.return,j)}}break;case 6:if(tt(t,e),ut(e),n&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(j){le(e,e.return,j)}}break;case 3:if(tt(t,e),ut(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{kn(t.containerInfo)}catch(j){le(e,e.return,j)}break;case 4:tt(t,e),ut(e);break;case 13:tt(t,e),ut(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(La=ue())),n&4&&Zl(e);break;case 22:if(k=r!==null&&r.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||k,tt(t,e),Ce=c):tt(t,e),ut(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!k&&e.mode&1)for(M=e,k=e.child;k!==null;){for(v=M=k;M!==null;){switch(h=M,y=h.child,h.tag){case 0:case 11:case 14:case 15:pn(4,h,h.return);break;case 1:jr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(j){le(n,r,j)}}break;case 5:jr(h,h.return);break;case 22:if(h.memoizedState!==null){tu(v);continue}}y!==null?(y.return=h,M=y):tu(v)}k=k.sibling}e:for(k=null,v=e;;){if(v.tag===5){if(k===null){k=v;try{i=v.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xu("display",a))}catch(j){le(e,e.return,j)}}}else if(v.tag===6){if(k===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(j){le(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;k===v&&(k=null),v=v.return}k===v&&(k=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:tt(t,e),ut(e),n&4&&Zl(e);break;case 21:break;default:tt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wd(r)){var n=r;break e}r=r.return}throw Error(b(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(gn(i,""),n.flags&=-33);var s=Jl(e);Rs(e,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Jl(e);As(e,l,a);break;default:throw Error(b(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e,t,r){M=e,bd(e)}function bd(e,t,r){for(var n=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Jn;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ce;l=Jn;var c=Ce;if(Jn=a,(Ce=u)&&!c)for(M=i;M!==null;)a=M,u=a.child,a.tag===22&&a.memoizedState!==null?ru(i):u!==null?(u.return=a,M=u):ru(i);for(;s!==null;)M=s,bd(s),s=s.sibling;M=i,Jn=l,Ce=c}eu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):eu(e)}}function eu(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||oo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ce)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Dl(t,s,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Dl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var k=c.memoizedState;if(k!==null){var v=k.dehydrated;v!==null&&kn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ce||t.flags&512&&Ts(t)}catch(h){le(t,t.return,h)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function tu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function ru(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oo(4,t)}catch(u){le(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){le(t,i,u)}}var s=t.return;try{Ts(t)}catch(u){le(t,s,u)}break;case 5:var a=t.return;try{Ts(t)}catch(u){le(t,a,u)}}}catch(u){le(t,t.return,u)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var vh=Math.ceil,Fi=Et.ReactCurrentDispatcher,Ra=Et.ReactCurrentOwner,Ge=Et.ReactCurrentBatchConfig,X=0,me=null,ce=null,xe=0,Fe=0,Sr=Kt(0),fe=0,Tn=null,sr=0,so=0,Ma=0,fn=null,Re=null,La=0,Ir=1/0,vt=null,Bi=!1,Ms=null,Bt=null,Zn=!1,Lt=null,$i=0,hn=0,Ls=null,pi=-1,fi=0;function Pe(){return X&6?ue():pi!==-1?pi:pi=ue()}function $t(e){return e.mode&1?X&2&&xe!==0?xe&-xe:eh.transition!==null?(fi===0&&(fi=lc()),fi):(e=G,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function at(e,t,r,n){if(50<hn)throw hn=0,Ls=null,Error(b(185));Mn(e,r,n),(!(X&2)||e!==me)&&(e===me&&(!(X&2)&&(so|=r),fe===4&&Rt(e,xe)),Ie(e,n),r===1&&X===0&&!(t.mode&1)&&(Ir=ue()+500,ro&&Xt()))}function Ie(e,t){var r=e.callbackNode;Zp(e,t);var n=Ci(e,e===me?xe:0);if(n===0)r!==null&&dl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&dl(r),t===1)e.tag===0?Zf(nu.bind(null,e)):Mc(nu.bind(null,e)),Xf(function(){!(X&6)&&Xt()}),r=null;else{switch(uc(n)){case 1:r=aa;break;case 4:r=sc;break;case 16:r=bi;break;case 536870912:r=ac;break;default:r=bi}r=Ad(r,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Cd(e,t){if(pi=-1,fi=0,X&6)throw Error(b(327));var r=e.callbackNode;if(zr()&&e.callbackNode!==r)return null;var n=Ci(e,e===me?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ui(e,n);else{t=n;var i=X;X|=2;var s=Ed();(me!==e||xe!==t)&&(vt=null,Ir=ue()+500,tr(e,t));do try{kh();break}catch(l){Nd(e,l)}while(!0);ka(),Fi.current=s,X=i,ce!==null?t=0:(me=null,xe=0,t=fe)}if(t!==0){if(t===2&&(i=ls(e),i!==0&&(n=i,t=Os(e,i))),t===1)throw r=Tn,tr(e,0),Rt(e,n),Ie(e,ue()),r;if(t===6)Rt(e,n);else{if(i=e.current.alternate,!(n&30)&&!yh(i)&&(t=Ui(e,n),t===2&&(s=ls(e),s!==0&&(n=s,t=Os(e,s))),t===1))throw r=Tn,tr(e,0),Rt(e,n),Ie(e,ue()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(b(345));case 2:Gt(e,Re,vt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(t=La+500-ue(),10<t)){if(Ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gs(Gt.bind(null,e,Re,vt),t);break}Gt(e,Re,vt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-st(n);s=1<<a,a=t[a],a>i&&(i=a),n&=~s}if(n=i,n=ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vh(n/1960))-n,10<n){e.timeoutHandle=gs(Gt.bind(null,e,Re,vt),n);break}Gt(e,Re,vt);break;case 5:Gt(e,Re,vt);break;default:throw Error(b(329))}}}return Ie(e,ue()),e.callbackNode===r?Cd.bind(null,e):null}function Os(e,t){var r=fn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=Re,Re=r,t!==null&&Is(t)),e}function Is(e){Re===null?Re=e:Re.push.apply(Re,e)}function yh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!lt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Ma,t&=~so,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-st(t),n=1<<r;e[r]=-1,t&=~n}}function nu(e){if(X&6)throw Error(b(327));zr();var t=Ci(e,0);if(!(t&1))return Ie(e,ue()),null;var r=Ui(e,t);if(e.tag!==0&&r===2){var n=ls(e);n!==0&&(t=n,r=Os(e,n))}if(r===1)throw r=Tn,tr(e,0),Rt(e,t),Ie(e,ue()),r;if(r===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Re,vt),Ie(e,ue()),null}function Oa(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(Ir=ue()+500,ro&&Xt())}}function ar(e){Lt!==null&&Lt.tag===0&&!(X&6)&&zr();var t=X;X|=1;var r=Ge.transition,n=G;try{if(Ge.transition=null,G=1,e)return e()}finally{G=n,Ge.transition=r,X=t,!(X&6)&&Xt()}}function Ia(){Fe=Sr.current,re(Sr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Kf(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(va(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Pi();break;case 3:Lr(),re(Le),re(Ne),Na();break;case 5:Ca(n);break;case 4:Lr();break;case 13:re(ie);break;case 19:re(ie);break;case 10:wa(n.type._context);break;case 22:case 23:Ia()}r=r.return}if(me=e,ce=e=Ut(e.current,null),xe=Fe=t,fe=0,Tn=null,Ma=so=sr=0,Re=fn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}Zt=null}return e}function Nd(e,t){do{var r=ce;try{if(ka(),ui.current=qi,Di){for(var n=oe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Di=!1}if(or=0,he=pe=oe=null,dn=!1,_n=0,Ra.current=null,r===null||r.return===null){fe=1,Tn=t,ce=null;break}e:{var s=e,a=r.return,l=r,u=t;if(t=xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,k=l,v=k.tag;if(!(k.mode&1)&&(v===0||v===11||v===15)){var h=k.alternate;h?(k.updateQueue=h.updateQueue,k.memoizedState=h.memoizedState,k.lanes=h.lanes):(k.updateQueue=null,k.memoizedState=null)}var y=Vl(a);if(y!==null){y.flags&=-257,Hl(y,a,l,s,t),y.mode&1&&Ul(s,c,t),t=y,u=c;var g=t.updateQueue;if(g===null){var j=new Set;j.add(u),t.updateQueue=j}else g.add(u);break e}else{if(!(t&1)){Ul(s,c,t),Da();break e}u=Error(b(426))}}else if(ne&&l.mode&1){var N=Vl(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Hl(N,a,l,s,t),ya(Or(u,l));break e}}s=u=Or(u,l),fe!==4&&(fe=2),fn===null?fn=[s]:fn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=ud(s,u,t);Il(s,p);break e;case 1:l=u;var d=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bt===null||!Bt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=cd(s,l,t);Il(s,w);break e}}s=s.return}while(s!==null)}zd(r)}catch(E){t=E,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function Ed(){var e=Fi.current;return Fi.current=qi,e===null?qi:e}function Da(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(sr&268435455)&&!(so&268435455)||Rt(me,xe)}function Ui(e,t){var r=X;X|=2;var n=Ed();(me!==e||xe!==t)&&(vt=null,tr(e,t));do try{xh();break}catch(i){Nd(e,i)}while(!0);if(ka(),X=r,Fi.current=n,ce!==null)throw Error(b(261));return me=null,xe=0,fe}function xh(){for(;ce!==null;)_d(ce)}function kh(){for(;ce!==null&&!Vp();)_d(ce)}function _d(e){var t=Td(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?zd(e):ce=t,Ra.current=null}function zd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=fh(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(r=ph(r,t,Fe),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function Gt(e,t,r){var n=G,i=Ge.transition;try{Ge.transition=null,G=1,wh(e,t,r,n)}finally{Ge.transition=i,G=n}return null}function wh(e,t,r,n){do zr();while(Lt!==null);if(X&6)throw Error(b(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(ef(e,s),e===me&&(ce=me=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Zn||(Zn=!0,Ad(bi,function(){return zr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var a=G;G=1;var l=X;X|=4,Ra.current=null,mh(e,r),Sd(r,e),Bf(hs),Ni=!!fs,hs=fs=null,e.current=r,gh(r),Hp(),X=l,G=a,Ge.transition=s}else e.current=r;if(Zn&&(Zn=!1,Lt=e,$i=i),s=e.pendingLanes,s===0&&(Bt=null),Kp(r.stateNode),Ie(e,ue()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Bi)throw Bi=!1,e=Ms,Ms=null,e;return $i&1&&e.tag!==0&&zr(),s=e.pendingLanes,s&1?e===Ls?hn++:(hn=0,Ls=e):hn=0,Xt(),null}function zr(){if(Lt!==null){var e=uc($i),t=Ge.transition,r=G;try{if(Ge.transition=null,G=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,$i=0,X&6)throw Error(b(331));var i=X;for(X|=4,M=e.current;M!==null;){var s=M,a=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(M=c;M!==null;){var k=M;switch(k.tag){case 0:case 11:case 15:pn(8,k,s)}var v=k.child;if(v!==null)v.return=k,M=v;else for(;M!==null;){k=M;var h=k.sibling,y=k.return;if(kd(k),k===c){M=null;break}if(h!==null){h.return=y,M=h;break}M=y}}}var g=s.alternate;if(g!==null){var j=g.child;if(j!==null){g.child=null;do{var N=j.sibling;j.sibling=null,j=N}while(j!==null)}}M=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,M=a;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var d=e.current;for(M=d;M!==null;){a=M;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,M=f;else e:for(a=d;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oo(9,l)}}catch(E){le(l,l.return,E)}if(l===a){M=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,M=w;break e}M=l.return}}if(X=i,Xt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Gi,e)}catch{}n=!0}return n}finally{G=r,Ge.transition=t}}return!1}function iu(e,t,r){t=Or(r,t),t=ud(e,t,1),e=Ft(e,t,1),t=Pe(),e!==null&&(Mn(e,1,t),Ie(e,t))}function le(e,t,r){if(e.tag===3)iu(e,e,r);else for(;t!==null;){if(t.tag===3){iu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Or(r,e),e=cd(t,e,1),t=Ft(t,e,1),e=Pe(),t!==null&&(Mn(t,1,e),Ie(t,e));break}}t=t.return}}function jh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(xe&r)===r&&(fe===4||fe===3&&(xe&130023424)===xe&&500>ue()-La?tr(e,0):Ma|=r),Ie(e,t)}function Pd(e,t){t===0&&(e.mode&1?(t=Un,Un<<=1,!(Un&130023424)&&(Un=4194304)):t=1);var r=Pe();e=Ct(e,t),e!==null&&(Mn(e,t,r),Ie(e,r))}function Sh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Pd(e,r)}function bh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(t),Pd(e,r)}var Td;Td=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,dh(e,t,r);Me=!!(e.flags&131072)}else Me=!1,ne&&t.flags&1048576&&Lc(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;di(e,t),e=t.pendingProps;var i=Ar(t,Ne.current);_r(t,r),i=_a(null,t,n,e,i,r);var s=za();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(n)?(s=!0,Ti(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(t),i.updater=io,t.stateNode=i,i._reactInternals=t,Ss(t,n,e,r),t=Ns(null,t,n,!0,s,r)):(t.tag=0,ne&&s&&ga(t),ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Nh(n),e=rt(n,e),i){case 0:t=Cs(null,t,n,e,r);break e;case 1:t=Kl(null,t,n,e,r);break e;case 11:t=Wl(null,t,n,e,r);break e;case 14:t=Ql(null,t,n,rt(n.type,e),r);break e}throw Error(b(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rt(n,i),Cs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rt(n,i),Kl(e,t,n,i,r);case 3:e:{if(hd(t),e===null)throw Error(b(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Bc(e,t),Oi(t,n,null,r);var a=t.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Or(Error(b(423)),t),t=Xl(e,t,n,r,i);break e}else if(n!==i){i=Or(Error(b(424)),t),t=Xl(e,t,n,r,i);break e}else for(Be=qt(t.stateNode.containerInfo.firstChild),$e=t,ne=!0,ot=null,r=qc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rr(),n===i){t=Nt(e,t,r);break e}ze(e,t,n,r)}t=t.child}return t;case 5:return $c(t),e===null&&ks(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,ms(n,i)?a=null:s!==null&&ms(n,s)&&(t.flags|=32),fd(e,t),ze(e,t,a,r),t.child;case 6:return e===null&&ks(t),null;case 13:return md(e,t,r);case 4:return ba(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Mr(t,null,n,r):ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rt(n,i),Wl(e,t,n,i,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ee(Mi,n._currentValue),n._currentValue=a,s!==null)if(lt(s.value,a)){if(s.children===i.children&&!Le.current){t=Nt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(s.tag===1){u=jt(-1,r&-r),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var k=c.pending;k===null?u.next=u:(u.next=k.next,k.next=u),c.pending=u}}s.lanes|=r,u=s.alternate,u!==null&&(u.lanes|=r),ws(s.return,r,t),l.lanes|=r;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(b(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),ws(a,r,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,_r(t,r),i=Je(i),n=n(i),t.flags|=1,ze(e,t,n,r),t.child;case 14:return n=t.type,i=rt(n,t.pendingProps),i=rt(n.type,i),Ql(e,t,n,i,r);case 15:return dd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rt(n,i),di(e,t),t.tag=1,Oe(n)?(e=!0,Ti(t)):e=!1,_r(t,r),ld(t,n,i),Ss(t,n,i,r),Ns(null,t,n,!0,e,r);case 19:return gd(e,t,r);case 22:return pd(e,t,r)}throw Error(b(156,t.tag))};function Ad(e,t){return oc(e,t)}function Ch(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,r,n){return new Ch(e,t,r,n)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nh(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ia)return 11;if(e===oa)return 14}return 2}function Ut(e,t){var r=e.alternate;return r===null?(r=Ye(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function hi(e,t,r,n,i,s){var a=2;if(n=e,typeof e=="function")qa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return rr(r.children,i,s,t);case na:a=8,i|=8;break;case Qo:return e=Ye(12,r,t,i|2),e.elementType=Qo,e.lanes=s,e;case Ko:return e=Ye(13,r,t,i),e.elementType=Ko,e.lanes=s,e;case Xo:return e=Ye(19,r,t,i),e.elementType=Xo,e.lanes=s,e;case $u:return ao(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fu:a=10;break e;case Bu:a=9;break e;case ia:a=11;break e;case oa:a=14;break e;case Pt:a=16,n=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ye(a,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function rr(e,t,r,n){return e=Ye(7,e,n,t),e.lanes=r,e}function ao(e,t,r,n){return e=Ye(22,e,n,t),e.elementType=$u,e.lanes=r,e.stateNode={isHidden:!1},e}function Fo(e,t,r){return e=Ye(6,e,null,t),e.lanes=r,e}function Bo(e,t,r){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wo(0),this.expirationTimes=wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fa(e,t,r,n,i,s,a,l,u){return e=new Eh(e,t,r,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ye(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(s),e}function _h(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Rd(e){if(!e)return Wt;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var r=e.type;if(Oe(r))return Rc(e,r,t)}return t}function Md(e,t,r,n,i,s,a,l,u){return e=Fa(r,n,!0,e,i,s,a,l,u),e.context=Rd(null),r=e.current,n=Pe(),i=$t(r),s=jt(n,i),s.callback=t??null,Ft(r,s,i),e.current.lanes=i,Mn(e,i,n),Ie(e,n),e}function lo(e,t,r,n){var i=t.current,s=Pe(),a=$t(i);return r=Rd(r),t.context===null?t.context=r:t.pendingContext=r,t=jt(s,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ft(i,t,a),e!==null&&(at(e,i,a,s),li(e,i,a)),a}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ba(e,t){ou(e,t),(e=e.alternate)&&ou(e,t)}function zh(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}uo.prototype.render=$a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));lo(e,t,null,null)};uo.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){lo(null,e,null,null)}),t[bt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<At.length&&t!==0&&t<At[r].priority;r++);At.splice(r,0,e),r===0&&hc(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function Ph(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var c=Vi(a);s.call(c)}}var a=Md(t,n,e,0,null,!1,!1,"",su);return e._reactRootContainer=a,e[bt]=a.current,Sn(e.nodeType===8?e.parentNode:e),ar(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Vi(u);l.call(c)}}var u=Fa(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=u,e[bt]=u.current,Sn(e.nodeType===8?e.parentNode:e),ar(function(){lo(t,u,r,n)}),u}function po(e,t,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Vi(a);l.call(u)}}lo(t,a,e,i)}else a=Ph(r,t,e,i,n);return Vi(a)}cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=rn(t.pendingLanes);r!==0&&(la(t,r|1),Ie(t,ue()),!(X&6)&&(Ir=ue()+500,Xt()))}break;case 13:ar(function(){var n=Ct(e,1);if(n!==null){var i=Pe();at(n,e,1,i)}}),Ba(e,1)}};ua=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var r=Pe();at(t,e,134217728,r)}Ba(e,134217728)}};dc=function(e){if(e.tag===13){var t=$t(e),r=Ct(e,t);if(r!==null){var n=Pe();at(r,e,t,n)}Ba(e,t)}};pc=function(){return G};fc=function(e,t){var r=G;try{return G=e,t()}finally{G=r}};os=function(e,t,r){switch(t){case"input":if(Jo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=to(n);if(!i)throw Error(b(90));Vu(n),Jo(n,i)}}}break;case"textarea":Wu(e,r);break;case"select":t=r.value,t!=null&&br(e,!!r.multiple,t,!1)}};Zu=Oa;ec=ar;var Th={usingClientEntryPoint:!1,Events:[On,vr,to,Gu,Ju,Oa]},Jr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ah={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{Gi=ei.inject(Ah),pt=ei}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Th;Ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(t))throw Error(b(200));return _h(e,t,null,r)};Ve.createRoot=function(e,t){if(!Ua(e))throw Error(b(299));var r=!1,n="",i=Ld;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fa(e,1,!1,null,null,r,!1,n,i),e[bt]=t.current,Sn(e.nodeType===8?e.parentNode:e),new $a(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=nc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return ar(e)};Ve.hydrate=function(e,t,r){if(!co(t))throw Error(b(200));return po(null,e,t,!0,r)};Ve.hydrateRoot=function(e,t,r){if(!Ua(e))throw Error(b(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=Ld;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Md(t,null,e,1,r??null,i,!1,s,a),e[bt]=t.current,Sn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new uo(t)};Ve.render=function(e,t,r){if(!co(t))throw Error(b(200));return po(null,e,t,!1,r)};Ve.unmountComponentAtNode=function(e){if(!co(e))throw Error(b(40));return e._reactRootContainer?(ar(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Oa;Ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!co(r))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return po(e,t,r,!1,n)};Ve.version="18.3.1-next-f1338f8080-20240426";function Od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od)}catch(e){console.error(e)}}Od(),Ou.exports=Ve;var Rh=Ou.exports,au=Rh;Ho.createRoot=au.createRoot,Ho.hydrateRoot=au.hydrateRoot;const mt=Object.create(null);mt.open="0";mt.close="1";mt.ping="2";mt.pong="3";mt.message="4";mt.upgrade="5";mt.noop="6";const mi=Object.create(null);Object.keys(mt).forEach(e=>{mi[mt[e]]=e});const Ds={type:"error",data:"parser error"},Id=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Dd=typeof ArrayBuffer=="function",qd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Va=({type:e,data:t},r,n)=>Id&&t instanceof Blob?r?n(t):lu(t,n):Dd&&(t instanceof ArrayBuffer||qd(t))?r?n(t):lu(new Blob([t]),n):n(mt[e]+(t||"")),lu=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function uu(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let $o;function Mh(e,t){if(Id&&e.data instanceof Blob)return e.data.arrayBuffer().then(uu).then(t);if(Dd&&(e.data instanceof ArrayBuffer||qd(e.data)))return t(uu(e.data));Va(e,!1,r=>{$o||($o=new TextEncoder),t($o.encode(r))})}const cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",on=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<cu.length;e++)on[cu.charCodeAt(e)]=e;const Lh=e=>{let t=e.length*.75,r=e.length,n,i=0,s,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),k=new Uint8Array(c);for(n=0;n<r;n+=4)s=on[e.charCodeAt(n)],a=on[e.charCodeAt(n+1)],l=on[e.charCodeAt(n+2)],u=on[e.charCodeAt(n+3)],k[i++]=s<<2|a>>4,k[i++]=(a&15)<<4|l>>2,k[i++]=(l&3)<<6|u&63;return c},Oh=typeof ArrayBuffer=="function",Ha=(e,t)=>{if(typeof e!="string")return{type:"message",data:Fd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Ih(e.substring(1),t)}:mi[r]?e.length>1?{type:mi[r],data:e.substring(1)}:{type:mi[r]}:Ds},Ih=(e,t)=>{if(Oh){const r=Lh(e);return Fd(r,t)}else return{base64:!0,data:e}},Fd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Bd="",Dh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((s,a)=>{Va(s,!1,l=>{n[a]=l,++i===r&&t(n.join(Bd))})})},qh=(e,t)=>{const r=e.split(Bd),n=[];for(let i=0;i<r.length;i++){const s=Ha(r[i],t);if(n.push(s),s.type==="error")break}return n};function Fh(){return new TransformStream({transform(e,t){Mh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let Uo;function ti(e){return e.reduce((t,r)=>t+r.length,0)}function ri(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Bh(e,t){Uo||(Uo=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(ti(r)<1)break;const u=ri(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(ti(r)<2)break;const u=ri(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(ti(r)<8)break;const u=ri(r,8),c=new DataView(u.buffer,u.byteOffset,u.length),k=c.getUint32(0);if(k>Math.pow(2,21)-1){l.enqueue(Ds);break}i=k*Math.pow(2,32)+c.getUint32(4),n=3}else{if(ti(r)<i)break;const u=ri(r,i);l.enqueue(Ha(s?u:Uo.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(Ds);break}}}})}const $d=4;function de(e){if(e)return $h(e)}function $h(e){for(var t in de.prototype)e[t]=de.prototype[t];return e}de.prototype.on=de.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};de.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};de.prototype.off=de.prototype.removeListener=de.prototype.removeAllListeners=de.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};de.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};de.prototype.emitReserved=de.prototype.emit;de.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};de.prototype.hasListeners=function(e){return!!this.listeners(e).length};const fo=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Xe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Uh="arraybuffer";function Ud(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Vh=Xe.setTimeout,Hh=Xe.clearTimeout;function ho(e,t){t.useNativeTimers?(e.setTimeoutFn=Vh.bind(Xe),e.clearTimeoutFn=Hh.bind(Xe)):(e.setTimeoutFn=Xe.setTimeout.bind(Xe),e.clearTimeoutFn=Xe.clearTimeout.bind(Xe))}const Wh=1.33;function Qh(e){return typeof e=="string"?Kh(e):Math.ceil((e.byteLength||e.size)*Wh)}function Kh(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Vd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Yh(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class Gh extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Wa extends de{constructor(t){super(),this.writable=!1,ho(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Gh(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Ha(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Xh(t);return r.length?"?"+r:""}}class Jh extends Wa{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};qh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Dh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Vd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Hd=!1;try{Hd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Zh=Hd;function em(){}class tm extends Jh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class ht extends de{constructor(t,r,n){super(),this.createRequest=t,ho(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Ud(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ht.requestsCount++,ht.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=em,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ht.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ht.requestsCount=0;ht.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",du);else if(typeof addEventListener=="function"){const e="onpagehide"in Xe?"pagehide":"unload";addEventListener(e,du,!1)}}function du(){for(let e in ht.requests)ht.requests.hasOwnProperty(e)&&ht.requests[e].abort()}const rm=function(){const e=Wd({xdomain:!1});return e&&e.responseType!==null}();class nm extends tm{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=rm&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new ht(Wd,this.uri(),t)}}function Wd(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Zh))return new XMLHttpRequest}catch{}if(!t)try{return new Xe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Qd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class im extends Wa{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Qd?{}:Ud(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Va(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&fo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Vd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Vo=Xe.WebSocket||Xe.MozWebSocket;class om extends im{createSocket(t,r,n){return Qd?new Vo(t,r,n):r?new Vo(t,r):new Vo(t)}doWrite(t,r){this.ws.send(r)}}class sm extends Wa{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Bh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Fh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),s())}).catch(l=>{})};s();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&fo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const am={websocket:om,webtransport:sm,polling:nm},lm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,um=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function qs(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=lm.exec(e||""),s={},a=14;for(;a--;)s[um[a]]=i[a]||"";return r!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=cm(s,s.path),s.queryKey=dm(s,s.query),s}function cm(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function dm(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Fs=typeof addEventListener=="function"&&typeof removeEventListener=="function",gi=[];Fs&&addEventListener("offline",()=>{gi.forEach(e=>e())},!1);class Vt extends de{constructor(t,r){if(super(),this.binaryType=Uh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=qs(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=qs(r.host).host);ho(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Yh(this.opts.query)),Fs&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},gi.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=$d,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Vt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Vt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Qh(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,fo(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Vt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Fs&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=gi.indexOf(this._offlineEventListener);n!==-1&&gi.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Vt.protocol=$d;class pm extends Vt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Vt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",v=>{if(!n)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Vt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(k(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=r.name,this.emitReserved("upgradeError",h)}}))};function s(){n||(n=!0,k(),r.close(),r=null)}const a=v=>{const h=new Error("probe error: "+v);h.transport=r.name,s(),this.emitReserved("upgradeError",h)};function l(){a("transport closed")}function u(){a("socket closed")}function c(v){r&&v.name!==r.name&&s()}const k=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let fm=class extends pm{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(s=>am[s]).filter(s=>!!s)),super(n?i:t,i)}};function hm(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=qs(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const mm=typeof ArrayBuffer=="function",gm=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Kd=Object.prototype.toString,vm=typeof Blob=="function"||typeof Blob<"u"&&Kd.call(Blob)==="[object BlobConstructor]",ym=typeof File=="function"||typeof File<"u"&&Kd.call(File)==="[object FileConstructor]";function Qa(e){return mm&&(e instanceof ArrayBuffer||gm(e))||vm&&e instanceof Blob||ym&&e instanceof File}function vi(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(vi(e[r]))return!0;return!1}if(Qa(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return vi(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&vi(e[r]))return!0;return!1}function xm(e){const t=[],r=e.data,n=e;return n.data=yi(r,t),n.attachments=t.length,{packet:n,buffers:t}}function yi(e,t,r){if(!e)return e;if(Qa(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=yi(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return yi(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=yi(e[i],t));return n}return e}function km(e,t){return e.data=Bs(e.data,t),delete e.attachments,e}function Bs(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Bs(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Bs(e[r],t));return e}const wm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var W;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(W||(W={}));class jm{constructor(t){this.replacer=t}encode(t){return(t.type===W.EVENT||t.type===W.ACK)&&vi(t)?this.encodeAsBinary({type:t.type===W.EVENT?W.BINARY_EVENT:W.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===W.BINARY_EVENT||t.type===W.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=xm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Ka extends de{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===W.BINARY_EVENT;n||r.type===W.BINARY_ACK?(r.type=n?W.EVENT:W.ACK,this.reconstructor=new Sm(r)):super.emitReserved("decoded",r)}else if(Qa(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(W[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===W.BINARY_EVENT||n.type===W.BINARY_ACK){const s=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(s,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!bm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(s,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(s,r+1))}if(t.charAt(++r)){const s=this.tryParse(t.substr(r));if(Ka.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case W.CONNECT:return pu(r);case W.DISCONNECT:return r===void 0;case W.CONNECT_ERROR:return typeof r=="string"||pu(r);case W.EVENT:case W.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&wm.indexOf(r[0])===-1);case W.ACK:case W.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Sm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=km(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const bm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function pu(e){return Object.prototype.toString.call(e)==="[object Object]"}const Cm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Ka,Encoder:jm,get PacketType(){return W}},Symbol.toStringTag,{value:"Module"}));function it(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Nm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Xd extends de{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[it(t,"open",this.onopen.bind(this)),it(t,"packet",this.onpacket.bind(this)),it(t,"error",this.onerror.bind(this)),it(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,s;if(Nm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:W.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const k=this.ids++,v=r.pop();this._registerAckCallback(k,v),a.id=k}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(s),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const s=(a,l)=>a?i(a):n(l);s.withError=!0,r.push(s),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:W.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case W.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case W.EVENT:case W.BINARY_EVENT:this.onevent(t);break;case W.ACK:case W.BINARY_ACK:this.onack(t);break;case W.DISCONNECT:this.ondisconnect();break;case W.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:W.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:W.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Ur(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ur.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Ur.prototype.reset=function(){this.attempts=0};Ur.prototype.setMin=function(e){this.ms=e};Ur.prototype.setMax=function(e){this.max=e};Ur.prototype.setJitter=function(e){this.jitter=e};class $s extends de{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,ho(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ur({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||Cm;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new fm(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=it(r,"open",function(){n.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=it(r,"error",s);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(it(t,"ping",this.onping.bind(this)),it(t,"data",this.ondata.bind(this)),it(t,"error",this.onerror.bind(this)),it(t,"close",this.onclose.bind(this)),it(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){fo(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Xd(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Zr={};function xi(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=hm(e,t.path||"/socket.io"),n=r.source,i=r.id,s=r.path,a=Zr[i]&&s in Zr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new $s(n,t):(Zr[i]||(Zr[i]=new $s(n,t)),u=Zr[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(xi,{Manager:$s,Socket:Xd,io:xi,connect:xi});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yd=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=z.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:a,...l},u)=>z.createElement("svg",{ref:u,..._m,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Yd("lucide",i),...l},[...a.map(([c,k])=>z.createElement(c,k)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const r=z.forwardRef(({className:n,...i},s)=>z.createElement(zm,{ref:s,iconNode:t,className:Yd(`lucide-${Em(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=R("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=R("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=R("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=R("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=R("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=R("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=R("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=R("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=R("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=R("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=R("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=R("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=R("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=R("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=R("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=R("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=R("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=R("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=R("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=R("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=R("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=R("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=R("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=R("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=R("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=R("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=R("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=R("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=R("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=R("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=R("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=R("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=R("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=R("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=R("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=R("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=R("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=R("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=R("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=R("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=R("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=R("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=R("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=R("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ng({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const s=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),u=Number(n||0).toFixed(2);function c(P,F){const B=F.length.toString().padStart(2,"0");return`${P}${B}${F}`}const k=c("00","br.gov.bcb.pix"),v=c("01",s),h=c("26",`${k}${v}`),y=c("52","0000"),g=c("53","986"),j=c("54",u),N=c("58","BR"),p=c("59",a),d=c("60",l),f=c("05",i||"***"),w=c("62",f),E=`000201${h}${y}${g}${j}${N}${p}${d}${w}6304`;let _=65535;for(let P=0;P<E.length;P++){_^=E.charCodeAt(P)<<8;for(let F=0;F<8;F++)_&32768?_=(_<<1^4129)&65535:_=_<<1&65535}const T=(_&65535).toString(16).toUpperCase().padStart(4,"0");return`${E}${T}`}function ig({socket:e,menu:t,operador:r,onEnviarPedido:n,onReservarItem:i,onLiberarItem:s,onLiberarCarrinho:a}){const[l,u]=z.useState(""),[c,k]=z.useState([]),[v,h]=z.useState("todas"),[y,g]=z.useState(null),[j,N]=z.useState(null),[p,d]=z.useState("cardapio"),[f,w]=z.useState("pix"),[E,_]=z.useState(""),[T,P]=z.useState(()=>{const S=new Date;return S.setDate(S.getDate()+7),S.toISOString().split("T")[0]}),[F,B]=z.useState(null),[m,I]=z.useState(!1),[Q,D]=z.useState(!1);z.useEffect(()=>{fetch("/api/pix-config").then(S=>S.json()).then(S=>B(S)).catch(S=>console.error("Erro ao carregar chave PIX:",S))},[]);const ge=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],De=t&&Array.isArray(t.categorias)?t.categorias:[],Ee=S=>{if(S.categoria)return S.categoria;const x=De.find(q=>q.id===S.categoriaId);return x?x.nome:"Geral"},A=["todas",...new Set(ge.map(S=>Ee(S)))],$=S=>{if(!S||!S.controlaEstoque)return{controla:!1,disponivel:1/0,esgotado:!1,acabando:!1};const x=typeof S.disponivelEstoque=="number"?S.disponivelEstoque:Math.max(0,(S.estoque||0)-(S.reservado||0));return{controla:!0,disponivel:x,esgotado:x<=0,acabando:x>0&&x<=(S.estoqueMinimo||0)}},V=(S,x,q)=>{if(!i){q();return}i(S,x,U=>{if(U&&U.ok)N(null),q();else{const O=ge.find(et=>et.id===S);N({titulo:`Sem estoque suficiente de "${(O==null?void 0:O.nome)||"produto"}"`,itens:[{nome:(O==null?void 0:O.nome)||S,disponivel:(U==null?void 0:U.disponivel)??0}]})}})},Y=(S,x)=>{s&&s(S,x)},J=S=>{$(S).esgotado||V(S.id,1,()=>{k(q=>q.find(O=>O.id===S.id)?q.map(O=>O.id===S.id?{...O,quantidade:O.quantidade+1}:O):[...q,{...S,quantidade:1,observacao:""}])})},qe=(S,x)=>{const q=()=>{k(U=>U.map(O=>{if(O.id===S){const et=O.quantidade+x;return et>0?{...O,quantidade:et}:null}return O}).filter(Boolean))};x>0?V(S,x,q):(Y(S,Math.abs(x)),q())},_e=(S,x)=>{k(q=>q.map(U=>U.id===S?{...U,observacao:x}:U))},We=S=>{const x=c.find(q=>q.id===S);x&&Y(S,x.quantidade),k(q=>q.filter(U=>U.id!==S))},we=()=>{a&&a(),k([]),N(null)};z.useEffect(()=>()=>{a&&a()},[]);const ve=c.reduce((S,x)=>S+x.preco*x.quantidade,0),gt=c.reduce((S,x)=>S+x.quantidade,0),C=F!=null&&F.chavePix?ng({chave:F.chavePix,nome:F.nomeBeneficiario,cidade:F.cidadeBeneficiario,valor:ve}):"",L=()=>{C&&(navigator.clipboard.writeText(C),D(!0),setTimeout(()=>D(!1),3e3))},K=S=>{if(S&&S.preventDefault(),!l.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(c.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(f==="pagar_depois"){if(!E.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!T){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const x={cliente:l.trim(),criadoPor:r?r.nome:"Caixa",itens:c.map(O=>({id:O.id,nome:O.nome,preco:O.preco,quantidade:O.quantidade,observacao:O.observacao||""})),total:ve,formaPagamento:f,telefoneCliente:f==="pagar_depois"?E.trim():E.trim()||void 0,dataCobranca:f==="pagar_depois"?T:void 0},q=O=>{var je,_t;if(O&&O.erro==="estoque_insuficiente"){N({titulo:"Estoque insuficiente para fechar o pedido",itens:(O.itensIndisponiveis||[]).map(Vr=>({nome:Vr.nome,pedido:Vr.pedido,disponivel:Vr.disponivel}))}),I(!1),d("carrinho");return}if(O&&O.error){alert(O.error);return}const et=((je=O==null?void 0:O.order)==null?void 0:je.numero)||((_t=O==null?void 0:O.pedido)==null?void 0:_t.numero)||"OK";g(`Pedido #${et} enviado para a cozinha!`),N(null),I(!1),u(""),_(""),k([]),w("pix"),d("cardapio"),setTimeout(()=>g(null),4e3)},U=n||(e?(O,et)=>e.emit("criar_pedido",O,et):null);U?U(x,q):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(O=>O.json()).then(q).catch(O=>{console.error("Erro ao enviar pedido:",O),alert("Erro ao comunicar com o servidor.")})},ae=ge.filter(S=>{const x=S.disponivel!==!1&&S.ativo!==!1,q=Ee(S),U=v==="todas"||q===v||S.categoriaId===v;return x&&U});return o.jsxs("div",{className:"caixa-container",children:[o.jsx("style",{children:`
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

        .prod-card-esgotado {
          opacity: 0.45;
          cursor: not-allowed;
          filter: grayscale(0.7);
        }

        .prod-card-esgotado:hover {
          border-color: var(--app-border);
          background: var(--app-surface-1);
        }

        .prod-card-esgotado .prod-add-btn {
          background: var(--app-ink-muted);
          cursor: not-allowed;
        }

        .estoque-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .estoque-ok {
          background: rgba(22, 163, 74, 0.14);
          color: var(--status-pronto);
          border: 1px solid var(--status-pronto);
        }

        .estoque-acabando {
          background: rgba(230, 134, 25, 0.16);
          color: var(--status-preparo);
          border: 1px solid var(--status-preparo);
        }

        .estoque-esgotado {
          background: rgba(250, 15, 0, 0.16);
          color: var(--primary);
          border: 1px solid var(--primary);
        }

        .aviso-estoque {
          background: rgba(250, 15, 0, 0.12);
          border: 1px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .aviso-estoque-titulo {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          color: var(--primary);
          font-size: 0.92rem;
        }

        .aviso-estoque-lista {
          margin: 0;
          padding-left: 1.4rem;
          font-size: 0.85rem;
          color: var(--app-ink);
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
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
      `}),o.jsxs("div",{className:"mobile-view-toggle",children:[o.jsxs("button",{className:`mobile-toggle-btn ${p==="cardapio"?"active":""}`,onClick:()=>d("cardapio"),children:[o.jsx(ip,{size:16})," Cardápio de Produtos"]}),o.jsxs("button",{className:`mobile-toggle-btn ${p==="carrinho"?"active":""}`,onClick:()=>d("carrinho"),children:[o.jsx(xt,{size:16})," Comanda (",gt,")"]})]}),o.jsxs("div",{className:`caixa-cardapio-col ${p!=="cardapio"?"mobile-hidden":""}`,children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(xt,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),y&&o.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[o.jsx(Ya,{size:18}),o.jsx("span",{children:y})]}),o.jsx("div",{className:"cat-pills",children:A.map(S=>o.jsx("button",{className:`cat-btn ${v===S?"active":""}`,onClick:()=>h(S),children:S==="todas"?"Todas as Categorias":S},S))}),o.jsx("div",{className:"produtos-grid",children:ae.map(S=>{const x=$(S);return o.jsxs("div",{className:`prod-card ${x.esgotado?"prod-card-esgotado":""}`,onClick:()=>J(S),children:[o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.4rem"},children:[o.jsx("span",{className:"prod-cat",children:Ee(S)}),x.controla&&(x.esgotado?o.jsx("span",{className:"estoque-badge estoque-esgotado",children:"ESGOTADO"}):x.acabando?o.jsxs("span",{className:"estoque-badge estoque-acabando",children:["Últimas ",x.disponivel]}):o.jsxs("span",{className:"estoque-badge estoque-ok",children:["Restam ",x.disponivel]}))]}),o.jsx("div",{className:"prod-title",children:S.nome}),S.descricao&&o.jsx("div",{className:"prod-desc",children:S.descricao})]}),o.jsxs("div",{className:"prod-footer",children:[o.jsxs("span",{className:"prod-preco",children:["R$ ",(S.preco||0).toFixed(2)]}),o.jsx("button",{className:"prod-add-btn",title:x.esgotado?"Produto esgotado":"Adicionar ao Pedido",disabled:x.esgotado,children:o.jsx(Qi,{size:18})})]})]},S.id)})})]}),o.jsxs("div",{className:`caixa-carrinho-col ${p!=="carrinho"?"mobile-hidden":""}`,children:[o.jsxs("div",{className:"carrinho-header",children:[o.jsxs("div",{className:"carrinho-title",children:[o.jsx(xt,{size:20,color:"var(--primary)"}),o.jsx("span",{children:"Comanda Atual"})]}),c.length>0&&o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:we,children:"Limpar"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),o.jsxs("div",{className:"cliente-input-box",children:[o.jsx(Dr,{size:18,color:"var(--primary)"}),o.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:l,onChange:S=>u(S.target.value)})]})]}),j&&o.jsxs("div",{className:"aviso-estoque",children:[o.jsxs("div",{className:"aviso-estoque-titulo",children:[o.jsx(Hi,{size:17}),o.jsx("span",{children:j.titulo})]}),o.jsx("ul",{className:"aviso-estoque-lista",children:j.itens.map((S,x)=>o.jsxs("li",{children:[o.jsx("strong",{children:S.nome}),S.pedido!==void 0?` — pedido ${S.pedido}, `:" — ",S.disponivel>0?`restam apenas ${S.disponivel}`:"sem estoque disponível"]},x))}),o.jsx("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Ajuste as quantidades acima e envie novamente. Nada do pedido foi perdido."}),o.jsx("button",{className:"btn btn-secondary",style:{alignSelf:"flex-start",padding:"0.25rem 0.6rem",fontSize:"0.78rem",minHeight:"30px"},onClick:()=>N(null),children:"Entendi"})]}),o.jsx("div",{className:"carrinho-itens",children:c.length===0?o.jsxs("div",{className:"carrinho-vazio",children:[o.jsx(xt,{size:36,opacity:.4}),o.jsx("p",{children:"Nenhum item adicionado ainda."}),o.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):c.map(S=>{const x=ge.find(O=>O.id===S.id)||S,q=$(x),U=q.controla&&q.disponivel<=0;return o.jsxs("div",{className:"carrinho-item",children:[o.jsxs("div",{className:"item-main",children:[o.jsxs("div",{children:[o.jsx("div",{className:"item-nome",children:S.nome}),o.jsxs("div",{className:"item-preco",children:["R$ ",(S.preco*S.quantidade).toFixed(2)]}),q.controla&&o.jsx("div",{style:{fontSize:"0.72rem",color:U?"var(--primary)":"var(--app-ink-muted)",marginTop:"2px"},children:U?"Último disponível no estoque":`Restam ${q.disponivel} em estoque`})]}),o.jsxs("div",{className:"item-qtd-ctrl",children:[o.jsx("button",{className:"qtd-btn",onClick:()=>qe(S.id,-1),children:o.jsx(ep,{size:14})}),o.jsx("span",{className:"qtd-val",children:S.quantidade}),o.jsx("button",{className:"qtd-btn",onClick:()=>qe(S.id,1),disabled:U,title:U?"Sem estoque disponível":"Adicionar mais uma unidade",style:U?{opacity:.35,cursor:"not-allowed"}:void 0,children:o.jsx(Qi,{size:14})}),o.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>We(S.id),children:o.jsx(Ki,{size:14})})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Zd,{size:12,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:S.observacao,onChange:O=>_e(S.id,O.target.value)})]})]},S.id)})}),o.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[o.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),o.jsxs("div",{className:"pgto-grid",children:[o.jsxs("button",{type:"button",className:`pgto-btn ${f==="pix"?"active":""}`,onClick:()=>w("pix"),children:[o.jsx(ki,{size:16})," PIX"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${f==="dinheiro"?"active":""}`,onClick:()=>w("dinheiro"),children:[o.jsx(Jd,{size:16})," Dinheiro"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${f==="debito"?"active":""}`,onClick:()=>w("debito"),children:[o.jsx(ki,{size:16})," Débito"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${f==="credito"?"active":""}`,onClick:()=>w("credito"),children:[o.jsx(ki,{size:16})," Crédito"]}),o.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${f==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>w("pagar_depois"),children:[o.jsx(Vs,{size:16})," Pagar Depois (Fiado)"]})]}),f==="pix"&&ve>0&&o.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>I(!0),children:[o.jsx(gu,{size:18})," Gerar QR Code PIX (R$ ",ve.toFixed(2),")"]}),f==="pagar_depois"&&o.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Ks,{size:14})," Telefone / WhatsApp do Cliente *"]}),o.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:E,onChange:S=>_(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(mo,{size:14})," Data de Cobrança / Vencimento *"]}),o.jsx("input",{type:"date",className:"form-input",value:T,onChange:S=>P(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Hi,{size:13,color:"var(--status-preparo)"}),o.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),o.jsxs("div",{className:"carrinho-footer",children:[o.jsxs("div",{className:"total-row",children:[o.jsx("span",{className:"total-label",children:"Total a Pagar:"}),o.jsxs("span",{className:"total-value",children:["R$ ",ve.toFixed(2)]})]}),o.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:K,disabled:c.length===0||!l.trim(),children:[o.jsx(vu,{size:18})," Enviar para Cozinha"]})]})]}),m&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-card-pix",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[o.jsx(gu,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>I(!1),children:o.jsx(rg,{size:16})})]}),o.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",o.jsx("strong",{style:{color:"var(--text-title)"},children:l||"Cliente no Caixa"})]}),C?o.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:o.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(C)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):o.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),o.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",ve.toFixed(2)]}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",o.jsx("strong",{children:(F==null?void 0:F.nomeBeneficiario)||"Festa do Morango"})," (",F==null?void 0:F.chavePix,")"]}),C&&o.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:o.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:L,children:[Q?o.jsx(Pr,{size:16,color:"var(--primary)"}):o.jsx(Lm,{size:16}),Q?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[o.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>I(!1),children:"Voltar"}),o.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:K,disabled:c.length===0||!l.trim(),children:[o.jsx(vu,{size:16})," Confirmar & Enviar"]})]})]})}),o.jsxs("div",{className:`mobile-cart-float-bar ${p==="cardapio"&&c.length>0?"mobile-show-float":""}`,onClick:()=>d("carrinho"),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[o.jsx(xt,{size:20}),o.jsxs("span",{children:["Ver Pedido (",gt," ",gt===1?"item":"itens",")"]})]}),o.jsxs("span",{children:["R$ ",ve.toFixed(2)," →"]})]})]})}function og({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,s]=z.useState(Date.now()),[a,l]=z.useState("ativos");z.useEffect(()=>{const y=setInterval(()=>{s(Date.now())},1e3);return()=>clearInterval(y)},[]);const u=e.filter(y=>y.status==="pendente"||y.status==="em_preparo"||y.status==="entrega_parcial"),c=u.filter(y=>a==="pendentes"?y.status==="pendente":a==="preparo"?y.status==="em_preparo":a==="parcial"?y.status==="entrega_parcial":a==="meus"&&t?y.preparadoPor&&y.preparadoPor.includes(t.nome):!0),k=y=>{const g=new Date(y).getTime(),j=i-g;return Math.floor(j/6e4)},v=y=>{const g=new Date(y).getTime(),j=Math.max(0,i-g),N=Math.floor(j/6e4),p=Math.floor(j%6e4/1e3);return`${String(N).padStart(2,"0")}:${String(p).padStart(2,"0")}`},h=y=>{const g=k(y);return g>=10?"urgente":g>=5?"alerta":"normal"};return o.jsxs("div",{className:"cozinha-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"cozinha-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(An,{size:26,color:"var(--status-preparo)"}),o.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),o.jsxs("div",{className:"nav-tabs",children:[o.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",u.length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",u.filter(y=>y.status==="pendente").length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",u.filter(y=>y.status==="em_preparo").length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",u.filter(y=>y.status==="entrega_parcial").length,")"]}),t&&o.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",u.filter(y=>y.preparadoPor&&y.preparadoPor.includes(t.nome)).length,")"]})]})]}),o.jsx("div",{className:"cozinha-grid",children:c.length===0?o.jsxs("div",{className:"kds-vazio",children:[o.jsx(Wi,{size:48,color:"var(--status-pronto)"}),o.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),o.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):c.map(y=>{const g=h(y.criadoEm),j=v(y.criadoEm),N=y.itens.reduce((f,w)=>f+(w.quantidade||1),0),p=y.itens.filter(f=>f.entregue).reduce((f,w)=>f+(w.quantidade||1),0),d=p>0&&p<N;return o.jsxs("div",{className:`kds-card ${g}`,children:[o.jsxs("div",{className:"kds-card-header",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"comanda-num",children:["#",y.numero]}),o.jsx("div",{className:"cliente-nome",children:y.cliente}),y.formaPagamento==="pagar_depois"?o.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",y.dataCobranca?new Date(y.dataCobranca).toLocaleDateString():"Sem data",")"]}):o.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:y.formaPagamento?y.formaPagamento.toUpperCase():"PIX"}),y.preparadoPor&&o.jsxs("div",{className:"preparador-badge",children:[o.jsx(Dr,{size:12}),o.jsxs("span",{children:["Preparo: ",y.preparadoPor]})]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?o.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",p,"/",N,")"]}):o.jsx("span",{className:`badge badge-${y.status==="pendente"?"pendente":"preparo"}`,children:y.status==="pendente"?"Novo":"Em Preparo"}),o.jsxs("div",{className:`timer-box ${g}`,children:[o.jsx(mo,{size:14}),o.jsx("span",{children:j})]})]})]}),o.jsxs("div",{className:"kds-card-body",children:[o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[o.jsx(tp,{size:14,color:"var(--primary)"}),o.jsxs("span",{children:["Clique no item para marcar entrega parcial (",p,"/",N," entregues):"]})]}),y.itens.map((f,w)=>o.jsxs("div",{className:`kds-item-row ${f.entregue?"item-entregue":""}`,children:[o.jsxs("div",{className:"item-line",children:[o.jsxs("div",{className:"item-info",children:[o.jsxs("span",{className:"item-qtd-badge",children:[f.quantidade,"x"]}),o.jsx("span",{className:"item-titulo",children:f.nome})]}),o.jsxs("button",{type:"button",className:`item-check-btn ${f.entregue?"checked":""}`,onClick:()=>n&&n(y.id,w,!f.entregue),title:f.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[f.entregue?o.jsx(rp,{size:14}):o.jsx(np,{size:14}),o.jsx("span",{children:f.entregue?"Entregue":"Entregar"})]})]}),f.observacao&&o.jsxs("div",{className:"item-obs-highlight",children:[o.jsx($m,{size:13,color:"var(--text-obs)"}),o.jsxs("span",{children:["OBS: ",f.observacao]})]})]},w))]}),o.jsx("div",{className:"kds-card-footer",children:y.status==="pendente"?o.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(y.id,"em_preparo"),children:[o.jsx(Wm,{size:18})," Iniciar Preparo"]}):o.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(y.id,"pronto"),children:[o.jsx(Xa,{size:18})," Pronto / Chamar Cliente"]})})]},y.id)})})]})}let dr=null;function sg(){if(!dr){const e=window.AudioContext||window.webkitAudioContext;e&&(dr=new e)}return dr&&dr.state==="suspended"&&dr.resume(),dr}function ju(){try{const e=sg();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),s.gain.setValueAtTime(0,t+.35),s.gain.linearRampToValueAtTime(.7,t+.4),s.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(s),s.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function ag({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,s]=z.useState(!0),[a,l]=z.useState(null);z.useEffect(()=>{t&&(t.status==="pronto"||t.status==="entrega_parcial")&&i&&(ju(),l(t.id))},[t,i]);const u=e.filter(g=>g.status==="pronto"||g.status==="entrega_parcial"),c=e.filter(g=>g.status==="entregue").slice(0,8),k=a?e.find(g=>g.id===a):t?e.find(g=>g.id===t.id):null,v=k&&(k.status==="pronto"||k.status==="entrega_parcial")?k:u[0],h=()=>{if(!v||u.length<=1)return;const g=u.findIndex(N=>N.id===v.id),j=u[(g+1)%u.length];j&&l(j.id)},y=g=>{r(g,"entregue");const j=u.filter(N=>N.id!==g);j.length>0?l(j[0].id):l(null)};return o.jsxs("div",{className:"chamada-tv-container",children:[o.jsx("style",{children:`
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
          padding: 1.5rem;
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
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.85rem;
        }

        .destaque-card {
          width: 100%;
          max-width: 700px;
          background: var(--app-surface-2);
          border: 3px solid var(--status-pronto);
          border-radius: var(--radius-lg);
          padding: clamp(1.2rem, 3vw, 1.8rem) clamp(1rem, 3vw, 1.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .destaque-comanda {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 3.8rem);
          font-weight: 900;
          color: var(--text-title);
          line-height: 1;
        }

        .destaque-cliente {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 5vw, 2.8rem);
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
          padding: 0.55rem 0.8rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 130ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .destaque-item-row:hover {
          border-color: var(--primary);
        }

        .destaque-item-row.item-entregue {
          background: #eef7ec !important;
          border: 2px solid #156b16 !important;
        }

        .destaque-acoes {
          margin-top: 0.85rem;
          width: 100%;
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
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
          max-height: 320px;
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
          padding: 0.75rem 0.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 130ms ease;
        }

        .pronto-item:hover {
          background: var(--app-border);
        }

        .pronto-item.item-ativo-tv {
          border: 2px solid var(--primary);
          background: rgba(21, 107, 22, 0.08);
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
      `}),o.jsxs("div",{className:"tv-main-panel",children:[o.jsx("div",{className:"tv-panel-controls",children:o.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{s(!i),i||ju()},children:[i?o.jsx(Jm,{size:18,color:"var(--status-pronto)"}):o.jsx(Zm,{size:18,color:"var(--primary)"}),o.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),o.jsxs("div",{className:"destaque-label",children:[o.jsx(Xa,{size:22,color:"var(--status-pronto)"}),o.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),v?o.jsxs("div",{className:"destaque-card",children:[o.jsxs("div",{className:"destaque-comanda",children:["#",v.numero]}),o.jsx("div",{className:"destaque-cliente",children:v.cliente}),v.itens&&o.jsxs("div",{className:"destaque-itens-box",children:[o.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[o.jsx("span",{children:"Conferência de Itens no Balcão:"}),o.jsxs("span",{style:{color:"var(--primary)",fontWeight:800},children:[v.itens.filter(g=>g.entregue).length," de ",v.itens.length," entregues"]})]}),v.itens.map((g,j)=>{const N=!!g.entregue;return o.jsxs("div",{className:`destaque-item-row ${N?"item-entregue":""}`,onClick:()=>n&&n(v.id,j,!N),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[o.jsxs("span",{className:N?"badge badge-pronto":"badge badge-pendente",children:[g.quantidade,"x"]}),o.jsx("span",{style:{color:N?"#156b16":"var(--text-title)",textDecoration:N?"line-through":"none",fontWeight:700},children:g.nome}),g.observacao&&o.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",g.observacao,")"]})]}),o.jsxs("button",{type:"button",className:`btn ${N?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:p=>{p.stopPropagation(),n&&n(v.id,j,!N)},children:[N?o.jsx(rp,{size:16}):o.jsx(np,{size:16}),o.jsx("span",{children:N?"✓ Entregue":"Dar Baixa"})]})]},j)})]}),o.jsxs("div",{className:"destaque-acoes",children:[o.jsxs("button",{className:"btn btn-success",style:{flex:2,padding:"0.85rem",fontSize:"1rem",borderRadius:"var(--radius-md)",fontWeight:700},onClick:()=>y(v.id),children:[o.jsx(wu,{size:20})," Finalizar & Entregar Todos"]}),u.length>1&&o.jsxs("button",{className:"btn btn-secondary",style:{flex:1,padding:"0.85rem",fontSize:"0.88rem",borderRadius:"var(--radius-md)",fontWeight:600},onClick:h,children:[o.jsx(Gd,{size:18})," Próximo da Fila"]})]})]}):o.jsxs("div",{className:"chamada-vazio",children:[o.jsx(Xi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),o.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),o.jsxs("div",{className:"tv-sidebar",children:[o.jsxs("div",{className:"sidebar-section",children:[o.jsxs("div",{className:"sidebar-title",children:[o.jsx(Wi,{size:18,color:"var(--status-pronto)"}),o.jsxs("span",{children:["Fila no Balcão (",u.length,")"]})]}),o.jsx("div",{className:"prontos-lista",children:u.length===0?o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):u.map(g=>{const j=v&&g.id===v.id;return o.jsxs("div",{className:`pronto-item ${j?"item-ativo-tv":""}`,onClick:()=>l(g.id),children:[o.jsxs("div",{children:[o.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",g.numero]}),o.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:g.cliente}),g.status==="entrega_parcial"&&o.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",g.itens?g.itens.filter(N=>N.entregue).length:0,"/",g.itens?g.itens.length:0,")"]})]}),o.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:N=>{N.stopPropagation(),l(g.id)},children:j?"Exibindo":"Exibir"}),o.jsx("button",{type:"button",className:"btn btn-success",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:N=>{N.stopPropagation(),y(g.id)},children:"Entregar"})]})]},g.id)})})]}),o.jsxs("div",{className:"sidebar-section",children:[o.jsxs("div",{className:"sidebar-title",children:[o.jsx(wu,{size:18,color:"var(--app-ink-muted)"}),o.jsx("span",{children:"Últimos Entregues"})]}),o.jsx("div",{className:"entregues-lista",children:c.length===0?o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):c.map(g=>o.jsxs("div",{className:"entregue-chip",children:[o.jsxs("span",{children:["#",g.numero]}),o.jsx("strong",{style:{color:"var(--app-ink)"},children:g.cliente})]},g.id))})]})]})]})}const op=[{id:"burger",nome:"Hambúrguer",component:o.jsx(Tm,{size:18})},{id:"fries",nome:"Porção",component:o.jsx(Qm,{size:18})},{id:"drink",nome:"Bebida",component:o.jsx(Om,{size:18})},{id:"dessert",nome:"Sobremesa",component:o.jsx(Mm,{size:18})},{id:"pizza",nome:"Pizza",component:o.jsx(Hm,{size:18})},{id:"coffee",nome:"Café",component:o.jsx(Rm,{size:18})},{id:"utensils",nome:"Geral",component:o.jsx(qr,{size:18})}];function Su(e){const t=op.find(r=>r.id===e);return t?t.component:o.jsx(qr,{size:16})}function lg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:s,onAjustarEstoque:a}){const[l,u]=z.useState("todas"),[c,k]=z.useState(""),[v,h]=z.useState(!1),[y,g]=z.useState(!1),[j,N]=z.useState(!1),[p,d]=z.useState(null),[f,w]=z.useState(""),[E,_]=z.useState(""),[T,P]=z.useState(""),[F,B]=z.useState(""),[m,I]=z.useState(!1),[Q,D]=z.useState("0"),[ge,De]=z.useState("0"),[Ee,A]=z.useState(""),[$,V]=z.useState("burger"),Y=Array.isArray(e==null?void 0:e.categorias)?e.categorias:[],J=Array.isArray(e==null?void 0:e.produtos)?e.produtos:Array.isArray(e)?e:[],qe=x=>!!x.controlaEstoque&&(x.estoque||0)<=(x.estoqueMinimo||0),_e=J.filter(qe).length,We=J.filter(x=>{const q=l==="todas"||x.categoriaId===l,U=!c.trim()||x.nome.toLowerCase().includes(c.toLowerCase())||x.descricao&&x.descricao.toLowerCase().includes(c.toLowerCase()),O=!v||qe(x);return q&&U&&O}),we=(x,q)=>{a&&a(x.id,q).then(U=>{U&&U.error&&alert(U.error)})},ve=x=>{const q=window.prompt(`Repor estoque de "${x.nome}".
Saldo atual: ${x.estoque||0}

Quantas unidades deseja ADICIONAR?`,"10");if(q===null)return;const U=parseInt(q,10);if(Number.isNaN(U)||U===0){alert("Informe um número inteiro diferente de zero.");return}we(x,{delta:U})},gt=(x=null)=>{var q;x?(d(x),w(x.nome),_(x.categoriaId),P(x.preco.toString()),B(x.descricao||""),I(!!x.controlaEstoque),D(String(x.estoque??0)),De(String(x.estoqueMinimo??0))):(d(null),w(""),_(((q=Y[0])==null?void 0:q.id)||"lanches"),P(""),B(""),I(!1),D("0"),De("0")),g(!0)},C=()=>{A(""),V("burger"),N(!0)},L=x=>{if(x.preventDefault(),!f.trim()||!T||!E){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:p?p.id:void 0,categoriaId:E,nome:f.trim(),preco:parseFloat(T),descricao:F.trim(),disponivel:p?p.disponivel:!0,controlaEstoque:m,estoque:m&&parseInt(Q,10)||0,estoqueMinimo:m&&parseInt(ge,10)||0}),g(!1)},K=x=>{if(x.preventDefault(),!Ee.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:Ee.trim(),icone:$}),N(!1)},ae=x=>{window.confirm(`Tem certeza que deseja excluir o produto "${x.nome}"?`)&&r(x.id)},S=x=>{const q=J.filter(U=>U.categoriaId===x.id).length;if(q>0){alert(`Não é possível excluir a categoria "${x.nome}" pois ela possui ${q} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${x.nome}"?`)&&s(x.id).then(U=>{U&&U.error?alert(U.error):l===x.id&&u("todas")})};return o.jsxs("div",{className:"cardapio-crud-container",children:[o.jsx("style",{children:`
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

        /* Controle de estoque no modal de produto */
        .estoque-box {
          border: 1px dashed var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: var(--app-canvas);
        }

        .estoque-switch {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
          color: var(--app-ink);
        }

        .estoque-switch strong {
          display: block;
          font-size: 0.92rem;
          color: var(--text-title);
        }

        .estoque-switch small {
          display: block;
          font-size: 0.78rem;
          color: var(--app-ink-muted);
          margin-top: 2px;
        }

        .estoque-campos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        /* Coluna de estoque na tabela */
        .estoque-celula {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .estoque-saldo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.05rem;
          min-width: 2ch;
          text-align: center;
        }

        .estoque-saldo.ok { color: var(--status-pronto); }
        .estoque-saldo.acabando { color: var(--status-preparo); }
        .estoque-saldo.zerado { color: var(--primary); }

        .estoque-mini-btn {
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          border-radius: var(--radius-sm);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .estoque-mini-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .estoque-ilimitado {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: var(--app-ink-muted);
        }
      `}),o.jsxs("div",{className:"crud-topbar",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(qr,{size:26,color:"var(--primary)"}),o.jsx("span",{children:"Gestão do Cardápio"})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ga,{size:18,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:c,onChange:x=>k(x.target.value)})]}),o.jsxs("div",{className:"crud-actions",children:[o.jsxs("button",{className:"btn btn-secondary",onClick:C,children:[o.jsx(fu,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),o.jsxs("button",{className:"btn btn-primary",onClick:()=>gt(),children:[o.jsx(Qi,{size:18})," + Produto"]})]})]}),o.jsxs("div",{className:"cat-pills-bar",children:[o.jsxs("button",{className:`cat-pill-btn ${l==="todas"?"active":""}`,onClick:()=>u("todas"),children:[o.jsx(ip,{size:14})," Todas (",J.length,")"]}),Y.map(x=>{const q=J.filter(U=>U.categoriaId===x.id).length;return o.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[o.jsxs("button",{className:`cat-pill-btn ${l===x.id?"active":""}`,onClick:()=>u(x.id),children:[Su(x.icone)," ",o.jsx("span",{children:x.nome})," (",q,")"]}),q===0&&o.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>S(x),children:o.jsx(Ki,{size:13})})]},x.id)}),o.jsxs("button",{className:`cat-pill-btn ${v?"active":""}`,onClick:()=>h(x=>!x),title:"Mostrar apenas produtos no limite do alerta mínimo",style:{marginLeft:"auto"},children:[o.jsx(Hi,{size:14})," Somente itens acabando (",_e,")"]})]}),o.jsx("div",{className:"crud-table-wrapper",children:o.jsxs("table",{className:"crud-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Disponibilidade"}),o.jsx("th",{children:"Produto"}),o.jsx("th",{children:"Categoria"}),o.jsx("th",{children:"Preço"}),o.jsx("th",{children:"Estoque"}),o.jsx("th",{children:"Descrição"}),o.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),o.jsx("tbody",{children:We.length===0?o.jsx("tr",{children:o.jsxs("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[o.jsx(Hi,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",o.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):We.map(x=>{const q=Y.find(U=>U.id===x.categoriaId);return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(x.id),children:x.disponivel?o.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[o.jsx(ku,{size:18})," Ativo"]}):o.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[o.jsx(xu,{size:18})," Esgotado"]})})}),o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:x.nome})}),o.jsx("td",{children:o.jsxs("span",{className:"badge badge-pendente",children:[Su(q==null?void 0:q.icone)," ",(q==null?void 0:q.nome)||x.categoriaId]})}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",x.preco.toFixed(2)]})}),o.jsx("td",{children:x.controlaEstoque?o.jsxs("div",{className:"estoque-celula",children:[o.jsx("button",{className:"estoque-mini-btn",title:"Abater 1 unidade",onClick:()=>we(x,{delta:-1}),children:o.jsx(ep,{size:14})}),o.jsx("span",{className:`estoque-saldo ${(x.estoque||0)===0?"zerado":qe(x)?"acabando":"ok"}`,children:x.estoque||0}),o.jsx("button",{className:"estoque-mini-btn",title:"Adicionar 1 unidade",onClick:()=>we(x,{delta:1}),children:o.jsx(Qi,{size:14})}),o.jsxs("button",{className:"estoque-mini-btn",title:"Repor uma quantidade maior",onClick:()=>ve(x),style:{width:"auto",padding:"0 0.5rem",gap:"0.25rem"},children:[o.jsx(Um,{size:14})," ",o.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700},children:"Repor"})]})]}):o.jsxs("span",{className:"estoque-ilimitado",children:[o.jsx(qm,{size:15})," Ilimitado"]})}),o.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:x.descricao||"-"}),o.jsx("td",{children:o.jsxs("div",{className:"action-group",children:[o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>gt(x),children:[o.jsx(Vm,{size:14})," Editar"]}),o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>ae(x),children:[o.jsx(Ki,{size:14})," Excluir"]})]})})]},x.id)})})]})}),y&&o.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:o.jsxs("div",{className:"modal-card",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:[o.jsx(qr,{size:20,color:"var(--primary)"}),o.jsx("span",{children:p?"Editar Produto":"Cadastrar Novo Produto"})]}),o.jsxs("form",{onSubmit:L,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Produto *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:f,onChange:x=>w(x.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Categoria *"}),o.jsx("select",{className:"form-input",value:E,onChange:x=>_(x.target.value),required:!0,children:Y.map(x=>o.jsx("option",{value:x.id,children:x.nome},x.id))})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Preço em R$ *"}),o.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:T,onChange:x=>P(x.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),o.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:F,onChange:x=>B(x.target.value)})]}),o.jsxs("div",{className:"estoque-box",children:[o.jsxs("button",{type:"button",className:"estoque-switch",onClick:()=>I(x=>!x),children:[m?o.jsx(ku,{size:22,color:"var(--status-pronto)"}):o.jsx(xu,{size:22,color:"var(--app-ink-muted)"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Controlar estoque deste produto"}),o.jsx("small",{children:m?"O caixa não consegue vender depois que as unidades acabam.":"Desligado: venda ilimitada, sem contagem de unidades."})]})]}),m&&o.jsxs("div",{className:"estoque-campos",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Quantidade em estoque"}),o.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:Q,onChange:x=>D(x.target.value)})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Alerta mínimo"}),o.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:ge,onChange:x=>De(x.target.value)})]})]})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),o.jsxs("button",{type:"submit",className:"btn btn-primary",children:[o.jsx(Pr,{size:18})," Salvar Produto"]})]})]})]})}),j&&o.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:o.jsxs("div",{className:"modal-card",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:[o.jsx(fu,{size:20,color:"var(--status-preparo)"}),o.jsx("span",{children:"Nova Categoria do Cardápio"})]}),o.jsxs("form",{onSubmit:K,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:Ee,onChange:x=>A(x.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),o.jsx("div",{className:"icone-selector",children:op.map(x=>o.jsxs("button",{type:"button",className:`icone-opt ${$===x.id?"selected":""}`,onClick:()=>V(x.id),children:[x.component,o.jsx("span",{children:x.nome})]},x.id))})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>N(!1),children:"Cancelar"}),o.jsxs("button",{type:"submit",className:"btn btn-success",children:[o.jsx(Pr,{size:18})," Criar Categoria"]})]})]})]})})]})}function ug({pedidos:e,operador:t}){const[r,n]=z.useState(null),[i,s]=z.useState("hoje"),[a,l]=z.useState("todos"),[u,c]=z.useState(""),[k,v]=z.useState(""),[h,y]=z.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Ja,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const j=m=>{n(I=>I===m?null:m)},N=(m,I)=>{m.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${I}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(Q=>Q.json()).catch(Q=>console.error("Erro ao quitar pagamento:",Q))},p=m=>m.statusPagamento==="pago"?!1:m.statusPagamento==="pendente_pagamento"||m.formaPagamento==="pagar_depois",d=e.filter(m=>{if(u.trim()){const D=u.toLowerCase().trim(),ge=`#${m.numero}`.toLowerCase(),De=(m.cliente||"").toLowerCase(),Ee=(m.telefoneCliente||"").toLowerCase();if(!(ge.includes(D)||De.includes(D)||Ee.includes(D)))return!1}if(a==="pagos"&&p(m)||a==="fiado"&&!p(m)||a==="entregues"&&m.status!=="entregue"||a==="cancelados"&&m.status!=="cancelado"||a!=="cancelados"&&m.status==="cancelado")return!1;if(!m.criadoEm)return!0;const I=new Date(m.criadoEm),Q=new Date;if(i==="hoje")return I.toDateString()===Q.toDateString();if(i==="ontem"){const D=new Date;return D.setDate(Q.getDate()-1),I.toDateString()===D.toDateString()}else if(i==="7dias"){const D=new Date;return D.setDate(Q.getDate()-7),I>=D}else if(i==="custom"){if(k){const D=new Date(k);if(D.setHours(0,0,0,0),I<D)return!1}if(h){const D=new Date(h);if(D.setHours(23,59,59,999),I>D)return!1}}return!0}),f=d.filter(m=>m.status!=="cancelado"),w=f.filter(m=>!p(m)),E=f.filter(m=>p(m)),_=w.reduce((m,I)=>m+(Number(I.total)||0),0),T=E.reduce((m,I)=>m+(Number(I.total)||0),0),P=f.length,F=P>0?(_+T)/P:0,B=m=>{if(m.formaPagamento==="pagar_depois"||m.statusPagamento==="pendente_pagamento"){const I=m.dataCobranca?new Date(m.dataCobranca).toLocaleDateString():"Sem Data";return m.statusPagamento==="pago"?o.jsxs("span",{className:"badge badge-pronto",children:[o.jsx(Pr,{size:12})," Pagar Depois (Quitado)"]}):o.jsxs("span",{className:"badge badge-preparo",children:[o.jsx(mo,{size:12})," Pagar Depois (",I,")"]})}return o.jsxs("span",{className:"badge badge-pendente",children:[o.jsx(ki,{size:12})," ",m.formaPagamento?m.formaPagamento.toUpperCase():"PIX"]})};return o.jsxs("div",{className:"vendas-container",children:[o.jsx("style",{children:`
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
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        /* Card de Filtros com Dropdown Selects */
        .vendas-filtros-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          display: flex;
          gap: 0.85rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .vendas-search-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.9rem;
          flex: 1.5;
          min-width: 240px;
          min-height: 44px;
        }

        .vendas-search-input {
          border: none !important;
          background: transparent !important;
          color: var(--text-title) !important;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.92rem;
          outline: none;
          width: 100%;
        }

        .dropdown-filter-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          min-width: 180px;
          flex: 1;
        }

        .dropdown-filter-select {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.55rem 0.85rem;
          color: var(--text-title);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
          width: 100%;
          min-height: 44px;
          transition: border-color 130ms ease;
        }

        .dropdown-filter-select:focus {
          border-color: var(--primary);
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

        /* Tabela de Vendas Desktop */
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

        .vendas-table tr.row-exp:hover td {
          background: var(--app-surface-2);
          cursor: pointer;
        }

        .exp-details-box {
          background: var(--app-surface-2);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin: 0.4rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* Lista Compacta Mobile (< 768px) */
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
          .vendas-filtros-card {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}),o.jsxs("div",{className:"vendas-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Us,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),o.jsx("div",{className:"badge badge-pronto",children:o.jsxs("span",{children:[d.length," Registros Encontrados"]})})]}),o.jsxs("div",{className:"vendas-filtros-card",children:[o.jsxs("div",{className:"vendas-search-box",children:[o.jsx(Ga,{size:18,color:"var(--primary)"}),o.jsx("input",{type:"text",className:"vendas-search-input",placeholder:"Buscar por comanda #, cliente ou WhatsApp...",value:u,onChange:m=>c(m.target.value)})]}),o.jsx("div",{className:"dropdown-filter-group",children:o.jsxs("select",{className:"dropdown-filter-select",value:i,onChange:m=>s(m.target.value),children:[o.jsx("option",{value:"hoje",children:"Período: Hoje"}),o.jsx("option",{value:"ontem",children:"Período: Ontem"}),o.jsx("option",{value:"7dias",children:"Período: Últimos 7 dias"}),o.jsx("option",{value:"todos",children:"Período: Todos os Pedidos"}),o.jsx("option",{value:"custom",children:"Período: Data Personalizada"})]})}),o.jsx("div",{className:"dropdown-filter-group",children:o.jsxs("select",{className:"dropdown-filter-select",value:a,onChange:m=>l(m.target.value),children:[o.jsx("option",{value:"todos",children:"Status: Todos os Pedidos"}),o.jsx("option",{value:"pagos",children:"Status: Quitados / Pagos"}),o.jsx("option",{value:"fiado",children:"Status: Pagar Depois (Fiado)"}),o.jsx("option",{value:"entregues",children:"Status: Entregues"}),o.jsx("option",{value:"cancelados",children:"Status: Cancelados"})]})})]}),i==="custom"&&o.jsxs("div",{className:"vendas-filtros-card",style:{background:"var(--app-surface-2)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[o.jsx(Vs,{size:18,color:"var(--primary)"}),o.jsx("span",{style:{color:"var(--text-title)"},children:"Data Inicial:"}),o.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:k,onChange:m=>v(m.target.value)})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[o.jsx("span",{style:{color:"var(--text-title)"},children:"Data Final:"}),o.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:h,onChange:m=>y(m.target.value)})]})]}),o.jsxs("div",{className:"metrics-grid",children:[o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:o.jsx(Jd,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),o.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",_.toFixed(2)]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:o.jsx(Vs,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),o.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",T.toFixed(2)]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:o.jsx(xt,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),o.jsxs("div",{className:"metric-value",children:[P," comanda(s)"]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",children:o.jsx(Xm,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Ticket Médio"}),o.jsxs("div",{className:"metric-value",children:["R$ ",F.toFixed(2)]})]})]})]}),o.jsx("div",{className:"vendas-table-wrapper",children:o.jsxs("table",{className:"vendas-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"}}),o.jsx("th",{children:"Comanda"}),o.jsx("th",{children:"Data / Horário"}),o.jsx("th",{children:"Cliente / Contato"}),o.jsx("th",{children:"Forma Pagamento"}),o.jsx("th",{children:"Valor Total"}),o.jsx("th",{children:"Status Pedido"}),o.jsx("th",{children:"Atendente / Cozinha"}),o.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),o.jsx("tbody",{children:d.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):d.map(m=>{const I=r===m.id,Q=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return o.jsxs(Mu.Fragment,{children:[o.jsxs("tr",{className:"row-exp",onClick:()=>j(m.id),children:[o.jsx("td",{style:{textAlign:"center"},children:I?o.jsx(Ws,{size:16,color:"var(--primary)"}):o.jsx(Hs,{size:16,color:"var(--app-ink-muted)"})}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",m.numero]})}),o.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:Q}),o.jsxs("td",{children:[o.jsx("strong",{style:{color:"var(--primary)"},children:m.cliente}),m.telefoneCliente&&o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[o.jsx(Ks,{size:12}),o.jsx("span",{children:m.telefoneCliente})]})]}),o.jsx("td",{children:B(m)}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(m.total)||0).toFixed(2)]})}),o.jsx("td",{children:o.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})}),o.jsxs("td",{style:{fontSize:"0.82rem"},children:[o.jsxs("div",{children:["Caixa: ",o.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&o.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",m.preparadoPor]})]}),o.jsx("td",{children:o.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:p(m)?o.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:D=>N(D,m.id),children:[o.jsx(Pr,{size:14})," Quitar / Marcar Pago"]}):o.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Wi,{size:15})," Quitado"]})})})]}),I&&o.jsx("tr",{children:o.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:o.jsxs("div",{className:"exp-details-box",children:[o.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsx(Zd,{size:16,color:"var(--primary)"}),o.jsxs("span",{children:["Itens Lançados na Comanda #",m.numero,":"]})]}),m.itens&&m.itens.length>0?o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:m.itens.map((D,ge)=>o.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:[D.quantidade,"x"]})," ",D.nome,D.observacao&&o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",D.observacao]})]}),o.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(D.preco*D.quantidade).toFixed(2)]})]},ge))}):o.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},m.id)})})]})}),o.jsx("div",{className:"vendas-mobile-list",children:d.length===0?o.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):d.map(m=>{const I=r===m.id,Q=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return o.jsxs("div",{className:"venda-card-mobile",onClick:()=>j(m.id),children:[o.jsxs("div",{className:"venda-card-summary",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",m.numero]}),o.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:m.cliente})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(m.total)||0).toFixed(2)]}),I?o.jsx(Ws,{size:16,color:"var(--primary)"}):o.jsx(Hs,{size:16,color:"var(--app-ink-muted)"})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[o.jsx("div",{children:B(m)}),o.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})]}),I&&o.jsxs("div",{className:"venda-card-details",children:[o.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",o.jsx("strong",{children:Q})]}),m.telefoneCliente&&o.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[o.jsx(Ks,{size:13}),o.jsxs("span",{children:["Contato / WhatsApp: ",o.jsx("strong",{children:m.telefoneCliente})]})]}),o.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[o.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),m.itens&&m.itens.length>0?o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:m.itens.map((D,ge)=>o.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[o.jsxs("span",{children:[o.jsxs("strong",{children:[D.quantidade,"x"]})," ",D.nome," ",D.observacao?`(${D.observacao})`:""]}),o.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(D.preco*D.quantidade).toFixed(2)]})]},ge))}):o.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[o.jsxs("span",{children:["Caixa: ",o.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&o.jsxs("span",{children:["Cozinha: ",o.jsx("strong",{children:m.preparadoPor})]})]}),o.jsx("div",{style:{marginTop:"0.3rem",display:"flex",justifyContent:"flex-end"},children:p(m)?o.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:D=>N(D,m.id),children:[o.jsx(Pr,{size:14})," Quitar / Marcar Pago"]}):o.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Wi,{size:15})," Pagamento Confirmado / Quitado"]})})]})]},m.id)})})]})}function cg({operador:e}){const[t,r]=z.useState([]),[n,i]=z.useState(!1),[s,a]=z.useState(!1),[l,u]=z.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[c,k]=z.useState({}),[v,h]=z.useState(null),y=e&&e.role==="master",[g,j]=z.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[N,p]=z.useState(!1);z.useEffect(()=>{y&&(w(),d())},[y]);const d=()=>{fetch("/api/pix-config").then(m=>m.json()).then(m=>{m&&m.chavePix&&j(m)}).catch(m=>console.error("Erro ao carregar PIX config:",m))},f=m=>{m.preventDefault(),p(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(I=>I.json()).then(I=>{p(!1),I&&I.status==="success"?(h("Chave PIX atualizada com sucesso!"),setTimeout(()=>h(null),4e3)):alert(I.error||"Erro ao salvar chave PIX.")}).catch(()=>{p(!1),alert("Erro de conexão ao salvar chave PIX.")})},w=()=>{fetch("/api/users").then(m=>m.json()).then(m=>r(m)).catch(m=>console.error("Erro ao carregar usuários:",m))};if(!y)return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Ja,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const E=m=>{k(I=>({...I,[m]:!I[m]}))},_=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},T=m=>{u({...m}),a(!0),i(!0)},P=m=>{if(m.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const I=s?`/api/users/${l.id}`:"/api/users";fetch(I,{method:s?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(D=>D.json()).then(D=>{D&&D.status==="success"?(h(s?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),w(),setTimeout(()=>h(null),4e3)):alert(D.error||"Erro ao salvar usuário.")}).catch(D=>alert("Erro de conexão com o servidor."))},F=(m,I)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${I}"?`)&&fetch(`/api/users/${m}`,{method:"DELETE"}).then(Q=>Q.json()).then(Q=>{Q&&Q.status==="success"?(h(`Conta de "${I}" excluída com sucesso.`),w(),setTimeout(()=>h(null),4e3)):alert(Q.error||"Erro ao excluir conta.")})},B=m=>{switch(m){case"master":return o.jsxs("span",{className:"badge badge-role-master",children:[o.jsx(Pm,{size:13})," Master (Admin)"]});case"caixa":return o.jsxs("span",{className:"badge badge-role-caixa",children:[o.jsx(xt,{size:13})," Caixa (Atendente)"]});case"cozinha":return o.jsxs("span",{className:"badge badge-role-cozinha",children:[o.jsx(An,{size:13})," Cozinha (KDS)"]});case"tv":return o.jsxs("span",{className:"badge badge-role-tv",children:[o.jsx(Xi,{size:13})," Monitor TV"]});default:return o.jsx("span",{className:"badge badge-role-tv",children:m})}};return o.jsxs("div",{className:"usuarios-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"usuarios-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Xs,{size:26,color:"var(--primary)"}),o.jsx("span",{children:"Gestão de Contas & Operadores"})]}),o.jsxs("button",{className:"btn btn-primary",onClick:_,children:[o.jsx(Gm,{size:18})," Nova Conta"]})]}),v&&o.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[o.jsx(Ya,{size:18}),o.jsx("span",{children:v})]}),o.jsx("div",{className:"usuarios-table-wrapper",children:o.jsxs("table",{className:"usuarios-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nome Completo"}),o.jsx("th",{children:"Usuário de Login"}),o.jsx("th",{children:"Função / Permissão"}),o.jsx("th",{children:"Senha de Acesso"}),o.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),o.jsx("tbody",{children:t.map(m=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--text-title)"},children:m.nome})}),o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--primary)"},children:m.usuario})}),o.jsx("td",{children:B(m.role)}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:c[m.id]?m.senha:"••••••••"}),o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>E(m.id),title:"Revelar/Ocultar Senha",children:c[m.id]?o.jsx(Im,{size:14}):o.jsx(Dm,{size:14})})]})}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>T(m),children:[o.jsx(Km,{size:14})," Editar"]}),m.usuario!=="admin"&&o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>F(m.id,m.nome),children:[o.jsx(Ki,{size:14})," Excluir"]})]})})]},m.id))})]})}),o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[o.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx(Fm,{size:20,color:"var(--primary)"}),o.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),o.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",o.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),o.jsxs("form",{onSubmit:f,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),o.jsxs("select",{className:"form-input",value:g.tipoChave,onChange:m=>j({...g,tipoChave:m.target.value}),children:[o.jsx("option",{value:"email",children:"E-mail"}),o.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),o.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),o.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Chave PIX *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:g.chavePix,onChange:m=>j({...g,chavePix:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:g.nomeBeneficiario,onChange:m=>j({...g,nomeBeneficiario:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Cidade *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:g.cidadeBeneficiario,onChange:m=>j({...g,cidadeBeneficiario:m.target.value}),required:!0})]}),o.jsx("div",{children:o.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:N,children:N?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-card",children:[o.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx(Dr,{size:20,color:"var(--primary)"}),s?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),o.jsxs("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:m=>u({...l,nome:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Usuário de Login *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:m=>u({...l,usuario:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:m=>u({...l,senha:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),o.jsxs("select",{className:"form-input",value:l.role,onChange:m=>u({...l,role:m.target.value}),children:[o.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),o.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),o.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),o.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),o.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:s?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function dg({logs:e,operador:t}){const[r,n]=z.useState(""),[i,s]=z.useState("todas"),[a,l]=z.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Ja,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const c=h=>{l(y=>y===h?null:h)},k=e.filter(h=>{const y=i==="todas"||h.acao===i,g=r.toLowerCase().trim(),j=!g||String(h.numeroPedido).includes(g)||h.cliente&&h.cliente.toLowerCase().includes(g)||h.usuario&&h.usuario.toLowerCase().includes(g)||h.descricao&&h.descricao.toLowerCase().includes(g);return y&&j}),v=h=>{switch(h){case"criacao":return o.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Am,{size:13})," Criação Caixa"]});case"preparo":return o.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(An,{size:13})," Em Preparo"]});case"pronto":return o.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Xa,{size:13})," Pronto / Chamada TV"]});case"entregue":return o.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Ya,{size:13})," Entregue"]});default:return o.jsx("span",{className:"badge badge-entregue",children:h})}};return o.jsxs("div",{className:"logs-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"logs-topbar",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Qs,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Logs de Auditoria"})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ga,{size:16,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:h=>n(h.target.value)})]})]}),o.jsxs("div",{className:"logs-pills-bar",children:[o.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>s("todas"),children:["Todos (",e.length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>s("criacao"),children:["Criação (",e.filter(h=>h.acao==="criacao").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>s("preparo"),children:["Preparo (",e.filter(h=>h.acao==="preparo").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>s("pronto"),children:["Chamada (",e.filter(h=>h.acao==="pronto").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>s("entregue"),children:["Entregas (",e.filter(h=>h.acao==="entregue").length,")"]})]}),o.jsx("div",{className:"logs-table-wrapper",children:o.jsxs("table",{className:"logs-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Horário"}),o.jsx("th",{children:"Operador"}),o.jsx("th",{children:"Ação"}),o.jsx("th",{children:"Comanda / Cliente"}),o.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),o.jsx("tbody",{children:k.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):k.map(h=>{const y=new Date(h.timestamp),g=`${y.toLocaleDateString()} ${y.toLocaleTimeString()}`;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(mo,{size:13}),o.jsx("span",{children:g})]})}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[o.jsx(Dr,{size:14,color:"var(--primary)"}),o.jsx("span",{children:h.usuario})]})}),o.jsx("td",{children:v(h.acao)}),o.jsxs("td",{children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:["#",h.numeroPedido]}),o.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",h.cliente,")"]})]}),o.jsxs("td",{children:[o.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:h.itens.map((j,N)=>o.jsxs("div",{className:"item-chip",children:[o.jsx(tp,{size:12,color:"var(--status-pronto)"}),o.jsxs("strong",{style:{color:"var(--primary)"},children:[j.quantidade,"x"]}),o.jsx("span",{children:j.nome}),o.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(j.preco*j.quantidade).toFixed(2),")"]}),j.observacao&&o.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",j.observacao,"]"]})]},N))})]})]},h.id)})})]})}),o.jsx("div",{className:"logs-mobile-list",children:k.length===0?o.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):k.map(h=>{const y=new Date(h.timestamp),g=y.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),j=a===h.id;return o.jsxs("div",{className:"log-card-mobile",onClick:()=>c(h.id),children:[o.jsxs("div",{className:"log-card-summary",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",h.numeroPedido]}),o.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:h.cliente})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[v(h.acao),o.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:g}),j?o.jsx(Ws,{size:16,color:"var(--app-ink-muted)"}):o.jsx(Hs,{size:16,color:"var(--app-ink-muted)"})]})]}),j&&o.jsxs("div",{className:"log-card-details",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[o.jsx(Dr,{size:13,color:"var(--primary)"}),o.jsxs("span",{children:["Operador: ",o.jsx("strong",{children:h.usuario})]}),o.jsxs("span",{style:{marginLeft:"auto"},children:[y.toLocaleDateString()," ",y.toLocaleTimeString()]})]}),o.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:h.itens.map((N,p)=>o.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:[N.quantidade,"x"]})," ",N.nome," (R$ ",(N.preco*N.quantidade).toFixed(2),")",N.observacao&&o.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",N.observacao,"]"]})]},p))})]})]},h.id)})})]})}const Z=xi(window.location.origin,{transports:["websocket","polling"]});function pg(){const[e,t]=z.useState("caixa"),[r,n]=z.useState(!1),[i,s]=z.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");z.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const a=()=>{s(C=>C==="escuro"?"claro":"escuro")},[l,u]=z.useState(()=>{try{const C=localStorage.getItem("operador_lanchonete");return C?JSON.parse(C):null}catch{return null}}),[c,k]=z.useState(""),[v,h]=z.useState(""),[y,g]=z.useState(null),[j,N]=z.useState(!1),[p,d]=z.useState([]),[f,w]=z.useState({categorias:[],produtos:[]}),[E,_]=z.useState([]),[T,P]=z.useState(null),F=C=>C?Array.isArray(C)?{categorias:[],produtos:C}:{categorias:Array.isArray(C.categorias)?C.categorias:[],produtos:Array.isArray(C.produtos)?C.produtos:[]}:{categorias:[],produtos:[]};z.useEffect(()=>{fetch("/api/menu").then(C=>C.json()).then(C=>w(F(C))).catch(C=>console.error("Erro ao carregar cardápio via REST:",C)),fetch("/api/logs").then(C=>C.json()).then(C=>_(C)).catch(C=>console.error("Erro ao buscar logs:",C))},[]);const B=C=>{if(C.preventDefault(),g(null),!c.trim()||!v.trim()){g("Preencha usuário e senha.");return}N(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:c.trim(),senha:v.trim()})}).then(L=>L.json()).then(L=>{if(N(!1),L&&L.status==="success"){const K=L.user;u(K),localStorage.setItem("operador_lanchonete",JSON.stringify(K)),K.role==="cozinha"?t("cozinha"):K.role==="tv"?t("chamada"):t("caixa")}else g(L.error||"Credenciais inválidas.")}).catch(L=>{N(!1),g("Erro de conexão com o servidor.")})},m=()=>{u(null),localStorage.removeItem("operador_lanchonete"),k(""),h(""),g(null)};z.useEffect(()=>(Z.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),Z.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),Z.on("pedidos_iniciais",C=>{d(Array.isArray(C)?C:[])}),Z.on("cardapio_inicial",C=>{w(F(C))}),Z.on("novo_pedido_criado",C=>{d(L=>[C,...L.filter(K=>K.id!==C.id)])}),Z.on("status_pedido_atualizado",C=>{d(L=>L.map(K=>K.id===C.id?C:K)),P(L=>L&&L.id===C.id?C:L)}),Z.on("pedido_chamado",C=>{P(C)}),Z.on("cardapio_atualizado",C=>{w(F(C))}),Z.on("estoque_atualizado",C=>{!Array.isArray(C)||C.length===0||w(L=>({...L,produtos:L.produtos.map(K=>{const ae=C.find(S=>S.produtoId===K.id);return ae?{...K,controlaEstoque:ae.controlaEstoque,estoque:ae.estoque,estoqueMinimo:ae.estoqueMinimo,reservado:ae.reservado,disponivelEstoque:ae.disponivel}:K})}))}),Z.on("novo_log_auditoria",C=>{_(L=>[C,...L.filter(K=>K.id!==C.id)])}),()=>{Z.off("connect"),Z.off("disconnect"),Z.off("pedidos_iniciais"),Z.off("cardapio_inicial"),Z.off("novo_pedido_criado"),Z.off("status_pedido_atualizado"),Z.off("pedido_chamado"),Z.off("cardapio_atualizado"),Z.off("estoque_atualizado"),Z.off("novo_log_auditoria")}),[]);const I=(C,L)=>{Z.emit("criar_pedido",{...C,criadoPor:l?`${l.nome}`:"Caixa"},L)},Q=(C,L)=>{Z.emit("mudar_status_pedido",{id:C,status:L,preparadoPor:l?`${l.nome}`:"Cozinha"})},D=(C,L,K)=>{d(ae=>ae.map(S=>{if(S.id!==C)return S;const x=(S.itens||[]).map((je,_t)=>{if(_t!==L)return je;const Vr=K!==void 0?K:!je.entregue;return{...je,entregue:Vr}}),q=x.reduce((je,_t)=>je+(_t.quantidade||1),0),U=x.filter(je=>je.entregue).reduce((je,_t)=>je+(_t.quantidade||1),0);let O=S.status;U>=q?O="entregue":U>0?O="entrega_parcial":(S.status==="entregue"||S.status==="entrega_parcial")&&(O="em_preparo");const et={...S,itens:x,status:O};return P(je=>je&&je.id===C?et:je),et})),Z.emit("alternar_item_entregue",{orderId:C,itemIndex:L,entregue:K,operadorNome:l?`${l.nome}`:"Atendente"}),fetch(`/api/orders/${C}/itens/${L}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:K,operadorNome:l?`${l.nome}`:"Atendente"})}).then(ae=>ae.ok?ae.json():null).then(ae=>{ae&&ae.order&&d(S=>S.map(x=>x.id===ae.order.id?ae.order:x))}).catch(ae=>console.error("Erro ao alternar item:",ae))},ge=(C,L,K)=>{Z.emit("reservar_item",{produtoId:C,quantidade:L||1},K)},De=(C,L,K)=>{Z.emit("liberar_item",{produtoId:C,quantidade:L||1},K)},Ee=C=>{Z.emit("liberar_carrinho",{},C)},A=(C,L)=>fetch(`/api/menu/produto/${C}/estoque`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({...L,operadorNome:l?l.nome:"Gerente"})}).then(K=>K.json()).catch(K=>(console.error("Erro ao ajustar estoque:",K),{error:"Erro de conexão ao ajustar o estoque."})),$=C=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar produto:",L))},V=C=>{fetch(`/api/menu/produto/${C}`,{method:"DELETE"}).then(L=>L.json()).catch(L=>console.error("Erro ao excluir produto:",L))},Y=C=>{fetch(`/api/menu/produto/${C}/disponivel`,{method:"PATCH"}).then(L=>L.json()).catch(L=>console.error("Erro ao alterar disponibilidade:",L))},J=C=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar categoria:",L))},qe=C=>fetch(`/api/menu/categoria/${C}`,{method:"DELETE"}).then(L=>L.json());if(!l)return o.jsxs("div",{className:"login-gate-screen",children:[o.jsx("style",{children:`
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
        `}),o.jsxs("div",{className:"login-gate-card",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("div",{className:"login-brand",children:o.jsxs("div",{children:[o.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),o.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),o.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar Tema",children:i==="escuro"?o.jsx(yu,{size:16,color:"var(--status-preparo)"}):o.jsx(mu,{size:16,color:"var(--primary)"})})]}),y&&o.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[o.jsx(Ym,{size:18}),o.jsx("span",{children:y})]}),o.jsxs("form",{onSubmit:B,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Usuário *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:c,onChange:C=>k(C.target.value),required:!0,autoFocus:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Senha *"}),o.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:v,onChange:C=>h(C.target.value),required:!0})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:j,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[j?"Autenticando...":"Entrar no Sistema"," ",o.jsx(Gd,{size:18})]})]})]})]});const _e=l.role==="master"||l.role==="caixa",We=l.role==="master",we=l.role==="master",ve=l.role==="master"||l.role==="caixa",gt=l.role==="master"||l.role==="caixa";return o.jsxs("div",{className:"app-container",children:[o.jsxs("header",{className:"app-header",children:[o.jsx("div",{className:"brand-logo",children:o.jsxs("div",{children:[o.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),o.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),o.jsxs("nav",{className:"nav-tabs",children:[_e&&o.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[o.jsx(xt,{size:18})," Caixa"]}),o.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[o.jsx(An,{size:18})," Cozinha (KDS)"]}),o.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[o.jsx(Xi,{size:18})," Chamada TV"]}),ve&&o.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[o.jsx(Us,{size:18})," Vendas"]}),gt&&o.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[o.jsx(Qs,{size:18})," Logs"]}),We&&o.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[o.jsx(qr,{size:18})," Cardápio"]}),we&&o.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[o.jsx(Xs,{size:18})," Contas"]})]}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("button",{className:"user-badge-btn",onClick:m,title:`Operador: ${l.nome} (${l.role.toUpperCase()}) - Clique para sair`,children:[o.jsx(Dr,{size:15,style:{flexShrink:0}}),o.jsx("span",{className:"user-badge-name",children:l.nome}),o.jsx(Bm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),o.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?o.jsxs(o.Fragment,{children:[o.jsx(yu,{size:16,color:"var(--status-preparo)"}),o.jsx("span",{className:"theme-label",children:"Claro"})]}):o.jsxs(o.Fragment,{children:[o.jsx(mu,{size:16,color:"var(--blue-link)"}),o.jsx("span",{className:"theme-label",children:"Escuro"})]})}),o.jsxs("div",{className:"socket-status",children:[o.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?o.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(tg,{size:14})," Online"]}):o.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(eg,{size:14})," Conectando..."]})]})]})]}),o.jsxs("main",{className:"main-content",children:[e==="caixa"&&(_e?o.jsx(ig,{menu:f,operador:l,onEnviarPedido:I,onReservarItem:ge,onLiberarItem:De,onLiberarCarrinho:Ee}):o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(hu,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),o.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",l.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&o.jsx(og,{pedidos:p,operador:l,onMudarStatus:Q,onAlternarItemEntregue:D}),e==="chamada"&&o.jsx(ag,{pedidos:p,ultimoPedidoChamado:T,onMudarStatus:Q,onAlternarItemEntregue:D}),e==="vendas"&&o.jsx(ug,{pedidos:p,operador:l}),e==="logs"&&o.jsx(dg,{logs:E,operador:l}),e==="cardapio"&&(We?o.jsx(lg,{menu:f,onSalvarProduto:$,onExcluirProduto:V,onToggleDisponivel:Y,onSalvarCategoria:J,onExcluirCategoria:qe,onAjustarEstoque:A}):o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(hu,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&o.jsx(cg,{operador:l})]}),o.jsx("nav",{className:"mobile-bottom-nav",children:o.jsxs("div",{className:"mobile-nav-items",children:[_e&&o.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[o.jsx(xt,{size:20}),o.jsx("span",{children:"Caixa"})]}),o.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[o.jsx(An,{size:20}),o.jsx("span",{children:"Cozinha"})]}),o.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[o.jsx(Xi,{size:20}),o.jsx("span",{children:"TV Balcão"})]}),ve&&o.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[o.jsx(Us,{size:20}),o.jsx("span",{children:"Vendas"})]}),gt&&o.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[o.jsx(Qs,{size:20}),o.jsx("span",{children:"Logs"})]}),We&&o.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[o.jsx(qr,{size:20}),o.jsx("span",{children:"Cardápio"})]}),we&&o.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[o.jsx(Xs,{size:20}),o.jsx("span",{children:"Contas"})]})]})})]})}Ho.createRoot(document.getElementById("root")).render(o.jsx(Mu.StrictMode,{children:o.jsx(pg,{})}));
