# Terra Clinical Application

The Application is a wrapper component around `terra-base` that provides clinical application-specific properties.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-application`

## Usage

```jsx
import React from 'react';
import AppDelegate from 'terra-clinical-app-delegate';
import Application from 'terra-clinical-application';

<Application
  app={AppDelegate.create({...})}
>
  <InnerComponent />
</Application>

```
