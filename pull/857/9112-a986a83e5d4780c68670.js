"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9112],{50931:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});t(67294);var a=t(81254),l=t(31372),d=t(78530),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o={},p="wrapper";function s(e){var n=e.components,t=m(e,r);return(0,a.mdx)(p,i({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(d.ZP,{mdxType:"PropsTable"},(0,a.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that will be used to identify the DataGrid. This value will be used as the id attribute of the overall DataGrid container,\nand it will be used to prefix other id attributes used for internal componentry."))),(0,a.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"columnHighlightId"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A Unique Identifier of the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-clinical/pull/857/components/terra-clinical-data-grid/clinical-data-grid/clinical-data-grid"},"column"),".\nIf provided, column with specified identifier will be highlighted in data-grid."),(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Design-Standards/blue",alt:"IMPORTANT"})," The column highlight feature should be limited specifically to\ntime and timeline concepts only, best used with special instruction and guidance from User Experience to ensure proper standards."))),(0,a.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"pinnedColumns"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for columns that will be pinned. Columns will be presented in the order given."))),(0,a.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"overflowColumns"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for columns that will be rendered in the DataGrid's horizontal overflow. Columns will be presented in the order given."))),(0,a.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"sections"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for content in the body of the DataGrid. Sections will be rendered in the order given."))),(0,a.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onCellSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that is called when a selectable cell is selected. Parameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCellSelect(sectionId, rowId, columnId)")))),(0,a.mdx)(d.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onColumnSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that is called when a selectable header cell is selected. Parameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onColumnSelect(columnId)")))),(0,a.mdx)(d.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRequestColumnResize"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that is called when a resizable column is resized. Parameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRequestColumnResize(columnId, requestedWidth)")))),(0,a.mdx)(d.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRequestSectionCollapse"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that is called when a collapsible section is selected. Parameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRequestSectionCollapse(sectionId)")))),(0,a.mdx)(d.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"rowHeight"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that specifies the row height. Values are suggested to be in ",(0,a.mdx)("inlineCode",{parentName:"p"},"rem"),"s (ex ",(0,a.mdx)("inlineCode",{parentName:"p"},"'5rem'"),"), but any valid CSS height value is accepted.\nThis value can be overridden for a row by specifying a height on the given row."))),(0,a.mdx)(d.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"headerHeight"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that specifies the DataGrid header height. Values are suggested to be in ",(0,a.mdx)("inlineCode",{parentName:"p"},"rem"),"s (ex ",(0,a.mdx)("inlineCode",{parentName:"p"},"'5rem'"),"), but any valid CSS height value is accepted."))),(0,a.mdx)(d.X2,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"hasSelectableRows"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be\nrendered to allow for row selection to occur."))),(0,a.mdx)(d.X2,{key:"ROW13",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRowSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that will be called when a row is selected. Parameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRowSelect(sectionId, rowId)")))),(0,a.mdx)(d.X2,{key:"ROW14",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"hasResizableColumns"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Boolean indicating whether or not resizable columns are enabled for the DataGrid. If this prop is not enabled, the isResizable value of columns\nwill be ignored."))),(0,a.mdx)(d.X2,{key:"ROW15",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"defaultColumnWidth"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"200\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis."))),(0,a.mdx)(d.X2,{key:"ROW16",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRequestContent"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that will be called when the DataGrid's vertical overflow reaches its terminal position. This can be used to contextually\nload additional content in the DataGrid. If there is no additional content to present, this function should not be provided.\nThe ",(0,a.mdx)("inlineCode",{parentName:"p"},"fill")," prop must also be provided as true; otherwise, the DataGrid will not overflow internally and will not know to request more content.\nParameters: ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRequestContent()")))),(0,a.mdx)(d.X2,{key:"ROW17",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"fill"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Boolean that indicates whether or not the DataGrid should fill its parent container."))),(0,a.mdx)(d.X2,{key:"ROW18",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"verticalOverflowContainerRefCallback"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback ref to pass into vertical overflow container."))),(0,a.mdx)(d.X2,{key:"ROW19",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"horizontalOverflowContainerRefCallback"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback ref to pass into horizontal overflow container."))),(0,a.mdx)(d.X2,{key:"ROW20",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"labelRef"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'func',\n  type: 'string',\n],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A ref to the element containing the visual name/label of the grid to provide context for screen readers. This can be a ref to a textual DOM element or a string, but a ref is recommended. Necessary to meet a11y standards."))),(0,a.mdx)(d.X2,{key:"ROW21",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"descriptionRef"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'func',\n  type: 'string',\n],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A ref to an element containing description, helper text, or instructions for using the grid to provide context for screen readers. This can be a ref to a textual DOM element or a string. This information should be made visible as well outside of the grid when possible.")))))}s.isMDXComponent=!0;var x=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var h={},g="wrapper";function N(e){var n=e.components,t=c(e,x);return(0,a.mdx)(g,u({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-clinical-datagrid"},"Terra Clinical DataGrid"),(0,a.mdx)("p",null,"The DataGrid is an organizational component that renders a collection of data in a grid-like format."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-data-grid"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"The DataGrid is a fully-controlled component that utilizes no internal state. Any desired changes to the DataGrid after its initial render can and should be communicated through its props."),(0,a.mdx)("p",null,"Content is provided to the DataGrid as one of four distinct data structures: columns, sections, rows, and cells. These strutures are simple JS objects, not React components. Immutable objects should be used where possible to avoid unnecessary rendering costs."),(0,a.mdx)("h3",{id:"columns"},"Columns"),(0,a.mdx)("p",null,"Columns define what is rendered in the column header as well as what interactions are available."),(0,a.mdx)("p",null,"Columns are provided to the DataGrid through two props: ",(0,a.mdx)("inlineCode",{parentName:"p"},"pinnedColumns")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"overflowColumns"),". The order in which the columns are provided will be the order in which they are rendered, with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"pinnedColumns")," preceeding the ",(0,a.mdx)("inlineCode",{parentName:"p"},"overflowColumns"),"."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"id")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"required"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"An identifier for the column. This identifier should be unique across the set of columns provided to the DataGrid.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"width")),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A number (in px) specifying the width of the column. If not provided, the DataGrid's default column width will be used.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelectable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the column header is selectable. If true, the DataGrid's ",(0,a.mdx)("inlineCode",{parentName:"td"},"onColumnSelect")," prop will be called upon column header selection.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isResizable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the column header is resizable. If true, a resize indicator will be rendered over the column header's contents, and the DataGrid's ",(0,a.mdx)("inlineCode",{parentName:"td"},"onRequestColumnResize")," function will be called upon interaction with the resize indicator. The new width will be provided with the function call so that the column's width property can be updated as needed.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"text")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string of text to render within the column header. This text will follow standard truncation rules as necessary. If a ",(0,a.mdx)("inlineCode",{parentName:"td"},"component")," value is specified, ",(0,a.mdx)("inlineCode",{parentName:"td"},"text")," will be ignored.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"sortIndicator")),(0,a.mdx)("td",{parentName:"tr",align:null},"One of: ",(0,a.mdx)("strong",{parentName:"td"},"ascending"),", ",(0,a.mdx)("strong",{parentName:"td"},"descending")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered. If a ",(0,a.mdx)("inlineCode",{parentName:"td"},"component")," value is specified, ",(0,a.mdx)("inlineCode",{parentName:"td"},"sortIndicator")," will be ignored.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"component")),(0,a.mdx)("td",{parentName:"tr",align:null},"component"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A custom component to render within the column header. If provided, the ",(0,a.mdx)("inlineCode",{parentName:"td"},"text")," and ",(0,a.mdx)("inlineCode",{parentName:"td"},"sortIndicator")," values will be ignored.")))),(0,a.mdx)("h3",{id:"sections"},"Sections"),(0,a.mdx)("p",null,"Sections define the rendering style of the section header as well as the rows inside the section."),(0,a.mdx)("p",null,"Sections are provided to the DataGrid through the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sections")," prop. The order in which the sections are provided will be the order in which they are rendered."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"id")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"required"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"An identifier for the section. This identifier should be unique across the set of sections provided to the DataGrid.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isCollapsible")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the the section is collapsible. If true, the DataGrid's ",(0,a.mdx)("inlineCode",{parentName:"td"},"onRequestSectionCollapse")," function will be called upon selection of the section header, and an icon indicating collapsibility will be rendered within the seaction header.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isCollapsed")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the section is collapsed. If true, the DataGrid will not render the contents of the section.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"text")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A text string to render within the section header.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"startAccessory")),(0,a.mdx)("td",{parentName:"tr",align:null},"component"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A component to render within the section header's start accessory position. This will be rendered ahead of ",(0,a.mdx)("inlineCode",{parentName:"td"},"text"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"endAccessory")),(0,a.mdx)("td",{parentName:"tr",align:null},"component"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A component to render within the section header's end accessory position. This will be rendered behind ",(0,a.mdx)("inlineCode",{parentName:"td"},"text"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"component")),(0,a.mdx)("td",{parentName:"tr",align:null},"component"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A custom component to render within the section header. If provided, the ",(0,a.mdx)("inlineCode",{parentName:"td"},"text"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"startAccessory"),", and ",(0,a.mdx)("inlineCode",{parentName:"td"},"endAccessory")," values will be ignored.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"rows")),(0,a.mdx)("td",{parentName:"tr",align:null},"array"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"[]"),(0,a.mdx)("td",{parentName:"tr",align:null},"An array of row objects to be rendered within the section.")))),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Note: if ",(0,a.mdx)("inlineCode",{parentName:"p"},"text"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"startAccessory"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"endAccessory"),", and ",(0,a.mdx)("inlineCode",{parentName:"p"},"component")," are not provided, and if ",(0,a.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," is false, no section header will be rendered. However, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"rows")," of the section will continue to be rendered.")),(0,a.mdx)("p",null,"Section headers will be provided the attribute ",(0,a.mdx)("inlineCode",{parentName:"p"},'data-terra-clinical-data-grid-section-header-id="${sectionId}')," for interested consumers."),(0,a.mdx)("h3",{id:"rows"},"Rows"),(0,a.mdx)("p",null,"Rows define the cells rendered within the row as well as the row's selection properties."),(0,a.mdx)("p",null,"Rows are provided to sections to be rendered by the DataGrid. The order in which the rows are provided will be the order in which they are rendered."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"id")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"required"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"An identifier for the row. This identifier should be unique across the set of rows provided to a given section.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"ariaLabel")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string identifier used to describe the row contents. This value will be used to contruct additional labels for internal controls (e.g. row selection cells).")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isDecorative")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean to prevent the row from being interactive (selectable + selected), hides the column highlighting style in the row when ",(0,a.mdx)("inlineCode",{parentName:"td"},"columnHighlightId"),' is valued, and applies role="presentation" and aria-hidden="true" to hide from screen readers. Used for inserted decorative rows like custom dividers.')),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelectable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row is selectable.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelected")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row should render as selected.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"cells")),(0,a.mdx)("td",{parentName:"tr",align:null},"array"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"[]"),(0,a.mdx)("td",{parentName:"tr",align:null},"An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order of the ",(0,a.mdx)("inlineCode",{parentName:"td"},"pinnedColumns")," and ",(0,a.mdx)("inlineCode",{parentName:"td"},"overflowColumns")," props.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"height")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"The height for this row. This overrides the ",(0,a.mdx)("inlineCode",{parentName:"td"},"DataGrid")," ",(0,a.mdx)("inlineCode",{parentName:"td"},"rowHeight")," property. Values are suggested to be in ",(0,a.mdx)("inlineCode",{parentName:"td"},"rem"),"s (ex ",(0,a.mdx)("inlineCode",{parentName:"td"},"'5rem'"),"), but any valid CSS height value is accepted.")))),(0,a.mdx)("h3",{id:"cells"},"Cells"),(0,a.mdx)("p",null,"Cells define the content rendered in a given section, row, and column."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"columnId")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"required"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A column identifier for the cell. This identifier should be unique across the set of cells provided to a given row.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelectable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the cell is selectable.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelected")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the cell should render as selected.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"component")),(0,a.mdx)("td",{parentName:"tr",align:null},"component"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A component to render within the cell.")))),(0,a.mdx)("h4",{id:"creating-components-for-cells"},"Creating components for Cells"),(0,a.mdx)("p",null,"The DataGrid will provide a explicitly sized container within which the Cell ",(0,a.mdx)("inlineCode",{parentName:"p"},"component")," will be rendered. A height and width of ",(0,a.mdx)("inlineCode",{parentName:"p"},"100%")," should be set on the component to ensure it fills the available area."),(0,a.mdx)("h2",{id:"creating-custom-content"},"Creating Custom Content"),(0,a.mdx)("p",null,"The various DataGrid containers (column header, section header, cell) support the presentation of custom components. However, there are a few rules that a component must adhere to."),(0,a.mdx)("p",null,"The DataGrid provides a number of styles for mouse/keyboard interaction states (click, hover, selection). Custom components should generally render with a transparent background to ensure those default styles bleed through the component."),(0,a.mdx)("p",null,"The DataGrid will provide a explicitly sized container within which the component will rendered. A height and width of ",(0,a.mdx)("inlineCode",{parentName:"p"},"100%")," should be set on the component to ensure it fills the area provided to it."),(0,a.mdx)("p",null,"If there are any mouse/keyboard interactive elements within the component, and the component is rendered inside a selectable DataGrid container (column header, section header, cell), events may propagate in ways that the component is not expecting. Events triggered by those interactive elements should not be propagated to prevent undesired DataGrid interactions."),(0,a.mdx)("p",null,"Additionally, these interactive elements must include a special data attribute called ",(0,a.mdx)("inlineCode",{parentName:"p"},"data-accessible-data-grid-content"),". The DataGrid utilizes a custom tabbing implementation to ensure a propper tabbing order, and including that attribute on all interactive elements of custom components will ensure that they are still sensibly keyboard accessible."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import DataGrid from 'terra-clinical-data-grid';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support"))),(0,a.mdx)("h2",{id:"data-grid-props-table"},"Data Grid Props Table"),(0,a.mdx)(s,{mdxType:"DataGridPropsTable"}))}N.isMDXComponent=!0},31372:function(e,n,t){t.d(n,{C:function(){return d}});var a=t(67294),l=t(22863),d=function(e){var n=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-data-grid",name:"terra-clinical-data-grid",version:"2.41.0",url:n})}}}]);