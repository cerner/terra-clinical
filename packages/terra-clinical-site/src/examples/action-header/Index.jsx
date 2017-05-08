/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-action-header/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HeaderSrc from '!raw-loader!terra-clinical-action-header/src/ActionHeader';

// Example Files
import ActionHeaderBackNextPreviousClose from './ActionHeader-BackNextPreviousClose';
import ActionHeaderExpandClose from './ActionHeader-MaximizeClose';
import ActionHeaderMinimizeCustomClose from './ActionHeader-MinimizeCustomClose';

const HeaderExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Action Header</h2>
    <PropsTable id="props" src={HeaderSrc} />
    <h2>Back, Previous-Next, Close</h2>
    <ActionHeaderBackNextPreviousClose />
    <h2>Maximize, Close</h2>
    <ActionHeaderExpandClose />
    <h2>Minimize, Custom Content, Close </h2>
    <ActionHeaderMinimizeCustomClose />
  </div>
);

export default HeaderExamples;
