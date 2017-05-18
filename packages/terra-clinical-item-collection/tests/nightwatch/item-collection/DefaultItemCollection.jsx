import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const DefaultItemCollection = () => (
  <ItemCollection
    rows={[item, item, item, item]}
  />
);

export default DefaultItemCollection;
