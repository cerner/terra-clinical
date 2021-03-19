import React from 'react';
import { ResultNameHeaderCell } from 'terra-clinical-result/lib';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const ResultNameColumnFlowsheetExample = () => {
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
          <ResultNameHeaderCell resultName="Temp" unit="degC" />
        </div>
        <div className={cx(['mock-flowsheet-firstcolumn-cell', 'zebra'])}>
          <ResultNameHeaderCell resultName="HR" unit="bpm" />
        </div>
        <div className={cx('mock-flowsheet-firstcolumn-cell')}>
          <ResultNameHeaderCell resultName="BP" unit="mmHg" />
        </div>
        <div className={cx(['mock-flowsheet-firstcolumn-cell', 'zebra'])}>
          <ResultNameHeaderCell resultName="Mean Arterial Pressure, Cuff" unit="mmHg" typeIndicator="calculated" />
        </div>
        <div className={cx('mock-flowsheet-firstcolumn-cell')}>
          <ResultNameHeaderCell resultName="Respiratory Rate" unit="br/min" />
        </div>
        <div className={cx(['mock-flowsheet-firstcolumn-cell', 'zebra'])}>
          <ResultNameHeaderCell resultName="SpO2" unit="%" />
        </div>
        <div className={cx('mock-flowsheet-firstcolumn-cell')}>
          <ResultNameHeaderCell resultName="Height/Length Dosing" unit="cm" />
        </div>
        <div className={cx(['mock-flowsheet-firstcolumn-cell', 'zebra'])}>
          <ResultNameHeaderCell resultName="Height/Length Measured" unit="cm" />
        </div>
        <div className={cx('mock-flowsheet-firstcolumn-cell')}>
          <ResultNameHeaderCell resultName="Weight Dosing" unit="kg" />
        </div>
        <div className={cx(['mock-flowsheet-firstcolumn-cell', 'zebra'])}>
          <ResultNameHeaderCell resultName="Weight Measured" unit="kg" />
        </div>
      </div>
    </div>
  );
};

export default ResultNameColumnFlowsheetExample;
