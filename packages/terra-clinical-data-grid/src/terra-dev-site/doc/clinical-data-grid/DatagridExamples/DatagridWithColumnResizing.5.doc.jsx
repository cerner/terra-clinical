import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

import DatagridWithColumnResizing from './DatagridWithColumnResizing';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithColumnResizingSrc from '!raw-loader!./DatagridWithColumnResizing';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithColumnResizingExample = () => (
  <ExampleTemplate
    description="This example features column resizing using the draggable resize region in the column header."
    example={<DatagridWithColumnResizing />}
    exampleSrc={DatagridWithColumnResizingSrc}
  />
);

export default DatagridWithColumnResizingExample;
