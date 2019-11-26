import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DecoratedBloodpressureResult } from './TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={DecoratedBloodpressureResult} />
);

export default ClinicalResultBloodPressureExample;
