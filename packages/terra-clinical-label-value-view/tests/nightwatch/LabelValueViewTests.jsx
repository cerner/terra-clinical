/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const LabelValueViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/label-value-view-tests/default">LabelValueView - Default </Link></li>
      <li><Link to="/tests/label-value-view-tests/text-value">LabelValueView - Text Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/element-value">LabelValueView -  Node Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/multiple-values">LabelValueView - Text and Node Inputs</Link></li>
    </ul>
  </div>
);

export default LabelValueViewTests;
