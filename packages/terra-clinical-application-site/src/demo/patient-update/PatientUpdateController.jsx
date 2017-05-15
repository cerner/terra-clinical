import React, { PropTypes } from 'react';

import AppDelegate from 'terra-clinical-app-delegate';

import PatientLoader from '../data/PatientLoader';
import PatientStore from '../data/PatientStore';

import PatientUpdate from './PatientUpdate';
import patientUpdateController from './reducers/patientUpdateController';

class PatientUpdateController extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      isLoading: false,
      patient: props.patientUpdateData,
    };

    this.loader = new PatientLoader({
      dataKey: 'patient',
      onStoreUpdate: () => {
        this.refresh();
      },
      onChange: (newState) => {
        this.setState(newState);
      },
    });
  }

  componentDidMount() {
    if (!this.state.patientUpdateData) {
      this.refresh();
    }
  }

  componentWillUnmount() {
    this.loader.destroy();
  }

  refresh() {
    this.loader.getPatient(this.props.physicianId, this.props.patientId);
  }

  handleSubmit(patient, changeData) {
    PatientStore.update(this.props.physicianId, patient.id, changeData);

    this.props.app.dismiss();
  }

  handleCancel() {
    this.props.app.dismiss();
  }

  render() {
    const patient = this.state.patient;

    if (!patient) {
      return null; // <Placeholder app={this.props.app} headerText="Patient Update" loadingText="Loading patient..." />;
    }

    return (
      <PatientUpdate
        app={this.props.app}
        patient={patient}
        isLoading={this.state.isLoading}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    );
  }
}

PatientUpdateController.propTypes = {
  app: AppDelegate.propType,
  physicianId: PropTypes.string,
  patientId: PropTypes.string,
  patientUpdateData: PropTypes.object,
};

export default PatientUpdateController;

const disclosureName = 'PatientUpdateController';
AppDelegate.registerComponentForDisclosure(disclosureName, PatientUpdateController);
export { disclosureName };

const reducers = { patientUpdateController };
export { reducers };
