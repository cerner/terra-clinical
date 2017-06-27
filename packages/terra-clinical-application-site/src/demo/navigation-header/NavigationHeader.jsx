import React from 'react';
import PropTypes from 'prop-types';

import ActionHeader from 'terra-clinical-action-header';
import AppDelegate from 'terra-app-delegate';

const propTypes = {
  app: AppDelegate.propType,
  title: PropTypes.string,
  children: PropTypes.node,
};

class NavigationHeader extends React.Component {
  constructor(props) {
    super(props);

    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  goBack() {
    this.props.app.goBack();
  }

  maximize() {
    this.props.app.maximize();
  }

  minimize() {
    this.props.app.minimize();
  }

  render() {
    const { app, title, children, ...customProps } = this.props;

    return (
      <ActionHeader
        title={title}
        onClose={app.closeDisclosure && this.closeDisclosure}
        onBack={app.goBack && this.goBack}
        onMaximize={app.maximize && this.maximize}
        onMinimize={app.minimize && this.minimize}
        {...customProps}
      >
        {children}
      </ActionHeader>
    );
  }
}

NavigationHeader.propTypes = propTypes;

export default NavigationHeader;
