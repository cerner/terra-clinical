"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7075],{18541:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(67294)),a=u(n(30381)),i=u(n(67333));function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function c(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}function f(t,e,n){return e=p(e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(t,s()?Reflect.construct(e,n||[],p(t).constructor):e.apply(t,n))}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}var y=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=f(this,e,[t]),a.default.now=function(){return new Date},n.state={precision:"before",granularity:"age",onsetDate:(0,a.default)("2013-02-14").format("YYYY-MM-DD")},n.handleOnset=n.handleOnset.bind(b(n)),n.handleSubmit=n.handleSubmit.bind(b(n)),n}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(e,t),n=e,(r=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Birth Date: 2000-02-29 (February 29, 2000)"),o.default.createElement("p",null,"Default Onset Date: 2013-02-14 (February 14, 2013)"),o.default.createElement("p",null,"Default Onset Date MISMATCHES with calculated onset date using defualt parameters"),o.default.createElement("form",{onSubmit:this.handleSubmit},o.default.createElement(i.default,{birthdate:(0,a.default)("2000-02-29").format("YYYY-MM-DD"),granularity:this.state.granularity,id:"test",legend:"Date of Onset",precision:this.state.precision,onsetDate:this.state.onsetDate,onsetOnChange:this.handleOnset}),o.default.createElement("button",{type:"submit"},"Submit")),o.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(n.prototype,r),u&&l(n,u),Object.defineProperty(n,"prototype",{writable:!1}),e}(o.default.Component);e.default=y}}]);