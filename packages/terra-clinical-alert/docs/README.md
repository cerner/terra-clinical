# Terra Clinical Alert

The Terra Clinical Alert component is a notification banner that can be rendered in your application when there is information that you want to bring to the user's attention. The Clinical Alert component supports a number of built-in notification types that render with pre-defined colors and icons that help the user understand the severity and meaning of the notification. A custom notification type is also supported that allows your application to customize an alert that may not fit into the pre-defined types. The Clinical Alert expands on the base Terra Alert component providing additional clinical specific alert types. 

For more examples of the base types and functionality refer to the [terra-alert](https://terra-ui.herokuapp.com/components/core/alert) documentation. PLEASE NOTE: All functionality available in the terra-alert component is also available in the terra-clinical-alert component. 


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-alert`
  - `yarn add terra-clinical-alert`

## Usage

```jsx
import React from 'react';
import Alert from 'terra-clinical-alert';

<Alert type={Alert.Opts.Types.OUTSIDE_RECORDS}>
  This is an outside records alert with Default text
</Alert>
```
