import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithPaging from './DatagridWithPaging';
import DatagridWithPagingSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples/DatagridWithPaging';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithPagingExample = () => (
  <ExampleTemplate
    description="This example features dynamic content loading using the DataGrid's `onRequestContent` prop. Up to 10 sections are loaded as the user scrolls through the example."
    example={<DatagridWithPaging />}
    exampleSrc={DatagridWithPagingSrc}
  />
);

export default DatagridWithPagingExample;
