/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DetailListTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/detail-list-tests/noraml-item-size">DetailList - All Items Normal Size </Link></li>
      <li><Link to="/tests/detail-list-tests/large-item-size">DetailList - One Item Large Size</Link></li>
    </ul>
  </div>
);

export default DetailListTests;
