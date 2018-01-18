# Terra Clinical ErrorView

The Terra Clinical ErrorView is a display presented with an error message and location for a button.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-error-view`
  - `yarn add terra-clinical-error-view`

## Usage

```jsx
import React from 'react';
import ErrorView from 'terra-clinical-error-view';

<ErrorView
  name="test name"
  description="test description"
  buttonText="test button"
  buttonOnClick={this.handleClick();}
  isGlyphHidden={false}
 />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
