!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(14),i=n(15),a=n(16),u=(r=a)&&r.__esModule?r:{default:r};var l=(0,i.createLogger)(),c=(0,o.createStore)(function(e,t){return e},(0,o.applyMiddleware)(u.default,l));t.default=c},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";c(n(5));var r=c(n(6)),o=c(n(7)),i=c(n(0)),a=n(3),u=n(8),l=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)();s.engine("mustache",(0,o.default)()),s.set("views","./views"),s.set("view engine","mustache"),s.use("/assets/scripts",r.default.static("dist/scripts")),s.use("/assets/styles",r.default.static("dist/styles")),s.get("/*",function(e,t){var n=(0,u.renderToString)(i.default.createElement(a.StaticRouter,{location:e.url,context:{}},i.default.createElement(l.default,null)));t.render("app.mustache",{body:n,title:"Live TV Streaming"})}),s.listen(3e3,function(){return console.log("Listening on port 3000!")})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("mustache-express")},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";e.exports=n(10)},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(11),i=n(0),a=n(12);function u(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;(e=Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var l="function"==typeof Symbol&&Symbol.for,c=l?Symbol.for("react.portal"):60106,s=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,d=l?Symbol.for("react.provider"):60109,h=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.concurrent_mode"):60111,m=l?Symbol.for("react.forward_ref"):60112,v=l?Symbol.for("react.suspense"):60113,b=l?Symbol.for("react.memo"):60115,w=l?Symbol.for("react.lazy"):60116;function g(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case y:return"ConcurrentMode";case s:return"Fragment";case c:return"Portal";case p:return"Profiler";case f:return"StrictMode";case v:return"Suspense"}if("object"===(void 0===e?"undefined":r(e)))switch(e.$$typeof){case h:return"Context.Consumer";case d:return"Context.Provider";case m:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case b:return g(e.type);case w:if(e=1===e._status?e._result:null)return g(e)}return null}var x=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;x.hasOwnProperty("ReactCurrentDispatcher")||(x.ReactCurrentDispatcher={current:null});var k={};function _(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var S=new Uint16Array(16),O=0;15>O;O++)S[O]=O+1;S[15]=0;var E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C=Object.prototype.hasOwnProperty,P={},F={};function j(e){return!!C.call(F,e)||!C.call(P,e)&&(E.test(e)?F[e]=!0:(P[e]=!0,!1))}function M(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(void 0===t?"undefined":r(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new I(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new I(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new I(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new I(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new I(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new I(e,3,!0,e,null)}),["capture","download"].forEach(function(e){D[e]=new I(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){D[e]=new I(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){D[e]=new I(e,5,!1,e.toLowerCase(),null)});var N=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,R);D[t]=new I(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,R);D[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,R);D[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new I(e,1,!1,e.toLowerCase(),null)});var T=/["'&<>]/;function z(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=T.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var L=null,V=null,q=null,A=!1,W=!1,U=null,$=0;function H(){return null===L&&u("307"),L}function G(){return 0<$&&u("312"),{memoizedState:null,queue:null,next:null}}function Z(){return null===q?null===V?(A=!1,V=q=G()):(A=!0,q=V):null===q.next?(A=!1,q=q.next=G()):(A=!0,q=q.next),q}function B(e,t,n,r){for(;W;)W=!1,$+=1,q=null,n=e(t,r);return V=L=null,$=0,q=U=null,n}function X(e,t){return"function"==typeof t?t(e):t}function Y(e,t,n){if(L=H(),q=Z(),A){var r=q.queue;if(t=r.dispatch,null!==U&&void 0!==(n=U.get(r))){U.delete(r),r=q.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return q.memoizedState=r,[r,t]}return[q.memoizedState,t]}return e=e===X?"function"==typeof t?t():t:void 0!==n?n(t):t,q.memoizedState=e,e=(e=q.queue={last:null,dispatch:null}).dispatch=function(e,t,n){if(25>$||u("301"),e===L)if(W=!0,e={action:n,next:null},null===U&&(U=new Map),void 0===(n=U.get(t)))U.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}.bind(null,L,e),[q.memoizedState,e]}function J(){}var K=0,Q={readContext:function(e){var t=K;return _(e,t),e[t]},useContext:function(e){H();var t=K;return _(e,t),e[t]},useMemo:function(e,t){if(L=H(),t=void 0===t?null:t,null!==(q=Z())){var n=q.memoizedState;if(null!==n&&null!==t){e:{var r=n[1];if(null===r)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++){var i=t[o],a=r[o];if((i!==a||0===i&&1/i!=1/a)&&(i==i||a==a)){r=!1;break e}}r=!0}}if(r)return n[0]}}return e=e(),q.memoizedState=[e,t],e},useReducer:Y,useRef:function(e){L=H();var t=(q=Z()).memoizedState;return null===t?(e={current:e},q.memoizedState=e):t},useState:function(e){return Y(X,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:J,useEffect:J,useDebugValue:J},ee={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function te(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ne={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},re=o({menuitem:!0},ne),oe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ie=["Webkit","ms","Moz","O"];Object.keys(oe).forEach(function(e){ie.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oe[t]=oe[e]})});var ae=/([A-Z])/g,ue=/^ms-/,le=i.Children.toArray,ce=x.ReactCurrentDispatcher,se={listing:!0,pre:!0,textarea:!0},fe=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,pe={},de={};var he=Object.prototype.hasOwnProperty,ye={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function me(e,t){void 0===e&&u("152",g(t)||"Component")}function ve(e,t,n){function a(i,a){var l=function(e,t,n){var o=e.contextType;if("object"===(void 0===o?"undefined":r(o))&&null!==o)return _(o,n),o[n];if(e=e.contextTypes){for(var i in n={},e)n[i]=t[i];t=n}else t=k;return t}(a,t,n),c=[],s=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){s=!0,c=[t]},enqueueSetState:function(e,t){if(null===c)return null;c.push(t)}},p=void 0;if(a.prototype&&a.prototype.isReactComponent){if(p=new a(i.props,l,f),"function"==typeof a.getDerivedStateFromProps){var d=a.getDerivedStateFromProps.call(null,i.props,p.state);null!=d&&(p.state=o({},p.state,d))}}else if(L={},p=a(i.props,l,f),null==(p=B(a,i.props,p,l))||null==p.render)return void me(e=p,a);if(p.props=i.props,p.context=l,p.updater=f,void 0===(f=p.state)&&(p.state=f=null),"function"==typeof p.UNSAFE_componentWillMount||"function"==typeof p.componentWillMount)if("function"==typeof p.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.componentWillMount(),"function"==typeof p.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.UNSAFE_componentWillMount(),c.length){f=c;var h=s;if(c=null,s=!1,h&&1===f.length)p.state=f[0];else{d=h?f[0]:p.state;var y=!0;for(h=h?1:0;h<f.length;h++){var m=f[h];null!=(m="function"==typeof m?m.call(p,d,i.props,l):m)&&(y?(y=!1,d=o({},d,m)):o(d,m))}p.state=d}}else c=null;if(me(e=p.render(),a),i=void 0,"function"==typeof p.getChildContext&&"object"===(void 0===(l=a.childContextTypes)?"undefined":r(l)))for(var v in i=p.getChildContext())v in l||u("108",g(a)||"Unknown",v);i&&(t=o({},t,i))}for(;i.isValidElement(e);){var l=e,c=l.type;if("function"!=typeof c)break;a(l,c)}return{child:e,context:t}}var be=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");i.isValidElement(t)?t.type!==s?t=[t]:(t=t.props.children,t=i.isValidElement(t)?[t]:le(t)):t=le(t),t={type:null,domNamespace:ee.html,children:t,childIndex:0,context:k,footer:""};var r=S[0];if(0===r){var o=S,a=2*(r=o.length);65536>=a||u("304");var l=new Uint16Array(a);for(l.set(o),(S=l)[0]=r+1,o=r;o<a-1;o++)S[o]=o+1;S[a-1]=0}else S[0]=S[r];this.threadID=r,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;S[e]=S[0],S[0]=e}},e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;_(n,r);var o=n[r];this.contextStack[t]=n,this.contextValueStack[t]=o,n[r]=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},e.prototype.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},e.prototype.read=function(e){if(this.exhausted)return null;var t=K;K=this.threadID;var n=ce.current;ce.current=Q;try{for(var r=[""],o=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;S[i]=S[0],S[0]=i;break}var a=this.stack[this.stack.length-1];if(o||a.childIndex>=a.children.length){var l=a.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===a.type)this.currentSelectValue=null;else if(null!=a.type&&null!=a.type.type&&a.type.type.$$typeof===d)this.popProvider(a.type);else if(a.type===v){this.suspenseDepth--;var c=r.pop();if(o){o=!1;var s=a.fallbackFrame;s||u("303"),this.stack.push(s);continue}r[this.suspenseDepth]+=c}r[this.suspenseDepth]+=l}else{var f=a.children[a.childIndex++],p="";try{p+=this.render(f,a.context,a.domNamespace)}catch(e){throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=p}}return r[0]}finally{ce.current=n,K=t}},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?z(n):this.previousWasTextNode?"\x3c!-- --\x3e"+z(n):(this.previousWasTextNode=!0,z(n));if(e=(t=ve(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!i.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var a=e.$$typeof;a===c&&u("257"),u("258",a.toString())}return e=le(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(a=e.type))return this.renderDOM(e,t,n);switch(a){case f:case y:case p:case s:return e=le(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case v:u("294")}if("object"===(void 0===a?"undefined":r(a))&&null!==a)switch(a.$$typeof){case m:L={};var l=a.render(e.props,e.ref);return l=B(a.render,e.props,l,e.ref),l=le(l),this.stack.push({type:null,domNamespace:n,children:l,childIndex:0,context:t,footer:""}),"";case b:return e=[i.createElement(a.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case d:return n={type:e,domNamespace:n,children:a=le(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case h:a=e.type,l=e.props;var g=this.threadID;return _(a,g),a=le(l.children(a[g])),this.stack.push({type:e,domNamespace:n,children:a,childIndex:0,context:t,footer:""}),"";case w:u("295")}u("130",null==a?a:void 0===a?"undefined":r(a),"")},e.prototype.renderDOM=function(e,t,n){var a=e.type.toLowerCase();n===ee.html&&te(a),pe.hasOwnProperty(a)||(fe.test(a)||u("65",a),pe[a]=!0);var l=e.props;if("input"===a)l=o({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===a){var c=l.value;if(null==c){c=l.defaultValue;var s=l.children;null!=s&&(null!=c&&u("92"),Array.isArray(s)&&(1>=s.length||u("93"),s=s[0]),c=""+s),null==c&&(c="")}l=o({},l,{value:void 0,children:""+c})}else if("select"===a)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=o({},l,{value:void 0});else if("option"===a){s=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return i.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(l.children);if(null!=s){var p=null!=l.value?l.value+"":f;if(c=!1,Array.isArray(s)){for(var d=0;d<s.length;d++)if(""+s[d]===p){c=!0;break}}else c=""+s===p;l=o({selected:void 0,children:void 0},l,{selected:c,children:f})}}for(x in(c=l)&&(re[a]&&(null!=c.children||null!=c.dangerouslySetInnerHTML)&&u("137",a,""),null!=c.dangerouslySetInnerHTML&&(null!=c.children&&u("60"),"object"===r(c.dangerouslySetInnerHTML)&&"__html"in c.dangerouslySetInnerHTML||u("61")),null!=c.style&&"object"!==r(c.style)&&u("62","")),c=l,s=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type,c)if(he.call(c,x)){var h=c[x];if(null!=h){if("style"===x){d=void 0;var y="",m="";for(d in h)if(h.hasOwnProperty(d)){var v=0===d.indexOf("--"),b=h[d];if(null!=b){var w=d;if(de.hasOwnProperty(w))w=de[w];else{var g=w.replace(ae,"-$1").toLowerCase().replace(ue,"-ms-");w=de[w]=g}y+=m+w+":",m=d,y+=v=null==b||"boolean"==typeof b||""===b?"":v||"number"!=typeof b||0===b||oe.hasOwnProperty(m)&&oe[m]?(""+b).trim():b+"px",m=";"}}h=y||null}d=null;e:if(v=a,b=c,-1===v.indexOf("-"))v="string"==typeof b.is;else switch(v){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":v=!1;break e;default:v=!0}v?ye.hasOwnProperty(x)||(d=j(d=x)&&null!=h?d+'="'+z(h)+'"':""):(v=x,d=h,h=D.hasOwnProperty(v)?D[v]:null,(b="style"!==v)&&(b=null!==h?0===h.type:2<v.length&&("o"===v[0]||"O"===v[0])&&("n"===v[1]||"N"===v[1])),b||M(v,d,h,!1)?d="":null!==h?(v=h.attributeName,d=3===(h=h.type)||4===h&&!0===d?v+'=""':v+'="'+z(d)+'"'):d=j(v)?v+'="'+z(d)+'"':""),d&&(p+=" "+d)}}s||f&&(p+=' data-reactroot=""');var x=p;c="",ne.hasOwnProperty(a)?x+="/>":(x+=">",c="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=z(s);break e}s=null}return null!=s?(l=[],se[a]&&"\n"===s.charAt(0)&&(x+="\n"),x+=s):l=le(l.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?te(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:a,children:l,childIndex:0,context:t,footer:c}),this.previousWasTextNode=!1,x},e}();var we=function(e){function t(n,o){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");var i=e.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return(i=!i||"object"!==(void 0===i?"undefined":r(i))&&"function"!=typeof i?this:i).partialRenderer=new be(n,o),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._destroy=function(e,t){this.partialRenderer.destroy(),t(e)},t.prototype._read=function(e){try{this.push(this.partialRenderer.read(e))}catch(e){this.destroy(e)}},t}(a.Readable),ge={renderToString:function(e){e=new be(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new be(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(e){return new we(e,!1)},renderToStaticNodeStream:function(e){return new we(e,!0)},version:"16.8.3"},xe={default:ge},ke=xe&&ge||xe;e.exports=ke.default||ke},function(e,t){e.exports=require("object-assign")},function(e,t){e.exports=require("stream")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(0)),i=(n(1),n(3)),a=(c(n(2)),c(n(17))),u=c(n(20)),l=c(n(21));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(i.Switch,null,o.default.createElement(i.Route,{exact:!0,path:"/guide",component:a.default}),o.default.createElement(i.Route,{path:"/watch/live/:channelId",component:u.default}),o.default.createElement(i.Route,{path:"/watch/video/:videoId",component:l.default}))}}]),t}();t.default=s},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-logger")},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(18));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"guide"},o.default.createElement("div",{className:"guide-list"},[{id:2292,title:"Fox",logo:"fox.png"}].map(function(e,t){return o.default.createElement(i.default,{channel:e,key:t})})))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},u=(n(1),n(19));n(2);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){console.log("mounted 1")}},{key:"handleGuideItemClick",value:function(){alert("clicked"),console.log("working"),this.props.watch(data),this.props.history.push("/watch/live/"+this.props.channel.id)}},{key:"render",value:function(){return a.default.createElement("a",{className:"guide-item",onClick:this.handleGuideItemClick},a.default.createElement("div",{className:"guide-item-logo"},a.default.createElement("img",{src:this.props.channel.logo,alt:this.props.channel.title})))}}]),t}();t.default=(0,u.withRouter)(l)},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},u=n(1),l=n(2);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.videoRef=a.default.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"handlePause",value:function(e){}},{key:"handlePlay",value:function(e){}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"watch"},a.default.createElement("video",{className:"watch-video",src:this.props.source,ref:this.videoRef,onPause:function(e){return handlePause(e)},onPlay:function(e){return handlePlay(e)}}),a.default.createElement("div",{className:"watch-controls"},this.props.isPaused?a.default.createElement("div",{className:"control-play",onClick:function(t){return e.videoRef.play()}},"Play"):a.default.createElement("div",{className:"control-pause",onClick:function(t){return e.videoRef.pause()}},"Pause")))}}]),t}();t.default=(0,u.connect)(function(e){return{source:e.watch.source,isPaused:e.watch.isPaused}},function(e){return{play:function(){return e((0,l.play)())},pause:function(){return e((0,l.pause)())}}})(c)}]);