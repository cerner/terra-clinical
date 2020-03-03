import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DefaultBloodPressureResult } from '../TestResults';

const results = [
  DefaultResult,
  DefaultBloodPressureResult,
];

const ResultTimeHeaderCellExample = () => (
  <>
    <FlowsheetResultCell resultDataSet={results} paddingStyle="none" />
    <FlowsheetResultCell resultDataSet={results} paddingStyle="standard" />
    <FlowsheetResultCell resultDataSet={results} paddingStyle="compact" />
  </>
);

export default ResultTimeHeaderCellExample;
