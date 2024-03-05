"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[2172],{58134:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(96540),o=t(36665),i=t(88801),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={};function s(n){var e=n.components,t=u(n,a);return(0,o.mdx)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\nconst defaultColumnWidth = 200;\nconst firstColumnWidth = 200;\nconst numColumnsDisplayed = 10;\nconst pinnedColumnsCount = 0;\nconst numRowsPerSection = 15;\n\nclass DatagridWithNoPinnedColumns extends React.Component {\n  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      height: (rowIndex + 1) % 5 === 0 ? '7rem' : undefined,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  static buildSection(sectionData, numberOfRows) {\n    return {\n      id: sectionData.section.id,\n      rows: DatagridWithNoPinnedColumns.buildRows(sectionData, numColumnsDisplayed, numberOfRows),\n    };\n  }\n\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      col[currentElementIndex] = {\n        id: data.allColumnIds[columnIndex].id,\n        text: data.allColumnIds[columnIndex].displayName,\n        ...(columnIndex === 0) && { width: firstColumnWidth },\n      };\n    }\n    return col;\n  }\n\n  render() {\n    const theme = this.context;\n\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"no-pinning-example\"\n          overflowColumns={DatagridWithNoPinnedColumns.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}\n          sections={[\n            DatagridWithNoPinnedColumns.buildSection(gridDataJSON.sections[0], numRowsPerSection),\n          ]}\n          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n          defaultColumnWidth={defaultColumnWidth}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nDatagridWithNoPinnedColumns.contextType = ThemeContext;\n\nexport default DatagridWithNoPinnedColumns;\n\n")))}s.isMDXComponent=!0;var d=t(201),f=t(18114),m=function(n){var e=n.title,t=n.description,o=n.isExpanded;return r.createElement(d.A,{title:e||"Datagrid With No Pinned Columns",description:t,example:r.createElement(i.A,null),exampleCssSrc:r.createElement(f.A,null),exampleSrc:r.createElement(s,null),isExpanded:o})},p=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var g={},h="wrapper";function w(n){var e=n.components,t=b(n,p);return(0,o.mdx)(h,y({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)(m,{description:"This example features a DataGrid with no pinned columns. \nThe entirety of the DataGrid will scroll horizontally.",mdxType:"DatagridWithNoPinnedColumns"}))}w.isMDXComponent=!0},18114:function(n,e,t){t.d(e,{A:function(){return c}});t(96540);var r=t(36665),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i.apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l={},u="wrapper";function c(n){var e=n.components,t=a(n,o);return(0,r.mdx)(u,i({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},35778:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(96540)),o=u(t(5556)),i=u(t(67967)),a=u(t(52103)),l=u(t(29299));function u(n){return n&&n.__esModule?n:{default:n}}var c=i.default.bind(l.default),s={text:o.default.string},d=function(n){var e=n.text,t=r.default.useContext(a.default);return r.default.createElement("div",{className:c(["content-cell",t.className])},e)};d.contextType=a.default,d.propTypes=s;e.default=d},88801:function(n,e,t){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}e.A=void 0;var o=d(t(96540)),i=d(t(48471)),a=d(t(67967)),l=d(t(52103)),u=d(t(35778)),c=d(t(55850)),s=d(t(1623));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e,t){return(e=b(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,b(r.key),r)}}function b(n){var e=function(n,e){if("object"!=r(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==r(e)?e:String(e)}function g(n,e,t){return e=w(e),function(n,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,h()?Reflect.construct(e,t||[],w(n).constructor):e.apply(n,t))}function h(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(h=function(){return!!n})()}function w(n){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},w(n)}function O(n,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},O(n,e)}var v=a.default.bind(c.default),x=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,e,arguments)}var t,r,a;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&O(n,e)}(e,n),t=e,a=[{key:"buildRows",value:function(n,e,t){return new Array(t).fill().map((function(t,r){return{id:"".concat(n.section.id,"-Row").concat(r),height:(r+1)%5==0?"7rem":void 0,cells:new Array(e).fill(0).map((function(e,t){return{columnId:n.sectionRows[r].cells[t].columnId,component:o.default.createElement(u.default,{text:n.sectionRows[r].cells[t].cellContent})}}))}}))}},{key:"buildSection",value:function(n,t){return{id:n.section.id,rows:e.buildRows(n,10,t)}}},{key:"buildColumns",value:function(n,e,t){for(var r=new Array(t-e),o=e,i=0;o<=t;o+=1,i+=1)r[i]=m({id:n.allColumnIds[o].id,text:n.allColumnIds[o].displayName},0===o&&{width:200});return r}}],(r=[{key:"render",value:function(){var n=this.context;return o.default.createElement("div",{className:v("data-grid-basic")},o.default.createElement(i.default,{id:"no-pinning-example",overflowColumns:e.buildColumns(s.default,0,9),sections:[e.buildSection(s.default.sections[0],15)],rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,defaultColumnWidth:200,fill:!0}))}}])&&y(t.prototype,r),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(o.default.Component);x.contextType=l.default;e.A=x},29299:function(n,e,t){t.r(e),e.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___7jU7E","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___aErsg","content-cell":"ContentCellLayout__content-cell___31MKL"}},55850:function(n,e,t){t.r(e),e.default={"data-grid-basic":"Datagrid-module__data-grid-basic___L-mCc","data-grid-small":"Datagrid-module__data-grid-small___uE-9R","data-grid-row-style":"Datagrid-module__data-grid-row-style___F+9EF","data-grid-paging":"Datagrid-module__data-grid-paging___3Ztyu","loading-overlay":"Datagrid-module__loading-overlay___GKOfW","spacer-right-medium":"Datagrid-module__spacer-right-medium___S3SyW"}}}]);