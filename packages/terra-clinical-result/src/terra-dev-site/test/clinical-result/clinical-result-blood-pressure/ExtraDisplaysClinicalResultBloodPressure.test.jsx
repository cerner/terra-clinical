import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib';
import { ExtraDisplaysBloodPressureResult } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={ExtraDisplaysBloodPressureResult} />
);

export default ClinicalResultBloodPressureExample;
