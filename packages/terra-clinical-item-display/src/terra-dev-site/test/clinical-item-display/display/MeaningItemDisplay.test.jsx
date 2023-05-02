import React from 'react';

import ItemDisplay from '../../../../ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="test text" textStyle="attention" id="test-display-attention-meaning" meaning="Important" />
    <ItemDisplay text="test text (default meaning)" textStyle="strikeThrough" id="test-display-strike-through-default" />
    <ItemDisplay text="test text" textStyle="strikeThrough" id="test-display-strike-through-meaning" meaning="Update" />
  </div>
);

export default views;
