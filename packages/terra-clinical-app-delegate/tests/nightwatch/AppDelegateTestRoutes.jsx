/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import AppDelegateTests from './AppDelegateTests';

// Test Cases
import DefaultAppDelegate from './DefaultAppDelegate';

const routes = (
  <div>
    <Route path="/tests/app-delegate-tests" component={AppDelegateTests} />
    <Route path="/tests/app-delegate-tests/default" component={DefaultAppDelegate} />
  </div>
);

export default routes;
