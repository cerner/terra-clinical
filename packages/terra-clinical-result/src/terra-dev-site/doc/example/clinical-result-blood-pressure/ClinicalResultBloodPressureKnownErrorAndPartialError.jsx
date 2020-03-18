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
    interpretation: 'critical',
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
    interpretation: 'high',
  },
};

export default () => (
  <React.Fragment>
    {/* This example shows how to use the `hasResultError` prop */}
    <ClinicalResultBloodPressure hasResultError />
    <br />
    <br />
    {/* This example shows the error display when the Systolic property name is not present */}
    <ClinicalResultBloodPressure {...partialResultValueWithNoSystolic} />
    <br />
    <br />
    {/* This example shows the error display when the Diastolic property name is not present */}
    <ClinicalResultBloodPressure {...partialResultValueWithNoDiastolic} />
  </React.Fragment>
);
