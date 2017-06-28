# Terra Clinical Item Display

The Item Display component creates an display for text and an optional graphic. The Comment subcomponent creates a display for text with a comment icon.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-display`
  - `yarn add terra-clinical-item-display`

## React Usage

The React component can be initialized like so:
```
import ItemDisplay from 'terra-clinical-item-display';

<ItemDisplay
  text="display text"
  textStyle="attention"
  isTruncated
  icon=<img alt="Graphic" />
/>

<ItemDisplay.Comment
  text="display text"
  textStyle="attention"
  isTruncated"
/>
```
## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
