import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultSystolicResult, DefaultDiastolicResult } from '../TestResults';

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

const interpretationDivs = interpretations.map((interpretation => (
  <div key={interpretation}>
    <ClinicalResultBloodPressure resultData={
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
      }
    }
    />
  </div>
)));

export default () => (
  <>
    {interpretationDivs}
  </>
);
