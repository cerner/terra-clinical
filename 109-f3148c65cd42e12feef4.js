"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[109],{49271:function(e,t,n){var o=n(64836),i=n(18698);t.Z=void 0;var r=o(n(27424)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=r?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(67294)),l=o(n(45697)),d=o(n(47166)),c=n(21538),s=o(n(33864)),u=o(n(23399)),m=n(51051),g=o(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=d.default.bind(g.default),S={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,i=e.title,l=e.description,d=e.isExpanded,g=(0,a.useState)(d),f=(0,r.default)(g,2),S=f[0],C=f[1],b=(0,a.useState)(!1),D=(0,r.default)(b,2),w=D[0],y=D[1],_=a.default.useContext(c.ThemeContext),I=void 0!==o,x=function(){y(!w),S&&C(!S)},O=function(){C(!S),w&&y(!w)},R=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:p("template",_.className)},a.default.createElement("div",{className:p("header")},i&&a.default.createElement("h2",{className:p("title")},i)),a.default.createElement("div",{className:p("content")},l&&a.default.createElement("div",{className:p("description")},l),t),a.default.createElement("div",{className:p("footer")},n?a.default.createElement("div",{className:p("button-container")},I&&a.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":w}),onClick:x,onKeyDown:function(e){return R(e,x)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(s.default,{className:p("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:p("chevron")})),a.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":S}),onClick:O,onKeyDown:function(e){return R(e,O)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(s.default,{className:p("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:p("chevron")}))):null,a.default.createElement("div",null,w&&a.default.createElement("div",{className:p("css")},o),S&&a.default.createElement("div",{className:p("code")},n))))};C.propTypes=S,C.defaultProps={isExpanded:!1};var b=C;t.Z=b},50109:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(67294),i=n(81254),r=n(34271),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c={};function s(e){var t=e.components,n=d(e,a);return(0,i.mdx)("wrapper",l({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\nconst grid1 = 'Grid1';\nconst grid2 = 'Grid2';\n\nclass MultipleDatagrids extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n    this.buildRows = this.buildRows.bind(this);\n\n    this.state = {\n      gridData: {\n        [grid1]: {\n          sortedColumnId: 'Column-0',\n          sortedColumnDirection: 'ascending',\n          selectedRow: undefined,\n          selectedCell: undefined,\n          columnHighlightId: 'Column-1',\n          collapsedSectionList: [],\n          columns: {\n            'Column-0': {\n              id: 'Column-0',\n              width: 200,\n              text: 'Grid 1 Column 0',\n              isSelectable: true,\n              sortIndicator: 'ascending',\n              isResizable: true,\n            },\n            'Column-1': {\n              id: 'Column-1',\n              width: 200,\n              text: 'Grid 1 Column 1',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-2': {\n              id: 'Column-2',\n              width: 200,\n              text: 'Grid 1 Column 2',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-3': {\n              id: 'Column-3',\n              width: 200,\n              text: 'Grid 1 Column 3',\n              isSelectable: true,\n              isResizable: true,\n            },\n          },\n        },\n        [grid2]: {\n          sortedColumnId: 'Column-0',\n          sortedColumnDirection: 'descending',\n          selectedRow: undefined,\n          selectedCell: undefined,\n          columnHighlightId: 'Column-0',\n          collapsedSectionList: [],\n          columns: {\n            'Column-0': {\n              id: 'Column-0',\n              width: 200,\n              text: 'Column 0',\n              isSelectable: true,\n              sortIndicator: 'descending',\n              isResizable: true,\n            },\n            'Column-1': {\n              id: 'Column-1',\n              width: 200,\n              text: 'Column 1',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-2': {\n              id: 'Column-2',\n              width: 200,\n              text: 'Column 2',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-3': {\n              id: 'Column-3',\n              width: 200,\n              text: 'Column 3',\n              isSelectable: true,\n              isResizable: true,\n            },\n          },\n        },\n      },\n    };\n  }\n\n  buildRows(gridId, sectionId, numOfRows) {\n    const gridData = this.state.gridData[gridId];\n    const rows = (new Array(numOfRows)).fill().map((rowVal, rowIndex) => ({\n      id: `Row-${rowIndex}`,\n      isSelectable: true,\n      isSelected: gridData.selectedRow && gridData.selectedRow.sectionId === sectionId && gridData.selectedRow.rowId === `Row-${rowIndex}`,\n      cells: ((new Array(4).fill(0)).map((cellVal, cellIndex) => (Object.values(gridData.columns)[cellIndex].id))).map((columnKey) => ({\n        columnId: columnKey,\n        isSelectable: true,\n        isSelected: gridData.selectedCell && gridData.selectedCell.sectionId === sectionId && gridData.selectedCell.rowId === `Row-${rowIndex}` && gridData.selectedCell.columnId === columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,\n      })),\n    }));\n\n    return gridData.sortedColumnId && gridData.sortedColumnDirection === 'ascending' ? rows : rows.reverse();\n  }\n\n  buildSection(gridId, sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      isCollapsible: true,\n      isCollapsed: this.state.gridData[gridId].collapsedSectionList.includes(sectionId),\n      rows: this.buildRows(gridId, sectionId, numberOfRows),\n    };\n  }\n\n  render() {\n    const { gridData } = this.state;\n    const theme = this.context;\n    return (\n      <div>\n        <div className={cx('data-grid-small')}>\n          <DataGrid\n            id={grid1}\n            pinnedColumns={[\n              gridData[grid1].columns['Column-0'],\n              gridData[grid1].columns['Column-1'],\n            ]}\n            overflowColumns={[\n              gridData[grid1].columns['Column-2'],\n              gridData[grid1].columns['Column-3'],\n            ]}\n            columnHighlightId={gridData[grid1].columnHighlightId}\n            sections={[\n              this.buildSection(grid1, 'Grid-1-Section-0', 'Grid 1 Section 0', 4),\n              this.buildSection(grid1, 'Grid-1-Section-1', 'Grid 1 Section 1', 4),\n            ]}\n            fill\n            onColumnSelect={(columnId) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid1];\n\n              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n              newColumns[`${columnId}`] = columnToSort;\n\n              if (columnId !== myGridData.sortedColumnId) {\n                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };\n                if (previouslySortedColumn) {\n                  previouslySortedColumn.sortIndicator = undefined;\n                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;\n                }\n              }\n              this.setState(prevState => {\n                const changedData = {\n                  sortedColumnId: columnId,\n                  sortedColumnDirection: columnToSort.sortIndicator,\n                  columns: { ...prevState.gridData[grid1].columns, ...newColumns },\n                };\n                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };\n              });\n            }}\n            onCellSelect={(sectionId, rowId, columnId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedCell = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };\n              });\n            }}\n            hasSelectableRows\n            onRowSelect={(sectionId, rowId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedRow = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };\n              });\n            }}\n            onRequestSectionCollapse={(sectionId) => {\n              const index = this.state.gridData[grid1].collapsedSectionList.findIndex(id => sectionId === id);\n              if (index !== -1) {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: prevState.gridData[grid1].collapsedSectionList.filter(id => sectionId !== id) } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              } else {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: [...prevState.gridData[grid1].collapsedSectionList, sectionId] } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              }\n            }}\n            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n            hasResizableColumns\n            onRequestColumnResize={(columnId, width) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid1];\n              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToUpdate.width = Math.max(width, 50);\n              newColumns[`${columnId}`] = columnToUpdate;\n              this.setState(prevState => {\n                const changedData = { columns: { ...prevState.gridData[grid1].columns, ...newColumns } };\n                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };\n              });\n            }}\n          />\n        </div>\n\n        <div className={cx('data-grid-basic')}>\n          <DataGrid\n            id={grid2}\n            pinnedColumns={[\n              gridData[grid2].columns['Column-0'],\n              gridData[grid2].columns['Column-1'],\n            ]}\n            overflowColumns={[\n              gridData[grid2].columns['Column-2'],\n            ]}\n            columnHighlightId={gridData[grid2].columnHighlightId}\n            sections={[\n              this.buildSection(grid2, 'Grid-2-Section-0', 'Grid 2 Section 0', 4),\n              this.buildSection(grid2, 'Grid-2-Section-1', 'Grid 2 Section 1', 4),\n            ]}\n            fill\n            onColumnSelect={(columnId) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid2];\n\n              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n              newColumns[`${columnId}`] = columnToSort;\n\n              if (columnId !== myGridData.sortedColumnId) {\n                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };\n                if (previouslySortedColumn) {\n                  previouslySortedColumn.sortIndicator = undefined;\n                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;\n                }\n              }\n              this.setState(prevState => {\n                const changedData = {\n                  sortedColumnId: columnId,\n                  sortedColumnDirection: columnToSort.sortIndicator,\n                  columns: { ...prevState.gridData[grid2].columns, ...newColumns },\n                };\n                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };\n              });\n            }}\n            onCellSelect={(sectionId, rowId, columnId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedCell = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };\n              });\n            }}\n            hasSelectableRows\n            onRowSelect={(sectionId, rowId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedRow = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };\n              });\n            }}\n            onRequestSectionCollapse={(sectionId) => {\n              const index = this.state.gridData[grid2].collapsedSectionList.findIndex(id => sectionId === id);\n              if (index !== -1) {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: prevState.gridData[grid2].collapsedSectionList.filter(id => sectionId !== id) } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              } else {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: [...prevState.gridData[grid2].collapsedSectionList, sectionId] } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              }\n            }}\n            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n            hasResizableColumns\n            onRequestColumnResize={(columnId, width) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid2];\n              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToUpdate.width = Math.max(width, 50);\n              newColumns[`${columnId}`] = columnToUpdate;\n              this.setState(prevState => {\n                const changedData = { columns: { ...prevState.gridData[grid2].columns, ...newColumns } };\n                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };\n              });\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nMultipleDatagrids.contextType = ThemeContext;\n\nexport default MultipleDatagrids;\n\n")))}s.isMDXComponent=!0;var u=n(49271),m=n(71577),g=function(e){var t=e.title,n=e.description,i=e.isExpanded;return o.createElement(u.Z,{title:t||"Multiple Datagrids",description:n,example:o.createElement(r.Z,null),exampleCssSrc:o.createElement(m.Z,null),exampleSrc:o.createElement(s,null),isExpanded:i})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h={},v="wrapper";function C(e){var t=e.components,n=S(e,f);return(0,i.mdx)(v,p({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(g,{description:"This example features usage of multiple datagrids on a single page. ",mdxType:"MultipleDatagrids"}))}C.isMDXComponent=!0},71577:function(e,t,n){n.d(t,{Z:function(){return c}});n(67294);var o=n(81254),i=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={},d="wrapper";function c(e){var t=e.components,n=a(e,i);return(0,o.mdx)(d,r({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},44455:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),i=d(n(45697)),r=d(n(47166)),a=d(n(50026)),l=d(n(63950));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(l.default),s={text:i.default.string},u=function(e){var t=e.text,n=o.default.useContext(a.default);return o.default.createElement("div",{className:c(["content-cell",n.className])},t)};u.contextType=a.default,u.propTypes=s;t.default=u},34271:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}t.Z=void 0;var i=s(n(67294)),r=s(n(44132)),a=s(n(47166)),l=s(n(50026)),d=s(n(44455)),c=s(n(3237));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,h(o.key),o)}}function h(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=D(e);if(t){var r=D(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,n)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var w=a.default.bind(c.default),y="Grid1",_="Grid2",I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(l,e);var t,n,o,a=C(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).buildSection=t.buildSection.bind(b(t)),t.buildRows=t.buildRows.bind(b(t)),t.state={gridData:p(p({},y,{sortedColumnId:"Column-0",sortedColumnDirection:"ascending",selectedRow:void 0,selectedCell:void 0,columnHighlightId:"Column-1",collapsedSectionList:[],columns:{"Column-0":{id:"Column-0",width:200,text:"Grid 1 Column 0",isSelectable:!0,sortIndicator:"ascending",isResizable:!0},"Column-1":{id:"Column-1",width:200,text:"Grid 1 Column 1",isSelectable:!0,isResizable:!0},"Column-2":{id:"Column-2",width:200,text:"Grid 1 Column 2",isSelectable:!0,isResizable:!0},"Column-3":{id:"Column-3",width:200,text:"Grid 1 Column 3",isSelectable:!0,isResizable:!0}}}),_,{sortedColumnId:"Column-0",sortedColumnDirection:"descending",selectedRow:void 0,selectedCell:void 0,columnHighlightId:"Column-0",collapsedSectionList:[],columns:{"Column-0":{id:"Column-0",width:200,text:"Column 0",isSelectable:!0,sortIndicator:"descending",isResizable:!0},"Column-1":{id:"Column-1",width:200,text:"Column 1",isSelectable:!0,isResizable:!0},"Column-2":{id:"Column-2",width:200,text:"Column 2",isSelectable:!0,isResizable:!0},"Column-3":{id:"Column-3",width:200,text:"Column 3",isSelectable:!0,isResizable:!0}}})},t}return t=l,(n=[{key:"buildRows",value:function(e,t,n){var o=this.state.gridData[e],r=new Array(n).fill().map((function(e,n){return{id:"Row-".concat(n),isSelectable:!0,isSelected:o.selectedRow&&o.selectedRow.sectionId===t&&o.selectedRow.rowId==="Row-".concat(n),cells:new Array(4).fill(0).map((function(e,t){return Object.values(o.columns)[t].id})).map((function(e){return{columnId:e,isSelectable:!0,isSelected:o.selectedCell&&o.selectedCell.sectionId===t&&o.selectedCell.rowId==="Row-".concat(n)&&o.selectedCell.columnId===e,component:i.default.createElement(d.default,{text:"Row-".concat(n,", ").concat(e)})}}))}}));return o.sortedColumnId&&"ascending"===o.sortedColumnDirection?r:r.reverse()}},{key:"buildSection",value:function(e,t,n,o){return{id:t,text:n,isCollapsible:!0,isCollapsed:this.state.gridData[e].collapsedSectionList.includes(t),rows:this.buildRows(e,t,o)}}},{key:"render",value:function(){var e=this,t=this.state.gridData,n=this.context;return i.default.createElement("div",null,i.default.createElement("div",{className:w("data-grid-small")},i.default.createElement(r.default,{id:y,pinnedColumns:[t[y].columns["Column-0"],t[y].columns["Column-1"]],overflowColumns:[t[y].columns["Column-2"],t[y].columns["Column-3"]],columnHighlightId:t[y].columnHighlightId,sections:[this.buildSection(y,"Grid-1-Section-0","Grid 1 Section 0",4),this.buildSection(y,"Grid-1-Section-1","Grid 1 Section 1",4)],fill:!0,onColumnSelect:function(t){var n={},o=e.state.gridData[y],i=f({},Object.values(o.columns).find((function(e){return e.id===t})));if(i.sortIndicator="ascending"===i.sortIndicator?"descending":"ascending",n["".concat(t)]=i,t!==o.sortedColumnId){var r=f({},Object.values(o.columns).find((function(e){return e.id===o.sortedColumnId})));r&&(r.sortIndicator=void 0,n["".concat(o.sortedColumnId)]=r)}e.setState((function(e){var o={sortedColumnId:t,sortedColumnDirection:i.sortIndicator,columns:f(f({},e.gridData[y].columns),n)};return{gridData:f(f({},e.gridData),p({},y,f(f({},e.gridData[y]),o)))}}))},onCellSelect:function(t,n,o){e.setState((function(e){var i=p({},y,f(f({},e.gridData[y]),{selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:o}}));return{gridData:f(f({},e.gridData),i)}}))},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState((function(e){var o=p({},y,f(f({},e.gridData[y]),{selectedRow:{sectionId:t,rowId:n},selectedCell:void 0}));return{gridData:f(f({},e.gridData),o)}}))},onRequestSectionCollapse:function(t){-1!==e.state.gridData[y].collapsedSectionList.findIndex((function(e){return t===e}))?e.setState((function(e){var n=p({},y,f(f({},e.gridData[y]),{collapsedSectionList:e.gridData[y].collapsedSectionList.filter((function(e){return t!==e}))}));return{gridData:f(f({},e.gridData),n)}})):e.setState((function(e){var n=p({},y,f(f({},e.gridData[y]),{collapsedSectionList:[].concat(u(e.gridData[y].collapsedSectionList),[t])}));return{gridData:f(f({},e.gridData),n)}}))},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,hasResizableColumns:!0,onRequestColumnResize:function(t,n){var o={},i=e.state.gridData[y],r=f({},Object.values(i.columns).find((function(e){return e.id===t})));r.width=Math.max(n,50),o["".concat(t)]=r,e.setState((function(e){var t={columns:f(f({},e.gridData[y].columns),o)};return{gridData:f(f({},e.gridData),p({},y,f(f({},e.gridData[y]),t)))}}))}})),i.default.createElement("div",{className:w("data-grid-basic")},i.default.createElement(r.default,{id:_,pinnedColumns:[t[_].columns["Column-0"],t[_].columns["Column-1"]],overflowColumns:[t[_].columns["Column-2"]],columnHighlightId:t[_].columnHighlightId,sections:[this.buildSection(_,"Grid-2-Section-0","Grid 2 Section 0",4),this.buildSection(_,"Grid-2-Section-1","Grid 2 Section 1",4)],fill:!0,onColumnSelect:function(t){var n={},o=e.state.gridData[_],i=f({},Object.values(o.columns).find((function(e){return e.id===t})));if(i.sortIndicator="ascending"===i.sortIndicator?"descending":"ascending",n["".concat(t)]=i,t!==o.sortedColumnId){var r=f({},Object.values(o.columns).find((function(e){return e.id===o.sortedColumnId})));r&&(r.sortIndicator=void 0,n["".concat(o.sortedColumnId)]=r)}e.setState((function(e){var o={sortedColumnId:t,sortedColumnDirection:i.sortIndicator,columns:f(f({},e.gridData[_].columns),n)};return{gridData:f(f({},e.gridData),p({},_,f(f({},e.gridData[_]),o)))}}))},onCellSelect:function(t,n,o){e.setState((function(e){var i=p({},_,f(f({},e.gridData[_]),{selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:o}}));return{gridData:f(f({},e.gridData),i)}}))},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState((function(e){var o=p({},_,f(f({},e.gridData[_]),{selectedRow:{sectionId:t,rowId:n},selectedCell:void 0}));return{gridData:f(f({},e.gridData),o)}}))},onRequestSectionCollapse:function(t){-1!==e.state.gridData[_].collapsedSectionList.findIndex((function(e){return t===e}))?e.setState((function(e){var n=p({},_,f(f({},e.gridData[_]),{collapsedSectionList:e.gridData[_].collapsedSectionList.filter((function(e){return t!==e}))}));return{gridData:f(f({},e.gridData),n)}})):e.setState((function(e){var n=p({},_,f(f({},e.gridData[_]),{collapsedSectionList:[].concat(u(e.gridData[_].collapsedSectionList),[t])}));return{gridData:f(f({},e.gridData),n)}}))},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,hasResizableColumns:!0,onRequestColumnResize:function(t,n){var o={},i=e.state.gridData[_],r=f({},Object.values(i.columns).find((function(e){return e.id===t})));r.width=Math.max(n,50),o["".concat(t)]=r,e.setState((function(e){var t={columns:f(f({},e.gridData[_].columns),o)};return{gridData:f(f({},e.gridData),p({},_,f(f({},e.gridData[_]),t)))}}))}})))}}])&&S(t.prototype,n),o&&S(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(i.default.Component);I.contextType=l.default;t.Z=I},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},63950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___7jU7E","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___aErsg","content-cell":"ContentCellLayout__content-cell___31MKL"}},3237:function(e,t,n){n.r(t),t.default={"data-grid-basic":"Datagrid-module__data-grid-basic___L-mCc","data-grid-small":"Datagrid-module__data-grid-small___uE-9R","data-grid-row-style":"Datagrid-module__data-grid-row-style___F+9EF","data-grid-paging":"Datagrid-module__data-grid-paging___3Ztyu","loading-overlay":"Datagrid-module__loading-overlay___GKOfW","spacer-right-medium":"Datagrid-module__spacer-right-medium___S3SyW"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),i=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}var l=function(e){var t=a({},e);return o.default.createElement(i.default,t,o.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l}}]);