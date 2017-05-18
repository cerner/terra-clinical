import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

/* eslint-disable no-alert */
const DefaultItemCollection = () => (
  <ItemCollection
    rows={[item, item, item, item]}
    onChange={() => alert('onchange happened')}
  />
);
/* eslint-enable no-alert */

export default DefaultItemCollection;
