import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultSystolicResult, DefaultDiastolicResult } from '../TestResults';

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

const interpretationDivs = interpretations.map((interpretation => (
  <div key={interpretation}>
    <ClinicalResultBloodPressure {...
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
