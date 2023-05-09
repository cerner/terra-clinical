"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7268],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),i=m(n(45697)),r=m(n(94184)),l=m(n(47166)),o=m(n(50026)),u=m(n(97309)),c=m(n(94394)),s=m(n(80918)),d=["text","isTruncated"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=l.default.bind(s.default),p={text:i.default.string,isTruncated:i.default.bool},b=function(e){var t=e.text,n=e.isTruncated,i=_(e,d),l=a.default.useContext(o.default),s=(0,r.default)(y("item-comment",l.className),i.className);return a.default.createElement(c.default,f({text:t,isTruncated:n,icon:a.default.createElement(u.default,{className:y("inline-icon")})},i,{className:s}))};b.propTypes=p,b.defaultProps={text:"",isTruncated:!1};var v=b;t.default=v},94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=m(n(67294)),r=m(n(45697)),l=m(n(94184)),o=m(n(47166)),u=m(n(50026)),c=n(25387),s=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(s.default),b={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=b;var v={text:r.default.string,textStyle:r.default.oneOf(Object.values(b)),isTruncated:r.default.bool,isDisabled:r.default.bool,icon:r.default.element,iconAlignment:r.default.oneOf(["center","top","inline"]),textStyleMeaning:r.default.string,intl:r.default.shape({formatMessage:r.default.func}).isRequired},g={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n,a=e.text,r=e.textStyle,o=e.isTruncated,c=e.isDisabled,s=e.icon,m=e.iconAlignment,v=e.textStyleMeaning,g=e.intl,h=y(e,d),O=i.default.useContext(u.default),x=(0,l.default)(p("item-display",{"is-disabled":c},_({},"icon-".concat(m),s),O.className),h.className),S=p(["text",{"is-truncated":o},_({},"".concat(r),r===b.SECONDARY),_({},"".concat(r),r===b.ATTENTION),_({},"".concat(r),r===b.STRONG),{"strike-through":r===b.STRIKETHROUGH}]);return c&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),s&&(t=i.default.createElement("div",{className:p("icon")},s)),v?n="".concat(v,", ").concat(a,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningEnd"},{textStyleMeaning:v})):r===b.STRIKETHROUGH&&(n="".concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethrough"}),", ").concat(a,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethroughEnd"}))),i.default.createElement("div",f({},h,{className:x,"aria-disabled":c}),t,n?i.default.createElement("span",{"aria-label":n},i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S,"aria-hidden":"true"},a)):i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S},a))};h.propTypes=v,h.defaultProps=g;var O=(0,c.injectIntl)(h);t.default=O},47268:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),i=r(n(6696));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(i.default,{text:"test comment",id:"ItemComment"})}},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),i=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};o.displayName="IconComment",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u}}]);