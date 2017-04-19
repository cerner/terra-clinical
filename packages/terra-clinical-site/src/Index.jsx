import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import DetailViewExamples from './examples/detail-view/Index';
import ItemViewExamples from './examples/item-view/Index';
import LabelValueViewExamples from './examples/label-value-view/Index';
import NoDataViewExamples from './examples/no-data-view/Index';

// Test
/* eslint-disable import/first */
import DetailViewTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailViewTestRoutes';
import ItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/item-view/ItemViewTestRoutes';
import ItemViewCommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import ItemViewDisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import LabelValueViewTestRoutes from 'terra-clinical-label-value-view/tests/nightwatch/LabelValueViewTestRoutes';
import NoDataViewTestRoutes from 'terra-clinical-no-data-view/tests/nightwatch/NoDataViewTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="detail-view" component={DetailViewExamples} />
      <Route path="item-view" component={ItemViewExamples} />
      <Route path="label-value-view" component={LabelValueViewExamples} />
      <Route path="no-data-view" component={NoDataViewExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {DetailViewTestRoutes}
    {ItemViewTestRoutes}
    {ItemViewCommentTestRoutes}
    {ItemViewDisplayTestRoutes}
    {LabelValueViewTestRoutes}
    {NoDataViewTestRoutes}
  </Router>
), document.getElementById('root'));
