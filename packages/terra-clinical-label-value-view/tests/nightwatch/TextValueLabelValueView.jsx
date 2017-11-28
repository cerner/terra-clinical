import React from 'react';

import LabelValueView from '../../lib/LabelValueView';

const examples = () => (
  <div>
    <h3>Default Example:</h3>
    <LabelValueView id="LabelValueView" label="Label" textValue="Sample Text" />
    <h3>Applied max-width of 200px to show word wrapping:</h3>
    <div style={{ maxWidth: '200px' }}>
      <LabelValueView id="LongLabelValueView" label="supercalifragilisticexpialidocious" textValue="supercalifragilisticexpialidocious" />
    </div>
  </div>
);

export default examples;
