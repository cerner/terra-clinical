import React from 'react';
import ItemDisplay from '../../../ItemDisplay';

const component = () => (
  <span>
    <ItemDisplay.Comment text="Comment" />
    <ItemDisplay.Comment text="Disabled Comment" isDisabled />
  </span>
);

export default component;
