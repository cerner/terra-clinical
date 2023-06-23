import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

const LabelValueViewText = () => (
  <div>
    <h4 id="topicText">Topic text for the LabelValueView</h4>
    <LabelValueView label="Label" textValue="Sample Text as Value" topicTextId="topicText" />
  </div>
);

export default LabelValueViewText;
