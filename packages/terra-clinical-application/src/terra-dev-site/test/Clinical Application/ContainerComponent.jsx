import React from 'react';
import AppDelegate from 'terra-app-delegate';

const ContainerComponent = ({ app }) => (
  <div id="test-ContainerComponent">
    {app ? 'App is present' : 'App is not present' }
  </div>
);

ContainerComponent.propTypes = {
  app: AppDelegate.propType,
};

export default ContainerComponent;
