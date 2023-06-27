import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const multipleResultsGraySymbol = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
  },
];

const multipleResultsLightRedSymbol = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    interpretation: 'high',
  },
];

const multipleResultsDarkRedSymbol = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    interpretation: 'critical',
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
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={multipleResultsGraySymbol} hideUnit />
        </div>
      </div>
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={multipleResultsLightRedSymbol} hideUnit />
        </div>
      </div>
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={multipleResultsDarkRedSymbol} hideUnit />
        </div>
      </div>
    </div>
  );
};
