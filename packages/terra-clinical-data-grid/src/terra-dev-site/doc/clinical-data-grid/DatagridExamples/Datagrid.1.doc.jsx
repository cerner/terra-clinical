import React from 'react';
import DocTemplate from 'terra-doc-template/lib/DocTemplate';

import Datagrid from './Datagrid';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridSrc from '!raw-loader!./Datagrid';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridExample = () => (
  <DocTemplate
    examples={[{
      description: 'This is a basic example featuring pinned columns and overflow in both directions. A default column width of 250px is used, but Column 0 is using an explicit 100px width.',
      example: <Datagrid />,
      source: DatagridSrc,
    }]}
  />
);

export default DatagridExample;
