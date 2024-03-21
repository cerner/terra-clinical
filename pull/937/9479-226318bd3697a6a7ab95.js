"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9479],{82767:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var a=f(l(96540)),i=f(l(5556)),r=f(l(46942)),o=f(l(67967)),u=f(l(52103)),s=f(l(16524)),d=l(8604),c=f(l(79012)),m=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function f(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},_.apply(this,arguments)}function y(e,t,l){var a;return a=function(e,t){if("object"!=n(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(a)?a:a+"")in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var b=o.default.bind(c.default),g=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},x={text:i.default.string,textStyle:i.default.oneOf(Object.values(g)),isTruncated:i.default.bool,isDisabled:i.default.bool,icon:i.default.element,iconAlignment:i.default.oneOf(["center","top","inline"]),textStyleMeaning:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},S=function(e){var t,l=e.text,n=e.textStyle,i=e.isTruncated,o=e.isDisabled,d=e.icon,c=e.iconAlignment,f=e.textStyleMeaning,x=e.intl,v=p(e,m),S=a.default.useContext(u.default),T=(0,r.default)(b("item-display",{"is-disabled":o},y({},"icon-".concat(c),d),S.className),v.className),h=b(["text",{"is-truncated":i},y({},"".concat(n),n===g.SECONDARY),y({},"".concat(n),n===g.ATTENTION),y({},"".concat(n),n===g.STRONG),{"strike-through":n===g.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),d&&(t=a.default.createElement("div",{className:b("icon")},d));var O,D,E=a.default.createElement("span",null,l);return n===g.STRONG&&(E=a.default.createElement("strong",null,l)),f?(O=f,D=x.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:f})):n===g.STRIKETHROUGH&&(O=x.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),D=x.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),a.default.createElement("div",_({},v,{className:T,"aria-disabled":o}),t,O&&a.default.createElement(s.default,{text:O}),a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:h},E),D&&a.default.createElement(s.default,{text:D}))};S.propTypes=x,S.defaultProps=v;t.default=(0,d.injectIntl)(S)},29479:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(96540)),a=u(l(44059)),i=u(l(67967)),r=u(l(82767)),o=u(l(26051));function u(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(o.default);t.default=function(){return n.default.createElement("div",null,n.default.createElement(r.default,{text:"Test Text",icon:n.default.createElement(a.default,null),id:"Default"}),n.default.createElement(r.default,{text:"Test Text",icon:n.default.createElement(a.default,null),id:"Larger",className:s("text-larger")}),n.default.createElement(r.default,{text:"Test Text",icon:n.default.createElement(a.default,null),id:"Smaller",className:s("text-smaller")}))}},79012:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},26051:function(e,t,l){l.r(t),t.default={"content-wrapper":"ItemDisplayCommon-test-module__content-wrapper___fevoj","text-larger":"ItemDisplayCommon-test-module__text-larger___Hqfxc","text-smaller":"ItemDisplayCommon-test-module__text-smaller___Eo8Y6"}}}]);