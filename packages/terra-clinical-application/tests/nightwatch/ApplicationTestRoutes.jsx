/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ApplicationTests from './ApplicationTests';
import DefaultApplication from './DefaultApplication';
import NoAppDelegateApplication from './NoAppDelegateApplication';

const routes = (
  <div>
    <Route path="/tests/application-tests" component={ApplicationTests} />
    <Route path="/tests/application-tests/default" component={DefaultApplication} />
    <Route path="/tests/application-tests/no-app-delegate" component={NoAppDelegateApplication} />
  </div>
);

export default routes;
