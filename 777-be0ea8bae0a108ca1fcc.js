"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[777],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),s=a(n(47166)),i=a(n(17422)),o=s.default.bind(i.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,s=l.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:o("badge"),href:t},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},s,i)};u.propTypes=d;var m=u;t.Z=m},30552:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(67294),l=n(81254),r=n(61042),s=n(34261),i=n(41759),o=n(95655),d=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function p(e){var t=e.components,n=m(e,d);return(0,l.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetResultCell } from 'terra-clinical-result/lib/index';\nimport classNames from 'classnames';\nimport classNamesBind from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst multipleResultsGraySymbol = [\n  {\n    eventId: '1602328271',\n    result: {\n      value: '101.1',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328282',\n    result: {\n      value: '101.2',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328293',\n    result: {\n      value: '101.3',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n];\n\nconst multipleResultsLightRedSymbol = [\n  {\n    eventId: '1602328271',\n    result: {\n      value: '101.1',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328282',\n    result: {\n      value: '101.2',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328293',\n    result: {\n      value: '101.3',\n      unit: 'degC',\n    },\n    isNumeric: true,\n    interpretation: 'high',\n  },\n];\n\nconst multipleResultsDarkRedSymbol = [\n  {\n    eventId: '1602328271',\n    result: {\n      value: '101.1',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328282',\n    result: {\n      value: '101.2',\n      unit: 'degC',\n    },\n    isNumeric: true,\n  },\n  {\n    eventId: '1602328293',\n    result: {\n      value: '101.3',\n      unit: 'degC',\n    },\n    isNumeric: true,\n    interpretation: 'critical',\n  },\n];\n\nexport default () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      'mock-flowsheet-example',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx('mock-flowsheet-resultcolumn')}>\n        <div className={cx('mock-flowsheet-resultcolumn-cell')}>\n          <FlowsheetResultCell resultDataSet={multipleResultsGraySymbol} hideUnit />\n        </div>\n      </div>\n      <div className={cx('mock-flowsheet-resultcolumn')}>\n        <div className={cx('mock-flowsheet-resultcolumn-cell')}>\n          <FlowsheetResultCell resultDataSet={multipleResultsLightRedSymbol} hideUnit />\n        </div>\n      </div>\n      <div className={cx('mock-flowsheet-resultcolumn')}>\n        <div className={cx('mock-flowsheet-resultcolumn-cell')}>\n          <FlowsheetResultCell resultDataSet={multipleResultsDarkRedSymbol} hideUnit />\n        </div>\n      </div>\n    </div>\n  );\n};\n\n")))}p.isMDXComponent=!0;var h=n(49271),f=n(52636),x=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(h.Z,{title:t||"Flowsheet Result Cell Multiple Results Symbols",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(f.Z,null),exampleSrc:a.createElement(p,null),isExpanded:l})},g=n(9229),b=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var w={};function y(e){var t=e.components,n=N(e,b);return(0,l.mdx)("wrapper",v({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\nimport classNames from 'classnames';\nimport classNamesBind from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultNameHeaderCellAccessibleNamesExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      'mock-flowsheet-example',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx('mock-flowsheet-firstcolumn')}>\n        <div className={cx('mock-flowsheet-firstcolumn-cell')}>\n          <ResultNameHeaderCell resultName=\"Temp\" fullResultName=\"Temperature\" unit=\"degC\" fullUnit=\"Degrees Celsius\" />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultNameHeaderCellAccessibleNamesExample;\n\n")))}y.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(h.Z,{title:t||"Result Name Header Cell Accessible Names Example",description:n,example:a.createElement(g.Z,null),exampleCssSrc:a.createElement(f.Z,null),exampleSrc:a.createElement(y,null),isExpanded:l})},R=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var T={},O="wrapper";function I(e){var t=e.components,n=k(e,R);return(0,l.mdx)(O,E({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"accessibility-guide-for-terra-clinical-result"},"Accessibility Guide for Terra Clinical Result"),(0,l.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,l.mdx)("p",null,"Terra Clinical Result is a collection of standardized views for single result values added to a patient's medical chart. As there are many patients who rely on assistive technologies to interact with their chart, it is critical that any information conveyed by a clinical result to sighted users is also conveyed to screen reader users in a meaningful way."),(0,l.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,l.mdx)("p",null,"Terra Clinical Result has several variants designed to either display specific results or for use within a flowsheet. The table below lists each variant and its use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Variant"),(0,l.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Clinical Result"),(0,l.mdx)("td",{parentName:"tr",align:null},"The default Clinical Result component intended for displaying a single result value")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Clinical Result Blood Pressure"),(0,l.mdx)("td",{parentName:"tr",align:null},"Intended for displaying Blood Pressure Vital Sign results")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Flowsheet Result Cell"),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifically for the grid display of a result collection")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Result Name Header Cell"),(0,l.mdx)("td",{parentName:"tr",align:null},"Standardized view for the Result Name and Unit of Measure in the row header for each row within a flowsheet")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Result Time Header Cell"),(0,l.mdx)("td",{parentName:"tr",align:null},"Standardized view for the Date/Time Header cells for each bucketed time column within a flowsheet")))),(0,l.mdx)("p",null,"The following sections go into more detail on accessibility considerations for each variant."),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,l.mdx)("h4",{id:"clinical-result-blood-pressure-with-additional-displays"},"Clinical Result Blood Pressure with Additional Displays"),(0,l.mdx)("p",null,"Clinical Result Blood Pressure creates a standardized view for single result values added to a patient's medical chart. Along with the blood pressure results, we have the option to display additional details like concept names (Systolic, Diastolic) and the date and time of the results. Visually we can see that this information is related but it is possible that screen reader users may not understand the whole cell as a group."),(0,l.mdx)(s.qX,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,l.mdx)("p",null,"It is highly recommended to set the optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"isBloodPressureGrouped")," ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-result/clinical-result/clinical-result-blood-pressure#clinical-result-blood-pressure-props"},"prop")," to true when additional information is displayed with the blood pressure results. This will semantically relate the blood pressure results and additional displays as a group context.")),(0,l.mdx)("h5",{id:"code-example"},"Code Example:"),(0,l.mdx)("p",null,"This example shows how to set up the optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"isBloodPressureGrouped")," prop in order to group the blood pressure results with additional displays:"),(0,l.mdx)(i.Z,{title:"Clinical Result Blood Pressure with Additional Displays",mdxType:"ClinicalResultBloodPressureExtraDisplays"}),(0,l.mdx)("h4",{id:"result-name-header-cell-accessible-names"},"Result Name Header Cell Accessible Names"),(0,l.mdx)("p",null,"Result Name Header Cell creates a standardized view for the Result Name and Unit of Measure pair within a flowsheet. In many cases, the displayed result name or displayed unit of measure is an abbreviation. Reading out these abbreviations is not very helpful for screen reader users."),(0,l.mdx)(s.qX,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,l.mdx)("p",null,"In order to provide better accessible names for the result name and unit of measure, the optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"fullResultName")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"fullUnit")," ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-result/clinical-result/result-name-header-cell#result-name-header-cell-props"},"props")," can be used to set the full name of the result name and unit when consuming the Result Name Header Cell component.")),(0,l.mdx)("h5",{id:"code-example-1"},"Code Example:"),(0,l.mdx)("p",null,"This example shows how to set up the optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"fullResultName")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"fullUnit")," props in order to provide accessible names for the displayed result name and unit:"),(0,l.mdx)(C,{title:"Result Name Header Cell Accessible Names",mdxType:"ResultNameHeaderCellAccessibleNamesExample"}),(0,l.mdx)("h4",{id:"accessibility-of-cell-components"},"Accessibility of Cell Components"),(0,l.mdx)("p",null,"Flowsheet Result Cell, Result Name Header Cell, and Result Time Header Cell all return their content using HTML table elements. Flowsheet Result Cell utilizes the ",(0,l.mdx)("inlineCode",{parentName:"p"},"<td>")," element while both of the header cell components utilize the ",(0,l.mdx)("inlineCode",{parentName:"p"},"<th>")," element. As such, the best way to consume these components for true accessibility is in a semantic HTML table. Otherwise, the context of being a cell/header cell will not be understood by screen reader users. The ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/html-table/about"},"Terra HTML Table")," component can be used to create a semantic HTML table for this purpose."),(0,l.mdx)("h3",{id:"other-considerations"},"Other Considerations"),(0,l.mdx)("h4",{id:"flowsheet-result-cell-with-multiple-results"},"Flowsheet Result Cell with Multiple Results"),(0,l.mdx)("p",null,"Flowsheet Result Cell is used for the grid display of a result collection and can handle displaying an indication of multiple results. When there are multiple results, the first result is displayed along with a custom symbol that is used to communicate information about the remaining results:"),(0,l.mdx)(x,{mdxType:"FlowsheetResultCellMultipleResultsSymbols"}),(0,l.mdx)("p",null,"The number represents how many additional results exist and the color of the result stack indicates the severity of the ",(0,l.mdx)("strong",{parentName:"p"},"most")," serious result in the side panel."),(0,l.mdx)("p",null,"Alternative text has been added to communicate the number of additional results and the severity:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Severity Color"),(0,l.mdx)("th",{parentName:"tr",align:null},"Meaning"),(0,l.mdx)("th",{parentName:"tr",align:null},"Text to be Read"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Gray"),(0,l.mdx)("td",{parentName:"tr",align:null},"Normal"),(0,l.mdx)("td",{parentName:"tr",align:null},'"A total of ',"[number]",' results are available."')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Light Red"),(0,l.mdx)("td",{parentName:"tr",align:null},"Out of range (high or low) but not critical"),(0,l.mdx)("td",{parentName:"tr",align:null},'"A total of ',"[number]",' results are available with at least 1 out of range result."')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Dark Red"),(0,l.mdx)("td",{parentName:"tr",align:null},"Critical"),(0,l.mdx)("td",{parentName:"tr",align:null},'"A total of ',"[number]",' results are available with at least 1 critical result."')))),(0,l.mdx)("p",null,"e.g. if we have a dark red box with 3 results the screenreader will read out:"),(0,l.mdx)("p",null,"“A total of 3 results are available with at least 1 critical result.”"),(0,l.mdx)("h4",{id:"usage-of-visually-hidden-text"},"Usage of Visually Hidden Text"),(0,l.mdx)("p",null,"There are a few cases in which we leverage visually hidden text to give greater context to certain styling on the front end - or related to statuses of certain results. These cases are as follows:"),(0,l.mdx)("h5",{id:"no-results"},"No Results:"),(0,l.mdx)("p",null,"When the ",(0,l.mdx)("inlineCode",{parentName:"p"},"hasResultNoData")," prop is used the display will show: '--'"),(0,l.mdx)("p",null,'Hidden text has been added to read out "No Results" when the ',(0,l.mdx)("inlineCode",{parentName:"p"},"hasResultNoData")," prop is used."),(0,l.mdx)("h5",{id:"entered-in-error"},"Entered In Error:"),(0,l.mdx)("p",null,"When a result inside a Flowsheet Result Cell has a status of ",(0,l.mdx)("inlineCode",{parentName:"p"},"entered-in-error"),", the display will show: 'In Error'"),(0,l.mdx)("p",null,'Hidden text has been added to read out "Value Uncharted as In Error" to convey this has a status of ',(0,l.mdx)("inlineCode",{parentName:"p"},"entered-in-error"),"."),(0,l.mdx)("h5",{id:"strikethrough-result-entered-in-error"},"Strikethrough Result Entered In Error:"),(0,l.mdx)("p",null,"When a result is shown on the front end with a strikethrough, that means it has been entered in error. The result is important enough to be shown visually and as such, needs to be read by the screen reader while also giving some context that it has a status of ",(0,l.mdx)("inlineCode",{parentName:"p"},"entered-in-error"),"."),(0,l.mdx)("p",null,'Hidden text has been added to read out "Result {strikethroughResult} Entered In Error" when we have a strikethrough result.'),(0,l.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,l.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, simply using Terra components will not automatically make a product accessible."),(0,l.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,l.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,l.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},(0,l.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},(0,l.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},(0,l.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," - Components that have the same functionality within a set of Web pages are identified consistently."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},(0,l.mdx)("strong",{parentName:"a"},"4.1.2 Name, Role, Value"))," - For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.")),(0,l.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"None identified"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-clinical/issues/new/choose"},"Report a problem with this component on ",(0,l.mdx)("strong",{parentName:"a"},"GitHub")))),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,l.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")))}I.isMDXComponent=!0},95655:function(e,t,n){t.Z=void 0;var a=d(n(67294)),l=n(21860),r=d(n(94184)),s=d(n(47166)),i=d(n(50026)),o=d(n(60815));function d(e){return e&&e.__esModule?e:{default:e}}var u=s.default.bind(o.default),m=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0}],c=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,interpretation:"high"}],p=[{eventId:"1602328271",result:{value:"101.1",unit:"degC"},isNumeric:!0},{eventId:"1602328282",result:{value:"101.2",unit:"degC"},isNumeric:!0},{eventId:"1602328293",result:{value:"101.3",unit:"degC"},isNumeric:!0,interpretation:"critical"}];t.Z=function(){var e=a.default.useContext(i.default),t=(0,r.default)(u("mock-flowsheet-example",e.className));return a.default.createElement("div",{className:t},a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn")},a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn-cell")},a.default.createElement(l.FlowsheetResultCell,{resultDataSet:m,hideUnit:!0}))),a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn")},a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn-cell")},a.default.createElement(l.FlowsheetResultCell,{resultDataSet:c,hideUnit:!0}))),a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn")},a.default.createElement("div",{className:u("mock-flowsheet-resultcolumn-cell")},a.default.createElement(l.FlowsheetResultCell,{resultDataSet:p,hideUnit:!0}))))}},9229:function(e,t,n){t.Z=void 0;var a=d(n(67294)),l=n(21860),r=d(n(94184)),s=d(n(47166)),i=d(n(50026)),o=d(n(60815));function d(e){return e&&e.__esModule?e:{default:e}}var u=s.default.bind(o.default),m=function(){var e=a.default.useContext(i.default),t=(0,r.default)(u("mock-flowsheet-example",e.className));return a.default.createElement("div",{className:t},a.default.createElement("div",{className:u("mock-flowsheet-firstcolumn")},a.default.createElement("div",{className:u("mock-flowsheet-firstcolumn-cell")},a.default.createElement(l.ResultNameHeaderCell,{resultName:"Temp",fullResultName:"Temperature",unit:"degC",fullUnit:"Degrees Celsius"}))))};t.Z=m},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);