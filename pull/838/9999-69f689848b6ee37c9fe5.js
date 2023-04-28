"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9999],{78670:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(i(67294)),a=h(i(45697)),l=h(i(94184)),n=h(i(47166)),o=h(i(50026)),s=h(i(73553)),u=h(i(53640)),d=h(i(42812)),c=h(i(96592)),f=i(25387),m=h(i(15601)),v=h(i(24619)),_=h(i(76810)),p=h(i(33028)),y=["eventId","result","interpretation","isUnverified","hideUnit","intl"];function h(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var O=n.default.bind(p.default),R={eventId:a.default.string,result:v.default,interpretation:m.default,isUnverified:a.default.bool,hideUnit:a.default.bool,intl:a.default.shape({formatMessage:a.default.func})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},D=function(e){e.eventId;var t=e.result,i=e.interpretation,a=e.isUnverified,n=e.hideUnit,f=e.intl,m=g(e,y),v={critical:r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCritical"})}),"critical-high":r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalHigh"})}),"critical-low":r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalLow"})}),positive:r.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationPositive"})}),abnormal:r.default.createElement(c.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalAbnormal"})}),high:r.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationHigh"})}),low:r.default.createElement(d.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationLow"})})},p=null==t?void 0:t.value,h=r.default.useContext(o.default),R=(0,l.default)(O("value",!a&&P[i],{unverified:a},h.className),m.className),D=O(["unit",{"unit-hidden":n},h.className]);return p?r.default.createElement(r.default.Fragment,null,r.default.createElement("span",b({},m,{className:R}),i&&!a&&v[i],t.value),t.unit?r.default.createElement("span",{className:D},t.unit):null):r.default.createElement(_.default,null)};D.propTypes=R;var M=(0,f.injectIntl)(D);t.default=M},76810:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(i(67294)),a=f(i(45697)),l=i(25387),n=f(i(94184)),o=f(i(47166)),s=f(i(50026)),u=f(i(16015)),d=f(i(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},m.apply(this,arguments)}function v(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var _=o.default.bind(d.default),p={intl:a.default.shape({formatMessage:a.default.func}).isRequired},y=function(e){var t=e.intl,i=v(e,c),a=r.default.useContext(s.default),l=(0,n.default)(_("system-error",a.className),i.className);return r.default.createElement("span",m({},i,{className:l}),r.default.createElement(u.default,{className:_("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};y.propTypes=p;var h=(0,l.injectIntl)(y);t.default=h},15601:function(e,t,i){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((r=i(45697))&&r.__esModule?r:{default:r}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=a},24619:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=i(45697))&&r.__esModule?r:{default:r};var l=a.default.shape({value:a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.string)]),unit:a.default.string});t.default=l},73666:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=a(a({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var s=a(a({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=s;var u=a(a({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=u;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=a(a({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:a({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:a({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var _={id:"111",systolic:a({},c),diastolic:a({},f)};t.DefaultBloodPressureResult=_;var p={id:"111",systolic:a(a({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:a(a({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var y={id:"111",systolic:a(a({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:a(a({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=y;var h={id:"111",systolic:a(a({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:a(a({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=h;var b={id:"111",systolic:a(a({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:a(a({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=b;var g={id:"111",systolic:a(a({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:a(a({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=g;var O={id:"111",systolic:a(a({},c),{},{interpretation:"critical"}),diastolic:a(a({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var R={id:"111",systolic:a(a({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:a(a({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=R;var P={id:"111",systolic:a(a({},c),{},{isModified:!1,hasComment:!1}),diastolic:a(a({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var D=n;t.default=D},59334:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(67294)),a=n(i(78670)),l=i(73666);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.default,{eventId:l.BadData.eventId,clinicalresult:l.BadData.clinicalresult})}},33028:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}}}]);