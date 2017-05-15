/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ApplicationTests from './ApplicationTests';

// Test Cases
import DefaultApplication from './DefaultApplication';

const routes = (
  <div>
    <Route path="/tests/application-tests" component={ApplicationTests} />
    <Route path="/tests/application-tests/default" component={DefaultApplication} />
  </div>
);

export default routes;
