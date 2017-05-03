/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DetailListTests from './DetailListTests';
import NormalItemList from './NormalItemList';
import LargeItemList from './LargeItemList';

const routes = (
  <div>
    <Route path="/tests/detail-list-tests" component={DetailListTests} />
    <Route path="/tests/detail-list-tests/noraml-item-size" component={NormalItemList} />
    <Route path="/tests/detail-list-tests/large-item-size" component={LargeItemList} />
  </div>
);

export default routes;
