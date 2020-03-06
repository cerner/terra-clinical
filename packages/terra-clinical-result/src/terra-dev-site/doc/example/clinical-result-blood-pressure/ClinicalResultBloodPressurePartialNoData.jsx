import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const partialResultValueWithNoDataPropSystolic = {
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
    interpretation: 'critical',
  },
};

const partialResultValueWithNoDataPropDiastolic = {
  id: '222',
  systolic: {
    eventId: '222.1',
    result: {
      value: '140',
      unit: 'mmHg',
    },
    interpretation: 'high',
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
    },
  },
  diastolic: {
    eventId: '333.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
    interpretation: 'critical',
  },
};

export default () => (
  <React.Fragment>
    {/* This example shows the No Data display using the `resultNoData` property name for Systolic */}
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataPropSystolic} />
    <br />
    <br />
    {/* This example shows the No Data display using the `resultNoData` property name for Diastolic */}
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataPropDiastolic} />
    <br />
    <br />
    {/* This example column shows the No Data display using `result: { value: null, }` for Systolic */}
    <ClinicalResultBloodPressure resultData={partialResultValueWithNullValue} />
  </React.Fragment>
);
