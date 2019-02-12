import React from 'react';

import LabelValueView from '../../../LabelValueView';

export default () => (
  <LabelValueView label="Label" textValue="Some Sample Text">
    <div id="child">
      <h2>Sample Title</h2>
      Sample Text to Follow
    </div>
  </LabelValueView>
);
