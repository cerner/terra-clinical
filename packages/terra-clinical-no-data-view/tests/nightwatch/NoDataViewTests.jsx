/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const NoDataViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/no-data-view-tests/default">NoDataView - Default</Link></li>
      <li><Link to="/tests/no-data-view-tests/text">NoDataView - Text</Link></li>
      <li><Link to="/tests/no-data-view-tests/content">NoDataView - Content</Link></li>
      <li><Link to="/tests/no-data-view-tests/hidden">NoDataView - Hidden Glyph</Link></li>
    </ul>
  </div>
);

export default NoDataViewTests;
