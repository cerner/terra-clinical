import React from 'react';
import ItemCollection from '../../../../lib/ItemCollection';
import item from '../Item';

const MediumBreakpointItemCollection = () => (
  <ItemCollection
    breakpoint="medium"
    rows={[item, item, item]}
    id="ItemCollection"
  />
);

export default MediumBreakpointItemCollection;
