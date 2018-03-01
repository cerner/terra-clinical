/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ActionHeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-header-tests/action-header"> ActionHeader - Default</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-title"> ActionHeader - Title</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-maximize">ActionHeader - Maximize</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-minimize">ActionHeader - Minimize</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-back">ActionHeader - Back</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-close">ActionHeader - Close</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-keep-close-button">ActionHeader - Keep Close Button</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-back-close">ActionHeader - Back and Close</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-previous-next">ActionHeader - Previous-Next</Link></li>
      <li><Link to="/tests/action-header-tests/action-header-child">ActionHeader - Custom Content</Link></li>
    </ul>
  </div>
);

export default ActionHeaderTests;
