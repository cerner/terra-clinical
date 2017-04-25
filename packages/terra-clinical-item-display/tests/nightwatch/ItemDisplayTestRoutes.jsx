/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemDisplaysTests from './ItemDisplayTests';
import DefaultItemDisplay from './DefaultItemDisplay';
import TextStyleItemDisplay from './TextStyleItemDisplay';
import IconItemDisplay from './IconItemDisplay';

const routes = (
  <div>
    <Route path="/tests/item-display-tests" component={ItemDisplaysTests} />
    <Route path="/tests/item-display-tests/default" component={DefaultItemDisplay} />
    <Route path="/tests/item-display-tests/text-style" component={TextStyleItemDisplay} />
    <Route path="/tests/item-display-tests/icon" component={IconItemDisplay} />
  </div>
);

export default routes;
