# Terra Clinical Header

A Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-header`
  - `yarn add terra-clinical-header`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button'
import Header from 'terra-clinical-header';

<Header
  startContent={<div><Button text="Button" /></div>}
  title="Header Text"
  endContent={<div><Button text="Button" /></div>}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
