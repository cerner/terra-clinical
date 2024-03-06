"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5977],{99524:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=_(n(96540)),r=_(n(5556)),o=n(8604),a=_(n(46942)),i=_(n(67967)),c=_(n(52103)),u=_(n(92613)),s=_(n(82767)),m=_(n(1941)),d=["text","isTruncated","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.default.bind(m.default),v={text:r.default.string,isTruncated:r.default.bool,intl:r.default.shape({formatMessage:r.default.func}).isRequired},g=function(e){var t=e.text,n=e.isTruncated,r=e.intl,o=y(e,d),i=l.default.useContext(c.default),m=(0,a.default)(p("item-comment",i.className),o.className),_=r.formatMessage({id:"Terra.itemDisplay.comment"});return l.default.createElement(s.default,f({text:t,isTruncated:n,icon:l.default.createElement(u.default,{a11yLabel:_,className:p("inline-icon"),role:"img",focusable:"true"})},o,{className:m}))};g.propTypes=v,g.defaultProps={text:"",isTruncated:!1};t.default=(0,o.injectIntl)(g)},82767:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var r=_(n(96540)),o=_(n(5556)),a=_(n(46942)),i=_(n(67967)),c=_(n(52103)),u=_(n(16524)),s=n(8604),m=_(n(79012)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function y(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=i.default.bind(m.default),g=t.TextStyles={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"},b={text:o.default.string,textStyle:o.default.oneOf(Object.values(g)),isTruncated:o.default.bool,isDisabled:o.default.bool,icon:o.default.element,iconAlignment:o.default.oneOf(["center","top","inline"]),textStyleMeaning:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired},h={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},w=function(e){var t,n=e.text,l=e.textStyle,o=e.isTruncated,i=e.isDisabled,s=e.icon,m=e.iconAlignment,_=e.textStyleMeaning,b=e.intl,h=p(e,d),w=r.default.useContext(c.default),O=(0,a.default)(v("item-display",{"is-disabled":i},y({},"icon-".concat(m),s),w.className),h.className),T=v(["text",{"is-truncated":o},y({},"".concat(l),l===g.SECONDARY),y({},"".concat(l),l===g.ATTENTION),y({},"".concat(l),l===g.STRONG),{"strike-through":l===g.STRIKETHROUGH}]);i&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),s&&(t=r.default.createElement("div",{className:v("icon")},s));var I,E,S=r.default.createElement("span",null,n);return l===g.STRONG&&(S=r.default.createElement("strong",null,n)),_?(I=_,E=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:_})):l===g.STRIKETHROUGH&&(I=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),E=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),r.default.createElement("div",f({},h,{className:O,"aria-disabled":i}),t,I&&r.default.createElement(u.default,{text:I}),r.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:T},S),E&&r.default.createElement(u.default,{text:E}))};w.propTypes=b,w.defaultProps=h;t.default=(0,s.injectIntl)(w)},45977:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextEmphasisTypes=t.Layouts=t.AccessoryAlignments=void 0;var l=d(n(96540)),r=d(n(5556)),o=d(n(46942)),a=d(n(67967)),i=d(n(52103)),c=d(n(82767)),u=d(n(99524)),s=d(n(76674)),m=["layout","trueColumn","textEmphasis","overrideDefaultStyling","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback","contentWidth"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.default.bind(s.default),p=t.Layouts={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"},v=t.TextEmphasisTypes={DEFAULT:"default",START:"start"},g=t.AccessoryAlignments={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"},b={layout:r.default.oneOf(["oneColumn","twoColumns"]),trueColumn:r.default.bool,textEmphasis:r.default.oneOf(["default","start"]),overrideDefaultStyling:r.default.bool,isTruncated:r.default.bool,accessoryAlignment:r.default.oneOf(["alignTop","alignCenter"]),startAccessory:r.default.node,reserveStartAccessorySpace:r.default.bool,endAccessory:r.default.node,displays:r.default.arrayOf(r.default.element),comment:r.default.node,refCallback:r.default.func,contentWidth:r.default.string},h={layout:p.ONE_COLUMN,trueColumn:!1,textEmphasis:v.DEFAULT,overrideDefaultStyling:!1,isTruncated:!1,accessoryAlignment:g.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0,contentWidth:void 0},w=function(e,t,n,r){var o;if(e||t){var a=y("accessory","".concat(r,"-accessory"),{"accessory-align-center":n===g.ALIGN_CENTER},{"accessory-align-top":n===g.ALIGN_TOP});o=l.default.createElement("div",{className:a},e)}return o},O=function(e,t){var n="content-primary-size",l="content-primary-color";return e>0&&(n="content-secondary-size"),(e>=2||2===t&&1===e)&&(l="content-secondary-color"),[n,l]},T=function(e,t,n,l){var r;return r=l===v.START?function(e,t,n){return n>0||e>=2?["content-secondary-size","content-secondary-color"]:O(e,t)}(e,t,n):O(e,t),["content"].concat(r)},I=function(e,t,n,r){for(var o=[];e.length;)o.push(e.splice(0,2));return l.default.createElement("div",null,l.default.createElement("ul",{className:y("row-list-container")},o.map((function(e,a){var i=function(e,t,n,r,o,a){var i=t,c=a&&{width:a};return l.default.createElement("li",{className:y("row"),key:i},l.default.createElement("ul",{className:y("row-list"),key:i},e.map((function(e,a){var i=a,u=o?"content":T(t,n,a,r);return l.default.createElement("li",{style:c,className:y(u),key:i},e)}))))}(e,a,o.length,t,n,r);return i}))))},E=function(e,t,n,r,o,a){if(null!=e&&e.length){var i=e.slice(0,8);if(1===i.length)return function(e,t,n){var r=t?"content":["content","content-primary-size","content-primary-color"],o=n&&{width:n};return l.default.createElement("div",{className:y("single-result-column-container")},l.default.createElement("div",{style:o,className:y(r)},e))}(i,r,a);if(t===p.TWO_COLUMNS){if(!o)return I(i,n,r,a);var c=function(e){for(var t=0,n=[],l=[],r=[];e.length;)(t+=1)%2==0?r.push(e.splice(0,1)):l.push(e.splice(0,1));return n.push(l),n.push(r),n}(i);return l.default.createElement("div",null,l.default.createElement("ul",{className:y("column-list-container")},c.map((function(e,t){var o=function(e,t,n,r,o){var a=t,i=e.length,c=0===t?"primary-column":"secondary-column",u=o&&{width:o};return l.default.createElement("li",{className:y(c),key:a},l.default.createElement("ul",{className:y("column-list"),key:a},e.map((function(e,o){var a=o,c=r?"content":T(o,i,t,n);return l.default.createElement("li",{style:u,className:y(c),key:a},e)}))))}(e,t,n,r,a);return o}))))}return l.default.createElement("div",null,function(e,t,n,r){var o=e.length,a=r&&{width:r};return l.default.createElement("div",null,l.default.createElement("ul",{className:y("column-list-container")},e.map((function(e,r){var i=r,c=n?"content":T(r,o,0,t);return l.default.createElement("li",{style:a,className:y(c),key:i},e)}))))}(i,n,r,a))}},S=function(e){var t=e.layout,n=e.trueColumn,r=e.textEmphasis,a=e.overrideDefaultStyling,c=e.isTruncated,u=e.accessoryAlignment,s=e.startAccessory,d=e.reserveStartAccessorySpace,v=e.endAccessory,g=e.displays,b=e.comment,h=e.refCallback,O=e.contentWidth,T=f(e,m),I=l.default.useContext(i.default),S=t===p.TWO_COLUMNS&&n,N=c||function(e){if(e)for(var t=e.slice(0,8),n=0;n<t.length;n+=1){var l;if(!0===(null===(l=t[n])||void 0===l?void 0:l.props.isTruncated))return!0}return!1}(g),x=(0,o.default)(y("item-view",{"is-truncated":c},{"one-column":t===p.ONE_COLUMN},{"two-columns":S&&!N},{"truncated-two-columns":S&&N},{"two-columns-by-row":t===p.TWO_COLUMNS&&!n},I.className),T.className);return l.default.createElement("div",_({},T,{className:x,ref:h}),w(s,d,u,"start"),l.default.createElement("div",{className:y("body")},E(g,t,r,a,n,O),b),w(v,!1,u,"end"))};S.propTypes=b,S.defaultProps=h,S.Display=c.default,S.Comment=u.default;t.default=S},1941:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},79012:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},76674:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___XR3+f","orion-fusion-theme":"ItemView-module__orion-fusion-theme___XKzHL","item-view":"ItemView-module__item-view___2xlIP",accessory:"ItemView-module__accessory___PvuEA","start-accessory":"ItemView-module__start-accessory___XlRLU","end-accessory":"ItemView-module__end-accessory___d5XtL","accessory-align-top":"ItemView-module__accessory-align-top___+M66a","accessory-align-center":"ItemView-module__accessory-align-center___2zYD3",body:"ItemView-module__body___sK4Q9",content:"ItemView-module__content___6aCtZ","single-result-column-container":"ItemView-module__single-result-column-container___3zOUP","column-list-container":"ItemView-module__column-list-container___A2vYE","column-list":"ItemView-module__column-list___LDCYP","row-list-container":"ItemView-module__row-list-container___ObBY-",row:"ItemView-module__row___uFTYs","row-list":"ItemView-module__row-list___GdS+e","secondary-column":"ItemView-module__secondary-column___cxLlR","is-truncated":"ItemView-module__is-truncated___bmqU7","one-column":"ItemView-module__one-column___Kd1v8","two-columns":"ItemView-module__two-columns___JSHlK","primary-column":"ItemView-module__primary-column___dVonc","two-columns-by-row":"ItemView-module__two-columns-by-row___4Hxd0","truncated-two-columns":"ItemView-module__truncated-two-columns___wZCDa","content-primary-color":"ItemView-module__content-primary-color___-3mpu","content-primary-size":"ItemView-module__content-primary-size___TysDs","content-secondary-color":"ItemView-module__content-secondary-color___mYi7V","content-secondary-size":"ItemView-module__content-secondary-size___cQqN8"}}}]);