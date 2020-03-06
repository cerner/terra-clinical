import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { UnverifiedBloodPressureResult1, UnverifiedBloodPressureResult2 } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure resultData={UnverifiedBloodPressureResult1} />
    <ClinicalResultBloodPressure resultData={UnverifiedBloodPressureResult2} />
  </>
);

export default ClinicalResultBloodPressureExample;
