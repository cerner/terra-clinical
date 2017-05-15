import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Application.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Application = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const ApplicationClassNames = classNames([
    'terraClinical-Application',
    attributes.className,
  ]);

  return (<div {...attributes} className={ApplicationClassNames} />)
};

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
