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
import HandledOnset from './examples/HandledOnset';

const OnsetExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OnsetPickerSrc} componentName="Onset Picker" />
    <br />
    <h2 id="default">Default with initialization</h2>
    <p>Birthdate: {moment().subtract(6, 'years').format('YYYY-MM-DD')}</p>
    <DefaultOnset />
    <h2 id="supplied">Onset picker with supplied data and handlers</h2>
    <p>Birthdate: {moment().subtract(6, 'years').format('YYYY-MM-DD')}</p>
    <p>Onset date: {moment().subtract(2, 'years').format('YYYY-MM-DD')}</p>
    <p>Precision set: unknown, after, before, on/at</p>
    <p>Precision: before</p>
    <p>Granularity: YEAR</p>
    <HandledOnset />
  </div>
);

export default OnsetExamples;
