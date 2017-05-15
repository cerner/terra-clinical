import React, { PropTypes } from 'react';

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
