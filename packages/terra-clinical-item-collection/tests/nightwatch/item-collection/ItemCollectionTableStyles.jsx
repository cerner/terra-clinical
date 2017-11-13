import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';

const defaultItem = (
  <ItemCollection.Item startAccessory={<div>S</div>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<div>E</div>}>
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
  </ItemCollection.Item>
);

const PaddedTable = () => (
  <ItemCollection
    requiredElements={{ startAccessoryRequired: true, displaysRequired: 3, commentRequired: true, endAccessoryRequired: true }}
    isTablePadded
  >
    {defaultItem}
    {defaultItem}
    {defaultItem}
  </ItemCollection>
);

const StrippedTable = () => (
  <ItemCollection
    requiredElements={{ startAccessoryRequired: true, displaysRequired: 3, commentRequired: true, endAccessoryRequired: true }}
    isTableStriped
  >
    {defaultItem}
    {defaultItem}
    {defaultItem}
  </ItemCollection>
);

const TableStyles = () => (
  <div id="TableStyles">
    <h3>Table Style - Padding </h3>
    <PaddedTable />
    <br />
    <h3>Table Style - Stripes </h3>
    <StrippedTable />
  </div>
);

export default TableStyles;
