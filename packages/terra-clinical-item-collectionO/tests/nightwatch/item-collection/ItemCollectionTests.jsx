/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ItemCollectionTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-collection-tests/default">Item Collection - Default</Link></li>
      <li><Link to="/tests/item-collection-tests/tiny-breakpoint">Item Collection - Tiny Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/small-breakpoint">Item Collection - Small Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/medium-breakpoint">Item Collection - Medium Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/large-breakpoint">Item Collection - Large Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/huge-breakpoint">Item Collection - Huge Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/all-breakpoints">Item Collection - Compare All Breakpoints</Link></li>
      <li><Link to="/tests/item-collection-tests/table-styles">Item Collection - Table Styles</Link></li>
      <li><Link to="/tests/item-collection-tests/list-styles">Item Collection - List Styles</Link></li>
      <li><Link to="/tests/item-collection-tests/item-styles">Item Collection - Item Styles</Link></li>
      <li><Link to="/tests/item-collection-tests/onchange">Item Collection - OnChange</Link></li>
      <li><Link to="/tests/item-collection-tests/varying-items">Item Collection - Varying Items</Link></li>
    </ul>
  </div>
);

export default ItemCollectionTests;
