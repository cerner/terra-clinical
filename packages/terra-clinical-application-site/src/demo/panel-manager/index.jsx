import { connect } from 'react-redux';

import PanelManager from './PanelManager';
import panelManagerReducers from './reducers';
import { open, close, push, pop, maximize, minimize } from './actions';

const mapStateToProps = state => (
  (disclosureState => ({
    panelComponentData: disclosureState.componentKeys.map(key => (disclosureState.components[key])),
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.panelManager)
);

const mapDispatchToProps = dispatch => ({
  openPanel: (data) => { dispatch(open(data)); },
  closePanel: (data) => { dispatch(close(data)); },
  pushPanel: (data) => { dispatch(push(data)); },
  popPanel: (data) => { dispatch(pop(data)); },
  maximizePanel: (data) => { dispatch(maximize(data)); },
  minimizePanel: (data) => { dispatch(minimize(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelManager);

const reducers = {
  panelManager: panelManagerReducers,
};

export { reducers };
