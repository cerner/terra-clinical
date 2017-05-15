const patientDetailController = (state = {}, action) => {
  switch (action.type) {
    case 'DISCLOSE_MODAL':
      return 'Patient detail reducer';
    default:
      return state;
  }
};

export default patientDetailController;
