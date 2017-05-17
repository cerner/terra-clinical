import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import getBreakpoints from 'terra-responsive-element/lib/breakpoints';
import AppDelegate from 'terra-clinical-app-delegate';

import modalReducers from '../reducers/modalManager';
import { open, close, push, pop, maximize, minimize } from '../actions/modalManager';
import ModalPresenter from '../components/ModalPresenter';

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   **/
  app: AppDelegate.propType,

  /**
   * Components that will receive the ModalManager's AppDelegate configuration. Components given as children must appropriately handle an `app` prop.
   **/
  children: PropTypes.node,

  /**
   * From Redux. The Array of component keys that will be used to instantiate the Modal's inner components.
   **/
  modalContentKeys: PropTypes.array,

  /**
   * From Redux. An Object containing component data used to instantiate the Modal's inner components.
   **/
  modalContentData: PropTypes.object,

  /**
   * From Redux. The desired size of the modal.
   **/
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * From Redux. The presentation state of the modal.
   **/
  isOpen: PropTypes.bool,

  /**
   * From Redux. The maximization state of the modal.
   **/
  isMaximized: PropTypes.bool,

  /**
   * From Redux. A function that dispatches an `open` action.
   **/
  openModal: PropTypes.func,

  /**
   * From Redux. A function that dispatches a `close` action.
   **/
  closeModal: PropTypes.func,

  /**
   * From Redux. A function that dispatches a `push` action.
   **/
  pushModal: PropTypes.func,

  /**
   * From Redux. A function that dispatches a `pop` action.
   **/
  popModal: PropTypes.func,

  /**
   * From Redux. A function that dispatches a `maximize` action.
   **/
  maximizeModal: PropTypes.func,

  /**
   * From Redux. A function that dispatches a `minimize` action.
   **/
  minimizeModal: PropTypes.func,
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    // I'm tracking the responsive-fullscreen state outside of React and Redux state to limit the number of
    // renderings that occur.
    this.forceFullscreenModal = false;

    this.updateFullscreenState = this.updateFullscreenState.bind(this);
    this.buildModalContent = this.buildModalContent.bind(this);
  }

  componentDidMount() {
    this.updateFullscreenState();
    window.addEventListener('resize', this.updateFullscreenState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFullscreenState);
  }

  updateFullscreenState() {
    const previousFullscreenState = this.forceFullscreenModal;

    this.forceFullscreenModal = window.innerWidth < getBreakpoints().small;

    // Only update the modal if it's minimized, open, and changing states.
    if (!this.props.isMaximized && this.props.isOpen && previousFullscreenState !== this.forceFullscreenModal) {
      this.forceUpdate();
    }
  }

  buildModalContent() {
    if (!this.props.modalContentKeys || !this.props.modalContentKeys.length) {
      return null;
    }

    return this.props.modalContentKeys.map((componentKey, index) => {
      const componentData = this.props.modalContentData[componentKey];

      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);

      if (!ComponentClass) {
        return undefined;
      }

      const appDelegate = AppDelegate.create({
        disclose: (data) => {
          this.props.pushModal(data);
        },
        dismiss: (index > 0 ?
          (data) => {
            this.props.popModal(data);
          } :
          (data) => {
            this.props.closeModal(data);
          }
        ),
        closeDisclosure: () => { this.props.closeModal(); },
        goBack: index > 0 ? () => { this.props.popModal(); } : null,
        maximize: !this.props.isMaximized ? () => { this.props.maximizeModal(); } : null,
        minimize: this.props.isMaximized ? () => { this.props.minimizeModal(); } : null,
      });

      return <ComponentClass key={componentKey} {...componentData.props} app={appDelegate} />;
    });
  }

  render() {
    const { app, openModal, size, isOpen, isMaximized, children } = this.props;

    return (
      <ModalPresenter
        modalContent={this.buildModalContent()}
        size={size}
        isOpen={isOpen}
        isMaximized={isMaximized || this.forceFullscreenModal}
      >
        {React.Children.map(children, (child) => {
          const childAppDelegate = AppDelegate.clone(app, {
            disclose: (data) => {
              openModal(data);
            },
          });

          return React.cloneElement(child, { app: childAppDelegate });
        })}
      </ModalPresenter>
    );
  }
}

ModalManager.propTypes = propTypes;

const mapStateToProps = state => (
  (disclosureState => ({
    modalContentKeys: disclosureState.componentKeys,
    modalContentData: disclosureState.components,
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.modalController)
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
  modalController: modalReducers,
};

export { reducers };
