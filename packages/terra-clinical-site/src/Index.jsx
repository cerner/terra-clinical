import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import DetailViewExamples from './examples/detail-view/Index';
import ItemViewExamples from './examples/item-view/Index';

// Test
/* eslint-disable import/first */
import DetailViewTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailView/DetailViewTestRoutes';
import DetailListTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailList/DetailListTestRoutes';
import DetailListItemTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailListItem/ListItemTestRoutes';
import ItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/item-view/ItemViewTestRoutes';
import ItemViewCommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import ItemViewDisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="detail-view" component={DetailViewExamples} />
      <Route path="item-view" component={ItemViewExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {DetailViewTestRoutes}
    {DetailListTestRoutes}
    {DetailListItemTestRoutes}
    {ItemViewTestRoutes}
    {ItemViewCommentTestRoutes}
    {ItemViewDisplayTestRoutes}
  </Router>
), document.getElementById('root'));
