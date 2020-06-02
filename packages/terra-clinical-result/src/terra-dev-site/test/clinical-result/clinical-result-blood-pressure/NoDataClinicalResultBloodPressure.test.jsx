import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import { DefaultSystolicResult, DefaultDiastolicResult, NoDataResult } from '../TestResults';

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure systolic={DefaultSystolicResult} />
    <ClinicalResultBloodPressure diastolic={DefaultDiastolicResult} />
    <ClinicalResultBloodPressure
      systolic={DefaultSystolicResult}
      diastolic={NoDataResult}
    />
    <ClinicalResultBloodPressure
      systolic={NoDataResult}
      diastolic={DefaultDiastolicResult}
    />
  <ClinicalResultBloodPressure systolic={null} diastolic={null} />
    <ClinicalResultBloodPressure
      systolic={NoDataResult}
      diastolic={NoDataResult}
    />
  </>
);
export default ClinicalResultBloodPressureExample;
