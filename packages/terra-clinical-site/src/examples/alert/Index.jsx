/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-alert/docs/README.md';
import { version } from 'terra-clinical-alert/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AlertSrc from '!raw-loader!terra-clinical-alert/src/Alert';

// Example Files
import OutsideRecordsExample from './OutsideRecordsExample';

const AlertExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AlertSrc} />
    <h2>Alert Examples</h2>
    <br />
    <p>
    PLEASE NOTE: The strings that are internationalized in the following examples are the default titles for each of
    the alert types.
    </p>
    <br /><hr /><br />
    <OutsideRecordsExample />
    <br /><hr /><br />
  </div>
);

export default AlertExamples;
