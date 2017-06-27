import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Application from 'terra-clinical-application';
import AppDelegate from 'terra-app-delegate';
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';

import PanelManager, { reducers as panelManagerReducers } from '../panel-manager';
import PatientListController, { reducers as patientListReducers } from '../patient-list/PatientListController';

import patientSagas from '../patient-concept/sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(Object.assign({},
    patientListReducers,
    modalManagerReducers,
    panelManagerReducers,
  )),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

patientSagas.map(saga => (sagaMiddleware.run(saga)));

const physicianId = 'physician1';

// eslint-disable-next-line react/prefer-stateless-function
class PatientApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application locale="en-US">
          <ModalManager>
            <PanelManager>
              <PatientListController
                physicianId={physicianId}
                key={'PATIENT_LIST_APP'}
              />
            </PanelManager>
          </ModalManager>
        </Application>
      </Provider>
    );
  }
}

PatientApplication.propTypes = {
  app: AppDelegate.propType,
};

export default PatientApplication;
