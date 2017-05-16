import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppDelegate from 'terra-clinical-app-delegate';
import PanelPresenter from './PanelPresenter';

import panelControllerReducers from './reducers/panelController';
import { open, close, push, pop, maximize, minimize } from './actions/panelController';

class PanelController extends React.Component {
  constructor(props) {
    super(props);

    this.componentsFromPanelState = this.componentsFromPanelState.bind(this);
  }

  componentsFromPanelState() {
    if (!this.props.componentKeysToDisclose || !this.props.componentKeysToDisclose.length) {
      return null;
    }

    return this.props.componentKeysToDisclose.map((componentKey, index) => {
      const componentData = this.props.componentDataToDisclose[componentKey];

      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);

      if (!ComponentClass) {
        return undefined;
      }

      const appDelegate = AppDelegate.create({
        disclose: (data) => {
          if (data.preferredType === 'panel' || !this.props.app) {
            this.props.pushPanel(data);
          } else {
            this.props.app.disclose(data);
          }
        },
        dismiss: (index > 0 ?
          () => {
            this.props.popPanel();
          } :
          () => {
            this.props.closePanel();
          }
        ),
        closeDisclosure: () => { this.props.closePanel(); },
        goBack: index > 0 ? () => { this.props.popPanel(); } : null,
        maximize: !this.props.isMaximized ? () => { this.props.maximizePanel(); } : null,
        minimize: this.props.isMaximized ? () => { this.props.minimizePanel(); } : null,
      });

      return <ComponentClass key={componentKey} {...componentData.props} app={appDelegate} />;
    });
  }

  render() {
    const { app, openPanel, size, isOpen, isMaximized, children } = this.props;

    return (
      <PanelPresenter
        componentStack={this.componentsFromPanelState()}
        size={size}
        behavior="squish"
        isOpen={isOpen}
        isMaximized={isMaximized}
      >
        {React.Children.map(children, (child) => {
          const childAppDelegate = AppDelegate.clone(app, {
            disclose: (data) => {
              if (data.preferredType === 'panel' || !app) {
                openPanel(data);
              } else {
                app.disclose(data);
              }
            },
          });

          return React.cloneElement(child, { app: childAppDelegate });
        })}
      </PanelPresenter>
    );
  }
}

PanelController.propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,

  componentKeysToDisclose: PropTypes.array,
  componentDataToDisclose: PropTypes.object,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,

  openPanel: PropTypes.func,
  closePanel: PropTypes.func,
  pushPanel: PropTypes.func,
  popPanel: PropTypes.func,
  maximizePanel: PropTypes.func,
  minimizePanel: PropTypes.func,
};

const mapStateToProps = state => (
  (disclosureState => ({
    componentKeysToDisclose: disclosureState.componentKeys,
    componentDataToDisclose: disclosureState.components,
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.panelController)
);

const mapDispatchToProps = dispatch => ({
  openPanel: (data) => { dispatch(open(data)); },
  closePanel: (data) => { dispatch(close(data)); },
  pushPanel: (data) => { dispatch(push(data)); },
  popPanel: (data) => { dispatch(pop(data)); },
  maximizePanel: (data) => { dispatch(maximize(data)); },
  minimizePanel: (data) => { dispatch(minimize(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelController);

const reducers = {
  panelController: panelControllerReducers,
};

export { reducers };
