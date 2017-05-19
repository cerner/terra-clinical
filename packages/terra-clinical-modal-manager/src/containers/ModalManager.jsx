import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Modal from 'terra-modal';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-clinical-app-delegate';
import SlideGroup from 'terra-clinical-slide-group';
import getBreakpoints from 'terra-responsive-element/lib/breakpoints';

import modalReducers from '../reducers/modalManager';
import { open, close, push, pop, maximize, minimize } from '../actions/modalManager';

import './ModalManager.scss';

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
   * From `connect`. The Array of component keys that will be used to instantiate the Modal's inner components.
   **/
  modalComponentKeys: PropTypes.array,

  /**
   * From `connect`. An Object containing component data used to instantiate the Modal's inner components.
   **/
  modalComponentData: PropTypes.object,

  /**
   * From `connect`. The desired size of the modal.
   **/
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * From `connect`. The presentation state of the modal.
   **/
  isOpen: PropTypes.bool,

  /**
   * From `connect`. The maximization state of the modal.
   **/
  isMaximized: PropTypes.bool,

  /**
   * From `connect`. A function that dispatches an `open` action.
   **/
  openModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `close` action.
   **/
  closeModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `push` action.
   **/
  pushModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `pop` action.
   **/
  popModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `maximize` action.
   **/
  maximizeModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `minimize` action.
   **/
  minimizeModal: PropTypes.func.isRequired,
};

const defaultProps = {
  isOpen: false,
  isMaximized: false,
  size: 'small',
  modalContentKeys: [],
  modalContentData: {},
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    // I'm tracking the responsive-fullscreen state outside of React and Redux state to limit the number of
    // renderings that occur.
    this.forceFullscreenModal = false;

    this.updateFullscreenState = this.updateFullscreenState.bind(this);
    this.buildModalComponents = this.buildModalComponents.bind(this);
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

  buildModalComponents() {
    if (!this.props.modalComponentKeys || !this.props.modalComponentKeys.length) {
      return null;
    }

    return this.props.modalComponentKeys.map((componentKey, index) => {
      const componentData = this.props.modalComponentData[componentKey];

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
    const { app, openModal, closeModal, size, isOpen, isMaximized, children } = this.props;

    const sizeClass = `terraClinical-ModalManager-modal--${size}`;

    const modalClassNames = classNames([
      'terraClinical-ModalManager-modal',
      { [sizeClass]: !(isMaximized || this.forceFullscreenModal) },
    ]);

    return (
      <div className="terraClinical-ModalManager">
        {React.Children.map(children, (child) => {
          const childAppDelegate = AppDelegate.clone(app, {
            disclose: (data) => {
              if (data.preferredType === 'modal' || !app) {
                openModal(data);
              } else {
                app.disclose(data);
              }
            },
          });

          return React.cloneElement(child, { app: childAppDelegate });
        })}
        <Modal
          isOpened={isOpen}
          isFullscreen={isMaximized || this.forceFullscreenModal}
          classNameModal={modalClassNames}
          onRequestClose={closeModal}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <SlideGroup items={this.buildModalComponents()} />
        </Modal>
      </div>
    );
  }
}

ModalManager.propTypes = propTypes;
ModalManager.defaultProps = defaultProps;

export { ModalManager };

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
  modalManager: modalReducers,
};

export { reducers };
