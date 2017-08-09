import React from 'react';
import PropTypes from 'prop-types';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import styles from './ActivityOverlay.scss';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Loading',
};

const ActivityOverlay = ({ text }) => (
  <div className={styles['activity-overlay']} tabIndex="-1">
    <div className={styles.content} style={{ fontSize: '24px' }}>
      <IconSpinner isSpin />
      <span style={{ paddingLeft: '5px' }}>{text}</span>
    </div>
  </div>
);

ActivityOverlay.propTypes = propTypes;
ActivityOverlay.defaultProps = defaultProps;

export default ActivityOverlay;
