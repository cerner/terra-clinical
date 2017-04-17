/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-view-tests">ItemView Tests</Link></li>
      <li><Link to="/tests/item-view-display-tests">ItemView.Display Tests</Link></li>
      <li><Link to="/tests/item-view-comment-tests">ItemView.Comment Tests</Link></li>
      <li><Link to="/tests/header-tests">Header Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
