import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from 'terra-clinical-embedded-content-consumer';

Consumer.init();

const onFullscreen = (url) => { window.open(url); };

const FullScreenConsumer = () => (
  <div id="FullscreenWrapper">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/full-screen-provider"
      onFullscreen={onFullscreen}
      fill
    />
  </div>
);

export default FullScreenConsumer;
