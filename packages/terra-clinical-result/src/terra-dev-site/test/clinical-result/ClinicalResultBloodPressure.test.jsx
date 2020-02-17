import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultBloodPressureResult } from './TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={DefaultBloodPressureResult} />
);

export default ClinicalResultBloodPressureExample;
