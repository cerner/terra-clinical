/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/header-tests/default">Default Header</Link></li>
      <li><Link to="/tests/header-tests/title">Header with title</Link></li>
      <li><Link to="/tests/header-tests/long-title">Header with long title</Link></li>
      <li><Link to="/tests/header-tests/right-content">Header with content on the right</Link></li>
      <li><Link to="/tests/header-tests/left-content">Header with content on the left</Link></li>
      <li><Link to="/tests/header-tests/left-and-right-content">Header with content on the left and right</Link></li>
    </ul>
  </div>
);

export default HeaderTests;
