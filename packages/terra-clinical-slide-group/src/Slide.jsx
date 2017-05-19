import React from 'react';
import PropTypes from 'prop-types';

import './Slide.scss';

const propTypes = {
  isHidden: PropTypes.bool,
  children: PropTypes.node,
};

const Slide = props => (
  <div className="terraClinical-Slide" aria-hidden={props.isHidden || null}>
    <div className="terraClinical-Slide-shadow" />
    {props.children}
  </div>
);

Slide.propTypes = propTypes;

export default Slide;
