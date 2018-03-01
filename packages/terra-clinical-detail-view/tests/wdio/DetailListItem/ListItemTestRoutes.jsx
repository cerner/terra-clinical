/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ListItemTests from './ListItemTests';
import DefaultItemList from './DefaultListItem';

const routes = (
  <div>
    <Route path="/tests/detail-list-item-tests" component={ListItemTests} />
    <Route path="/tests/detail-list-item-tests/default" component={DefaultItemList} />
  </div>
);

export default routes;
