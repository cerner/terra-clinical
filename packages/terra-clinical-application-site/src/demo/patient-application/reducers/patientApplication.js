import { DISCLOSE_MODAL } from 'terra-clinical-modal-controller/lib/actions/modalController';

const patientApplication = (state = { modalCounter: 0 }, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case DISCLOSE_MODAL:
      newState.modalCounter = state.modalCounter + 1;
      return newState;
    default:
      return state;
  }
};

export default patientApplication;
