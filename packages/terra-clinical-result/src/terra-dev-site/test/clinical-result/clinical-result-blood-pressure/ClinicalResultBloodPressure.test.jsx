import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultBloodPressureResult } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure {...DefaultBloodPressureResult} />
);

export default ClinicalResultBloodPressureExample;
