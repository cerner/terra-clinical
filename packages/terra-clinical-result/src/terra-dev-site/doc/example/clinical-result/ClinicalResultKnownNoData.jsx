import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <React.Fragment>
    <span className={cx('example-description-text')}>Use the `hasResultNoData` prop to show the no data display:</span>
    <ClinicalResult hasResultNoData />

  </React.Fragment>
);
