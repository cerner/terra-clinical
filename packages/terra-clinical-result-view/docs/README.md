# Terra Clinical Result View

Clinical Result View is a small stateless view that is intended to show measurements such as labs and vitals. The view is designed in a way that it can handle a single measurement (such as weight), but also show paired measurements such as blood pressure.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-result-view`

## Usage

```jsx
import React from 'react';
import IconLow from 'terra-icon/lib/icon/IconLow';
import ResultView from 'terra-clinical-result-view';

const results = [{ value: '50', unit: 'ml', normalcy: 'LOW' }];

<ResultView
  results={results}
  timeDisplay="10 months"
  hasDocument
  hasComment
  isPadded
  alignEnd
  isModified
  isTruncated={false}
/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
