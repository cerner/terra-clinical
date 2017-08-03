/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import AlertTests from './AlertTests';

// Test Cases
import DefaultAlert from './DefaultAlert';
import AlertType from './AlertType';
import AlertTitle from './AlertTitle';

const routes = (
  <div>
    <Route path="/tests/alert-tests" component={AlertTests} />
    <Route path="/tests/alert-tests/default" component={DefaultAlert} />
    <Route path="/tests/alert-tests/type" component={AlertType} />
    <Route path="/tests/alert-tests/title" component={AlertTitle} />
  </div>
);

export default routes;
