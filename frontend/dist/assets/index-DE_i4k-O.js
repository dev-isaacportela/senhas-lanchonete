(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function vp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oc={exports:{}},rs={},Lc={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),yp=Symbol.for("react.portal"),xp=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),bp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Np=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),cl=Symbol.iterator;function zp(e){return e===null||typeof e!="object"?null:(e=cl&&e[cl]||e["@@iterator"],typeof e=="function"?e:null)}var Ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dc=Object.assign,qc={};function Hr(e,t,r){this.props=e,this.context=t,this.refs=qc,this.updater=r||Ic}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fc(){}Fc.prototype=Hr.prototype;function la(e,t,r){this.props=e,this.context=t,this.refs=qc,this.updater=r||Ic}var ca=la.prototype=new Fc;ca.constructor=la;Dc(ca,Hr.prototype);ca.isPureReactComponent=!0;var ul=Array.isArray,Bc=Object.prototype.hasOwnProperty,ua={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,r){var n,s={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Bc.call(t,n)&&!$c.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)s[n]===void 0&&(s[n]=l[n]);return{$$typeof:qn,type:e,key:o,ref:a,props:s,_owner:ua.current}}function _p(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function Pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var dl=/\/+/g;function Cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pp(""+e.key):t.toString(36)}function ci(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qn:case yp:a=!0}}if(a)return a=e,s=s(a),e=n===""?"."+Cs(a,0):n,ul(s)?(r="",e!=null&&(r=e.replace(dl,"$&/")+"/"),ci(s,t,r,"",function(u){return u})):s!=null&&(da(s)&&(s=_p(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(dl,"$&/")+"/")+e)),t.push(s)),1;if(a=0,n=n===""?".":n+":",ul(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+Cs(o,l);a+=ci(o,t,r,c,s)}else if(c=zp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+Cs(o,l++),a+=ci(o,t,r,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Vn(e,t,r){if(e==null)return e;var n=[],s=0;return ci(e,n,"","",function(o){return t.call(r,o,s++)}),n}function Tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ui={transition:null},Ap={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ui,ReactCurrentOwner:ua};function Vc(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Vn,forEach:function(e,t,r){Vn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Vn(e,function(){t++}),t},toArray:function(e){return Vn(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Hr;W.Fragment=xp;W.Profiler=jp;W.PureComponent=la;W.StrictMode=kp;W.Suspense=Cp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;W.act=Vc;W.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Dc({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ua.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Bc.call(t,c)&&!$c.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:qn,type:e.type,key:s,ref:o,props:n,_owner:a}};W.createContext=function(e){return e={$$typeof:bp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};W.createElement=Uc;W.createFactory=function(e){var t=Uc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Sp,render:e}};W.isValidElement=da;W.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:Tp}};W.memo=function(e,t){return{$$typeof:Np,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ui.transition;ui.transition={};try{e()}finally{ui.transition=t}};W.unstable_act=Vc;W.useCallback=function(e,t){return Pe.current.useCallback(e,t)};W.useContext=function(e){return Pe.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};W.useEffect=function(e,t){return Pe.current.useEffect(e,t)};W.useId=function(){return Pe.current.useId()};W.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};W.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Pe.current.useMemo(e,t)};W.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};W.useRef=function(e){return Pe.current.useRef(e)};W.useState=function(e){return Pe.current.useState(e)};W.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};W.useTransition=function(){return Pe.current.useTransition()};W.version="18.3.1";Lc.exports=W;var z=Lc.exports;const Hc=vp(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=z,Mp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Lp=Object.prototype.hasOwnProperty,Ip=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dp={key:!0,ref:!0,__self:!0,__source:!0};function Wc(e,t,r){var n,s={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Lp.call(t,n)&&!Dp.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Mp,type:e,key:o,ref:a,props:s,_owner:Ip.current}}rs.Fragment=Op;rs.jsx=Wc;rs.jsxs=Wc;Oc.exports=rs;var i=Oc.exports,eo={},Qc={exports:{}},We={},Kc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,A){var F=N.length;N.push(A);e:for(;0<F;){var X=F-1>>>1,Y=N[X];if(0<s(Y,A))N[X]=A,N[F]=Y,F=X;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var A=N[0],F=N.pop();if(F!==A){N[0]=F;e:for(var X=0,Y=N.length,qe=Y>>>1;X<qe;){var Ee=2*(X+1)-1,ut=N[Ee],he=Ee+1,Fe=N[he];if(0>s(ut,F))he<Y&&0>s(Fe,ut)?(N[X]=Fe,N[he]=F,X=he):(N[X]=ut,N[Ee]=F,X=Ee);else if(he<Y&&0>s(Fe,F))N[X]=Fe,N[he]=F,X=he;else break e}}return A}function s(N,A){var F=N.sortIndex-A.sortIndex;return F!==0?F:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],y=1,h=null,m=3,v=!1,g=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var A=r(u);A!==null;){if(A.callback===null)n(u);else if(A.startTime<=N)n(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=r(u)}}function j(N){if(b=!1,p(N),!g)if(r(c)!==null)g=!0,x(R);else{var A=r(u);A!==null&&H(j,A.startTime-N)}}function R(N,A){g=!1,b&&(b=!1,f(M),M=-1),v=!0;var F=m;try{for(p(A),h=r(c);h!==null&&(!(h.expirationTime>A)||N&&!C());){var X=h.callback;if(typeof X=="function"){h.callback=null,m=h.priorityLevel;var Y=X(h.expirationTime<=A);A=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(c)&&n(c),p(A)}else n(c);h=r(c)}if(h!==null)var qe=!0;else{var Ee=r(u);Ee!==null&&H(j,Ee.startTime-A),qe=!1}return qe}finally{h=null,m=F,v=!1}}var P=!1,O=null,M=-1,$=5,w=-1;function C(){return!(e.unstable_now()-w<$)}function V(){if(O!==null){var N=e.unstable_now();w=N;var A=!0;try{A=O(!0,N)}finally{A?se():(P=!1,O=null)}}else P=!1}var se;if(typeof d=="function")se=function(){d(V)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ke=de.port2;de.port1.onmessage=V,se=function(){Ke.postMessage(null)}}else se=function(){T(V,0)};function x(N){O=N,P||(P=!0,se())}function H(N,A){M=T(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,x(R))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var F=m;m=A;try{return N()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=m;m=N;try{return A()}finally{m=F}},e.unstable_scheduleCallback=function(N,A,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=F+Y,N={id:y++,callback:A,priorityLevel:N,startTime:F,expirationTime:Y,sortIndex:-1},F>X?(N.sortIndex=F,t(u,N),r(c)===null&&N===r(u)&&(b?(f(M),M=-1):b=!0,H(j,F-X))):(N.sortIndex=Y,t(c,N),g||v||(g=!0,x(R))),N},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(N){var A=m;return function(){var F=m;m=A;try{return N.apply(this,arguments)}finally{m=F}}}})(Xc);Kc.exports=Xc;var qp=Kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=z,He=qp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yc=new Set,jn={};function dr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(jn[e]=t,e=0;e<t.length;e++)Yc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pl={},fl={};function $p(e){return to.call(fl,e)?!0:to.call(pl,e)?!1:Bp.test(e)?fl[e]=!0:(pl[e]=!0,!1)}function Up(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,t,r,n){if(t===null||typeof t>"u"||Up(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,r,n,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pa,fa);we[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pa,fa);we[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pa,fa);we[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,r,n){var s=we.hasOwnProperty(t)?we[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vp(t,r,s,n)&&(r=null),n||s===null?$p(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var zt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=Symbol.for("react.element"),yr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),ha=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),io=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Zc=Symbol.for("react.offscreen"),ml=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=ml&&e[ml]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ns;function on(e){if(Ns===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ns=t&&t[1]||""}return`
`+Ns+e}var Es=!1;function zs(e,t){if(!e||Es)return"";Es=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=n.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?on(e):""}function Hp(e){switch(e.tag){case 5:return on(e.type);case 16:return on("Lazy");case 13:return on("Suspense");case 19:return on("SuspenseList");case 0:case 2:case 15:return e=zs(e.type,!1),e;case 11:return e=zs(e.type.render,!1),e;case 1:return e=zs(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case yr:return"Portal";case ro:return"Profiler";case ha:return"StrictMode";case no:return"Suspense";case io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Gc:return(e._context.displayName||"Context")+".Provider";case ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function Wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qp(e){var t=eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wn(e){e._valueTracker||(e._valueTracker=Qp(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=eu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,t){var r=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function hl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function ao(e,t){ru(e,t);var r=Qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lo(e,t.type,r):t.hasOwnProperty("defaultValue")&&lo(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function lo(e,t,r){(t!=="number"||Ei(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var an=Array.isArray;function Pr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Qt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(an(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Qt(r)}}function nu(e,t){var r=Qt(t.value),n=Qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qn,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qn=Qn||document.createElement("div"),Qn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kp=["Webkit","ms","Moz","O"];Object.keys(dn).forEach(function(e){Kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dn[t]=dn[e]})});function ou(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||dn.hasOwnProperty(e)&&dn[e]?(""+t).trim():t+"px"}function au(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=ou(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var Xp=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,t){if(t){if(Xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mo=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ho=null,Tr=null,Ar=null;function xl(e){if(e=$n(e)){if(typeof ho!="function")throw Error(E(280));var t=e.stateNode;t&&(t=as(t),ho(e.stateNode,e.type,t))}}function lu(e){Tr?Ar?Ar.push(e):Ar=[e]:Tr=e}function cu(){if(Tr){var e=Tr,t=Ar;if(Ar=Tr=null,xl(e),t)for(e=0;e<t.length;e++)xl(t[e])}}function uu(e,t){return e(t)}function du(){}var _s=!1;function pu(e,t,r){if(_s)return e(t,r);_s=!0;try{return uu(e,t,r)}finally{_s=!1,(Tr!==null||Ar!==null)&&(du(),cu())}}function bn(e,t){var r=e.stateNode;if(r===null)return null;var n=as(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var go=!1;if(St)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){go=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{go=!1}function Yp(e,t,r,n,s,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(y){this.onError(y)}}var pn=!1,zi=null,_i=!1,vo=null,Gp={onError:function(e){pn=!0,zi=e}};function Jp(e,t,r,n,s,o,a,l,c){pn=!1,zi=null,Yp.apply(Gp,arguments)}function Zp(e,t,r,n,s,o,a,l,c){if(Jp.apply(this,arguments),pn){if(pn){var u=zi;pn=!1,zi=null}else throw Error(E(198));_i||(_i=!0,vo=u)}}function pr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kl(e){if(pr(e)!==e)throw Error(E(188))}function ef(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return kl(s),e;if(o===n)return kl(s),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=s,n=o;else{for(var a=!1,l=s.child;l;){if(l===r){a=!0,r=s,n=o;break}if(l===n){a=!0,n=s,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=s;break}if(l===n){a=!0,n=o,r=s;break}l=l.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function mu(e){return e=ef(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var gu=He.unstable_scheduleCallback,jl=He.unstable_cancelCallback,tf=He.unstable_shouldYield,rf=He.unstable_requestPaint,pe=He.unstable_now,nf=He.unstable_getCurrentPriorityLevel,xa=He.unstable_ImmediatePriority,vu=He.unstable_UserBlockingPriority,Pi=He.unstable_NormalPriority,sf=He.unstable_LowPriority,yu=He.unstable_IdlePriority,ns=null,mt=null;function of(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ns,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:cf,af=Math.log,lf=Math.LN2;function cf(e){return e>>>=0,e===0?32:31-(af(e)/lf|0)|0}var Kn=64,Xn=4194304;function ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ti(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~s;l!==0?n=ln(l):(o&=a,o!==0&&(n=ln(o)))}else a=r&~s,a!==0?n=ln(a):o!==0&&(n=ln(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-at(t),s=1<<r,n|=e[r],t&=~s;return n}function uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),l=1<<a,c=s[a];c===-1?(!(l&r)||l&n)&&(s[a]=uf(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=Kn;return Kn<<=1,!(Kn&4194240)&&(Kn=64),e}function Ps(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=r}function pf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-at(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function ka(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var ee=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,ja,wu,bu,Su,xo=!1,Yn=[],It=null,Dt=null,qt=null,Sn=new Map,Cn=new Map,Rt=[],ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wl(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Jr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=$n(t),t!==null&&ja(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mf(e,t,r,n,s){switch(t){case"focusin":return It=Jr(It,e,t,r,n,s),!0;case"dragenter":return Dt=Jr(Dt,e,t,r,n,s),!0;case"mouseover":return qt=Jr(qt,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return Sn.set(o,Jr(Sn.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,Cn.set(o,Jr(Cn.get(o)||null,e,t,r,n,s)),!0}return!1}function Cu(e){var t=tr(e.target);if(t!==null){var r=pr(t);if(r!==null){if(t=r.tag,t===13){if(t=fu(r),t!==null){e.blockedOn=t,Su(e.priority,function(){wu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);mo=n,r.target.dispatchEvent(n),mo=null}else return t=$n(r),t!==null&&ja(t),e.blockedOn=r,!1;t.shift()}return!0}function bl(e,t,r){di(e)&&r.delete(t)}function hf(){xo=!1,It!==null&&di(It)&&(It=null),Dt!==null&&di(Dt)&&(Dt=null),qt!==null&&di(qt)&&(qt=null),Sn.forEach(bl),Cn.forEach(bl)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,xo||(xo=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,hf)))}function Nn(e){function t(s){return Zr(s,e)}if(0<Yn.length){Zr(Yn[0],e);for(var r=1;r<Yn.length;r++){var n=Yn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(It!==null&&Zr(It,e),Dt!==null&&Zr(Dt,e),qt!==null&&Zr(qt,e),Sn.forEach(t),Cn.forEach(t),r=0;r<Rt.length;r++)n=Rt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Rt.length&&(r=Rt[0],r.blockedOn===null);)Cu(r),r.blockedOn===null&&Rt.shift()}var Rr=zt.ReactCurrentBatchConfig,Ai=!0;function gf(e,t,r,n){var s=ee,o=Rr.transition;Rr.transition=null;try{ee=1,wa(e,t,r,n)}finally{ee=s,Rr.transition=o}}function vf(e,t,r,n){var s=ee,o=Rr.transition;Rr.transition=null;try{ee=4,wa(e,t,r,n)}finally{ee=s,Rr.transition=o}}function wa(e,t,r,n){if(Ai){var s=ko(e,t,r,n);if(s===null)Fs(e,t,n,Ri,r),wl(e,n);else if(mf(s,e,t,r,n))n.stopPropagation();else if(wl(e,n),t&4&&-1<ff.indexOf(e)){for(;s!==null;){var o=$n(s);if(o!==null&&ju(o),o=ko(e,t,r,n),o===null&&Fs(e,t,n,Ri,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else Fs(e,t,n,null,r)}}var Ri=null;function ko(e,t,r,n){if(Ri=null,e=ya(n),e=tr(e),e!==null)if(t=pr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=fu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nf()){case xa:return 1;case vu:return 4;case Pi:case sf:return 16;case yu:return 536870912;default:return 16}default:return 16}}var Ot=null,ba=null,pi=null;function Eu(){if(pi)return pi;var e,t=ba,r=t.length,n,s="value"in Ot?Ot.value:Ot.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===s[o-n];n++);return pi=s.slice(e,1<n?1-n:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gn(){return!0}function Sl(){return!1}function Qe(e){function t(r,n,s,o,a){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gn:Sl,this.isPropagationStopped=Sl,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Qe(Wr),Bn=ce({},Wr,{view:0,detail:0}),yf=Qe(Bn),Ts,As,en,is=ce({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(Ts=e.screenX-en.screenX,As=e.screenY-en.screenY):As=Ts=0,en=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:As}}),Cl=Qe(is),xf=ce({},is,{dataTransfer:0}),kf=Qe(xf),jf=ce({},Bn,{relatedTarget:0}),Rs=Qe(jf),wf=ce({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),bf=Qe(wf),Sf=ce({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Qe(Sf),Nf=ce({},Wr,{data:0}),Nl=Qe(Nf),Ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_f[e])?!!t[e]:!1}function Ca(){return Pf}var Tf=ce({},Bn,{key:function(e){if(e.key){var t=Ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=Qe(Tf),Rf=ce({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),El=Qe(Rf),Mf=ce({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),Of=Qe(Mf),Lf=ce({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=Qe(Lf),Df=ce({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=Qe(Df),Ff=[9,13,27,32],Na=St&&"CompositionEvent"in window,fn=null;St&&"documentMode"in document&&(fn=document.documentMode);var Bf=St&&"TextEvent"in window&&!fn,zu=St&&(!Na||fn&&8<fn&&11>=fn),zl=" ",_l=!1;function _u(e,t){switch(e){case"keyup":return Ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function $f(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(_l=!0,zl);case"textInput":return e=t.data,e===zl&&_l?null:e;default:return null}}function Uf(e,t){if(kr)return e==="compositionend"||!Na&&_u(e,t)?(e=Eu(),pi=ba=Ot=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function Tu(e,t,r,n){lu(n),t=Mi(t,"onChange"),0<t.length&&(r=new Sa("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var mn=null,En=null;function Hf(e){$u(e,0)}function ss(e){var t=br(e);if(tu(t))return e}function Wf(e,t){if(e==="change")return t}var Au=!1;if(St){var Ms;if(St){var Os="oninput"in document;if(!Os){var Tl=document.createElement("div");Tl.setAttribute("oninput","return;"),Os=typeof Tl.oninput=="function"}Ms=Os}else Ms=!1;Au=Ms&&(!document.documentMode||9<document.documentMode)}function Al(){mn&&(mn.detachEvent("onpropertychange",Ru),En=mn=null)}function Ru(e){if(e.propertyName==="value"&&ss(En)){var t=[];Tu(t,En,e,ya(e)),pu(Hf,t)}}function Qf(e,t,r){e==="focusin"?(Al(),mn=t,En=r,mn.attachEvent("onpropertychange",Ru)):e==="focusout"&&Al()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(En)}function Xf(e,t){if(e==="click")return ss(t)}function Yf(e,t){if(e==="input"||e==="change")return ss(t)}function Gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Gf;function zn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!to.call(t,s)||!ct(e[s],t[s]))return!1}return!0}function Rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ml(e,t){var r=Rl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rl(r)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ei(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jf(e){var t=Ou(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Mu(r.ownerDocument.documentElement,r)){if(n!==null&&Ea(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=Ml(r,o);var a=Ml(r,n);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=St&&"documentMode"in document&&11>=document.documentMode,jr=null,jo=null,hn=null,wo=!1;function Ol(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||jr==null||jr!==Ei(n)||(n=jr,"selectionStart"in n&&Ea(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hn&&zn(hn,n)||(hn=n,n=Mi(jo,"onSelect"),0<n.length&&(t=new Sa("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jr)))}function Jn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionend:Jn("Transition","TransitionEnd")},Ls={},Lu={};St&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function os(e){if(Ls[e])return Ls[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lu)return Ls[e]=t[r];return e}var Iu=os("animationend"),Du=os("animationiteration"),qu=os("animationstart"),Fu=os("transitionend"),Bu=new Map,Ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Bu.set(e,t),dr(t,[e])}for(var Is=0;Is<Ll.length;Is++){var Ds=Ll[Is],em=Ds.toLowerCase(),tm=Ds[0].toUpperCase()+Ds.slice(1);Xt(em,"on"+tm)}Xt(Iu,"onAnimationEnd");Xt(Du,"onAnimationIteration");Xt(qu,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Fu,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function Il(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Zp(n,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&s.isPropagationStopped())break e;Il(s,l,u),o=c}else for(a=0;a<n.length;a++){if(l=n[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&s.isPropagationStopped())break e;Il(s,l,u),o=c}}}if(_i)throw e=vo,_i=!1,vo=null,e}function ne(e,t){var r=t[Eo];r===void 0&&(r=t[Eo]=new Set);var n=e+"__bubble";r.has(n)||(Uu(t,e,2,!1),r.add(n))}function qs(e,t,r){var n=0;t&&(n|=4),Uu(r,e,n,t)}var Zn="_reactListening"+Math.random().toString(36).slice(2);function _n(e){if(!e[Zn]){e[Zn]=!0,Yc.forEach(function(r){r!=="selectionchange"&&(rm.has(r)||qs(r,!1,e),qs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zn]||(t[Zn]=!0,qs("selectionchange",!1,t))}}function Uu(e,t,r,n){switch(Nu(t)){case 1:var s=gf;break;case 4:s=vf;break;default:s=wa}r=s.bind(null,t,r,e),s=void 0,!go||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Fs(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=tr(l),a===null)return;if(c=a.tag,c===5||c===6){n=o=a;continue e}l=l.parentNode}}n=n.return}pu(function(){var u=o,y=ya(r),h=[];e:{var m=Bu.get(e);if(m!==void 0){var v=Sa,g=e;switch(e){case"keypress":if(fi(r)===0)break e;case"keydown":case"keyup":v=Af;break;case"focusin":g="focus",v=Rs;break;case"focusout":g="blur",v=Rs;break;case"beforeblur":case"afterblur":v=Rs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Of;break;case Iu:case Du:case qu:v=bf;break;case Fu:v=If;break;case"scroll":v=yf;break;case"wheel":v=qf;break;case"copy":case"cut":case"paste":v=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=El}var b=(t&4)!==0,T=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var d=u,p;d!==null;){p=d;var j=p.stateNode;if(p.tag===5&&j!==null&&(p=j,f!==null&&(j=bn(d,f),j!=null&&b.push(Pn(d,j,p)))),T)break;d=d.return}0<b.length&&(m=new v(m,g,null,r,y),h.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&r!==mo&&(g=r.relatedTarget||r.fromElement)&&(tr(g)||g[Ct]))break e;if((v||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=r.relatedTarget||r.toElement,v=u,g=g?tr(g):null,g!==null&&(T=pr(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(b=Cl,j="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=El,j="onPointerLeave",f="onPointerEnter",d="pointer"),T=v==null?m:br(v),p=g==null?m:br(g),m=new b(j,d+"leave",v,r,y),m.target=T,m.relatedTarget=p,j=null,tr(y)===u&&(b=new b(f,d+"enter",g,r,y),b.target=p,b.relatedTarget=T,j=b),T=j,v&&g)t:{for(b=v,f=g,d=0,p=b;p;p=gr(p))d++;for(p=0,j=f;j;j=gr(j))p++;for(;0<d-p;)b=gr(b),d--;for(;0<p-d;)f=gr(f),p--;for(;d--;){if(b===f||f!==null&&b===f.alternate)break t;b=gr(b),f=gr(f)}b=null}else b=null;v!==null&&Dl(h,m,v,b,!1),g!==null&&T!==null&&Dl(h,T,g,b,!0)}}e:{if(m=u?br(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var R=Wf;else if(Pl(m))if(Au)R=Yf;else{R=Kf;var P=Qf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Xf);if(R&&(R=R(e,u))){Tu(h,R,r,y);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&lo(m,"number",m.value)}switch(P=u?br(u):window,e){case"focusin":(Pl(P)||P.contentEditable==="true")&&(jr=P,jo=u,hn=null);break;case"focusout":hn=jo=jr=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Ol(h,r,y);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":Ol(h,r,y)}var O;if(Na)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else kr?_u(e,r)&&(M="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(M="onCompositionStart");M&&(zu&&r.locale!=="ko"&&(kr||M!=="onCompositionStart"?M==="onCompositionEnd"&&kr&&(O=Eu()):(Ot=y,ba="value"in Ot?Ot.value:Ot.textContent,kr=!0)),P=Mi(u,M),0<P.length&&(M=new Nl(M,e,null,r,y),h.push({event:M,listeners:P}),O?M.data=O:(O=Pu(r),O!==null&&(M.data=O)))),(O=Bf?$f(e,r):Uf(e,r))&&(u=Mi(u,"onBeforeInput"),0<u.length&&(y=new Nl("onBeforeInput","beforeinput",null,r,y),h.push({event:y,listeners:u}),y.data=O))}$u(h,t)})}function Pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Mi(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=bn(e,r),o!=null&&n.unshift(Pn(e,o,s)),o=bn(e,t),o!=null&&n.push(Pn(e,o,s))),e=e.return}return n}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dl(e,t,r,n,s){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,s?(c=bn(r,o),c!=null&&a.unshift(Pn(r,c,l))):s||(c=bn(r,o),c!=null&&a.push(Pn(r,c,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var nm=/\r\n?/g,im=/\u0000|\uFFFD/g;function ql(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(im,"")}function ei(e,t,r){if(t=ql(t),ql(e)!==t&&r)throw Error(E(425))}function Oi(){}var bo=null,So=null;function Co(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,om=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(e){return Fl.resolve(null).then(e).catch(am)}:No;function am(e){setTimeout(function(){throw e})}function Bs(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),Nn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);Nn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Qr,Tn="__reactProps$"+Qr,Ct="__reactContainer$"+Qr,Eo="__reactEvents$"+Qr,lm="__reactListeners$"+Qr,cm="__reactHandles$"+Qr;function tr(e){var t=e[ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ct]||r[ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Bl(e);e!==null;){if(r=e[ft])return r;e=Bl(e)}return t}e=r,r=e.parentNode}return null}function $n(e){return e=e[ft]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function as(e){return e[Tn]||null}var zo=[],Sr=-1;function Yt(e){return{current:e}}function ie(e){0>Sr||(e.current=zo[Sr],zo[Sr]=null,Sr--)}function re(e,t){Sr++,zo[Sr]=e.current,e.current=t}var Kt={},Ne=Yt(Kt),Le=Yt(!1),or=Kt;function Ir(e,t){var r=e.type.contextTypes;if(!r)return Kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ie(e){return e=e.childContextTypes,e!=null}function Li(){ie(Le),ie(Ne)}function $l(e,t,r){if(Ne.current!==Kt)throw Error(E(168));re(Ne,t),re(Le,r)}function Vu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(E(108,Wp(e)||"Unknown",s));return ce({},r,n)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,or=Ne.current,re(Ne,e),re(Le,Le.current),!0}function Ul(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Vu(e,t,or),n.__reactInternalMemoizedMergedChildContext=e,ie(Le),ie(Ne),re(Ne,e)):ie(Le),re(Le,r)}var xt=null,ls=!1,$s=!1;function Hu(e){xt===null?xt=[e]:xt.push(e)}function um(e){ls=!0,Hu(e)}function Gt(){if(!$s&&xt!==null){$s=!0;var e=0,t=ee;try{var r=xt;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}xt=null,ls=!1}catch(s){throw xt!==null&&(xt=xt.slice(e+1)),gu(xa,Gt),s}finally{ee=t,$s=!1}}return null}var Cr=[],Nr=0,Di=null,qi=0,Xe=[],Ye=0,ar=null,jt=1,wt="";function Zt(e,t){Cr[Nr++]=qi,Cr[Nr++]=Di,Di=e,qi=t}function Wu(e,t,r){Xe[Ye++]=jt,Xe[Ye++]=wt,Xe[Ye++]=ar,ar=e;var n=jt;e=wt;var s=32-at(n)-1;n&=~(1<<s),r+=1;var o=32-at(t)+s;if(30<o){var a=s-s%5;o=(n&(1<<a)-1).toString(32),n>>=a,s-=a,jt=1<<32-at(t)+s|r<<s|n,wt=o+e}else jt=1<<o|r<<s|n,wt=e}function za(e){e.return!==null&&(Zt(e,1),Wu(e,1,0))}function _a(e){for(;e===Di;)Di=Cr[--Nr],Cr[Nr]=null,qi=Cr[--Nr],Cr[Nr]=null;for(;e===ar;)ar=Xe[--Ye],Xe[Ye]=null,wt=Xe[--Ye],Xe[Ye]=null,jt=Xe[--Ye],Xe[Ye]=null}var Ve=null,Ue=null,oe=!1,ot=null;function Qu(e,t){var r=Je(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Vl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Ue=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ar!==null?{id:jt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Je(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ve=e,Ue=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(oe){var t=Ue;if(t){var r=t;if(!Vl(e,t)){if(_o(e))throw Error(E(418));t=Ft(r.nextSibling);var n=Ve;t&&Vl(e,t)?Qu(n,r):(e.flags=e.flags&-4097|2,oe=!1,Ve=e)}}else{if(_o(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,Ve=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ti(e){if(e!==Ve)return!1;if(!oe)return Hl(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Co(e.type,e.memoizedProps)),t&&(t=Ue)){if(_o(e))throw Ku(),Error(E(418));for(;t;)Qu(e,t),t=Ft(t.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ue=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Ve?Ft(e.stateNode.nextSibling):null;return!0}function Ku(){for(var e=Ue;e;)e=Ft(e.nextSibling)}function Dr(){Ue=Ve=null,oe=!1}function Pa(e){ot===null?ot=[e]:ot.push(e)}var dm=zt.ReactCurrentBatchConfig;function tn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wl(e){var t=e._init;return t(e._payload)}function Xu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function s(f,d){return f=Vt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,j){return d===null||d.tag!==6?(d=Xs(p,f.mode,j),d.return=f,d):(d=s(d,p),d.return=f,d)}function c(f,d,p,j){var R=p.type;return R===xr?y(f,d,p.props.children,j,p.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Tt&&Wl(R)===d.type)?(j=s(d,p.props),j.ref=tn(f,d,p),j.return=f,j):(j=ki(p.type,p.key,p.props,null,f.mode,j),j.ref=tn(f,d,p),j.return=f,j)}function u(f,d,p,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ys(p,f.mode,j),d.return=f,d):(d=s(d,p.children||[]),d.return=f,d)}function y(f,d,p,j,R){return d===null||d.tag!==7?(d=sr(p,f.mode,j,R),d.return=f,d):(d=s(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xs(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Hn:return p=ki(d.type,d.key,d.props,null,f.mode,p),p.ref=tn(f,null,d),p.return=f,p;case yr:return d=Ys(d,f.mode,p),d.return=f,d;case Tt:var j=d._init;return h(f,j(d._payload),p)}if(an(d)||Yr(d))return d=sr(d,f.mode,p,null),d.return=f,d;ri(f,d)}return null}function m(f,d,p,j){var R=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:l(f,d,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hn:return p.key===R?c(f,d,p,j):null;case yr:return p.key===R?u(f,d,p,j):null;case Tt:return R=p._init,m(f,d,R(p._payload),j)}if(an(p)||Yr(p))return R!==null?null:y(f,d,p,j,null);ri(f,p)}return null}function v(f,d,p,j,R){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(p)||null,l(d,f,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Hn:return f=f.get(j.key===null?p:j.key)||null,c(d,f,j,R);case yr:return f=f.get(j.key===null?p:j.key)||null,u(d,f,j,R);case Tt:var P=j._init;return v(f,d,p,P(j._payload),R)}if(an(j)||Yr(j))return f=f.get(p)||null,y(d,f,j,R,null);ri(d,j)}return null}function g(f,d,p,j){for(var R=null,P=null,O=d,M=d=0,$=null;O!==null&&M<p.length;M++){O.index>M?($=O,O=null):$=O.sibling;var w=m(f,O,p[M],j);if(w===null){O===null&&(O=$);break}e&&O&&w.alternate===null&&t(f,O),d=o(w,d,M),P===null?R=w:P.sibling=w,P=w,O=$}if(M===p.length)return r(f,O),oe&&Zt(f,M),R;if(O===null){for(;M<p.length;M++)O=h(f,p[M],j),O!==null&&(d=o(O,d,M),P===null?R=O:P.sibling=O,P=O);return oe&&Zt(f,M),R}for(O=n(f,O);M<p.length;M++)$=v(O,f,M,p[M],j),$!==null&&(e&&$.alternate!==null&&O.delete($.key===null?M:$.key),d=o($,d,M),P===null?R=$:P.sibling=$,P=$);return e&&O.forEach(function(C){return t(f,C)}),oe&&Zt(f,M),R}function b(f,d,p,j){var R=Yr(p);if(typeof R!="function")throw Error(E(150));if(p=R.call(p),p==null)throw Error(E(151));for(var P=R=null,O=d,M=d=0,$=null,w=p.next();O!==null&&!w.done;M++,w=p.next()){O.index>M?($=O,O=null):$=O.sibling;var C=m(f,O,w.value,j);if(C===null){O===null&&(O=$);break}e&&O&&C.alternate===null&&t(f,O),d=o(C,d,M),P===null?R=C:P.sibling=C,P=C,O=$}if(w.done)return r(f,O),oe&&Zt(f,M),R;if(O===null){for(;!w.done;M++,w=p.next())w=h(f,w.value,j),w!==null&&(d=o(w,d,M),P===null?R=w:P.sibling=w,P=w);return oe&&Zt(f,M),R}for(O=n(f,O);!w.done;M++,w=p.next())w=v(O,f,M,w.value,j),w!==null&&(e&&w.alternate!==null&&O.delete(w.key===null?M:w.key),d=o(w,d,M),P===null?R=w:P.sibling=w,P=w);return e&&O.forEach(function(V){return t(f,V)}),oe&&Zt(f,M),R}function T(f,d,p,j){if(typeof p=="object"&&p!==null&&p.type===xr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Hn:e:{for(var R=p.key,P=d;P!==null;){if(P.key===R){if(R=p.type,R===xr){if(P.tag===7){r(f,P.sibling),d=s(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Tt&&Wl(R)===P.type){r(f,P.sibling),d=s(P,p.props),d.ref=tn(f,P,p),d.return=f,f=d;break e}r(f,P);break}else t(f,P);P=P.sibling}p.type===xr?(d=sr(p.props.children,f.mode,j,p.key),d.return=f,f=d):(j=ki(p.type,p.key,p.props,null,f.mode,j),j.ref=tn(f,d,p),j.return=f,f=j)}return a(f);case yr:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=s(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Ys(p,f.mode,j),d.return=f,f=d}return a(f);case Tt:return P=p._init,T(f,d,P(p._payload),j)}if(an(p))return g(f,d,p,j);if(Yr(p))return b(f,d,p,j);ri(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=s(d,p),d.return=f,f=d):(r(f,d),d=Xs(p,f.mode,j),d.return=f,f=d),a(f)):r(f,d)}return T}var qr=Xu(!0),Yu=Xu(!1),Fi=Yt(null),Bi=null,Er=null,Ta=null;function Aa(){Ta=Er=Bi=null}function Ra(e){var t=Fi.current;ie(Fi),e._currentValue=t}function To(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Mr(e,t){Bi=e,Ta=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Bi===null)throw Error(E(308));Er=e,Bi.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var rr=null;function Ma(e){rr===null?rr=[e]:rr.push(e)}function Gu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Ma(t)):(r.next=s.next,s.next=r),t.interleaved=r,Nt(e,n)}function Nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var At=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,J&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,Nt(e,r)}return s=n.interleaved,s===null?(t.next=t,Ma(n)):(t.next=s.next,s.next=t),n.interleaved=t,Nt(e,r)}function mi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ka(e,r)}}function Ql(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $i(e,t,r,n){var s=e.updateQueue;At=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==a&&(l===null?y.firstBaseUpdate=u:l.next=u,y.lastBaseUpdate=c))}if(o!==null){var h=s.baseState;a=0,y=u=c=null,l=o;do{var m=l.lane,v=l.eventTime;if((n&m)===m){y!==null&&(y=y.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,b=l;switch(m=t,v=r,b.tag){case 1:if(g=b.payload,typeof g=="function"){h=g.call(v,h,m);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,m=typeof g=="function"?g.call(v,h,m):g,m==null)break e;h=ce({},h,m);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(u=y=v,c=h):y=y.next=v,a|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(y===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=y,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);cr|=a,e.lanes=a,e.memoizedState=h}}function Kl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(E(191,s));s.call(n)}}}var Un={},ht=Yt(Un),An=Yt(Un),Rn=Yt(Un);function nr(e){if(e===Un)throw Error(E(174));return e}function La(e,t){switch(re(Rn,t),re(An,e),re(ht,Un),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}ie(ht),re(ht,t)}function Fr(){ie(ht),ie(An),ie(Rn)}function Zu(e){nr(Rn.current);var t=nr(ht.current),r=uo(t,e.type);t!==r&&(re(An,e),re(ht,r))}function Ia(e){An.current===e&&(ie(ht),ie(An))}var ae=Yt(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Us=[];function Da(){for(var e=0;e<Us.length;e++)Us[e]._workInProgressVersionPrimary=null;Us.length=0}var hi=zt.ReactCurrentDispatcher,Vs=zt.ReactCurrentBatchConfig,lr=0,le=null,ge=null,ye=null,Vi=!1,gn=!1,Mn=0,pm=0;function be(){throw Error(E(321))}function qa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ct(e[r],t[r]))return!1;return!0}function Fa(e,t,r,n,s,o){if(lr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=e===null||e.memoizedState===null?gm:vm,e=r(n,s),gn){o=0;do{if(gn=!1,Mn=0,25<=o)throw Error(E(301));o+=1,ye=ge=null,t.updateQueue=null,hi.current=ym,e=r(n,s)}while(gn)}if(hi.current=Hi,t=ge!==null&&ge.next!==null,lr=0,ye=ge=le=null,Vi=!1,t)throw Error(E(300));return e}function Ba(){var e=Mn!==0;return Mn=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?le.memoizedState=ye=e:ye=ye.next=e,ye}function tt(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?le.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?le.memoizedState=ye=e:ye=ye.next=e}return ye}function On(e,t){return typeof t=="function"?t(e):t}function Hs(e){var t=tt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=ge,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var l=a=null,c=null,u=o;do{var y=u.lane;if((lr&y)===y)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:y,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=n):c=c.next=h,le.lanes|=y,cr|=y}u=u.next}while(u!==null&&u!==o);c===null?a=n:c.next=l,ct(n,t.memoizedState)||(Oe=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,le.lanes|=o,cr|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ws(e){var t=tt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);ct(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function ed(){}function td(e,t){var r=le,n=tt(),s=t(),o=!ct(n.memoizedState,s);if(o&&(n.memoizedState=s,Oe=!0),n=n.queue,$a(id.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,Ln(9,nd.bind(null,r,n,s,t),void 0,null),xe===null)throw Error(E(349));lr&30||rd(r,t,s)}return s}function rd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nd(e,t,r,n){t.value=r,t.getSnapshot=n,sd(t)&&od(e)}function id(e,t,r){return r(function(){sd(t)&&od(e)})}function sd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ct(e,r)}catch{return!0}}function od(e){var t=Nt(e,1);t!==null&&lt(t,e,1,-1)}function Xl(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t.queue=e,e=e.dispatch=hm.bind(null,le,e),[t.memoizedState,e]}function Ln(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ad(){return tt().memoizedState}function gi(e,t,r,n){var s=pt();le.flags|=e,s.memoizedState=Ln(1|t,r,void 0,n===void 0?null:n)}function cs(e,t,r,n){var s=tt();n=n===void 0?null:n;var o=void 0;if(ge!==null){var a=ge.memoizedState;if(o=a.destroy,n!==null&&qa(n,a.deps)){s.memoizedState=Ln(t,r,o,n);return}}le.flags|=e,s.memoizedState=Ln(1|t,r,o,n)}function Yl(e,t){return gi(8390656,8,e,t)}function $a(e,t){return cs(2048,8,e,t)}function ld(e,t){return cs(4,2,e,t)}function cd(e,t){return cs(4,4,e,t)}function ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,r){return r=r!=null?r.concat([e]):null,cs(4,4,ud.bind(null,t,e),r)}function Ua(){}function pd(e,t){var r=tt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qa(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function fd(e,t){var r=tt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qa(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function md(e,t,r){return lr&21?(ct(r,t)||(r=xu(),le.lanes|=r,cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=r)}function fm(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=Vs.transition;Vs.transition={};try{e(!1),t()}finally{ee=r,Vs.transition=n}}function hd(){return tt().memoizedState}function mm(e,t,r){var n=Ut(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},gd(e))vd(t,r);else if(r=Gu(e,t,r,n),r!==null){var s=_e();lt(r,e,n,s),yd(r,t,n)}}function hm(e,t,r){var n=Ut(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(gd(e))vd(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(s.hasEagerState=!0,s.eagerState=l,ct(l,a)){var c=t.interleaved;c===null?(s.next=s,Ma(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=Gu(e,t,s,n),r!==null&&(s=_e(),lt(r,e,n,s),yd(r,t,n))}}function gd(e){var t=e.alternate;return e===le||t!==null&&t===le}function vd(e,t){gn=Vi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function yd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ka(e,r)}}var Hi={readContext:et,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},gm={readContext:et,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Yl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,gi(4194308,4,ud.bind(null,t,e),r)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var r=pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=pt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=mm.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Xl,useDebugValue:Ua,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Xl(!1),t=e[0];return e=fm.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=le,s=pt();if(oe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),xe===null)throw Error(E(349));lr&30||rd(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Yl(id.bind(null,n,o,e),[e]),n.flags|=2048,Ln(9,nd.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=pt(),t=xe.identifierPrefix;if(oe){var r=wt,n=jt;r=(n&~(1<<32-at(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Mn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=pm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vm={readContext:et,useCallback:pd,useContext:et,useEffect:$a,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:fd,useReducer:Hs,useRef:ad,useState:function(){return Hs(On)},useDebugValue:Ua,useDeferredValue:function(e){var t=tt();return md(t,ge.memoizedState,e)},useTransition:function(){var e=Hs(On)[0],t=tt().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:hd,unstable_isNewReconciler:!1},ym={readContext:et,useCallback:pd,useContext:et,useEffect:$a,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:fd,useReducer:Ws,useRef:ad,useState:function(){return Ws(On)},useDebugValue:Ua,useDeferredValue:function(e){var t=tt();return ge===null?t.memoizedState=e:md(t,ge.memoizedState,e)},useTransition:function(){var e=Ws(On)[0],t=tt().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:hd,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ao(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var us={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=_e(),s=Ut(e),o=bt(n,s);o.payload=t,r!=null&&(o.callback=r),t=Bt(e,o,s),t!==null&&(lt(t,e,s,n),mi(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=_e(),s=Ut(e),o=bt(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Bt(e,o,s),t!==null&&(lt(t,e,s,n),mi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=_e(),n=Ut(e),s=bt(r,n);s.tag=2,t!=null&&(s.callback=t),t=Bt(e,s,n),t!==null&&(lt(t,e,n,r),mi(t,e,n))}};function Gl(e,t,r,n,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!zn(r,n)||!zn(s,o):!0}function xd(e,t,r){var n=!1,s=Kt,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(s=Ie(t)?or:Ne.current,n=t.contextTypes,o=(n=n!=null)?Ir(e,s):Kt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=us,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function Ro(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Oa(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=et(o):(o=Ie(t)?or:Ne.current,s.context=Ir(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ao(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&us.enqueueReplaceState(s,s.state,null),$i(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var r="",n=t;do r+=Hp(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Qs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Mo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var xm=typeof WeakMap=="function"?WeakMap:Map;function kd(e,t,r){r=bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Qi||(Qi=!0,Vo=n),Mo(e,t)},r}function jd(e,t,r){r=bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){Mo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Mo(e,t),typeof n!="function"&&($t===null?$t=new Set([this]):$t.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Zl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new xm;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=Rm.bind(null,e,t,r),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=bt(-1,1),t.tag=2,Bt(r,t,1))),r.lanes|=1),e)}var km=zt.ReactCurrentOwner,Oe=!1;function ze(e,t,r,n){t.child=e===null?Yu(t,null,r,n):qr(t,e.child,r,n)}function rc(e,t,r,n,s){r=r.render;var o=t.ref;return Mr(t,s),n=Fa(e,t,r,n,o,s),r=Ba(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Et(e,t,s)):(oe&&r&&za(t),t.flags|=1,ze(e,t,n,s),t.child)}function nc(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!Ga(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,wd(e,t,o,n,s)):(e=ki(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:zn,r(a,n)&&e.ref===t.ref)return Et(e,t,s)}return t.flags|=1,e=Vt(o,n),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(zn(o,n)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Et(e,t,s)}return Oo(e,t,r,n,s)}function bd(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(_r,Be),Be|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(_r,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,re(_r,Be),Be|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,re(_r,Be),Be|=n;return ze(e,t,s,r),t.child}function Sd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Oo(e,t,r,n,s){var o=Ie(r)?or:Ne.current;return o=Ir(t,o),Mr(t,s),r=Fa(e,t,r,n,o,s),n=Ba(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Et(e,t,s)):(oe&&n&&za(t),t.flags|=1,ze(e,t,r,s),t.child)}function ic(e,t,r,n,s){if(Ie(r)){var o=!0;Ii(t)}else o=!1;if(Mr(t,s),t.stateNode===null)vi(e,t),xd(t,r,n),Ro(t,r,n,s),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=et(u):(u=Ie(r)?or:Ne.current,u=Ir(t,u));var y=r.getDerivedStateFromProps,h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Jl(t,a,n,u),At=!1;var m=t.memoizedState;a.state=m,$i(t,n,a,s),c=t.memoizedState,l!==n||m!==c||Le.current||At?(typeof y=="function"&&(Ao(t,r,y,n),c=t.memoizedState),(l=At||Gl(t,r,l,n,m,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Ju(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nt(t.type,l),a.props=u,h=t.pendingProps,m=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=et(c):(c=Ie(r)?or:Ne.current,c=Ir(t,c));var v=r.getDerivedStateFromProps;(y=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Jl(t,a,n,c),At=!1,m=t.memoizedState,a.state=m,$i(t,n,a,s);var g=t.memoizedState;l!==h||m!==g||Le.current||At?(typeof v=="function"&&(Ao(t,r,v,n),g=t.memoizedState),(u=At||Gl(t,r,u,n,m,g,c)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),a.props=n,a.state=g,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Lo(e,t,r,n,o,s)}function Lo(e,t,r,n,s,o){Sd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return s&&Ul(t,r,!1),Et(e,t,o);n=t.stateNode,km.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=qr(t,e.child,null,o),t.child=qr(t,null,l,o)):ze(e,t,l,o),t.memoizedState=n.state,s&&Ul(t,r,!0),t.child}function Cd(e){var t=e.stateNode;t.pendingContext?$l(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$l(e,t.context,!1),La(e,t.containerInfo)}function sc(e,t,r,n,s){return Dr(),Pa(s),t.flags|=256,ze(e,t,r,n),t.child}var Io={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,r){var n=t.pendingProps,s=ae.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),re(ae,s&1),e===null)return Po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fs(a,n,0,null),e=sr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Do(r),t.memoizedState=Io,e):Va(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jm(e,t,a,n,l,s,r);if(o){o=n.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Vt(s,c),n.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=Vt(l,o):(o=sr(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Do(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Io,n}return o=e.child,e=o.sibling,n=Vt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Va(e,t){return t=fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,r,n){return n!==null&&Pa(n),qr(t,e.child,null,r),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jm(e,t,r,n,s,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Qs(Error(E(422))),ni(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=fs({mode:"visible",children:n.children},s,0,null),o=sr(o,s,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&qr(t,e.child,null,a),t.child.memoizedState=Do(a),t.memoizedState=Io,o);if(!(t.mode&1))return ni(e,t,a,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(E(419)),n=Qs(o,n,void 0),ni(e,t,a,n)}if(l=(a&e.childLanes)!==0,Oe||l){if(n=xe,n!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Nt(e,s),lt(n,e,s,-1))}return Ya(),n=Qs(Error(E(421))),ni(e,t,a,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Mm.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Ue=Ft(s.nextSibling),Ve=t,oe=!0,ot=null,e!==null&&(Xe[Ye++]=jt,Xe[Ye++]=wt,Xe[Ye++]=ar,jt=e.id,wt=e.overflow,ar=t),t=Va(t,n.children),t.flags|=4096,t)}function oc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),To(e.return,t,r)}function Ks(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function Ed(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(ze(e,t,n.children,r),n=ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,r,t);else if(e.tag===19)oc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(re(ae,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Ui(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ks(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ui(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ks(t,!0,r,null,o);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function wm(e,t,r){switch(t.tag){case 3:Cd(t),Dr();break;case 5:Zu(t);break;case 1:Ie(t.type)&&Ii(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;re(Fi,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(re(ae,ae.current&1),t.flags|=128,null):r&t.child.childLanes?Nd(e,t,r):(re(ae,ae.current&1),e=Et(e,t,r),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ed(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),re(ae,ae.current),n)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,r)}return Et(e,t,r)}var zd,qo,_d,Pd;zd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};qo=function(){};_d=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,nr(ht.current);var o=null;switch(r){case"input":s=oo(e,s),n=oo(e,n),o=[];break;case"select":s=ce({},s,{value:void 0}),n=ce({},n,{value:void 0}),o=[];break;case"textarea":s=co(e,s),n=co(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Oi)}po(r,n);var a;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Pd=function(e,t,r,n){r!==n&&(t.flags|=4)};function rn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function bm(e,t,r){var n=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ie(t.type)&&Li(),Se(t),null;case 3:return n=t.stateNode,Fr(),ie(Le),ie(Ne),Da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Qo(ot),ot=null))),qo(e,t),Se(t),null;case 5:Ia(t);var s=nr(Rn.current);if(r=t.type,e!==null&&t.stateNode!=null)_d(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return Se(t),null}if(e=nr(ht.current),ti(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ft]=t,n[Tn]=o,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":case"embed":ne("load",n);break;case"video":case"audio":for(s=0;s<cn.length;s++)ne(cn[s],n);break;case"source":ne("error",n);break;case"img":case"image":case"link":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"input":hl(n,o),ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ne("invalid",n);break;case"textarea":vl(n,o),ne("invalid",n)}po(r,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&ei(n.textContent,l,e),s=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ei(n.textContent,l,e),s=["children",""+l]):jn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ne("scroll",n)}switch(r){case"input":Wn(n),gl(n,o,!0);break;case"textarea":Wn(n),yl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Oi)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[ft]=t,e[Tn]=n,zd(e,t,!1,!1),t.stateNode=e;e:{switch(a=fo(r,n),r){case"dialog":ne("cancel",e),ne("close",e),s=n;break;case"iframe":case"object":case"embed":ne("load",e),s=n;break;case"video":case"audio":for(s=0;s<cn.length;s++)ne(cn[s],e);s=n;break;case"source":ne("error",e),s=n;break;case"img":case"image":case"link":ne("error",e),ne("load",e),s=n;break;case"details":ne("toggle",e),s=n;break;case"input":hl(e,n),s=oo(e,n),ne("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=ce({},n,{value:void 0}),ne("invalid",e);break;case"textarea":vl(e,n),s=co(e,n),ne("invalid",e);break;default:s=n}po(r,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?au(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&su(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&wn(e,c):typeof c=="number"&&wn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ne("scroll",e):c!=null&&ma(e,o,c,a))}switch(r){case"input":Wn(e),gl(e,n,!1);break;case"textarea":Wn(e),yl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Qt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Pr(e,!!n.multiple,o,!1):n.defaultValue!=null&&Pr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Oi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Pd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=nr(Rn.current),nr(ht.current),ti(t)){if(n=t.stateNode,r=t.memoizedProps,n[ft]=t,(o=n.nodeValue!==r)&&(e=Ve,e!==null))switch(e.tag){case 3:ei(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ft]=t,t.stateNode=n}return Se(t),null;case 13:if(ie(ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ue!==null&&t.mode&1&&!(t.flags&128))Ku(),Dr(),t.flags|=98560,o=!1;else if(o=ti(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ft]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ot!==null&&(Qo(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ve===0&&(ve=3):Ya())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Fr(),qo(e,t),e===null&&_n(t.stateNode.containerInfo),Se(t),null;case 10:return Ra(t.type._context),Se(t),null;case 17:return Ie(t.type)&&Li(),Se(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return Se(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)rn(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ui(e),a!==null){for(t.flags|=128,rn(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>$r&&(t.flags|=128,n=!0,rn(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ui(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),rn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return Se(t),null}else 2*pe()-o.renderingStartTime>$r&&r!==1073741824&&(t.flags|=128,n=!0,rn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,r=ae.current,re(ae,n?r&1|2:r&1),t):(Se(t),null);case 22:case 23:return Xa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Be&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Sm(e,t){switch(_a(t),t.tag){case 1:return Ie(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),ie(Le),ie(Ne),Da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return Fr(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var ii=!1,Ce=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,I=null;function zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function Fo(e,t,r){try{r()}catch(n){ue(e,t,n)}}var ac=!1;function Nm(e,t){if(bo=Ai,e=Ou(),Ea(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,c=-1,u=0,y=0,h=e,m=null;t:for(;;){for(var v;h!==r||s!==0&&h.nodeType!==3||(l=a+s),h!==o||n!==0&&h.nodeType!==3||(c=a+n),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===r&&++u===s&&(l=a),m===o&&++y===n&&(c=a),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(So={focusedElem:e,selectionRange:r},Ai=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,T=g.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:nt(t.type,b),T);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(j){ue(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return g=ac,ac=!1,g}function vn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Fo(t,r,o)}s=s.next}while(s!==n)}}function ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Bo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[Tn],delete t[Eo],delete t[lm],delete t[cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Oi));else if(n!==4&&(e=e.child,e!==null))for($o(e,t,r),e=e.sibling;e!==null;)$o(e,t,r),e=e.sibling}function Uo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Uo(e,t,r),e=e.sibling;e!==null;)Uo(e,t,r),e=e.sibling}var ke=null,it=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Rd(e,t,r),r=r.sibling}function Rd(e,t,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ns,r)}catch{}switch(r.tag){case 5:Ce||zr(r,t);case 6:var n=ke,s=it;ke=null,Pt(e,t,r),ke=n,it=s,ke!==null&&(it?(e=ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ke.removeChild(r.stateNode));break;case 18:ke!==null&&(it?(e=ke,r=r.stateNode,e.nodeType===8?Bs(e.parentNode,r):e.nodeType===1&&Bs(e,r),Nn(e)):Bs(ke,r.stateNode));break;case 4:n=ke,s=it,ke=r.stateNode.containerInfo,it=!0,Pt(e,t,r),ke=n,it=s;break;case 0:case 11:case 14:case 15:if(!Ce&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fo(r,t,a),s=s.next}while(s!==n)}Pt(e,t,r);break;case 1:if(!Ce&&(zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ue(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(Ce=(n=Ce)||r.memoizedState!==null,Pt(e,t,r),Ce=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Cm),t.forEach(function(n){var s=Om.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function rt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,it=!1;break e;case 3:ke=l.stateNode.containerInfo,it=!0;break e;case 4:ke=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(ke===null)throw Error(E(160));Rd(o,a,s),ke=null,it=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ue(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),dt(e),n&4){try{vn(3,e,e.return),ds(3,e)}catch(b){ue(e,e.return,b)}try{vn(5,e,e.return)}catch(b){ue(e,e.return,b)}}break;case 1:rt(t,e),dt(e),n&512&&r!==null&&zr(r,r.return);break;case 5:if(rt(t,e),dt(e),n&512&&r!==null&&zr(r,r.return),e.flags&32){var s=e.stateNode;try{wn(s,"")}catch(b){ue(e,e.return,b)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ru(s,o),fo(l,a);var u=fo(l,o);for(a=0;a<c.length;a+=2){var y=c[a],h=c[a+1];y==="style"?au(s,h):y==="dangerouslySetInnerHTML"?su(s,h):y==="children"?wn(s,h):ma(s,y,h,u)}switch(l){case"input":ao(s,o);break;case"textarea":nu(s,o);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Pr(s,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Pr(s,!!o.multiple,o.defaultValue,!0):Pr(s,!!o.multiple,o.multiple?[]:"",!1))}s[Tn]=o}catch(b){ue(e,e.return,b)}}break;case 6:if(rt(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(E(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(b){ue(e,e.return,b)}}break;case 3:if(rt(t,e),dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Nn(t.containerInfo)}catch(b){ue(e,e.return,b)}break;case 4:rt(t,e),dt(e);break;case 13:rt(t,e),dt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Qa=pe())),n&4&&cc(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||y,rt(t,e),Ce=u):rt(t,e),dt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!y&&e.mode&1)for(I=e,y=e.child;y!==null;){for(h=I=y;I!==null;){switch(m=I,v=m.child,m.tag){case 0:case 11:case 14:case 15:vn(4,m,m.return);break;case 1:zr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){ue(n,r,b)}}break;case 5:zr(m,m.return);break;case 22:if(m.memoizedState!==null){dc(h);continue}}v!==null?(v.return=m,I=v):dc(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{s=h.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ou("display",a))}catch(b){ue(e,e.return,b)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){ue(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rt(t,e),dt(e),n&4&&cc(e);break;case 21:break;default:rt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ad(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(wn(s,""),n.flags&=-33);var o=lc(e);Uo(e,o,s);break;case 3:case 4:var a=n.stateNode.containerInfo,l=lc(e);$o(e,l,a);break;default:throw Error(E(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Em(e,t,r){I=e,Od(e)}function Od(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var s=I,o=s.child;if(s.tag===22&&n){var a=s.memoizedState!==null||ii;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Ce;l=ii;var u=Ce;if(ii=a,(Ce=c)&&!u)for(I=s;I!==null;)a=I,c=a.child,a.tag===22&&a.memoizedState!==null?pc(s):c!==null?(c.return=a,I=c):pc(s);for(;o!==null;)I=o,Od(o),o=o.sibling;I=s,ii=l,Ce=u}uc(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,I=o):uc(e)}}function uc(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||ds(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ce)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:nt(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Kl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var y=u.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Nn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||t.flags&512&&Bo(t)}catch(m){ue(t,t.return,m)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function dc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function pc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ds(4,t)}catch(c){ue(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){ue(t,s,c)}}var o=t.return;try{Bo(t)}catch(c){ue(t,o,c)}break;case 5:var a=t.return;try{Bo(t)}catch(c){ue(t,a,c)}}}catch(c){ue(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var zm=Math.ceil,Wi=zt.ReactCurrentDispatcher,Ha=zt.ReactCurrentOwner,Ze=zt.ReactCurrentBatchConfig,J=0,xe=null,fe=null,je=0,Be=0,_r=Yt(0),ve=0,In=null,cr=0,ps=0,Wa=0,yn=null,Me=null,Qa=0,$r=1/0,yt=null,Qi=!1,Vo=null,$t=null,si=!1,Lt=null,Ki=0,xn=0,Ho=null,yi=-1,xi=0;function _e(){return J&6?pe():yi!==-1?yi:yi=pe()}function Ut(e){return e.mode&1?J&2&&je!==0?je&-je:dm.transition!==null?(xi===0&&(xi=xu()),xi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function lt(e,t,r,n){if(50<xn)throw xn=0,Ho=null,Error(E(185));Fn(e,r,n),(!(J&2)||e!==xe)&&(e===xe&&(!(J&2)&&(ps|=r),ve===4&&Mt(e,je)),De(e,n),r===1&&J===0&&!(t.mode&1)&&($r=pe()+500,ls&&Gt()))}function De(e,t){var r=e.callbackNode;df(e,t);var n=Ti(e,e===xe?je:0);if(n===0)r!==null&&jl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&jl(r),t===1)e.tag===0?um(fc.bind(null,e)):Hu(fc.bind(null,e)),om(function(){!(J&6)&&Gt()}),r=null;else{switch(ku(n)){case 1:r=xa;break;case 4:r=vu;break;case 16:r=Pi;break;case 536870912:r=yu;break;default:r=Pi}r=Ud(r,Ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ld(e,t){if(yi=-1,xi=0,J&6)throw Error(E(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var n=Ti(e,e===xe?je:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Xi(e,n);else{t=n;var s=J;J|=2;var o=Dd();(xe!==e||je!==t)&&(yt=null,$r=pe()+500,ir(e,t));do try{Tm();break}catch(l){Id(e,l)}while(!0);Aa(),Wi.current=o,J=s,fe!==null?t=0:(xe=null,je=0,t=ve)}if(t!==0){if(t===2&&(s=yo(e),s!==0&&(n=s,t=Wo(e,s))),t===1)throw r=In,ir(e,0),Mt(e,n),De(e,pe()),r;if(t===6)Mt(e,n);else{if(s=e.current.alternate,!(n&30)&&!_m(s)&&(t=Xi(e,n),t===2&&(o=yo(e),o!==0&&(n=o,t=Wo(e,o))),t===1))throw r=In,ir(e,0),Mt(e,n),De(e,pe()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:er(e,Me,yt);break;case 3:if(Mt(e,n),(n&130023424)===n&&(t=Qa+500-pe(),10<t)){if(Ti(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){_e(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=No(er.bind(null,e,Me,yt),t);break}er(e,Me,yt);break;case 4:if(Mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var a=31-at(n);o=1<<a,a=t[a],a>s&&(s=a),n&=~o}if(n=s,n=pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*zm(n/1960))-n,10<n){e.timeoutHandle=No(er.bind(null,e,Me,yt),n);break}er(e,Me,yt);break;case 5:er(e,Me,yt);break;default:throw Error(E(329))}}}return De(e,pe()),e.callbackNode===r?Ld.bind(null,e):null}function Wo(e,t){var r=yn;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=Me,Me=r,t!==null&&Qo(t)),e}function Qo(e){Me===null?Me=e:Me.push.apply(Me,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!ct(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Wa,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function fc(e){if(J&6)throw Error(E(327));Or();var t=Ti(e,0);if(!(t&1))return De(e,pe()),null;var r=Xi(e,t);if(e.tag!==0&&r===2){var n=yo(e);n!==0&&(t=n,r=Wo(e,n))}if(r===1)throw r=In,ir(e,0),Mt(e,t),De(e,pe()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,Me,yt),De(e,pe()),null}function Ka(e,t){var r=J;J|=1;try{return e(t)}finally{J=r,J===0&&($r=pe()+500,ls&&Gt())}}function ur(e){Lt!==null&&Lt.tag===0&&!(J&6)&&Or();var t=J;J|=1;var r=Ze.transition,n=ee;try{if(Ze.transition=null,ee=1,e)return e()}finally{ee=n,Ze.transition=r,J=t,!(J&6)&&Gt()}}function Xa(){Be=_r.current,ie(_r)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,sm(r)),fe!==null)for(r=fe.return;r!==null;){var n=r;switch(_a(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Li();break;case 3:Fr(),ie(Le),ie(Ne),Da();break;case 5:Ia(n);break;case 4:Fr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:Ra(n.type._context);break;case 22:case 23:Xa()}r=r.return}if(xe=e,fe=e=Vt(e.current,null),je=Be=t,ve=0,In=null,Wa=ps=cr=0,Me=yn=null,rr!==null){for(t=0;t<rr.length;t++)if(r=rr[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=s,n.next=a}r.pending=n}rr=null}return e}function Id(e,t){do{var r=fe;try{if(Aa(),hi.current=Hi,Vi){for(var n=le.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Vi=!1}if(lr=0,ye=ge=le=null,gn=!1,Mn=0,Ha.current=null,r===null||r.return===null){ve=1,In=t,fe=null;break}e:{var o=e,a=r.return,l=r,c=t;if(t=je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,y=l,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var v=ec(a);if(v!==null){v.flags&=-257,tc(v,a,l,o,t),v.mode&1&&Zl(o,u,t),t=v,c=u;var g=t.updateQueue;if(g===null){var b=new Set;b.add(c),t.updateQueue=b}else g.add(c);break e}else{if(!(t&1)){Zl(o,u,t),Ya();break e}c=Error(E(426))}}else if(oe&&l.mode&1){var T=ec(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),tc(T,a,l,o,t),Pa(Br(c,l));break e}}o=c=Br(c,l),ve!==4&&(ve=2),yn===null?yn=[o]:yn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=kd(o,c,t);Ql(o,f);break e;case 1:l=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=jd(o,l,t);Ql(o,j);break e}}o=o.return}while(o!==null)}Fd(r)}catch(R){t=R,fe===r&&r!==null&&(fe=r=r.return);continue}break}while(!0)}function Dd(){var e=Wi.current;return Wi.current=Hi,e===null?Hi:e}function Ya(){(ve===0||ve===3||ve===2)&&(ve=4),xe===null||!(cr&268435455)&&!(ps&268435455)||Mt(xe,je)}function Xi(e,t){var r=J;J|=2;var n=Dd();(xe!==e||je!==t)&&(yt=null,ir(e,t));do try{Pm();break}catch(s){Id(e,s)}while(!0);if(Aa(),J=r,Wi.current=n,fe!==null)throw Error(E(261));return xe=null,je=0,ve}function Pm(){for(;fe!==null;)qd(fe)}function Tm(){for(;fe!==null&&!tf();)qd(fe)}function qd(e){var t=$d(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Fd(e):fe=t,Ha.current=null}function Fd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Sm(r,t),r!==null){r.flags&=32767,fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}else if(r=bm(r,t,Be),r!==null){fe=r;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ve===0&&(ve=5)}function er(e,t,r){var n=ee,s=Ze.transition;try{Ze.transition=null,ee=1,Am(e,t,r,n)}finally{Ze.transition=s,ee=n}return null}function Am(e,t,r,n){do Or();while(Lt!==null);if(J&6)throw Error(E(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(pf(e,o),e===xe&&(fe=xe=null,je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||si||(si=!0,Ud(Pi,function(){return Or(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ze.transition,Ze.transition=null;var a=ee;ee=1;var l=J;J|=4,Ha.current=null,Nm(e,r),Md(r,e),Jf(So),Ai=!!bo,So=bo=null,e.current=r,Em(r),rf(),J=l,ee=a,Ze.transition=o}else e.current=r;if(si&&(si=!1,Lt=e,Ki=s),o=e.pendingLanes,o===0&&($t=null),of(r.stateNode),De(e,pe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Qi)throw Qi=!1,e=Vo,Vo=null,e;return Ki&1&&e.tag!==0&&Or(),o=e.pendingLanes,o&1?e===Ho?xn++:(xn=0,Ho=e):xn=0,Gt(),null}function Or(){if(Lt!==null){var e=ku(Ki),t=Ze.transition,r=ee;try{if(Ze.transition=null,ee=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,Ki=0,J&6)throw Error(E(331));var s=J;for(J|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var y=I;switch(y.tag){case 0:case 11:case 15:vn(8,y,o)}var h=y.child;if(h!==null)h.return=y,I=h;else for(;I!==null;){y=I;var m=y.sibling,v=y.return;if(Td(y),y===u){I=null;break}if(m!==null){m.return=v,I=m;break}I=v}}}var g=o.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var d=e.current;for(I=d;I!==null;){a=I;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,I=p;else e:for(a=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ds(9,l)}}catch(R){ue(l,l.return,R)}if(l===a){I=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,I=j;break e}I=l.return}}if(J=s,Gt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ns,e)}catch{}n=!0}return n}finally{ee=r,Ze.transition=t}}return!1}function mc(e,t,r){t=Br(r,t),t=kd(e,t,1),e=Bt(e,t,1),t=_e(),e!==null&&(Fn(e,1,t),De(e,t))}function ue(e,t,r){if(e.tag===3)mc(e,e,r);else for(;t!==null;){if(t.tag===3){mc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($t===null||!$t.has(n))){e=Br(r,e),e=jd(t,e,1),t=Bt(t,e,1),e=_e(),t!==null&&(Fn(t,1,e),De(t,e));break}}t=t.return}}function Rm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&r,xe===e&&(je&r)===r&&(ve===4||ve===3&&(je&130023424)===je&&500>pe()-Qa?ir(e,0):Wa|=r),De(e,t)}function Bd(e,t){t===0&&(e.mode&1?(t=Xn,Xn<<=1,!(Xn&130023424)&&(Xn=4194304)):t=1);var r=_e();e=Nt(e,t),e!==null&&(Fn(e,t,r),De(e,r))}function Mm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Bd(e,r)}function Om(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Bd(e,r)}var $d;$d=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Oe=!1,wm(e,t,r);Oe=!!(e.flags&131072)}else Oe=!1,oe&&t.flags&1048576&&Wu(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;vi(e,t),e=t.pendingProps;var s=Ir(t,Ne.current);Mr(t,r),s=Fa(null,t,n,e,s,r);var o=Ba();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(n)?(o=!0,Ii(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Oa(t),s.updater=us,t.stateNode=s,s._reactInternals=t,Ro(t,n,e,r),t=Lo(null,t,n,!0,o,r)):(t.tag=0,oe&&o&&za(t),ze(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=Im(n),e=nt(n,e),s){case 0:t=Oo(null,t,n,e,r);break e;case 1:t=ic(null,t,n,e,r);break e;case 11:t=rc(null,t,n,e,r);break e;case 14:t=nc(null,t,n,nt(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:nt(n,s),Oo(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:nt(n,s),ic(e,t,n,s,r);case 3:e:{if(Cd(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,s=o.element,Ju(e,t),$i(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=Br(Error(E(423)),t),t=sc(e,t,n,r,s);break e}else if(n!==s){s=Br(Error(E(424)),t),t=sc(e,t,n,r,s);break e}else for(Ue=Ft(t.stateNode.containerInfo.firstChild),Ve=t,oe=!0,ot=null,r=Yu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Dr(),n===s){t=Et(e,t,r);break e}ze(e,t,n,r)}t=t.child}return t;case 5:return Zu(t),e===null&&Po(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Co(n,s)?a=null:o!==null&&Co(n,o)&&(t.flags|=32),Sd(e,t),ze(e,t,a,r),t.child;case 6:return e===null&&Po(t),null;case 13:return Nd(e,t,r);case 4:return La(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qr(t,null,n,r):ze(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:nt(n,s),rc(e,t,n,s,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,re(Fi,n._currentValue),n._currentValue=a,o!==null)if(ct(o.value,a)){if(o.children===s.children&&!Le.current){t=Et(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=bt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var y=u.pending;y===null?c.next=c:(c.next=y.next,y.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),To(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),To(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ze(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Mr(t,r),s=et(s),n=n(s),t.flags|=1,ze(e,t,n,r),t.child;case 14:return n=t.type,s=nt(n,t.pendingProps),s=nt(n.type,s),nc(e,t,n,s,r);case 15:return wd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:nt(n,s),vi(e,t),t.tag=1,Ie(n)?(e=!0,Ii(t)):e=!1,Mr(t,r),xd(t,n,s),Ro(t,n,s,r),Lo(null,t,n,!0,e,r);case 19:return Ed(e,t,r);case 22:return bd(e,t,r)}throw Error(E(156,t.tag))};function Ud(e,t){return gu(e,t)}function Lm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,r,n){return new Lm(e,t,r,n)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Im(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ga)return 11;if(e===va)return 14}return 2}function Vt(e,t){var r=e.alternate;return r===null?(r=Je(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ki(e,t,r,n,s,o){var a=2;if(n=e,typeof e=="function")Ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xr:return sr(r.children,s,o,t);case ha:a=8,s|=8;break;case ro:return e=Je(12,r,t,s|2),e.elementType=ro,e.lanes=o,e;case no:return e=Je(13,r,t,s),e.elementType=no,e.lanes=o,e;case io:return e=Je(19,r,t,s),e.elementType=io,e.lanes=o,e;case Zc:return fs(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gc:a=10;break e;case Jc:a=9;break e;case ga:a=11;break e;case va:a=14;break e;case Tt:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Je(a,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function sr(e,t,r,n){return e=Je(7,e,n,t),e.lanes=r,e}function fs(e,t,r,n){return e=Je(22,e,n,t),e.elementType=Zc,e.lanes=r,e.stateNode={isHidden:!1},e}function Xs(e,t,r){return e=Je(6,e,null,t),e.lanes=r,e}function Ys(e,t,r){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ps(0),this.expirationTimes=Ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ps(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ja(e,t,r,n,s,o,a,l,c){return e=new Dm(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(o),e}function qm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Vd(e){if(!e)return Kt;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ie(r))return Vu(e,r,t)}return t}function Hd(e,t,r,n,s,o,a,l,c){return e=Ja(r,n,!0,e,s,o,a,l,c),e.context=Vd(null),r=e.current,n=_e(),s=Ut(r),o=bt(n,s),o.callback=t??null,Bt(r,o,s),e.current.lanes=s,Fn(e,s,n),De(e,n),e}function ms(e,t,r,n){var s=t.current,o=_e(),a=Ut(s);return r=Vd(r),t.context===null?t.context=r:t.pendingContext=r,t=bt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Bt(s,t,a),e!==null&&(lt(e,s,a,o),mi(e,s,a)),a}function Yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Za(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function Fm(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function el(e){this._internalRoot=e}hs.prototype.render=el.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ms(e,t,null,null)};hs.prototype.unmount=el.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){ms(null,e,null,null)}),t[Ct]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Rt.length&&t!==0&&t<Rt[r].priority;r++);Rt.splice(r,0,e),r===0&&Cu(e)}};function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function Bm(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var u=Yi(a);o.call(u)}}var a=Hd(t,n,e,0,null,!1,!1,"",gc);return e._reactRootContainer=a,e[Ct]=a.current,_n(e.nodeType===8?e.parentNode:e),ur(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var l=n;n=function(){var u=Yi(c);l.call(u)}}var c=Ja(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=c,e[Ct]=c.current,_n(e.nodeType===8?e.parentNode:e),ur(function(){ms(t,c,r,n)}),c}function vs(e,t,r,n,s){var o=r._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var c=Yi(a);l.call(c)}}ms(t,a,e,s)}else a=Bm(r,t,e,s,n);return Yi(a)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ln(t.pendingLanes);r!==0&&(ka(t,r|1),De(t,pe()),!(J&6)&&($r=pe()+500,Gt()))}break;case 13:ur(function(){var n=Nt(e,1);if(n!==null){var s=_e();lt(n,e,1,s)}}),Za(e,1)}};ja=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var r=_e();lt(t,e,134217728,r)}Za(e,134217728)}};wu=function(e){if(e.tag===13){var t=Ut(e),r=Nt(e,t);if(r!==null){var n=_e();lt(r,e,t,n)}Za(e,t)}};bu=function(){return ee};Su=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};ho=function(e,t,r){switch(t){case"input":if(ao(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=as(n);if(!s)throw Error(E(90));tu(n),ao(n,s)}}}break;case"textarea":nu(e,r);break;case"select":t=r.value,t!=null&&Pr(e,!!r.multiple,t,!1)}};uu=Ka;du=ur;var $m={usingClientEntryPoint:!1,Events:[$n,br,as,lu,cu,Ka]},nn={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Um={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||Fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{ns=oi.inject(Um),mt=oi}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;We.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tl(t))throw Error(E(200));return qm(e,t,null,r)};We.createRoot=function(e,t){if(!tl(e))throw Error(E(299));var r=!1,n="",s=Wd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ja(e,1,!1,null,null,r,!1,n,s),e[Ct]=t.current,_n(e.nodeType===8?e.parentNode:e),new el(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return ur(e)};We.hydrate=function(e,t,r){if(!gs(t))throw Error(E(200));return vs(null,e,t,!0,r)};We.hydrateRoot=function(e,t,r){if(!tl(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",a=Wd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Hd(t,null,e,1,r??null,s,!1,o,a),e[Ct]=t.current,_n(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new hs(t)};We.render=function(e,t,r){if(!gs(t))throw Error(E(200));return vs(null,e,t,!1,r)};We.unmountComponentAtNode=function(e){if(!gs(e))throw Error(E(40));return e._reactRootContainer?(ur(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};We.unstable_batchedUpdates=Ka;We.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!gs(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return vs(e,t,r,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function Qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd)}catch(e){console.error(e)}}Qd(),Qc.exports=We;var Vm=Qc.exports,vc=Vm;eo.createRoot=vc.createRoot,eo.hydrateRoot=vc.hydrateRoot;const vt=Object.create(null);vt.open="0";vt.close="1";vt.ping="2";vt.pong="3";vt.message="4";vt.upgrade="5";vt.noop="6";const ji=Object.create(null);Object.keys(vt).forEach(e=>{ji[vt[e]]=e});const Ko={type:"error",data:"parser error"},Kd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xd=typeof ArrayBuffer=="function",Yd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,rl=({type:e,data:t},r,n)=>Kd&&t instanceof Blob?r?n(t):yc(t,n):Xd&&(t instanceof ArrayBuffer||Yd(t))?r?n(t):yc(new Blob([t]),n):n(vt[e]+(t||"")),yc=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function xc(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Gs;function Hm(e,t){if(Kd&&e.data instanceof Blob)return e.data.arrayBuffer().then(xc).then(t);if(Xd&&(e.data instanceof ArrayBuffer||Yd(e.data)))return t(xc(e.data));rl(e,!1,r=>{Gs||(Gs=new TextEncoder),t(Gs.encode(r))})}const kc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",un=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<kc.length;e++)un[kc.charCodeAt(e)]=e;const Wm=e=>{let t=e.length*.75,r=e.length,n,s=0,o,a,l,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),y=new Uint8Array(u);for(n=0;n<r;n+=4)o=un[e.charCodeAt(n)],a=un[e.charCodeAt(n+1)],l=un[e.charCodeAt(n+2)],c=un[e.charCodeAt(n+3)],y[s++]=o<<2|a>>4,y[s++]=(a&15)<<4|l>>2,y[s++]=(l&3)<<6|c&63;return u},Qm=typeof ArrayBuffer=="function",nl=(e,t)=>{if(typeof e!="string")return{type:"message",data:Gd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Km(e.substring(1),t)}:ji[r]?e.length>1?{type:ji[r],data:e.substring(1)}:{type:ji[r]}:Ko},Km=(e,t)=>{if(Qm){const r=Wm(e);return Gd(r,t)}else return{base64:!0,data:e}},Gd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Jd="",Xm=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((o,a)=>{rl(o,!1,l=>{n[a]=l,++s===r&&t(n.join(Jd))})})},Ym=(e,t)=>{const r=e.split(Jd),n=[];for(let s=0;s<r.length;s++){const o=nl(r[s],t);if(n.push(o),o.type==="error")break}return n};function Gm(){return new TransformStream({transform(e,t){Hm(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const o=new DataView(s.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{s=new Uint8Array(9);const o=new DataView(s.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let Js;function ai(e){return e.reduce((t,r)=>t+r.length,0)}function li(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Jm(e,t){Js||(Js=new TextDecoder);const r=[];let n=0,s=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(ai(r)<1)break;const c=li(r,1);o=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ai(r)<2)break;const c=li(r,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(ai(r)<8)break;const c=li(r,8),u=new DataView(c.buffer,c.byteOffset,c.length),y=u.getUint32(0);if(y>Math.pow(2,21)-1){l.enqueue(Ko);break}s=y*Math.pow(2,32)+u.getUint32(4),n=3}else{if(ai(r)<s)break;const c=li(r,s);l.enqueue(nl(o?c:Js.decode(c),t)),n=0}if(s===0||s>e){l.enqueue(Ko);break}}}})}const Zd=4;function me(e){if(e)return Zm(e)}function Zm(e){for(var t in me.prototype)e[t]=me.prototype[t];return e}me.prototype.on=me.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};me.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};me.prototype.off=me.prototype.removeListener=me.prototype.removeAllListeners=me.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};me.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};me.prototype.emitReserved=me.prototype.emit;me.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};me.prototype.hasListeners=function(e){return!!this.listeners(e).length};const ys=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Ge=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),eh="arraybuffer";function ep(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const th=Ge.setTimeout,rh=Ge.clearTimeout;function xs(e,t){t.useNativeTimers?(e.setTimeoutFn=th.bind(Ge),e.clearTimeoutFn=rh.bind(Ge)):(e.setTimeoutFn=Ge.setTimeout.bind(Ge),e.clearTimeoutFn=Ge.clearTimeout.bind(Ge))}const nh=1.33;function ih(e){return typeof e=="string"?sh(e):Math.ceil((e.byteLength||e.size)*nh)}function sh(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function tp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function oh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function ah(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class lh extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class il extends me{constructor(t){super(),this.writable=!1,xs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new lh(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=nl(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=oh(t);return r.length?"?"+r:""}}class ch extends il{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ym(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Xm(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=tp()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let rp=!1;try{rp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uh=rp;function dh(){}class ph extends ch{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,o)=>{this.onError("xhr post error",s,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class gt extends me{constructor(t,r,n){super(),this.createRequest=t,xs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=ep(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=gt.requestsCount++,gt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=dh,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete gt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}gt.requestsCount=0;gt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",jc);else if(typeof addEventListener=="function"){const e="onpagehide"in Ge?"pagehide":"unload";addEventListener(e,jc,!1)}}function jc(){for(let e in gt.requests)gt.requests.hasOwnProperty(e)&&gt.requests[e].abort()}const fh=function(){const e=np({xdomain:!1});return e&&e.responseType!==null}();class mh extends ph{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=fh&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new gt(np,this.uri(),t)}}function np(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||uh))return new XMLHttpRequest}catch{}if(!t)try{return new Ge[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ip=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class hh extends il{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=ip?{}:ep(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;rl(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}s&&ys(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=tp()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Zs=Ge.WebSocket||Ge.MozWebSocket;class gh extends hh{createSocket(t,r,n){return ip?new Zs(t,r,n):r?new Zs(t,r):new Zs(t)}doWrite(t,r){this.ws.send(r)}}class vh extends il{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Jm(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=Gm();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const o=()=>{n.read().then(({done:l,value:c})=>{l||(this.onPacket(c),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&ys(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const yh={websocket:gh,webtransport:vh,polling:mh},xh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,kh=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Xo(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=xh.exec(e||""),o={},a=14;for(;a--;)o[kh[a]]=s[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=jh(o,o.path),o.queryKey=wh(o,o.query),o}function jh(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function wh(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,o){s&&(r[s]=o)}),r}const Yo=typeof addEventListener=="function"&&typeof removeEventListener=="function",wi=[];Yo&&addEventListener("offline",()=>{wi.forEach(e=>e())},!1);class Ht extends me{constructor(t,r){if(super(),this.binaryType=eh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Xo(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Xo(r.host).host);xs(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ah(this.opts.query)),Yo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},wi.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Zd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Ht.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Ht.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=ih(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ys(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Ht.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Yo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=wi.indexOf(this._offlineEventListener);n!==-1&&wi.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Ht.protocol=Zd;class bh extends Ht{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Ht.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Ht.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(y(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const m=new Error("probe error");m.transport=r.name,this.emitReserved("upgradeError",m)}}))};function o(){n||(n=!0,y(),r.close(),r=null)}const a=h=>{const m=new Error("probe error: "+h);m.transport=r.name,o(),this.emitReserved("upgradeError",m)};function l(){a("transport closed")}function c(){a("socket closed")}function u(h){r&&h.name!==r.name&&o()}const y=()=>{r.removeListener("open",s),r.removeListener("error",a),r.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};r.once("open",s),r.once("error",a),r.once("close",l),this.once("close",c),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let Sh=class extends bh{constructor(t,r={}){const n=typeof t=="object",s=n?{...t}:{...r};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(o=>yh[o]).filter(o=>!!o)),super(n?s:t,s)}};function Ch(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Xo(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Nh=typeof ArrayBuffer=="function",Eh=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,sp=Object.prototype.toString,zh=typeof Blob=="function"||typeof Blob<"u"&&sp.call(Blob)==="[object BlobConstructor]",_h=typeof File=="function"||typeof File<"u"&&sp.call(File)==="[object FileConstructor]";function sl(e){return Nh&&(e instanceof ArrayBuffer||Eh(e))||zh&&e instanceof Blob||_h&&e instanceof File}function bi(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(bi(e[r]))return!0;return!1}if(sl(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return bi(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&bi(e[r]))return!0;return!1}function Ph(e){const t=[],r=e.data,n=e;return n.data=Si(r,t),n.attachments=t.length,{packet:n,buffers:t}}function Si(e,t,r){if(!e)return e;if(sl(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let s=0;s<e.length;s++)n[s]=Si(e[s],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return Si(e.toJSON(),t,!0);const n={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=Si(e[s],t));return n}return e}function Th(e,t){return e.data=Go(e.data,t),delete e.attachments,e}function Go(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Go(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Go(e[r],t));return e}const Ah=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var K;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(K||(K={}));class Rh{constructor(t){this.replacer=t}encode(t){return(t.type===K.EVENT||t.type===K.ACK)&&bi(t)?this.encodeAsBinary({type:t.type===K.EVENT?K.BINARY_EVENT:K.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===K.BINARY_EVENT||t.type===K.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Ph(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class ol extends me{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===K.BINARY_EVENT;n||r.type===K.BINARY_ACK?(r.type=n?K.EVENT:K.ACK,this.reconstructor=new Mh(r)):super.emitReserved("decoded",r)}else if(sl(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(K[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===K.BINARY_EVENT||n.type===K.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!Oh(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(ol.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case K.CONNECT:return wc(r);case K.DISCONNECT:return r===void 0;case K.CONNECT_ERROR:return typeof r=="string"||wc(r);case K.EVENT:case K.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Ah.indexOf(r[0])===-1);case K.ACK:case K.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Mh{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Th(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Oh=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function wc(e){return Object.prototype.toString.call(e)==="[object Object]"}const Lh=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ol,Encoder:Rh,get PacketType(){return K}},Symbol.toStringTag,{value:"Module"}));function st(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Ih=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class op extends me{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[st(t,"open",this.onopen.bind(this)),st(t,"packet",this.onpacket.bind(this)),st(t,"error",this.onerror.bind(this)),st(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,o;if(Ih.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:K.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const y=this.ids++,h=r.pop();this._registerAckCallback(y,h),a.id=y}const l=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},s),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,s)=>{const o=(a,l)=>a?s(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...o)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:K.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case K.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case K.EVENT:case K.BINARY_EVENT:this.onevent(t);break;case K.ACK:case K.BINARY_ACK:this.onack(t);break;case K.DISCONNECT:this.ondisconnect();break;case K.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:K.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:K.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Kr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Kr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Kr.prototype.reset=function(){this.attempts=0};Kr.prototype.setMin=function(e){this.ms=e};Kr.prototype.setMax=function(e){this.max=e};Kr.prototype.setJitter=function(e){this.jitter=e};class Jo extends me{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,xs(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Kr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||Lh;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Sh(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=st(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=st(r,"error",o);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{s(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(st(t,"ping",this.onping.bind(this)),st(t,"data",this.ondata.bind(this)),st(t,"error",this.onerror.bind(this)),st(t,"close",this.onclose.bind(this)),st(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){ys(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new op(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const sn={};function Ci(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Ch(e,t.path||"/socket.io"),n=r.source,s=r.id,o=r.path,a=sn[s]&&o in sn[s].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return l?c=new Jo(n,t):(sn[s]||(sn[s]=new Jo(n,t)),c=sn[s]),r.query&&!t.query&&(t.query=r.queryKey),c.socket(r.path,t)}Object.assign(Ci,{Manager:Jo,Socket:op,io:Ci,connect:Ci});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=z.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:a,...l},c)=>z.createElement("svg",{ref:c,...qh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:ap("lucide",s),...l},[...a.map(([u,y])=>z.createElement(u,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=z.forwardRef(({className:n,...s},o)=>z.createElement(Fh,{ref:o,iconNode:t,className:ap(`lucide-${Dh(e)}`,n),...s}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=L("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=L("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=L("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=L("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=L("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=L("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=L("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=L("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=L("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=L("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=L("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=L("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=L("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=L("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=L("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=L("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=L("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=L("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=L("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=L("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=L("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=L("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=L("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=L("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=L("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=L("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=L("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=L("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=L("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=L("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=L("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=L("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=L("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=L("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=L("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=L("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=L("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=L("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=L("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=L("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=L("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=L("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=L("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=L("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=L("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=L("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=L("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=L("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=L("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function mg({chave:e,nome:t,cidade:r,valor:n,txtId:s="***"}){if(!e)return"";const o=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),c=Number(n||0).toFixed(2);function u(M,$){const w=$.length.toString().padStart(2,"0");return`${M}${w}${$}`}const y=u("00","br.gov.bcb.pix"),h=u("01",o),m=u("26",`${y}${h}`),v=u("52","0000"),g=u("53","986"),b=u("54",c),T=u("58","BR"),f=u("59",a),d=u("60",l),p=u("05",s||"***"),j=u("62",p),R=`000201${m}${v}${g}${b}${T}${f}${d}${j}6304`;let P=65535;for(let M=0;M<R.length;M++){P^=R.charCodeAt(M)<<8;for(let $=0;$<8;$++)P&32768?P=(P<<1^4129)&65535:P=P<<1&65535}const O=(P&65535).toString(16).toUpperCase().padStart(4,"0");return`${R}${O}`}function hg({socket:e,menu:t,operador:r,onEnviarPedido:n,onReservarItem:s,onLiberarItem:o,onLiberarCarrinho:a}){const[l,c]=z.useState(""),[u,y]=z.useState([]),[h,m]=z.useState("todas"),[v,g]=z.useState(null),[b,T]=z.useState(null),[f,d]=z.useState(null),[p,j]=z.useState(null),[R,P]=z.useState(!1),O=z.useRef(!1),[M,$]=z.useState("cardapio"),[w,C]=z.useState("pix"),[V,se]=z.useState(""),[de,Ke]=z.useState(()=>{const S=new Date;return S.setDate(S.getDate()+7),S.toISOString().split("T")[0]}),[x,H]=z.useState(null),[N,A]=z.useState(!1),[F,X]=z.useState(!1);z.useEffect(()=>{fetch("/api/pix-config").then(S=>S.json()).then(S=>H(S)).catch(S=>console.error("Erro ao carregar chave PIX:",S)),fetch("/api/printer-config").then(S=>S.json()).then(S=>P(S.plataformaSuportada!==!1)).catch(()=>P(!1))},[]);const Y=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],qe=t&&Array.isArray(t.categorias)?t.categorias:[],Ee=S=>{if(S.categoria)return S.categoria;const q=qe.find(G=>G.id===S.categoriaId);return q?q.nome:"Geral"},ut=["todas",...new Set(Y.map(S=>Ee(S)))],he=S=>{if(!S||!S.controlaEstoque)return{controla:!1,disponivel:1/0,esgotado:!1,acabando:!1};const q=typeof S.disponivelEstoque=="number"?S.disponivelEstoque:Math.max(0,(S.estoque||0)-(S.reservado||0));return{controla:!0,disponivel:q,esgotado:q<=0,acabando:q>0&&q<=(S.estoqueMinimo||0)}},Fe=(S,q,G)=>{if(!s){G();return}s(S,q,te=>{if(te&&te.ok)T(null),G();else{const U=Y.find(Re=>Re.id===S);T({titulo:`Sem estoque suficiente de "${(U==null?void 0:U.nome)||"produto"}"`,itens:[{nome:(U==null?void 0:U.nome)||S,disponivel:(te==null?void 0:te.disponivel)??0}]})}})},_t=(S,q)=>{o&&o(S,q)},fr=S=>{he(S).esgotado||Fe(S.id,1,()=>{y(G=>G.find(U=>U.id===S.id)?G.map(U=>U.id===S.id?{...U,quantidade:U.quantidade+1}:U):[...G,{...S,quantidade:1,observacao:""}])})},Jt=(S,q)=>{const G=()=>{y(te=>te.map(U=>{if(U.id===S){const Re=U.quantidade+q;return Re>0?{...U,quantidade:Re}:null}return U}).filter(Boolean))};q>0?Fe(S,q,G):(_t(S,Math.abs(q)),G())},mr=(S,q)=>{y(G=>G.map(te=>te.id===S?{...te,observacao:q}:te))},_=S=>{const q=u.find(G=>G.id===S);q&&_t(S,q.quantidade),y(G=>G.filter(te=>te.id!==S))},D=()=>{a&&a(),y([]),T(null)};z.useEffect(()=>()=>{a&&a()},[]);const k=()=>{!f||O.current||(O.current=!0,j({tipo:"enviando",texto:"Enviando para a impressora..."}),fetch(`/api/orders/${f.id}/imprimir`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vias:{cliente:!0,cozinha:!1},operadorNome:r?r.nome:"Caixa"})}).then(S=>S.json()).then(S=>{S&&S.status==="success"?j({tipo:"ok",texto:"Comprovante enviado para a impressora."}):j({tipo:"erro",texto:(S==null?void 0:S.error)||"Não foi possível imprimir."})}).catch(()=>{j({tipo:"erro",texto:"Erro de conexão ao imprimir."})}).finally(()=>{O.current=!1}))},B=u.reduce((S,q)=>S+q.preco*q.quantidade,0),Q=u.reduce((S,q)=>S+q.quantidade,0),Ae=x!=null&&x.chavePix?mg({chave:x.chavePix,nome:x.nomeBeneficiario,cidade:x.cidadeBeneficiario,valor:B}):"",bs=()=>{Ae&&(navigator.clipboard.writeText(Ae),X(!0),setTimeout(()=>X(!1),3e3))},Xr=S=>{if(S&&S.preventDefault(),!l.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(u.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(w==="pagar_depois"){if(!V.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!de){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const q={cliente:l.trim(),criadoPor:r?r.nome:"Caixa",itens:u.map(U=>({id:U.id,nome:U.nome,preco:U.preco,quantidade:U.quantidade,observacao:U.observacao||""})),total:B,formaPagamento:w,telefoneCliente:w==="pagar_depois"?V.trim():V.trim()||void 0,dataCobranca:w==="pagar_depois"?de:void 0},G=U=>{if(U&&U.erro==="estoque_insuficiente"){T({titulo:"Estoque insuficiente para fechar o pedido",itens:(U.itensIndisponiveis||[]).map(Ss=>({nome:Ss.nome,pedido:Ss.pedido,disponivel:Ss.disponivel}))}),A(!1),$("carrinho");return}if(U&&U.error){alert(U.error);return}const Re=(U==null?void 0:U.order)||(U==null?void 0:U.pedido)||null,gp=(Re==null?void 0:Re.numero)||"OK";g(`Pedido #${gp} enviado para a cozinha!`),Re!=null&&Re.id&&(d(Re),j(null)),T(null),A(!1),c(""),se(""),y([]),C("pix"),$("cardapio"),setTimeout(()=>g(null),4e3)},te=n||(e?(U,Re)=>e.emit("criar_pedido",U,Re):null);te?te(q,G):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}).then(U=>U.json()).then(G).catch(U=>{console.error("Erro ao enviar pedido:",U),alert("Erro ao comunicar com o servidor.")})},hr=Y.filter(S=>{const q=S.disponivel!==!1&&S.ativo!==!1,G=Ee(S),te=h==="todas"||G===h||S.categoriaId===h;return q&&te});return i.jsxs("div",{className:"caixa-container",children:[i.jsx("style",{children:`
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

        .painel-comprovante {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
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
      `}),i.jsxs("div",{className:"mobile-view-toggle",children:[i.jsxs("button",{className:`mobile-toggle-btn ${M==="cardapio"?"active":""}`,onClick:()=>$("cardapio"),children:[i.jsx(mp,{size:16})," Cardápio de Produtos"]}),i.jsxs("button",{className:`mobile-toggle-btn ${M==="carrinho"?"active":""}`,onClick:()=>$("carrinho"),children:[i.jsx(kt,{size:16})," Comanda (",Q,")"]})]}),i.jsxs("div",{className:`caixa-cardapio-col ${M!=="cardapio"?"mobile-hidden":""}`,children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(kt,{size:24,color:"var(--primary)"}),i.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),v&&i.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[i.jsx(ks,{size:18}),i.jsx("span",{children:v})]}),f&&i.jsxs("div",{className:"painel-comprovante",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:1,minWidth:"180px"},children:[i.jsxs("div",{style:{fontWeight:800,color:"var(--text-title)",fontSize:"0.95rem"},children:["Comanda #",f.numero," — ",f.cliente]}),i.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)",marginTop:"2px"},children:["Total R$ ",(Number(f.total)||0).toFixed(2)]})]}),R&&i.jsxs("button",{className:"btn btn-primary",style:{padding:"0.55rem 0.9rem",fontSize:"0.9rem"},onClick:k,disabled:(p==null?void 0:p.tipo)==="enviando",children:[i.jsx(Wt,{size:17}),(p==null?void 0:p.tipo)==="enviando"?"Enviando...":"Imprimir comprovante"]}),i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.5rem",minHeight:"38px"},onClick:()=>{d(null),j(null)},title:"Fechar",children:i.jsx(aa,{size:16})})]}),p&&p.tipo!=="enviando"&&i.jsxs("div",{style:{fontSize:"0.83rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.4rem",color:p.tipo==="ok"?"var(--status-pronto)":"var(--primary)"},children:[p.tipo==="ok"?i.jsx($e,{size:15}):i.jsx(kn,{size:15}),i.jsx("span",{children:p.texto})]})]}),i.jsx("div",{className:"cat-pills",children:ut.map(S=>i.jsx("button",{className:`cat-btn ${h===S?"active":""}`,onClick:()=>m(S),children:S==="todas"?"Todas as Categorias":S},S))}),i.jsx("div",{className:"produtos-grid",children:hr.map(S=>{const q=he(S);return i.jsxs("div",{className:`prod-card ${q.esgotado?"prod-card-esgotado":""}`,onClick:()=>fr(S),children:[i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.4rem"},children:[i.jsx("span",{className:"prod-cat",children:Ee(S)}),q.controla&&(q.esgotado?i.jsx("span",{className:"estoque-badge estoque-esgotado",children:"ESGOTADO"}):q.acabando?i.jsxs("span",{className:"estoque-badge estoque-acabando",children:["Últimas ",q.disponivel]}):i.jsxs("span",{className:"estoque-badge estoque-ok",children:["Restam ",q.disponivel]}))]}),i.jsx("div",{className:"prod-title",children:S.nome}),S.descricao&&i.jsx("div",{className:"prod-desc",children:S.descricao})]}),i.jsxs("div",{className:"prod-footer",children:[i.jsxs("span",{className:"prod-preco",children:["R$ ",(S.preco||0).toFixed(2)]}),i.jsx("button",{className:"prod-add-btn",title:q.esgotado?"Produto esgotado":"Adicionar ao Pedido",disabled:q.esgotado,children:i.jsx(Zi,{size:18})})]})]},S.id)})})]}),i.jsxs("div",{className:`caixa-carrinho-col ${M!=="carrinho"?"mobile-hidden":""}`,children:[i.jsxs("div",{className:"carrinho-header",children:[i.jsxs("div",{className:"carrinho-title",children:[i.jsx(kt,{size:20,color:"var(--primary)"}),i.jsx("span",{children:"Comanda Atual"})]}),u.length>0&&i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:D,children:"Limpar"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),i.jsxs("div",{className:"cliente-input-box",children:[i.jsx(Ur,{size:18,color:"var(--primary)"}),i.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:l,onChange:S=>c(S.target.value)})]})]}),b&&i.jsxs("div",{className:"aviso-estoque",children:[i.jsxs("div",{className:"aviso-estoque-titulo",children:[i.jsx(kn,{size:17}),i.jsx("span",{children:b.titulo})]}),i.jsx("ul",{className:"aviso-estoque-lista",children:b.itens.map((S,q)=>i.jsxs("li",{children:[i.jsx("strong",{children:S.nome}),S.pedido!==void 0?` — pedido ${S.pedido}, `:" — ",S.disponivel>0?`restam apenas ${S.disponivel}`:"sem estoque disponível"]},q))}),i.jsx("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Ajuste as quantidades acima e envie novamente. Nada do pedido foi perdido."}),i.jsx("button",{className:"btn btn-secondary",style:{alignSelf:"flex-start",padding:"0.25rem 0.6rem",fontSize:"0.78rem",minHeight:"30px"},onClick:()=>T(null),children:"Entendi"})]}),i.jsx("div",{className:"carrinho-itens",children:u.length===0?i.jsxs("div",{className:"carrinho-vazio",children:[i.jsx(kt,{size:36,opacity:.4}),i.jsx("p",{children:"Nenhum item adicionado ainda."}),i.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):u.map(S=>{const q=Y.find(U=>U.id===S.id)||S,G=he(q),te=G.controla&&G.disponivel<=0;return i.jsxs("div",{className:"carrinho-item",children:[i.jsxs("div",{className:"item-main",children:[i.jsxs("div",{children:[i.jsx("div",{className:"item-nome",children:S.nome}),i.jsxs("div",{className:"item-preco",children:["R$ ",(S.preco*S.quantidade).toFixed(2)]}),G.controla&&i.jsx("div",{style:{fontSize:"0.72rem",color:te?"var(--primary)":"var(--app-ink-muted)",marginTop:"2px"},children:te?"Último disponível no estoque":`Restam ${G.disponivel} em estoque`})]}),i.jsxs("div",{className:"item-qtd-ctrl",children:[i.jsx("button",{className:"qtd-btn",onClick:()=>Jt(S.id,-1),children:i.jsx(up,{size:14})}),i.jsx("span",{className:"qtd-val",children:S.quantidade}),i.jsx("button",{className:"qtd-btn",onClick:()=>Jt(S.id,1),disabled:te,title:te?"Sem estoque disponível":"Adicionar mais uma unidade",style:te?{opacity:.35,cursor:"not-allowed"}:void 0,children:i.jsx(Zi,{size:14})}),i.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>_(S.id),children:i.jsx(es,{size:14})})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(Ji,{size:12,color:"var(--app-ink-muted)"}),i.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:S.observacao,onChange:U=>mr(S.id,U.target.value)})]})]},S.id)})}),i.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[i.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),i.jsxs("div",{className:"pgto-grid",children:[i.jsxs("button",{type:"button",className:`pgto-btn ${w==="pix"?"active":""}`,onClick:()=>C("pix"),children:[i.jsx(Ni,{size:16})," PIX"]}),i.jsxs("button",{type:"button",className:`pgto-btn ${w==="dinheiro"?"active":""}`,onClick:()=>C("dinheiro"),children:[i.jsx(cp,{size:16})," Dinheiro"]}),i.jsxs("button",{type:"button",className:`pgto-btn ${w==="debito"?"active":""}`,onClick:()=>C("debito"),children:[i.jsx(Ni,{size:16})," Débito"]}),i.jsxs("button",{type:"button",className:`pgto-btn ${w==="credito"?"active":""}`,onClick:()=>C("credito"),children:[i.jsx(Ni,{size:16})," Crédito"]}),i.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${w==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>C("pagar_depois"),children:[i.jsx(ea,{size:16})," Pagar Depois (Fiado)"]})]}),w==="pix"&&B>0&&i.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>A(!0),children:[i.jsx(Nc,{size:18})," Gerar QR Code PIX (R$ ",B.toFixed(2),")"]}),w==="pagar_depois"&&i.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(ia,{size:14})," Telefone / WhatsApp do Cliente *"]}),i.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:V,onChange:S=>se(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(js,{size:14})," Data de Cobrança / Vencimento *"]}),i.jsx("input",{type:"date",className:"form-input",value:de,onChange:S=>Ke(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),i.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(kn,{size:13,color:"var(--status-preparo)"}),i.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),i.jsxs("div",{className:"carrinho-footer",children:[i.jsxs("div",{className:"total-row",children:[i.jsx("span",{className:"total-label",children:"Total a Pagar:"}),i.jsxs("span",{className:"total-value",children:["R$ ",B.toFixed(2)]})]}),i.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:Xr,disabled:u.length===0||!l.trim(),children:[i.jsx(zc,{size:18})," Enviar para Cozinha"]})]})]}),N&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-card-pix",children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[i.jsx(Nc,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>A(!1),children:i.jsx(aa,{size:16})})]}),i.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",i.jsx("strong",{style:{color:"var(--text-title)"},children:l||"Cliente no Caixa"})]}),Ae?i.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:i.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(Ae)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):i.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),i.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",B.toFixed(2)]}),i.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",i.jsx("strong",{children:(x==null?void 0:x.nomeBeneficiario)||"Festa do Morango"})," (",x==null?void 0:x.chavePix,")"]}),Ae&&i.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:i.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:bs,children:[F?i.jsx($e,{size:16,color:"var(--primary)"}):i.jsx(Wh,{size:16}),F?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),i.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[i.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>A(!1),children:"Voltar"}),i.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:Xr,disabled:u.length===0||!l.trim(),children:[i.jsx(zc,{size:16})," Confirmar & Enviar"]})]})]})}),i.jsxs("div",{className:`mobile-cart-float-bar ${M==="cardapio"&&u.length>0?"mobile-show-float":""}`,onClick:()=>$("carrinho"),children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[i.jsx(kt,{size:20}),i.jsxs("span",{children:["Ver Pedido (",Q," ",Q===1?"item":"itens",")"]})]}),i.jsxs("span",{children:["R$ ",B.toFixed(2)," →"]})]})]})}function gg({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[s,o]=z.useState(Date.now()),[a,l]=z.useState("ativos");z.useEffect(()=>{const v=setInterval(()=>{o(Date.now())},1e3);return()=>clearInterval(v)},[]);const c=e.filter(v=>v.status==="pendente"||v.status==="em_preparo"||v.status==="entrega_parcial"),u=c.filter(v=>a==="pendentes"?v.status==="pendente":a==="preparo"?v.status==="em_preparo":a==="parcial"?v.status==="entrega_parcial":a==="meus"&&t?v.preparadoPor&&v.preparadoPor.includes(t.nome):!0),y=v=>{const g=new Date(v).getTime(),b=s-g;return Math.floor(b/6e4)},h=v=>{const g=new Date(v).getTime(),b=Math.max(0,s-g),T=Math.floor(b/6e4),f=Math.floor(b%6e4/1e3);return`${String(T).padStart(2,"0")}:${String(f).padStart(2,"0")}`},m=v=>{const g=y(v);return g>=10?"urgente":g>=5?"alerta":"normal"};return i.jsxs("div",{className:"cozinha-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"cozinha-header",children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(Dn,{size:26,color:"var(--status-preparo)"}),i.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),i.jsxs("div",{className:"nav-tabs",children:[i.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",c.length,")"]}),i.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",c.filter(v=>v.status==="pendente").length,")"]}),i.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",c.filter(v=>v.status==="em_preparo").length,")"]}),i.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",c.filter(v=>v.status==="entrega_parcial").length,")"]}),t&&i.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",c.filter(v=>v.preparadoPor&&v.preparadoPor.includes(t.nome)).length,")"]})]})]}),i.jsx("div",{className:"cozinha-grid",children:u.length===0?i.jsxs("div",{className:"kds-vazio",children:[i.jsx(Gi,{size:48,color:"var(--status-pronto)"}),i.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),i.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):u.map(v=>{const g=m(v.criadoEm),b=h(v.criadoEm),T=v.itens.reduce((p,j)=>p+(j.quantidade||1),0),f=v.itens.filter(p=>p.entregue).reduce((p,j)=>p+(j.quantidade||1),0),d=f>0&&f<T;return i.jsxs("div",{className:`kds-card ${g}`,children:[i.jsxs("div",{className:"kds-card-header",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"comanda-num",children:["#",v.numero]}),i.jsx("div",{className:"cliente-nome",children:v.cliente}),v.formaPagamento==="pagar_depois"?i.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",v.dataCobranca?new Date(v.dataCobranca).toLocaleDateString():"Sem data",")"]}):i.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:v.formaPagamento?v.formaPagamento.toUpperCase():"PIX"}),v.preparadoPor&&i.jsxs("div",{className:"preparador-badge",children:[i.jsx(Ur,{size:12}),i.jsxs("span",{children:["Preparo: ",v.preparadoPor]})]})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?i.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",f,"/",T,")"]}):i.jsx("span",{className:`badge badge-${v.status==="pendente"?"pendente":"preparo"}`,children:v.status==="pendente"?"Novo":"Em Preparo"}),i.jsxs("div",{className:`timer-box ${g}`,children:[i.jsx(js,{size:14}),i.jsx("span",{children:b})]})]})]}),i.jsxs("div",{className:"kds-card-body",children:[i.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[i.jsx(dp,{size:14,color:"var(--primary)"}),i.jsxs("span",{children:["Clique no item para marcar entrega parcial (",f,"/",T," entregues):"]})]}),v.itens.map((p,j)=>i.jsxs("div",{className:`kds-item-row ${p.entregue?"item-entregue":""}`,children:[i.jsxs("div",{className:"item-line",children:[i.jsxs("div",{className:"item-info",children:[i.jsxs("span",{className:"item-qtd-badge",children:[p.quantidade,"x"]}),i.jsx("span",{className:"item-titulo",children:p.nome})]}),i.jsxs("button",{type:"button",className:`item-check-btn ${p.entregue?"checked":""}`,onClick:()=>n&&n(v.id,j,!p.entregue),title:p.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[p.entregue?i.jsx(pp,{size:14}):i.jsx(fp,{size:14}),i.jsx("span",{children:p.entregue?"Entregue":"Entregar"})]})]}),p.observacao&&i.jsxs("div",{className:"item-obs-highlight",children:[i.jsx(Zh,{size:13,color:"var(--text-obs)"}),i.jsxs("span",{children:["OBS: ",p.observacao]})]})]},j))]}),i.jsx("div",{className:"kds-card-footer",children:v.status==="pendente"?i.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(v.id,"em_preparo"),children:[i.jsx(ng,{size:18})," Iniciar Preparo"]}):i.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(v.id,"pronto"),children:[i.jsx(al,{size:18})," Pronto / Chamar Cliente"]})})]},v.id)})})]})}let vr=null;function vg(){if(!vr){const e=window.AudioContext||window.webkitAudioContext;e&&(vr=new e)}return vr&&vr.state==="suspended"&&vr.resume(),vr}function Rc(){try{const e=vg();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const s=e.createOscillator(),o=e.createGain();s.type="sine",s.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),s.connect(o),o.connect(e.destination),s.start(t+.35),s.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function yg({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[s,o]=z.useState(!0),[a,l]=z.useState(null);z.useEffect(()=>{t&&(t.status==="pronto"||t.status==="entrega_parcial")&&s&&(Rc(),l(t.id))},[t,s]);const c=e.filter(g=>g.status==="pronto"||g.status==="entrega_parcial"),u=e.filter(g=>g.status==="entregue").slice(0,8),y=a?e.find(g=>g.id===a):t?e.find(g=>g.id===t.id):null,h=y&&(y.status==="pronto"||y.status==="entrega_parcial")?y:c[0],m=()=>{if(!h||c.length<=1)return;const g=c.findIndex(T=>T.id===h.id),b=c[(g+1)%c.length];b&&l(b.id)},v=g=>{r(g,"entregue");const b=c.filter(T=>T.id!==g);b.length>0?l(b[0].id):l(null)};return i.jsxs("div",{className:"chamada-tv-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"tv-main-panel",children:[i.jsx("div",{className:"tv-panel-controls",children:i.jsxs("button",{className:`btn btn-secondary ${s?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{o(!s),s||Rc()},children:[s?i.jsx(ug,{size:18,color:"var(--status-pronto)"}):i.jsx(dg,{size:18,color:"var(--primary)"}),i.jsx("span",{style:{fontSize:"0.85rem"},children:s?"Som Ativo":"Mudo"})]})}),i.jsxs("div",{className:"destaque-label",children:[i.jsx(al,{size:22,color:"var(--status-pronto)"}),i.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),h?i.jsxs("div",{className:"destaque-card",children:[i.jsxs("div",{className:"destaque-comanda",children:["#",h.numero]}),i.jsx("div",{className:"destaque-cliente",children:h.cliente}),h.itens&&i.jsxs("div",{className:"destaque-itens-box",children:[i.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"Conferência de Itens no Balcão:"}),i.jsxs("span",{style:{color:"var(--primary)",fontWeight:800},children:[h.itens.filter(g=>g.entregue).length," de ",h.itens.length," entregues"]})]}),h.itens.map((g,b)=>{const T=!!g.entregue;return i.jsxs("div",{className:`destaque-item-row ${T?"item-entregue":""}`,onClick:()=>n&&n(h.id,b,!T),children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[i.jsxs("span",{className:T?"badge badge-pronto":"badge badge-pendente",children:[g.quantidade,"x"]}),i.jsx("span",{style:{color:T?"#156b16":"var(--text-title)",textDecoration:T?"line-through":"none",fontWeight:700},children:g.nome}),g.observacao&&i.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",g.observacao,")"]})]}),i.jsxs("button",{type:"button",className:`btn ${T?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:f=>{f.stopPropagation(),n&&n(h.id,b,!T)},children:[T?i.jsx(pp,{size:16}):i.jsx(fp,{size:16}),i.jsx("span",{children:T?"✓ Entregue":"Dar Baixa"})]})]},b)})]}),i.jsxs("div",{className:"destaque-acoes",children:[i.jsxs("button",{className:"btn btn-success",style:{flex:2,padding:"0.85rem",fontSize:"1rem",borderRadius:"var(--radius-md)",fontWeight:700},onClick:()=>v(h.id),children:[i.jsx(Ac,{size:20})," Finalizar & Entregar Todos"]}),c.length>1&&i.jsxs("button",{className:"btn btn-secondary",style:{flex:1,padding:"0.85rem",fontSize:"0.88rem",borderRadius:"var(--radius-md)",fontWeight:600},onClick:m,children:[i.jsx(lp,{size:18})," Próximo da Fila"]})]})]}):i.jsxs("div",{className:"chamada-vazio",children:[i.jsx(ts,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),i.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),i.jsxs("div",{className:"tv-sidebar",children:[i.jsxs("div",{className:"sidebar-section",children:[i.jsxs("div",{className:"sidebar-title",children:[i.jsx(Gi,{size:18,color:"var(--status-pronto)"}),i.jsxs("span",{children:["Fila no Balcão (",c.length,")"]})]}),i.jsx("div",{className:"prontos-lista",children:c.length===0?i.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):c.map(g=>{const b=h&&g.id===h.id;return i.jsxs("div",{className:`pronto-item ${b?"item-ativo-tv":""}`,onClick:()=>l(g.id),children:[i.jsxs("div",{children:[i.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",g.numero]}),i.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:g.cliente}),g.status==="entrega_parcial"&&i.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",g.itens?g.itens.filter(T=>T.entregue).length:0,"/",g.itens?g.itens.length:0,")"]})]}),i.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[i.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:T=>{T.stopPropagation(),l(g.id)},children:b?"Exibindo":"Exibir"}),i.jsx("button",{type:"button",className:"btn btn-success",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:T=>{T.stopPropagation(),v(g.id)},children:"Entregar"})]})]},g.id)})})]}),i.jsxs("div",{className:"sidebar-section",children:[i.jsxs("div",{className:"sidebar-title",children:[i.jsx(Ac,{size:18,color:"var(--app-ink-muted)"}),i.jsx("span",{children:"Últimos Entregues"})]}),i.jsx("div",{className:"entregues-lista",children:u.length===0?i.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):u.map(g=>i.jsxs("div",{className:"entregue-chip",children:[i.jsxs("span",{children:["#",g.numero]}),i.jsx("strong",{style:{color:"var(--app-ink)"},children:g.cliente})]},g.id))})]})]})]})}const hp=[{id:"burger",nome:"Hambúrguer",component:i.jsx($h,{size:18})},{id:"fries",nome:"Porção",component:i.jsx(sg,{size:18})},{id:"drink",nome:"Bebida",component:i.jsx(Qh,{size:18})},{id:"dessert",nome:"Sobremesa",component:i.jsx(Hh,{size:18})},{id:"pizza",nome:"Pizza",component:i.jsx(rg,{size:18})},{id:"coffee",nome:"Café",component:i.jsx(Vh,{size:18})},{id:"utensils",nome:"Geral",component:i.jsx(Vr,{size:18})}];function Mc(e){const t=hp.find(r=>r.id===e);return t?t.component:i.jsx(Vr,{size:16})}function xg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:s,onExcluirCategoria:o,onAjustarEstoque:a}){const[l,c]=z.useState("todas"),[u,y]=z.useState(""),[h,m]=z.useState(!1),[v,g]=z.useState(!1),[b,T]=z.useState(!1),[f,d]=z.useState(null),[p,j]=z.useState(""),[R,P]=z.useState(""),[O,M]=z.useState(""),[$,w]=z.useState(""),[C,V]=z.useState(!1),[se,de]=z.useState("0"),[Ke,x]=z.useState("0"),[H,N]=z.useState(""),[A,F]=z.useState("burger"),X=Array.isArray(e==null?void 0:e.categorias)?e.categorias:[],Y=Array.isArray(e==null?void 0:e.produtos)?e.produtos:Array.isArray(e)?e:[],qe=k=>!!k.controlaEstoque&&(k.estoque||0)<=(k.estoqueMinimo||0),Ee=Y.filter(qe).length,ut=Y.filter(k=>{const B=l==="todas"||k.categoriaId===l,Q=!u.trim()||k.nome.toLowerCase().includes(u.toLowerCase())||k.descricao&&k.descricao.toLowerCase().includes(u.toLowerCase()),Ae=!h||qe(k);return B&&Q&&Ae}),he=(k,B)=>{a&&a(k.id,B).then(Q=>{Q&&Q.error&&alert(Q.error)})},Fe=k=>{const B=window.prompt(`Repor estoque de "${k.nome}".
Saldo atual: ${k.estoque||0}

Quantas unidades deseja ADICIONAR?`,"10");if(B===null)return;const Q=parseInt(B,10);if(Number.isNaN(Q)||Q===0){alert("Informe um número inteiro diferente de zero.");return}he(k,{delta:Q})},_t=(k=null)=>{var B;k?(d(k),j(k.nome),P(k.categoriaId),M(k.preco.toString()),w(k.descricao||""),V(!!k.controlaEstoque),de(String(k.estoque??0)),x(String(k.estoqueMinimo??0))):(d(null),j(""),P(((B=X[0])==null?void 0:B.id)||"lanches"),M(""),w(""),V(!1),de("0"),x("0")),g(!0)},fr=()=>{N(""),F("burger"),T(!0)},Jt=k=>{if(k.preventDefault(),!p.trim()||!O||!R){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:f?f.id:void 0,categoriaId:R,nome:p.trim(),preco:parseFloat(O),descricao:$.trim(),disponivel:f?f.disponivel:!0,controlaEstoque:C,estoque:C&&parseInt(se,10)||0,estoqueMinimo:C&&parseInt(Ke,10)||0}),g(!1)},mr=k=>{if(k.preventDefault(),!H.trim()){alert("O nome da categoria é obrigatório.");return}s({nome:H.trim(),icone:A}),T(!1)},_=k=>{window.confirm(`Tem certeza que deseja excluir o produto "${k.nome}"?`)&&r(k.id)},D=k=>{const B=Y.filter(Q=>Q.categoriaId===k.id).length;if(B>0){alert(`Não é possível excluir a categoria "${k.nome}" pois ela possui ${B} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${k.nome}"?`)&&o(k.id).then(Q=>{Q&&Q.error?alert(Q.error):l===k.id&&c("todas")})};return i.jsxs("div",{className:"cardapio-crud-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"crud-topbar",children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(Vr,{size:26,color:"var(--primary)"}),i.jsx("span",{children:"Gestão do Cardápio"})]}),i.jsxs("div",{className:"search-box",children:[i.jsx(ll,{size:18,color:"var(--app-ink-muted)"}),i.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:k=>y(k.target.value)})]}),i.jsxs("div",{className:"crud-actions",children:[i.jsxs("button",{className:"btn btn-secondary",onClick:fr,children:[i.jsx(bc,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),i.jsxs("button",{className:"btn btn-primary",onClick:()=>_t(),children:[i.jsx(Zi,{size:18})," + Produto"]})]})]}),i.jsxs("div",{className:"cat-pills-bar",children:[i.jsxs("button",{className:`cat-pill-btn ${l==="todas"?"active":""}`,onClick:()=>c("todas"),children:[i.jsx(mp,{size:14})," Todas (",Y.length,")"]}),X.map(k=>{const B=Y.filter(Q=>Q.categoriaId===k.id).length;return i.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[i.jsxs("button",{className:`cat-pill-btn ${l===k.id?"active":""}`,onClick:()=>c(k.id),children:[Mc(k.icone)," ",i.jsx("span",{children:k.nome})," (",B,")"]}),B===0&&i.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>D(k),children:i.jsx(es,{size:13})})]},k.id)}),i.jsxs("button",{className:`cat-pill-btn ${h?"active":""}`,onClick:()=>m(k=>!k),title:"Mostrar apenas produtos no limite do alerta mínimo",style:{marginLeft:"auto"},children:[i.jsx(kn,{size:14})," Somente itens acabando (",Ee,")"]})]}),i.jsx("div",{className:"crud-table-wrapper",children:i.jsxs("table",{className:"crud-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Disponibilidade"}),i.jsx("th",{children:"Produto"}),i.jsx("th",{children:"Categoria"}),i.jsx("th",{children:"Preço"}),i.jsx("th",{children:"Estoque"}),i.jsx("th",{children:"Descrição"}),i.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),i.jsx("tbody",{children:ut.length===0?i.jsx("tr",{children:i.jsxs("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[i.jsx(kn,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",i.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):ut.map(k=>{const B=X.find(Q=>Q.id===k.categoriaId);return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(k.id),children:k.disponivel?i.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[i.jsx(Tc,{size:18})," Ativo"]}):i.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[i.jsx(Pc,{size:18})," Esgotado"]})})}),i.jsx("td",{children:i.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:k.nome})}),i.jsx("td",{children:i.jsxs("span",{className:"badge badge-pendente",children:[Mc(B==null?void 0:B.icone)," ",(B==null?void 0:B.nome)||k.categoriaId]})}),i.jsx("td",{children:i.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",k.preco.toFixed(2)]})}),i.jsx("td",{children:k.controlaEstoque?i.jsxs("div",{className:"estoque-celula",children:[i.jsx("button",{className:"estoque-mini-btn",title:"Abater 1 unidade",onClick:()=>he(k,{delta:-1}),children:i.jsx(up,{size:14})}),i.jsx("span",{className:`estoque-saldo ${(k.estoque||0)===0?"zerado":qe(k)?"acabando":"ok"}`,children:k.estoque||0}),i.jsx("button",{className:"estoque-mini-btn",title:"Adicionar 1 unidade",onClick:()=>he(k,{delta:1}),children:i.jsx(Zi,{size:14})}),i.jsxs("button",{className:"estoque-mini-btn",title:"Repor uma quantidade maior",onClick:()=>Fe(k),style:{width:"auto",padding:"0 0.5rem",gap:"0.25rem"},children:[i.jsx(eg,{size:14})," ",i.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700},children:"Repor"})]})]}):i.jsxs("span",{className:"estoque-ilimitado",children:[i.jsx(Yh,{size:15})," Ilimitado"]})}),i.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:k.descricao||"-"}),i.jsx("td",{children:i.jsxs("div",{className:"action-group",children:[i.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>_t(k),children:[i.jsx(tg,{size:14})," Editar"]}),i.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>_(k),children:[i.jsx(es,{size:14})," Excluir"]})]})})]},k.id)})})]})}),v&&i.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:i.jsxs("div",{className:"modal-card",onClick:k=>k.stopPropagation(),children:[i.jsxs("div",{className:"modal-title",children:[i.jsx(Vr,{size:20,color:"var(--primary)"}),i.jsx("span",{children:f?"Editar Produto":"Cadastrar Novo Produto"})]}),i.jsxs("form",{onSubmit:Jt,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nome do Produto *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:p,onChange:k=>j(k.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Categoria *"}),i.jsx("select",{className:"form-input",value:R,onChange:k=>P(k.target.value),required:!0,children:X.map(k=>i.jsx("option",{value:k.id,children:k.nome},k.id))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Preço em R$ *"}),i.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:O,onChange:k=>M(k.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),i.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:$,onChange:k=>w(k.target.value)})]}),i.jsxs("div",{className:"estoque-box",children:[i.jsxs("button",{type:"button",className:"estoque-switch",onClick:()=>V(k=>!k),children:[C?i.jsx(Tc,{size:22,color:"var(--status-pronto)"}):i.jsx(Pc,{size:22,color:"var(--app-ink-muted)"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Controlar estoque deste produto"}),i.jsx("small",{children:C?"O caixa não consegue vender depois que as unidades acabam.":"Desligado: venda ilimitada, sem contagem de unidades."})]})]}),C&&i.jsxs("div",{className:"estoque-campos",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Quantidade em estoque"}),i.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:se,onChange:k=>de(k.target.value)})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Alerta mínimo"}),i.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:Ke,onChange:k=>x(k.target.value)})]})]})]}),i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),i.jsxs("button",{type:"submit",className:"btn btn-primary",children:[i.jsx($e,{size:18})," Salvar Produto"]})]})]})]})}),b&&i.jsx("div",{className:"modal-backdrop",onClick:()=>T(!1),children:i.jsxs("div",{className:"modal-card",onClick:k=>k.stopPropagation(),children:[i.jsxs("div",{className:"modal-title",children:[i.jsx(bc,{size:20,color:"var(--status-preparo)"}),i.jsx("span",{children:"Nova Categoria do Cardápio"})]}),i.jsxs("form",{onSubmit:mr,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:H,onChange:k=>N(k.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),i.jsx("div",{className:"icone-selector",children:hp.map(k=>i.jsxs("button",{type:"button",className:`icone-opt ${A===k.id?"selected":""}`,onClick:()=>F(k.id),children:[k.component,i.jsx("span",{children:k.nome})]},k.id))})]}),i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>T(!1),children:"Cancelar"}),i.jsxs("button",{type:"submit",className:"btn btn-success",children:[i.jsx($e,{size:18})," Criar Categoria"]})]})]})]})})]})}function kg({pedidos:e,operador:t}){const[r,n]=z.useState(null),[s,o]=z.useState(null),a=z.useRef(!1),[l,c]=z.useState("hoje"),[u,y]=z.useState("todos"),[h,m]=z.useState(""),[v,g]=z.useState(""),[b,T]=z.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(ws,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),i.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const d=x=>{n(H=>H===x?null:x)},p=(x,H)=>{x.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${H}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(N=>N.json()).catch(N=>console.error("Erro ao quitar pagamento:",N))},j=(x,H)=>{x.stopPropagation(),!a.current&&(a.current=!0,o(H.id),fetch(`/api/orders/${H.id}/reimprimir`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operadorNome:t?t.nome:"Operador"})}).then(N=>N.json()).then(N=>{N&&N.error&&alert(N.error)}).catch(N=>{console.error("Erro ao reimprimir:",N),alert("Erro de conexão ao solicitar a reimpressão.")}).finally(()=>{a.current=!1,o(null)}))},R=(x,H=!1)=>i.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px",width:H?"100%":void 0},onClick:N=>j(N,x),disabled:s===x.id,title:`Reimprimir a comanda #${x.numero} (sai marcada como 2a via)`,children:[i.jsx(Wt,{size:14}),s===x.id?"Enviando...":"Reimprimir"]},`reimprimir-${x.id}`),P=x=>x.statusPagamento==="pago"?!1:x.statusPagamento==="pendente_pagamento"||x.formaPagamento==="pagar_depois",O=e.filter(x=>{if(h.trim()){const A=h.toLowerCase().trim(),F=`#${x.numero}`.toLowerCase(),X=(x.cliente||"").toLowerCase(),Y=(x.telefoneCliente||"").toLowerCase();if(!(F.includes(A)||X.includes(A)||Y.includes(A)))return!1}if(u==="pagos"&&P(x)||u==="fiado"&&!P(x)||u==="entregues"&&x.status!=="entregue"||u==="cancelados"&&x.status!=="cancelado"||u!=="cancelados"&&x.status==="cancelado")return!1;if(!x.criadoEm)return!0;const H=new Date(x.criadoEm),N=new Date;if(l==="hoje")return H.toDateString()===N.toDateString();if(l==="ontem"){const A=new Date;return A.setDate(N.getDate()-1),H.toDateString()===A.toDateString()}else if(l==="7dias"){const A=new Date;return A.setDate(N.getDate()-7),H>=A}else if(l==="custom"){if(v){const A=new Date(v);if(A.setHours(0,0,0,0),H<A)return!1}if(b){const A=new Date(b);if(A.setHours(23,59,59,999),H>A)return!1}}return!0}),M=O.filter(x=>x.status!=="cancelado"),$=M.filter(x=>!P(x)),w=M.filter(x=>P(x)),C=$.reduce((x,H)=>x+(Number(H.total)||0),0),V=w.reduce((x,H)=>x+(Number(H.total)||0),0),se=M.length,de=se>0?(C+V)/se:0,Ke=x=>{if(x.formaPagamento==="pagar_depois"||x.statusPagamento==="pendente_pagamento"){const H=x.dataCobranca?new Date(x.dataCobranca).toLocaleDateString():"Sem Data";return x.statusPagamento==="pago"?i.jsxs("span",{className:"badge badge-pronto",children:[i.jsx($e,{size:12})," Pagar Depois (Quitado)"]}):i.jsxs("span",{className:"badge badge-preparo",children:[i.jsx(js,{size:12})," Pagar Depois (",H,")"]})}return i.jsxs("span",{className:"badge badge-pendente",children:[i.jsx(Ni,{size:12})," ",x.formaPagamento?x.formaPagamento.toUpperCase():"PIX"]})};return i.jsxs("div",{className:"vendas-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"vendas-header",children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(Zo,{size:24,color:"var(--primary)"}),i.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),i.jsx("div",{className:"badge badge-pronto",children:i.jsxs("span",{children:[O.length," Registros Encontrados"]})})]}),i.jsxs("div",{className:"vendas-filtros-card",children:[i.jsxs("div",{className:"vendas-search-box",children:[i.jsx(ll,{size:18,color:"var(--primary)"}),i.jsx("input",{type:"text",className:"vendas-search-input",placeholder:"Buscar por comanda #, cliente ou WhatsApp...",value:h,onChange:x=>m(x.target.value)})]}),i.jsx("div",{className:"dropdown-filter-group",children:i.jsxs("select",{className:"dropdown-filter-select",value:l,onChange:x=>c(x.target.value),children:[i.jsx("option",{value:"hoje",children:"Período: Hoje"}),i.jsx("option",{value:"ontem",children:"Período: Ontem"}),i.jsx("option",{value:"7dias",children:"Período: Últimos 7 dias"}),i.jsx("option",{value:"todos",children:"Período: Todos os Pedidos"}),i.jsx("option",{value:"custom",children:"Período: Data Personalizada"})]})}),i.jsx("div",{className:"dropdown-filter-group",children:i.jsxs("select",{className:"dropdown-filter-select",value:u,onChange:x=>y(x.target.value),children:[i.jsx("option",{value:"todos",children:"Status: Todos os Pedidos"}),i.jsx("option",{value:"pagos",children:"Status: Quitados / Pagos"}),i.jsx("option",{value:"fiado",children:"Status: Pagar Depois (Fiado)"}),i.jsx("option",{value:"entregues",children:"Status: Entregues"}),i.jsx("option",{value:"cancelados",children:"Status: Cancelados"})]})})]}),l==="custom"&&i.jsxs("div",{className:"vendas-filtros-card",style:{background:"var(--app-surface-2)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[i.jsx(ea,{size:18,color:"var(--primary)"}),i.jsx("span",{style:{color:"var(--text-title)"},children:"Data Inicial:"}),i.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:v,onChange:x=>g(x.target.value)})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[i.jsx("span",{style:{color:"var(--text-title)"},children:"Data Final:"}),i.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:b,onChange:x=>T(x.target.value)})]})]}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:i.jsx(cp,{size:26})}),i.jsxs("div",{children:[i.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),i.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",C.toFixed(2)]})]})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:i.jsx(ea,{size:26})}),i.jsxs("div",{children:[i.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),i.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",V.toFixed(2)]})]})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:i.jsx(kt,{size:26})}),i.jsxs("div",{children:[i.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),i.jsxs("div",{className:"metric-value",children:[se," comanda(s)"]})]})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon-box",children:i.jsx(ag,{size:26})}),i.jsxs("div",{children:[i.jsx("div",{className:"metric-label",children:"Ticket Médio"}),i.jsxs("div",{className:"metric-value",children:["R$ ",de.toFixed(2)]})]})]})]}),i.jsx("div",{className:"vendas-table-wrapper",children:i.jsxs("table",{className:"vendas-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{width:"40px"}}),i.jsx("th",{children:"Comanda"}),i.jsx("th",{children:"Data / Horário"}),i.jsx("th",{children:"Cliente / Contato"}),i.jsx("th",{children:"Forma Pagamento"}),i.jsx("th",{children:"Valor Total"}),i.jsx("th",{children:"Status Pedido"}),i.jsx("th",{children:"Atendente / Cozinha"}),i.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),i.jsx("tbody",{children:O.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):O.map(x=>{const H=r===x.id,N=x.criadoEm?new Date(x.criadoEm).toLocaleString():"Recente";return i.jsxs(Hc.Fragment,{children:[i.jsxs("tr",{className:"row-exp",onClick:()=>d(x.id),children:[i.jsx("td",{style:{textAlign:"center"},children:H?i.jsx(ra,{size:16,color:"var(--primary)"}):i.jsx(ta,{size:16,color:"var(--app-ink-muted)"})}),i.jsx("td",{children:i.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",x.numero]})}),i.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:N}),i.jsxs("td",{children:[i.jsx("strong",{style:{color:"var(--primary)"},children:x.cliente}),x.telefoneCliente&&i.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[i.jsx(ia,{size:12}),i.jsx("span",{children:x.telefoneCliente})]})]}),i.jsx("td",{children:Ke(x)}),i.jsx("td",{children:i.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(x.total)||0).toFixed(2)]})}),i.jsx("td",{children:i.jsx("span",{className:`badge badge-${x.status==="pronto"?"pronto":x.status==="entregue"||x.status==="entrega_parcial"?"entregue":"preparo"}`,children:x.status==="entrega_parcial"?"PARCIAL":x.status.toUpperCase()})}),i.jsxs("td",{style:{fontSize:"0.82rem"},children:[i.jsxs("div",{children:["Caixa: ",i.jsx("strong",{children:x.criadoPor||"Caixa"})]}),x.preparadoPor&&i.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",x.preparadoPor]})]}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[P(x)?i.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:A=>p(A,x.id),children:[i.jsx($e,{size:14})," Quitar / Marcar Pago"]}):i.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(Gi,{size:15})," Quitado"]}),R(x)]})})]}),H&&i.jsx("tr",{children:i.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:i.jsxs("div",{className:"exp-details-box",children:[i.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[i.jsx(Ji,{size:16,color:"var(--primary)"}),i.jsxs("span",{children:["Itens Lançados na Comanda #",x.numero,":"]})]}),x.itens&&x.itens.length>0?i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:x.itens.map((A,F)=>i.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsxs("div",{children:[i.jsxs("strong",{style:{color:"var(--primary)"},children:[A.quantidade,"x"]})," ",A.nome,A.observacao&&i.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",A.observacao]})]}),i.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(A.preco*A.quantidade).toFixed(2)]})]},F))}):i.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},x.id)})})]})}),i.jsx("div",{className:"vendas-mobile-list",children:O.length===0?i.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):O.map(x=>{const H=r===x.id,N=x.criadoEm?new Date(x.criadoEm).toLocaleString():"Recente";return i.jsxs("div",{className:"venda-card-mobile",onClick:()=>d(x.id),children:[i.jsxs("div",{className:"venda-card-summary",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",x.numero]}),i.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:x.cliente})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(x.total)||0).toFixed(2)]}),H?i.jsx(ra,{size:16,color:"var(--primary)"}):i.jsx(ta,{size:16,color:"var(--app-ink-muted)"})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[i.jsx("div",{children:Ke(x)}),i.jsx("span",{className:`badge badge-${x.status==="pronto"?"pronto":x.status==="entregue"||x.status==="entrega_parcial"?"entregue":"preparo"}`,children:x.status==="entrega_parcial"?"PARCIAL":x.status.toUpperCase()})]}),H&&i.jsxs("div",{className:"venda-card-details",children:[i.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",i.jsx("strong",{children:N})]}),x.telefoneCliente&&i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[i.jsx(ia,{size:13}),i.jsxs("span",{children:["Contato / WhatsApp: ",i.jsx("strong",{children:x.telefoneCliente})]})]}),i.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[i.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),x.itens&&x.itens.length>0?i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:x.itens.map((A,F)=>i.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[i.jsxs("span",{children:[i.jsxs("strong",{children:[A.quantidade,"x"]})," ",A.nome," ",A.observacao?`(${A.observacao})`:""]}),i.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(A.preco*A.quantidade).toFixed(2)]})]},F))}):i.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),i.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[i.jsxs("span",{children:["Caixa: ",i.jsx("strong",{children:x.criadoPor||"Caixa"})]}),x.preparadoPor&&i.jsxs("span",{children:["Cozinha: ",i.jsx("strong",{children:x.preparadoPor})]})]}),i.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[P(x)?i.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:A=>p(A,x.id),children:[i.jsx($e,{size:14})," Quitar / Marcar Pago"]}):i.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"0.3rem"},children:[i.jsx(Gi,{size:15})," Pagamento Confirmado / Quitado"]}),R(x,!0)]})]})]},x.id)})})]})}function jg({operador:e}){const[t,r]=z.useState([]),[n,s]=z.useState(!1),[o,a]=z.useState(!1),[l,c]=z.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[u,y]=z.useState({}),[h,m]=z.useState(null),v=e&&e.role==="master",[g,b]=z.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[T,f]=z.useState(!1);z.useEffect(()=>{v&&(j(),d())},[v]);const d=()=>{fetch("/api/pix-config").then(C=>C.json()).then(C=>{C&&C.chavePix&&b(C)}).catch(C=>console.error("Erro ao carregar PIX config:",C))},p=C=>{C.preventDefault(),f(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(V=>V.json()).then(V=>{f(!1),V&&V.status==="success"?(m("Chave PIX atualizada com sucesso!"),setTimeout(()=>m(null),4e3)):alert(V.error||"Erro ao salvar chave PIX.")}).catch(()=>{f(!1),alert("Erro de conexão ao salvar chave PIX.")})},j=()=>{fetch("/api/users").then(C=>C.json()).then(C=>r(C)).catch(C=>console.error("Erro ao carregar usuários:",C))};if(!v)return i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(ws,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),i.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const R=C=>{y(V=>({...V,[C]:!V[C]}))},P=()=>{c({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),s(!0)},O=C=>{c({...C}),a(!0),s(!0)},M=C=>{if(C.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const V=o?`/api/users/${l.id}`:"/api/users";fetch(V,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(de=>de.json()).then(de=>{de&&de.status==="success"?(m(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),s(!1),j(),setTimeout(()=>m(null),4e3)):alert(de.error||"Erro ao salvar usuário.")}).catch(de=>alert("Erro de conexão com o servidor."))},$=(C,V)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${V}"?`)&&fetch(`/api/users/${C}`,{method:"DELETE"}).then(se=>se.json()).then(se=>{se&&se.status==="success"?(m(`Conta de "${V}" excluída com sucesso.`),j(),setTimeout(()=>m(null),4e3)):alert(se.error||"Erro ao excluir conta.")})},w=C=>{switch(C){case"master":return i.jsxs("span",{className:"badge badge-role-master",children:[i.jsx(Bh,{size:13})," Master (Admin)"]});case"caixa":return i.jsxs("span",{className:"badge badge-role-caixa",children:[i.jsx(kt,{size:13})," Caixa (Atendente)"]});case"cozinha":return i.jsxs("span",{className:"badge badge-role-cozinha",children:[i.jsx(Dn,{size:13})," Cozinha (KDS)"]});case"tv":return i.jsxs("span",{className:"badge badge-role-tv",children:[i.jsx(ts,{size:13})," Monitor TV"]});default:return i.jsx("span",{className:"badge badge-role-tv",children:C})}};return i.jsxs("div",{className:"usuarios-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"usuarios-header",children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(oa,{size:26,color:"var(--primary)"}),i.jsx("span",{children:"Gestão de Contas & Operadores"})]}),i.jsxs("button",{className:"btn btn-primary",onClick:P,children:[i.jsx(cg,{size:18})," Nova Conta"]})]}),h&&i.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[i.jsx(ks,{size:18}),i.jsx("span",{children:h})]}),i.jsx("div",{className:"usuarios-table-wrapper",children:i.jsxs("table",{className:"usuarios-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Nome Completo"}),i.jsx("th",{children:"Usuário de Login"}),i.jsx("th",{children:"Função / Permissão"}),i.jsx("th",{children:"Senha de Acesso"}),i.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),i.jsx("tbody",{children:t.map(C=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{style:{color:"var(--text-title)"},children:C.nome})}),i.jsx("td",{children:i.jsx("strong",{style:{color:"var(--primary)"},children:C.usuario})}),i.jsx("td",{children:w(C.role)}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[i.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:u[C.id]?C.senha:"••••••••"}),i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>R(C.id),title:"Revelar/Ocultar Senha",children:u[C.id]?i.jsx(Kh,{size:14}):i.jsx(Xh,{size:14})})]})}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[i.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>O(C),children:[i.jsx(og,{size:14})," Editar"]}),C.usuario!=="admin"&&i.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>$(C.id,C.nome),children:[i.jsx(es,{size:14})," Excluir"]})]})})]},C.id))})]})}),i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[i.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx(Gh,{size:20,color:"var(--primary)"}),i.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),i.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",i.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),i.jsxs("form",{onSubmit:p,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),i.jsxs("select",{className:"form-input",value:g.tipoChave,onChange:C=>b({...g,tipoChave:C.target.value}),children:[i.jsx("option",{value:"email",children:"E-mail"}),i.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),i.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),i.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Chave PIX *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:g.chavePix,onChange:C=>b({...g,chavePix:C.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:g.nomeBeneficiario,onChange:C=>b({...g,nomeBeneficiario:C.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Cidade *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:g.cidadeBeneficiario,onChange:C=>b({...g,cidadeBeneficiario:C.target.value}),required:!0})]}),i.jsx("div",{children:i.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:T,children:T?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-card",children:[i.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx(Ur,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),i.jsxs("form",{onSubmit:M,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:C=>c({...l,nome:C.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Usuário de Login *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:C=>c({...l,usuario:C.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:C=>c({...l,senha:C.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),i.jsxs("select",{className:"form-input",value:l.role,onChange:C=>c({...l,role:C.target.value}),children:[i.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),i.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),i.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),i.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),i.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[i.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>s(!1),children:"Cancelar"}),i.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function wg({logs:e,operador:t}){const[r,n]=z.useState(""),[s,o]=z.useState("todas"),[a,l]=z.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(ws,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),i.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const u=m=>{l(v=>v===m?null:m)},y=e.filter(m=>{const v=s==="todas"||m.acao===s,g=r.toLowerCase().trim(),b=!g||String(m.numeroPedido).includes(g)||m.cliente&&m.cliente.toLowerCase().includes(g)||m.usuario&&m.usuario.toLowerCase().includes(g)||m.descricao&&m.descricao.toLowerCase().includes(g);return v&&b}),h=m=>{switch(m){case"criacao":return i.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(Uh,{size:13})," Criação Caixa"]});case"preparo":return i.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(Dn,{size:13})," Em Preparo"]});case"pronto":return i.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(al,{size:13})," Pronto / Chamada TV"]});case"entregue":return i.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(ks,{size:13})," Entregue"]});default:return i.jsx("span",{className:"badge badge-entregue",children:m})}};return i.jsxs("div",{className:"logs-container",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"logs-topbar",children:[i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(na,{size:24,color:"var(--primary)"}),i.jsx("span",{children:"Logs de Auditoria"})]}),i.jsxs("div",{className:"search-box",children:[i.jsx(ll,{size:16,color:"var(--app-ink-muted)"}),i.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:m=>n(m.target.value)})]})]}),i.jsxs("div",{className:"logs-pills-bar",children:[i.jsxs("button",{className:`cat-pill-btn ${s==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),i.jsxs("button",{className:`cat-pill-btn ${s==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(m=>m.acao==="criacao").length,")"]}),i.jsxs("button",{className:`cat-pill-btn ${s==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(m=>m.acao==="preparo").length,")"]}),i.jsxs("button",{className:`cat-pill-btn ${s==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(m=>m.acao==="pronto").length,")"]}),i.jsxs("button",{className:`cat-pill-btn ${s==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(m=>m.acao==="entregue").length,")"]})]}),i.jsx("div",{className:"logs-table-wrapper",children:i.jsxs("table",{className:"logs-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Horário"}),i.jsx("th",{children:"Operador"}),i.jsx("th",{children:"Ação"}),i.jsx("th",{children:"Comanda / Cliente"}),i.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),i.jsx("tbody",{children:y.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):y.map(m=>{const v=new Date(m.timestamp),g=`${v.toLocaleDateString()} ${v.toLocaleTimeString()}`;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(js,{size:13}),i.jsx("span",{children:g})]})}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[i.jsx(Ur,{size:14,color:"var(--primary)"}),i.jsx("span",{children:m.usuario})]})}),i.jsx("td",{children:h(m.acao)}),i.jsxs("td",{children:[i.jsxs("strong",{style:{color:"var(--primary)"},children:["#",m.numeroPedido]}),i.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",m.cliente,")"]})]}),i.jsxs("td",{children:[i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:m.descricao}),m.itens&&Array.isArray(m.itens)&&m.itens.length>0&&i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:m.itens.map((b,T)=>i.jsxs("div",{className:"item-chip",children:[i.jsx(dp,{size:12,color:"var(--status-pronto)"}),i.jsxs("strong",{style:{color:"var(--primary)"},children:[b.quantidade,"x"]}),i.jsx("span",{children:b.nome}),i.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(b.preco*b.quantidade).toFixed(2),")"]}),b.observacao&&i.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",b.observacao,"]"]})]},T))})]})]},m.id)})})]})}),i.jsx("div",{className:"logs-mobile-list",children:y.length===0?i.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):y.map(m=>{const v=new Date(m.timestamp),g=v.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),b=a===m.id;return i.jsxs("div",{className:"log-card-mobile",onClick:()=>u(m.id),children:[i.jsxs("div",{className:"log-card-summary",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[i.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",m.numeroPedido]}),i.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:m.cliente})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h(m.acao),i.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:g}),b?i.jsx(ra,{size:16,color:"var(--app-ink-muted)"}):i.jsx(ta,{size:16,color:"var(--app-ink-muted)"})]})]}),b&&i.jsxs("div",{className:"log-card-details",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[i.jsx(Ur,{size:13,color:"var(--primary)"}),i.jsxs("span",{children:["Operador: ",i.jsx("strong",{children:m.usuario})]}),i.jsxs("span",{style:{marginLeft:"auto"},children:[v.toLocaleDateString()," ",v.toLocaleTimeString()]})]}),i.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:m.descricao}),m.itens&&Array.isArray(m.itens)&&m.itens.length>0&&i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:m.itens.map((T,f)=>i.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[i.jsxs("strong",{style:{color:"var(--primary)"},children:[T.quantidade,"x"]})," ",T.nome," (R$ ",(T.preco*T.quantidade).toFixed(2),")",T.observacao&&i.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",T.observacao,"]"]})]},f))})]})]},m.id)})})]})}const bg=[{id:"cp850",nome:"CP850 (Multilíngue) — padrão"},{id:"cp860",nome:"CP860 (Português)"},{id:"win1252",nome:"WPC1252 (Windows Latin-1)"},{id:"cp858",nome:"CP858 (Multilíngue + Euro)"},{id:"cp437",nome:"CP437 (EUA / padrão antigo)"}];function Sg({operador:e}){var P,O,M,$;const[t,r]=z.useState(null),[n,s]=z.useState([]),[o,a]=z.useState(!1),[l,c]=z.useState(!1),[u,y]=z.useState(null),[h,m]=z.useState({pendentes:0,historico:[]}),[v,g]=z.useState(null),b=e&&e.role==="master",T=()=>{fetch("/api/printer/fila").then(w=>w.json()).then(m).catch(()=>{})},f=()=>{a(!0),fetch("/api/printer/impressoras").then(w=>w.json()).then(w=>{if(w.disponivel===!1){g(w.mensagem||"Este servidor não alcança a impressora térmica."),s([]);return}w.impressoras?(g(null),s(w.impressoras)):y({tipo:"erro",texto:w.error||"Não foi possível listar as impressoras."})}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao listar as impressoras."})).finally(()=>a(!1))};if(z.useEffect(()=>{b&&(fetch("/api/printer-config").then(w=>w.json()).then(r).catch(()=>y({tipo:"erro",texto:"Erro ao carregar a configuração da impressora."})),f(),T())},[b]),!b)return i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(ws,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Impressora"}),i.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode configurar a impressão de comprovantes."})]});if(!t)return i.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:"Carregando configuração da impressora..."});const d=(w,C)=>r(V=>({...V,[w]:C})),p=(w,C)=>r(V=>({...V,vias:{...V.vias,[w]:C}})),j=()=>{c(!0),y(null),fetch("/api/printer-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(w=>w.json()).then(w=>{w.config?(r(w.config),y({tipo:"ok",texto:"Configuração salva. Já vale para o próximo pedido."})):y({tipo:"erro",texto:w.error||"Erro ao salvar."})}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao salvar."})).finally(()=>c(!1))},R=()=>{y(null),fetch("/api/printer/teste",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:t})}).then(w=>w.json()).then(w=>{w.status==="success"?y({tipo:"ok",texto:"Teste enviado para a impressora. Confira o papel: a régua mostra em quantas colunas a linha quebra."}):y({tipo:"erro",texto:w.error||"Falha ao enviar o teste."}),setTimeout(T,1500)}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao enviar o teste."}))};return i.jsxs("div",{className:"impressora-container",children:[i.jsx("style",{children:`
        .impressora-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 900px;
        }

        .impressora-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .impressora-card-titulo {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.7rem;
        }

        .impressora-linha {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        @media (max-width: 720px) {
          .impressora-linha { grid-template-columns: 1fr; }
        }

        .switch-linha {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.7rem 0.85rem;
          cursor: pointer;
          color: var(--app-ink);
          text-align: left;
          width: 100%;
        }

        .switch-linha.ativo {
          border-color: var(--status-pronto);
        }

        .switch-caixa {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 2px solid var(--app-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .switch-linha.ativo .switch-caixa {
          background: var(--status-pronto);
          border-color: var(--status-pronto);
          color: #fff;
        }

        .switch-linha strong { display: block; font-size: 0.9rem; color: var(--text-title); }
        .switch-linha small { display: block; font-size: 0.76rem; color: var(--app-ink-muted); margin-top: 2px; }

        .aviso-box {
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.88rem;
        }

        .aviso-plataforma {
          background: rgba(230, 134, 25, 0.12);
          border: 1px solid var(--status-preparo);
          border-radius: var(--radius-md);
          padding: 1rem 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .aviso-plataforma code {
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 0.82rem;
        }

        .aviso-ok { background: rgba(22, 163, 74, 0.14); border: 1px solid var(--status-pronto); color: var(--status-pronto); }
        .aviso-erro { background: rgba(250, 15, 0, 0.13); border: 1px solid var(--primary); color: var(--primary); }

        .job-linha {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          padding: 0.5rem 0.7rem;
          border-radius: var(--radius-sm);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          font-size: 0.82rem;
        }

        .job-ok { color: var(--status-pronto); font-weight: 700; }
        .job-falha { color: var(--primary); font-weight: 700; }
      `}),i.jsxs("div",{className:"view-title",style:{margin:0},children:[i.jsx(Wt,{size:26,color:"var(--primary)"}),i.jsx("span",{children:"Impressora Térmica"})]}),v&&i.jsxs("div",{className:"aviso-plataforma",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:800,color:"var(--status-preparo)"},children:[i.jsx(sa,{size:19}),i.jsx("span",{children:"Impressão indisponível neste servidor"})]}),i.jsx("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--app-ink)"},children:v}),i.jsxs("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:["A impressora térmica é ligada por USB, então quem imprime tem que ser o backend rodando ",i.jsx("strong",{children:"no próprio PC em que ela está conectada"}),". Um servidor na nuvem não alcança esse cabo."]}),i.jsxs("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:["No dia do evento, rode ",i.jsx("code",{children:"npm start"})," na pasta ",i.jsx("code",{children:"backend"})," desse PC e acesse o sistema pelo IP dele na rede Wi-Fi. Aí esta tela funciona normalmente."]}),i.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Todo o resto — pedidos, cozinha, TV, estoque — continua funcionando aqui."})]}),u&&i.jsxs("div",{className:`aviso-box ${u.tipo==="ok"?"aviso-ok":"aviso-erro"}`,children:[u.tipo==="ok"?i.jsx(ks,{size:18}):i.jsx(sa,{size:18}),i.jsx("span",{children:u.texto})]}),i.jsxs("div",{className:"impressora-card",children:[i.jsxs("div",{className:"impressora-card-titulo",children:[i.jsx(Wt,{size:18,color:"var(--primary)"})," Impressão automática"]}),i.jsxs("button",{className:`switch-linha ${t.habilitado?"ativo":""}`,onClick:()=>d("habilitado",!t.habilitado),children:[i.jsx("span",{className:"switch-caixa",children:t.habilitado&&i.jsx($e,{size:14})}),i.jsxs("span",{children:[i.jsx("strong",{children:"Imprimir o comprovante ao fechar o pedido"}),i.jsx("small",{children:t.habilitado?"Ligado: cada pedido novo sai impresso sem clique.":"Desligado: nenhum comprovante sai sozinho. A reimpressão manual continua funcionando."})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Impressora do Windows"}),i.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[i.jsxs("select",{className:"form-input",value:t.nomeImpressora||"",onChange:w=>d("nomeImpressora",w.target.value),style:{flex:1},children:[i.jsx("option",{value:"",children:"— Selecione a impressora —"}),n.map(w=>i.jsx("option",{value:w,children:w},w)),t.nomeImpressora&&!n.includes(t.nomeImpressora)&&i.jsxs("option",{value:t.nomeImpressora,children:[t.nomeImpressora," (não encontrada agora)"]})]}),i.jsxs("button",{className:"btn btn-secondary",onClick:f,disabled:o,title:"Atualizar a lista de impressoras instaladas",children:[i.jsx(Ec,{size:16})," ",o?"...":"Atualizar"]})]})]})]}),i.jsxs("div",{className:"impressora-card",children:[i.jsxs("div",{className:"impressora-card-titulo",children:[i.jsx(ig,{size:18,color:"var(--primary)"})," Formato da bobina"]}),i.jsxs("div",{className:"impressora-linha",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Largura"}),i.jsxs("select",{className:"form-input",value:t.larguraColunas,onChange:w=>d("larguraColunas",parseInt(w.target.value,10)),children:[i.jsx("option",{value:32,children:"32 colunas — bobina 58mm"}),i.jsx("option",{value:48,children:"48 colunas — bobina 80mm"}),i.jsx("option",{value:42,children:"42 colunas — 80mm fonte compacta"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tabela de caracteres (acentuação)"}),i.jsx("select",{className:"form-input",value:t.codePage,onChange:w=>d("codePage",w.target.value),children:bg.map(w=>i.jsx("option",{value:w.id,children:w.nome},w.id))})]})]}),i.jsxs("button",{className:`switch-linha ${t.cortarPapel?"ativo":""}`,onClick:()=>d("cortarPapel",!t.cortarPapel),children:[i.jsx("span",{className:"switch-caixa",children:t.cortarPapel&&i.jsx($e,{size:14})}),i.jsxs("span",{children:[i.jsx("strong",{children:"Cortar o papel ao final"}),i.jsx("small",{children:"Desligue apenas se a impressora não tiver guilhotina."})]})]}),i.jsxs("button",{className:`switch-linha ${t.semAcentos?"ativo":""}`,onClick:()=>d("semAcentos",!t.semAcentos),children:[i.jsx("span",{className:"switch-caixa",children:t.semAcentos&&i.jsx($e,{size:14})}),i.jsxs("span",{children:[i.jsx("strong",{children:"Remover acentos ao imprimir"}),i.jsx("small",{children:"Plano B: use se nenhuma tabela de caracteres sair correta no teste."})]})]})]}),i.jsxs("div",{className:"impressora-card",children:[i.jsxs("div",{className:"impressora-card-titulo",children:[i.jsx(Ji,{size:18,color:"var(--primary)"})," Vias impressas"]}),i.jsxs("button",{className:`switch-linha ${(P=t.vias)!=null&&P.cliente?"ativo":""}`,onClick:()=>{var w;return p("cliente",!((w=t.vias)!=null&&w.cliente))},children:[i.jsx("span",{className:"switch-caixa",children:((O=t.vias)==null?void 0:O.cliente)&&i.jsx($e,{size:14})}),i.jsxs("span",{children:[i.jsx("strong",{children:"Via do cliente"}),i.jsx("small",{children:"Comanda, itens, total e forma de pagamento."})]})]}),i.jsxs("button",{className:`switch-linha ${(M=t.vias)!=null&&M.cozinha?"ativo":""}`,onClick:()=>{var w;return p("cozinha",!((w=t.vias)!=null&&w.cozinha))},children:[i.jsx("span",{className:"switch-caixa",children:(($=t.vias)==null?void 0:$.cozinha)&&i.jsx($e,{size:14})}),i.jsxs("span",{children:[i.jsx("strong",{children:"Via da cozinha"}),i.jsx("small",{children:"Sem preços, itens em fonte grande e comanda gigante."})]})]}),i.jsxs("div",{className:"form-group",style:{maxWidth:"220px"},children:[i.jsx("label",{className:"form-label",children:"Cópias da via do cliente"}),i.jsx("input",{type:"number",min:"1",max:"5",className:"form-input",value:t.copiasCliente,onChange:w=>d("copiasCliente",parseInt(w.target.value,10)||1)})]})]}),i.jsxs("div",{className:"impressora-card",children:[i.jsxs("div",{className:"impressora-card-titulo",children:[i.jsx(lg,{size:18,color:"var(--primary)"})," Cabeçalho e rodapé"]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Cabeçalho"}),i.jsx("input",{type:"text",className:"form-input",value:t.cabecalho||"",onChange:w=>d("cabecalho",w.target.value),placeholder:"FESTA DO MORANGO"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Subtítulo"}),i.jsx("input",{type:"text",className:"form-input",value:t.subCabecalho||"",onChange:w=>d("subCabecalho",w.target.value),placeholder:"Desbravadores Apocalipse"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Rodapé"}),i.jsx("input",{type:"text",className:"form-input",value:t.rodape||"",onChange:w=>d("rodape",w.target.value),placeholder:"Aguarde ser chamado no balcao"})]})]}),i.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[i.jsxs("button",{className:"btn btn-primary",onClick:j,disabled:l,children:[i.jsx($e,{size:18})," ",l?"Salvando...":"Salvar configuração"]}),i.jsxs("button",{className:"btn btn-secondary",onClick:R,disabled:!!v,title:v?"Este servidor não alcança a impressora":"Imprime a régua de colunas e a amostra de acentuação",children:[i.jsx(Wt,{size:18})," Imprimir teste"]}),i.jsxs("button",{className:"btn btn-secondary",onClick:T,children:[i.jsx(Ec,{size:16})," Atualizar fila"]})]}),i.jsxs("div",{className:"impressora-card",children:[i.jsxs("div",{className:"impressora-card-titulo",children:[i.jsx(Ji,{size:18,color:"var(--primary)"})," Últimas impressões",h.pendentes>0&&i.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--status-preparo)",fontWeight:700},children:["(",h.pendentes," na fila)"]})]}),!h.historico||h.historico.length===0?i.jsx("div",{style:{color:"var(--app-ink-muted)",fontSize:"0.86rem"},children:"Nenhuma impressão registrada ainda nesta sessão do servidor."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",maxHeight:"320px",overflowY:"auto"},children:h.historico.map(w=>i.jsxs("div",{className:"job-linha",children:[i.jsxs("span",{children:[i.jsx("strong",{children:w.descricao}),i.jsxs("span",{style:{color:"var(--app-ink-muted)"},children:[" · ",new Date(w.quandoEm).toLocaleTimeString("pt-BR")]}),w.tentativas>1&&i.jsxs("span",{style:{color:"var(--status-preparo)"},children:[" · ",w.tentativas," tentativas"]}),!w.ok&&i.jsx("div",{style:{color:"var(--app-ink-muted)",marginTop:"2px"},children:w.erro})]}),i.jsx("span",{className:w.ok?"job-ok":"job-falha",children:w.ok?"OK":"FALHOU"})]},w.id))})]})]})}const Z=Ci(window.location.origin,{transports:["websocket","polling"]});function Cg(){const[e,t]=z.useState("caixa"),[r,n]=z.useState(!1),[s,o]=z.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");z.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),document.body.setAttribute("data-theme",s),localStorage.setItem("tema_lanchonete",s)},[s]);const a=()=>{o(_=>_==="escuro"?"claro":"escuro")},[l,c]=z.useState(()=>{try{const _=localStorage.getItem("operador_lanchonete");return _?JSON.parse(_):null}catch{return null}}),[u,y]=z.useState(""),[h,m]=z.useState(""),[v,g]=z.useState(null),[b,T]=z.useState(!1),[f,d]=z.useState([]),[p,j]=z.useState({categorias:[],produtos:[]}),[R,P]=z.useState([]),[O,M]=z.useState(null),[$,w]=z.useState(null),C=_=>_?Array.isArray(_)?{categorias:[],produtos:_}:{categorias:Array.isArray(_.categorias)?_.categorias:[],produtos:Array.isArray(_.produtos)?_.produtos:[]}:{categorias:[],produtos:[]};z.useEffect(()=>{fetch("/api/menu").then(_=>_.json()).then(_=>j(C(_))).catch(_=>console.error("Erro ao carregar cardápio via REST:",_)),fetch("/api/logs").then(_=>_.json()).then(_=>P(_)).catch(_=>console.error("Erro ao buscar logs:",_))},[]);const V=_=>{if(_.preventDefault(),g(null),!u.trim()||!h.trim()){g("Preencha usuário e senha.");return}T(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:h.trim()})}).then(D=>D.json()).then(D=>{if(T(!1),D&&D.status==="success"){const k=D.user;c(k),localStorage.setItem("operador_lanchonete",JSON.stringify(k)),k.role==="cozinha"?t("cozinha"):k.role==="tv"?t("chamada"):t("caixa")}else g(D.error||"Credenciais inválidas.")}).catch(D=>{T(!1),g("Erro de conexão com o servidor.")})},se=()=>{c(null),localStorage.removeItem("operador_lanchonete"),y(""),m(""),g(null)};z.useEffect(()=>(Z.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),Z.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),Z.on("pedidos_iniciais",_=>{d(Array.isArray(_)?_:[])}),Z.on("cardapio_inicial",_=>{j(C(_))}),Z.on("novo_pedido_criado",_=>{d(D=>[_,...D.filter(k=>k.id!==_.id)])}),Z.on("status_pedido_atualizado",_=>{d(D=>D.map(k=>k.id===_.id?_:k)),M(D=>D&&D.id===_.id?_:D)}),Z.on("pedido_chamado",_=>{M(_)}),Z.on("cardapio_atualizado",_=>{j(C(_))}),Z.on("estoque_atualizado",_=>{!Array.isArray(_)||_.length===0||j(D=>({...D,produtos:D.produtos.map(k=>{const B=_.find(Q=>Q.produtoId===k.id);return B?{...k,controlaEstoque:B.controlaEstoque,estoque:B.estoque,estoqueMinimo:B.estoqueMinimo,reservado:B.reservado,disponivelEstoque:B.disponivel}:k})}))}),Z.on("novo_log_auditoria",_=>{P(D=>[_,...D.filter(k=>k.id!==_.id)])}),Z.on("impressao_falhou",_=>{w(_)}),Z.on("impressao_status",_=>{w(D=>D&&D.pedidoId===_.pedidoId?null:D)}),()=>{Z.off("connect"),Z.off("disconnect"),Z.off("pedidos_iniciais"),Z.off("cardapio_inicial"),Z.off("novo_pedido_criado"),Z.off("status_pedido_atualizado"),Z.off("pedido_chamado"),Z.off("cardapio_atualizado"),Z.off("estoque_atualizado"),Z.off("novo_log_auditoria"),Z.off("impressao_falhou"),Z.off("impressao_status")}),[]);const de=(_,D)=>{Z.emit("criar_pedido",{..._,criadoPor:l?`${l.nome}`:"Caixa"},D)},Ke=(_,D)=>{Z.emit("mudar_status_pedido",{id:_,status:D,preparadoPor:l?`${l.nome}`:"Cozinha"})},x=(_,D,k)=>{d(B=>B.map(Q=>{if(Q.id!==_)return Q;const Ae=(Q.itens||[]).map((q,G)=>{if(G!==D)return q;const te=k!==void 0?k:!q.entregue;return{...q,entregue:te}}),bs=Ae.reduce((q,G)=>q+(G.quantidade||1),0),Xr=Ae.filter(q=>q.entregue).reduce((q,G)=>q+(G.quantidade||1),0);let hr=Q.status;Xr>=bs?hr="entregue":Xr>0?hr="entrega_parcial":(Q.status==="entregue"||Q.status==="entrega_parcial")&&(hr="em_preparo");const S={...Q,itens:Ae,status:hr};return M(q=>q&&q.id===_?S:q),S})),Z.emit("alternar_item_entregue",{orderId:_,itemIndex:D,entregue:k,operadorNome:l?`${l.nome}`:"Atendente"}),fetch(`/api/orders/${_}/itens/${D}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:k,operadorNome:l?`${l.nome}`:"Atendente"})}).then(B=>B.ok?B.json():null).then(B=>{B&&B.order&&d(Q=>Q.map(Ae=>Ae.id===B.order.id?B.order:Ae))}).catch(B=>console.error("Erro ao alternar item:",B))},H=(_,D,k)=>{Z.emit("reservar_item",{produtoId:_,quantidade:D||1},k)},N=(_,D,k)=>{Z.emit("liberar_item",{produtoId:_,quantidade:D||1},k)},A=_=>{Z.emit("liberar_carrinho",{},_)},F=(_,D)=>fetch(`/api/menu/produto/${_}/estoque`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({...D,operadorNome:l?l.nome:"Gerente"})}).then(k=>k.json()).catch(k=>(console.error("Erro ao ajustar estoque:",k),{error:"Erro de conexão ao ajustar o estoque."})),X=_=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar produto:",D))},Y=_=>{fetch(`/api/menu/produto/${_}`,{method:"DELETE"}).then(D=>D.json()).catch(D=>console.error("Erro ao excluir produto:",D))},qe=_=>{fetch(`/api/menu/produto/${_}/disponivel`,{method:"PATCH"}).then(D=>D.json()).catch(D=>console.error("Erro ao alterar disponibilidade:",D))},Ee=_=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(D=>D.json()).catch(D=>console.error("Erro ao salvar categoria:",D))},ut=_=>fetch(`/api/menu/categoria/${_}`,{method:"DELETE"}).then(D=>D.json());if(!l)return i.jsxs("div",{className:"login-gate-screen",children:[i.jsx("style",{children:`
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
        `}),i.jsxs("div",{className:"login-gate-card",children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{className:"login-brand",children:i.jsxs("div",{children:[i.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),i.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),i.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar Tema",children:s==="escuro"?i.jsx(_c,{size:16,color:"var(--status-preparo)"}):i.jsx(Cc,{size:16,color:"var(--primary)"})})]}),v&&i.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[i.jsx(sa,{size:18}),i.jsx("span",{children:v})]}),i.jsxs("form",{onSubmit:V,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Usuário *"}),i.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:_=>y(_.target.value),required:!0,autoFocus:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Senha *"}),i.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:h,onChange:_=>m(_.target.value),required:!0})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:b,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[b?"Autenticando...":"Entrar no Sistema"," ",i.jsx(lp,{size:18})]})]})]})]});const he=l.role==="master"||l.role==="caixa",Fe=l.role==="master",_t=l.role==="master",fr=l.role==="master",Jt=l.role==="master"||l.role==="caixa",mr=l.role==="master"||l.role==="caixa";return i.jsxs("div",{className:"app-container",children:[i.jsxs("header",{className:"app-header",children:[i.jsx("div",{className:"brand-logo",children:i.jsxs("div",{children:[i.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),i.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),i.jsxs("nav",{className:"nav-tabs",children:[he&&i.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[i.jsx(kt,{size:18})," Caixa"]}),i.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[i.jsx(Dn,{size:18})," Cozinha (KDS)"]}),i.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[i.jsx(ts,{size:18})," Chamada TV"]}),Jt&&i.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[i.jsx(Zo,{size:18})," Vendas"]}),mr&&i.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[i.jsx(na,{size:18})," Logs"]}),Fe&&i.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[i.jsx(Vr,{size:18})," Cardápio"]}),fr&&i.jsxs("button",{className:`nav-btn ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[i.jsx(Wt,{size:18})," Impressora"]}),_t&&i.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[i.jsx(oa,{size:18})," Contas"]})]}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("button",{className:"user-badge-btn",onClick:se,title:`Operador: ${l.nome} (${l.role.toUpperCase()}) - Clique para sair`,children:[i.jsx(Ur,{size:15,style:{flexShrink:0}}),i.jsx("span",{className:"user-badge-name",children:l.nome}),i.jsx(Jh,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),i.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar entre Tema Claro e Escuro",children:s==="escuro"?i.jsxs(i.Fragment,{children:[i.jsx(_c,{size:16,color:"var(--status-preparo)"}),i.jsx("span",{className:"theme-label",children:"Claro"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Cc,{size:16,color:"var(--blue-link)"}),i.jsx("span",{className:"theme-label",children:"Escuro"})]})}),i.jsxs("div",{className:"socket-status",children:[i.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?i.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(fg,{size:14})," Online"]}):i.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[i.jsx(pg,{size:14})," Conectando..."]})]})]})]}),$&&i.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.13)",border:"1px solid var(--primary)",borderRadius:"var(--radius-md)",padding:"0.85rem 1rem",margin:"0 0 1rem 0",display:"flex",alignItems:"center",gap:"0.7rem"},children:[i.jsx(Wt,{size:20,color:"var(--primary)",style:{flexShrink:0}}),i.jsxs("div",{style:{flex:1},children:[i.jsxs("div",{style:{fontWeight:800,color:"var(--primary)",fontSize:"0.92rem"},children:["O comprovante ",$.numero?`da comanda #${$.numero}`:""," não foi impresso"]}),i.jsxs("div",{style:{fontSize:"0.84rem",color:"var(--app-ink)",marginTop:"2px"},children:[$.erro," O pedido foi registrado normalmente — se precisar, use ",i.jsx("strong",{children:"Reimprimir"})," em Vendas."]})]}),i.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.5rem",minHeight:"32px",flexShrink:0},onClick:()=>w(null),title:"Fechar aviso",children:i.jsx(aa,{size:16})})]}),i.jsxs("main",{className:"main-content",children:[e==="caixa"&&(he?i.jsx(hg,{menu:p,operador:l,onEnviarPedido:de,onReservarItem:H,onLiberarItem:N,onLiberarCarrinho:A}):i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(Sc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),i.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",l.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&i.jsx(gg,{pedidos:f,operador:l,onMudarStatus:Ke,onAlternarItemEntregue:x}),e==="chamada"&&i.jsx(yg,{pedidos:f,ultimoPedidoChamado:O,onMudarStatus:Ke,onAlternarItemEntregue:x}),e==="vendas"&&i.jsx(kg,{pedidos:f,operador:l}),e==="logs"&&i.jsx(wg,{logs:R,operador:l}),e==="cardapio"&&(Fe?i.jsx(xg,{menu:p,onSalvarProduto:X,onExcluirProduto:Y,onToggleDisponivel:qe,onSalvarCategoria:Ee,onExcluirCategoria:ut,onAjustarEstoque:F}):i.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[i.jsx(Sc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),i.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),i.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="impressora"&&i.jsx(Sg,{operador:l}),e==="usuarios"&&i.jsx(jg,{operador:l})]}),i.jsx("nav",{className:"mobile-bottom-nav",children:i.jsxs("div",{className:"mobile-nav-items",children:[he&&i.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[i.jsx(kt,{size:20}),i.jsx("span",{children:"Caixa"})]}),i.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[i.jsx(Dn,{size:20}),i.jsx("span",{children:"Cozinha"})]}),i.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[i.jsx(ts,{size:20}),i.jsx("span",{children:"TV Balcão"})]}),Jt&&i.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[i.jsx(Zo,{size:20}),i.jsx("span",{children:"Vendas"})]}),mr&&i.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[i.jsx(na,{size:20}),i.jsx("span",{children:"Logs"})]}),Fe&&i.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[i.jsx(Vr,{size:20}),i.jsx("span",{children:"Cardápio"})]}),fr&&i.jsxs("button",{className:`mobile-nav-item ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[i.jsx(Wt,{size:20}),i.jsx("span",{children:"Impressora"})]}),_t&&i.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[i.jsx(oa,{size:20}),i.jsx("span",{children:"Contas"})]})]})})]})}eo.createRoot(document.getElementById("root")).render(i.jsx(Hc.StrictMode,{children:i.jsx(Cg,{})}));
