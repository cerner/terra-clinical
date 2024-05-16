"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3949],{22863:function(e,t,r){var n=r(64836);t.Z=void 0;var l=n(r(67294)),a=n(r(45697)),u=n(r(19845)),d=n(r(17422)),o=u.default.bind(d.default),c={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.src,r=e.name,n=e.url,a=e.version,u=l.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(a)},l.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(a))),d=t?l.default.createElement("a",{className:o("badge"),href:t},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},u,d)};i.propTypes=c;t.Z=i},78530:function(e,t,r){var n=r(64836),l=r(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return c.Row}}),t.ZP=t.Di=void 0;var a=s(r(67294)),u=n(r(45697)),d=n(r(19845)),o=r(21538),c=s(r(98364)),i=n(r(54931));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=a?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(n,u,d):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}var p=d.default.bind(i.default),b={children:u.default.node},_={isRequired:u.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:p("bold")},t)}).propTypes=b,(t.Di=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:p("code-block-override")},t)}).propTypes=b,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(c.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=_,(t.mW=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:p("code-block-override")},t)}).propTypes=b,(t.Ex=function(e){var t=e.children;return a.default.createElement(c.Cell,null,t)}).propTypes=b;var m=function(e){var t=e.children,r=(0,a.useContext)(o.ThemeContext);return a.default.createElement(c.default,{paddingStyle:"compact",className:p("table",r.className)},a.default.createElement(c.Header,{className:p("header")},a.default.createElement(c.HeaderCell,null,"Prop"),a.default.createElement(c.HeaderCell,null,"Type"),a.default.createElement(c.HeaderCell,null,"Required"),a.default.createElement(c.HeaderCell,null,"Default"),a.default.createElement(c.HeaderCell,null,"Description")),a.default.createElement(c.Body,null,t))};m.propTypes=b;t.ZP=m},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},54931:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},17893:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},89650:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=i(r(93967)),u=i(r(19845)),d=i(r(50026)),o=i(r(17893)),c=["children","disableStripes","paddingStyle"];function i(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=u.default.bind(o.default),b={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},_=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,u=s(e,c),o=n.default.useContext(d.default),i=(0,a.default)(p("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},o.className),u.className);return n.default.createElement("table",f({},u,{className:i}),t)};_.propTypes=b,_.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=_},51523:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},c=function(e){var t=e.children,r=d(e,a);return n.default.createElement("tbody",r,t)};c.propTypes=o,c.defaultProps={children:[]};t.default=c},58741:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},c=function(e){var t=e.children,r=d(e,a);return n.default.createElement("td",r,t)};c.propTypes=o,c.defaultProps={children:[]};t.default=c},90703:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),l=d(r(45697)),a=d(r(96576)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c={children:l.default.node},i=function(e){var t=e.children,r=o(e,u);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};i.propTypes=c,i.defaultProps={children:[]};t.default=i},8078:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},c=function(e){var t=e.children,r=d(e,a);return n.default.createElement("th",r,t)};c.propTypes=o,c.defaultProps={children:[]};t.default=c},34847:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),l=c(r(45697)),a=c(r(19845)),u=c(r(17893)),d=c(r(96576)),o=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.default.bind(u.default),p={children:l.default.node},b=function(e){var t=e.children,r=f(e,o),l=s(["row"]);return n.default.createElement("tr",i({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),d.default.addScope(t,"row"))};b.propTypes=p,b.defaultProps={children:[]};t.default=b},96576:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},98364:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=c(r(89650)),l=c(r(51523)),a=c(r(34847)),u=c(r(58741)),d=c(r(90703)),o=c(r(8078));function c(e){return e&&e.__esModule?e:{default:e}}t.default=n.default}}]);