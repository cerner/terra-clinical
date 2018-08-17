import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

import DatagridWithPaging from './DatagridWithPaging';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithPagingSrc from '!raw-loader!./DatagridWithPaging';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithPagingExample = () => (
  <ExampleTemplate
    description="This example features dynamic content loading using the DataGrid's `onRequestContent` prop. Up to 10 sections are loaded as the user scrolls through the example."
    example={<DatagridWithPaging />}
    exampleSrc={DatagridWithPagingSrc}
  />
);

export default DatagridWithPagingExample;
