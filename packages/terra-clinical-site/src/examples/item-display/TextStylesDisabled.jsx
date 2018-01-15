import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <span>
    <ItemDisplay text="Attention" textStyle="attention" isDisabled />
    <ItemDisplay text="Strong" textStyle="strong" isDisabled />
    <ItemDisplay text="Secondary" textStyle="secondary" isDisabled />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" isDisabled />
  </span>
);

export default component;
