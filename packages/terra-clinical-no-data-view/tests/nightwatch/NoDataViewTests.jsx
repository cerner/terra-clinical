/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const NoDataViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/no-data-view-tests/default">Default NoDataView</Link></li>
      <li><Link to="/tests/no-data-view-tests/text">Text NoDataView</Link></li>
      <li><Link to="/tests/no-data-view-tests/content">Content NoDataView</Link></li>
      <li><Link to="/tests/no-data-view-tests/hidden">Hidden Glyph NoDataView</Link></li>
    </ul>
  </div>
);

export default NoDataViewTests;
