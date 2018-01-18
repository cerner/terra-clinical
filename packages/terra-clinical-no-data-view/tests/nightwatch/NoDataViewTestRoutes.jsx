/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NoDataViewTests from './NoDataViewTests';
import DefaultNoDataView from './DefaultNoDataView';
import TextNoDataView from './TextNoDataView';
import ContentNoDataView from './ContentNoDataView';
import HiddenNoDataView from './HiddenNoDataView';

const routes = (
  <div>
    <Route path="/tests/no-data-view-tests" component={NoDataViewTests} />
    <Route path="/tests/no-data-view-tests/default" component={DefaultNoDataView} />
    <Route path="/tests/no-data-view-tests/text" component={TextNoDataView} />
    <Route path="/tests/no-data-view-tests/content" component={ContentNoDataView} />
    <Route path="/tests/no-data-view-tests/hidden" component={HiddenNoDataView} />
  </div>
);

export default routes;
