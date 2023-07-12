"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5163],{35822:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=l(67294))&&a.__esModule?a:{default:a},n=l(21860),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=d(t);if(l&&l.has(e))return l.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=u?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}a.default=e,l&&l.set(e,a);return a}(l(98364));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(d=function(e){return e?l:t})(e)}var s=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],o=[{id:"4",systolic:{eventId:"5",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"6",result:{value:"77",unit:"mmHg"},interpretation:"critical"}},{id:"7",systolic:{eventId:"8",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"9",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],c=[{id:"10",systolic:{eventId:"11",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"12",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!1,isModified:!0,hasComment:!0}},{id:"13",systolic:{eventId:"14",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"15",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],f=[{id:"16",systolic:{eventId:"17",result:{value:"85",unit:"mmHg"},interpretation:"low"},diastolic:{eventId:"18",result:{value:"77",unit:"mmHg"},isUnverified:!1,isModified:!0,hasComment:!0}}],m=[{id:"19",systolic:{eventId:"20",resultNoData:!0},diastolic:{eventId:"21",result:{value:"85",unit:"mmHg"}}}],v=[{id:"22",systolic:{eventId:"23",result:{value:"170",unit:"mmHg"},interpretation:"critical"},diastolic:{eventId:"24",resultNoData:!0}}],y=[{id:"111",systolic:{eventId:"111.2",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],p=[{id:"25",systolic:{eventId:"26",result:{value:"140",unit:"mmHg"},interpretation:"high",isUnverified:!0},diastolic:{eventId:"27",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],h=[{id:"1577836800",result:{value:"12345.678",unit:"mL"},status:"entered-in-error"},{id:"1577836911",result:{value:"12345.678",unit:"mL"}}],b=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],g=[{eventId:"1602328271",result:{value:"10111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],w=function(){return u.default.createElement(i.default,null,u.default.createElement(i.Header,null,u.default.createElement(n.ResultNameHeaderCell,{key:"notes",resultName:"Notes"}),u.default.createElement(n.ResultNameHeaderCell,{key:"result",resultName:"Clinical Results"}),u.default.createElement(n.ResultNameHeaderCell,{key:"date",resultName:"Date"})),u.default.createElement(i.Body,null,u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:1,result:{value:"Standard Result (With Unit)"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:s}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:2,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:3,result:{value:"Multiple Results"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:o,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:4,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:5,result:{value:"Multiple Decorated Results"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:c,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:6,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:7,result:{value:"Decorated Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:f,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:8,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:9,result:{value:"Partial Result, Diastolic"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:v,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:10,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:11,result:{value:"Partial Result, Systolic"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:m,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:12,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:13,result:{value:"Unverified Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:p,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:14,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:15,result:{value:"No Data Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",hasResultNoData:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:16,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:23,result:{value:"Numeric Without Overflow"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:b}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:24,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:25,result:{value:"Numeric With Overflow"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:g}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:26,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:21,result:{value:"Entered-in-error Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:h}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:22,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:17,result:{value:"Error Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",hasResultError:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:18,result:{value:"May 12th"}}]})),u.default.createElement(i.Row,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:19,result:{value:"Partial Error Result"}}]}),u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:y,hideUnit:!0}),u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:20,result:{value:"May 12th"}}]}))))};t.default=w},17893:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},89650:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(l(67294)),a=o(l(45697)),u=o(l(94184)),n=o(l(47166)),i=o(l(50026)),d=o(l(17893)),s=["children","disableStripes","paddingStyle"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=n.default.bind(d.default),v={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,l=e.disableStripes,a=e.paddingStyle,n=f(e,s),d=r.default.useContext(i.default),o=(0,u.default)(m("table",{striped:!l},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),n.className);return r.default.createElement("table",c({},n,{className:o}),t)};y.propTypes=v,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var p=y;t.default=p},51523:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(67294)),a=n(l(45697)),u=["children"];function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={children:a.default.node},s=function(e){var t=e.children,l=i(e,u);return r.default.createElement("tbody",l,t)};s.propTypes=d,s.defaultProps={children:[]};var o=s;t.default=o},58741:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(67294)),a=n(l(45697)),u=["children"];function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={children:a.default.node},s=function(e){var t=e.children,l=i(e,u);return r.default.createElement("td",l,t)};s.propTypes=d,s.defaultProps={children:[]};var o=s;t.default=o},90703:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(l(67294)),a=i(l(45697)),u=i(l(96576)),n=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s={children:a.default.node},o=function(e){var t=e.children,l=d(e,n);return r.default.createElement("thead",l,r.default.createElement("tr",null,u.default.addScope(t,"col")))};o.propTypes=s,o.defaultProps={children:[]};var c=o;t.default=c},8078:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(67294)),a=n(l(45697)),u=["children"];function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={children:a.default.node},s=function(e){var t=e.children,l=i(e,u);return r.default.createElement("th",l,t)};s.propTypes=d,s.defaultProps={children:[]};var o=s;t.default=o},34847:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),a=s(l(45697)),u=s(l(47166)),n=s(l(17893)),i=s(l(96576)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f=u.default.bind(n.default),m={children:a.default.node},v=function(e){var t=e.children,l=c(e,d),a=f(["row"]);return r.default.createElement("tr",o({},l,{className:l.className?"".concat(a," ").concat(l.className):a}),i.default.addScope(t,"row"))};v.propTypes=m,v.defaultProps={children:[]};var y=v;t.default=y},96576:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=l(67294))&&r.__esModule?r:{default:r};var u={addScope:function(e,t){var l=[];return a.default.Children.forEach(e,(function(e){l.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),l}};t.default=u},98364:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return u.default}}),t.default=void 0;var r=s(l(89650)),a=s(l(51523)),u=s(l(34847)),n=s(l(58741)),i=s(l(90703)),d=s(l(8078));function s(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o}}]);