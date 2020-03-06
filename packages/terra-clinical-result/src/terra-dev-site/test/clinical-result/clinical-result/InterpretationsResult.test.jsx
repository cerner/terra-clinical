import React from 'react';
import ClinicalResult from '../../../../ClinicalResult';
import DefaultResult from '../TestResults';

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
    <ClinicalResult resultData={
      {
        ...DefaultResult,
        interpretation,
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
