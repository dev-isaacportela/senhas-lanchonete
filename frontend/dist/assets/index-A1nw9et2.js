(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ac={exports:{}},es={},Rc={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In=Symbol.for("react.element"),gp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Sp=Symbol.for("react.memo"),Cp=Symbol.for("react.lazy"),ol=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=ol&&e[ol]||e["@@iterator"],typeof e=="function"?e:null)}var Mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oc=Object.assign,Lc={};function Ur(e,t,r){this.props=e,this.context=t,this.refs=Lc,this.updater=r||Mc}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=Ur.prototype;function sa(e,t,r){this.props=e,this.context=t,this.refs=Lc,this.updater=r||Mc}var oa=sa.prototype=new Ic;oa.constructor=sa;Oc(oa,Ur.prototype);oa.isPureReactComponent=!0;var al=Array.isArray,Dc=Object.prototype.hasOwnProperty,aa={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Dc.call(t,n)&&!Fc.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:In,type:e,key:o,ref:a,props:i,_owner:aa.current}}function Ep(e,t){return{$$typeof:In,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===In}function zp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ll=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zp(""+e.key):t.toString(36)}function ai(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case In:case gp:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+bs(a,0):n,al(i)?(r="",e!=null&&(r=e.replace(ll,"$&/")+"/"),ai(i,t,r,"",function(u){return u})):i!=null&&(la(i)&&(i=Ep(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ll,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",al(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+bs(o,l);a+=ai(o,t,r,c,i)}else if(c=Np(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+bs(o,l++),a+=ai(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $n(e,t,r){if(e==null)return e;var n=[],i=0;return ai(e,n,"","",function(o){return t.call(r,o,i++)}),n}function _p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},li={transition:null},Pp={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:li,ReactCurrentOwner:aa};function Bc(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:$n,forEach:function(e,t,r){$n(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return $n(e,function(){t++}),t},toArray:function(e){return $n(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Ur;W.Fragment=vp;W.Profiler=xp;W.PureComponent=sa;W.StrictMode=yp;W.Suspense=bp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;W.act=Bc;W.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Oc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Dc.call(t,c)&&!Fc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:In,type:e.type,key:i,ref:o,props:n,_owner:a}};W.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kp,_context:e},e.Consumer=e};W.createElement=qc;W.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:wp,render:e}};W.isValidElement=la;W.lazy=function(e){return{$$typeof:Cp,_payload:{_status:-1,_result:e},_init:_p}};W.memo=function(e,t){return{$$typeof:Sp,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};W.unstable_act=Bc;W.useCallback=function(e,t){return Te.current.useCallback(e,t)};W.useContext=function(e){return Te.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};W.useEffect=function(e,t){return Te.current.useEffect(e,t)};W.useId=function(){return Te.current.useId()};W.useImperativeHandle=function(e,t,r){return Te.current.useImperativeHandle(e,t,r)};W.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Te.current.useMemo(e,t)};W.useReducer=function(e,t,r){return Te.current.useReducer(e,t,r)};W.useRef=function(e){return Te.current.useRef(e)};W.useState=function(e){return Te.current.useState(e)};W.useSyncExternalStore=function(e,t,r){return Te.current.useSyncExternalStore(e,t,r)};W.useTransition=function(){return Te.current.useTransition()};W.version="18.3.1";Rc.exports=W;var P=Rc.exports;const $c=mp(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=P,Ap=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Op=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Mp.call(t,n)&&!Lp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Ap,type:e,key:o,ref:a,props:i,_owner:Op.current}}es.Fragment=Rp;es.jsx=Vc;es.jsxs=Vc;Ac.exports=es;var s=Ac.exports,Js={},Uc={exports:{}},Ue={},Hc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var F=C.length;C.push(M);e:for(;0<F;){var G=F-1>>>1,J=C[G];if(0<i(J,M))C[G]=M,C[F]=J,F=G;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var M=C[0],F=C.pop();if(F!==M){C[0]=F;e:for(var G=0,J=C.length,De=J>>>1;G<De;){var ze=2*(G+1)-1,tt=C[ze],ve=ze+1,Qe=C[ve];if(0>i(tt,F))ve<J&&0>i(Qe,tt)?(C[G]=Qe,C[ve]=F,G=ve):(C[G]=tt,C[ze]=F,G=ze);else if(ve<J&&0>i(Qe,F))C[G]=Qe,C[ve]=F,G=ve;else break e}}return M}function i(C,M){var F=C.sortIndex-M.sortIndex;return F!==0?F:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],v=1,m=null,h=3,y=!1,g=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=C)n(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=r(u)}}function j(C){if(w=!1,f(C),!g)if(r(c)!==null)g=!0,b(T);else{var M=r(u);M!==null&&U(j,M.startTime-C)}}function T(C,M){g=!1,w&&(w=!1,p(x),x=-1),y=!0;var F=h;try{for(f(M),m=r(c);m!==null&&(!(m.expirationTime>M)||C&&!A());){var G=m.callback;if(typeof G=="function"){m.callback=null,h=m.priorityLevel;var J=G(m.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?m.callback=J:m===r(c)&&n(c),f(M)}else n(c);m=r(c)}if(m!==null)var De=!0;else{var ze=r(u);ze!==null&&U(j,ze.startTime-M),De=!1}return De}finally{m=null,h=F,y=!1}}var z=!1,R=null,x=-1,B=5,D=-1;function A(){return!(e.unstable_now()-D<B)}function Y(){if(R!==null){var C=e.unstable_now();D=C;var M=!0;try{M=R(!0,C)}finally{M?ae():(z=!1,R=null)}}else z=!1}var ae;if(typeof d=="function")ae=function(){d(Y)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,We=Z.port2;Z.port1.onmessage=Y,ae=function(){We.postMessage(null)}}else ae=function(){N(Y,0)};function b(C){R=C,z||(z=!0,ae())}function U(C,M){x=N(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,b(T))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return C()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=h;h=C;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function(C,M,F){var G=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?G+F:G):F=G,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=F+J,C={id:v++,callback:M,priorityLevel:C,startTime:F,expirationTime:J,sortIndex:-1},F>G?(C.sortIndex=F,t(u,C),r(c)===null&&C===r(u)&&(w?(p(x),x=-1):w=!0,U(j,F-G))):(C.sortIndex=J,t(c,C),g||y||(g=!0,b(T))),C},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(C){var M=h;return function(){var F=h;h=M;try{return C.apply(this,arguments)}finally{h=F}}}})(Wc);Hc.exports=Wc;var Ip=Hc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=P,Ve=Ip;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qc=new Set,xn={};function ur(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(xn[e]=t,e=0;e<t.length;e++)Qc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=Object.prototype.hasOwnProperty,Fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cl={},ul={};function qp(e){return Zs.call(ul,e)?!0:Zs.call(cl,e)?!1:Fp.test(e)?ul[e]=!0:(cl[e]=!0,!1)}function Bp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,t,r,n){if(t===null||typeof t>"u"||Bp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,ua);we[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,ua);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,ua);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,r,n){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($p(t,r,i,n)&&(r=null),n||i===null?qp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var zt=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vn=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Yc=Symbol.for("react.offscreen"),dl=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Ss;function nn(e){if(Ss===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ss=t&&t[1]||""}return`
`+Ss+e}var Cs=!1;function Ns(e,t){if(!e||Cs)return"";Cs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Cs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?nn(e):""}function Vp(e){switch(e.tag){case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 2:case 15:return e=Ns(e.type,!1),e;case 11:return e=Ns(e.type.render,!1),e;case 1:return e=Ns(e.type,!0),e;default:return""}}function no(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case eo:return"Profiler";case pa:return"StrictMode";case to:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:no(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return no(e(t))}catch{}}return null}function Up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return no(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Gc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Un(e){e._valueTracker||(e._valueTracker=Hp(e))}function Jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Gc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,t){var r=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function pl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zc(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function so(e,t){Zc(e,t);var r=Qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,r):t.hasOwnProperty("defaultValue")&&oo(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function oo(e,t,r){(t!=="number"||Ci(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var sn=Array.isArray;function _r(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Qt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(sn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Qt(r)}}function eu(e,t){var r=Qt(t.value),n=Qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ml(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hn,ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cn[t]=cn[e]})});function nu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||cn.hasOwnProperty(e)&&cn[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=nu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Qp=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if(Qp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fo=null,Pr=null,Tr=null;function gl(e){if(e=qn(e)){if(typeof fo!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ss(t),fo(e.stateNode,e.type,t))}}function su(e){Pr?Tr?Tr.push(e):Tr=[e]:Pr=e}function ou(){if(Pr){var e=Pr,t=Tr;if(Tr=Pr=null,gl(e),t)for(e=0;e<t.length;e++)gl(t[e])}}function au(e,t){return e(t)}function lu(){}var Es=!1;function cu(e,t,r){if(Es)return e(t,r);Es=!0;try{return au(e,t,r)}finally{Es=!1,(Pr!==null||Tr!==null)&&(lu(),ou())}}function jn(e,t){var r=e.stateNode;if(r===null)return null;var n=ss(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var ho=!1;if(St)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ho=!1}function Kp(e,t,r,n,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(v){this.onError(v)}}var un=!1,Ni=null,Ei=!1,mo=null,Xp={onError:function(e){un=!0,Ni=e}};function Yp(e,t,r,n,i,o,a,l,c){un=!1,Ni=null,Kp.apply(Xp,arguments)}function Gp(e,t,r,n,i,o,a,l,c){if(Yp.apply(this,arguments),un){if(un){var u=Ni;un=!1,Ni=null}else throw Error(E(198));Ei||(Ei=!0,mo=u)}}function dr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vl(e){if(dr(e)!==e)throw Error(E(188))}function Jp(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return vl(i),e;if(o===n)return vl(i),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function du(e){return e=Jp(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var fu=Ve.unstable_scheduleCallback,yl=Ve.unstable_cancelCallback,Zp=Ve.unstable_shouldYield,ef=Ve.unstable_requestPaint,pe=Ve.unstable_now,tf=Ve.unstable_getCurrentPriorityLevel,ga=Ve.unstable_ImmediatePriority,hu=Ve.unstable_UserBlockingPriority,zi=Ve.unstable_NormalPriority,rf=Ve.unstable_LowPriority,mu=Ve.unstable_IdlePriority,ts=null,ht=null;function nf(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:af,sf=Math.log,of=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(sf(e)/of|0)|0}var Wn=64,Qn=4194304;function on(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=on(l):(o&=a,o!==0&&(n=on(o)))}else a=r&~i,a!==0?n=on(a):o!==0&&(n=on(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-lt(t),i=1<<r,n|=e[r],t&=~i;return n}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-lt(o),l=1<<a,c=i[a];c===-1?(!(l&r)||l&n)&&(i[a]=lf(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=Wn;return Wn<<=1,!(Wn&4194240)&&(Wn=64),e}function zs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Dn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=r}function uf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-lt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function va(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-lt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var re=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,ya,xu,ku,ju,vo=!1,Kn=[],It=null,Dt=null,Ft=null,wn=new Map,bn=new Map,Rt=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Yr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qn(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pf(e,t,r,n,i){switch(t){case"focusin":return It=Yr(It,e,t,r,n,i),!0;case"dragenter":return Dt=Yr(Dt,e,t,r,n,i),!0;case"mouseover":return Ft=Yr(Ft,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return wn.set(o,Yr(wn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,bn.set(o,Yr(bn.get(o)||null,e,t,r,n,i)),!0}return!1}function wu(e){var t=er(e.target);if(t!==null){var r=dr(t);if(r!==null){if(t=r.tag,t===13){if(t=uu(r),t!==null){e.blockedOn=t,ju(e.priority,function(){xu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);po=n,r.target.dispatchEvent(n),po=null}else return t=qn(r),t!==null&&ya(t),e.blockedOn=r,!1;t.shift()}return!0}function kl(e,t,r){ci(e)&&r.delete(t)}function ff(){vo=!1,It!==null&&ci(It)&&(It=null),Dt!==null&&ci(Dt)&&(Dt=null),Ft!==null&&ci(Ft)&&(Ft=null),wn.forEach(kl),bn.forEach(kl)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,ff)))}function Sn(e){function t(i){return Gr(i,e)}if(0<Kn.length){Gr(Kn[0],e);for(var r=1;r<Kn.length;r++){var n=Kn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(It!==null&&Gr(It,e),Dt!==null&&Gr(Dt,e),Ft!==null&&Gr(Ft,e),wn.forEach(t),bn.forEach(t),r=0;r<Rt.length;r++)n=Rt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Rt.length&&(r=Rt[0],r.blockedOn===null);)wu(r),r.blockedOn===null&&Rt.shift()}var Ar=zt.ReactCurrentBatchConfig,Pi=!0;function hf(e,t,r,n){var i=re,o=Ar.transition;Ar.transition=null;try{re=1,xa(e,t,r,n)}finally{re=i,Ar.transition=o}}function mf(e,t,r,n){var i=re,o=Ar.transition;Ar.transition=null;try{re=4,xa(e,t,r,n)}finally{re=i,Ar.transition=o}}function xa(e,t,r,n){if(Pi){var i=yo(e,t,r,n);if(i===null)Ds(e,t,n,Ti,r),xl(e,n);else if(pf(i,e,t,r,n))n.stopPropagation();else if(xl(e,n),t&4&&-1<df.indexOf(e)){for(;i!==null;){var o=qn(i);if(o!==null&&yu(o),o=yo(e,t,r,n),o===null&&Ds(e,t,n,Ti,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ds(e,t,n,null,r)}}var Ti=null;function yo(e,t,r,n){if(Ti=null,e=ma(n),e=er(e),e!==null)if(t=dr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=uu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case ga:return 1;case hu:return 4;case zi:case rf:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Ot=null,ka=null,ui=null;function Su(){if(ui)return ui;var e,t=ka,r=t.length,n,i="value"in Ot?Ot.value:Ot.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return ui=i.slice(e,1<n?1-n:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function jl(){return!1}function He(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xn:jl,this.isPropagationStopped=jl,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=He(Hr),Fn=ue({},Hr,{view:0,detail:0}),gf=He(Fn),_s,Ps,Jr,rs=ue({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(_s=e.screenX-Jr.screenX,Ps=e.screenY-Jr.screenY):Ps=_s=0,Jr=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),wl=He(rs),vf=ue({},rs,{dataTransfer:0}),yf=He(vf),xf=ue({},Fn,{relatedTarget:0}),Ts=He(xf),kf=ue({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=He(kf),wf=ue({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bf=He(wf),Sf=ue({},Hr,{data:0}),bl=He(Sf),Cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ef[e])?!!t[e]:!1}function wa(){return zf}var _f=ue({},Fn,{key:function(e){if(e.key){var t=Cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pf=He(_f),Tf=ue({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sl=He(Tf),Af=ue({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Rf=He(Af),Mf=ue({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Of=He(Mf),Lf=ue({},rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=He(Lf),Df=[9,13,27,32],ba=St&&"CompositionEvent"in window,dn=null;St&&"documentMode"in document&&(dn=document.documentMode);var Ff=St&&"TextEvent"in window&&!dn,Cu=St&&(!ba||dn&&8<dn&&11>=dn),Cl=" ",Nl=!1;function Nu(e,t){switch(e){case"keyup":return Df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function qf(e,t){switch(e){case"compositionend":return Eu(t);case"keypress":return t.which!==32?null:(Nl=!0,Cl);case"textInput":return e=t.data,e===Cl&&Nl?null:e;default:return null}}function Bf(e,t){if(xr)return e==="compositionend"||!ba&&Nu(e,t)?(e=Su(),ui=ka=Ot=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function El(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$f[e.type]:t==="textarea"}function zu(e,t,r,n){su(n),t=Ai(t,"onChange"),0<t.length&&(r=new ja("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var pn=null,Cn=null;function Vf(e){Fu(e,0)}function ns(e){var t=wr(e);if(Jc(t))return e}function Uf(e,t){if(e==="change")return t}var _u=!1;if(St){var As;if(St){var Rs="oninput"in document;if(!Rs){var zl=document.createElement("div");zl.setAttribute("oninput","return;"),Rs=typeof zl.oninput=="function"}As=Rs}else As=!1;_u=As&&(!document.documentMode||9<document.documentMode)}function _l(){pn&&(pn.detachEvent("onpropertychange",Pu),Cn=pn=null)}function Pu(e){if(e.propertyName==="value"&&ns(Cn)){var t=[];zu(t,Cn,e,ma(e)),cu(Vf,t)}}function Hf(e,t,r){e==="focusin"?(_l(),pn=t,Cn=r,pn.attachEvent("onpropertychange",Pu)):e==="focusout"&&_l()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ns(Cn)}function Qf(e,t){if(e==="click")return ns(t)}function Kf(e,t){if(e==="input"||e==="change")return ns(t)}function Xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Xf;function Nn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Zs.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Pl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,t){var r=Pl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Pl(r)}}function Tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Au(){for(var e=window,t=Ci();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ci(e.document)}return t}function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=Au(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Tu(r.ownerDocument.documentElement,r)){if(n!==null&&Sa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Tl(r,o);var a=Tl(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=St&&"documentMode"in document&&11>=document.documentMode,kr=null,xo=null,fn=null,ko=!1;function Al(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ko||kr==null||kr!==Ci(n)||(n=kr,"selectionStart"in n&&Sa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fn&&Nn(fn,n)||(fn=n,n=Ai(xo,"onSelect"),0<n.length&&(t=new ja("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=kr)))}function Yn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jr={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionend:Yn("Transition","TransitionEnd")},Ms={},Ru={};St&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function is(e){if(Ms[e])return Ms[e];if(!jr[e])return e;var t=jr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ru)return Ms[e]=t[r];return e}var Mu=is("animationend"),Ou=is("animationiteration"),Lu=is("animationstart"),Iu=is("transitionend"),Du=new Map,Rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Du.set(e,t),ur(t,[e])}for(var Os=0;Os<Rl.length;Os++){var Ls=Rl[Os],Jf=Ls.toLowerCase(),Zf=Ls[0].toUpperCase()+Ls.slice(1);Xt(Jf,"on"+Zf)}Xt(Mu,"onAnimationEnd");Xt(Ou,"onAnimationIteration");Xt(Lu,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Iu,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var an="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(an));function Ml(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Gp(n,t,void 0,e),e.currentTarget=null}function Fu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Ml(i,l,u),o=c}else for(a=0;a<n.length;a++){if(l=n[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Ml(i,l,u),o=c}}}if(Ei)throw e=mo,Ei=!1,mo=null,e}function ie(e,t){var r=t[Co];r===void 0&&(r=t[Co]=new Set);var n=e+"__bubble";r.has(n)||(qu(t,e,2,!1),r.add(n))}function Is(e,t,r){var n=0;t&&(n|=4),qu(r,e,n,t)}var Gn="_reactListening"+Math.random().toString(36).slice(2);function En(e){if(!e[Gn]){e[Gn]=!0,Qc.forEach(function(r){r!=="selectionchange"&&(eh.has(r)||Is(r,!1,e),Is(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gn]||(t[Gn]=!0,Is("selectionchange",!1,t))}}function qu(e,t,r,n){switch(bu(t)){case 1:var i=hf;break;case 4:i=mf;break;default:i=xa}r=i.bind(null,t,r,e),i=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ds(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=er(l),a===null)return;if(c=a.tag,c===5||c===6){n=o=a;continue e}l=l.parentNode}}n=n.return}cu(function(){var u=o,v=ma(r),m=[];e:{var h=Du.get(e);if(h!==void 0){var y=ja,g=e;switch(e){case"keypress":if(di(r)===0)break e;case"keydown":case"keyup":y=Pf;break;case"focusin":g="focus",y=Ts;break;case"focusout":g="blur",y=Ts;break;case"beforeblur":case"afterblur":y=Ts;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Rf;break;case Mu:case Ou:case Lu:y=jf;break;case Iu:y=Of;break;case"scroll":y=gf;break;case"wheel":y=If;break;case"copy":case"cut":case"paste":y=bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sl}var w=(t&4)!==0,N=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,f;d!==null;){f=d;var j=f.stateNode;if(f.tag===5&&j!==null&&(f=j,p!==null&&(j=jn(d,p),j!=null&&w.push(zn(d,j,f)))),N)break;d=d.return}0<w.length&&(h=new y(h,g,null,r,v),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==po&&(g=r.relatedTarget||r.fromElement)&&(er(g)||g[Ct]))break e;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=r.relatedTarget||r.toElement,y=u,g=g?er(g):null,g!==null&&(N=dr(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(w=wl,j="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Sl,j="onPointerLeave",p="onPointerEnter",d="pointer"),N=y==null?h:wr(y),f=g==null?h:wr(g),h=new w(j,d+"leave",y,r,v),h.target=N,h.relatedTarget=f,j=null,er(v)===u&&(w=new w(p,d+"enter",g,r,v),w.target=f,w.relatedTarget=N,j=w),N=j,y&&g)t:{for(w=y,p=g,d=0,f=w;f;f=mr(f))d++;for(f=0,j=p;j;j=mr(j))f++;for(;0<d-f;)w=mr(w),d--;for(;0<f-d;)p=mr(p),f--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=mr(w),p=mr(p)}w=null}else w=null;y!==null&&Ol(m,h,y,w,!1),g!==null&&N!==null&&Ol(m,N,g,w,!0)}}e:{if(h=u?wr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var T=Uf;else if(El(h))if(_u)T=Kf;else{T=Wf;var z=Hf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Qf);if(T&&(T=T(e,u))){zu(m,T,r,v);break e}z&&z(e,h,u),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&oo(h,"number",h.value)}switch(z=u?wr(u):window,e){case"focusin":(El(z)||z.contentEditable==="true")&&(kr=z,xo=u,fn=null);break;case"focusout":fn=xo=kr=null;break;case"mousedown":ko=!0;break;case"contextmenu":case"mouseup":case"dragend":ko=!1,Al(m,r,v);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Al(m,r,v)}var R;if(ba)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else xr?Nu(e,r)&&(x="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(Cu&&r.locale!=="ko"&&(xr||x!=="onCompositionStart"?x==="onCompositionEnd"&&xr&&(R=Su()):(Ot=v,ka="value"in Ot?Ot.value:Ot.textContent,xr=!0)),z=Ai(u,x),0<z.length&&(x=new bl(x,e,null,r,v),m.push({event:x,listeners:z}),R?x.data=R:(R=Eu(r),R!==null&&(x.data=R)))),(R=Ff?qf(e,r):Bf(e,r))&&(u=Ai(u,"onBeforeInput"),0<u.length&&(v=new bl("onBeforeInput","beforeinput",null,r,v),m.push({event:v,listeners:u}),v.data=R))}Fu(m,t)})}function zn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ai(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jn(e,r),o!=null&&n.unshift(zn(e,o,i)),o=jn(e,t),o!=null&&n.push(zn(e,o,i))),e=e.return}return n}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ol(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=jn(r,o),c!=null&&a.unshift(zn(r,c,l))):i||(c=jn(r,o),c!=null&&a.push(zn(r,c,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var th=/\r\n?/g,rh=/\u0000|\uFFFD/g;function Ll(e){return(typeof e=="string"?e:""+e).replace(th,`
`).replace(rh,"")}function Jn(e,t,r){if(t=Ll(t),Ll(e)!==t&&r)throw Error(E(425))}function Ri(){}var jo=null,wo=null;function bo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,Il=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Il<"u"?function(e){return Il.resolve(null).then(e).catch(sh)}:So;function sh(e){setTimeout(function(){throw e})}function Fs(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Sn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Sn(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Wr,_n="__reactProps$"+Wr,Ct="__reactContainer$"+Wr,Co="__reactEvents$"+Wr,oh="__reactListeners$"+Wr,ah="__reactHandles$"+Wr;function er(e){var t=e[ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ct]||r[ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Dl(e);e!==null;){if(r=e[ft])return r;e=Dl(e)}return t}e=r,r=e.parentNode}return null}function qn(e){return e=e[ft]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ss(e){return e[_n]||null}var No=[],br=-1;function Yt(e){return{current:e}}function se(e){0>br||(e.current=No[br],No[br]=null,br--)}function ne(e,t){br++,No[br]=e.current,e.current=t}var Kt={},Ee=Yt(Kt),Oe=Yt(!1),sr=Kt;function Lr(e,t){var r=e.type.contextTypes;if(!r)return Kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Mi(){se(Oe),se(Ee)}function Fl(e,t,r){if(Ee.current!==Kt)throw Error(E(168));ne(Ee,t),ne(Oe,r)}function Bu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,Up(e)||"Unknown",i));return ue({},r,n)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,sr=Ee.current,ne(Ee,e),ne(Oe,Oe.current),!0}function ql(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Bu(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,se(Oe),se(Ee),ne(Ee,e)):se(Oe),ne(Oe,r)}var xt=null,os=!1,qs=!1;function $u(e){xt===null?xt=[e]:xt.push(e)}function lh(e){os=!0,$u(e)}function Gt(){if(!qs&&xt!==null){qs=!0;var e=0,t=re;try{var r=xt;for(re=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}xt=null,os=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),fu(ga,Gt),i}finally{re=t,qs=!1}}return null}var Sr=[],Cr=0,Li=null,Ii=0,Ke=[],Xe=0,or=null,jt=1,wt="";function Jt(e,t){Sr[Cr++]=Ii,Sr[Cr++]=Li,Li=e,Ii=t}function Vu(e,t,r){Ke[Xe++]=jt,Ke[Xe++]=wt,Ke[Xe++]=or,or=e;var n=jt;e=wt;var i=32-lt(n)-1;n&=~(1<<i),r+=1;var o=32-lt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,jt=1<<32-lt(t)+i|r<<i|n,wt=o+e}else jt=1<<o|r<<i|n,wt=e}function Ca(e){e.return!==null&&(Jt(e,1),Vu(e,1,0))}function Na(e){for(;e===Li;)Li=Sr[--Cr],Sr[Cr]=null,Ii=Sr[--Cr],Sr[Cr]=null;for(;e===or;)or=Ke[--Xe],Ke[Xe]=null,wt=Ke[--Xe],Ke[Xe]=null,jt=Ke[--Xe],Ke[Xe]=null}var $e=null,Be=null,oe=!1,at=null;function Uu(e,t){var r=Ge(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Bl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Be=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:jt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ge(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$e=e,Be=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(oe){var t=Be;if(t){var r=t;if(!Bl(e,t)){if(Eo(e))throw Error(E(418));t=qt(r.nextSibling);var n=$e;t&&Bl(e,t)?Uu(n,r):(e.flags=e.flags&-4097|2,oe=!1,$e=e)}}else{if(Eo(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,$e=e}}}function $l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Zn(e){if(e!==$e)return!1;if(!oe)return $l(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bo(e.type,e.memoizedProps)),t&&(t=Be)){if(Eo(e))throw Hu(),Error(E(418));for(;t;)Uu(e,t),t=qt(t.nextSibling)}if($l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Be=qt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=$e?qt(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=Be;e;)e=qt(e.nextSibling)}function Ir(){Be=$e=null,oe=!1}function Ea(e){at===null?at=[e]:at.push(e)}var ch=zt.ReactCurrentBatchConfig;function Zr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vl(e){var t=e._init;return t(e._payload)}function Wu(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,j){return d===null||d.tag!==6?(d=Qs(f,p.mode,j),d.return=p,d):(d=i(d,f),d.return=p,d)}function c(p,d,f,j){var T=f.type;return T===yr?v(p,d,f.props.children,j,f.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Tt&&Vl(T)===d.type)?(j=i(d,f.props),j.ref=Zr(p,d,f),j.return=p,j):(j=yi(f.type,f.key,f.props,null,p.mode,j),j.ref=Zr(p,d,f),j.return=p,j)}function u(p,d,f,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ks(f,p.mode,j),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function v(p,d,f,j,T){return d===null||d.tag!==7?(d=ir(f,p.mode,j,T),d.return=p,d):(d=i(d,f),d.return=p,d)}function m(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Qs(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vn:return f=yi(d.type,d.key,d.props,null,p.mode,f),f.ref=Zr(p,null,d),f.return=p,f;case vr:return d=Ks(d,p.mode,f),d.return=p,d;case Tt:var j=d._init;return m(p,j(d._payload),f)}if(sn(d)||Kr(d))return d=ir(d,p.mode,f,null),d.return=p,d;ei(p,d)}return null}function h(p,d,f,j){var T=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:l(p,d,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vn:return f.key===T?c(p,d,f,j):null;case vr:return f.key===T?u(p,d,f,j):null;case Tt:return T=f._init,h(p,d,T(f._payload),j)}if(sn(f)||Kr(f))return T!==null?null:v(p,d,f,j,null);ei(p,f)}return null}function y(p,d,f,j,T){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(f)||null,l(d,p,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Vn:return p=p.get(j.key===null?f:j.key)||null,c(d,p,j,T);case vr:return p=p.get(j.key===null?f:j.key)||null,u(d,p,j,T);case Tt:var z=j._init;return y(p,d,f,z(j._payload),T)}if(sn(j)||Kr(j))return p=p.get(f)||null,v(d,p,j,T,null);ei(d,j)}return null}function g(p,d,f,j){for(var T=null,z=null,R=d,x=d=0,B=null;R!==null&&x<f.length;x++){R.index>x?(B=R,R=null):B=R.sibling;var D=h(p,R,f[x],j);if(D===null){R===null&&(R=B);break}e&&R&&D.alternate===null&&t(p,R),d=o(D,d,x),z===null?T=D:z.sibling=D,z=D,R=B}if(x===f.length)return r(p,R),oe&&Jt(p,x),T;if(R===null){for(;x<f.length;x++)R=m(p,f[x],j),R!==null&&(d=o(R,d,x),z===null?T=R:z.sibling=R,z=R);return oe&&Jt(p,x),T}for(R=n(p,R);x<f.length;x++)B=y(R,p,x,f[x],j),B!==null&&(e&&B.alternate!==null&&R.delete(B.key===null?x:B.key),d=o(B,d,x),z===null?T=B:z.sibling=B,z=B);return e&&R.forEach(function(A){return t(p,A)}),oe&&Jt(p,x),T}function w(p,d,f,j){var T=Kr(f);if(typeof T!="function")throw Error(E(150));if(f=T.call(f),f==null)throw Error(E(151));for(var z=T=null,R=d,x=d=0,B=null,D=f.next();R!==null&&!D.done;x++,D=f.next()){R.index>x?(B=R,R=null):B=R.sibling;var A=h(p,R,D.value,j);if(A===null){R===null&&(R=B);break}e&&R&&A.alternate===null&&t(p,R),d=o(A,d,x),z===null?T=A:z.sibling=A,z=A,R=B}if(D.done)return r(p,R),oe&&Jt(p,x),T;if(R===null){for(;!D.done;x++,D=f.next())D=m(p,D.value,j),D!==null&&(d=o(D,d,x),z===null?T=D:z.sibling=D,z=D);return oe&&Jt(p,x),T}for(R=n(p,R);!D.done;x++,D=f.next())D=y(R,p,x,D.value,j),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?x:D.key),d=o(D,d,x),z===null?T=D:z.sibling=D,z=D);return e&&R.forEach(function(Y){return t(p,Y)}),oe&&Jt(p,x),T}function N(p,d,f,j){if(typeof f=="object"&&f!==null&&f.type===yr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Vn:e:{for(var T=f.key,z=d;z!==null;){if(z.key===T){if(T=f.type,T===yr){if(z.tag===7){r(p,z.sibling),d=i(z,f.props.children),d.return=p,p=d;break e}}else if(z.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Tt&&Vl(T)===z.type){r(p,z.sibling),d=i(z,f.props),d.ref=Zr(p,z,f),d.return=p,p=d;break e}r(p,z);break}else t(p,z);z=z.sibling}f.type===yr?(d=ir(f.props.children,p.mode,j,f.key),d.return=p,p=d):(j=yi(f.type,f.key,f.props,null,p.mode,j),j.ref=Zr(p,d,f),j.return=p,p=j)}return a(p);case vr:e:{for(z=f.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){r(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Ks(f,p.mode,j),d.return=p,p=d}return a(p);case Tt:return z=f._init,N(p,d,z(f._payload),j)}if(sn(f))return g(p,d,f,j);if(Kr(f))return w(p,d,f,j);ei(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,f),d.return=p,p=d):(r(p,d),d=Qs(f,p.mode,j),d.return=p,p=d),a(p)):r(p,d)}return N}var Dr=Wu(!0),Qu=Wu(!1),Di=Yt(null),Fi=null,Nr=null,za=null;function _a(){za=Nr=Fi=null}function Pa(e){var t=Di.current;se(Di),e._currentValue=t}function _o(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Rr(e,t){Fi=e,za=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Fi===null)throw Error(E(308));Nr=e,Fi.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var tr=null;function Ta(e){tr===null?tr=[e]:tr.push(e)}function Ku(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ta(t)):(r.next=i.next,i.next=r),t.interleaved=r,Nt(e,n)}function Nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var At=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Nt(e,r)}return i=n.interleaved,i===null?(t.next=t,Ta(n)):(t.next=i.next,i.next=t),n.interleaved=t,Nt(e,r)}function pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,va(e,r)}}function Ul(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function qi(e,t,r,n){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var v=e.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==a&&(l===null?v.firstBaseUpdate=u:l.next=u,v.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;a=0,v=u=c=null,l=o;do{var h=l.lane,y=l.eventTime;if((n&h)===h){v!==null&&(v=v.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,w=l;switch(h=t,y=r,w.tag){case 1:if(g=w.payload,typeof g=="function"){m=g.call(y,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,h=typeof g=="function"?g.call(y,m,h):g,h==null)break e;m=ue({},m,h);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(u=v=y,c=m):v=v.next=y,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(v===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);lr|=a,e.lanes=a,e.memoizedState=m}}function Hl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var Bn={},mt=Yt(Bn),Pn=Yt(Bn),Tn=Yt(Bn);function rr(e){if(e===Bn)throw Error(E(174));return e}function Ra(e,t){switch(ne(Tn,t),ne(Pn,e),ne(mt,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}se(mt),ne(mt,t)}function Fr(){se(mt),se(Pn),se(Tn)}function Yu(e){rr(Tn.current);var t=rr(mt.current),r=lo(t,e.type);t!==r&&(ne(Pn,e),ne(mt,r))}function Ma(e){Pn.current===e&&(se(mt),se(Pn))}var le=Yt(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bs=[];function Oa(){for(var e=0;e<Bs.length;e++)Bs[e]._workInProgressVersionPrimary=null;Bs.length=0}var fi=zt.ReactCurrentDispatcher,$s=zt.ReactCurrentBatchConfig,ar=0,ce=null,me=null,ye=null,$i=!1,hn=!1,An=0,uh=0;function Se(){throw Error(E(321))}function La(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ut(e[r],t[r]))return!1;return!0}function Ia(e,t,r,n,i,o){if(ar=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?hh:mh,e=r(n,i),hn){o=0;do{if(hn=!1,An=0,25<=o)throw Error(E(301));o+=1,ye=me=null,t.updateQueue=null,fi.current=gh,e=r(n,i)}while(hn)}if(fi.current=Vi,t=me!==null&&me.next!==null,ar=0,ye=me=ce=null,$i=!1,t)throw Error(E(300));return e}function Da(){var e=An!==0;return An=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ce.memoizedState=ye=e:ye=ye.next=e,ye}function et(){if(me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ce.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(E(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ce.memoizedState=ye=e:ye=ye.next=e}return ye}function Rn(e,t){return typeof t=="function"?t(e):t}function Vs(e){var t=et(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=me,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,c=null,u=o;do{var v=u.lane;if((ar&v)===v)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:v,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,a=n):c=c.next=m,ce.lanes|=v,lr|=v}u=u.next}while(u!==null&&u!==o);c===null?a=n:c.next=l,ut(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,lr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Us(e){var t=et(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ut(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Gu(){}function Ju(e,t){var r=ce,n=et(),i=t(),o=!ut(n.memoizedState,i);if(o&&(n.memoizedState=i,Me=!0),n=n.queue,Fa(td.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,Mn(9,ed.bind(null,r,n,i,t),void 0,null),xe===null)throw Error(E(349));ar&30||Zu(r,t,i)}return i}function Zu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ed(e,t,r,n){t.value=r,t.getSnapshot=n,rd(t)&&nd(e)}function td(e,t,r){return r(function(){rd(t)&&nd(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ut(e,r)}catch{return!0}}function nd(e){var t=Nt(e,1);t!==null&&ct(t,e,1,-1)}function Wl(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t.queue=e,e=e.dispatch=fh.bind(null,ce,e),[t.memoizedState,e]}function Mn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function id(){return et().memoizedState}function hi(e,t,r,n){var i=pt();ce.flags|=e,i.memoizedState=Mn(1|t,r,void 0,n===void 0?null:n)}function as(e,t,r,n){var i=et();n=n===void 0?null:n;var o=void 0;if(me!==null){var a=me.memoizedState;if(o=a.destroy,n!==null&&La(n,a.deps)){i.memoizedState=Mn(t,r,o,n);return}}ce.flags|=e,i.memoizedState=Mn(1|t,r,o,n)}function Ql(e,t){return hi(8390656,8,e,t)}function Fa(e,t){return as(2048,8,e,t)}function sd(e,t){return as(4,2,e,t)}function od(e,t){return as(4,4,e,t)}function ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,r){return r=r!=null?r.concat([e]):null,as(4,4,ad.bind(null,t,e),r)}function qa(){}function cd(e,t){var r=et();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&La(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ud(e,t){var r=et();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&La(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function dd(e,t,r){return ar&21?(ut(r,t)||(r=gu(),ce.lanes|=r,lr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function dh(e,t){var r=re;re=r!==0&&4>r?r:4,e(!0);var n=$s.transition;$s.transition={};try{e(!1),t()}finally{re=r,$s.transition=n}}function pd(){return et().memoizedState}function ph(e,t,r){var n=Vt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},fd(e))hd(t,r);else if(r=Ku(e,t,r,n),r!==null){var i=Pe();ct(r,e,n,i),md(r,t,n)}}function fh(e,t,r){var n=Vt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(fd(e))hd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,ut(l,a)){var c=t.interleaved;c===null?(i.next=i,Ta(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Ku(e,t,i,n),r!==null&&(i=Pe(),ct(r,e,n,i),md(r,t,n))}}function fd(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function hd(e,t){hn=$i=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function md(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,va(e,r)}}var Vi={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},hh={readContext:Ze,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ql,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,hi(4194308,4,ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var r=pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=pt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ph.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Wl,useDebugValue:qa,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Wl(!1),t=e[0];return e=dh.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ce,i=pt();if(oe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),xe===null)throw Error(E(349));ar&30||Zu(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Ql(td.bind(null,n,o,e),[e]),n.flags|=2048,Mn(9,ed.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=pt(),t=xe.identifierPrefix;if(oe){var r=wt,n=jt;r=(n&~(1<<32-lt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=An++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=uh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mh={readContext:Ze,useCallback:cd,useContext:Ze,useEffect:Fa,useImperativeHandle:ld,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ud,useReducer:Vs,useRef:id,useState:function(){return Vs(Rn)},useDebugValue:qa,useDeferredValue:function(e){var t=et();return dd(t,me.memoizedState,e)},useTransition:function(){var e=Vs(Rn)[0],t=et().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Ju,useId:pd,unstable_isNewReconciler:!1},gh={readContext:Ze,useCallback:cd,useContext:Ze,useEffect:Fa,useImperativeHandle:ld,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ud,useReducer:Us,useRef:id,useState:function(){return Us(Rn)},useDebugValue:qa,useDeferredValue:function(e){var t=et();return me===null?t.memoizedState=e:dd(t,me.memoizedState,e)},useTransition:function(){var e=Us(Rn)[0],t=et().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Ju,useId:pd,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Po(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ls={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Pe(),i=Vt(e),o=bt(n,i);o.payload=t,r!=null&&(o.callback=r),t=Bt(e,o,i),t!==null&&(ct(t,e,i,n),pi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Pe(),i=Vt(e),o=bt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Bt(e,o,i),t!==null&&(ct(t,e,i,n),pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Pe(),n=Vt(e),i=bt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,n),t!==null&&(ct(t,e,n,r),pi(t,e,n))}};function Kl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Nn(r,n)||!Nn(i,o):!0}function gd(e,t,r){var n=!1,i=Kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(i=Le(t)?sr:Ee.current,n=t.contextTypes,o=(n=n!=null)?Lr(e,i):Kt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function To(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Aa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ze(o):(o=Le(t)?sr:Ee.current,i.context=Lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Po(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ls.enqueueReplaceState(i,i.state,null),qi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var r="",n=t;do r+=Vp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ao(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var vh=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,r){r=bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Hi||(Hi=!0,$o=n),Ao(e,t)},r}function yd(e,t,r){r=bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Ao(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ao(e,t),typeof n!="function"&&($t===null?$t=new Set([this]):$t.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Yl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new vh;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Th.bind(null,e,t,r),t.then(e,e))}function Gl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=bt(-1,1),t.tag=2,Bt(r,t,1))),r.lanes|=1),e)}var yh=zt.ReactCurrentOwner,Me=!1;function _e(e,t,r,n){t.child=e===null?Qu(t,null,r,n):Dr(t,e.child,r,n)}function Zl(e,t,r,n,i){r=r.render;var o=t.ref;return Rr(t,i),n=Ia(e,t,r,n,o,i),r=Da(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(oe&&r&&Ca(t),t.flags|=1,_e(e,t,n,i),t.child)}function ec(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Ka(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,xd(e,t,o,n,i)):(e=yi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Nn,r(a,n)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Ut(o,n),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Nn(o,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Et(e,t,i)}return Ro(e,t,r,n,i)}function kd(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(zr,Fe),Fe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(zr,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ne(zr,Fe),Fe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,ne(zr,Fe),Fe|=n;return _e(e,t,i,r),t.child}function jd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ro(e,t,r,n,i){var o=Le(r)?sr:Ee.current;return o=Lr(t,o),Rr(t,i),r=Ia(e,t,r,n,o,i),n=Da(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(oe&&n&&Ca(t),t.flags|=1,_e(e,t,r,i),t.child)}function tc(e,t,r,n,i){if(Le(r)){var o=!0;Oi(t)}else o=!1;if(Rr(t,i),t.stateNode===null)mi(e,t),gd(t,r,n),To(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Le(r)?sr:Ee.current,u=Lr(t,u));var v=r.getDerivedStateFromProps,m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Xl(t,a,n,u),At=!1;var h=t.memoizedState;a.state=h,qi(t,n,a,i),c=t.memoizedState,l!==n||h!==c||Oe.current||At?(typeof v=="function"&&(Po(t,r,v,n),c=t.memoizedState),(l=At||Kl(t,r,l,n,h,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Xu(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:it(t.type,l),a.props=u,m=t.pendingProps,h=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ze(c):(c=Le(r)?sr:Ee.current,c=Lr(t,c));var y=r.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==c)&&Xl(t,a,n,c),At=!1,h=t.memoizedState,a.state=h,qi(t,n,a,i);var g=t.memoizedState;l!==m||h!==g||Oe.current||At?(typeof y=="function"&&(Po(t,r,y,n),g=t.memoizedState),(u=At||Kl(t,r,u,n,h,g,c)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),a.props=n,a.state=g,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Mo(e,t,r,n,o,i)}function Mo(e,t,r,n,i,o){jd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&ql(t,r,!1),Et(e,t,o);n=t.stateNode,yh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Dr(t,e.child,null,o),t.child=Dr(t,null,l,o)):_e(e,t,l,o),t.memoizedState=n.state,i&&ql(t,r,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fl(e,t.context,!1),Ra(e,t.containerInfo)}function rc(e,t,r,n,i){return Ir(),Ea(i),t.flags|=256,_e(e,t,r,n),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,t,r){var n=t.pendingProps,i=le.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(le,i&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ds(a,n,0,null),e=ir(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lo(r),t.memoizedState=Oo,e):Ba(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xh(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Ut(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=ir(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Lo(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Oo,n}return o=e.child,e=o.sibling,n=Ut(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ba(e,t){return t=ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,r,n){return n!==null&&Ea(n),Dr(t,e.child,null,r),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xh(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Hs(Error(E(422))),ti(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=ds({mode:"visible",children:n.children},i,0,null),o=ir(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Dr(t,e.child,null,a),t.child.memoizedState=Lo(a),t.memoizedState=Oo,o);if(!(t.mode&1))return ti(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(E(419)),n=Hs(o,n,void 0),ti(e,t,a,n)}if(l=(a&e.childLanes)!==0,Me||l){if(n=xe,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),ct(n,e,i,-1))}return Qa(),n=Hs(Error(E(421))),ti(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ah.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=qt(i.nextSibling),$e=t,oe=!0,at=null,e!==null&&(Ke[Xe++]=jt,Ke[Xe++]=wt,Ke[Xe++]=or,jt=e.id,wt=e.overflow,or=t),t=Ba(t,n.children),t.flags|=4096,t)}function nc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),_o(e.return,t,r)}function Ws(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Sd(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(_e(e,t,n.children,r),n=le.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,r,t);else if(e.tag===19)nc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ne(le,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Bi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ws(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ws(t,!0,r,null,o);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function kh(e,t,r){switch(t.tag){case 3:wd(t),Ir();break;case 5:Yu(t);break;case 1:Le(t.type)&&Oi(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ne(Di,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):r&t.child.childLanes?bd(e,t,r):(ne(le,le.current&1),e=Et(e,t,r),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Sd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(le,le.current),n)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,r)}return Et(e,t,r)}var Cd,Io,Nd,Ed;Cd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Io=function(){};Nd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,rr(mt.current);var o=null;switch(r){case"input":i=io(e,i),n=io(e,n),o=[];break;case"select":i=ue({},i,{value:void 0}),n=ue({},n,{value:void 0}),o=[];break;case"textarea":i=ao(e,i),n=ao(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ri)}co(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ed=function(e,t,r,n){r!==n&&(t.flags|=4)};function en(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function jh(e,t,r){var n=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Le(t.type)&&Mi(),Ce(t),null;case 3:return n=t.stateNode,Fr(),se(Oe),se(Ee),Oa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Ho(at),at=null))),Io(e,t),Ce(t),null;case 5:Ma(t);var i=rr(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)Nd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return Ce(t),null}if(e=rr(mt.current),Zn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ft]=t,n[_n]=o,e=(t.mode&1)!==0,r){case"dialog":ie("cancel",n),ie("close",n);break;case"iframe":case"object":case"embed":ie("load",n);break;case"video":case"audio":for(i=0;i<an.length;i++)ie(an[i],n);break;case"source":ie("error",n);break;case"img":case"image":case"link":ie("error",n),ie("load",n);break;case"details":ie("toggle",n);break;case"input":pl(n,o),ie("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ie("invalid",n);break;case"textarea":hl(n,o),ie("invalid",n)}co(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,l,e),i=["children",""+l]):xn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",n)}switch(r){case"input":Un(n),fl(n,o,!0);break;case"textarea":Un(n),ml(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ri)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[ft]=t,e[_n]=n,Cd(e,t,!1,!1),t.stateNode=e;e:{switch(a=uo(r,n),r){case"dialog":ie("cancel",e),ie("close",e),i=n;break;case"iframe":case"object":case"embed":ie("load",e),i=n;break;case"video":case"audio":for(i=0;i<an.length;i++)ie(an[i],e);i=n;break;case"source":ie("error",e),i=n;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=n;break;case"details":ie("toggle",e),i=n;break;case"input":pl(e,n),i=io(e,n),ie("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ue({},n,{value:void 0}),ie("invalid",e);break;case"textarea":hl(e,n),i=ao(e,n),ie("invalid",e);break;default:i=n}co(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?iu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ru(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&kn(e,c):typeof c=="number"&&kn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ie("scroll",e):c!=null&&da(e,o,c,a))}switch(r){case"input":Un(e),fl(e,n,!1);break;case"textarea":Un(e),ml(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Qt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?_r(e,!!n.multiple,o,!1):n.defaultValue!=null&&_r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=rr(Tn.current),rr(mt.current),Zn(t)){if(n=t.stateNode,r=t.memoizedProps,n[ft]=t,(o=n.nodeValue!==r)&&(e=$e,e!==null))switch(e.tag){case 3:Jn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ft]=t,t.stateNode=n}return Ce(t),null;case 13:if(se(le),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Be!==null&&t.mode&1&&!(t.flags&128))Hu(),Ir(),t.flags|=98560,o=!1;else if(o=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ft]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else at!==null&&(Ho(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ge===0&&(ge=3):Qa())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Fr(),Io(e,t),e===null&&En(t.stateNode.containerInfo),Ce(t),null;case 10:return Pa(t.type._context),Ce(t),null;case 17:return Le(t.type)&&Mi(),Ce(t),null;case 19:if(se(le),o=t.memoizedState,o===null)return Ce(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)en(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bi(e),a!==null){for(t.flags|=128,en(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>Br&&(t.flags|=128,n=!0,en(o,!1),t.lanes=4194304)}else{if(!n)if(e=Bi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),en(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return Ce(t),null}else 2*pe()-o.renderingStartTime>Br&&r!==1073741824&&(t.flags|=128,n=!0,en(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,r=le.current,ne(le,n?r&1|2:r&1),t):(Ce(t),null);case 22:case 23:return Wa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Fe&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function wh(e,t){switch(Na(t),t.tag){case 1:return Le(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),se(Oe),se(Ee),Oa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ma(t),null;case 13:if(se(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(le),null;case 4:return Fr(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var ri=!1,Ne=!1,bh=typeof WeakSet=="function"?WeakSet:Set,I=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){de(e,t,n)}else r.current=null}function Do(e,t,r){try{r()}catch(n){de(e,t,n)}}var ic=!1;function Sh(e,t){if(jo=Pi,e=Au(),Sa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,c=-1,u=0,v=0,m=e,h=null;t:for(;;){for(var y;m!==r||i!==0&&m.nodeType!==3||(l=a+i),m!==o||n!==0&&m.nodeType!==3||(c=a+n),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===r&&++u===i&&(l=a),h===o&&++v===n&&(c=a),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(wo={focusedElem:e,selectionRange:r},Pi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,N=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),N);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(j){de(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return g=ic,ic=!1,g}function mn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Do(t,r,o)}i=i.next}while(i!==n)}}function cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Fo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[_n],delete t[Co],delete t[oh],delete t[ah])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ri));else if(n!==4&&(e=e.child,e!==null))for(qo(e,t,r),e=e.sibling;e!==null;)qo(e,t,r),e=e.sibling}function Bo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Bo(e,t,r),e=e.sibling;e!==null;)Bo(e,t,r),e=e.sibling}var ke=null,st=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Pd(e,t,r),r=r.sibling}function Pd(e,t,r){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ts,r)}catch{}switch(r.tag){case 5:Ne||Er(r,t);case 6:var n=ke,i=st;ke=null,Pt(e,t,r),ke=n,st=i,ke!==null&&(st?(e=ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ke.removeChild(r.stateNode));break;case 18:ke!==null&&(st?(e=ke,r=r.stateNode,e.nodeType===8?Fs(e.parentNode,r):e.nodeType===1&&Fs(e,r),Sn(e)):Fs(ke,r.stateNode));break;case 4:n=ke,i=st,ke=r.stateNode.containerInfo,st=!0,Pt(e,t,r),ke=n,st=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Do(r,t,a),i=i.next}while(i!==n)}Pt(e,t,r);break;case 1:if(!Ne&&(Er(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){de(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(Ne=(n=Ne)||r.memoizedState!==null,Pt(e,t,r),Ne=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new bh),t.forEach(function(n){var i=Rh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function nt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,st=!1;break e;case 3:ke=l.stateNode.containerInfo,st=!0;break e;case 4:ke=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ke===null)throw Error(E(160));Pd(o,a,i),ke=null,st=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}function Td(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),n&4){try{mn(3,e,e.return),cs(3,e)}catch(w){de(e,e.return,w)}try{mn(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:nt(t,e),dt(e),n&512&&r!==null&&Er(r,r.return);break;case 5:if(nt(t,e),dt(e),n&512&&r!==null&&Er(r,r.return),e.flags&32){var i=e.stateNode;try{kn(i,"")}catch(w){de(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Zc(i,o),uo(l,a);var u=uo(l,o);for(a=0;a<c.length;a+=2){var v=c[a],m=c[a+1];v==="style"?iu(i,m):v==="dangerouslySetInnerHTML"?ru(i,m):v==="children"?kn(i,m):da(i,v,m,u)}switch(l){case"input":so(i,o);break;case"textarea":eu(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?_r(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?_r(i,!!o.multiple,o.defaultValue,!0):_r(i,!!o.multiple,o.multiple?[]:"",!1))}i[_n]=o}catch(w){de(e,e.return,w)}}break;case 6:if(nt(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){de(e,e.return,w)}}break;case 3:if(nt(t,e),dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ua=pe())),n&4&&oc(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||v,nt(t,e),Ne=u):nt(t,e),dt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!v&&e.mode&1)for(I=e,v=e.child;v!==null;){for(m=I=v;I!==null;){switch(h=I,y=h.child,h.tag){case 0:case 11:case 14:case 15:mn(4,h,h.return);break;case 1:Er(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){de(n,r,w)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){lc(m);continue}}y!==null?(y.return=h,I=y):lc(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nu("display",a))}catch(w){de(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){de(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:nt(t,e),dt(e),n&4&&oc(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_d(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(kn(i,""),n.flags&=-33);var o=sc(e);Bo(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=sc(e);qo(e,l,a);break;default:throw Error(E(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ch(e,t,r){I=e,Ad(e)}function Ad(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||ri;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ne;l=ri;var u=Ne;if(ri=a,(Ne=c)&&!u)for(I=i;I!==null;)a=I,c=a.child,a.tag===22&&a.memoizedState!==null?cc(i):c!==null?(c.return=a,I=c):cc(i);for(;o!==null;)I=o,Ad(o),o=o.sibling;I=i,ri=l,Ne=u}ac(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):ac(e)}}function ac(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||cs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ne)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:it(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Hl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var v=u.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Sn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ne||t.flags&512&&Fo(t)}catch(h){de(t,t.return,h)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function lc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function cc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{cs(4,t)}catch(c){de(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){de(t,i,c)}}var o=t.return;try{Fo(t)}catch(c){de(t,o,c)}break;case 5:var a=t.return;try{Fo(t)}catch(c){de(t,a,c)}}}catch(c){de(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Nh=Math.ceil,Ui=zt.ReactCurrentDispatcher,$a=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,X=0,xe=null,fe=null,je=0,Fe=0,zr=Yt(0),ge=0,On=null,lr=0,us=0,Va=0,gn=null,Re=null,Ua=0,Br=1/0,yt=null,Hi=!1,$o=null,$t=null,ni=!1,Lt=null,Wi=0,vn=0,Vo=null,gi=-1,vi=0;function Pe(){return X&6?pe():gi!==-1?gi:gi=pe()}function Vt(e){return e.mode&1?X&2&&je!==0?je&-je:ch.transition!==null?(vi===0&&(vi=gu()),vi):(e=re,e!==0||(e=window.event,e=e===void 0?16:bu(e.type)),e):1}function ct(e,t,r,n){if(50<vn)throw vn=0,Vo=null,Error(E(185));Dn(e,r,n),(!(X&2)||e!==xe)&&(e===xe&&(!(X&2)&&(us|=r),ge===4&&Mt(e,je)),Ie(e,n),r===1&&X===0&&!(t.mode&1)&&(Br=pe()+500,os&&Gt()))}function Ie(e,t){var r=e.callbackNode;cf(e,t);var n=_i(e,e===xe?je:0);if(n===0)r!==null&&yl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&yl(r),t===1)e.tag===0?lh(uc.bind(null,e)):$u(uc.bind(null,e)),ih(function(){!(X&6)&&Gt()}),r=null;else{switch(vu(n)){case 1:r=ga;break;case 4:r=hu;break;case 16:r=zi;break;case 536870912:r=mu;break;default:r=zi}r=qd(r,Rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Rd(e,t){if(gi=-1,vi=0,X&6)throw Error(E(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var n=_i(e,e===xe?je:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Qi(e,n);else{t=n;var i=X;X|=2;var o=Od();(xe!==e||je!==t)&&(yt=null,Br=pe()+500,nr(e,t));do try{_h();break}catch(l){Md(e,l)}while(!0);_a(),Ui.current=o,X=i,fe!==null?t=0:(xe=null,je=0,t=ge)}if(t!==0){if(t===2&&(i=go(e),i!==0&&(n=i,t=Uo(e,i))),t===1)throw r=On,nr(e,0),Mt(e,n),Ie(e,pe()),r;if(t===6)Mt(e,n);else{if(i=e.current.alternate,!(n&30)&&!Eh(i)&&(t=Qi(e,n),t===2&&(o=go(e),o!==0&&(n=o,t=Uo(e,o))),t===1))throw r=On,nr(e,0),Mt(e,n),Ie(e,pe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Zt(e,Re,yt);break;case 3:if(Mt(e,n),(n&130023424)===n&&(t=Ua+500-pe(),10<t)){if(_i(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=So(Zt.bind(null,e,Re,yt),t);break}Zt(e,Re,yt);break;case 4:if(Mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-lt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Nh(n/1960))-n,10<n){e.timeoutHandle=So(Zt.bind(null,e,Re,yt),n);break}Zt(e,Re,yt);break;case 5:Zt(e,Re,yt);break;default:throw Error(E(329))}}}return Ie(e,pe()),e.callbackNode===r?Rd.bind(null,e):null}function Uo(e,t){var r=gn;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=Re,Re=r,t!==null&&Ho(t)),e}function Ho(e){Re===null?Re=e:Re.push.apply(Re,e)}function Eh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Va,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-lt(t),n=1<<r;e[r]=-1,t&=~n}}function uc(e){if(X&6)throw Error(E(327));Mr();var t=_i(e,0);if(!(t&1))return Ie(e,pe()),null;var r=Qi(e,t);if(e.tag!==0&&r===2){var n=go(e);n!==0&&(t=n,r=Uo(e,n))}if(r===1)throw r=On,nr(e,0),Mt(e,t),Ie(e,pe()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Re,yt),Ie(e,pe()),null}function Ha(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(Br=pe()+500,os&&Gt())}}function cr(e){Lt!==null&&Lt.tag===0&&!(X&6)&&Mr();var t=X;X|=1;var r=Je.transition,n=re;try{if(Je.transition=null,re=1,e)return e()}finally{re=n,Je.transition=r,X=t,!(X&6)&&Gt()}}function Wa(){Fe=zr.current,se(zr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,nh(r)),fe!==null)for(r=fe.return;r!==null;){var n=r;switch(Na(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Mi();break;case 3:Fr(),se(Oe),se(Ee),Oa();break;case 5:Ma(n);break;case 4:Fr();break;case 13:se(le);break;case 19:se(le);break;case 10:Pa(n.type._context);break;case 22:case 23:Wa()}r=r.return}if(xe=e,fe=e=Ut(e.current,null),je=Fe=t,ge=0,On=null,Va=us=lr=0,Re=gn=null,tr!==null){for(t=0;t<tr.length;t++)if(r=tr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}tr=null}return e}function Md(e,t){do{var r=fe;try{if(_a(),fi.current=Vi,$i){for(var n=ce.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$i=!1}if(ar=0,ye=me=ce=null,hn=!1,An=0,$a.current=null,r===null||r.return===null){ge=1,On=t,fe=null;break}e:{var o=e,a=r.return,l=r,c=t;if(t=je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,v=l,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Gl(a);if(y!==null){y.flags&=-257,Jl(y,a,l,o,t),y.mode&1&&Yl(o,u,t),t=y,c=u;var g=t.updateQueue;if(g===null){var w=new Set;w.add(c),t.updateQueue=w}else g.add(c);break e}else{if(!(t&1)){Yl(o,u,t),Qa();break e}c=Error(E(426))}}else if(oe&&l.mode&1){var N=Gl(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Jl(N,a,l,o,t),Ea(qr(c,l));break e}}o=c=qr(c,l),ge!==4&&(ge=2),gn===null?gn=[o]:gn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=vd(o,c,t);Ul(o,p);break e;case 1:l=c;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($t===null||!$t.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=yd(o,l,t);Ul(o,j);break e}}o=o.return}while(o!==null)}Id(r)}catch(T){t=T,fe===r&&r!==null&&(fe=r=r.return);continue}break}while(!0)}function Od(){var e=Ui.current;return Ui.current=Vi,e===null?Vi:e}function Qa(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(lr&268435455)&&!(us&268435455)||Mt(xe,je)}function Qi(e,t){var r=X;X|=2;var n=Od();(xe!==e||je!==t)&&(yt=null,nr(e,t));do try{zh();break}catch(i){Md(e,i)}while(!0);if(_a(),X=r,Ui.current=n,fe!==null)throw Error(E(261));return xe=null,je=0,ge}function zh(){for(;fe!==null;)Ld(fe)}function _h(){for(;fe!==null&&!Zp();)Ld(fe)}function Ld(e){var t=Fd(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Id(e):fe=t,$a.current=null}function Id(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=wh(r,t),r!==null){r.flags&=32767,fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(r=jh(r,t,Fe),r!==null){fe=r;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function Zt(e,t,r){var n=re,i=Je.transition;try{Je.transition=null,re=1,Ph(e,t,r,n)}finally{Je.transition=i,re=n}return null}function Ph(e,t,r,n){do Mr();while(Lt!==null);if(X&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(uf(e,o),e===xe&&(fe=xe=null,je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ni||(ni=!0,qd(zi,function(){return Mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var a=re;re=1;var l=X;X|=4,$a.current=null,Sh(e,r),Td(r,e),Yf(wo),Pi=!!jo,wo=jo=null,e.current=r,Ch(r),ef(),X=l,re=a,Je.transition=o}else e.current=r;if(ni&&(ni=!1,Lt=e,Wi=i),o=e.pendingLanes,o===0&&($t=null),nf(r.stateNode),Ie(e,pe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=$o,$o=null,e;return Wi&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===Vo?vn++:(vn=0,Vo=e):vn=0,Gt(),null}function Mr(){if(Lt!==null){var e=vu(Wi),t=Je.transition,r=re;try{if(Je.transition=null,re=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,Wi=0,X&6)throw Error(E(331));var i=X;for(X|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var v=I;switch(v.tag){case 0:case 11:case 15:mn(8,v,o)}var m=v.child;if(m!==null)m.return=v,I=m;else for(;I!==null;){v=I;var h=v.sibling,y=v.return;if(zd(v),v===u){I=null;break}if(h!==null){h.return=y,I=h;break}I=y}}}var g=o.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var d=e.current;for(I=d;I!==null;){a=I;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,I=f;else e:for(a=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cs(9,l)}}catch(T){de(l,l.return,T)}if(l===a){I=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,I=j;break e}I=l.return}}if(X=i,Gt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ts,e)}catch{}n=!0}return n}finally{re=r,Je.transition=t}}return!1}function dc(e,t,r){t=qr(r,t),t=vd(e,t,1),e=Bt(e,t,1),t=Pe(),e!==null&&(Dn(e,1,t),Ie(e,t))}function de(e,t,r){if(e.tag===3)dc(e,e,r);else for(;t!==null;){if(t.tag===3){dc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($t===null||!$t.has(n))){e=qr(r,e),e=yd(t,e,1),t=Bt(t,e,1),e=Pe(),t!==null&&(Dn(t,1,e),Ie(t,e));break}}t=t.return}}function Th(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&r,xe===e&&(je&r)===r&&(ge===4||ge===3&&(je&130023424)===je&&500>pe()-Ua?nr(e,0):Va|=r),Ie(e,t)}function Dd(e,t){t===0&&(e.mode&1?(t=Qn,Qn<<=1,!(Qn&130023424)&&(Qn=4194304)):t=1);var r=Pe();e=Nt(e,t),e!==null&&(Dn(e,t,r),Ie(e,r))}function Ah(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dd(e,r)}function Rh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Dd(e,r)}var Fd;Fd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,kh(e,t,r);Me=!!(e.flags&131072)}else Me=!1,oe&&t.flags&1048576&&Vu(t,Ii,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;mi(e,t),e=t.pendingProps;var i=Lr(t,Ee.current);Rr(t,r),i=Ia(null,t,n,e,i,r);var o=Da();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(n)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Aa(t),i.updater=ls,t.stateNode=i,i._reactInternals=t,To(t,n,e,r),t=Mo(null,t,n,!0,o,r)):(t.tag=0,oe&&o&&Ca(t),_e(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Oh(n),e=it(n,e),i){case 0:t=Ro(null,t,n,e,r);break e;case 1:t=tc(null,t,n,e,r);break e;case 11:t=Zl(null,t,n,e,r);break e;case 14:t=ec(null,t,n,it(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:it(n,i),Ro(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:it(n,i),tc(e,t,n,i,r);case 3:e:{if(wd(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Xu(e,t),qi(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qr(Error(E(423)),t),t=rc(e,t,n,r,i);break e}else if(n!==i){i=qr(Error(E(424)),t),t=rc(e,t,n,r,i);break e}else for(Be=qt(t.stateNode.containerInfo.firstChild),$e=t,oe=!0,at=null,r=Qu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ir(),n===i){t=Et(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return Yu(t),e===null&&zo(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,bo(n,i)?a=null:o!==null&&bo(n,o)&&(t.flags|=32),jd(e,t),_e(e,t,a,r),t.child;case 6:return e===null&&zo(t),null;case 13:return bd(e,t,r);case 4:return Ra(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Dr(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:it(n,i),Zl(e,t,n,i,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(Di,n._currentValue),n._currentValue=a,o!==null)if(ut(o.value,a)){if(o.children===i.children&&!Oe.current){t=Et(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=bt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var v=u.pending;v===null?c.next=c:(c.next=v.next,v.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),_o(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),_o(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}_e(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Rr(t,r),i=Ze(i),n=n(i),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,i=it(n,t.pendingProps),i=it(n.type,i),ec(e,t,n,i,r);case 15:return xd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:it(n,i),mi(e,t),t.tag=1,Le(n)?(e=!0,Oi(t)):e=!1,Rr(t,r),gd(t,n,i),To(t,n,i,r),Mo(null,t,n,!0,e,r);case 19:return Sd(e,t,r);case 22:return kd(e,t,r)}throw Error(E(156,t.tag))};function qd(e,t){return fu(e,t)}function Mh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,r,n){return new Mh(e,t,r,n)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oh(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===ha)return 14}return 2}function Ut(e,t){var r=e.alternate;return r===null?(r=Ge(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function yi(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Ka(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yr:return ir(r.children,i,o,t);case pa:a=8,i|=8;break;case eo:return e=Ge(12,r,t,i|2),e.elementType=eo,e.lanes=o,e;case to:return e=Ge(13,r,t,i),e.elementType=to,e.lanes=o,e;case ro:return e=Ge(19,r,t,i),e.elementType=ro,e.lanes=o,e;case Yc:return ds(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:a=10;break e;case Xc:a=9;break e;case fa:a=11;break e;case ha:a=14;break e;case Tt:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ge(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function ir(e,t,r,n){return e=Ge(7,e,n,t),e.lanes=r,e}function ds(e,t,r,n){return e=Ge(22,e,n,t),e.elementType=Yc,e.lanes=r,e.stateNode={isHidden:!1},e}function Qs(e,t,r){return e=Ge(6,e,null,t),e.lanes=r,e}function Ks(e,t,r){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,r,n,i,o,a,l,c){return e=new Lh(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(o),e}function Ih(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Bd(e){if(!e)return Kt;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Le(r))return Bu(e,r,t)}return t}function $d(e,t,r,n,i,o,a,l,c){return e=Xa(r,n,!0,e,i,o,a,l,c),e.context=Bd(null),r=e.current,n=Pe(),i=Vt(r),o=bt(n,i),o.callback=t??null,Bt(r,o,i),e.current.lanes=i,Dn(e,i,n),Ie(e,n),e}function ps(e,t,r,n){var i=t.current,o=Pe(),a=Vt(i);return r=Bd(r),t.context===null?t.context=r:t.pendingContext=r,t=bt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Bt(i,t,a),e!==null&&(ct(e,i,a,o),pi(e,i,a)),a}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ya(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function Dh(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}fs.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ps(e,t,null,null)};fs.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){ps(null,e,null,null)}),t[Ct]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Rt.length&&t!==0&&t<Rt[r].priority;r++);Rt.splice(r,0,e),r===0&&wu(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function Fh(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Ki(a);o.call(u)}}var a=$d(t,n,e,0,null,!1,!1,"",fc);return e._reactRootContainer=a,e[Ct]=a.current,En(e.nodeType===8?e.parentNode:e),cr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Ki(c);l.call(u)}}var c=Xa(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=c,e[Ct]=c.current,En(e.nodeType===8?e.parentNode:e),cr(function(){ps(t,c,r,n)}),c}function ms(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Ki(a);l.call(c)}}ps(t,a,e,i)}else a=Fh(r,t,e,i,n);return Ki(a)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=on(t.pendingLanes);r!==0&&(va(t,r|1),Ie(t,pe()),!(X&6)&&(Br=pe()+500,Gt()))}break;case 13:cr(function(){var n=Nt(e,1);if(n!==null){var i=Pe();ct(n,e,1,i)}}),Ya(e,1)}};ya=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var r=Pe();ct(t,e,134217728,r)}Ya(e,134217728)}};xu=function(e){if(e.tag===13){var t=Vt(e),r=Nt(e,t);if(r!==null){var n=Pe();ct(r,e,t,n)}Ya(e,t)}};ku=function(){return re};ju=function(e,t){var r=re;try{return re=e,t()}finally{re=r}};fo=function(e,t,r){switch(t){case"input":if(so(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ss(n);if(!i)throw Error(E(90));Jc(n),so(n,i)}}}break;case"textarea":eu(e,r);break;case"select":t=r.value,t!=null&&_r(e,!!r.multiple,t,!1)}};au=Ha;lu=cr;var qh={usingClientEntryPoint:!1,Events:[qn,wr,ss,su,ou,Ha]},tn={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bh={bundleType:tn.bundleType,version:tn.version,rendererPackageName:tn.rendererPackageName,rendererConfig:tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:tn.findFiberByHostInstance||Dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{ts=ii.inject(Bh),ht=ii}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;Ue.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(E(200));return Ih(e,t,null,r)};Ue.createRoot=function(e,t){if(!Ja(e))throw Error(E(299));var r=!1,n="",i=Vd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,r,!1,n,i),e[Ct]=t.current,En(e.nodeType===8?e.parentNode:e),new Ga(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=du(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return cr(e)};Ue.hydrate=function(e,t,r){if(!hs(t))throw Error(E(200));return ms(null,e,t,!0,r)};Ue.hydrateRoot=function(e,t,r){if(!Ja(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=Vd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=$d(t,null,e,1,r??null,i,!1,o,a),e[Ct]=t.current,En(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new fs(t)};Ue.render=function(e,t,r){if(!hs(t))throw Error(E(200));return ms(null,e,t,!1,r)};Ue.unmountComponentAtNode=function(e){if(!hs(e))throw Error(E(40));return e._reactRootContainer?(cr(function(){ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Ue.unstable_batchedUpdates=Ha;Ue.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!hs(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ms(e,t,r,!1,n)};Ue.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Uc.exports=Ue;var $h=Uc.exports,hc=$h;Js.createRoot=hc.createRoot,Js.hydrateRoot=hc.hydrateRoot;const vt=Object.create(null);vt.open="0";vt.close="1";vt.ping="2";vt.pong="3";vt.message="4";vt.upgrade="5";vt.noop="6";const xi=Object.create(null);Object.keys(vt).forEach(e=>{xi[vt[e]]=e});const Wo={type:"error",data:"parser error"},Hd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Wd=typeof ArrayBuffer=="function",Qd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Za=({type:e,data:t},r,n)=>Hd&&t instanceof Blob?r?n(t):mc(t,n):Wd&&(t instanceof ArrayBuffer||Qd(t))?r?n(t):mc(new Blob([t]),n):n(vt[e]+(t||"")),mc=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function gc(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Xs;function Vh(e,t){if(Hd&&e.data instanceof Blob)return e.data.arrayBuffer().then(gc).then(t);if(Wd&&(e.data instanceof ArrayBuffer||Qd(e.data)))return t(gc(e.data));Za(e,!1,r=>{Xs||(Xs=new TextEncoder),t(Xs.encode(r))})}const vc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ln=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<vc.length;e++)ln[vc.charCodeAt(e)]=e;const Uh=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),v=new Uint8Array(u);for(n=0;n<r;n+=4)o=ln[e.charCodeAt(n)],a=ln[e.charCodeAt(n+1)],l=ln[e.charCodeAt(n+2)],c=ln[e.charCodeAt(n+3)],v[i++]=o<<2|a>>4,v[i++]=(a&15)<<4|l>>2,v[i++]=(l&3)<<6|c&63;return u},Hh=typeof ArrayBuffer=="function",el=(e,t)=>{if(typeof e!="string")return{type:"message",data:Kd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Wh(e.substring(1),t)}:xi[r]?e.length>1?{type:xi[r],data:e.substring(1)}:{type:xi[r]}:Wo},Wh=(e,t)=>{if(Hh){const r=Uh(e);return Kd(r,t)}else return{base64:!0,data:e}},Kd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Xd="",Qh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{Za(o,!1,l=>{n[a]=l,++i===r&&t(n.join(Xd))})})},Kh=(e,t)=>{const r=e.split(Xd),n=[];for(let i=0;i<r.length;i++){const o=el(r[i],t);if(n.push(o),o.type==="error")break}return n};function Xh(){return new TransformStream({transform(e,t){Vh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let Ys;function si(e){return e.reduce((t,r)=>t+r.length,0)}function oi(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Yh(e,t){Ys||(Ys=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(si(r)<1)break;const c=oi(r,1);o=(c[0]&128)===128,i=c[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(si(r)<2)break;const c=oi(r,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(si(r)<8)break;const c=oi(r,8),u=new DataView(c.buffer,c.byteOffset,c.length),v=u.getUint32(0);if(v>Math.pow(2,21)-1){l.enqueue(Wo);break}i=v*Math.pow(2,32)+u.getUint32(4),n=3}else{if(si(r)<i)break;const c=oi(r,i);l.enqueue(el(o?c:Ys.decode(c),t)),n=0}if(i===0||i>e){l.enqueue(Wo);break}}}})}const Yd=4;function he(e){if(e)return Gh(e)}function Gh(e){for(var t in he.prototype)e[t]=he.prototype[t];return e}he.prototype.on=he.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};he.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};he.prototype.off=he.prototype.removeListener=he.prototype.removeAllListeners=he.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};he.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};he.prototype.emitReserved=he.prototype.emit;he.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};he.prototype.hasListeners=function(e){return!!this.listeners(e).length};const gs=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Ye=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Jh="arraybuffer";function Gd(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Zh=Ye.setTimeout,em=Ye.clearTimeout;function vs(e,t){t.useNativeTimers?(e.setTimeoutFn=Zh.bind(Ye),e.clearTimeoutFn=em.bind(Ye)):(e.setTimeoutFn=Ye.setTimeout.bind(Ye),e.clearTimeoutFn=Ye.clearTimeout.bind(Ye))}const tm=1.33;function rm(e){return typeof e=="string"?nm(e):Math.ceil((e.byteLength||e.size)*tm)}function nm(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Jd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function im(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function sm(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class om extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class tl extends he{constructor(t){super(),this.writable=!1,vs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new om(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=el(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=im(t);return r.length?"?"+r:""}}class am extends tl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Kh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Qh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Jd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Zd=!1;try{Zd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const lm=Zd;function cm(){}class um extends am{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class gt extends he{constructor(t,r,n){super(),this.createRequest=t,vs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Gd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=gt.requestsCount++,gt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=cm,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete gt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}gt.requestsCount=0;gt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",yc);else if(typeof addEventListener=="function"){const e="onpagehide"in Ye?"pagehide":"unload";addEventListener(e,yc,!1)}}function yc(){for(let e in gt.requests)gt.requests.hasOwnProperty(e)&&gt.requests[e].abort()}const dm=function(){const e=ep({xdomain:!1});return e&&e.responseType!==null}();class pm extends um{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=dm&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new gt(ep,this.uri(),t)}}function ep(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||lm))return new XMLHttpRequest}catch{}if(!t)try{return new Ye[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const tp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class fm extends tl{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=tp?{}:Gd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Za(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Jd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Gs=Ye.WebSocket||Ye.MozWebSocket;class hm extends fm{createSocket(t,r,n){return tp?new Gs(t,r,n):r?new Gs(t,r):new Gs(t)}doWrite(t,r){this.ws.send(r)}}class mm extends tl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Yh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Xh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:c})=>{l||(this.onPacket(c),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const gm={websocket:hm,webtransport:mm,polling:pm},vm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ym=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Qo(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=vm.exec(e||""),o={},a=14;for(;a--;)o[ym[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=xm(o,o.path),o.queryKey=km(o,o.query),o}function xm(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function km(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Ko=typeof addEventListener=="function"&&typeof removeEventListener=="function",ki=[];Ko&&addEventListener("offline",()=>{ki.forEach(e=>e())},!1);class Ht extends he{constructor(t,r){if(super(),this.binaryType=Jh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Qo(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Qo(r.host).host);vs(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=sm(this.opts.query)),Ko&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ki.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Yd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Ht.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Ht.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=rm(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,gs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Ht.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ko&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ki.indexOf(this._offlineEventListener);n!==-1&&ki.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Ht.protocol=Yd;class jm extends Ht{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Ht.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Ht.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=r.name,this.emitReserved("upgradeError",h)}}))};function o(){n||(n=!0,v(),r.close(),r=null)}const a=m=>{const h=new Error("probe error: "+m);h.transport=r.name,o(),this.emitReserved("upgradeError",h)};function l(){a("transport closed")}function c(){a("socket closed")}function u(m){r&&m.name!==r.name&&o()}const v=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",c),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let wm=class extends jm{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>gm[o]).filter(o=>!!o)),super(n?i:t,i)}};function bm(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Qo(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Sm=typeof ArrayBuffer=="function",Cm=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,rp=Object.prototype.toString,Nm=typeof Blob=="function"||typeof Blob<"u"&&rp.call(Blob)==="[object BlobConstructor]",Em=typeof File=="function"||typeof File<"u"&&rp.call(File)==="[object FileConstructor]";function rl(e){return Sm&&(e instanceof ArrayBuffer||Cm(e))||Nm&&e instanceof Blob||Em&&e instanceof File}function ji(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ji(e[r]))return!0;return!1}if(rl(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ji(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ji(e[r]))return!0;return!1}function zm(e){const t=[],r=e.data,n=e;return n.data=wi(r,t),n.attachments=t.length,{packet:n,buffers:t}}function wi(e,t,r){if(!e)return e;if(rl(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=wi(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return wi(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=wi(e[i],t));return n}return e}function _m(e,t){return e.data=Xo(e.data,t),delete e.attachments,e}function Xo(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Xo(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Xo(e[r],t));return e}const Pm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Q;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(Q||(Q={}));class Tm{constructor(t){this.replacer=t}encode(t){return(t.type===Q.EVENT||t.type===Q.ACK)&&ji(t)?this.encodeAsBinary({type:t.type===Q.EVENT?Q.BINARY_EVENT:Q.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===Q.BINARY_EVENT||t.type===Q.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=zm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class nl extends he{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===Q.BINARY_EVENT;n||r.type===Q.BINARY_ACK?(r.type=n?Q.EVENT:Q.ACK,this.reconstructor=new Am(r)):super.emitReserved("decoded",r)}else if(rl(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(Q[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Q.BINARY_EVENT||n.type===Q.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!Rm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(nl.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case Q.CONNECT:return xc(r);case Q.DISCONNECT:return r===void 0;case Q.CONNECT_ERROR:return typeof r=="string"||xc(r);case Q.EVENT:case Q.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Pm.indexOf(r[0])===-1);case Q.ACK:case Q.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Am{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=_m(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Rm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function xc(e){return Object.prototype.toString.call(e)==="[object Object]"}const Mm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:nl,Encoder:Tm,get PacketType(){return Q}},Symbol.toStringTag,{value:"Module"}));function ot(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Om=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class np extends he{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[ot(t,"open",this.onopen.bind(this)),ot(t,"packet",this.onpacket.bind(this)),ot(t,"error",this.onerror.bind(this)),ot(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(Om.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:Q.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,m=r.pop();this._registerAckCallback(v,m),a.id=v}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Q.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Q.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Q.EVENT:case Q.BINARY_EVENT:this.onevent(t);break;case Q.ACK:case Q.BINARY_ACK:this.onack(t);break;case Q.DISCONNECT:this.ondisconnect();break;case Q.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:Q.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Q.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Qr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Qr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Qr.prototype.reset=function(){this.attempts=0};Qr.prototype.setMin=function(e){this.ms=e};Qr.prototype.setMax=function(e){this.max=e};Qr.prototype.setJitter=function(e){this.jitter=e};class Yo extends he{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,vs(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Qr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||Mm;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new wm(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=ot(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=ot(r,"error",o);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(ot(t,"ping",this.onping.bind(this)),ot(t,"data",this.ondata.bind(this)),ot(t,"error",this.onerror.bind(this)),ot(t,"close",this.onclose.bind(this)),ot(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){gs(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new np(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const rn={};function bi(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=bm(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=rn[i]&&o in rn[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return l?c=new Yo(n,t):(rn[i]||(rn[i]=new Yo(n,t)),c=rn[i]),r.query&&!t.query&&(t.query=r.queryKey),c.socket(r.path,t)}Object.assign(bi,{Manager:Yo,Socket:np,io:bi,connect:bi});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ip=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Im={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=P.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},c)=>P.createElement("svg",{ref:c,...Im,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:ip("lucide",i),...l},[...a.map(([u,v])=>P.createElement(u,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(e,t)=>{const r=P.forwardRef(({className:n,...i},o)=>P.createElement(Dm,{ref:o,iconNode:t,className:ip(`lucide-${Lm(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=O("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=O("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=O("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=O("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=O("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=O("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=O("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=O("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=O("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=O("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=O("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=O("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=O("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=O("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=O("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=O("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=O("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=O("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=O("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=O("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=O("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=O("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=O("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=O("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=O("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=O("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=O("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=O("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=O("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=O("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=O("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=O("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=O("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=O("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=O("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=O("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=O("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=O("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=O("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=O("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=O("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=O("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=O("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=O("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=O("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=O("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=O("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=O("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=O("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=O("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=O("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=O("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=O("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=O("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=O("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=O("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=O("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=O("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=O("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=O("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=O("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=O("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=O("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=O("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function pg({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const o=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),c=Number(n||0).toFixed(2);function u(x,B){const D=B.length.toString().padStart(2,"0");return`${x}${D}${B}`}const v=u("00","br.gov.bcb.pix"),m=u("01",o),h=u("26",`${v}${m}`),y=u("52","0000"),g=u("53","986"),w=u("54",c),N=u("58","BR"),p=u("59",a),d=u("60",l),f=u("05",i||"***"),j=u("62",f),T=`000201${h}${y}${g}${w}${N}${p}${d}${j}6304`;let z=65535;for(let x=0;x<T.length;x++){z^=T.charCodeAt(x)<<8;for(let B=0;B<8;B++)z&32768?z=(z<<1^4129)&65535:z=z<<1&65535}const R=(z&65535).toString(16).toUpperCase().padStart(4,"0");return`${T}${R}`}function fg({socket:e,menu:t,operador:r,onEnviarPedido:n,onReservarItem:i,onLiberarItem:o,onLiberarCarrinho:a}){const[l,c]=P.useState(""),[u,v]=P.useState([]),[m,h]=P.useState("todas"),[y,g]=P.useState(null),[w,N]=P.useState(null),[p,d]=P.useState(null),[f,j]=P.useState(null),T=P.useRef(!1),[z,R]=P.useState("cardapio"),[x,B]=P.useState("pix"),[D,A]=P.useState(""),[Y,ae]=P.useState(()=>{const S=new Date;return S.setDate(S.getDate()+7),S.toISOString().split("T")[0]}),[Z,We]=P.useState(null),[b,U]=P.useState(!1),[C,M]=P.useState(!1);P.useEffect(()=>{fetch("/api/pix-config").then(S=>S.json()).then(S=>We(S)).catch(S=>console.error("Erro ao carregar chave PIX:",S))},[]);const F=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],G=t&&Array.isArray(t.categorias)?t.categorias:[],J=S=>{if(S.categoria)return S.categoria;const $=G.find(ee=>ee.id===S.categoriaId);return $?$.nome:"Geral"},De=["todas",...new Set(F.map(S=>J(S)))],ze=S=>{if(!S||!S.controlaEstoque)return{controla:!1,disponivel:1/0,esgotado:!1,acabando:!1};const $=typeof S.disponivelEstoque=="number"?S.disponivelEstoque:Math.max(0,(S.estoque||0)-(S.reservado||0));return{controla:!0,disponivel:$,esgotado:$<=0,acabando:$>0&&$<=(S.estoqueMinimo||0)}},tt=(S,$,ee)=>{if(!i){ee();return}i(S,$,H=>{if(H&&H.ok)N(null),ee();else{const q=F.find(be=>be.id===S);N({titulo:`Sem estoque suficiente de "${(q==null?void 0:q.nome)||"produto"}"`,itens:[{nome:(q==null?void 0:q.nome)||S,disponivel:(H==null?void 0:H.disponivel)??0}]})}})},ve=(S,$)=>{o&&o(S,$)},Qe=S=>{ze(S).esgotado||tt(S.id,1,()=>{v(ee=>ee.find(q=>q.id===S.id)?ee.map(q=>q.id===S.id?{...q,quantidade:q.quantidade+1}:q):[...ee,{...S,quantidade:1,observacao:""}])})},_t=(S,$)=>{const ee=()=>{v(H=>H.map(q=>{if(q.id===S){const be=q.quantidade+$;return be>0?{...q,quantidade:be}:null}return q}).filter(Boolean))};$>0?tt(S,$,ee):(ve(S,Math.abs($)),ee())},pr=(S,$)=>{v(ee=>ee.map(H=>H.id===S?{...H,observacao:$}:H))},fr=S=>{const $=u.find(ee=>ee.id===S);$&&ve(S,$.quantidade),v(ee=>ee.filter(H=>H.id!==S))},hr=()=>{a&&a(),v([]),N(null)};P.useEffect(()=>()=>{a&&a()},[]);const _=()=>{!p||T.current||(T.current=!0,j({tipo:"enviando",texto:"Enviando para a impressora..."}),fetch(`/api/orders/${p.id}/imprimir`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vias:{cliente:!0,cozinha:!1},operadorNome:r?r.nome:"Caixa"})}).then(S=>S.json()).then(S=>{S&&S.status==="success"?j({tipo:"ok",texto:"Comprovante enviado para a impressora."}):j({tipo:"erro",texto:(S==null?void 0:S.error)||"Não foi possível imprimir."})}).catch(()=>{j({tipo:"erro",texto:"Erro de conexão ao imprimir."})}).finally(()=>{T.current=!1}))},L=u.reduce((S,$)=>S+$.preco*$.quantidade,0),k=u.reduce((S,$)=>S+$.quantidade,0),V=Z!=null&&Z.chavePix?pg({chave:Z.chavePix,nome:Z.nomeBeneficiario,cidade:Z.cidadeBeneficiario,valor:L}):"",K=()=>{V&&(navigator.clipboard.writeText(V),M(!0),setTimeout(()=>M(!1),3e3))},rt=S=>{if(S&&S.preventDefault(),!l.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(u.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(x==="pagar_depois"){if(!D.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!Y){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const $={cliente:l.trim(),criadoPor:r?r.nome:"Caixa",itens:u.map(q=>({id:q.id,nome:q.nome,preco:q.preco,quantidade:q.quantidade,observacao:q.observacao||""})),total:L,formaPagamento:x,telefoneCliente:x==="pagar_depois"?D.trim():D.trim()||void 0,dataCobranca:x==="pagar_depois"?Y:void 0},ee=q=>{if(q&&q.erro==="estoque_insuficiente"){N({titulo:"Estoque insuficiente para fechar o pedido",itens:(q.itensIndisponiveis||[]).map(ws=>({nome:ws.nome,pedido:ws.pedido,disponivel:ws.disponivel}))}),U(!1),R("carrinho");return}if(q&&q.error){alert(q.error);return}const be=(q==null?void 0:q.order)||(q==null?void 0:q.pedido)||null,hp=(be==null?void 0:be.numero)||"OK";g(`Pedido #${hp} enviado para a cozinha!`),be!=null&&be.id&&(d(be),j(null)),N(null),U(!1),c(""),A(""),v([]),B("pix"),R("cardapio"),setTimeout(()=>g(null),4e3)},H=n||(e?(q,be)=>e.emit("criar_pedido",q,be):null);H?H($,ee):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)}).then(q=>q.json()).then(ee).catch(q=>{console.error("Erro ao enviar pedido:",q),alert("Erro ao comunicar com o servidor.")})},js=F.filter(S=>{const $=S.disponivel!==!1&&S.ativo!==!1,ee=J(S),H=m==="todas"||ee===m||S.categoriaId===m;return $&&H});return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${z==="cardapio"?"active":""}`,onClick:()=>R("cardapio"),children:[s.jsx(dp,{size:16})," Cardápio de Produtos"]}),s.jsxs("button",{className:`mobile-toggle-btn ${z==="carrinho"?"active":""}`,onClick:()=>R("carrinho"),children:[s.jsx(kt,{size:16})," Comanda (",k,")"]})]}),s.jsxs("div",{className:`caixa-cardapio-col ${z!=="cardapio"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(kt,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),y&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(ys,{size:18}),s.jsx("span",{children:y})]}),p&&s.jsxs("div",{className:"painel-comprovante",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"},children:[s.jsxs("div",{style:{flex:1,minWidth:"180px"},children:[s.jsxs("div",{style:{fontWeight:800,color:"var(--text-title)",fontSize:"0.95rem"},children:["Comanda #",p.numero," — ",p.cliente]}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)",marginTop:"2px"},children:["Total R$ ",(Number(p.total)||0).toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary",style:{padding:"0.55rem 0.9rem",fontSize:"0.9rem"},onClick:_,disabled:(f==null?void 0:f.tipo)==="enviando",children:[s.jsx(Wt,{size:17}),(f==null?void 0:f.tipo)==="enviando"?"Enviando...":"Imprimir comprovante"]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.5rem",minHeight:"38px"},onClick:()=>{d(null),j(null)},title:"Fechar",children:s.jsx(ia,{size:16})})]}),f&&f.tipo!=="enviando"&&s.jsxs("div",{style:{fontSize:"0.83rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.4rem",color:f.tipo==="ok"?"var(--status-pronto)":"var(--primary)"},children:[f.tipo==="ok"?s.jsx(qe,{size:15}):s.jsx(yn,{size:15}),s.jsx("span",{children:f.texto})]})]}),s.jsx("div",{className:"cat-pills",children:De.map(S=>s.jsx("button",{className:`cat-btn ${m===S?"active":""}`,onClick:()=>h(S),children:S==="todas"?"Todas as Categorias":S},S))}),s.jsx("div",{className:"produtos-grid",children:js.map(S=>{const $=ze(S);return s.jsxs("div",{className:`prod-card ${$.esgotado?"prod-card-esgotado":""}`,onClick:()=>Qe(S),children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.4rem"},children:[s.jsx("span",{className:"prod-cat",children:J(S)}),$.controla&&($.esgotado?s.jsx("span",{className:"estoque-badge estoque-esgotado",children:"ESGOTADO"}):$.acabando?s.jsxs("span",{className:"estoque-badge estoque-acabando",children:["Últimas ",$.disponivel]}):s.jsxs("span",{className:"estoque-badge estoque-ok",children:["Restam ",$.disponivel]}))]}),s.jsx("div",{className:"prod-title",children:S.nome}),S.descricao&&s.jsx("div",{className:"prod-desc",children:S.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("span",{className:"prod-preco",children:["R$ ",(S.preco||0).toFixed(2)]}),s.jsx("button",{className:"prod-add-btn",title:$.esgotado?"Produto esgotado":"Adicionar ao Pedido",disabled:$.esgotado,children:s.jsx(Gi,{size:18})})]})]},S.id)})})]}),s.jsxs("div",{className:`caixa-carrinho-col ${z!=="carrinho"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsxs("div",{className:"carrinho-title",children:[s.jsx(kt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Comanda Atual"})]}),u.length>0&&s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:hr,children:"Limpar"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx($r,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:l,onChange:S=>c(S.target.value)})]})]}),w&&s.jsxs("div",{className:"aviso-estoque",children:[s.jsxs("div",{className:"aviso-estoque-titulo",children:[s.jsx(yn,{size:17}),s.jsx("span",{children:w.titulo})]}),s.jsx("ul",{className:"aviso-estoque-lista",children:w.itens.map((S,$)=>s.jsxs("li",{children:[s.jsx("strong",{children:S.nome}),S.pedido!==void 0?` — pedido ${S.pedido}, `:" — ",S.disponivel>0?`restam apenas ${S.disponivel}`:"sem estoque disponível"]},$))}),s.jsx("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Ajuste as quantidades acima e envie novamente. Nada do pedido foi perdido."}),s.jsx("button",{className:"btn btn-secondary",style:{alignSelf:"flex-start",padding:"0.25rem 0.6rem",fontSize:"0.78rem",minHeight:"30px"},onClick:()=>N(null),children:"Entendi"})]}),s.jsx("div",{className:"carrinho-itens",children:u.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(kt,{size:36,opacity:.4}),s.jsx("p",{children:"Nenhum item adicionado ainda."}),s.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):u.map(S=>{const $=F.find(q=>q.id===S.id)||S,ee=ze($),H=ee.controla&&ee.disponivel<=0;return s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:S.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(S.preco*S.quantidade).toFixed(2)]}),ee.controla&&s.jsx("div",{style:{fontSize:"0.72rem",color:H?"var(--primary)":"var(--app-ink-muted)",marginTop:"2px"},children:H?"Último disponível no estoque":`Restam ${ee.disponivel} em estoque`})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>_t(S.id,-1),children:s.jsx(ap,{size:14})}),s.jsx("span",{className:"qtd-val",children:S.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>_t(S.id,1),disabled:H,title:H?"Sem estoque disponível":"Adicionar mais uma unidade",style:H?{opacity:.35,cursor:"not-allowed"}:void 0,children:s.jsx(Gi,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>fr(S.id),children:s.jsx(Ji,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Yi,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:S.observacao,onChange:q=>pr(S.id,q.target.value)})]})]},S.id)})}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${x==="pix"?"active":""}`,onClick:()=>B("pix"),children:[s.jsx(Si,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="dinheiro"?"active":""}`,onClick:()=>B("dinheiro"),children:[s.jsx(op,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="debito"?"active":""}`,onClick:()=>B("debito"),children:[s.jsx(Si,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${x==="credito"?"active":""}`,onClick:()=>B("credito"),children:[s.jsx(Si,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${x==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>B("pagar_depois"),children:[s.jsx(Jo,{size:16})," Pagar Depois (Fiado)"]})]}),x==="pix"&&L>0&&s.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>U(!0),children:[s.jsx(bc,{size:18})," Gerar QR Code PIX (R$ ",L.toFixed(2),")"]}),x==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(ra,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:D,onChange:S=>A(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(xs,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:Y,onChange:S=>ae(S.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(yn,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",L.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:rt,disabled:u.length===0||!l.trim(),children:[s.jsx(Cc,{size:18})," Enviar para Cozinha"]})]})]}),b&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card-pix",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[s.jsx(bc,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>U(!1),children:s.jsx(ia,{size:16})})]}),s.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",s.jsx("strong",{style:{color:"var(--text-title)"},children:l||"Cliente no Caixa"})]}),V?s.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(V)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):s.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),s.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",L.toFixed(2)]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",s.jsx("strong",{children:(Z==null?void 0:Z.nomeBeneficiario)||"Festa do Morango"})," (",Z==null?void 0:Z.chavePix,")"]}),V&&s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:s.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:K,children:[C?s.jsx(qe,{size:16,color:"var(--primary)"}):s.jsx(Um,{size:16}),C?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[s.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>U(!1),children:"Voltar"}),s.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:rt,disabled:u.length===0||!l.trim(),children:[s.jsx(Cc,{size:16})," Confirmar & Enviar"]})]})]})}),s.jsxs("div",{className:`mobile-cart-float-bar ${z==="cardapio"&&u.length>0?"mobile-show-float":""}`,onClick:()=>R("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(kt,{size:20}),s.jsxs("span",{children:["Ver Pedido (",k," ",k===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",L.toFixed(2)," →"]})]})]})}function hg({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=P.useState(Date.now()),[a,l]=P.useState("ativos");P.useEffect(()=>{const y=setInterval(()=>{o(Date.now())},1e3);return()=>clearInterval(y)},[]);const c=e.filter(y=>y.status==="pendente"||y.status==="em_preparo"||y.status==="entrega_parcial"),u=c.filter(y=>a==="pendentes"?y.status==="pendente":a==="preparo"?y.status==="em_preparo":a==="parcial"?y.status==="entrega_parcial":a==="meus"&&t?y.preparadoPor&&y.preparadoPor.includes(t.nome):!0),v=y=>{const g=new Date(y).getTime(),w=i-g;return Math.floor(w/6e4)},m=y=>{const g=new Date(y).getTime(),w=Math.max(0,i-g),N=Math.floor(w/6e4),p=Math.floor(w%6e4/1e3);return`${String(N).padStart(2,"0")}:${String(p).padStart(2,"0")}`},h=y=>{const g=v(y);return g>=10?"urgente":g>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Ln,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",c.length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",c.filter(y=>y.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",c.filter(y=>y.status==="em_preparo").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",c.filter(y=>y.status==="entrega_parcial").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",c.filter(y=>y.preparadoPor&&y.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:u.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Xi,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):u.map(y=>{const g=h(y.criadoEm),w=m(y.criadoEm),N=y.itens.reduce((f,j)=>f+(j.quantidade||1),0),p=y.itens.filter(f=>f.entregue).reduce((f,j)=>f+(j.quantidade||1),0),d=p>0&&p<N;return s.jsxs("div",{className:`kds-card ${g}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",y.numero]}),s.jsx("div",{className:"cliente-nome",children:y.cliente}),y.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",y.dataCobranca?new Date(y.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:y.formaPagamento?y.formaPagamento.toUpperCase():"PIX"}),y.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx($r,{size:12}),s.jsxs("span",{children:["Preparo: ",y.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?s.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",p,"/",N,")"]}):s.jsx("span",{className:`badge badge-${y.status==="pendente"?"pendente":"preparo"}`,children:y.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${g}`,children:[s.jsx(xs,{size:14}),s.jsx("span",{children:w})]})]})]}),s.jsxs("div",{className:"kds-card-body",children:[s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[s.jsx(lp,{size:14,color:"var(--primary)"}),s.jsxs("span",{children:["Clique no item para marcar entrega parcial (",p,"/",N," entregues):"]})]}),y.itens.map((f,j)=>s.jsxs("div",{className:`kds-item-row ${f.entregue?"item-entregue":""}`,children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("div",{className:"item-info",children:[s.jsxs("span",{className:"item-qtd-badge",children:[f.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:f.nome})]}),s.jsxs("button",{type:"button",className:`item-check-btn ${f.entregue?"checked":""}`,onClick:()=>n&&n(y.id,j,!f.entregue),title:f.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[f.entregue?s.jsx(cp,{size:14}):s.jsx(up,{size:14}),s.jsx("span",{children:f.entregue?"Entregue":"Entregar"})]})]}),f.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(Gm,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",f.observacao]})]})]},j))]}),s.jsx("div",{className:"kds-card-footer",children:y.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(y.id,"em_preparo"),children:[s.jsx(tg,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(y.id,"pronto"),children:[s.jsx(il,{size:18})," Pronto / Chamar Cliente"]})})]},y.id)})})]})}let gr=null;function mg(){if(!gr){const e=window.AudioContext||window.webkitAudioContext;e&&(gr=new e)}return gr&&gr.state==="suspended"&&gr.resume(),gr}function Pc(){try{const e=mg();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function gg({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=P.useState(!0),[a,l]=P.useState(null);P.useEffect(()=>{t&&(t.status==="pronto"||t.status==="entrega_parcial")&&i&&(Pc(),l(t.id))},[t,i]);const c=e.filter(g=>g.status==="pronto"||g.status==="entrega_parcial"),u=e.filter(g=>g.status==="entregue").slice(0,8),v=a?e.find(g=>g.id===a):t?e.find(g=>g.id===t.id):null,m=v&&(v.status==="pronto"||v.status==="entrega_parcial")?v:c[0],h=()=>{if(!m||c.length<=1)return;const g=c.findIndex(N=>N.id===m.id),w=c[(g+1)%c.length];w&&l(w.id)},y=g=>{r(g,"entregue");const w=c.filter(N=>N.id!==g);w.length>0?l(w[0].id):l(null)};return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{o(!i),i||Pc()},children:[i?s.jsx(lg,{size:18,color:"var(--status-pronto)"}):s.jsx(cg,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(il,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),m?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",m.numero]}),s.jsx("div",{className:"destaque-cliente",children:m.cliente}),m.itens&&s.jsxs("div",{className:"destaque-itens-box",children:[s.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[s.jsx("span",{children:"Conferência de Itens no Balcão:"}),s.jsxs("span",{style:{color:"var(--primary)",fontWeight:800},children:[m.itens.filter(g=>g.entregue).length," de ",m.itens.length," entregues"]})]}),m.itens.map((g,w)=>{const N=!!g.entregue;return s.jsxs("div",{className:`destaque-item-row ${N?"item-entregue":""}`,onClick:()=>n&&n(m.id,w,!N),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[s.jsxs("span",{className:N?"badge badge-pronto":"badge badge-pendente",children:[g.quantidade,"x"]}),s.jsx("span",{style:{color:N?"#156b16":"var(--text-title)",textDecoration:N?"line-through":"none",fontWeight:700},children:g.nome}),g.observacao&&s.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",g.observacao,")"]})]}),s.jsxs("button",{type:"button",className:`btn ${N?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:p=>{p.stopPropagation(),n&&n(m.id,w,!N)},children:[N?s.jsx(cp,{size:16}):s.jsx(up,{size:16}),s.jsx("span",{children:N?"✓ Entregue":"Dar Baixa"})]})]},w)})]}),s.jsxs("div",{className:"destaque-acoes",children:[s.jsxs("button",{className:"btn btn-success",style:{flex:2,padding:"0.85rem",fontSize:"1rem",borderRadius:"var(--radius-md)",fontWeight:700},onClick:()=>y(m.id),children:[s.jsx(_c,{size:20})," Finalizar & Entregar Todos"]}),c.length>1&&s.jsxs("button",{className:"btn btn-secondary",style:{flex:1,padding:"0.85rem",fontSize:"0.88rem",borderRadius:"var(--radius-md)",fontWeight:600},onClick:h,children:[s.jsx(sp,{size:18})," Próximo da Fila"]})]})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Zi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Xi,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",c.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:c.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):c.map(g=>{const w=m&&g.id===m.id;return s.jsxs("div",{className:`pronto-item ${w?"item-ativo-tv":""}`,onClick:()=>l(g.id),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",g.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:g.cliente}),g.status==="entrega_parcial"&&s.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",g.itens?g.itens.filter(N=>N.entregue).length:0,"/",g.itens?g.itens.length:0,")"]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:N=>{N.stopPropagation(),l(g.id)},children:w?"Exibindo":"Exibir"}),s.jsx("button",{type:"button",className:"btn btn-success",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:N=>{N.stopPropagation(),y(g.id)},children:"Entregar"})]})]},g.id)})})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(_c,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:u.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):u.map(g=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",g.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:g.cliente})]},g.id))})]})]})]})}const fp=[{id:"burger",nome:"Hambúrguer",component:s.jsx(qm,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(ng,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(Hm,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(Vm,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(eg,{size:18})},{id:"coffee",nome:"Café",component:s.jsx($m,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(Vr,{size:18})}];function Tc(e){const t=fp.find(r=>r.id===e);return t?t.component:s.jsx(Vr,{size:16})}function vg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o,onAjustarEstoque:a}){const[l,c]=P.useState("todas"),[u,v]=P.useState(""),[m,h]=P.useState(!1),[y,g]=P.useState(!1),[w,N]=P.useState(!1),[p,d]=P.useState(null),[f,j]=P.useState(""),[T,z]=P.useState(""),[R,x]=P.useState(""),[B,D]=P.useState(""),[A,Y]=P.useState(!1),[ae,Z]=P.useState("0"),[We,b]=P.useState("0"),[U,C]=P.useState(""),[M,F]=P.useState("burger"),G=Array.isArray(e==null?void 0:e.categorias)?e.categorias:[],J=Array.isArray(e==null?void 0:e.produtos)?e.produtos:Array.isArray(e)?e:[],De=k=>!!k.controlaEstoque&&(k.estoque||0)<=(k.estoqueMinimo||0),ze=J.filter(De).length,tt=J.filter(k=>{const V=l==="todas"||k.categoriaId===l,K=!u.trim()||k.nome.toLowerCase().includes(u.toLowerCase())||k.descricao&&k.descricao.toLowerCase().includes(u.toLowerCase()),rt=!m||De(k);return V&&K&&rt}),ve=(k,V)=>{a&&a(k.id,V).then(K=>{K&&K.error&&alert(K.error)})},Qe=k=>{const V=window.prompt(`Repor estoque de "${k.nome}".
Saldo atual: ${k.estoque||0}

Quantas unidades deseja ADICIONAR?`,"10");if(V===null)return;const K=parseInt(V,10);if(Number.isNaN(K)||K===0){alert("Informe um número inteiro diferente de zero.");return}ve(k,{delta:K})},_t=(k=null)=>{var V;k?(d(k),j(k.nome),z(k.categoriaId),x(k.preco.toString()),D(k.descricao||""),Y(!!k.controlaEstoque),Z(String(k.estoque??0)),b(String(k.estoqueMinimo??0))):(d(null),j(""),z(((V=G[0])==null?void 0:V.id)||"lanches"),x(""),D(""),Y(!1),Z("0"),b("0")),g(!0)},pr=()=>{C(""),F("burger"),N(!0)},fr=k=>{if(k.preventDefault(),!f.trim()||!R||!T){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:p?p.id:void 0,categoriaId:T,nome:f.trim(),preco:parseFloat(R),descricao:B.trim(),disponivel:p?p.disponivel:!0,controlaEstoque:A,estoque:A&&parseInt(ae,10)||0,estoqueMinimo:A&&parseInt(We,10)||0}),g(!1)},hr=k=>{if(k.preventDefault(),!U.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:U.trim(),icone:M}),N(!1)},_=k=>{window.confirm(`Tem certeza que deseja excluir o produto "${k.nome}"?`)&&r(k.id)},L=k=>{const V=J.filter(K=>K.categoriaId===k.id).length;if(V>0){alert(`Não é possível excluir a categoria "${k.nome}" pois ela possui ${V} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${k.nome}"?`)&&o(k.id).then(K=>{K&&K.error?alert(K.error):l===k.id&&c("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Vr,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(sl,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:k=>v(k.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:pr,children:[s.jsx(kc,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>_t(),children:[s.jsx(Gi,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${l==="todas"?"active":""}`,onClick:()=>c("todas"),children:[s.jsx(dp,{size:14})," Todas (",J.length,")"]}),G.map(k=>{const V=J.filter(K=>K.categoriaId===k.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${l===k.id?"active":""}`,onClick:()=>c(k.id),children:[Tc(k.icone)," ",s.jsx("span",{children:k.nome})," (",V,")"]}),V===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>L(k),children:s.jsx(Ji,{size:13})})]},k.id)}),s.jsxs("button",{className:`cat-pill-btn ${m?"active":""}`,onClick:()=>h(k=>!k),title:"Mostrar apenas produtos no limite do alerta mínimo",style:{marginLeft:"auto"},children:[s.jsx(yn,{size:14})," Somente itens acabando (",ze,")"]})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Estoque"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:tt.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(yn,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):tt.map(k=>{const V=G.find(K=>K.id===k.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(k.id),children:k.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(zc,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Ec,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:k.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[Tc(V==null?void 0:V.icone)," ",(V==null?void 0:V.nome)||k.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",k.preco.toFixed(2)]})}),s.jsx("td",{children:k.controlaEstoque?s.jsxs("div",{className:"estoque-celula",children:[s.jsx("button",{className:"estoque-mini-btn",title:"Abater 1 unidade",onClick:()=>ve(k,{delta:-1}),children:s.jsx(ap,{size:14})}),s.jsx("span",{className:`estoque-saldo ${(k.estoque||0)===0?"zerado":De(k)?"acabando":"ok"}`,children:k.estoque||0}),s.jsx("button",{className:"estoque-mini-btn",title:"Adicionar 1 unidade",onClick:()=>ve(k,{delta:1}),children:s.jsx(Gi,{size:14})}),s.jsxs("button",{className:"estoque-mini-btn",title:"Repor uma quantidade maior",onClick:()=>Qe(k),style:{width:"auto",padding:"0 0.5rem",gap:"0.25rem"},children:[s.jsx(Jm,{size:14})," ",s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700},children:"Repor"})]})]}):s.jsxs("span",{className:"estoque-ilimitado",children:[s.jsx(Km,{size:15})," Ilimitado"]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:k.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>_t(k),children:[s.jsx(Zm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>_(k),children:[s.jsx(Ji,{size:14})," Excluir"]})]})})]},k.id)})})]})}),y&&s.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:s.jsxs("div",{className:"modal-card",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(Vr,{size:20,color:"var(--primary)"}),s.jsx("span",{children:p?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:fr,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:f,onChange:k=>j(k.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:T,onChange:k=>z(k.target.value),required:!0,children:G.map(k=>s.jsx("option",{value:k.id,children:k.nome},k.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:R,onChange:k=>x(k.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:B,onChange:k=>D(k.target.value)})]}),s.jsxs("div",{className:"estoque-box",children:[s.jsxs("button",{type:"button",className:"estoque-switch",onClick:()=>Y(k=>!k),children:[A?s.jsx(zc,{size:22,color:"var(--status-pronto)"}):s.jsx(Ec,{size:22,color:"var(--app-ink-muted)"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Controlar estoque deste produto"}),s.jsx("small",{children:A?"O caixa não consegue vender depois que as unidades acabam.":"Desligado: venda ilimitada, sem contagem de unidades."})]})]}),A&&s.jsxs("div",{className:"estoque-campos",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Quantidade em estoque"}),s.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:ae,onChange:k=>Z(k.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Alerta mínimo"}),s.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:We,onChange:k=>b(k.target.value)})]})]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(qe,{size:18})," Salvar Produto"]})]})]})]})}),w&&s.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:s.jsxs("div",{className:"modal-card",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(kc,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:hr,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:U,onChange:k=>C(k.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:fp.map(k=>s.jsxs("button",{type:"button",className:`icone-opt ${M===k.id?"selected":""}`,onClick:()=>F(k.id),children:[k.component,s.jsx("span",{children:k.nome})]},k.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>N(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(qe,{size:18})," Criar Categoria"]})]})]})]})})]})}function yg({pedidos:e,operador:t}){const[r,n]=P.useState(null),[i,o]=P.useState(null),a=P.useRef(!1),[l,c]=P.useState("hoje"),[u,v]=P.useState("todos"),[m,h]=P.useState(""),[y,g]=P.useState(""),[w,N]=P.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const d=b=>{n(U=>U===b?null:b)},f=(b,U)=>{b.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${U}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(C=>C.json()).catch(C=>console.error("Erro ao quitar pagamento:",C))},j=(b,U)=>{b.stopPropagation(),!a.current&&(a.current=!0,o(U.id),fetch(`/api/orders/${U.id}/reimprimir`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operadorNome:t?t.nome:"Operador"})}).then(C=>C.json()).then(C=>{C&&C.error&&alert(C.error)}).catch(C=>{console.error("Erro ao reimprimir:",C),alert("Erro de conexão ao solicitar a reimpressão.")}).finally(()=>{a.current=!1,o(null)}))},T=(b,U=!1)=>s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px",width:U?"100%":void 0},onClick:C=>j(C,b),disabled:i===b.id,title:`Reimprimir a comanda #${b.numero} (sai marcada como 2a via)`,children:[s.jsx(Wt,{size:14}),i===b.id?"Enviando...":"Reimprimir"]},`reimprimir-${b.id}`),z=b=>b.statusPagamento==="pago"?!1:b.statusPagamento==="pendente_pagamento"||b.formaPagamento==="pagar_depois",R=e.filter(b=>{if(m.trim()){const M=m.toLowerCase().trim(),F=`#${b.numero}`.toLowerCase(),G=(b.cliente||"").toLowerCase(),J=(b.telefoneCliente||"").toLowerCase();if(!(F.includes(M)||G.includes(M)||J.includes(M)))return!1}if(u==="pagos"&&z(b)||u==="fiado"&&!z(b)||u==="entregues"&&b.status!=="entregue"||u==="cancelados"&&b.status!=="cancelado"||u!=="cancelados"&&b.status==="cancelado")return!1;if(!b.criadoEm)return!0;const U=new Date(b.criadoEm),C=new Date;if(l==="hoje")return U.toDateString()===C.toDateString();if(l==="ontem"){const M=new Date;return M.setDate(C.getDate()-1),U.toDateString()===M.toDateString()}else if(l==="7dias"){const M=new Date;return M.setDate(C.getDate()-7),U>=M}else if(l==="custom"){if(y){const M=new Date(y);if(M.setHours(0,0,0,0),U<M)return!1}if(w){const M=new Date(w);if(M.setHours(23,59,59,999),U>M)return!1}}return!0}),x=R.filter(b=>b.status!=="cancelado"),B=x.filter(b=>!z(b)),D=x.filter(b=>z(b)),A=B.reduce((b,U)=>b+(Number(U.total)||0),0),Y=D.reduce((b,U)=>b+(Number(U.total)||0),0),ae=x.length,Z=ae>0?(A+Y)/ae:0,We=b=>{if(b.formaPagamento==="pagar_depois"||b.statusPagamento==="pendente_pagamento"){const U=b.dataCobranca?new Date(b.dataCobranca).toLocaleDateString():"Sem Data";return b.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(qe,{size:12})," Pagar Depois (Quitado)"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(xs,{size:12})," Pagar Depois (",U,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(Si,{size:12})," ",b.formaPagamento?b.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Go,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsxs("span",{children:[R.length," Registros Encontrados"]})})]}),s.jsxs("div",{className:"vendas-filtros-card",children:[s.jsxs("div",{className:"vendas-search-box",children:[s.jsx(sl,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"vendas-search-input",placeholder:"Buscar por comanda #, cliente ou WhatsApp...",value:m,onChange:b=>h(b.target.value)})]}),s.jsx("div",{className:"dropdown-filter-group",children:s.jsxs("select",{className:"dropdown-filter-select",value:l,onChange:b=>c(b.target.value),children:[s.jsx("option",{value:"hoje",children:"Período: Hoje"}),s.jsx("option",{value:"ontem",children:"Período: Ontem"}),s.jsx("option",{value:"7dias",children:"Período: Últimos 7 dias"}),s.jsx("option",{value:"todos",children:"Período: Todos os Pedidos"}),s.jsx("option",{value:"custom",children:"Período: Data Personalizada"})]})}),s.jsx("div",{className:"dropdown-filter-group",children:s.jsxs("select",{className:"dropdown-filter-select",value:u,onChange:b=>v(b.target.value),children:[s.jsx("option",{value:"todos",children:"Status: Todos os Pedidos"}),s.jsx("option",{value:"pagos",children:"Status: Quitados / Pagos"}),s.jsx("option",{value:"fiado",children:"Status: Pagar Depois (Fiado)"}),s.jsx("option",{value:"entregues",children:"Status: Entregues"}),s.jsx("option",{value:"cancelados",children:"Status: Cancelados"})]})})]}),l==="custom"&&s.jsxs("div",{className:"vendas-filtros-card",style:{background:"var(--app-surface-2)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[s.jsx(Jo,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{color:"var(--text-title)"},children:"Data Inicial:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:y,onChange:b=>g(b.target.value)})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[s.jsx("span",{style:{color:"var(--text-title)"},children:"Data Final:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:w,onChange:b=>N(b.target.value)})]})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(op,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",A.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(Jo,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",Y.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(kt,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),s.jsxs("div",{className:"metric-value",children:[ae," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx(sg,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",Z.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"40px"}}),s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Data / Horário"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Forma Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:R.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):R.map(b=>{const U=r===b.id,C=b.criadoEm?new Date(b.criadoEm).toLocaleString():"Recente";return s.jsxs($c.Fragment,{children:[s.jsxs("tr",{className:"row-exp",onClick:()=>d(b.id),children:[s.jsx("td",{style:{textAlign:"center"},children:U?s.jsx(ea,{size:16,color:"var(--primary)"}):s.jsx(Zo,{size:16,color:"var(--app-ink-muted)"})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",b.numero]})}),s.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:C}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:b.cliente}),b.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(ra,{size:12}),s.jsx("span",{children:b.telefoneCliente})]})]}),s.jsx("td",{children:We(b)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(b.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${b.status==="pronto"?"pronto":b.status==="entregue"||b.status==="entrega_parcial"?"entregue":"preparo"}`,children:b.status==="entrega_parcial"?"PARCIAL":b.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.82rem"},children:[s.jsxs("div",{children:["Caixa: ",s.jsx("strong",{children:b.criadoPor||"Caixa"})]}),b.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",b.preparadoPor]})]}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[z(b)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:M=>f(M,b.id),children:[s.jsx(qe,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Xi,{size:15})," Quitado"]}),T(b)]})})]}),U&&s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:s.jsxs("div",{className:"exp-details-box",children:[s.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(Yi,{size:16,color:"var(--primary)"}),s.jsxs("span",{children:["Itens Lançados na Comanda #",b.numero,":"]})]}),b.itens&&b.itens.length>0?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:b.itens.map((M,F)=>s.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[M.quantidade,"x"]})," ",M.nome,M.observacao&&s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",M.observacao]})]}),s.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(M.preco*M.quantidade).toFixed(2)]})]},F))}):s.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},b.id)})})]})}),s.jsx("div",{className:"vendas-mobile-list",children:R.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):R.map(b=>{const U=r===b.id,C=b.criadoEm?new Date(b.criadoEm).toLocaleString():"Recente";return s.jsxs("div",{className:"venda-card-mobile",onClick:()=>d(b.id),children:[s.jsxs("div",{className:"venda-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",b.numero]}),s.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:b.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(b.total)||0).toFixed(2)]}),U?s.jsx(ea,{size:16,color:"var(--primary)"}):s.jsx(Zo,{size:16,color:"var(--app-ink-muted)"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[s.jsx("div",{children:We(b)}),s.jsx("span",{className:`badge badge-${b.status==="pronto"?"pronto":b.status==="entregue"||b.status==="entrega_parcial"?"entregue":"preparo"}`,children:b.status==="entrega_parcial"?"PARCIAL":b.status.toUpperCase()})]}),U&&s.jsxs("div",{className:"venda-card-details",children:[s.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",s.jsx("strong",{children:C})]}),b.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[s.jsx(ra,{size:13}),s.jsxs("span",{children:["Contato / WhatsApp: ",s.jsx("strong",{children:b.telefoneCliente})]})]}),s.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[s.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),b.itens&&b.itens.length>0?s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:b.itens.map((M,F)=>s.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[s.jsxs("span",{children:[s.jsxs("strong",{children:[M.quantidade,"x"]})," ",M.nome," ",M.observacao?`(${M.observacao})`:""]}),s.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(M.preco*M.quantidade).toFixed(2)]})]},F))}):s.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[s.jsxs("span",{children:["Caixa: ",s.jsx("strong",{children:b.criadoPor||"Caixa"})]}),b.preparadoPor&&s.jsxs("span",{children:["Cozinha: ",s.jsx("strong",{children:b.preparadoPor})]})]}),s.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[z(b)?s.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:M=>f(M,b.id),children:[s.jsx(qe,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"0.3rem"},children:[s.jsx(Xi,{size:15})," Pagamento Confirmado / Quitado"]}),T(b,!0)]})]})]},b.id)})})]})}function xg({operador:e}){const[t,r]=P.useState([]),[n,i]=P.useState(!1),[o,a]=P.useState(!1),[l,c]=P.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[u,v]=P.useState({}),[m,h]=P.useState(null),y=e&&e.role==="master",[g,w]=P.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[N,p]=P.useState(!1);P.useEffect(()=>{y&&(j(),d())},[y]);const d=()=>{fetch("/api/pix-config").then(A=>A.json()).then(A=>{A&&A.chavePix&&w(A)}).catch(A=>console.error("Erro ao carregar PIX config:",A))},f=A=>{A.preventDefault(),p(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(Y=>Y.json()).then(Y=>{p(!1),Y&&Y.status==="success"?(h("Chave PIX atualizada com sucesso!"),setTimeout(()=>h(null),4e3)):alert(Y.error||"Erro ao salvar chave PIX.")}).catch(()=>{p(!1),alert("Erro de conexão ao salvar chave PIX.")})},j=()=>{fetch("/api/users").then(A=>A.json()).then(A=>r(A)).catch(A=>console.error("Erro ao carregar usuários:",A))};if(!y)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const T=A=>{v(Y=>({...Y,[A]:!Y[A]}))},z=()=>{c({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},R=A=>{c({...A}),a(!0),i(!0)},x=A=>{if(A.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const Y=o?`/api/users/${l.id}`:"/api/users";fetch(Y,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(Z=>Z.json()).then(Z=>{Z&&Z.status==="success"?(h(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),j(),setTimeout(()=>h(null),4e3)):alert(Z.error||"Erro ao salvar usuário.")}).catch(Z=>alert("Erro de conexão com o servidor."))},B=(A,Y)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${Y}"?`)&&fetch(`/api/users/${A}`,{method:"DELETE"}).then(ae=>ae.json()).then(ae=>{ae&&ae.status==="success"?(h(`Conta de "${Y}" excluída com sucesso.`),j(),setTimeout(()=>h(null),4e3)):alert(ae.error||"Erro ao excluir conta.")})},D=A=>{switch(A){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(Fm,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(kt,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(Ln,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Zi,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:A})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(na,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:z,children:[s.jsx(ag,{size:18})," Nova Conta"]})]}),m&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(ys,{size:18}),s.jsx("span",{children:m})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(A=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:A.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:A.usuario})}),s.jsx("td",{children:D(A.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:u[A.id]?A.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>T(A.id),title:"Revelar/Ocultar Senha",children:u[A.id]?s.jsx(Wm,{size:14}):s.jsx(Qm,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>R(A),children:[s.jsx(ig,{size:14})," Editar"]}),A.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>B(A.id,A.nome),children:[s.jsx(Ji,{size:14})," Excluir"]})]})})]},A.id))})]})}),s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[s.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Xm,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),s.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",s.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),s.jsxs("form",{onSubmit:f,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),s.jsxs("select",{className:"form-input",value:g.tipoChave,onChange:A=>w({...g,tipoChave:A.target.value}),children:[s.jsx("option",{value:"email",children:"E-mail"}),s.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),s.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),s.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Chave PIX *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:g.chavePix,onChange:A=>w({...g,chavePix:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:g.nomeBeneficiario,onChange:A=>w({...g,nomeBeneficiario:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cidade *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:g.cidadeBeneficiario,onChange:A=>w({...g,cidadeBeneficiario:A.target.value}),required:!0})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:N,children:N?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx($r,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:A=>c({...l,nome:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:A=>c({...l,usuario:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:A=>c({...l,senha:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:A=>c({...l,role:A.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function kg({logs:e,operador:t}){const[r,n]=P.useState(""),[i,o]=P.useState("todas"),[a,l]=P.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const u=h=>{l(y=>y===h?null:h)},v=e.filter(h=>{const y=i==="todas"||h.acao===i,g=r.toLowerCase().trim(),w=!g||String(h.numeroPedido).includes(g)||h.cliente&&h.cliente.toLowerCase().includes(g)||h.usuario&&h.usuario.toLowerCase().includes(g)||h.descricao&&h.descricao.toLowerCase().includes(g);return y&&w}),m=h=>{switch(h){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Bm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ln,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(il,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(ys,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:h})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(ta,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(sl,{size:16,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:h=>n(h.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(h=>h.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(h=>h.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(h=>h.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(h=>h.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:v.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):v.map(h=>{const y=new Date(h.timestamp),g=`${y.toLocaleDateString()} ${y.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(xs,{size:13}),s.jsx("span",{children:g})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx($r,{size:14,color:"var(--primary)"}),s.jsx("span",{children:h.usuario})]})}),s.jsx("td",{children:m(h.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",h.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",h.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:h.itens.map((w,N)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(lp,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[w.quantidade,"x"]}),s.jsx("span",{children:w.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(w.preco*w.quantidade).toFixed(2),")"]}),w.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",w.observacao,"]"]})]},N))})]})]},h.id)})})]})}),s.jsx("div",{className:"logs-mobile-list",children:v.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):v.map(h=>{const y=new Date(h.timestamp),g=y.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),w=a===h.id;return s.jsxs("div",{className:"log-card-mobile",onClick:()=>u(h.id),children:[s.jsxs("div",{className:"log-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",h.numeroPedido]}),s.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:h.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m(h.acao),s.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:g}),w?s.jsx(ea,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Zo,{size:16,color:"var(--app-ink-muted)"})]})]}),w&&s.jsxs("div",{className:"log-card-details",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[s.jsx($r,{size:13,color:"var(--primary)"}),s.jsxs("span",{children:["Operador: ",s.jsx("strong",{children:h.usuario})]}),s.jsxs("span",{style:{marginLeft:"auto"},children:[y.toLocaleDateString()," ",y.toLocaleTimeString()]})]}),s.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:h.itens.map((N,p)=>s.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[N.quantidade,"x"]})," ",N.nome," (R$ ",(N.preco*N.quantidade).toFixed(2),")",N.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",N.observacao,"]"]})]},p))})]})]},h.id)})})]})}const jg=[{id:"cp850",nome:"CP850 (Multilíngue) — padrão"},{id:"cp860",nome:"CP860 (Português)"},{id:"win1252",nome:"WPC1252 (Windows Latin-1)"},{id:"cp858",nome:"CP858 (Multilíngue + Euro)"},{id:"cp437",nome:"CP437 (EUA / padrão antigo)"}];function wg({operador:e}){var j,T,z,R;const[t,r]=P.useState(null),[n,i]=P.useState([]),[o,a]=P.useState(!1),[l,c]=P.useState(!1),[u,v]=P.useState(null),[m,h]=P.useState({pendentes:0,historico:[]}),y=e&&e.role==="master",g=()=>{fetch("/api/printer/fila").then(x=>x.json()).then(h).catch(()=>{})},w=()=>{a(!0),fetch("/api/printer/impressoras").then(x=>x.json()).then(x=>{x.impressoras?i(x.impressoras):v({tipo:"erro",texto:x.error||"Não foi possível listar as impressoras."})}).catch(()=>v({tipo:"erro",texto:"Erro de conexão ao listar as impressoras."})).finally(()=>a(!1))};if(P.useEffect(()=>{y&&(fetch("/api/printer-config").then(x=>x.json()).then(r).catch(()=>v({tipo:"erro",texto:"Erro ao carregar a configuração da impressora."})),w(),g())},[y]),!y)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Impressora"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode configurar a impressão de comprovantes."})]});if(!t)return s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:"Carregando configuração da impressora..."});const N=(x,B)=>r(D=>({...D,[x]:B})),p=(x,B)=>r(D=>({...D,vias:{...D.vias,[x]:B}})),d=()=>{c(!0),v(null),fetch("/api/printer-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(x=>x.json()).then(x=>{x.config?(r(x.config),v({tipo:"ok",texto:"Configuração salva. Já vale para o próximo pedido."})):v({tipo:"erro",texto:x.error||"Erro ao salvar."})}).catch(()=>v({tipo:"erro",texto:"Erro de conexão ao salvar."})).finally(()=>c(!1))},f=()=>{v(null),fetch("/api/printer/teste",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:t})}).then(x=>x.json()).then(x=>{x.status==="success"?v({tipo:"ok",texto:"Teste enviado para a impressora. Confira o papel: a régua mostra em quantas colunas a linha quebra."}):v({tipo:"erro",texto:x.error||"Falha ao enviar o teste."}),setTimeout(g,1500)}).catch(()=>v({tipo:"erro",texto:"Erro de conexão ao enviar o teste."}))};return s.jsxs("div",{className:"impressora-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Wt,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Impressora Térmica"})]}),u&&s.jsxs("div",{className:`aviso-box ${u.tipo==="ok"?"aviso-ok":"aviso-erro"}`,children:[u.tipo==="ok"?s.jsx(ys,{size:18}):s.jsx(pp,{size:18}),s.jsx("span",{children:u.texto})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(Wt,{size:18,color:"var(--primary)"})," Impressão automática"]}),s.jsxs("button",{className:`switch-linha ${t.habilitado?"ativo":""}`,onClick:()=>N("habilitado",!t.habilitado),children:[s.jsx("span",{className:"switch-caixa",children:t.habilitado&&s.jsx(qe,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Imprimir o comprovante ao fechar o pedido"}),s.jsx("small",{children:t.habilitado?"Ligado: cada pedido novo sai impresso sem clique.":"Desligado: nenhum comprovante sai sozinho. A reimpressão manual continua funcionando."})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Impressora do Windows"}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsxs("select",{className:"form-input",value:t.nomeImpressora||"",onChange:x=>N("nomeImpressora",x.target.value),style:{flex:1},children:[s.jsx("option",{value:"",children:"— Selecione a impressora —"}),n.map(x=>s.jsx("option",{value:x,children:x},x)),t.nomeImpressora&&!n.includes(t.nomeImpressora)&&s.jsxs("option",{value:t.nomeImpressora,children:[t.nomeImpressora," (não encontrada agora)"]})]}),s.jsxs("button",{className:"btn btn-secondary",onClick:w,disabled:o,title:"Atualizar a lista de impressoras instaladas",children:[s.jsx(Sc,{size:16})," ",o?"...":"Atualizar"]})]})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(rg,{size:18,color:"var(--primary)"})," Formato da bobina"]}),s.jsxs("div",{className:"impressora-linha",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Largura"}),s.jsxs("select",{className:"form-input",value:t.larguraColunas,onChange:x=>N("larguraColunas",parseInt(x.target.value,10)),children:[s.jsx("option",{value:32,children:"32 colunas — bobina 58mm"}),s.jsx("option",{value:48,children:"48 colunas — bobina 80mm"}),s.jsx("option",{value:42,children:"42 colunas — 80mm fonte compacta"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tabela de caracteres (acentuação)"}),s.jsx("select",{className:"form-input",value:t.codePage,onChange:x=>N("codePage",x.target.value),children:jg.map(x=>s.jsx("option",{value:x.id,children:x.nome},x.id))})]})]}),s.jsxs("button",{className:`switch-linha ${t.cortarPapel?"ativo":""}`,onClick:()=>N("cortarPapel",!t.cortarPapel),children:[s.jsx("span",{className:"switch-caixa",children:t.cortarPapel&&s.jsx(qe,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Cortar o papel ao final"}),s.jsx("small",{children:"Desligue apenas se a impressora não tiver guilhotina."})]})]}),s.jsxs("button",{className:`switch-linha ${t.semAcentos?"ativo":""}`,onClick:()=>N("semAcentos",!t.semAcentos),children:[s.jsx("span",{className:"switch-caixa",children:t.semAcentos&&s.jsx(qe,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Remover acentos ao imprimir"}),s.jsx("small",{children:"Plano B: use se nenhuma tabela de caracteres sair correta no teste."})]})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(Yi,{size:18,color:"var(--primary)"})," Vias impressas"]}),s.jsxs("button",{className:`switch-linha ${(j=t.vias)!=null&&j.cliente?"ativo":""}`,onClick:()=>{var x;return p("cliente",!((x=t.vias)!=null&&x.cliente))},children:[s.jsx("span",{className:"switch-caixa",children:((T=t.vias)==null?void 0:T.cliente)&&s.jsx(qe,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Via do cliente"}),s.jsx("small",{children:"Comanda, itens, total e forma de pagamento."})]})]}),s.jsxs("button",{className:`switch-linha ${(z=t.vias)!=null&&z.cozinha?"ativo":""}`,onClick:()=>{var x;return p("cozinha",!((x=t.vias)!=null&&x.cozinha))},children:[s.jsx("span",{className:"switch-caixa",children:((R=t.vias)==null?void 0:R.cozinha)&&s.jsx(qe,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Via da cozinha"}),s.jsx("small",{children:"Sem preços, itens em fonte grande e comanda gigante."})]})]}),s.jsxs("div",{className:"form-group",style:{maxWidth:"220px"},children:[s.jsx("label",{className:"form-label",children:"Cópias da via do cliente"}),s.jsx("input",{type:"number",min:"1",max:"5",className:"form-input",value:t.copiasCliente,onChange:x=>N("copiasCliente",parseInt(x.target.value,10)||1)})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(og,{size:18,color:"var(--primary)"})," Cabeçalho e rodapé"]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cabeçalho"}),s.jsx("input",{type:"text",className:"form-input",value:t.cabecalho||"",onChange:x=>N("cabecalho",x.target.value),placeholder:"FESTA DO MORANGO"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Subtítulo"}),s.jsx("input",{type:"text",className:"form-input",value:t.subCabecalho||"",onChange:x=>N("subCabecalho",x.target.value),placeholder:"Desbravadores Apocalipse"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Rodapé"}),s.jsx("input",{type:"text",className:"form-input",value:t.rodape||"",onChange:x=>N("rodape",x.target.value),placeholder:"Aguarde ser chamado no balcao"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[s.jsxs("button",{className:"btn btn-primary",onClick:d,disabled:l,children:[s.jsx(qe,{size:18})," ",l?"Salvando...":"Salvar configuração"]}),s.jsxs("button",{className:"btn btn-secondary",onClick:f,children:[s.jsx(Wt,{size:18})," Imprimir teste"]}),s.jsxs("button",{className:"btn btn-secondary",onClick:g,children:[s.jsx(Sc,{size:16})," Atualizar fila"]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(Yi,{size:18,color:"var(--primary)"})," Últimas impressões",m.pendentes>0&&s.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--status-preparo)",fontWeight:700},children:["(",m.pendentes," na fila)"]})]}),!m.historico||m.historico.length===0?s.jsx("div",{style:{color:"var(--app-ink-muted)",fontSize:"0.86rem"},children:"Nenhuma impressão registrada ainda nesta sessão do servidor."}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",maxHeight:"320px",overflowY:"auto"},children:m.historico.map(x=>s.jsxs("div",{className:"job-linha",children:[s.jsxs("span",{children:[s.jsx("strong",{children:x.descricao}),s.jsxs("span",{style:{color:"var(--app-ink-muted)"},children:[" · ",new Date(x.quandoEm).toLocaleTimeString("pt-BR")]}),x.tentativas>1&&s.jsxs("span",{style:{color:"var(--status-preparo)"},children:[" · ",x.tentativas," tentativas"]}),!x.ok&&s.jsx("div",{style:{color:"var(--app-ink-muted)",marginTop:"2px"},children:x.erro})]}),s.jsx("span",{className:x.ok?"job-ok":"job-falha",children:x.ok?"OK":"FALHOU"})]},x.id))})]})]})}const te=bi(window.location.origin,{transports:["websocket","polling"]});function bg(){const[e,t]=P.useState("caixa"),[r,n]=P.useState(!1),[i,o]=P.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");P.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const a=()=>{o(_=>_==="escuro"?"claro":"escuro")},[l,c]=P.useState(()=>{try{const _=localStorage.getItem("operador_lanchonete");return _?JSON.parse(_):null}catch{return null}}),[u,v]=P.useState(""),[m,h]=P.useState(""),[y,g]=P.useState(null),[w,N]=P.useState(!1),[p,d]=P.useState([]),[f,j]=P.useState({categorias:[],produtos:[]}),[T,z]=P.useState([]),[R,x]=P.useState(null),[B,D]=P.useState(null),A=_=>_?Array.isArray(_)?{categorias:[],produtos:_}:{categorias:Array.isArray(_.categorias)?_.categorias:[],produtos:Array.isArray(_.produtos)?_.produtos:[]}:{categorias:[],produtos:[]};P.useEffect(()=>{fetch("/api/menu").then(_=>_.json()).then(_=>j(A(_))).catch(_=>console.error("Erro ao carregar cardápio via REST:",_)),fetch("/api/logs").then(_=>_.json()).then(_=>z(_)).catch(_=>console.error("Erro ao buscar logs:",_))},[]);const Y=_=>{if(_.preventDefault(),g(null),!u.trim()||!m.trim()){g("Preencha usuário e senha.");return}N(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:m.trim()})}).then(L=>L.json()).then(L=>{if(N(!1),L&&L.status==="success"){const k=L.user;c(k),localStorage.setItem("operador_lanchonete",JSON.stringify(k)),k.role==="cozinha"?t("cozinha"):k.role==="tv"?t("chamada"):t("caixa")}else g(L.error||"Credenciais inválidas.")}).catch(L=>{N(!1),g("Erro de conexão com o servidor.")})},ae=()=>{c(null),localStorage.removeItem("operador_lanchonete"),v(""),h(""),g(null)};P.useEffect(()=>(te.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),te.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),te.on("pedidos_iniciais",_=>{d(Array.isArray(_)?_:[])}),te.on("cardapio_inicial",_=>{j(A(_))}),te.on("novo_pedido_criado",_=>{d(L=>[_,...L.filter(k=>k.id!==_.id)])}),te.on("status_pedido_atualizado",_=>{d(L=>L.map(k=>k.id===_.id?_:k)),x(L=>L&&L.id===_.id?_:L)}),te.on("pedido_chamado",_=>{x(_)}),te.on("cardapio_atualizado",_=>{j(A(_))}),te.on("estoque_atualizado",_=>{!Array.isArray(_)||_.length===0||j(L=>({...L,produtos:L.produtos.map(k=>{const V=_.find(K=>K.produtoId===k.id);return V?{...k,controlaEstoque:V.controlaEstoque,estoque:V.estoque,estoqueMinimo:V.estoqueMinimo,reservado:V.reservado,disponivelEstoque:V.disponivel}:k})}))}),te.on("novo_log_auditoria",_=>{z(L=>[_,...L.filter(k=>k.id!==_.id)])}),te.on("impressao_falhou",_=>{D(_)}),te.on("impressao_status",_=>{D(L=>L&&L.pedidoId===_.pedidoId?null:L)}),()=>{te.off("connect"),te.off("disconnect"),te.off("pedidos_iniciais"),te.off("cardapio_inicial"),te.off("novo_pedido_criado"),te.off("status_pedido_atualizado"),te.off("pedido_chamado"),te.off("cardapio_atualizado"),te.off("estoque_atualizado"),te.off("novo_log_auditoria"),te.off("impressao_falhou"),te.off("impressao_status")}),[]);const Z=(_,L)=>{te.emit("criar_pedido",{..._,criadoPor:l?`${l.nome}`:"Caixa"},L)},We=(_,L)=>{te.emit("mudar_status_pedido",{id:_,status:L,preparadoPor:l?`${l.nome}`:"Cozinha"})},b=(_,L,k)=>{d(V=>V.map(K=>{if(K.id!==_)return K;const rt=(K.itens||[]).map((H,q)=>{if(q!==L)return H;const be=k!==void 0?k:!H.entregue;return{...H,entregue:be}}),js=rt.reduce((H,q)=>H+(q.quantidade||1),0),S=rt.filter(H=>H.entregue).reduce((H,q)=>H+(q.quantidade||1),0);let $=K.status;S>=js?$="entregue":S>0?$="entrega_parcial":(K.status==="entregue"||K.status==="entrega_parcial")&&($="em_preparo");const ee={...K,itens:rt,status:$};return x(H=>H&&H.id===_?ee:H),ee})),te.emit("alternar_item_entregue",{orderId:_,itemIndex:L,entregue:k,operadorNome:l?`${l.nome}`:"Atendente"}),fetch(`/api/orders/${_}/itens/${L}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:k,operadorNome:l?`${l.nome}`:"Atendente"})}).then(V=>V.ok?V.json():null).then(V=>{V&&V.order&&d(K=>K.map(rt=>rt.id===V.order.id?V.order:rt))}).catch(V=>console.error("Erro ao alternar item:",V))},U=(_,L,k)=>{te.emit("reservar_item",{produtoId:_,quantidade:L||1},k)},C=(_,L,k)=>{te.emit("liberar_item",{produtoId:_,quantidade:L||1},k)},M=_=>{te.emit("liberar_carrinho",{},_)},F=(_,L)=>fetch(`/api/menu/produto/${_}/estoque`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({...L,operadorNome:l?l.nome:"Gerente"})}).then(k=>k.json()).catch(k=>(console.error("Erro ao ajustar estoque:",k),{error:"Erro de conexão ao ajustar o estoque."})),G=_=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar produto:",L))},J=_=>{fetch(`/api/menu/produto/${_}`,{method:"DELETE"}).then(L=>L.json()).catch(L=>console.error("Erro ao excluir produto:",L))},De=_=>{fetch(`/api/menu/produto/${_}/disponivel`,{method:"PATCH"}).then(L=>L.json()).catch(L=>console.error("Erro ao alterar disponibilidade:",L))},ze=_=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar categoria:",L))},tt=_=>fetch(`/api/menu/categoria/${_}`,{method:"DELETE"}).then(L=>L.json());if(!l)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar Tema",children:i==="escuro"?s.jsx(Nc,{size:16,color:"var(--status-preparo)"}):s.jsx(wc,{size:16,color:"var(--primary)"})})]}),y&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(pp,{size:18}),s.jsx("span",{children:y})]}),s.jsxs("form",{onSubmit:Y,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:_=>v(_.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:m,onChange:_=>h(_.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:w,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[w?"Autenticando...":"Entrar no Sistema"," ",s.jsx(sp,{size:18})]})]})]})]});const ve=l.role==="master"||l.role==="caixa",Qe=l.role==="master",_t=l.role==="master",pr=l.role==="master",fr=l.role==="master"||l.role==="caixa",hr=l.role==="master"||l.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[ve&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(kt,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(Ln,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Zi,{size:18})," Chamada TV"]}),fr&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Go,{size:18})," Vendas"]}),hr&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(ta,{size:18})," Logs"]}),Qe&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(Vr,{size:18})," Cardápio"]}),pr&&s.jsxs("button",{className:`nav-btn ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[s.jsx(Wt,{size:18})," Impressora"]}),_t&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(na,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:ae,title:`Operador: ${l.nome} (${l.role.toUpperCase()}) - Clique para sair`,children:[s.jsx($r,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:l.nome}),s.jsx(Ym,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(Nc,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(wc,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(dg,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(ug,{size:14})," Conectando..."]})]})]})]}),B&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.13)",border:"1px solid var(--primary)",borderRadius:"var(--radius-md)",padding:"0.85rem 1rem",margin:"0 0 1rem 0",display:"flex",alignItems:"center",gap:"0.7rem"},children:[s.jsx(Wt,{size:20,color:"var(--primary)",style:{flexShrink:0}}),s.jsxs("div",{style:{flex:1},children:[s.jsxs("div",{style:{fontWeight:800,color:"var(--primary)",fontSize:"0.92rem"},children:["O comprovante ",B.numero?`da comanda #${B.numero}`:""," não foi impresso"]}),s.jsxs("div",{style:{fontSize:"0.84rem",color:"var(--app-ink)",marginTop:"2px"},children:[B.erro," O pedido foi registrado normalmente — se precisar, use ",s.jsx("strong",{children:"Reimprimir"})," em Vendas."]})]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.5rem",minHeight:"32px",flexShrink:0},onClick:()=>D(null),title:"Fechar aviso",children:s.jsx(ia,{size:16})})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(ve?s.jsx(fg,{menu:f,operador:l,onEnviarPedido:Z,onReservarItem:U,onLiberarItem:C,onLiberarCarrinho:M}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(jc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",l.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(hg,{pedidos:p,operador:l,onMudarStatus:We,onAlternarItemEntregue:b}),e==="chamada"&&s.jsx(gg,{pedidos:p,ultimoPedidoChamado:R,onMudarStatus:We,onAlternarItemEntregue:b}),e==="vendas"&&s.jsx(yg,{pedidos:p,operador:l}),e==="logs"&&s.jsx(kg,{logs:T,operador:l}),e==="cardapio"&&(Qe?s.jsx(vg,{menu:f,onSalvarProduto:G,onExcluirProduto:J,onToggleDisponivel:De,onSalvarCategoria:ze,onExcluirCategoria:tt,onAjustarEstoque:F}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(jc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="impressora"&&s.jsx(wg,{operador:l}),e==="usuarios"&&s.jsx(xg,{operador:l})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[ve&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(kt,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(Ln,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Zi,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),fr&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Go,{size:20}),s.jsx("span",{children:"Vendas"})]}),hr&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(ta,{size:20}),s.jsx("span",{children:"Logs"})]}),Qe&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(Vr,{size:20}),s.jsx("span",{children:"Cardápio"})]}),pr&&s.jsxs("button",{className:`mobile-nav-item ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[s.jsx(Wt,{size:20}),s.jsx("span",{children:"Impressora"})]}),_t&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(na,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}Js.createRoot(document.getElementById("root")).render(s.jsx($c.StrictMode,{children:s.jsx(bg,{})}));
