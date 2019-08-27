import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <React.Fragment>
    <ItemDisplay text="Default" isDisabled />
    <ItemDisplay text="Primary" textStyle="primary" isDisabled />
    <ItemDisplay text="Strong" textStyle="strong" isDisabled />
    <ItemDisplay text="Attention" textStyle="attention" isDisabled />
    <ItemDisplay text="Secondary" textStyle="secondary" isDisabled />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" isDisabled />
  </React.Fragment>
);

export default component;
