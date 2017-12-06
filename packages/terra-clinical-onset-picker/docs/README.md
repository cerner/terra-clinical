# Terra Clinical Onset Picker

The terra-clinical-onset-picker component provides users a way to enter or select an approximate date for use in onset scenarios.

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

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
