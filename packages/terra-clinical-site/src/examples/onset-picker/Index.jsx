/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import OnsetPicker from 'terra-clinical-onset-picker/src/OnsetPicker';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import OnsetPickerSrc from '!raw-loader!terra-clinical-onset-picker/src/OnsetPicker';
import ReadMe from 'terra-clinical-onset-picker/docs/README.md';
import { version } from 'terra-clinical-onset-picker/package.json';
// Component Source

// Example Files
import ControlledOnset from './examples/ControlledOnset';

const OnsetExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OnsetPickerSrc} />
    <br />
    <h2 id="default">Default with initialization</h2>
    <OnsetPicker
      birthdate={moment().subtract(6, 'years').format()}
      granularitySelectName="doogs-granularity"
      precisionSelectName="doogs-precision"
      onsetDateInputName="doogs-onsetDate"
    />
    <h2 id="supplied">Controlled onset picker with supplied onset date, granularity, and precision</h2>
    <ControlledOnset />
  </div>
);

export default OnsetExamples;
