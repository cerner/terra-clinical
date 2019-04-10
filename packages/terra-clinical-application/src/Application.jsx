import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Base from 'terra-base';
import AppDelegate from 'terra-app-delegate';
import styles from './Application.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the Application's children.
   */
  app: AppDelegate.propType,

  /**
   * The components to display within the Application.
   */
  children: PropTypes.node.isRequired,
};

const Application = ({ app, children, ...customProps }) => {
  let childrenToRender = children;

  if (app) {
    childrenToRender = React.Children.map(children, child => (
      React.cloneElement(child, { app })
    ));
  }

  return (
    <Base {...customProps} className={cx(['application', customProps.className])}>
      {childrenToRender}
    </Base>
  );
};

Application.propTypes = propTypes;

export default Application;
