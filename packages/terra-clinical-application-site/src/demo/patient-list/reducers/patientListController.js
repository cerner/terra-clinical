const patientListController = (state = {}, action) => {
  switch (action.type) {
    case 'DISCLOSE_MODAL':
      return 'Patient list reducer';
    default:
      return state;
  }
};

export default patientListController;
