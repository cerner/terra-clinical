# Terra Clinical Modal Manager

The ModalManager is a Redux-backed Container component that presents a single or multiple components using the `terra-modal`.

The ModalManager provides each child with an AppDelegate instance that exposes the ModalManager's action creators. Children should
call the `disclose` function with a `preferredType` of `'modal'` to present modal content.

Since ModalManager manages its state using Redux, its reducer must be included when the Redux store is created. To make
this easier, the ModalManager exports a `reducers` object that can be used with `combineReducers` or otherwise used to
construct the root reducer function of an application.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-modal-manager`

## Usage

```jsx
// DemoApplication.jsx

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Application from 'terra-clinical-application';
import ModalManager, { reducers as modalManagerReducers } from 'terra-clinical-modal-manager';

const store = createStore(combineReducers(modalManagerReducers));

class DemoApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application>
          <ModalManager>
            <DemoContainer />
          </ModalManager>
        </Application>
      </Provider>
    );
  }
}

export default DemoApplication;
```

```jsx
// DemoContainer.jsx

import React, { PropTypes } from 'react';

class DemoContainer extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.app.disclose({
            preferredType: 'modal',
            content: {...},
          })
        }
      >
        Click Me To Launch Modal!
      </button>
    );
  }
}

export default DemoApplication;
```
