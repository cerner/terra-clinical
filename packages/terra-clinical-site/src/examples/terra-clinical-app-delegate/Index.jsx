/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-terra-clinical-app-delegate/docs/README.md';
import { version } from 'terra-clinical-terra-clinical-app-delegate/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TerraClinicalAppDelegateSrc from '!raw-loader!terra-clinical-terra-clinical-app-delegate/src/TerraClinicalAppDelegate';

// Example Files

const TerraClinicalAppDelegateExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TerraClinicalAppDelegateSrc} />
  </div>
);

export default TerraClinicalAppDelegateExamples;
