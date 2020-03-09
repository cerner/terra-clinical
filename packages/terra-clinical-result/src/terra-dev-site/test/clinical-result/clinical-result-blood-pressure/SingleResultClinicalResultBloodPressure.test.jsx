import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultBloodPressureSystolicResultWithNoId, DefaultBloodPressureDiastolicResultWithNoId } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure {...DefaultBloodPressureSystolicResultWithNoId} />
    <ClinicalResultBloodPressure {...DefaultBloodPressureDiastolicResultWithNoId} />
  </>
);

export default ClinicalResultBloodPressureExample;
