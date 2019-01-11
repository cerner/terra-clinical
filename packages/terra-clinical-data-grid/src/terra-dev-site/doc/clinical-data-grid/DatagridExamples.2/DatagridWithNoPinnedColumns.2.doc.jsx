import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithNoPinnedColumns from './DatagridWithNoPinnedColumns';
import DatagridWithNoPinnedColumnsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithNoPinnedColumns';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithNoPinnedColumnsExample = () => (
  <ExampleTemplate
    description="This example features a DataGrid with no pinned columns. The entirety of the DataGrid will scroll horizontally."
    example={<DatagridWithNoPinnedColumns />}
    exampleSrc={DatagridWithNoPinnedColumnsSrc}
  />
);

export default DatagridWithNoPinnedColumnsExample;
