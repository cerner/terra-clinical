/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemCollectionTests from './ItemCollectionTests';
import DefaultItemCollection from './DefaultItemCollection';

const routes = (
  <div>
    <Route path="/tests/clinical-item-collection-tests" component={ItemCollectionTests} />
    <Route path="/tests/clinical-item-collection-tests/default" component={ItemCollectionTests} />
  </div>
);

export default routes;
