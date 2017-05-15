import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppDelegate from 'terra-clinical-app-delegate';
import PanelPresenter from './PanelPresenter';

import panelControllerReducers from './reducers/panelController';
import { disclose, dismiss, push, pop, maximize, minimize } from './actions/panelController';

class PanelController extends React.Component {
  constructor(props) {
    super(props);

    this.componentsFromPanelState = this.componentsFromPanelState.bind(this);
  }

  componentsFromPanelState() {
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
            this.props.dismissPanel();
          }
        ),
        closeDisclosure: () => { this.props.dismissPanel(); },
        goBack: index > 0 ? () => { this.props.popPanel(); } : null,
        maximize: !this.props.isMaximized ? () => { this.props.maximizePanel(); } : null,
        minimize: this.props.isMaximized ? () => { this.props.minimizePanel(); } : null,
      });

      return <ComponentClass key={componentKey} {...componentData.props} app={appDelegate} />;
    });
  }

  render() {
    const { app, disclosePanel, size, isOpen, isMaximized, children } = this.props;

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
                disclosePanel(data);
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

  componentKeys: PropTypes.array,
  componentDirectory: PropTypes.object,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,

  disclosePanel: PropTypes.func,
  dismissPanel: PropTypes.func,
  pushPanel: PropTypes.func,
  popPanel: PropTypes.func,
  maximizePanel: PropTypes.func,
  minimizePanel: PropTypes.func,
};

const mapStateToProps = state => (
  (disclosureState => ({
    componentKeys: disclosureState.componentKeys,
    componentDirectory: disclosureState.components,
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
  }))(state.panelController)
);

const mapDispatchToProps = dispatch => ({
  disclosePanel: (data) => { dispatch(disclose(data)); },
  dismissPanel: (data) => { dispatch(dismiss(data)); },
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
