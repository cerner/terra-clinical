import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithSelections from './DatagridWithSelections';
import DatagridWithSelectionsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithSelections';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithSelectionsExample = () => (
  <ExampleTemplate
    description="This example features selectable rows, cells, and column headers. Column headers implement rudimentary sorting on selection. Rows can be selected by interacting with the leading column."
    example={<DatagridWithSelections />}
    exampleSrc={DatagridWithSelectionsSrc}
  />
);

export default DatagridWithSelectionsExample;
