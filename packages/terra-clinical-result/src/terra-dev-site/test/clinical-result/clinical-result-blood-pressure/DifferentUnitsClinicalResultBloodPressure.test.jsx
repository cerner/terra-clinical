import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const resultData = {
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
  },
  diastolic: {
    eventId: '111.1',
    result: {
      value: '80',
      unit: 'mm Hg',
    },
  },
};

const ClinicalResultBloodPressureExample = () => (
  <ClinicalResultBloodPressure {...resultData} />
);

export default ClinicalResultBloodPressureExample;
