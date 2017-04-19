/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-error-view/docs/README.md';
import { version } from 'terra-clinical-error-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ErrorViewSrc from '!raw-loader!terra-clinical-error-view/src/ErrorView.jsx';

// Example Files
import ErrorViewStandard from './ErrorViewStandard';
import ErrorViewHiddenGlyph from './ErrorViewHiddenGlyph';

const ErrorViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-errorView" src={ErrorViewSrc} />
    <h2 id="errorView">Error View</h2>
    <ErrorViewStandard />
    <h2 id="errorView-glyph-hidden">Error View With Glyph Hidden</h2>
    <ErrorViewHiddenGlyph />
  </div>
);

export default ErrorViewExamples;
