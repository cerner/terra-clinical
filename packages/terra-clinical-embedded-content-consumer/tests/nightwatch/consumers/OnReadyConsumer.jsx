/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer src="#/tests/embedded-content-consumer-tests/on-ready-provider" />
);

export default OnReadyConsumer;
