import React from 'react';
import ClinicalResult from '../../../../ClinicalResult';
import DefaultResult from '../TestResults';

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
