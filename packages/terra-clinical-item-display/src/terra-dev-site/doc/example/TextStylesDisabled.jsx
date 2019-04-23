import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ItemDisplay from 'terra-clinical-item-display/lib/ItemDisplay';

const component = () => (
  <React.Fragment>
    <ItemDisplay text="Primary" isDisabled />
    <ItemDisplay text="Strong" textStyle="strong" isDisabled />
    <ItemDisplay text="Attention" textStyle="attention" isDisabled />
    <ItemDisplay text="Secondary" textStyle="secondary" isDisabled />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" isDisabled />
  </React.Fragment>
);

export default component;
