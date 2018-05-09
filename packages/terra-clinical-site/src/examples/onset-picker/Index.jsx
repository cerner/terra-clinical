/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-onset-picker/docs/README.md';
import { name } from 'terra-clinical-onset-picker/package.json';

// Component Source
import OnsetPickerSrc from '!raw-loader!terra-clinical-onset-picker/src/OnsetPicker';

// Example Files
import DefaultOnset from './examples/DefaultOnset';
import DefaultOnsetSrc from '!raw-loader!./examples/DefaultOnset';
import HandledOnset from './examples/HandledOnset';
import HandledOnsetSrc from '!raw-loader!./examples/HandledOnset';

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
