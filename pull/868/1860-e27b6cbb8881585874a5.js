"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1860],{91556:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=E(l(67294)),r=E(l(45697)),i=E(l(94184)),n=E(l(47166)),s=E(l(50026)),u=E(l(30940)),o=E(l(14675)),d=E(l(36739)),c=E(l(29270)),f=l(25387),m=E(l(71171)),p=E(l(70739)),y=E(l(76810)),_=E(l(20500)),v=E(l(16145)),h=l(25604),g=E(l(59908)),b=["id","systolic","diastolic","hideUnit","isTruncated","hasResultError","hasResultNoData","IsBloodPressureAGroup","hideAccessoryDisplays","intl"];function E(e){return e&&e.__esModule?e:{default:e}}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},O.apply(this,arguments)}function R(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var w,N=n.default.bind(g.default),j={id:r.default.string,systolic:p.default,diastolic:p.default,hideUnit:r.default.bool,isTruncated:r.default.bool,hasResultError:r.default.bool,hasResultNoData:r.default.bool,IsBloodPressureAGroup:r.default.bool,hideAccessoryDisplays:r.default.bool,intl:r.default.shape({formatMessage:r.default.func})},C=function(e){var t=e.id,l=e.systolic,r=e.diastolic,n=e.hideUnit,f=e.isTruncated,p=e.hasResultError,g=e.hasResultNoData,E=e.IsBloodPressureAGroup,j=e.hideAccessoryDisplays,C=e.intl,I=R(e,b),S=a.default.useContext(s.default);if(p)return a.default.createElement(y.default,null);if(g||!l&&!r)return a.default.createElement(_.default,null);var P=(0,h.sanitizeResult)(l),D=(0,h.sanitizeResult)(r),M=function(e){if(e.systolic&&e.diastolic)return e.systolic===e.diastolic?a.default.createElement("div",{className:N("concept-display")},e.originalSystolic):a.default.createElement("div",{className:N("concept-display")},e.originalSystolic," / ",e.originalDiastolic);if(e.systolic||e.diastolic){var t=e.originalSystolic||e.originalDiastolic;return a.default.createElement("div",{className:N("concept-display")},t)}return null}({originalSystolic:P.conceptDisplay,originalDiastolic:D.conceptDisplay,systolic:P.cleanedConceptDisplay,diastolic:D.cleanedConceptDisplay}),k=function(e){if(w="".concat((0,m.default)(),"-dateTimeDisplay"),e.systolic&&e.diastolic)return e.systolic===e.diastolic?a.default.createElement("div",{className:N("datetime-display"),id:w},e.originalSystolic):a.default.createElement("div",{className:N("datetime-display"),id:w},e.originalSystolic," / ",e.originalDiastolic);if(e.systolic||e.diastolic){var t=e.originalSystolic||e.originalDiastolic;return a.default.createElement("div",{className:N("datetime-display"),id:w},t)}return null}({originalSystolic:P.datetimeDisplay,originalDiastolic:D.datetimeDisplay,systolic:P.cleanedDatetimeDisplay,diastolic:D.cleanedDatetimeDisplay}),U=P.isModified||D.isModified,x=P.hasComment||D.hasComment,T=P.isUnverified||D.isUnverified,F=a.default.createElement(a.default.Fragment,null,a.default.createElement(v.default,{result:P,hideUnit:n,id:t,type:"Systolic",diastolicUnit:D.cleanedUnit}),a.default.createElement("span",{key:"Observation-Separator-".concat(l?l.eventId:r.eventId),className:N("result-display-separator")},"/"),a.default.createElement(v.default,{result:D,hideUnit:n,id:t,type:"Diastolic"})),A=U&&!T?a.default.createElement(u.default,{className:N("icon-modified"),a11yLabel:C.formatMessage({id:"Terra.clinicalResult.resultModified"}),role:"img",focusable:"true"}):null,H=x&&!T?a.default.createElement(o.default,{className:N("icon-comment"),a11yLabel:C.formatMessage({id:"Terra.clinicalResult.resultComment"}),role:"img",focusable:"true"}):null,z=T?a.default.createElement(d.default,{className:N("icon-unverified"),a11yLabel:C.formatMessage({id:"Terra.clinicalResult.resultUnverified"}),role:"img",focusable:"true"}):null,B=null;(U||x||T)&&(B=a.default.createElement(a.default.Fragment,null,A,H,z));var q=N(["decorated-result-display",{truncated:f},{"status-in-error":P.statusInError||D.statusInError}]),Q=a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{role:E?"group":void 0,"aria-labelledby":E?"id-hidden-text ".concat(w):void 0},a.default.createElement("div",{className:q},a.default.createElement("div",{className:N("result-display")},E&&a.default.createElement(c.default,{id:"id-hidden-text","aria-hidden":"true",text:"Blood Pressure"}),F,f?null:!j&&B),f?!j&&B:null),!j&&M,!j&&k)),L=(0,i.default)(N("clinical-result","blood-pressure-result",{truncated:f},S.className),I.className);return a.default.createElement("div",O({},I,{className:L}),Q)};C.propTypes=j,C.defaultProps={hideUnit:!1,isTruncated:!1,hasResultError:!1,hasResultNoData:!1,IsBloodPressureAGroup:!1,hideAccessoryDisplays:!1};var I=(0,f.injectIntl)(C);t.default=I},16145:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),r=d(l(45697)),i=d(l(70739)),n=d(l(78670)),s=d(l(76810)),u=d(l(20500)),o=l(25604);function d(e){return e&&e.__esModule?e:{default:e}}var c={result:i.default,hideUnit:r.default.bool,id:r.default.string,type:r.default.string,diastolicUnit:r.default.string},f=function(e){var t=e.result,l=e.hideUnit,r=e.id,i=e.type,d=e.diastolicUnit;return t?t.noData?a.default.createElement(u.default,{key:"NoData-".concat(i,"-").concat(r)}):a.default.createElement(o.ConditionalWrapper,{key:"del-".concat(i,"-").concat(t.eventId),condition:t.statusInError,wrapper:function(e){return a.default.createElement("del",null,e)}},a.default.createElement(n.default,{key:"Observation-".concat(i,"-").concat(t.eventId),eventId:t.eventId,result:t.result,interpretation:t.statusInError?null:t.interpretation,isUnverified:t.isUnverified,hideUnit:l||t.cleanedUnit===d&&!t.statusInError})):a.default.createElement(s.default,{key:"Error-".concat(i,"-").concat(r)})};f.propTypes=c;var m=f;t.default=m},10120:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(67294)),r=f(l(45697)),i=l(25387),n=f(l(94184)),s=f(l(47166)),u=f(l(50026)),o=f(l(29270)),d=f(l(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var y=s.default.bind(d.default),_={intl:r.default.shape({formatMessage:r.default.func}).isRequired},v=function(e){var t=e.intl,l=p(e,c),r=a.default.useContext(u.default),i=(0,n.default)(y("entered-in-error",r.className),l.className);return a.default.createElement("span",m({},l,{className:i}),a.default.createElement("span",{"aria-hidden":"true"},t.formatMessage({id:"Terra.clinicalResult.statusInError"})),a.default.createElement(o.default,{text:t.formatMessage({id:"Terra.clinicalResult.statusInErrorAria"})}))};v.propTypes=_;var h=(0,i.injectIntl)(v);t.default=h},49489:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(67294)),r=c(l(45697)),i=l(25387),n=c(l(94184)),s=c(l(47166)),u=c(l(50026)),o=c(l(1095)),d=["intl"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=s.default.bind(o.default),y={intl:r.default.shape({formatMessage:r.default.func}).isRequired},_=function(e){var t=e.intl,l=m(e,d),r=a.default.useContext(u.default),i=(0,n.default)(p("numeric-overflow",r.className),l.className);return a.default.createElement("span",f({},l,{className:i}),t.formatMessage({id:"Terra.clinicalResult.viewResults"}))};_.propTypes=y;var v=(0,i.injectIntl)(_);t.default=v},63193:function(e,t,l){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=R(t);if(l&&l.has(e))return l.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=i?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}r.default=e,l&&l.set(e,r);return r}(l(67294)),i=O(l(45697)),n=O(l(94184)),s=O(l(47166)),u=O(l(50026)),o=O(l(14675)),d=O(l(30940)),c=O(l(36739)),f=O(l(38056)),m=O(l(91556)),p=O(l(70739)),y=O(l(10120)),_=O(l(76810)),v=O(l(20500)),h=O(l(49489)),g=l(25604),b=O(l(89203)),E=["resultDataSet","hideUnit","paddingStyle","hasResultError","hasResultNoData"];function O(e){return e&&e.__esModule?e:{default:e}}function R(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(R=function(e){return e?l:t})(e)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,r,i,n,s=[],u=!0,o=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;u=!1}else for(;!(u=(a=i.call(l)).done)&&(s.push(a.value),s.length!==t);u=!0);}catch(e){o=!0,r=e}finally{try{if(!u&&null!=l.return&&(n=l.return(),Object(n)!==n))return}finally{if(o)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function j(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},C.apply(this,arguments)}var I=s.default.bind(b.default),S={resultDataSet:i.default.arrayOf(i.default.shape({id:i.default.string,resultData:p.default})),hideUnit:i.default.bool,paddingStyle:i.default.oneOf(["none","standard","compact"]),hasResultError:i.default.bool,hasResultNoData:i.default.bool},P=["critical","critical-high","critical-low","positive","abnormal","high","low"],D=function(e,t,l,a,i){var n=I(["primary-display",{interpretation:l&&!t}]);return r.default.createElement("div",{key:"ClinicalResultDisplay-".concat(i),className:n,ref:a},e)},M=function(e){var t=!!e.result||!1;if(t)return{isSingleResult:t,isPairedResult:!1};var l=!(0,g.isEmpty)(e.systolic)&&e.systolic.result,a=!(0,g.isEmpty)(e.diastolic)&&e.diastolic.result;return{isSingleResult:t,isPairedResult:l||a||!1}},k=function(){return{statusInError:arguments.length>0&&void 0!==arguments[0]&&arguments[0],interpretationIcon:!!(arguments.length>1&&void 0!==arguments[1]&&arguments[1]),comment:arguments.length>2&&void 0!==arguments[2]&&arguments[2],modified:arguments.length>3&&void 0!==arguments[3]&&arguments[3],unverified:arguments.length>4&&void 0!==arguments[4]&&arguments[4]}},U=function(e){var t=e.status,l=e.interpretation,a=e.hasComment,r=e.isModified,i=e.isUnverified,n=new k;return n.statusInError=!(0,g.isEmpty)(t)&&(0,g.checkIsStatusInError)(t),n.interpretationIcon=!n.statusInError&&P.includes(l),n.comment=a,n.modified=r,n.unverified=i,n},x=function(e){var t=e[0],l={},a=M(t),r=a.isSingleResult,i=a.isPairedResult;if(r)l=U(t);else if(i){var n={systolic:null,diastolic:null},s=t.systolic,u=t.diastolic;n.systolic=(0,g.isEmpty)(s)?new k:U(s),n.diastolic=(0,g.isEmpty)(u)?new k:U(u),l=new k(n.systolic.statusInError||n.diastolic.statusInError,n.systolic.interpretationIcon,n.systolic.comment||n.diastolic.comment,n.systolic.modified||n.diastolic.modified,n.systolic.unverified||n.diastolic.unverified)}return{isfirstSingleResult:r,isfirstPairedResult:i,firstResultAttributes:l,firstResultData:t,resultKeyID:function(e,t){if(e){if(t.id)return t.id;if(!(0,g.isEmpty)(t.systolic)&&t.systolic.eventId)return t.systolic.eventId;if(!(0,g.isEmpty)(t.diastolic)&&t.diastolic.eventId)return t.diastolic.eventId}else{if(t.id)return t.id;if(t.eventId)return t.eventId}return null}(i,t)}},T=function(e,t,l,a){var i=x(e),n=i.isfirstSingleResult,s=i.isfirstPairedResult,u=i.firstResultAttributes,p=i.firstResultData,v=i.resultKeyID,b=[];if(n||s)if(n){var E=function(e,t,l,a,i,n){var s;return s=t.statusInError?r.default.createElement(y.default,null):i?r.default.createElement(h.default,null):r.default.createElement(f.default,C({key:"ClinicalResult-".concat(a)},e,{hideUnit:l,isTruncated:!0,isUnverified:t.unverified,hideAccessoryDisplays:!0})),D(s,t.unverified,t.interpretationIcon,n,a)}(p,u,t,v,l,a);b.push(E)}else{var O=function(e,t,l,a,i){var n,s=e.systolic,u=e.diastolic;return n=t.statusInError?r.default.createElement(y.default,null):r.default.createElement(m.default,{key:"ClinicalResultBloodPressure-".concat(a),systolic:s,diastolic:u,hideUnit:l,isTruncated:!0,hideAccessoryDisplays:!0}),D(n,t.unverified,t.interpretationIcon,i,a)}(p,u,t,v,a);b.push(O)}else b.push(r.default.createElement(_.default,null));var R=e.length-1;if(R>0){var w=[];e.slice(1,e.length).forEach((function(e){var t=M(e),l=t.isSingleResult,a=t.isPairedResult;if(l){if(!(!(0,g.isEmpty)(e.status)&&(0,g.checkIsStatusInError)(e.status))){var r=(0,g.isEmpty)(e.interpretation)||e.isUnverified?null:e.interpretation;w.push(r)}}else if(a){var i={systolic:!(0,g.isEmpty)(e.systolic)&&(0,g.checkIsStatusInError)(e.systolic.status),diastolic:!(0,g.isEmpty)(e.diastolic)&&(0,g.checkIsStatusInError)(e.diastolic.status)};if(!i.systolic&&!i.diastolic){var n=(0,g.isEmpty)(e.systolic.interpretation)||e.systolic.isUnverified?null:e.systolic.interpretation,s=(0,g.isEmpty)(e.diastolic.interpretation)||e.diastolic.isUnverified?null:e.diastolic.interpretation;w.push(n),w.push(s)}}}));var N=R+1,j=u.comment||u.modified||u.unverified,S=function(e,t,l,a){var i,n=e;if(n<1)return null;["critical","critical-high","critical-low","positive"].some((function(e){return t.indexOf(e)>=0}))?i="critical":["abnormal","high","low"].some((function(e){return t.indexOf(e)>=0}))&&(i="high");var s=I(["additional-end-display",{"no-accessory-icons":!l},{"interpretation-critical":"critical"===i},{"interpretation-high":"high"===i}]),u=n>99?r.default.createElement("span",{className:I(["additional-results-value","additional-results-max-value"])},"99+"):r.default.createElement("span",{className:I("additional-results-value")},n);return r.default.createElement("div",{key:"AdditionalResultsDisplay-".concat(a),className:s},r.default.createElement("div",{className:I("additional-results-stack")},u,u))}(N,w,j,v);b.push(S)}var P=function(e,t,l,a){return e||t||l?(i=l?r.default.createElement(c.default,{className:I("icon-unverified")}):r.default.createElement(r.default.Fragment,null,e?r.default.createElement(o.default,{className:I("icon-comment")}):null,t?r.default.createElement(d.default,{className:I("icon-modified")}):null),r.default.createElement("div",{key:"EndAccessoryIcons-".concat(a),className:I("end-accessory-icons")},r.default.createElement("div",{className:I("end-accessory-stack")},i))):null;var i}(u.comment,u.modified,u.unverified,v);return b.push(P),b},F=function(e){var t,l=e.resultDataSet,a=e.hideUnit,i=e.paddingStyle,s=e.hasResultError,o=e.hasResultNoData,d=j(e,E),c=(0,r.useRef)(null),f=w((0,r.useState)(null),2),m=f[0],p=f[1],y=w((0,r.useState)(!1),2),h=y[0],b=y[1];(0,r.useEffect)((function(){if(c.current&&l[0]&&(0,g.checkTypeNumeric)(l[0])){m||p(c.current.children[0].getBoundingClientRect().width);var e=c.current.getBoundingClientRect().width;e<=m&&!h?b(!0):e>m&&b(!1)}}),[l,m,h]),t=s?r.default.createElement("div",{key:"ClinicalResultDisplay-Error",className:I(["primary-display","error"])},r.default.createElement(_.default,null)):o?r.default.createElement("div",{key:"ClinicalResultDisplay-NoData",className:I("primary-display")},r.default.createElement(v.default,null)):l&&l.length?T(l,a,h,c):r.default.createElement("div",{key:"ClinicalResultDisplay-Error",className:I(["primary-display","error"])},r.default.createElement(_.default,null));var O=r.default.useContext(u.default),R=(0,n.default)(I("flowsheet-result-cell",{"padding-standard":"standard"===i},{"padding-compact":"compact"===i},O.className),d.className);return r.default.createElement("div",C({},d,{className:R}),t)};F.propTypes=S,F.defaultProps={resultDataSet:[],paddingStyle:"compact"};var A=F;t.default=A},21860:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ClinicalResultBloodPressure",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"FlowsheetResultCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ResultNameHeaderCell",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ResultTimeHeaderCell",{enumerable:!0,get:function(){return s.default}}),t.default=void 0;var a=u(l(38056)),r=u(l(91556)),i=u(l(63193)),n=u(l(67974)),s=u(l(86776));function u(e){return e&&e.__esModule?e:{default:e}}var o=a.default;t.default=o},70739:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(45697)),r=s(l(15601)),i=s(l(82059)),n=s(l(24619));function s(e){return e&&e.__esModule?e:{default:e}}var u=a.default.shape({eventId:a.default.string,result:n.default,interpretation:r.default,status:i.default,isNumeric:a.default.bool,isModified:a.default.bool,hasComment:a.default.bool,isUnverified:a.default.bool,conceptDisplay:a.default.string,datetimeDisplay:a.default.string,hideUnit:a.default.bool,resultNoData:a.default.bool});t.default=u},67974:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(67294)),r=c(l(45697)),i=c(l(94184)),n=c(l(47166)),s=c(l(50026)),u=c(l(75766)),o=c(l(18847)),d=["resultName","unit","paddingStyle","typeIndicator"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.default.bind(o.default),y={resultName:r.default.string.isRequired,unit:r.default.string,paddingStyle:r.default.oneOf(["none","compact","standard"]),typeIndicator:r.default.oneOf(["none","calculated"])},_={none:null,calculated:a.default.createElement(u.default,{className:p("icon-rowindicator")})},v=function(e){var t=e.resultName,l=e.unit,r=e.paddingStyle,n=e.typeIndicator,u=m(e,d),o=a.default.useContext(s.default),c=(0,i.default)(p("clinical-result-name-header-cell",{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},o.className),u.className);return a.default.createElement("div",f({},u,{className:c}),a.default.createElement("div",{className:p("name")},_[n.toLowerCase()],t),l&&a.default.createElement("div",{className:p("unit")},l))};v.propTypes=y,v.defaultProps={paddingStyle:"compact",typeIndicator:"none"};var h=v;t.default=h},86776:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),r=d(l(45697)),i=d(l(94184)),n=d(l(47166)),s=d(l(50026)),u=d(l(58598)),o=["date","time","hideDate","paddingStyle"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m=n.default.bind(u.default),p={date:r.default.string.isRequired,time:r.default.string.isRequired,hideDate:r.default.bool,paddingStyle:r.default.oneOf(["none","compact","standard"])},y=function(e){var t=e.date,l=e.time,r=e.hideDate,n=e.paddingStyle,u=f(e,o),d=m(["date",{"hide-date":r}]),p=a.default.useContext(s.default),y=(0,i.default)(m("clinical-result-time-header-cell",{"padding-standard":"standard"===n},{"padding-compact":"compact"===n},p.className),u.className);return a.default.createElement("div",c({},u,{className:y}),a.default.createElement("div",{className:d},t),a.default.createElement("div",{className:m("time")},l))};y.propTypes=p,y.defaultProps={paddingStyle:"compact"};var _=y;t.default=_},89203:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FlowsheetResultCell-module__clinical-lowlight-theme___U4UOn","orion-fusion-theme":"FlowsheetResultCell-module__orion-fusion-theme___JlnUQ","flowsheet-result-cell":"FlowsheetResultCell-module__flowsheet-result-cell___+k2sf","primary-display":"FlowsheetResultCell-module__primary-display___e3CDG",unverified:"FlowsheetResultCell-module__unverified___CZuUN",interpretation:"FlowsheetResultCell-module__interpretation___41Mn1",error:"FlowsheetResultCell-module__error___PmZ2p","additional-end-display":"FlowsheetResultCell-module__additional-end-display___lQZIo","no-accessory-icons":"FlowsheetResultCell-module__no-accessory-icons___W1VbC","interpretation-neutral":"FlowsheetResultCell-module__interpretation-neutral___XqIEa","additional-results-value":"FlowsheetResultCell-module__additional-results-value___LxFU0","interpretation-high":"FlowsheetResultCell-module__interpretation-high___ZqJks","interpretation-critical":"FlowsheetResultCell-module__interpretation-critical___mSOyy","additional-results-stack":"FlowsheetResultCell-module__additional-results-stack___EJ5rQ","additional-results-max-value":"FlowsheetResultCell-module__additional-results-max-value___kw7Ni","end-accessory-icons":"FlowsheetResultCell-module__end-accessory-icons___pQ78P","end-accessory-stack":"FlowsheetResultCell-module__end-accessory-stack___zx5N5","icon-comment":"FlowsheetResultCell-module__icon-comment___IPwdd","icon-modified":"FlowsheetResultCell-module__icon-modified___tQ5iq","icon-unverified":"FlowsheetResultCell-module__icon-unverified___dlEQh","error-display":"FlowsheetResultCell-module__error-display___qOomC","padding-standard":"FlowsheetResultCell-module__padding-standard___mP9tT","padding-compact":"FlowsheetResultCell-module__padding-compact___3QqOx"}},18847:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ResultNameHeaderCell-module__clinical-lowlight-theme___p+Zu-","orion-fusion-theme":"ResultNameHeaderCell-module__orion-fusion-theme___qbYRQ","clinical-result-name-header-cell":"ResultNameHeaderCell-module__clinical-result-name-header-cell___icZyf",name:"ResultNameHeaderCell-module__name___XWEFB",unit:"ResultNameHeaderCell-module__unit___uwBhR","icon-rowindicator":"ResultNameHeaderCell-module__icon-rowindicator___CSQPe","padding-standard":"ResultNameHeaderCell-module__padding-standard___14HoY","padding-compact":"ResultNameHeaderCell-module__padding-compact___XSvot"}},58598:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ResultTimeHeaderCell-module__clinical-lowlight-theme___EBad+","orion-fusion-theme":"ResultTimeHeaderCell-module__orion-fusion-theme___Fjhl+","clinical-result-time-header-cell":"ResultTimeHeaderCell-module__clinical-result-time-header-cell___gZc3j",date:"ResultTimeHeaderCell-module__date___TJG0t","hide-date":"ResultTimeHeaderCell-module__hide-date___L0wnb",time:"ResultTimeHeaderCell-module__time___899or","padding-standard":"ResultTimeHeaderCell-module__padding-standard___fUybA","padding-compact":"ResultTimeHeaderCell-module__padding-compact___JRb95"}},75766:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(l(67294)),r=i(l(5073));function i(e){return e&&e.__esModule?e:{default:e}}function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},n.apply(this,arguments)}var s=function(e){var t=n({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M38 0H10a2 2 0 00-2 2v44a2 2 0 002 2h28a2 2 0 002-2V2a2 2 0 00-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};s.displayName="IconCalculator",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=s;t.default=u}}]);