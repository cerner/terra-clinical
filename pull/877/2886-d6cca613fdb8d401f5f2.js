"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[2886],{4951:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=r(67294))&&l.__esModule?l:{default:l},u=r(21860),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=a?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(l,u,d):l[u]=e[u]}l.default=e,r&&r.set(e,l);return l}(r(98364));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var i=[{id:"1602328271-1",systolic:{eventId:"1602328271-1.1",result:{value:"111",unit:"mmHg"},interpretation:"high",isModified:!0,hasComment:!0},diastolic:{eventId:"1602328271-1.2",result:{value:"77",unit:"mmHg"},interpretation:"low",isModified:!0,hasComment:!0}},{id:"1602328271-2",systolic:{eventId:"1602328271-2.1",result:{value:"111",unit:"mmHg"},interpretation:"high",isModified:!0,hasComment:!0},diastolic:{eventId:"1602328271-2.2",result:{value:"77",unit:"mmHg"},interpretation:"low",isModified:!0,hasComment:!0}},{id:"1602328271-3",systolic:{eventId:"1602328271-3.1",result:{value:"111",unit:"mmHg"},isModified:!0,hasComment:!0},diastolic:{eventId:"1602328271-3.2",result:{value:"77",unit:"mmHg"},isModified:!0,hasComment:!0}}],f=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0,isUnverified:!0}],c=function(){return a.default.createElement(d.default,null,a.default.createElement(d.Header,null,a.default.createElement(u.ResultNameHeaderCell,{key:"padding",resultName:"Padding Type"}),a.default.createElement(u.ResultNameHeaderCell,{key:"bp",resultName:"Blood Pressure Result"}),a.default.createElement(u.ResultNameHeaderCell,{key:"temp",resultName:"Unverified Temperature Result"})),a.default.createElement(d.Body,null,a.default.createElement(d.Row,null,a.default.createElement(u.FlowsheetResultCell,{key:"padding",resultDataSet:[{id:"1",result:{value:"None"}}],paddingStyle:"none"}),a.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:i,hideUnit:!0,paddingStyle:"none"}),a.default.createElement(u.FlowsheetResultCell,{key:"temp",resultDataSet:f,hideUnit:!0,paddingStyle:"none"})),a.default.createElement(d.Row,null,a.default.createElement(u.FlowsheetResultCell,{key:"padding",resultDataSet:[{id:"3",result:{value:"Compact"}}],paddingStyle:"compact"}),a.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:i,hideUnit:!0,paddingStyle:"compact"}),a.default.createElement(u.FlowsheetResultCell,{key:"temp",resultDataSet:f,hideUnit:!0,paddingStyle:"compact"})),a.default.createElement(d.Row,null,a.default.createElement(u.FlowsheetResultCell,{key:"padding",resultDataSet:[{id:"5",result:{value:"Standard"}}],paddingStyle:"standard"}),a.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:i,hideUnit:!0,paddingStyle:"standard"}),a.default.createElement(u.FlowsheetResultCell,{key:"temp",resultDataSet:f,hideUnit:!0,paddingStyle:"standard"}))))};t.default=c},17893:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},89650:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(67294)),l=f(r(45697)),a=f(r(94184)),u=f(r(47166)),d=f(r(50026)),o=f(r(17893)),i=["children","disableStripes","paddingStyle"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=u.default.bind(o.default),y={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},m=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,u=s(e,i),o=n.default.useContext(d.default),f=(0,a.default)(p("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},o.className),u.className);return n.default.createElement("table",c({},u,{className:f}),t)};m.propTypes=y,m.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=m;t.default=b},51523:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("tbody",r,t)};i.propTypes=o,i.defaultProps={children:[]};var f=i;t.default=f},58741:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("td",r,t)};i.propTypes=o,i.defaultProps={children:[]};var f=i;t.default=f},90703:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),l=d(r(45697)),a=d(r(96576)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i={children:l.default.node},f=function(e){var t=e.children,r=o(e,u);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};f.propTypes=i,f.defaultProps={children:[]};var c=f;t.default=c},8078:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("th",r,t)};i.propTypes=o,i.defaultProps={children:[]};var f=i;t.default=f},34847:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=i(r(47166)),u=i(r(17893)),d=i(r(96576)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.default.bind(u.default),p={children:l.default.node},y=function(e){var t=e.children,r=c(e,o),l=s(["row"]);return n.default.createElement("tr",f({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),d.default.addScope(t,"row"))};y.propTypes=p,y.defaultProps={children:[]};var m=y;t.default=m},96576:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},98364:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(89650)),l=i(r(51523)),a=i(r(34847)),u=i(r(58741)),d=i(r(90703)),o=i(r(8078));function i(e){return e&&e.__esModule?e:{default:e}}var f=n.default;t.default=f}}]);