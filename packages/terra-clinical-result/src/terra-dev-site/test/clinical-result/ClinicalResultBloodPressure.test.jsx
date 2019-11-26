import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultBloodpressureResult } from './TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={DefaultBloodpressureResult} />
);

export default ClinicalResultBloodPressureExample;
