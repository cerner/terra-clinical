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
    status: 'entered-in-error',
    interpretation: 'critical',
    hasComment: true,
    conceptDisplay: 'Blood Pressure (Supine)',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    status: 'entered-in-error',
    interpretation: 'low',
    hasComment: false,
    conceptDisplay: 'Blood Pressure (Supine)',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
};

export default () => <ClinicalResultBloodPressure {...bloodpressureResultValue} />;
