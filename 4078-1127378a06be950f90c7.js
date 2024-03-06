"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4078],{55713:function(e,n,a){var t=a(24994);n.A=void 0;var i=t(a(96540)),r=t(a(5556)),l=t(a(67967)),d=t(a(25642)),s=l.default.bind(d.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var n=e.src,a=e.name,t=e.url,r=e.version,l=i.default.createElement("a",{className:s("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},i.default.createElement("span",{className:s("badge-name")},t?"package":"npm"),i.default.createElement("span",{className:s("badge-version")},"v".concat(r))),d=n?i.default.createElement("a",{className:s("badge"),href:n},i.default.createElement("span",{className:s("badge-name")},"github"),i.default.createElement("span",{className:s("badge-version")},"source")):void 0;return i.default.createElement("div",{className:s("badge-container")},l,d)};m.propTypes=o;n.A=m},54078:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});a(96540);var t=a(36665),i=a(84074),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s={},o="wrapper";function m(e){var n=e.components,a=d(e,r);return(0,t.mdx)(o,l({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)(i.E,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-clinical-onset-picker-upgrade-guide"},"Terra Clinical Onset Picker Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),(0,t.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"granularitySelectOnChange")),(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"precisionSelectOnChange")),(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"onsetDateInputOnChange")),(0,t.mdx)("li",{parentName:"ul"},"Condensed onChange function props into a single prop (",(0,t.mdx)("inlineCode",{parentName:"li"},"onsetOnChange"),") that returns an Object for the onsetDate.")),(0,t.mdx)("h3",{id:"changes-for-onsetonchange"},"Changes for onsetOnChange"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"-  this.handleGranularity = this.handleGranularity.bind(this);\n-  this.handlePrecision = this.handlePrecision.bind(this);\n-  handleGranularity(granularity) {\n-    this.setState({ granularity });\n-  }\n\n- handlePrecision(precision) {\n-    this.setState({ precision });\n-  }\n\n-  handleOnset(onsetDate) {\n-    this.setState({ onsetDate });\n+  handleOnset(onsetObject) {\n+    this.setState({\n+      precision: onsetObject.precision,\n+      granularity: onsetObject.granularity,\n+      onsetDate: onsetObject.onsetDate,\n+      ageUnit: onsetObject.ageUnit,\n+    });\n        <OnsetPicker\n          birthdate={moment().subtract(6, 'years').format()}\n          granularity={this.state.granularity}\n-         granularitySelectOnChange={this.handleGranularity}\n          id=\"doogs-supplied\"\n          precision={this.state.precision}\n-         precisionSelectOnChange={this.handlePrecision}\n          onsetDate={this.state.onsetDate}\n-         onsetDateInputOnChange={this.handleOnset}\n+         onsetOnChange={this.handleOnset}\n        />\n")),(0,t.mdx)("h3",{id:"new-feature"},"New Feature"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support for age units. Use new ",(0,t.mdx)("inlineCode",{parentName:"li"},"ageUnit")," prop to pass default age unit values, accepted values are ",(0,t.mdx)("inlineCode",{parentName:"li"},"weeks"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"months"),", or ",(0,t.mdx)("inlineCode",{parentName:"li"},"years")," ")),(0,t.mdx)("h3",{id:"new-props"},"New Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"New prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"ageUnit")),(0,t.mdx)("li",{parentName:"ul"},"New prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"onsetOnChange"))),(0,t.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),(0,t.mdx)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"New required prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"id")),(0,t.mdx)("li",{parentName:"ul"},"Removed exported enums ",(0,t.mdx)("inlineCode",{parentName:"li"},"OnsetPicker.Opts.Granularities")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"OnsetPicker.Opts.Precisions")),(0,t.mdx)("li",{parentName:"ul"},"Removed default prop values for ",(0,t.mdx)("inlineCode",{parentName:"li"},"granularity")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"precision")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"onChange")," functions can now return blank values"),(0,t.mdx)("li",{parentName:"ul"},"Visual updates from switching to ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-form-field"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-form-fieldset"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-form-input"),", and ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-form-select"))),(0,t.mdx)("h3",{id:"new-features"},"New Features"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"CSS themeable variables")),(0,t.mdx)("h3",{id:"removed-props"},"Removed props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"granularitySelectName")),(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"precisionSelectName")),(0,t.mdx)("li",{parentName:"ul"},"Removed prop ",(0,t.mdx)("inlineCode",{parentName:"li"},"precisionSelectName"))),(0,t.mdx)("h3",{id:"css-variables"},"CSS Variables"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-field-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-field-margin-bottom"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-precision-select-min-width"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-granularity-select-min-width"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-month-select-min-width"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-age-granularity-select-min-width"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-age-input-width")))}m.isMDXComponent=!0},84074:function(e,n,a){a.d(n,{E:function(){return r}});var t=a(96540),i=a(55713),r=function(e){var n=e.url;return t.createElement(i.A,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker",name:"terra-clinical-onset-picker",version:"4.38.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);