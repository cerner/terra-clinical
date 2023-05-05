// TODO: remove this test in the next major version.

import React from 'react';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';

import ItemDisplay from '../../../../ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="test text" id="test-display-text" isDisabled />
    <ItemDisplay text="Test Text" icon={<IconCheckmark />} id="test-display-icon" isDisabled />
  </div>
);

export default views;
