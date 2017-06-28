# Terra Clinical Label Value View

The label value view component displays a label and the associated value or list
of values underneath the label.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-label-value-view`
  - `yarn add terra-clinical-label-value-view`

## Usage

```jsx
import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

<LabelValueView label="Reporter" />

<LabelValueView label="Reporter" textValue="John Doe" />

<LabelValueView label="Heart Rate">
  <List>
    <Icon />
    <Icon />
    120 bmp
  <List />
</LabelValueView>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
