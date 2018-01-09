import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <span>
    <ItemDisplay text="Attention" textStyle="attention" isInvalid />
    <ItemDisplay text="Strong" textStyle="strong" isInvalid />
    <ItemDisplay text="Secondary" textStyle="secondary" isInvalid />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" isInvalid />
  </span>
);

export default component;
