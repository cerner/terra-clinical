import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '111111',
      unit: 'ml',
    },
    interpretation: 'CRITICAL',
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '7777',
      unit: 'mL',
    },
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',
  },
};

export default () => <ClinicalResultBloodPressure resultData={bloodpressureResultValue} />;
