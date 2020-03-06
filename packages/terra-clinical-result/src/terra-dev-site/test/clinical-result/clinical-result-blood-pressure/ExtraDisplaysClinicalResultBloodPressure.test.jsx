import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib';
import { ExtraDisplaysBloodPressureResult } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure {...ExtraDisplaysBloodPressureResult} />
);

export default ClinicalResultBloodPressureExample;
