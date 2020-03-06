import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import { UnverifiedResult, DefaultSystolicResult, DefaultDiastolicResult } from '../TestResults';

const results = [
  UnverifiedResult,
  UnverifiedResult,
];

const resultsAbnormal = [
  {
    ...UnverifiedResult,
    interpretation: 'ABNORMAL',
  },
  {
    ...UnverifiedResult,
    interpretation: 'ABNORMAL',
  },
];

const resultsBloodPressure = [
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      isUnverified: true,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      isUnverified: true,
    },
  },
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      isUnverified: true,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      isUnverified: true,
    },
  },
];

const resultsBloodPressureAbnormal = [
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      interpretation: 'ABNORMAL',
      isUnverified: true,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      interpretation: 'ABNORMAL',
      isUnverified: true,
    },
  },
  {
    id: '111',
    systolic: {
      ...DefaultSystolicResult,
      interpretation: 'ABNORMAL',
      isUnverified: true,
    },
    diastolic: {
      ...DefaultDiastolicResult,
      interpretation: 'ABNORMAL',
      isUnverified: true,
    },
  },
];

export default () => (
  <>
    <div>
      <div>
        <FlowsheetResultCell resultDataSet={results} />
      </div>
      <div>
        <FlowsheetResultCell resultDataSet={resultsAbnormal} />
      </div>
      <div>
        <FlowsheetResultCell resultDataSet={resultsBloodPressure} />
      </div>
      <div>
        <FlowsheetResultCell resultDataSet={resultsBloodPressureAbnormal} />
      </div>
    </div>
  </>
);
