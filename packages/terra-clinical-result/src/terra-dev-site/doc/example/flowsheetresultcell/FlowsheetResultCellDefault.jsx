import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';

const singleResultValue = [
  {
    eventId: '111',
    result: {
      value: '12345.678',
      unit: 'mL',
    },
    isUnverified: true,
    resultDateTime: '10/10/2020 11:11:11',
  },
];

export default () => <FlowsheetResultCell resultDataSet={singleResultValue} />;
