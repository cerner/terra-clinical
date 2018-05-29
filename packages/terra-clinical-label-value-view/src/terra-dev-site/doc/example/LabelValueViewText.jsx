import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import LabelValueView from 'terra-clinical-label-value-view/lib/LabelValueView';

const LabelValueViewText = () => (
  <div>
    <LabelValueView label="Label" textValue="Sample Text as Value" />
  </div>
);

export default LabelValueViewText;
