import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const partialResultValueWithNoDataKeySystolic = {
  id: '111',
  systolic: {
    eventId: '111.1',
    resultNoData: true,
  },
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

const partialResultValueWithNoDataKeyDiastolic = {
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
  diastolic: {
    eventId: '222.2',
    resultNoData: true,
  },
};

const partialResultValueWithNullValue = {
  id: '333',
  systolic: {
    eventId: '333.1',
    result: {
      value: null,
      unit: '',
    },
  },
  diastolic: {
    eventId: '333.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

export default () => (
  <React.Fragment>
  <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataKeySystolic} />
  <br />
  <br />
  <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataKeyDiastolic} />
  <br />
  <br />
  <ClinicalResultBloodPressure resultData={partialResultValueWithNullValue} />
  </React.Fragment>
);
