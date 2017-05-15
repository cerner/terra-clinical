/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-slide-group/docs/README.md';
import { version } from 'terra-clinical-slide-group/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SlideGroupSrc from '!raw-loader!terra-clinical-slide-group/src/SlideGroup';

// Example Files

const SlideGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SlideGroupSrc} />
  </div>
);

export default SlideGroupExamples;
