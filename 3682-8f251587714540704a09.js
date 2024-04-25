"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3682],{39960:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,l&&l.set(e,a),a}(l(96540)),r=s(l(5556)),i=s(l(46942)),o=s(l(67967)),u=s(l(19992)),d=s(l(52103)),f=s(l(67513)),c=["children","title","startContent","endContent","text","level","id","isSubheader","onClick","wrapContent"];function s(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},_.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var h=o.default.bind(f.default),b={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool,onClick:r.default.func,wrapContent:r.default.bool},y=function(e){var t,l=e.children,n=e.title,r=e.startContent,o=e.endContent,f=e.text,s=e.level,p=e.id,b=e.isSubheader,y=e.onClick,v=e.wrapContent,x=m(e,c),E=(0,a.useContext)(d.default);n&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),s||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.");var w=n||f;if(w){var g=s?"h".concat(s):"h1";t=a.default.createElement("div",{className:h("title-container")},a.default.createElement(g,{id:p,className:h("title")},y?a.default.createElement(u.default,{onClick:y,text:w}):w))}var C=a.default.Children.map(l,(function(e){return a.default.cloneElement(e,{className:(0,i.default)([h("flex-collapse"),e.props.className])})})),O=(0,i.default)([h(["flex-header",{subheader:b},E.className]),x.className]),k=h(v?"flex-end-wrap":"flex-end"),j=h({"end-content":!n});return a.default.createElement("header",_({},x,{className:O}),r&&a.default.createElement("div",{className:k},r),w&&a.default.createElement("div",{className:h("flex-fill")},t),C,o&&a.default.createElement("div",{className:"".concat(k," ").concat(j)},o))};y.propTypes=b,y.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:"",wrapContent:!1};t.default=y},73682:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(96540)),a=r(l(39960));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{"aria-labelledby":"headinglabel"},n.default.createElement(a.default,{text:"Table of Contents",id:"headinglabel",level:1}),n.default.createElement("ul",{id:"terra-clinical-header-test-toc-list"},n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Chapter 1")),n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Chapter 2")),n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Chapter 3")))),n.default.createElement("aside",{"aria-labelledby":"linksheadinglabel"},n.default.createElement(a.default,{text:"Quick Links",id:"linksheadinglabel",level:2,isSubheader:!0}),n.default.createElement("ul",{id:"terra-clinical-header-test-quick-links-list"},n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Link 1")),n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Link 2")),n.default.createElement("li",null,n.default.createElement("a",{href:"/"},"Link 3")))))}},67513:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end-wrap":"Header-module__flex-end-wrap___0l4ZQ","flex-end":"Header-module__flex-end___2UUdn","end-content":"Header-module__end-content___wwxC5","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}}}]);