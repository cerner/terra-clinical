/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import OnsetPickerTests from './OnsetPickerTests';

import DefaultOnset from './component/Default';
import LessMonth from './component/LessMonth';
import LessYear from './component/LessYear';

const routes = (
  <div>
    <Route path="/tests/onset-picker" component={OnsetPickerTests} />
    <Route path="/tests/onset-picker/default" component={DefaultOnset} />
    <Route path="/tests/onset-picker/less-month" component={LessMonth} />
    <Route path="/tests/onset-picker/less-year" component={LessYear} />
  </div>
);

export default routes;
