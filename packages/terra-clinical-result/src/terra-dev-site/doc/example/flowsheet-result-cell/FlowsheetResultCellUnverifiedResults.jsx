import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const unverifiedResultValue = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    interpretation: 'critical',
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
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit />
        </div>
        <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
        <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
      </div>
    </div>
  );
};
