/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemCollectionTests from './ItemCollectionTests';

import DefaultItemCollection from './DefaultItemCollection';
import TinyBreakpointItemCollection from './breakpoints/TinyBreakpointItemCollection';
import SmallBreakpointItemCollection from './breakpoints/SmallBreakpointItemCollection';
import MediumBreakpointItemCollection from './breakpoints/MediumBreakpointItemCollection';
import LargeBreakpointItemCollection from './breakpoints/LargeBreakpointItemCollection';
import HugeBreakpointItemCollection from './breakpoints/HugeBreakpointItemCollection';
import BreakpointCompare from './breakpoints/BreakpointCompare';
import TableStyles from './ItemCollectionTableStyles';
import ListStyles from './ItemCollectionListStyles';
import ItemStyles from './ItemCollectionItemStyles';
import OnChangeItemCollection from './OnChangeItemCollection';

const routes = (
  <div>
    <Route path="/tests/item-collection-tests" component={ItemCollectionTests} />
    <Route path="/tests/item-collection-tests/default" component={DefaultItemCollection} />
    <Route path="/tests/item-collection-tests/tiny-breakpoint" component={TinyBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/small-breakpoint" component={SmallBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/medium-breakpoint" component={MediumBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/large-breakpoint" component={LargeBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/huge-breakpoint" component={HugeBreakpointItemCollection} />
    <Route path="/tests/item-collection-tests/all-breakpoints" component={BreakpointCompare} />
    <Route path="/tests/item-collection-tests/table-styles" component={TableStyles} />
    <Route path="/tests/item-collection-tests/list-styles" component={ListStyles} />
    <Route path="/tests/item-collection-tests/item-styles" component={ItemStyles} />
    <Route path="/tests/item-collection-tests/onchange" component={OnChangeItemCollection} />
  </div>
);

export default routes;
