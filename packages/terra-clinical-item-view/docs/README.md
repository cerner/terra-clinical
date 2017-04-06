# Terra Clinical Item View

The Terra Clinical ItemView component allows displays to be organized into rows and column and themed, while providing means to add accessory elements.

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
  leftAccesory=<img alt="Graphic" />
  displays={[<ItemView.Display text="display 1" />, <ItemView.Display text="display 2" />]}
  comment=<ItemView.Comment text="comment" />
/>

<Display
  text="display text"
  textStyle="attention"
  isTruncated
  icon=<img alt="Graphic" />
/>

<Comment
  text="display text"
  textStyle="attention"
  isTruncated
/>
```
