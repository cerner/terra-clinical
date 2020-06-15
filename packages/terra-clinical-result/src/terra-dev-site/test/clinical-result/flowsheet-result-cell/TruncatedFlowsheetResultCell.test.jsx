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
    </div>
  </React.Fragment>
);
