"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4843],{82767:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=m(n(96540)),a=m(n(5556)),r=m(n(46942)),o=m(n(67967)),s=m(n(52103)),u=m(n(16524)),d=n(8604),c=m(n(79012)),f=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},y.apply(this,arguments)}function _(e,t,n){var i;return i=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(i)?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=o.default.bind(c.default),x=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},g={text:a.default.string,textStyle:a.default.oneOf(Object.values(x)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"]),textStyleMeaning:a.default.string,intl:a.default.shape({formatMessage:a.default.func}).isRequired},S={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n=e.text,l=e.textStyle,a=e.isTruncated,o=e.isDisabled,d=e.icon,c=e.iconAlignment,m=e.textStyleMeaning,g=e.intl,S=p(e,f),h=i.default.useContext(s.default),v=(0,r.default)(b("item-display",{"is-disabled":o},_({},"icon-".concat(c),d),h.className),S.className),O=b(["text",{"is-truncated":a},_({},"".concat(l),l===x.SECONDARY),_({},"".concat(l),l===x.ATTENTION),_({},"".concat(l),l===x.STRONG),{"strike-through":l===x.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),d&&(t=i.default.createElement("div",{className:b("icon")},d));var T,E,D=i.default.createElement("span",null,n);return l===x.STRONG&&(D=i.default.createElement("strong",null,n)),m?(T=m,E=g.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:m})):l===x.STRIKETHROUGH&&(T=g.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),E=g.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),i.default.createElement("div",y({},S,{className:v,"aria-disabled":o}),t,T&&i.default.createElement(u.default,{text:T}),i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O},D),E&&i.default.createElement(u.default,{text:E}))};h.propTypes=g,h.defaultProps=S;t.default=(0,d.injectIntl)(h)},24843:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),i=a(n(82767));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",null,l.default.createElement(i.default,{text:"test text (unset textStyle)",id:"test-display-undefined"}),l.default.createElement(i.default,{text:"test text",textStyle:"primary",id:"test-display-primary"}),l.default.createElement(i.default,{text:"test text",textStyle:"strong",id:"test-display-strong"}),l.default.createElement(i.default,{text:"test text",textStyle:"attention",id:"test-display-attention"}),l.default.createElement(i.default,{text:"test text",textStyle:"secondary",id:"test-display-secondary"}),l.default.createElement(i.default,{text:"test text",textStyle:"strikeThrough",id:"test-display-strike-through"}))}},79012:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);