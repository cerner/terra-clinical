/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemCollectionTests from './ItemCollectionTests';

import DefaultItemCollection from './DefaultItemCollection';
import ItemCollectionVaryingItems from './ItemCollectionVaryingItems';
import ItemCollectionSelectable from './ItemCollectionSelectable';
import TableStyles from './ItemCollectionTableStyles';
import ListStyles from './ItemCollectionListStyles';
import ItemStyles from './ItemCollectionItemStyles';

const routes = (
  <div>
    <Route path="/tests/item-collection-tests" component={ItemCollectionTests} />
    <Route path="/tests/item-collection-tests/default" component={DefaultItemCollection} />
    <Route path="/tests/item-collection-tests/varying-items" component={ItemCollectionVaryingItems} />
    <Route path="/tests/item-collection-tests/selectable" component={ItemCollectionSelectable} />
    <Route path="/tests/item-collection-tests/table-styles" component={TableStyles} />
    <Route path="/tests/item-collection-tests/list-styles" component={ListStyles} />
    <Route path="/tests/item-collection-tests/item-styles" component={ItemStyles} />
  </div>
);

export default routes;
