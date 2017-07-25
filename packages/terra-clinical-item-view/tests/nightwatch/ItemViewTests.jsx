/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ItemViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-view-tests/default">ItemView - Default</Link></li>
      <li><Link to="/tests/item-view-tests/displays">ItemView - Displays</Link></li>
      <li><Link to="/tests/item-view-tests/accessory">ItemView - Accesory</Link></li>
      <li><Link to="/tests/item-view-tests/comment">ItemView - Comment</Link></li>
      <li><Link to="/tests/item-view-tests/overflow">ItemView - Word Wrap vs Truncated</Link></li>
    </ul>
  </div>
);

export default ItemViewTests;
