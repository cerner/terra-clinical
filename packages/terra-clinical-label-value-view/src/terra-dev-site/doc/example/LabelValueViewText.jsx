import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

const LabelValueViewText = () => (
  <div>
    <LabelValueView label="Collected By" textValue="Noah Brown" />
    <LabelValueView label="Date" textValue="12/12/12 00:00AM" />
    <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" />
    <LabelValueView label="Temperature" textValue="97 F" />
    <LabelValueView label="Heart Rate" textValue="80 BPM" />
  </div>
);

export default LabelValueViewText;
