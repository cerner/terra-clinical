"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8086],{99524:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(96540)),i=m(n(5556)),l=n(8604),r=m(n(46942)),o=m(n(67967)),u=m(n(52103)),s=m(n(92613)),c=m(n(82767)),d=m(n(1941)),f=["text","isTruncated","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(d.default),b={text:i.default.string,isTruncated:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired},g=function(e){var t=e.text,n=e.isTruncated,i=e.intl,l=y(e,f),o=a.default.useContext(u.default),d=(0,r.default)(p("item-comment",o.className),l.className),m=i.formatMessage({id:"Terra.itemDisplay.comment"});return a.default.createElement(c.default,_({text:t,isTruncated:n,icon:a.default.createElement(s.default,{a11yLabel:m,className:p("inline-icon"),role:"img",focusable:"true"})},l,{className:d}))};g.propTypes=b,g.defaultProps={text:"",isTruncated:!1};t.default=(0,l.injectIntl)(g)},82767:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=m(n(96540)),l=m(n(5556)),r=m(n(46942)),o=m(n(67967)),u=m(n(52103)),s=m(n(16524)),c=n(8604),d=m(n(79012)),f=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t,n){var i;return i=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(i)?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=o.default.bind(d.default),g=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},v={text:l.default.string,textStyle:l.default.oneOf(Object.values(g)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"]),textStyleMeaning:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},O={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n=e.text,a=e.textStyle,l=e.isTruncated,o=e.isDisabled,c=e.icon,d=e.iconAlignment,m=e.textStyleMeaning,v=e.intl,O=p(e,f),h=i.default.useContext(u.default),x=(0,r.default)(b("item-display",{"is-disabled":o},y({},"icon-".concat(d),c),h.className),O.className),S=b(["text",{"is-truncated":l},y({},"".concat(a),a===g.SECONDARY),y({},"".concat(a),a===g.ATTENTION),y({},"".concat(a),a===g.STRONG),{"strike-through":a===g.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),c&&(t=i.default.createElement("div",{className:b("icon")},c));var T,I,j=i.default.createElement("span",null,n);return a===g.STRONG&&(j=i.default.createElement("strong",null,n)),m?(T=m,I=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:m})):a===g.STRIKETHROUGH&&(T=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),I=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),i.default.createElement("div",_({},O,{className:x,"aria-disabled":o}),t,T&&i.default.createElement(s.default,{text:T}),i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S},j),I&&i.default.createElement(s.default,{text:I}))};h.propTypes=v,h.defaultProps=O;t.default=(0,c.injectIntl)(h)},8086:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(96540)),i=l(n(99524));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(i.default,{text:"test comment",id:"ItemComment"})}},1941:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},79012:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},92613:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(96540)),i=l(n(25365));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t=Object.assign({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};r.displayName="IconComment",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r}}]);