import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../../../doc/example/Examples.module.scss';

const cx = classNames.bind(styles);

const results = [];
for (let i = 0; i < 102; i += 1) {
  results[i] = {
    eventId: '1602328271',
    result: {
      value: '101.123456789123456789123456789123456789123456789',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: true,
    hasComment: true,
  };
}

const multipleResultValues = [
  {
    eventId: '1602328271',
    result: {
      value: '101.123456789123456789123456789123456789123456789',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

const multipleResultValues2 = [
  {
    eventId: '1602328271',
    result: {
      value: 'Anxious, Agitated, Frustrated Easily',
      unit: 'degC',
    },
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

const multipleResultValues3 = [
  {
    eventId: '1602328271',
    systolic: {
      eventId: '111.1',
      result: {
        value: '180',
        unit: 'mmHg',
      },
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '180',
        unit: 'mmHg',
      },
    },
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

const testExtremeWidthBloodPressure = [];
testExtremeWidthBloodPressure[0] = {
  id: '1602328271-1',
  systolic: {
    eventId: '1602328271-1.1',
    result: {
      value: '888',
      unit: 'mmHg',
    },
    interpretation: 'critical',
    isModified: true,
    hasComment: true,
  },
  diastolic: {
    eventId: '1602328271-1.2',
    result: {
      value: '888',
      unit: 'mmHg',
    },
    interpretation: 'critical',
    isModified: true,
    hasComment: true,
  },
};
for (let i = 1; i < 102; i += 1) {
  testExtremeWidthBloodPressure[i] = {
    id: '1602328271-2',
    systolic: {
      eventId: '1602328271-2.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
    },
    diastolic: {
      eventId: '1602328271-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
    },
  };
}

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={results} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues2} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues3} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={testExtremeWidthBloodPressure} hideUnit />
      </div>
    </div>
    <div className={cx(['mock-flowsheet-resultcolumn', 'half-column'])}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={results} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues2} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues3} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={testExtremeWidthBloodPressure} hideUnit />
      </div>
    </div>
    <div className={cx(['mock-flowsheet-resultcolumn', 'half-column'])}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        { /* cell intentionally left empty */}
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        { /* cell intentionally left empty */}
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        { /* cell intentionally left empty */}
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        { /* cell intentionally left empty */}
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        { /* cell intentionally left empty */}
      </div>
    </div>
    <div className={cx(['mock-flowsheet-resultcolumn', 'triple-column'])}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={results} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues2} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues3} />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'with-padding'])}>
        &larr; 2nd column shows when cells are smaller than 10em minWidth
      </div>
    </div>
  </React.Fragment>
);
