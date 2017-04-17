# Terra Header

A Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center. 

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-header`
  - `yarn add terra-header`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button'
import Header from 'terra-header';

<Header 
  startContent={<div><Button text="Button" /></div>}
  title="Header Text"
  endContent={<div><Button text="Button" /></div>}
/>
```