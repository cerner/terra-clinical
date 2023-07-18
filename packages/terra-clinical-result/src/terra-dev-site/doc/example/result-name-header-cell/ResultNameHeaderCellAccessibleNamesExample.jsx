import React from 'react';
import { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const ResultNameHeaderCellAccessibleNamesExample = () => {
  const theme = React.useContext(ThemeContext);
  const mockFlowsheetClassnames = classNames(
    cx(
      'mock-flowsheet-example',
      theme.className,
    ),
  );

  return (
    <div className={mockFlowsheetClassnames}>
      <div className={cx('mock-flowsheet-firstcolumn')}>
        <div className={cx('mock-flowsheet-firstcolumn-cell')}>
          <ResultNameHeaderCell resultName="Temp" fullResultName="Temperature" unit="degC" fullUnit="Degrees Celsius" />
        </div>
      </div>
    </div>
  );
};

export default ResultNameHeaderCellAccessibleNamesExample;
