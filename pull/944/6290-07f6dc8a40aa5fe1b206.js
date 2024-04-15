"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[6290],{55713:function(e,a,t){var n=t(24994);a.A=void 0;var r=n(t(96540)),i=n(t(5556)),l=n(t(67967)),d=n(t(25642)),m=l.default.bind(d.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var a=e.src,t=e.name,n=e.url,i=e.version,l=r.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},r.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(i))),d=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},l,d)};c.propTypes=o;a.A=c},16290:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});t(96540);var n=t(36665),r=t(5458),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},o="wrapper";function c(e){var a=e.components,t=d(e,i);return(0,n.mdx)(o,l({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(r.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-clinical-item-display-upgrade-guide"},"Terra Clinical Item Display Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,n.mdx)("h3",{id:"breaking"},"Breaking"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed default value of ",(0,n.mdx)("inlineCode",{parentName:"li"},"textStyle")," prop from ",(0,n.mdx)("inlineCode",{parentName:"li"},"undefined")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"primary"),".")),(0,n.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,n.mdx)("h4",{id:"renamed"},"Renamed"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,n.mdx)("th",{parentName:"tr",align:null},"New"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-comment-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-display-item-comment-color")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-comment-inline-icon-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-display-item-comment-inline-icon-color")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-item-display-disabled-inline-icon-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-display-disabled-inline-icon-color")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-item-display-secondary-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-display-secondary-color")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-item-display-attention-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-item-display-attention-color")))),(0,n.mdx)("h4",{id:"added"},"Added"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-inline-icon-padding-right"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-disabled-inline-icon-opacity"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-attention-font-weight"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-strong-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-strong-font-weight"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-strike-through-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-clinical-item-display-primary-color")))}c.isMDXComponent=!0},5458:function(e,a,t){t.d(a,{E:function(){return i}});var n=t(96540),r=t(55713),i=function(e){var a=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-display",name:"terra-clinical-item-display",version:"4.11.0",url:a})}},25642:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);