/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import EmbeddedContentConsumerTests from './EmbeddedContentConsumerTests';
import BasicProvider from './providers/BasicProvider';
import EmbeddedContentConsumerOnReady from './EmbeddedContentConsumerOnReady';
import OnReadyProvider from './providers/OnReadyProvider';
import EmbeddedContentConsumerCustomEvents from './EmbeddedContentConsumerCustomEvents';
import CustomEventsProvider from './providers/CustomEventsProvider';

// Component
import EmbeddedContentConsumerBasic from './EmbeddedContentConsumerBasic';

const routes = (
  <div>
    <Route path="/tests/embedded-content-consumer-tests" component={EmbeddedContentConsumerTests} />
    <Route path="/tests/embedded-content-consumer-tests/basic-consumer" component={EmbeddedContentConsumerBasic} />
    <Route path="/tests/embedded-content-consumer-tests/basic-provider" component={BasicProvider} />
    <Route path="/tests/embedded-content-consumer-tests/on-ready-consumer" component={EmbeddedContentConsumerOnReady} />
    <Route path="/tests/embedded-content-consumer-tests/on-ready-provider" component={OnReadyProvider} />
    <Route path="/tests/embedded-content-consumer-tests/custom-events-consumer" component={EmbeddedContentConsumerCustomEvents} />
    <Route path="/tests/embedded-content-consumer-tests/custom-events-provider" component={CustomEventsProvider} />
  </div>
);

export default routes;
