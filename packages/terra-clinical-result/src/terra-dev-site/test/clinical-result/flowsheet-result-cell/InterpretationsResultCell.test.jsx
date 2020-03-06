import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import DefaultResult, { DefaultSystolicResult, DefaultDiastolicResult } from '../TestResults';

const interpretations = [
  'critical',
  'critical-high',
  'critical-low',
  'positive',
  'abnormal',
  'high',
  'low',
  'normal',
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
