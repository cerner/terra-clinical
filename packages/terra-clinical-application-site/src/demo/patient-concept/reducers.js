import {
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCEEDED,
  LOAD_PATIENTS_FAILED,
  LOAD_PATIENT,
  LOAD_PATIENT_SUCCEEDED,
  LOAD_PATIENT_FAILED,
  UPDATE_PATIENT,
  UPDATE_PATIENT_SUCCEEDED,
  UPDATE_PATIENT_FAILED,
} from './actions';

const patientReducers = (state = { patientIds: [], patients: {} }, action) => {
  const newState = Object.assign({}, state);
  newState.patientIds = Object.assign([], state.patientIds || []);
  newState.patients = Object.assign({}, state.patients || {});

  switch (action.type) {
    case LOAD_PATIENTS:
      newState.isLoading = true;
      return newState;

    case LOAD_PATIENTS_SUCCEEDED:
      newState.failure = false;
      newState.isLoading = false;
      newState.patientIds = action.patients.map(patient => (patient.id));

      newState.patients = {};
      action.patients.forEach((patient) => {
        newState.patients[patient.id] = patient;
      });
      return newState;

    case LOAD_PATIENTS_FAILED:
      newState.failure = true;
      newState.isLoading = false;
      return newState;

    case LOAD_PATIENT:
      newState.isLoading = true;
      return newState;

    case LOAD_PATIENT_SUCCEEDED:
      newState.isLoading = false;
      newState.patients[action.patient.id] = action.patient;
      return newState;

    case LOAD_PATIENT_FAILED:
      newState.isLoading = false;
      newState.failure = true;
      return newState;

    case UPDATE_PATIENT:
      newState.isUpdating = true;
      return newState;

    case UPDATE_PATIENT_SUCCEEDED:
      newState.failure = false;
      newState.isUpdating = false;
      newState.patients[action.patient.id] = action.patient;
      return newState;

    case UPDATE_PATIENT_FAILED:
      newState.isUpdating = false;
      newState.failure = true;
      return newState;

    default:
      return state;
  }
};

export default patientReducers;
