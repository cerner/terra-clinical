"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5982],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(67294)),a=d(n(45697)),r=d(n(47166)),o=d(n(50026)),i=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.default.bind(i.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},h=function(e){var t=e.children,n=f(e,u),a=l.default.useContext(o.default),i=(0,r.default)(s(["button",a.className]),n.className);return l.default.createElement("button",c({},n,{type:"button",className:i,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};h.propTypes=p;var b=h;t.default=b},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(45697)),r=u(n(47166)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(i.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:d("notice",n,r.className)},l.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:d("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(a,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};f.propTypes=c,f.defaultProps={ariaLevel:"2",variant:"important"};var s=f;t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),a=c(n(45697)),r=c(n(94184)),o=c(n(47166)),i=c(n(50026)),u=c(n(42620)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=o.default.bind(u.default),m={title:a.default.string},p=function(e){var t=e.title,n=s(e,d),a=l.default.useContext(i.default),o=(0,r.default)(_(["placeholder",a.className]),n.className),u=_(["inner"]);return l.default.createElement("div",f({},n,{className:o}),l.default.createElement("div",{className:u},l.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};var h=p;t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var l=o(n(59278)),a=o(n(47306)),r=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},25156:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=f(n(45697)),o=f(n(94184)),i=f(n(47166)),u=f(n(50026)),d=f(n(52146)),c=["children","title","startContent","endContent","text","level","id","isSubheader"];function f(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.default.bind(d.default),h={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool},b=function(e){var t,n=e.children,l=e.title,r=e.startContent,i=e.endContent,d=e.text,f=e.level,s=e.id,h=e.isSubheader,b=m(e,c),v=(0,a.useContext)(u.default);if(l&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),f||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),l||d){var y=f?"h".concat(f):"h1";t=a.default.createElement("div",{className:p("title-container")},a.default.createElement(y,{id:s,className:p("title")},l||d))}var g=a.default.Children.map(n,(function(e){return a.default.cloneElement(e,{className:(0,o.default)([p("flex-collapse"),e.props.className])})})),O=(0,o.default)([p(["flex-header",{subheader:h},v.className]),b.className]);return a.default.createElement("header",_({},b,{className:O}),r&&a.default.createElement("div",{className:p("flex-end")},r),a.default.createElement("div",{className:p("flex-fill")},t),g,i&&a.default.createElement("div",{className:p("flex-end")},i))};b.propTypes=h,b.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};var v=b;t.default=v},95982:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(47166)),r=n(34261),o=u(n(25156)),i=u(n(44001));function u(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(i.default),c=function(){return l.default.createElement("div",null,l.default.createElement(o.default,{text:"Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et.",level:1},l.default.createElement(r.Placeholder,{className:d("placeholder-wrapper"),title:"Collapsible Menu View"})))};t.default=c},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},52146:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}},44001:function(e,t,n){n.r(t),t.default={"start-content":"ClinicalHeaderCommontest-module__start-content___ZIwge","end-content":"ClinicalHeaderCommontest-module__end-content___vGSIw",content:"ClinicalHeaderCommontest-module__content___Ol7lL","placeholder-wrapper":"ClinicalHeaderCommontest-module__placeholder-wrapper___zFdaZ"}}}]);