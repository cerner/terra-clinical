import React from 'react';

import LabelValueView from '../../../LabelValueView';

/* eslint-disable react/forbid-dom-props */
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
/* eslint-enable react/forbid-dom-props */

export default examples;
