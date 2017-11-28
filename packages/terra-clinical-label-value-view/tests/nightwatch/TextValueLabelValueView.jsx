import React from 'react';

import LabelValueView from '../../lib/LabelValueView';

const examples = () => (
  <div>
    <h3>Default Example:</h3>
    <LabelValueView id="LabelValueView" label="Label" textValue="Sample Text" />
    <h3>Applied max-width of 350px to show word wrapping:</h3>
    <div style={{ maxWidth: '350px' }}>
      <LabelValueView id="LongLabelValueView" label="A.really.long.label.value.view.sample.text.to.see.it.wrap.correctly." textValue="A.really.long.label.value.view.sample.text.to.see.it.wrap.correctly." />
    </div>
  </div>
);

export default examples;
