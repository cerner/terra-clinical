import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ItemComment from 'terra-clinical-item-display/lib/ItemComment';

const component = () => (
  <span>
    <ItemComment text="Comment" />
    <ItemComment text="Disabled Comment" isDisabled />
  </span>
);

export default component;
