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
import LabelValueViewNoValue from './LabelValueViewNoValue';
import LabelValueViewSingle from './LabelValueViewSingle';
import LabelValueViewMultiple from './LabelValueViewMultiple';
import LabelValueViewFormatted from './LabelValueViewFormatted';

const LabelValueViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={LabelValueViewSrc} />
    <h2 id="no_value">Label Value View with No Value Input</h2>
    <LabelValueViewNoValue />
    <br />
    <h2 id="one_value">Label Value View with a Single Value Input</h2>
    <LabelValueViewSingle />
    <br />
    <h2 id="multiple_values">Label Value View with Multiple Value Inputs</h2>
    <LabelValueViewMultiple />
    <br />
    <h2 id="formatted_value">Label Value View with Formated Value Input</h2>
    <LabelValueViewFormatted />
  </div>
);

export default LabelValueViewExamples;
