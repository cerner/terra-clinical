/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LabelValueViewTests from './LabelValueViewTests';
import DefaultLabelValueView from './DefaultLabelValueView';
import TextValueLabelValueView from './TextValueLabelValueView';
import IntegerValueLabelValueView from './IntegerValueLabelValueView';
import NodeValueLabelValueView from './NodeValueLabelValueView';

const routes = (
  <div>
    <Route path="/tests/label-value-view-tests" component={LabelValueViewTests} />
    <Route path="/tests/label-value-view-tests/default" component={DefaultLabelValueView} />
    <Route path="/tests/label-value-view-tests/text-value" component={TextValueLabelValueView} />
    <Route path="/tests/label-value-view-tests/integer-value" component={IntegerValueLabelValueView} />
    <Route path="/tests/label-value-view-tests/node-value" component={NodeValueLabelValueView} />
  </div>
);

export default routes;
