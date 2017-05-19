import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ActionHeaderExamples from './examples/action-header/Index';
import AppDelegateExamples from './examples/app-delegate/Index';
import ApplicationExamples from './examples/application/Index';
import DetailViewExamples from './examples/detail-view/Index';
import ErrorViewExamples from './examples/error-view/Index';
import ItemDisplayExamples from './examples/item-display/Index';
import ItemViewExamples from './examples/item-view/Index';
import HeaderExamples from './examples/header/Index';
import LabelValueViewExamples from './examples/label-value-view/Index';
import NoDataViewExamples from './examples/no-data-view/Index';
import SlideGroupExamples from './examples/slide-group/Index';
import ModalManagerExamples from './examples/modal-manager/Index';

// Test
/* eslint-disable import/first */

import ActionHeaderTestRoutes from 'terra-clinical-action-header/tests/nightwatch/ActionHeaderTestRoutes';
import ApplicationTestRoutes from 'terra-clinical-application/tests/nightwatch/ApplicationTestRoutes';
import DetailViewTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailView/DetailViewTestRoutes';
import DetailListTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailList/DetailListTestRoutes';
import DetailListItemTestRoutes from 'terra-clinical-detail-view/tests/nightwatch/DetailListItem/ListItemTestRoutes';
import ErrorViewTestRoutes from 'terra-clinical-error-view/tests/nightwatch/ErrorViewTestRoutes';
import ItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/ItemViewTestRoutes';
import ItemDisplayTestRoutes from 'terra-clinical-item-display/tests/nightwatch/comment/ItemCommentTestRoutes';
import ItemCommentTestRoutes from 'terra-clinical-item-display/tests/nightwatch/display/ItemDisplayTestRoutes';
import HeaderTestRoutes from 'terra-clinical-header/tests/nightwatch/HeaderTestRoutes';
import LabelValueViewTestRoutes from 'terra-clinical-label-value-view/tests/nightwatch/LabelValueViewTestRoutes';
import NoDataViewTestRoutes from 'terra-clinical-no-data-view/tests/nightwatch/NoDataViewTestRoutes';
import SlideGroupTestRoutes from 'terra-clinical-slide-group/tests/nightwatch/SlideGroupTestRoutes';
import ModalManagerTestRoutes from 'terra-clinical-modal-manager/tests/nightwatch/ModalManagerTestRoutes';

import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="action-header" component={ActionHeaderExamples} />
      <Route path="app-delegate" component={AppDelegateExamples} />
      <Route path="application" component={ApplicationExamples} />
      <Route path="detail-view" component={DetailViewExamples} />
      <Route path="error-view" component={ErrorViewExamples} />
      <Route path="header" component={HeaderExamples} />
      <Route path="item-display" component={ItemDisplayExamples} />
      <Route path="item-view" component={ItemViewExamples} />
      <Route path="label-value-view" component={LabelValueViewExamples} />
      <Route path="no-data-view" component={NoDataViewExamples} />
      <Route path="slide-group" component={SlideGroupExamples} />
      <Route path="modal-manager" component={ModalManagerExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ActionHeaderTestRoutes}
    {ApplicationTestRoutes}
    {DetailViewTestRoutes}
    {DetailListTestRoutes}
    {DetailListItemTestRoutes}
    {ErrorViewTestRoutes}
    {HeaderTestRoutes}
    {ItemCommentTestRoutes}
    {ItemDisplayTestRoutes}
    {ItemViewTestRoutes}
    {LabelValueViewTestRoutes}
    {NoDataViewTestRoutes}
    {SlideGroupTestRoutes}
    {ModalManagerTestRoutes}
  </Router>
), document.getElementById('root'));
