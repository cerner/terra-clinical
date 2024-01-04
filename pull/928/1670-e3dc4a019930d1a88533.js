"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1670],{94394:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var l=m(n(67294)),a=m(n(45697)),r=m(n(93967)),o=m(n(19845)),u=m(n(50026)),s=m(n(29270)),d=n(25387),c=m(n(35950)),f=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_.apply(this,arguments)}function y(e,t,n){var l;return l=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=i(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(l)?l:String(l))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=o.default.bind(c.default),g=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},S={text:a.default.string,textStyle:a.default.oneOf(Object.values(g)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"]),textStyleMeaning:a.default.string,intl:a.default.shape({formatMessage:a.default.func}).isRequired},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n=e.text,i=e.textStyle,a=e.isTruncated,o=e.isDisabled,d=e.icon,c=e.iconAlignment,m=e.textStyleMeaning,S=e.intl,v=p(e,f),h=l.default.useContext(u.default),O=(0,r.default)(b("item-display",{"is-disabled":o},y({},"icon-".concat(c),d),h.className),v.className),x=b(["text",{"is-truncated":a},y({},"".concat(i),i===g.SECONDARY),y({},"".concat(i),i===g.ATTENTION),y({},"".concat(i),i===g.STRONG),{"strike-through":i===g.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),d&&(t=l.default.createElement("div",{className:b("icon")},d));var T,D,I=l.default.createElement("span",null,n);return i===g.STRONG&&(I=l.default.createElement("strong",null,n)),m?(T=m,D=S.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:m})):i===g.STRIKETHROUGH&&(T=S.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),D=S.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),l.default.createElement("div",_({},v,{className:O,"aria-disabled":o}),t,T&&l.default.createElement(s.default,{text:T}),l.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:x},I),D&&l.default.createElement(s.default,{text:D}))};h.propTypes=S,h.defaultProps=v;t.default=(0,d.injectIntl)(h)},41670:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),l=a(n(94394));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(l.default,{text:"Test Text",id:"ItemDisplay"})}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);