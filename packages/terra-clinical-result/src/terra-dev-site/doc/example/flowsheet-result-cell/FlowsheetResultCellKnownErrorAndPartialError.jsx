import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const partialResultValueWithNoSystolic = [
  {
    id: '111',
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
    },
  },
];

const partialResultValueWithNoDiastolic = [
  {
    id: '222',
    systolic: {
      eventId: '222.1',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
    },
  },
];

export default () => (
  <React.Fragment>
    {/* This example column shows how to use the `hasResultError` prop */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell hasResultError />
      </div>
    </div>
    {/* This example column shows the error display when the Systolic property name is not present */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoSystolic} hideUnit />
      </div>
    </div>
    {/* This example column shows the error display when the Diastolic property name is not present */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDiastolic} hideUnit />
      </div>
    </div>
  </React.Fragment>
);
