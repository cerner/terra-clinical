/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ApplicationSrc from '!raw-loader!../src/Application';

// Example Files

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ApplicationSrc} />
  </div>
);

export default ApplicationExamples;
