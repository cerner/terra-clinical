import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  Display to show the full Result Name/Label Concept, e.g. `'Temperature Oral'`.
   */
  conceptDisplay: PropTypes.string,
  /**
   *  Display to show an appropriate clinically relevant documented datetime.
   */
  datetimeDisplay: PropTypes.string,
};

const SecondaryDisplays = ({ conceptDisplay, datetimeDisplay }) => (
  <React.Fragment>
    {conceptDisplay && <div className={cx('concept-display')}>{conceptDisplay}</div>}
    {datetimeDisplay && <div className={cx('datetime-display')}>{datetimeDisplay}</div>}
  </React.Fragment>
);

SecondaryDisplays.propTypes = propTypes;

export default SecondaryDisplays;
