"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9671],{46038:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(67294)),a=u(n(30381)),i=u(n(67333));function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function c(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}function f(t,e,n){return e=p(e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(t,s()?Reflect.construct(e,n||[],p(t).constructor):e.apply(t,n))}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}var b=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=f(this,e,[t]),a.default.now=function(){return new Date},n.state={precision:"before",granularity:"age",onsetDate:(0,a.default)("2001-05-01").format("YYYY-MM-DD")},n.handleOnset=n.handleOnset.bind(d(n)),n.handleSubmit=n.handleSubmit.bind(d(n)),n}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(e,t),n=e,(r=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Birth Date: 2001-03-31 (March 31, 2001)"),o.default.createElement("p",null,"Default Onset Date: 2001-05-01 (May 01, 2001)"),o.default.createElement("p",null,"Default Onset Date MATCHES with calculated onset date using defualt parameters"),o.default.createElement("form",{onSubmit:this.handleSubmit},o.default.createElement(i.default,{birthdate:(0,a.default)("2001-03-31").format("YYYY-MM-DD"),granularity:this.state.granularity,id:"test",legend:"Date of Onset",precision:this.state.precision,onsetDate:this.state.onsetDate,onsetOnChange:this.handleOnset}),o.default.createElement("button",{type:"submit"},"Submit")),o.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(n.prototype,r),u&&l(n,u),Object.defineProperty(n,"prototype",{writable:!1}),e}(o.default.Component);e.default=b}}]);