import React from 'react';
import { ResultTimeHeaderCell } from 'terra-clinical-result/lib';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const ResultTimeHeaderFlowsheetExample = () => {
  const theme = React.useContext(ThemeContext);
  const mockFlowsheetClassnames = classNames(
    cx(
      'mock-flowsheet-example',
      theme.className,
    ),
  );

  return (
    <div className={mockFlowsheetClassnames}>
      <div className={cx('mock-flowsheet-header')}>
        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>
          <ResultTimeHeaderCell date="Dec 20, 2010" time="21:00" />
        </div>
        <div className={cx('mock-flowsheet-header-cell')}>
          <ResultTimeHeaderCell date="Dec 20, 2010" time="22:00" hideDate />
        </div>
        <div className={cx('mock-flowsheet-header-cell')}>
          <ResultTimeHeaderCell date="Dec 20, 2010" time="23:59" hideDate />
        </div>
        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>
          <ResultTimeHeaderCell date="Dec 21, 2010" time="00:15" />
        </div>
        <div className={cx('mock-flowsheet-header-cell')}>
          <ResultTimeHeaderCell date="Dec 21, 2010" time="03:00" hideDate />
        </div>
        <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>
          <ResultTimeHeaderCell date="Dec 22, 2010" time="07:00" />
        </div>
        <div className={cx('mock-flowsheet-header-cell')}>
          <ResultTimeHeaderCell date="Dec 22, 2010" time="11:00" hideDate />
        </div>
      </div>
    </div>
  );
};

export default ResultTimeHeaderFlowsheetExample;
