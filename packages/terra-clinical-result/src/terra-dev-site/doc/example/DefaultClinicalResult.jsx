import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const singleResultValue = {
  eventId: '111',
  valueQuantity: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'CRITICAL',
  isModified: true,
  hasComment: true,
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
  isTruncated: false,
};

export default () => <ClinicalResult resultData={singleResultValue} />;
