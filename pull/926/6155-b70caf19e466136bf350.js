"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[6155],{44032:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(11504)),r=a(n(3268)),l=a(n(74824)),u=a(n(99640)),i=a(n(10508));function a(t){return t&&t.__esModule?t:{default:t}}var c=l.default.bind(i.default),f={text:r.default.string,label:r.default.string},d=function(t){var e=t.text,n=t.label,r=o.default.useContext(u.default);return o.default.createElement("div",{className:c(["content-cell",r.className]),"data-cell-label":n},e)};d.contextType=u.default,d.propTypes=f;e.default=d},78536:function(t,e,n){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n(11504)),l=c(n(40224)),u=c(n(74824)),i=c(n(44032)),a=c(n(45704));function c(t){return t&&t.__esModule?t:{default:t}}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,d(o.key),o)}}function d(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:String(e)}function m(t,e,n){return e=s(e),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,n||[],s(t).constructor):e.apply(t,n))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}var b=u.default.bind(a.default),y=[{id:"Column-0",text:"Column 0",width:100},{id:"Column-1",text:"Column 1"},{id:"Column-2",text:"Column 2"}],C=[{id:"Column-3",text:"Column 3"},{id:"Column-4",text:"Column 4"},{id:"Column-5",text:"Column 5"},{id:"Column-6",text:"Column 6"},{id:"Column-7",text:"Column 7"},{id:"Column-8",text:"Column 8"},{id:"Column-9",text:"Column 9"},{id:"Column-10",text:"Column 10"},{id:"Column-11",text:"Column 11"},{id:"Column-12",text:"Column 12"}],v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,e,arguments)}var n,o,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(e,t),n=e,u=[{key:"buildRows",value:function(t,e){return new Array(e).fill().map((function(e,n){return{id:"".concat(t,"-").concat(n),ariaLabel:"Row ".concat(t,"-").concat(n),cells:new Array(13).fill(0).map((function(t,e){return"Column-".concat(e)})).map((function(e){return{columnId:e,component:r.default.createElement(i.default,{text:"Row-".concat(n,", ").concat(e),label:"".concat(t,"-").concat(n,"-").concat(e)})}}))}}))}},{key:"buildSection",value:function(t,n){return{id:t,rows:e.buildRows(t,n)}}}],(o=[{key:"render",value:function(){return r.default.createElement("div",{id:"no-fill-data-grid",className:b(["content-wrapper","content-overflow"])},r.default.createElement(l.default,{id:"no-fill",pinnedColumns:y,overflowColumns:C,sections:[e.buildSection("section_0",30)],defaultColumnWidth:250}))}}])&&f(n.prototype,o),u&&f(n,u),Object.defineProperty(n,"prototype",{writable:!1}),e}(r.default.Component);e.default=v},45704:function(t,e,n){n.r(e),e.default={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___gmfdx","multiple-datagrids-content-wrapper":"ClinicalDataGridCommon-test-module__multiple-datagrids-content-wrapper___B13P-","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___zhfn8","spacer-right-medium":"ClinicalDataGridCommon-test-module__spacer-right-medium___ESRTu"}},10508:function(t,e,n){n.r(e),e.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___vJW4L","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+MEbA","content-cell":"ContentCellLayout__content-cell___nXBXw"}}}]);