import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const resultWithNullValue = {
  eventId: '1577836800',
  result: {
    value: null,
    unit: '',
  },
};

export default () => (
  <React.Fragment>
    <span className={cx('example-description-text')}>Use the `hasResultNoData` prop to show the no data display:</span>
    <ClinicalResult hasResultNoData />
    <br />
    <br />
    <span className={cx('example-description-text')}>Or provide the result with a null value, e.g. `resultData=&#123;result: &#123; value: null, &#125; &#125;`:</span>
    <ClinicalResult resultData={resultWithNullValue} />
  </React.Fragment>
);
