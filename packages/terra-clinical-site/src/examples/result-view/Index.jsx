/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-result-view/docs/README.md';
import { version } from 'terra-clinical-result-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ResultViewSrc from '!raw-loader!terra-clinical-result-view/src/ResultView';

// Example Files

const ResultViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ResultViewSrc} />
  </div>
);

export default ResultViewExamples;
