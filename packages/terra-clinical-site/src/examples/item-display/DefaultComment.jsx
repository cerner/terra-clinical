import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <span>
    <ItemDisplay.Comment text="Comment" />
    <ItemDisplay.Comment text="Disabled Comment" isDisabled />
  </span>
);

export default component;
