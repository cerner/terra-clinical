import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DecoratedBloodPressureResult1, DecoratedBloodPressureResult2 } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure resultData={DecoratedBloodPressureResult1} />
    <ClinicalResultBloodPressure resultData={DecoratedBloodPressureResult2} />
  </>
);

export default ClinicalResultBloodPressureExample;
