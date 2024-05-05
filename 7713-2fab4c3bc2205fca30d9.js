"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7713],{86120:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var i={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=e[n]}return i.default=e,l&&l.set(e,i),i}(l(96540)),a=d(l(5556)),n=d(l(67967)),o=l(68414),u=d(l(93105)),s=d(l(64339)),c=l(5601),f=["title","children","isLabelValuePairList"];function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},m.apply(this,arguments)}function y(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;l[r]=e[r]}return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var b=n.default.bind(u.default),_={title:a.default.string,children:a.default.oneOfType([a.default.objectOf(s.default),a.default.arrayOf(a.default.objectOf(s.default))]),isLabelValuePairList:a.default.bool},v={title:void 0,children:void 0,isLabelValuePairList:!1},O=function(e){var t,l=e.title,r=e.children,a=e.isLabelValuePairList,n=y(e,f),u=(0,i.useContext)(c.HeadingLevelContext),s="h".concat(u),d=l?"list-title-id-".concat((0,o.v4)()):null;l&&(t=i.default.createElement(s,{className:b("title"),id:d},l));var p=a?i.default.createElement("dl",{className:b("list"),"aria-labelledby":d},r):i.default.createElement("ul",{className:b("list"),"aria-labelledby":d},i.Children.map(r,(function(e){return e?i.default.createElement("li",{key:e.id,className:b("list-item")},e):null})));return i.default.createElement("div",m({},n,{"data-terra-clinical-detail-list":!0,className:n.className}),t,p)};O.propTypes=_,O.defaultProps=v;t.default=O},64339:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(96540)),i=u(l(5556)),a=u(l(67967)),n=u(l(92024)),o=["item"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;l[r]=e[r]}return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var f=a.default.bind(n.default),d={item:i.default.element.isRequired},p=function(e){var t=e.item,l=c(e,o),i=f(["detail-list-item",l.className]);return r.default.createElement("div",s({},l,{className:i}),t)};p.propTypes=d,p.defaultProps={};t.default=p},47713:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=y(l(96540)),a=y(l(5556)),n=y(l(46942)),o=y(l(67967)),u=y(l(52103)),s=l(68414),c=y(l(97562)),f=y(l(86120)),d=y(l(64339)),p=l(5601),m=["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles","level"];function y(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},b.apply(this,arguments)}function _(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function v(e,t,l){var i;return i=function(e,t){if("object"!=r(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var i=l.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(i)?i:i+"")in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function O(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;l[r]=e[r]}return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var g=o.default.bind(c.default),h={title:a.default.string,level:a.default.oneOf([2,3,4]),secondaryTitles:a.default.arrayOf(a.default.string),subtitles:a.default.arrayOf(a.default.string),accessory:a.default.element,graph:a.default.element,details:a.default.arrayOf(a.default.element),footer:a.default.string,isDivided:a.default.bool,isSmallerTitles:a.default.bool},j={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1,level:2},w=function(e){var t=e.title,l=e.secondaryTitles,r=e.subtitles,a=e.accessory,o=e.graph,c=e.details,f=e.footer,d=e.isDivided,y=e.isSmallerTitles,h=e.level,j=O(e,m),w=i.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?_(Object(l),!0).forEach((function(t){v(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):_(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},j);P.className=(0,n.default)(g("detail-view",w.className),P.className);var D=function(e){return"h".concat(e)},S=t?"title-id-".concat((0,s.v4)()):null,x=null,E=[],N=h,V=D(N);t&&(x=i.default.createElement(V,{className:g("primary-text"),id:S},t),N+=1),0!==l.length&&(V=D(N),E=l.map((function(e,t){return i.default.createElement(V,{className:g("secondary-text"),key:"".concat(t)},e)})),N+=1);var L=r.map((function(e,t){return i.default.createElement("p",{className:g("subtitle"),key:"".concat(t)},e)})),k=a?i.default.createElement("div",{className:g("accessory")},a):null,M=f?i.default.createElement("p",{role:"note",className:g("footer-text")},f):null,T=o?i.default.createElement("figure",{className:g("graph-figure")},o):null,C=null,I=[];if(d){for(var H=0;H<c.length;H+=1)C=i.default.createElement("hr",{key:"".concat(H),className:g("divider")}),I.push(c[H]),I.push(C);C=i.default.createElement("hr",{className:g("divider")})}else I=c;var J=x||E.length||L.length||k;return i.default.createElement("section",b({},P,{"aria-labelledby":S}),J&&i.default.createElement("div",{className:g("titles-section",{"titles-smaller":y})},x,E,L,k),T&&C,T,C,i.default.createElement(p.HeadingLevelContext.Provider,{value:N},I),M)};w.propTypes=h,w.defaultProps=j,w.DetailList=f.default,w.DetailListItem=d.default;t.default=w},5601:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.HeadingLevelContext=void 0;var r=l(96540);t.HeadingLevelContext=(0,r.createContext)(2)},93105:function(e,t,l){l.r(t),t.default={title:"DetailList-module__title___wkMGW",list:"DetailList-module__list___35o8Y","list-item":"DetailList-module__list-item___JUx59"}},92024:function(e,t,l){l.r(t),t.default={"detail-list-item":"DetailListItem-module__detail-list-item___ygD4J"}},97562:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"DetailView-module__clinical-lowlight-theme___8vm1b","orion-fusion-theme":"DetailView-module__orion-fusion-theme___gkJtC","detail-view":"DetailView-module__detail-view___F11-B","titles-section":"DetailView-module__titles-section___4h3-V","primary-text":"DetailView-module__primary-text___VwmOM","secondary-text":"DetailView-module__secondary-text___aojSa",subtitle:"DetailView-module__subtitle___KV9og",accessory:"DetailView-module__accessory___M9mYi","titles-smaller":"DetailView-module__titles-smaller___mIIZE","footer-text":"DetailView-module__footer-text___x1pJv",divider:"DetailView-module__divider___Q6tXm","graph-figure":"DetailView-module__graph-figure___bzolv"}}}]);