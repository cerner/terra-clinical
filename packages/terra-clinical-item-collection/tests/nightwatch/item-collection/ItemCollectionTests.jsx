/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ItemCollectionTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-collection-tests/default">Default Item Collection</Link></li>
      <li><Link to="/tests/item-collection-tests/tiny-breakpoint">Item Collection With Tiny Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/small-breakpoint">Item Collection With Small Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/medium-breakpoint">Item Collection With Medium Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/large-breakpoint">Item Collection With Large Breakpoint</Link></li>
      <li><Link to="/tests/item-collection-tests/huge-breakpoint">Item Collection With Huge Breakpoint</Link></li>
    </ul>
  </div>
);

export default ItemCollectionTests;
