"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9999],{78670:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(i(67294)),l=h(i(45697)),a=h(i(94184)),n=h(i(47166)),o=h(i(50026)),s=h(i(73553)),u=h(i(53640)),d=h(i(42812)),c=h(i(96592)),f=i(25387),m=h(i(15601)),v=h(i(24619)),_=h(i(76810)),p=h(i(33028)),b=["eventId","result","interpretation","isUnverified","hideUnit","intl"];function h(e){return e&&e.__esModule?e:{default:e}}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var O=n.default.bind(p.default),R={eventId:l.default.string,result:v.default,interpretation:m.default,isUnverified:l.default.bool,hideUnit:l.default.bool,intl:l.default.shape({formatMessage:l.default.func})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},D=function(e){e.eventId;var t=e.result,i=e.interpretation,l=e.isUnverified,n=e.hideUnit,f=e.intl,m=y(e,b),v={critical:r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCritical"}),role:"img",focusable:"true"}),"critical-high":r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalHigh"}),role:"img",focusable:"true"}),"critical-low":r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalLow"}),role:"img",focusable:"true"}),positive:r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationPositive"}),role:"img",focusable:"true"}),abnormal:r.default.createElement(c.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalAbnormal"}),role:"img",focusable:"true"}),high:r.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationHigh"}),role:"img",focusable:"true"}),low:r.default.createElement(d.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationLow"}),role:"img",focusable:"true"})},p=null==t?void 0:t.value,h=r.default.useContext(o.default),R=(0,a.default)(O("value",!l&&P[i],{unverified:l},h.className),m.className),D=O(["unit",{"unit-hidden":n},h.className]);return p?r.default.createElement(r.default.Fragment,null,r.default.createElement("span",g({},m,{className:R}),i&&!l&&v[i],t.value),t.unit?r.default.createElement("span",{className:D},t.unit):null):r.default.createElement(_.default,null)};D.propTypes=R;var M=(0,f.injectIntl)(D);t.default=M},76810:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(i(67294)),l=f(i(45697)),a=i(25387),n=f(i(94184)),o=f(i(47166)),s=f(i(50026)),u=f(i(16015)),d=f(i(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},m.apply(this,arguments)}function v(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var _=o.default.bind(d.default),p={intl:l.default.shape({formatMessage:l.default.func}).isRequired},b=function(e){var t=e.intl,i=v(e,c),l=r.default.useContext(s.default),a=(0,n.default)(_("system-error",l.className),i.className);return r.default.createElement("span",m({},i,{className:a}),r.default.createElement(u.default,{className:_("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};b.propTypes=p;var h=(0,a.injectIntl)(b);t.default=h},15601:function(e,t,i){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=((r=i(45697))&&r.__esModule?r:{default:r}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=l},24619:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=i(45697))&&r.__esModule?r:{default:r};var a=l.default.shape({value:l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]),unit:l.default.string});t.default=a},73666:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==i(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=l(l({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var s=l(l({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=s;var u=l(l({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=u;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=l(l({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:l({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:l({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var _={id:"111",systolic:l({},c),diastolic:l({},f)};t.DefaultBloodPressureResult=_;var p={id:"111",systolic:l(l({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var b={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=b;var h={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=h;var g={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=g;var y={id:"111",systolic:l(l({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:l(l({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=y;var O={id:"111",systolic:l(l({},c),{},{interpretation:"critical"}),diastolic:l(l({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var R={id:"111",systolic:l(l({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=R;var P={id:"111",systolic:l(l({},c),{},{isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var D=n;t.default=D},59334:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(67294)),l=n(i(78670)),a=i(73666);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,{eventId:a.BadData.eventId,clinicalresult:a.BadData.clinicalresult})}},33028:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt","hidden-text":"OtherTemplates-module__hidden-text___EiWrF",truncated:"OtherTemplates-module__truncated___CaXog"}}}]);