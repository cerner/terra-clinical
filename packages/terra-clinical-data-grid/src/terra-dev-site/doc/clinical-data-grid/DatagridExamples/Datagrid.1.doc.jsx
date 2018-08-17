import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

import Datagrid from './Datagrid';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridSrc from '!raw-loader!./Datagrid';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridExample = () => (
  <ExampleTemplate
    description="This is a basic example featuring pinned columns and overflow in both directions."
    example={<Datagrid />}
    exampleSrc={DatagridSrc}
  />
);

export default DatagridExample;
