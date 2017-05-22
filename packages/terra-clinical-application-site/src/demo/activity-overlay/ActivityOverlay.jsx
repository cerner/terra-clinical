import React from 'react';
import PropTypes from 'prop-types';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import './ActivityOverlay.scss';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Loading',
};

const ActivityOverlay = ({ text }) => (
  <div className="terraClinical-ActivityOverlay" tabIndex="-1">
    <div className="terraClinical-ActivityOverlay-content" style={{ fontSize: '24px' }}>
      <IconSpinner isSpin />
      <span style={{ paddingLeft: '5px' }}>{text}</span>
    </div>
  </div>
);

ActivityOverlay.propTypes = propTypes;
ActivityOverlay.defaultProps = defaultProps;

export default ActivityOverlay;
