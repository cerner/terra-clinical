import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import DetailViewExamples from './examples/detail-view/Index';
import ErrorViewExamples from './examples/error-view/Index';
import ItemViewExamples from './examples/item-view/Index';
import HeaderExamples from './examples/header/Index';
import LabelValueViewExamples from './examples/label-value-view/Index';
import NoDataViewExamples from './examples/no-data-view/Index';
import ItemCollectionExamples from './examples/item-collection/Index';

// Test
/* eslint-disable import/first */
import DetailViewTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailViewTestRoutes';
import ErrorViewTestRoutes from 'terra-clinical-error-view/tests/nightwatch/ErrorViewTestRoutes';
import ItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/item-view/ItemViewTestRoutes';
import ItemViewCommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import ItemViewDisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import HeaderTestRoutes from 'terra-clinical-header/tests/nightwatch/HeaderTestRoutes';
import LabelValueViewTestRoutes from 'terra-clinical-label-value-view/tests/nightwatch/LabelValueViewTestRoutes';
import NoDataViewTestRoutes from 'terra-clinical-no-data-view/tests/nightwatch/NoDataViewTestRoutes';
import ItemCollectionTestRoutes from 'terra-clinical-item-collection/tests/nightwatch/item-collection/ItemCollectionTestRoutes';
import TableHeaderCellTestRoutes from 'terra-clinical-item-collection/tests/nightwatch/table-header-cell/TableHeaderCellTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="detail-view" component={DetailViewExamples} />
      <Route path="error-view" component={ErrorViewExamples} />
      <Route path="header" component={HeaderExamples} />
      <Route path="item-view" component={ItemViewExamples} />
      <Route path="label-value-view" component={LabelValueViewExamples} />
      <Route path="no-data-view" component={NoDataViewExamples} />
      <Route path="item-collection" component={ItemCollectionExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {DetailViewTestRoutes}
    {ErrorViewTestRoutes}
    {HeaderTestRoutes}
    {ItemViewTestRoutes}
    {ItemViewCommentTestRoutes}
    {ItemViewDisplayTestRoutes}
    {LabelValueViewTestRoutes}
    {NoDataViewTestRoutes}
    {ItemCollectionTestRoutes}
    {TableHeaderCellTestRoutes}
  </Router>
), document.getElementById('root'));
