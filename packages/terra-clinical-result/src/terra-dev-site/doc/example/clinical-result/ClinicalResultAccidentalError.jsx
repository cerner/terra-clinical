import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const malformedResultValue = {
  eventId: '111',
  temperature: {
    result: {
      value: '12345.678',
      unit: 'mL',
    },
  },
};

export default () => <ClinicalResult resultData={malformedResultValue} />;
