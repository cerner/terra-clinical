import React from 'react';
import ItemDisplay from '../../../ItemDisplay';

const component = () => (
  <span>
    <ItemDisplay text="Attention" textStyle="attention" />
    <ItemDisplay text="Strong" textStyle="strong" />
    <ItemDisplay text="Secondary" textStyle="secondary" />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />
  </span>
);

export default component;
