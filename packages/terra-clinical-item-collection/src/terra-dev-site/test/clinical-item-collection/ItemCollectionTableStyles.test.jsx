import React from 'react';
import ItemCollection from '../../../ItemCollection';

const defaultItem = (
  <ItemCollection.Item
    startAccessory={<div>S</div>}
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory={<div>E</div>}
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
  </ItemCollection.Item>
);

const PaddedTable = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={3}
    hasComment
    hasEndAccessory
    isTablePadded
    ariaLabel="Padded Table"
  >
    {defaultItem}
    {defaultItem}
    {defaultItem}
  </ItemCollection>
);

const StrippedTable = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={3}
    hasComment
    hasEndAccessory
    isTableStriped
    ariaLabel="Stripped Table"
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
