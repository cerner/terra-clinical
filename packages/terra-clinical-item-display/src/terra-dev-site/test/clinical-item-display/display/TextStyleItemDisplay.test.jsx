import React from 'react';

import ItemDisplay from '../../../../ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="test text" textStyle="secondary" id="test-display-secondary" />
    <ItemDisplay text="test text" textStyle="attention" id="test-display-attention" />
    <ItemDisplay text="test text" textStyle="strikeThrough" id="test-display-strike-through" />
    <ItemDisplay text="test text" textStyle="strong" id="test-display-strong" />
  </div>
);

export default views;
