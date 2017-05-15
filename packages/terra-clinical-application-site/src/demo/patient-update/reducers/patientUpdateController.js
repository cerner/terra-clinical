const patientUpdateController = (state = {}, action) => {
  switch (action.type) {
    case 'DISCLOSE_MODAL':
      return 'Patient update reducer';
    default:
      return state;
  }
};

export default patientUpdateController;
