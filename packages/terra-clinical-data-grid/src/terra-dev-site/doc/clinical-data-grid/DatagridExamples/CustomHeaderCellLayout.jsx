import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CustomHeaderCellLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

const CustomHeaderCellLayout = ({ primaryText, secondaryText }) => (
  <div className={cx('custom-header-cell')}>
    <div className={cx('primary')}>
      {primaryText}
    </div>
    <div className={cx('secondary')}>
      {secondaryText}
    </div>
  </div>
);

CustomHeaderCellLayout.propTypes = propTypes;

export default CustomHeaderCellLayout;
