import { connect } from 'react-redux';

import ModalManager from './ModalManager';

import modalManagerReducers from './reducers';
import { open, close, push, pop, maximize, minimize } from './actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);

const reducers = {
  modalManager: modalManagerReducers,
};

export { reducers };
