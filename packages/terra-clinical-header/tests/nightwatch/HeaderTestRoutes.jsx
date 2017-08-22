/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HeaderTests from './HeaderTests';
import DefaultHeader from './DefaultHeader';
import TitleHeader from './TitleHeader';
import LongTitleHeader from './LongTitleHeader';
import RightContentHeader from './RightContentHeader';
import LeftContentHeader from './LeftContentHeader';
import LeftAndRightContentHeader from './LeftAndRightContentHeader';
import LongTitleAndContentHeader from './LongTitleAndContentHeader';
import LeftAndRightContentSubheader from './LeftAndRightContentSubheader';
import NoTitleRightContentHeader from './NoTitleRightContentHeader';

const routes = (
  <div>
    <Route path="/tests/header-tests" component={HeaderTests} />
    <Route path="/tests/header-tests/default" component={DefaultHeader} />
    <Route path="/tests/header-tests/title" component={TitleHeader} />
    <Route path="/tests/header-tests/long-title" component={LongTitleHeader} />
    <Route path="/tests/header-tests/right-content" component={RightContentHeader} />
    <Route path="/tests/header-tests/left-content" component={LeftContentHeader} />
    <Route path="/tests/header-tests/left-and-right-content" component={LeftAndRightContentHeader} />
    <Route path="/tests/header-tests/long-title-content" component={LongTitleAndContentHeader} />
    <Route path="/tests/header-tests/left-and-right-content-subheader" component={LeftAndRightContentSubheader} />
    <Route path="/tests/header-tests/no-title-right-content" component={NoTitleRightContentHeader} />
  </div>
);

export default routes;
