/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-label-value-view/docs/README.md';
import { version } from 'terra-clinical-label-value-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import LabelValueViewSrc from '!raw-loader!terra-clinical-label-value-view/src/LabelValueView';

// Example Files
import LabelValueViewSingle from './LabelValueViewSingle';
import LabelValueViewElement from './LabelValueViewElement';

const LabelValueViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={LabelValueViewSrc} />
    <h2 id="text_value">Label Value View with a Text Input</h2>
    <LabelValueViewSingle />
    <br />
    <h2 id="element_value">Label Value View with an Element Input</h2>
    <LabelValueViewElement />
    <br />
  </div>
);

export default LabelValueViewExamples;
