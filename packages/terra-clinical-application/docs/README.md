# Terra Clinical Application

The Application is a wrapper component around `terra-base` that provides clinical application-specific properties.

Since the Application will pass the AppDelegate instance it received as an `app` prop to its children, any child components
given to the Application should be able to handle that `app` prop appropriately.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-application`
  - `yarn add terra-clinical-application`

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
