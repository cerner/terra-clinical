import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { ExtraDisplaysBloodpressureResult } from './TestResults';

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure resultData={ExtraDisplaysBloodpressureResult} />
);

export default ClinicalResultBloodPressureExample;
