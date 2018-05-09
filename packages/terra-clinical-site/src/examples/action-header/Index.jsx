/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-action-header/docs/README.md';
import { name } from 'terra-clinical-action-header/package.json';

// Component Source
import HeaderSrc from '!raw-loader!terra-clinical-action-header/src/ActionHeader';

// Example Files
import ActionHeaderBackNextPreviousClose from './ActionHeader-BackNextPreviousClose';
import ActionHeaderBackNextPreviousCloseSrc from '!raw-loader!./ActionHeader-BackNextPreviousClose';
import ActionHeaderExpandClose from './ActionHeader-MaximizeClose';
import ActionHeaderExpandCloseSrc from '!raw-loader!./ActionHeader-MaximizeClose';
import ActionHeaderMinimizeCustomClose from './ActionHeader-MinimizeCustomClose';
import ActionHeaderMinimizeCustomCloseSrc from '!raw-loader!./ActionHeader-MinimizeCustomClose';
import ActionHeaderKeepClose from './ActionHeader-KeepClose';
import ActionHeaderKeepCloseSrc from '!raw-loader!./ActionHeader-KeepClose';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Back, Previous-Next, Close',
        example: <ActionHeaderBackNextPreviousClose />,
        source: ActionHeaderBackNextPreviousCloseSrc,
      },
      {
        title: 'Maximize, Close',
        example: <ActionHeaderExpandClose />,
        source: ActionHeaderExpandCloseSrc,
      },
      {
        title: 'Keeps close button in small view port',
        example: <ActionHeaderKeepClose />,
        source: ActionHeaderKeepCloseSrc,
      },
      {
        title: 'Minimize, Custom Content, Children, Close',
        example: <ActionHeaderMinimizeCustomClose />,
        source: ActionHeaderMinimizeCustomCloseSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: HeaderSrc,
      },
    ]}
  />
);

export default DocPage;
