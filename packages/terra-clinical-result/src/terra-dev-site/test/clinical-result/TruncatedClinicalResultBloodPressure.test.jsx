import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

export default () => (
  <>
    <ClinicalResultBloodPressure
      resultData={{
        systolic: {
          eventId: '111.1',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
            unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
          },
        },
        diastolic: {
          eventId: '111.2',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
            unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
          },
        },
      }}
      isTruncated
    />
    <ClinicalResultBloodPressure
      resultData={{
        systolic: {
          eventId: '111.1',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
            unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
          },
          isModified: true,
          hasComment: true,
          isUnverified: true,
        },
        diastolic: {
          eventId: '111.2',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
            unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
          },
          isModified: true,
          hasComment: true,
          isUnverified: true,
        },
      }}
      isTruncated
    />
  </>
);
