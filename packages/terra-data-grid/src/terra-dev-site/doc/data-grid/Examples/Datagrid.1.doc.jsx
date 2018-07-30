import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DataGridExampleSrc from '!raw-loader!../../example/DatagridExample';

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

import DataGridExample from '../../example/DatagridExample';

const DataGridExamplePage = () => (
  <ExampleTemplate
    example={<DataGridExample />}
    exampleSrc={DataGridExampleSrc}
    title="Data Grid"
  />
);

export default DataGridExamplePage;
