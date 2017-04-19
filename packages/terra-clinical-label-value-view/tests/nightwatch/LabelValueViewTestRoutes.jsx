/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LabelValueViewTests from './LabelValueViewTests';
import DefaultLabelValueView from './DefaultLabelValueView';
import TextValueLabelValueView from './TextValueLabelValueView';
import NodeValueLabelValueView from './NodeValueLabelValueView';
import MultipleValueLabelValueView from './MultipleValueLabelValueView';

const routes = (
  <div>
    <Route path="/tests/label-value-view-tests" component={LabelValueViewTests} />
    <Route path="/tests/label-value-view-tests/default" component={DefaultLabelValueView} />
    <Route path="/tests/label-value-view-tests/text-value" component={TextValueLabelValueView} />
    <Route path="/tests/label-value-view-tests/element-value" component={NodeValueLabelValueView} />
    <Route path="/tests/label-value-view-tests/multiple-values" component={MultipleValueLabelValueView} />
  </div>
);

export default routes;
