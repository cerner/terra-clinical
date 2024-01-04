"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3377],{27310:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=l(67294))&&a.__esModule?a:{default:a},n=l(21860);l(72058);var r=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],s=[{id:"4",systolic:{eventId:"5",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"6",result:{value:"77",unit:"mmHg"},interpretation:"critical"}},{id:"7",systolic:{eventId:"8",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"9",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],i=[{id:"10",systolic:{eventId:"11",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"12",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!1,isModified:!0,hasComment:!0}},{id:"13",systolic:{eventId:"14",result:{value:"140",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"15",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],d=[{id:"16",systolic:{eventId:"17",result:{value:"85",unit:"mmHg"},interpretation:"low"},diastolic:{eventId:"18",result:{value:"77",unit:"mmHg"},isUnverified:!1,isModified:!0,hasComment:!0}}],o=[{id:"19",systolic:{eventId:"20",resultNoData:!0},diastolic:{eventId:"21",result:{value:"85",unit:"mmHg"}}}],c=[{id:"22",systolic:{eventId:"23",result:{value:"170",unit:"mmHg"},interpretation:"critical"},diastolic:{eventId:"24",resultNoData:!0}}],f=[{id:"111",systolic:{eventId:"111.2",result:{value:"77",unit:"mmHg"},interpretation:"critical"}}],m=[{id:"25",systolic:{eventId:"26",result:{value:"140",unit:"mmHg"},interpretation:"high",isUnverified:!0},diastolic:{eventId:"27",result:{value:"77",unit:"mmHg"},interpretation:"critical",isUnverified:!0}}],v=[{id:"1577836800",result:{value:"12345.678",unit:"mL"},status:"entered-in-error"},{id:"1577836911",result:{value:"12345.678",unit:"mL"}}],h=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],w=[{eventId:"1602328271",result:{value:"10111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011",unit:"degC"},isNumeric:!0,isModified:!0,hasComment:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,isModified:!1,hasComment:!1}],E=function(e){var t=e.children;return u.default.createElement("div",{className:"table-col"},u.default.createElement("div",{className:"center-text-container"},t))};t.default=function(){return u.default.createElement("div",{className:"table"},u.default.createElement("div",{className:"table-header"},u.default.createElement("div",{className:"table-col"},"Notes"),u.default.createElement("div",{className:"table-col"},"Clinical Results"),u.default.createElement("div",{className:"table-col"},"Date")),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"1",result:{value:"Standard Result (With Unit)"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:r})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"2",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"3",result:{value:"Multiple Results"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:s,hideUnit:!0})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"4",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"5",result:{value:"Multiple Decorated Results"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:i,hideUnit:!0})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"6",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"7",result:{value:"Decorated Result"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:d,hideUnit:!0})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"8",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"9",result:{value:"Partial Result, Diastolic"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:c,hideUnit:!0})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"10",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"11",result:{value:"Partial Result, Systolic"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:o,hideUnit:!0})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"12",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"13",result:{value:"Unverified Result"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:m,hideUnit:!0})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"14",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"15",result:{value:"No Data Result"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",hasResultNoData:!0})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"16",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"23",result:{value:"Numeric Without Overflow"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:h})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"24",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"25",result:{value:"Numeric With Overflow"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:w})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"26",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"21",result:{value:"Entered-in-error Result"}}]})),u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:v})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"22",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null," ",u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"17",result:{value:"Error Result"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",hasResultError:!0})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"18",result:{value:"May 12th"}}]}))),u.default.createElement("div",{className:"table-row"},u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"notes",resultDataSet:[{id:"19",result:{value:"Partial Error Result"}}]})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"result",resultDataSet:f,hideUnit:!0})),u.default.createElement(E,null,u.default.createElement(n.FlowsheetResultCell,{key:"date",resultDataSet:[{id:"20",result:{value:"May 12th"}}]}))))}},75974:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},83664:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},33856:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___uDJNz","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___0qjDF",IconDiamond:"IconDiamond-module__IconDiamond___+XAvZ"}},30877:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},8539:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},72058:function(e,t,l){l.r(t),t.default={}},15056:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(93967)),n=d(l(19845)),r=d(l(50026)),s=d(l(99139)),i=d(l(75974));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var c=n.default.bind(i.default),f=function(e){var t=o({},e),l=a.default.useContext(r.default),n=(0,u.default)(c("IconAbnormal",l.className),e.className);return a.default.createElement(s.default,o({},t,{className:n}),a.default.createElement("path",{fill:"#654A08",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},16044:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),u=n(l(99139));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(u.default,t,a.default.createElement("path",{d:"M38 0H10a2 2 0 0 0-2 2v44a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};s.displayName="IconCalculator",s.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=s},97309:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),u=n(l(99139));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(u.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};s.displayName="IconComment",s.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=s},46510:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(93967)),n=d(l(19845)),r=d(l(50026)),s=d(l(99139)),i=d(l(83664));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var c=n.default.bind(i.default),f=function(e){var t=o({},e),l=a.default.useContext(r.default),n=(0,u.default)(c("IconCritical",l.className),e.className);return a.default.createElement(s.default,o({},t,{className:n}),a.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),a.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},77050:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(93967)),n=d(l(19845)),r=d(l(50026)),s=d(l(99139)),i=d(l(33856));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var c=n.default.bind(i.default),f=function(e){var t=o({},e),l=a.default.useContext(r.default),n=(0,u.default)(c("IconDiamond",l.className),e.className);return a.default.createElement(s.default,o({},t,{className:n}),a.default.createElement("path",{fill:"#78288C",d:"m24.8 47.7 22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};f.displayName="IconDiamond",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},88897:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(93967)),n=d(l(19845)),r=d(l(50026)),s=d(l(99139)),i=d(l(30877));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var c=n.default.bind(i.default),f=function(e){var t=o({},e),l=a.default.useContext(r.default),n=(0,u.default)(c("IconHigh",l.className),e.className);return a.default.createElement(s.default,o({},t,{className:n}),a.default.createElement("path",{fill:"#B53203",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 0 0-.8.3L.3 23.2a1.215 1.215 0 0 0 0 1.6l22.9 22.9a1.217 1.217 0 0 0 1.6 0l22.9-22.9a1.217 1.217 0 0 0 0-1.6L24.8.3A1.135 1.135 0 0 0 24 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=f},65735:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(93967)),n=d(l(19845)),r=d(l(50026)),s=d(l(99139)),i=d(l(8539));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var c=n.default.bind(i.default),f=function(e){var t=o({},e),l=a.default.useContext(r.default),n=(0,u.default)(c("IconLow",l.className),e.className);return a.default.createElement(s.default,o({},t,{className:n}),a.default.createElement("path",{fill:"#0053E6",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39 11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},26293:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),u=n(l(99139));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(u.default,t,a.default.createElement("path",{d:"M24 0 3 42l-3 6h48L24 0zm-1.7 10.1 16 31.9H6.4l15.9-31.9z"}))};s.displayName="IconModified",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=s}}]);