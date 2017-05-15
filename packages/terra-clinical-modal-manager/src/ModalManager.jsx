import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './ModalManager.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ModalManager = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const ModalManagerClassNames = classNames([
    'terraClinical-ModalManager',
    attributes.className,
  ]);

  return (<div {...attributes} className={ModalManagerClassNames} />)
};

ModalManager.propTypes = propTypes;
ModalManager.defaultProps = defaultProps;

export default ModalManager;
