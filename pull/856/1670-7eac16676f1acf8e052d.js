"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1670],{94394:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var a=m(n(67294)),l=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=n(25387),c=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(c.default),b={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=b;var g={text:l.default.string,textStyle:l.default.oneOf(Object.values(b)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"]),textStyleMeaning:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},S=function(e){var t,n=e.text,i=e.textStyle,l=e.isTruncated,o=e.isDisabled,s=e.icon,c=e.iconAlignment,m=e.textStyleMeaning,g=e.intl,v=y(e,d),S=a.default.useContext(u.default),h=(0,r.default)(p("item-display",{"is-disabled":o},_({},"icon-".concat(c),s),S.className),v.className),O=p(["text",{"is-truncated":l},_({},"".concat(i),i===b.SECONDARY),_({},"".concat(i),i===b.ATTENTION),_({},"".concat(i),i===b.STRONG),{"strike-through":i===b.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),s&&(t=a.default.createElement("div",{className:p("icon")},s));var T,x=a.default.createElement("span",null,n);return i===b.STRONG&&(x=a.default.createElement("strong",null,n)),m?T="".concat(m,", ").concat(n,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningEnd"},{textStyleMeaning:m})):i===b.STRIKETHROUGH&&(T="".concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethrough"}),", ").concat(n,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethroughEnd"}))),a.default.createElement("div",f({},v,{className:h,"aria-disabled":o}),t,T?a.default.createElement("span",{"aria-label":T},a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O,"aria-hidden":"true"},x)):a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O},x))};S.propTypes=g,S.defaultProps=v;var h=(0,s.injectIntl)(S);t.default=h},41670:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(67294)),a=l(n(94394));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(a.default,{text:"Test Text",id:"ItemDisplay"})}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);