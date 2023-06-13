import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const resultData = {
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    status: 'entered-in-error',
  },
  diastolic: {
    eventId: '111.1',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    status: 'entered-in-error',
  },
};

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure {...resultData} hideUnit hasComment />
);

export default ClinicalResultBloodPressureExample;
