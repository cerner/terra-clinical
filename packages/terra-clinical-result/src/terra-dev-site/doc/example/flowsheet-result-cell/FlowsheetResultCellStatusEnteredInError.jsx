import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const partialStandard = {
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const partialSystolic = {
  eventId: '1602328271.1',
  result: {
    value: '120',
    unit: 'mmHg',
  },
};

const partialDiastolic = {
  eventId: '1602328271.2',
  result: {
    value: '80',
    unit: 'mmHg',
  },
};

const standardInError = [
  {
    eventId: '1577836800',
    ...partialStandard,
    status: 'entered-in-error',
  },
  {
    eventId: '1577836911',
    ...partialStandard,
  },
];

const bloodpressureOneInError = [
  {
    id: '111',
    systolic: {
      ...partialSystolic,
      status: 'entered-in-error',
    },
    diastolic: {
      ...partialDiastolic,
    },
  },
  {
    id: '112',
    systolic: {
      ...partialSystolic,
    },
    diastolic: {
      ...partialDiastolic,
    },
  },
];

const bloodpressureBothInError = [
  {
    id: '211',
    systolic: {
      ...partialSystolic,
      status: 'entered-in-error',
    },
    diastolic: {
      ...partialDiastolic,
      status: 'entered-in-error',
    },
  },
  {
    id: '212',
    systolic: {
      ...partialSystolic,
    },
    diastolic: {
      ...partialDiastolic,
    },
  },
];

export default () => (
  <React.Fragment>
    <div className={cx(['mock-flowsheet-resultcolumn', 'double-column'])}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'with-padding'])}>
        standard result
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'wide', 'with-padding'])}>
      blood pressure: systolic-only
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'wide', 'with-padding'])}>
        blood pressure: both systolic & diastolic
      </div>
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={standardInError} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={bloodpressureOneInError} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={bloodpressureBothInError} hideUnit />
      </div>
    </div>
  </React.Fragment>
);
