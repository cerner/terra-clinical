/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ItemCollectionTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-collection-tests/all">Item Collection - All Elements</Link></li>
      <li><Link to="/tests/item-collection-tests/selectable">Item Collection - Selectable Example</Link></li>
      <li><Link to="/tests/item-collection-tests/varying-items">Item Collection - Varying Items Example</Link></li>
      <li><Link to="/tests/item-collection-tests/table-styles">Item Collection - Table Styles</Link></li>
      <li><Link to="/tests/item-collection-tests/list-styles">Item Collection - List Styles</Link></li>
      <li><Link to="/tests/item-collection-tests/item-styles">Item Collection - Item Styles</Link></li>
    </ul>
  </div>
);


export default ItemCollectionTests;
