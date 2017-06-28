import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const PaddedTable = () => (
  <ItemCollection
    tableStyles={{ isPadded: true, isStriped: false }}
    rows={[item, item, item, item]}
  />
);

const StrippedTable = () => (
  <ItemCollection
    tableStyles={{ isPadded: false, isStriped: true }}
    rows={[item, item, item, item]}
  />
);

const AllStylesTable = () => (
  <ItemCollection
    tableStyles={{ isPadded: true, isStriped: true }}
    rows={[item, item, item, item]}
  />
);

const TableStyles = () => (
  <div>
    <h3>Table Style - Padding </h3>
    <PaddedTable />
    <br />
    <h3>Table Style - Stripes </h3>
    <StrippedTable />
    <br />
    <h3>Table Style - Padding and Stripes </h3>
    <AllStylesTable />
  </div>
);

export default TableStyles;
