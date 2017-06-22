import { call, put, takeLatest } from 'redux-saga/effects';

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

import PatientAPI from './PatientAPI';

function* fetchPatients(action) {
  try {
    const patients = yield call(PatientAPI.getPatientList, action.data.physicianId);
    yield put({ type: LOAD_PATIENTS_SUCCEEDED, patients });
  } catch (e) {
    yield put({ type: LOAD_PATIENTS_FAILED, message: e.message });
  }
}

function* fetchPatient(action) {
  try {
    const patient = yield call(PatientAPI.getPatient, action.data.physicianId, action.data.patientId);
    yield put({ type: LOAD_PATIENT_SUCCEEDED, patient });
  } catch (e) {
    yield put({ type: LOAD_PATIENT_FAILED, message: e.message });
  }
}

function* updatePatient(action) {
  try {
    const patient = yield call(PatientAPI.updatePatient, action.data.physicianId, action.data.patientId, action.data.changeData);
    yield put({ type: UPDATE_PATIENT_SUCCEEDED, patient });
  } catch (e) {
    yield put({ type: UPDATE_PATIENT_FAILED, message: e.message });
  }
}

function* fetchPatientsSaga() {
  yield takeLatest(LOAD_PATIENTS, fetchPatients);
}

function* fetchPatientSaga() {
  yield takeLatest(LOAD_PATIENT, fetchPatient);
}

function* updatePatientSaga() {
  yield takeLatest(UPDATE_PATIENT, updatePatient);
}

export default [fetchPatientsSaga, fetchPatientSaga, updatePatientSaga];
