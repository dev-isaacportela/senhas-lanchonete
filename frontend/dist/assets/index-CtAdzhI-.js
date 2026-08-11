(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hu={exports:{}},Bi={},mu={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),rp=Symbol.for("react.provider"),np=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),ap=Symbol.for("react.lazy"),Ha=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vu=Object.assign,yu={};function Pr(e,t,r){this.props=e,this.context=t,this.refs=yu,this.updater=r||gu}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xu(){}xu.prototype=Pr.prototype;function $o(e,t,r){this.props=e,this.context=t,this.refs=yu,this.updater=r||gu}var Uo=$o.prototype=new xu;Uo.constructor=$o;vu(Uo,Pr.prototype);Uo.isPureReactComponent=!0;var Wa=Array.isArray,ku=Object.prototype.hasOwnProperty,Vo={current:null},wu={key:!0,ref:!0,__self:!0,__source:!0};function ju(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ku.call(t,n)&&!wu.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Sn,type:e,key:o,ref:a,props:i,_owner:Vo.current}}function up(e,t){return{$$typeof:Sn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sn}function cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Qa=/\/+/g;function ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cp(""+e.key):t.toString(36)}function Xn(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sn:case Jd:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+ss(a,0):n,Wa(i)?(r="",e!=null&&(r=e.replace(Qa,"$&/")+"/"),Xn(i,t,r,"",function(c){return c})):i!=null&&(qo(i)&&(i=up(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Qa,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Wa(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+ss(o,l);a+=Xn(o,t,r,u,i)}else if(u=lp(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+ss(o,l++),a+=Xn(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Pn(e,t,r){if(e==null)return e;var n=[],i=0;return Xn(e,n,"","",function(o){return t.call(r,o,i++)}),n}function dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Yn={transition:null},pp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Yn,ReactCurrentOwner:Vo};function Su(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Pn,forEach:function(e,t,r){Pn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pn(e,function(){t++}),t},toArray:function(e){return Pn(e,function(t){return t})||[]},only:function(e){if(!qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Pr;q.Fragment=Zd;q.Profiler=tp;q.PureComponent=$o;q.StrictMode=ep;q.Suspense=sp;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;q.act=Su;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=vu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Vo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)ku.call(t,u)&&!wu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Sn,type:e.type,key:i,ref:o,props:n,_owner:a}};q.createContext=function(e){return e={$$typeof:np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rp,_context:e},e.Consumer=e};q.createElement=ju;q.createFactory=function(e){var t=ju.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:ip,render:e}};q.isValidElement=qo;q.lazy=function(e){return{$$typeof:ap,_payload:{_status:-1,_result:e},_init:dp}};q.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Yn.transition;Yn.transition={};try{e()}finally{Yn.transition=t}};q.unstable_act=Su;q.useCallback=function(e,t){return Se.current.useCallback(e,t)};q.useContext=function(e){return Se.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};q.useEffect=function(e,t){return Se.current.useEffect(e,t)};q.useId=function(){return Se.current.useId()};q.useImperativeHandle=function(e,t,r){return Se.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Se.current.useMemo(e,t)};q.useReducer=function(e,t,r){return Se.current.useReducer(e,t,r)};q.useRef=function(e){return Se.current.useRef(e)};q.useState=function(e){return Se.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return Se.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return Se.current.useTransition()};q.version="18.3.1";mu.exports=q;var P=mu.exports;const Cu=Gd(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=P,hp=Symbol.for("react.element"),mp=Symbol.for("react.fragment"),gp=Object.prototype.hasOwnProperty,vp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)gp.call(t,n)&&!yp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:hp,type:e,key:o,ref:a,props:i,_owner:vp.current}}Bi.Fragment=mp;Bi.jsx=bu;Bi.jsxs=bu;hu.exports=Bi;var s=hu.exports,Ls={},Nu={exports:{}},Le={},_u={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var B=_.length;_.push(I);e:for(;0<B;){var S=B-1>>>1,$=_[S];if(0<i($,I))_[S]=I,_[B]=$,B=S;else break e}}function r(_){return _.length===0?null:_[0]}function n(_){if(_.length===0)return null;var I=_[0],B=_.pop();if(B!==I){_[0]=B;e:for(var S=0,$=_.length,ne=$>>>1;S<ne;){var x=2*(S+1)-1,T=_[x],V=x+1,O=_[V];if(0>i(T,B))V<$&&0>i(O,T)?(_[S]=O,_[V]=B,S=V):(_[S]=T,_[x]=B,S=x);else if(V<$&&0>i(O,B))_[S]=O,_[V]=B,S=V;else break e}}return I}function i(_,I){var B=_.sortIndex-I.sortIndex;return B!==0?B:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],y=1,v=null,p=3,g=!1,w=!1,j=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var I=r(c);I!==null;){if(I.callback===null)n(c);else if(I.startTime<=_)n(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=r(c)}}function k(_){if(j=!1,h(_),!w)if(r(u)!==null)w=!0,Ve(b);else{var I=r(c);I!==null&&qe(k,I.startTime-_)}}function b(_,I){w=!1,j&&(j=!1,f(z),z=-1),g=!0;var B=p;try{for(h(I),v=r(u);v!==null&&(!(v.expirationTime>I)||_&&!m());){var S=v.callback;if(typeof S=="function"){v.callback=null,p=v.priorityLevel;var $=S(v.expirationTime<=I);I=e.unstable_now(),typeof $=="function"?v.callback=$:v===r(u)&&n(u),h(I)}else n(u);v=r(u)}if(v!==null)var ne=!0;else{var x=r(c);x!==null&&qe(k,x.startTime-I),ne=!1}return ne}finally{v=null,p=B,g=!1}}var N=!1,E=null,z=-1,U=5,D=-1;function m(){return!(e.unstable_now()-D<U)}function M(){if(E!==null){var _=e.unstable_now();D=_;var I=!0;try{I=E(!0,_)}finally{I?W():(N=!1,E=null)}}else N=!1}var W;if(typeof d=="function")W=function(){d(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ke=F.port2;F.port1.onmessage=M,W=function(){ke.postMessage(null)}}else W=function(){L(M,0)};function Ve(_){E=_,N||(N=!0,W())}function qe(_,I){z=L(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Ve(b))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var B=p;p=I;try{return _()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=p;p=_;try{return I()}finally{p=B}},e.unstable_scheduleCallback=function(_,I,B){var S=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?S+B:S):B=S,_){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=B+$,_={id:y++,callback:I,priorityLevel:_,startTime:B,expirationTime:$,sortIndex:-1},B>S?(_.sortIndex=B,t(c,_),r(u)===null&&_===r(c)&&(j?(f(z),z=-1):j=!0,qe(k,B-S))):(_.sortIndex=$,t(u,_),w||g||(w=!0,Ve(b))),_},e.unstable_shouldYield=m,e.unstable_wrapCallback=function(_){var I=p;return function(){var B=p;p=I;try{return _.apply(this,arguments)}finally{p=B}}}})(Eu);_u.exports=Eu;var xp=_u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=P,Re=xp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zu=new Set,sn={};function Jt(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(sn[e]=t,e=0;e<t.length;e++)zu.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=Object.prototype.hasOwnProperty,wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Xa={};function jp(e){return Os.call(Xa,e)?!0:Os.call(Ka,e)?!1:wp.test(e)?Xa[e]=!0:(Ka[e]=!0,!1)}function Sp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,r,n){if(t===null||typeof t>"u"||Sp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Wo);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,r,n){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,r,i,n)&&(r=null),n||i===null?jp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var yt=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tn=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),Tu=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Is=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,os;function qr(e){if(os===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||""}return`
`+os+e}var as=!1;function ls(e,t){if(!e||as)return"";as=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{as=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qr(e):""}function bp(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=ls(e.type,!1),e;case 11:return e=ls(e.type.render,!1),e;case 1:return e=ls(e.type,!0),e;default:return""}}function Fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case Ms:return"Profiler";case Ko:return"StrictMode";case Is:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tu:return(e.displayName||"Context")+".Consumer";case Pu:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return t=e.displayName||null,t!==null?t:Fs(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Fs(e(t))}catch{}}return null}function Np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fs(t);case 8:return t===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e){var t=Ru(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=_p(e))}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ru(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var r=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ga(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ot(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function $s(e,t){Ou(e,t);var r=Ot(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Us(e,t.type,r):t.hasOwnProperty("defaultValue")&&Us(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ja(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Us(e,t,r){(t!=="number"||fi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Hr=Array.isArray;function hr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ot(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(Hr(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ot(r)}}function Mu(e,t){var r=Ot(t.value),n=Ot(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function el(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rn,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rn=Rn||document.createElement("div"),Rn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function on(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ep=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){Ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function Fu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function Bu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Fu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var zp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,mr=null,gr=null;function tl(e){if(e=Nn(e)){if(typeof Ks!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Hi(t),Ks(e.stateNode,e.type,t))}}function $u(e){mr?gr?gr.push(e):gr=[e]:mr=e}function Uu(){if(mr){var e=mr,t=gr;if(gr=mr=null,tl(e),t)for(e=0;e<t.length;e++)tl(t[e])}}function Vu(e,t){return e(t)}function qu(){}var us=!1;function Hu(e,t,r){if(us)return e(t,r);us=!0;try{return Vu(e,t,r)}finally{us=!1,(mr!==null||gr!==null)&&(qu(),Uu())}}function an(e,t){var r=e.stateNode;if(r===null)return null;var n=Hi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Xs=!1;if(ht)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Xs=!1}function Pp(e,t,r,n,i,o,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(y){this.onError(y)}}var Yr=!1,hi=null,mi=!1,Ys=null,Tp={onError:function(e){Yr=!0,hi=e}};function Ap(e,t,r,n,i,o,a,l,u){Yr=!1,hi=null,Pp.apply(Tp,arguments)}function Rp(e,t,r,n,i,o,a,l,u){if(Ap.apply(this,arguments),Yr){if(Yr){var c=hi;Yr=!1,hi=null}else throw Error(C(198));mi||(mi=!0,Ys=c)}}function Zt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rl(e){if(Zt(e)!==e)throw Error(C(188))}function Lp(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return rl(i),e;if(o===n)return rl(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Qu(e){return e=Lp(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ku(e);if(t!==null)return t;e=e.sibling}return null}var Xu=Re.unstable_scheduleCallback,nl=Re.unstable_cancelCallback,Op=Re.unstable_shouldYield,Mp=Re.unstable_requestPaint,se=Re.unstable_now,Ip=Re.unstable_getCurrentPriorityLevel,Jo=Re.unstable_ImmediatePriority,Yu=Re.unstable_UserBlockingPriority,gi=Re.unstable_NormalPriority,Dp=Re.unstable_LowPriority,Gu=Re.unstable_IdlePriority,$i=null,rt=null;function Fp(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Up,Bp=Math.log,$p=Math.LN2;function Up(e){return e>>>=0,e===0?32:31-(Bp(e)/$p|0)|0}var Ln=64,On=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=Wr(l):(o&=a,o!==0&&(n=Wr(o)))}else a=r&~i,a!==0?n=Wr(a):o!==0&&(n=Wr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ye(t),i=1<<r,n|=e[r],t&=~i;return n}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ye(o),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Vp(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ju(){var e=Ln;return Ln<<=1,!(Ln&4194240)&&(Ln=64),e}function cs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Cn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=r}function Hp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ye(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Zo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ye(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var K=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,ea,tc,rc,nc,Js=!1,Mn=[],Nt=null,_t=null,Et=null,ln=new Map,un=new Map,jt=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function Ir(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Nn(t),t!==null&&ea(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qp(e,t,r,n,i){switch(t){case"focusin":return Nt=Ir(Nt,e,t,r,n,i),!0;case"dragenter":return _t=Ir(_t,e,t,r,n,i),!0;case"mouseover":return Et=Ir(Et,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return ln.set(o,Ir(ln.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,un.set(o,Ir(un.get(o)||null,e,t,r,n,i)),!0}return!1}function ic(e){var t=Ut(e.target);if(t!==null){var r=Zt(t);if(r!==null){if(t=r.tag,t===13){if(t=Wu(r),t!==null){e.blockedOn=t,nc(e.priority,function(){tc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Qs=n,r.target.dispatchEvent(n),Qs=null}else return t=Nn(r),t!==null&&ea(t),e.blockedOn=r,!1;t.shift()}return!0}function sl(e,t,r){Gn(e)&&r.delete(t)}function Kp(){Js=!1,Nt!==null&&Gn(Nt)&&(Nt=null),_t!==null&&Gn(_t)&&(_t=null),Et!==null&&Gn(Et)&&(Et=null),ln.forEach(sl),un.forEach(sl)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Kp)))}function cn(e){function t(i){return Dr(i,e)}if(0<Mn.length){Dr(Mn[0],e);for(var r=1;r<Mn.length;r++){var n=Mn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nt!==null&&Dr(Nt,e),_t!==null&&Dr(_t,e),Et!==null&&Dr(Et,e),ln.forEach(t),un.forEach(t),r=0;r<jt.length;r++)n=jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<jt.length&&(r=jt[0],r.blockedOn===null);)ic(r),r.blockedOn===null&&jt.shift()}var vr=yt.ReactCurrentBatchConfig,yi=!0;function Xp(e,t,r,n){var i=K,o=vr.transition;vr.transition=null;try{K=1,ta(e,t,r,n)}finally{K=i,vr.transition=o}}function Yp(e,t,r,n){var i=K,o=vr.transition;vr.transition=null;try{K=4,ta(e,t,r,n)}finally{K=i,vr.transition=o}}function ta(e,t,r,n){if(yi){var i=Zs(e,t,r,n);if(i===null)ks(e,t,n,xi,r),il(e,n);else if(Qp(i,e,t,r,n))n.stopPropagation();else if(il(e,n),t&4&&-1<Wp.indexOf(e)){for(;i!==null;){var o=Nn(i);if(o!==null&&ec(o),o=Zs(e,t,r,n),o===null&&ks(e,t,n,xi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else ks(e,t,n,null,r)}}var xi=null;function Zs(e,t,r,n){if(xi=null,e=Go(n),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Wu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case Jo:return 1;case Yu:return 4;case gi:case Dp:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var Ct=null,ra=null,Jn=null;function oc(){if(Jn)return Jn;var e,t=ra,r=t.length,n,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Jn=i.slice(e,1<n?1-n:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function ol(){return!1}function Oe(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?In:ol,this.isPropagationStopped=ol,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Oe(Tr),bn=te({},Tr,{view:0,detail:0}),Gp=Oe(bn),ds,ps,Fr,Ui=te({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(ds=e.screenX-Fr.screenX,ps=e.screenY-Fr.screenY):ps=ds=0,Fr=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),al=Oe(Ui),Jp=te({},Ui,{dataTransfer:0}),Zp=Oe(Jp),ef=te({},bn,{relatedTarget:0}),fs=Oe(ef),tf=te({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=Oe(tf),nf=te({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=Oe(nf),of=te({},Tr,{data:0}),ll=Oe(of),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function ia(){return cf}var df=te({},bn,{key:function(e){if(e.key){var t=af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pf=Oe(df),ff=te({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=Oe(ff),hf=te({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),mf=Oe(hf),gf=te({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Oe(gf),yf=te({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=Oe(yf),kf=[9,13,27,32],sa=ht&&"CompositionEvent"in window,Gr=null;ht&&"documentMode"in document&&(Gr=document.documentMode);var wf=ht&&"TextEvent"in window&&!Gr,ac=ht&&(!sa||Gr&&8<Gr&&11>=Gr),cl=" ",dl=!1;function lc(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function jf(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(dl=!0,cl);case"textInput":return e=t.data,e===cl&&dl?null:e;default:return null}}function Sf(e,t){if(ir)return e==="compositionend"||!sa&&lc(e,t)?(e=oc(),Jn=ra=Ct=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function cc(e,t,r,n){$u(n),t=ki(t,"onChange"),0<t.length&&(r=new na("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Jr=null,dn=null;function bf(e){wc(e,0)}function Vi(e){var t=ar(e);if(Lu(t))return e}function Nf(e,t){if(e==="change")return t}var dc=!1;if(ht){var hs;if(ht){var ms="oninput"in document;if(!ms){var fl=document.createElement("div");fl.setAttribute("oninput","return;"),ms=typeof fl.oninput=="function"}hs=ms}else hs=!1;dc=hs&&(!document.documentMode||9<document.documentMode)}function hl(){Jr&&(Jr.detachEvent("onpropertychange",pc),dn=Jr=null)}function pc(e){if(e.propertyName==="value"&&Vi(dn)){var t=[];cc(t,dn,e,Go(e)),Hu(bf,t)}}function _f(e,t,r){e==="focusin"?(hl(),Jr=t,dn=r,Jr.attachEvent("onpropertychange",pc)):e==="focusout"&&hl()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(dn)}function zf(e,t){if(e==="click")return Vi(t)}function Pf(e,t){if(e==="input"||e==="change")return Vi(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:Tf;function pn(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Os.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gl(e,t){var r=ml(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ml(r)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fi(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=hc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fc(r.ownerDocument.documentElement,r)){if(n!==null&&oa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=gl(r,o);var a=gl(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rf=ht&&"documentMode"in document&&11>=document.documentMode,sr=null,eo=null,Zr=null,to=!1;function vl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;to||sr==null||sr!==fi(n)||(n=sr,"selectionStart"in n&&oa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Zr&&pn(Zr,n)||(Zr=n,n=ki(eo,"onSelect"),0<n.length&&(t=new na("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=sr)))}function Dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var or={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},gs={},mc={};ht&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function qi(e){if(gs[e])return gs[e];if(!or[e])return e;var t=or[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in mc)return gs[e]=t[r];return e}var gc=qi("animationend"),vc=qi("animationiteration"),yc=qi("animationstart"),xc=qi("transitionend"),kc=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){kc.set(e,t),Jt(t,[e])}for(var vs=0;vs<yl.length;vs++){var ys=yl[vs],Lf=ys.toLowerCase(),Of=ys[0].toUpperCase()+ys.slice(1);It(Lf,"on"+Of)}It(gc,"onAnimationEnd");It(vc,"onAnimationIteration");It(yc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(xc,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function xl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Rp(n,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;xl(i,l,c),o=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;xl(i,l,c),o=u}}}if(mi)throw e=Ys,mi=!1,Ys=null,e}function Y(e,t){var r=t[oo];r===void 0&&(r=t[oo]=new Set);var n=e+"__bubble";r.has(n)||(jc(t,e,2,!1),r.add(n))}function xs(e,t,r){var n=0;t&&(n|=4),jc(r,e,n,t)}var Fn="_reactListening"+Math.random().toString(36).slice(2);function fn(e){if(!e[Fn]){e[Fn]=!0,zu.forEach(function(r){r!=="selectionchange"&&(Mf.has(r)||xs(r,!1,e),xs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fn]||(t[Fn]=!0,xs("selectionchange",!1,t))}}function jc(e,t,r,n){switch(sc(t)){case 1:var i=Xp;break;case 4:i=Yp;break;default:i=ta}r=i.bind(null,t,r,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ks(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ut(l),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}l=l.parentNode}}n=n.return}Hu(function(){var c=o,y=Go(r),v=[];e:{var p=kc.get(e);if(p!==void 0){var g=na,w=e;switch(e){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":g=pf;break;case"focusin":w="focus",g=fs;break;case"focusout":w="blur",g=fs;break;case"beforeblur":case"afterblur":g=fs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mf;break;case gc:case vc:case yc:g=rf;break;case xc:g=vf;break;case"scroll":g=Gp;break;case"wheel":g=xf;break;case"copy":case"cut":case"paste":g=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ul}var j=(t&4)!==0,L=!j&&e==="scroll",f=j?p!==null?p+"Capture":null:p;j=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=an(d,f),k!=null&&j.push(hn(d,k,h)))),L)break;d=d.return}0<j.length&&(p=new g(p,w,null,r,y),v.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Qs&&(w=r.relatedTarget||r.fromElement)&&(Ut(w)||w[mt]))break e;if((g||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=r.relatedTarget||r.toElement,g=c,w=w?Ut(w):null,w!==null&&(L=Zt(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(j=al,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=ul,k="onPointerLeave",f="onPointerEnter",d="pointer"),L=g==null?p:ar(g),h=w==null?p:ar(w),p=new j(k,d+"leave",g,r,y),p.target=L,p.relatedTarget=h,k=null,Ut(y)===c&&(j=new j(f,d+"enter",w,r,y),j.target=h,j.relatedTarget=L,k=j),L=k,g&&w)t:{for(j=g,f=w,d=0,h=j;h;h=er(h))d++;for(h=0,k=f;k;k=er(k))h++;for(;0<d-h;)j=er(j),d--;for(;0<h-d;)f=er(f),h--;for(;d--;){if(j===f||f!==null&&j===f.alternate)break t;j=er(j),f=er(f)}j=null}else j=null;g!==null&&kl(v,p,g,j,!1),w!==null&&L!==null&&kl(v,L,w,j,!0)}}e:{if(p=c?ar(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var b=Nf;else if(pl(p))if(dc)b=Pf;else{b=Ef;var N=_f}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=zf);if(b&&(b=b(e,c))){cc(v,b,r,y);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Us(p,"number",p.value)}switch(N=c?ar(c):window,e){case"focusin":(pl(N)||N.contentEditable==="true")&&(sr=N,eo=c,Zr=null);break;case"focusout":Zr=eo=sr=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,vl(v,r,y);break;case"selectionchange":if(Rf)break;case"keydown":case"keyup":vl(v,r,y)}var E;if(sa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ir?lc(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(ac&&r.locale!=="ko"&&(ir||z!=="onCompositionStart"?z==="onCompositionEnd"&&ir&&(E=oc()):(Ct=y,ra="value"in Ct?Ct.value:Ct.textContent,ir=!0)),N=ki(c,z),0<N.length&&(z=new ll(z,e,null,r,y),v.push({event:z,listeners:N}),E?z.data=E:(E=uc(r),E!==null&&(z.data=E)))),(E=wf?jf(e,r):Sf(e,r))&&(c=ki(c,"onBeforeInput"),0<c.length&&(y=new ll("onBeforeInput","beforeinput",null,r,y),v.push({event:y,listeners:c}),y.data=E))}wc(v,t)})}function hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ki(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=an(e,r),o!=null&&n.unshift(hn(e,o,i)),o=an(e,t),o!=null&&n.push(hn(e,o,i))),e=e.return}return n}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kl(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=an(r,o),u!=null&&a.unshift(hn(r,u,l))):i||(u=an(r,o),u!=null&&a.push(hn(r,u,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var If=/\r\n?/g,Df=/\u0000|\uFFFD/g;function wl(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Df,"")}function Bn(e,t,r){if(t=wl(t),wl(e)!==t&&r)throw Error(C(425))}function wi(){}var ro=null,no=null;function io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,jl=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof jl<"u"?function(e){return jl.resolve(null).then(e).catch($f)}:so;function $f(e){setTimeout(function(){throw e})}function ws(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),cn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);cn(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),tt="__reactFiber$"+Ar,mn="__reactProps$"+Ar,mt="__reactContainer$"+Ar,oo="__reactEvents$"+Ar,Uf="__reactListeners$"+Ar,Vf="__reactHandles$"+Ar;function Ut(e){var t=e[tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mt]||r[tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Sl(e);e!==null;){if(r=e[tt])return r;e=Sl(e)}return t}e=r,r=e.parentNode}return null}function Nn(e){return e=e[tt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Hi(e){return e[mn]||null}var ao=[],lr=-1;function Dt(e){return{current:e}}function G(e){0>lr||(e.current=ao[lr],ao[lr]=null,lr--)}function X(e,t){lr++,ao[lr]=e.current,e.current=t}var Mt={},xe=Dt(Mt),_e=Dt(!1),Qt=Mt;function jr(e,t){var r=e.type.contextTypes;if(!r)return Mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function ji(){G(_e),G(xe)}function Cl(e,t,r){if(xe.current!==Mt)throw Error(C(168));X(xe,t),X(_e,r)}function Sc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,Np(e)||"Unknown",i));return te({},r,n)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Qt=xe.current,X(xe,e),X(_e,_e.current),!0}function bl(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=Sc(e,t,Qt),n.__reactInternalMemoizedMergedChildContext=e,G(_e),G(xe),X(xe,e)):G(_e),X(_e,r)}var ut=null,Wi=!1,js=!1;function Cc(e){ut===null?ut=[e]:ut.push(e)}function qf(e){Wi=!0,Cc(e)}function Ft(){if(!js&&ut!==null){js=!0;var e=0,t=K;try{var r=ut;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ut=null,Wi=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),Xu(Jo,Ft),i}finally{K=t,js=!1}}return null}var ur=[],cr=0,Ci=null,bi=0,Me=[],Ie=0,Kt=null,dt=1,pt="";function Bt(e,t){ur[cr++]=bi,ur[cr++]=Ci,Ci=e,bi=t}function bc(e,t,r){Me[Ie++]=dt,Me[Ie++]=pt,Me[Ie++]=Kt,Kt=e;var n=dt;e=pt;var i=32-Ye(n)-1;n&=~(1<<i),r+=1;var o=32-Ye(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,dt=1<<32-Ye(t)+i|r<<i|n,pt=o+e}else dt=1<<o|r<<i|n,pt=e}function aa(e){e.return!==null&&(Bt(e,1),bc(e,1,0))}function la(e){for(;e===Ci;)Ci=ur[--cr],ur[cr]=null,bi=ur[--cr],ur[cr]=null;for(;e===Kt;)Kt=Me[--Ie],Me[Ie]=null,pt=Me[--Ie],Me[Ie]=null,dt=Me[--Ie],Me[Ie]=null}var Ae=null,Te=null,J=!1,Xe=null;function Nc(e,t){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Nl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Te=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Kt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ae=e,Te=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uo(e){if(J){var t=Te;if(t){var r=t;if(!Nl(e,t)){if(lo(e))throw Error(C(418));t=zt(r.nextSibling);var n=Ae;t&&Nl(e,t)?Nc(n,r):(e.flags=e.flags&-4097|2,J=!1,Ae=e)}}else{if(lo(e))throw Error(C(418));e.flags=e.flags&-4097|2,J=!1,Ae=e}}}function _l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function $n(e){if(e!==Ae)return!1;if(!J)return _l(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!io(e.type,e.memoizedProps)),t&&(t=Te)){if(lo(e))throw _c(),Error(C(418));for(;t;)Nc(e,t),t=zt(t.nextSibling)}if(_l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Te=zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Ae?zt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=Te;e;)e=zt(e.nextSibling)}function Sr(){Te=Ae=null,J=!1}function ua(e){Xe===null?Xe=[e]:Xe.push(e)}var Hf=yt.ReactCurrentBatchConfig;function Br(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function Un(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function El(e){var t=e._init;return t(e._payload)}function Ec(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Rt(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,k){return d===null||d.tag!==6?(d=zs(h,f.mode,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,k){var b=h.type;return b===nr?y(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===kt&&El(b)===d.type)?(k=i(d,h.props),k.ref=Br(f,d,h),k.return=f,k):(k=oi(h.type,h.key,h.props,null,f.mode,k),k.ref=Br(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ps(h,f.mode,k),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function y(f,d,h,k,b){return d===null||d.tag!==7?(d=Wt(h,f.mode,k,b),d.return=f,d):(d=i(d,h),d.return=f,d)}function v(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zs(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tn:return h=oi(d.type,d.key,d.props,null,f.mode,h),h.ref=Br(f,null,d),h.return=f,h;case rr:return d=Ps(d,f.mode,h),d.return=f,d;case kt:var k=d._init;return v(f,k(d._payload),h)}if(Hr(d)||Or(d))return d=Wt(d,f.mode,h,null),d.return=f,d;Un(f,d)}return null}function p(f,d,h,k){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:return h.key===b?u(f,d,h,k):null;case rr:return h.key===b?c(f,d,h,k):null;case kt:return b=h._init,p(f,d,b(h._payload),k)}if(Hr(h)||Or(h))return b!==null?null:y(f,d,h,k,null);Un(f,h)}return null}function g(f,d,h,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,l(d,f,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Tn:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,b);case rr:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,b);case kt:var N=k._init;return g(f,d,h,N(k._payload),b)}if(Hr(k)||Or(k))return f=f.get(h)||null,y(d,f,k,b,null);Un(d,k)}return null}function w(f,d,h,k){for(var b=null,N=null,E=d,z=d=0,U=null;E!==null&&z<h.length;z++){E.index>z?(U=E,E=null):U=E.sibling;var D=p(f,E,h[z],k);if(D===null){E===null&&(E=U);break}e&&E&&D.alternate===null&&t(f,E),d=o(D,d,z),N===null?b=D:N.sibling=D,N=D,E=U}if(z===h.length)return r(f,E),J&&Bt(f,z),b;if(E===null){for(;z<h.length;z++)E=v(f,h[z],k),E!==null&&(d=o(E,d,z),N===null?b=E:N.sibling=E,N=E);return J&&Bt(f,z),b}for(E=n(f,E);z<h.length;z++)U=g(E,f,z,h[z],k),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?z:U.key),d=o(U,d,z),N===null?b=U:N.sibling=U,N=U);return e&&E.forEach(function(m){return t(f,m)}),J&&Bt(f,z),b}function j(f,d,h,k){var b=Or(h);if(typeof b!="function")throw Error(C(150));if(h=b.call(h),h==null)throw Error(C(151));for(var N=b=null,E=d,z=d=0,U=null,D=h.next();E!==null&&!D.done;z++,D=h.next()){E.index>z?(U=E,E=null):U=E.sibling;var m=p(f,E,D.value,k);if(m===null){E===null&&(E=U);break}e&&E&&m.alternate===null&&t(f,E),d=o(m,d,z),N===null?b=m:N.sibling=m,N=m,E=U}if(D.done)return r(f,E),J&&Bt(f,z),b;if(E===null){for(;!D.done;z++,D=h.next())D=v(f,D.value,k),D!==null&&(d=o(D,d,z),N===null?b=D:N.sibling=D,N=D);return J&&Bt(f,z),b}for(E=n(f,E);!D.done;z++,D=h.next())D=g(E,f,z,D.value,k),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?z:D.key),d=o(D,d,z),N===null?b=D:N.sibling=D,N=D);return e&&E.forEach(function(M){return t(f,M)}),J&&Bt(f,z),b}function L(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:e:{for(var b=h.key,N=d;N!==null;){if(N.key===b){if(b=h.type,b===nr){if(N.tag===7){r(f,N.sibling),d=i(N,h.props.children),d.return=f,f=d;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===kt&&El(b)===N.type){r(f,N.sibling),d=i(N,h.props),d.ref=Br(f,N,h),d.return=f,f=d;break e}r(f,N);break}else t(f,N);N=N.sibling}h.type===nr?(d=Wt(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=oi(h.type,h.key,h.props,null,f.mode,k),k.ref=Br(f,d,h),k.return=f,f=k)}return a(f);case rr:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Ps(h,f.mode,k),d.return=f,f=d}return a(f);case kt:return N=h._init,L(f,d,N(h._payload),k)}if(Hr(h))return w(f,d,h,k);if(Or(h))return j(f,d,h,k);Un(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(f,d.sibling),d=i(d,h),d.return=f,f=d):(r(f,d),d=zs(h,f.mode,k),d.return=f,f=d),a(f)):r(f,d)}return L}var Cr=Ec(!0),zc=Ec(!1),Ni=Dt(null),_i=null,dr=null,ca=null;function da(){ca=dr=_i=null}function pa(e){var t=Ni.current;G(Ni),e._currentValue=t}function co(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function yr(e,t){_i=e,ca=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(_i===null)throw Error(C(308));dr=e,_i.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Vt=null;function fa(e){Vt===null?Vt=[e]:Vt.push(e)}function Pc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,fa(t)):(r.next=i.next,i.next=r),t.interleaved=r,gt(e,n)}function gt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var wt=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Q&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,gt(e,r)}return i=n.interleaved,i===null?(t.next=t,fa(n)):(t.next=i.next,i.next=t),n.interleaved=t,gt(e,r)}function ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zo(e,r)}}function zl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ei(e,t,r,n){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==a&&(l===null?y.firstBaseUpdate=c:l.next=c,y.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;a=0,y=c=u=null,l=o;do{var p=l.lane,g=l.eventTime;if((n&p)===p){y!==null&&(y=y.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,j=l;switch(p=t,g=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){v=w.call(g,v,p);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,p=typeof w=="function"?w.call(g,v,p):w,p==null)break e;v=te({},v,p);break e;case 2:wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(c=y=g,u=v):y=y.next=g,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(y===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yt|=a,e.lanes=a,e.memoizedState=v}}function Pl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var _n={},nt=Dt(_n),gn=Dt(_n),vn=Dt(_n);function qt(e){if(e===_n)throw Error(C(174));return e}function ma(e,t){switch(X(vn,t),X(gn,e),X(nt,_n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}G(nt),X(nt,t)}function br(){G(nt),G(gn),G(vn)}function Ac(e){qt(vn.current);var t=qt(nt.current),r=qs(t,e.type);t!==r&&(X(gn,e),X(nt,r))}function ga(e){gn.current===e&&(G(nt),G(gn))}var Z=Dt(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function va(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var ti=yt.ReactCurrentDispatcher,Cs=yt.ReactCurrentBatchConfig,Xt=0,ee=null,le=null,ce=null,Pi=!1,en=!1,yn=0,Wf=0;function ge(){throw Error(C(321))}function ya(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Je(e[r],t[r]))return!1;return!0}function xa(e,t,r,n,i,o){if(Xt=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Yf:Gf,e=r(n,i),en){o=0;do{if(en=!1,yn=0,25<=o)throw Error(C(301));o+=1,ce=le=null,t.updateQueue=null,ti.current=Jf,e=r(n,i)}while(en)}if(ti.current=Ti,t=le!==null&&le.next!==null,Xt=0,ce=le=ee=null,Pi=!1,t)throw Error(C(300));return e}function ka(){var e=yn!==0;return yn=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ee.memoizedState=ce=e:ce=ce.next=e,ce}function Ue(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?ee.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(C(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?ee.memoizedState=ce=e:ce=ce.next=e}return ce}function xn(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=Ue(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=le,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=a=null,u=null,c=o;do{var y=c.lane;if((Xt&y)===y)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var v={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=v,a=n):u=u.next=v,ee.lanes|=y,Yt|=y}c=c.next}while(c!==null&&c!==o);u===null?a=n:u.next=l,Je(n,t.memoizedState)||(Ne=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,Yt|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ns(e){var t=Ue(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Je(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Rc(){}function Lc(e,t){var r=ee,n=Ue(),i=t(),o=!Je(n.memoizedState,i);if(o&&(n.memoizedState=i,Ne=!0),n=n.queue,wa(Ic.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(r.flags|=2048,kn(9,Mc.bind(null,r,n,i,t),void 0,null),de===null)throw Error(C(349));Xt&30||Oc(r,t,i)}return i}function Oc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Mc(e,t,r,n){t.value=r,t.getSnapshot=n,Dc(t)&&Fc(e)}function Ic(e,t,r){return r(function(){Dc(t)&&Fc(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Je(e,r)}catch{return!0}}function Fc(e){var t=gt(e,1);t!==null&&Ge(t,e,1,-1)}function Tl(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,ee,e),[t.memoizedState,e]}function kn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Bc(){return Ue().memoizedState}function ri(e,t,r,n){var i=et();ee.flags|=e,i.memoizedState=kn(1|t,r,void 0,n===void 0?null:n)}function Qi(e,t,r,n){var i=Ue();n=n===void 0?null:n;var o=void 0;if(le!==null){var a=le.memoizedState;if(o=a.destroy,n!==null&&ya(n,a.deps)){i.memoizedState=kn(t,r,o,n);return}}ee.flags|=e,i.memoizedState=kn(1|t,r,o,n)}function Al(e,t){return ri(8390656,8,e,t)}function wa(e,t){return Qi(2048,8,e,t)}function $c(e,t){return Qi(4,2,e,t)}function Uc(e,t){return Qi(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,r){return r=r!=null?r.concat([e]):null,Qi(4,4,Vc.bind(null,t,e),r)}function ja(){}function Hc(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ya(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Wc(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ya(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Qc(e,t,r){return Xt&21?(Je(r,t)||(r=Ju(),ee.lanes|=r,Yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=r)}function Qf(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=Cs.transition;Cs.transition={};try{e(!1),t()}finally{K=r,Cs.transition=n}}function Kc(){return Ue().memoizedState}function Kf(e,t,r){var n=At(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xc(e))Yc(t,r);else if(r=Pc(e,t,r,n),r!==null){var i=je();Ge(r,e,n,i),Gc(r,t,n)}}function Xf(e,t,r){var n=At(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))Yc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,Je(l,a)){var u=t.interleaved;u===null?(i.next=i,fa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=Pc(e,t,i,n),r!==null&&(i=je(),Ge(r,e,n,i),Gc(r,t,n))}}function Xc(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Yc(e,t){en=Pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Gc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zo(e,r)}}var Ti={readContext:$e,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Yf={readContext:$e,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Al,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,Vc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Kf.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Tl,useDebugValue:ja,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Tl(!1),t=e[0];return e=Qf.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ee,i=et();if(J){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),de===null)throw Error(C(349));Xt&30||Oc(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Al(Ic.bind(null,n,o,e),[e]),n.flags|=2048,kn(9,Mc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=et(),t=de.identifierPrefix;if(J){var r=pt,n=dt;r=(n&~(1<<32-Ye(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Wf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:$e,useCallback:Hc,useContext:$e,useEffect:wa,useImperativeHandle:qc,useInsertionEffect:$c,useLayoutEffect:Uc,useMemo:Wc,useReducer:bs,useRef:Bc,useState:function(){return bs(xn)},useDebugValue:ja,useDeferredValue:function(e){var t=Ue();return Qc(t,le.memoizedState,e)},useTransition:function(){var e=bs(xn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Lc,useId:Kc,unstable_isNewReconciler:!1},Jf={readContext:$e,useCallback:Hc,useContext:$e,useEffect:wa,useImperativeHandle:qc,useInsertionEffect:$c,useLayoutEffect:Uc,useMemo:Wc,useReducer:Ns,useRef:Bc,useState:function(){return Ns(xn)},useDebugValue:ja,useDeferredValue:function(e){var t=Ue();return le===null?t.memoizedState=e:Qc(t,le.memoizedState,e)},useTransition:function(){var e=Ns(xn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Lc,useId:Kc,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function po(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ki={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=je(),i=At(e),o=ft(n,i);o.payload=t,r!=null&&(o.callback=r),t=Pt(e,o,i),t!==null&&(Ge(t,e,i,n),ei(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=je(),i=At(e),o=ft(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Pt(e,o,i),t!==null&&(Ge(t,e,i,n),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=je(),n=At(e),i=ft(r,n);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,n),t!==null&&(Ge(t,e,n,r),ei(t,e,n))}};function Rl(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!pn(r,n)||!pn(i,o):!0}function Jc(e,t,r){var n=!1,i=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=Ee(t)?Qt:xe.current,n=t.contextTypes,o=(n=n!=null)?jr(e,i):Mt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ll(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function fo(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ha(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=Ee(t)?Qt:xe.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(po(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),Ei(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var r="",n=t;do r+=bp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _s(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,r){r=ft(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ri||(Ri=!0,Co=n),ho(e,t)},r}function ed(e,t,r){r=ft(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ho(e,t),typeof n!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Ol(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Zf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=fh.bind(null,e,t,r),t.then(e,e))}function Ml(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Il(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ft(-1,1),t.tag=2,Pt(r,t,1))),r.lanes|=1),e)}var eh=yt.ReactCurrentOwner,Ne=!1;function we(e,t,r,n){t.child=e===null?zc(t,null,r,n):Cr(t,e.child,r,n)}function Dl(e,t,r,n,i){r=r.render;var o=t.ref;return yr(t,i),n=xa(e,t,r,n,o,i),r=ka(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(J&&r&&aa(t),t.flags|=1,we(e,t,n,i),t.child)}function Fl(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Pa(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,td(e,t,o,n,i)):(e=oi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:pn,r(a,n)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Rt(o,n),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(pn(o,n)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,vt(e,t,i)}return mo(e,t,r,n,i)}function rd(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(fr,Pe),Pe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(fr,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,X(fr,Pe),Pe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,X(fr,Pe),Pe|=n;return we(e,t,i,r),t.child}function nd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function mo(e,t,r,n,i){var o=Ee(r)?Qt:xe.current;return o=jr(t,o),yr(t,i),r=xa(e,t,r,n,o,i),n=ka(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(J&&n&&aa(t),t.flags|=1,we(e,t,r,i),t.child)}function Bl(e,t,r,n,i){if(Ee(r)){var o=!0;Si(t)}else o=!1;if(yr(t,i),t.stateNode===null)ni(e,t),Jc(t,r,n),fo(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=Ee(r)?Qt:xe.current,c=jr(t,c));var y=r.getDerivedStateFromProps,v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==c)&&Ll(t,a,n,c),wt=!1;var p=t.memoizedState;a.state=p,Ei(t,n,a,i),u=t.memoizedState,l!==n||p!==u||_e.current||wt?(typeof y=="function"&&(po(t,r,y,n),u=t.memoizedState),(l=wt||Rl(t,r,l,n,p,u,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Tc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:We(t.type,l),a.props=c,v=t.pendingProps,p=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=$e(u):(u=Ee(r)?Qt:xe.current,u=jr(t,u));var g=r.getDerivedStateFromProps;(y=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||p!==u)&&Ll(t,a,n,u),wt=!1,p=t.memoizedState,a.state=p,Ei(t,n,a,i);var w=t.memoizedState;l!==v||p!==w||_e.current||wt?(typeof g=="function"&&(po(t,r,g,n),w=t.memoizedState),(c=wt||Rl(t,r,c,n,p,w,u)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),a.props=n,a.state=w,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return go(e,t,r,n,o,i)}function go(e,t,r,n,i,o){nd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&bl(t,r,!1),vt(e,t,o);n=t.stateNode,eh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,l,o)):we(e,t,l,o),t.memoizedState=n.state,i&&bl(t,r,!0),t.child}function id(e){var t=e.stateNode;t.pendingContext?Cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cl(e,t.context,!1),ma(e,t.containerInfo)}function $l(e,t,r,n,i){return Sr(),ua(i),t.flags|=256,we(e,t,r,n),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0};function yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,r){var n=t.pendingProps,i=Z.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(Z,i&1),e===null)return uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gi(a,n,0,null),e=Wt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yo(r),t.memoizedState=vo,e):Sa(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return th(e,t,a,n,l,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Rt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rt(l,o):(o=Wt(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?yo(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=vo,n}return o=e.child,e=o.sibling,n=Rt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Sa(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vn(e,t,r,n){return n!==null&&ua(n),Cr(t,e.child,null,r),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function th(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=_s(Error(C(422))),Vn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Gi({mode:"visible",children:n.children},i,0,null),o=Wt(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=yo(a),t.memoizedState=vo,o);if(!(t.mode&1))return Vn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(C(419)),n=_s(o,n,void 0),Vn(e,t,a,n)}if(l=(a&e.childLanes)!==0,Ne||l){if(n=de,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Ge(n,e,i,-1))}return za(),n=_s(Error(C(421))),Vn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Te=zt(i.nextSibling),Ae=t,J=!0,Xe=null,e!==null&&(Me[Ie++]=dt,Me[Ie++]=pt,Me[Ie++]=Kt,dt=e.id,pt=e.overflow,Kt=t),t=Sa(t,n.children),t.flags|=4096,t)}function Ul(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),co(e.return,t,r)}function Es(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function od(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(we(e,t,n.children,r),n=Z.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ul(e,r,t);else if(e.tag===19)Ul(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(Z,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&zi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Es(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Es(t,!0,r,null,o);break;case"together":Es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=Rt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function rh(e,t,r){switch(t.tag){case 3:id(t),Sr();break;case 5:Ac(t);break;case 1:Ee(t.type)&&Si(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;X(Ni,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(Z,Z.current&1),t.flags|=128,null):r&t.child.childLanes?sd(e,t,r):(X(Z,Z.current&1),e=vt(e,t,r),e!==null?e.sibling:null);X(Z,Z.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return od(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(Z,Z.current),n)break;return null;case 22:case 23:return t.lanes=0,rd(e,t,r)}return vt(e,t,r)}var ad,xo,ld,ud;ad=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xo=function(){};ld=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,qt(nt.current);var o=null;switch(r){case"input":i=Bs(e,i),n=Bs(e,n),o=[];break;case"select":i=te({},i,{value:void 0}),n=te({},n,{value:void 0}),o=[];break;case"textarea":i=Vs(e,i),n=Vs(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=wi)}Hs(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Y("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ud=function(e,t,r,n){r!==n&&(t.flags|=4)};function $r(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function nh(e,t,r){var n=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ee(t.type)&&ji(),ve(t),null;case 3:return n=t.stateNode,br(),G(_e),G(xe),va(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(_o(Xe),Xe=null))),xo(e,t),ve(t),null;case 5:ga(t);var i=qt(vn.current);if(r=t.type,e!==null&&t.stateNode!=null)ld(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=qt(nt.current),$n(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[tt]=t,n[mn]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(i=0;i<Qr.length;i++)Y(Qr[i],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":Ga(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":Za(n,o),Y("invalid",n)}Hs(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Bn(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Bn(n.textContent,l,e),i=["children",""+l]):sn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",n)}switch(r){case"input":An(n),Ja(n,o,!0);break;case"textarea":An(n),el(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=wi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[tt]=t,e[mn]=n,ad(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ws(r,n),r){case"dialog":Y("cancel",e),Y("close",e),i=n;break;case"iframe":case"object":case"embed":Y("load",e),i=n;break;case"video":case"audio":for(i=0;i<Qr.length;i++)Y(Qr[i],e);i=n;break;case"source":Y("error",e),i=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=n;break;case"details":Y("toggle",e),i=n;break;case"input":Ga(e,n),i=Bs(e,n),Y("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=te({},n,{value:void 0}),Y("invalid",e);break;case"textarea":Za(e,n),i=Vs(e,n),Y("invalid",e);break;default:i=n}Hs(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Bu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Du(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&on(e,u):typeof u=="number"&&on(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Y("scroll",e):u!=null&&Qo(e,o,u,a))}switch(r){case"input":An(e),Ja(e,n,!1);break;case"textarea":An(e),el(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ot(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?hr(e,!!n.multiple,o,!1):n.defaultValue!=null&&hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)ud(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=qt(vn.current),qt(nt.current),$n(t)){if(n=t.stateNode,r=t.memoizedProps,n[tt]=t,(o=n.nodeValue!==r)&&(e=Ae,e!==null))switch(e.tag){case 3:Bn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[tt]=t,t.stateNode=n}return ve(t),null;case 13:if(G(Z),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Te!==null&&t.mode&1&&!(t.flags&128))_c(),Sr(),t.flags|=98560,o=!1;else if(o=$n(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[tt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Xe!==null&&(_o(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ue===0&&(ue=3):za())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return br(),xo(e,t),e===null&&fn(t.stateNode.containerInfo),ve(t),null;case 10:return pa(t.type._context),ve(t),null;case 17:return Ee(t.type)&&ji(),ve(t),null;case 19:if(G(Z),o=t.memoizedState,o===null)return ve(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)$r(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=zi(e),a!==null){for(t.flags|=128,$r(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>_r&&(t.flags|=128,n=!0,$r(o,!1),t.lanes=4194304)}else{if(!n)if(e=zi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!J)return ve(t),null}else 2*se()-o.renderingStartTime>_r&&r!==1073741824&&(t.flags|=128,n=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,r=Z.current,X(Z,n?r&1|2:r&1),t):(ve(t),null);case 22:case 23:return Ea(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Pe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ih(e,t){switch(la(t),t.tag){case 1:return Ee(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),G(_e),G(xe),va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return br(),null;case 10:return pa(t.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var qn=!1,ye=!1,sh=typeof WeakSet=="function"?WeakSet:Set,A=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){re(e,t,n)}else r.current=null}function ko(e,t,r){try{r()}catch(n){re(e,t,n)}}var Vl=!1;function oh(e,t){if(ro=yi,e=hc(),oa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,y=0,v=e,p=null;t:for(;;){for(var g;v!==r||i!==0&&v.nodeType!==3||(l=a+i),v!==o||n!==0&&v.nodeType!==3||(u=a+n),v.nodeType===3&&(a+=v.nodeValue.length),(g=v.firstChild)!==null;)p=v,v=g;for(;;){if(v===e)break t;if(p===r&&++c===i&&(l=a),p===o&&++y===n&&(u=a),(g=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=g}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(no={focusedElem:e,selectionRange:r},yi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,L=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:We(t.type,j),L);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=Vl,Vl=!1,w}function tn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ko(t,r,o)}i=i.next}while(i!==n)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function wo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[mn],delete t[oo],delete t[Uf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wi));else if(n!==4&&(e=e.child,e!==null))for(jo(e,t,r),e=e.sibling;e!==null;)jo(e,t,r),e=e.sibling}function So(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(So(e,t,r),e=e.sibling;e!==null;)So(e,t,r),e=e.sibling}var pe=null,Qe=!1;function xt(e,t,r){for(r=r.child;r!==null;)pd(e,t,r),r=r.sibling}function pd(e,t,r){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 5:ye||pr(r,t);case 6:var n=pe,i=Qe;pe=null,xt(e,t,r),pe=n,Qe=i,pe!==null&&(Qe?(e=pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):pe.removeChild(r.stateNode));break;case 18:pe!==null&&(Qe?(e=pe,r=r.stateNode,e.nodeType===8?ws(e.parentNode,r):e.nodeType===1&&ws(e,r),cn(e)):ws(pe,r.stateNode));break;case 4:n=pe,i=Qe,pe=r.stateNode.containerInfo,Qe=!0,xt(e,t,r),pe=n,Qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ko(r,t,a),i=i.next}while(i!==n)}xt(e,t,r);break;case 1:if(!ye&&(pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){re(r,t,l)}xt(e,t,r);break;case 21:xt(e,t,r);break;case 22:r.mode&1?(ye=(n=ye)||r.memoizedState!==null,xt(e,t,r),ye=n):xt(e,t,r);break;default:xt(e,t,r)}}function Hl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sh),t.forEach(function(n){var i=mh.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function He(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,Qe=!1;break e;case 3:pe=l.stateNode.containerInfo,Qe=!0;break e;case 4:pe=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(pe===null)throw Error(C(160));pd(o,a,i),pe=null,Qe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){re(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),n&4){try{tn(3,e,e.return),Xi(3,e)}catch(j){re(e,e.return,j)}try{tn(5,e,e.return)}catch(j){re(e,e.return,j)}}break;case 1:He(t,e),Ze(e),n&512&&r!==null&&pr(r,r.return);break;case 5:if(He(t,e),Ze(e),n&512&&r!==null&&pr(r,r.return),e.flags&32){var i=e.stateNode;try{on(i,"")}catch(j){re(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ou(i,o),Ws(l,a);var c=Ws(l,o);for(a=0;a<u.length;a+=2){var y=u[a],v=u[a+1];y==="style"?Bu(i,v):y==="dangerouslySetInnerHTML"?Du(i,v):y==="children"?on(i,v):Qo(i,y,v,c)}switch(l){case"input":$s(i,o);break;case"textarea":Mu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?hr(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[mn]=o}catch(j){re(e,e.return,j)}}break;case 6:if(He(t,e),Ze(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){re(e,e.return,j)}}break;case 3:if(He(t,e),Ze(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(j){re(e,e.return,j)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Na=se())),n&4&&Hl(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(ye=(c=ye)||y,He(t,e),ye=c):He(t,e),Ze(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(A=e,y=e.child;y!==null;){for(v=A=y;A!==null;){switch(p=A,g=p.child,p.tag){case 0:case 11:case 14:case 15:tn(4,p,p.return);break;case 1:pr(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){re(n,r,j)}}break;case 5:pr(p,p.return);break;case 22:if(p.memoizedState!==null){Ql(v);continue}}g!==null?(g.return=p,A=g):Ql(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fu("display",a))}catch(j){re(e,e.return,j)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(j){re(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:He(t,e),Ze(e),n&4&&Hl(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(dd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(on(i,""),n.flags&=-33);var o=ql(e);So(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=ql(e);jo(e,l,a);break;default:throw Error(C(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ah(e,t,r){A=e,hd(e)}function hd(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||qn;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ye;l=qn;var c=ye;if(qn=a,(ye=u)&&!c)for(A=i;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?Kl(i):u!==null?(u.return=a,A=u):Kl(i);for(;o!==null;)A=o,hd(o),o=o.sibling;A=i,qn=l,ye=c}Wl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Wl(e)}}function Wl(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Xi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ye)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:We(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pl(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Pl(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&cn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&wo(t)}catch(p){re(t,t.return,p)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Ql(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Kl(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xi(4,t)}catch(u){re(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){re(t,i,u)}}var o=t.return;try{wo(t)}catch(u){re(t,o,u)}break;case 5:var a=t.return;try{wo(t)}catch(u){re(t,a,u)}}}catch(u){re(t,t.return,u)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var lh=Math.ceil,Ai=yt.ReactCurrentDispatcher,Ca=yt.ReactCurrentOwner,Be=yt.ReactCurrentBatchConfig,Q=0,de=null,oe=null,fe=0,Pe=0,fr=Dt(0),ue=0,wn=null,Yt=0,Yi=0,ba=0,rn=null,be=null,Na=0,_r=1/0,lt=null,Ri=!1,Co=null,Tt=null,Hn=!1,bt=null,Li=0,nn=0,bo=null,ii=-1,si=0;function je(){return Q&6?se():ii!==-1?ii:ii=se()}function At(e){return e.mode&1?Q&2&&fe!==0?fe&-fe:Hf.transition!==null?(si===0&&(si=Ju()),si):(e=K,e!==0||(e=window.event,e=e===void 0?16:sc(e.type)),e):1}function Ge(e,t,r,n){if(50<nn)throw nn=0,bo=null,Error(C(185));Cn(e,r,n),(!(Q&2)||e!==de)&&(e===de&&(!(Q&2)&&(Yi|=r),ue===4&&St(e,fe)),ze(e,n),r===1&&Q===0&&!(t.mode&1)&&(_r=se()+500,Wi&&Ft()))}function ze(e,t){var r=e.callbackNode;qp(e,t);var n=vi(e,e===de?fe:0);if(n===0)r!==null&&nl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&nl(r),t===1)e.tag===0?qf(Xl.bind(null,e)):Cc(Xl.bind(null,e)),Bf(function(){!(Q&6)&&Ft()}),r=null;else{switch(Zu(n)){case 1:r=Jo;break;case 4:r=Yu;break;case 16:r=gi;break;case 536870912:r=Gu;break;default:r=gi}r=jd(r,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function md(e,t){if(ii=-1,si=0,Q&6)throw Error(C(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var n=vi(e,e===de?fe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Oi(e,n);else{t=n;var i=Q;Q|=2;var o=vd();(de!==e||fe!==t)&&(lt=null,_r=se()+500,Ht(e,t));do try{dh();break}catch(l){gd(e,l)}while(!0);da(),Ai.current=o,Q=i,oe!==null?t=0:(de=null,fe=0,t=ue)}if(t!==0){if(t===2&&(i=Gs(e),i!==0&&(n=i,t=No(e,i))),t===1)throw r=wn,Ht(e,0),St(e,n),ze(e,se()),r;if(t===6)St(e,n);else{if(i=e.current.alternate,!(n&30)&&!uh(i)&&(t=Oi(e,n),t===2&&(o=Gs(e),o!==0&&(n=o,t=No(e,o))),t===1))throw r=wn,Ht(e,0),St(e,n),ze(e,se()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:$t(e,be,lt);break;case 3:if(St(e,n),(n&130023424)===n&&(t=Na+500-se(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=so($t.bind(null,e,be,lt),t);break}$t(e,be,lt);break;case 4:if(St(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-Ye(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=se()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*lh(n/1960))-n,10<n){e.timeoutHandle=so($t.bind(null,e,be,lt),n);break}$t(e,be,lt);break;case 5:$t(e,be,lt);break;default:throw Error(C(329))}}}return ze(e,se()),e.callbackNode===r?md.bind(null,e):null}function No(e,t){var r=rn;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=be,be=r,t!==null&&_o(t)),e}function _o(e){be===null?be=e:be.push.apply(be,e)}function uh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~ba,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ye(t),n=1<<r;e[r]=-1,t&=~n}}function Xl(e){if(Q&6)throw Error(C(327));xr();var t=vi(e,0);if(!(t&1))return ze(e,se()),null;var r=Oi(e,t);if(e.tag!==0&&r===2){var n=Gs(e);n!==0&&(t=n,r=No(e,n))}if(r===1)throw r=wn,Ht(e,0),St(e,t),ze(e,se()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,be,lt),ze(e,se()),null}function _a(e,t){var r=Q;Q|=1;try{return e(t)}finally{Q=r,Q===0&&(_r=se()+500,Wi&&Ft())}}function Gt(e){bt!==null&&bt.tag===0&&!(Q&6)&&xr();var t=Q;Q|=1;var r=Be.transition,n=K;try{if(Be.transition=null,K=1,e)return e()}finally{K=n,Be.transition=r,Q=t,!(Q&6)&&Ft()}}function Ea(){Pe=fr.current,G(fr)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ff(r)),oe!==null)for(r=oe.return;r!==null;){var n=r;switch(la(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ji();break;case 3:br(),G(_e),G(xe),va();break;case 5:ga(n);break;case 4:br();break;case 13:G(Z);break;case 19:G(Z);break;case 10:pa(n.type._context);break;case 22:case 23:Ea()}r=r.return}if(de=e,oe=e=Rt(e.current,null),fe=Pe=t,ue=0,wn=null,ba=Yi=Yt=0,be=rn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(r=Vt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Vt=null}return e}function gd(e,t){do{var r=oe;try{if(da(),ti.current=Ti,Pi){for(var n=ee.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pi=!1}if(Xt=0,ce=le=ee=null,en=!1,yn=0,Ca.current=null,r===null||r.return===null){ue=1,wn=t,oe=null;break}e:{var o=e,a=r.return,l=r,u=t;if(t=fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,y=l,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var g=Ml(a);if(g!==null){g.flags&=-257,Il(g,a,l,o,t),g.mode&1&&Ol(o,c,t),t=g,u=c;var w=t.updateQueue;if(w===null){var j=new Set;j.add(u),t.updateQueue=j}else w.add(u);break e}else{if(!(t&1)){Ol(o,c,t),za();break e}u=Error(C(426))}}else if(J&&l.mode&1){var L=Ml(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Il(L,a,l,o,t),ua(Nr(u,l));break e}}o=u=Nr(u,l),ue!==4&&(ue=2),rn===null?rn=[o]:rn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Zc(o,u,t);zl(o,f);break e;case 1:l=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Tt===null||!Tt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=ed(o,l,t);zl(o,k);break e}}o=o.return}while(o!==null)}xd(r)}catch(b){t=b,oe===r&&r!==null&&(oe=r=r.return);continue}break}while(!0)}function vd(){var e=Ai.current;return Ai.current=Ti,e===null?Ti:e}function za(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||!(Yt&268435455)&&!(Yi&268435455)||St(de,fe)}function Oi(e,t){var r=Q;Q|=2;var n=vd();(de!==e||fe!==t)&&(lt=null,Ht(e,t));do try{ch();break}catch(i){gd(e,i)}while(!0);if(da(),Q=r,Ai.current=n,oe!==null)throw Error(C(261));return de=null,fe=0,ue}function ch(){for(;oe!==null;)yd(oe)}function dh(){for(;oe!==null&&!Op();)yd(oe)}function yd(e){var t=wd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?xd(e):oe=t,Ca.current=null}function xd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ih(r,t),r!==null){r.flags&=32767,oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(r=nh(r,t,Pe),r!==null){oe=r;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function $t(e,t,r){var n=K,i=Be.transition;try{Be.transition=null,K=1,ph(e,t,r,n)}finally{Be.transition=i,K=n}return null}function ph(e,t,r,n){do xr();while(bt!==null);if(Q&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Hp(e,o),e===de&&(oe=de=null,fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hn||(Hn=!0,jd(gi,function(){return xr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var a=K;K=1;var l=Q;Q|=4,Ca.current=null,oh(e,r),fd(r,e),Af(no),yi=!!ro,no=ro=null,e.current=r,ah(r),Mp(),Q=l,K=a,Be.transition=o}else e.current=r;if(Hn&&(Hn=!1,bt=e,Li=i),o=e.pendingLanes,o===0&&(Tt=null),Fp(r.stateNode),ze(e,se()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ri)throw Ri=!1,e=Co,Co=null,e;return Li&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===bo?nn++:(nn=0,bo=e):nn=0,Ft(),null}function xr(){if(bt!==null){var e=Zu(Li),t=Be.transition,r=K;try{if(Be.transition=null,K=16>e?16:e,bt===null)var n=!1;else{if(e=bt,bt=null,Li=0,Q&6)throw Error(C(331));var i=Q;for(Q|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(A=c;A!==null;){var y=A;switch(y.tag){case 0:case 11:case 15:tn(8,y,o)}var v=y.child;if(v!==null)v.return=y,A=v;else for(;A!==null;){y=A;var p=y.sibling,g=y.return;if(cd(y),y===c){A=null;break}if(p!==null){p.return=g,A=p;break}A=g}}}var w=o.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var L=j.sibling;j.sibling=null,j=L}while(j!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:tn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){a=A;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,A=h;else e:for(a=d;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xi(9,l)}}catch(b){re(l,l.return,b)}if(l===a){A=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,A=k;break e}A=l.return}}if(Q=i,Ft(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot($i,e)}catch{}n=!0}return n}finally{K=r,Be.transition=t}}return!1}function Yl(e,t,r){t=Nr(r,t),t=Zc(e,t,1),e=Pt(e,t,1),t=je(),e!==null&&(Cn(e,1,t),ze(e,t))}function re(e,t,r){if(e.tag===3)Yl(e,e,r);else for(;t!==null;){if(t.tag===3){Yl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Tt===null||!Tt.has(n))){e=Nr(r,e),e=ed(t,e,1),t=Pt(t,e,1),e=je(),t!==null&&(Cn(t,1,e),ze(t,e));break}}t=t.return}}function fh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&r,de===e&&(fe&r)===r&&(ue===4||ue===3&&(fe&130023424)===fe&&500>se()-Na?Ht(e,0):ba|=r),ze(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=On,On<<=1,!(On&130023424)&&(On=4194304)):t=1);var r=je();e=gt(e,t),e!==null&&(Cn(e,t,r),ze(e,r))}function hh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kd(e,r)}function mh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),kd(e,r)}var wd;wd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Ne=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ne=!1,rh(e,t,r);Ne=!!(e.flags&131072)}else Ne=!1,J&&t.flags&1048576&&bc(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ni(e,t),e=t.pendingProps;var i=jr(t,xe.current);yr(t,r),i=xa(null,t,n,e,i,r);var o=ka();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(o=!0,Si(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ha(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,fo(t,n,e,r),t=go(null,t,n,!0,o,r)):(t.tag=0,J&&o&&aa(t),we(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=vh(n),e=We(n,e),i){case 0:t=mo(null,t,n,e,r);break e;case 1:t=Bl(null,t,n,e,r);break e;case 11:t=Dl(null,t,n,e,r);break e;case 14:t=Fl(null,t,n,We(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),mo(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),Bl(e,t,n,i,r);case 3:e:{if(id(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Tc(e,t),Ei(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nr(Error(C(423)),t),t=$l(e,t,n,r,i);break e}else if(n!==i){i=Nr(Error(C(424)),t),t=$l(e,t,n,r,i);break e}else for(Te=zt(t.stateNode.containerInfo.firstChild),Ae=t,J=!0,Xe=null,r=zc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),n===i){t=vt(e,t,r);break e}we(e,t,n,r)}t=t.child}return t;case 5:return Ac(t),e===null&&uo(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,io(n,i)?a=null:o!==null&&io(n,o)&&(t.flags|=32),nd(e,t),we(e,t,a,r),t.child;case 6:return e===null&&uo(t),null;case 13:return sd(e,t,r);case 4:return ma(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cr(t,null,n,r):we(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),Dl(e,t,n,i,r);case 7:return we(e,t,t.pendingProps,r),t.child;case 8:return we(e,t,t.pendingProps.children,r),t.child;case 12:return we(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(Ni,n._currentValue),n._currentValue=a,o!==null)if(Je(o.value,a)){if(o.children===i.children&&!_e.current){t=vt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=ft(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?u.next=u:(u.next=y.next,y.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),co(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),co(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}we(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,yr(t,r),i=$e(i),n=n(i),t.flags|=1,we(e,t,n,r),t.child;case 14:return n=t.type,i=We(n,t.pendingProps),i=We(n.type,i),Fl(e,t,n,i,r);case 15:return td(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),ni(e,t),t.tag=1,Ee(n)?(e=!0,Si(t)):e=!1,yr(t,r),Jc(t,n,i),fo(t,n,i,r),go(null,t,n,!0,e,r);case 19:return od(e,t,r);case 22:return rd(e,t,r)}throw Error(C(156,t.tag))};function jd(e,t){return Xu(e,t)}function gh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,r,n){return new gh(e,t,r,n)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vh(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Yo)return 14}return 2}function Rt(e,t){var r=e.alternate;return r===null?(r=Fe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function oi(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Pa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nr:return Wt(r.children,i,o,t);case Ko:a=8,i|=8;break;case Ms:return e=Fe(12,r,t,i|2),e.elementType=Ms,e.lanes=o,e;case Is:return e=Fe(13,r,t,i),e.elementType=Is,e.lanes=o,e;case Ds:return e=Fe(19,r,t,i),e.elementType=Ds,e.lanes=o,e;case Au:return Gi(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pu:a=10;break e;case Tu:a=9;break e;case Xo:a=11;break e;case Yo:a=14;break e;case kt:a=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Fe(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Wt(e,t,r,n){return e=Fe(7,e,n,t),e.lanes=r,e}function Gi(e,t,r,n){return e=Fe(22,e,n,t),e.elementType=Au,e.lanes=r,e.stateNode={isHidden:!1},e}function zs(e,t,r){return e=Fe(6,e,null,t),e.lanes=r,e}function Ps(e,t,r){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ta(e,t,r,n,i,o,a,l,u){return e=new yh(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(o),e}function xh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Sd(e){if(!e)return Mt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ee(r))return Sc(e,r,t)}return t}function Cd(e,t,r,n,i,o,a,l,u){return e=Ta(r,n,!0,e,i,o,a,l,u),e.context=Sd(null),r=e.current,n=je(),i=At(r),o=ft(n,i),o.callback=t??null,Pt(r,o,i),e.current.lanes=i,Cn(e,i,n),ze(e,n),e}function Ji(e,t,r,n){var i=t.current,o=je(),a=At(i);return r=Sd(r),t.context===null?t.context=r:t.pendingContext=r,t=ft(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Pt(i,t,a),e!==null&&(Ge(e,i,a,o),ei(e,i,a)),a}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Aa(e,t){Gl(e,t),(e=e.alternate)&&Gl(e,t)}function kh(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ra(e){this._internalRoot=e}Zi.prototype.render=Ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ji(e,t,null,null)};Zi.prototype.unmount=Ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Ji(null,e,null,null)}),t[mt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<jt.length&&t!==0&&t<jt[r].priority;r++);jt.splice(r,0,e),r===0&&ic(e)}};function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jl(){}function wh(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=Mi(a);o.call(c)}}var a=Cd(t,n,e,0,null,!1,!1,"",Jl);return e._reactRootContainer=a,e[mt]=a.current,fn(e.nodeType===8?e.parentNode:e),Gt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Mi(u);l.call(c)}}var u=Ta(e,0,!1,null,null,!1,!1,"",Jl);return e._reactRootContainer=u,e[mt]=u.current,fn(e.nodeType===8?e.parentNode:e),Gt(function(){Ji(t,u,r,n)}),u}function ts(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Mi(a);l.call(u)}}Ji(t,a,e,i)}else a=wh(r,t,e,i,n);return Mi(a)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wr(t.pendingLanes);r!==0&&(Zo(t,r|1),ze(t,se()),!(Q&6)&&(_r=se()+500,Ft()))}break;case 13:Gt(function(){var n=gt(e,1);if(n!==null){var i=je();Ge(n,e,1,i)}}),Aa(e,1)}};ea=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var r=je();Ge(t,e,134217728,r)}Aa(e,134217728)}};tc=function(e){if(e.tag===13){var t=At(e),r=gt(e,t);if(r!==null){var n=je();Ge(r,e,t,n)}Aa(e,t)}};rc=function(){return K};nc=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};Ks=function(e,t,r){switch(t){case"input":if($s(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Hi(n);if(!i)throw Error(C(90));Lu(n),$s(n,i)}}}break;case"textarea":Mu(e,r);break;case"select":t=r.value,t!=null&&hr(e,!!r.multiple,t,!1)}};Vu=_a;qu=Gt;var jh={usingClientEntryPoint:!1,Events:[Nn,ar,Hi,$u,Uu,_a]},Ur={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sh={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{$i=Wn.inject(Sh),rt=Wn}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jh;Le.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(t))throw Error(C(200));return xh(e,t,null,r)};Le.createRoot=function(e,t){if(!La(e))throw Error(C(299));var r=!1,n="",i=bd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ta(e,1,!1,null,null,r,!1,n,i),e[mt]=t.current,fn(e.nodeType===8?e.parentNode:e),new Ra(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Qu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Gt(e)};Le.hydrate=function(e,t,r){if(!es(t))throw Error(C(200));return ts(null,e,t,!0,r)};Le.hydrateRoot=function(e,t,r){if(!La(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=bd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Cd(t,null,e,1,r??null,i,!1,o,a),e[mt]=t.current,fn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Zi(t)};Le.render=function(e,t,r){if(!es(t))throw Error(C(200));return ts(null,e,t,!1,r)};Le.unmountComponentAtNode=function(e){if(!es(e))throw Error(C(40));return e._reactRootContainer?(Gt(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Le.unstable_batchedUpdates=_a;Le.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!es(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ts(e,t,r,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function Nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd)}catch(e){console.error(e)}}Nd(),Nu.exports=Le;var Ch=Nu.exports,Zl=Ch;Ls.createRoot=Zl.createRoot,Ls.hydrateRoot=Zl.hydrateRoot;const st=Object.create(null);st.open="0";st.close="1";st.ping="2";st.pong="3";st.message="4";st.upgrade="5";st.noop="6";const ai=Object.create(null);Object.keys(st).forEach(e=>{ai[st[e]]=e});const Eo={type:"error",data:"parser error"},_d=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ed=typeof ArrayBuffer=="function",zd=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Oa=({type:e,data:t},r,n)=>_d&&t instanceof Blob?r?n(t):eu(t,n):Ed&&(t instanceof ArrayBuffer||zd(t))?r?n(t):eu(new Blob([t]),n):n(st[e]+(t||"")),eu=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function tu(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ts;function bh(e,t){if(_d&&e.data instanceof Blob)return e.data.arrayBuffer().then(tu).then(t);if(Ed&&(e.data instanceof ArrayBuffer||zd(e.data)))return t(tu(e.data));Oa(e,!1,r=>{Ts||(Ts=new TextEncoder),t(Ts.encode(r))})}const ru="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Kr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<ru.length;e++)Kr[ru.charCodeAt(e)]=e;const Nh=e=>{let t=e.length*.75,r=e.length,n,i=0,o,a,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),y=new Uint8Array(c);for(n=0;n<r;n+=4)o=Kr[e.charCodeAt(n)],a=Kr[e.charCodeAt(n+1)],l=Kr[e.charCodeAt(n+2)],u=Kr[e.charCodeAt(n+3)],y[i++]=o<<2|a>>4,y[i++]=(a&15)<<4|l>>2,y[i++]=(l&3)<<6|u&63;return c},_h=typeof ArrayBuffer=="function",Ma=(e,t)=>{if(typeof e!="string")return{type:"message",data:Pd(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Eh(e.substring(1),t)}:ai[r]?e.length>1?{type:ai[r],data:e.substring(1)}:{type:ai[r]}:Eo},Eh=(e,t)=>{if(_h){const r=Nh(e);return Pd(r,t)}else return{base64:!0,data:e}},Pd=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Td="",zh=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((o,a)=>{Oa(o,!1,l=>{n[a]=l,++i===r&&t(n.join(Td))})})},Ph=(e,t)=>{const r=e.split(Td),n=[];for(let i=0;i<r.length;i++){const o=Ma(r[i],t);if(n.push(o),o.type==="error")break}return n};function Th(){return new TransformStream({transform(e,t){bh(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let As;function Qn(e){return e.reduce((t,r)=>t+r.length,0)}function Kn(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Ah(e,t){As||(As=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(a,l){for(r.push(a);;){if(n===0){if(Qn(r)<1)break;const u=Kn(r,1);o=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Qn(r)<2)break;const u=Kn(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Qn(r)<8)break;const u=Kn(r,8),c=new DataView(u.buffer,u.byteOffset,u.length),y=c.getUint32(0);if(y>Math.pow(2,21)-1){l.enqueue(Eo);break}i=y*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Qn(r)<i)break;const u=Kn(r,i);l.enqueue(Ma(o?u:As.decode(u),t)),n=0}if(i===0||i>e){l.enqueue(Eo);break}}}})}const Ad=4;function ae(e){if(e)return Rh(e)}function Rh(e){for(var t in ae.prototype)e[t]=ae.prototype[t];return e}ae.prototype.on=ae.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ae.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};ae.prototype.off=ae.prototype.removeListener=ae.prototype.removeAllListeners=ae.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};ae.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};ae.prototype.emitReserved=ae.prototype.emit;ae.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ae.prototype.hasListeners=function(e){return!!this.listeners(e).length};const rs=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),De=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Lh="arraybuffer";function Rd(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Oh=De.setTimeout,Mh=De.clearTimeout;function ns(e,t){t.useNativeTimers?(e.setTimeoutFn=Oh.bind(De),e.clearTimeoutFn=Mh.bind(De)):(e.setTimeoutFn=De.setTimeout.bind(De),e.clearTimeoutFn=De.clearTimeout.bind(De))}const Ih=1.33;function Dh(e){return typeof e=="string"?Fh(e):Math.ceil((e.byteLength||e.size)*Ih)}function Fh(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Ld(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Bh(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function $h(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class Uh extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Ia extends ae{constructor(t){super(),this.writable=!1,ns(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Uh(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Ma(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Bh(t);return r.length?"?"+r:""}}class Vh extends Ia{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ph(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,zh(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Ld()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Od=!1;try{Od=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const qh=Od;function Hh(){}class Wh extends Vh{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class it extends ae{constructor(t,r,n){super(),this.createRequest=t,ns(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Rd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=it.requestsCount++,it.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Hh,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete it.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}it.requestsCount=0;it.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",nu);else if(typeof addEventListener=="function"){const e="onpagehide"in De?"pagehide":"unload";addEventListener(e,nu,!1)}}function nu(){for(let e in it.requests)it.requests.hasOwnProperty(e)&&it.requests[e].abort()}const Qh=function(){const e=Md({xdomain:!1});return e&&e.responseType!==null}();class Kh extends Wh{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Qh&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new it(Md,this.uri(),t)}}function Md(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||qh))return new XMLHttpRequest}catch{}if(!t)try{return new De[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Id=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Xh extends Ia{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Id?{}:Rd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Oa(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&rs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Ld()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Rs=De.WebSocket||De.MozWebSocket;class Yh extends Xh{createSocket(t,r,n){return Id?new Rs(t,r,n):r?new Rs(t,r):new Rs(t)}doWrite(t,r){this.ws.send(r)}}class Gh extends Ia{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Ah(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Th();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&rs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Jh={websocket:Yh,webtransport:Gh,polling:Kh},Zh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,em=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function zo(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=Zh.exec(e||""),o={},a=14;for(;a--;)o[em[a]]=i[a]||"";return r!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=tm(o,o.path),o.queryKey=rm(o,o.query),o}function tm(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function rm(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Po=typeof addEventListener=="function"&&typeof removeEventListener=="function",li=[];Po&&addEventListener("offline",()=>{li.forEach(e=>e())},!1);class Lt extends ae{constructor(t,r){if(super(),this.binaryType=Lh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=zo(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=zo(r.host).host);ns(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=$h(this.opts.query)),Po&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},li.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Ad,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Lt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Lt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Dh(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,rs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:t,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Lt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Po&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=li.indexOf(this._offlineEventListener);n!==-1&&li.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Lt.protocol=Ad;class nm extends Lt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;Lt.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",v=>{if(!n)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Lt.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(y(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=r.name,this.emitReserved("upgradeError",p)}}))};function o(){n||(n=!0,y(),r.close(),r=null)}const a=v=>{const p=new Error("probe error: "+v);p.transport=r.name,o(),this.emitReserved("upgradeError",p)};function l(){a("transport closed")}function u(){a("socket closed")}function c(v){r&&v.name!==r.name&&o()}const y=()=>{r.removeListener("open",i),r.removeListener("error",a),r.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};r.once("open",i),r.once("error",a),r.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}let im=class extends nm{constructor(t,r={}){const n=typeof t=="object",i=n?{...t}:{...r};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(o=>Jh[o]).filter(o=>!!o)),super(n?i:t,i)}};function sm(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=zo(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const om=typeof ArrayBuffer=="function",am=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Dd=Object.prototype.toString,lm=typeof Blob=="function"||typeof Blob<"u"&&Dd.call(Blob)==="[object BlobConstructor]",um=typeof File=="function"||typeof File<"u"&&Dd.call(File)==="[object FileConstructor]";function Da(e){return om&&(e instanceof ArrayBuffer||am(e))||lm&&e instanceof Blob||um&&e instanceof File}function ui(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(ui(e[r]))return!0;return!1}if(Da(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ui(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ui(e[r]))return!0;return!1}function cm(e){const t=[],r=e.data,n=e;return n.data=ci(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ci(e,t,r){if(!e)return e;if(Da(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=ci(e[i],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON=="function"&&!r)return ci(e.toJSON(),t,!0);const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ci(e[i],t));return n}return e}function dm(e,t){return e.data=To(e.data,t),delete e.attachments,e}function To(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=To(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=To(e[r],t));return e}const pm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var H;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class fm{constructor(t){this.replacer=t}encode(t){return(t.type===H.EVENT||t.type===H.ACK)&&ui(t)?this.encodeAsBinary({type:t.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===H.BINARY_EVENT||t.type===H.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=cm(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Fa extends ae{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===H.BINARY_EVENT;n||r.type===H.BINARY_ACK?(r.type=n?H.EVENT:H.ACK,this.reconstructor=new hm(r)):super.emitReserved("decoded",r)}else if(Da(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(H[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===H.BINARY_EVENT||n.type===H.BINARY_ACK){const o=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const a=t.substring(o,r);if(a!=Number(a)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(a);if(!mm(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(o,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const a=t.charAt(r);if(a==null||Number(a)!=a){--r;break}if(r===t.length)break}n.id=Number(t.substring(o,r+1))}if(t.charAt(++r)){const o=this.tryParse(t.substr(r));if(Fa.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case H.CONNECT:return iu(r);case H.DISCONNECT:return r===void 0;case H.CONNECT_ERROR:return typeof r=="string"||iu(r);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&pm.indexOf(r[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class hm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=dm(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const mm=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function iu(e){return Object.prototype.toString.call(e)==="[object Object]"}const gm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Fa,Encoder:fm,get PacketType(){return H}},Symbol.toStringTag,{value:"Module"}));function Ke(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const vm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Fd extends ae{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ke(t,"open",this.onopen.bind(this)),Ke(t,"packet",this.onpacket.bind(this)),Ke(t,"error",this.onerror.bind(this)),Ke(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,o;if(vm.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const a={type:H.EVENT,data:r};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const y=this.ids++,v=r.pop();this._registerAckCallback(y,v),a.id=y}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),a=(...l)=>{this.io.clearTimeoutFn(o),r.apply(this,l)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...r){return new Promise((n,i)=>{const o=(a,l)=>a?i(a):n(l);o.withError=!0,r.push(o),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case H.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(t);break;case H.ACK:case H.BINARY_ACK:this.onack(t);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:H.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Rr(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Rr.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+r:e-r}return Math.min(e,this.max)|0};Rr.prototype.reset=function(){this.attempts=0};Rr.prototype.setMin=function(e){this.ms=e};Rr.prototype.setMax=function(e){this.max=e};Rr.prototype.setJitter=function(e){this.jitter=e};class Ao extends ae{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,ns(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Rr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||gm;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new im(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Ke(r,"open",function(){n.onopen(),t&&t()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},a=Ke(r,"error",o);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ke(t,"ping",this.onping.bind(this)),Ke(t,"data",this.ondata.bind(this)),Ke(t,"error",this.onerror.bind(this)),Ke(t,"close",this.onclose.bind(this)),Ke(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){rs(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Fd(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vr={};function di(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=sm(e,t.path||"/socket.io"),n=r.source,i=r.id,o=r.path,a=Vr[i]&&o in Vr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return l?u=new Ao(n,t):(Vr[i]||(Vr[i]=new Ao(n,t)),u=Vr[i]),r.query&&!t.query&&(t.query=r.queryKey),u.socket(r.path,t)}Object.assign(di,{Manager:Ao,Socket:Fd,io:di,connect:di});/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bd=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=P.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...l},u)=>P.createElement("svg",{ref:u,...xm,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Bd("lucide",i),...l},[...a.map(([c,y])=>P.createElement(c,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const r=P.forwardRef(({className:n,...i},o)=>P.createElement(km,{ref:o,iconNode:t,className:Bd(`lucide-${ym(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=R("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=R("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=R("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=R("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=R("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=R("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=R("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=R("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=R("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=R("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=R("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=R("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=R("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=R("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=R("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=R("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=R("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=R("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=R("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=R("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=R("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=R("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=R("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=R("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=R("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=R("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=R("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=R("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=R("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=R("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=R("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=R("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=R("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=R("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=R("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=R("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=R("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=R("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=R("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=R("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=R("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=R("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xm({chave:e,nome:t,cidade:r,valor:n,txtId:i="***"}){if(!e)return"";const o=String(e).trim(),a=String(t||"Festa do Morango").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,25),l=String(r||"SAO PAULO").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,15).toUpperCase(),u=Number(n||0).toFixed(2);function c(z,U){const D=U.length.toString().padStart(2,"0");return`${z}${D}${U}`}const y=c("00","br.gov.bcb.pix"),v=c("01",o),p=c("26",`${y}${v}`),g=c("52","0000"),w=c("53","986"),j=c("54",u),L=c("58","BR"),f=c("59",a),d=c("60",l),h=c("05",i||"***"),k=c("62",h),b=`000201${p}${g}${w}${j}${L}${f}${d}${k}6304`;let N=65535;for(let z=0;z<b.length;z++){N^=b.charCodeAt(z)<<8;for(let U=0;U<8;U++)N&32768?N=(N<<1^4129)&65535:N=N<<1&65535}const E=(N&65535).toString(16).toUpperCase().padStart(4,"0");return`${b}${E}`}function Ym({socket:e,menu:t,operador:r,onEnviarPedido:n}){const[i,o]=P.useState(""),[a,l]=P.useState([]),[u,c]=P.useState("todas"),[y,v]=P.useState(null),[p,g]=P.useState("cardapio"),[w,j]=P.useState("pix"),[L,f]=P.useState(""),[d,h]=P.useState(()=>{const x=new Date;return x.setDate(x.getDate()+7),x.toISOString().split("T")[0]}),[k,b]=P.useState(null),[N,E]=P.useState(!1),[z,U]=P.useState(!1);P.useEffect(()=>{fetch("/api/pix-config").then(x=>x.json()).then(x=>b(x)).catch(x=>console.error("Erro ao carregar chave PIX:",x))},[]);const D=Array.isArray(t)?t:t&&Array.isArray(t.produtos)?t.produtos:[],m=t&&Array.isArray(t.categorias)?t.categorias:[],M=x=>{if(x.categoria)return x.categoria;const T=m.find(V=>V.id===x.categoriaId);return T?T.nome:"Geral"},W=["todas",...new Set(D.map(x=>M(x)))],F=x=>{l(T=>T.find(O=>O.id===x.id)?T.map(O=>O.id===x.id?{...O,quantidade:O.quantidade+1}:O):[...T,{...x,quantidade:1,observacao:""}])},ke=(x,T)=>{l(V=>V.map(O=>{if(O.id===x){const me=O.quantidade+T;return me>0?{...O,quantidade:me}:null}return O}).filter(Boolean))},Ve=(x,T)=>{l(V=>V.map(O=>O.id===x?{...O,observacao:T}:O))},qe=x=>{l(T=>T.filter(V=>V.id!==x))},_=a.reduce((x,T)=>x+T.preco*T.quantidade,0),I=a.reduce((x,T)=>x+T.quantidade,0),B=k!=null&&k.chavePix?Xm({chave:k.chavePix,nome:k.nomeBeneficiario,cidade:k.cidadeBeneficiario,valor:_}):"",S=()=>{B&&(navigator.clipboard.writeText(B),U(!0),setTimeout(()=>U(!1),3e3))},$=x=>{if(x&&x.preventDefault(),!i.trim()){alert("Por favor, informe o NOME DO CLIENTE.");return}if(a.length===0){alert("O carrinho está vazio! Adicione pelo menos um item.");return}if(w==="pagar_depois"){if(!L.trim()){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');return}if(!d){alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');return}}const T={cliente:i.trim(),criadoPor:r?r.nome:"Caixa",itens:a.map(O=>({id:O.id,nome:O.nome,preco:O.preco,quantidade:O.quantidade,observacao:O.observacao||""})),total:_,formaPagamento:w,telefoneCliente:w==="pagar_depois"?L.trim():L.trim()||void 0,dataCobranca:w==="pagar_depois"?d:void 0},V=n||(e?(O,me)=>e.emit("criar_pedido",O,me):null);V?V(T,O=>{var ot,En;const me=((ot=O==null?void 0:O.order)==null?void 0:ot.numero)||((En=O==null?void 0:O.pedido)==null?void 0:En.numero)||"OK";v(`Pedido #${me} enviado para a cozinha!`),E(!1),o(""),f(""),l([]),j("pix"),g("cardapio"),setTimeout(()=>v(null),4e3)}):fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then(O=>O.json()).then(O=>{O&&O.order&&(v(`Pedido #${O.order.numero} enviado para a cozinha!`),E(!1),o(""),f(""),l([]),j("pix"),g("cardapio"),setTimeout(()=>v(null),4e3))}).catch(O=>{console.error("Erro ao enviar pedido:",O),alert("Erro ao comunicar com o servidor.")})},ne=D.filter(x=>{const T=x.disponivel!==!1&&x.ativo!==!1,V=M(x),O=u==="todas"||V===u||x.categoriaId===u;return T&&O});return s.jsxs("div",{className:"caixa-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"mobile-view-toggle",children:[s.jsxs("button",{className:`mobile-toggle-btn ${p==="cardapio"?"active":""}`,onClick:()=>g("cardapio"),children:[s.jsx(Kd,{size:16})," Cardápio de Produtos"]}),s.jsxs("button",{className:`mobile-toggle-btn ${p==="carrinho"?"active":""}`,onClick:()=>g("carrinho"),children:[s.jsx(ct,{size:16})," Comanda (",I,")"]})]}),s.jsxs("div",{className:`caixa-cardapio-col ${p!=="cardapio"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(ct,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Cardápio - Lançar Pedidos"})]}),y&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx($a,{size:18}),s.jsx("span",{children:y})]}),s.jsx("div",{className:"cat-pills",children:W.map(x=>s.jsx("button",{className:`cat-btn ${u===x?"active":""}`,onClick:()=>c(x),children:x==="todas"?"Todas as Categorias":x},x))}),s.jsx("div",{className:"produtos-grid",children:ne.map(x=>s.jsxs("div",{className:"prod-card",onClick:()=>F(x),children:[s.jsxs("div",{children:[s.jsx("span",{className:"prod-cat",children:M(x)}),s.jsx("div",{className:"prod-title",children:x.nome}),x.descricao&&s.jsx("div",{className:"prod-desc",children:x.descricao})]}),s.jsxs("div",{className:"prod-footer",children:[s.jsxs("span",{className:"prod-preco",children:["R$ ",(x.preco||0).toFixed(2)]}),s.jsx("button",{className:"prod-add-btn",title:"Adicionar ao Pedido",children:s.jsx(Fo,{size:18})})]})]},x.id))})]}),s.jsxs("div",{className:`caixa-carrinho-col ${p!=="carrinho"?"mobile-hidden":""}`,children:[s.jsxs("div",{className:"carrinho-header",children:[s.jsxs("div",{className:"carrinho-title",children:[s.jsx(ct,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Comanda Atual"})]}),a.length>0&&s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem",minHeight:"32px"},onClick:()=>l([]),children:"Limpar"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Cliente *"}),s.jsxs("div",{className:"cliente-input-box",children:[s.jsx(Er,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"cliente-input",placeholder:"Digite o nome do cliente...",value:i,onChange:x=>o(x.target.value)})]})]}),s.jsx("div",{className:"carrinho-itens",children:a.length===0?s.jsxs("div",{className:"carrinho-vazio",children:[s.jsx(ct,{size:36,opacity:.4}),s.jsx("p",{children:"Nenhum item adicionado ainda."}),s.jsx("span",{style:{fontSize:"0.82rem"},children:"Clique nos produtos do cardápio para montar o pedido."})]}):a.map(x=>s.jsxs("div",{className:"carrinho-item",children:[s.jsxs("div",{className:"item-main",children:[s.jsxs("div",{children:[s.jsx("div",{className:"item-nome",children:x.nome}),s.jsxs("div",{className:"item-preco",children:["R$ ",(x.preco*x.quantidade).toFixed(2)]})]}),s.jsxs("div",{className:"item-qtd-ctrl",children:[s.jsx("button",{className:"qtd-btn",onClick:()=>ke(x.id,-1),children:s.jsx(Rm,{size:14})}),s.jsx("span",{className:"qtd-val",children:x.quantidade}),s.jsx("button",{className:"qtd-btn",onClick:()=>ke(x.id,1),children:s.jsx(Fo,{size:14})}),s.jsx("button",{className:"qtd-btn",style:{color:"var(--primary)",marginLeft:"4px"},onClick:()=>qe(x.id),children:s.jsx(Di,{size:14})})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(qd,{size:12,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"obs-input",placeholder:"Obs (ex: Sem maionese)...",value:x.observacao,onChange:T=>Ve(x.id,T.target.value)})]})]},x.id))}),s.jsxs("div",{style:{borderTop:"1px solid var(--app-border)",paddingTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.jsx("label",{className:"form-label",children:"Forma de Pagamento *"}),s.jsxs("div",{className:"pgto-grid",children:[s.jsxs("button",{type:"button",className:`pgto-btn ${w==="pix"?"active":""}`,onClick:()=>j("pix"),children:[s.jsx(pi,{size:16})," PIX"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="dinheiro"?"active":""}`,onClick:()=>j("dinheiro"),children:[s.jsx(Vd,{size:16})," Dinheiro"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="debito"?"active":""}`,onClick:()=>j("debito"),children:[s.jsx(pi,{size:16})," Débito"]}),s.jsxs("button",{type:"button",className:`pgto-btn ${w==="credito"?"active":""}`,onClick:()=>j("credito"),children:[s.jsx(pi,{size:16})," Crédito"]}),s.jsxs("button",{type:"button",className:`pgto-btn pagar-depois ${w==="pagar_depois"?"active pagar-depois":""}`,style:{gridColumn:"span 2"},onClick:()=>j("pagar_depois"),children:[s.jsx(Lo,{size:16})," Pagar Depois (Fiado)"]})]}),w==="pix"&&_>0&&s.jsxs("button",{type:"button",className:"btn btn-secondary",style:{marginTop:"0.3rem",border:"1px solid var(--primary)",color:"var(--primary)",fontWeight:700},onClick:()=>E(!0),children:[s.jsx(lu,{size:18})," Gerar QR Code PIX (R$ ",_.toFixed(2),")"]}),w==="pagar_depois"&&s.jsxs("div",{style:{background:"rgba(230, 134, 25, 0.12)",border:"1px solid var(--status-preparo)",borderRadius:"var(--radius-md)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"0.3rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Do,{size:14})," Telefone / WhatsApp do Cliente *"]}),s.jsx("input",{type:"tel",className:"form-input",placeholder:"Ex: (11) 98765-4321",value:L,onChange:x=>f(x.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",style:{color:"var(--status-preparo)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(is,{size:14})," Data de Cobrança / Vencimento *"]}),s.jsx("input",{type:"date",className:"form-input",value:d,onChange:x=>h(x.target.value),style:{borderColor:"var(--status-preparo)",background:"var(--app-canvas)"},required:!0})]}),s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ud,{size:13,color:"var(--status-preparo)"}),s.jsx("span",{children:"O telefone e a data são obrigatórios para controle de fiado."})]})]})]}),s.jsxs("div",{className:"carrinho-footer",children:[s.jsxs("div",{className:"total-row",children:[s.jsx("span",{className:"total-label",children:"Total a Pagar:"}),s.jsxs("span",{className:"total-value",children:["R$ ",_.toFixed(2)]})]}),s.jsxs("button",{className:"btn btn-primary btn-enviar",onClick:$,disabled:a.length===0||!i.trim(),children:[s.jsx(uu,{size:18})," Enviar para Cozinha"]})]})]}),N&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card-pix",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"1.1rem",color:"var(--text-title)"},children:[s.jsx(lu,{size:22,color:"var(--primary)"})," Pagamento via PIX"]}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.5rem",minHeight:"30px"},onClick:()=>E(!1),children:s.jsx(Km,{size:16})})]}),s.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--app-ink-muted)"},children:["Cliente: ",s.jsx("strong",{style:{color:"var(--text-title)"},children:i||"Cliente no Caixa"})]}),B?s.jsx("div",{style:{background:"#FFFFFF",padding:"1rem",borderRadius:"var(--radius-md)",border:"2px solid var(--primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(B)}`,alt:"QR Code PIX Dinâmico",style:{width:"200px",height:"200px"}})}):s.jsx("div",{style:{padding:"1rem",color:"var(--status-urgente)",fontSize:"0.85rem"},children:"Nenhuma Chave PIX cadastrada pelo Administrador."}),s.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--color-primary)"},children:["R$ ",_.toFixed(2)]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:["Beneficiário: ",s.jsx("strong",{children:(k==null?void 0:k.nomeBeneficiario)||"Festa do Morango"})," (",k==null?void 0:k.chavePix,")"]}),B&&s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"0.4rem"},children:s.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},onClick:S,children:[z?s.jsx(kr,{size:16,color:"var(--primary)"}):s.jsx(Nm,{size:16}),z?"Código PIX Copiado!":"Copiar Código Pix Copia e Cola"]})}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%",marginTop:"0.5rem"},children:[s.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>E(!1),children:"Voltar"}),s.jsxs("button",{className:"btn btn-primary",style:{flex:1.5},onClick:$,disabled:a.length===0||!i.trim(),children:[s.jsx(uu,{size:16})," Confirmar & Enviar"]})]})]})}),s.jsxs("div",{className:`mobile-cart-float-bar ${p==="cardapio"&&a.length>0?"mobile-show-float":""}`,onClick:()=>g("carrinho"),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx(ct,{size:20}),s.jsxs("span",{children:["Ver Pedido (",I," ",I===1?"item":"itens",")"]})]}),s.jsxs("span",{children:["R$ ",_.toFixed(2)," →"]})]})]})}function Gm({pedidos:e,operador:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=P.useState(Date.now()),[a,l]=P.useState("ativos");P.useEffect(()=>{const g=setInterval(()=>{o(Date.now())},1e3);return()=>clearInterval(g)},[]);const u=e.filter(g=>g.status==="pendente"||g.status==="em_preparo"||g.status==="entrega_parcial"),c=u.filter(g=>a==="pendentes"?g.status==="pendente":a==="preparo"?g.status==="em_preparo":a==="parcial"?g.status==="entrega_parcial":a==="meus"&&t?g.preparadoPor&&g.preparadoPor.includes(t.nome):!0),y=g=>{const w=new Date(g).getTime(),j=i-w;return Math.floor(j/6e4)},v=g=>{const w=new Date(g).getTime(),j=Math.max(0,i-w),L=Math.floor(j/6e4),f=Math.floor(j%6e4/1e3);return`${String(L).padStart(2,"0")}:${String(f).padStart(2,"0")}`},p=g=>{const w=y(g);return w>=10?"urgente":w>=5?"alerta":"normal"};return s.jsxs("div",{className:"cozinha-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"cozinha-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(jn,{size:26,color:"var(--status-preparo)"}),s.jsx("span",{children:"Painel da Cozinha (KDS)"})]}),s.jsxs("div",{className:"nav-tabs",children:[s.jsxs("button",{className:`nav-btn ${a==="ativos"?"active":""}`,onClick:()=>l("ativos"),children:["Todos (",u.length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="pendentes"?"active":""}`,onClick:()=>l("pendentes"),children:["Novos (",u.filter(g=>g.status==="pendente").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="preparo"?"active":""}`,onClick:()=>l("preparo"),children:["Em Preparo (",u.filter(g=>g.status==="em_preparo").length,")"]}),s.jsxs("button",{className:`nav-btn ${a==="parcial"?"active":""}`,onClick:()=>l("parcial"),children:["Entrega Parcial (",u.filter(g=>g.status==="entrega_parcial").length,")"]}),t&&s.jsxs("button",{className:`nav-btn ${a==="meus"?"active":""}`,onClick:()=>l("meus"),children:["Meus Pedidos (",u.filter(g=>g.preparadoPor&&g.preparadoPor.includes(t.nome)).length,")"]})]})]}),s.jsx("div",{className:"cozinha-grid",children:c.length===0?s.jsxs("div",{className:"kds-vazio",children:[s.jsx(Ii,{size:48,color:"var(--status-pronto)"}),s.jsx("h3",{style:{color:"var(--text-title)"},children:"Nenhum pedido pendente nesta visualização!"}),s.jsx("p",{children:"Os pedidos criados no caixa aparecerão automaticamente aqui."})]}):c.map(g=>{const w=p(g.criadoEm),j=v(g.criadoEm),L=g.itens.reduce((h,k)=>h+(k.quantidade||1),0),f=g.itens.filter(h=>h.entregue).reduce((h,k)=>h+(k.quantidade||1),0),d=f>0&&f<L;return s.jsxs("div",{className:`kds-card ${w}`,children:[s.jsxs("div",{className:"kds-card-header",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"comanda-num",children:["#",g.numero]}),s.jsx("div",{className:"cliente-nome",children:g.cliente}),g.formaPagamento==="pagar_depois"?s.jsxs("span",{className:"badge badge-preparo",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:["Pagar Depois (",g.dataCobranca?new Date(g.dataCobranca).toLocaleDateString():"Sem data",")"]}):s.jsx("span",{className:"badge badge-pendente",style:{fontSize:"0.72rem",marginTop:"0.2rem"},children:g.formaPagamento?g.formaPagamento.toUpperCase():"PIX"}),g.preparadoPor&&s.jsxs("div",{className:"preparador-badge",children:[s.jsx(Er,{size:12}),s.jsxs("span",{children:["Preparo: ",g.preparadoPor]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.3rem"},children:[d?s.jsxs("span",{className:"badge badge-entregue",style:{background:"#eef7ec",color:"#156b16",border:"1px solid #b7dfb8"},children:["PARCIAL (",f,"/",L,")"]}):s.jsx("span",{className:`badge badge-${g.status==="pendente"?"pendente":"preparo"}`,children:g.status==="pendente"?"Novo":"Em Preparo"}),s.jsxs("div",{className:`timer-box ${w}`,children:[s.jsx(is,{size:14}),s.jsx("span",{children:j})]})]})]}),s.jsxs("div",{className:"kds-card-body",children:[s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.2rem"},children:[s.jsx(Hd,{size:14,color:"var(--primary)"}),s.jsxs("span",{children:["Clique no item para marcar entrega parcial (",f,"/",L," entregues):"]})]}),g.itens.map((h,k)=>s.jsxs("div",{className:`kds-item-row ${h.entregue?"item-entregue":""}`,children:[s.jsxs("div",{className:"item-line",children:[s.jsxs("div",{className:"item-info",children:[s.jsxs("span",{className:"item-qtd-badge",children:[h.quantidade,"x"]}),s.jsx("span",{className:"item-titulo",children:h.nome})]}),s.jsxs("button",{type:"button",className:`item-check-btn ${h.entregue?"checked":""}`,onClick:()=>n&&n(g.id,k,!h.entregue),title:h.entregue?"Desmarcar entrega deste item":"Marcar item como ENTREGUE ao cliente",children:[h.entregue?s.jsx(Wd,{size:14}):s.jsx(Qd,{size:14}),s.jsx("span",{children:h.entregue?"Entregue":"Entregar"})]})]}),h.observacao&&s.jsxs("div",{className:"item-obs-highlight",children:[s.jsx(Am,{size:13,color:"var(--text-obs)"}),s.jsxs("span",{children:["OBS: ",h.observacao]})]})]},k))]}),s.jsx("div",{className:"kds-card-footer",children:g.status==="pendente"?s.jsxs("button",{className:"btn btn-warning btn-kds",onClick:()=>r(g.id,"em_preparo"),children:[s.jsx(Mm,{size:18})," Iniciar Preparo"]}):s.jsxs("button",{className:"btn btn-success btn-kds",onClick:()=>r(g.id,"pronto"),children:[s.jsx(Ba,{size:18})," Pronto / Chamar Cliente"]})})]},g.id)})})]})}let tr=null;function Jm(){if(!tr){const e=window.AudioContext||window.webkitAudioContext;e&&(tr=new e)}return tr&&tr.state==="suspended"&&tr.resume(),tr}function pu(){try{const e=Jm();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.6,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.8),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.8);const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,t+.35),o.gain.setValueAtTime(0,t+.35),o.gain.linearRampToValueAtTime(.7,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.4),i.connect(o),o.connect(e.destination),i.start(t+.35),i.stop(t+1.4)}catch(e){console.warn("Não foi possível tocar o sinal sonoro:",e)}}function Zm({pedidos:e,ultimoPedidoChamado:t,onMudarStatus:r,onAlternarItemEntregue:n}){const[i,o]=P.useState(!0);P.useEffect(()=>{t&&t.status==="pronto"&&i&&pu()},[t,i]);const a=e.filter(c=>c.status==="pronto"||c.status==="entrega_parcial"),l=e.filter(c=>c.status==="entregue").slice(0,8),u=t&&(t.status==="pronto"||t.status==="entrega_parcial")?t:a[0];return s.jsxs("div",{className:"chamada-tv-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tv-main-panel",children:[s.jsx("div",{className:"tv-panel-controls",children:s.jsxs("button",{className:`btn btn-secondary ${i?"":"muted"}`,style:{padding:"0.4rem 0.8rem"},onClick:()=>{o(!i),i||pu()},children:[i?s.jsx(qm,{size:18,color:"var(--status-pronto)"}):s.jsx(Hm,{size:18,color:"var(--primary)"}),s.jsx("span",{style:{fontSize:"0.85rem"},children:i?"Som Ativo":"Mudo"})]})}),s.jsxs("div",{className:"destaque-label",children:[s.jsx(Ba,{size:22,color:"var(--status-pronto)"}),s.jsx("span",{children:"Pronto para Retirada no Balcão"})]}),u?s.jsxs("div",{className:"destaque-card",children:[s.jsxs("div",{className:"destaque-comanda",children:["#",u.numero]}),s.jsx("div",{className:"destaque-cliente",children:u.cliente}),u.itens&&s.jsxs("div",{className:"destaque-itens-box",children:[s.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[s.jsx("span",{children:"Conferência de Itens no Balcão:"}),s.jsxs("span",{style:{color:"var(--primary)"},children:[u.itens.filter(c=>c.entregue).length," de ",u.itens.length," entregues"]})]}),u.itens.map((c,y)=>{const v=!!c.entregue;return s.jsxs("div",{className:`destaque-item-row ${v?"item-entregue":""}`,style:{background:v?"rgba(16, 185, 129, 0.12)":"var(--app-surface-2)",border:v?"1px solid var(--primary)":"1px solid var(--app-border)",transition:"all 130ms ease"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("span",{className:v?"badge badge-pronto":"badge badge-pendente",children:[c.quantidade,"x"]}),s.jsx("span",{style:{color:"var(--text-title)",textDecoration:v?"line-through":"none",fontWeight:700},children:c.nome}),c.observacao&&s.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["(",c.observacao,")"]})]}),s.jsxs("button",{type:"button",className:`btn ${v?"btn-success":"btn-secondary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"32px",fontWeight:700},onClick:p=>{p.stopPropagation(),n&&n(u.id,y,!v)},children:[v?s.jsx(Wd,{size:16}):s.jsx(Qd,{size:16}),s.jsx("span",{children:v?"✓ Entregue":"Dar Baixa"})]})]},y)})]}),s.jsx("div",{className:"destaque-acoes",children:s.jsxs("button",{className:"btn btn-success",style:{flex:1,padding:"0.9rem",fontSize:"1.05rem",borderRadius:"var(--radius-md)"},onClick:()=>r(u.id,"entregue"),children:[s.jsx(du,{size:20})," Finalizar & Entregar Todos os Itens"]})})]}):s.jsxs("div",{className:"chamada-vazio",children:[s.jsx(Fi,{size:64,strokeWidth:1.5,color:"var(--app-ink-muted)"}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Aguardando Próximo Pedido..."}),s.jsx("p",{children:"Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto."})]})]}),s.jsxs("div",{className:"tv-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(Ii,{size:18,color:"var(--status-pronto)"}),s.jsxs("span",{children:["Fila no Balcão (",a.length,")"]})]}),s.jsx("div",{className:"prontos-lista",children:a.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",textAlign:"center",padding:"1rem 0"},children:"Nenhum outro pedido pronto no momento."}):a.map(c=>s.jsxs("div",{className:"pronto-item",onClick:()=>r(c.id,"entregue"),children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{fontSize:"1.1rem",color:"var(--text-title)"},children:["#",c.numero]}),s.jsx("div",{style:{color:"var(--status-pronto)",fontWeight:700,fontSize:"0.95rem"},children:c.cliente}),c.status==="entrega_parcial"&&s.jsxs("span",{className:"badge badge-entregue",style:{fontSize:"0.7rem",marginTop:"0.2rem"},children:["PARCIAL (",c.itens?c.itens.filter(y=>y.entregue).length:0,"/",c.itens?c.itens.length:0,")"]})]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",fontSize:"0.8rem"},children:["Entregue ",s.jsx($d,{size:14})]})]},c.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsxs("div",{className:"sidebar-title",children:[s.jsx(du,{size:18,color:"var(--app-ink-muted)"}),s.jsx("span",{children:"Últimos Entregues"})]}),s.jsx("div",{className:"entregues-lista",children:l.length===0?s.jsx("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido entregue ainda."}):l.map(c=>s.jsxs("div",{className:"entregue-chip",children:[s.jsxs("span",{children:["#",c.numero]}),s.jsx("strong",{style:{color:"var(--app-ink)"},children:c.cliente})]},c.id))})]})]})]})}const Xd=[{id:"burger",nome:"Hambúrguer",component:s.jsx(jm,{size:18})},{id:"fries",nome:"Porção",component:s.jsx(Im,{size:18})},{id:"drink",nome:"Bebida",component:s.jsx(_m,{size:18})},{id:"dessert",nome:"Sobremesa",component:s.jsx(bm,{size:18})},{id:"pizza",nome:"Pizza",component:s.jsx(Om,{size:18})},{id:"coffee",nome:"Café",component:s.jsx(Cm,{size:18})},{id:"utensils",nome:"Geral",component:s.jsx(zr,{size:18})}];function fu(e){const t=Xd.find(r=>r.id===e);return t?t.component:s.jsx(zr,{size:16})}function eg({menu:e,onSalvarProduto:t,onExcluirProduto:r,onToggleDisponivel:n,onSalvarCategoria:i,onExcluirCategoria:o}){const[a,l]=P.useState("todas"),[u,c]=P.useState(""),[y,v]=P.useState(!1),[p,g]=P.useState(!1),[w,j]=P.useState(null),[L,f]=P.useState(""),[d,h]=P.useState(""),[k,b]=P.useState(""),[N,E]=P.useState(""),[z,U]=P.useState(""),[D,m]=P.useState("burger"),M=(e==null?void 0:e.categorias)||[],W=(e==null?void 0:e.produtos)||[],F=W.filter(S=>{const $=a==="todas"||S.categoriaId===a,ne=!u.trim()||S.nome.toLowerCase().includes(u.toLowerCase())||S.descricao&&S.descricao.toLowerCase().includes(u.toLowerCase());return $&&ne}),ke=(S=null)=>{var $;S?(j(S),f(S.nome),h(S.categoriaId),b(S.preco.toString()),E(S.descricao||"")):(j(null),f(""),h((($=M[0])==null?void 0:$.id)||"lanches"),b(""),E("")),v(!0)},Ve=()=>{U(""),m("burger"),g(!0)},qe=S=>{if(S.preventDefault(),!L.trim()||!k||!d){alert("Por favor, preencha todos os campos obrigatórios.");return}t({id:w?w.id:void 0,categoriaId:d,nome:L.trim(),preco:parseFloat(k),descricao:N.trim(),disponivel:w?w.disponivel:!0}),v(!1)},_=S=>{if(S.preventDefault(),!z.trim()){alert("O nome da categoria é obrigatório.");return}i({nome:z.trim(),icone:D}),g(!1)},I=S=>{window.confirm(`Tem certeza que deseja excluir o produto "${S.nome}"?`)&&r(S.id)},B=S=>{const $=W.filter(ne=>ne.categoriaId===S.id).length;if($>0){alert(`Não é possível excluir a categoria "${S.nome}" pois ela possui ${$} produto(s) vinculado(s).`);return}window.confirm(`Deseja excluir a categoria "${S.nome}"?`)&&o(S.id).then(ne=>{ne&&ne.error?alert(ne.error):a===S.id&&l("todas")})};return s.jsxs("div",{className:"cardapio-crud-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"crud-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(zr,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão do Cardápio"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ua,{size:18,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar produto por nome...",value:u,onChange:S=>c(S.target.value)})]}),s.jsxs("div",{className:"crud-actions",children:[s.jsxs("button",{className:"btn btn-secondary",onClick:Ve,children:[s.jsx(su,{size:18,color:"var(--status-preparo)"})," + Categoria"]}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>ke(),children:[s.jsx(Fo,{size:18})," + Produto"]})]})]}),s.jsxs("div",{className:"cat-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${a==="todas"?"active":""}`,onClick:()=>l("todas"),children:[s.jsx(Kd,{size:14})," Todas (",W.length,")"]}),M.map(S=>{const $=W.filter(ne=>ne.categoriaId===S.id).length;return s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("button",{className:`cat-pill-btn ${a===S.id?"active":""}`,onClick:()=>l(S.id),children:[fu(S.icone)," ",s.jsx("span",{children:S.nome})," (",$,")"]}),$===0&&s.jsx("button",{title:"Excluir Categoria Vazia",style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0 0.3rem"},onClick:()=>B(S),children:s.jsx(Di,{size:13})})]},S.id)})]}),s.jsx("div",{className:"crud-table-wrapper",children:s.jsxs("table",{className:"crud-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Disponibilidade"}),s.jsx("th",{children:"Produto"}),s.jsx("th",{children:"Categoria"}),s.jsx("th",{children:"Preço"}),s.jsx("th",{children:"Descrição"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:F.length===0?s.jsx("tr",{children:s.jsxs("td",{colSpan:"6",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:[s.jsx(Ud,{size:32,style:{marginBottom:"0.5rem",display:"block",margin:"0 auto"}}),"Nenhum produto encontrado. Clique em ",s.jsx("strong",{children:'"+ Produto"'})," para adicionar."]})}):F.map(S=>{const $=M.find(ne=>ne.id===S.categoriaId);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.35rem 0.7rem",fontSize:"0.8rem"},onClick:()=>n(S.id),children:S.disponivel?s.jsxs("span",{style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Bm,{size:18})," Ativo"]}):s.jsxs("span",{style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:700},children:[s.jsx(Fm,{size:18})," Esgotado"]})})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)",fontSize:"1rem"},children:S.nome})}),s.jsx("td",{children:s.jsxs("span",{className:"badge badge-pendente",children:[fu($==null?void 0:$.icone)," ",($==null?void 0:$.nome)||S.categoriaId]})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--status-pronto)",fontSize:"1.05rem"},children:["R$ ",S.preco.toFixed(2)]})}),s.jsx("td",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",maxWidth:"280px"},children:S.descricao||"-"}),s.jsx("td",{children:s.jsxs("div",{className:"action-group",children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem"},onClick:()=>ke(S),children:[s.jsx(Lm,{size:14})," Editar"]}),s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.7rem",fontSize:"0.82rem",color:"var(--primary)"},onClick:()=>I(S),children:[s.jsx(Di,{size:14})," Excluir"]})]})})]},S.id)})})]})}),y&&s.jsx("div",{className:"modal-backdrop",onClick:()=>v(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(zr,{size:20,color:"var(--primary)"}),s.jsx("span",{children:w?"Editar Produto":"Cadastrar Novo Produto"})]}),s.jsxs("form",{onSubmit:qe,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Produto *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: X-Salada Bacon Especial",value:L,onChange:S=>f(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Categoria *"}),s.jsx("select",{className:"form-input",value:d,onChange:S=>h(S.target.value),required:!0,children:M.map(S=>s.jsx("option",{value:S.id,children:S.nome},S.id))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Preço em R$ *"}),s.jsx("input",{type:"number",step:"0.10",className:"form-input",placeholder:"24.90",value:k,onChange:S=>b(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Descrição / Ingredientes"}),s.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)...",value:N,onChange:S=>E(S.target.value)})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>v(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(kr,{size:18})," Salvar Produto"]})]})]})]})}),p&&s.jsx("div",{className:"modal-backdrop",onClick:()=>g(!1),children:s.jsxs("div",{className:"modal-card",onClick:S=>S.stopPropagation(),children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(su,{size:20,color:"var(--status-preparo)"}),s.jsx("span",{children:"Nova Categoria do Cardápio"})]}),s.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome da Categoria *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Combos Promocionais, Sobremesas...",value:z,onChange:S=>U(S.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Ícone da Categoria"}),s.jsx("div",{className:"icone-selector",children:Xd.map(S=>s.jsxs("button",{type:"button",className:`icone-opt ${D===S.id?"selected":""}`,onClick:()=>m(S.id),children:[S.component,s.jsx("span",{children:S.nome})]},S.id))})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn btn-success",children:[s.jsx(kr,{size:18})," Criar Categoria"]})]})]})]})})]})}function tg({pedidos:e,operador:t}){const[r,n]=P.useState(null),[i,o]=P.useState("hoje"),[a,l]=P.useState("todos"),[u,c]=P.useState(""),[y,v]=P.useState(""),[p,g]=P.useState("");if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Financeiro"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta visão de faturamento é reservada apenas para Contas Master ou Caixa."})]});const j=m=>{n(M=>M===m?null:m)},L=(m,M)=>{m.stopPropagation(),window.confirm("Deseja confirmar a quitação/recebimento deste pedido pendente?")&&fetch(`/api/orders/${M}/pagamento`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({statusPagamento:"pago"})}).then(W=>W.json()).catch(W=>console.error("Erro ao quitar pagamento:",W))},f=m=>m.statusPagamento==="pago"?!1:m.statusPagamento==="pendente_pagamento"||m.formaPagamento==="pagar_depois",d=e.filter(m=>{if(u.trim()){const F=u.toLowerCase().trim(),ke=`#${m.numero}`.toLowerCase(),Ve=(m.cliente||"").toLowerCase(),qe=(m.telefoneCliente||"").toLowerCase();if(!(ke.includes(F)||Ve.includes(F)||qe.includes(F)))return!1}if(a==="pagos"&&f(m)||a==="fiado"&&!f(m)||a==="entregues"&&m.status!=="entregue"||a==="cancelados"&&m.status!=="cancelado"||a!=="cancelados"&&m.status==="cancelado")return!1;if(!m.criadoEm)return!0;const M=new Date(m.criadoEm),W=new Date;if(i==="hoje")return M.toDateString()===W.toDateString();if(i==="ontem"){const F=new Date;return F.setDate(W.getDate()-1),M.toDateString()===F.toDateString()}else if(i==="7dias"){const F=new Date;return F.setDate(W.getDate()-7),M>=F}else if(i==="custom"){if(y){const F=new Date(y);if(F.setHours(0,0,0,0),M<F)return!1}if(p){const F=new Date(p);if(F.setHours(23,59,59,999),M>F)return!1}}return!0}),h=d.filter(m=>m.status!=="cancelado"),k=h.filter(m=>!f(m)),b=h.filter(m=>f(m)),N=k.reduce((m,M)=>m+(Number(M.total)||0),0),E=b.reduce((m,M)=>m+(Number(M.total)||0),0),z=h.length,U=z>0?(N+E)/z:0,D=m=>{if(m.formaPagamento==="pagar_depois"||m.statusPagamento==="pendente_pagamento"){const M=m.dataCobranca?new Date(m.dataCobranca).toLocaleDateString():"Sem Data";return m.statusPagamento==="pago"?s.jsxs("span",{className:"badge badge-pronto",children:[s.jsx(kr,{size:12})," Pagar Depois (Quitado)"]}):s.jsxs("span",{className:"badge badge-preparo",children:[s.jsx(is,{size:12})," Pagar Depois (",M,")"]})}return s.jsxs("span",{className:"badge badge-pendente",children:[s.jsx(pi,{size:12})," ",m.formaPagamento?m.formaPagamento.toUpperCase():"PIX"]})};return s.jsxs("div",{className:"vendas-container",children:[s.jsx("style",{children:`
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

        .vendas-filtros-bar {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .filtros-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
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
        }
      `}),s.jsxs("div",{className:"vendas-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Ro,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Faturamento & Histórico de Pedidos Anteriores"})]}),s.jsx("div",{className:"badge badge-pronto",children:s.jsxs("span",{children:[d.length," Registros Encontrados"]})})]}),s.jsxs("div",{className:"vendas-filtros-bar",children:[s.jsxs("div",{className:"filtros-row",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(Ua,{size:18,color:"var(--primary)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda #, cliente ou WhatsApp...",value:u,onChange:m=>c(m.target.value)})]}),s.jsxs("div",{className:"cat-pills",children:[s.jsx("button",{className:`cat-btn ${i==="hoje"?"active":""}`,onClick:()=>o("hoje"),children:"Hoje"}),s.jsx("button",{className:`cat-btn ${i==="ontem"?"active":""}`,onClick:()=>o("ontem"),children:"Ontem"}),s.jsx("button",{className:`cat-btn ${i==="7dias"?"active":""}`,onClick:()=>o("7dias"),children:"Últimos 7 dias"}),s.jsx("button",{className:`cat-btn ${i==="todos"?"active":""}`,onClick:()=>o("todos"),children:"Todos os Períodos"}),s.jsx("button",{className:`cat-btn ${i==="custom"?"active":""}`,onClick:()=>o("custom"),children:"Data Personalizada"})]})]}),i==="custom"&&s.jsxs("div",{className:"filtros-row",style:{background:"var(--app-surface-2)",padding:"0.65rem 0.85rem",borderRadius:"var(--radius-md)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",fontWeight:600},children:[s.jsx(Lo,{size:16,color:"var(--primary)"}),s.jsx("span",{children:"De:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"36px",padding:"0.3rem 0.6rem"},value:y,onChange:m=>v(m.target.value)})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",fontWeight:600},children:[s.jsx("span",{children:"Até:"}),s.jsx("input",{type:"date",className:"form-input",style:{minHeight:"36px",padding:"0.3rem 0.6rem"},value:p,onChange:m=>g(m.target.value)})]})]}),s.jsxs("div",{className:"filtros-row",style:{paddingTop:"0.2rem",borderTop:"1px dashed var(--app-border)"},children:[s.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--app-ink-muted)",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Filtrar por Status:"}),s.jsxs("div",{className:"cat-pills",children:[s.jsx("button",{className:`cat-btn ${a==="todos"?"active":""}`,onClick:()=>l("todos"),children:"Todos os Pedidos"}),s.jsx("button",{className:`cat-btn ${a==="pagos"?"active":""}`,onClick:()=>l("pagos"),children:"Quitados / Pagos"}),s.jsx("button",{className:`cat-btn ${a==="fiado"?"active":""}`,onClick:()=>l("fiado"),children:"Pagar Depois (Fiado)"}),s.jsx("button",{className:`cat-btn ${a==="entregues"?"active":""}`,onClick:()=>l("entregues"),children:"Entregues"}),s.jsx("button",{className:`cat-btn ${a==="cancelados"?"active":""}`,onClick:()=>l("cancelados"),children:"Cancelados"})]})]})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(Vd,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Total Recebido / Pago"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-primary)"},children:["R$ ",N.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"var(--color-attention-bg)",color:"var(--color-attention)"},children:s.jsx(Lo,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Pendente (Pagar Depois)"}),s.jsxs("div",{className:"metric-value",style:{color:"var(--color-attention)"},children:["R$ ",E.toFixed(2)]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",style:{background:"#e6f9f0",color:"#0d8a57"},children:s.jsx(ct,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Comandas Válidas"}),s.jsxs("div",{className:"metric-value",children:[z," comanda(s)"]})]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("div",{className:"metric-icon-box",children:s.jsx($m,{size:26})}),s.jsxs("div",{children:[s.jsx("div",{className:"metric-label",children:"Ticket Médio"}),s.jsxs("div",{className:"metric-value",children:["R$ ",U.toFixed(2)]})]})]})]}),s.jsx("div",{className:"vendas-table-wrapper",children:s.jsxs("table",{className:"vendas-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"40px"}}),s.jsx("th",{children:"Comanda"}),s.jsx("th",{children:"Data / Horário"}),s.jsx("th",{children:"Cliente / Contato"}),s.jsx("th",{children:"Forma Pagamento"}),s.jsx("th",{children:"Valor Total"}),s.jsx("th",{children:"Status Pedido"}),s.jsx("th",{children:"Atendente / Cozinha"}),s.jsx("th",{style:{textAlign:"right"},children:"Ação de Quitação"})]})}),s.jsx("tbody",{children:d.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum pedido encontrado para os filtros selecionados."})}):d.map(m=>{const M=r===m.id,W=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return s.jsxs(Cu.Fragment,{children:[s.jsxs("tr",{className:"row-exp",onClick:()=>j(m.id),children:[s.jsx("td",{style:{textAlign:"center"},children:M?s.jsx(Mo,{size:16,color:"var(--primary)"}):s.jsx(Oo,{size:16,color:"var(--app-ink-muted)"})}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--text-title)"},children:["#",m.numero]})}),s.jsx("td",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:W}),s.jsxs("td",{children:[s.jsx("strong",{style:{color:"var(--primary)"},children:m.cliente}),m.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"2px",fontWeight:600},children:[s.jsx(Do,{size:12}),s.jsx("span",{children:m.telefoneCliente})]})]}),s.jsx("td",{children:D(m)}),s.jsx("td",{children:s.jsxs("strong",{style:{color:"var(--color-primary)"},children:["R$ ",(Number(m.total)||0).toFixed(2)]})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})}),s.jsxs("td",{style:{fontSize:"0.82rem"},children:[s.jsxs("div",{children:["Caixa: ",s.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&s.jsxs("div",{style:{color:"var(--app-ink-muted)"},children:["Cozinha: ",m.preparadoPor]})]}),s.jsx("td",{children:s.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:f(m)?s.jsxs("button",{className:"btn btn-warning",style:{padding:"0.35rem 0.75rem",fontSize:"0.82rem",minHeight:"36px"},onClick:F=>L(F,m.id),children:[s.jsx(kr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ii,{size:15})," Quitado"]})})})]}),M&&s.jsx("tr",{children:s.jsx("td",{colSpan:"9",style:{padding:"0.5rem 1rem",background:"var(--app-surface-2)"},children:s.jsxs("div",{className:"exp-details-box",children:[s.jsxs("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(qd,{size:16,color:"var(--primary)"}),s.jsxs("span",{children:["Itens Lançados na Comanda #",m.numero,":"]})]}),m.itens&&m.itens.length>0?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.5rem",marginTop:"0.3rem"},children:m.itens.map((F,ke)=>s.jsxs("div",{style:{background:"var(--app-surface-1)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--app-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[F.quantidade,"x"]})," ",F.nome,F.observacao&&s.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-obs)"},children:["Obs: ",F.observacao]})]}),s.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--status-pronto)"},children:["R$ ",(F.preco*F.quantidade).toFixed(2)]})]},ke))}):s.jsx("span",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:"Sem detalhes dos itens registrados nesta comanda antiga."})]})})})]},m.id)})})]})}),s.jsx("div",{className:"vendas-mobile-list",children:d.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum pedido encontrado para os filtros selecionados."}):d.map(m=>{const M=r===m.id,W=m.criadoEm?new Date(m.criadoEm).toLocaleString():"Recente";return s.jsxs("div",{className:"venda-card-mobile",onClick:()=>j(m.id),children:[s.jsxs("div",{className:"venda-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--text-title)",fontSize:"0.95rem"},children:["#",m.numero]}),s.jsx("span",{style:{fontWeight:600,color:"var(--primary)",fontSize:"0.9rem"},children:m.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsxs("strong",{style:{color:"var(--color-primary)",fontSize:"0.95rem"},children:["R$ ",(Number(m.total)||0).toFixed(2)]}),M?s.jsx(Mo,{size:16,color:"var(--primary)"}):s.jsx(Oo,{size:16,color:"var(--app-ink-muted)"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.1rem"},children:[s.jsx("div",{children:D(m)}),s.jsx("span",{className:`badge badge-${m.status==="pronto"?"pronto":m.status==="entregue"||m.status==="entrega_parcial"?"entregue":"preparo"}`,children:m.status==="entrega_parcial"?"PARCIAL":m.status.toUpperCase()})]}),M&&s.jsxs("div",{className:"venda-card-details",children:[s.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--app-ink-muted)"},children:["Realizado em: ",s.jsx("strong",{children:W})]}),m.telefoneCliente&&s.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--color-attention)",display:"flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[s.jsx(Do,{size:13}),s.jsxs("span",{children:["Contato / WhatsApp: ",s.jsx("strong",{children:m.telefoneCliente})]})]}),s.jsxs("div",{style:{borderTop:"1px dashed var(--app-border)",paddingTop:"0.4rem",marginTop:"0.2rem"},children:[s.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-title)",marginBottom:"0.3rem"},children:"Itens do Pedido:"}),m.itens&&m.itens.length>0?s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:m.itens.map((F,ke)=>s.jsxs("div",{style:{background:"var(--app-surface-2)",padding:"0.35rem 0.55rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",justifyContent:"space-between"},children:[s.jsxs("span",{children:[s.jsxs("strong",{children:[F.quantidade,"x"]})," ",F.nome," ",F.observacao?`(${F.observacao})`:""]}),s.jsxs("strong",{style:{color:"var(--status-pronto)"},children:["R$ ",(F.preco*F.quantidade).toFixed(2)]})]},ke))}):s.jsx("span",{style:{fontSize:"0.78rem",color:"var(--app-ink-muted)"},children:"Sem itens listados."})]}),s.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--app-ink-muted)",display:"flex",gap:"0.8rem",marginTop:"0.3rem"},children:[s.jsxs("span",{children:["Caixa: ",s.jsx("strong",{children:m.criadoPor||"Caixa"})]}),m.preparadoPor&&s.jsxs("span",{children:["Cozinha: ",s.jsx("strong",{children:m.preparadoPor})]})]}),s.jsx("div",{style:{marginTop:"0.3rem",display:"flex",justifyContent:"flex-end"},children:f(m)?s.jsxs("button",{className:"btn btn-warning",style:{width:"100%",padding:"0.45rem",fontSize:"0.85rem"},onClick:F=>L(F,m.id),children:[s.jsx(kr,{size:14})," Quitar / Marcar Pago"]}):s.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--color-primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ii,{size:15})," Pagamento Confirmado / Quitado"]})})]})]},m.id)})})]})}function rg({operador:e}){const[t,r]=P.useState([]),[n,i]=P.useState(!1),[o,a]=P.useState(!1),[l,u]=P.useState({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),[c,y]=P.useState({}),[v,p]=P.useState(null),g=e&&e.role==="master",[w,j]=P.useState({chavePix:"",tipoChave:"email",nomeBeneficiario:"",cidadeBeneficiario:"SAO PAULO"}),[L,f]=P.useState(!1);P.useEffect(()=>{g&&(k(),d())},[g]);const d=()=>{fetch("/api/pix-config").then(m=>m.json()).then(m=>{m&&m.chavePix&&j(m)}).catch(m=>console.error("Erro ao carregar PIX config:",m))},h=m=>{m.preventDefault(),f(!0),fetch("/api/pix-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}).then(M=>M.json()).then(M=>{f(!1),M&&M.status==="success"?(p("Chave PIX atualizada com sucesso!"),setTimeout(()=>p(null),4e3)):alert(M.error||"Erro ao salvar chave PIX.")}).catch(()=>{f(!1),alert("Erro de conexão ao salvar chave PIX.")})},k=()=>{fetch("/api/users").then(m=>m.json()).then(m=>r(m)).catch(m=>console.error("Erro ao carregar usuários:",m))};if(!g)return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão de Contas"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários."})]});const b=m=>{y(M=>({...M,[m]:!M[m]}))},N=()=>{u({id:"",nome:"",usuario:"",senha:"",role:"cozinha"}),a(!1),i(!0)},E=m=>{u({...m}),a(!0),i(!0)},z=m=>{if(m.preventDefault(),!l.nome.trim()||!l.usuario.trim()||!l.senha.trim()){alert("Por favor, preencha todos os campos obrigatórios!");return}const M=o?`/api/users/${l.id}`:"/api/users";fetch(M,{method:o?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(F=>F.json()).then(F=>{F&&F.status==="success"?(p(o?"Conta atualizada com sucesso!":"Nova conta criada com sucesso!"),i(!1),k(),setTimeout(()=>p(null),4e3)):alert(F.error||"Erro ao salvar usuário.")}).catch(F=>alert("Erro de conexão com o servidor."))},U=(m,M)=>{window.confirm(`Tem certeza que deseja excluir a conta de "${M}"?`)&&fetch(`/api/users/${m}`,{method:"DELETE"}).then(W=>W.json()).then(W=>{W&&W.status==="success"?(p(`Conta de "${M}" excluída com sucesso.`),k(),setTimeout(()=>p(null),4e3)):alert(W.error||"Erro ao excluir conta.")})},D=m=>{switch(m){case"master":return s.jsxs("span",{className:"badge badge-role-master",children:[s.jsx(wm,{size:13})," Master (Admin)"]});case"caixa":return s.jsxs("span",{className:"badge badge-role-caixa",children:[s.jsx(ct,{size:13})," Caixa (Atendente)"]});case"cozinha":return s.jsxs("span",{className:"badge badge-role-cozinha",children:[s.jsx(jn,{size:13})," Cozinha (KDS)"]});case"tv":return s.jsxs("span",{className:"badge badge-role-tv",children:[s.jsx(Fi,{size:13})," Monitor TV"]});default:return s.jsx("span",{className:"badge badge-role-tv",children:m})}};return s.jsxs("div",{className:"usuarios-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"usuarios-header",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Bo,{size:26,color:"var(--primary)"}),s.jsx("span",{children:"Gestão de Contas & Operadores"})]}),s.jsxs("button",{className:"btn btn-primary",onClick:N,children:[s.jsx(Vm,{size:18})," Nova Conta"]})]}),v&&s.jsxs("div",{style:{background:"var(--color-primary-bg)",border:"1px solid var(--color-primary)",color:"var(--color-primary)",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:600},children:[s.jsx($a,{size:18}),s.jsx("span",{children:v})]}),s.jsx("div",{className:"usuarios-table-wrapper",children:s.jsxs("table",{className:"usuarios-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nome Completo"}),s.jsx("th",{children:"Usuário de Login"}),s.jsx("th",{children:"Função / Permissão"}),s.jsx("th",{children:"Senha de Acesso"}),s.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),s.jsx("tbody",{children:t.map(m=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--text-title)"},children:m.nome})}),s.jsx("td",{children:s.jsx("strong",{style:{color:"var(--primary)"},children:m.usuario})}),s.jsx("td",{children:D(m.role)}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.9rem"},children:c[m.id]?m.senha:"••••••••"}),s.jsx("button",{className:"btn btn-secondary",style:{padding:"0.2rem 0.4rem",minHeight:"30px"},onClick:()=>b(m.id),title:"Revelar/Ocultar Senha",children:c[m.id]?s.jsx(Em,{size:14}):s.jsx(zm,{size:14})})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.4rem"},children:[s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px"},onClick:()=>E(m),children:[s.jsx(Dm,{size:14})," Editar"]}),m.usuario!=="admin"&&s.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.4rem 0.6rem",minHeight:"34px",color:"var(--status-urgente)",borderColor:"var(--status-urgente)"},onClick:()=>U(m.id,m.nome),children:[s.jsx(Di,{size:14})," Excluir"]})]})})]},m.id))})]})}),s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"1.25rem"},children:[s.jsxs("h3",{style:{color:"var(--text-title)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Pm,{size:20,color:"var(--primary)"}),s.jsx("span",{children:"Configuração da Chave PIX do Estabelecimento"})]}),s.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginBottom:"1rem"},children:["Esta chave PIX será utilizada para gerar automaticamente o ",s.jsx("strong",{children:"QR Code PIX com valor dinâmico"})," para o cliente no Caixa."]}),s.jsxs("form",{onSubmit:h,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",alignItems:"end"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tipo de Chave PIX *"}),s.jsxs("select",{className:"form-input",value:w.tipoChave,onChange:m=>j({...w,tipoChave:m.target.value}),children:[s.jsx("option",{value:"email",children:"E-mail"}),s.jsx("option",{value:"cpf_cnpj",children:"CPF / CNPJ"}),s.jsx("option",{value:"telefone",children:"Telefone (DDD + Número)"}),s.jsx("option",{value:"aleatoria",children:"Chave Aleatória (EVP)"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Chave PIX *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: festadomorango@gmail.com",value:w.chavePix,onChange:m=>j({...w,chavePix:m.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome do Beneficiário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Festa do Morango",value:w.nomeBeneficiario,onChange:m=>j({...w,nomeBeneficiario:m.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Cidade *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: SAO PAULO",value:w.cidadeBeneficiario,onChange:m=>j({...w,cidadeBeneficiario:m.target.value}),required:!0})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:L,children:L?"Salvando...":"Salvar Chave PIX"})})]})]}),n&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-card",children:[s.jsxs("h3",{style:{color:"var(--text-title)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Er,{size:20,color:"var(--primary)"}),o?"Editar Conta de Acesso":"Cadastrar Nova Conta de Acesso"]}),s.jsxs("form",{onSubmit:z,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Nome Completo do Operador *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: Mariana Santos",value:l.nome,onChange:m=>u({...l,nome:m.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário de Login *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Ex: mariana",value:l.usuario,onChange:m=>u({...l,usuario:m.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha de Acesso *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite a senha...",value:l.senha,onChange:m=>u({...l,senha:m.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Função / Nível de Permissão *"}),s.jsxs("select",{className:"form-input",value:l.role,onChange:m=>u({...l,role:m.target.value}),children:[s.jsx("option",{value:"cozinha",children:"Cozinheiro (Apenas Cozinha KDS + TV)"}),s.jsx("option",{value:"caixa",children:"Atendente Caixa (Caixa + Vendas + KDS + Logs)"}),s.jsx("option",{value:"master",children:"Gerente Master (Acesso Total + Contas + Cardápio)"}),s.jsx("option",{value:"tv",children:"Monitor TV (Apenas Chamada de Balcão)"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[s.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancelar"}),s.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:o?"Atualizar Conta":"Criar Conta"})]})]})]})})]})}function ng({logs:e,operador:t}){const[r,n]=P.useState(""),[i,o]=P.useState("todas"),[a,l]=P.useState(null);if(!(t&&(t.role==="master"||t.role==="caixa")))return s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(Va,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito aos Logs de Auditoria"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Esta tela de auditoria é reservada para perfis Master ou Caixa."})]});const c=p=>{l(g=>g===p?null:p)},y=e.filter(p=>{const g=i==="todas"||p.acao===i,w=r.toLowerCase().trim(),j=!w||String(p.numeroPedido).includes(w)||p.cliente&&p.cliente.toLowerCase().includes(w)||p.usuario&&p.usuario.toLowerCase().includes(w)||p.descricao&&p.descricao.toLowerCase().includes(w);return g&&j}),v=p=>{switch(p){case"criacao":return s.jsxs("span",{className:"badge badge-pendente",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Sm,{size:13})," Criação Caixa"]});case"preparo":return s.jsxs("span",{className:"badge badge-preparo",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(jn,{size:13})," Em Preparo"]});case"pronto":return s.jsxs("span",{className:"badge badge-pronto",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ba,{size:13})," Pronto / Chamada TV"]});case"entregue":return s.jsxs("span",{className:"badge badge-entregue",style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx($a,{size:13})," Entregue"]});default:return s.jsx("span",{className:"badge badge-entregue",children:p})}};return s.jsxs("div",{className:"logs-container",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"logs-topbar",children:[s.jsxs("div",{className:"view-title",style:{margin:0},children:[s.jsx(Io,{size:24,color:"var(--primary)"}),s.jsx("span",{children:"Logs de Auditoria"})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ua,{size:16,color:"var(--app-ink-muted)"}),s.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar comanda, cliente ou operador...",value:r,onChange:p=>n(p.target.value)})]})]}),s.jsxs("div",{className:"logs-pills-bar",children:[s.jsxs("button",{className:`cat-pill-btn ${i==="todas"?"active":""}`,onClick:()=>o("todas"),children:["Todos (",e.length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="criacao"?"active":""}`,onClick:()=>o("criacao"),children:["Criação (",e.filter(p=>p.acao==="criacao").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="preparo"?"active":""}`,onClick:()=>o("preparo"),children:["Preparo (",e.filter(p=>p.acao==="preparo").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="pronto"?"active":""}`,onClick:()=>o("pronto"),children:["Chamada (",e.filter(p=>p.acao==="pronto").length,")"]}),s.jsxs("button",{className:`cat-pill-btn ${i==="entregue"?"active":""}`,onClick:()=>o("entregue"),children:["Entregas (",e.filter(p=>p.acao==="entregue").length,")"]})]}),s.jsx("div",{className:"logs-table-wrapper",children:s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Horário"}),s.jsx("th",{children:"Operador"}),s.jsx("th",{children:"Ação"}),s.jsx("th",{children:"Comanda / Cliente"}),s.jsx("th",{children:"Descrição & Detalhes dos Itens / Valores"})]})}),s.jsx("tbody",{children:y.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"2rem 1rem",color:"var(--app-ink-muted)"},children:"Nenhum registro encontrado."})}):y.map(p=>{const g=new Date(p.timestamp),w=`${g.toLocaleDateString()} ${g.toLocaleTimeString()}`;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"log-time",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(is,{size:13}),s.jsx("span",{children:w})]})}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontWeight:600,color:"var(--text-title)",whiteSpace:"nowrap"},children:[s.jsx(Er,{size:14,color:"var(--primary)"}),s.jsx("span",{children:p.usuario})]})}),s.jsx("td",{children:v(p.acao)}),s.jsxs("td",{children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:["#",p.numeroPedido]}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--app-ink-muted)",marginLeft:"6px"},children:["(",p.cliente,")"]})]}),s.jsxs("td",{children:[s.jsx("div",{style:{fontSize:"0.88rem",color:"var(--app-ink)",fontWeight:600},children:p.descricao}),p.itens&&Array.isArray(p.itens)&&p.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.4rem"},children:p.itens.map((j,L)=>s.jsxs("div",{className:"item-chip",children:[s.jsx(Hd,{size:12,color:"var(--status-pronto)"}),s.jsxs("strong",{style:{color:"var(--primary)"},children:[j.quantidade,"x"]}),s.jsx("span",{children:j.nome}),s.jsxs("span",{style:{color:"var(--status-pronto)",fontWeight:600},children:["(R$ ",(j.preco*j.quantidade).toFixed(2),")"]}),j.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)",fontSize:"0.75rem"},children:["[",j.observacao,"]"]})]},L))})]})]},p.id)})})]})}),s.jsx("div",{className:"logs-mobile-list",children:y.length===0?s.jsx("div",{style:{background:"var(--app-surface-1)",padding:"2rem",textAlign:"center",color:"var(--app-ink-muted)",borderRadius:"var(--radius-md)",border:"1px solid var(--app-border)"},children:"Nenhum log encontrado."}):y.map(p=>{const g=new Date(p.timestamp),w=g.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),j=a===p.id;return s.jsxs("div",{className:"log-card-mobile",onClick:()=>c(p.id),children:[s.jsxs("div",{className:"log-card-summary",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)",fontSize:"0.95rem"},children:["#",p.numeroPedido]}),s.jsx("span",{style:{fontWeight:600,color:"var(--text-title)",fontSize:"0.9rem"},children:p.cliente})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[v(p.acao),s.jsx("span",{className:"log-time",style:{fontSize:"0.78rem"},children:w}),j?s.jsx(Mo,{size:16,color:"var(--app-ink-muted)"}):s.jsx(Oo,{size:16,color:"var(--app-ink-muted)"})]})]}),j&&s.jsxs("div",{className:"log-card-details",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--app-ink-muted)"},children:[s.jsx(Er,{size:13,color:"var(--primary)"}),s.jsxs("span",{children:["Operador: ",s.jsx("strong",{children:p.usuario})]}),s.jsxs("span",{style:{marginLeft:"auto"},children:[g.toLocaleDateString()," ",g.toLocaleTimeString()]})]}),s.jsx("div",{style:{fontSize:"0.85rem",color:"var(--app-ink)",fontWeight:600,marginTop:"0.2rem"},children:p.descricao}),p.itens&&Array.isArray(p.itens)&&p.itens.length>0&&s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginTop:"0.3rem"},children:p.itens.map((L,f)=>s.jsxs("div",{className:"item-chip",style:{fontSize:"0.78rem"},children:[s.jsxs("strong",{style:{color:"var(--primary)"},children:[L.quantidade,"x"]})," ",L.nome," (R$ ",(L.preco*L.quantidade).toFixed(2),")",L.observacao&&s.jsxs("span",{style:{color:"var(--text-obs)"},children:["[",L.observacao,"]"]})]},f))})]})]},p.id)})})]})}const ie=di(window.location.origin,{transports:["websocket","polling"]});function ig(){const[e,t]=P.useState("caixa"),[r,n]=P.useState(!1),[i,o]=P.useState(()=>localStorage.getItem("tema_lanchonete")||"claro");P.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),document.body.setAttribute("data-theme",i)},[i]);const[a,l]=P.useState(()=>{try{const x=localStorage.getItem("operador_lanchonete");return x?JSON.parse(x):null}catch{return null}}),[u,c]=P.useState(""),[y,v]=P.useState(""),[p,g]=P.useState(null),[w,j]=P.useState(!1),[L,f]=P.useState([]),[d,h]=P.useState([]),[k,b]=P.useState([]),[N,E]=P.useState(null);P.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("tema_lanchonete",i)},[i]);const z=()=>{o(x=>x==="escuro"?"claro":"escuro")};P.useEffect(()=>{fetch("/api/logs").then(x=>x.json()).then(x=>b(x)).catch(x=>console.error("Erro ao buscar logs:",x))},[]);const U=x=>{if(x.preventDefault(),g(null),!u.trim()||!y.trim()){g("Preencha usuário e senha.");return}j(!0),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:u.trim(),senha:y.trim()})}).then(T=>T.json()).then(T=>{if(j(!1),T&&T.status==="success"){const V=T.user;l(V),localStorage.setItem("operador_lanchonete",JSON.stringify(V)),V.role==="cozinha"?t("cozinha"):V.role==="tv"?t("chamada"):t("caixa")}else g(T.error||"Credenciais inválidas.")}).catch(T=>{j(!1),g("Erro de conexão com o servidor.")})},D=()=>{l(null),localStorage.removeItem("operador_lanchonete"),c(""),v(""),g(null)};P.useEffect(()=>(ie.on("connect",()=>{console.log("Conectado ao servidor Socket.io"),n(!0)}),ie.on("disconnect",()=>{console.log("Desconectado do servidor Socket.io"),n(!1)}),ie.on("pedidos_iniciais",x=>{f(Array.isArray(x)?x:[])}),ie.on("cardapio_inicial",x=>{h(Array.isArray(x)?x:x&&Array.isArray(x.produtos)?x.produtos:[])}),ie.on("novo_pedido_criado",x=>{f(T=>[x,...T.filter(V=>V.id!==x.id)])}),ie.on("status_pedido_atualizado",x=>{f(T=>T.map(V=>V.id===x.id?x:V))}),ie.on("pedido_chamado",x=>{E(x)}),ie.on("cardapio_atualizado",x=>{h(Array.isArray(x)?x:x&&Array.isArray(x.produtos)?x.produtos:[])}),ie.on("novo_log_auditoria",x=>{b(T=>[x,...T.filter(V=>V.id!==x.id)])}),()=>{ie.off("connect"),ie.off("disconnect"),ie.off("pedidos_iniciais"),ie.off("cardapio_inicial"),ie.off("novo_pedido_criado"),ie.off("status_pedido_atualizado"),ie.off("pedido_chamado"),ie.off("cardapio_atualizado"),ie.off("novo_log_auditoria")}),[]);const m=(x,T)=>{ie.emit("criar_pedido",{...x,criadoPor:a?`${a.nome}`:"Caixa"},T)},M=(x,T)=>{ie.emit("mudar_status_pedido",{id:x,status:T,preparadoPor:a?`${a.nome}`:"Cozinha"})},W=(x,T,V)=>{f(O=>O.map(me=>{if(me.id!==x)return me;const ot=(me.itens||[]).map((at,Lr)=>{if(Lr!==T)return at;const Yd=V!==void 0?V:!at.entregue;return{...at,entregue:Yd}}),En=ot.reduce((at,Lr)=>at+(Lr.quantidade||1),0),qa=ot.filter(at=>at.entregue).reduce((at,Lr)=>at+(Lr.quantidade||1),0);let zn=me.status;return qa>=En?zn="entregue":qa>0?zn="entrega_parcial":(me.status==="entregue"||me.status==="entrega_parcial")&&(zn="em_preparo"),{...me,itens:ot,status:zn}})),ie.emit("alternar_item_entregue",{orderId:x,itemIndex:T,entregue:V,operadorNome:a?`${a.nome}`:"Atendente"}),fetch(`/api/orders/${x}/itens/${T}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({entregue:V,operadorNome:a?`${a.nome}`:"Atendente"})}).then(O=>O.ok?O.json():null).then(O=>{O&&O.order&&f(me=>me.map(ot=>ot.id===O.order.id?O.order:ot))}).catch(O=>console.error("Erro ao alternar item:",O))},F=x=>{fetch("/api/menu/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(T=>T.json()).catch(T=>console.error("Erro ao salvar produto:",T))},ke=x=>{fetch(`/api/menu/produto/${x}`,{method:"DELETE"}).then(T=>T.json()).catch(T=>console.error("Erro ao excluir produto:",T))},Ve=x=>{fetch(`/api/menu/produto/${x}/disponivel`,{method:"PATCH"}).then(T=>T.json()).catch(T=>console.error("Erro ao alterar disponibilidade:",T))},qe=x=>{fetch("/api/menu/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(T=>T.json()).catch(T=>console.error("Erro ao salvar categoria:",T))},_=x=>fetch(`/api/menu/categoria/${x}`,{method:"DELETE"}).then(T=>T.json());if(!a)return s.jsxs("div",{className:"login-gate-screen",children:[s.jsx("style",{children:`
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
        `}),s.jsxs("div",{className:"login-gate-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("div",{className:"login-brand",children:s.jsxs("div",{children:[s.jsx("div",{className:"login-brand-title",children:"Festa do Morango"}),s.jsx("div",{className:"login-brand-subtitle",children:"Desbravadores Apocalipse"})]})}),s.jsx("button",{className:"theme-toggle-btn",onClick:z,title:"Alternar Tema",children:i==="escuro"?s.jsx(cu,{size:16,color:"var(--status-preparo)"}):s.jsx(au,{size:16,color:"var(--primary)"})})]}),p&&s.jsxs("div",{style:{background:"rgba(250, 15, 0, 0.15)",border:"1px solid var(--primary)",color:"#FF5247",padding:"0.75rem",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:600},children:[s.jsx(Um,{size:18}),s.jsx("span",{children:p})]}),s.jsxs("form",{onSubmit:U,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Usuário *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"Digite seu usuário...",value:u,onChange:x=>c(x.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Senha *"}),s.jsx("input",{type:"password",className:"form-input",placeholder:"Digite sua senha...",value:y,onChange:x=>v(x.target.value),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:w,style:{padding:"0.9rem",fontSize:"1.05rem",minHeight:"50px",marginTop:"0.5rem"},children:[w?"Autenticando...":"Entrar no Sistema"," ",s.jsx($d,{size:18})]})]})]})]});const I=a.role==="master"||a.role==="caixa",B=a.role==="master",S=a.role==="master",$=a.role==="master"||a.role==="caixa",ne=a.role==="master"||a.role==="caixa";return s.jsxs("div",{className:"app-container",children:[s.jsxs("header",{className:"app-header",children:[s.jsx("div",{className:"brand-logo",children:s.jsxs("div",{children:[s.jsx("span",{style:{display:"block",lineHeight:1.1},children:"Festa do Morango"}),s.jsx("div",{className:"brand-logo-subtitle",style:{fontSize:"0.72rem",color:"var(--primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",marginTop:"2px"},children:"Desbravadores Apocalipse"})]})}),s.jsxs("nav",{className:"nav-tabs",children:[I&&s.jsxs("button",{className:`nav-btn ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(ct,{size:18})," Caixa"]}),s.jsxs("button",{className:`nav-btn ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(jn,{size:18})," Cozinha (KDS)"]}),s.jsxs("button",{className:`nav-btn ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Fi,{size:18})," Chamada TV"]}),$&&s.jsxs("button",{className:`nav-btn ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Ro,{size:18})," Vendas"]}),ne&&s.jsxs("button",{className:`nav-btn ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Io,{size:18})," Logs"]}),B&&s.jsxs("button",{className:`nav-btn ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(zr,{size:18})," Cardápio"]}),S&&s.jsxs("button",{className:`nav-btn ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Bo,{size:18})," Contas"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"user-badge-btn",onClick:D,title:`Operador: ${a.nome} (${a.role.toUpperCase()}) - Clique para sair`,children:[s.jsx(Er,{size:15,style:{flexShrink:0}}),s.jsx("span",{className:"user-badge-name",children:a.nome}),s.jsx(Tm,{size:13,style:{flexShrink:0,marginLeft:"2px"}})]}),s.jsx("button",{className:"theme-toggle-btn",onClick:z,title:"Alternar entre Tema Claro e Escuro",children:i==="escuro"?s.jsxs(s.Fragment,{children:[s.jsx(cu,{size:16,color:"var(--status-preparo)"}),s.jsx("span",{className:"theme-label",children:"Claro"})]}):s.jsxs(s.Fragment,{children:[s.jsx(au,{size:16,color:"var(--blue-link)"}),s.jsx("span",{className:"theme-label",children:"Escuro"})]})}),s.jsxs("div",{className:"socket-status",children:[s.jsx("div",{className:`status-dot ${r?"connected":"disconnected"}`}),r?s.jsxs("span",{className:"socket-status-text",style:{color:"var(--status-pronto)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Qm,{size:14})," Online"]}):s.jsxs("span",{className:"socket-status-text",style:{color:"var(--primary)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Wm,{size:14})," Conectando..."]})]})]})]}),s.jsxs("main",{className:"main-content",children:[e==="caixa"&&(I?s.jsx(Ym,{menu:d,operador:a,onEnviarPedido:m}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ou,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito ao Caixa"}),s.jsxs("p",{style:{marginTop:"0.5rem"},children:["Sua conta (",a.role,") tem acesso apenas para preparar pedidos e chamar no balcão."]})]})),e==="cozinha"&&s.jsx(Gm,{pedidos:L,operador:a,onMudarStatus:M,onAlternarItemEntregue:W}),e==="chamada"&&s.jsx(Zm,{pedidos:L,ultimoPedidoChamado:N,onMudarStatus:M,onAlternarItemEntregue:W}),e==="vendas"&&s.jsx(tg,{pedidos:L,operador:a}),e==="logs"&&s.jsx(ng,{logs:k,operador:a}),e==="cardapio"&&(B?s.jsx(eg,{menu:d,onSalvarProduto:F,onExcluirProduto:ke,onToggleDisponivel:Ve,onSalvarCategoria:qe,onExcluirCategoria:_}):s.jsxs("div",{style:{background:"var(--app-surface-1)",border:"1px solid var(--app-border)",borderRadius:"var(--radius-lg)",padding:"3rem",textAlign:"center",color:"var(--app-ink-muted)"},children:[s.jsx(ou,{size:48,color:"var(--primary)",style:{marginBottom:"1rem"}}),s.jsx("h2",{style:{color:"var(--text-title)"},children:"Acesso Restrito à Gestão do Cardápio"}),s.jsx("p",{style:{marginTop:"0.5rem"},children:"Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio."})]})),e==="usuarios"&&s.jsx(rg,{operador:a})]}),s.jsx("nav",{className:"mobile-bottom-nav",children:s.jsxs("div",{className:"mobile-nav-items",children:[I&&s.jsxs("button",{className:`mobile-nav-item ${e==="caixa"?"active":""}`,onClick:()=>t("caixa"),children:[s.jsx(ct,{size:20}),s.jsx("span",{children:"Caixa"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="cozinha"?"active":""}`,onClick:()=>t("cozinha"),children:[s.jsx(jn,{size:20}),s.jsx("span",{children:"Cozinha"})]}),s.jsxs("button",{className:`mobile-nav-item ${e==="chamada"?"active":""}`,onClick:()=>t("chamada"),children:[s.jsx(Fi,{size:20}),s.jsx("span",{children:"TV Balcão"})]}),$&&s.jsxs("button",{className:`mobile-nav-item ${e==="vendas"?"active":""}`,onClick:()=>t("vendas"),children:[s.jsx(Ro,{size:20}),s.jsx("span",{children:"Vendas"})]}),ne&&s.jsxs("button",{className:`mobile-nav-item ${e==="logs"?"active":""}`,onClick:()=>t("logs"),children:[s.jsx(Io,{size:20}),s.jsx("span",{children:"Logs"})]}),B&&s.jsxs("button",{className:`mobile-nav-item ${e==="cardapio"?"active":""}`,onClick:()=>t("cardapio"),children:[s.jsx(zr,{size:20}),s.jsx("span",{children:"Cardápio"})]}),S&&s.jsxs("button",{className:`mobile-nav-item ${e==="usuarios"?"active":""}`,onClick:()=>t("usuarios"),children:[s.jsx(Bo,{size:20}),s.jsx("span",{children:"Contas"})]})]})})]})}Ls.createRoot(document.getElementById("root")).render(s.jsx(Cu.StrictMode,{children:s.jsx(ig,{})}));
