"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1826],{35822:function(e,t,l){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=l(67294))&&n.__esModule?n:{default:n},u=l(21860),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=d(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,l&&l.set(e,n);return n}(l(98364));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(d=function(e){return e?l:t})(e)}var s=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],o=[{id:"4",systolic:{eventId:"5",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"6",result:{value:"77",unit:"mmHg"},interpretation:"critical"}},{id:"7",systolic:{eventId:"8",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"9",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],c=[{id:"10",systolic:{eventId:"11",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"12",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!1,isModified:!0,hasComment:!0}},{id:"13",systolic:{eventId:"14",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"15",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],m=[{id:"16",systolic:{eventId:"17",result:{value:"85",unit:"mmHg"},interpretation:"low"},diastolic:{eventId:"18",result:{value:"77",unit:"mmHg"},isUnverified:!1,isModified:!0,hasComment:!0}}],f=[{id:"19",systolic:{eventId:"20",resultNoData:!0},diastolic:{eventId:"21",result:{value:"85",unit:"mmHg"}}}],y=[{id:"22",systolic:{eventId:"23",result:{value:"170",unit:"mmHg"},interpretation:"critical"},diastolic:{eventId:"24",resultNoData:!0}}],p=[{id:"25",systolic:{eventId:"26",result:{value:"140",unit:"mmHg"},interpretation:"high",isUnverified:!0},diastolic:{eventId:"27",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],v=function(){return r.default.createElement(i.default,null,r.default.createElement(i.Header,null,r.default.createElement(i.HeaderCell,{key:"notes"},"Notes"),r.default.createElement(i.HeaderCell,{key:"bp"},"Blood Pressure"),r.default.createElement(i.HeaderCell,{key:"date"},"Date")),r.default.createElement(i.Body,null,r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Standard Result (With Unit)"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:s}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Multiple Results"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:o,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Multiple Decorated Results"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:c,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Decorated Result"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:m,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Partial Result, Diastolic"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:y,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Partial Result, Systolic"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:f,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Unverified Result"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:p,hideUnit:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"No Data Result"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",hasResultNoData:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th")),r.default.createElement(i.Row,null,r.default.createElement(i.Cell,{key:"notes"},"Error Result"),r.default.createElement(u.FlowsheetResultCell,{key:"bp",hasResultError:!0}),r.default.createElement(i.Cell,{key:"date"},"December 12th"))))};t.default=v}}]);