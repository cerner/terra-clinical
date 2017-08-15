import React from 'react';
import EmbeddedContentConsumer from 'terra-clinical-embedded-content-consumer';

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer src="#/tests/embedded-content-consumer-tests/on-ready-provider" />
);

export default OnReadyConsumer;
