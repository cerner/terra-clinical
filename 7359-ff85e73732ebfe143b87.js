"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7359],{25156:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=r?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=c(n(45697)),o=c(n(94184)),d=c(n(47166)),i=c(n(50026)),u=c(n(52146)),f=["children","title","startContent","endContent","text","level","id","isSubheader"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=d.default.bind(u.default),h={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool},b=function(e){var t,n=e.children,l=e.title,r=e.startContent,d=e.endContent,u=e.text,c=e.level,s=e.id,h=e.isSubheader,b=p(e,f),y=(0,a.useContext)(i.default);if(l&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),l||u){var v=c?"h".concat(c):"h1";t=a.default.createElement("div",{className:m("title-container")},a.default.createElement(v,{id:s,className:m("title")},l||u))}var x=a.default.Children.map(n,(function(e){return a.default.cloneElement(e,{className:(0,o.default)([m("flex-collapse"),e.props.className])})})),C=(0,o.default)([m(["flex-header",{subheader:h},y.className]),b.className]);return a.default.createElement("header",_({},b,{className:C}),r&&a.default.createElement("div",{className:m("flex-end")},r),a.default.createElement("div",{className:m("flex-fill")},t),x,d&&a.default.createElement("div",{className:m("flex-end")},d))};b.propTypes=h,b.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};var y=b;t.default=y},57359:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(67294)),a=d(n(47166)),r=d(n(25156)),o=d(n(44001));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(o.default),u=l.default.createElement("div",{id:"headerTest--startContent",className:i("start-content")}),f=l.default.createElement("div",{id:"headerTest--endContent",className:i("end-content")});t.default=function(){return l.default.createElement(r.default,{startContent:u,text:"Header with content on the left and right",endContent:f})}},52146:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}},44001:function(e,t,n){n.r(t),t.default={"start-content":"ClinicalHeaderCommontest-module__start-content___ZIwge","end-content":"ClinicalHeaderCommontest-module__end-content___vGSIw",content:"ClinicalHeaderCommontest-module__content___Ol7lL","placeholder-wrapper":"ClinicalHeaderCommontest-module__placeholder-wrapper___zFdaZ"}}}]);