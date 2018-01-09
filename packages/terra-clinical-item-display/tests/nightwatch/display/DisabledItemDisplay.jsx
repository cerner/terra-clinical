import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../lib/ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="test text" id="test-display-text" isInvalid />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="test-display-icon" isInvalid />
  </div>
);

export default views;
