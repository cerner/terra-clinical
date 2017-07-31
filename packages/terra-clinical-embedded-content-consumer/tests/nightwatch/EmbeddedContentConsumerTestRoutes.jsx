/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import EmbeddedContentConsumerTests from './EmbeddedContentConsumerTests';

// Content consumer components.
import EmbeddedContentConsumerBasic from './consumers/EmbeddedContentConsumerBasic';
import EmbeddedContentConsumerOnReady from './consumers/EmbeddedContentConsumerOnReady';
import EmbeddedContentConsumerCustomEvents from './consumers/EmbeddedContentConsumerCustomEvents';

// Content provider components.
import BasicProvider from './providers/BasicProvider';
import CustomEventsProvider from './providers/CustomEventsProvider';
import OnReadyProvider from './providers/OnReadyProvider';

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
