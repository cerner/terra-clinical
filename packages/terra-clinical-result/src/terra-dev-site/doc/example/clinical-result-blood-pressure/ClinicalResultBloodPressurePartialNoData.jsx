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

export default () => (
  <React.Fragment>
    {/* This example shows the No Data display using the `resultNoData` property name for Systolic */}
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataPropSystolic} />
    <br />
    <br />
    {/* This example shows the No Data display using the `resultNoData` property name for Diastolic */}
    <ClinicalResultBloodPressure resultData={partialResultValueWithNoDataPropDiastolic} />
  </React.Fragment>
);
