import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DefaultSystolicResult, DefaultDiastolicResult } from '../TestResults';

const interpretations = [
  'CRITICAL',
  'EXTREMEHIGH',
  'EXTREMELOW',
  'POSITIVE',
  'ABNORMAL',
  'HIGH',
  'LOW',
  'NORMAL',
];

const results = (interpretation) => [
  {
    ...DefaultResult,
    interpretation,
  },
  {
    ...DefaultResult,
    interpretation,
  },
];

const bloodPressureResults = (interpretation) => [
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      interpretation,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      interpretation,
    },
  },
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      interpretation,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      interpretation,
    },
  },
];

const interpretationDivs = interpretations.map(interpretation => (
  <div key={interpretation}>
    <FlowsheetResultCell resultDataSet={results(interpretation)} />
  </div>
));

const bloodPressureInterpretationDivs = interpretations.map(interpretation => (
  <div key={interpretation}>
    <FlowsheetResultCell resultDataSet={bloodPressureResults(interpretation)} />
  </div>
));

export default () => (
  <>
    {interpretationDivs}
    {bloodPressureInterpretationDivs}
  </>
);
