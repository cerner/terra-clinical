import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import {
  DefaultSystolicResult,
  DefaultDiastolicResult,
  NoDataResult,
  DefaultBloodPressureSystolicResultWithNoId,
  DefaultBloodPressureDiastolicResultWithNoId
} from '../TestResults';

const noDataDiastolic = {
  systolic: {
    ...DefaultSystolicResult,
  },
  diastolic: {
    ...NoDataResult,
  },
};

const noDataSystolic = {
  systolic: {
    ...NoDataResult,
  },
  diastolic: {
    ...DefaultDiastolicResult,
  },
};

const noData = {
  systolic: {
    ...NoDataResult,
  },
  diastolic: {
    ...NoDataResult,
  },
};

const ClinicalResultBloodPressureExample = () => (
  <>
    <ClinicalResultBloodPressure {...DefaultBloodPressureSystolicResultWithNoId} />
    <ClinicalResultBloodPressure {...DefaultBloodPressureDiastolicResultWithNoId} />
    <ClinicalResultBloodPressure {...noDataDiastolic} />
    <ClinicalResultBloodPressure {...noDataSystolic} />
    <ClinicalResultBloodPressure {...noData} />
  </>
);

export default ClinicalResultBloodPressureExample;
