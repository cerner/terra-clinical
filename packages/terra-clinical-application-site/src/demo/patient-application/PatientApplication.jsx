import React, { PropTypes } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Application from 'terra-clinical-application';
import AppDelegate from 'terra-clinical-app-delegate';
import ModalManager, { reducers as modalManagerReducers } from 'terra-clinical-modal-manager';

import PanelController, { reducers as panelControllerReducers } from '../panel-controller/PanelController';
import PatientListController, { reducers as patientListReducers } from '../patient-list/PatientListController';

import patientApplication from './reducers/patientApplication';

const store = createStore(
  combineReducers(Object.assign({},
    { patientApplication },
    patientListReducers,
    modalManagerReducers,
    panelControllerReducers,
  )),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const physicianId = 'physician1';

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
