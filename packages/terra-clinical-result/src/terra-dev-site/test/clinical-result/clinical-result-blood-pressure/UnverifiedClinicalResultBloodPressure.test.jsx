import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { UnverifiedBloodPressureResult1, UnverifiedBloodPressureResult2 } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure {...UnverifiedBloodPressureResult1} />
    <ClinicalResultBloodPressure {...UnverifiedBloodPressureResult2} />
  </>
);

export default ClinicalResultBloodPressureExample;
