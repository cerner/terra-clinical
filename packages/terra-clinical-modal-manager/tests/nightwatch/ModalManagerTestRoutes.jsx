/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ModalManagerTests from './ModalManagerTests';

// Test Cases
import DefaultModalManager from './DefaultModalManager';

const routes = (
  <div>
    <Route path="/tests/modal-manager-tests" component={ModalManagerTests} />
    <Route path="/tests/modal-manager-tests/default" component={DefaultModalManager} />
  </div>
);

export default routes;
