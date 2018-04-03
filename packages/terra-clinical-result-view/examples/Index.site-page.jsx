/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ResultViewSrc from '!raw-loader!../src/ResultView.jsx';

// Examples
import DefaultResultView from './test-examples/DefaultResultView';
import ResultViewNotTruncated from './test-examples/ResultViewNotTruncated';
import TruncatedResultView from './test-examples/TruncatedResultView';
import ResultViewWithSeparator from './test-examples/ResultViewWithSeparator';

const ResultViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <h3>Default Result View</h3>
    <DefaultResultView />
    <h3>Result View Not Truncated</h3>
    <ResultViewNotTruncated />
    <h3>Result View Truncated</h3>
    <TruncatedResultView />
    <h3>Result View with Separator</h3>
    <ResultViewWithSeparator />
    <br />
    <PropsTable id="props-table" src={ResultViewSrc} />
  </div>
);

export default ResultViewExamples;
