import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';
import DatagridWithoutFill from './DatagridWithoutFill';
import DatagridWithoutFillSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/Datagrid';

const DatagridWithoutFillExample = () => (
  <ExampleTemplate
    description="This example does not set the fill property, allowing the DataGrid to layout with its natural block styling. Markup adjustments are made to improve overall performance."
    example={<DatagridWithoutFill />}
    exampleSrc={DatagridWithoutFillSrc}
  />
);

export default DatagridWithoutFillExample;
