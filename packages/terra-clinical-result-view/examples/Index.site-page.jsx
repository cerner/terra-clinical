/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ResultViewSrc from '!raw-loader!../src/ResultView';

// Example Files
import DefaultResultView from './index-examples/DefaultResultView';
import DefaultResultViewSrc from '!raw-loader!./index-examples/DefaultResultView.jsx';

const ResultViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="ResultView - Default"
      example={<DefaultResultView />}
      exampleSrc={DefaultResultViewSrc}
    />

    <PropsTable id="props" src={ResultViewSrc} />
  </div>
);

export default ResultViewExamples;
