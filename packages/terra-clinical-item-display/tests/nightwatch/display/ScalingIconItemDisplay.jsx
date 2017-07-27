import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../lib/ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Default" />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Larger" style={{ fontSize: '30px' }} />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Smaller" style={{ fontSize: '10px' }} />
  </div>
);

export default views;
