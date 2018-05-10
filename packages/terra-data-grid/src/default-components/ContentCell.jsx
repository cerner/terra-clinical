import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ContentCell.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
};

const Cell = ({ text }) => (
  <div className={cx('content-cell')}>
    {text}
  </div>
);

Cell.propTypes = propTypes;

export default Cell;
