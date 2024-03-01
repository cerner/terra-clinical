"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5801],{99954:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(96540)),r=c(n(5556)),i=c(n(67967)),u=c(n(52103)),l=c(n(11128));function c(t){return t&&t.__esModule?t:{default:t}}var a=i.default.bind(l.default),f={text:r.default.string,label:r.default.string},d=function(t){var e=t.text,n=t.label,r=o.default.useContext(u.default);return o.default.createElement("div",{className:a(["content-cell",r.className]),"data-cell-label":n},e)};d.contextType=u.default,d.propTypes=f;e.default=d},85801:function(t,e,n){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(96540)),i=a(n(48471)),u=a(n(67967)),l=a(n(99954)),c=a(n(58312));function a(t){return t&&t.__esModule?t:{default:t}}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,d(o.key),o)}}function d(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:String(e)}function s(t,e,n){return e=m(e),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,n||[],m(t).constructor):e.apply(t,n))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}var b=u.default.bind(c.default),y=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],C=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"}],w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=s(this,e,[t])).state={sectionCount:1,sections:e.buildSections(1)},n}var n,o,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(e,t),n=e,u=[{key:"buildRows",value:function(t,e){return new Array(e).fill().map((function(e,n){return{id:"".concat(t,"-Row").concat(n),ariaLabel:"Row ".concat(t,"-").concat(n),cells:new Array(10).fill(0).map((function(t,e){return"Column-".concat(e)})).map((function(t){return{columnId:t,component:r.default.createElement(l.default,{text:"Row-".concat(n,", Column ").concat(t)})}}))}}))}},{key:"buildSections",value:function(t){for(var n=[],o=0,r=t;o<r;o+=1){var i="section_".concat(o);n.push({id:i,text:"Section ".concat(o),rows:e.buildRows(i,3)})}return n}}],(o=[{key:"render",value:function(){var t=this;return r.default.createElement("div",{id:"paged-data-grid",className:b("content-wrapper")},r.default.createElement(i.default,{id:"paging-example",pinnedColumns:y,overflowColumns:C,sections:this.state.sections,fill:!0,onRequestContent:this.state.sectionCount<2?function(){t.setState((function(t){return{sectionCount:t.sectionCount+1,sections:e.buildSections(t.sectionCount+1)}}))}:void 0}))}}])&&f(n.prototype,o),u&&f(n,u),Object.defineProperty(n,"prototype",{writable:!1}),e}(r.default.Component);e.default=w},58312:function(t,e,n){n.r(e),e.default={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___gmfdx","multiple-datagrids-content-wrapper":"ClinicalDataGridCommon-test-module__multiple-datagrids-content-wrapper___B13P-","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___zhfn8","spacer-right-medium":"ClinicalDataGridCommon-test-module__spacer-right-medium___ESRTu"}},11128:function(t,e,n){n.r(e),e.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___vJW4L","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+MEbA","content-cell":"ContentCellLayout__content-cell___nXBXw"}}}]);