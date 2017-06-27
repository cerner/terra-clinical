import React from 'react';
import PropTypes from 'prop-types';

import SlidePanel from 'terra-slide-panel';
import SlideGroup from 'terra-slide-group';
import AppDelegate from 'terra-app-delegate';

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
  panelComponentData: PropTypes.array,
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

const defaultProps = {
  isOpen: false,
  isMaximized: false,
  size: 'small',
  panelComponentData: [],
};

class PanelManager extends React.Component {
  constructor(props) {
    super(props);

    this.buildPanelComponents = this.buildPanelComponents.bind(this);
    this.buildChildren = this.buildChildren.bind(this);
  }

  buildPanelComponents() {
    const { app, panelComponentData, isMaximized, pushPanel, popPanel, closePanel, maximizePanel, minimizePanel } = this.props;

    return panelComponentData.map((componentData, index) => {
      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);

      if (!ComponentClass) {
        return undefined;
      }

      const appDelegate = AppDelegate.create({
        disclose: (data) => {
          if (data.preferredType === 'panel' || !app) {
            pushPanel(data);
          } else {
            app.disclose(data);
          }
        },
        dismiss: (index > 0 ?
          () => {
            popPanel();
          } :
          () => {
            closePanel();
          }
        ),
        closeDisclosure: () => { closePanel(); },
        goBack: index > 0 ? () => { popPanel(); } : null,
        maximize: !isMaximized ? () => { maximizePanel(); } : null,
        minimize: isMaximized ? () => { minimizePanel(); } : null,
      });

      return <ComponentClass key={componentData.key} {...componentData.props} app={appDelegate} />;
    });
  }

  buildChildren() {
    const { app, children, openPanel } = this.props;

    return React.Children.map(children, (child) => {
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
    });
  }

  render() {
    const { size, isOpen, isMaximized } = this.props;

    return (
      <SlidePanel
        mainContent={this.buildChildren()}
        panelContent={<SlideGroup items={this.buildPanelComponents()} />}
        panelBehavior="squish"
        panelPosition="end"
        panelSize={size}
        isFullscreen={isMaximized}
        isOpen={isOpen}
        fill
      />
    );
  }
}

PanelManager.propTypes = propTypes;
PanelManager.defaultProps = defaultProps;

export default PanelManager;
