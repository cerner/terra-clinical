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
import ErrorViewHiddenGlyphNoButton from './ErrorViewHiddenGlyphNoButton';
import ErrorViewNoName from './ErrorViewNoName';
import ErrorViewNoDescription from './ErrorViewNoDescription';

const ErrorViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-errorView" src={ErrorViewSrc} />
    <h2 id="errorView">Error View</h2>
    <ErrorViewStandard />
    <h2 id="errorView-glyph-hidden">Error View With Glyph Hidden</h2>
    <ErrorViewHiddenGlyph />
    <h2 id="errorView-glyph-hidden-no-button">Error View With Glyph Hidden and No Button</h2>
    <ErrorViewHiddenGlyphNoButton />
    <h2 id="errorView-no-name">Error View With No Name</h2>
    <ErrorViewNoName />
    <h2 id="errorView-no-description">Error View No Description</h2>
    <ErrorViewNoDescription />
  </div>
);

export default ErrorViewExamples;
