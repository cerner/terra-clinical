/*! For license information please see 6898-3e15280b1830c91536bd.js.LICENSE.txt */
(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[6898],{39275:function(e){"use strict";var t=function(e,t){return e===t};e.exports=function(e,n){var r;void 0===n&&(n=t);var o,a=[],i=!1,s=function(e,t){return n(e,a[t])};return function(){for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return i&&r===this&&n.length===a.length&&n.every(s)||(o=e.apply(this,n),i=!0,r=this,a=n),o}}},64990:function(e,t,n){"use strict";n.r(t),t.default={"content-container-static":"ContentContainer-module__content-container-static___hjJ3t",main:"ContentContainer-module__main___I4lfu",normalizer:"ContentContainer-module__normalizer___-w3dc","content-container-fill":"ContentContainer-module__content-container-fill___gr0MO",header:"ContentContainer-module__header___WO2ZW",footer:"ContentContainer-module__footer___DEKeE"}},50289:function(e,t,n){"use strict";n.r(t),t.default={scroll:"Scroll-module__scroll___kNgrb"}},85294:function(e,t,n){e.exports=function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}function r(e){return function(){return e}}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e};var a=o,i=function(e){};function s(e,t,n,r,o,a,s,u){if(i(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,s,u],f=0;(l=new Error(t.replace(/%s/g,(function(){return c[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}i=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};var u=s,l=a,c=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};l=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];c.apply(void 0,[t].concat(r))}};var f=l,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function y(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function g(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var m=g()?Object.assign:function(e,t){for(var n,r,o=y(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))d.call(n,i)&&(o[i]=n[i]);if(p){r=p(n);for(var s=0;s<r.length;s++)h.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o},v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=u,w=f,O=v,S={};function x(e,t,n,r,o){for(var a in e)if(e.hasOwnProperty(a)){var i;try{b("function"==typeof e[a],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",r||"React class",n,a,typeof e[a]),i=e[a](t,a,r,n,null,O)}catch(e){i=e}if(w(!i||i instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,a,typeof i),i instanceof Error&&!(i.message in S)){S[i.message]=!0;var s=o?o():"";w(!1,"Failed %s type: %s%s",n,i.message,null!=s?s:"")}}}var _=x,D=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";function o(e){var t=e&&(n&&e[n]||e[r]);if("function"==typeof t)return t}var i="<<anonymous>>",s={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:h(),arrayOf:y,element:g(),instanceOf:b,node:x(),objectOf:O,oneOf:w,oneOfType:S,shape:D,exact:E};function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function c(e){this.message=e,this.stack=""}function p(e){var n={},r=0;function o(o,a,s,l,p,d,h){if(l=l||i,d=d||s,h!==v)if(t)u(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var y=l+":"+s;!n[y]&&r<3&&(f(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,l),n[y]=!0,r++)}return null==a[s]?o?null===a[s]?new c("The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`."):new c("The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(a,s,l,p,d)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function d(e){function t(t,n,r,o,a,i){var s=t[n];return k(s)!==e?new c("Invalid "+o+" `"+a+"` of type `"+N(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return p(t)}function h(){return p(a.thatReturnsNull)}function y(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new c("Invalid "+o+" `"+a+"` of type `"+k(i)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<i.length;s++){var u=e(i,s,r,o,a+"["+s+"]",v);if(u instanceof Error)return u}return null}return p(t)}function g(){function t(t,n,r,o,a){var i=t[n];return e(i)?null:new c("Invalid "+o+" `"+a+"` of type `"+k(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return p(t)}function b(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var s=e.name||i;return new c("Invalid "+o+" `"+a+"` of type `"+C(t[n])+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}return null}return p(t)}function w(e){if(!Array.isArray(e))return f(!1,"Invalid argument supplied to oneOf, expected an instance of array."),a.thatReturnsNull;function t(t,n,r,o,a){for(var i=t[n],s=0;s<e.length;s++)if(l(i,e[s]))return null;return new c("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return p(t)}function O(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=k(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,r,o,a+"."+u,v);if(l instanceof Error)return l}return null}return p(t)}function S(e){if(!Array.isArray(e))return f(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),a.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return f(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",P(n),t),a.thatReturnsNull}function r(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,v))return null;return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}return p(r)}function x(){function e(e,t,n,r,o){return j(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}function D(e){function t(t,n,r,o,a){var i=t[n],s=k(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var f=l(i,u,r,o,a+"."+u,v);if(f)return f}}return null}return p(t)}function E(e){function t(t,n,r,o,a){var i=t[n],s=k(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var u=m({},t[n],e);for(var l in u){var f=e[l];if(!f)return new c("Invalid "+o+" `"+a+"` key `"+l+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=f(i,l,r,o,a+"."+l,v);if(p)return p}return null}return p(t)}function j(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(j);if(null===t||e(t))return!0;var n=o(t);if(!n)return!1;var r,a=n.call(t);if(n!==t.entries){for(;!(r=a.next()).done;)if(!j(r.value))return!1}else for(;!(r=a.next()).done;){var i=r.value;if(i&&!j(i[1]))return!1}return!0;default:return!1}}function T(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}function k(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":T(t,e)?"symbol":t}function N(e){if("undefined"==typeof e||null===e)return""+e;var t=k(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=N(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function C(e){return e.constructor&&e.constructor.name?e.constructor.name:i}return c.prototype=Error.prototype,s.checkPropTypes=_,s.PropTypes=s,s},E=n((function(e){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,n=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r=!0;e.exports=D(n,r)})),j=n((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var i in o)t.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}));function T(e,t){for(var n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function k(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function N(e){return"number"==typeof e&&!isNaN(e)}function P(e){return parseInt(e,10)}function C(e,t,n){if(e[t])return new Error("Invalid prop "+t+" passed to "+n+" - do not set this, set it on the child.")}var M=["Moz","Webkit","O","ms"];function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||"undefined"==typeof window.document)return"";var t=window.document.documentElement.style;if(e in t)return"";for(var n=0;n<M.length;n++)if(I(e,M[n])in t)return M[n];return""}function I(e,t){return t?""+t+A(e):e}function A(e){for(var t="",n=!0,r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}var Y=R(),X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},H=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),q="";function z(e,t){return q||(q=T(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return k(e[t])}))),!!k(e[q])&&e[q](t)}function F(e,t,n){var r=e;do{if(z(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function G(e,t,n){e&&(e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!0):e["on"+t]=n)}function J(e,t,n){e&&(e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener?e.removeEventListener(t,n,!0):e["on"+t]=null)}function $(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=P(n.borderTopWidth),t+=P(n.borderBottomWidth)}function K(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=P(n.borderLeftWidth),t+=P(n.borderRightWidth)}function Z(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=P(n.paddingTop),t-=P(n.paddingBottom)}function Q(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=P(n.paddingLeft),t-=P(n.paddingRight)}function ee(e,t){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:e.clientX+t.scrollLeft-n.left,y:e.clientY+t.scrollTop-n.top}}function te(e,t){var n=re(e,t,"px");return U({},I("transform",Y),n)}function ne(e,t){return re(e,t,"")}function re(e,t,n){var r="translate("+e.x+n+","+e.y+n+")";return t&&(r="translate("+("string"==typeof t.x?t.x:t.x+n)+", "+("string"==typeof t.y?t.y:t.y+n)+")"+r),r}function oe(e,t){return e.targetTouches&&T(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&T(e.changedTouches,(function(e){return t===e.identifier}))}function ae(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0}function ie(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&le(e.body,"react-draggable-transparent-selection")}}function se(e){try{e&&e.body&&ce(e.body,"react-draggable-transparent-selection"),e.selection?e.selection.empty():window.getSelection().removeAllRanges()}catch(e){}}function ue(){return W({touchAction:"none"},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function le(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)"+t+"(?!\\S)"))||(e.className+=" "+t)}function ce(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?!\\S)","g"),"")}function fe(e,t,n){if(!e.props.bounds)return[t,n];var r=e.props.bounds;r="string"==typeof r?r:ve(r);var o=be(e);if("string"==typeof r){var a=o.ownerDocument,i=a.defaultView,s=void 0;if(!((s="parent"===r?o.parentNode:a.querySelector(r))instanceof i.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var u=i.getComputedStyle(o),l=i.getComputedStyle(s);r={left:-o.offsetLeft+P(l.paddingLeft)+P(u.marginLeft),top:-o.offsetTop+P(l.paddingTop)+P(u.marginTop),right:Q(s)-K(o)-o.offsetLeft+P(l.paddingRight)-P(u.marginRight),bottom:Z(s)-$(o)-o.offsetTop+P(l.paddingBottom)-P(u.marginBottom)}}return N(r.right)&&(t=Math.min(t,r.right)),N(r.bottom)&&(n=Math.min(n,r.bottom)),N(r.left)&&(t=Math.max(t,r.left)),N(r.top)&&(n=Math.max(n,r.top)),[t,n]}function pe(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function de(e){return"both"===e.props.axis||"x"===e.props.axis}function he(e){return"both"===e.props.axis||"y"===e.props.axis}function ye(e,t,n){var r="number"==typeof t?oe(e,t):null;if("number"==typeof t&&!r)return null;var o=be(n);return ee(r||e,n.props.offsetParent||o.offsetParent||o.ownerDocument.body)}function ge(e,t,n){var r=e.state,o=!N(r.lastX),a=be(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:t,y:n}}function me(e,t){var n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function ve(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function be(t){var n=e.findDOMNode(t);if(!n)throw new Error("<DraggableCore>: Unmounted during event!");return n}function we(){}var Oe={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Se=Oe.mouse,xe=function(n){function r(){var t,n,o;X(this,r);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=V(this,(t=r.__proto__||Object.getPrototypeOf(r)).call.apply(t,[this].concat(i))),o.state={dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null},o.handleDragStart=function(t){if(o.props.onMouseDown(t),!o.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var n=e.findDOMNode(o);if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=n.ownerDocument;if(!(o.props.disabled||!(t.target instanceof r.defaultView.Node)||o.props.handle&&!F(t.target,o.props.handle,n)||o.props.cancel&&F(t.target,o.props.cancel,n))){var a=ae(t);o.setState({touchIdentifier:a});var i=ye(t,a,o);if(null!=i){var s=i.x,u=i.y,l=ge(o,s,u);we("calling",o.props.onStart),!1!==o.props.onStart(t,l)&&(o.props.enableUserSelectHack&&ie(r),o.setState({dragging:!0,lastX:s,lastY:u}),G(r,Se.move,o.handleDrag),G(r,Se.stop,o.handleDragStop))}}},o.handleDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=ye(e,o.state.touchIdentifier,o);if(null!=t){var n=t.x,r=t.y;if(Array.isArray(o.props.grid)){var a=n-o.state.lastX,i=r-o.state.lastY,s=pe(o.props.grid,a,i),u=H(s,2);if(a=u[0],i=u[1],!a&&!i)return;n=o.state.lastX+a,r=o.state.lastY+i}var l=ge(o,n,r);if(!1!==o.props.onDrag(e,l))o.setState({lastX:n,lastY:r});else try{o.handleDragStop(new MouseEvent("mouseup"))}catch(e){var c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.handleDragStop(c)}}},o.handleDragStop=function(t){if(o.state.dragging){var n=ye(t,o.state.touchIdentifier,o);if(null!=n){var r=n.x,a=n.y,i=ge(o,r,a),s=e.findDOMNode(o);s&&o.props.enableUserSelectHack&&se(s.ownerDocument),o.setState({dragging:!1,lastX:NaN,lastY:NaN}),o.props.onStop(t,i),s&&(J(s.ownerDocument,Se.move,o.handleDrag),J(s.ownerDocument,Se.stop,o.handleDragStop))}}},o.onMouseDown=function(e){return Se=Oe.mouse,o.handleDragStart(e)},o.onMouseUp=function(e){return Se=Oe.mouse,o.handleDragStop(e)},o.onTouchStart=function(e){return Se=Oe.touch,o.handleDragStart(e)},o.onTouchEnd=function(e){return Se=Oe.touch,o.handleDragStop(e)},V(o,n)}return B(r,n),L(r,[{key:"componentWillUnmount",value:function(){var t=e.findDOMNode(this);if(t){var n=t.ownerDocument;J(n,Oe.mouse.move,this.handleDrag),J(n,Oe.touch.move,this.handleDrag),J(n,Oe.mouse.stop,this.handleDragStop),J(n,Oe.touch.stop,this.handleDragStop),this.props.enableUserSelectHack&&se(n)}}},{key:"render",value:function(){return t.cloneElement(t.Children.only(this.props.children),{style:ue(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),r}(t.Component);xe.displayName="DraggableCore",xe.propTypes={allowAnyClick:E.bool,disabled:E.bool,enableUserSelectHack:E.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:E.arrayOf(E.number),scale:E.number,handle:E.string,cancel:E.string,onStart:E.func,onDrag:E.func,onStop:E.func,onMouseDown:E.func,className:C,style:C,transform:C},xe.defaultProps={allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){}};var _e=function(n){function r(e){X(this,r);var t=V(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onDragStart=function(e,n){if(!1===t.props.onStart(e,me(t,n)))return!1;t.setState({dragging:!0,dragged:!0})},t.onDrag=function(e,n){if(!t.state.dragging)return!1;var r=me(t,n),o={x:r.x,y:r.y};if(t.props.bounds){var a=o.x,i=o.y;o.x+=t.state.slackX,o.y+=t.state.slackY;var s=fe(t,o.x,o.y),u=H(s,2),l=u[0],c=u[1];o.x=l,o.y=c,o.slackX=t.state.slackX+(a-o.x),o.slackY=t.state.slackY+(i-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-t.state.x,r.deltaY=o.y-t.state.y}if(!1===t.props.onDrag(e,r))return!1;t.setState(o)},t.onDragStop=function(e,n){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,me(t,n)))return!1;var r={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;r.x=a,r.y=i}t.setState(r)},t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return B(r,n),L(r,[{key:"componentDidMount",value:function(){"undefined"!=typeof window.SVGElement&&e.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillReceiveProps",value:function(e){!e.position||this.props.position&&e.position.x===this.props.position.x&&e.position.y===this.props.position.y||this.setState({x:e.position.x,y:e.position.y})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var e,n={},r=null,o=!Boolean(this.props.position)||this.state.dragging,a=this.props.position||this.props.defaultPosition,i={x:de(this)&&o?this.state.x:a.x,y:he(this)&&o?this.state.y:a.y};this.state.isElementSVG?r=ne(i,this.props.positionOffset):n=te(i,this.props.positionOffset);var s=this.props,u=s.defaultClassName,l=s.defaultClassNameDragging,c=s.defaultClassNameDragged,f=t.Children.only(this.props.children),p=j(f.props.className||"",u,(U(e={},l,this.state.dragging),U(e,c,this.state.dragged),e));return t.createElement(xe,W({},this.props,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(f,{className:p,style:W({},f.props.style,n),transform:r}))}}]),r}(t.Component);return _e.displayName="Draggable",_e.propTypes=W({},xe.propTypes,{axis:E.oneOf(["both","x","y","none"]),bounds:E.oneOfType([E.shape({left:E.number,right:E.number,top:E.number,bottom:E.number}),E.string,E.oneOf([!1])]),defaultClassName:E.string,defaultClassNameDragging:E.string,defaultClassNameDragged:E.string,defaultPosition:E.shape({x:E.number,y:E.number}),positionOffset:E.shape({x:E.oneOfType([E.number,E.string]),y:E.oneOfType([E.number,E.string])}),position:E.shape({x:E.number,y:E.number}),className:C,style:C,transform:C}),_e.defaultProps=W({},xe.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}),_e.default=_e,_e.DraggableCore=xe,_e}(n(73935),n(67294))},39557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var s=function(e){var t=i({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M0 36l24-24 24 24H0z"}))};s.displayName="IconCaretUp",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var u=s;t.default=u},85478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),o=l(n(94992)),a=l(n(24808)),i=l(n(11895)),s=l(n(64990)),u=["header","footer","children","fill","scrollRefCallback"];function l(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.default.bind(s.default),d={header:o.default.node,footer:o.default.node,children:o.default.node,fill:o.default.bool,scrollRefCallback:o.default.func},h={header:void 0,footer:void 0,children:void 0,fill:!1,scrollRefCallback:void 0},y=function(e){var t=e.header,n=e.footer,o=e.children,a=e.fill,s=e.scrollRefCallback,l=f(e,u),d=p(["content-container-".concat(a?"fill":"static"),l.className]);return r.default.createElement("div",c({},l,{className:d}),t&&r.default.createElement("div",{className:p("header")},t),r.default.createElement("div",{className:p("main")},r.default.createElement(i.default,{className:p("normalizer"),refCallback:s},o)),n&&r.default.createElement("div",{className:p("footer")},n))};y.propTypes=d,y.defaultProps=h;var g=y;t.default=g},24808:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},87914:function(e,t,n){"use strict";var r=n(78860);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},94992:function(e,t,n){e.exports=n(87914)()},78860:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},11895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),o=u(n(94992)),a=u(n(24808)),i=u(n(50289)),s=["children","refCallback"];function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.default.bind(i.default),p={children:o.default.node,refCallback:o.default.func},d=function(e){var t=e.children,n=e.refCallback,o=c(e,s);return r.default.createElement("div",l({},o,{className:f(["scroll",o.className]),ref:n}),t)};d.propTypes=p;var h=d;t.default=h}}]);