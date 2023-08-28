"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4768],{25156:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,l&&l.set(e,r);return r}(l(67294)),a=c(l(45697)),o=c(l(94184)),i=c(l(47166)),u=c(l(50026)),d=c(l(52146)),f=["children","title","startContent","endContent","text","level","id","isSubheader"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m=i.default.bind(d.default),h={id:a.default.string,children:a.default.element,startContent:a.default.element,level:a.default.oneOf([1,2,3,4,5,6]),text:a.default.string,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool},b=function(e){var t,l=e.children,n=e.title,a=e.startContent,i=e.endContent,d=e.text,c=e.level,s=e.id,h=e.isSubheader,b=_(e,f),y=(0,r.useContext)(u.default);if(n&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n||d){var v=c?"h".concat(c):"h1";t=r.default.createElement("div",{className:m("title-container")},r.default.createElement(v,{id:s,className:m("title")},n||d))}var x=r.default.Children.map(l,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([m("flex-collapse"),e.props.className])})})),O=(0,o.default)([m(["flex-header",{subheader:h},y.className]),b.className]);return r.default.createElement("header",p({},b,{className:O}),a&&r.default.createElement("div",{className:m("flex-end")},a),r.default.createElement("div",{className:m("flex-fill")},t),x,i&&r.default.createElement("div",{className:m("flex-end")},i))};b.propTypes=h,b.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};var y=b;t.default=y},54768:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(25156));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(r.default,{text:"Title",id:"Header"})}},52146:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}}}]);