"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[972],{35822:function(e,t,l){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=(u=l(67294))&&u.__esModule?u:{default:u},s=l(21860),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=n(t);if(l&&l.has(e))return l.get(e);var u={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=r?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(u,s,i):u[s]=e[s]}u.default=e,l&&l.set(e,u);return u}(l(98364));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(n=function(e){return e?l:t})(e)}var d=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],o=[{id:"4",systolic:{eventId:"5",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"6",result:{value:"77",unit:"mmHg"},interpretation:"critical"}},{id:"7",systolic:{eventId:"8",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"9",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],c=[{id:"10",systolic:{eventId:"11",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"12",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!1,isModified:!0,hasComment:!0}},{id:"13",systolic:{eventId:"14",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"15",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],m=[{id:"16",systolic:{eventId:"17",result:{value:"85",unit:"mmHg"},interpretation:"low"},diastolic:{eventId:"18",result:{value:"77",unit:"mmHg"},isUnverified:!1,isModified:!0,hasComment:!0}}],f=[{id:"19",systolic:{eventId:"20",resultNoData:!0},diastolic:{eventId:"21",result:{value:"85",unit:"mmHg"}}}],v=[{id:"22",systolic:{eventId:"23",result:{value:"170",unit:"mmHg"},interpretation:"critical"},diastolic:{eventId:"24",resultNoData:!0}}],y=[{id:"111",systolic:{eventId:"111.2",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],h=[{id:"25",systolic:{eventId:"26",result:{value:"140",unit:"mmHg"},interpretation:"high",isUnverified:!0},diastolic:{eventId:"27",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],R=[{id:"1577836800",result:{value:"12345.678",unit:"mL"},status:"entered-in-error"},{id:"1577836911",result:{value:"12345.678",unit:"mL"}}],w=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],E=[{eventId:"1602328271",result:{value:"10111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],C=function(){return r.default.createElement(i.default,{style:{tableLayout:"fixed"}},r.default.createElement(i.Header,null,r.default.createElement(s.ResultNameHeaderCell,{key:"notes",resultName:"Notes"}),r.default.createElement(s.ResultNameHeaderCell,{key:"result",resultName:"Clinical Results"}),r.default.createElement(s.ResultNameHeaderCell,{key:"date",resultName:"Date"})),r.default.createElement(i.Body,null,r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"1",result:{value:"Standard Result (With Unit)"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:d}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"2",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"3",result:{value:"Multiple Results"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:o,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"4",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"5",result:{value:"Multiple Decorated Results"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:c,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"6",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"7",result:{value:"Decorated Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:m,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"8",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"9",result:{value:"Partial Result, Diastolic"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:v,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"10",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"11",result:{value:"Partial Result, Systolic"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:f,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"12",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"13",result:{value:"Unverified Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:h,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"14",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"15",result:{value:"No Data Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",hasResultNoData:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"16",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"23",result:{value:"Numeric Without Overflow"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:w}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"24",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"25",result:{value:"Numeric With Overflow"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:E}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"26",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"21",result:{value:"Entered-in-error Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:R}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"22",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"17",result:{value:"Error Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",hasResultError:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"18",result:{value:"May 12th"}}]})),r.default.createElement(i.Row,null,r.default.createElement(s.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"19",result:{value:"Partial Error Result"}}]}),r.default.createElement(s.FlowsheetResultCell,{key:"result",resultDataSet:y,hideUnit:!0}),r.default.createElement(s.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"20",result:{value:"May 12th"}}]}))))};t.default=C}}]);