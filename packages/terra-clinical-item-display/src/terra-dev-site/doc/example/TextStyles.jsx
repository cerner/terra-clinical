import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ItemDisplay from 'terra-clinical-item-display/lib/ItemDisplay';

const component = () => (
  <span>
    <ItemDisplay text="Attention" textStyle="attention" />
    <ItemDisplay text="Strong" textStyle="strong" />
    <ItemDisplay text="Secondary" textStyle="secondary" />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />
  </span>
);

export default component;
