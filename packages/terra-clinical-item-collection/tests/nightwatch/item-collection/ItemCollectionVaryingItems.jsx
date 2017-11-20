import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';

const DefaultItemCollection = () => (
  <ItemCollection
    id="VaryingItems"
    isListDivided
    hasStartAccessory
    numberOfDisplays={4}
    hasComment
    hasEndAccessory
    breakpoint="small"
  >
    <ItemCollection.Item
      listItemLayout="twoColumns"
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<button size="medium">Disclose</button>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Item
      listItemLayout="twoColumns"
      startAccessory={<div>S</div>}
      comment={<ItemCollection.Comment text="test comment" />}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
    </ItemCollection.Item>
    <ItemCollection.Item
      listItemLayout="twoColumns"
      startAccessory={<div>S</div>}
      endAccessory={<button size="medium">Disclose</button>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Item
      listItemLayout="twoColumns"
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<button size="medium">Disclose</button>}
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
      listItemLayout="twoColumns"
      startAccessory={<div>S</div>}
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory={<button size="medium">Disclose</button>}
    >
      <ItemCollection.Display text="Display 1" />
    </ItemCollection.Item>
    <ItemCollection.Item
      listItemLayout="twoColumns"
      startAccessory={<div>S</div>}
    >
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
    </ItemCollection.Item>
  </ItemCollection>
);

export default DefaultItemCollection;
