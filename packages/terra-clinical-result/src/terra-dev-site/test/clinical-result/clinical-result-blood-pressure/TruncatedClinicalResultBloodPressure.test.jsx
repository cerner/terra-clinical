import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

export default () => (
  <div>
    <ClinicalResultBloodPressure
      {...{
        systolic: {
          eventId: '111.1',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785',
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
      {...{
        systolic: {
          eventId: '111.1',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785',
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
    <ClinicalResultBloodPressure
      {...{
        systolic: {
          eventId: '111.1',
          result: {
            value: '354.23377777758678567867856785687678567856767868678567856785',
            unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
          },
          isModified: true,
          hasComment: true,
          isUnverified: true,
          conceptDisplay: 'Blood Pressure Systolic Blood Pressure Systolic Blood Pressure Systolic Blood Pressure Systolic Blood Pressure Systolic',
          datetimeDisplay: 'Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31',
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
          conceptDisplay: 'Blood Pressure Diastolic Blood Pressure Diastolic Blood Pressure Diastolic Blood Pressure Diastolic Blood Pressure Diastolic',
          datetimeDisplay: 'Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31 Nov 23, 2019 13:31:31',
        },
      }}
      isTruncated
    />
  </div>
);
