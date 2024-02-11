"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4480],{30056:function(e,t){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t,i){var o;return o=function(e,t){if("object"!=l(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(o)?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.EmptyStringResult=t.EmptyArrayResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var r={eventId:"111",result:{value:"12345.678",unit:"mL"}},n=(t.SingleResultValue=o(o({},r),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"}),t.DecoratedResult=o(o({},r),{},{isModified:!0,hasComment:!0,isUnverified:!1}),t.UnverifiedResult=o(o({},r),{},{isModified:!1,hasComment:!1,isUnverified:!0}),t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"},t.EnteredInErrorResult=o(o({},r),{},{interpretation:"critical",status:"entered-in-error"}),t.DefaultSystolicResult={eventId:"111.1",result:{value:"180",unit:"mmHg"}}),s=t.DefaultDiastolicResult={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultBloodPressureSystolicResultWithNoId={systolic:o({},n)},t.DefaultBloodPressureDiastolicResultWithNoId={diastolic:o({},s)},t.DefaultBloodPressureResult={id:"111",systolic:o({},n),diastolic:o({},s)},t.DecoratedBloodPressureResult1={id:"111",systolic:o(o({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:o(o({},s),{},{isModified:!1,hasComment:!1,isUnverified:!1})},t.DecoratedBloodPressureResult2={id:"111",systolic:o(o({},n),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:o(o({},s),{},{isModified:!0,hasComment:!0,isUnverified:!1})},t.UnverifiedBloodPressureResult1={id:"111",systolic:o(o({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:o(o({},s),{},{isModified:!1,hasComment:!1,isUnverified:!1})},t.UnverifiedBloodPressureResult2={id:"111",systolic:o(o({},n),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:o(o({},s),{},{isModified:!1,hasComment:!1,isUnverified:!0})},t.ExtraDisplaysBloodPressureResult={id:"111",systolic:o(o({},n),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:o(o({},s),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"}),isBloodPressureGrouped:!0},t.MixedBPResultValue={id:"111",systolic:o(o({},n),{},{interpretation:"critical"}),diastolic:o(o({},s),{},{interpretation:"low"})},t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0},t.EmptyStringResult={eventId:"",result:{value:"",unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1},t.EmptyArrayResult={eventId:"",result:{value:[],unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1},t.EnteredInErrorSysBPResult={id:"111",systolic:o(o({},n),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:o(o({},s),{},{isModified:!1,hasComment:!1})},t.EnteredInErrorDiaBPResult={id:"111",systolic:o(o({},n),{},{isModified:!1,hasComment:!1}),diastolic:o(o({},s),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})},t.default=r},10192:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=l(11504))&&i.__esModule?i:{default:i},a=l(85344),r=l(30056);t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.DefaultSystolicResult}),o.default.createElement(a.ClinicalResultBloodPressure,{diastolic:r.DefaultDiastolicResult}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.DefaultSystolicResult,diastolic:r.NoDataResult}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.NoDataResult,diastolic:r.DefaultDiastolicResult}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:null,diastolic:null}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.NoDataResult,diastolic:r.NoDataResult}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.EmptyStringResult,diastolic:r.EmptyStringResult}),o.default.createElement(a.ClinicalResultBloodPressure,{systolic:r.EmptyArrayResult,diastolic:r.EmptyArrayResult}))}},19488:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},36424:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},26036:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___uDJNz","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___0qjDF",IconDiamond:"IconDiamond-module__IconDiamond___+XAvZ"}},5152:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},13112:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},74440:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(l(11504)),o=u(l(82084)),a=u(l(74824)),r=u(l(99640)),n=u(l(22728)),s=u(l(19488));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),l=i.default.useContext(r.default),a=(0,o.default)(c("IconAbnormal",l.className),e.className);return i.default.createElement(n.default,d({},t,{className:a}),i.default.createElement("path",{fill:"#654A08",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},82104:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(11504)),o=a(l(22728));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},r.apply(this,arguments)}var n=function(e){var t=r({},e);return i.default.createElement(o.default,t,i.default.createElement("path",{d:"M38 0H10a2 2 0 0 0-2 2v44a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};n.displayName="IconCalculator",n.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=n},74264:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(11504)),o=a(l(22728));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},r.apply(this,arguments)}var n=function(e){var t=r({},e);return i.default.createElement(o.default,t,i.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};n.displayName="IconComment",n.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=n},89492:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(l(11504)),o=u(l(82084)),a=u(l(74824)),r=u(l(99640)),n=u(l(22728)),s=u(l(36424));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),l=i.default.useContext(r.default),a=(0,o.default)(c("IconCritical",l.className),e.className);return i.default.createElement(n.default,d({},t,{className:a}),i.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),i.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},69088:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(l(11504)),o=u(l(82084)),a=u(l(74824)),r=u(l(99640)),n=u(l(22728)),s=u(l(26036));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),l=i.default.useContext(r.default),a=(0,o.default)(c("IconDiamond",l.className),e.className);return i.default.createElement(n.default,d({},t,{className:a}),i.default.createElement("path",{fill:"#78288C",d:"m24.8 47.7 22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};f.displayName="IconDiamond",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},94968:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(l(11504)),o=u(l(82084)),a=u(l(74824)),r=u(l(99640)),n=u(l(22728)),s=u(l(5152));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),l=i.default.useContext(r.default),a=(0,o.default)(c("IconHigh",l.className),e.className);return i.default.createElement(n.default,d({},t,{className:a}),i.default.createElement("path",{fill:"#B53203",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 0 0-.8.3L.3 23.2a1.215 1.215 0 0 0 0 1.6l22.9 22.9a1.217 1.217 0 0 0 1.6 0l22.9-22.9a1.217 1.217 0 0 0 0-1.6L24.8.3A1.135 1.135 0 0 0 24 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=f},59144:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(l(11504)),o=u(l(82084)),a=u(l(74824)),r=u(l(99640)),n=u(l(22728)),s=u(l(13112));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),l=i.default.useContext(r.default),a=(0,o.default)(c("IconLow",l.className),e.className);return i.default.createElement(n.default,d({},t,{className:a}),i.default.createElement("path",{fill:"#0053E6",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39 11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f},67460:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(11504)),o=a(l(22728));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},r.apply(this,arguments)}var n=function(e){var t=r({},e);return i.default.createElement(o.default,t,i.default.createElement("path",{d:"M24 0 3 42l-3 6h48L24 0zm-1.7 10.1 16 31.9H6.4l15.9-31.9z"}))};n.displayName="IconModified",n.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=n}}]);