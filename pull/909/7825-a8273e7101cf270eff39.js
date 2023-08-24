"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7825],{78670:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=g(r(67294)),l=g(r(45697)),a=g(r(94184)),n=g(r(47166)),o=g(r(50026)),u=g(r(73553)),s=g(r(53640)),d=g(r(42812)),c=g(r(96592)),f=r(25387),m=g(r(15601)),v=g(r(24619)),p=g(r(76810)),_=g(r(33028)),b=["eventId","result","interpretation","isUnverified","hideUnit","intl"];function g(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var O=n.default.bind(_.default),R={eventId:l.default.string,result:v.default,interpretation:m.default,isUnverified:l.default.bool,hideUnit:l.default.bool,intl:l.default.shape({formatMessage:l.default.func})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},D=function(e){e.eventId;var t=e.result,r=e.interpretation,l=e.isUnverified,n=e.hideUnit,f=e.intl,m=h(e,b),v={critical:i.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCritical"}),role:"img",focusable:"true"}),"critical-high":i.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalHigh"}),role:"img",focusable:"true"}),"critical-low":i.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalLow"}),role:"img",focusable:"true"}),positive:i.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationPositive"}),role:"img",focusable:"true"}),abnormal:i.default.createElement(c.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationAbnormal"}),role:"img",focusable:"true"}),high:i.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationOutOfRangeHigh"}),role:"img",focusable:"true"}),low:i.default.createElement(d.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationOutOfRangeLow"}),role:"img",focusable:"true"})},_=t&&t.value&&(!Array.isArray(t.value)||0!==t.value.length),g=i.default.useContext(o.default),R=(0,a.default)(O("value",!l&&P[r],{unverified:l},g.className),m.className),D=O(["unit",{"unit-hidden":n},g.className]);return _?i.default.createElement(i.default.Fragment,null,i.default.createElement("span",y({},m,{className:R}),r&&!l&&v[r],t.value),t.unit?i.default.createElement("span",{className:D},t.unit):null):i.default.createElement(p.default,null)};D.propTypes=R;var E=(0,f.injectIntl)(D);t.default=E},76810:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(r(67294)),l=f(r(45697)),a=r(25387),n=f(r(94184)),o=f(r(47166)),u=f(r(50026)),s=f(r(16015)),d=f(r(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},m.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=o.default.bind(d.default),_={intl:l.default.shape({formatMessage:l.default.func}).isRequired},b=function(e){var t=e.intl,r=v(e,c),l=i.default.useContext(u.default),a=(0,n.default)(p("system-error",l.className),r.className);return i.default.createElement("span",m({},r,{className:a}),i.default.createElement(s.default,{className:p("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};b.propTypes=_;var g=(0,a.injectIntl)(b);t.default=g},15601:function(e,t,r){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=((i=r(45697))&&i.__esModule?i:{default:i}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=l},24619:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=r(45697))&&i.__esModule?i:{default:i};var a=l.default.shape({value:l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]),unit:l.default.string});t.default=a},73666:function(e,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=l(l({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var u=l(l({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=u;var s=l(l({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=s;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=l(l({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:l({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:l({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var p={id:"111",systolic:l({},c),diastolic:l({},f)};t.DefaultBloodPressureResult=p;var _={id:"111",systolic:l(l({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=_;var b={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=b;var g={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=g;var y={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=y;var h={id:"111",systolic:l(l({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:l(l({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"}),isBloodPressureGrouped:!0};t.ExtraDisplaysBloodPressureResult=h;var O={id:"111",systolic:l(l({},c),{},{interpretation:"critical"}),diastolic:l(l({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var R={id:"111",systolic:l(l({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=R;var P={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var D=n;t.default=D},25919:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(67294)),l=n(r(78670)),a=n(r(73666));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",null,i.default.createElement(l.default,{eventId:a.default.eventId,result:a.default.result,isUnverified:!0})),i.default.createElement("div",null,i.default.createElement(l.default,{eventId:a.default.eventId,result:a.default.result,interpretation:"abnormal",isUnverified:!0}))))}},33028:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}}}]);