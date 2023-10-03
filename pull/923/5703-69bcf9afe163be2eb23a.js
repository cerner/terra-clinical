"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5703],{25156:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,l&&l.set(e,r);return r}(l(67294)),a=s(l(45697)),o=s(l(94184)),i=s(l(47166)),u=s(l(34171)),d=s(l(50026)),f=s(l(52146)),c=["children","title","startContent","endContent","text","level","id","isSubheader","onTextClick"];function s(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},_.apply(this,arguments)}function h(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m=i.default.bind(f.default),b={id:a.default.string,children:a.default.element,startContent:a.default.element,level:a.default.oneOf([1,2,3,4,5,6]),text:a.default.string,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool,onTextClick:a.default.func},y=function(e){var t,l=e.children,n=e.title,a=e.startContent,i=e.endContent,f=e.text,s=e.level,p=e.id,b=e.isSubheader,y=e.onTextClick,v=h(e,c),x=(0,r.useContext)(d.default);if(n&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),s||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n||f){var O=s?"h".concat(s):"h1";t=r.default.createElement("div",{className:m("title-container")},r.default.createElement(O,{id:p,className:m("title")},y?r.default.createElement(u.default,{onClick:y,text:n||f}):n||f))}var g=r.default.Children.map(l,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([m("flex-collapse"),e.props.className])})})),w=(0,o.default)([m(["flex-header",{subheader:b},x.className]),v.className]);return r.default.createElement("header",_({},v,{className:w}),a&&r.default.createElement("div",{className:m("flex-end")},a),r.default.createElement("div",{className:m("flex-fill")},t),g,i&&r.default.createElement("div",{className:m("flex-end")},i))};y.propTypes=b,y.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};t.default=y},55703:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(25156));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(r.default,{text:"This title should not render without a provided level",id:"Header"})}},52146:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}}}]);