import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ContentCellLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
};

const ContentCellLayout = ({ text }) => (
  <div className={cx('content-cell')}>
    {text}
  </div>
);

ContentCellLayout.propTypes = propTypes;

export default ContentCellLayout;
