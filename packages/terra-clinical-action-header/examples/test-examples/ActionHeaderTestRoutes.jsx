/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ActionHeaderTests from './ActionHeaderTests';
import ActionHeaderDefault from './DefaultActionHeader';
import ActionHeaderTitle from './TitleActionHeader';
import BackActionHeader from './BackActionHeader';
import CloseActionHeader from './CloseActionHeader';
import MaximizeActionHeader from './MaximizeActionHeader';
import MinimizeActionHeader from './MinimizeActionHeader';
import BackCloseActionHeader from './BackCloseActionHeader';
import PreviousNextActionHeader from './PreviousNextActionHeader';
import ChildrenActionHeader from './ChildrenActionHeader';
import KeepCloseButtonActionHeader from './KeepCloseButtonActionHeader';

const routes = (
  <div>
    <Route path="/tests/action-header-tests" component={ActionHeaderTests} />
    <Route path="/tests/action-header-tests/action-header" component={ActionHeaderDefault} />
    <Route path="/tests/action-header-tests/action-header-title" component={ActionHeaderTitle} />
    <Route path="/tests/action-header-tests/action-header-maximize" component={MaximizeActionHeader} />
    <Route path="/tests/action-header-tests/action-header-minimize" component={MinimizeActionHeader} />
    <Route path="/tests/action-header-tests/action-header-back" component={BackActionHeader} />
    <Route path="/tests/action-header-tests/action-header-close" component={CloseActionHeader} />
    <Route path="/tests/action-header-tests/action-header-keep-close-button" component={KeepCloseButtonActionHeader} />
    <Route path="/tests/action-header-tests/action-header-back-close" component={BackCloseActionHeader} />
    <Route path="/tests/action-header-tests/action-header-previous-next" component={PreviousNextActionHeader} />
    <Route path="/tests/action-header-tests/action-header-child" component={ChildrenActionHeader} />
  </div>
);

export default routes;
