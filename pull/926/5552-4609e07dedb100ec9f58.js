"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5552],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),l=m(n(45697)),i=n(25387),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=m(n(97309)),c=m(n(94394)),d=m(n(80918)),f=["text","isTruncated","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(d.default),b={text:l.default.string,isTruncated:l.default.bool,intl:l.default.shape({formatMessage:l.default.func}).isRequired},g=function(e){var t=e.text,n=e.isTruncated,l=e.intl,i=y(e,f),o=a.default.useContext(u.default),d=(0,r.default)(p("item-comment",o.className),i.className),m=l.formatMessage({id:"Terra.itemDisplay.comment"});return a.default.createElement(c.default,_({text:t,isTruncated:n,icon:a.default.createElement(s.default,{a11yLabel:m,className:p("inline-icon"),role:"img",focusable:"true"})},i,{className:d}))};g.propTypes=b,g.defaultProps={text:"",isTruncated:!1};t.default=(0,i.injectIntl)(g)},94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var l=m(n(67294)),i=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=m(n(29270)),c=n(25387),d=m(n(35950)),f=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=o.default.bind(d.default),g=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},v={text:i.default.string,textStyle:i.default.oneOf(Object.values(g)),isTruncated:i.default.bool,isDisabled:i.default.bool,icon:i.default.element,iconAlignment:i.default.oneOf(["center","top","inline"]),textStyleMeaning:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired},h={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},O=function(e){var t,n=e.text,a=e.textStyle,i=e.isTruncated,o=e.isDisabled,c=e.icon,d=e.iconAlignment,m=e.textStyleMeaning,v=e.intl,h=p(e,f),O=l.default.useContext(u.default),x=(0,r.default)(b("item-display",{"is-disabled":o},y({},"icon-".concat(d),c),O.className),h.className),S=b(["text",{"is-truncated":i},y({},"".concat(a),a===g.SECONDARY),y({},"".concat(a),a===g.ATTENTION),y({},"".concat(a),a===g.STRONG),{"strike-through":a===g.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),c&&(t=l.default.createElement("div",{className:b("icon")},c));var T,I,j=l.default.createElement("span",null,n);return a===g.STRONG&&(j=l.default.createElement("strong",null,n)),m?(T=m,I=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:m})):a===g.STRIKETHROUGH&&(T=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),I=v.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),l.default.createElement("div",_({},h,{className:x,"aria-disabled":o}),t,T&&l.default.createElement(s.default,{text:T}),l.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S},j),I&&l.default.createElement(s.default,{text:I}))};O.propTypes=v,O.defaultProps=h;t.default=(0,c.injectIntl)(O)},15552:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),l=i(n(6696));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(l.default,{id:"ItemComment"})}},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),l=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};o.displayName="IconComment",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);