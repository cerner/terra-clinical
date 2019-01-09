import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import OnsetPickerSrc from '!raw-loader!../../../../src/OnsetPicker';

// Example Files
import DefaultOnset from '../example/DefaultOnset';
import DefaultOnsetSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultOnset';
import HandledOnset from '../example/HandledOnset';
import HandledOnsetSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HandledOnset';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default with initialization',
        example: <DefaultOnset />,
        source: DefaultOnsetSrc,
      },
      {
        title: 'Onset picker with supplied data and handlers',
        example: <HandledOnset />,
        source: HandledOnsetSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Onset Picker',
        componentSrc: OnsetPickerSrc,
      },
    ]}
  />
);

export default DocPage;
