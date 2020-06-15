import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib';

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '120',
      unit: 'mmHg',
    },
    conceptDisplay: 'Blood Pressure Systolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    conceptDisplay: 'Blood Pressure Diastolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:44',
  },
};

export default () => <ClinicalResultBloodPressure {...bloodpressureResultValue} />;
