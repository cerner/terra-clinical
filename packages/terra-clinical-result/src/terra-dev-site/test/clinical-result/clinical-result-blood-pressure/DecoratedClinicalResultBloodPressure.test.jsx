import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DecoratedBloodPressureResult1, DecoratedBloodPressureResult2 } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure {...DecoratedBloodPressureResult1} />
    <ClinicalResultBloodPressure {...DecoratedBloodPressureResult2} />
  </>
);

export default ClinicalResultBloodPressureExample;
