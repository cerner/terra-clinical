import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithColumnResizing from './DatagridWithColumnResizing';
import DatagridWithColumnResizingSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithColumnResizing';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithColumnResizingExample = () => (
  <ExampleTemplate
    description="This example features column resizing using the draggable resize region in the column header. Resizing for Column 1 is explicitly disabled."
    example={<DatagridWithColumnResizing />}
    exampleSrc={DatagridWithColumnResizingSrc}
  />
);

export default DatagridWithColumnResizingExample;
