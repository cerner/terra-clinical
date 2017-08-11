/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumer = () => (  
  <EmbeddedContentConsumer src="#/tests/embedded-content-consumer-tests/basic-provider" />
);

export default BasicConsumer;
