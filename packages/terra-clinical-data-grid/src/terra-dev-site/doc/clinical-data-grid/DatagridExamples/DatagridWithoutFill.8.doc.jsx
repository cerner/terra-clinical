import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithoutFill from './DatagridWithoutFill';
import DatagridWithoutFillSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples/Datagrid';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithoutFillExample = () => (
  <ExampleTemplate
    description="This example does not set the fill property, allowing the DataGrid to layout with its natural block styling. Markup adjustments are made to improve overall performance."
    example={<DatagridWithoutFill />}
    exampleSrc={DatagridWithoutFillSrc}
  />
);

export default DatagridWithoutFillExample;
