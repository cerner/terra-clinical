import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './AppDelegate.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const AppDelegate = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const AppDelegateClassNames = classNames([
    'terraClinical-AppDelegate',
    attributes.className,
  ]);

  return (<div {...attributes} className={AppDelegateClassNames} />)
};

AppDelegate.propTypes = propTypes;
AppDelegate.defaultProps = defaultProps;

export default AppDelegate;
