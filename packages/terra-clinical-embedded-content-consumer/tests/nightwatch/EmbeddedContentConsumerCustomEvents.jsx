import React from 'react';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

const eventHandlers = { invokeCustomEvent: () => {
  document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
} };

const EmbeddedContentConsumerCustomEvents = () => (
  <div id="CustomEvents">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/custom-events-provider"
      eventHandlers={eventHandlers}
    />
  </div>
);

export default EmbeddedContentConsumerCustomEvents;
