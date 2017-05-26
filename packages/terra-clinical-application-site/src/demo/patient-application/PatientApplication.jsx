import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Application from 'terra-clinical-application';
import AppDelegate from 'terra-clinical-app-delegate';
import ModalManager, { reducers as modalManagerReducers } from 'terra-clinical-modal-manager';

import PanelController, { reducers as panelControllerReducers } from '../panel-controller/PanelController';
import PatientListController, { reducers as patientListReducers } from '../patient-list/PatientListController';

import patientSagas from '../patient-concept/sagas/patientSagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(Object.assign({},
    patientListReducers,
    modalManagerReducers,
    panelControllerReducers,
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
        <Application>
          <ModalManager>
            <PanelController>
              <PatientListController
                physicianId={physicianId}
                key={'PATIENT_LIST_APP'}
              />
            </PanelController>
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
