import React from 'react';
import ItemCollection from '../../../src/ItemCollection';

const requiredElements = { startAccessoryRequired: true, displaysRequired: 5, commentRequired: true, endAccessoryRequired: true };

const oneColumnItem = (
  <ItemCollection.Item
    startAccessory={<p>S</p>}
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory={<p>E</p>}
    itemStyles={{ layout: 'oneColumn' }}
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
    itemStyles={{ layout: 'twoColumns' }}
  >
    <ItemCollection.Display text="Display 1" />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
    <ItemCollection.Display text="Display 4" />
    <ItemCollection.Display text="Display 5" />
  </ItemCollection.Item>
);

const OneColumnDisplay = () => (
  <ItemCollection id="ItemCollection" requiredElements={requiredElements}>
    {oneColumnItem}
    {oneColumnItem}
    {oneColumnItem}
  </ItemCollection>
);

const TwoColumnDisplay = () => (
  <ItemCollection id="ItemCollection" requiredElements={requiredElements}>
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
