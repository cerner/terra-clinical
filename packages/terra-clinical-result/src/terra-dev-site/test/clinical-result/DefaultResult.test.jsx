import React from 'react';
import ClinicalResult from '../../../ClinicalResult';

const data = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

export default () => <ClinicalResult resultData={data} />;
