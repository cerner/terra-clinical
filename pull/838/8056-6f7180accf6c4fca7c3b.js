"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8056],{38056:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=v(a(67294)),r=v(a(45697)),n=v(a(94184)),i=v(a(47166)),o=v(a(50026)),u=v(a(84582)),s=v(a(76810)),d=v(a(20500)),c=v(a(82059)),f=v(a(15601)),m=v(a(24619)),p=v(a(59908)),_=["eventId","result","interpretation","hideUnit","isTruncated","isUnverified","isModified","hasComment","hasResultError","hasResultNoData","hideAccessoryDisplays","conceptDisplay","status","datetimeDisplay"];function v(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=i.default.bind(p.default),O={eventId:r.default.string,result:m.default,interpretation:f.default,isUnverified:r.default.bool,conceptDisplay:r.default.string,datetimeDisplay:r.default.string,hideUnit:r.default.bool,isTruncated:r.default.bool,isModified:r.default.bool,hasComment:r.default.bool,hasResultError:r.default.bool,hasResultNoData:r.default.bool,status:c.default,hideAccessoryDisplays:r.default.bool},g=function(e){var t,a=e.eventId,r=e.result,i=e.interpretation,c=e.hideUnit,f=e.isTruncated,m=e.isUnverified,p=e.isModified,v=e.hasComment,O=e.hasResultError,g=e.hasResultNoData,w=e.hideAccessoryDisplays,j=e.conceptDisplay,E=e.status,M=e.datetimeDisplay,C=b(e,_);t=O?l.default.createElement(s.default,null):g?l.default.createElement(d.default,null):l.default.createElement(u.default,{eventId:a,result:r,interpretation:i,isUnverified:m,status:E,hideUnit:c,isTruncated:f,hideAccessoryDisplays:w,isModified:p,hasComment:v,conceptDisplay:j,datetimeDisplay:M});var D=l.default.useContext(o.default),N=(0,n.default)(h("clinical-result",{truncated:f},D.className),C.className);return l.default.createElement("div",y({},C,{className:N}),t)};g.propTypes=O;var w=g;t.default=w},84582:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=p(a(67294)),r=p(a(45697)),n=p(a(47166)),i=p(a(82059)),o=p(a(15601)),u=p(a(24619)),s=p(a(78670)),d=p(a(19556)),c=p(a(34427)),f=p(a(59908)),m=a(25604);function p(e){return e&&e.__esModule?e:{default:e}}var _=n.default.bind(f.default),v={eventId:r.default.string,result:u.default,interpretation:o.default,isUnverified:r.default.bool,conceptDisplay:r.default.string,datetimeDisplay:r.default.string,hideUnit:r.default.bool,isTruncated:r.default.bool,isModified:r.default.bool,hasComment:r.default.bool,status:i.default,hideAccessoryDisplays:r.default.bool},y=function(e){var t=e.eventId,a=e.result,r=e.interpretation,n=e.isUnverified,i=e.status,o=e.hideUnit,u=e.isTruncated,f=e.hideAccessoryDisplays,p=e.isModified,v=e.hasComment,y=e.conceptDisplay,b=e.datetimeDisplay,h=!(0,m.isEmpty)(i)&&(0,m.checkIsStatusInError)(i),O=_(["decorated-result-display",{truncated:u},{"status-in-error":h}]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:O},l.default.createElement("div",{className:_("result-display")},l.default.createElement(m.ConditionalWrapper,{key:"del-Observation-".concat(t),condition:h,wrapper:function(e){return l.default.createElement("del",null,e)}},l.default.createElement(s.default,{key:"Observation-".concat(t),eventId:t,result:a,interpretation:h?null:r,isUnverified:n,hideUnit:o})),u?null:!f&&l.default.createElement(d.default,{isUnverified:n,isModified:p,hasComment:v})),u?!f&&l.default.createElement(d.default,{isUnverified:n,isModified:p,hasComment:v}):null),!f&&l.default.createElement(c.default,{conceptDisplay:y,datetimeDisplay:b}))};y.propTypes=v;var b=y;t.default=b},19556:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(67294)),r=c(a(45697)),n=c(a(30940)),i=c(a(14675)),o=c(a(36739)),u=a(25387),s=c(a(47166)),d=c(a(59908));function c(e){return e&&e.__esModule?e:{default:e}}var f=s.default.bind(d.default),m={isModified:r.default.bool,hasComment:r.default.bool,isUnverified:r.default.bool,intl:r.default.shape({formatMessage:r.default.func})},p=function(e){var t=e.isUnverified,a=e.isModified,r=e.hasComment,u=e.intl;return t?l.default.createElement(o.default,{className:f("icon-unverified"),a11yLabel:u.formatMessage({id:"Terra.clinicalResult.resultUnverified"})}):l.default.createElement(l.default.Fragment,null,a?l.default.createElement(n.default,{className:f("icon-modified"),a11yLabel:u.formatMessage({id:"Terra.clinicalResult.resultModified"})}):null,r?l.default.createElement(i.default,{className:f("icon-comment"),a11yLabel:u.formatMessage({id:"Terra.clinicalResult.resultComment"})}):null)};p.propTypes=m;var _=(0,u.injectIntl)(p);t.default=_},34427:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),r=o(a(45697)),n=o(a(47166)),i=o(a(59908));function o(e){return e&&e.__esModule?e:{default:e}}var u=n.default.bind(i.default),s={conceptDisplay:r.default.string,datetimeDisplay:r.default.string},d=function(e){var t=e.conceptDisplay,a=e.datetimeDisplay;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("div",{className:u("concept-display")},t),a&&l.default.createElement("div",{className:u("datetime-display")},a))};d.propTypes=s;var c=d;t.default=c},78670:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=b(a(67294)),r=b(a(45697)),n=b(a(94184)),i=b(a(47166)),o=b(a(50026)),u=b(a(73553)),s=b(a(53640)),d=b(a(42812)),c=b(a(96592)),f=a(25387),m=b(a(15601)),p=b(a(24619)),_=b(a(76810)),v=b(a(33028)),y=["eventId","result","interpretation","isUnverified","hideUnit","intl"];function b(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=i.default.bind(v.default),w={eventId:r.default.string,result:p.default,interpretation:m.default,isUnverified:r.default.bool,hideUnit:r.default.bool,intl:r.default.shape({formatMessage:r.default.func})},j={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},E=function(e){e.eventId;var t=e.result,a=e.interpretation,r=e.isUnverified,i=e.hideUnit,f=e.intl,m=O(e,y),p={critical:l.default.createElement(u.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCritical"})}),"critical-high":l.default.createElement(u.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalHigh"})}),"critical-low":l.default.createElement(u.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalLow"})}),positive:l.default.createElement(u.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationPositive"})}),abnormal:l.default.createElement(c.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationCriticalAbnormal"})}),high:l.default.createElement(s.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationHigh"})}),low:l.default.createElement(d.default,{className:g("icon-interpretation"),a11yLabel:f.formatMessage({id:"Terra.clinicalResult.interpretationLow"})})},v=null==t?void 0:t.value,b=l.default.useContext(o.default),w=(0,n.default)(g("value",!r&&j[a],{unverified:r},b.className),m.className),E=g(["unit",{"unit-hidden":i},b.className]);return v?l.default.createElement(l.default.Fragment,null,l.default.createElement("span",h({},m,{className:w}),a&&!r&&p[a],t.value),t.unit?l.default.createElement("span",{className:E},t.unit):null):l.default.createElement(_.default,null)};E.propTypes=w;var M=(0,f.injectIntl)(E);t.default=M},20500:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(67294)),r=c(a(45697)),n=a(25387),i=c(a(94184)),o=c(a(47166)),u=c(a(50026)),s=c(a(1095)),d=["intl"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(s.default),_={intl:r.default.shape({formatMessage:r.default.func}).isRequired},v=function(e){var t=e.intl,a=m(e,d),r=l.default.useContext(u.default),n=(0,i.default)(p("no-data",r.className),a.className);return l.default.createElement("span",f({},a,{className:n,"aria-label":t.formatMessage({id:"Terra.clinicalResult.resultNoData"})}),"--")};v.propTypes=_;var y=(0,n.injectIntl)(v);t.default=y},76810:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(a(67294)),r=f(a(45697)),n=a(25387),i=f(a(94184)),o=f(a(47166)),u=f(a(50026)),s=f(a(16015)),d=f(a(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=o.default.bind(d.default),v={intl:r.default.shape({formatMessage:r.default.func}).isRequired},y=function(e){var t=e.intl,a=p(e,c),r=l.default.useContext(u.default),n=(0,i.default)(_("system-error",r.className),a.className);return l.default.createElement("span",m({},a,{className:n}),l.default.createElement(s.default,{className:_("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};y.propTypes=v;var b=(0,n.injectIntl)(y);t.default=b},25604:function(e,t){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeResult=t.isEmpty=t.default=t.checkTypeNumeric=t.checkIsStatusInError=t.ConditionalWrapper=void 0;var n=function(e){return!e||0===e.length};t.isEmpty=n;var i=function(e){return"entered-in-error"===(n(e)?void 0:e.trim().toLowerCase())};t.checkIsStatusInError=i;var o=function(e){return!n(e.isNumeric)&&!0===e.isNumeric};t.checkTypeNumeric=o;t.sanitizeResult=function(e){if(!e)return{};var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);if(t.noData=!0===e.resultNoData,!t.noData){var a=e.result,o=e.status,u=e.conceptDisplay,s=e.datetimeDisplay;n(a.unit)||(t.cleanedUnit=a.unit.trim().toLowerCase()),n(o)||(t.statusInError=i(o)),n(u)||(t.cleanedConceptDisplay=u.trim().toLowerCase()),n(s)||(t.cleanedDatetimeDisplay=s.trim().toLowerCase())}return t};var u=function(e){var t=e.condition,a=e.wrapper,l=e.children;return t?a(l):l};t.ConditionalWrapper=u;var s={isEmpty:n,checkIsStatusInError:i,checkTypeNumeric:o,ConditionalWrapper:u};t.default=s},15601:function(e,t,a){var l;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((l=a(45697))&&l.__esModule?l:{default:l}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=r},82059:function(e,t,a){var l;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((l=a(45697))&&l.__esModule?l:{default:l}).default.oneOf(["entered-in-error"]);t.default=r},24619:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=a(45697))&&l.__esModule?l:{default:l};var n=r.default.shape({value:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string)]),unit:r.default.string});t.default=n},59908:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ClinicalResult-module__clinical-lowlight-theme___PZWDo","orion-fusion-theme":"ClinicalResult-module__orion-fusion-theme___Xi6DV","clinical-result":"ClinicalResult-module__clinical-result___-QjSd",truncated:"ClinicalResult-module__truncated___sSa6U","decorated-result-display":"ClinicalResult-module__decorated-result-display___fmdeo","concept-display":"ClinicalResult-module__concept-display___Pp8Ep","datetime-display":"ClinicalResult-module__datetime-display___OKwuQ","status-in-error":"ClinicalResult-module__status-in-error___ahHyl","result-display":"ClinicalResult-module__result-display___EGbpt","icon-modified":"ClinicalResult-module__icon-modified___sgPEi","icon-comment":"ClinicalResult-module__icon-comment___wohgd","icon-unverified":"ClinicalResult-module__icon-unverified___1Rm2w","result-display-separator":"ClinicalResult-module__result-display-separator___vFI38"}},33028:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}},58142:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___7D+6c","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___Cyu+4",IconDiamond:"IconDiamond-module__IconDiamond___Qc2SU"}},14675:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(5073));function n(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};o.displayName="IconComment",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u},36739:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(67294)),r=s(a(12949)),n=s(a(80201)),i=s(a(99063)),o=s(a(5073)),u=s(a(58142));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}var c=n.default.bind(u.default),f=function(e){var t=d({},e),a=l.default.useContext(i.default),n=(0,r.default)(c("IconDiamond",a.className),e.className);return l.default.createElement(o.default,d({},t,{className:n}),l.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};f.displayName="IconDiamond",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},30940:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(5073));function n(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M24 0L3 42l-3 6h48L24 0zm-1.7 10.1l16 31.9H6.4l15.9-31.9z"}))};o.displayName="IconModified",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=o;t.default=u}}]);