/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ItemViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-view-tests/default">Default ItemView</Link></li>
      <li><Link to="/tests/item-view-tests/displays">Displays ItemView</Link></li>
      <li><Link to="/tests/item-view-tests/accessory">Accessory ItemView</Link></li>
      <li><Link to="/tests/item-view-tests/comment">Comment ItemView</Link></li>
    </ul>
  </div>
);

export default ItemViewTests;
