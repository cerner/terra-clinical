/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-application/docs/README.md';
import { version } from 'terra-clinical-application/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ApplicationSrc from '!raw-loader!terra-clinical-application/src/Application';

// Example Files

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ApplicationSrc} componentName="Application" />
  </div>
);

export default ApplicationExamples;
