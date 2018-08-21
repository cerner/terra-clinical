import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

import DatagridWithNoPinnedColumns from './DatagridWithNoPinnedColumns';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithNoPinnedColumnsSrc from '!raw-loader!./DatagridWithNoPinnedColumns';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithNoPinnedColumnsExample = () => (
  <ExampleTemplate
    description="This example features a DataGrid with no pinned columns. The entirety of the DataGrid will scroll horizontally."
    example={<DatagridWithNoPinnedColumns />}
    exampleSrc={DatagridWithNoPinnedColumnsSrc}
  />
);

export default DatagridWithNoPinnedColumnsExample;
