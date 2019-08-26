import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';
import Datagrid from './Datagrid';
import DatagridSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/Datagrid';

const DatagridExample = () => (
  <ExampleTemplate
    description="This is a basic example featuring pinned columns and overflow in both directions. A default column width of 250px is used, but Column 0 is using an explicit 100px width. Every 5th row has an explicit 7rem height."
    example={<Datagrid />}
    exampleSrc={DatagridSrc}
  />
);

export default DatagridExample;
