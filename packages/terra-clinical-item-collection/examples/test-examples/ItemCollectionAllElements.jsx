import React from 'react';
import ItemCollection from '../../lib/ItemCollection';

const DefaultItemCollection = () => (
  <ItemCollection
    id="ItemCollection"
    hasStartAccessory
    numberOfDisplays={8}
    hasComment
    hasEndAccessory
  >
    <ItemCollection.Item
      startAccessory={<div>S</div>}
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<div>E</div>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
      <ItemCollection.Display text="Display 6" />
      <ItemCollection.Display text="Display 7" />
      <ItemCollection.Display text="Display 8" />
    </ItemCollection.Item>
    <ItemCollection.Item
      startAccessory={<div>S</div>}
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<div>E</div>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
      <ItemCollection.Display text="Display 6" />
      <ItemCollection.Display text="Display 7" />
      <ItemCollection.Display text="Display 8" />
    </ItemCollection.Item>
    <ItemCollection.Item
      startAccessory={<div>S</div>}
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<div>E</div>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
      <ItemCollection.Display text="Display 6" />
      <ItemCollection.Display text="Display 7" />
      <ItemCollection.Display text="Display 8" />
    </ItemCollection.Item>
  </ItemCollection>
);

export default DefaultItemCollection;
