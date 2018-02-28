/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HeaderSrc from '!raw-loader!../src/ActionHeader';

// Example Files
import ActionHeaderBackNextPreviousClose from './index-examples/ActionHeader-BackNextPreviousClose';
import ActionHeaderExpandClose from './index-examples/ActionHeader-MaximizeClose';
import ActionHeaderMinimizeCustomClose from './index-examples/ActionHeader-MinimizeCustomClose';
import ActionHeaderKeepClose from './index-examples/ActionHeader-KeepClose';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Action Header</h2>
    <PropsTable id="props" src={HeaderSrc} />
    <h2>Back, Previous-Next, Close</h2>
    <ActionHeaderBackNextPreviousClose />
    <h2>Maximize, Close</h2>
    <ActionHeaderExpandClose />
    <h2>Keeps close button in small view port</h2>
    <ActionHeaderKeepClose />
    <h2>Minimize, Custom Content, Children, Close </h2>
    <ActionHeaderMinimizeCustomClose />
  </div>
);

export default HeaderExamples;
