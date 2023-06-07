import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

const LabelValueViewText = () => (
  <div>
    <style>
      {`
        #dl-wrapper > dd {
          margin-bottom: 14px;
        }
      `}
    </style>
    <dl id="dl-wrapper">
      <LabelValueView label="Collected By" textValue="Noah Brown" childOfDescriptionList />
      <LabelValueView label="Date" textValue="12/12/12 00:00AM" childOfDescriptionList />
      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" childOfDescriptionList />
      <LabelValueView label="Temperature" textValue="97 F" childOfDescriptionList />
      <LabelValueView label="Heart Rate" textValue="80 BPM" childOfDescriptionList />
    </dl>
  </div>
);

export default LabelValueViewText;
