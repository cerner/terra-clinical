export const LOAD_PATIENTS = 'LOAD_PATIENTS';
export const LOAD_PATIENTS_SUCCEEDED = 'LOAD_PATIENTS_SUCCEEDED';
export const LOAD_PATIENTS_FAILED = 'LOAD_PATIENTS_FAILED';

export const LOAD_PATIENT = 'LOAD_PATIENT';
export const LOAD_PATIENT_SUCCEEDED = 'LOAD_PATIENT_SUCCEEDED';
export const LOAD_PATIENT_FAILED = 'LOAD_PATIENT_FAILED';

export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const UPDATE_PATIENT_SUCCEEDED = 'UPDATE_PATIENT_SUCCEEDED';
export const UPDATE_PATIENT_FAILED = 'UPDATE_PATIENT_FAILED';

export function loadPatients(physicianId) {
  return {
    type: LOAD_PATIENTS,
    data: {
      physicianId,
    },
  };
}

export function loadPatient(physicianId, patientId) {
  return {
    type: LOAD_PATIENT,
    data: {
      physicianId,
      patientId,
    },
  };
}

export function updatePatient(physicianId, patientId, changeData) {
  return {
    type: UPDATE_PATIENT,
    data: {
      physicianId,
      patientId,
      changeData,
    },
  };
}

