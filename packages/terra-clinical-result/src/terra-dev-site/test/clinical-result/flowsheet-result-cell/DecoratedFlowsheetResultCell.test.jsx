import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DecoratedResult, DefaultBloodPressureResult, DecoratedBloodPressureResult1, DecoratedBloodPressureResult2 } from '../TestResults';

const results1 = [
  DecoratedResult,
  DefaultBloodPressureResult,
];

const results2 = [
  DecoratedBloodPressureResult1,
  DefaultResult,
];

const results3 = [
  DecoratedBloodPressureResult2,
  DefaultResult,
];

const ResultTimeHeaderCellExample = () => (
  <>
    <FlowsheetResultCell resultDataSet={results1} />
    <FlowsheetResultCell resultDataSet={results2} />
    <FlowsheetResultCell resultDataSet={results3} />
  </>
);

export default ResultTimeHeaderCellExample;
