"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[6796,9815],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=l(n(45697)),u=l(n(19845)),c=n(21538),d=l(n(33864)),s=l(n(23399)),_=n(51051),f=l(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var p=u.default.bind(f.default),v={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,u=e.isExpanded,f=(0,o.useState)(u),m=(0,r.default)(f,2),v=m[0],b=m[1],y=(0,o.useState)(!1),O=(0,r.default)(y,2),w=O[0],E=O[1],j=o.default.useContext(c.ThemeContext),N=void 0!==l,P=function(){E(!w),v&&b(!v)},x=function(){b(!v),w&&E(!w)},H=function(e,t){e.nativeEvent.keyCode!==_.KEY_SPACE&&e.nativeEvent.keyCode!==_.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",j.className)},o.default.createElement("div",{className:p("header")},a&&o.default.createElement("h2",{className:p("title")},a)),o.default.createElement("div",{className:p("content")},i&&o.default.createElement("div",{className:p("description")},i),t),o.default.createElement("div",{className:p("footer")},n?o.default.createElement("div",{className:p("button-container")},N&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":w}),onClick:P,onKeyDown:function(e){return H(e,P)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":v}),onClick:x,onKeyDown:function(e){return H(e,x)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:p("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:p("css")},l),v&&o.default.createElement("div",{className:p("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};t.Z=b},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),a=c(n(45697)),r=c(n(19845)),o=c(n(50026)),i=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=r.default.bind(i.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},v=function(e){var t=e.children,n=s(e,u),a=l.default.useContext(o.default),i=(0,r.default)(_(["button",a.className]),n.className);return l.default.createElement("button",d({},n,{type:"button",className:i,onBlur:f,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;t.default=v},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(45697)),r=u(n(19845)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(i.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:c("notice",n,r.className)},l.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:c("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(a,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(67294)),a=d(n(45697)),r=d(n(93967)),o=d(n(19845)),i=d(n(50026)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(u.default),m={title:a.default.string},p=function(e){var t=e.title,n=_(e,c),a=l.default.useContext(i.default),o=(0,r.default)(f(["placeholder",a.className]),n.className),u=f(["inner"]);return l.default.createElement("div",s({},n,{className:o}),l.default.createElement("div",{className:u},l.default.createElement("p",{className:f("title")},t)))};p.propTypes=m,p.defaultProps={title:""};t.default=p},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var l=o(n(59278)),a=o(n(47306)),r=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},42763:function(e,t,n){n.r(t),t.default={heading:"Heading-module__heading___v5+PO",italic:"Heading-module__italic___AZeOx","level-1":"Heading-module__level-1___Dzh7M","level-2":"Heading-module__level-2___Fn5NE","level-3":"Heading-module__level-3___HjC1Z","level-4":"Heading-module__level-4___gatwI","level-5":"Heading-module__level-5___-iiqy","level-6":"Heading-module__level-6___VXhR+","size-huge":"Heading-module__size-huge___0iP2D","size-large":"Heading-module__size-large___rZwu-","size-medium":"Heading-module__size-medium___Hk3pG","size-small":"Heading-module__size-small___OWyDY","size-tiny":"Heading-module__size-tiny___Z5Fm4","size-mini":"Heading-module__size-mini___Gd90U","weight-200":"Heading-module__weight-200___EQF-G","weight-400":"Heading-module__weight-400___cOGso","weight-700":"Heading-module__weight-700___SbBvg","visually-hidden":"Heading-module__visually-hidden___5i7ow"}},44027:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HeadingWeight=t.HeadingSize=t.HeadingLevel=void 0;var a=c(n(67294)),r=c(n(45697)),o=c(n(19845)),i=c(n(42763)),u=["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(i.default),p=(t.HeadingLevel={1:1,2:2,3:3,4:4,5:5,6:6},t.HeadingSize={MINI:"mini",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},t.HeadingWeight={200:200,400:400,700:700},{children:r.default.node.isRequired,level:r.default.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,size:r.default.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.default.oneOf([200,400,700]),colorClass:r.default.string}),v=function(e){var t=e.level,n=e.children,l=e.isVisuallyHidden,r=e.isItalic,o=e.size,i=e.weight,c=e.colorClass,p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(e,u)),v=m(["heading",{italic:r},{"visually-hidden":l},_({},"level-".concat(t),t),_({},"size-".concat(o),o),_({},"weight-".concat(i),i),c,p.className]),h="h".concat(t);return a.default.createElement(h,d({},p,{className:v}),n)};v.propTypes=p,v.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};t.default=v},56468:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};i.displayName="IconBriefcase",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=i},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};i.displayName="IconComment",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},41086:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M24 0a11.3 11.3 0 1 1-11.3 11.3A11.35 11.35 0 0 1 24 0zm19.5 48v-5.7a16.77 16.77 0 0 0-16.8-16.8h-5.5A16.75 16.75 0 0 0 4.5 42.3V48z"}))};i.displayName="IconPerson",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);