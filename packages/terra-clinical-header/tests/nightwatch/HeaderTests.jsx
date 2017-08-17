/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/header-tests/default">Header - Default</Link></li>
      <li><Link to="/tests/header-tests/title">Header - Title</Link></li>
      <li><Link to="/tests/header-tests/long-title">Header - Long Title</Link></li>
      <li><Link to="/tests/header-tests/right-content">Header - Right Content</Link></li>
      <li><Link to="/tests/header-tests/left-content">Header - Left Content</Link></li>
      <li><Link to="/tests/header-tests/left-and-right-content">Header - Left and Right Content</Link></li>
      <li><Link to="/tests/header-tests/long-title-content">Header - Long Title and Content</Link></li>
      <li><Link to="/tests/header-tests/left-and-right-content-subheader">Subheader - Left and Right Content</Link></li>
      <li><Link to="/tests/header-tests/no-title-right-content">Header - No Title and RightContent</Link></li>
    </ul>
  </div>
);

export default HeaderTests;
