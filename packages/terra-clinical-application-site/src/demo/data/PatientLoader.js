import Loader from './Loader';
import PatientStore from './PatientStore';

class PatientLoader extends Loader {
  constructor(data) {
    super(data);

    if (data.onStoreUpdate) {
      this.unsubscribeFromStore = PatientStore.subscribe(data.onStoreUpdate);
    }
  }

  destroy() {
    clearTimeout(this.getPatientListTimeout);
    clearTimeout(this.getPatientTimeout);

    if (this.unsubscribeFromStore) {
      this.unsubscribeFromStore();
    }
  }

  getPatientList(physicianId) {
    this.initiateRequest((dataCallback) => {
      this.getPatientListTimeout = setTimeout(() => {
        dataCallback(PatientStore.getPatientList(physicianId));
      }, 0);
    });
  }

  getPatient(physicianId, patientId) {
    this.initiateRequest((dataCallback) => {
      this.getPatientTimeout = setTimeout(() => {
        dataCallback(PatientStore.getPatient(physicianId, patientId));
      }, 0);
    });
  }
}

export default PatientLoader;
