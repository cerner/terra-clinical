import React from 'react';
import ItemCollection from '../../../../lib/ItemCollection';
import item from '../Item';

const SmallBreakpointItemCollection = () => (
  <ItemCollection
    breakpoint="small"
    rows={[item, item, item]}
  />
);

export default SmallBreakpointItemCollection;
