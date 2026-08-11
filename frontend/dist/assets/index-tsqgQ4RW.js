(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mu={exports:{}},Bi={},gu={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=Symbol.for("react.element"),ep=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),op=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),ap=Symbol.for("react.suspense"),lp=Symbol.for("react.memo"),up=Symbol.for("react.lazy"),Wa=Symbol.iterator;function cp(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,xu={};function Tr(e,t,r){this.props=e,this.context=t,this.refs=xu,this.updater=r||vu}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ku(){}ku.prototype=Tr.prototype;function $s(e,t,r){this.props=e,this.context=t,this.refs=xu,this.updater=r||vu}var Us=$s.prototype=new ku;Us.constructor=$s;yu(Us,Tr.prototype);Us.isPureReactComponent=!0;var Qa=Array.isArray,wu=Object.prototype.hasOwnProperty,Vs={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,r){var n,i={},s=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)wu.call(t,n)&&!ju.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Cn,type:e,key:s,ref:a,props:i,_owner:Vs.current}}function dp(e,t){return{$$typeof:Cn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cn}function pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ka=/\/+/g;function oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pp(""+e.key):t.toString(36)}function Xn(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cn:case ep:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+oo(a,0):n,Qa(i)?(r="",e!=null&&(r=e.replace(Ka,"$&/")+"/"),Xn(i,t,r,"",function(d){return d})):i!=null&&(qs(i)&&(i=dp(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ka,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Qa(e))for(var l=0;l<e.length;l++){s=e[l];var u=n+oo(s,l);a+=Xn(s,t,r,u,i)}else if(u=cp(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=n+oo(s,l++),a+=Xn(s,t,r,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Pn(e,t,r){if(e==null)return e;var n=[],i=0;return Xn(e,n,"","",function(s){return t.call(r,s,i++)}),n}function fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Yn={transition:null},hp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Yn,ReactCurrentOwner:Vs};function Cu(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Pn,forEach:function(e,t,r){Pn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pn(e,function(){t++}),t},toArray:function(e){return Pn(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Tr;q.Fragment=tp;q.Profiler=np;q.PureComponent=$s;q.StrictMode=rp;q.Suspense=ap;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;q.act=Cu;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=yu({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Vs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)wu.call(t,u)&&!ju.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:Cn,type:e.type,key:i,ref:s,props:n,_owner:a}};q.createContext=function(e){return e={$$typeof:op,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};q.createElement=Su;q.createFactory=function(e){var t=Su.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:sp,render:e}};q.isValidElement=qs;q.lazy=function(e){return{$$typeof:up,_payload:{_status:-1,_result:e},_init:fp}};q.memo=function(e,t){return{$$typeof:lp,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Yn.transition;Yn.transition={};try{e()}finally{Yn.transition=t}};q.unstable_act=Cu;q.useCallback=function(e,t){return Se.current.useCallback(e,t)};q.useContext=function(e){return Se.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};q.useEffect=function(e,t){return Se.current.useEffect(e,t)};q.useId=function(){return Se.current.useId()};q.useImperativeHandle=function(e,t,r){return Se.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Se.current.useMemo(e,t)};q.useReducer=function(e,t,r){return Se.current.useReducer(e,t,r)};q.useRef=function(e){return Se.current.useRef(e)};q.useState=function(e){return Se.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return Se.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return Se.current.useTransition()};q.version="18.3.1";gu.exports=q;var A=gu.exports;const bu=Zd(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=A,gp=Symbol.for("react.element"),vp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,xp=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kp={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,t,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)yp.call(t,n)&&!kp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:gp,type:e,key:s,ref:a,props:i,_owner:xp.current}}Bi.Fragment=vp;Bi.jsx=Nu;Bi.jsxs=Nu;mu.exports=Bi;var o=mu.exports,Mo={},Eu={exports:{}},Me={},_u={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var B=z.length;z.push($);e:for(;0<B;){var S=B-1>>>1,U=z[S];if(0<i(U,$))z[S]=$,z[B]=U,B=S;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var $=z[0],B=z.pop();if(B!==$){z[0]=B;e:for(var S=0,U=z.length,ne=U>>>1;S<ne;){var E=2*(S+1)-1,j=z[E],L=E+1,O=z[L];if(0>i(j,B))L<U&&0>i(O,j)?(z[S]=O,z[L]=B,S=L):(z[S]=j,z[E]=B,S=E);else if(L<U&&0>i(O,B))z[S]=O,z[L]=B,S=L;else break e}}return $}function i(z,$){var B=z.sortIndex-$.sortIndex;return B!==0?B:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],x=1,y=null,p=3,v=!1,g=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var $=r(d);$!==null;){if($.callback===null)n(d);else if($.startTime<=z)n(d),$.sortIndex=$.expirationTime,t(u,$);else break;$=r(d)}}function k(z){if(w=!1,h(z),!g)if(r(u)!==null)g=!0,He(N);else{var $=r(d);$!==null&&We(k,$.startTime-z)}}function N(z,$){g=!1,w&&(w=!1,f(T),T=-1),v=!0;var B=p;try{for(h($),y=r(u);y!==null&&(!(y.expirationTime>$)||z&&!m());){var S=y.callback;if(typeof S=="function"){y.callback=null,p=y.priorityLevel;var U=S(y.expirationTime<=$);$=e.unstable_now(),typeof U=="function"?y.callback=U:y===r(u)&&n(u),h($)}else n(u);y=r(u)}if(y!==null)var ne=!0;else{var E=r(d);E!==null&&We(k,E.startTime-$),ne=!1}return ne}finally{y=null,p=B,v=!1}}var _=!1,P=null,T=-1,V=5,F=-1;function m(){return!(e.unstable_now()-F<V)}function D(){if(P!==null){var z=e.unstable_now();F=z;var $=!0;try{$=P(!0,z)}finally{$?W():(_=!1,P=null)}}else _=!1}var W;if(typeof c=="function")W=function(){c(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,ke=I.port2;I.port1.onmessage=D,W=function(){ke.postMessage(null)}}else W=function(){b(D,0)};function He(z){P=z,_||(_=!0,W())}function We(z,$){T=b(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,He(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var B=p;p=$;try{return z()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=p;p=z;try{return $()}finally{p=B}},e.unstable_scheduleCallback=function(z,$,B){var S=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?S+B:S):B=S,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=B+U,z={id:x++,callback:$,priorityLevel:z,startTime:B,expirationTime:U,sortIndex:-1},B>S?(z.sortIndex=B,t(d,z),r(u)===null&&z===r(d)&&(w?(f(T),T=-1):w=!0,We(k,B-S))):(z.sortIndex=U,t(u,z),g||v||(g=!0,He(N))),z},e.unstable_shouldYield=m,e.unstable_wrapCallback=function(z){var $=p;return function(){var B=p;p=$;try{return z.apply(this,arguments)}finally{p=B}}}})(zu);_u.exports=zu;var wp=_u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=A,Le=wp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pu=new Set,sn={};function Zt(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(sn[e]=t,e=0;e<t.length;e++)Pu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,Sp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Ya={};function Cp(e){return Oo.call(Ya,e)?!0:Oo.call(Xa,e)?!1:Sp.test(e)?Ya[e]=!0:(Xa[e]=!0,!1)}function bp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Np(e,t,r,n){if(t===null||typeof t>"u"||bp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,r,n,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Ws);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qs(e,t,r,n){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Np(t,r,i,n)&&(r=null),n||i===null?Cp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xt=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tn=Symbol.for("react.element"),nr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),Xs=Symbol.for("react.forward_ref"),Io=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Ru=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,so;function Hr(e){if(so===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||""}return`
`+so+e}var ao=!1;function lo(e,t){if(!e||ao)return"";ao=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{ao=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Hr(e):""}function Ep(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=lo(e.type,!1),e;case 11:return e=lo(e.type.render,!1),e;case 1:return e=lo(e.type,!0),e;default:return""}}function Bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case nr:return"Portal";case Do:return"Profiler";case Ks:return"StrictMode";case Io:return"Suspense";case Fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case Xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:Bo(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return Bo(e(t))}catch{}}return null}function _p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bo(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zp(e){var t=Lu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=zp(e))}function Mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Lu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $o(e,t){var r=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ja(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ot(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&Qs(e,"checked",t,!1)}function Uo(e,t){Ou(e,t);var r=Ot(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Za(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vo(e,t,r){(t!=="number"||fi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Wr=Array.isArray;function mr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ot(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function el(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(Wr(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ot(r)}}function Du(e,t){var r=Ot(t.value),n=Ot(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function tl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rn,Fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rn=Rn||document.createElement("div"),Rn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function an(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Bu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function $u(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Bu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Tp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(e,t){if(t){if(Tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,gr=null,vr=null;function rl(e){if(e=En(e)){if(typeof Xo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Hi(t),Xo(e.stateNode,e.type,t))}}function Uu(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Vu(){if(gr){var e=gr,t=vr;if(vr=gr=null,rl(e),t)for(e=0;e<t.length;e++)rl(t[e])}}function qu(e,t){return e(t)}function Hu(){}var uo=!1;function Wu(e,t,r){if(uo)return e(t,r);uo=!0;try{return qu(e,t,r)}finally{uo=!1,(gr!==null||vr!==null)&&(Hu(),Vu())}}function ln(e,t){var r=e.stateNode;if(r===null)return null;var n=Hi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Yo=!1;if(mt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Yo=!1}function Ap(e,t,r,n,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(x){this.onError(x)}}var Gr=!1,hi=null,mi=!1,Go=null,Rp={onError:function(e){Gr=!0,hi=e}};function Lp(e,t,r,n,i,s,a,l,u){Gr=!1,hi=null,Ap.apply(Rp,arguments)}function Mp(e,t,r,n,i,s,a,l,u){if(Lp.apply(this,arguments),Gr){if(Gr){var d=hi;Gr=!1,hi=null}else throw Error(C(198));mi||(mi=!0,Go=d)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nl(e){if(er(e)!==e)throw Error(C(188))}function Op(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return nl(i),e;if(s===n)return nl(i),t;s=s.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=s;break}if(l===n){a=!0,n=i,r=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===r){a=!0,r=s,n=i;break}if(l===n){a=!0,n=s,r=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Ku(e){return e=Op(e),e!==null?Xu(e):null}function Xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xu(e);if(t!==null)return t;e=e.sibling}return null}var Yu=Le.unstable_scheduleCallback,il=Le.unstable_cancelCallback,Dp=Le.unstable_shouldYield,Ip=Le.unstable_requestPaint,oe=Le.unstable_now,Fp=Le.unstable_getCurrentPriorityLevel,Js=Le.unstable_ImmediatePriority,Gu=Le.unstable_UserBlockingPriority,gi=Le.unstable_NormalPriority,Bp=Le.unstable_LowPriority,Ju=Le.unstable_IdlePriority,$i=null,it=null;function $p(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:qp,Up=Math.log,Vp=Math.LN2;function qp(e){return e>>>=0,e===0?32:31-(Up(e)/Vp|0)|0}var Ln=64,Mn=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=Qr(l):(s&=a,s!==0&&(n=Qr(s)))}else a=r&~i,a!==0?n=Qr(a):s!==0&&(n=Qr(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Je(t),i=1<<r,n|=e[r],t&=~i;return n}function Hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Je(s),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Hp(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zu(){var e=Ln;return Ln<<=1,!(Ln&4194240)&&(Ln=64),e}function co(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function bn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=r}function Qp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Je(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Zs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Je(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var K=0;function ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tc,ea,rc,nc,ic,Zo=!1,On=[],Et=null,_t=null,zt=null,un=new Map,cn=new Map,St=[],Kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(t.pointerId)}}function Ir(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=En(t),t!==null&&ea(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,r,n,i){switch(t){case"focusin":return Et=Ir(Et,e,t,r,n,i),!0;case"dragenter":return _t=Ir(_t,e,t,r,n,i),!0;case"mouseover":return zt=Ir(zt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return un.set(s,Ir(un.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,cn.set(s,Ir(cn.get(s)||null,e,t,r,n,i)),!0}return!1}function oc(e){var t=Vt(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Qu(r),t!==null){e.blockedOn=t,ic(e.priority,function(){rc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ko=n,r.target.dispatchEvent(n),Ko=null}else return t=En(r),t!==null&&ea(t),e.blockedOn=r,!1;t.shift()}return!0}function sl(e,t,r){Gn(e)&&r.delete(t)}function Yp(){Zo=!1,Et!==null&&Gn(Et)&&(Et=null),_t!==null&&Gn(_t)&&(_t=null),zt!==null&&Gn(zt)&&(zt=null),un.forEach(sl),cn.forEach(sl)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Yp)))}function dn(e){function t(i){return Fr(i,e)}if(0<On.length){Fr(On[0],e);for(var r=1;r<On.length;r++){var n=On[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Et!==null&&Fr(Et,e),_t!==null&&Fr(_t,e),zt!==null&&Fr(zt,e),un.forEach(t),cn.forEach(t),r=0;r<St.length;r++)n=St[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<St.length&&(r=St[0],r.blockedOn===null);)oc(r),r.blockedOn===null&&St.shift()}var yr=xt.ReactCurrentBatchConfig,yi=!0;function Gp(e,t,r,n){var i=K,s=yr.transition;yr.transition=null;try{K=1,ta(e,t,r,n)}finally{K=i,yr.transition=s}}function Jp(e,t,r,n){var i=K,s=yr.transition;yr.transition=null;try{K=4,ta(e,t,r,n)}finally{K=i,yr.transition=s}}function ta(e,t,r,n){if(yi){var i=es(e,t,r,n);if(i===null)wo(e,t,n,xi,r),ol(e,n);else if(Xp(i,e,t,r,n))n.stopPropagation();else if(ol(e,n),t&4&&-1<Kp.indexOf(e)){for(;i!==null;){var s=En(i);if(s!==null&&tc(s),s=es(e,t,r,n),s===null&&wo(e,t,n,xi,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else wo(e,t,n,null,r)}}var xi=null;function es(e,t,r,n){if(xi=null,e=Gs(n),e=Vt(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Qu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fp()){case Js:return 1;case Gu:return 4;case gi:case Bp:return 16;case Ju:return 536870912;default:return 16}default:return 16}}var bt=null,ra=null,Jn=null;function ac(){if(Jn)return Jn;var e,t=ra,r=t.length,n,i="value"in bt?bt.value:bt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[s-n];n++);return Jn=i.slice(e,1<n?1-n:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function al(){return!1}function Oe(e){function t(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dn:al,this.isPropagationStopped=al,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Oe(Ar),Nn=te({},Ar,{view:0,detail:0}),Zp=Oe(Nn),po,fo,Br,Ui=te({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(po=e.screenX-Br.screenX,fo=e.screenY-Br.screenY):fo=po=0,Br=e),po)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),ll=Oe(Ui),ef=te({},Ui,{dataTransfer:0}),tf=Oe(ef),rf=te({},Nn,{relatedTarget:0}),ho=Oe(rf),nf=te({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),of=Oe(nf),sf=te({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=Oe(sf),lf=te({},Ar,{data:0}),ul=Oe(lf),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=df[e])?!!t[e]:!1}function ia(){return pf}var ff=te({},Nn,{key:function(e){if(e.key){var t=uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hf=Oe(ff),mf=te({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cl=Oe(mf),gf=te({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),vf=Oe(gf),yf=te({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Oe(yf),kf=te({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=Oe(kf),jf=[9,13,27,32],oa=mt&&"CompositionEvent"in window,Jr=null;mt&&"documentMode"in document&&(Jr=document.documentMode);var Sf=mt&&"TextEvent"in window&&!Jr,lc=mt&&(!oa||Jr&&8<Jr&&11>=Jr),dl=" ",pl=!1;function uc(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function Cf(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(pl=!0,dl);case"textInput":return e=t.data,e===dl&&pl?null:e;default:return null}}function bf(e,t){if(or)return e==="compositionend"||!oa&&uc(e,t)?(e=ac(),Jn=ra=bt=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var Nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nf[e.type]:t==="textarea"}function dc(e,t,r,n){Uu(n),t=ki(t,"onChange"),0<t.length&&(r=new na("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Zr=null,pn=null;function Ef(e){jc(e,0)}function Vi(e){var t=lr(e);if(Mu(t))return e}function _f(e,t){if(e==="change")return t}var pc=!1;if(mt){var mo;if(mt){var go="oninput"in document;if(!go){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),go=typeof hl.oninput=="function"}mo=go}else mo=!1;pc=mo&&(!document.documentMode||9<document.documentMode)}function ml(){Zr&&(Zr.detachEvent("onpropertychange",fc),pn=Zr=null)}function fc(e){if(e.propertyName==="value"&&Vi(pn)){var t=[];dc(t,pn,e,Gs(e)),Wu(Ef,t)}}function zf(e,t,r){e==="focusin"?(ml(),Zr=t,pn=r,Zr.attachEvent("onpropertychange",fc)):e==="focusout"&&ml()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(pn)}function Tf(e,t){if(e==="click")return Vi(t)}function Af(e,t){if(e==="input"||e==="change")return Vi(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Rf;function fn(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Oo.call(t,i)||!et(e[i],t[i]))return!1}return!0}function gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vl(e,t){var r=gl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gl(r)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mc(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fi(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=mc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&hc(r.ownerDocument.documentElement,r)){if(n!==null&&sa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=vl(r,s);var a=vl(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=mt&&"documentMode"in document&&11>=document.documentMode,sr=null,ts=null,en=null,rs=!1;function yl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rs||sr==null||sr!==fi(n)||(n=sr,"selectionStart"in n&&sa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),en&&fn(en,n)||(en=n,n=ki(ts,"onSelect"),0<n.length&&(t=new na("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=sr)))}function In(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ar={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},vo={},gc={};mt&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function qi(e){if(vo[e])return vo[e];if(!ar[e])return e;var t=ar[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in gc)return vo[e]=t[r];return e}var vc=qi("animationend"),yc=qi("animationiteration"),xc=qi("animationstart"),kc=qi("transitionend"),wc=new Map,xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){wc.set(e,t),Zt(t,[e])}for(var yo=0;yo<xl.length;yo++){var xo=xl[yo],Of=xo.toLowerCase(),Df=xo[0].toUpperCase()+xo.slice(1);It(Of,"on"+Df)}It(vc,"onAnimationEnd");It(yc,"onAnimationIteration");It(xc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(kc,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),If=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function kl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Mp(n,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;kl(i,l,d),s=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;kl(i,l,d),s=u}}}if(mi)throw e=Go,mi=!1,Go=null,e}function Y(e,t){var r=t[as];r===void 0&&(r=t[as]=new Set);var n=e+"__bubble";r.has(n)||(Sc(t,e,2,!1),r.add(n))}function ko(e,t,r){var n=0;t&&(n|=4),Sc(r,e,n,t)}var Fn="_reactListening"+Math.random().toString(36).slice(2);function hn(e){if(!e[Fn]){e[Fn]=!0,Pu.forEach(function(r){r!=="selectionchange"&&(If.has(r)||ko(r,!1,e),ko(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fn]||(t[Fn]=!0,ko("selectionchange",!1,t))}}function Sc(e,t,r,n){switch(sc(t)){case 1:var i=Gp;break;case 4:i=Jp;break;default:i=ta}r=i.bind(null,t,r,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function wo(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Vt(l),a===null)return;if(u=a.tag,u===5||u===6){n=s=a;continue e}l=l.parentNode}}n=n.return}Wu(function(){var d=s,x=Gs(r),y=[];e:{var p=wc.get(e);if(p!==void 0){var v=na,g=e;switch(e){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":v=hf;break;case"focusin":g="focus",v=ho;break;case"focusout":g="blur",v=ho;break;case"beforeblur":case"afterblur":v=ho;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vf;break;case vc:case yc:case xc:v=of;break;case kc:v=xf;break;case"scroll":v=Zp;break;case"wheel":v=wf;break;case"copy":case"cut":case"paste":v=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=cl}var w=(t&4)!==0,b=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=d,h;c!==null;){h=c;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=ln(c,f),k!=null&&w.push(mn(c,k,h)))),b)break;c=c.return}0<w.length&&(p=new v(p,g,null,r,x),y.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==Ko&&(g=r.relatedTarget||r.fromElement)&&(Vt(g)||g[gt]))break e;if((v||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=r.relatedTarget||r.toElement,v=d,g=g?Vt(g):null,g!==null&&(b=er(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=d),v!==g)){if(w=ll,k="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=cl,k="onPointerLeave",f="onPointerEnter",c="pointer"),b=v==null?p:lr(v),h=g==null?p:lr(g),p=new w(k,c+"leave",v,r,x),p.target=b,p.relatedTarget=h,k=null,Vt(x)===d&&(w=new w(f,c+"enter",g,r,x),w.target=h,w.relatedTarget=b,k=w),b=k,v&&g)t:{for(w=v,f=g,c=0,h=w;h;h=tr(h))c++;for(h=0,k=f;k;k=tr(k))h++;for(;0<c-h;)w=tr(w),c--;for(;0<h-c;)f=tr(f),h--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=tr(w),f=tr(f)}w=null}else w=null;v!==null&&wl(y,p,v,w,!1),g!==null&&b!==null&&wl(y,b,g,w,!0)}}e:{if(p=d?lr(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var N=_f;else if(fl(p))if(pc)N=Af;else{N=Pf;var _=zf}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Tf);if(N&&(N=N(e,d))){dc(y,N,r,x);break e}_&&_(e,p,d),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Vo(p,"number",p.value)}switch(_=d?lr(d):window,e){case"focusin":(fl(_)||_.contentEditable==="true")&&(sr=_,ts=d,en=null);break;case"focusout":en=ts=sr=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,yl(y,r,x);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":yl(y,r,x)}var P;if(oa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else or?uc(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(lc&&r.locale!=="ko"&&(or||T!=="onCompositionStart"?T==="onCompositionEnd"&&or&&(P=ac()):(bt=x,ra="value"in bt?bt.value:bt.textContent,or=!0)),_=ki(d,T),0<_.length&&(T=new ul(T,e,null,r,x),y.push({event:T,listeners:_}),P?T.data=P:(P=cc(r),P!==null&&(T.data=P)))),(P=Sf?Cf(e,r):bf(e,r))&&(d=ki(d,"onBeforeInput"),0<d.length&&(x=new ul("onBeforeInput","beforeinput",null,r,x),y.push({event:x,listeners:d}),x.data=P))}jc(y,t)})}function mn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ki(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ln(e,r),s!=null&&n.unshift(mn(e,s,i)),s=ln(e,t),s!=null&&n.push(mn(e,s,i))),e=e.return}return n}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,t,r,n,i){for(var s=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,d=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&d!==null&&(l=d,i?(u=ln(r,s),u!=null&&a.unshift(mn(r,u,l))):i||(u=ln(r,s),u!=null&&a.push(mn(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Ff=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function jl(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Bf,"")}function Bn(e,t,r){if(t=jl(t),jl(e)!==t&&r)throw Error(C(425))}function wi(){}var ns=null,is=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(Vf)}:ss;function Vf(e){setTimeout(function(){throw e})}function jo(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),dn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);dn(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Rr,gn="__reactProps$"+Rr,gt="__reactContainer$"+Rr,as="__reactEvents$"+Rr,qf="__reactListeners$"+Rr,Hf="__reactHandles$"+Rr;function Vt(e){var t=e[nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gt]||r[nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Cl(e);e!==null;){if(r=e[nt])return r;e=Cl(e)}return t}e=r,r=e.parentNode}return null}function En(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Hi(e){return e[gn]||null}var ls=[],ur=-1;function Ft(e){return{current:e}}function G(e){0>ur||(e.current=ls[ur],ls[ur]=null,ur--)}function X(e,t){ur++,ls[ur]=e.current,e.current=t}var Dt={},xe=Ft(Dt),Ee=Ft(!1),Kt=Dt;function Sr(e,t){var r=e.type.contextTypes;if(!r)return Dt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function ji(){G(Ee),G(xe)}function bl(e,t,r){if(xe.current!==Dt)throw Error(C(168));X(xe,t),X(Ee,r)}function Cc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,_p(e)||"Unknown",i));return te({},r,n)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Kt=xe.current,X(xe,e),X(Ee,Ee.current),!0}function Nl(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=Cc(e,t,Kt),n.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(xe),X(xe,e)):G(Ee),X(Ee,r)}var ct=null,Wi=!1,So=!1;function bc(e){ct===null?ct=[e]:ct.push(e)}function Wf(e){Wi=!0,bc(e)}function Bt(){if(!So&&ct!==null){So=!0;var e=0,t=K;try{var r=ct;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ct=null,Wi=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Yu(Js,Bt),i}finally{K=t,So=!1}}return null}var cr=[],dr=0,Ci=null,bi=0,Ie=[],Fe=0,Xt=null,pt=1,ft="";function $t(e,t){cr[dr++]=bi,cr[dr++]=Ci,Ci=e,bi=t}function Nc(e,t,r){Ie[Fe++]=pt,Ie[Fe++]=ft,Ie[Fe++]=Xt,Xt=e;var n=pt;e=ft;var i=32-Je(n)-1;n&=~(1<<i),r+=1;var s=32-Je(t)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,pt=1<<32-Je(t)+i|r<<i|n,ft=s+e}else pt=1<<s|r<<i|n,ft=e}function aa(e){e.return!==null&&($t(e,1),Nc(e,1,0))}function la(e){for(;e===Ci;)Ci=cr[--dr],cr[dr]=null,bi=cr[--dr],cr[dr]=null;for(;e===Xt;)Xt=Ie[--Fe],Ie[Fe]=null,ft=Ie[--Fe],Ie[Fe]=null,pt=Ie[--Fe],Ie[Fe]=null}var Re=null,Ae=null,J=!1,Ge=null;function Ec(e,t){var r=$e(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function El(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ae=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Xt!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=$e(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Re=e,Ae=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(J){var t=Ae;if(t){var r=t;if(!El(e,t)){if(us(e))throw Error(C(418));t=Pt(r.nextSibling);var n=Re;t&&El(e,t)?Ec(n,r):(e.flags=e.flags&-4097|2,J=!1,Re=e)}}else{if(us(e))throw Error(C(418));e.flags=e.flags&-4097|2,J=!1,Re=e}}}function _l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function $n(e){if(e!==Re)return!1;if(!J)return _l(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Ae)){if(us(e))throw _c(),Error(C(418));for(;t;)Ec(e,t),t=Pt(t.nextSibling)}if(_l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ae=Pt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Re?Pt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=Ae;e;)e=Pt(e.nextSibling)}function Cr(){Ae=Re=null,J=!1}function ua(e){Ge===null?Ge=[e]:Ge.push(e)}var Qf=xt.ReactCurrentBatchConfig;function $r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function Un(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zl(e){var t=e._init;return t(e._payload)}function zc(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function r(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Lt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,h,k){return c===null||c.tag!==6?(c=Po(h,f.mode,k),c.return=f,c):(c=i(c,h),c.return=f,c)}function u(f,c,h,k){var N=h.type;return N===ir?x(f,c,h.props.children,k,h.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wt&&zl(N)===c.type)?(k=i(c,h.props),k.ref=$r(f,c,h),k.return=f,k):(k=si(h.type,h.key,h.props,null,f.mode,k),k.ref=$r(f,c,h),k.return=f,k)}function d(f,c,h,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=To(h,f.mode,k),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function x(f,c,h,k,N){return c===null||c.tag!==7?(c=Qt(h,f.mode,k,N),c.return=f,c):(c=i(c,h),c.return=f,c)}function y(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Po(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Tn:return h=si(c.type,c.key,c.props,null,f.mode,h),h.ref=$r(f,null,c),h.return=f,h;case nr:return c=To(c,f.mode,h),c.return=f,c;case wt:var k=c._init;return y(f,k(c._payload),h)}if(Wr(c)||Or(c))return c=Qt(c,f.mode,h,null),c.return=f,c;Un(f,c)}return null}function p(f,c,h,k){var N=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:l(f,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:return h.key===N?u(f,c,h,k):null;case nr:return h.key===N?d(f,c,h,k):null;case wt:return N=h._init,p(f,c,N(h._payload),k)}if(Wr(h)||Or(h))return N!==null?null:x(f,c,h,k,null);Un(f,h)}return null}function v(f,c,h,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,l(c,f,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Tn:return f=f.get(k.key===null?h:k.key)||null,u(c,f,k,N);case nr:return f=f.get(k.key===null?h:k.key)||null,d(c,f,k,N);case wt:var _=k._init;return v(f,c,h,_(k._payload),N)}if(Wr(k)||Or(k))return f=f.get(h)||null,x(c,f,k,N,null);Un(c,k)}return null}function g(f,c,h,k){for(var N=null,_=null,P=c,T=c=0,V=null;P!==null&&T<h.length;T++){P.index>T?(V=P,P=null):V=P.sibling;var F=p(f,P,h[T],k);if(F===null){P===null&&(P=V);break}e&&P&&F.alternate===null&&t(f,P),c=s(F,c,T),_===null?N=F:_.sibling=F,_=F,P=V}if(T===h.length)return r(f,P),J&&$t(f,T),N;if(P===null){for(;T<h.length;T++)P=y(f,h[T],k),P!==null&&(c=s(P,c,T),_===null?N=P:_.sibling=P,_=P);return J&&$t(f,T),N}for(P=n(f,P);T<h.length;T++)V=v(P,f,T,h[T],k),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?T:V.key),c=s(V,c,T),_===null?N=V:_.sibling=V,_=V);return e&&P.forEach(function(m){return t(f,m)}),J&&$t(f,T),N}function w(f,c,h,k){var N=Or(h);if(typeof N!="function")throw Error(C(150));if(h=N.call(h),h==null)throw Error(C(151));for(var _=N=null,P=c,T=c=0,V=null,F=h.next();P!==null&&!F.done;T++,F=h.next()){P.index>T?(V=P,P=null):V=P.sibling;var m=p(f,P,F.value,k);if(m===null){P===null&&(P=V);break}e&&P&&m.alternate===null&&t(f,P),c=s(m,c,T),_===null?N=m:_.sibling=m,_=m,P=V}if(F.done)return r(f,P),J&&$t(f,T),N;if(P===null){for(;!F.done;T++,F=h.next())F=y(f,F.value,k),F!==null&&(c=s(F,c,T),_===null?N=F:_.sibling=F,_=F);return J&&$t(f,T),N}for(P=n(f,P);!F.done;T++,F=h.next())F=v(P,f,T,F.value,k),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?T:F.key),c=s(F,c,T),_===null?N=F:_.sibling=F,_=F);return e&&P.forEach(function(D){return t(f,D)}),J&&$t(f,T),N}function b(f,c,h,k){if(typeof h=="object"&&h!==null&&h.type===ir&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:e:{for(var N=h.key,_=c;_!==null;){if(_.key===N){if(N=h.type,N===ir){if(_.tag===7){r(f,_.sibling),c=i(_,h.props.children),c.return=f,f=c;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wt&&zl(N)===_.type){r(f,_.sibling),c=i(_,h.props),c.ref=$r(f,_,h),c.return=f,f=c;break e}r(f,_);break}else t(f,_);_=_.sibling}h.type===ir?(c=Qt(h.props.children,f.mode,k,h.key),c.return=f,f=c):(k=si(h.type,h.key,h.props,null,f.mode,k),k.ref=$r(f,c,h),k.return=f,f=k)}return a(f);case nr:e:{for(_=h.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){r(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{r(f,c);break}else t(f,c);c=c.sibling}c=To(h,f.mode,k),c.return=f,f=c}return a(f);case wt:return _=h._init,b(f,c,_(h._payload),k)}if(Wr(h))return g(f,c,h,k);if(Or(h))return w(f,c,h,k);Un(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(r(f,c.sibling),c=i(c,h),c.return=f,f=c):(r(f,c),c=Po(h,f.mode,k),c.return=f,f=c),a(f)):r(f,c)}return b}var br=zc(!0),Pc=zc(!1),Ni=Ft(null),Ei=null,pr=null,ca=null;function da(){ca=pr=Ei=null}function pa(e){var t=Ni.current;G(Ni),e._currentValue=t}function ds(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function xr(e,t){Ei=e,ca=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Ei===null)throw Error(C(308));pr=e,Ei.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var qt=null;function fa(e){qt===null?qt=[e]:qt.push(e)}function Tc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,fa(t)):(r.next=i.next,i.next=r),t.interleaved=r,vt(e,n)}function vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var jt=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Q&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,vt(e,r)}return i=n.interleaved,i===null?(t.next=t,fa(n)):(t.next=i.next,i.next=t),n.interleaved=t,vt(e,r)}function ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zs(e,r)}}function Pl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function _i(e,t,r,n){var i=e.updateQueue;jt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,l=x.lastBaseUpdate,l!==a&&(l===null?x.firstBaseUpdate=d:l.next=d,x.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;a=0,x=d=u=null,l=s;do{var p=l.lane,v=l.eventTime;if((n&p)===p){x!==null&&(x=x.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,w=l;switch(p=t,v=r,w.tag){case 1:if(g=w.payload,typeof g=="function"){y=g.call(v,y,p);break e}y=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,p=typeof g=="function"?g.call(v,y,p):g,p==null)break e;y=te({},y,p);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},x===null?(d=x=v,u=y):x=x.next=v,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(x===null&&(u=y),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Gt|=a,e.lanes=a,e.memoizedState=y}}function Tl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var _n={},ot=Ft(_n),vn=Ft(_n),yn=Ft(_n);function Ht(e){if(e===_n)throw Error(C(174));return e}function ma(e,t){switch(X(yn,t),X(vn,e),X(ot,_n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ho(t,e)}G(ot),X(ot,t)}function Nr(){G(ot),G(vn),G(yn)}function Rc(e){Ht(yn.current);var t=Ht(ot.current),r=Ho(t,e.type);t!==r&&(X(vn,e),X(ot,r))}function ga(e){vn.current===e&&(G(ot),G(vn))}var Z=Ft(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function va(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var ti=xt.ReactCurrentDispatcher,bo=xt.ReactCurrentBatchConfig,Yt=0,ee=null,le=null,de=null,Pi=!1,tn=!1,xn=0,Kf=0;function ge(){throw Error(C(321))}function ya(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!et(e[r],t[r]))return!1;return!0}function xa(e,t,r,n,i,s){if(Yt=s,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Jf:Zf,e=r(n,i),tn){s=0;do{if(tn=!1,xn=0,25<=s)throw Error(C(301));s+=1,de=le=null,t.updateQueue=null,ti.current=eh,e=r(n,i)}while(tn)}if(ti.current=Ti,t=le!==null&&le.next!==null,Yt=0,de=le=ee=null,Pi=!1,t)throw Error(C(300));return e}function ka(){var e=xn!==0;return xn=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=e:de=de.next=e,de}function qe(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?ee.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(C(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?ee.memoizedState=de=e:de=de.next=e}return de}function kn(e,t){return typeof t=="function"?t(e):t}function No(e){var t=qe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=le,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=a=null,u=null,d=s;do{var x=d.lane;if((Yt&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var y={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,a=n):u=u.next=y,ee.lanes|=x,Gt|=x}d=d.next}while(d!==null&&d!==s);u===null?a=n:u.next=l,et(n,t.memoizedState)||(Ne=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,ee.lanes|=s,Gt|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Eo(e){var t=qe(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);et(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Lc(){}function Mc(e,t){var r=ee,n=qe(),i=t(),s=!et(n.memoizedState,i);if(s&&(n.memoizedState=i,Ne=!0),n=n.queue,wa(Ic.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||de!==null&&de.memoizedState.tag&1){if(r.flags|=2048,wn(9,Dc.bind(null,r,n,i,t),void 0,null),pe===null)throw Error(C(349));Yt&30||Oc(r,t,i)}return i}function Oc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Dc(e,t,r,n){t.value=r,t.getSnapshot=n,Fc(t)&&Bc(e)}function Ic(e,t,r){return r(function(){Fc(t)&&Bc(e)})}function Fc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!et(e,r)}catch{return!0}}function Bc(e){var t=vt(e,1);t!==null&&Ze(t,e,1,-1)}function Al(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,ee,e),[t.memoizedState,e]}function wn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function $c(){return qe().memoizedState}function ri(e,t,r,n){var i=rt();ee.flags|=e,i.memoizedState=wn(1|t,r,void 0,n===void 0?null:n)}function Qi(e,t,r,n){var i=qe();n=n===void 0?null:n;var s=void 0;if(le!==null){var a=le.memoizedState;if(s=a.destroy,n!==null&&ya(n,a.deps)){i.memoizedState=wn(t,r,s,n);return}}ee.flags|=e,i.memoizedState=wn(1|t,r,s,n)}function Rl(e,t){return ri(8390656,8,e,t)}function wa(e,t){return Qi(2048,8,e,t)}function Uc(e,t){return Qi(4,2,e,t)}function Vc(e,t){return Qi(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,r){return r=r!=null?r.concat([e]):null,Qi(4,4,qc.bind(null,t,e),r)}function ja(){}function Wc(e,t){var r=qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ya(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Qc(e,t){var r=qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ya(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Kc(e,t,r){return Yt&21?(et(r,t)||(r=Zu(),ee.lanes|=r,Gt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=r)}function Xf(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=bo.transition;bo.transition={};try{e(!1),t()}finally{K=r,bo.transition=n}}function Xc(){return qe().memoizedState}function Yf(e,t,r){var n=Rt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Yc(e))Gc(t,r);else if(r=Tc(e,t,r,n),r!==null){var i=je();Ze(r,e,n,i),Jc(r,t,n)}}function Gf(e,t,r){var n=Rt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))Gc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,r);if(i.hasEagerState=!0,i.eagerState=l,et(l,a)){var u=t.interleaved;u===null?(i.next=i,fa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=Tc(e,t,i,n),r!==null&&(i=je(),Ze(r,e,n,i),Jc(r,t,n))}}function Yc(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Gc(e,t){tn=Pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Jc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zs(e,r)}}var Ti={readContext:Ve,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Jf={readContext:Ve,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Rl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,qc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Yf.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Al,useDebugValue:ja,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Al(!1),t=e[0];return e=Xf.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ee,i=rt();if(J){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),pe===null)throw Error(C(349));Yt&30||Oc(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Rl(Ic.bind(null,n,s,e),[e]),n.flags|=2048,wn(9,Dc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=rt(),t=pe.identifierPrefix;if(J){var r=ft,n=pt;r=(n&~(1<<32-Je(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=xn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Kf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zf={readContext:Ve,useCallback:Wc,useContext:Ve,useEffect:wa,useImperativeHandle:Hc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Qc,useReducer:No,useRef:$c,useState:function(){return No(kn)},useDebugValue:ja,useDeferredValue:function(e){var t=qe();return Kc(t,le.memoizedState,e)},useTransition:function(){var e=No(kn)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Lc,useSyncExternalStore:Mc,useId:Xc,unstable_isNewReconciler:!1},eh={readContext:Ve,useCallback:Wc,useContext:Ve,useEffect:wa,useImperativeHandle:Hc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Qc,useReducer:Eo,useRef:$c,useState:function(){return Eo(kn)},useDebugValue:ja,useDeferredValue:function(e){var t=qe();return le===null?t.memoizedState=e:Kc(t,le.memoizedState,e)},useTransition:function(){var e=Eo(kn)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Lc,useSyncExternalStore:Mc,useId:Xc,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ps(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ki={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=je(),i=Rt(e),s=ht(n,i);s.payload=t,r!=null&&(s.callback=r),t=Tt(e,s,i),t!==null&&(Ze(t,e,i,n),ei(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=je(),i=Rt(e),s=ht(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Tt(e,s,i),t!==null&&(Ze(t,e,i,n),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=je(),n=Rt(e),i=ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,n),t!==null&&(Ze(t,e,n,r),ei(t,e,n))}};function Ll(e,t,r,n,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,a):t.prototype&&t.prototype.isPureReactComponent?!fn(r,n)||!fn(i,s):!0}function Zc(e,t,r){var n=!1,i=Dt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(i=_e(t)?Kt:xe.current,n=t.contextTypes,s=(n=n!=null)?Sr(e,i):Dt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ml(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function fs(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ha(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ve(s):(s=_e(t)?Kt:xe.current,i.context=Sr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ps(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),_i(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var r="",n=t;do r+=Ep(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function _o(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var th=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,r){r=ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ri||(Ri=!0,Cs=n),hs(e,t)},r}function td(e,t,r){r=ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){hs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){hs(e,t),typeof n!="function"&&(At===null?At=new Set([this]):At.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Ol(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new th;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=mh.bind(null,e,t,r),t.then(e,e))}function Dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Il(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ht(-1,1),t.tag=2,Tt(r,t,1))),r.lanes|=1),e)}var rh=xt.ReactCurrentOwner,Ne=!1;function we(e,t,r,n){t.child=e===null?Pc(t,null,r,n):br(t,e.child,r,n)}function Fl(e,t,r,n,i){r=r.render;var s=t.ref;return xr(t,i),n=xa(e,t,r,n,s,i),r=ka(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(J&&r&&aa(t),t.flags|=1,we(e,t,n,i),t.child)}function Bl(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Pa(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,rd(e,t,s,n,i)):(e=si(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:fn,r(a,n)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Lt(s,n),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(fn(s,n)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ms(e,t,r,n,i)}function nd(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(hr,Te),Te|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(hr,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,X(hr,Te),Te|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,X(hr,Te),Te|=n;return we(e,t,i,r),t.child}function id(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,r,n,i){var s=_e(r)?Kt:xe.current;return s=Sr(t,s),xr(t,i),r=xa(e,t,r,n,s,i),n=ka(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(J&&n&&aa(t),t.flags|=1,we(e,t,r,i),t.child)}function $l(e,t,r,n,i){if(_e(r)){var s=!0;Si(t)}else s=!1;if(xr(t,i),t.stateNode===null)ni(e,t),Zc(t,r,n),fs(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ve(d):(d=_e(r)?Kt:xe.current,d=Sr(t,d));var x=r.getDerivedStateFromProps,y=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==d)&&Ml(t,a,n,d),jt=!1;var p=t.memoizedState;a.state=p,_i(t,n,a,i),u=t.memoizedState,l!==n||p!==u||Ee.current||jt?(typeof x=="function"&&(ps(t,r,x,n),u=t.memoizedState),(l=jt||Ll(t,r,l,n,p,u,d))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=d,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Ac(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ke(t.type,l),a.props=d,y=t.pendingProps,p=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Ve(u):(u=_e(r)?Kt:xe.current,u=Sr(t,u));var v=r.getDerivedStateFromProps;(x=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==y||p!==u)&&Ml(t,a,n,u),jt=!1,p=t.memoizedState,a.state=p,_i(t,n,a,i);var g=t.memoizedState;l!==y||p!==g||Ee.current||jt?(typeof v=="function"&&(ps(t,r,v,n),g=t.memoizedState),(d=jt||Ll(t,r,d,n,p,g,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),a.props=n,a.state=g,a.context=u,n=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return gs(e,t,r,n,s,i)}function gs(e,t,r,n,i,s){id(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Nl(t,r,!1),yt(e,t,s);n=t.stateNode,rh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=br(t,e.child,null,s),t.child=br(t,null,l,s)):we(e,t,l,s),t.memoizedState=n.state,i&&Nl(t,r,!0),t.child}function od(e){var t=e.stateNode;t.pendingContext?bl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bl(e,t.context,!1),ma(e,t.containerInfo)}function Ul(e,t,r,n,i){return Cr(),ua(i),t.flags|=256,we(e,t,r,n),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,r){var n=t.pendingProps,i=Z.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(Z,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,s?(n=t.mode,s=t.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gi(a,n,0,null),e=Qt(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ys(r),t.memoizedState=vs,e):Sa(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nh(e,t,a,n,l,i,r);if(s){s=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Lt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Lt(l,s):(s=Qt(s,a,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,a=e.child.memoizedState,a=a===null?ys(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,t.memoizedState=vs,n}return s=e.child,e=s.sibling,n=Lt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Sa(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vn(e,t,r,n){return n!==null&&ua(n),br(t,e.child,null,r),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nh(e,t,r,n,i,s,a){if(r)return t.flags&256?(t.flags&=-257,n=_o(Error(C(422))),Vn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=Gi({mode:"visible",children:n.children},i,0,null),s=Qt(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&br(t,e.child,null,a),t.child.memoizedState=ys(a),t.memoizedState=vs,s);if(!(t.mode&1))return Vn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(C(419)),n=_o(s,n,void 0),Vn(e,t,a,n)}if(l=(a&e.childLanes)!==0,Ne||l){if(n=pe,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vt(e,i),Ze(n,e,i,-1))}return za(),n=_o(Error(C(421))),Vn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gh.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ae=Pt(i.nextSibling),Re=t,J=!0,Ge=null,e!==null&&(Ie[Fe++]=pt,Ie[Fe++]=ft,Ie[Fe++]=Xt,pt=e.id,ft=e.overflow,Xt=t),t=Sa(t,n.children),t.flags|=4096,t)}function Vl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ds(e.return,t,r)}function zo(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function ad(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(we(e,t,n.children,r),n=Z.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vl(e,r,t);else if(e.tag===19)Vl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(Z,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&zi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),zo(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}zo(t,!0,r,null,s);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=Lt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Lt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ih(e,t,r){switch(t.tag){case 3:od(t),Cr();break;case 5:Rc(t);break;case 1:_e(t.type)&&Si(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;X(Ni,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(Z,Z.current&1),t.flags|=128,null):r&t.child.childLanes?sd(e,t,r):(X(Z,Z.current&1),e=yt(e,t,r),e!==null?e.sibling:null);X(Z,Z.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ad(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(Z,Z.current),n)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,r)}return yt(e,t,r)}var ld,xs,ud,cd;ld=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xs=function(){};ud=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ht(ot.current);var s=null;switch(r){case"input":i=$o(e,i),n=$o(e,n),s=[];break;case"select":i=te({},i,{value:void 0}),n=te({},n,{value:void 0}),s=[];break;case"textarea":i=qo(e,i),n=qo(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=wi)}Wo(r,n);var a;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var u=n[d];if(l=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(s||(s=[]),s.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Y("scroll",e),s||l===u||(s=[])):(s=s||[]).push(d,u))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};cd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ur(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function oh(e,t,r){var n=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return _e(t.type)&&ji(),ve(t),null;case 3:return n=t.stateNode,Nr(),G(Ee),G(xe),va(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Es(Ge),Ge=null))),xs(e,t),ve(t),null;case 5:ga(t);var i=Ht(yn.current);if(r=t.type,e!==null&&t.stateNode!=null)ud(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Ht(ot.current),$n(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[nt]=t,n[gn]=s,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(i=0;i<Kr.length;i++)Y(Kr[i],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":Ja(n,s),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Y("invalid",n);break;case"textarea":el(n,s),Y("invalid",n)}Wo(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bn(n.textContent,l,e),i=["children",""+l]):sn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",n)}switch(r){case"input":An(n),Za(n,s,!0);break;case"textarea":An(n),tl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=wi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[nt]=t,e[gn]=n,ld(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qo(r,n),r){case"dialog":Y("cancel",e),Y("close",e),i=n;break;case"iframe":case"object":case"embed":Y("load",e),i=n;break;case"video":case"audio":for(i=0;i<Kr.length;i++)Y(Kr[i],e);i=n;break;case"source":Y("error",e),i=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=n;break;case"details":Y("toggle",e),i=n;break;case"input":Ja(e,n),i=$o(e,n),Y("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=te({},n,{value:void 0}),Y("invalid",e);break;case"textarea":el(e,n),i=qo(e,n),Y("invalid",e);break;default:i=n}Wo(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?$u(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fu(e,u)):s==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&an(e,u):typeof u=="number"&&an(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sn.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Y("scroll",e):u!=null&&Qs(e,s,u,a))}switch(r){case"input":An(e),Za(e,n,!1);break;case"textarea":An(e),tl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ot(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?mr(e,!!n.multiple,s,!1):n.defaultValue!=null&&mr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=Ht(yn.current),Ht(ot.current),$n(t)){if(n=t.stateNode,r=t.memoizedProps,n[nt]=t,(s=n.nodeValue!==r)&&(e=Re,e!==null))switch(e.tag){case 3:Bn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bn(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return ve(t),null;case 13:if(G(Z),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ae!==null&&t.mode&1&&!(t.flags&128))_c(),Cr(),t.flags|=98560,s=!1;else if(s=$n(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[nt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else Ge!==null&&(Es(Ge),Ge=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ue===0&&(ue=3):za())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Nr(),xs(e,t),e===null&&hn(t.stateNode.containerInfo),ve(t),null;case 10:return pa(t.type._context),ve(t),null;case 17:return _e(t.type)&&ji(),ve(t),null;case 19:if(G(Z),s=t.memoizedState,s===null)return ve(t),null;if(n=(t.flags&128)!==0,a=s.rendering,a===null)if(n)Ur(s,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=zi(e),a!==null){for(t.flags|=128,Ur(s,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(Z,Z.current&1|2),t.child}e=e.sibling}s.tail!==null&&oe()>_r&&(t.flags|=128,n=!0,Ur(s,!1),t.lanes=4194304)}else{if(!n)if(e=zi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!J)return ve(t),null}else 2*oe()-s.renderingStartTime>_r&&r!==1073741824&&(t.flags|=128,n=!0,Ur(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(r=s.last,r!==null?r.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=oe(),t.sibling=null,r=Z.current,X(Z,n?r&1|2:r&1),t):(ve(t),null);case 22:case 23:return _a(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Te&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function sh(e,t){switch(la(t),t.tag){case 1:return _e(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),G(Ee),G(xe),va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return Nr(),null;case 10:return pa(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var qn=!1,ye=!1,ah=typeof WeakSet=="function"?WeakSet:Set,R=null;function fr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){re(e,t,n)}else r.current=null}function ks(e,t,r){try{r()}catch(n){re(e,t,n)}}var ql=!1;function lh(e,t){if(ns=yi,e=mc(),sa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,d=0,x=0,y=e,p=null;t:for(;;){for(var v;y!==r||i!==0&&y.nodeType!==3||(l=a+i),y!==s||n!==0&&y.nodeType!==3||(u=a+n),y.nodeType===3&&(a+=y.nodeValue.length),(v=y.firstChild)!==null;)p=y,y=v;for(;;){if(y===e)break t;if(p===r&&++d===i&&(l=a),p===s&&++x===n&&(u=a),(v=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=v}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(is={focusedElem:e,selectionRange:r},yi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,b=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),b);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=ql,ql=!1,g}function rn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ks(t,r,s)}i=i.next}while(i!==n)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ws(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[gn],delete t[as],delete t[qf],delete t[Hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pd(e){return e.tag===5||e.tag===3||e.tag===4}function Hl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wi));else if(n!==4&&(e=e.child,e!==null))for(js(e,t,r),e=e.sibling;e!==null;)js(e,t,r),e=e.sibling}function Ss(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ss(e,t,r),e=e.sibling;e!==null;)Ss(e,t,r),e=e.sibling}var fe=null,Xe=!1;function kt(e,t,r){for(r=r.child;r!==null;)fd(e,t,r),r=r.sibling}function fd(e,t,r){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 5:ye||fr(r,t);case 6:var n=fe,i=Xe;fe=null,kt(e,t,r),fe=n,Xe=i,fe!==null&&(Xe?(e=fe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):fe.removeChild(r.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,r=r.stateNode,e.nodeType===8?jo(e.parentNode,r):e.nodeType===1&&jo(e,r),dn(e)):jo(fe,r.stateNode));break;case 4:n=fe,i=Xe,fe=r.stateNode.containerInfo,Xe=!0,kt(e,t,r),fe=n,Xe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ks(r,t,a),i=i.next}while(i!==n)}kt(e,t,r);break;case 1:if(!ye&&(fr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){re(r,t,l)}kt(e,t,r);break;case 21:kt(e,t,r);break;case 22:r.mode&1?(ye=(n=ye)||r.memoizedState!==null,kt(e,t,r),ye=n):kt(e,t,r);break;default:kt(e,t,r)}}function Wl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ah),t.forEach(function(n){var i=vh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Qe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Xe=!1;break e;case 3:fe=l.stateNode.containerInfo,Xe=!0;break e;case 4:fe=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(fe===null)throw Error(C(160));fd(s,a,i),fe=null,Xe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){re(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),tt(e),n&4){try{rn(3,e,e.return),Xi(3,e)}catch(w){re(e,e.return,w)}try{rn(5,e,e.return)}catch(w){re(e,e.return,w)}}break;case 1:Qe(t,e),tt(e),n&512&&r!==null&&fr(r,r.return);break;case 5:if(Qe(t,e),tt(e),n&512&&r!==null&&fr(r,r.return),e.flags&32){var i=e.stateNode;try{an(i,"")}catch(w){re(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ou(i,s),Qo(l,a);var d=Qo(l,s);for(a=0;a<u.length;a+=2){var x=u[a],y=u[a+1];x==="style"?$u(i,y):x==="dangerouslySetInnerHTML"?Fu(i,y):x==="children"?an(i,y):Qs(i,x,y,d)}switch(l){case"input":Uo(i,s);break;case"textarea":Du(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?mr(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[gn]=s}catch(w){re(e,e.return,w)}}break;case 6:if(Qe(t,e),tt(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){re(e,e.return,w)}}break;case 3:if(Qe(t,e),tt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(w){re(e,e.return,w)}break;case 4:Qe(t,e),tt(e);break;case 13:Qe(t,e),tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Na=oe())),n&4&&Wl(e);break;case 22:if(x=r!==null&&r.memoizedState!==null,e.mode&1?(ye=(d=ye)||x,Qe(t,e),ye=d):Qe(t,e),tt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(R=e,x=e.child;x!==null;){for(y=R=x;R!==null;){switch(p=R,v=p.child,p.tag){case 0:case 11:case 14:case 15:rn(4,p,p.return);break;case 1:fr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){re(n,r,w)}}break;case 5:fr(p,p.return);break;case 22:if(p.memoizedState!==null){Kl(y);continue}}v!==null?(v.return=p,R=v):Kl(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{i=y.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Bu("display",a))}catch(w){re(e,e.return,w)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(w){re(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Qe(t,e),tt(e),n&4&&Wl(e);break;case 21:break;default:Qe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(pd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(an(i,""),n.flags&=-33);var s=Hl(e);Ss(e,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Hl(e);js(e,l,a);break;default:throw Error(C(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uh(e,t,r){R=e,md(e)}function md(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||qn;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ye;l=qn;var d=ye;if(qn=a,(ye=u)&&!d)for(R=i;R!==null;)a=R,u=a.child,a.tag===22&&a.memoizedState!==null?Xl(i):u!==null?(u.return=a,R=u):Xl(i);for(;s!==null;)R=s,md(s),s=s.sibling;R=i,qn=l,ye=d}Ql(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Ql(e)}}function Ql(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Xi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ye)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ke(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Tl(t,s,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Tl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&dn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&ws(t)}catch(p){re(t,t.return,p)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Kl(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Xl(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xi(4,t)}catch(u){re(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){re(t,i,u)}}var s=t.return;try{ws(t)}catch(u){re(t,s,u)}break;case 5:var a=t.return;try{ws(t)}catch(u){re(t,a,u)}}}catch(u){re(t,t.return,u)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var ch=Math.ceil,Ai=xt.ReactCurrentDispatcher,Ca=xt.ReactCurrentOwner,Ue=xt.ReactCurrentBatchConfig,Q=0,pe=null,se=null,he=0,Te=0,hr=Ft(0),ue=0,jn=null,Gt=0,Yi=0,ba=0,nn=null,be=null,Na=0,_r=1/0,ut=null,Ri=!1,Cs=null,At=null,Hn=!1,Nt=null,Li=0,on=0,bs=null,ii=-1,oi=0;function je(){return Q&6?oe():ii!==-1?ii:ii=oe()}function Rt(e){return e.mode&1?Q&2&&he!==0?he&-he:Qf.transition!==null?(oi===0&&(oi=Zu()),oi):(e=K,e!==0||(e=window.event,e=e===void 0?16:sc(e.type)),e):1}function Ze(e,t,r,n){if(50<on)throw on=0,bs=null,Error(C(185));bn(e,r,n),(!(Q&2)||e!==pe)&&(e===pe&&(!(Q&2)&&(Yi|=r),ue===4&&Ct(e,he)),ze(e,n),r===1&&Q===0&&!(t.mode&1)&&(_r=oe()+500,Wi&&Bt()))}function ze(e,t){var r=e.callbackNode;Wp(e,t);var n=vi(e,e===pe?he:0);if(n===0)r!==null&&il(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&il(r),t===1)e.tag===0?Wf(Yl.bind(null,e)):bc(Yl.bind(null,e)),Uf(function(){!(Q&6)&&Bt()}),r=null;else{switch(ec(n)){case 1:r=Js;break;case 4:r=Gu;break;case 16:r=gi;break;case 536870912:r=Ju;break;default:r=gi}r=Sd(r,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function gd(e,t){if(ii=-1,oi=0,Q&6)throw Error(C(327));var r=e.callbackNode;if(kr()&&e.callbackNode!==r)return null;var n=vi(e,e===pe?he:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Mi(e,n);else{t=n;var i=Q;Q|=2;var s=yd();(pe!==e||he!==t)&&(ut=null,_r=oe()+500,Wt(e,t));do try{fh();break}catch(l){vd(e,l)}while(!0);da(),Ai.current=s,Q=i,se!==null?t=0:(pe=null,he=0,t=ue)}if(t!==0){if(t===2&&(i=Jo(e),i!==0&&(n=i,t=Ns(e,i))),t===1)throw r=jn,Wt(e,0),Ct(e,n),ze(e,oe()),r;if(t===6)Ct(e,n);else{if(i=e.current.alternate,!(n&30)&&!dh(i)&&(t=Mi(e,n),t===2&&(s=Jo(e),s!==0&&(n=s,t=Ns(e,s))),t===1))throw r=jn,Wt(e,0),Ct(e,n),ze(e,oe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Ut(e,be,ut);break;case 3:if(Ct(e,n),(n&130023424)===n&&(t=Na+500-oe(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ss(Ut.bind(null,e,be,ut),t);break}Ut(e,be,ut);break;case 4:if(Ct(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-Je(n);s=1<<a,a=t[a],a>i&&(i=a),n&=~s}if(n=i,n=oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ch(n/1960))-n,10<n){e.timeoutHandle=ss(Ut.bind(null,e,be,ut),n);break}Ut(e,be,ut);break;case 5:Ut(e,be,ut);break;default:throw Error(C(329))}}}return ze(e,oe()),e.callbackNode===r?gd.bind(null,e):null}function Ns(e,t){var r=nn;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=be,be=r,t!==null&&Es(t)),e}function Es(e){be===null?be=e:be.push.apply(be,e)}function dh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~ba,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Je(t),n=1<<r;e[r]=-1,t&=~n}}function Yl(e){if(Q&6)throw Error(C(327));kr();var t=vi(e,0);if(!(t&1))return ze(e,oe()),null;var r=Mi(e,t);if(e.tag!==0&&r===2){var n=Jo(e);n!==0&&(t=n,r=Ns(e,n))}if(r===1)throw r=jn,Wt(e,0),Ct(e,t),ze(e,oe()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,be,ut),ze(e,oe()),null}function Ea(e,t){var r=Q;Q|=1;try{return e(t)}finally{Q=r,Q===0&&(_r=oe()+500,Wi&&Bt())}}function Jt(e){Nt!==null&&Nt.tag===0&&!(Q&6)&&kr();var t=Q;Q|=1;var r=Ue.transition,n=K;try{if(Ue.transition=null,K=1,e)return e()}finally{K=n,Ue.transition=r,Q=t,!(Q&6)&&Bt()}}function _a(){Te=hr.current,G(hr)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$f(r)),se!==null)for(r=se.return;r!==null;){var n=r;switch(la(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ji();break;case 3:Nr(),G(Ee),G(xe),va();break;case 5:ga(n);break;case 4:Nr();break;case 13:G(Z);break;case 19:G(Z);break;case 10:pa(n.type._context);break;case 22:case 23:_a()}r=r.return}if(pe=e,se=e=Lt(e.current,null),he=Te=t,ue=0,jn=null,ba=Yi=Gt=0,be=nn=null,qt!==null){for(t=0;t<qt.length;t++)if(r=qt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}qt=null}return e}function vd(e,t){do{var r=se;try{if(da(),ti.current=Ti,Pi){for(var n=ee.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pi=!1}if(Yt=0,de=le=ee=null,tn=!1,xn=0,Ca.current=null,r===null||r.return===null){ue=1,jn=t,se=null;break}e:{var s=e,a=r.return,l=r,u=t;if(t=he,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=l,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var p=x.alternate;p?(x.updateQueue=p.updateQueue,x.memoizedState=p.memoizedState,x.lanes=p.lanes):(x.updateQueue=null,x.memoizedState=null)}var v=Dl(a);if(v!==null){v.flags&=-257,Il(v,a,l,s,t),v.mode&1&&Ol(s,d,t),t=v,u=d;var g=t.updateQueue;if(g===null){var w=new Set;w.add(u),t.updateQueue=w}else g.add(u);break e}else{if(!(t&1)){Ol(s,d,t),za();break e}u=Error(C(426))}}else if(J&&l.mode&1){var b=Dl(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Il(b,a,l,s,t),ua(Er(u,l));break e}}s=u=Er(u,l),ue!==4&&(ue=2),nn===null?nn=[s]:nn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=ed(s,u,t);Pl(s,f);break e;case 1:l=u;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(At===null||!At.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=td(s,l,t);Pl(s,k);break e}}s=s.return}while(s!==null)}kd(r)}catch(N){t=N,se===r&&r!==null&&(se=r=r.return);continue}break}while(!0)}function yd(){var e=Ai.current;return Ai.current=Ti,e===null?Ti:e}function za(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(Gt&268435455)&&!(Yi&268435455)||Ct(pe,he)}function Mi(e,t){var r=Q;Q|=2;var n=yd();(pe!==e||he!==t)&&(ut=null,Wt(e,t));do try{ph();break}catch(i){vd(e,i)}while(!0);if(da(),Q=r,Ai.current=n,se!==null)throw Error(C(261));return pe=null,he=0,ue}function ph(){for(;se!==null;)xd(se)}function fh(){for(;se!==null&&!Dp();)xd(se)}function xd(e){var t=jd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?kd(e):se=t,Ca.current=null}function kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=sh(r,t),r!==null){r.flags&=32767,se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(r=oh(r,t,Te),r!==null){se=r;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function Ut(e,t,r){var n=K,i=Ue.transition;try{Ue.transition=null,K=1,hh(e,t,r,n)}finally{Ue.transition=i,K=n}return null}function hh(e,t,r,n){do kr();while(Nt!==null);if(Q&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Qp(e,s),e===pe&&(se=pe=null,he=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hn||(Hn=!0,Sd(gi,function(){return kr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ue.transition,Ue.transition=null;var a=K;K=1;var l=Q;Q|=4,Ca.current=null,lh(e,r),hd(r,e),Lf(is),yi=!!ns,is=ns=null,e.current=r,uh(r),Ip(),Q=l,K=a,Ue.transition=s}else e.current=r;if(Hn&&(Hn=!1,Nt=e,Li=i),s=e.pendingLanes,s===0&&(At=null),$p(r.stateNode),ze(e,oe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ri)throw Ri=!1,e=Cs,Cs=null,e;return Li&1&&e.tag!==0&&kr(),s=e.pendingLanes,s&1?e===bs?on++:(on=0,bs=e):on=0,Bt(),null}function kr(){if(Nt!==null){var e=ec(Li),t=Ue.transition,r=K;try{if(Ue.transition=null,K=16>e?16:e,Nt===null)var n=!1;else{if(e=Nt,Nt=null,Li=0,Q&6)throw Error(C(331));var i=Q;for(Q|=4,R=e.current;R!==null;){var s=R,a=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(R=d;R!==null;){var x=R;switch(x.tag){case 0:case 11:case 15:rn(8,x,s)}var y=x.child;if(y!==null)y.return=x,R=y;else for(;R!==null;){x=R;var p=x.sibling,v=x.return;if(dd(x),x===d){R=null;break}if(p!==null){p.return=v,R=p;break}R=v}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}R=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,R=a;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rn(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,R=f;break e}R=s.return}}var c=e.current;for(R=c;R!==null;){a=R;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,R=h;else e:for(a=c;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xi(9,l)}}catch(N){re(l,l.return,N)}if(l===a){R=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,R=k;break e}R=l.return}}if(Q=i,Bt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot($i,e)}catch{}n=!0}return n}finally{K=r,Ue.transition=t}}return!1}function Gl(e,t,r){t=Er(r,t),t=ed(e,t,1),e=Tt(e,t,1),t=je(),e!==null&&(bn(e,1,t),ze(e,t))}function re(e,t,r){if(e.tag===3)Gl(e,e,r);else for(;t!==null;){if(t.tag===3){Gl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(At===null||!At.has(n))){e=Er(r,e),e=td(t,e,1),t=Tt(t,e,1),e=je(),t!==null&&(bn(t,1,e),ze(t,e));break}}t=t.return}}function mh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&r,pe===e&&(he&r)===r&&(ue===4||ue===3&&(he&130023424)===he&&500>oe()-Na?Wt(e,0):ba|=r),ze(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=Mn,Mn<<=1,!(Mn&130023424)&&(Mn=4194304)):t=1);var r=je();e=vt(e,t),e!==null&&(bn(e,t,r),ze(e,r))}function gh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),wd(e,r)}function vh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),wd(e,r)}var jd;jd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ne=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ne=!1,ih(e,t,r);Ne=!!(e.flags&131072)}else Ne=!1,J&&t.flags&1048576&&Nc(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ni(e,t),e=t.pendingProps;var i=Sr(t,xe.current);xr(t,r),i=xa(null,t,n,e,i,r);var s=ka();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(n)?(s=!0,Si(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ha(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,fs(t,n,e,r),t=gs(null,t,n,!0,s,r)):(t.tag=0,J&&s&&aa(t),we(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=xh(n),e=Ke(n,e),i){case 0:t=ms(null,t,n,e,r);break e;case 1:t=$l(null,t,n,e,r);break e;case 11:t=Fl(null,t,n,e,r);break e;case 14:t=Bl(null,t,n,Ke(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ke(n,i),ms(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ke(n,i),$l(e,t,n,i,r);case 3:e:{if(od(t),e===null)throw Error(C(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Ac(e,t),_i(t,n,null,r);var a=t.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Er(Error(C(423)),t),t=Ul(e,t,n,r,i);break e}else if(n!==i){i=Er(Error(C(424)),t),t=Ul(e,t,n,r,i);break e}else for(Ae=Pt(t.stateNode.containerInfo.firstChild),Re=t,J=!0,Ge=null,r=Pc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Cr(),n===i){t=yt(e,t,r);break e}we(e,t,n,r)}t=t.child}return t;case 5:return Rc(t),e===null&&cs(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,os(n,i)?a=null:s!==null&&os(n,s)&&(t.flags|=32),id(e,t),we(e,t,a,r),t.child;case 6:return e===null&&cs(t),null;case 13:return sd(e,t,r);case 4:return ma(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=br(t,null,n,r):we(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ke(n,i),Fl(e,t,n,i,r);case 7:return we(e,t,t.pendingProps,r),t.child;case 8:return we(e,t,t.pendingProps.children,r),t.child;case 12:return we(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,X(Ni,n._currentValue),n._currentValue=a,s!==null)if(et(s.value,a)){if(s.children===i.children&&!Ee.current){t=yt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(s.tag===1){u=ht(-1,r&-r),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}s.lanes|=r,u=s.alternate,u!==null&&(u.lanes|=r),ds(s.return,r,t),l.lanes|=r;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(C(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),ds(a,r,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}we(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,xr(t,r),i=Ve(i),n=n(i),t.flags|=1,we(e,t,n,r),t.child;case 14:return n=t.type,i=Ke(n,t.pendingProps),i=Ke(n.type,i),Bl(e,t,n,i,r);case 15:return rd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ke(n,i),ni(e,t),t.tag=1,_e(n)?(e=!0,Si(t)):e=!1,xr(t,r),Zc(t,n,i),fs(t,n,i,r),gs(null,t,n,!0,e,r);case 19:return ad(e,t,r);case 22:return nd(e,t,r)}throw Error(C(156,t.tag))};function Sd(e,t){return Yu(e,t)}function yh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,r,n){return new yh(e,t,r,n)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xh(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xs)return 11;if(e===Ys)return 14}return 2}function Lt(e,t){var r=e.alternate;return r===null?(r=$e(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function si(e,t,r,n,i,s){var a=2;if(n=e,typeof e=="function")Pa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ir:return Qt(r.children,i,s,t);case Ks:a=8,i|=8;break;case Do:return e=$e(12,r,t,i|2),e.elementType=Do,e.lanes=s,e;case Io:return e=$e(13,r,t,i),e.elementType=Io,e.lanes=s,e;case Fo:return e=$e(19,r,t,i),e.elementType=Fo,e.lanes=s,e;case Ru:return Gi(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:a=10;break e;case Au:a=9;break e;case Xs:a=11;break e;case Ys:a=14;break e;case wt:a=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=$e(a,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Qt(e,t,r,n){return e=$e(7,e,n,t),e.lanes=r,e}function Gi(e,t,r,n){return e=$e(22,e,n,t),e.elementType=Ru,e.lanes=r,e.stateNode={isHidden:!1},e}function Po(e,t,r){return e=$e(6,e,null,t),e.lanes=r,e}function To(e,t,r){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ta(e,t,r,n,i,s,a,l,u){return e=new kh(e,t,r,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=$e(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(s),e}function wh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Cd(e){if(!e)return Dt;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(_e(r))return Cc(e,r,t)}return t}function bd(e,t,r,n,i,s,a,l,u){return e=Ta(r,n,!0,e,i,s,a,l,u),e.context=Cd(null),r=e.current,n=je(),i=Rt(r),s=ht(n,i),s.callback=t??null,Tt(r,s,i),e.current.lanes=i,bn(e,i,n),ze(e,n),e}function Ji(e,t,r,n){var i=t.current,s=je(),a=Rt(i);return r=Cd(r),t.context===null?t.context=r:t.pendingContext=r,t=ht(s,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Tt(i,t,a),e!==null&&(Ze(e,i,a,s),ei(e,i,a)),a}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Aa(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function jh(){return null}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ra(e){this._internalRoot=e}Zi.prototype.render=Ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ji(e,t,null,null)};Zi.prototype.unmount=Ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jt(function(){Ji(null,e,null,null)}),t[gt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<St.length&&t!==0&&t<St[r].priority;r++);St.splice(r,0,e),r===0&&oc(e)}};function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function Sh(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var d=Oi(a);s.call(d)}}var a=bd(t,n,e,0,null,!1,!1,"",Zl);return e._reactRootContainer=a,e[gt]=a.current,hn(e.nodeType===8?e.parentNode:e),Jt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var d=Oi(u);l.call(d)}}var u=Ta(e,0,!1,null,null,!1,!1,"",Zl);return e._reactRootContainer=u,e[gt]=u.current,hn(e.nodeType===8?e.parentNode:e),Jt(function(){Ji(t,u,r,n)}),u}function to(e,t,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Oi(a);l.call(u)}}Ji(t,a,e,i)}else a=Sh(r,t,e,i,n);return Oi(a)}tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Qr(t.pendingLanes);r!==0&&(Zs(t,r|1),ze(t,oe()),!(Q&6)&&(_r=oe()+500,Bt()))}break;case 13:Jt(function(){var n=vt(e,1);if(n!==null){var i=je();Ze(n,e,1,i)}}),Aa(e,1)}};ea=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var r=je();Ze(t,e,134217728,r)}Aa(e,134217728)}};rc=function(e){if(e.tag===13){var t=Rt(e),r=vt(e,t);if(r!==null){var n=je();Ze(r,e,t,n)}Aa(e,t)}};nc=function(){return K};ic=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};Xo=function(e,t,r){switch(t){case"input":if(Uo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Hi(n);if(!i)throw Error(C(90));Mu(n),Uo(n,i)}}}break;case"textarea":Du(e,r);break;case"select":t=r.value,t!=null&&mr(e,!!r.multiple,t,!1)}};qu=Ea;Hu=Jt;var Ch={usingClientEntryPoint:!1,Events:[En,lr,Hi,Uu,Vu,Ea]},Vr={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bh={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ku(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{$i=Wn.inject(bh),it=Wn}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ch;Me.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(t))throw Error(C(200));return wh(e,t,null,r)};Me.createRoot=function(e,t){if(!La(e))throw Error(C(299));var r=!1,n="",i=Nd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ta(e,1,!1,null,null,r,!1,n,i),e[gt]=t.current,hn(e.nodeType===8?e.parentNode:e),new Ra(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ku(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Jt(e)};Me.hydrate=function(e,t,r){if(!eo(t))throw Error(C(200));return to(null,e,t,!0,r)};Me.hydrateRoot=function(e,t,r){if(!La(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=Nd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=bd(t,null,e,1,r??null,i,!1,s,a),e[gt]=t.current,hn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Zi(t)};Me.render=function(e,t,r){if(!eo(t))throw Error(C(200));return to(null,e,t,!1,r)};Me.unmountComponentAtNode=function(e){if(!eo(e))throw Error(C(40));return e._reactRootContainer?(Jt(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Me.unstable_batchedUpdates=Ea;Me.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!eo(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return to(e,t,r,!1,n)};Me.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),Eu.exports=Me;var Nh=Eu.exports,eu=Nh;Mo.createRoot=eu.createRoot,Mo.hydrateRoot=eu.hydrateRoot;const at=Object.create(null);at.open="0";at.close="1";at.ping="2";at.pong="3";at.message="4";at.upgrade="5";at.noop="6";const ai=Object.create(null);Object.keys(at).forEach(e=>{ai[at[e]]=e});const _s={type:"error",data:"parser error"},_d=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",zd=typeof ArrayBuffer=="function",Pd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ma=({type:e,data:t},r,n)=>_d&&t instanceof Blob?r?n(t):tu(t,n):zd&&(t instanceof ArrayBuffer||Pd(t))?r?n(t):tu(new Blob([t]),n):n(at[e]+(t||"")),tu=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function ru(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ao;function Eh(e,t){if(_d&&e.data instanceof Blob)return e.data.arrayBuffer().then(ru).then(t);if(zd&&(e.data instanceof ArrayBuffer||Pd(e.data)))return t(ru(e.data));Ma(e,!1,r=>{Ao||(Ao=new TextEncoder),t(Ao.encode(r))})}const nu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<nu.length;e++)Xr[nu.charCodeAt(e)]=e;const _h=e=>{let t=e.length*.75,r=e.length,n,i=0,s,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const d=new ArrayBuffer(t),x=new Uint8Array(d);for(n=0;n<r;n+=4)s=Xr[e.charCodeAt(n)],a=Xr[e.charCodeAt(n+1)],l=Xr[e.charCodeAt(n+2)],u=Xr[e.charCodeAt(n+3)],x[i++]=s<<2|a>>4,x[i++]=(a&15)<<4|l>>2,x[i++]=(l&3)<<6|u&63;return d},zh=typeof ArrayBuffer=="function",Oa=(e,t)=>{if(typeof e!="string")return{type:"message",data:Td(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Ph(e.substring(1),t)}:ai[r]?e.length>1?{type:ai[r],data:e.substring(1)}:{type:ai[r]}:_s},Ph=(e,t)=>{if(zh){const r=_h(e);return Td(r,t)}else return{base64:!0,data:e}},Td=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Ad="",Th=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((s,a)=>{Ma(s,!1,l=>{n[a]=l,++i===r&&t(n.join(Ad))})})},Ah=(e,t)=>{const r=e.split(Ad),n=[];for(let i=0;i<r.length;i++){const s=Oa(r[i],t);if(n.push(s),s.type==="error")break}return n};function Rh(){return new TransformStream({transform(e,t){Eh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let Ro;function Qn(e){return e.reduce((t,r)=>t+r.length,0)}function Kn(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Lh(e,t){Ro||(Ro=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(Qn(r)<1)break;const u=Kn(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Qn(r)<2)break;const u=Kn(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Qn(r)<8)break;const u=Kn(r,8),d=new DataView(u.buffer,u.byteOffset,u.length),x=d.getUint32(0);if(x>Math.pow(2,21)-1){l.enqueue(_s);break}i=x*Math.pow(2,32)+d.getUint32(4),n=3}else{if(Qn(r)<i)break;const u=Kn(r,i);l.enqueue(Oa(s?u:Ro.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(_s);break}}}})}const Rd=4;function ae(e){if(e)return Mh(e)}function Mh(e){for(var t in ae.prototype)e[t]=ae.prototype[t];return e}ae.prototype.on=ae.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ae.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};ae.prototype.off=ae.prototype.removeListener=ae.prototype.removeAllListeners=ae.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};ae.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};ae.prototype.emitReserved=ae.prototype.emit;ae.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ae.prototype.hasListeners=function(e){return!!this.listeners(e).length};const ro=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),Be=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Oh="arraybuffer";function Ld(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Dh=Be.setTimeout,Ih=Be.clearTimeout;function no(e,t){t.useNativeTimers?(e.setTimeoutFn=Dh.bind(Be),e.clearTimeoutFn=Ih.bind(Be)):(e.setTimeoutFn=Be.setTimeout.bind(Be),e.clearTimeoutFn=Be.clearTimeout.bind(Be))}const Fh=1.33;function Bh(e){return typeof e=="string"?$h(e):Math.ceil((e.byteLength||e.size)*Fh)}function $h(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Md(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Uh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Vh(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class qh extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Da extends ae{constructor(t){super(),this.writable=!1,no(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new qh(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Oa(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Uh(t);return r.length?"?"+r:""}}class Hh extends Da{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ah(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Th(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Md()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Od=!1;try{Od=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Wh=Od;function Qh(){}class Kh extends Hh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class st extends ae{constructor(t,r,n){super(),this.createRequest=t,no(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Ld(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=st.requestsCount++,st.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Qh,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete st.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}st.requestsCount=0;st.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",iu);else if(typeof addEventListener=="function"){const e="onpagehide"in Be?"pagehide":"unload";addEventListener(e,iu,!1)}}function iu(){for(let e in st.requests)st.requests.hasOwnProperty(e)&&st.requests[e].abort()}const Xh=function(){const e=Dd({xdomain:!1});return e&&e.responseType!==null}();class Yh extends Kh{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Xh&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new st(Dd,this.uri(),t)}}function Dd(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Wh))return new XMLHttpRequest}catch{}if(!t)try{return new Be[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Id=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Gh extends Da{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Id?{}:Ld(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Ma(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&ro(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Md()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Lo=Be.WebSocket||Be.MozWebSocket;class Jh extends Gh{createSocket(t,r,n){return Id?new Lo(t,r,n):r?new Lo(t,r):new Lo(t)}doWrite(t,r){this.ws.send(r)}}class Zh extends Da{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Lh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Rh();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),s())}).catch(l=>{})};s();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&ro(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const em={websocket:Jh,webtransport:Zh,polling:Yh},tm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,rm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function zs(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=tm.exec(e||""),s={},a=14;for(;a--;)s[rm[a]]=i[a]||"";return r!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=nm(s,s.path),s.queryKey=im(s,s.query),s}function nm(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function im(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Ps=typeof addEventListener=="function"&&typeof removeEventListener=="function",li=[];Ps&&addEventListener("offline",()=>{li.forEach(e=>e())},!1);class Mt extends ae{constructor(t,r){if(super(),this.binaryType=Oh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=zs(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=zs(r.host).host);no(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Vh(this.opts.query)),Ps&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},li.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Rd,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Mt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Mt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Bh(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ro(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Mt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ps&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=li.indexOf(this._offlineEventListener);n!==-1&&li.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Mt.protocol=Rd;class om extends Mt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Mt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Mt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(x(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=r.name,this.emitReserved("upgradeError",p)}}))};function s(){n||(n=!0,x(),r.close(),r=null)}const a=y=>{const p=new Error("probe error: "+y);p.transport=r.name,s(),this.emitReserved("upgradeError",p)};function l(){a("transport closed")}function u(){a("socket closed")}function d(y){r&&y.name!==r.name&&s()}const x=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",d)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let sm=class extends om{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(s=>em[s]).filter(s=>!!s)),super(n?i:t,i)}};function am(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=zs(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const lm=typeof ArrayBuffer=="function",um=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Fd=Object.prototype.toString,cm=typeof Blob=="function"||typeof Blob<"u"&&Fd.call(Blob)==="[object BlobConstructor]",dm=typeof File=="function"||typeof File<"u"&&Fd.call(File)==="[object FileConstructor]";function Ia(e){return lm&&(e instanceof ArrayBuffer||um(e))||cm&&e instanceof Blob||dm&&e instanceof File}function ui(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ui(e[r]))return!0;return!1}if(Ia(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ui(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ui(e[r]))return!0;return!1}function pm(e){const t=[],r=e.data,n=e;return n.data=ci(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ci(e,t,r){if(!e)return e;if(Ia(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ci(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ci(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ci(e[i],t));return n}return e}function fm(e,t){return e.data=Ts(e.data,t),delete e.attachments,e}function Ts(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Ts(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Ts(e[r],t));return e}const hm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var H;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class mm{constructor(t){this.replacer=t}encode(t){return(t.type===H.EVENT||t.type===H.ACK)&&ui(t)?this.encodeAsBinary({type:t.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===H.BINARY_EVENT||t.type===H.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=pm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Fa extends ae{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===H.BINARY_EVENT;n||r.type===H.BINARY_ACK?(r.type=n?H.EVENT:H.ACK,this.reconstructor=new gm(r)):super.emitReserved("decoded",r)}else if(Ia(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(H[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===H.BINARY_EVENT||n.type===H.BINARY_ACK){const s=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(s,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!vm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(s,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(s,r+1))}if(t.charAt(++r)){const s=this.tryParse(t.substr(r));if(Fa.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case H.CONNECT:return ou(r);case H.DISCONNECT:return r===void 0;case H.CONNECT_ERROR:return typeof r=="string"||ou(r);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&hm.indexOf(r[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class gm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=fm(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const vm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function ou(e){return Object.prototype.toString.call(e)==="[object Object]"}const ym=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Fa,Encoder:mm,get PacketType(){return H}},Symbol.toStringTag,{value:"Module"}));function Ye(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const xm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Bd extends ae{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ye(t,"open",this.onopen.bind(this)),Ye(t,"packet",this.onpacket.bind(this)),Ye(t,"error",this.onerror.bind(this)),Ye(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,s;if(xm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:H.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const x=this.ids++,y=r.pop();this._registerAckCallback(x,y),a.id=x}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(s),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const s=(a,l)=>a?i(a):n(l);s.withError=!0,r.push(s),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case H.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(t);break;case H.ACK:case H.BINARY_ACK:this.onack(t);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:H.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Lr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Lr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Lr.prototype.reset=function(){this.attempts=0};Lr.prototype.setMin=function(e){this.ms=e};Lr.prototype.setMax=function(e){this.max=e};Lr.prototype.setJitter=function(e){this.jitter=e};class As extends ae{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,no(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Lr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||ym;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new sm(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Ye(r,"open",function(){n.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=Ye(r,"error",s);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ye(t,"ping",this.onping.bind(this)),Ye(t,"data",this.ondata.bind(this)),Ye(t,"error",this.onerror.bind(this)),Ye(t,"close",this.onclose.bind(this)),Ye(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){ro(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Bd(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const qr={};function di(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=am(e,t.path||"/socket.io"),n=r.source,i=r.id,s=r.path,a=qr[i]&&s in qr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new As(n,t):(qr[i]||(qr[i]=new As(n,t)),u=qr[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(di,{Manager:As,Socket:Bd,io:di,connect:di});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$d=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:a,...l},u)=>A.createElement("svg",{ref:u,...wm,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:$d("lucide",i),...l},[...a.map(([d,x])=>A.createElement(d,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=A.forwardRef(({className:n,...i},s)=>A.createElement(jm,{ref:s,iconNode:t,className:$d(`lucide-${km(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=M("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=M("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=M("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=M("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=M("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=M("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=M("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=M("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=M("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=M("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=M("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=M("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=M("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=M("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=M("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=M("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=M("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=M("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=M("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=M("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=M("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=M("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=M("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=M("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=M("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=M("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=M("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=M("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=M("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=M("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=M("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=M("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=M("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=M("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=M("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=M("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=M("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=M("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=M("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=M("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=M("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=M("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=M("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=M("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=M("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=M("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=M("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=M("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=M("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=M("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=M("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=M("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=M("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=M("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=M("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Gm({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const s=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),u=Number(n||0).toFixed(2);function d(T,V){const F=V.length.toString().padStart(2,"0");return`${T}${F}${V}`}const x=d("00","br.gov.bcb.pix"),y=d("01",s),p=d("26",`${x}${y}`),v=d("52","0000"),g=d("53","986"),w=d("54",u),b=d("58","BR"),f=d("59",a),c=d("60",l),h=d("05",i||"***"),k=d("62",h),N=`000201${p}${v}${g}${w}${b}${f}${c}${k}6304`;let _=65535;for(let T=0;T<N.length;T++){_^=N.charCodeAt(T)<<8;for(let V=0;V<8;V++)_&32768?_=(_<<1^4129)&65535:_=_<<1&65535}const P=(_&65535).toString(16).toUpperCase().padStart(4,"0");return`${N}${P}`}function Jm({socket:e,menu:t,operador:r,onEnviarPedido:n}){const[i,s]=A.useState(""),[a,l]=A.useState([]),[u,d]=A.useState("todas"),[x,y]=A.useState(null),[p,v]=A.useState("cardapio"),[g,w]=A.useState("pix"),[b,f]=A.useState(""),[c,h]=A.useState(()=>{const E=new Date;return E.setDate(E.getDate()+7),E.toISOString().split("T")[0]}),[k,N]=A.useState(null),[_,P]=A.useState(!1),[T,V]=A.useState(!1);A.useEffect(()=>{fetch("/api/pix-config").then(E=>E.json()).then(E=>N(E)).catch(E=>console.error("Erro ao carregar chave PIX:",E))},[]);const F=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],m=t&&Array.isArray(t.categorias)?t.categorias:[],D=E=>{if(E.categoria)return E.categoria;const j=m.find(L=>L.id===E.categoriaId);return j?j.nome:"Geral"},W=["todas",...new Set(F.map(E=>D(E)))],I=E=>{l(j=>j.find(O=>O.id===E.id)?j.map(O=>O.id===E.id?{...O,quantidade:O.quantidade+1}:O):[...j,{...E,quantidade:1,observacao:""}])},ke=(E,j)=>{l(L=>L.map(O=>{if(O.id===E){const ce=O.quantidade+j;return ce>0?{...O,quantidade:ce}:null}return O}).filter(Boolean))},He=(E,j)=>{l(L=>L.map(O=>O.id===E?{...O,observacao:j}:O))},We=E=>{l(j=>j.filter(L=>L.id!==E))},z=a.reduce((E,j)=>E+j.preco*j.quantidade,0),$=a.reduce((E,j)=>E+j.quantidade,0),B=k!=null&&k.chavePix?Gm({chave:k.chavePix,nome:k.nomeBeneficiario,cidade:k.cidadeBeneficiario,valor:z}):"",S=()=>{B&&(navigator.clipboard.writeText(B),V(!0),setTimeout(()=>V(!1),3e3))},U=E=>{if(E&&E.preventDefault(),!i.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(a.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(g==="pagar_depois"){if(!b.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!c){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const j={cliente:i.trim(),criadoPor:r?r.nome:"Caixa",itens:a.map(O=>({id:O.id,nome:O.nome,preco:O.preco,quantidade:O.quantidade,observacao:O.observacao||""})),total:z,formaPagamento:g,telefoneCliente:g==="pagar_depois"?b.trim():b.trim()||void 0,dataCobranca:g==="pagar_depois"?c:void 0},L=n||(e?(O,ce)=>e.emit("criar_pedido",O,ce):null);L?L(j,O=>{var De,lt;const ce=((De=O==null?void 0:O.order)==null?void 0:De.numero)||((lt=O==null?void 0:O.pedido)==null?void 0:lt.numero)||"OK";y(`Pedido #${ce} enviado para a cozinha!`),P(!1),s(""),f(""),l([]),w("pix"),v("cardapio"),setTimeout(()=>y(null),4e3)}):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)}).then(O=>O.json()).then(O=>{O&&O.order&&(y(`Pedido #${O.order.numero} enviado para a cozinha!`),P(!1),s(""),f(""),l([]),w("pix"),v("cardapio"),setTimeout(()=>y(null),4e3))}).catch(O=>{console.error("Erro ao enviar pedido:",O),alert("Erro ao comunicar com o servidor.")})},ne=F.filter(E=>{const j=E.disponivel!==!1&&E.ativo!==!1,L=D(E),O=u==="todas"||L===u||E.categoriaId===u;return j&&O});return o.jsxs("div",{className:"caixa-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"mobile-view-toggle",children:[o.jsxs("button",{className:`mobile-toggle-btn ${p==="cardapio"?"active":""}`,onClick:()=>v("cardapio"),children:[o.jsx(Xd,{size:16})," Cardápio de Produtos"]}),o.jsxs("button",{className:`mobile-toggle-btn ${p==="carrinho"?"active":""}`,onClick:()=>v("carrinho"),children:[o.jsx(dt,{size:16})," Comanda (",$,")"]})]}),o.jsxs("div",{className:`caixa-cardapio-col ${p!=="cardapio"?"mobile-hidden":""}`,children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(dt,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),x&&o.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[o.jsx($a,{size:18}),o.jsx("span",{children:x})]}),o.jsx("div",{className:"cat-pills",children:W.map(E=>o.jsx("button",{className:`cat-btn ${u===E?"active":""}`,onClick:()=>d(E),children:E==="todas"?"Todas as Categorias":E},E))}),o.jsx("div",{className:"produtos-grid",children:ne.map(E=>o.jsxs("div",{className:"prod-card",onClick:()=>I(E),children:[o.jsxs("div",{children:[o.jsx("span",{className:"prod-cat",children:D(E)}),o.jsx("div",{className:"prod-title",children:E.nome}),E.descricao&&o.jsx("div",{className:"prod-desc",children:E.descricao})]}),o.jsxs("div",{className:"prod-footer",children:[o.jsxs("span",{className:"prod-preco",children:["R$ ",(E.preco||0).toFixed(2)]}),o.jsx("button",{className:"prod-add-btn",title:"Adicionar ao Pedido",children:o.jsx(Fs,{size:18})})]})]},E.id))})]}),o.jsxs("div",{className:`caixa-carrinho-col ${p!=="carrinho"?"mobile-hidden":""}`,children:[o.jsxs("div",{className:"carrinho-header",children:[o.jsxs("div",{className:"carrinho-title",children:[o.jsx(dt,{size:20,color:"var(--primary)"}),o.jsx("span",{children:"Comanda Atual"})]}),a.length>0&&o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:()=>l([]),children:"Limpar"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),o.jsxs("div",{className:"cliente-input-box",children:[o.jsx(zr,{size:18,color:"var(--primary)"}),o.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:i,onChange:E=>s(E.target.value)})]})]}),o.jsx("div",{className:"carrinho-itens",children:a.length===0?o.jsxs("div",{className:"carrinho-vazio",children:[o.jsx(dt,{size:36,opacity:.4}),o.jsx("p",{children:"Nenhum item adicionado ainda."}),o.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):a.map(E=>o.jsxs("div",{className:"carrinho-item",children:[o.jsxs("div",{className:"item-main",children:[o.jsxs("div",{children:[o.jsx("div",{className:"item-nome",children:E.nome}),o.jsxs("div",{className:"item-preco",children:["R$ ",(E.preco*E.quantidade).toFixed(2)]})]}),o.jsxs("div",{className:"item-qtd-ctrl",children:[o.jsx("button",{className:"qtd-btn",onClick:()=>ke(E.id,-1),children:o.jsx(Mm,{size:14})}),o.jsx("span",{className:"qtd-val",children:E.quantidade}),o.jsx("button",{className:"qtd-btn",onClick:()=>ke(E.id,1),children:o.jsx(Fs,{size:14})}),o.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>We(E.id),children:o.jsx(Ii,{size:14})})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Hd,{size:12,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:E.observacao,onChange:j=>He(E.id,j.target.value)})]})]},E.id))}),o.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[o.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),o.jsxs("div",{className:"pgto-grid",children:[o.jsxs("button",{type:"button",className:`pgto-btn ${g==="pix"?"active":""}`,onClick:()=>w("pix"),children:[o.jsx(pi,{size:16})," PIX"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${g==="dinheiro"?"active":""}`,onClick:()=>w("dinheiro"),children:[o.jsx(qd,{size:16})," Dinheiro"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${g==="debito"?"active":""}`,onClick:()=>w("debito"),children:[o.jsx(pi,{size:16})," Débito"]}),o.jsxs("button",{type:"button",className:`pgto-btn ${g==="credito"?"active":""}`,onClick:()=>w("credito"),children:[o.jsx(pi,{size:16})," Crédito"]}),o.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${g==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>w("pagar_depois"),children:[o.jsx(Ls,{size:16})," Pagar Depois (Fiado)"]})]}),g==="pix"&&z>0&&o.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>P(!0),children:[o.jsx(uu,{size:18})," Gerar QR Code PIX (R$ ",z.toFixed(2),")"]}),g==="pagar_depois"&&o.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Is,{size:14})," Telefone / WhatsApp do Cliente *"]}),o.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:b,onChange:E=>f(E.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(io,{size:14})," Data de Cobrança / Vencimento *"]}),o.jsx("input",{type:"date",className:"form-input",value:c,onChange:E=>h(E.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Vd,{size:13,color:"var(--status-preparo)"}),o.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),o.jsxs("div",{className:"carrinho-footer",children:[o.jsxs("div",{className:"total-row",children:[o.jsx("span",{className:"total-label",children:"Total a Pagar:"}),o.jsxs("span",{className:"total-value",children:["R$ ",z.toFixed(2)]})]}),o.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:U,disabled:a.length===0||!i.trim(),children:[o.jsx(cu,{size:18})," Enviar para Cozinha"]})]})]}),_&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-card-pix",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[o.jsx(uu,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>P(!1),children:o.jsx(Ym,{size:16})})]}),o.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",o.jsx("strong",{style:{color:"var(--text-title)"},children:i||"Cliente no Caixa"})]}),B?o.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:o.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(B)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):o.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),o.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",z.toFixed(2)]}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",o.jsx("strong",{children:(k==null?void 0:k.nomeBeneficiario)||"Festa do Morango"})," (",k==null?void 0:k.chavePix,")"]}),B&&o.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:o.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:S,children:[T?o.jsx(wr,{size:16,color:"var(--primary)"}):o.jsx(_m,{size:16}),T?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[o.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>P(!1),children:"Voltar"}),o.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:U,disabled:a.length===0||!i.trim(),children:[o.jsx(cu,{size:16})," Confirmar & Enviar"]})]})]})}),o.jsxs("div",{className:`mobile-cart-float-bar ${p==="cardapio"&&a.length>0?"mobile-show-float":""}`,onClick:()=>v("carrinho"),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[o.jsx(dt,{size:20}),o.jsxs("span",{children:["Ver Pedido (",$," ",$===1?"item":"itens",")"]})]}),o.jsxs("span",{children:["R$ ",z.toFixed(2)," →"]})]})]})}function Zm({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,s]=A.useState(Date.now()),[a,l]=A.useState("ativos");A.useEffect(()=>{const v=setInterval(()=>{s(Date.now())},1e3);return()=>clearInterval(v)},[]);const u=e.filter(v=>v.status==="pendente"||v.status==="em_preparo"||v.status==="entrega_parcial"),d=u.filter(v=>a==="pendentes"?v.status==="pendente":a==="preparo"?v.status==="em_preparo":a==="parcial"?v.status==="entrega_parcial":a==="meus"&&t?v.preparadoPor&&v.preparadoPor.includes(t.nome):!0),x=v=>{const g=new Date(v).getTime(),w=i-g;return Math.floor(w/6e4)},y=v=>{const g=new Date(v).getTime(),w=Math.max(0,i-g),b=Math.floor(w/6e4),f=Math.floor(w%6e4/1e3);return`${String(b).padStart(2,"0")}:${String(f).padStart(2,"0")}`},p=v=>{const g=x(v);return g>=10?"urgente":g>=5?"alerta":"normal"};return o.jsxs("div",{className:"cozinha-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"cozinha-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Sn,{size:26,color:"var(--status-preparo)"}),o.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),o.jsxs("div",{className:"nav-tabs",children:[o.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",u.length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",u.filter(v=>v.status==="pendente").length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",u.filter(v=>v.status==="em_preparo").length,")"]}),o.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",u.filter(v=>v.status==="entrega_parcial").length,")"]}),t&&o.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",u.filter(v=>v.preparadoPor&&v.preparadoPor.includes(t.nome)).length,")"]})]})]}),o.jsx("div",{className:"cozinha-grid",children:d.length===0?o.jsxs("div",{className:"kds-vazio",children:[o.jsx(Di,{size:48,color:"var(--status-pronto)"}),o.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),o.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):d.map(v=>{const g=p(v.criadoEm),w=y(v.criadoEm),b=v.itens.reduce((h,k)=>h+(k.quantidade||1),0),f=v.itens.filter(h=>h.entregue).reduce((h,k)=>h+(k.quantidade||1),0),c=f>0&&f<b;return o.jsxs("div",{className:`kds-card ${g}`,children:[o.jsxs("div",{className:"kds-card-header",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"comanda-num",children:["#",v.numero]}),o.jsx("div",{className:"cliente-nome",children:v.cliente}),v.formaPagamento==="pagar_depois"?o.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",v.dataCobranca?new Date(v.dataCobranca).toLocaleDateString():"Sem data",")"]}):o.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:v.formaPagamento?v.formaPagamento.toUpperCase():"PIX"}),v.preparadoPor&&o.jsxs("div",{className:"preparador-badge",children:[o.jsx(zr,{size:12}),o.jsxs("span",{children:["Preparo: ",v.preparadoPor]})]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[c?o.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",f,"/",b,")"]}):o.jsx("span",{className:`badge badge-${v.status==="pendente"?"pendente":"preparo"}`,children:v.status==="pendente"?"Novo":"Em Preparo"}),o.jsxs("div",{className:`timer-box ${g}`,children:[o.jsx(io,{size:14}),o.jsx("span",{children:w})]})]})]}),o.jsxs("div",{className:"kds-card-body",children:[o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[o.jsx(Wd,{size:14,color:"var(--primary)"}),o.jsxs("span",{children:["Clique no item para marcar entrega parcial (",f,"/",b," entregues):"]})]}),v.itens.map((h,k)=>o.jsxs("div",{className:`kds-item-row ${h.entregue?"item-entregue":""}`,children:[o.jsxs("div",{className:"item-line",children:[o.jsxs("div",{className:"item-info",children:[o.jsxs("span",{className:"item-qtd-badge",children:[h.quantidade,"x"]}),o.jsx("span",{className:"item-titulo",children:h.nome})]}),o.jsxs("button",{type:"button",className:`item-check-btn ${h.entregue?"checked":""}`,onClick:()=>n&&n(v.id,k,!h.entregue),title:h.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[h.entregue?o.jsx(Qd,{size:14}):o.jsx(Kd,{size:14}),o.jsx("span",{children:h.entregue?"Entregue":"Entregar"})]})]}),h.observacao&&o.jsxs("div",{className:"item-obs-highlight",children:[o.jsx(Lm,{size:13,color:"var(--text-obs)"}),o.jsxs("span",{children:["OBS: ",h.observacao]})]})]},k))]}),o.jsx("div",{className:"kds-card-footer",children:v.status==="pendente"?o.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(v.id,"em_preparo"),children:[o.jsx(Im,{size:18})," Iniciar Preparo"]}):o.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(v.id,"pronto"),children:[o.jsx(Ba,{size:18})," Pronto / Chamar Cliente"]})})]},v.id)})})]})}let rr=null;function eg(){if(!rr){const e=window.AudioContext||window.webkitAudioContext;e&&(rr=new e)}return rr&&rr.state==="suspended"&&rr.resume(),rr}function fu(){try{const e=eg();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),s.gain.setValueAtTime(0,t+.35),s.gain.linearRampToValueAtTime(.7,t+.4),s.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(s),s.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function tg({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,s]=A.useState(!0),[a,l]=A.useState(null);A.useEffect(()=>{t&&(t.status==="pronto"||t.status==="entrega_parcial")&&i&&(fu(),l(t.id))},[t,i]);const u=e.filter(g=>g.status==="pronto"||g.status==="entrega_parcial"),d=e.filter(g=>g.status==="entregue").slice(0,8),x=a?e.find(g=>g.id===a):t?e.find(g=>g.id===t.id):null,y=x&&(x.status==="pronto"||x.status==="entrega_parcial")?x:u[0],p=()=>{if(!y||u.length<=1)return;const g=u.findIndex(b=>b.id===y.id),w=u[(g+1)%u.length];w&&l(w.id)},v=g=>{r(g,"entregue");const w=u.filter(b=>b.id!==g);w.length>0?l(w[0].id):l(null)};return o.jsxs("div",{className:"chamada-tv-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tv-main-panel",children:[o.jsx("div",{className:"tv-panel-controls",children:o.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{s(!i),i||fu()},children:[i?o.jsx(Wm,{size:18,color:"var(--status-pronto)"}):o.jsx(Qm,{size:18,color:"var(--primary)"}),o.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),o.jsxs("div",{className:"destaque-label",children:[o.jsx(Ba,{size:22,color:"var(--status-pronto)"}),o.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),y?o.jsxs("div",{className:"destaque-card",children:[o.jsxs("div",{className:"destaque-comanda",children:["#",y.numero]}),o.jsx("div",{className:"destaque-cliente",children:y.cliente}),y.itens&&o.jsxs("div",{className:"destaque-itens-box",children:[o.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[o.jsx("span",{children:"Conferência de Itens no Balcão:"}),o.jsxs("span",{style:{color:"var(--primary)",fontWeight:800},children:[y.itens.filter(g=>g.entregue).length," de ",y.itens.length," entregues"]})]}),y.itens.map((g,w)=>{const b=!!g.entregue;return o.jsxs("div",{className:`destaque-item-row ${b?"item-entregue":""}`,onClick:()=>n&&n(y.id,w,!b),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[o.jsxs("span",{className:b?"badge badge-pronto":"badge badge-pendente",children:[g.quantidade,"x"]}),o.jsx("span",{style:{color:b?"#156b16":"var(--text-title)",textDecoration:b?"line-through":"none",fontWeight:700},children:g.nome}),g.observacao&&o.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",g.observacao,")"]})]}),o.jsxs("button",{type:"button",className:`btn ${b?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:f=>{f.stopPropagation(),n&&n(y.id,w,!b)},children:[b?o.jsx(Qd,{size:16}):o.jsx(Kd,{size:16}),o.jsx("span",{children:b?"✓ Entregue":"Dar Baixa"})]})]},w)})]}),o.jsxs("div",{className:"destaque-acoes",children:[o.jsxs("button",{className:"btn btn-success",style:{flex:2,padding:"0.85rem",fontSize:"1rem",borderRadius:"var(--radius-md)",fontWeight:700},onClick:()=>v(y.id),children:[o.jsx(pu,{size:20})," Finalizar & Entregar Todos"]}),u.length>1&&o.jsxs("button",{className:"btn btn-secondary",style:{flex:1,padding:"0.85rem",fontSize:"0.88rem",borderRadius:"var(--radius-md)",fontWeight:600},onClick:p,children:[o.jsx(Ud,{size:18})," Próximo da Fila"]})]})]}):o.jsxs("div",{className:"chamada-vazio",children:[o.jsx(Fi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),o.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),o.jsxs("div",{className:"tv-sidebar",children:[o.jsxs("div",{className:"sidebar-section",children:[o.jsxs("div",{className:"sidebar-title",children:[o.jsx(Di,{size:18,color:"var(--status-pronto)"}),o.jsxs("span",{children:["Fila no Balcão (",u.length,")"]})]}),o.jsx("div",{className:"prontos-lista",children:u.length===0?o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):u.map(g=>{const w=y&&g.id===y.id;return o.jsxs("div",{className:`pronto-item ${w?"item-ativo-tv":""}`,onClick:()=>l(g.id),children:[o.jsxs("div",{children:[o.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",g.numero]}),o.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:g.cliente}),g.status==="entrega_parcial"&&o.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",g.itens?g.itens.filter(b=>b.entregue).length:0,"/",g.itens?g.itens.length:0,")"]})]}),o.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:b=>{b.stopPropagation(),l(g.id)},children:w?"Exibindo":"Exibir"}),o.jsx("button",{type:"button",className:"btn btn-success",style:{padding:"0.35rem 0.55rem",fontSize:"0.78rem"},onClick:b=>{b.stopPropagation(),v(g.id)},children:"Entregar"})]})]},g.id)})})]}),o.jsxs("div",{className:"sidebar-section",children:[o.jsxs("div",{className:"sidebar-title",children:[o.jsx(pu,{size:18,color:"var(--app-ink-muted)"}),o.jsx("span",{children:"Últimos Entregues"})]}),o.jsx("div",{className:"entregues-lista",children:d.length===0?o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):d.map(g=>o.jsxs("div",{className:"entregue-chip",children:[o.jsxs("span",{children:["#",g.numero]}),o.jsx("strong",{style:{color:"var(--app-ink)"},children:g.cliente})]},g.id))})]})]})]})}const Yd=[{id:"burger",nome:"Hambúrguer",component:o.jsx(Cm,{size:18})},{id:"fries",nome:"Porção",component:o.jsx(Fm,{size:18})},{id:"drink",nome:"Bebida",component:o.jsx(zm,{size:18})},{id:"dessert",nome:"Sobremesa",component:o.jsx(Em,{size:18})},{id:"pizza",nome:"Pizza",component:o.jsx(Dm,{size:18})},{id:"coffee",nome:"Café",component:o.jsx(Nm,{size:18})},{id:"utensils",nome:"Geral",component:o.jsx(Pr,{size:18})}];function hu(e){const t=Yd.find(r=>r.id===e);return t?t.component:o.jsx(Pr,{size:16})}function rg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:s}){const[a,l]=A.useState("todas"),[u,d]=A.useState(""),[x,y]=A.useState(!1),[p,v]=A.useState(!1),[g,w]=A.useState(null),[b,f]=A.useState(""),[c,h]=A.useState(""),[k,N]=A.useState(""),[_,P]=A.useState(""),[T,V]=A.useState(""),[F,m]=A.useState("burger"),D=Array.isArray(e==null?void 0:e.categorias)?e.categorias:[],W=Array.isArray(e==null?void 0:e.produtos)?e.produtos:Array.isArray(e)?e:[],I=W.filter(S=>{const U=a==="todas"||S.categoriaId===a,ne=!u.trim()||S.nome.toLowerCase().includes(u.toLowerCase())||S.descricao&&S.descricao.toLowerCase().includes(u.toLowerCase());return U&&ne}),ke=(S=null)=>{var U;S?(w(S),f(S.nome),h(S.categoriaId),N(S.preco.toString()),P(S.descricao||"")):(w(null),f(""),h(((U=D[0])==null?void 0:U.id)||"lanches"),N(""),P("")),y(!0)},He=()=>{V(""),m("burger"),v(!0)},We=S=>{if(S.preventDefault(),!b.trim()||!k||!c){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:g?g.id:void 0,categoriaId:c,nome:b.trim(),preco:parseFloat(k),descricao:_.trim(),disponivel:g?g.disponivel:!0}),y(!1)},z=S=>{if(S.preventDefault(),!T.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:T.trim(),icone:F}),v(!1)},$=S=>{window.confirm(`Tem certeza que deseja excluir o produto "${S.nome}"?`)&&r(S.id)},B=S=>{const U=W.filter(ne=>ne.categoriaId===S.id).length;if(U>0){alert(`Não é possível excluir a categoria "${S.nome}" pois ela possui ${U} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${S.nome}"?`)&&s(S.id).then(ne=>{ne&&ne.error?alert(ne.error):a===S.id&&l("todas")})};return o.jsxs("div",{className:"cardapio-crud-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"crud-topbar",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Pr,{size:26,color:"var(--primary)"}),o.jsx("span",{children:"Gestão do Cardápio"})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ua,{size:18,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:S=>d(S.target.value)})]}),o.jsxs("div",{className:"crud-actions",children:[o.jsxs("button",{className:"btn btn-secondary",onClick:He,children:[o.jsx(su,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),o.jsxs("button",{className:"btn btn-primary",onClick:()=>ke(),children:[o.jsx(Fs,{size:18})," + Produto"]})]})]}),o.jsxs("div",{className:"cat-pills-bar",children:[o.jsxs("button",{className:`cat-pill-btn ${a==="todas"?"active":""}`,onClick:()=>l("todas"),children:[o.jsx(Xd,{size:14})," Todas (",W.length,")"]}),D.map(S=>{const U=W.filter(ne=>ne.categoriaId===S.id).length;return o.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[o.jsxs("button",{className:`cat-pill-btn ${a===S.id?"active":""}`,onClick:()=>l(S.id),children:[hu(S.icone)," ",o.jsx("span",{children:S.nome})," (",U,")"]}),U===0&&o.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>B(S),children:o.jsx(Ii,{size:13})})]},S.id)})]}),o.jsx("div",{className:"crud-table-wrapper",children:o.jsxs("table",{className:"crud-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Disponibilidade"}),o.jsx("th",{children:"Produto"}),o.jsx("th",{children:"Categoria"}),o.jsx("th",{children:"Preço"}),o.jsx("th",{children:"Descrição"}),o.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),o.jsx("tbody",{children:I.length===0?o.jsx("tr",{children:o.jsxs("td",{colSpan:"6",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[o.jsx(Vd,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",o.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):I.map(S=>{const U=D.find(ne=>ne.id===S.categoriaId);return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(S.id),children:S.disponivel?o.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[o.jsx(Um,{size:18})," Ativo"]}):o.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[o.jsx($m,{size:18})," Esgotado"]})})}),o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:S.nome})}),o.jsx("td",{children:o.jsxs("span",{className:"badge badge-pendente",children:[hu(U==null?void 0:U.icone)," ",(U==null?void 0:U.nome)||S.categoriaId]})}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",S.preco.toFixed(2)]})}),o.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:S.descricao||"-"}),o.jsx("td",{children:o.jsxs("div",{className:"action-group",children:[o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>ke(S),children:[o.jsx(Om,{size:14})," Editar"]}),o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>$(S),children:[o.jsx(Ii,{size:14})," Excluir"]})]})})]},S.id)})})]})}),x&&o.jsx("div",{className:"modal-backdrop",onClick:()=>y(!1),children:o.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:[o.jsx(Pr,{size:20,color:"var(--primary)"}),o.jsx("span",{children:g?"Editar Produto":"Cadastrar Novo Produto"})]}),o.jsxs("form",{onSubmit:We,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Produto *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:b,onChange:S=>f(S.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Categoria *"}),o.jsx("select",{className:"form-input",value:c,onChange:S=>h(S.target.value),required:!0,children:D.map(S=>o.jsx("option",{value:S.id,children:S.nome},S.id))})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Preço em R$ *"}),o.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:k,onChange:S=>N(S.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),o.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:_,onChange:S=>P(S.target.value)})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>y(!1),children:"Cancelar"}),o.jsxs("button",{type:"submit",className:"btn btn-primary",children:[o.jsx(wr,{size:18})," Salvar Produto"]})]})]})]})}),p&&o.jsx("div",{className:"modal-backdrop",onClick:()=>v(!1),children:o.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:[o.jsx(su,{size:20,color:"var(--status-preparo)"}),o.jsx("span",{children:"Nova Categoria do Cardápio"})]}),o.jsxs("form",{onSubmit:z,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:T,onChange:S=>V(S.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),o.jsx("div",{className:"icone-selector",children:Yd.map(S=>o.jsxs("button",{type:"button",className:`icone-opt ${F===S.id?"selected":""}`,onClick:()=>m(S.id),children:[S.component,o.jsx("span",{children:S.nome})]},S.id))})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>v(!1),children:"Cancelar"}),o.jsxs("button",{type:"submit",className:"btn btn-success",children:[o.jsx(wr,{size:18})," Criar Categoria"]})]})]})]})})]})}function ng({pedidos:e,operador:t}){const[r,n]=A.useState(null),[i,s]=A.useState("hoje"),[a,l]=A.useState("todos"),[u,d]=A.useState(""),[x,y]=A.useState(""),[p,v]=A.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const w=m=>{n(D=>D===m?null:m)},b=(m,D)=>{m.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${D}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(W=>W.json()).catch(W=>console.error("Erro ao quitar pagamento:",W))},f=m=>m.statusPagamento==="pago"?!1:m.statusPagamento==="pendente_pagamento"||m.formaPagamento==="pagar_depois",c=e.filter(m=>{if(u.trim()){const I=u.toLowerCase().trim(),ke=`#${m.numero}`.toLowerCase(),He=(m.cliente||"").toLowerCase(),We=(m.telefoneCliente||"").toLowerCase();if(!(ke.includes(I)||He.includes(I)||We.includes(I)))return!1}if(a==="pagos"&&f(m)||a==="fiado"&&!f(m)||a==="entregues"&&m.status!=="entregue"||a==="cancelados"&&m.status!=="cancelado"||a!=="cancelados"&&m.status==="cancelado")return!1;if(!m.criadoEm)return!0;const D=new Date(m.criadoEm),W=new Date;if(i==="hoje")return D.toDateString()===W.toDateString();if(i==="ontem"){const I=new Date;return I.setDate(W.getDate()-1),D.toDateString()===I.toDateString()}else if(i==="7dias"){const I=new Date;return I.setDate(W.getDate()-7),D>=I}else if(i==="custom"){if(x){const I=new Date(x);if(I.setHours(0,0,0,0),D<I)return!1}if(p){const I=new Date(p);if(I.setHours(23,59,59,999),D>I)return!1}}return!0}),h=c.filter(m=>m.status!=="cancelado"),k=h.filter(m=>!f(m)),N=h.filter(m=>f(m)),_=k.reduce((m,D)=>m+(Number(D.total)||0),0),P=N.reduce((m,D)=>m+(Number(D.total)||0),0),T=h.length,V=T>0?(_+P)/T:0,F=m=>{if(m.formaPagamento==="pagar_depois"||m.statusPagamento==="pendente_pagamento"){const D=m.dataCobranca?new Date(m.dataCobranca).toLocaleDateString():"Sem Data";return m.statusPagamento==="pago"?o.jsxs("span",{className:"badge badge-pronto",children:[o.jsx(wr,{size:12})," Pagar Depois (Quitado)"]}):o.jsxs("span",{className:"badge badge-preparo",children:[o.jsx(io,{size:12})," Pagar Depois (",D,")"]})}return o.jsxs("span",{className:"badge badge-pendente",children:[o.jsx(pi,{size:12})," ",m.formaPagamento?m.formaPagamento.toUpperCase():"PIX"]})};return o.jsxs("div",{className:"vendas-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"vendas-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Rs,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),o.jsx("div",{className:"badge badge-pronto",children:o.jsxs("span",{children:[c.length," Registros Encontrados"]})})]}),o.jsxs("div",{className:"vendas-filtros-card",children:[o.jsxs("div",{className:"vendas-search-box",children:[o.jsx(Ua,{size:18,color:"var(--primary)"}),o.jsx("input",{type:"text",className:"vendas-search-input",placeholder:"Buscar por comanda #, cliente ou WhatsApp...",value:u,onChange:m=>d(m.target.value)})]}),o.jsx("div",{className:"dropdown-filter-group",children:o.jsxs("select",{className:"dropdown-filter-select",value:i,onChange:m=>s(m.target.value),children:[o.jsx("option",{value:"hoje",children:"Período: Hoje"}),o.jsx("option",{value:"ontem",children:"Período: Ontem"}),o.jsx("option",{value:"7dias",children:"Período: Últimos 7 dias"}),o.jsx("option",{value:"todos",children:"Período: Todos os Pedidos"}),o.jsx("option",{value:"custom",children:"Período: Data Personalizada"})]})}),o.jsx("div",{className:"dropdown-filter-group",children:o.jsxs("select",{className:"dropdown-filter-select",value:a,onChange:m=>l(m.target.value),children:[o.jsx("option",{value:"todos",children:"Status: Todos os Pedidos"}),o.jsx("option",{value:"pagos",children:"Status: Quitados / Pagos"}),o.jsx("option",{value:"fiado",children:"Status: Pagar Depois (Fiado)"}),o.jsx("option",{value:"entregues",children:"Status: Entregues"}),o.jsx("option",{value:"cancelados",children:"Status: Cancelados"})]})})]}),i==="custom"&&o.jsxs("div",{className:"vendas-filtros-card",style:{background:"var(--app-surface-2)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[o.jsx(Ls,{size:18,color:"var(--primary)"}),o.jsx("span",{style:{color:"var(--text-title)"},children:"Data Inicial:"}),o.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:x,onChange:m=>y(m.target.value)})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.88rem",fontWeight:600,flex:1},children:[o.jsx("span",{style:{color:"var(--text-title)"},children:"Data Final:"}),o.jsx("input",{type:"date",className:"form-input",style:{minHeight:"38px",padding:"0.35rem 0.7rem",flex:1},value:p,onChange:m=>v(m.target.value)})]})]}),o.jsxs("div",{className:"metrics-grid",children:[o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:o.jsx(qd,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),o.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",_.toFixed(2)]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:o.jsx(Ls,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),o.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",P.toFixed(2)]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:o.jsx(dt,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),o.jsxs("div",{className:"metric-value",children:[T," comanda(s)"]})]})]}),o.jsxs("div",{className:"metric-card",children:[o.jsx("div",{className:"metric-icon-box",children:o.jsx(Vm,{size:26})}),o.jsxs("div",{children:[o.jsx("div",{className:"metric-label",children:"Ticket Médio"}),o.jsxs("div",{className:"metric-value",children:["R$ ",V.toFixed(2)]})]})]})]}),o.jsx("div",{className:"vendas-table-wrapper",children:o.jsxs("table",{className:"vendas-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"}}),o.jsx("th",{children:"Comanda"}),o.jsx("th",{children:"Data / Horário"}),o.jsx("th",{children:"Cliente / Contato"}),o.jsx("th",{children:"Forma Pagamento"}),o.jsx("th",{children:"Valor Total"}),o.jsx("th",{children:"Status Pedido"}),o.jsx("th",{children:"Atendente / Cozinha"}),o.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),o.jsx("tbody",{children:c.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):c.map(m=>{const D=r===m.id,W=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return o.jsxs(bu.Fragment,{children:[o.jsxs("tr",{className:"row-exp",onClick:()=>w(m.id),children:[o.jsx("td",{style:{textAlign:"center"},children:D?o.jsx(Os,{size:16,color:"var(--primary)"}):o.jsx(Ms,{size:16,color:"var(--app-ink-muted)"})}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",m.numero]})}),o.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:W}),o.jsxs("td",{children:[o.jsx("strong",{style:{color:"var(--primary)"},children:m.cliente}),m.telefoneCliente&&o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[o.jsx(Is,{size:12}),o.jsx("span",{children:m.telefoneCliente})]})]}),o.jsx("td",{children:F(m)}),o.jsx("td",{children:o.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(m.total)||0).toFixed(2)]})}),o.jsx("td",{children:o.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})}),o.jsxs("td",{style:{fontSize:"0.82rem"},children:[o.jsxs("div",{children:["Caixa: ",o.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&o.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",m.preparadoPor]})]}),o.jsx("td",{children:o.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:f(m)?o.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:I=>b(I,m.id),children:[o.jsx(wr,{size:14})," Quitar / Marcar Pago"]}):o.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Di,{size:15})," Quitado"]})})})]}),D&&o.jsx("tr",{children:o.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:o.jsxs("div",{className:"exp-details-box",children:[o.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsx(Hd,{size:16,color:"var(--primary)"}),o.jsxs("span",{children:["Itens Lançados na Comanda #",m.numero,":"]})]}),m.itens&&m.itens.length>0?o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:m.itens.map((I,ke)=>o.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:[I.quantidade,"x"]})," ",I.nome,I.observacao&&o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",I.observacao]})]}),o.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(I.preco*I.quantidade).toFixed(2)]})]},ke))}):o.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},m.id)})})]})}),o.jsx("div",{className:"vendas-mobile-list",children:c.length===0?o.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):c.map(m=>{const D=r===m.id,W=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return o.jsxs("div",{className:"venda-card-mobile",onClick:()=>w(m.id),children:[o.jsxs("div",{className:"venda-card-summary",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",m.numero]}),o.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:m.cliente})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(m.total)||0).toFixed(2)]}),D?o.jsx(Os,{size:16,color:"var(--primary)"}):o.jsx(Ms,{size:16,color:"var(--app-ink-muted)"})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[o.jsx("div",{children:F(m)}),o.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})]}),D&&o.jsxs("div",{className:"venda-card-details",children:[o.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",o.jsx("strong",{children:W})]}),m.telefoneCliente&&o.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[o.jsx(Is,{size:13}),o.jsxs("span",{children:["Contato / WhatsApp: ",o.jsx("strong",{children:m.telefoneCliente})]})]}),o.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[o.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),m.itens&&m.itens.length>0?o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:m.itens.map((I,ke)=>o.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[o.jsxs("span",{children:[o.jsxs("strong",{children:[I.quantidade,"x"]})," ",I.nome," ",I.observacao?`(${I.observacao})`:""]}),o.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(I.preco*I.quantidade).toFixed(2)]})]},ke))}):o.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[o.jsxs("span",{children:["Caixa: ",o.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&o.jsxs("span",{children:["Cozinha: ",o.jsx("strong",{children:m.preparadoPor})]})]}),o.jsx("div",{style:{marginTop:"0.3rem",display:"flex",justifyContent:"flex-end"},children:f(m)?o.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:I=>b(I,m.id),children:[o.jsx(wr,{size:14})," Quitar / Marcar Pago"]}):o.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Di,{size:15})," Pagamento Confirmado / Quitado"]})})]})]},m.id)})})]})}function ig({operador:e}){const[t,r]=A.useState([]),[n,i]=A.useState(!1),[s,a]=A.useState(!1),[l,u]=A.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[d,x]=A.useState({}),[y,p]=A.useState(null),v=e&&e.role==="master",[g,w]=A.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[b,f]=A.useState(!1);A.useEffect(()=>{v&&(k(),c())},[v]);const c=()=>{fetch("/api/pix-config").then(m=>m.json()).then(m=>{m&&m.chavePix&&w(m)}).catch(m=>console.error("Erro ao carregar PIX config:",m))},h=m=>{m.preventDefault(),f(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(D=>D.json()).then(D=>{f(!1),D&&D.status==="success"?(p("Chave PIX atualizada com sucesso!"),setTimeout(()=>p(null),4e3)):alert(D.error||"Erro ao salvar chave PIX.")}).catch(()=>{f(!1),alert("Erro de conexão ao salvar chave PIX.")})},k=()=>{fetch("/api/users").then(m=>m.json()).then(m=>r(m)).catch(m=>console.error("Erro ao carregar usuários:",m))};if(!v)return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const N=m=>{x(D=>({...D,[m]:!D[m]}))},_=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},P=m=>{u({...m}),a(!0),i(!0)},T=m=>{if(m.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const D=s?`/api/users/${l.id}`:"/api/users";fetch(D,{method:s?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(I=>I.json()).then(I=>{I&&I.status==="success"?(p(s?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),k(),setTimeout(()=>p(null),4e3)):alert(I.error||"Erro ao salvar usuário.")}).catch(I=>alert("Erro de conexão com o servidor."))},V=(m,D)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${D}"?`)&&fetch(`/api/users/${m}`,{method:"DELETE"}).then(W=>W.json()).then(W=>{W&&W.status==="success"?(p(`Conta de "${D}" excluída com sucesso.`),k(),setTimeout(()=>p(null),4e3)):alert(W.error||"Erro ao excluir conta.")})},F=m=>{switch(m){case"master":return o.jsxs("span",{className:"badge badge-role-master",children:[o.jsx(Sm,{size:13})," Master (Admin)"]});case"caixa":return o.jsxs("span",{className:"badge badge-role-caixa",children:[o.jsx(dt,{size:13})," Caixa (Atendente)"]});case"cozinha":return o.jsxs("span",{className:"badge badge-role-cozinha",children:[o.jsx(Sn,{size:13})," Cozinha (KDS)"]});case"tv":return o.jsxs("span",{className:"badge badge-role-tv",children:[o.jsx(Fi,{size:13})," Monitor TV"]});default:return o.jsx("span",{className:"badge badge-role-tv",children:m})}};return o.jsxs("div",{className:"usuarios-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"usuarios-header",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Bs,{size:26,color:"var(--primary)"}),o.jsx("span",{children:"Gestão de Contas & Operadores"})]}),o.jsxs("button",{className:"btn btn-primary",onClick:_,children:[o.jsx(Hm,{size:18})," Nova Conta"]})]}),y&&o.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[o.jsx($a,{size:18}),o.jsx("span",{children:y})]}),o.jsx("div",{className:"usuarios-table-wrapper",children:o.jsxs("table",{className:"usuarios-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nome Completo"}),o.jsx("th",{children:"Usuário de Login"}),o.jsx("th",{children:"Função / Permissão"}),o.jsx("th",{children:"Senha de Acesso"}),o.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),o.jsx("tbody",{children:t.map(m=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--text-title)"},children:m.nome})}),o.jsx("td",{children:o.jsx("strong",{style:{color:"var(--primary)"},children:m.usuario})}),o.jsx("td",{children:F(m.role)}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:d[m.id]?m.senha:"••••••••"}),o.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>N(m.id),title:"Revelar/Ocultar Senha",children:d[m.id]?o.jsx(Pm,{size:14}):o.jsx(Tm,{size:14})})]})}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>P(m),children:[o.jsx(Bm,{size:14})," Editar"]}),m.usuario!=="admin"&&o.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>V(m.id,m.nome),children:[o.jsx(Ii,{size:14})," Excluir"]})]})})]},m.id))})]})}),o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[o.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx(Am,{size:20,color:"var(--primary)"}),o.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),o.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",o.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),o.jsxs("form",{onSubmit:h,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),o.jsxs("select",{className:"form-input",value:g.tipoChave,onChange:m=>w({...g,tipoChave:m.target.value}),children:[o.jsx("option",{value:"email",children:"E-mail"}),o.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),o.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),o.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Chave PIX *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:g.chavePix,onChange:m=>w({...g,chavePix:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:g.nomeBeneficiario,onChange:m=>w({...g,nomeBeneficiario:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Cidade *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:g.cidadeBeneficiario,onChange:m=>w({...g,cidadeBeneficiario:m.target.value}),required:!0})]}),o.jsx("div",{children:o.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:b,children:b?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-card",children:[o.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx(zr,{size:20,color:"var(--primary)"}),s?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),o.jsxs("form",{onSubmit:T,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:m=>u({...l,nome:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Usuário de Login *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:m=>u({...l,usuario:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:m=>u({...l,senha:m.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),o.jsxs("select",{className:"form-input",value:l.role,onChange:m=>u({...l,role:m.target.value}),children:[o.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),o.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),o.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),o.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[o.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),o.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:s?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function og({logs:e,operador:t}){const[r,n]=A.useState(""),[i,s]=A.useState("todas"),[a,l]=A.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const d=p=>{l(v=>v===p?null:p)},x=e.filter(p=>{const v=i==="todas"||p.acao===i,g=r.toLowerCase().trim(),w=!g||String(p.numeroPedido).includes(g)||p.cliente&&p.cliente.toLowerCase().includes(g)||p.usuario&&p.usuario.toLowerCase().includes(g)||p.descricao&&p.descricao.toLowerCase().includes(g);return v&&w}),y=p=>{switch(p){case"criacao":return o.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(bm,{size:13})," Criação Caixa"]});case"preparo":return o.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Sn,{size:13})," Em Preparo"]});case"pronto":return o.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Ba,{size:13})," Pronto / Chamada TV"]});case"entregue":return o.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx($a,{size:13})," Entregue"]});default:return o.jsx("span",{className:"badge badge-entregue",children:p})}};return o.jsxs("div",{className:"logs-container",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"logs-topbar",children:[o.jsxs("div",{className:"view-title",style:{margin:0},children:[o.jsx(Ds,{size:24,color:"var(--primary)"}),o.jsx("span",{children:"Logs de Auditoria"})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ua,{size:16,color:"var(--app-ink-muted)"}),o.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:p=>n(p.target.value)})]})]}),o.jsxs("div",{className:"logs-pills-bar",children:[o.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>s("todas"),children:["Todos (",e.length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>s("criacao"),children:["Criação (",e.filter(p=>p.acao==="criacao").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>s("preparo"),children:["Preparo (",e.filter(p=>p.acao==="preparo").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>s("pronto"),children:["Chamada (",e.filter(p=>p.acao==="pronto").length,")"]}),o.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>s("entregue"),children:["Entregas (",e.filter(p=>p.acao==="entregue").length,")"]})]}),o.jsx("div",{className:"logs-table-wrapper",children:o.jsxs("table",{className:"logs-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Horário"}),o.jsx("th",{children:"Operador"}),o.jsx("th",{children:"Ação"}),o.jsx("th",{children:"Comanda / Cliente"}),o.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),o.jsx("tbody",{children:x.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):x.map(p=>{const v=new Date(p.timestamp),g=`${v.toLocaleDateString()} ${v.toLocaleTimeString()}`;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(io,{size:13}),o.jsx("span",{children:g})]})}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[o.jsx(zr,{size:14,color:"var(--primary)"}),o.jsx("span",{children:p.usuario})]})}),o.jsx("td",{children:y(p.acao)}),o.jsxs("td",{children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:["#",p.numeroPedido]}),o.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",p.cliente,")"]})]}),o.jsxs("td",{children:[o.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:p.descricao}),p.itens&&Array.isArray(p.itens)&&p.itens.length>0&&o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:p.itens.map((w,b)=>o.jsxs("div",{className:"item-chip",children:[o.jsx(Wd,{size:12,color:"var(--status-pronto)"}),o.jsxs("strong",{style:{color:"var(--primary)"},children:[w.quantidade,"x"]}),o.jsx("span",{children:w.nome}),o.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(w.preco*w.quantidade).toFixed(2),")"]}),w.observacao&&o.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",w.observacao,"]"]})]},b))})]})]},p.id)})})]})}),o.jsx("div",{className:"logs-mobile-list",children:x.length===0?o.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):x.map(p=>{const v=new Date(p.timestamp),g=v.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),w=a===p.id;return o.jsxs("div",{className:"log-card-mobile",onClick:()=>d(p.id),children:[o.jsxs("div",{className:"log-card-summary",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[o.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",p.numeroPedido]}),o.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:p.cliente})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[y(p.acao),o.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:g}),w?o.jsx(Os,{size:16,color:"var(--app-ink-muted)"}):o.jsx(Ms,{size:16,color:"var(--app-ink-muted)"})]})]}),w&&o.jsxs("div",{className:"log-card-details",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[o.jsx(zr,{size:13,color:"var(--primary)"}),o.jsxs("span",{children:["Operador: ",o.jsx("strong",{children:p.usuario})]}),o.jsxs("span",{style:{marginLeft:"auto"},children:[v.toLocaleDateString()," ",v.toLocaleTimeString()]})]}),o.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:p.descricao}),p.itens&&Array.isArray(p.itens)&&p.itens.length>0&&o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:p.itens.map((b,f)=>o.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[o.jsxs("strong",{style:{color:"var(--primary)"},children:[b.quantidade,"x"]})," ",b.nome," (R$ ",(b.preco*b.quantidade).toFixed(2),")",b.observacao&&o.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",b.observacao,"]"]})]},f))})]})]},p.id)})})]})}const ie=di(window.location.origin,{transports:["websocket","polling"]});function sg(){const[e,t]=A.useState("caixa"),[r,n]=A.useState(!1),[i,s]=A.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");A.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const a=()=>{s(j=>j==="escuro"?"claro":"escuro")},[l,u]=A.useState(()=>{try{const j=localStorage.getItem("operador_lanchonete");return j?JSON.parse(j):null}catch{return null}}),[d,x]=A.useState(""),[y,p]=A.useState(""),[v,g]=A.useState(null),[w,b]=A.useState(!1),[f,c]=A.useState([]),[h,k]=A.useState({categorias:[],produtos:[]}),[N,_]=A.useState([]),[P,T]=A.useState(null),V=j=>j?Array.isArray(j)?{categorias:[],produtos:j}:{categorias:Array.isArray(j.categorias)?j.categorias:[],produtos:Array.isArray(j.produtos)?j.produtos:[]}:{categorias:[],produtos:[]};A.useEffect(()=>{fetch("/api/menu").then(j=>j.json()).then(j=>k(V(j))).catch(j=>console.error("Erro ao carregar cardápio via REST:",j)),fetch("/api/logs").then(j=>j.json()).then(j=>_(j)).catch(j=>console.error("Erro ao buscar logs:",j))},[]);const F=j=>{if(j.preventDefault(),g(null),!d.trim()||!y.trim()){g("Preencha usuário e senha.");return}b(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:d.trim(),senha:y.trim()})}).then(L=>L.json()).then(L=>{if(b(!1),L&&L.status==="success"){const O=L.user;u(O),localStorage.setItem("operador_lanchonete",JSON.stringify(O)),O.role==="cozinha"?t("cozinha"):O.role==="tv"?t("chamada"):t("caixa")}else g(L.error||"Credenciais inválidas.")}).catch(L=>{b(!1),g("Erro de conexão com o servidor.")})},m=()=>{u(null),localStorage.removeItem("operador_lanchonete"),x(""),p(""),g(null)};A.useEffect(()=>(ie.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),ie.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),ie.on("pedidos_iniciais",j=>{c(Array.isArray(j)?j:[])}),ie.on("cardapio_inicial",j=>{k(V(j))}),ie.on("novo_pedido_criado",j=>{c(L=>[j,...L.filter(O=>O.id!==j.id)])}),ie.on("status_pedido_atualizado",j=>{c(L=>L.map(O=>O.id===j.id?j:O)),T(L=>L&&L.id===j.id?j:L)}),ie.on("pedido_chamado",j=>{T(j)}),ie.on("cardapio_atualizado",j=>{k(V(j))}),ie.on("novo_log_auditoria",j=>{_(L=>[j,...L.filter(O=>O.id!==j.id)])}),()=>{ie.off("connect"),ie.off("disconnect"),ie.off("pedidos_iniciais"),ie.off("cardapio_inicial"),ie.off("novo_pedido_criado"),ie.off("status_pedido_atualizado"),ie.off("pedido_chamado"),ie.off("cardapio_atualizado"),ie.off("novo_log_auditoria")}),[]);const D=(j,L)=>{ie.emit("criar_pedido",{...j,criadoPor:l?`${l.nome}`:"Caixa"},L)},W=(j,L)=>{ie.emit("mudar_status_pedido",{id:j,status:L,preparadoPor:l?`${l.nome}`:"Cozinha"})},I=(j,L,O)=>{c(ce=>ce.map(De=>{if(De.id!==j)return De;const lt=(De.itens||[]).map((Pe,Mr)=>{if(Mr!==L)return Pe;const Jd=O!==void 0?O:!Pe.entregue;return{...Pe,entregue:Jd}}),Gd=lt.reduce((Pe,Mr)=>Pe+(Mr.quantidade||1),0),qa=lt.filter(Pe=>Pe.entregue).reduce((Pe,Mr)=>Pe+(Mr.quantidade||1),0);let zn=De.status;qa>=Gd?zn="entregue":qa>0?zn="entrega_parcial":(De.status==="entregue"||De.status==="entrega_parcial")&&(zn="em_preparo");const Ha={...De,itens:lt,status:zn};return T(Pe=>Pe&&Pe.id===j?Ha:Pe),Ha})),ie.emit("alternar_item_entregue",{orderId:j,itemIndex:L,entregue:O,operadorNome:l?`${l.nome}`:"Atendente"}),fetch(`/api/orders/${j}/itens/${L}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:O,operadorNome:l?`${l.nome}`:"Atendente"})}).then(ce=>ce.ok?ce.json():null).then(ce=>{ce&&ce.order&&c(De=>De.map(lt=>lt.id===ce.order.id?ce.order:lt))}).catch(ce=>console.error("Erro ao alternar item:",ce))},ke=j=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar produto:",L))},He=j=>{fetch(`/api/menu/produto/${j}`,{method:"DELETE"}).then(L=>L.json()).catch(L=>console.error("Erro ao excluir produto:",L))},We=j=>{fetch(`/api/menu/produto/${j}/disponivel`,{method:"PATCH"}).then(L=>L.json()).catch(L=>console.error("Erro ao alterar disponibilidade:",L))},z=j=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)}).then(L=>L.json()).catch(L=>console.error("Erro ao salvar categoria:",L))},$=j=>fetch(`/api/menu/categoria/${j}`,{method:"DELETE"}).then(L=>L.json());if(!l)return o.jsxs("div",{className:"login-gate-screen",children:[o.jsx("style",{children:`
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
        `}),o.jsxs("div",{className:"login-gate-card",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("div",{className:"login-brand",children:o.jsxs("div",{children:[o.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),o.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),o.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar Tema",children:i==="escuro"?o.jsx(du,{size:16,color:"var(--status-preparo)"}):o.jsx(lu,{size:16,color:"var(--primary)"})})]}),v&&o.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[o.jsx(qm,{size:18}),o.jsx("span",{children:v})]}),o.jsxs("form",{onSubmit:F,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Usuário *"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:d,onChange:j=>x(j.target.value),required:!0,autoFocus:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Senha *"}),o.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:y,onChange:j=>p(j.target.value),required:!0})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:w,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[w?"Autenticando...":"Entrar no Sistema"," ",o.jsx(Ud,{size:18})]})]})]})]});const B=l.role==="master"||l.role==="caixa",S=l.role==="master",U=l.role==="master",ne=l.role==="master"||l.role==="caixa",E=l.role==="master"||l.role==="caixa";return o.jsxs("div",{className:"app-container",children:[o.jsxs("header",{className:"app-header",children:[o.jsx("div",{className:"brand-logo",children:o.jsxs("div",{children:[o.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),o.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),o.jsxs("nav",{className:"nav-tabs",children:[B&&o.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[o.jsx(dt,{size:18})," Caixa"]}),o.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[o.jsx(Sn,{size:18})," Cozinha (KDS)"]}),o.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[o.jsx(Fi,{size:18})," Chamada TV"]}),ne&&o.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[o.jsx(Rs,{size:18})," Vendas"]}),E&&o.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[o.jsx(Ds,{size:18})," Logs"]}),S&&o.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[o.jsx(Pr,{size:18})," Cardápio"]}),U&&o.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[o.jsx(Bs,{size:18})," Contas"]})]}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("button",{className:"user-badge-btn",onClick:m,title:`Operador: ${l.nome} (${l.role.toUpperCase()}) - Clique para sair`,children:[o.jsx(zr,{size:15,style:{flexShrink:0}}),o.jsx("span",{className:"user-badge-name",children:l.nome}),o.jsx(Rm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),o.jsx("button",{className:"theme-toggle-btn",onClick:a,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?o.jsxs(o.Fragment,{children:[o.jsx(du,{size:16,color:"var(--status-preparo)"}),o.jsx("span",{className:"theme-label",children:"Claro"})]}):o.jsxs(o.Fragment,{children:[o.jsx(lu,{size:16,color:"var(--blue-link)"}),o.jsx("span",{className:"theme-label",children:"Escuro"})]})}),o.jsxs("div",{className:"socket-status",children:[o.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?o.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Xm,{size:14})," Online"]}):o.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx(Km,{size:14})," Conectando..."]})]})]})]}),o.jsxs("main",{className:"main-content",children:[e==="caixa"&&(B?o.jsx(Jm,{menu:h,operador:l,onEnviarPedido:D}):o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(au,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),o.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",l.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&o.jsx(Zm,{pedidos:f,operador:l,onMudarStatus:W,onAlternarItemEntregue:I}),e==="chamada"&&o.jsx(tg,{pedidos:f,ultimoPedidoChamado:P,onMudarStatus:W,onAlternarItemEntregue:I}),e==="vendas"&&o.jsx(ng,{pedidos:f,operador:l}),e==="logs"&&o.jsx(og,{logs:N,operador:l}),e==="cardapio"&&(S?o.jsx(rg,{menu:h,onSalvarProduto:ke,onExcluirProduto:He,onToggleDisponivel:We,onSalvarCategoria:z,onExcluirCategoria:$}):o.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[o.jsx(au,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),o.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),o.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&o.jsx(ig,{operador:l})]}),o.jsx("nav",{className:"mobile-bottom-nav",children:o.jsxs("div",{className:"mobile-nav-items",children:[B&&o.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[o.jsx(dt,{size:20}),o.jsx("span",{children:"Caixa"})]}),o.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[o.jsx(Sn,{size:20}),o.jsx("span",{children:"Cozinha"})]}),o.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[o.jsx(Fi,{size:20}),o.jsx("span",{children:"TV Balcão"})]}),ne&&o.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[o.jsx(Rs,{size:20}),o.jsx("span",{children:"Vendas"})]}),E&&o.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[o.jsx(Ds,{size:20}),o.jsx("span",{children:"Logs"})]}),S&&o.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[o.jsx(Pr,{size:20}),o.jsx("span",{children:"Cardápio"})]}),U&&o.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[o.jsx(Bs,{size:20}),o.jsx("span",{children:"Contas"})]})]})})]})}Mo.createRoot(document.getElementById("root")).render(o.jsx(bu.StrictMode,{children:o.jsx(sg,{})}));
