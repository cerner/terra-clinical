import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../../ItemDisplay';

const testText = 'Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test Text';

export default () => (
  <React.Fragment>
    <ItemDisplay text={`Center / default - ${testText}`} icon={<IconSuccess />} id="test-icon-center" />
    <br />
    <ItemDisplay text={`Top - ${testText}`} icon={<IconSuccess />} id="test-icon-top" iconAlignment="top" />
    <br />
    <ItemDisplay text={`Inline - ${testText}`} icon={<IconSuccess />} id="test-icon-inline" iconAlignment="inline" />
  </React.Fragment>
);
