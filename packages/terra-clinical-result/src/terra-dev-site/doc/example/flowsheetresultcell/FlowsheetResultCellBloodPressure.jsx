import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const bloodpressureResultValue = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
    },
  },
];

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={bloodpressureResultValue} hideUnit />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
  </React.Fragment>
);
