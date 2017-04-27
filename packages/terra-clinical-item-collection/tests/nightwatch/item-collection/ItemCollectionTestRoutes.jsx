/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemCollectionTests from './ItemCollectionTests';
import TinyBreakpointItemCollection from './TinyBreakpointItemCollection';
import SmallBreakpointItemCollection from './SmallBreakpointItemCollection';
import MediumBreakpointItemCollection from './MediumBreakpointItemCollection';
import LargeBreakpointItemCollection from './LargeBreakpointItemCollection';
import HugeBreakpointItemCollection from './HugeBreakpointItemCollection';

const routes = (
  <div>
    <Route path="/tests/item-collection-tests" component={ItemCollectionTests} />
    <Route path="/tests/item-collection-tests/tiny-breakpoint" component={TinyBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/small-breakpoint" component={SmallBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/medium-breakpoint" component={MediumBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/large-breakpoint" component={LargeBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/huge-breakpoint" component={HugeBreakpointItemCollection} />
  </div>
);

export default routes;
