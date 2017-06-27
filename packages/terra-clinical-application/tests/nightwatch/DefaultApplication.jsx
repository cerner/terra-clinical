import React from 'react';
import AppDelegate from 'terra-app-delegate';

import Application from '../../lib/Application';
import ContainerComponent from './ContainerComponent';

export default () => (
  <Application app={AppDelegate.create({})}>
    <ContainerComponent />
  </Application>
);
