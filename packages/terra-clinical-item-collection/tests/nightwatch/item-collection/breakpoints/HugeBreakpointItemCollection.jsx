import React from 'react';
import ItemCollection from '../../../../lib/ItemCollection';
import item from '../Item';

const HugeBreakpointItemCollection = () => (
  <ItemCollection
    breakpoint="huge"
    rows={[item, item, item]}
    id="ItemCollection"
  />
);

export default HugeBreakpointItemCollection;
