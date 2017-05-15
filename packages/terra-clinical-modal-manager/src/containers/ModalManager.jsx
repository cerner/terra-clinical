import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import getBreakpoints from 'terra-responsive-element/lib/breakpoints';
import AppDelegate from 'terra-clinical-app-delegate';

import modalReducers from '../reducers/modalManager';
import { disclose, dismiss, push, pop, maximize, minimize } from '../actions/modalManager';
import ModalPresenter from '../components/ModalPresenter';

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.forceFullscreenModal = false;

    this.updateFullscreenState = this.updateFullscreenState.bind(this);
    this.componentsFromModalState = this.componentsFromModalState.bind(this);
  }

  componentDidMount() {
    this.updateFullscreenState();

    window.addEventListener('resize', () => {
      this.updateFullscreenState();
    });
  }

  updateFullscreenState() {
    const previousFullscreenState = this.forceFullscreenModal;

    this.forceFullscreenModal = window.innerWidth < getBreakpoints().small;

    // Only update if the modal isn't maximized, if it's currently open, and if it's changing states.
    if (!this.props.isMaximized && this.props.isOpen && previousFullscreenState !== this.forceFullscreenModal) {
      this.forceUpdate();
    }
  }

  componentsFromModalState() {
    if (!this.props.componentKeys || !this.props.componentKeys.length) {
      return null;
    }

    return this.props.componentKeys.map((componentKey, index) => {
      const componentData = this.props.componentDirectory[componentKey];

      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);

      if (!ComponentClass) {
        return undefined;
      }

      const appDelegate = AppDelegate.create({
        disclose: (data) => {
          this.props.pushModal(data);
        },
        dismiss: (index > 0 ?
          () => {
            this.props.popModal();
          } :
          () => {
            this.props.dismissModal();
          }
        ),
        closeDisclosure: () => { this.props.dismissModal(); },
        goBack: index > 0 ? () => { this.props.popModal(); } : null,
        maximize: !this.props.isMaximized ? () => { this.props.maximizeModal(); } : null,
        minimize: this.props.isMaximized ? () => { this.props.minimizeModal(); } : null,
      });

      return <ComponentClass key={componentKey} {...componentData.props} app={appDelegate} />;
    });
  }

  render() {
    const { app, discloseModal, size, isOpen, isMaximized, children } = this.props;

    return (
      <ModalPresenter
        componentStack={this.componentsFromModalState()}
        size={size}
        isOpen={isOpen}
        isMaximized={isMaximized || this.forceFullscreenModal}
      >
        {React.Children.map(children, (child) => {
          const childAppDelegate = AppDelegate.clone(app, {
            disclose: (data) => {
              discloseModal(data);
            },
          });

          return React.cloneElement(child, { app: childAppDelegate });
        })}
      </ModalPresenter>
    );
  }
}

ModalManager.propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,

  componentKeys: PropTypes.array,
  componentDirectory: PropTypes.object,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,

  discloseModal: PropTypes.func,
  dismissModal: PropTypes.func,
  pushModal: PropTypes.func,
  popModal: PropTypes.func,
  maximizeModal: PropTypes.func,
  minimizeModal: PropTypes.func,
};

const mapStateToProps = state => (
  (disclosureState => ({
    componentKeys: disclosureState.componentKeys,
    componentDirectory: disclosureState.components,
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.modalController)
);

const mapDispatchToProps = dispatch => ({
  discloseModal: (data) => { dispatch(disclose(data)); },
  dismissModal: (data) => { dispatch(dismiss(data)); },
  pushModal: (data) => { dispatch(push(data)); },
  popModal: (data) => { dispatch(pop(data)); },
  maximizeModal: (data) => { dispatch(maximize(data)); },
  minimizeModal: (data) => { dispatch(minimize(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);

const reducers = {
  modalController: modalReducers,
};

export { reducers };
