import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCEEDED,
  LOAD_PATIENTS_FAILED,
  LOAD_PATIENT,
  LOAD_PATIENT_SUCCEEDED,
  LOAD_PATIENT_FAILED,
} from '../actions/patientActions';

import PatientStore from '../../data/PatientStore';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPatients(action) {
  try {
    const patients = yield call(PatientStore.getPatientList, action.data.physicianId);
    yield put({ type: LOAD_PATIENTS_SUCCEEDED, patients });
  } catch (e) {
    yield put({ type: LOAD_PATIENTS_FAILED, message: e.message });
  }
}

function* fetchPatient(action) {
  try {
    const patient = yield call(PatientStore.getPatient, action.data.physicianId, action.data.patientId);
    yield put({ type: LOAD_PATIENT_SUCCEEDED, patient });
  } catch (e) {
    yield put({ type: LOAD_PATIENT_FAILED, message: e.message });
  }
}

function* fetchPatientsSaga() {
  yield takeLatest(LOAD_PATIENTS, fetchPatients);
}

function* fetchPatientSaga() {
  yield takeLatest(LOAD_PATIENT, fetchPatient);
}

export { fetchPatientsSaga, fetchPatientSaga };
