"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9334],{78670:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=g(i(67294)),r=g(i(45697)),a=g(i(94184)),n=g(i(47166)),o=g(i(50026)),u=g(i(46510)),s=g(i(88897)),c=g(i(65735)),d=g(i(15056)),f=i(25387),m=g(i(15601)),_=g(i(24619)),v=g(i(76810)),p=g(i(33028)),h=["eventId","result","interpretation","isUnverified","hideUnit","intl"];function g(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var O=n.default.bind(p.default),w={eventId:r.default.string,result:_.default,interpretation:m.default,isUnverified:r.default.bool,hideUnit:r.default.bool,intl:r.default.shape({formatMessage:r.default.func})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},M=function(e){e.eventId;var t=e.result,i=e.interpretation,r=e.isUnverified,n=e.hideUnit,f=e.intl,m=y(e,h),_={critical:l.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCritical"}),role:"img",focusable:"true"}),"critical-high":l.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalHigh"}),role:"img",focusable:"true"}),"critical-low":l.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalLow"}),role:"img",focusable:"true"}),positive:l.default.createElement(u.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationPositive"}),role:"img",focusable:"true"}),abnormal:l.default.createElement(d.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationAbnormal"}),role:"img",focusable:"true"}),high:l.default.createElement(s.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationOutOfRangeHigh"}),role:"img",focusable:"true"}),low:l.default.createElement(c.default,{className:O("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationOutOfRangeLow"}),role:"img",focusable:"true"})},p=t&&t.value&&(!Array.isArray(t.value)||0!==t.value.length),g=l.default.useContext(o.default),w=(0,a.default)(O("value",!r&&P[i],{unverified:r},g.className),m.className),M=O(["unit",{"unit-hidden":n},g.className]);return p?l.default.createElement(l.default.Fragment,null,l.default.createElement("span",b({},m,{className:w}),i&&!r&&_[i],t.value),t.unit?l.default.createElement("span",{className:M},t.unit):null):l.default.createElement(v.default,null)};M.propTypes=w;t.default=(0,f.injectIntl)(M)},76810:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(i(67294)),r=f(i(45697)),a=i(25387),n=f(i(94184)),o=f(i(47166)),u=f(i(50026)),s=f(i(51331)),c=f(i(1095)),d=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},m.apply(this,arguments)}function _(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var v=o.default.bind(c.default),p={intl:r.default.shape({formatMessage:r.default.func}).isRequired},h=function(e){var t=e.intl,i=_(e,d),r=l.default.useContext(u.default),a=(0,n.default)(v("system-error",r.className),i.className);return l.default.createElement("span",m({},i,{className:a}),l.default.createElement(s.default,{className:v("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};h.propTypes=p;t.default=(0,a.injectIntl)(h)},15601:function(e,t,i){var l;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((l=i(45697))&&l.__esModule?l:{default:l}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=r},24619:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=i(45697))&&l.__esModule?l:{default:l};var a=r.default.shape({value:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string)]),unit:r.default.string});t.default=a},73666:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.EmptyStringResult=t.EmptyArrayResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=(t.SingleResultValue=r(r({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"}),t.DecoratedResult=r(r({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1}),t.UnverifiedResult=r(r({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0}),t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"},t.EnteredInErrorResult=r(r({},n),{},{interpretation:"critical",status:"entered-in-error"}),t.DefaultSystolicResult={eventId:"111.1",result:{value:"180",unit:"mmHg"}}),u=t.DefaultDiastolicResult={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultBloodPressureSystolicResultWithNoId={systolic:r({},o)},t.DefaultBloodPressureDiastolicResultWithNoId={diastolic:r({},u)},t.DefaultBloodPressureResult={id:"111",systolic:r({},o),diastolic:r({},u)},t.DecoratedBloodPressureResult1={id:"111",systolic:r(r({},o),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:r(r({},u),{},{isModified:!1,hasComment:!1,isUnverified:!1})},t.DecoratedBloodPressureResult2={id:"111",systolic:r(r({},o),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:r(r({},u),{},{isModified:!0,hasComment:!0,isUnverified:!1})},t.UnverifiedBloodPressureResult1={id:"111",systolic:r(r({},o),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:r(r({},u),{},{isModified:!1,hasComment:!1,isUnverified:!1})},t.UnverifiedBloodPressureResult2={id:"111",systolic:r(r({},o),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:r(r({},u),{},{isModified:!1,hasComment:!1,isUnverified:!0})},t.ExtraDisplaysBloodPressureResult={id:"111",systolic:r(r({},o),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:r(r({},u),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"}),isBloodPressureGrouped:!0},t.MixedBPResultValue={id:"111",systolic:r(r({},o),{},{interpretation:"critical"}),diastolic:r(r({},u),{},{interpretation:"low"})},t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0},t.EmptyStringResult={eventId:"",result:{value:"",unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1},t.EmptyArrayResult={eventId:"",result:{value:[],unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1},t.EnteredInErrorSysBPResult={id:"111",systolic:r(r({},o),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:r(r({},u),{},{isModified:!1,hasComment:!1})},t.EnteredInErrorDiaBPResult={id:"111",systolic:r(r({},o),{},{isModified:!1,hasComment:!1}),diastolic:r(r({},u),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})},t.default=n},59334:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(i(67294)),r=n(i(78670)),a=i(73666);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(r.default,{eventId:a.BadData.eventId,clinicalresult:a.BadData.clinicalresult})}},75974:function(e,t,i){i.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},83664:function(e,t,i){i.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},30877:function(e,t,i){i.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},8539:function(e,t,i){i.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},33028:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}},15056:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(i(67294)),r=s(i(94184)),a=s(i(47166)),n=s(i(50026)),o=s(i(99139)),u=s(i(75974));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},c.apply(this,arguments)}var d=a.default.bind(u.default),f=function(e){var t=c({},e),i=l.default.useContext(n.default),a=(0,r.default)(d("IconAbnormal",i.className),e.className);return l.default.createElement(o.default,c({},t,{className:a}),l.default.createElement("path",{fill:"#654A08",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},46510:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(i(67294)),r=s(i(94184)),a=s(i(47166)),n=s(i(50026)),o=s(i(99139)),u=s(i(83664));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},c.apply(this,arguments)}var d=a.default.bind(u.default),f=function(e){var t=c({},e),i=l.default.useContext(n.default),a=(0,r.default)(d("IconCritical",i.className),e.className);return l.default.createElement(o.default,c({},t,{className:a}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},88897:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(i(67294)),r=s(i(94184)),a=s(i(47166)),n=s(i(50026)),o=s(i(99139)),u=s(i(30877));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},c.apply(this,arguments)}var d=a.default.bind(u.default),f=function(e){var t=c({},e),i=l.default.useContext(n.default),a=(0,r.default)(d("IconHigh",i.className),e.className);return l.default.createElement(o.default,c({},t,{className:a}),l.default.createElement("path",{fill:"#B53203",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 0 0-.8.3L.3 23.2a1.215 1.215 0 0 0 0 1.6l22.9 22.9a1.217 1.217 0 0 0 1.6 0l22.9-22.9a1.217 1.217 0 0 0 0-1.6L24.8.3A1.135 1.135 0 0 0 24 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},65735:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(i(67294)),r=s(i(94184)),a=s(i(47166)),n=s(i(50026)),o=s(i(99139)),u=s(i(8539));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},c.apply(this,arguments)}var d=a.default.bind(u.default),f=function(e){var t=c({},e),i=l.default.useContext(n.default),a=(0,r.default)(d("IconLow",i.className),e.className);return l.default.createElement(o.default,c({},t,{className:a}),l.default.createElement("path",{fill:"#0053E6",d:"M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39 11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m}}]);