# Terra Clinical Item Collection

An Item Collection is a wrapper component designed to display data as either a table or list of items dependent on the relative container size. Initially data is displayed in a tabular format that flexes the rendered component, but as the container is resized and the indicated breakpoint is hit, the display changes to shows the data as a list of items. The terra-table and terra-clinical-item react components will be utilized for displaying the data in these two ways.

Ultimately, the Item Collection component allows consumers to organize tabular data and ensure this data is readable as screen sizes become progressively smaller.

The TableHeaderCell is a 'private' subcomponent of Item Collection. This component creates an empty table header cell that contains a defined width for accessory items.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-collection`
  - `yarn add terra-clinical-item-collection`

## Usage

```jsx
import React from 'react';
import ItemCollection from 'terra-clinical-item-collection';

const row1 = {startAccessory: <Icon/>, displays: [<ItemDisplay/>, <ItemDisplay/>], comment: <ItemComment/>, endAccessory: <Icon/>, itemStyles={{ layout: 'twoColumns' }} };
const row2 = {startAccessory: <Icon/>, displays: [<ItemDisplay/>, <ItemDisplay/>], comment: <ItemComment/>, endAccessory: <Icon/> };

<ItemCollection
  breakpoint="tiny"
  listStyles={{ isDivided }}
  tableStyles={{ isPadded: false, isStriped: false }}
  rows={[row1, row2]}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
