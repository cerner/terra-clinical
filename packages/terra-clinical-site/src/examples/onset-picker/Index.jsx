/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import OnsetPickerSrc from '!raw-loader!terra-clinical-onset-picker/src/OnsetPicker';
import ReadMe from 'terra-clinical-onset-picker/docs/README.md';
import { version } from 'terra-clinical-onset-picker/package.json';
// Component Source

// Example Files
import DefaultOnset from './examples/DefaultOnset';
import ControlledOnset from './examples/ControlledOnset';

const OnsetExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OnsetPickerSrc} />
    <br />
    <h2 id="default">Default with initialization</h2>
    <DefaultOnset />
    <h2 id="supplied">Controlled onset picker with supplied data</h2>
    <p>Birthdate: {moment().subtract(6, 'years').format('YYYY-MM-DD')}</p>
    <p>Onset date: {moment().subtract(2, 'years').format('YYYY-MM-DD')}</p>
    <p>Precision set: UNKNOWN, AFTER, BEFORE, ON/AT</p>
    <p>Precision: BEFORE</p>
    <p>Granularity: YEAR</p>
    <ControlledOnset />
  </div>
);

export default OnsetExamples;
