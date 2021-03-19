import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const bloodpressureResultValue = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
    },
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
          <FlowsheetResultCell resultDataSet={bloodpressureResultValue} hideUnit />
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
