/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ErrorViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/error-view-tests/default">Default ErrorView</Link></li>
      <li><Link to="/tests/error-view-tests/text">Text ErrorView</Link></li>
      <li><Link to="/tests/error-view-tests/button">Button ErrorView</Link></li>
      <li><Link to="/tests/error-view-tests/hidden">Hidden Glyph ErrorView</Link></li>
    </ul>
  </div>
);

export default ErrorViewTests;
