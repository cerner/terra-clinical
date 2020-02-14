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
      resultDateTime: '10/10/2020 11:11',
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
      effectiveDateTime: '2015-02-07T13:28:17-05:00',
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
