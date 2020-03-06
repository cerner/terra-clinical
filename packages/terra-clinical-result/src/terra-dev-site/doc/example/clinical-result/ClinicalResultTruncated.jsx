import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const singleResultValue = {
  eventId: '111',
  result: {
    value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
    unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
  },
  interpretation: 'critical',
  isModified: true,
  hasComment: true,
  conceptDisplay: 'Temperature Oral',
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
};

export default () => <ClinicalResult resultData={singleResultValue} isTruncated />;
