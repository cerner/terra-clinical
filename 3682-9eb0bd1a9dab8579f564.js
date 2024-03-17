"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3682],{39960:function(e,t,l){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=r?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,l&&l.set(e,n),n}(l(96540)),r=s(l(5556)),i=s(l(46942)),u=s(l(67967)),o=s(l(19992)),d=s(l(52103)),f=s(l(67513)),c=["children","title","startContent","endContent","text","level","id","isSubheader","onClick"];function s(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var _=u.default.bind(f.default),b={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool,onClick:r.default.func},y=function(e){var t,l=e.children,a=e.title,r=e.startContent,u=e.endContent,f=e.text,s=e.level,m=e.id,b=e.isSubheader,y=e.onClick,v=h(e,c),x=(0,n.useContext)(d.default);a&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),s||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.");var E=a||f;if(E){var g=s?"h".concat(s):"h1";t=n.default.createElement("div",{className:_("title-container")},n.default.createElement(g,{id:m,className:_("title")},y?n.default.createElement(o.default,{onClick:y,text:E}):E))}var O=n.default.Children.map(l,(function(e){return n.default.cloneElement(e,{className:(0,i.default)([_("flex-collapse"),e.props.className])})})),k=(0,i.default)([_(["flex-header",{subheader:b},x.className]),v.className]);return n.default.createElement("header",p({},v,{className:k}),r&&n.default.createElement("div",{className:_("flex-end")},r),n.default.createElement("div",{className:_("flex-fill")},t),O,u&&n.default.createElement("div",{className:_("flex-end")},u))};y.propTypes=b,y.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};t.default=y},73682:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(96540)),n=r(l(39960));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("section",{"aria-labelledby":"headinglabel"},a.default.createElement(n.default,{text:"Table of Contents",id:"headinglabel",level:1}),a.default.createElement("ul",{id:"terra-clinical-header-test-toc-list"},a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Chapter 1")),a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Chapter 2")),a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Chapter 3")))),a.default.createElement("aside",{"aria-labelledby":"linksheadinglabel"},a.default.createElement(n.default,{text:"Quick Links",id:"linksheadinglabel",level:2,isSubheader:!0}),a.default.createElement("ul",{id:"terra-clinical-header-test-quick-links-list"},a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Link 1")),a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Link 2")),a.default.createElement("li",null,a.default.createElement("a",{href:"/"},"Link 3")))))}},67513:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}}}]);