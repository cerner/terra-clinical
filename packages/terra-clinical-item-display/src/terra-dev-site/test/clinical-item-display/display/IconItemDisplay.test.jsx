import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../../ItemDisplay';

const testStyle = {
  padding: '10px 0',
};

const testText = 'Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text';

export default () => (
  <div style={testStyle}>
    <ItemDisplay text={`Center / default - ${testText}`} icon={<IconSuccess />} id="test-icon-center" />
    <br />
    <ItemDisplay text={`Top - ${testText}`} icon={<IconSuccess />} id="test-icon-top" iconAlignment="top" />
    <br />
    <ItemDisplay text={`Inline - ${testText}`} icon={<IconSuccess />} id="test-icon-inline" iconAlignment="inline" />
  </div>
);
