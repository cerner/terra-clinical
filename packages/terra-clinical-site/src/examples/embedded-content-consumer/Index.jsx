import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-embedded-content-consumer/docs/README.md';
import { version } from 'terra-clinical-embedded-content-consumer/package.json';
import BasicEmbeddedContentConsumer from './BasicEmbeddedContentConsumer';
import CustomEventEmbeddedContentConsumer from './CustomEventEmbeddedContentConsumer';
import OnReadyEmbeddedContentConsumer from './OnReadyEmbeddedContentConsumer';

import EmbeddedContentConsumerSrc from '!raw-loader!terra-clinical-embedded-content-consumer/src/EmbeddedContentConsumer.jsx';

const EmbeddedContentConsumerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Embedded Content Consumer</h2>
    <PropsTable id="embedded_content_consumer_props" src={EmbeddedContentConsumerSrc} />
    <h2 id="Basic Embedded Content">Basic Embedded Content</h2>
    <BasicEmbeddedContentConsumer />
    <h2 id="On Ready Embedded Content">On Ready Embedded Content</h2>
    <OnReadyEmbeddedContentConsumer />
    <h2 id="Custom Event Embedded Content">Custom Event Embedded Content</h2>
    <CustomEventEmbeddedContentConsumer />
  </div>
);

export default EmbeddedContentConsumerExamples;
