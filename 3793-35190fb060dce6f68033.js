"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3793],{72638:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}i.default=e,r&&r.set(e,i);return i}(r(67294)),n=s(r(45697)),a=s(r(47166)),o=s(r(40669)),u=s(r(2498)),f=r(76172),c=["title","children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var y=a.default.bind(o.default),_={title:n.default.string,children:n.default.oneOfType([n.default.objectOf(u.default),n.default.arrayOf(n.default.objectOf(u.default))])},v={title:void 0,children:void 0},b=function(e){var t,r=e.title,l=e.children,n=p(e,c),a=(0,i.useContext)(f.HeadingLevelContext),o="h".concat(a);return r&&(t=i.default.createElement(o,{className:y("title")},r)),i.default.createElement("div",m({},n,{"data-terra-clincial-detail-list":!0,className:n.className}),t,i.default.createElement("div",{className:y("list")},l))};b.propTypes=_,b.defaultProps=v;var O=b;t.default=O},2498:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(r(67294)),i=u(r(45697)),n=u(r(47166)),a=u(r(95432)),o=["item"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.default.bind(a.default),d={item:i.default.element.isRequired},m=function(e){var t=e.item,r=c(e,o),i=s(["detail-list-item",r.className]);return l.default.createElement("div",f({},r,{className:i}),t)};m.propTypes=d,m.defaultProps={};var p=m;t.default=p},341:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=p(r(67294)),n=p(r(45697)),a=p(r(94184)),o=p(r(47166)),u=p(r(50026)),f=p(r(28682)),c=p(r(72638)),s=p(r(2498)),d=r(76172),m=["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles","level"];function p(e){return e&&e.__esModule?e:{default:e}}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function _(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=o.default.bind(f.default),O={title:n.default.string,level:n.default.oneOf([2,3,4]),secondaryTitles:n.default.arrayOf(n.default.string),subtitles:n.default.arrayOf(n.default.string),accessory:n.default.element,graph:n.default.element,details:n.default.arrayOf(n.default.element),footer:n.default.string,isDivided:n.default.bool,isSmallerTitles:n.default.bool},g={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1,level:2},h=function(e){var t=e.title,r=e.secondaryTitles,l=e.subtitles,n=e.accessory,o=e.graph,f=e.details,c=e.footer,s=e.isDivided,p=e.isSmallerTitles,O=e.level,g=v(e,m),h=i.default.useContext(u.default),j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},g);j.className=(0,a.default)(b("detail-view",h.className),j.className);var w=function(e){return"h".concat(e)},P=null,D=[],S=O,E=w(S);t&&(P=i.default.createElement(E,{className:b("primary-text")},t),S+=1),0!==r.length&&(E=w(S),D=r.map((function(e,t){return i.default.createElement(E,{className:b("secondary-text"),key:"".concat(t)},e)})),S+=1);var x=l.map((function(e,t){return i.default.createElement("p",{className:b("subtitle"),key:"".concat(t)},e)})),N=n?i.default.createElement("div",{className:b("accessory")},n):null,k=c?i.default.createElement("p",{role:"note",className:b("footer-text")},c):null,M=o?i.default.createElement("figure",{className:b("graph-figure")},o):null,V=null,T=[];if(s){for(var L=0;L<f.length;L+=1)V=i.default.createElement("hr",{key:"".concat(L),className:b("divider")}),T.push(f[L]),T.push(V);V=i.default.createElement("hr",{className:b("divider")})}else T=f;return i.default.createElement("section",j,i.default.createElement("div",{className:b("titles-section",{"titles-smaller":p})},P,D,x,N),M&&V,M,V,i.default.createElement(d.HeadingLevelContext.Provider,{value:S},T),k)};h.propTypes=O,h.defaultProps=g,h.DetailList=c.default,h.DetailListItem=s.default;var j=h;t.default=j},76172:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.HeadingLevelContext=void 0;var l=(0,r(67294).createContext)(2);t.HeadingLevelContext=l},63793:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(67294)),i=n(r(341));function n(e){return e&&e.__esModule?e:{default:e}}var a=l.default.createElement("p",null,"A Detail List Item"),o=function(){return l.default.createElement(i.default.DetailListItem,{item:a,id:"DetailListItem"})};t.default=o},40669:function(e,t,r){r.r(t),t.default={title:"DetailList-module__title___wkMGW",list:"DetailList-module__list___35o8Y"}},95432:function(e,t,r){r.r(t),t.default={"detail-list-item":"DetailListItem-module__detail-list-item___ygD4J"}},28682:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"DetailView-module__clinical-lowlight-theme___8vm1b","orion-fusion-theme":"DetailView-module__orion-fusion-theme___gkJtC","detail-view":"DetailView-module__detail-view___F11-B","titles-section":"DetailView-module__titles-section___4h3-V","primary-text":"DetailView-module__primary-text___VwmOM","secondary-text":"DetailView-module__secondary-text___aojSa",subtitle:"DetailView-module__subtitle___KV9og",accessory:"DetailView-module__accessory___M9mYi","titles-smaller":"DetailView-module__titles-smaller___mIIZE","footer-text":"DetailView-module__footer-text___x1pJv",divider:"DetailView-module__divider___Q6tXm","graph-figure":"DetailView-module__graph-figure___bzolv"}}}]);