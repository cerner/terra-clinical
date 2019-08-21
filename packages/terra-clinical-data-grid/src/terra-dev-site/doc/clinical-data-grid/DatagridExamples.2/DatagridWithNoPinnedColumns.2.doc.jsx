import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';
import DatagridWithNoPinnedColumns from './DatagridWithNoPinnedColumns';
import DatagridWithNoPinnedColumnsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithNoPinnedColumns';

const DatagridWithNoPinnedColumnsExample = () => (
  <ExampleTemplate
    description="This example features a DataGrid with no pinned columns. The entirety of the DataGrid will scroll horizontally."
    example={<DatagridWithNoPinnedColumns />}
    exampleSrc={DatagridWithNoPinnedColumnsSrc}
  />
);

export default DatagridWithNoPinnedColumnsExample;
