import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ItemDisplay from 'terra-clinical-item-display/lib/ItemDisplay';

const component = () => (
  <span>
    <ItemDisplay.Comment text="Comment" />
    <ItemDisplay.Comment text="Disabled Comment" isDisabled />
  </span>
);

export default component;
