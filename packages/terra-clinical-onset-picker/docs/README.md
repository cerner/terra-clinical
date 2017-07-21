# Terra Clinical Onset Picker

The terra-clinical-onset-picker component provides users a way to enter or select an approximate date.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-onset-picker`
  - `yarn add terra-clinical-onset-picker`

## Usage
```jsx
import React from 'react';
import OnsetPicker from 'terra-clinical-onset-picker';

<OnsetPicker age={moment().subtract(6, 'years').format()} />
```
