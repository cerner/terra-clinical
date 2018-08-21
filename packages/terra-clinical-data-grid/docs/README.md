# Terra Clinical DataGrid

The DataGrid is an organizational component that renders a collection of data in a grid-like format.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-data-grid`

## Usage

The DataGrid is a fully-controlled component that utilizes no internal state. Any desired changes to the DataGrid after its initial render can and should be communicated through its props.

Content is provided to the DataGrid as one of four distinct data structures: columns, sections, rows, and cells. These strutures are simple JS objects, not React components. Immutable objects should be used where possible to avoid unnecessary rendering costs.

### Columns

Columns define what is rendered in the column header as well as what interactions are available.

Columns are provided to the DataGrid through two props: `pinnedColumns` and `overflowColumns`. The order in which the columns are provided will be the order in which they are rendered, with the `pinnedColumns` preceeding the `overflowColumns`.

|Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**id**|string|required|none|An identifier for the column. This identifier should be unique across the set of columns provided to the DataGrid.|
|**width**|number|optional|none|An number (in px) specifying the width of the column. If not provided, the DataGrid's default column width will be used.|
|**isSelectable**|bool|optional|none|A boolean indicating whether or not the column header is selectable. If true, the DataGrid's `onColumnSelect` prop will be called upon column header selection.|
|**isResizable**|bool|optional|none|A boolean indicating whether or not the column header is resizable. If true, a resize indicator will be rendered over the column header's contents, and the DataGrid's `onRequestColumnResize` function will be called upon interaction with the resize indicator. The new width will be provided with the function call so that the column's width property can be updated as needed.|
|**text**|string|optional|none|A string of text to render within the column header. This text will follow standard truncation rules as necessary. If a `component` value is specified, `text` will be ignored.|
|**sortIndicator**|One of: **ascending**, **descending**|optional|none|A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered. If a `component` value is specified, `sortIndicator` will be ignored.
|**component**|component|optional|none|A custom component to render within the column header. If provided, the `text` and `sortIndicator` values will be ignored.|

### Sections

Sections define the rendering style of the section header as well as the rows inside the section.

Sections are provided to the DataGrid through the `sections` prop. The order in which the sections are provided will be the order in which they are rendered.

|Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**id**|string|required|none|An identifier for the section. This identifier should be unique across the set of sections provided to the DataGrid.|
|**isCollapsible**|bool|optional|none|A boolean indicating whether or not the the section is collapsible. If true, the DataGrid's `onRequestSectionCollapse` function will be called upon selection of the section header.|
|**isCollapsed**|bool|optional|none|A boolean indicating whether or not the section is collapsed. If true, the DataGrid will not render the contents of the section.|
|**text**|string|optional|none|A text string to render within the section header.|
|**startAccessory**|component|optional|none|A component to render within the section header's start accessory position. This will be rendered ahead of `text`.
|**endAccessory**|component|optional|none|A component to render within the section header's end accessory position. This will be rendered behind `text`.
|**component**|component|optional|none|A custom component to render within the section header. If provided, the `text`, `startAccessory`, and `endAccessory` values will be ignored.|
|**rows**|array|optional|[]|An array of row objects to be rendered within the section.|

> Note: if `text`, `startAccessory`, `endAccessory`, and `component` are not provided, and if `isCollapsible` is false, no section header will be rendered. However, the `rows` of the section will continue to be rendered.

### Rows

Rows define the cells rendered within the row as well as the row's selection properties.

Rows are provided to sections to be rendered by the DataGrid. The order in which the rows are provided will be the order in which they are rendered.

|Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**id**|string|required|none|An identifier for the row. This identifier should be unique across the set of rows provided to a given section.|
|**isSelectable**|bool|optional|none|A boolean indicating whether or not the row is selectable.|
|**isSelected**|bool|optional|none|A boolean indicating whether or not the row should render as selected.|
|**cells**|array|optional|[]|An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order of the `pinnedColumns` and `overflowColumns` props.|

### Cells

Cells define the content rendered in a given section, row, and column.

|Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**id**|string|required|none|An identifier for the row. This identifier should be unique across the set of rows provided to a given section.|
|**isSelectable**|bool|optional|none|A boolean indicating whether or not the cell is selectable.|
|**isSelected**|bool|optional|none|A boolean indicating whether or not the cell should render as selected.|
|**component**|component|optional|none|A component to render within the cell.|

#### Creating components for Cells

The DataGrid will provide a explicitly sized container within which the Cell `component` will be rendered. A height and width of `100%` should be set on the component to ensure it fills the available area.

## Creating Custom Content

The various DataGrid containers (column header, section header, cell) support the presentation of custom components. However, there are a few rules that must successful component implementation must adhere to.

The DataGrid provides a number of styles for mouse/keyboard interaction states (click, hover, selection). Custom components should generally render with a transparent background to ensure those default styles bleed through the component.

The DataGrid will provide a explicitly sized container within which the component will rendered. A height and width of `100%` should be set on the component to ensure it fills the area provided to it.

If there are any mouse/keyboard interactive elements within the component, and the component is rendered inside a selectable DataGrid container (column header, section header, cell), events may propagate in ways that the component is not expecting. If necessary, the events originating from those interactive elements could not be propagated to prevent undesired DataGrid interactions.

Additionally, these interactive elements must include a special data attribute called `data-accessible-data-grid-content`. The DataGrid utilizes a custom tabbing implementation to ensure a propper tabbing order, and including that attribute on all interactive elements of custom components will ensure that they are still sensibly keyboard accessible.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
