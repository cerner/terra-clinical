# Terra Clinical Item Collection

An Item Collection is a wrapper component designed to display data as either a table or list of items dependent on the relative container size. Initially data is displayed in a tabular format that flexes the rendered component, but as the container is resized and the indicated breakpoint is hit, the display changes to shows the data as a list of items. The terra-table and terra-clinical-item react components will be utilized for displaying the data in these two ways.

Ultimately, the Item Collection component allows consumers to organize tabular data and ensure this data is readable as screen sizes become progressively smaller.

The ItemCollection is rendered as a static, non-selectable display, however it has the foundation to become a selectable component. See the [Selectable Implementation Guide](https://github.com/cerner/terra-clinical/blob/master/packages/terra-clinical-item-collection/docs/SelectableImplementation.md) for details.

## Item Collection Item

This component handles the rendering of a list item or table row for the ItemCollection. By default, this renders an ListItem with an ItemView as the content. Else it will render a TableRow with the element layout of startAccessory, displays, comment, and endAccessory. This component does not handle missing element logic, but provides a clean way to represent an item as a child within the item collection.

Additionally, this component will export the ItemView.Display and ItemView.Comment components as Item.Display & Item.Comment.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-collection`

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
