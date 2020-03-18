import React from 'react';
import ClinicalResult from '../../../../ClinicalResult';

export default () => (
  <>
    <ClinicalResult
      eventId="111"
      result={{
        value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857',
        unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
      }}
      isTruncated
    />
    <ClinicalResult
      eventId="111"
      result={{
        value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857',
        unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
      }}
      isTruncated
      isUnverified
      isModified
      hasComment
    />
  </>
);
