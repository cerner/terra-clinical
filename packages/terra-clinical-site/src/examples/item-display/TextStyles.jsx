import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <span>
    <ItemDisplay text="Attention" textStyle="attention" />
    <ItemDisplay text="Strong" textStyle="strong" />
    <ItemDisplay text="Secondary" textStyle="secondary" />
    <ItemDisplay text="Disabled" textStyle="disabled" />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />
  </span>
);

export default component;
