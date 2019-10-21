import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const data = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  isModified: true,
  hasComment: true,
};

export default () => <ClinicalResult resultData={data} />;
