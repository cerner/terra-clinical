/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemViewTests from './ItemViewTests';
import DefaultItemView from './DefaultItemView';
import DisplaysItemView from './DisplaysItemView';
import AccessoryItemView from './AccessoryItemView';
import CommentItemView from './CommentItemView';
import OverflowDisplaysItemView from './OverflowDisplaysItemView';

const routes = (
  <div>
    <Route path="/tests/item-view-tests" component={ItemViewTests} />
    <Route path="/tests/item-view-tests/default" component={DefaultItemView} />
    <Route path="/tests/item-view-tests/displays" component={DisplaysItemView} />
    <Route path="/tests/item-view-tests/accessory" component={AccessoryItemView} />
    <Route path="/tests/item-view-tests/comment" component={CommentItemView} />
    <Route path="/tests/item-view-tests/overflow" component={OverflowDisplaysItemView} />
  </div>
);

export default routes;
