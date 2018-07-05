import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DataGridSrc from '!raw-loader!../../../src/DataGrid';
// import ItemSrc from '!raw-loader!../../../src/Item';

// Example Files
import DataGridStandard from './example/DataGridStandard';
import DataGridStandardSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/DataGridStandard';
import PagingDataGrid from './example/PagingDataGrid';
import PagingDataGridSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/PagingDataGrid';

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Data Grid Example',
        example: <DataGridStandard />,
        source: DataGridStandardSrc,
      },
      {
        title: 'Data Grid w/ Paging',
        example: <PagingDataGrid />,
        source: PagingDataGridSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'DataGrid',
        componentSrc: DataGridSrc,
      },
    ]}
  />
);

export default DocPage;
