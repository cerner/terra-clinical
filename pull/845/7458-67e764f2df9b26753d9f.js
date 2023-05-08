"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7458],{87458:function(e,l,n){n.r(l),n.d(l,{default:function(){return z}});var t=n(67294),r=n(81254),a=n(61042),o=n(40028),m=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function i(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function s(e){var l=e.components,n=i(e,m);return(0,r.mdx)("wrapper",d({},c,n,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"23:59\" />;\n\n")))}s.isMDXComponent=!0;var p=n(49271),u=function(e){var l=e.title,n=e.description,r=e.isExpanded;return t.createElement(p.Z,{title:l||"Result Time Header Cell",description:n,example:t.createElement(o.Z,null),exampleSrc:t.createElement(s,null),isExpanded:r})},x=n(42728),f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h.apply(this,arguments)}function b(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={};function w(e){var l=e.components,n=b(e,f);return(0,r.mdx)("wrapper",h({},_,n,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib';\nimport classNames from 'classnames';\nimport classNamesBind from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultTimeHeaderFlowsheetExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      'mock-flowsheet-example',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx('mock-flowsheet-header')}>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"21:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"22:00\" hideDate />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"23:59\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"00:15\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"03:00\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"07:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"11:00\" hideDate />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultTimeHeaderFlowsheetExample;\n\n")))}w.isMDXComponent=!0;var g=n(52636),y=function(e){var l=e.title,n=e.description,r=e.isExpanded;return t.createElement(p.Z,{title:l||"Result Time Header Flowsheet Example",description:n,example:t.createElement(x.Z,null),exampleCssSrc:t.createElement(g.Z,null),exampleSrc:t.createElement(w,null),isExpanded:r})},v=n(78530),k=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},E.apply(this,arguments)}function T(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={},C="wrapper";function O(e){var l=e.components,n=T(e,k);return(0,r.mdx)(C,E({},N,n,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(v.ZP,{mdxType:"PropsTable"},(0,r.mdx)(v.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(v.O,{mdxType:"PropNameCell"},"date"),(0,r.mdx)(v.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(v.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed on the first line, typically abbrivated date, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dec 12, 2010")))),(0,r.mdx)(v.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(v.O,{mdxType:"PropNameCell"},"time"),(0,r.mdx)(v.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(v.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"23:59")))),(0,r.mdx)(v.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(v.O,{mdxType:"PropNameCell"},"hideDate"),(0,r.mdx)(v.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Visually hides the date when presented in a series of side-by-side columns of the same date."))),(0,r.mdx)(v.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(v.O,{mdxType:"PropNameCell"},"paddingStyle"),(0,r.mdx)(v.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'compact'\n  'standard'\n],\n"))),(0,r.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'compact'\n"))),(0,r.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The padding styling to apply to the Result Time column header cell.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"'standard'"),".")))))}O.isMDXComponent=!0;var D=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},R.apply(this,arguments)}function j(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H={},P="wrapper";function z(e){var l=e.components,n=j(e,D);return(0,r.mdx)(P,R({},H,n,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"result-time-header-cell"},"Result Time Header Cell"),(0,r.mdx)("p",null,"Result-Time-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Date/Time Header cells (column headers) for each bucketed time column within a flowsheet."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(u,{mdxType:"Default"}),(0,r.mdx)(y,{title:"Result Time Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),(0,r.mdx)("h2",{id:"result-time-header-cell-props"},"Result Time Header Cell Props"),(0,r.mdx)(O,{mdxType:"ResultTimeHeaderProps"}))}z.isMDXComponent=!0},52636:function(e,l,n){n.d(l,{Z:function(){return i}});n(67294);var t=n(81254),r=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function o(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={},d="wrapper";function i(e){var l=e.components,n=o(e,r);return(0,t.mdx)(d,a({},m,n,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/Examples.module';\n@import './orion-fusion-theme/Examples.module';\n\n:local {\n  .example-description-text {\n    display: inline-flex;\n    margin-bottom: 0.75rem;\n  }\n\n  .dashed-border-group {\n    border: var(--terra-clinical-result-examples-dashed-border-group-border, 2px dashed #333);\n  }\n\n  .clinical-result-fontsize-16 {\n    font-size: 1.14285rem;\n  }\n\n  .clinical-result-fontsize-18 {\n    font-size: 1.28571rem;\n  }\n\n  .clinical-result-fontsize-21 {\n    font-size: 1.5rem;\n  }\n\n  .clinical-result-fontsize-24 {\n    font-size: 1.71428rem;\n  }\n\n  .bottom-space {\n    margin-bottom: 1.42857rem;\n  }\n\n  .mock-flowsheet-example {\n    margin: 0;\n    padding: 0;\n  }\n\n  .mock-flowsheet-header {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-header-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-header-border, 1px solid #dedfe0);\n    border-bottom-color: var(--terra-clinical-result-examples-mock-flowsheet-header-border-bottom-color, #868a8c);\n    line-height: 0;\n    max-width: 1055px;\n    overflow: hidden;\n    padding-left: 220px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-header-cell {\n    border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-left, 1px solid #868a8c);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-right, 1px solid #868a8c);\n    display: inline-block;\n    margin-right: -1px;\n    width: 120px;\n    \n    &.new-date {\n      border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-new-date-border-left, 2px solid #4e5558);\n    }\n  }\n\n  .mock-flowsheet-firstcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border, 1px solid #dedfe0);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border-right, 2px solid #4e5558);\n    max-width: 222px;\n    overflow: hidden;\n    padding-top: 48px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-firstcolumn-cell {\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-bottom, 1px solid #868a8c);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-top, 1px solid #868a8c);\n    margin-bottom: -1px;\n\n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-zebra-background-color, #dedfe0);\n    }\n  }\n\n  .mock-flowsheet-resultcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-border, 1px solid #dedfe0);\n    display: inline-block;\n    margin-left: -1px;\n    overflow: hidden;\n    padding-top: 24px;\n    vertical-align: top;\n    width: 162px;\n\n    &.half-column {\n      width: 99px;\n    }\n\n    &.double-column {\n      width: 324px;\n    }\n\n    &.triple-column {\n      width: 490px;\n    }\n\n    &.flexible50-column {\n      width: 50%;\n    }\n  }\n\n  .mock-flowsheet-resultcolumn-cell {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-background-color, #fff);\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-bottom, 1px solid #dedfe0);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-top, 1px solid #dedfe0);\n    box-sizing: border-box;\n    height: 33px;\n    margin-bottom: -1px;\n    white-space: nowrap;\n\n    &.allow-wrapping {\n      overflow: auto;\n      white-space: normal;\n      word-wrap: normal;\n    }  \n\n    &.empty {\n      height: 33px;\n    }\n\n    &.short {\n      height: 25px;\n    }\n\n    &.medium {\n      height: 41px;\n    }\n\n    &.tall {\n      height: 155px;\n    }\n\n    &.with-padding {\n      padding: 7px 7px 0;\n    }\n    \n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-zebra-background-color, #f1f1f1);\n    }\n  }\n\n  .vertical-center-align-wrapper {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    margin: 0;\n    max-height: 100%;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // Needed for IE10\n    padding: 0;\n    width: 100%;\n  }\n}\n\n")))}i.isMDXComponent=!0},61042:function(e,l,n){n.d(l,{C:function(){return a}});var t=n(67294),r=n(22863),a=function(e){var l=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.16.0",url:l})}},40028:function(e,l,n){l.Z=void 0;var t,r=(t=n(67294))&&t.__esModule?t:{default:t},a=n(21860);l.Z=function(){return r.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"23:59"})}},42728:function(e,l,n){l.Z=void 0;var t=i(n(67294)),r=n(21860),a=i(n(94184)),o=i(n(47166)),m=i(n(50026)),d=i(n(60815));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),s=function(){var e=t.default.useContext(m.default),l=(0,a.default)(c("mock-flowsheet-example",e.className));return t.default.createElement("div",{className:l},t.default.createElement("div",{className:c("mock-flowsheet-header")},t.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"21:00"})),t.default.createElement("div",{className:c("mock-flowsheet-header-cell")},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"22:00",hideDate:!0})),t.default.createElement("div",{className:c("mock-flowsheet-header-cell")},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"23:59",hideDate:!0})),t.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"00:15"})),t.default.createElement("div",{className:c("mock-flowsheet-header-cell")},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"03:00",hideDate:!0})),t.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"07:00"})),t.default.createElement("div",{className:c("mock-flowsheet-header-cell")},t.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"11:00",hideDate:!0}))))};l.Z=s},60815:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"Examples-module__clinical-lowlight-theme___raZXs","orion-fusion-theme":"Examples-module__orion-fusion-theme___Pm6k9","example-description-text":"Examples-module__example-description-text___Xq-WD","dashed-border-group":"Examples-module__dashed-border-group___7SN-x","clinical-result-fontsize-16":"Examples-module__clinical-result-fontsize-16___u9JnA","clinical-result-fontsize-18":"Examples-module__clinical-result-fontsize-18___rluGp","clinical-result-fontsize-21":"Examples-module__clinical-result-fontsize-21___cxLuH","clinical-result-fontsize-24":"Examples-module__clinical-result-fontsize-24___B5x8X","bottom-space":"Examples-module__bottom-space___xH0Ub","mock-flowsheet-example":"Examples-module__mock-flowsheet-example___HHOIv","mock-flowsheet-header":"Examples-module__mock-flowsheet-header___NyDYg","mock-flowsheet-header-cell":"Examples-module__mock-flowsheet-header-cell___EwoKe","new-date":"Examples-module__new-date___k3n84","mock-flowsheet-firstcolumn":"Examples-module__mock-flowsheet-firstcolumn___HUI8Y","mock-flowsheet-firstcolumn-cell":"Examples-module__mock-flowsheet-firstcolumn-cell___nq+xg",zebra:"Examples-module__zebra___oEmkn","mock-flowsheet-resultcolumn":"Examples-module__mock-flowsheet-resultcolumn___7jQOo","half-column":"Examples-module__half-column___gtHm3","double-column":"Examples-module__double-column___H635r","triple-column":"Examples-module__triple-column___wCTfe","flexible50-column":"Examples-module__flexible50-column___9d4Ht","mock-flowsheet-resultcolumn-cell":"Examples-module__mock-flowsheet-resultcolumn-cell___PIXFo","allow-wrapping":"Examples-module__allow-wrapping___P3M2v",empty:"Examples-module__empty___-PH0H",short:"Examples-module__short___JsBsC",medium:"Examples-module__medium___Ty0Ey",tall:"Examples-module__tall___idfpx","with-padding":"Examples-module__with-padding___BTyqD","vertical-center-align-wrapper":"Examples-module__vertical-center-align-wrapper___VFCEp"}}}]);