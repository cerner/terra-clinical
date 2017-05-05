/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DisplayTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-display-tests/default">Default Item Display</Link></li>
      <li><Link to="/tests/item-display-tests/text-style">TextStyle Item Display</Link></li>
      <li><Link to="/tests/item-display-tests/icon">Icon Item Display</Link></li>
    </ul>
  </div>
);

export default DisplayTests;
