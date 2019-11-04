import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const multipleResultBPValues = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
];

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
  </React.Fragment>
);
