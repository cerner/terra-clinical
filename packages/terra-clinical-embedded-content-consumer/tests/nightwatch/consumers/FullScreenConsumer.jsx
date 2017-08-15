import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const onFullscreen = () => {
  document.getElementById('FullscreenWrapper').style.border = 'thick dashed #0000FF';
};

const FullScreenConsumer = () => (
  <div id="FullscreenWrapper">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/full-screen-provider"
      onFullscreen={onFullscreen}
    />
  </div>
);

export default FullScreenConsumer;
