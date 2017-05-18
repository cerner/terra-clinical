import React from 'react';
import ItemCollection from '../../../../lib/ItemCollection';
import item from '../Item';

const TinyBreakpointItemCollection = () => (
  <ItemCollection
    breakpoint="tiny"
    rows={[item, item, item]}
  />
);

export default TinyBreakpointItemCollection;
