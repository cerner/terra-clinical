/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

const EmbeddedContentConsumerOnReady = () => (
  <EmbeddedContentConsumer src="#/tests/embedded-content-consumer-tests/on-ready-provider" />
);

export default EmbeddedContentConsumerOnReady;
