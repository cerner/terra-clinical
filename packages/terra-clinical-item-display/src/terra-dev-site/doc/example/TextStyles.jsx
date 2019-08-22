import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <React.Fragment>
    <ItemDisplay text="Default (same as Primary)" />
    <ItemDisplay text="Primary" textStyle="primary" />
    <ItemDisplay text="Strong" textStyle="strong" />
    <ItemDisplay text="Attention" textStyle="attention" />
    <ItemDisplay text="Secondary" textStyle="secondary" />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />
  </React.Fragment>
);

export default component;
