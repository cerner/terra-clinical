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

<LabelValueView label="Reporter">
  John Doe
</LabelValueView>

<LabelValueView label="Heart Rate">
  <Icon />
  <Icon />
  120 bmp
</LabelValueView>
```
