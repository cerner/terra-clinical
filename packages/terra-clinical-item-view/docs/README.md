# Terra Clinical Item View

The Item View component allows displays to be organized into rows and column and themed, while providing means to add accessory elements and a comment.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-view`
  - `yarn add terra-clinical-item-view`

## React Usage

The React component can be initialized like so:
```
import ItemView from 'terra-clinical-item-view';

<ItemView
  layout="oneColumn"
  textEmphasis="default"
  isTruncated
  accessoryAlignment="top"
  leftAccessory=<img alt="Graphic" />
  displays={[<ItemView.Display text="display 1" />, <ItemDisplay text="display 2" />]}
  comment=<ItemView.Comment text="comment" />
/>

```
