"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4340],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var o=l(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var r=o?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(l,u,r):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(96540)),r=l(a(5556)),c=l(a(67967)),d=a(92912),i=l(a(49558)),s=l(a(53665)),f=a(25966),m=l(a(89986));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}var p=c.default.bind(m.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,r=e.description,c=e.isExpanded,m=(0,u.useState)(c),_=(0,o.default)(m,2),h=_[0],g=_[1],b=(0,u.useState)(!1),E=(0,o.default)(b,2),y=E[0],x=E[1],O=u.default.useContext(d.ThemeContext),N=void 0!==l,I=function(){x(!y),h&&g(!h)},j=function(){g(!h),y&&x(!y)},M=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:p("template",O.className)},u.default.createElement("div",{className:p("header")},n&&u.default.createElement("h2",{className:p("title")},n)),u.default.createElement("div",{className:p("content")},r&&u.default.createElement("div",{className:p("description")},r),t),u.default.createElement("div",{className:p("footer")},a?u.default.createElement("div",{className:p("button-container")},N&&u.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":y}),onClick:I,onKeyDown:function(e){return M(e,I)},onBlur:v,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(i.default,{className:p("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:p("chevron")})),u.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return M(e,j)},onBlur:v,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(i.default,{className:p("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:p("chevron")}))):null,u.default.createElement("div",null,y&&u.default.createElement("div",{className:p("css")},l),h&&u.default.createElement("div",{className:p("code")},a))))};g.propTypes=h,g.defaultProps={isExpanded:!1};t.A=g},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},80316:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},43755:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},26972:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___uDJNz","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___0qjDF",IconDiamond:"IconDiamond-module__IconDiamond___+XAvZ"}},31284:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},90978:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},29934:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),o=d(a(67967)),u=d(a(52103)),r=d(a(25365)),c=d(a(80316));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var s=o.default.bind(c.default),f=function(e){var t=Object.assign({},e),a=l.default.useContext(u.default),o=(0,n.default)(s("IconAbnormal",a.className),e.className);return l.default.createElement(r.default,i({},t,{className:o}),l.default.createElement("path",{fill:"#654A08",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},11018:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(96540)),n=o(a(25365));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M38 0H10a2 2 0 0 0-2 2v44a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};u.displayName="IconCalculator",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(96540)),n=o(a(25365));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},92613:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(96540)),n=o(a(25365));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};u.displayName="IconComment",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},1171:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),o=d(a(67967)),u=d(a(52103)),r=d(a(25365)),c=d(a(43755));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var s=o.default.bind(c.default),f=function(e){var t=Object.assign({},e),a=l.default.useContext(u.default),o=(0,n.default)(s("IconCritical",a.className),e.className);return l.default.createElement(r.default,i({},t,{className:o}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},92224:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),o=d(a(67967)),u=d(a(52103)),r=d(a(25365)),c=d(a(26972));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var s=o.default.bind(c.default),f=function(e){var t=Object.assign({},e),a=l.default.useContext(u.default),o=(0,n.default)(s("IconDiamond",a.className),e.className);return l.default.createElement(r.default,i({},t,{className:o}),l.default.createElement("path",{fill:"#78288C",d:"m24.8 47.7 22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};f.displayName="IconDiamond",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},86074:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),o=d(a(67967)),u=d(a(52103)),r=d(a(25365)),c=d(a(31284));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var s=o.default.bind(c.default),f=function(e){var t=Object.assign({},e),a=l.default.useContext(u.default),o=(0,n.default)(s("IconHigh",a.className),e.className);return l.default.createElement(r.default,i({},t,{className:o}),l.default.createElement("path",{fill:"#B53203",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 0 0-.8.3L.3 23.2a1.215 1.215 0 0 0 0 1.6l22.9 22.9a1.217 1.217 0 0 0 1.6 0l22.9-22.9a1.217 1.217 0 0 0 0-1.6L24.8.3A1.135 1.135 0 0 0 24 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=f},41078:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),o=d(a(67967)),u=d(a(52103)),r=d(a(25365)),c=d(a(90978));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var s=o.default.bind(c.default),f=function(e){var t=Object.assign({},e),a=l.default.useContext(u.default),o=(0,n.default)(s("IconLow",a.className),e.className);return l.default.createElement(r.default,i({},t,{className:o}),l.default.createElement("path",{fill:"#0053E6",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39 11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},76689:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(96540)),n=o(a(25365));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M24 0 3 42l-3 6h48L24 0zm-1.7 10.1 16 31.9H6.4l15.9-31.9z"}))};u.displayName="IconModified",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);