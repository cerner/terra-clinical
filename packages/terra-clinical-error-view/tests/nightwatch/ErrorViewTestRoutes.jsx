/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ErrorViewTests from './ErrorViewTests';
import DefaultErrorView from './DefaultErrorView';
import TextErrorView from './TextErrorView';
import ButtonErrorView from './ButtonErrorView';
import HiddenErrorView from './HiddenErrorView';

const routes = (
  <div>
    <Route path="/tests/error-view-tests" component={ErrorViewTests} />
    <Route path="/tests/error-view-tests/default" component={DefaultErrorView} />
    <Route path="/tests/error-view-tests/text" component={TextErrorView} />
    <Route path="/tests/error-view-tests/button" component={ButtonErrorView} />
    <Route path="/tests/error-view-tests/hidden" component={HiddenErrorView} />
  </div>
);

export default routes;
