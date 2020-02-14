import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const partialResultValueWithNoDataKeySystolic = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      resultNoData: true,
      result: {
        value: null,
      }
    },
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

const partialResultValueWithNoDataKeyDiastolic = [
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
    diastolic: {
      eventId: '222.2',
      resultNoData: true,
      result: {
        value: null,
      }
    },
  },
];

const partialResultValueWithNullValueSystolic = [
  {
    id: '333',
    systolic: {
      eventId: '333.1',
      result: {
        value: null,
        unit: '',
      },
    },
    diastolic: {
      eventId: '333.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      resultDateTime: '10/10/2020 11:11',
    },
  },
];

const partialResultValueWithNullValueDiastolic = [
  {
    id: '444',
    systolic: {
      eventId: '444.1',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      effectiveDateTime: '2015-02-07T13:28:17-05:00',
     },
    diastolic: {
      eventId: '444.2',
      result: {
        value: null,
        unit: '',
      },
    },
  },
];

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell hasResultNoData />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataKeySystolic} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNullValueSystolic} hideUnit />
      </div>
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell hasResultNoData />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataKeyDiastolic} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNullValueDiastolic} hideUnit />
      </div>
    </div>
  </React.Fragment>
);
