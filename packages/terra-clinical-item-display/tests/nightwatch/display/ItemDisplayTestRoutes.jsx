/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemDisplayTests from './ItemDisplayTests';
import DefaultItemDisplay from './DefaultItemDisplay';
import TextStyleItemDisplay from './TextStyleItemDisplay';
import DisabledItemDisplay from './DisabledItemDisplay';
import IconItemDisplay from './IconItemDisplay';
import ScalingIconItemDisplay from './ScalingIconItemDisplay';


const routes = (
  <div>
    <Route path="/tests/item-display-tests" component={ItemDisplayTests} />
    <Route path="/tests/item-display-tests/default" component={DefaultItemDisplay} />
    <Route path="/tests/item-display-tests/text-style" component={TextStyleItemDisplay} />
    <Route path="/tests/item-display-tests/disabled" component={DisabledItemDisplay} />
    <Route path="/tests/item-display-tests/icon" component={IconItemDisplay} />
    <Route path="/tests/item-display-tests/scaling" component={ScalingIconItemDisplay} />
  </div>
);

export default routes;
