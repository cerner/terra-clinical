"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7856],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_(n(67294)),r=_(n(45697)),o=n(25387),l=_(n(94184)),i=_(n(47166)),c=_(n(50026)),s=_(n(97309)),u=_(n(94394)),d=_(n(80918)),m=["text","isTruncated","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.default.bind(d.default),v={text:r.default.string,isTruncated:r.default.bool,intl:r.default.shape({formatMessage:r.default.func}).isRequired},g=function(e){var t=e.text,n=e.isTruncated,r=e.intl,o=y(e,m),i=a.default.useContext(c.default),d=(0,l.default)(p("item-comment",i.className),o.className),_=r.formatMessage({id:"Terra.itemDisplay.comment"});return a.default.createElement(u.default,f({text:t,isTruncated:n,icon:a.default.createElement(s.default,{a11yLabel:_,className:p("inline-icon"),role:"img",focusable:"true"})},o,{className:d}))};g.propTypes=v,g.defaultProps={text:"",isTruncated:!1};var b=(0,o.injectIntl)(g);t.default=b},94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var r=_(n(67294)),o=_(n(45697)),l=_(n(94184)),i=_(n(47166)),c=_(n(50026)),s=_(n(29270)),u=n(25387),d=_(n(35950)),m=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=i.default.bind(d.default),g={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=g;var b={text:o.default.string,textStyle:o.default.oneOf(Object.values(g)),isTruncated:o.default.bool,isDisabled:o.default.bool,icon:o.default.element,iconAlignment:o.default.oneOf(["center","top","inline"]),textStyleMeaning:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired},O={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n=e.text,a=e.textStyle,o=e.isTruncated,i=e.isDisabled,u=e.icon,d=e.iconAlignment,_=e.textStyleMeaning,b=e.intl,O=p(e,m),h=r.default.useContext(c.default),w=(0,l.default)(v("item-display",{"is-disabled":i},y({},"icon-".concat(d),u),h.className),O.className),T=v(["text",{"is-truncated":o},y({},"".concat(a),a===g.SECONDARY),y({},"".concat(a),a===g.ATTENTION),y({},"".concat(a),a===g.STRONG),{"strike-through":a===g.STRIKETHROUGH}]);i&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),u&&(t=r.default.createElement("div",{className:v("icon")},u));var I,S,E=r.default.createElement("span",null,n);return a===g.STRONG&&(E=r.default.createElement("strong",null,n)),_?(I=_,S=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:_})):a===g.STRIKETHROUGH&&(I=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),S=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),r.default.createElement("div",f({},O,{className:w,"aria-disabled":i}),t,I&&r.default.createElement(s.default,{text:I}),r.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:T},E),S&&r.default.createElement(s.default,{text:S}))};h.propTypes=b,h.defaultProps=O;var w=(0,u.injectIntl)(h);t.default=w},37856:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextEmphasisTypes=t.Layouts=t.AccessoryAlignments=void 0;var a=m(n(67294)),r=m(n(45697)),o=m(n(94184)),l=m(n(47166)),i=m(n(50026)),c=m(n(94394)),s=m(n(6696)),u=m(n(70901)),d=["layout","textEmphasis","overrideDefaultStyling","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=l.default.bind(u.default),p={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"};t.Layouts=p;var v={DEFAULT:"default",START:"start"};t.TextEmphasisTypes=v;var g={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"};t.AccessoryAlignments=g;var b={layout:r.default.oneOf(["oneColumn","twoColumns"]),textEmphasis:r.default.oneOf(["default","start"]),overrideDefaultStyling:r.default.bool,isTruncated:r.default.bool,accessoryAlignment:r.default.oneOf(["alignTop","alignCenter"]),startAccessory:r.default.node,reserveStartAccessorySpace:r.default.bool,endAccessory:r.default.node,displays:r.default.arrayOf(r.default.element),comment:r.default.node,refCallback:r.default.func},O={layout:p.ONE_COLUMN,textEmphasis:v.DEFAULT,overrideDefaultStyling:!1,isTruncated:!1,accessoryAlignment:g.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},h=function(e,t,n,r){var o;if(e||t){var l=y("accessory","".concat(r,"-accessory"),{"accessory-align-center":n===g.ALIGN_CENTER},{"accessory-align-top":n===g.ALIGN_TOP});o=a.default.createElement("div",{className:l},e)}return o},w=function(e,t){var n="content-primary-size",a="content-primary-color";return e>0&&(n="content-secondary-size"),(e>=2||2===t&&1===e)&&(a="content-secondary-color"),[n,a]},T=function(e,t,n,a){var r;return r=a===v.START?function(e,t,n){return n>0||e>=2?["content-secondary-size","content-secondary-color"]:w(e,t)}(e,t,n):w(e,t),["content"].concat(r)},I=function(e,t,n,r){if(null!=e&&e.length){var o=[],l=[],i=e.slice(0,8);if(t===p.TWO_COLUMNS){for(var c=0,s=[];i.length;)(c+=1)%2==0?s.push(i.splice(0,1)):o.push(i.splice(0,1));l.push(o),l.push(s)}else{for(;i.length;)o.push(i.splice(0,1));l.push(o)}return a.default.createElement("div",{className:y("column-container")},l.map((function(e,t){var o=function(e,t,n,r){var o,l=t,i=e.length;return o=0===t?"primary-column":"secondary-column",a.default.createElement("div",{className:y(o),key:l},e.map((function(e,o){var l,c=o;return l=r?"content":T(o,i,t,n),a.default.createElement("div",{className:y(l),key:c},e)})))}(e,t,n,r);return o})))}},S=function(e){var t=e.layout,n=e.textEmphasis,r=e.overrideDefaultStyling,l=e.isTruncated,c=e.accessoryAlignment,s=e.startAccessory,u=e.reserveStartAccessorySpace,m=e.endAccessory,v=e.displays,g=e.comment,b=e.refCallback,O=f(e,d),w=a.default.useContext(i.default),T=(0,o.default)(y("item-view",{"is-truncated":l},{"one-column":t===p.ONE_COLUMN},{"two-columns":t===p.TWO_COLUMNS&&!l},{"truncated-two-columns":t===p.TWO_COLUMNS&&l},w.className),O.className);return a.default.createElement("div",_({},O,{className:T,ref:b}),h(s,u,c,"start"),a.default.createElement("div",{className:y("body")},I(v,t,n,r),g),h(m,!1,c,"end"))};S.propTypes=b,S.defaultProps=O,S.Display=c.default,S.Comment=s.default;var E=S;t.default=E},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},70901:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___XR3+f","orion-fusion-theme":"ItemView-module__orion-fusion-theme___XKzHL","item-view":"ItemView-module__item-view___2xlIP",accessory:"ItemView-module__accessory___PvuEA","start-accessory":"ItemView-module__start-accessory___XlRLU","end-accessory":"ItemView-module__end-accessory___d5XtL","accessory-align-top":"ItemView-module__accessory-align-top___+M66a","accessory-align-center":"ItemView-module__accessory-align-center___2zYD3",body:"ItemView-module__body___sK4Q9","column-container":"ItemView-module__column-container___twwEy",content:"ItemView-module__content___6aCtZ","secondary-column":"ItemView-module__secondary-column___cxLlR","is-truncated":"ItemView-module__is-truncated___bmqU7","one-column":"ItemView-module__one-column___Kd1v8","primary-column":"ItemView-module__primary-column___dVonc","two-columns":"ItemView-module__two-columns___JSHlK","truncated-two-columns":"ItemView-module__truncated-two-columns___wZCDa","content-primary-color":"ItemView-module__content-primary-color___-3mpu","content-primary-size":"ItemView-module__content-primary-size___TysDs","content-secondary-color":"ItemView-module__content-secondary-color___mYi7V","content-secondary-size":"ItemView-module__content-secondary-size___cQqN8"}},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};i.displayName="IconComment",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c}}]);