import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DefaultBloodpressureResult } from './TestResults';

const results = [
  DefaultResult,
  DefaultBloodpressureResult,
];

const ResultTimeHeaderCellExample = () => (
  <FlowsheetResultCell resultDataSet={results} />
);

export default ResultTimeHeaderCellExample;
