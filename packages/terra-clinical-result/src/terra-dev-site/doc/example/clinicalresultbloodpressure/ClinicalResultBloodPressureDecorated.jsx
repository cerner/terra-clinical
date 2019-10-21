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
    isModified: true,
    hasComment: true,
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '7777',
      unit: 'mL',
    },
    isModified: true,
    hasComment: true,
  },
};

export default () => <ClinicalResultBloodPressure resultData={bloodpressureResultValue} />;