# Terra Clinical Modal Manager

The ModalManager is a Redux-backed Container component that presents a single or multiple components using the `terra-modal`.

It works like this:
* One or many components are provided to the ModalManager as children.
* The ModalManager clones those children and adds an AppDelegate prop to each.
* The added AppDelegate's `disclose` function, when called with a `preferredType` of `modal`, will dispatch the ModalManager's `OPEN` action.
* The ModalManager will use the data from the `OPEN` action to display the modal and present the specified component within it.
* The modally-presented component will also recieve an AppDelegate with its APIs configured to further manipulate the modal state.

Components presented in the Modal still have the ability to disclose additional modal content; the ModalManager will maintain both components
in a stack and present the top-most component (through its AppDelegate) the APIs necessary to go back.

Since ModalManager manages its state using Redux, its reducer must be included when the Redux store is created. To make
this easier, the ModalManager exports a `reducers` object that can be used with `combineReducers` or otherwise used to
construct the root reducer function of an application.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-modal-manager`

## Exports

|Name|Type|Description|
|---|---|---|
|`ModalManager`|Component|The `connect`-ed Component that utilizes the standard Redux state mappings.|
|`{ ModalManager }`|Component|The standard Component. This should only be used with a custom Redux implementation or for testing.|
|`{ reducers }`|Object|An Object containing the ModalManager's default reducer. Can be used directly with `combineReducers` or otherwise used to
construct the root reducer function of an application.|

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
