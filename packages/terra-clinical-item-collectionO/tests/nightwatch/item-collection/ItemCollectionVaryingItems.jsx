import React from 'react';
import ItemView from 'terra-clinical-item-view';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const differentItem1 = {
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>E</p>,
};

const differentItem2 = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />],
  comment: <ItemView.Comment text="test comment" />,
};

const differentItem3 = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />],
  endAccessory: <p>E</p>,
};

const differentItem4 = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>E</p>,
};

const differentItem5 = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />, <ItemView.Display text="Display 5" />, <ItemView.Display text="Display 5" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>E</p>,
};

const differentItem6 = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />],
};

const DefaultItemCollection = () => (
  <ItemCollection
    rows={[item, differentItem1, differentItem2, differentItem3, differentItem4, differentItem5, differentItem6]}
    id="ItemCollection"
  />
);

export default DefaultItemCollection;
