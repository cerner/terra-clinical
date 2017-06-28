import React from 'react';
import ItemCollection from '../../../../lib/ItemCollection';
import item from '../Item';

const LargeBreakpointItemCollection = () => (
  <ItemCollection
    breakpoint="large"
    rows={[item, item, item]}
  />
);

export default LargeBreakpointItemCollection;
