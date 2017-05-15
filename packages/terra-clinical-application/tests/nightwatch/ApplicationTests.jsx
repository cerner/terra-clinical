/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ClinicalApplicationTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/application-tests/default">Default Application</Link></li>
      <li><Link to="/tests/application-tests/no-app-delegate">No AppDelegate</Link></li>
    </ul>
  </div>
);

export default ClinicalApplicationTests;
