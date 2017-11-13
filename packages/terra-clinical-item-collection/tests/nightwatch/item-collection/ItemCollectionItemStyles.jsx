import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';

const oneColumnItem = (
  <ItemCollection.Item
    startAccessory={<p>S</p>}
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory={<p>E</p>}
    listItemStyles={{ layout: 'oneColumn' }}
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
    <ItemCollection.Display text="Display 4" />
    <ItemCollection.Display text="Display 5" />
  </ItemCollection.Item>
);

const twoColumnItem = (
  <ItemCollection.Item
    startAccessory={<p>S</p>}
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory={<p>E</p>}
    listItemStyles={{ layout: 'twoColumns' }}
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
    <ItemCollection.Display text="Display 4" />
    <ItemCollection.Display text="Display 5" />
  </ItemCollection.Item>
);

const OneColumnDisplay = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={5}
    hasComment
    hasEndAccessory
  >
    {oneColumnItem}
    {oneColumnItem}
    {oneColumnItem}
  </ItemCollection>
);

const TwoColumnDisplay = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={5}
    hasComment
    hasEndAccessory
  >
    {twoColumnItem}
    {twoColumnItem}
    {twoColumnItem}
  </ItemCollection>
);

const ItemStyles = () => (
  <div id="ItemStyles">
    <h3>List Item Style - One Column </h3>
    <OneColumnDisplay />
    <br />
    <h3>List Item Style - Two Columns </h3>
    <TwoColumnDisplay />
    <br />
  </div>
);

export default ItemStyles;
