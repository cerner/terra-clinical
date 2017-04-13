/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const LabelValueViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/label-value-view-tests/default">Default LabelValueView</Link></li>
      <li><Link to="/tests/label-value-view-tests/text-value">LabelValueView with a Text Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/element-value">LabelValueView with an Element Input</Link></li>
      <li><Link to="/tests/label-value-view-tests/multiple-values">LabelValueView with Text and Element Inputs</Link></li>
    </ul>
  </div>
);

export default LabelValueViewTests;
