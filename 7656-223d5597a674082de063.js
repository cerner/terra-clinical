"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7656],{77656:function(e,l,t){t.r(l),t.d(l,{default:function(){return F}});var n=t(11504),r=t(69788),a=t(6560),o=t(27496),m=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function d(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c={};function s(e){var l=e.components,t=d(e,m);return(0,r.mdx)("wrapper",i({},c,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"23:59\" />;\n\n")))}s.isMDXComponent=!0;var u=t(33792),p=function(e){var l=e.title,t=e.description,r=e.isExpanded;return n.createElement(u.c,{title:l||"Result Time Header Cell",description:t,example:n.createElement(o.c,null),exampleSrc:n.createElement(s,null),isExpanded:r})},f=t(25308),x=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function b(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y={};function w(e){var l=e.components,t=b(e,x);return(0,r.mdx)("wrapper",h({},y,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib';\nimport classNames from 'classnames';\nimport classNamesBind from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultTimeHeaderFlowsheetExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      'mock-flowsheet-example',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx('mock-flowsheet-header')}>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"21:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"22:00\" hideDate />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"23:59\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"00:15\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"03:00\" hideDate />\n        </div>\n        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"07:00\" />\n        </div>\n        <div className={cx('mock-flowsheet-header-cell')}>\n          <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"11:00\" hideDate />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultTimeHeaderFlowsheetExample;\n\n")))}w.isMDXComponent=!0;var _=t(51290),g=function(e){var l=e.title,t=e.description,r=e.isExpanded;return n.createElement(u.c,{title:l||"Result Time Header Flowsheet Example",description:t,example:n.createElement(f.c,null),exampleCssSrc:n.createElement(_.c,null),exampleSrc:n.createElement(w,null),isExpanded:r})},v=t(60440),k=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E.apply(this,arguments)}function T(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var C={};function O(e){var l=e.components,t=T(e,k);return(0,r.mdx)("wrapper",E({},C,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\nimport Table, {\n  Header,\n  Row,\n  Body,\n} from 'terra-html-table';\nimport FlowsheetResultCell from '../../../../flowsheet-result-cell/FlowsheetResultCell';\n\nconst defaultBloodPressureResult = [\n  {\n    id: '1',\n    systolic: {\n      eventId: '2',\n      result: {\n        value: '130',\n        unit: 'mmHg',\n      },\n      interpretation: 'high',\n    },\n    diastolic: {\n      eventId: '3',\n      result: {\n        value: '80',\n        unit: 'mmHg',\n      },\n    },\n  },\n];\n\nexport default () => (\n  <Table>\n    <Header>\n      <ResultTimeHeaderCell key=\"time1\" date=\"Dec 29, 2010\" time=\"20:59\" />\n      <ResultTimeHeaderCell key=\"time2\" date=\"Dec 30, 2010\" time=\"22:00\" />\n      <ResultTimeHeaderCell key=\"time3\" date=\"Jan 01, 2011\" time=\"23:59\" />\n    </Header>\n    <Body>\n      <Row>\n        <FlowsheetResultCell key=\"time1\" resultDataSet={defaultBloodPressureResult} />\n        <FlowsheetResultCell key=\"time2\" resultDataSet={defaultBloodPressureResult} />\n        <FlowsheetResultCell key=\"time3\" resultDataSet={defaultBloodPressureResult} />\n      </Row>\n    </Body>\n  </Table>\n);\n\n")))}O.isMDXComponent=!0;var N=function(e){var l=e.title,t=e.description,r=e.isExpanded;return n.createElement(u.c,{title:l||"Result Time Header Cell Semantic Table Example",description:t,example:n.createElement(v.c,null),exampleSrc:n.createElement(O,null),isExpanded:r})},R=t(28744),D=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function H(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var P={},S="wrapper";function z(e){var l=e.components,t=H(e,D);return(0,r.mdx)(S,j({},P,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(R.cp,{mdxType:"PropsTable"},(0,r.mdx)(R.WA,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(R.qe,{mdxType:"PropNameCell"},"date"),(0,r.mdx)(R.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(R.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(R._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(R.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed on the first line, typically abbreviated date, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dec 12, 2010")))),(0,r.mdx)(R.WA,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(R.qe,{mdxType:"PropNameCell"},"time"),(0,r.mdx)(R.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(R.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(R._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(R.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"23:59")))),(0,r.mdx)(R.WA,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(R.qe,{mdxType:"PropNameCell"},"hideDate"),(0,r.mdx)(R.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(R.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Visually hides the date when presented in a series of side-by-side columns of the same date."))),(0,r.mdx)(R.WA,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(R.qe,{mdxType:"PropNameCell"},"paddingStyle"),(0,r.mdx)(R.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'compact'\n  'standard'\n],\n"))),(0,r.mdx)(R.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'compact'\n"))),(0,r.mdx)(R.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The padding styling to apply to the Result Time column header cell.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"'standard'"),".")))))}z.isMDXComponent=!0;var I=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}function X(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var q={},B="wrapper";function F(e){var l=e.components,t=X(e,I);return(0,r.mdx)(B,M({},q,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(a.k,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"result-time-header-cell"},"Result Time Header Cell"),(0,r.mdx)("p",null,"Result-Time-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Date/Time Header cells (column headers) for each bucketed time column within a flowsheet."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(p,{mdxType:"Default"}),(0,r.mdx)(g,{title:"Result Time Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),(0,r.mdx)(N,{title:"Result Time Header Cell in Semantic Table",mdxType:"SemanticStyleHeaderTimeCell"}),(0,r.mdx)("h2",{id:"result-time-header-cell-props"},"Result Time Header Cell Props"),(0,r.mdx)(z,{mdxType:"ResultTimeHeaderProps"}))}F.isMDXComponent=!0},51290:function(e,l,t){t.d(l,{c:function(){return d}});t(11504);var n=t(69788),r=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},i="wrapper";function d(e){var l=e.components,t=o(e,r);return(0,n.mdx)(i,a({},m,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/Examples.module';\n@import './orion-fusion-theme/Examples.module';\n\n:local {\n  .example-description-text {\n    display: inline-flex;\n    margin-bottom: 0.75rem;\n  }\n\n  .dashed-border-group {\n    border: var(--terra-clinical-result-examples-dashed-border-group-border, 2px dashed #333);\n  }\n\n  .clinical-result-fontsize-16 {\n    font-size: 1.14285rem;\n  }\n\n  .clinical-result-fontsize-18 {\n    font-size: 1.28571rem;\n  }\n\n  .clinical-result-fontsize-21 {\n    font-size: 1.5rem;\n  }\n\n  .clinical-result-fontsize-24 {\n    font-size: 1.71428rem;\n  }\n\n  .bottom-space {\n    margin-bottom: 1.42857rem;\n  }\n\n  .mock-flowsheet-example {\n    margin: 0;\n    padding: 0;\n  }\n\n  .mock-flowsheet-table {\n    table-layout: fixed;\n    width: 40%;\n  }\n\n  .mock-flowsheet-table-full {\n    table-layout: fixed;\n    width: 100%;\n  }\n\n  .mock-flowsheet-header {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-header-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-header-border, 1px solid #dedfe0);\n    border-bottom-color: var(--terra-clinical-result-examples-mock-flowsheet-header-border-bottom-color, #868a8c);\n    line-height: 0;\n    max-width: 1055px;\n    overflow: hidden;\n    padding-left: 220px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-header-cell {\n    border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-left, 1px solid #868a8c);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-border-right, 1px solid #868a8c);\n    display: inline-block;\n    margin-right: -1px;\n    width: 120px;\n\n    &.new-date {\n      border-left: var(--terra-clinical-result-examples-mock-flowsheet-header-cell-new-date-border-left, 2px solid #4e5558);\n    }\n  }\n\n  .mock-flowsheet-firstcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border, 1px solid #dedfe0);\n    border-right: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-border-right, 2px solid #4e5558);\n    max-width: 222px;\n    overflow: hidden;\n    padding-top: 48px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-firstcolumn-cell {\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-bottom, 1px solid #868a8c);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-border-top, 1px solid #868a8c);\n    margin-bottom: -1px;\n\n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-firstcolumn-cell-zebra-background-color, #dedfe0);\n    }\n  }\n\n  .mock-flowsheet-resultcolumn {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-background-color, #f1f1f1);\n    border: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-border, 1px solid #dedfe0);\n    display: inline-block;\n    margin-left: -1px;\n    overflow: hidden;\n    padding-top: 24px;\n    vertical-align: top;\n    width: 162px;\n\n    &.half-column {\n      width: 99px;\n    }\n\n    &.double-column {\n      width: 324px;\n    }\n\n    &.triple-column {\n      width: 490px;\n    }\n\n    &.flexible50-column {\n      width: 50%;\n    }\n  }\n\n  .mock-flowsheet-resultcolumn-cell {\n    background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-background-color, #fff);\n    border-bottom: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-bottom, 1px solid #dedfe0);\n    border-top: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-border-top, 1px solid #dedfe0);\n    box-sizing: border-box;\n    height: 33px;\n    margin-bottom: -1px;\n    white-space: nowrap;\n\n    &.allow-wrapping {\n      overflow: auto;\n      white-space: normal;\n      word-wrap: normal;\n    }\n\n    &.empty {\n      height: 33px;\n    }\n\n    &.short {\n      height: 25px;\n    }\n\n    &.medium {\n      height: 41px;\n    }\n\n    &.tall {\n      height: 155px;\n    }\n\n    &.with-padding {\n      padding: 7px 7px 0;\n    }\n\n    &.zebra {\n      background-color: var(--terra-clinical-result-examples-mock-flowsheet-resultcolumn-cell-zebra-background-color, #f1f1f1);\n    }\n  }\n\n  .vertical-center-align-wrapper {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    margin: 0;\n    max-height: 100%;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // Needed for IE10\n    padding: 0;\n    width: 100%;\n  }\n}\n\n")))}d.isMDXComponent=!0},6560:function(e,l,t){t.d(l,{k:function(){return a}});var n=t(11504),r=t(11416),a=function(e){var l=e.url;return n.createElement(r.c,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.22.0",url:l})}},27496:function(e,l,t){l.c=void 0;var n,r=(n=t(11504))&&n.__esModule?n:{default:n},a=t(85344);l.c=function(){return r.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"23:59"})}},60440:function(e,l,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}l.c=void 0;var r=d(t(11504)),a=t(85344),o=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var t=i(l);if(t&&t.has(e))return t.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=a?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(r,o,m):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(t(52984)),m=d(t(7736));function i(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:l})(e)}function d(e){return e&&e.__esModule?e:{default:e}}var c=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}];l.c=function(){return r.default.createElement(o.default,null,r.default.createElement(o.Header,null,r.default.createElement(a.ResultTimeHeaderCell,{key:"time1",date:"Dec 29, 2010",time:"20:59"}),r.default.createElement(a.ResultTimeHeaderCell,{key:"time2",date:"Dec 30, 2010",time:"22:00"}),r.default.createElement(a.ResultTimeHeaderCell,{key:"time3",date:"Jan 01, 2011",time:"23:59"})),r.default.createElement(o.Body,null,r.default.createElement(o.Row,null,r.default.createElement(m.default,{key:"time1",resultDataSet:c}),r.default.createElement(m.default,{key:"time2",resultDataSet:c}),r.default.createElement(m.default,{key:"time3",resultDataSet:c}))))}},25308:function(e,l,t){l.c=void 0;var n=d(t(11504)),r=t(85344),a=d(t(82084)),o=d(t(74824)),m=d(t(99640)),i=d(t(63960));function d(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default);l.c=function(){var e=n.default.useContext(m.default),l=(0,a.default)(c("mock-flowsheet-example",e.className));return n.default.createElement("div",{className:l},n.default.createElement("div",{className:c("mock-flowsheet-header")},n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"21:00"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"22:00",hideDate:!0})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"23:59",hideDate:!0})),n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"00:15"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"03:00",hideDate:!0})),n.default.createElement("div",{className:c(["mock-flowsheet-header-cell","new-date"])},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"07:00"})),n.default.createElement("div",{className:c("mock-flowsheet-header-cell")},n.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"11:00",hideDate:!0}))))}},63960:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Examples-module__clinical-lowlight-theme___raZXs","orion-fusion-theme":"Examples-module__orion-fusion-theme___Pm6k9","example-description-text":"Examples-module__example-description-text___Xq-WD","dashed-border-group":"Examples-module__dashed-border-group___7SN-x","clinical-result-fontsize-16":"Examples-module__clinical-result-fontsize-16___u9JnA","clinical-result-fontsize-18":"Examples-module__clinical-result-fontsize-18___rluGp","clinical-result-fontsize-21":"Examples-module__clinical-result-fontsize-21___cxLuH","clinical-result-fontsize-24":"Examples-module__clinical-result-fontsize-24___B5x8X","bottom-space":"Examples-module__bottom-space___xH0Ub","mock-flowsheet-example":"Examples-module__mock-flowsheet-example___HHOIv","mock-flowsheet-table":"Examples-module__mock-flowsheet-table___Jg5yc","mock-flowsheet-table-full":"Examples-module__mock-flowsheet-table-full___xRJXw","mock-flowsheet-header":"Examples-module__mock-flowsheet-header___NyDYg","mock-flowsheet-header-cell":"Examples-module__mock-flowsheet-header-cell___EwoKe","new-date":"Examples-module__new-date___k3n84","mock-flowsheet-firstcolumn":"Examples-module__mock-flowsheet-firstcolumn___HUI8Y","mock-flowsheet-firstcolumn-cell":"Examples-module__mock-flowsheet-firstcolumn-cell___nq+xg",zebra:"Examples-module__zebra___oEmkn","mock-flowsheet-resultcolumn":"Examples-module__mock-flowsheet-resultcolumn___7jQOo","half-column":"Examples-module__half-column___gtHm3","double-column":"Examples-module__double-column___H635r","triple-column":"Examples-module__triple-column___wCTfe","flexible50-column":"Examples-module__flexible50-column___9d4Ht","mock-flowsheet-resultcolumn-cell":"Examples-module__mock-flowsheet-resultcolumn-cell___PIXFo","allow-wrapping":"Examples-module__allow-wrapping___P3M2v",empty:"Examples-module__empty___-PH0H",short:"Examples-module__short___JsBsC",medium:"Examples-module__medium___Ty0Ey",tall:"Examples-module__tall___idfpx","with-padding":"Examples-module__with-padding___BTyqD","vertical-center-align-wrapper":"Examples-module__vertical-center-align-wrapper___VFCEp"}}}]);