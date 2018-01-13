# Terra Clinical Item Collection

An Item Collection is a wrapper component designed to display data as either a table or list of items dependent on the relative container size. Initially data is displayed in a tabular format that flexes the rendered component, but as the container is resized and the indicated breakpoint is hit, the display changes to shows the data as a list of items. The terra-table and terra-clinical-item react components will be utilized for displaying the data in these two ways.

Ultimately, the Item Collection component allows consumers to organize tabular data and ensure this data is readable as screen sizes become progressively smaller.

The ItemCollection is rendered as a static, non-selectable display, however it has the foundation to become a selectable component. See the [Selectable Implementation Guide](https://github.com/cerner/terra-clinical/blob/master/packages/terra-clinical-item-collection/docs/SelectableImplementation.md) for details.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-collection`
  - `yarn add terra-clinical-item-collection`

## Usage

```jsx
import React from 'react';
import ItemCollection from 'terra-clinical-item-collection';

<ItemCollection
  id="ItemCollection"
  breakpoint="tiny"
  hasStartAccessory
  numberOfDisplays={3}
  hasComment
  hasEndAccessory
>
  <ItemCollection.Item
    startAccessory={<Icon/>}
    comment={<ItemCollection.Comment text="Comment" />}
    endAccessory={<Icon/>}
    listItemLayout="twoColumns"
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
  </ItemCollection.Item>
  <ItemCollection.Item
    startAccessory={<Icon/>}
    comment={<ItemCollection.Comment text="Comment" />}
    endAccessory={<Icon/>}
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
  </ItemCollection.Item>
</ItemCollection>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
