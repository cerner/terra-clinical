import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ItemDisplay from 'terra-clinical-item-display/lib/ItemDisplay';

const component = () => (
  <React.Fragment>
    <ItemDisplay text="Primary" />
    <ItemDisplay text="Strong" textStyle="strong" />
    <ItemDisplay text="Attention" textStyle="attention" />
    <ItemDisplay text="Secondary" textStyle="secondary" />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />
  </React.Fragment>
);

export default component;
