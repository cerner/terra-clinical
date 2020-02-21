import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);
/*
const StandardLabel = [
  {
    eventId: '1',
    result: {
      value: 'standard',
    },
  },
];
*/
const CompactLabel = [
  {
    eventId: '2',
    result: {
      value: 'compact',
    },
  },
];

/*
const NoneLabel = [
  {
    eventId: '3',
    result: {
      value: 'none',
    },
  },
];
*/

const multipleResultBPValues = [
  {
    id: '1602328271-1',
    systolic: {
      eventId: '1602328271-1.1',
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
      eventId: '1602328271-1.2',
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
    id: '1602328271-2',
    systolic: {
      eventId: '1602328271-2.1',
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
      eventId: '1602328271-2.2',
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
    id: '1602328271-3',
    systolic: {
      eventId: '1602328271-3.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '1602328271-3.2',
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

const singleResultBPValues = [
  {
    id: '1602328271-1',
    systolic: {
      eventId: '1602328271-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '1602328271-1.2',
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
];

const unverifiedResultValue = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    type: 'NUMERIC',
    isUnverified: true,
    effectiveDateTime: '10/10/2020 11:11:11',
  },
];

export default () => (
  <React.Fragment>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={CompactLabel} paddingStyle="compact" />
      </div>
    </div>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={singleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={singleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
    </div>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
    </div>
  </React.Fragment>
);
