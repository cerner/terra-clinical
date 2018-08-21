import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

import DatagridWithCustomContent from './DatagridWithCustomContent';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithCustomContentSrc from '!raw-loader!./DatagridWithCustomContent';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithColumnResizingExample = () => (
  <ExampleTemplate
    description="This example features custom header cell implementations and more complex content cells."
    example={<DatagridWithCustomContent />}
    exampleSrc={DatagridWithCustomContentSrc}
  />
);

export default DatagridWithColumnResizingExample;
