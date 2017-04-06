import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ClinicalItemViewExamples from './examples/clinical-item-view/Index';

// Test
/* eslint-disable import/first */
import ClinicalItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/clinical-item-view/ClinicalItemViewTestRoutes';
import CommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import DisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="clinical-item-view" component={ClinicalItemViewExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ClinicalItemViewTestRoutes}
  </Router>
), document.getElementById('root'));
