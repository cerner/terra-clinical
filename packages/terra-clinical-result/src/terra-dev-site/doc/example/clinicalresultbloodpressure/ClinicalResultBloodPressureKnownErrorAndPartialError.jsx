import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const partialResultValueWithNoSystolic = {
  id: '111',
  diastolic: {
    eventId: '111.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const partialResultValueWithNoDiastolic = {
  id: '222',
  systolic: {
    eventId: '222.1',
    result: {
      value: '140',
      unit: 'mmHg',
    },
    interpretation: 'HIGH',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

export default () => (
  <React.Fragment>
    <ClinicalResultBloodPressure hasResultError />
    <br />
    <br />
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoSystolic} />
    <br />
    <br />
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoDiastolic} />
  </React.Fragment>
);
