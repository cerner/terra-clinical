/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ResultViewTests from './ResultViewTests';

// Test Cases
import DefaultResultView from './DefaultResultView';

const routes = (
  <div>
    <Route path="/tests/result-view-tests" component={ResultViewTests} />
    <Route path="/tests/result-view-tests/default" component={DefaultResultView} />
  </div>
);

export default routes;
