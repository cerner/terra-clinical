import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DefaultBloodPressureResult } from '../TestResults';

const results = [
  DefaultResult,
  DefaultBloodPressureResult,
  DefaultResult,
  DefaultBloodPressureResult,
  DefaultResult,
  DefaultBloodPressureResult,
  DefaultResult,
  DefaultBloodPressureResult,
  DefaultResult,
  DefaultBloodPressureResult,
  DefaultResult,
  DefaultBloodPressureResult,
];

const ResultTimeHeaderCellExample = () => (
  <FlowsheetResultCell resultDataSet={results} />
);

export default ResultTimeHeaderCellExample;
