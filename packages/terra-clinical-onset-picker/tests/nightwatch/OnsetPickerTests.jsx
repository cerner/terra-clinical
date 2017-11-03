/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const OnsetPickerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/onset-picker/default">Default</Link></li>
      <li><Link to="/tests/onset-picker/less-month">Less than a month</Link></li>
      <li><Link to="/tests/onset-picker/less-year">Less than a year</Link></li>
      <li><Link to="/tests/onset-picker/five-years">Five years old</Link></li>
    </ul>
  </div>
);

export default OnsetPickerTests;
