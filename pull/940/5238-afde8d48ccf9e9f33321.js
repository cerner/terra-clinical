"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5238],{21076:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var o=n(96540),r=n(36665),i=n(40387),a=["components"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c={};function u(t){var e=t.components,n=l(t,a);return(0,r.mdx)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\n\nconst numColumnsDisplayed = 10;\nconst pinnedColumnsCount = 3;\nconst numRowsPerSection = 15;\nclass DatagridWithSubsections extends React.Component {\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        text: columnHeaderInfo.displayName,\n        width: 200,\n      };\n    }\n    return col;\n  }\n\n  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSections.bind(this);\n\n    this.state = {\n      collapsedSectionId: undefined,\n    };\n  }\n\n  buildSections(data, numberOfRowsToDisplay) {\n    return new Array(data.sections.length).fill(0).map((sectionVal, sectionIndex) => ({\n      id: data.sections[sectionIndex].section.id,\n      text: data.sections[sectionIndex].section.text,\n      endAccessory: (data.sections[sectionIndex].section.id === 'section_1') ? (\n        <span>\n          <Button text=\"Button 1\" isCompact data-accessible-data-grid-content variant=\"ghost\" className={cx('spacer-right-medium')} />\n          <Button text=\"Button 2\" isCompact data-accessible-data-grid-content variant=\"ghost\" className={cx('spacer-right-medium')} />\n          <Button text=\"Button 3\" isCompact data-accessible-data-grid-content variant=\"emphasis\" />\n        </span>\n      ) : null,\n      isCollapsible: data.sections[sectionIndex].section.id === 'section_0',\n      isCollapsed: this.state.collapsedSectionId === data.sections[sectionIndex].section.id,\n      rows: DatagridWithSubsections.buildRows(data.sections[sectionIndex], data.allColumnIds.length, numberOfRowsToDisplay),\n    }));\n  }\n\n  render() {\n    const theme = this.context;\n\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"subsections-example\"\n          pinnedColumns={DatagridWithSubsections.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}\n          overflowColumns={DatagridWithSubsections.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}\n          sections={this.buildSections(gridDataJSON, numRowsPerSection)}\n          onRequestSectionCollapse={(sectionId) => {\n            if (this.state.collapsedSectionId === sectionId) {\n              this.setState({ collapsedSectionId: undefined });\n            } else {\n              this.setState({ collapsedSectionId: sectionId });\n            }\n          }}\n          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nDatagridWithSubsections.contextType = ThemeContext;\n\nexport default DatagridWithSubsections;\n\n")))}u.isMDXComponent=!0;var d=n(201),m=n(18114),p=function(t){var e=t.title,n=t.description,r=t.isExpanded;return o.createElement(d.A,{title:e||"Datagrid With Subsections",description:n,example:o.createElement(i.A,null),exampleCssSrc:o.createElement(m.A,null),exampleSrc:o.createElement(u,null),isExpanded:r})},f=["components"];function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},b.apply(this,arguments)}function y(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g={},h="wrapper";function x(t){var e=t.components,n=y(t,f);return(0,r.mdx)(h,b({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)(p,{description:"This example features multiple subsections. Section 0 is collapsible. \nThe header for Section 1 contains keyboard-accessible content in its endAccessory region.",mdxType:"DatagridWithSubsections"}))}x.isMDXComponent=!0},18114:function(t,e,n){n.d(e,{A:function(){return c}});n(96540);var o=n(36665),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s={},l="wrapper";function c(t){var e=t.components,n=a(t,r);return(0,o.mdx)(l,i({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},35778:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n(96540)),r=l(n(5556)),i=l(n(67967)),a=l(n(52103)),s=l(n(29299));function l(t){return t&&t.__esModule?t:{default:t}}var c=i.default.bind(s.default),u={text:r.default.string},d=function(t){var e=t.text,n=o.default.useContext(a.default);return o.default.createElement("div",{className:c(["content-cell",n.className])},e)};d.contextType=a.default,d.propTypes=u;e.default=d},40387:function(t,e,n){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}e.A=void 0;var r=m(n(96540)),i=m(n(23986)),a=m(n(48471)),s=m(n(67967)),l=m(n(52103)),c=m(n(35778)),u=m(n(55850)),d=m(n(1623));function m(t){return t&&t.__esModule?t:{default:t}}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,f(o.key),o)}}function f(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}function b(t,e,n){return e=g(e),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,y()?Reflect.construct(e,n||[],g(t).constructor):e.apply(t,n))}function y(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(y=function(){return!!t})()}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}var x=s.default.bind(u.default),v=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,e,[t])).buildSection=n.buildSections.bind(n),n.state={collapsedSectionId:void 0},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(e,t),n=e,s=[{key:"buildColumns",value:function(t,e,n){for(var o=new Array(n-e),r=e,i=0;r<=n;r+=1,i+=1){var a=t.allColumnIds[r];o[i]={id:a.id,text:a.displayName,width:200}}return o}},{key:"buildRows",value:function(t,e,n){return new Array(n).fill().map((function(n,o){return{id:"".concat(t.section.id,"-Row").concat(o),cells:new Array(e).fill(0).map((function(e,n){return{columnId:t.sectionRows[o].cells[n].columnId,component:r.default.createElement(c.default,{text:t.sectionRows[o].cells[n].cellContent})}}))}}))}}],(o=[{key:"buildSections",value:function(t,n){var o=this;return new Array(t.sections.length).fill(0).map((function(a,s){return{id:t.sections[s].section.id,text:t.sections[s].section.text,endAccessory:"section_1"===t.sections[s].section.id?r.default.createElement("span",null,r.default.createElement(i.default,{text:"Button 1",isCompact:!0,"data-accessible-data-grid-content":!0,variant:"ghost",className:x("spacer-right-medium")}),r.default.createElement(i.default,{text:"Button 2",isCompact:!0,"data-accessible-data-grid-content":!0,variant:"ghost",className:x("spacer-right-medium")}),r.default.createElement(i.default,{text:"Button 3",isCompact:!0,"data-accessible-data-grid-content":!0,variant:"emphasis"})):null,isCollapsible:"section_0"===t.sections[s].section.id,isCollapsed:o.state.collapsedSectionId===t.sections[s].section.id,rows:e.buildRows(t.sections[s],t.allColumnIds.length,n)}}))}},{key:"render",value:function(){var t=this,n=this.context;return r.default.createElement("div",{className:x("data-grid-basic")},r.default.createElement(a.default,{id:"subsections-example",pinnedColumns:e.buildColumns(d.default,0,2),overflowColumns:e.buildColumns(d.default,3,9),sections:this.buildSections(d.default,15),onRequestSectionCollapse:function(e){t.state.collapsedSectionId===e?t.setState({collapsedSectionId:void 0}):t.setState({collapsedSectionId:e})},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,fill:!0}))}}])&&p(n.prototype,o),s&&p(n,s),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,s}(r.default.Component);v.contextType=l.default;e.A=v},29299:function(t,e,n){n.r(e),e.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___7jU7E","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___aErsg","content-cell":"ContentCellLayout__content-cell___31MKL"}},55850:function(t,e,n){n.r(e),e.default={"data-grid-basic":"Datagrid-module__data-grid-basic___L-mCc","data-grid-small":"Datagrid-module__data-grid-small___uE-9R","data-grid-row-style":"Datagrid-module__data-grid-row-style___F+9EF","data-grid-paging":"Datagrid-module__data-grid-paging___3Ztyu","loading-overlay":"Datagrid-module__loading-overlay___GKOfW","spacer-right-medium":"Datagrid-module__spacer-right-medium___S3SyW"}}}]);