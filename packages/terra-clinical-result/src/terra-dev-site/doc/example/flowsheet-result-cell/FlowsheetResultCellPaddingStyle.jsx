import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const multipleResultBPValues = [
  {
    id: '1602328271-1',
    systolic: {
      eventId: '1602328271-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'high',
      isModified: true,
      hasComment: true,
    },
    diastolic: {
      eventId: '1602328271-1.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'low',
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
      interpretation: 'high',
      isModified: true,
      hasComment: true,
    },
    diastolic: {
      eventId: '1602328271-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'low',
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
    isNumeric: true,
    isUnverified: true,
  },
];

export default () => {
  const theme = React.useContext(ThemeContext);
  const mockFlowsheetClassnames = classNames(
    cx(
      'mock-flowsheet-example',
      theme.className,
    ),
  );

  return (
    <div className={mockFlowsheetClassnames}>
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
      </div>
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
      </div>
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
      </div>
    </div>
  );
};
