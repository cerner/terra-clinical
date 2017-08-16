# Terra Clinical Onset Picker

The terra-clinical-onset-picker component provides users a way to enter or select an approximate date for use in onset scenarios.

This is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-onset-picker`
  - `yarn add terra-clinical-onset-picker`

## Usage
```jsx
import React from 'react';
import Base from 'terra-base';
import OnsetPicker from 'terra-clinical-onset-picker';

//Renders a onset picker
<Base locale='en-US'>
  <OnsetPicker
    birthdate="2011-08-16T17:47:49-05:00"
    granularitySelectName="onset-granularity"
    precisionSelectName="onset-precision"
    onsetDateInputName="onset-date"
  />
</Base>
```
