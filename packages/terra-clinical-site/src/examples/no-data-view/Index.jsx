/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-no-data-view/docs/README.md';
import { version } from 'terra-clinical-no-data-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NoDataViewSrc from '!raw-loader!terra-clinical-no-data-view/src/NoDataView.jsx';

// Example Files
import NoDataViewStandard from './NoDataViewStandard';
import NoDataViewContent from './NoDataViewContent';
import NoDataViewHiddenGlyph from './NoDataViewHiddenGlyph';

const NoDataViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-noDataView" src={NoDataViewSrc} />
    <h2 id="noDataView">No Data View</h2>
    <NoDataViewStandard />
    <h2 id="noDataView">No Data View With Glyph Hidden</h2>
    <NoDataViewHiddenGlyph />
    <h2 id="noDataView-content">No Data View With Content</h2>
    <NoDataViewContent />
  </div>
);

export default NoDataViewExamples;
