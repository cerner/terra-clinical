"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[923],{53150:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var o=n(67294),r=n(81254),i=n(14748),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={};function u(e){var t=e.components,n=c(e,l);return(0,r.mdx)("wrapper",s({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport gridDataJSON from './Datagrid.json';\n\nconst numColumnsDisplayed = 8;\nconst pinnedColumnsCount = 3;\nconst numRowsPerSection = 15;\n\nclass DatagridWithoutFill extends React.Component {\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        text: columnHeaderInfo.displayName,\n        ...(columnIndex === 1 ? { width: 250 } : { width: 200 }),\n        isResizable: true,\n        isSelectable: true,\n      };\n    }\n    return col;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n    this.buildRows = this.buildRows.bind(this);\n\n    this.state = {\n      selectedRow: undefined,\n      selectedCell: undefined,\n      columns: DatagridWithoutFill.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1).concat(DatagridWithoutFill.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)),\n      sortedColumnId: gridDataJSON.allColumnIds[0].id,\n      sortedColumnDirection: 'ascending',\n    };\n  }\n\n  buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      isSelectable: true,\n      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionData.section.id && this.state.selectedRow.rowId === `${sectionData.section.id}-Row${rowIndex}`,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        isSelectable: true,\n        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionData.section.id && this.state.selectedCell.rowId === `${sectionData.section.id}-Row${rowIndex}` && this.state.selectedCell.columnId === sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n      })),\n    }));\n\n    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();\n  }\n\n  buildSection(sectionData, numberOfRows) {\n    return {\n      id: sectionData.section.id,\n      text: sectionData.section.text,\n      isCollapsible: sectionData.section.id === gridDataJSON.sections[0].section.id,\n      isCollapsed: sectionData.section.id === this.state.collapsedSectionId,\n      rows: this.buildRows(sectionData, this.state.columns.length, numberOfRows),\n    };\n  }\n\n  render() {\n    const { columns } = this.state;\n    const theme = this.context;\n\n    return (\n      <DataGrid\n        id=\"without-fill\"\n        pinnedColumns={columns.slice(0, pinnedColumnsCount)}\n        overflowColumns={columns.slice(pinnedColumnsCount, numColumnsDisplayed)}\n        sections={[\n          this.buildSection(gridDataJSON.sections[0], numRowsPerSection),\n          this.buildSection(gridDataJSON.sections[1], numRowsPerSection),\n        ]}\n        onColumnSelect={(columnId) => {\n          const newColumns = {};\n\n          const columnToSort = { ...columns.find(element => element.id === columnId) };\n          columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n          newColumns[`${columnId}`] = columnToSort;\n\n          if (columnId !== this.state.sortedColumnId) {\n            const previouslySortedColumn = { ...columns.find(element => element.id === this.state.sortedColumnId) };\n            if (previouslySortedColumn) {\n              previouslySortedColumn.sortIndicator = undefined;\n              newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;\n            }\n          }\n\n          this.setState(prevState => ({\n            columns: [...prevState.columns].map(val => (newColumns[val.id] ? newColumns[val.id] : val)),\n            sortedColumnId: columnId,\n            sortedColumnDirection: columnToSort.sortIndicator,\n          }));\n        }}\n        onCellSelect={(sectionId, rowId, columnId) => {\n          this.setState({\n            selectedRow: undefined,\n            selectedCell: {\n              sectionId,\n              rowId,\n              columnId,\n            },\n          });\n        }}\n        hasSelectableRows\n        onRowSelect={(sectionId, rowId) => {\n          this.setState({\n            selectedCell: undefined,\n            selectedRow: {\n              sectionId,\n              rowId,\n            },\n          });\n        }}\n        hasResizableColumns\n        onRequestColumnResize={(columnId, width) => {\n          const columnToResize = { ...columns.find(element => element.id === columnId) };\n          columnToResize.width = Math.max(width, 50);\n          this.setState(prevState => (\n            { columns: [...prevState.columns].map(val => (columnToResize.id === val.id ? columnToResize : val)) }\n          ));\n        }}\n        onRequestSectionCollapse={(sectionId) => {\n          if (this.state.collapsedSectionId === sectionId) {\n            this.setState({ collapsedSectionId: undefined });\n          } else {\n            this.setState({ collapsedSectionId: sectionId });\n          }\n        }}\n        rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n      />\n    );\n  }\n}\n\nDatagridWithoutFill.contextType = ThemeContext;\n\nexport default DatagridWithoutFill;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(d.Z,{title:t||"Datagrid Without Fill",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(u,null),isExpanded:r})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w={},y="wrapper";function h(e){var t=e.components,n=b(e,f);return(0,r.mdx)(y,p({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{description:"This example does not set the fill property, \nallowing the DataGrid to layout with its natural block styling. \nMarkup adjustments are made to improve overall performance.",mdxType:"DatagridWithoutFill"}))}h.isMDXComponent=!0},44455:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(67294)),r=c(n(45697)),i=c(n(47166)),l=c(n(50026)),s=c(n(63950));function c(e){return e&&e.__esModule?e:{default:e}}var a=i.default.bind(s.default),u={text:r.default.string},d=function(e){var t=e.text,n=o.default.useContext(l.default);return o.default.createElement("div",{className:a(["content-cell",n.className])},t)};d.contextType=l.default,d.propTypes=u;var m=d;t.default=m},14748:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}t.Z=void 0;var r=a(n(67294)),i=a(n(44132)),l=a(n(50026)),s=a(n(44455)),c=a(n(37787));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,w(o.key),o)}}function w(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var i=I(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,n)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,o,l=h(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=l.call(this,e)).buildSection=t.buildSection.bind(C(t)),t.buildRows=t.buildRows.bind(C(t)),t.state={selectedRow:void 0,selectedCell:void 0,columns:a.buildColumns(c.default,0,2).concat(a.buildColumns(c.default,3,7)),sortedColumnId:c.default.allColumnIds[0].id,sortedColumnDirection:"ascending"},t}return t=a,o=[{key:"buildColumns",value:function(e,t,n){for(var o=new Array(n-t),r=t,i=0;r<=n;r+=1,i+=1){var l=e.allColumnIds[r];o[i]=f(f({id:l.id,text:l.displayName},1===r?{width:250}:{width:200}),{},{isResizable:!0,isSelectable:!0})}return o}}],(n=[{key:"buildRows",value:function(e,t,n){var o=this,i=new Array(n).fill().map((function(n,i){return{id:"".concat(e.section.id,"-Row").concat(i),isSelectable:!0,isSelected:o.state.selectedRow&&o.state.selectedRow.sectionId===e.section.id&&o.state.selectedRow.rowId==="".concat(e.section.id,"-Row").concat(i),cells:new Array(t).fill(0).map((function(t,n){return{columnId:e.sectionRows[i].cells[n].columnId,isSelectable:!0,isSelected:o.state.selectedCell&&o.state.selectedCell.sectionId===e.section.id&&o.state.selectedCell.rowId==="".concat(e.section.id,"-Row").concat(i)&&o.state.selectedCell.columnId===e.sectionRows[i].cells[n].columnId,component:r.default.createElement(s.default,{text:e.sectionRows[i].cells[n].cellContent})}}))}}));return this.state.sortedColumnId&&"ascending"===this.state.sortedColumnDirection?i:i.reverse()}},{key:"buildSection",value:function(e,t){return{id:e.section.id,text:e.section.text,isCollapsible:e.section.id===c.default.sections[0].section.id,isCollapsed:e.section.id===this.state.collapsedSectionId,rows:this.buildRows(e,this.state.columns.length,t)}}},{key:"render",value:function(){var e=this,t=this.state.columns,n=this.context;return r.default.createElement(i.default,{id:"without-fill",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3,8),sections:[this.buildSection(c.default.sections[0],15),this.buildSection(c.default.sections[1],15)],onColumnSelect:function(n){var o={},r=f({},t.find((function(e){return e.id===n})));if(r.sortIndicator="ascending"===r.sortIndicator?"descending":"ascending",o["".concat(n)]=r,n!==e.state.sortedColumnId){var i=f({},t.find((function(t){return t.id===e.state.sortedColumnId})));i&&(i.sortIndicator=void 0,o["".concat(e.state.sortedColumnId)]=i)}e.setState((function(e){return{columns:u(e.columns).map((function(e){return o[e.id]?o[e.id]:e})),sortedColumnId:n,sortedColumnDirection:r.sortIndicator}}))},onCellSelect:function(t,n,o){e.setState({selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:o}})},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState({selectedCell:void 0,selectedRow:{sectionId:t,rowId:n}})},hasResizableColumns:!0,onRequestColumnResize:function(n,o){var r=f({},t.find((function(e){return e.id===n})));r.width=Math.max(o,50),e.setState((function(e){return{columns:u(e.columns).map((function(e){return r.id===e.id?r:e}))}}))},onRequestSectionCollapse:function(t){e.state.collapsedSectionId===t?e.setState({collapsedSectionId:void 0}):e.setState({collapsedSectionId:t})},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0})}}])&&b(t.prototype,n),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);v.contextType=l.default;var S=v;t.Z=S},63950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___7jU7E","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___aErsg","content-cell":"ContentCellLayout__content-cell___31MKL"}}}]);