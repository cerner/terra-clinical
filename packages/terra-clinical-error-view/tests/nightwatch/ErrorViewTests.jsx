/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ErrorViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/error-view-tests/default">ErrorView - Default</Link></li>
      <li><Link to="/tests/error-view-tests/text">ErrorView - Text</Link></li>
      <li><Link to="/tests/error-view-tests/button">ErrorView - Button</Link></li>
      <li><Link to="/tests/error-view-tests/hidden">ErrorView - Hidden Glyph</Link></li>
    </ul>
  </div>
);

export default ErrorViewTests;
