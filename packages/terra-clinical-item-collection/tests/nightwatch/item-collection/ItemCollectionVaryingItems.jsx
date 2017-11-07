import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';

const DefaultItemCollection = () => (
  <ItemCollection id="VaryingItems" breakpoint="medium">
    <ItemCollection.Item comment={<ItemCollection.Comment text="test comment" />} endAccessory={<div>E</div>}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Item startAccessory={<div>S</div>} comment={<ItemCollection.Comment text="test comment" />}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
    </ItemCollection.Item>
    <ItemCollection.Item startAccessory={<div>S</div>} endAccessory={<div>E</div>}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Item comment={<ItemCollection.Comment text="test comment" />} endAccessory={<div>E</div>}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
      <ItemCollection.Display text="Display 6" />
      <ItemCollection.Display text="Display 7" />
      <ItemCollection.Display text="Display 8" />
    </ItemCollection.Item>
    <ItemCollection.Item startAccessory={<div>S</div>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<div>E</div>}>
      <ItemCollection.Display text="Display 1" />
    </ItemCollection.Item>
    <ItemCollection.Item startAccessory={<div>S</div>} >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
    </ItemCollection.Item>
  </ItemCollection>
);

export default DefaultItemCollection;
