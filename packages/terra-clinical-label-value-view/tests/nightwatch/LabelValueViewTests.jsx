/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const LabelValueViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/label-value-view-tests/default">Default LabelValueView</Link></li>
      <li><Link to="/tests/label-value-view-tests/text-value">LabelValueView with Text Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/integer-value">LabelValueView with Integer Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/node-value">LabelValueView with Node Input</Link></li>
    </ul>
  </div>
);

export default LabelValueViewTests;
