import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DecoratedBloodPressureResult } from './TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={DecoratedBloodPressureResult} />
);

export default ClinicalResultBloodPressureExample;
