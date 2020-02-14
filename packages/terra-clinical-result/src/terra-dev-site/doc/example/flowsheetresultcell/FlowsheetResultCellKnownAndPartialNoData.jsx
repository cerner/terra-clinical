import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const partialResultValueWithNoDataPropSystolic = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      resultNoData: true,
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

const partialResultValueWithNoDataPropDiastolic = [
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
      },
    },
  },
];

export default () => (
  <React.Fragment>
    {/* This example column shows how to use the `hasResultNoData` prop */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell hasResultNoData />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell hasResultNoData />
      </div>
    </div>
    {/* This example column shows the No Data display using the `resultNoData` property name */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropSystolic} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropDiastolic} hideUnit />
      </div>
    </div>
    {/* This example column shows the No Data display using `result: { value: null, }`  */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNullValueSystolic} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={partialResultValueWithNullValueDiastolic} hideUnit />
      </div>
    </div>
  </React.Fragment>
);
