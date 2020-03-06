import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '120',
      unit: 'mmHg',
    },
    isUnverified: true,
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    isUnverified: true,
  },
};

export default () => <ClinicalResultBloodPressure {...bloodpressureResultValue} hideUnit />;
