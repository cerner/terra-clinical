import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DataGridSrc from '!raw-loader!../../../../src/DataGrid';

// Example Files
// import SimpleDataGrid from './example/SimpleDataGrid';
// import SimpleDataGridSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/SimpleDataGrid';
// import SubsectionDataGrid from './example/SubsectionDataGrid';
// import SubsectionDataGridSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/SubsectionDataGrid';
// import SelectableDataGrid from './example/SelectableDataGrid';
// import SelectableDataGridSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/SelectableDataGrid';
// import DataGridStandard from './example/DataGridStandard';
// import DataGridStandardSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/DataGridStandard';
// import PagingDataGrid from './example/PagingDataGrid';
// import PagingDataGridSrc from '!raw-loader!./../../../src/terra-dev-site/doc/example/PagingDataGrid';

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    // examples={[
    //   {
    //     title: 'Data Grid',
    //     description: 'This example renders a static DataGrid with dynamic features enabled.',
    //     example: <SimpleDataGrid />,
    //     source: SimpleDataGridSrc,
    //   },
    //   {
    //     title: 'Data Grid w/ Subsections',
    //     description: 'This example renders a DataGrid visible subsections.',
    //     example: <SubsectionDataGrid />,
    //     source: SubsectionDataGridSrc,
    //   },
    //   {
    //     title: 'Data Grid w/ Selections',
    //     description: 'This example renders a DataGrid with selectable headers, rows, and cells.',
    //     example: <SelectableDataGrid />,
    //     source: SelectableDataGridSrc,
    //   },
    //   {
    //     title: 'Data Grid w/ Post-Render Content Retrieval',
    //     description: 'This example renders a DataGrid that loads up to 10 individual sections based upon the DataGrid\'s vertical scroll position.',
    //     example: <PagingDataGrid />,
    //     source: PagingDataGridSrc,
    //   },
    //   {
    //     title: 'Data Grid Example',
    //     description: 'A catch all example',
    //     example: <DataGridStandard />,
    //     source: DataGridStandardSrc,
    //   },
    // ]}
    propsTables={[
      {
        componentName: 'DataGrid',
        componentSrc: DataGridSrc,
      },
    ]}
  />
);

export default DocPage;
