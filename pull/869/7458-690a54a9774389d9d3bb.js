"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7458],{49271:function(e,l,t){var n=t(64836),a=t(18698);l.Z=void 0;var r=n(t(27424)),o=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=f(l);if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=r?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(n,o,m):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(t(67294)),m=n(t(45697)),d=n(t(47166)),i=t(21538),c=n(t(33864)),s=n(t(23399)),u=t(51051),p=n(t(53560));function f(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:l})(e)}var x=d.default.bind(p.default),h={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var l=e.example,t=e.exampleSrc,n=e.exampleCssSrc,a=e.title,m=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,r.default)(p,2),h=f[0],w=f[1],g=(0,o.useState)(!1),v=(0,r.default)(g,2),y=v[0],E=v[1],k=o.default.useContext(i.ThemeContext),T=void 0!==n,N=function(){E(!y),h&&w(!h)},C=function(){w(!h),y&&E(!y)},O=function(e,l){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),l())};return o.default.createElement("div",{className:x("template",k.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},m&&o.default.createElement("div",{className:x("description")},m),l),o.default.createElement("div",{className:x("footer")},t?o.default.createElement("div",{className:x("button-container")},T&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return O(e,N)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:C,onKeyDown:function(e){return O(e,C)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:x("chevron")}))):null,o.default.createElement("div",null,y&&o.default.createElement("div",{className:x("css")},n),h&&o.default.createElement("div",{className:x("code")},t))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var g=w;l.Z=g},87458:function(e,l,t){t.r(l),t.d(l,{default:function(){return S}});var n=t(67294),a=t(81254),r=t(61042),o=t(40028),m=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function i(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={};function s(e){var l=e.components,t=i(e,m);return(0,a.mdx)("wrapper",d({},c,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"23:59\" />;\n\n")))}s.isMDXComponent=!0;var u=t(49271),p=function(e){var l=e.title,t=e.description,a=e.isExpanded;return n.createElement(u.Z,{title:l||"Result Time Header Cell",description:t,example:n.createElement(o.Z,null),exampleSrc:n.createElement(s,null),isExpanded:a})},f=t(42728),x=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function _(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b={};function w(e){var l=e.components,t=_(e,x);return(0,a.mdx)("wrapper",h({},b,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib';\nimport classNames from 'classnames';\nimport classNamesBind from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultTimeHeaderFlowsheetExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      'mock-flowsheet-example',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx('mock-flowsheet-header')}>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"21:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"22:00\" hideDate />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"23:59\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"00:15\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"03:00\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"07:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"11:00\" hideDate />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultTimeHeaderFlowsheetExample;\n\n")))}w.isMDXComponent=!0;var g=t(52636),v=function(e){var l=e.title,t=e.description,a=e.isExpanded;return n.createElement(u.Z,{title:l||"Result Time Header Flowsheet Example",description:t,example:n.createElement(f.Z,null),exampleCssSrc:n.createElement(g.Z,null),exampleSrc:n.createElement(w,null),isExpanded:a})},y=t(78530),E=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},k.apply(this,arguments)}function T(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N={},C="wrapper";function O(e){var l=e.components,t=T(e,E);return(0,a.mdx)(C,k({},N,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(y.ZP,{mdxType:"PropsTable"},(0,a.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"date"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed on the first line, typically abbrivated date, e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dec 12, 2010")))),(0,a.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"time"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"23:59")))),(0,a.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"hideDate"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Visually hides the date when presented in a series of side-by-side columns of the same date."))),(0,a.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"paddingStyle"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'compact'\n  'standard'\n],\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'compact'\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The padding styling to apply to the Result Time column header cell.\nOne of ",(0,a.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"'standard'"),".")))))}O.isMDXComponent=!0;var D=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function R(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var H={},P="wrapper";function S(e){var l=e.components,t=R(e,D);return(0,a.mdx)(P,j({},H,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"result-time-header-cell"},"Result Time Header Cell"),(0,a.mdx)("p",null,"Result-Time-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Date/Time Header cells (column headers) for each bucketed time column within a flowsheet."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p,{mdxType:"Default"}),(0,a.mdx)(v,{title:"Result Time Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),(0,a.mdx)("h2",{id:"result-time-header-cell-props"},"Result Time Header Cell Props"),(0,a.mdx)(O,{mdxType:"ResultTimeHeaderProps"}))}S.isMDXComponent=!0},52636:function(e,l,t){t.d(l,{Z:function(){return i}});t(67294);var n=t(81254),a=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={},d="wrapper";function i(e){var l=e.components,t=o(e,a);return(0,n.mdx)(d,r({},m,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/Examples.module';\n@import './orion-fusion-theme/Examples.module';\n\n:local {\n  .example-description-text {\n    display: inline-flex;\n    margin-bottom: 0.75rem;\n  }\n\n  .dashed-border-group {\n    border: var(--terra-clinical-result-examples-dashed-border-group-border, 2px dashed #333);\n  }\n\n  .clinical-result-fontsize-16 {\n    font-size: 1.14285rem;\n  }\n\n  .clinical-result-fontsize-18 {\n    font-size: 1.28571rem;\n  }\n\n  .clinical-result-fontsize-21 {\n    font-size: 1.5rem;\n  }\n\n  .clinical-result-fontsize-24 {\n    font-size: 1.71428rem;\n  }\n\n  .bottom-space {\n    margin-bottom: 1.42857rem;\n  }\n\n  .mock-flowsheet-example {\n    margin: 0;\n    padding: 0;\n  }\n\n  .mock-flowsheet-header {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-header-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-header-border, 1px solid #dedfe0);\n    border-bottom-color: var(--terra-clinical-result-examples-mock-flowsheet-header-border-bottom-color, #868a8c);\n    line-height: 0;\n    max-width: 1055px;\n    overflow: hidden;\n    padding-left: 220px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-header-cell {\n    border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-left, 1px solid #868a8c);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-right, 1px solid #868a8c);\n    display: inline-block;\n    margin-right: -1px;\n    width: 120px;\n    \n    &.new-date {\n      border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-new-date-border-left, 2px solid #4e5558);\n    }\n  }\n\n  .mock-flowsheet-firstcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border, 1px solid #dedfe0);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border-right, 2px solid #4e5558);\n    max-width: 222px;\n    overflow: hidden;\n    padding-top: 48px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-firstcolumn-cell {\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-bottom, 1px solid #868a8c);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-top, 1px solid #868a8c);\n    margin-bottom: -1px;\n\n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-zebra-background-color, #dedfe0);\n    }\n  }\n\n  .mock-flowsheet-resultcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-border, 1px solid #dedfe0);\n    display: inline-block;\n    margin-left: -1px;\n    overflow: hidden;\n    padding-top: 24px;\n    vertical-align: top;\n    width: 162px;\n\n    &.half-column {\n      width: 99px;\n    }\n\n    &.double-column {\n      width: 324px;\n    }\n\n    &.triple-column {\n      width: 490px;\n    }\n\n    &.flexible50-column {\n      width: 50%;\n    }\n  }\n\n  .mock-flowsheet-resultcolumn-cell {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-background-color, #fff);\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-bottom, 1px solid #dedfe0);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-top, 1px solid #dedfe0);\n    box-sizing: border-box;\n    height: 33px;\n    margin-bottom: -1px;\n    white-space: nowrap;\n\n    &.allow-wrapping {\n      overflow: auto;\n      white-space: normal;\n      word-wrap: normal;\n    }  \n\n    &.empty {\n      height: 33px;\n    }\n\n    &.short {\n      height: 25px;\n    }\n\n    &.medium {\n      height: 41px;\n    }\n\n    &.tall {\n      height: 155px;\n    }\n\n    &.with-padding {\n      padding: 7px 7px 0;\n    }\n    \n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-zebra-background-color, #f1f1f1);\n    }\n  }\n\n  .vertical-center-align-wrapper {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    margin: 0;\n    max-height: 100%;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // Needed for IE10\n    padding: 0;\n    width: 100%;\n  }\n}\n\n")))}i.isMDXComponent=!0},61042:function(e,l,t){t.d(l,{C:function(){return r}});var n=t(67294),a=t(22863),r=function(e){var l=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.16.0",url:l})}},40028:function(e,l,t){l.Z=void 0;var n,a=(n=t(67294))&&n.__esModule?n:{default:n},r=t(21860);l.Z=function(){return a.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"23:59"})}},42728:function(e,l,t){l.Z=void 0;var n=i(t(67294)),a=t(21860),r=i(t(94184)),o=i(t(47166)),m=i(t(50026)),d=i(t(60815));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),s=function(){var e=n.default.useContext(m.default),l=(0,r.default)(c("mock-flowsheet-example",e.className));return n.default.createElement("div",{className:l},n.default.createElement("div",{className:c("mock-flowsheet-header")},n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"21:00"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"22:00",hideDate:!0})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"23:59",hideDate:!0})),n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"00:15"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"03:00",hideDate:!0})),n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"07:00"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"11:00",hideDate:!0}))))};l.Z=s},53560:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},60815:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Examples-module__clinical-lowlight-theme___raZXs","orion-fusion-theme":"Examples-module__orion-fusion-theme___Pm6k9","example-description-text":"Examples-module__example-description-text___Xq-WD","dashed-border-group":"Examples-module__dashed-border-group___7SN-x","clinical-result-fontsize-16":"Examples-module__clinical-result-fontsize-16___u9JnA","clinical-result-fontsize-18":"Examples-module__clinical-result-fontsize-18___rluGp","clinical-result-fontsize-21":"Examples-module__clinical-result-fontsize-21___cxLuH","clinical-result-fontsize-24":"Examples-module__clinical-result-fontsize-24___B5x8X","bottom-space":"Examples-module__bottom-space___xH0Ub","mock-flowsheet-example":"Examples-module__mock-flowsheet-example___HHOIv","mock-flowsheet-header":"Examples-module__mock-flowsheet-header___NyDYg","mock-flowsheet-header-cell":"Examples-module__mock-flowsheet-header-cell___EwoKe","new-date":"Examples-module__new-date___k3n84","mock-flowsheet-firstcolumn":"Examples-module__mock-flowsheet-firstcolumn___HUI8Y","mock-flowsheet-firstcolumn-cell":"Examples-module__mock-flowsheet-firstcolumn-cell___nq+xg",zebra:"Examples-module__zebra___oEmkn","mock-flowsheet-resultcolumn":"Examples-module__mock-flowsheet-resultcolumn___7jQOo","half-column":"Examples-module__half-column___gtHm3","double-column":"Examples-module__double-column___H635r","triple-column":"Examples-module__triple-column___wCTfe","flexible50-column":"Examples-module__flexible50-column___9d4Ht","mock-flowsheet-resultcolumn-cell":"Examples-module__mock-flowsheet-resultcolumn-cell___PIXFo","allow-wrapping":"Examples-module__allow-wrapping___P3M2v",empty:"Examples-module__empty___-PH0H",short:"Examples-module__short___JsBsC",medium:"Examples-module__medium___Ty0Ey",tall:"Examples-module__tall___idfpx","with-padding":"Examples-module__with-padding___BTyqD","vertical-center-align-wrapper":"Examples-module__vertical-center-align-wrapper___VFCEp"}},33864:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=r(t(67294)),a=r(t(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}var m=function(e){var l=o({},e);return n.default.createElement(a.default,l,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=m;l.default=d}}]);