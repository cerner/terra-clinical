import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

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
