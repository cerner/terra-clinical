/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ClinicalModalControllerTests from './ClinicalModalControllerTests';
import DefaultClinicalModalController from './DefaultClinicalModalController';

const routes = (
  <div>
    <Route path="/tests/clinical-modal-controller-tests" component={ClinicalModalControllerTests} />
    <Route path="/tests/clinical-modal-controller-tests/default" component={DefaultClinicalModalController} />
  </div>
);

export default routes;
