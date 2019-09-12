import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import OnsetPickerSrc from '!raw-loader!../../../../src/OnsetPicker';
import OnsetPickerPropsTable from '!terra-props-table-loader!../../../../src/OnsetPicker';

// Example Files
import DefaultOnset from '../example/DefaultOnset';
import DefaultOnsetSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultOnset';
import HandledOnset from '../example/HandledOnset';
import HandledOnsetSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HandledOnset';
import OnsetWithHiddenLegend from '../example/OnsetWithHiddenLegend';
import OnsetWithHiddenLegendSrc from '../example/OnsetWithHiddenLegend';

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
      {
        title: 'Onset picker with Hidden legend',
        example: <OnsetWithHiddenLegend />,
        source: OnsetWithHiddenLegendSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Onset Picker',
        componentSrc: OnsetPickerSrc,
        componentProps: OnsetPickerPropsTable,
      },
    ]}
  />
);

export default DocPage;
