/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemDisplaysTests from './ItemDisplayTests';
import DefaultItemDisplay from './DefaultItemDisplay';
import TextStyleItemDisplay from './TextStyleItemDisplay';
import IconItemDisplay from './IconItemDisplay';
import ScalingIconItemDisplay from './ScalingIconItemDisplay';


const routes = (
  <div>
    <Route path="/tests/item-display-tests" component={ItemDisplaysTests} />
    <Route path="/tests/item-display-tests/default" component={DefaultItemDisplay} />
    <Route path="/tests/item-display-tests/text-style" component={TextStyleItemDisplay} />
    <Route path="/tests/item-display-tests/icon" component={IconItemDisplay} />
    <Route path="/tests/item-display-tests/scaling" component={ScalingIconItemDisplay} />
  </div>
);

export default routes;
