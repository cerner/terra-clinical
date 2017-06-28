/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TableHeaderCellTests from './TableHeaderCellTests';
import TableHeaderCellExamples from './TableHeaderCellExamples';

const routes = (
  <div>
    <Route path="/tests/item-collection-table-header-cell-tests" component={TableHeaderCellTests} />
    <Route path="/tests/item-collection-table-header-cell-tests/examples" component={TableHeaderCellExamples} />
  </div>
);

export default routes;
