import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib';

const singleResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

export default () => <ClinicalResult resultData={singleResultValue} isModified hasComment />;
