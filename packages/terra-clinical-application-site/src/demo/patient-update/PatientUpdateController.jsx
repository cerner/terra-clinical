import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AppDelegate from 'terra-app-delegate';

import { loadPatient, updatePatient } from '../patient-concept/actions';
import patientReducers from '../patient-concept/reducers';

import PatientUpdate from './PatientUpdate';

const propTypes = {
  app: AppDelegate.propType,
  patient: PropTypes.object,
  refreshPatient: PropTypes.func,
  updatePatient: PropTypes.func,
  isUpdating: PropTypes.bool,
};

class PatientUpdateController extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    if (!this.props.patient) {
      this.refresh();
    }
  }

  refresh() {
    this.props.refreshPatient();
  }

  handleSubmit(patient, changeData) {
    this.props.updatePatient(changeData);
  }

  handleCancel() {
    this.props.app.dismiss();
  }

  render() {
    const patient = this.props.patient;

    if (!patient) {
      return null; // <Placeholder app={this.props.app} headerText="Patient Update" loadingText="Loading patient..." />;
    }

    return (
      <PatientUpdate
        app={this.props.app}
        patient={patient}
        isUpdating={this.props.isUpdating}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    );
  }
}

PatientUpdateController.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  patient: state.patientState.patients[ownProps.patientId],
  isUpdating: state.patientState.isUpdating,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshPatient: () => { dispatch(loadPatient(ownProps.physicianId, ownProps.patientId)); },
  updatePatient: (changeData) => { dispatch(updatePatient(ownProps.physicianId, ownProps.patientId, changeData)); },
});

const connectedPatientUpdateController = connect(mapStateToProps, mapDispatchToProps)(PatientUpdateController);

export default connectedPatientUpdateController;

const disclosureName = 'PatientUpdateController';
AppDelegate.registerComponentForDisclosure(disclosureName, connectedPatientUpdateController);
export { disclosureName };

const reducers = { patientState: patientReducers };
export { reducers };
