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
    <h4 id="topicText">Vitals Topic Text</h4>
    <dl id="dl-wrapper" aria-labelledby="topicText">
      <LabelValueView label="Collected By" textValue="Noah Brown" isChildOfDescriptionList />
      <LabelValueView label="Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />
      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" isChildOfDescriptionList />
      <LabelValueView label="Temperature" textValue="97 F" isChildOfDescriptionList />
      <LabelValueView label="Heart Rate" textValue="80 BPM" isChildOfDescriptionList />
    </dl>
  </div>
);

export default LabelValueViewText;
