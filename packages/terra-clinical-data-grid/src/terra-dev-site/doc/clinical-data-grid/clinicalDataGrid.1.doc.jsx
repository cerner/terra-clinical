import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';
// Component Source
import DataGridSrc from '!raw-loader!../../../../src/DataGrid';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'DataGrid',
        componentSrc: DataGridSrc,
      },
    ]}
  />
);

export default DocPage;
