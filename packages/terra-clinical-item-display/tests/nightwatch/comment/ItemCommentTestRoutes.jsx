/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ItemCommentTests from './ItemCommentTests';
import DefaultItemComment from './DefaultItemComment';
import TextItemComment from './TextItemComment';

const routes = (
  <div>
    <Route path="/tests/item-comment-tests" component={ItemCommentTests} />
    <Route path="/tests/item-comment-tests/default" component={DefaultItemComment} />
    <Route path="/tests/item-comment-tests/text" component={TextItemComment} />
  </div>
);

export default routes;
