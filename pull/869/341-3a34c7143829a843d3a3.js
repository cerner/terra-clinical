"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[341],{72638:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(67294)),i=s(r(45697)),a=s(r(47166)),o=s(r(40669)),u=s(r(2498)),c=r(76172),f=["title","children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=a.default.bind(o.default),b={title:i.default.string,children:i.default.oneOfType([i.default.objectOf(u.default),i.default.arrayOf(i.default.objectOf(u.default))])},v={title:void 0,children:void 0},_=function(e){var t,r=e.title,l=e.children,i=m(e,f),a=(0,n.useContext)(c.HeadingLevelContext),o="h".concat(a);return r&&(t=n.default.createElement(o,{className:y("title")},r)),n.default.createElement("div",p({},i,{"data-terra-clincial-detail-list":!0,className:i.className}),t,n.default.createElement("div",{className:y("list")},l))};_.propTypes=b,_.defaultProps=v;var O=_;t.default=O},2498:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(r(67294)),n=u(r(45697)),i=u(r(47166)),a=u(r(95432)),o=["item"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.default.bind(a.default),d={item:n.default.element.isRequired},p=function(e){var t=e.item,r=f(e,o),n=s(["detail-list-item",r.className]);return l.default.createElement("div",c({},r,{className:n}),t)};p.propTypes=d,p.defaultProps={};var m=p;t.default=m},341:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=y(r(67294)),i=y(r(45697)),a=y(r(94184)),o=y(r(47166)),u=y(r(50026)),c=r(21614),f=y(r(28682)),s=y(r(72638)),d=y(r(2498)),p=r(76172),m=["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles","level"];function y(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},b.apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function _(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=o.default.bind(f.default),h={title:i.default.string,level:i.default.oneOf([2,3,4]),secondaryTitles:i.default.arrayOf(i.default.string),subtitles:i.default.arrayOf(i.default.string),accessory:i.default.element,graph:i.default.element,details:i.default.arrayOf(i.default.element),footer:i.default.string,isDivided:i.default.bool,isSmallerTitles:i.default.bool},j={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1,level:2},w=function(e){var t=e.title,r=e.secondaryTitles,l=e.subtitles,i=e.accessory,o=e.graph,f=e.details,s=e.footer,d=e.isDivided,y=e.isSmallerTitles,h=e.level,j=O(e,m),w=n.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},j);P.className=(0,a.default)(g("detail-view",w.className),P.className);var D=function(e){return"h".concat(e)},S=t?"title-id-".concat((0,c.v4)()):null,x=null,E=[],N=h,k=D(N);t&&(x=n.default.createElement(k,{className:g("primary-text"),id:S},t),N+=1),0!==r.length&&(k=D(N),E=r.map((function(e,t){return n.default.createElement(k,{className:g("secondary-text"),key:"".concat(t)},e)})),N+=1);var V=l.map((function(e,t){return n.default.createElement("p",{className:g("subtitle"),key:"".concat(t)},e)})),M=i?n.default.createElement("div",{className:g("accessory")},i):null,T=s?n.default.createElement("p",{role:"note",className:g("footer-text")},s):null,C=o?n.default.createElement("figure",{className:g("graph-figure")},o):null,L=null,I=[];if(d){for(var H=0;H<f.length;H+=1)L=n.default.createElement("hr",{key:"".concat(H),className:g("divider")}),I.push(f[H]),I.push(L);L=n.default.createElement("hr",{className:g("divider")})}else I=f;return n.default.createElement("section",b({},P,{"aria-labelledby":S}),n.default.createElement("div",{className:g("titles-section",{"titles-smaller":y})},x,E,V,M),C&&L,C,L,n.default.createElement(p.HeadingLevelContext.Provider,{value:N},I),T)};w.propTypes=h,w.defaultProps=j,w.DetailList=s.default,w.DetailListItem=d.default;var P=w;t.default=P},76172:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.HeadingLevelContext=void 0;var l=(0,r(67294).createContext)(2);t.HeadingLevelContext=l},40669:function(e,t,r){r.r(t),t.default={title:"DetailList-module__title___wkMGW",list:"DetailList-module__list___35o8Y"}},95432:function(e,t,r){r.r(t),t.default={"detail-list-item":"DetailListItem-module__detail-list-item___ygD4J"}},28682:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"DetailView-module__clinical-lowlight-theme___8vm1b","orion-fusion-theme":"DetailView-module__orion-fusion-theme___gkJtC","detail-view":"DetailView-module__detail-view___F11-B","titles-section":"DetailView-module__titles-section___4h3-V","primary-text":"DetailView-module__primary-text___VwmOM","secondary-text":"DetailView-module__secondary-text___aojSa",subtitle:"DetailView-module__subtitle___KV9og",accessory:"DetailView-module__accessory___M9mYi","titles-smaller":"DetailView-module__titles-smaller___mIIZE","footer-text":"DetailView-module__footer-text___x1pJv",divider:"DetailView-module__divider___Q6tXm","graph-figure":"DetailView-module__graph-figure___bzolv"}}}]);