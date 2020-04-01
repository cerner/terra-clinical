import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, {
  DefaultBloodPressureResult,
  EnteredInErrorResult,
  EnteredInErrorSysBPResult,
  EnteredInErrorDiaBPResult
} from '../TestResults';

const results1 = [
  DefaultResult,
  EnteredInErrorResult,
];

const results2 = [
  EnteredInErrorResult,
  DefaultResult,
];

const BPresults1 = [
  DefaultBloodPressureResult,
  EnteredInErrorSysBPResult,
];

const BPresults2 = [
  EnteredInErrorSysBPResult,
  DefaultBloodPressureResult,
];

const BPresults3 = [
  DefaultBloodPressureResult,
  EnteredInErrorDiaBPResult,
];

const BPresults4 = [
  EnteredInErrorDiaBPResult,
  DefaultBloodPressureResult,
];

const ResultTimeHeaderCellExample = () => (
  <>
    <FlowsheetResultCell resultDataSet={results1} />
    <FlowsheetResultCell resultDataSet={results2} />
    <FlowsheetResultCell resultDataSet={BPresults1} />
    <FlowsheetResultCell resultDataSet={BPresults2} />
    <FlowsheetResultCell resultDataSet={BPresults3} />
    <FlowsheetResultCell resultDataSet={BPresults4} />
  </>
);

export default ResultTimeHeaderCellExample;
