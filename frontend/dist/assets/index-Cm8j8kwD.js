(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function fp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zc={exports:{}},es={},Pc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On=Symbol.for("react.element"),hp=Symbol.for("react.portal"),mp=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),nl=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ac=Object.assign,Rc={};function $r(e,t,r){this.props=e,this.context=t,this.refs=Rc,this.updater=r||Tc}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mc(){}Mc.prototype=$r.prototype;function ra(e,t,r){this.props=e,this.context=t,this.refs=Rc,this.updater=r||Tc}var na=ra.prototype=new Mc;na.constructor=ra;Ac(na,$r.prototype);na.isPureReactComponent=!0;var il=Array.isArray,Lc=Object.prototype.hasOwnProperty,ia={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Lc.call(t,n)&&!Oc.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:On,type:e,key:o,ref:a,props:i,_owner:ia.current}}function Cp(e,t){return{$$typeof:On,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===On}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var sl=/\/+/g;function js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function oi(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case On:case hp:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+js(a,0):n,il(i)?(r="",e!=null&&(r=e.replace(sl,"$&/")+"/"),oi(i,t,r,"",function(u){return u})):i!=null&&(sa(i)&&(i=Cp(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",il(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+js(o,l);a+=oi(o,t,r,c,i)}else if(c=Sp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+js(o,l++),a+=oi(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bn(e,t,r){if(e==null)return e;var n=[],i=0;return oi(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ai={transition:null},_p={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ai,ReactCurrentOwner:ia};function Dc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Bn,forEach:function(e,t,r){Bn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bn(e,function(){t++}),t},toArray:function(e){return Bn(e,function(t){return t})||[]},only:function(e){if(!sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=$r;U.Fragment=mp;U.Profiler=vp;U.PureComponent=ra;U.StrictMode=gp;U.Suspense=jp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_p;U.act=Dc;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ac({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Lc.call(t,c)&&!Oc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:On,type:e.type,key:i,ref:o,props:n,_owner:a}};U.createContext=function(e){return e={$$typeof:xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yp,_context:e},e.Consumer=e};U.createElement=Ic;U.createFactory=function(e){var t=Ic.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:kp,render:e}};U.isValidElement=sa;U.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Ep}};U.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ai.transition;ai.transition={};try{e()}finally{ai.transition=t}};U.unstable_act=Dc;U.useCallback=function(e,t){return Ee.current.useCallback(e,t)};U.useContext=function(e){return Ee.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ee.current.useEffect(e,t)};U.useId=function(){return Ee.current.useId()};U.useImperativeHandle=function(e,t,r){return Ee.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ee.current.useMemo(e,t)};U.useReducer=function(e,t,r){return Ee.current.useReducer(e,t,r)};U.useRef=function(e){return Ee.current.useRef(e)};U.useState=function(e){return Ee.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return Ee.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return Ee.current.useTransition()};U.version="18.3.1";Pc.exports=U;var T=Pc.exports;const Fc=fp(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=T,Pp=Symbol.for("react.element"),Tp=Symbol.for("react.fragment"),Ap=Object.prototype.hasOwnProperty,Rp=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Ap.call(t,n)&&!Mp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Pp,type:e,key:o,ref:a,props:i,_owner:Rp.current}}es.Fragment=Tp;es.jsx=qc;es.jsxs=qc;zc.exports=es;var s=zc.exports,Ys={},Bc={exports:{}},Be={},$c={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var $=N.length;N.push(R);e:for(;0<$;){var Q=$-1>>>1,X=N[Q];if(0<i(X,R))N[Q]=R,N[$]=X,$=Q;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var R=N[0],$=N.pop();if($!==R){N[0]=$;e:for(var Q=0,X=N.length,ze=X>>>1;Q<ze;){var Le=2*(Q+1)-1,st=N[Le],ge=Le+1,fe=N[ge];if(0>i(st,$))ge<X&&0>i(fe,st)?(N[Q]=fe,N[ge]=$,Q=ge):(N[Q]=st,N[Le]=$,Q=Le);else if(ge<X&&0>i(fe,$))N[Q]=fe,N[ge]=$,Q=ge;else break e}}return R}function i(N,R){var $=N.sortIndex-R.sortIndex;return $!==0?$:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],y=1,g=null,h=3,x=!1,v=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=N)n(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=r(u)}}function w(N){if(b=!1,p(N),!v)if(r(c)!==null)v=!0,S(z);else{var R=r(u);R!==null&&V(w,R.startTime-N)}}function z(N,R){v=!1,b&&(b=!1,f(j),j=-1),x=!0;var $=h;try{for(p(R),g=r(c);g!==null&&(!(g.expirationTime>R)||N&&!A());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,h=g.priorityLevel;var X=Q(g.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?g.callback=X:g===r(c)&&n(c),p(R)}else n(c);g=r(c)}if(g!==null)var ze=!0;else{var Le=r(u);Le!==null&&V(w,Le.startTime-R),ze=!1}return ze}finally{g=null,h=$,x=!1}}var P=!1,M=null,j=-1,F=5,q=-1;function A(){return!(e.unstable_now()-q<F)}function W(){if(M!==null){var N=e.unstable_now();q=N;var R=!0;try{R=M(!0,N)}finally{R?te():(P=!1,M=null)}}else P=!1}var te;if(typeof d=="function")te=function(){d(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Se=le.port2;le.port1.onmessage=W,te=function(){Se.postMessage(null)}}else te=function(){C(W,0)};function S(N){M=N,P||(P=!0,te())}function V(N,R){j=C(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,S(z))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var $=h;h=R;try{return N()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=h;h=N;try{return R()}finally{h=$}},e.unstable_scheduleCallback=function(N,R,$){var Q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=$+X,N={id:y++,callback:R,priorityLevel:N,startTime:$,expirationTime:X,sortIndex:-1},$>Q?(N.sortIndex=$,t(u,N),r(c)===null&&N===r(u)&&(b?(f(j),j=-1):b=!0,V(w,$-Q))):(N.sortIndex=X,t(c,N),v||x||(v=!0,S(z))),N},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(N){var R=h;return function(){var $=h;h=R;try{return N.apply(this,arguments)}finally{h=$}}}})(Vc);$c.exports=Vc;var Lp=$c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=T,qe=Lp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,yn={};function cr(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(yn[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=Object.prototype.hasOwnProperty,Ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ol={},al={};function Dp(e){return Gs.call(al,e)?!0:Gs.call(ol,e)?!1:Ip.test(e)?al[e]=!0:(ol[e]=!0,!1)}function Fp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qp(e,t,r,n){if(t===null||typeof t>"u"||Fp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oa,aa);xe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oa,aa);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oa,aa);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function la(e,t,r,n){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qp(t,r,i,n)&&(r=null),n||i===null?Dp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Nt=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$n=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),Js=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),Zs=Symbol.for("react.suspense"),eo=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Qc=Symbol.for("react.offscreen"),ll=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=ll&&e[ll]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ws;function nn(e){if(ws===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ws=t&&t[1]||""}return`
`+ws+e}var bs=!1;function Ss(e,t){if(!e||bs)return"";bs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{bs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?nn(e):""}function Bp(e){switch(e.tag){case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 2:case 15:return e=Ss(e.type,!1),e;case 11:return e=Ss(e.type.render,!1),e;case 1:return e=Ss(e.type,!0),e;default:return""}}function to(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case Js:return"Profiler";case ca:return"StrictMode";case Zs:return"Suspense";case eo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Hc:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:to(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return to(e(t))}catch{}}return null}function $p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(t);case 8:return t===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e){var t=Kc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vn(e){e._valueTracker||(e._valueTracker=Vp(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Kc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ro(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function cl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Vt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&la(e,"checked",t,!1)}function no(e,t){Yc(e,t);var r=Vt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,r):t.hasOwnProperty("defaultValue")&&io(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ul(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function io(e,t,r){(t!=="number"||Si(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var sn=Array.isArray;function Er(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Vt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function so(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(sn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Vt(r)}}function Gc(e,t){var r=Vt(t.value),n=Vt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Un,Zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Un=Un||document.createElement("div"),Un.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Un.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cn[t]=cn[e]})});function eu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||cn.hasOwnProperty(e)&&cn[e]?(""+t).trim():t+"px"}function tu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=eu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Hp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(Hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,_r=null,zr=null;function fl(e){if(e=Fn(e)){if(typeof uo!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ss(t),uo(e.stateNode,e.type,t))}}function ru(e){_r?zr?zr.push(e):zr=[e]:_r=e}function nu(){if(_r){var e=_r,t=zr;if(zr=_r=null,fl(e),t)for(e=0;e<t.length;e++)fl(t[e])}}function iu(e,t){return e(t)}function su(){}var Cs=!1;function ou(e,t,r){if(Cs)return e(t,r);Cs=!0;try{return iu(e,t,r)}finally{Cs=!1,(_r!==null||zr!==null)&&(su(),nu())}}function kn(e,t){var r=e.stateNode;if(r===null)return null;var n=ss(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var po=!1;if(wt)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){po=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{po=!1}function Wp(e,t,r,n,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(y){this.onError(y)}}var un=!1,Ci=null,Ni=!1,fo=null,Qp={onError:function(e){un=!0,Ci=e}};function Kp(e,t,r,n,i,o,a,l,c){un=!1,Ci=null,Wp.apply(Qp,arguments)}function Xp(e,t,r,n,i,o,a,l,c){if(Kp.apply(this,arguments),un){if(un){var u=Ci;un=!1,Ci=null}else throw Error(E(198));Ni||(Ni=!0,fo=u)}}function ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hl(e){if(ur(e)!==e)throw Error(E(188))}function Yp(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return hl(i),e;if(o===n)return hl(i),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function lu(e){return e=Yp(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var uu=qe.unstable_scheduleCallback,ml=qe.unstable_cancelCallback,Gp=qe.unstable_shouldYield,Jp=qe.unstable_requestPaint,ae=qe.unstable_now,Zp=qe.unstable_getCurrentPriorityLevel,fa=qe.unstable_ImmediatePriority,du=qe.unstable_UserBlockingPriority,Ei=qe.unstable_NormalPriority,ef=qe.unstable_LowPriority,pu=qe.unstable_IdlePriority,ts=null,dt=null;function tf(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:sf,rf=Math.log,nf=Math.LN2;function sf(e){return e>>>=0,e===0?32:31-(rf(e)/nf|0)|0}var Hn=64,Wn=4194304;function on(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=on(l):(o&=a,o!==0&&(n=on(o)))}else a=r&~i,a!==0?n=on(a):o!==0&&(n=on(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-rt(t),i=1<<r,n|=e[r],t&=~i;return n}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-rt(o),l=1<<a,c=i[a];c===-1?(!(l&r)||l&n)&&(i[a]=of(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Hn;return Hn<<=1,!(Hn&4194240)&&(Hn=64),e}function Ns(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function In(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=r}function lf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-rt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function ha(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-rt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var G=0;function hu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,ma,gu,vu,yu,mo=!1,Qn=[],Mt=null,Lt=null,Ot=null,jn=new Map,wn=new Map,Pt=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Yr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fn(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uf(e,t,r,n,i){switch(t){case"focusin":return Mt=Yr(Mt,e,t,r,n,i),!0;case"dragenter":return Lt=Yr(Lt,e,t,r,n,i),!0;case"mouseover":return Ot=Yr(Ot,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return jn.set(o,Yr(jn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,wn.set(o,Yr(wn.get(o)||null,e,t,r,n,i)),!0}return!1}function xu(e){var t=Jt(e.target);if(t!==null){var r=ur(t);if(r!==null){if(t=r.tag,t===13){if(t=au(r),t!==null){e.blockedOn=t,yu(e.priority,function(){gu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);co=n,r.target.dispatchEvent(n),co=null}else return t=Fn(r),t!==null&&ma(t),e.blockedOn=r,!1;t.shift()}return!0}function vl(e,t,r){li(e)&&r.delete(t)}function df(){mo=!1,Mt!==null&&li(Mt)&&(Mt=null),Lt!==null&&li(Lt)&&(Lt=null),Ot!==null&&li(Ot)&&(Ot=null),jn.forEach(vl),wn.forEach(vl)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,df)))}function bn(e){function t(i){return Gr(i,e)}if(0<Qn.length){Gr(Qn[0],e);for(var r=1;r<Qn.length;r++){var n=Qn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Mt!==null&&Gr(Mt,e),Lt!==null&&Gr(Lt,e),Ot!==null&&Gr(Ot,e),jn.forEach(t),wn.forEach(t),r=0;r<Pt.length;r++)n=Pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Pt.length&&(r=Pt[0],r.blockedOn===null);)xu(r),r.blockedOn===null&&Pt.shift()}var Pr=Nt.ReactCurrentBatchConfig,zi=!0;function pf(e,t,r,n){var i=G,o=Pr.transition;Pr.transition=null;try{G=1,ga(e,t,r,n)}finally{G=i,Pr.transition=o}}function ff(e,t,r,n){var i=G,o=Pr.transition;Pr.transition=null;try{G=4,ga(e,t,r,n)}finally{G=i,Pr.transition=o}}function ga(e,t,r,n){if(zi){var i=go(e,t,r,n);if(i===null)Os(e,t,n,Pi,r),gl(e,n);else if(uf(i,e,t,r,n))n.stopPropagation();else if(gl(e,n),t&4&&-1<cf.indexOf(e)){for(;i!==null;){var o=Fn(i);if(o!==null&&mu(o),o=go(e,t,r,n),o===null&&Os(e,t,n,Pi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Os(e,t,n,null,r)}}var Pi=null;function go(e,t,r,n){if(Pi=null,e=pa(n),e=Jt(e),e!==null)if(t=ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=au(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case fa:return 1;case du:return 4;case Ei:case ef:return 16;case pu:return 536870912;default:return 16}default:return 16}}var At=null,va=null,ci=null;function ju(){if(ci)return ci;var e,t=va,r=t.length,n,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return ci=i.slice(e,1<n?1-n:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function yl(){return!1}function $e(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Kn:yl,this.isPropagationStopped=yl,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=$e(Vr),Dn=se({},Vr,{view:0,detail:0}),hf=$e(Dn),Es,_s,Jr,rs=se({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Es=e.screenX-Jr.screenX,_s=e.screenY-Jr.screenY):_s=Es=0,Jr=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),xl=$e(rs),mf=se({},rs,{dataTransfer:0}),gf=$e(mf),vf=se({},Dn,{relatedTarget:0}),zs=$e(vf),yf=se({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=$e(yf),kf=se({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=$e(kf),wf=se({},Vr,{data:0}),kl=$e(wf),bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function xa(){return Nf}var Ef=se({},Dn,{key:function(e){if(e.key){var t=bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=$e(Ef),zf=se({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jl=$e(zf),Pf=se({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Tf=$e(Pf),Af=se({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rf=$e(Af),Mf=se({},rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=$e(Mf),Of=[9,13,27,32],ka=wt&&"CompositionEvent"in window,dn=null;wt&&"documentMode"in document&&(dn=document.documentMode);var If=wt&&"TextEvent"in window&&!dn,wu=wt&&(!ka||dn&&8<dn&&11>=dn),wl=" ",bl=!1;function bu(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function Df(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(bl=!0,wl);case"textInput":return e=t.data,e===wl&&bl?null:e;default:return null}}function Ff(e,t){if(vr)return e==="compositionend"||!ka&&bu(e,t)?(e=ju(),ci=va=At=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function Cu(e,t,r,n){ru(n),t=Ti(t,"onChange"),0<t.length&&(r=new ya("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var pn=null,Sn=null;function Bf(e){Ou(e,0)}function ns(e){var t=kr(e);if(Xc(t))return e}function $f(e,t){if(e==="change")return t}var Nu=!1;if(wt){var Ps;if(wt){var Ts="oninput"in document;if(!Ts){var Cl=document.createElement("div");Cl.setAttribute("oninput","return;"),Ts=typeof Cl.oninput=="function"}Ps=Ts}else Ps=!1;Nu=Ps&&(!document.documentMode||9<document.documentMode)}function Nl(){pn&&(pn.detachEvent("onpropertychange",Eu),Sn=pn=null)}function Eu(e){if(e.propertyName==="value"&&ns(Sn)){var t=[];Cu(t,Sn,e,pa(e)),ou(Bf,t)}}function Vf(e,t,r){e==="focusin"?(Nl(),pn=t,Sn=r,pn.attachEvent("onpropertychange",Eu)):e==="focusout"&&Nl()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ns(Sn)}function Hf(e,t){if(e==="click")return ns(t)}function Wf(e,t){if(e==="input"||e==="change")return ns(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Qf;function Cn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Gs.call(t,i)||!it(e[i],t[i]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _l(e,t){var r=El(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=El(r)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Si(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kf(e){var t=zu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_u(r.ownerDocument.documentElement,r)){if(n!==null&&ja(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=_l(r,o);var a=_l(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=wt&&"documentMode"in document&&11>=document.documentMode,yr=null,vo=null,fn=null,yo=!1;function zl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yo||yr==null||yr!==Si(n)||(n=yr,"selectionStart"in n&&ja(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fn&&Cn(fn,n)||(fn=n,n=Ti(vo,"onSelect"),0<n.length&&(t=new ya("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=yr)))}function Xn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xr={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionend:Xn("Transition","TransitionEnd")},As={},Pu={};wt&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function is(e){if(As[e])return As[e];if(!xr[e])return e;var t=xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Pu)return As[e]=t[r];return e}var Tu=is("animationend"),Au=is("animationiteration"),Ru=is("animationstart"),Mu=is("transitionend"),Lu=new Map,Pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Lu.set(e,t),cr(t,[e])}for(var Rs=0;Rs<Pl.length;Rs++){var Ms=Pl[Rs],Yf=Ms.toLowerCase(),Gf=Ms[0].toUpperCase()+Ms.slice(1);Ht(Yf,"on"+Gf)}Ht(Tu,"onAnimationEnd");Ht(Au,"onAnimationIteration");Ht(Ru,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Mu,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var an="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(an));function Tl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Xp(n,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Tl(i,l,u),o=c}else for(a=0;a<n.length;a++){if(l=n[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Tl(i,l,u),o=c}}}if(Ni)throw e=fo,Ni=!1,fo=null,e}function Z(e,t){var r=t[bo];r===void 0&&(r=t[bo]=new Set);var n=e+"__bubble";r.has(n)||(Iu(t,e,2,!1),r.add(n))}function Ls(e,t,r){var n=0;t&&(n|=4),Iu(r,e,n,t)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function Nn(e){if(!e[Yn]){e[Yn]=!0,Uc.forEach(function(r){r!=="selectionchange"&&(Jf.has(r)||Ls(r,!1,e),Ls(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yn]||(t[Yn]=!0,Ls("selectionchange",!1,t))}}function Iu(e,t,r,n){switch(ku(t)){case 1:var i=pf;break;case 4:i=ff;break;default:i=ga}r=i.bind(null,t,r,e),i=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Os(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Jt(l),a===null)return;if(c=a.tag,c===5||c===6){n=o=a;continue e}l=l.parentNode}}n=n.return}ou(function(){var u=o,y=pa(r),g=[];e:{var h=Lu.get(e);if(h!==void 0){var x=ya,v=e;switch(e){case"keypress":if(ui(r)===0)break e;case"keydown":case"keyup":x=_f;break;case"focusin":v="focus",x=zs;break;case"focusout":v="blur",x=zs;break;case"beforeblur":case"afterblur":x=zs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Tf;break;case Tu:case Au:case Ru:x=xf;break;case Mu:x=Rf;break;case"scroll":x=hf;break;case"wheel":x=Lf;break;case"copy":case"cut":case"paste":x=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=jl}var b=(t&4)!==0,C=!b&&e==="scroll",f=b?h!==null?h+"Capture":null:h;b=[];for(var d=u,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=kn(d,f),w!=null&&b.push(En(d,w,p)))),C)break;d=d.return}0<b.length&&(h=new x(h,v,null,r,y),g.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&r!==co&&(v=r.relatedTarget||r.fromElement)&&(Jt(v)||v[bt]))break e;if((x||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=u,v=v?Jt(v):null,v!==null&&(C=ur(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(b=xl,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=jl,w="onPointerLeave",f="onPointerEnter",d="pointer"),C=x==null?h:kr(x),p=v==null?h:kr(v),h=new b(w,d+"leave",x,r,y),h.target=C,h.relatedTarget=p,w=null,Jt(y)===u&&(b=new b(f,d+"enter",v,r,y),b.target=p,b.relatedTarget=C,w=b),C=w,x&&v)t:{for(b=x,f=v,d=0,p=b;p;p=fr(p))d++;for(p=0,w=f;w;w=fr(w))p++;for(;0<d-p;)b=fr(b),d--;for(;0<p-d;)f=fr(f),p--;for(;d--;){if(b===f||f!==null&&b===f.alternate)break t;b=fr(b),f=fr(f)}b=null}else b=null;x!==null&&Al(g,h,x,b,!1),v!==null&&C!==null&&Al(g,C,v,b,!0)}}e:{if(h=u?kr(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var z=$f;else if(Sl(h))if(Nu)z=Wf;else{z=Uf;var P=Vf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=Hf);if(z&&(z=z(e,u))){Cu(g,z,r,y);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&io(h,"number",h.value)}switch(P=u?kr(u):window,e){case"focusin":(Sl(P)||P.contentEditable==="true")&&(yr=P,vo=u,fn=null);break;case"focusout":fn=vo=yr=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,zl(g,r,y);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":zl(g,r,y)}var M;if(ka)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else vr?bu(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(wu&&r.locale!=="ko"&&(vr||j!=="onCompositionStart"?j==="onCompositionEnd"&&vr&&(M=ju()):(At=y,va="value"in At?At.value:At.textContent,vr=!0)),P=Ti(u,j),0<P.length&&(j=new kl(j,e,null,r,y),g.push({event:j,listeners:P}),M?j.data=M:(M=Su(r),M!==null&&(j.data=M)))),(M=If?Df(e,r):Ff(e,r))&&(u=Ti(u,"onBeforeInput"),0<u.length&&(y=new kl("onBeforeInput","beforeinput",null,r,y),g.push({event:y,listeners:u}),y.data=M))}Ou(g,t)})}function En(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ti(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kn(e,r),o!=null&&n.unshift(En(e,o,i)),o=kn(e,t),o!=null&&n.push(En(e,o,i))),e=e.return}return n}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Al(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=kn(r,o),c!=null&&a.unshift(En(r,c,l))):i||(c=kn(r,o),c!=null&&a.push(En(r,c,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Zf=/\r\n?/g,eh=/\u0000|\uFFFD/g;function Rl(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(eh,"")}function Gn(e,t,r){if(t=Rl(t),Rl(e)!==t&&r)throw Error(E(425))}function Ai(){}var xo=null,ko=null;function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Ml=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ml<"u"?function(e){return Ml.resolve(null).then(e).catch(nh)}:wo;function nh(e){setTimeout(function(){throw e})}function Is(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),bn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);bn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),ut="__reactFiber$"+Ur,_n="__reactProps$"+Ur,bt="__reactContainer$"+Ur,bo="__reactEvents$"+Ur,ih="__reactListeners$"+Ur,sh="__reactHandles$"+Ur;function Jt(e){var t=e[ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[bt]||r[ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ll(e);e!==null;){if(r=e[ut])return r;e=Ll(e)}return t}e=r,r=e.parentNode}return null}function Fn(e){return e=e[ut]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ss(e){return e[_n]||null}var So=[],jr=-1;function Wt(e){return{current:e}}function ee(e){0>jr||(e.current=So[jr],So[jr]=null,jr--)}function J(e,t){jr++,So[jr]=e.current,e.current=t}var Ut={},be=Wt(Ut),Ae=Wt(!1),ir=Ut;function Mr(e,t){var r=e.type.contextTypes;if(!r)return Ut;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Ri(){ee(Ae),ee(be)}function Ol(e,t,r){if(be.current!==Ut)throw Error(E(168));J(be,t),J(Ae,r)}function Du(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,$p(e)||"Unknown",i));return se({},r,n)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,ir=be.current,J(be,e),J(Ae,Ae.current),!0}function Il(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Du(e,t,ir),n.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(be),J(be,e)):ee(Ae),J(Ae,r)}var vt=null,os=!1,Ds=!1;function Fu(e){vt===null?vt=[e]:vt.push(e)}function oh(e){os=!0,Fu(e)}function Qt(){if(!Ds&&vt!==null){Ds=!0;var e=0,t=G;try{var r=vt;for(G=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vt=null,os=!1}catch(i){throw vt!==null&&(vt=vt.slice(e+1)),uu(fa,Qt),i}finally{G=t,Ds=!1}}return null}var wr=[],br=0,Li=null,Oi=0,Ve=[],Ue=0,sr=null,xt=1,kt="";function Yt(e,t){wr[br++]=Oi,wr[br++]=Li,Li=e,Oi=t}function qu(e,t,r){Ve[Ue++]=xt,Ve[Ue++]=kt,Ve[Ue++]=sr,sr=e;var n=xt;e=kt;var i=32-rt(n)-1;n&=~(1<<i),r+=1;var o=32-rt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,xt=1<<32-rt(t)+i|r<<i|n,kt=o+e}else xt=1<<o|r<<i|n,kt=e}function wa(e){e.return!==null&&(Yt(e,1),qu(e,1,0))}function ba(e){for(;e===Li;)Li=wr[--br],wr[br]=null,Oi=wr[--br],wr[br]=null;for(;e===sr;)sr=Ve[--Ue],Ve[Ue]=null,kt=Ve[--Ue],Ve[Ue]=null,xt=Ve[--Ue],Ve[Ue]=null}var Fe=null,De=null,re=!1,tt=null;function Bu(e,t){var r=Qe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Dl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,De=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=sr!==null?{id:xt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Qe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Fe=e,De=null,!0):!1;default:return!1}}function Co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(re){var t=De;if(t){var r=t;if(!Dl(e,t)){if(Co(e))throw Error(E(418));t=It(r.nextSibling);var n=Fe;t&&Dl(e,t)?Bu(n,r):(e.flags=e.flags&-4097|2,re=!1,Fe=e)}}else{if(Co(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,Fe=e}}}function Fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Jn(e){if(e!==Fe)return!1;if(!re)return Fl(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jo(e.type,e.memoizedProps)),t&&(t=De)){if(Co(e))throw $u(),Error(E(418));for(;t;)Bu(e,t),t=It(t.nextSibling)}if(Fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){De=It(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}De=null}}else De=Fe?It(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=De;e;)e=It(e.nextSibling)}function Lr(){De=Fe=null,re=!1}function Sa(e){tt===null?tt=[e]:tt.push(e)}var ah=Nt.ReactCurrentBatchConfig;function Zr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Zn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ql(e){var t=e._init;return t(e._payload)}function Vu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Bt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,w){return d===null||d.tag!==6?(d=Hs(p,f.mode,w),d.return=f,d):(d=i(d,p),d.return=f,d)}function c(f,d,p,w){var z=p.type;return z===gr?y(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===_t&&ql(z)===d.type)?(w=i(d,p.props),w.ref=Zr(f,d,p),w.return=f,w):(w=vi(p.type,p.key,p.props,null,f.mode,w),w.ref=Zr(f,d,p),w.return=f,w)}function u(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ws(p,f.mode,w),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function y(f,d,p,w,z){return d===null||d.tag!==7?(d=rr(p,f.mode,w,z),d.return=f,d):(d=i(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hs(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $n:return p=vi(d.type,d.key,d.props,null,f.mode,p),p.ref=Zr(f,null,d),p.return=f,p;case mr:return d=Ws(d,f.mode,p),d.return=f,d;case _t:var w=d._init;return g(f,w(d._payload),p)}if(sn(d)||Kr(d))return d=rr(d,f.mode,p,null),d.return=f,d;Zn(f,d)}return null}function h(f,d,p,w){var z=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:l(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $n:return p.key===z?c(f,d,p,w):null;case mr:return p.key===z?u(f,d,p,w):null;case _t:return z=p._init,h(f,d,z(p._payload),w)}if(sn(p)||Kr(p))return z!==null?null:y(f,d,p,w,null);Zn(f,p)}return null}function x(f,d,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,l(d,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $n:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,z);case mr:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,z);case _t:var P=w._init;return x(f,d,p,P(w._payload),z)}if(sn(w)||Kr(w))return f=f.get(p)||null,y(d,f,w,z,null);Zn(d,w)}return null}function v(f,d,p,w){for(var z=null,P=null,M=d,j=d=0,F=null;M!==null&&j<p.length;j++){M.index>j?(F=M,M=null):F=M.sibling;var q=h(f,M,p[j],w);if(q===null){M===null&&(M=F);break}e&&M&&q.alternate===null&&t(f,M),d=o(q,d,j),P===null?z=q:P.sibling=q,P=q,M=F}if(j===p.length)return r(f,M),re&&Yt(f,j),z;if(M===null){for(;j<p.length;j++)M=g(f,p[j],w),M!==null&&(d=o(M,d,j),P===null?z=M:P.sibling=M,P=M);return re&&Yt(f,j),z}for(M=n(f,M);j<p.length;j++)F=x(M,f,j,p[j],w),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?j:F.key),d=o(F,d,j),P===null?z=F:P.sibling=F,P=F);return e&&M.forEach(function(A){return t(f,A)}),re&&Yt(f,j),z}function b(f,d,p,w){var z=Kr(p);if(typeof z!="function")throw Error(E(150));if(p=z.call(p),p==null)throw Error(E(151));for(var P=z=null,M=d,j=d=0,F=null,q=p.next();M!==null&&!q.done;j++,q=p.next()){M.index>j?(F=M,M=null):F=M.sibling;var A=h(f,M,q.value,w);if(A===null){M===null&&(M=F);break}e&&M&&A.alternate===null&&t(f,M),d=o(A,d,j),P===null?z=A:P.sibling=A,P=A,M=F}if(q.done)return r(f,M),re&&Yt(f,j),z;if(M===null){for(;!q.done;j++,q=p.next())q=g(f,q.value,w),q!==null&&(d=o(q,d,j),P===null?z=q:P.sibling=q,P=q);return re&&Yt(f,j),z}for(M=n(f,M);!q.done;j++,q=p.next())q=x(M,f,j,q.value,w),q!==null&&(e&&q.alternate!==null&&M.delete(q.key===null?j:q.key),d=o(q,d,j),P===null?z=q:P.sibling=q,P=q);return e&&M.forEach(function(W){return t(f,W)}),re&&Yt(f,j),z}function C(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===gr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $n:e:{for(var z=p.key,P=d;P!==null;){if(P.key===z){if(z=p.type,z===gr){if(P.tag===7){r(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===_t&&ql(z)===P.type){r(f,P.sibling),d=i(P,p.props),d.ref=Zr(f,P,p),d.return=f,f=d;break e}r(f,P);break}else t(f,P);P=P.sibling}p.type===gr?(d=rr(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=vi(p.type,p.key,p.props,null,f.mode,w),w.ref=Zr(f,d,p),w.return=f,f=w)}return a(f);case mr:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Ws(p,f.mode,w),d.return=f,f=d}return a(f);case _t:return P=p._init,C(f,d,P(p._payload),w)}if(sn(p))return v(f,d,p,w);if(Kr(p))return b(f,d,p,w);Zn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=i(d,p),d.return=f,f=d):(r(f,d),d=Hs(p,f.mode,w),d.return=f,f=d),a(f)):r(f,d)}return C}var Or=Vu(!0),Uu=Vu(!1),Ii=Wt(null),Di=null,Sr=null,Ca=null;function Na(){Ca=Sr=Di=null}function Ea(e){var t=Ii.current;ee(Ii),e._currentValue=t}function Eo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Tr(e,t){Di=e,Ca=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(Di===null)throw Error(E(308));Sr=e,Di.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Zt=null;function _a(e){Zt===null?Zt=[e]:Zt.push(e)}function Hu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,_a(t)):(r.next=i.next,i.next=r),t.interleaved=r,St(e,n)}function St(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zt=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,K&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,St(e,r)}return i=n.interleaved,i===null?(t.next=t,_a(n)):(t.next=i.next,i.next=t),n.interleaved=t,St(e,r)}function di(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ha(e,r)}}function Bl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Fi(e,t,r,n){var i=e.updateQueue;zt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==a&&(l===null?y.firstBaseUpdate=u:l.next=u,y.lastBaseUpdate=c))}if(o!==null){var g=i.baseState;a=0,y=u=c=null,l=o;do{var h=l.lane,x=l.eventTime;if((n&h)===h){y!==null&&(y=y.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(h=t,x=r,b.tag){case 1:if(v=b.payload,typeof v=="function"){g=v.call(x,g,h);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,h=typeof v=="function"?v.call(x,g,h):v,h==null)break e;g=se({},g,h);break e;case 2:zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(u=y=x,c=g):y=y.next=x,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(c=g),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=a,e.lanes=a,e.memoizedState=g}}function $l(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var qn={},pt=Wt(qn),zn=Wt(qn),Pn=Wt(qn);function er(e){if(e===qn)throw Error(E(174));return e}function Pa(e,t){switch(J(Pn,t),J(zn,e),J(pt,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oo(t,e)}ee(pt),J(pt,t)}function Ir(){ee(pt),ee(zn),ee(Pn)}function Qu(e){er(Pn.current);var t=er(pt.current),r=oo(t,e.type);t!==r&&(J(zn,e),J(pt,r))}function Ta(e){zn.current===e&&(ee(pt),ee(zn))}var ne=Wt(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=[];function Aa(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var pi=Nt.ReactCurrentDispatcher,qs=Nt.ReactCurrentBatchConfig,or=0,ie=null,de=null,he=null,Bi=!1,hn=!1,Tn=0,lh=0;function ke(){throw Error(E(321))}function Ra(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!it(e[r],t[r]))return!1;return!0}function Ma(e,t,r,n,i,o){if(or=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pi.current=e===null||e.memoizedState===null?ph:fh,e=r(n,i),hn){o=0;do{if(hn=!1,Tn=0,25<=o)throw Error(E(301));o+=1,he=de=null,t.updateQueue=null,pi.current=hh,e=r(n,i)}while(hn)}if(pi.current=$i,t=de!==null&&de.next!==null,or=0,he=de=ie=null,Bi=!1,t)throw Error(E(300));return e}function La(){var e=Tn!==0;return Tn=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ie.memoizedState=he=e:he=he.next=e,he}function Ye(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ie.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(E(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ie.memoizedState=he=e:he=he.next=e}return he}function An(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=Ye(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=de,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,c=null,u=o;do{var y=u.lane;if((or&y)===y)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var g={lane:y,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=g,a=n):c=c.next=g,ie.lanes|=y,ar|=y}u=u.next}while(u!==null&&u!==o);c===null?a=n:c.next=l,it(n,t.memoizedState)||(Te=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $s(e){var t=Ye(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);it(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ku(){}function Xu(e,t){var r=ie,n=Ye(),i=t(),o=!it(n.memoizedState,i);if(o&&(n.memoizedState=i,Te=!0),n=n.queue,Oa(Ju.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(r.flags|=2048,Rn(9,Gu.bind(null,r,n,i,t),void 0,null),me===null)throw Error(E(349));or&30||Yu(r,t,i)}return i}function Yu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Gu(e,t,r,n){t.value=r,t.getSnapshot=n,Zu(t)&&ed(e)}function Ju(e,t,r){return r(function(){Zu(t)&&ed(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!it(e,r)}catch{return!0}}function ed(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Vl(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t.queue=e,e=e.dispatch=dh.bind(null,ie,e),[t.memoizedState,e]}function Rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function td(){return Ye().memoizedState}function fi(e,t,r,n){var i=ct();ie.flags|=e,i.memoizedState=Rn(1|t,r,void 0,n===void 0?null:n)}function as(e,t,r,n){var i=Ye();n=n===void 0?null:n;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,n!==null&&Ra(n,a.deps)){i.memoizedState=Rn(t,r,o,n);return}}ie.flags|=e,i.memoizedState=Rn(1|t,r,o,n)}function Ul(e,t){return fi(8390656,8,e,t)}function Oa(e,t){return as(2048,8,e,t)}function rd(e,t){return as(4,2,e,t)}function nd(e,t){return as(4,4,e,t)}function id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,r){return r=r!=null?r.concat([e]):null,as(4,4,id.bind(null,t,e),r)}function Ia(){}function od(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ra(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ad(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ra(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ld(e,t,r){return or&21?(it(r,t)||(r=fu(),ie.lanes|=r,ar|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=r)}function ch(e,t){var r=G;G=r!==0&&4>r?r:4,e(!0);var n=qs.transition;qs.transition={};try{e(!1),t()}finally{G=r,qs.transition=n}}function cd(){return Ye().memoizedState}function uh(e,t,r){var n=qt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ud(e))dd(t,r);else if(r=Hu(e,t,r,n),r!==null){var i=Ne();nt(r,e,n,i),pd(r,t,n)}}function dh(e,t,r){var n=qt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ud(e))dd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,it(l,a)){var c=t.interleaved;c===null?(i.next=i,_a(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Hu(e,t,i,n),r!==null&&(i=Ne(),nt(r,e,n,i),pd(r,t,n))}}function ud(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function dd(e,t){hn=Bi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function pd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ha(e,r)}}var $i={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},ph={readContext:Xe,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Ul,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,fi(4194308,4,id.bind(null,t,e),r)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var r=ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ct();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=uh.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Vl,useDebugValue:Ia,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Vl(!1),t=e[0];return e=ch.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ie,i=ct();if(re){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),me===null)throw Error(E(349));or&30||Yu(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Ul(Ju.bind(null,n,o,e),[e]),n.flags|=2048,Rn(9,Gu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=ct(),t=me.identifierPrefix;if(re){var r=kt,n=xt;r=(n&~(1<<32-rt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Tn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=lh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fh={readContext:Xe,useCallback:od,useContext:Xe,useEffect:Oa,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:nd,useMemo:ad,useReducer:Bs,useRef:td,useState:function(){return Bs(An)},useDebugValue:Ia,useDeferredValue:function(e){var t=Ye();return ld(t,de.memoizedState,e)},useTransition:function(){var e=Bs(An)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Xu,useId:cd,unstable_isNewReconciler:!1},hh={readContext:Xe,useCallback:od,useContext:Xe,useEffect:Oa,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:nd,useMemo:ad,useReducer:$s,useRef:td,useState:function(){return $s(An)},useDebugValue:Ia,useDeferredValue:function(e){var t=Ye();return de===null?t.memoizedState=e:ld(t,de.memoizedState,e)},useTransition:function(){var e=$s(An)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Xu,useId:cd,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _o(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ls={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),i=qt(e),o=jt(n,i);o.payload=t,r!=null&&(o.callback=r),t=Dt(e,o,i),t!==null&&(nt(t,e,i,n),di(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),i=qt(e),o=jt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Dt(e,o,i),t!==null&&(nt(t,e,i,n),di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=qt(e),i=jt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,n),t!==null&&(nt(t,e,n,r),di(t,e,n))}};function Hl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Cn(r,n)||!Cn(i,o):!0}function fd(e,t,r){var n=!1,i=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(i=Re(t)?ir:be.current,n=t.contextTypes,o=(n=n!=null)?Mr(e,i):Ut),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function zo(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},za(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xe(o):(o=Re(t)?ir:be.current,i.context=Mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_o(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ls.enqueueReplaceState(i,i.state,null),Fi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var r="",n=t;do r+=Bp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function hd(e,t,r){r=jt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ui||(Ui=!0,qo=n),Po(e,t)},r}function md(e,t,r){r=jt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Po(e,t),typeof n!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Ql(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new mh;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=zh.bind(null,e,t,r),t.then(e,e))}function Kl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=jt(-1,1),t.tag=2,Dt(r,t,1))),r.lanes|=1),e)}var gh=Nt.ReactCurrentOwner,Te=!1;function Ce(e,t,r,n){t.child=e===null?Uu(t,null,r,n):Or(t,e.child,r,n)}function Yl(e,t,r,n,i){r=r.render;var o=t.ref;return Tr(t,i),n=Ma(e,t,r,n,o,i),r=La(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(re&&r&&wa(t),t.flags|=1,Ce(e,t,n,i),t.child)}function Gl(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Ha(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,gd(e,t,o,n,i)):(e=vi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Cn,r(a,n)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Bt(o,n),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Cn(o,n)&&e.ref===t.ref)if(Te=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return To(e,t,r,n,i)}function vd(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Nr,Ie),Ie|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Nr,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,J(Nr,Ie),Ie|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,J(Nr,Ie),Ie|=n;return Ce(e,t,i,r),t.child}function yd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,r,n,i){var o=Re(r)?ir:be.current;return o=Mr(t,o),Tr(t,i),r=Ma(e,t,r,n,o,i),n=La(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(re&&n&&wa(t),t.flags|=1,Ce(e,t,r,i),t.child)}function Jl(e,t,r,n,i){if(Re(r)){var o=!0;Mi(t)}else o=!1;if(Tr(t,i),t.stateNode===null)hi(e,t),fd(t,r,n),zo(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Re(r)?ir:be.current,u=Mr(t,u));var y=r.getDerivedStateFromProps,g=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Wl(t,a,n,u),zt=!1;var h=t.memoizedState;a.state=h,Fi(t,n,a,i),c=t.memoizedState,l!==n||h!==c||Ae.current||zt?(typeof y=="function"&&(_o(t,r,y,n),c=t.memoizedState),(l=zt||Hl(t,r,l,n,h,c,u))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Wu(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Je(t.type,l),a.props=u,g=t.pendingProps,h=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Xe(c):(c=Re(r)?ir:be.current,c=Mr(t,c));var x=r.getDerivedStateFromProps;(y=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==c)&&Wl(t,a,n,c),zt=!1,h=t.memoizedState,a.state=h,Fi(t,n,a,i);var v=t.memoizedState;l!==g||h!==v||Ae.current||zt?(typeof x=="function"&&(_o(t,r,x,n),v=t.memoizedState),(u=zt||Hl(t,r,u,n,h,v,c)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Ao(e,t,r,n,o,i)}function Ao(e,t,r,n,i,o){yd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Il(t,r,!1),Ct(e,t,o);n=t.stateNode,gh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):Ce(e,t,l,o),t.memoizedState=n.state,i&&Il(t,r,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?Ol(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ol(e,t.context,!1),Pa(e,t.containerInfo)}function Zl(e,t,r,n,i){return Lr(),Sa(i),t.flags|=256,Ce(e,t,r,n),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,r){var n=t.pendingProps,i=ne.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(ne,i&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ds(a,n,0,null),e=rr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mo(r),t.memoizedState=Ro,e):Da(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vh(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Bt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bt(l,o):(o=rr(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Mo(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Ro,n}return o=e.child,e=o.sibling,n=Bt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Da(e,t){return t=ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ei(e,t,r,n){return n!==null&&Sa(n),Or(t,e.child,null,r),e=Da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vh(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Vs(Error(E(422))),ei(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=ds({mode:"visible",children:n.children},i,0,null),o=rr(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Or(t,e.child,null,a),t.child.memoizedState=Mo(a),t.memoizedState=Ro,o);if(!(t.mode&1))return ei(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(E(419)),n=Vs(o,n,void 0),ei(e,t,a,n)}if(l=(a&e.childLanes)!==0,Te||l){if(n=me,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),nt(n,e,i,-1))}return Ua(),n=Vs(Error(E(421))),ei(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ph.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=It(i.nextSibling),Fe=t,re=!0,tt=null,e!==null&&(Ve[Ue++]=xt,Ve[Ue++]=kt,Ve[Ue++]=sr,xt=e.id,kt=e.overflow,sr=t),t=Da(t,n.children),t.flags|=4096,t)}function ec(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Eo(e.return,t,r)}function Us(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function jd(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Ce(e,t,n.children,r),n=ne.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,r,t);else if(e.tag===19)ec(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(ne,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&qi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Us(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Us(t,!0,r,null,o);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Bt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function yh(e,t,r){switch(t.tag){case 3:xd(t),Lr();break;case 5:Qu(t);break;case 1:Re(t.type)&&Mi(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;J(Ii,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):r&t.child.childLanes?kd(e,t,r):(J(ne,ne.current&1),e=Ct(e,t,r),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return jd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ne,ne.current),n)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,r)}return Ct(e,t,r)}var wd,Lo,bd,Sd;wd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Lo=function(){};bd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,er(pt.current);var o=null;switch(r){case"input":i=ro(e,i),n=ro(e,n),o=[];break;case"select":i=se({},i,{value:void 0}),n=se({},n,{value:void 0}),o=[];break;case"textarea":i=so(e,i),n=so(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ai)}ao(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sd=function(e,t,r,n){r!==n&&(t.flags|=4)};function en(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function xh(e,t,r){var n=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Re(t.type)&&Ri(),je(t),null;case 3:return n=t.stateNode,Ir(),ee(Ae),ee(be),Aa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Vo(tt),tt=null))),Lo(e,t),je(t),null;case 5:Ta(t);var i=er(Pn.current);if(r=t.type,e!==null&&t.stateNode!=null)bd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return je(t),null}if(e=er(pt.current),Jn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ut]=t,n[_n]=o,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(i=0;i<an.length;i++)Z(an[i],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":cl(n,o),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Z("invalid",n);break;case"textarea":dl(n,o),Z("invalid",n)}ao(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Gn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Gn(n.textContent,l,e),i=["children",""+l]):yn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",n)}switch(r){case"input":Vn(n),ul(n,o,!0);break;case"textarea":Vn(n),pl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ai)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[ut]=t,e[_n]=n,wd(e,t,!1,!1),t.stateNode=e;e:{switch(a=lo(r,n),r){case"dialog":Z("cancel",e),Z("close",e),i=n;break;case"iframe":case"object":case"embed":Z("load",e),i=n;break;case"video":case"audio":for(i=0;i<an.length;i++)Z(an[i],e);i=n;break;case"source":Z("error",e),i=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=n;break;case"details":Z("toggle",e),i=n;break;case"input":cl(e,n),i=ro(e,n),Z("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":dl(e,n),i=so(e,n),Z("invalid",e);break;default:i=n}ao(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?tu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zc(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&xn(e,c):typeof c=="number"&&xn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&la(e,o,c,a))}switch(r){case"input":Vn(e),ul(e,n,!1);break;case"textarea":Vn(e),pl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Vt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Er(e,!!n.multiple,o,!1):n.defaultValue!=null&&Er(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=er(Pn.current),er(pt.current),Jn(t)){if(n=t.stateNode,r=t.memoizedProps,n[ut]=t,(o=n.nodeValue!==r)&&(e=Fe,e!==null))switch(e.tag){case 3:Gn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ut]=t,t.stateNode=n}return je(t),null;case 13:if(ee(ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&De!==null&&t.mode&1&&!(t.flags&128))$u(),Lr(),t.flags|=98560,o=!1;else if(o=Jn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ut]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else tt!==null&&(Vo(tt),tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?pe===0&&(pe=3):Ua())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Ir(),Lo(e,t),e===null&&Nn(t.stateNode.containerInfo),je(t),null;case 10:return Ea(t.type._context),je(t),null;case 17:return Re(t.type)&&Ri(),je(t),null;case 19:if(ee(ne),o=t.memoizedState,o===null)return je(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)en(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qi(e),a!==null){for(t.flags|=128,en(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Fr&&(t.flags|=128,n=!0,en(o,!1),t.lanes=4194304)}else{if(!n)if(e=qi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),en(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!re)return je(t),null}else 2*ae()-o.renderingStartTime>Fr&&r!==1073741824&&(t.flags|=128,n=!0,en(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,r=ne.current,J(ne,n?r&1|2:r&1),t):(je(t),null);case 22:case 23:return Va(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ie&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function kh(e,t){switch(ba(t),t.tag){case 1:return Re(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),ee(Ae),ee(be),Aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return Ir(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var ti=!1,we=!1,jh=typeof WeakSet=="function"?WeakSet:Set,I=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){oe(e,t,n)}else r.current=null}function Oo(e,t,r){try{r()}catch(n){oe(e,t,n)}}var tc=!1;function wh(e,t){if(xo=zi,e=zu(),ja(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,c=-1,u=0,y=0,g=e,h=null;t:for(;;){for(var x;g!==r||i!==0&&g.nodeType!==3||(l=a+i),g!==o||n!==0&&g.nodeType!==3||(c=a+n),g.nodeType===3&&(a+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===r&&++u===i&&(l=a),h===o&&++y===n&&(c=a),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ko={focusedElem:e,selectionRange:r},zi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,C=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Je(t.type,b),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=tc,tc=!1,v}function mn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Oo(t,r,o)}i=i.next}while(i!==n)}}function cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Io(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[_n],delete t[bo],delete t[ih],delete t[sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nd(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ai));else if(n!==4&&(e=e.child,e!==null))for(Do(e,t,r),e=e.sibling;e!==null;)Do(e,t,r),e=e.sibling}function Fo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Fo(e,t,r),e=e.sibling;e!==null;)Fo(e,t,r),e=e.sibling}var ve=null,Ze=!1;function Et(e,t,r){for(r=r.child;r!==null;)Ed(e,t,r),r=r.sibling}function Ed(e,t,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ts,r)}catch{}switch(r.tag){case 5:we||Cr(r,t);case 6:var n=ve,i=Ze;ve=null,Et(e,t,r),ve=n,Ze=i,ve!==null&&(Ze?(e=ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ve.removeChild(r.stateNode));break;case 18:ve!==null&&(Ze?(e=ve,r=r.stateNode,e.nodeType===8?Is(e.parentNode,r):e.nodeType===1&&Is(e,r),bn(e)):Is(ve,r.stateNode));break;case 4:n=ve,i=Ze,ve=r.stateNode.containerInfo,Ze=!0,Et(e,t,r),ve=n,Ze=i;break;case 0:case 11:case 14:case 15:if(!we&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Oo(r,t,a),i=i.next}while(i!==n)}Et(e,t,r);break;case 1:if(!we&&(Cr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){oe(r,t,l)}Et(e,t,r);break;case 21:Et(e,t,r);break;case 22:r.mode&1?(we=(n=we)||r.memoizedState!==null,Et(e,t,r),we=n):Et(e,t,r);break;default:Et(e,t,r)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new jh),t.forEach(function(n){var i=Th.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ge(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,Ze=!1;break e;case 3:ve=l.stateNode.containerInfo,Ze=!0;break e;case 4:ve=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(ve===null)throw Error(E(160));Ed(o,a,i),ve=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),lt(e),n&4){try{mn(3,e,e.return),cs(3,e)}catch(b){oe(e,e.return,b)}try{mn(5,e,e.return)}catch(b){oe(e,e.return,b)}}break;case 1:Ge(t,e),lt(e),n&512&&r!==null&&Cr(r,r.return);break;case 5:if(Ge(t,e),lt(e),n&512&&r!==null&&Cr(r,r.return),e.flags&32){var i=e.stateNode;try{xn(i,"")}catch(b){oe(e,e.return,b)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Yc(i,o),lo(l,a);var u=lo(l,o);for(a=0;a<c.length;a+=2){var y=c[a],g=c[a+1];y==="style"?tu(i,g):y==="dangerouslySetInnerHTML"?Zc(i,g):y==="children"?xn(i,g):la(i,y,g,u)}switch(l){case"input":no(i,o);break;case"textarea":Gc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Er(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[_n]=o}catch(b){oe(e,e.return,b)}}break;case 6:if(Ge(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){oe(e,e.return,b)}}break;case 3:if(Ge(t,e),lt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(b){oe(e,e.return,b)}break;case 4:Ge(t,e),lt(e);break;case 13:Ge(t,e),lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ba=ae())),n&4&&nc(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(we=(u=we)||y,Ge(t,e),we=u):Ge(t,e),lt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!y&&e.mode&1)for(I=e,y=e.child;y!==null;){for(g=I=y;I!==null;){switch(h=I,x=h.child,h.tag){case 0:case 11:case 14:case 15:mn(4,h,h.return);break;case 1:Cr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){oe(n,r,b)}}break;case 5:Cr(h,h.return);break;case 22:if(h.memoizedState!==null){sc(g);continue}}x!==null?(x.return=h,I=x):sc(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=eu("display",a))}catch(b){oe(e,e.return,b)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(b){oe(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ge(t,e),lt(e),n&4&&nc(e);break;case 21:break;default:Ge(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Nd(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(xn(i,""),n.flags&=-33);var o=rc(e);Fo(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=rc(e);Do(e,l,a);break;default:throw Error(E(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bh(e,t,r){I=e,zd(e)}function zd(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||ti;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||we;l=ti;var u=we;if(ti=a,(we=c)&&!u)for(I=i;I!==null;)a=I,c=a.child,a.tag===22&&a.memoizedState!==null?oc(i):c!==null?(c.return=a,I=c):oc(i);for(;o!==null;)I=o,zd(o),o=o.sibling;I=i,ti=l,we=u}ic(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):ic(e)}}function ic(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||cs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!we)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Je(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$l(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$l(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var y=u.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&bn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}we||t.flags&512&&Io(t)}catch(h){oe(t,t.return,h)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function sc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function oc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{cs(4,t)}catch(c){oe(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){oe(t,i,c)}}var o=t.return;try{Io(t)}catch(c){oe(t,o,c)}break;case 5:var a=t.return;try{Io(t)}catch(c){oe(t,a,c)}}}catch(c){oe(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Sh=Math.ceil,Vi=Nt.ReactCurrentDispatcher,Fa=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,K=0,me=null,ce=null,ye=0,Ie=0,Nr=Wt(0),pe=0,Mn=null,ar=0,us=0,qa=0,gn=null,Pe=null,Ba=0,Fr=1/0,gt=null,Ui=!1,qo=null,Ft=null,ri=!1,Rt=null,Hi=0,vn=0,Bo=null,mi=-1,gi=0;function Ne(){return K&6?ae():mi!==-1?mi:mi=ae()}function qt(e){return e.mode&1?K&2&&ye!==0?ye&-ye:ah.transition!==null?(gi===0&&(gi=fu()),gi):(e=G,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function nt(e,t,r,n){if(50<vn)throw vn=0,Bo=null,Error(E(185));In(e,r,n),(!(K&2)||e!==me)&&(e===me&&(!(K&2)&&(us|=r),pe===4&&Tt(e,ye)),Me(e,n),r===1&&K===0&&!(t.mode&1)&&(Fr=ae()+500,os&&Qt()))}function Me(e,t){var r=e.callbackNode;af(e,t);var n=_i(e,e===me?ye:0);if(n===0)r!==null&&ml(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ml(r),t===1)e.tag===0?oh(ac.bind(null,e)):Fu(ac.bind(null,e)),rh(function(){!(K&6)&&Qt()}),r=null;else{switch(hu(n)){case 1:r=fa;break;case 4:r=du;break;case 16:r=Ei;break;case 536870912:r=pu;break;default:r=Ei}r=Id(r,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Pd(e,t){if(mi=-1,gi=0,K&6)throw Error(E(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var n=_i(e,e===me?ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Wi(e,n);else{t=n;var i=K;K|=2;var o=Ad();(me!==e||ye!==t)&&(gt=null,Fr=ae()+500,tr(e,t));do try{Eh();break}catch(l){Td(e,l)}while(!0);Na(),Vi.current=o,K=i,ce!==null?t=0:(me=null,ye=0,t=pe)}if(t!==0){if(t===2&&(i=ho(e),i!==0&&(n=i,t=$o(e,i))),t===1)throw r=Mn,tr(e,0),Tt(e,n),Me(e,ae()),r;if(t===6)Tt(e,n);else{if(i=e.current.alternate,!(n&30)&&!Ch(i)&&(t=Wi(e,n),t===2&&(o=ho(e),o!==0&&(n=o,t=$o(e,o))),t===1))throw r=Mn,tr(e,0),Tt(e,n),Me(e,ae()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Gt(e,Pe,gt);break;case 3:if(Tt(e,n),(n&130023424)===n&&(t=Ba+500-ae(),10<t)){if(_i(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wo(Gt.bind(null,e,Pe,gt),t);break}Gt(e,Pe,gt);break;case 4:if(Tt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-rt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Sh(n/1960))-n,10<n){e.timeoutHandle=wo(Gt.bind(null,e,Pe,gt),n);break}Gt(e,Pe,gt);break;case 5:Gt(e,Pe,gt);break;default:throw Error(E(329))}}}return Me(e,ae()),e.callbackNode===r?Pd.bind(null,e):null}function $o(e,t){var r=gn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=Pe,Pe=r,t!==null&&Vo(t)),e}function Vo(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Ch(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~qa,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-rt(t),n=1<<r;e[r]=-1,t&=~n}}function ac(e){if(K&6)throw Error(E(327));Ar();var t=_i(e,0);if(!(t&1))return Me(e,ae()),null;var r=Wi(e,t);if(e.tag!==0&&r===2){var n=ho(e);n!==0&&(t=n,r=$o(e,n))}if(r===1)throw r=Mn,tr(e,0),Tt(e,t),Me(e,ae()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Pe,gt),Me(e,ae()),null}function $a(e,t){var r=K;K|=1;try{return e(t)}finally{K=r,K===0&&(Fr=ae()+500,os&&Qt())}}function lr(e){Rt!==null&&Rt.tag===0&&!(K&6)&&Ar();var t=K;K|=1;var r=Ke.transition,n=G;try{if(Ke.transition=null,G=1,e)return e()}finally{G=n,Ke.transition=r,K=t,!(K&6)&&Qt()}}function Va(){Ie=Nr.current,ee(Nr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,th(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(ba(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ri();break;case 3:Ir(),ee(Ae),ee(be),Aa();break;case 5:Ta(n);break;case 4:Ir();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:Ea(n.type._context);break;case 22:case 23:Va()}r=r.return}if(me=e,ce=e=Bt(e.current,null),ye=Ie=t,pe=0,Mn=null,qa=us=ar=0,Pe=gn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Zt=null}return e}function Td(e,t){do{var r=ce;try{if(Na(),pi.current=$i,Bi){for(var n=ie.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Bi=!1}if(or=0,he=de=ie=null,hn=!1,Tn=0,Fa.current=null,r===null||r.return===null){pe=1,Mn=t,ce=null;break}e:{var o=e,a=r.return,l=r,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,y=l,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Kl(a);if(x!==null){x.flags&=-257,Xl(x,a,l,o,t),x.mode&1&&Ql(o,u,t),t=x,c=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){Ql(o,u,t),Ua();break e}c=Error(E(426))}}else if(re&&l.mode&1){var C=Kl(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Xl(C,a,l,o,t),Sa(Dr(c,l));break e}}o=c=Dr(c,l),pe!==4&&(pe=2),gn===null?gn=[o]:gn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=hd(o,c,t);Bl(o,f);break e;case 1:l=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ft===null||!Ft.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=md(o,l,t);Bl(o,w);break e}}o=o.return}while(o!==null)}Md(r)}catch(z){t=z,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function Ad(){var e=Vi.current;return Vi.current=$i,e===null?$i:e}function Ua(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(ar&268435455)&&!(us&268435455)||Tt(me,ye)}function Wi(e,t){var r=K;K|=2;var n=Ad();(me!==e||ye!==t)&&(gt=null,tr(e,t));do try{Nh();break}catch(i){Td(e,i)}while(!0);if(Na(),K=r,Vi.current=n,ce!==null)throw Error(E(261));return me=null,ye=0,pe}function Nh(){for(;ce!==null;)Rd(ce)}function Eh(){for(;ce!==null&&!Gp();)Rd(ce)}function Rd(e){var t=Od(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Md(e):ce=t,Fa.current=null}function Md(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=kh(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(r=xh(r,t,Ie),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Gt(e,t,r){var n=G,i=Ke.transition;try{Ke.transition=null,G=1,_h(e,t,r,n)}finally{Ke.transition=i,G=n}return null}function _h(e,t,r,n){do Ar();while(Rt!==null);if(K&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(lf(e,o),e===me&&(ce=me=null,ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ri||(ri=!0,Id(Ei,function(){return Ar(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var a=G;G=1;var l=K;K|=4,Fa.current=null,wh(e,r),_d(r,e),Kf(ko),zi=!!xo,ko=xo=null,e.current=r,bh(r),Jp(),K=l,G=a,Ke.transition=o}else e.current=r;if(ri&&(ri=!1,Rt=e,Hi=i),o=e.pendingLanes,o===0&&(Ft=null),tf(r.stateNode),Me(e,ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ui)throw Ui=!1,e=qo,qo=null,e;return Hi&1&&e.tag!==0&&Ar(),o=e.pendingLanes,o&1?e===Bo?vn++:(vn=0,Bo=e):vn=0,Qt(),null}function Ar(){if(Rt!==null){var e=hu(Hi),t=Ke.transition,r=G;try{if(Ke.transition=null,G=16>e?16:e,Rt===null)var n=!1;else{if(e=Rt,Rt=null,Hi=0,K&6)throw Error(E(331));var i=K;for(K|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var y=I;switch(y.tag){case 0:case 11:case 15:mn(8,y,o)}var g=y.child;if(g!==null)g.return=y,I=g;else for(;I!==null;){y=I;var h=y.sibling,x=y.return;if(Cd(y),y===u){I=null;break}if(h!==null){h.return=x,I=h;break}I=x}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var d=e.current;for(I=d;I!==null;){a=I;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,I=p;else e:for(a=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cs(9,l)}}catch(z){oe(l,l.return,z)}if(l===a){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(K=i,Qt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ts,e)}catch{}n=!0}return n}finally{G=r,Ke.transition=t}}return!1}function lc(e,t,r){t=Dr(r,t),t=hd(e,t,1),e=Dt(e,t,1),t=Ne(),e!==null&&(In(e,1,t),Me(e,t))}function oe(e,t,r){if(e.tag===3)lc(e,e,r);else for(;t!==null;){if(t.tag===3){lc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ft===null||!Ft.has(n))){e=Dr(r,e),e=md(t,e,1),t=Dt(t,e,1),e=Ne(),t!==null&&(In(t,1,e),Me(t,e));break}}t=t.return}}function zh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(ye&r)===r&&(pe===4||pe===3&&(ye&130023424)===ye&&500>ae()-Ba?tr(e,0):qa|=r),Me(e,t)}function Ld(e,t){t===0&&(e.mode&1?(t=Wn,Wn<<=1,!(Wn&130023424)&&(Wn=4194304)):t=1);var r=Ne();e=St(e,t),e!==null&&(In(e,t,r),Me(e,r))}function Ph(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ld(e,r)}function Th(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Ld(e,r)}var Od;Od=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Te=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Te=!1,yh(e,t,r);Te=!!(e.flags&131072)}else Te=!1,re&&t.flags&1048576&&qu(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;hi(e,t),e=t.pendingProps;var i=Mr(t,be.current);Tr(t,r),i=Ma(null,t,n,e,i,r);var o=La();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(n)?(o=!0,Mi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,za(t),i.updater=ls,t.stateNode=i,i._reactInternals=t,zo(t,n,e,r),t=Ao(null,t,n,!0,o,r)):(t.tag=0,re&&o&&wa(t),Ce(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Rh(n),e=Je(n,e),i){case 0:t=To(null,t,n,e,r);break e;case 1:t=Jl(null,t,n,e,r);break e;case 11:t=Yl(null,t,n,e,r);break e;case 14:t=Gl(null,t,n,Je(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Je(n,i),To(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Je(n,i),Jl(e,t,n,i,r);case 3:e:{if(xd(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Wu(e,t),Fi(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(E(423)),t),t=Zl(e,t,n,r,i);break e}else if(n!==i){i=Dr(Error(E(424)),t),t=Zl(e,t,n,r,i);break e}else for(De=It(t.stateNode.containerInfo.firstChild),Fe=t,re=!0,tt=null,r=Uu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),n===i){t=Ct(e,t,r);break e}Ce(e,t,n,r)}t=t.child}return t;case 5:return Qu(t),e===null&&No(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,jo(n,i)?a=null:o!==null&&jo(n,o)&&(t.flags|=32),yd(e,t),Ce(e,t,a,r),t.child;case 6:return e===null&&No(t),null;case 13:return kd(e,t,r);case 4:return Pa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Or(t,null,n,r):Ce(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Je(n,i),Yl(e,t,n,i,r);case 7:return Ce(e,t,t.pendingProps,r),t.child;case 8:return Ce(e,t,t.pendingProps.children,r),t.child;case 12:return Ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,J(Ii,n._currentValue),n._currentValue=a,o!==null)if(it(o.value,a)){if(o.children===i.children&&!Ae.current){t=Ct(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=jt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var y=u.pending;y===null?c.next=c:(c.next=y.next,y.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Eo(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Eo(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ce(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Tr(t,r),i=Xe(i),n=n(i),t.flags|=1,Ce(e,t,n,r),t.child;case 14:return n=t.type,i=Je(n,t.pendingProps),i=Je(n.type,i),Gl(e,t,n,i,r);case 15:return gd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Je(n,i),hi(e,t),t.tag=1,Re(n)?(e=!0,Mi(t)):e=!1,Tr(t,r),fd(t,n,i),zo(t,n,i,r),Ao(null,t,n,!0,e,r);case 19:return jd(e,t,r);case 22:return vd(e,t,r)}throw Error(E(156,t.tag))};function Id(e,t){return uu(e,t)}function Ah(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,r,n){return new Ah(e,t,r,n)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rh(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===da)return 14}return 2}function Bt(e,t){var r=e.alternate;return r===null?(r=Qe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function vi(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Ha(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case gr:return rr(r.children,i,o,t);case ca:a=8,i|=8;break;case Js:return e=Qe(12,r,t,i|2),e.elementType=Js,e.lanes=o,e;case Zs:return e=Qe(13,r,t,i),e.elementType=Zs,e.lanes=o,e;case eo:return e=Qe(19,r,t,i),e.elementType=eo,e.lanes=o,e;case Qc:return ds(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hc:a=10;break e;case Wc:a=9;break e;case ua:a=11;break e;case da:a=14;break e;case _t:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Qe(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function rr(e,t,r,n){return e=Qe(7,e,n,t),e.lanes=r,e}function ds(e,t,r,n){return e=Qe(22,e,n,t),e.elementType=Qc,e.lanes=r,e.stateNode={isHidden:!1},e}function Hs(e,t,r){return e=Qe(6,e,null,t),e.lanes=r,e}function Ws(e,t,r){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wa(e,t,r,n,i,o,a,l,c){return e=new Mh(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(o),e}function Lh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Dd(e){if(!e)return Ut;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Re(r))return Du(e,r,t)}return t}function Fd(e,t,r,n,i,o,a,l,c){return e=Wa(r,n,!0,e,i,o,a,l,c),e.context=Dd(null),r=e.current,n=Ne(),i=qt(r),o=jt(n,i),o.callback=t??null,Dt(r,o,i),e.current.lanes=i,In(e,i,n),Me(e,n),e}function ps(e,t,r,n){var i=t.current,o=Ne(),a=qt(i);return r=Dd(r),t.context===null?t.context=r:t.pendingContext=r,t=jt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Dt(i,t,a),e!==null&&(nt(e,i,a,o),di(e,i,a)),a}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Qa(e,t){cc(e,t),(e=e.alternate)&&cc(e,t)}function Oh(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}fs.prototype.render=Ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ps(e,t,null,null)};fs.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){ps(null,e,null,null)}),t[bt]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=vu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pt.length&&t!==0&&t<Pt[r].priority;r++);Pt.splice(r,0,e),r===0&&xu(e)}};function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Ih(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Qi(a);o.call(u)}}var a=Fd(t,n,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[bt]=a.current,Nn(e.nodeType===8?e.parentNode:e),lr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Qi(c);l.call(u)}}var c=Wa(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=c,e[bt]=c.current,Nn(e.nodeType===8?e.parentNode:e),lr(function(){ps(t,c,r,n)}),c}function ms(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Qi(a);l.call(c)}}ps(t,a,e,i)}else a=Ih(r,t,e,i,n);return Qi(a)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=on(t.pendingLanes);r!==0&&(ha(t,r|1),Me(t,ae()),!(K&6)&&(Fr=ae()+500,Qt()))}break;case 13:lr(function(){var n=St(e,1);if(n!==null){var i=Ne();nt(n,e,1,i)}}),Qa(e,1)}};ma=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var r=Ne();nt(t,e,134217728,r)}Qa(e,134217728)}};gu=function(e){if(e.tag===13){var t=qt(e),r=St(e,t);if(r!==null){var n=Ne();nt(r,e,t,n)}Qa(e,t)}};vu=function(){return G};yu=function(e,t){var r=G;try{return G=e,t()}finally{G=r}};uo=function(e,t,r){switch(t){case"input":if(no(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ss(n);if(!i)throw Error(E(90));Xc(n),no(n,i)}}}break;case"textarea":Gc(e,r);break;case"select":t=r.value,t!=null&&Er(e,!!r.multiple,t,!1)}};iu=$a;su=lr;var Dh={usingClientEntryPoint:!1,Events:[Fn,kr,ss,ru,nu,$a]},tn={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fh={bundleType:tn.bundleType,version:tn.version,rendererPackageName:tn.rendererPackageName,rendererConfig:tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:tn.findFiberByHostInstance||Oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{ts=ni.inject(Fh),dt=ni}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;Be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(t))throw Error(E(200));return Lh(e,t,null,r)};Be.createRoot=function(e,t){if(!Xa(e))throw Error(E(299));var r=!1,n="",i=qd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wa(e,1,!1,null,null,r,!1,n,i),e[bt]=t.current,Nn(e.nodeType===8?e.parentNode:e),new Ka(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return lr(e)};Be.hydrate=function(e,t,r){if(!hs(t))throw Error(E(200));return ms(null,e,t,!0,r)};Be.hydrateRoot=function(e,t,r){if(!Xa(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=qd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Fd(t,null,e,1,r??null,i,!1,o,a),e[bt]=t.current,Nn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new fs(t)};Be.render=function(e,t,r){if(!hs(t))throw Error(E(200));return ms(null,e,t,!1,r)};Be.unmountComponentAtNode=function(e){if(!hs(e))throw Error(E(40));return e._reactRootContainer?(lr(function(){ms(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Be.unstable_batchedUpdates=$a;Be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!hs(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ms(e,t,r,!1,n)};Be.version="18.3.1-next-f1338f8080-20240426";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),Bc.exports=Be;var qh=Bc.exports,dc=qh;Ys.createRoot=dc.createRoot,Ys.hydrateRoot=dc.hydrateRoot;const ht=Object.create(null);ht.open="0";ht.close="1";ht.ping="2";ht.pong="3";ht.message="4";ht.upgrade="5";ht.noop="6";const yi=Object.create(null);Object.keys(ht).forEach(e=>{yi[ht[e]]=e});const Uo={type:"error",data:"parser error"},$d=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Vd=typeof ArrayBuffer=="function",Ud=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ya=({type:e,data:t},r,n)=>$d&&t instanceof Blob?r?n(t):pc(t,n):Vd&&(t instanceof ArrayBuffer||Ud(t))?r?n(t):pc(new Blob([t]),n):n(ht[e]+(t||"")),pc=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function fc(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Qs;function Bh(e,t){if($d&&e.data instanceof Blob)return e.data.arrayBuffer().then(fc).then(t);if(Vd&&(e.data instanceof ArrayBuffer||Ud(e.data)))return t(fc(e.data));Ya(e,!1,r=>{Qs||(Qs=new TextEncoder),t(Qs.encode(r))})}const hc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ln=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<hc.length;e++)ln[hc.charCodeAt(e)]=e;const $h=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),y=new Uint8Array(u);for(n=0;n<r;n+=4)o=ln[e.charCodeAt(n)],a=ln[e.charCodeAt(n+1)],l=ln[e.charCodeAt(n+2)],c=ln[e.charCodeAt(n+3)],y[i++]=o<<2|a>>4,y[i++]=(a&15)<<4|l>>2,y[i++]=(l&3)<<6|c&63;return u},Vh=typeof ArrayBuffer=="function",Ga=(e,t)=>{if(typeof e!="string")return{type:"message",data:Hd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Uh(e.substring(1),t)}:yi[r]?e.length>1?{type:yi[r],data:e.substring(1)}:{type:yi[r]}:Uo},Uh=(e,t)=>{if(Vh){const r=$h(e);return Hd(r,t)}else return{base64:!0,data:e}},Hd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Wd="",Hh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{Ya(o,!1,l=>{n[a]=l,++i===r&&t(n.join(Wd))})})},Wh=(e,t)=>{const r=e.split(Wd),n=[];for(let i=0;i<r.length;i++){const o=Ga(r[i],t);if(n.push(o),o.type==="error")break}return n};function Qh(){return new TransformStream({transform(e,t){Bh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let Ks;function ii(e){return e.reduce((t,r)=>t+r.length,0)}function si(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Kh(e,t){Ks||(Ks=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(ii(r)<1)break;const c=si(r,1);o=(c[0]&128)===128,i=c[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(ii(r)<2)break;const c=si(r,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(ii(r)<8)break;const c=si(r,8),u=new DataView(c.buffer,c.byteOffset,c.length),y=u.getUint32(0);if(y>Math.pow(2,21)-1){l.enqueue(Uo);break}i=y*Math.pow(2,32)+u.getUint32(4),n=3}else{if(ii(r)<i)break;const c=si(r,i);l.enqueue(Ga(o?c:Ks.decode(c),t)),n=0}if(i===0||i>e){l.enqueue(Uo);break}}}})}const Qd=4;function ue(e){if(e)return Xh(e)}function Xh(e){for(var t in ue.prototype)e[t]=ue.prototype[t];return e}ue.prototype.on=ue.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ue.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};ue.prototype.off=ue.prototype.removeListener=ue.prototype.removeAllListeners=ue.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};ue.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};ue.prototype.emitReserved=ue.prototype.emit;ue.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ue.prototype.hasListeners=function(e){return!!this.listeners(e).length};const gs=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),He=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Yh="arraybuffer";function Kd(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Gh=He.setTimeout,Jh=He.clearTimeout;function vs(e,t){t.useNativeTimers?(e.setTimeoutFn=Gh.bind(He),e.clearTimeoutFn=Jh.bind(He)):(e.setTimeoutFn=He.setTimeout.bind(He),e.clearTimeoutFn=He.clearTimeout.bind(He))}const Zh=1.33;function em(e){return typeof e=="string"?tm(e):Math.ceil((e.byteLength||e.size)*Zh)}function tm(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Xd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function rm(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function nm(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class im extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Ja extends ue{constructor(t){super(),this.writable=!1,vs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new im(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Ga(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=rm(t);return r.length?"?"+r:""}}class sm extends Ja{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Wh(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Hh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Xd()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Yd=!1;try{Yd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const om=Yd;function am(){}class lm extends sm{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class ft extends ue{constructor(t,r,n){super(),this.createRequest=t,vs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Kd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ft.requestsCount++,ft.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=am,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ft.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ft.requestsCount=0;ft.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mc);else if(typeof addEventListener=="function"){const e="onpagehide"in He?"pagehide":"unload";addEventListener(e,mc,!1)}}function mc(){for(let e in ft.requests)ft.requests.hasOwnProperty(e)&&ft.requests[e].abort()}const cm=function(){const e=Gd({xdomain:!1});return e&&e.responseType!==null}();class um extends lm{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=cm&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new ft(Gd,this.uri(),t)}}function Gd(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||om))return new XMLHttpRequest}catch{}if(!t)try{return new He[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Jd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class dm extends Ja{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Jd?{}:Kd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Ya(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Xd()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Xs=He.WebSocket||He.MozWebSocket;class pm extends dm{createSocket(t,r,n){return Jd?new Xs(t,r,n):r?new Xs(t,r):new Xs(t)}doWrite(t,r){this.ws.send(r)}}class fm extends Ja{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Kh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Qh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:c})=>{l||(this.onPacket(c),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const hm={websocket:pm,webtransport:fm,polling:um},mm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,gm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ho(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=mm.exec(e||""),o={},a=14;for(;a--;)o[gm[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=vm(o,o.path),o.queryKey=ym(o,o.query),o}function vm(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function ym(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Wo=typeof addEventListener=="function"&&typeof removeEventListener=="function",xi=[];Wo&&addEventListener("offline",()=>{xi.forEach(e=>e())},!1);class $t extends ue{constructor(t,r){if(super(),this.binaryType=Yh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Ho(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Ho(r.host).host);vs(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=nm(this.opts.query)),Wo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},xi.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Qd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&$t.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",$t.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=em(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,gs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if($t.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Wo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=xi.indexOf(this._offlineEventListener);n!==-1&&xi.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}$t.protocol=Qd;class xm extends $t{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;$t.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;$t.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(y(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=r.name,this.emitReserved("upgradeError",h)}}))};function o(){n||(n=!0,y(),r.close(),r=null)}const a=g=>{const h=new Error("probe error: "+g);h.transport=r.name,o(),this.emitReserved("upgradeError",h)};function l(){a("transport closed")}function c(){a("socket closed")}function u(g){r&&g.name!==r.name&&o()}const y=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",c),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let km=class extends xm{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>hm[o]).filter(o=>!!o)),super(n?i:t,i)}};function jm(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Ho(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const wm=typeof ArrayBuffer=="function",bm=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Zd=Object.prototype.toString,Sm=typeof Blob=="function"||typeof Blob<"u"&&Zd.call(Blob)==="[object BlobConstructor]",Cm=typeof File=="function"||typeof File<"u"&&Zd.call(File)==="[object FileConstructor]";function Za(e){return wm&&(e instanceof ArrayBuffer||bm(e))||Sm&&e instanceof Blob||Cm&&e instanceof File}function ki(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ki(e[r]))return!0;return!1}if(Za(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ki(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ki(e[r]))return!0;return!1}function Nm(e){const t=[],r=e.data,n=e;return n.data=ji(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ji(e,t,r){if(!e)return e;if(Za(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ji(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ji(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ji(e[i],t));return n}return e}function Em(e,t){return e.data=Qo(e.data,t),delete e.attachments,e}function Qo(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Qo(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Qo(e[r],t));return e}const _m=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var H;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class zm{constructor(t){this.replacer=t}encode(t){return(t.type===H.EVENT||t.type===H.ACK)&&ki(t)?this.encodeAsBinary({type:t.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===H.BINARY_EVENT||t.type===H.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Nm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class el extends ue{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===H.BINARY_EVENT;n||r.type===H.BINARY_ACK?(r.type=n?H.EVENT:H.ACK,this.reconstructor=new Pm(r)):super.emitReserved("decoded",r)}else if(Za(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(H[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===H.BINARY_EVENT||n.type===H.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!Tm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(el.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case H.CONNECT:return gc(r);case H.DISCONNECT:return r===void 0;case H.CONNECT_ERROR:return typeof r=="string"||gc(r);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&_m.indexOf(r[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Pm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Em(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Tm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function gc(e){return Object.prototype.toString.call(e)==="[object Object]"}const Am=Object.freeze(Object.defineProperty({__proto__:null,Decoder:el,Encoder:zm,get PacketType(){return H}},Symbol.toStringTag,{value:"Module"}));function et(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Rm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ep extends ue{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[et(t,"open",this.onopen.bind(this)),et(t,"packet",this.onpacket.bind(this)),et(t,"error",this.onerror.bind(this)),et(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(Rm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:H.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const y=this.ids++,g=r.pop();this._registerAckCallback(y,g),a.id=y}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case H.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(t);break;case H.ACK:case H.BINARY_ACK:this.onack(t);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:H.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Hr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Hr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Hr.prototype.reset=function(){this.attempts=0};Hr.prototype.setMin=function(e){this.ms=e};Hr.prototype.setMax=function(e){this.max=e};Hr.prototype.setJitter=function(e){this.jitter=e};class Ko extends ue{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,vs(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Hr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||Am;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new km(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=et(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=et(r,"error",o);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(et(t,"ping",this.onping.bind(this)),et(t,"data",this.ondata.bind(this)),et(t,"error",this.onerror.bind(this)),et(t,"close",this.onclose.bind(this)),et(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){gs(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new ep(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const rn={};function wi(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=jm(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=rn[i]&&o in rn[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return l?c=new Ko(n,t):(rn[i]||(rn[i]=new Ko(n,t)),c=rn[i]),r.query&&!t.query&&(t.query=r.queryKey),c.socket(r.path,t)}Object.assign(wi,{Manager:Ko,Socket:ep,io:wi,connect:wi});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tp=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},c)=>T.createElement("svg",{ref:c,...Lm,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:tp("lucide",i),...l},[...a.map(([u,y])=>T.createElement(u,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=T.forwardRef(({className:n,...i},o)=>T.createElement(Om,{ref:o,iconNode:t,className:tp(`lucide-${Mm(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=L("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=L("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=L("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=L("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=L("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=L("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=L("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=L("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=L("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=L("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=L("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=L("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=L("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=L("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=L("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=L("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=L("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=L("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=L("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=L("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=L("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=L("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=L("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=L("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=L("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=L("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=L("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=L("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=L("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=L("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=L("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=L("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=L("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=L("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=L("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=L("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=L("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=L("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=L("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=L("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=L("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=L("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=L("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=L("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=L("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=L("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=L("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=L("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=L("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ug({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const o=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),c=Number(n||0).toFixed(2);function u(j,F){const q=F.length.toString().padStart(2,"0");return`${j}${q}${F}`}const y=u("00","br.gov.bcb.pix"),g=u("01",o),h=u("26",`${y}${g}`),x=u("52","0000"),v=u("53","986"),b=u("54",c),C=u("58","BR"),f=u("59",a),d=u("60",l),p=u("05",i||"***"),w=u("62",p),z=`000201${h}${x}${v}${b}${C}${f}${d}${w}6304`;let P=65535;for(let j=0;j<z.length;j++){P^=z.charCodeAt(j)<<8;for(let F=0;F<8;F++)P&32768?P=(P<<1^4129)&65535:P=P<<1&65535}const M=(P&65535).toString(16).toUpperCase().padStart(4,"0");return`${z}${M}`}function dg({socket:e,menu:t,operador:r,onEnviarPedido:n,onReservarItem:i,onLiberarItem:o,onLiberarCarrinho:a}){const[l,c]=T.useState(""),[u,y]=T.useState([]),[g,h]=T.useState("todas"),[x,v]=T.useState(null),[b,C]=T.useState(null),[f,d]=T.useState("cardapio"),[p,w]=T.useState("pix"),[z,P]=T.useState(""),[M,j]=T.useState(()=>{const k=new Date;return k.setDate(k.getDate()+7),k.toISOString().split("T")[0]}),[F,q]=T.useState(null),[A,W]=T.useState(!1),[te,le]=T.useState(!1);T.useEffect(()=>{fetch("/api/pix-config").then(k=>k.json()).then(k=>q(k)).catch(k=>console.error("Erro ao carregar chave PIX:",k))},[]);const Se=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],S=t&&Array.isArray(t.categorias)?t.categorias:[],V=k=>{if(k.categoria)return k.categoria;const m=S.find(O=>O.id===k.categoriaId);return m?m.nome:"Geral"},N=["todas",...new Set(Se.map(k=>V(k)))],R=k=>{if(!k||!k.controlaEstoque)return{controla:!1,disponivel:1/0,esgotado:!1,acabando:!1};const m=typeof k.disponivelEstoque=="number"?k.disponivelEstoque:Math.max(0,(k.estoque||0)-(k.reservado||0));return{controla:!0,disponivel:m,esgotado:m<=0,acabando:m>0&&m<=(k.estoqueMinimo||0)}},$=(k,m,O)=>{if(!i){O();return}i(k,m,D=>{if(D&&D.ok)C(null),O();else{const B=Se.find(at=>at.id===k);C({titulo:`Sem estoque suficiente de "${(B==null?void 0:B.nome)||"produto"}"`,itens:[{nome:(B==null?void 0:B.nome)||k,disponivel:(D==null?void 0:D.disponivel)??0}]})}})},Q=(k,m)=>{o&&o(k,m)},X=k=>{R(k).esgotado||$(k.id,1,()=>{y(O=>O.find(B=>B.id===k.id)?O.map(B=>B.id===k.id?{...B,quantidade:B.quantidade+1}:B):[...O,{...k,quantidade:1,observacao:""}])})},ze=(k,m)=>{const O=()=>{y(D=>D.map(B=>{if(B.id===k){const at=B.quantidade+m;return at>0?{...B,quantidade:at}:null}return B}).filter(Boolean))};m>0?$(k,m,O):(Q(k,Math.abs(m)),O())},Le=(k,m)=>{y(O=>O.map(D=>D.id===k?{...D,observacao:m}:D))},st=k=>{const m=u.find(O=>O.id===k);m&&Q(k,m.quantidade),y(O=>O.filter(D=>D.id!==k))},ge=()=>{a&&a(),y([]),C(null)};T.useEffect(()=>()=>{a&&a()},[]);const fe=u.reduce((k,m)=>k+m.preco*m.quantidade,0),mt=u.reduce((k,m)=>k+m.quantidade,0),ot=F!=null&&F.chavePix?ug({chave:F.chavePix,nome:F.nomeBeneficiario,cidade:F.cidadeBeneficiario,valor:fe}):"",dr=()=>{ot&&(navigator.clipboard.writeText(ot),le(!0),setTimeout(()=>le(!1),3e3))},Kt=k=>{if(k&&k.preventDefault(),!l.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(u.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(p==="pagar_depois"){if(!z.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!M){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const m={cliente:l.trim(),criadoPor:r?r.nome:"Caixa",itens:u.map(B=>({id:B.id,nome:B.nome,preco:B.preco,quantidade:B.quantidade,observacao:B.observacao||""})),total:fe,formaPagamento:p,telefoneCliente:p==="pagar_depois"?z.trim():z.trim()||void 0,dataCobranca:p==="pagar_depois"?M:void 0},O=B=>{var Wr,Xt;if(B&&B.erro==="estoque_insuficiente"){C({titulo:"Estoque insuficiente para fechar o pedido",itens:(B.itensIndisponiveis||[]).map(pr=>({nome:pr.nome,pedido:pr.pedido,disponivel:pr.disponivel}))}),W(!1),d("carrinho");return}if(B&&B.error){alert(B.error);return}const at=((Wr=B==null?void 0:B.order)==null?void 0:Wr.numero)||((Xt=B==null?void 0:B.pedido)==null?void 0:Xt.numero)||"OK";v(`Pedido #${at} enviado para a cozinha!`),C(null),W(!1),c(""),P(""),y([]),w("pix"),d("cardapio"),setTimeout(()=>v(null),4e3)},D=n||(e?(B,at)=>e.emit("criar_pedido",B,at):null);D?D(m,O):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}).then(B=>B.json()).then(O).catch(B=>{console.error("Erro ao enviar pedido:",B),alert("Erro ao comunicar com o servidor.")})},_=Se.filter(k=>{const m=k.disponivel!==!1&&k.ativo!==!1,O=V(k),D=g==="todas"||O===g||k.categoriaId===g;return m&&D});return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${f==="cardapio"?"active":""}`,onClick:()=>d("cardapio"),children:[s.jsx(lp,{size:16})," Cardápio de Produtos"]}),s.jsxs("button",{className:`mobile-toggle-btn ${f==="carrinho"?"active":""}`,onClick:()=>d("carrinho"),children:[s.jsx(yt,{size:16})," Comanda (",mt,")"]})]}),s.jsxs("div",{className:`caixa-cardapio-col ${f!=="cardapio"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(yt,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),x&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(ys,{size:18}),s.jsx("span",{children:x})]}),s.jsx("div",{className:"cat-pills",children:N.map(k=>s.jsx("button",{className:`cat-btn ${g===k?"active":""}`,onClick:()=>h(k),children:k==="todas"?"Todas as Categorias":k},k))}),s.jsx("div",{className:"produtos-grid",children:_.map(k=>{const m=R(k);return s.jsxs("div",{className:`prod-card ${m.esgotado?"prod-card-esgotado":""}`,onClick:()=>X(k),children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.4rem"},children:[s.jsx("span",{className:"prod-cat",children:V(k)}),m.controla&&(m.esgotado?s.jsx("span",{className:"estoque-badge estoque-esgotado",children:"ESGOTADO"}):m.acabando?s.jsxs("span",{className:"estoque-badge estoque-acabando",children:["Últimas ",m.disponivel]}):s.jsxs("span",{className:"estoque-badge estoque-ok",children:["Restam ",m.disponivel]}))]}),s.jsx("div",{className:"prod-title",children:k.nome}),k.descricao&&s.jsx("div",{className:"prod-desc",children:k.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("span",{className:"prod-preco",children:["R$ ",(k.preco||0).toFixed(2)]}),s.jsx("button",{className:"prod-add-btn",title:m.esgotado?"Produto esgotado":"Adicionar ao Pedido",disabled:m.esgotado,children:s.jsx(Gi,{size:18})})]})]},k.id)})})]}),s.jsxs("div",{className:`caixa-carrinho-col ${f!=="carrinho"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsxs("div",{className:"carrinho-title",children:[s.jsx(yt,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Comanda Atual"})]}),u.length>0&&s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:ge,children:"Limpar"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx(qr,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:l,onChange:k=>c(k.target.value)})]})]}),b&&s.jsxs("div",{className:"aviso-estoque",children:[s.jsxs("div",{className:"aviso-estoque-titulo",children:[s.jsx(Ki,{size:17}),s.jsx("span",{children:b.titulo})]}),s.jsx("ul",{className:"aviso-estoque-lista",children:b.itens.map((k,m)=>s.jsxs("li",{children:[s.jsx("strong",{children:k.nome}),k.pedido!==void 0?` — pedido ${k.pedido}, `:" — ",k.disponivel>0?`restam apenas ${k.disponivel}`:"sem estoque disponível"]},m))}),s.jsx("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Ajuste as quantidades acima e envie novamente. Nada do pedido foi perdido."}),s.jsx("button",{className:"btn btn-secondary",style:{alignSelf:"flex-start",padding:"0.25rem 0.6rem",fontSize:"0.78rem",minHeight:"30px"},onClick:()=>C(null),children:"Entendi"})]}),s.jsx("div",{className:"carrinho-itens",children:u.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(yt,{size:36,opacity:.4}),s.jsx("p",{children:"Nenhum item adicionado ainda."}),s.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):u.map(k=>{const m=Se.find(B=>B.id===k.id)||k,O=R(m),D=O.controla&&O.disponivel<=0;return s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:k.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(k.preco*k.quantidade).toFixed(2)]}),O.controla&&s.jsx("div",{style:{fontSize:"0.72rem",color:D?"var(--primary)":"var(--app-ink-muted)",marginTop:"2px"},children:D?"Último disponível no estoque":`Restam ${O.disponivel} em estoque`})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>ze(k.id,-1),children:s.jsx(ip,{size:14})}),s.jsx("span",{className:"qtd-val",children:k.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>ze(k.id,1),disabled:D,title:D?"Sem estoque disponível":"Adicionar mais uma unidade",style:D?{opacity:.35,cursor:"not-allowed"}:void 0,children:s.jsx(Gi,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>st(k.id),children:s.jsx(Ji,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Yi,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:k.observacao,onChange:B=>Le(k.id,B.target.value)})]})]},k.id)})}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${p==="pix"?"active":""}`,onClick:()=>w("pix"),children:[s.jsx(bi,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${p==="dinheiro"?"active":""}`,onClick:()=>w("dinheiro"),children:[s.jsx(np,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${p==="debito"?"active":""}`,onClick:()=>w("debito"),children:[s.jsx(bi,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${p==="credito"?"active":""}`,onClick:()=>w("credito"),children:[s.jsx(bi,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${p==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>w("pagar_depois"),children:[s.jsx(Yo,{size:16})," Pagar Depois (Fiado)"]})]}),p==="pix"&&fe>0&&s.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>W(!0),children:[s.jsx(kc,{size:18})," Gerar QR Code PIX (R$ ",fe.toFixed(2),")"]}),p==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(ea,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:z,onChange:k=>P(k.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(xs,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:M,onChange:k=>j(k.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ki,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",fe.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:Kt,disabled:u.length===0||!l.trim(),children:[s.jsx(wc,{size:18})," Enviar para Cozinha"]})]})]}),A&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card-pix",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[s.jsx(kc,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>W(!1),children:s.jsx(up,{size:16})})]}),s.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",s.jsx("strong",{style:{color:"var(--text-title)"},children:l||"Cliente no Caixa"})]}),ot?s.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ot)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):s.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),s.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",fe.toFixed(2)]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",s.jsx("strong",{children:(F==null?void 0:F.nomeBeneficiario)||"Festa do Morango"})," (",F==null?void 0:F.chavePix,")"]}),ot&&s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:s.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:dr,children:[te?s.jsx(We,{size:16,color:"var(--primary)"}):s.jsx($m,{size:16}),te?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[s.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>W(!1),children:"Voltar"}),s.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:Kt,disabled:u.length===0||!l.trim(),children:[s.jsx(wc,{size:16})," Confirmar & Enviar"]})]})]})}),s.jsxs("div",{className:`mobile-cart-float-bar ${f==="cardapio"&&u.length>0?"mobile-show-float":""}`,onClick:()=>d("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(yt,{size:20}),s.jsxs("span",{children:["Ver Pedido (",mt," ",mt===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",fe.toFixed(2)," →"]})]})]})}function pg({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=T.useState(Date.now()),[a,l]=T.useState("ativos");T.useEffect(()=>{const x=setInterval(()=>{o(Date.now())},1e3);return()=>clearInterval(x)},[]);const c=e.filter(x=>x.status==="pendente"||x.status==="em_preparo"||x.status==="entrega_parcial"),u=c.filter(x=>a==="pendentes"?x.status==="pendente":a==="preparo"?x.status==="em_preparo":a==="parcial"?x.status==="entrega_parcial":a==="meus"&&t?x.preparadoPor&&x.preparadoPor.includes(t.nome):!0),y=x=>{const v=new Date(x).getTime(),b=i-v;return Math.floor(b/6e4)},g=x=>{const v=new Date(x).getTime(),b=Math.max(0,i-v),C=Math.floor(b/6e4),f=Math.floor(b%6e4/1e3);return`${String(C).padStart(2,"0")}:${String(f).padStart(2,"0")}`},h=x=>{const v=y(x);return v>=10?"urgente":v>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Ln,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",c.length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",c.filter(x=>x.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",c.filter(x=>x.status==="em_preparo").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",c.filter(x=>x.status==="entrega_parcial").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",c.filter(x=>x.preparadoPor&&x.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:u.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Xi,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):u.map(x=>{const v=h(x.criadoEm),b=g(x.criadoEm),C=x.itens.reduce((p,w)=>p+(w.quantidade||1),0),f=x.itens.filter(p=>p.entregue).reduce((p,w)=>p+(w.quantidade||1),0),d=f>0&&f<C;return s.jsxs("div",{className:`kds-card ${v}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",x.numero]}),s.jsx("div",{className:"cliente-nome",children:x.cliente}),x.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",x.dataCobranca?new Date(x.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:x.formaPagamento?x.formaPagamento.toUpperCase():"PIX"}),x.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx(qr,{size:12}),s.jsxs("span",{children:["Preparo: ",x.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?s.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",f,"/",C,")"]}):s.jsx("span",{className:`badge badge-${x.status==="pendente"?"pendente":"preparo"}`,children:x.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${v}`,children:[s.jsx(xs,{size:14}),s.jsx("span",{children:b})]})]})]}),s.jsxs("div",{className:"kds-card-body",children:[s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[s.jsx(sp,{size:14,color:"var(--primary)"}),s.jsxs("span",{children:["Clique no item para marcar entrega parcial (",f,"/",C," entregues):"]})]}),x.itens.map((p,w)=>s.jsxs("div",{className:`kds-item-row ${p.entregue?"item-entregue":""}`,children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("div",{className:"item-info",children:[s.jsxs("span",{className:"item-qtd-badge",children:[p.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:p.nome})]}),s.jsxs("button",{type:"button",className:`item-check-btn ${p.entregue?"checked":""}`,onClick:()=>n&&n(x.id,w,!p.entregue),title:p.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[p.entregue?s.jsx(op,{size:14}):s.jsx(ap,{size:14}),s.jsx("span",{children:p.entregue?"Entregue":"Entregar"})]})]}),p.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(Xm,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",p.observacao]})]})]},w))]}),s.jsx("div",{className:"kds-card-footer",children:x.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(x.id,"em_preparo"),children:[s.jsx(Zm,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(x.id,"pronto"),children:[s.jsx(tl,{size:18})," Pronto / Chamar Cliente"]})})]},x.id)})})]})}let hr=null;function fg(){if(!hr){const e=window.AudioContext||window.webkitAudioContext;e&&(hr=new e)}return hr&&hr.state==="suspended"&&hr.resume(),hr}function Ec(){try{const e=fg();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function hg({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=T.useState(!0),[a,l]=T.useState(null);T.useEffect(()=>{t&&(t.status==="pronto"||t.status==="entrega_parcial")&&i&&(Ec(),l(t.id))},[t,i]);const c=e.filter(v=>v.status==="pronto"||v.status==="entrega_parcial"),u=e.filter(v=>v.status==="entregue").slice(0,8),y=a?e.find(v=>v.id===a):t?e.find(v=>v.id===t.id):null,g=y&&(y.status==="pronto"||y.status==="entrega_parcial")?y:c[0],h=()=>{if(!g||c.length<=1)return;const v=c.findIndex(C=>C.id===g.id),b=c[(v+1)%c.length];b&&l(b.id)},x=v=>{r(v,"entregue");const b=c.filter(C=>C.id!==v);b.length>0?l(b[0].id):l(null)};return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{o(!i),i||Ec()},children:[i?s.jsx(og,{size:18,color:"var(--status-pronto)"}):s.jsx(ag,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(tl,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),g?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",g.numero]}),s.jsx("div",{className:"destaque-cliente",children:g.cliente}),g.itens&&s.jsxs("div",{className:"destaque-itens-box",children:[s.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[s.jsx("span",{children:"Conferência de Itens no Balcão:"}),s.jsxs("span",{style:{color:"var(--primary)",fontWeight:800},children:[g.itens.filter(v=>v.entregue).length," de ",g.itens.length," entregues"]})]}),g.itens.map((v,b)=>{const C=!!v.entregue;return s.jsxs("div",{className:`destaque-item-row ${C?"item-entregue":""}`,onClick:()=>n&&n(g.id,b,!C),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[s.jsxs("span",{className:C?"badge badge-pronto":"badge badge-pendente",children:[v.quantidade,"x"]}),s.jsx("span",{style:{color:C?"#156b16":"var(--text-title)",textDecoration:C?"line-through":"none",fontWeight:700},children:v.nome}),v.observacao&&s.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",v.observacao,")"]})]}),s.jsxs("button",{type:"button",className:`btn ${C?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:f=>{f.stopPropagation(),n&&n(g.id,b,!C)},children:[C?s.jsx(op,{size:16}):s.jsx(ap,{size:16}),s.jsx("span",{children:C?"✓ Entregue":"Dar Baixa"})]})]},b)})]}),s.jsxs("div",{className:"destaque-acoes",children:[s.jsxs("button",{className:"btn btn-success",style:{flex:2,padding:"0.85rem",fontSize:"1rem",borderRadius:"var(--radius-md)",fontWeight:700},onClick:()=>x(g.id),children:[s.jsx(Nc,{size:20})," Finalizar & Entregar Todos"]}),c.length>1&&s.jsxs("button",{className:"btn btn-secondary",style:{flex:1,padding:"0.85rem",fontSize:"0.88rem",borderRadius:"var(--radius-md)",fontWeight:600},onClick:h,children:[s.jsx(rp,{size:18})," Próximo da Fila"]})]})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Zi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Xi,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",c.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:c.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):c.map(v=>{const b=g&&v.id===g.id;return s.jsxs("div",{className:`pronto-item ${b?"item-ativo-tv":""}`,onClick:()=>l(v.id),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",v.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:v.cliente}),v.status==="entrega_parcial"&&s.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",v.itens?v.itens.filter(C=>C.entregue).length:0,"/",v.itens?v.itens.length:0,")"]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:C=>{C.stopPropagation(),l(v.id)},children:b?"Exibindo":"Exibir"}),s.jsx("button",{type:"button",className:"btn btn-success",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:C=>{C.stopPropagation(),x(v.id)},children:"Entregar"})]})]},v.id)})})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Nc,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:u.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):u.map(v=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",v.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:v.cliente})]},v.id))})]})]})]})}const dp=[{id:"burger",nome:"Hambúrguer",component:s.jsx(Dm,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(tg,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(Vm,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(Bm,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(Jm,{size:18})},{id:"coffee",nome:"Café",component:s.jsx(qm,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(Br,{size:18})}];function _c(e){const t=dp.find(r=>r.id===e);return t?t.component:s.jsx(Br,{size:16})}function mg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o,onAjustarEstoque:a}){const[l,c]=T.useState("todas"),[u,y]=T.useState(""),[g,h]=T.useState(!1),[x,v]=T.useState(!1),[b,C]=T.useState(!1),[f,d]=T.useState(null),[p,w]=T.useState(""),[z,P]=T.useState(""),[M,j]=T.useState(""),[F,q]=T.useState(""),[A,W]=T.useState(!1),[te,le]=T.useState("0"),[Se,S]=T.useState("0"),[V,N]=T.useState(""),[R,$]=T.useState("burger"),Q=Array.isArray(e==null?void 0:e.categorias)?e.categorias:[],X=Array.isArray(e==null?void 0:e.produtos)?e.produtos:Array.isArray(e)?e:[],ze=m=>!!m.controlaEstoque&&(m.estoque||0)<=(m.estoqueMinimo||0),Le=X.filter(ze).length,st=X.filter(m=>{const O=l==="todas"||m.categoriaId===l,D=!u.trim()||m.nome.toLowerCase().includes(u.toLowerCase())||m.descricao&&m.descricao.toLowerCase().includes(u.toLowerCase()),B=!g||ze(m);return O&&D&&B}),ge=(m,O)=>{a&&a(m.id,O).then(D=>{D&&D.error&&alert(D.error)})},fe=m=>{const O=window.prompt(`Repor estoque de "${m.nome}".
Saldo atual: ${m.estoque||0}

Quantas unidades deseja ADICIONAR?`,"10");if(O===null)return;const D=parseInt(O,10);if(Number.isNaN(D)||D===0){alert("Informe um número inteiro diferente de zero.");return}ge(m,{delta:D})},mt=(m=null)=>{var O;m?(d(m),w(m.nome),P(m.categoriaId),j(m.preco.toString()),q(m.descricao||""),W(!!m.controlaEstoque),le(String(m.estoque??0)),S(String(m.estoqueMinimo??0))):(d(null),w(""),P(((O=Q[0])==null?void 0:O.id)||"lanches"),j(""),q(""),W(!1),le("0"),S("0")),v(!0)},ot=()=>{N(""),$("burger"),C(!0)},dr=m=>{if(m.preventDefault(),!p.trim()||!M||!z){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:f?f.id:void 0,categoriaId:z,nome:p.trim(),preco:parseFloat(M),descricao:F.trim(),disponivel:f?f.disponivel:!0,controlaEstoque:A,estoque:A&&parseInt(te,10)||0,estoqueMinimo:A&&parseInt(Se,10)||0}),v(!1)},Kt=m=>{if(m.preventDefault(),!V.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:V.trim(),icone:R}),C(!1)},_=m=>{window.confirm(`Tem certeza que deseja excluir o produto "${m.nome}"?`)&&r(m.id)},k=m=>{const O=X.filter(D=>D.categoriaId===m.id).length;if(O>0){alert(`Não é possível excluir a categoria "${m.nome}" pois ela possui ${O} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${m.nome}"?`)&&o(m.id).then(D=>{D&&D.error?alert(D.error):l===m.id&&c("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Br,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(rl,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:m=>y(m.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:ot,children:[s.jsx(vc,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>mt(),children:[s.jsx(Gi,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${l==="todas"?"active":""}`,onClick:()=>c("todas"),children:[s.jsx(lp,{size:14})," Todas (",X.length,")"]}),Q.map(m=>{const O=X.filter(D=>D.categoriaId===m.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${l===m.id?"active":""}`,onClick:()=>c(m.id),children:[_c(m.icone)," ",s.jsx("span",{children:m.nome})," (",O,")"]}),O===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>k(m),children:s.jsx(Ji,{size:13})})]},m.id)}),s.jsxs("button",{className:`cat-pill-btn ${g?"active":""}`,onClick:()=>h(m=>!m),title:"Mostrar apenas produtos no limite do alerta mínimo",style:{marginLeft:"auto"},children:[s.jsx(Ki,{size:14})," Somente itens acabando (",Le,")"]})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Estoque"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:st.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(Ki,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):st.map(m=>{const O=Q.find(D=>D.id===m.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(m.id),children:m.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Cc,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Sc,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:m.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[_c(O==null?void 0:O.icone)," ",(O==null?void 0:O.nome)||m.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",m.preco.toFixed(2)]})}),s.jsx("td",{children:m.controlaEstoque?s.jsxs("div",{className:"estoque-celula",children:[s.jsx("button",{className:"estoque-mini-btn",title:"Abater 1 unidade",onClick:()=>ge(m,{delta:-1}),children:s.jsx(ip,{size:14})}),s.jsx("span",{className:`estoque-saldo ${(m.estoque||0)===0?"zerado":ze(m)?"acabando":"ok"}`,children:m.estoque||0}),s.jsx("button",{className:"estoque-mini-btn",title:"Adicionar 1 unidade",onClick:()=>ge(m,{delta:1}),children:s.jsx(Gi,{size:14})}),s.jsxs("button",{className:"estoque-mini-btn",title:"Repor uma quantidade maior",onClick:()=>fe(m),style:{width:"auto",padding:"0 0.5rem",gap:"0.25rem"},children:[s.jsx(Ym,{size:14})," ",s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700},children:"Repor"})]})]}):s.jsxs("span",{className:"estoque-ilimitado",children:[s.jsx(Wm,{size:15})," Ilimitado"]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:m.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>mt(m),children:[s.jsx(Gm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>_(m),children:[s.jsx(Ji,{size:14})," Excluir"]})]})})]},m.id)})})]})}),x&&s.jsx("div",{className:"modal-backdrop",onClick:()=>v(!1),children:s.jsxs("div",{className:"modal-card",onClick:m=>m.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(Br,{size:20,color:"var(--primary)"}),s.jsx("span",{children:f?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:dr,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:p,onChange:m=>w(m.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:z,onChange:m=>P(m.target.value),required:!0,children:Q.map(m=>s.jsx("option",{value:m.id,children:m.nome},m.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:M,onChange:m=>j(m.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:F,onChange:m=>q(m.target.value)})]}),s.jsxs("div",{className:"estoque-box",children:[s.jsxs("button",{type:"button",className:"estoque-switch",onClick:()=>W(m=>!m),children:[A?s.jsx(Cc,{size:22,color:"var(--status-pronto)"}):s.jsx(Sc,{size:22,color:"var(--app-ink-muted)"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Controlar estoque deste produto"}),s.jsx("small",{children:A?"O caixa não consegue vender depois que as unidades acabam.":"Desligado: venda ilimitada, sem contagem de unidades."})]})]}),A&&s.jsxs("div",{className:"estoque-campos",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Quantidade em estoque"}),s.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:te,onChange:m=>le(m.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Alerta mínimo"}),s.jsx("input",{type:"number",min:"0",step:"1",className:"form-input",value:Se,onChange:m=>S(m.target.value)})]})]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>v(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(We,{size:18})," Salvar Produto"]})]})]})]})}),b&&s.jsx("div",{className:"modal-backdrop",onClick:()=>C(!1),children:s.jsxs("div",{className:"modal-card",onClick:m=>m.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(vc,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:Kt,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:V,onChange:m=>N(m.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:dp.map(m=>s.jsxs("button",{type:"button",className:`icone-opt ${R===m.id?"selected":""}`,onClick:()=>$(m.id),children:[m.component,s.jsx("span",{children:m.nome})]},m.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>C(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(We,{size:18})," Criar Categoria"]})]})]})]})})]})}function gg({pedidos:e,operador:t}){const[r,n]=T.useState(null),[i,o]=T.useState(null),a=T.useRef(!1),[l,c]=T.useState("hoje"),[u,y]=T.useState("todos"),[g,h]=T.useState(""),[x,v]=T.useState(""),[b,C]=T.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const d=S=>{n(V=>V===S?null:S)},p=(S,V)=>{S.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${V}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(N=>N.json()).catch(N=>console.error("Erro ao quitar pagamento:",N))},w=(S,V)=>{S.stopPropagation(),!a.current&&(a.current=!0,o(V.id),fetch(`/api/orders/${V.id}/reimprimir`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operadorNome:t?t.nome:"Operador"})}).then(N=>N.json()).then(N=>{N&&N.error&&alert(N.error)}).catch(N=>{console.error("Erro ao reimprimir:",N),alert("Erro de conexão ao solicitar a reimpressão.")}).finally(()=>{a.current=!1,o(null)}))},z=(S,V=!1)=>s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px",width:V?"100%":void 0},onClick:N=>w(N,S),disabled:i===S.id,title:`Reimprimir a comanda #${S.numero} (sai marcada como 2a via)`,children:[s.jsx(nr,{size:14}),i===S.id?"Enviando...":"Reimprimir"]},`reimprimir-${S.id}`),P=S=>S.statusPagamento==="pago"?!1:S.statusPagamento==="pendente_pagamento"||S.formaPagamento==="pagar_depois",M=e.filter(S=>{if(g.trim()){const R=g.toLowerCase().trim(),$=`#${S.numero}`.toLowerCase(),Q=(S.cliente||"").toLowerCase(),X=(S.telefoneCliente||"").toLowerCase();if(!($.includes(R)||Q.includes(R)||X.includes(R)))return!1}if(u==="pagos"&&P(S)||u==="fiado"&&!P(S)||u==="entregues"&&S.status!=="entregue"||u==="cancelados"&&S.status!=="cancelado"||u!=="cancelados"&&S.status==="cancelado")return!1;if(!S.criadoEm)return!0;const V=new Date(S.criadoEm),N=new Date;if(l==="hoje")return V.toDateString()===N.toDateString();if(l==="ontem"){const R=new Date;return R.setDate(N.getDate()-1),V.toDateString()===R.toDateString()}else if(l==="7dias"){const R=new Date;return R.setDate(N.getDate()-7),V>=R}else if(l==="custom"){if(x){const R=new Date(x);if(R.setHours(0,0,0,0),V<R)return!1}if(b){const R=new Date(b);if(R.setHours(23,59,59,999),V>R)return!1}}return!0}),j=M.filter(S=>S.status!=="cancelado"),F=j.filter(S=>!P(S)),q=j.filter(S=>P(S)),A=F.reduce((S,V)=>S+(Number(V.total)||0),0),W=q.reduce((S,V)=>S+(Number(V.total)||0),0),te=j.length,le=te>0?(A+W)/te:0,Se=S=>{if(S.formaPagamento==="pagar_depois"||S.statusPagamento==="pendente_pagamento"){const V=S.dataCobranca?new Date(S.dataCobranca).toLocaleDateString():"Sem Data";return S.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(We,{size:12})," Pagar Depois (Quitado)"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(xs,{size:12})," Pagar Depois (",V,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(bi,{size:12})," ",S.formaPagamento?S.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Xo,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsxs("span",{children:[M.length," Registros Encontrados"]})})]}),s.jsxs("div",{className:"vendas-filtros-card",children:[s.jsxs("div",{className:"vendas-search-box",children:[s.jsx(rl,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"vendas-search-input",placeholder:"Buscar por comanda #, cliente ou WhatsApp...",value:g,onChange:S=>h(S.target.value)})]}),s.jsx("div",{className:"dropdown-filter-group",children:s.jsxs("select",{className:"dropdown-filter-select",value:l,onChange:S=>c(S.target.value),children:[s.jsx("option",{value:"hoje",children:"Período: Hoje"}),s.jsx("option",{value:"ontem",children:"Período: Ontem"}),s.jsx("option",{value:"7dias",children:"Período: Últimos 7 dias"}),s.jsx("option",{value:"todos",children:"Período: Todos os Pedidos"}),s.jsx("option",{value:"custom",children:"Período: Data Personalizada"})]})}),s.jsx("div",{className:"dropdown-filter-group",children:s.jsxs("select",{className:"dropdown-filter-select",value:u,onChange:S=>y(S.target.value),children:[s.jsx("option",{value:"todos",children:"Status: Todos os Pedidos"}),s.jsx("option",{value:"pagos",children:"Status: Quitados / Pagos"}),s.jsx("option",{value:"fiado",children:"Status: Pagar Depois (Fiado)"}),s.jsx("option",{value:"entregues",children:"Status: Entregues"}),s.jsx("option",{value:"cancelados",children:"Status: Cancelados"})]})})]}),l==="custom"&&s.jsxs("div",{className:"vendas-filtros-card",style:{background:"var(--app-surface-2)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[s.jsx(Yo,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{color:"var(--text-title)"},children:"Data Inicial:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:x,onChange:S=>v(S.target.value)})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[s.jsx("span",{style:{color:"var(--text-title)"},children:"Data Final:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:b,onChange:S=>C(S.target.value)})]})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(np,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",A.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(Yo,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",W.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(yt,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),s.jsxs("div",{className:"metric-value",children:[te," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx(ng,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",le.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"40px"}}),s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Data / Horário"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Forma Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:M.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):M.map(S=>{const V=r===S.id,N=S.criadoEm?new Date(S.criadoEm).toLocaleString():"Recente";return s.jsxs(Fc.Fragment,{children:[s.jsxs("tr",{className:"row-exp",onClick:()=>d(S.id),children:[s.jsx("td",{style:{textAlign:"center"},children:V?s.jsx(Jo,{size:16,color:"var(--primary)"}):s.jsx(Go,{size:16,color:"var(--app-ink-muted)"})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",S.numero]})}),s.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:N}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:S.cliente}),S.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(ea,{size:12}),s.jsx("span",{children:S.telefoneCliente})]})]}),s.jsx("td",{children:Se(S)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(S.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${S.status==="pronto"?"pronto":S.status==="entregue"||S.status==="entrega_parcial"?"entregue":"preparo"}`,children:S.status==="entrega_parcial"?"PARCIAL":S.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.82rem"},children:[s.jsxs("div",{children:["Caixa: ",s.jsx("strong",{children:S.criadoPor||"Caixa"})]}),S.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",S.preparadoPor]})]}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[P(S)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:R=>p(R,S.id),children:[s.jsx(We,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Xi,{size:15})," Quitado"]}),z(S)]})})]}),V&&s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:s.jsxs("div",{className:"exp-details-box",children:[s.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(Yi,{size:16,color:"var(--primary)"}),s.jsxs("span",{children:["Itens Lançados na Comanda #",S.numero,":"]})]}),S.itens&&S.itens.length>0?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:S.itens.map((R,$)=>s.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[R.quantidade,"x"]})," ",R.nome,R.observacao&&s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",R.observacao]})]}),s.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(R.preco*R.quantidade).toFixed(2)]})]},$))}):s.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},S.id)})})]})}),s.jsx("div",{className:"vendas-mobile-list",children:M.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):M.map(S=>{const V=r===S.id,N=S.criadoEm?new Date(S.criadoEm).toLocaleString():"Recente";return s.jsxs("div",{className:"venda-card-mobile",onClick:()=>d(S.id),children:[s.jsxs("div",{className:"venda-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",S.numero]}),s.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:S.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(S.total)||0).toFixed(2)]}),V?s.jsx(Jo,{size:16,color:"var(--primary)"}):s.jsx(Go,{size:16,color:"var(--app-ink-muted)"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[s.jsx("div",{children:Se(S)}),s.jsx("span",{className:`badge badge-${S.status==="pronto"?"pronto":S.status==="entregue"||S.status==="entrega_parcial"?"entregue":"preparo"}`,children:S.status==="entrega_parcial"?"PARCIAL":S.status.toUpperCase()})]}),V&&s.jsxs("div",{className:"venda-card-details",children:[s.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",s.jsx("strong",{children:N})]}),S.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[s.jsx(ea,{size:13}),s.jsxs("span",{children:["Contato / WhatsApp: ",s.jsx("strong",{children:S.telefoneCliente})]})]}),s.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[s.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),S.itens&&S.itens.length>0?s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:S.itens.map((R,$)=>s.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[s.jsxs("span",{children:[s.jsxs("strong",{children:[R.quantidade,"x"]})," ",R.nome," ",R.observacao?`(${R.observacao})`:""]}),s.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(R.preco*R.quantidade).toFixed(2)]})]},$))}):s.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[s.jsxs("span",{children:["Caixa: ",s.jsx("strong",{children:S.criadoPor||"Caixa"})]}),S.preparadoPor&&s.jsxs("span",{children:["Cozinha: ",s.jsx("strong",{children:S.preparadoPor})]})]}),s.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[P(S)?s.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:R=>p(R,S.id),children:[s.jsx(We,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"0.3rem"},children:[s.jsx(Xi,{size:15})," Pagamento Confirmado / Quitado"]}),z(S,!0)]})]})]},S.id)})})]})}function vg({operador:e}){const[t,r]=T.useState([]),[n,i]=T.useState(!1),[o,a]=T.useState(!1),[l,c]=T.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[u,y]=T.useState({}),[g,h]=T.useState(null),x=e&&e.role==="master",[v,b]=T.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[C,f]=T.useState(!1);T.useEffect(()=>{x&&(w(),d())},[x]);const d=()=>{fetch("/api/pix-config").then(A=>A.json()).then(A=>{A&&A.chavePix&&b(A)}).catch(A=>console.error("Erro ao carregar PIX config:",A))},p=A=>{A.preventDefault(),f(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then(W=>W.json()).then(W=>{f(!1),W&&W.status==="success"?(h("Chave PIX atualizada com sucesso!"),setTimeout(()=>h(null),4e3)):alert(W.error||"Erro ao salvar chave PIX.")}).catch(()=>{f(!1),alert("Erro de conexão ao salvar chave PIX.")})},w=()=>{fetch("/api/users").then(A=>A.json()).then(A=>r(A)).catch(A=>console.error("Erro ao carregar usuários:",A))};if(!x)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const z=A=>{y(W=>({...W,[A]:!W[A]}))},P=()=>{c({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},M=A=>{c({...A}),a(!0),i(!0)},j=A=>{if(A.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const W=o?`/api/users/${l.id}`:"/api/users";fetch(W,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(le=>le.json()).then(le=>{le&&le.status==="success"?(h(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),w(),setTimeout(()=>h(null),4e3)):alert(le.error||"Erro ao salvar usuário.")}).catch(le=>alert("Erro de conexão com o servidor."))},F=(A,W)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${W}"?`)&&fetch(`/api/users/${A}`,{method:"DELETE"}).then(te=>te.json()).then(te=>{te&&te.status==="success"?(h(`Conta de "${W}" excluída com sucesso.`),w(),setTimeout(()=>h(null),4e3)):alert(te.error||"Erro ao excluir conta.")})},q=A=>{switch(A){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(Im,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(yt,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(Ln,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Zi,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:A})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(ta,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:P,children:[s.jsx(sg,{size:18})," Nova Conta"]})]}),g&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx(ys,{size:18}),s.jsx("span",{children:g})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(A=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:A.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:A.usuario})}),s.jsx("td",{children:q(A.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:u[A.id]?A.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>z(A.id),title:"Revelar/Ocultar Senha",children:u[A.id]?s.jsx(Um,{size:14}):s.jsx(Hm,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>M(A),children:[s.jsx(rg,{size:14})," Editar"]}),A.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>F(A.id,A.nome),children:[s.jsx(Ji,{size:14})," Excluir"]})]})})]},A.id))})]})}),s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[s.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Qm,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),s.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",s.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),s.jsxs("form",{onSubmit:p,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),s.jsxs("select",{className:"form-input",value:v.tipoChave,onChange:A=>b({...v,tipoChave:A.target.value}),children:[s.jsx("option",{value:"email",children:"E-mail"}),s.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),s.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),s.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Chave PIX *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:v.chavePix,onChange:A=>b({...v,chavePix:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:v.nomeBeneficiario,onChange:A=>b({...v,nomeBeneficiario:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cidade *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:v.cidadeBeneficiario,onChange:A=>b({...v,cidadeBeneficiario:A.target.value}),required:!0})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:C,children:C?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(qr,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:A=>c({...l,nome:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:A=>c({...l,usuario:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:A=>c({...l,senha:A.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:A=>c({...l,role:A.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function yg({logs:e,operador:t}){const[r,n]=T.useState(""),[i,o]=T.useState("todas"),[a,l]=T.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const u=h=>{l(x=>x===h?null:h)},y=e.filter(h=>{const x=i==="todas"||h.acao===i,v=r.toLowerCase().trim(),b=!v||String(h.numeroPedido).includes(v)||h.cliente&&h.cliente.toLowerCase().includes(v)||h.usuario&&h.usuario.toLowerCase().includes(v)||h.descricao&&h.descricao.toLowerCase().includes(v);return x&&b}),g=h=>{switch(h){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Fm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ln,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(tl,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(ys,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:h})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Zo,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(rl,{size:16,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:h=>n(h.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(h=>h.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(h=>h.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(h=>h.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(h=>h.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:y.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):y.map(h=>{const x=new Date(h.timestamp),v=`${x.toLocaleDateString()} ${x.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(xs,{size:13}),s.jsx("span",{children:v})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx(qr,{size:14,color:"var(--primary)"}),s.jsx("span",{children:h.usuario})]})}),s.jsx("td",{children:g(h.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",h.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",h.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:h.itens.map((b,C)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(sp,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[b.quantidade,"x"]}),s.jsx("span",{children:b.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(b.preco*b.quantidade).toFixed(2),")"]}),b.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",b.observacao,"]"]})]},C))})]})]},h.id)})})]})}),s.jsx("div",{className:"logs-mobile-list",children:y.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):y.map(h=>{const x=new Date(h.timestamp),v=x.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),b=a===h.id;return s.jsxs("div",{className:"log-card-mobile",onClick:()=>u(h.id),children:[s.jsxs("div",{className:"log-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",h.numeroPedido]}),s.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:h.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[g(h.acao),s.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:v}),b?s.jsx(Jo,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Go,{size:16,color:"var(--app-ink-muted)"})]})]}),b&&s.jsxs("div",{className:"log-card-details",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[s.jsx(qr,{size:13,color:"var(--primary)"}),s.jsxs("span",{children:["Operador: ",s.jsx("strong",{children:h.usuario})]}),s.jsxs("span",{style:{marginLeft:"auto"},children:[x.toLocaleDateString()," ",x.toLocaleTimeString()]})]}),s.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:h.descricao}),h.itens&&Array.isArray(h.itens)&&h.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:h.itens.map((C,f)=>s.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[C.quantidade,"x"]})," ",C.nome," (R$ ",(C.preco*C.quantidade).toFixed(2),")",C.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",C.observacao,"]"]})]},f))})]})]},h.id)})})]})}const xg=[{id:"cp850",nome:"CP850 (Multilíngue) — padrão"},{id:"cp860",nome:"CP860 (Português)"},{id:"win1252",nome:"WPC1252 (Windows Latin-1)"},{id:"cp858",nome:"CP858 (Multilíngue + Euro)"},{id:"cp437",nome:"CP437 (EUA / padrão antigo)"}];function kg({operador:e}){var w,z,P,M;const[t,r]=T.useState(null),[n,i]=T.useState([]),[o,a]=T.useState(!1),[l,c]=T.useState(!1),[u,y]=T.useState(null),[g,h]=T.useState({pendentes:0,historico:[]}),x=e&&e.role==="master",v=()=>{fetch("/api/printer/fila").then(j=>j.json()).then(h).catch(()=>{})},b=()=>{a(!0),fetch("/api/printer/impressoras").then(j=>j.json()).then(j=>{j.impressoras?i(j.impressoras):y({tipo:"erro",texto:j.error||"Não foi possível listar as impressoras."})}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao listar as impressoras."})).finally(()=>a(!1))};if(T.useEffect(()=>{x&&(fetch("/api/printer-config").then(j=>j.json()).then(r).catch(()=>y({tipo:"erro",texto:"Erro ao carregar a configuração da impressora."})),b(),v())},[x]),!x)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ks,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Impressora"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode configurar a impressão de comprovantes."})]});if(!t)return s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:"Carregando configuração da impressora..."});const C=(j,F)=>r(q=>({...q,[j]:F})),f=(j,F)=>r(q=>({...q,vias:{...q.vias,[j]:F}})),d=()=>{c(!0),y(null),fetch("/api/printer-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(j=>j.json()).then(j=>{j.config?(r(j.config),y({tipo:"ok",texto:"Configuração salva. Já vale para o próximo pedido."})):y({tipo:"erro",texto:j.error||"Erro ao salvar."})}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao salvar."})).finally(()=>c(!1))},p=()=>{y(null),fetch("/api/printer/teste",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:t})}).then(j=>j.json()).then(j=>{j.status==="success"?y({tipo:"ok",texto:"Teste enviado para a impressora. Confira o papel: a régua mostra em quantas colunas a linha quebra."}):y({tipo:"erro",texto:j.error||"Falha ao enviar o teste."}),setTimeout(v,1500)}).catch(()=>y({tipo:"erro",texto:"Erro de conexão ao enviar o teste."}))};return s.jsxs("div",{className:"impressora-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(nr,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Impressora Térmica"})]}),u&&s.jsxs("div",{className:`aviso-box ${u.tipo==="ok"?"aviso-ok":"aviso-erro"}`,children:[u.tipo==="ok"?s.jsx(ys,{size:18}):s.jsx(cp,{size:18}),s.jsx("span",{children:u.texto})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(nr,{size:18,color:"var(--primary)"})," Impressão automática"]}),s.jsxs("button",{className:`switch-linha ${t.habilitado?"ativo":""}`,onClick:()=>C("habilitado",!t.habilitado),children:[s.jsx("span",{className:"switch-caixa",children:t.habilitado&&s.jsx(We,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Imprimir o comprovante ao fechar o pedido"}),s.jsx("small",{children:t.habilitado?"Ligado: cada pedido novo sai impresso sem clique.":"Desligado: nenhum comprovante sai sozinho. A reimpressão manual continua funcionando."})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Impressora do Windows"}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsxs("select",{className:"form-input",value:t.nomeImpressora||"",onChange:j=>C("nomeImpressora",j.target.value),style:{flex:1},children:[s.jsx("option",{value:"",children:"— Selecione a impressora —"}),n.map(j=>s.jsx("option",{value:j,children:j},j)),t.nomeImpressora&&!n.includes(t.nomeImpressora)&&s.jsxs("option",{value:t.nomeImpressora,children:[t.nomeImpressora," (não encontrada agora)"]})]}),s.jsxs("button",{className:"btn btn-secondary",onClick:b,disabled:o,title:"Atualizar a lista de impressoras instaladas",children:[s.jsx(jc,{size:16})," ",o?"...":"Atualizar"]})]})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(eg,{size:18,color:"var(--primary)"})," Formato da bobina"]}),s.jsxs("div",{className:"impressora-linha",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Largura"}),s.jsxs("select",{className:"form-input",value:t.larguraColunas,onChange:j=>C("larguraColunas",parseInt(j.target.value,10)),children:[s.jsx("option",{value:32,children:"32 colunas — bobina 58mm"}),s.jsx("option",{value:48,children:"48 colunas — bobina 80mm"}),s.jsx("option",{value:42,children:"42 colunas — 80mm fonte compacta"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tabela de caracteres (acentuação)"}),s.jsx("select",{className:"form-input",value:t.codePage,onChange:j=>C("codePage",j.target.value),children:xg.map(j=>s.jsx("option",{value:j.id,children:j.nome},j.id))})]})]}),s.jsxs("button",{className:`switch-linha ${t.cortarPapel?"ativo":""}`,onClick:()=>C("cortarPapel",!t.cortarPapel),children:[s.jsx("span",{className:"switch-caixa",children:t.cortarPapel&&s.jsx(We,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Cortar o papel ao final"}),s.jsx("small",{children:"Desligue apenas se a impressora não tiver guilhotina."})]})]}),s.jsxs("button",{className:`switch-linha ${t.semAcentos?"ativo":""}`,onClick:()=>C("semAcentos",!t.semAcentos),children:[s.jsx("span",{className:"switch-caixa",children:t.semAcentos&&s.jsx(We,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Remover acentos ao imprimir"}),s.jsx("small",{children:"Plano B: use se nenhuma tabela de caracteres sair correta no teste."})]})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(Yi,{size:18,color:"var(--primary)"})," Vias impressas"]}),s.jsxs("button",{className:`switch-linha ${(w=t.vias)!=null&&w.cliente?"ativo":""}`,onClick:()=>{var j;return f("cliente",!((j=t.vias)!=null&&j.cliente))},children:[s.jsx("span",{className:"switch-caixa",children:((z=t.vias)==null?void 0:z.cliente)&&s.jsx(We,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Via do cliente"}),s.jsx("small",{children:"Comanda, itens, total e forma de pagamento."})]})]}),s.jsxs("button",{className:`switch-linha ${(P=t.vias)!=null&&P.cozinha?"ativo":""}`,onClick:()=>{var j;return f("cozinha",!((j=t.vias)!=null&&j.cozinha))},children:[s.jsx("span",{className:"switch-caixa",children:((M=t.vias)==null?void 0:M.cozinha)&&s.jsx(We,{size:14})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Via da cozinha"}),s.jsx("small",{children:"Sem preços, itens em fonte grande e comanda gigante."})]})]}),s.jsxs("div",{className:"form-group",style:{maxWidth:"220px"},children:[s.jsx("label",{className:"form-label",children:"Cópias da via do cliente"}),s.jsx("input",{type:"number",min:"1",max:"5",className:"form-input",value:t.copiasCliente,onChange:j=>C("copiasCliente",parseInt(j.target.value,10)||1)})]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(ig,{size:18,color:"var(--primary)"})," Cabeçalho e rodapé"]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cabeçalho"}),s.jsx("input",{type:"text",className:"form-input",value:t.cabecalho||"",onChange:j=>C("cabecalho",j.target.value),placeholder:"FESTA DO MORANGO"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Subtítulo"}),s.jsx("input",{type:"text",className:"form-input",value:t.subCabecalho||"",onChange:j=>C("subCabecalho",j.target.value),placeholder:"Desbravadores Apocalipse"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Rodapé"}),s.jsx("input",{type:"text",className:"form-input",value:t.rodape||"",onChange:j=>C("rodape",j.target.value),placeholder:"Aguarde ser chamado no balcao"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[s.jsxs("button",{className:"btn btn-primary",onClick:d,disabled:l,children:[s.jsx(We,{size:18})," ",l?"Salvando...":"Salvar configuração"]}),s.jsxs("button",{className:"btn btn-secondary",onClick:p,children:[s.jsx(nr,{size:18})," Imprimir teste"]}),s.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[s.jsx(jc,{size:16})," Atualizar fila"]})]}),s.jsxs("div",{className:"impressora-card",children:[s.jsxs("div",{className:"impressora-card-titulo",children:[s.jsx(Yi,{size:18,color:"var(--primary)"})," Últimas impressões",g.pendentes>0&&s.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--status-preparo)",fontWeight:700},children:["(",g.pendentes," na fila)"]})]}),!g.historico||g.historico.length===0?s.jsx("div",{style:{color:"var(--app-ink-muted)",fontSize:"0.86rem"},children:"Nenhuma impressão registrada ainda nesta sessão do servidor."}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",maxHeight:"320px",overflowY:"auto"},children:g.historico.map(j=>s.jsxs("div",{className:"job-linha",children:[s.jsxs("span",{children:[s.jsx("strong",{children:j.descricao}),s.jsxs("span",{style:{color:"var(--app-ink-muted)"},children:[" · ",new Date(j.quandoEm).toLocaleTimeString("pt-BR")]}),j.tentativas>1&&s.jsxs("span",{style:{color:"var(--status-preparo)"},children:[" · ",j.tentativas," tentativas"]}),!j.ok&&s.jsx("div",{style:{color:"var(--app-ink-muted)",marginTop:"2px"},children:j.erro})]}),s.jsx("span",{className:j.ok?"job-ok":"job-falha",children:j.ok?"OK":"FALHOU"})]},j.id))})]})]})}const Y=wi(window.location.origin,{transports:["websocket","polling"]});function jg(){const[e,t]=T.useState("caixa"),[r,n]=T.useState(!1),[i,o]=T.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");T.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const a=()=>{o(_=>_==="escuro"?"claro":"escuro")},[l,c]=T.useState(()=>{try{const _=localStorage.getItem("operador_lanchonete");return _?JSON.parse(_):null}catch{return null}}),[u,y]=T.useState(""),[g,h]=T.useState(""),[x,v]=T.useState(null),[b,C]=T.useState(!1),[f,d]=T.useState([]),[p,w]=T.useState({categorias:[],produtos:[]}),[z,P]=T.useState([]),[M,j]=T.useState(null),[F,q]=T.useState(null),A=_=>_?Array.isArray(_)?{categorias:[],produtos:_}:{categorias:Array.isArray(_.categorias)?_.categorias:[],produtos:Array.isArray(_.produtos)?_.produtos:[]}:{categorias:[],produtos:[]};T.useEffect(()=>{fetch("/api/menu").then(_=>_.json()).then(_=>w(A(_))).catch(_=>console.error("Erro ao carregar cardápio via REST:",_)),fetch("/api/logs").then(_=>_.json()).then(_=>P(_)).catch(_=>console.error("Erro ao buscar logs:",_))},[]);const W=_=>{if(_.preventDefault(),v(null),!u.trim()||!g.trim()){v("Preencha usuário e senha.");return}C(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:g.trim()})}).then(k=>k.json()).then(k=>{if(C(!1),k&&k.status==="success"){const m=k.user;c(m),localStorage.setItem("operador_lanchonete",JSON.stringify(m)),m.role==="cozinha"?t("cozinha"):m.role==="tv"?t("chamada"):t("caixa")}else v(k.error||"Credenciais inválidas.")}).catch(k=>{C(!1),v("Erro de conexão com o servidor.")})},te=()=>{c(null),localStorage.removeItem("operador_lanchonete"),y(""),h(""),v(null)};T.useEffect(()=>(Y.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),Y.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),Y.on("pedidos_iniciais",_=>{d(Array.isArray(_)?_:[])}),Y.on("cardapio_inicial",_=>{w(A(_))}),Y.on("novo_pedido_criado",_=>{d(k=>[_,...k.filter(m=>m.id!==_.id)])}),Y.on("status_pedido_atualizado",_=>{d(k=>k.map(m=>m.id===_.id?_:m)),j(k=>k&&k.id===_.id?_:k)}),Y.on("pedido_chamado",_=>{j(_)}),Y.on("cardapio_atualizado",_=>{w(A(_))}),Y.on("estoque_atualizado",_=>{!Array.isArray(_)||_.length===0||w(k=>({...k,produtos:k.produtos.map(m=>{const O=_.find(D=>D.produtoId===m.id);return O?{...m,controlaEstoque:O.controlaEstoque,estoque:O.estoque,estoqueMinimo:O.estoqueMinimo,reservado:O.reservado,disponivelEstoque:O.disponivel}:m})}))}),Y.on("novo_log_auditoria",_=>{P(k=>[_,...k.filter(m=>m.id!==_.id)])}),Y.on("impressao_falhou",_=>{q(_)}),Y.on("impressao_status",_=>{q(k=>k&&k.pedidoId===_.pedidoId?null:k)}),()=>{Y.off("connect"),Y.off("disconnect"),Y.off("pedidos_iniciais"),Y.off("cardapio_inicial"),Y.off("novo_pedido_criado"),Y.off("status_pedido_atualizado"),Y.off("pedido_chamado"),Y.off("cardapio_atualizado"),Y.off("estoque_atualizado"),Y.off("novo_log_auditoria"),Y.off("impressao_falhou"),Y.off("impressao_status")}),[]);const le=(_,k)=>{Y.emit("criar_pedido",{..._,criadoPor:l?`${l.nome}`:"Caixa"},k)},Se=(_,k)=>{Y.emit("mudar_status_pedido",{id:_,status:k,preparadoPor:l?`${l.nome}`:"Cozinha"})},S=(_,k,m)=>{d(O=>O.map(D=>{if(D.id!==_)return D;const B=(D.itens||[]).map((Oe,Qr)=>{if(Qr!==k)return Oe;const pp=m!==void 0?m:!Oe.entregue;return{...Oe,entregue:pp}}),at=B.reduce((Oe,Qr)=>Oe+(Qr.quantidade||1),0),Wr=B.filter(Oe=>Oe.entregue).reduce((Oe,Qr)=>Oe+(Qr.quantidade||1),0);let Xt=D.status;Wr>=at?Xt="entregue":Wr>0?Xt="entrega_parcial":(D.status==="entregue"||D.status==="entrega_parcial")&&(Xt="em_preparo");const pr={...D,itens:B,status:Xt};return j(Oe=>Oe&&Oe.id===_?pr:Oe),pr})),Y.emit("alternar_item_entregue",{orderId:_,itemIndex:k,entregue:m,operadorNome:l?`${l.nome}`:"Atendente"}),fetch(`/api/orders/${_}/itens/${k}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:m,operadorNome:l?`${l.nome}`:"Atendente"})}).then(O=>O.ok?O.json():null).then(O=>{O&&O.order&&d(D=>D.map(B=>B.id===O.order.id?O.order:B))}).catch(O=>console.error("Erro ao alternar item:",O))},V=(_,k,m)=>{Y.emit("reservar_item",{produtoId:_,quantidade:k||1},m)},N=(_,k,m)=>{Y.emit("liberar_item",{produtoId:_,quantidade:k||1},m)},R=_=>{Y.emit("liberar_carrinho",{},_)},$=(_,k)=>fetch(`/api/menu/produto/${_}/estoque`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({...k,operadorNome:l?l.nome:"Gerente"})}).then(m=>m.json()).catch(m=>(console.error("Erro ao ajustar estoque:",m),{error:"Erro de conexão ao ajustar o estoque."})),Q=_=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(k=>k.json()).catch(k=>console.error("Erro ao salvar produto:",k))},X=_=>{fetch(`/api/menu/produto/${_}`,{method:"DELETE"}).then(k=>k.json()).catch(k=>console.error("Erro ao excluir produto:",k))},ze=_=>{fetch(`/api/menu/produto/${_}/disponivel`,{method:"PATCH"}).then(k=>k.json()).catch(k=>console.error("Erro ao alterar disponibilidade:",k))},Le=_=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then(k=>k.json()).catch(k=>console.error("Erro ao salvar categoria:",k))},st=_=>fetch(`/api/menu/categoria/${_}`,{method:"DELETE"}).then(k=>k.json());if(!l)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar Tema",children:i==="escuro"?s.jsx(bc,{size:16,color:"var(--status-preparo)"}):s.jsx(xc,{size:16,color:"var(--primary)"})})]}),x&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(cp,{size:18}),s.jsx("span",{children:x})]}),s.jsxs("form",{onSubmit:W,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:_=>y(_.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:g,onChange:_=>h(_.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:b,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[b?"Autenticando...":"Entrar no Sistema"," ",s.jsx(rp,{size:18})]})]})]})]});const ge=l.role==="master"||l.role==="caixa",fe=l.role==="master",mt=l.role==="master",ot=l.role==="master",dr=l.role==="master"||l.role==="caixa",Kt=l.role==="master"||l.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[ge&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(yt,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(Ln,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Zi,{size:18})," Chamada TV"]}),dr&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Xo,{size:18})," Vendas"]}),Kt&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Zo,{size:18})," Logs"]}),fe&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(Br,{size:18})," Cardápio"]}),ot&&s.jsxs("button",{className:`nav-btn ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[s.jsx(nr,{size:18})," Impressora"]}),mt&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(ta,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:te,title:`Operador: ${l.nome} (${l.role.toUpperCase()}) - Clique para sair`,children:[s.jsx(qr,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:l.nome}),s.jsx(Km,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(bc,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(xc,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(cg,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(lg,{size:14})," Conectando..."]})]})]})]}),F&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.13)",border:"1px solid var(--primary)",borderRadius:"var(--radius-md)",padding:"0.85rem 1rem",margin:"0 0 1rem 0",display:"flex",alignItems:"center",gap:"0.7rem"},children:[s.jsx(nr,{size:20,color:"var(--primary)",style:{flexShrink:0}}),s.jsxs("div",{style:{flex:1},children:[s.jsxs("div",{style:{fontWeight:800,color:"var(--primary)",fontSize:"0.92rem"},children:["O comprovante ",F.numero?`da comanda #${F.numero}`:""," não foi impresso"]}),s.jsxs("div",{style:{fontSize:"0.84rem",color:"var(--app-ink)",marginTop:"2px"},children:[F.erro," O pedido foi registrado normalmente — se precisar, use ",s.jsx("strong",{children:"Reimprimir"})," em Vendas."]})]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.5rem",minHeight:"32px",flexShrink:0},onClick:()=>q(null),title:"Fechar aviso",children:s.jsx(up,{size:16})})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(ge?s.jsx(dg,{menu:p,operador:l,onEnviarPedido:le,onReservarItem:V,onLiberarItem:N,onLiberarCarrinho:R}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(yc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",l.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(pg,{pedidos:f,operador:l,onMudarStatus:Se,onAlternarItemEntregue:S}),e==="chamada"&&s.jsx(hg,{pedidos:f,ultimoPedidoChamado:M,onMudarStatus:Se,onAlternarItemEntregue:S}),e==="vendas"&&s.jsx(gg,{pedidos:f,operador:l}),e==="logs"&&s.jsx(yg,{logs:z,operador:l}),e==="cardapio"&&(fe?s.jsx(mg,{menu:p,onSalvarProduto:Q,onExcluirProduto:X,onToggleDisponivel:ze,onSalvarCategoria:Le,onExcluirCategoria:st,onAjustarEstoque:$}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(yc,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="impressora"&&s.jsx(kg,{operador:l}),e==="usuarios"&&s.jsx(vg,{operador:l})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[ge&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(yt,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(Ln,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Zi,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),dr&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Xo,{size:20}),s.jsx("span",{children:"Vendas"})]}),Kt&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Zo,{size:20}),s.jsx("span",{children:"Logs"})]}),fe&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(Br,{size:20}),s.jsx("span",{children:"Cardápio"})]}),ot&&s.jsxs("button",{className:`mobile-nav-item ${e==="impressora"?"active":""}`,onClick:()=>t("impressora"),children:[s.jsx(nr,{size:20}),s.jsx("span",{children:"Impressora"})]}),mt&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(ta,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}Ys.createRoot(document.getElementById("root")).render(s.jsx(Fc.StrictMode,{children:s.jsx(jg,{})}));
