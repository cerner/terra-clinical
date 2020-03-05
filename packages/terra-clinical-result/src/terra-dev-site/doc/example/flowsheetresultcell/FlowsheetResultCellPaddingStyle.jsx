import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

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
    },
    diastolic: {
      eventId: '1602328271-3.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
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
  },
];

export default () => (
  <React.Fragment>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'short'])}>
        none
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'with-padding'])}>
        compact
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'with-padding', 'medium'])}>
        standard
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'with-padding', 'tall', 'allow-wrapping'])}>
        compact + vertically center-aligned
      </div>
    </div>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'short'])}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="none" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'medium'])}>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="standard" />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'tall'])}>
        <div className={cx(['vertical-center-align-wrapper'])}>
          <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
        </div>
      </div>
    </div>
    {/* --- */}
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'short'])}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="none" />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'medium'])}>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="standard" />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'tall'])}>
        <div className={cx(['vertical-center-align-wrapper'])}>
          <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
        </div>
      </div>
    </div>
  </React.Fragment>
);
