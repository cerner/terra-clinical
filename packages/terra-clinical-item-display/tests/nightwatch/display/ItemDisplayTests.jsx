/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DisplayTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-display-tests/default">Item Display - Default</Link></li>
      <li><Link to="/tests/item-display-tests/text-style">Item Display - Text Styles</Link></li>
      <li><Link to="/tests/item-display-tests/icon">Item Display - Icon</Link></li>
      <li><Link to="/tests/item-display-tests/scaling">Item Display - Icon Scaling</Link></li>
    </ul>
  </div>
);

export default DisplayTests;
