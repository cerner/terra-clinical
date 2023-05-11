import React from 'react';

import ItemDisplay from '../../../../ItemDisplay';

const views = () => (
  <div>
    <ItemDisplay text="test text" textStyle="attention" id="test-display-attention-meaning" textStyleMeaning="Important" />
    <ItemDisplay text="test text (default)" textStyle="strikeThrough" id="test-display-strike-through-default" />
    <ItemDisplay text="test text" textStyle="strikeThrough" id="test-display-strike-through-meaning" textStyleMeaning="Update" />
  </div>
);

export default views;
