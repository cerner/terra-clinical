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

const DividedList = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={3}
    hasComment
    hasEndAccessory
    isListDivided
    ariaLabel="Item Collection"
  >
    {defaultItem}
    {defaultItem}
    {defaultItem}
  </ItemCollection>
);

const ListStyles = () => (
  <div id="ListStyles">
    <h3>List Style - Divided </h3>
    <DividedList />
  </div>
);

export default ListStyles;
