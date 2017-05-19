import { connect } from 'react-redux';

import ModalManagerComponent from '../components/ModalManager';

import modalManagerReducers from '../reducers/modalManager';
import { open, close, push, pop, maximize, minimize } from '../actions/modalManager';

const mapStateToProps = state => (
  (disclosureState => ({
    modalComponentKeys: disclosureState.componentKeys,
    modalComponentData: disclosureState.components,
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.modalManager)
);

const mapDispatchToProps = dispatch => ({
  openModal: (data) => { dispatch(open(data)); },
  closeModal: (data) => { dispatch(close(data)); },
  pushModal: (data) => { dispatch(push(data)); },
  popModal: (data) => { dispatch(pop(data)); },
  maximizeModal: (data) => { dispatch(maximize(data)); },
  minimizeModal: (data) => { dispatch(minimize(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalManagerComponent);

const reducers = {
  modalManager: modalManagerReducers,
};

export { reducers };
