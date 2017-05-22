import {
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCEEDED,
  LOAD_PATIENTS_FAILED,
  LOAD_PATIENT,
  LOAD_PATIENT_SUCCEEDED,
  LOAD_PATIENT_FAILED,
} from '../actions/patientActions';

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

    default:
      return state;
  }
};

export default patientReducers;


// import { call, put, takeLatest } from 'redux-saga/effects';
// import PatientStore from '../../data/PatientStore';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchPatients(action) {
//   try {
//     const patients = yield call(PatientStore.getPatientList, action.data.physicianId);
//     yield put({ type: 'PATIENTS_FETCH_SUCCEEDED', patients });
//   } catch (e) {
//     yield put({ type: 'PATIENTS_FETCH_FAILED', message: e.message });
//   }
// }

// function* fetchPatient(action) {
//   try {
//     const patient = yield call(PatientStore.getPatient, action.data.physicianId, action.data.patientId);
//     yield put({ type: 'PATIENT_FETCH_SUCCEEDED', patient });
//   } catch (e) {
//     yield put({ type: 'PATIENT_FETCH_FAILED', message: e.message });
//   }
// }

// function* fetchPatientsSaga() {
//   yield takeLatest('PATIENTS_FETCH_REQUESTED', fetchPatients);
// }

// function* fetchPatientSaga() {
//   yield takeLatest('PATIENTS_FETCH_REQUESTED', fetchPatient);
// }

// export { fetchPatientsSaga, fetchPatientSaga };

