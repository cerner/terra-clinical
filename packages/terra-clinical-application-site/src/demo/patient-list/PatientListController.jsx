import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AppDelegate from 'terra-app-delegate';

import { loadPatients } from '../patient-concept/actions';
import patientReducers from '../patient-concept/reducers';

import PatientList from './PatientList';

import { disclosureName as patientDetailDisclosureName, reducers as patientDetailReducers } from '../patient-detail/PatientDetailController';

const propTypes = {
  app: AppDelegate.propType,
  physicianId: PropTypes.string,
  patients: PropTypes.array,
  refreshPatients: PropTypes.func,
  isLoading: PropTypes.bool,
};

class PatientListController extends React.Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
    this.presentPatientDetail = this.presentPatientDetail.bind(this);
  }

  componentDidMount() {
    if (!this.props.patients || !this.props.patients.length) {
      this.refresh();
    }
  }

  refresh() {
    this.props.refreshPatients();
  }

  presentPatientDetail(patient, type) {
    this.props.app.disclose({
      preferredType: type,
      content: {
        key: `DETAIL_${this.props.physicianId}_${patient.id}`,
        name: patientDetailDisclosureName,
        props: {
          physicianId: this.props.physicianId,
          patientId: patient.id,
        },
      },
    });
  }

  render() {
    const { app, physicianId, patients, ...customProps } = this.props;

    if (!this.props.patients) {
      return null; // <Placeholder app={app} headerText="Patient List" loadingText="Loading patients..." />;
    }

    return (
      <PatientList
        {...customProps}
        app={app}
        patients={this.props.patients}
        isLoading={this.props.isLoading}
        onRefresh={this.refresh}
        onSelectPatientDetail={this.presentPatientDetail}
      />
    );
  }
}

PatientListController.propTypes = propTypes;

const mapStateToProps = state => ({
  patients: Object.keys(state.patientState.patients).map(key => state.patientState.patients[key]),
  isLoading: state.patientState.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshPatients: () => { dispatch(loadPatients(ownProps.physicianId)); },
});

const connectedPatientListController = connect(mapStateToProps, mapDispatchToProps)(PatientListController);

export default connectedPatientListController;

const disclosureName = 'PatientListController';
AppDelegate.registerComponentForDisclosure(disclosureName, connectedPatientListController);
export { disclosureName };

const reducers = Object.assign({}, { patientState: patientReducers }, patientDetailReducers);
export { reducers };
