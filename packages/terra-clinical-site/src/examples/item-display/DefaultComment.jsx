import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <span>
    <ItemDisplay.Comment text="Comment" />
    <ItemDisplay.Comment text="Invalid Comment" isInvalid />
  </span>
);

export default component;
