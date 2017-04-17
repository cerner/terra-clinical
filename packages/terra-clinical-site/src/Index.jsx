import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ItemViewExamples from './examples/item-view/Index';
import HeaderExamples from './examples/header/Index';

// Test
/* eslint-disable import/first */
import ItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/item-view/ItemViewTestRoutes';
import ItemViewCommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import ItemViewDisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import HeaderTestRoutes from 'terra-clinical-header/tests/nightwatch/HeaderTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="header" component={HeaderExamples} />
      <Route path="item-view" component={ItemViewExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ItemViewTestRoutes}
    {ItemViewCommentTestRoutes}
    {ItemViewDisplayTestRoutes}
    {HeaderTestRoutes}
  </Router>
), document.getElementById('root'));
