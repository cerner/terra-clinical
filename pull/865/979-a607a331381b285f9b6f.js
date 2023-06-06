"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[979],{73666:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var l={eventId:"111",result:{value:"12345.678",unit:"mL"}},n=o(o({},l),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=n;var s=o(o({},l),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=s;var u=o(o({},l),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=u;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=o(o({},l),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:o({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:o({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var p={id:"111",systolic:o({},c),diastolic:o({},f)};t.DefaultBloodPressureResult=p;var y={id:"111",systolic:o(o({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:o(o({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=y;var g={id:"111",systolic:o(o({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:o(o({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=g;var h={id:"111",systolic:o(o({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:o(o({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=h;var D={id:"111",systolic:o(o({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:o(o({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=D;var b={id:"111",systolic:o(o({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:o(o({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=b;var P={id:"111",systolic:o(o({},c),{},{interpretation:"critical"}),diastolic:o(o({},f),{},{interpretation:"low"})};t.MixedBPResultValue=P;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var R={id:"111",systolic:o(o({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:o(o({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=R;var O={id:"111",systolic:o(o({},c),{},{isModified:!1,hasComment:!1}),diastolic:o(o({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=O;var _=l;t.default=_},87500:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(i(67294)),o=l(i(38056)),a=l(i(73666));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(o.default,{resultData:a.default,hasResultNoData:!0})}},58142:function(e,t,i){i.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___7D+6c","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___Cyu+4",IconDiamond:"IconDiamond-module__IconDiamond___Qc2SU"}},14675:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(i(67294)),o=a(i(5073));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},l.apply(this,arguments)}var n=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};n.displayName="IconComment",n.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var s=n;t.default=s},36739:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(i(67294)),o=u(i(12949)),a=u(i(80201)),l=u(i(99063)),n=u(i(5073)),s=u(i(58142));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d.apply(this,arguments)}var c=a.default.bind(s.default),f=function(e){var t=d({},e),i=r.default.useContext(l.default),a=(0,o.default)(c("IconDiamond",i.className),e.className);return r.default.createElement(n.default,d({},t,{className:a}),r.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};f.displayName="IconDiamond",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},30940:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(i(67294)),o=a(i(5073));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},l.apply(this,arguments)}var n=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M24 0L3 42l-3 6h48L24 0zm-1.7 10.1l16 31.9H6.4l15.9-31.9z"}))};n.displayName="IconModified",n.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var s=n;t.default=s}}]);