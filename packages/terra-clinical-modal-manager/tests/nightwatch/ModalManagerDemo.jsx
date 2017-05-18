import React, { PropTypes } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppDelegate from 'terra-clinical-app-delegate';
import ModalManager, { reducers as modalManagerReducers } from '../../lib/containers/ModalManager';

let nestedComponentIndex = 0;

class NestedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  disclose() {
    this.props.app.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: `NESTED-COMPONENT-${nestedComponentIndex += 1}`,
        name: 'NestedComponent',
        props: {
          identifier: `NESTED-COMPONENT-${nestedComponentIndex}`,
        },
      },
    });
  }

  dismiss() {
    this.props.app.dismiss();
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  goBack() {
    this.props.app.goBack();
  }

  maximize() {
    this.props.app.maximize();
  }

  minimize() {
    this.props.app.minimize();
  }

  render() {
    const { app, identifier } = this.props;

    return (
      <div id={identifier} className="nested-component" style={{ height: '100%' }}>
        <button className="disclose" onClick={this.disclose}>Disclose</button>
        {app && app.dismiss ? <button className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {app && app.closeDisclosure ? <button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {app && app.goBack ? <button className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {app && app.maximize ? <button className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {app && app.minimize ? <button className="minimize" onClick={this.minimize}>Minimize</button> : null }
        <p>{identifier}</p>
      </div>
    );
  }
}

NestedComponent.propTypes = {
  app: AppDelegate.propType,
  identifier: PropTypes.string,
};

AppDelegate.registerComponentForDisclosure('NestedComponent', NestedComponent);

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

class ModalManagerDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ModalManager>
          <NestedComponent identifier="root" />
        </ModalManager>
      </Provider>
    );
  }
}

ModalManagerDemo.propTypes = {
  app: AppDelegate.propType,
};

export default ModalManagerDemo;
