import React from 'react';
import ItemView from 'terra-clinical-item-view';

const DefaultItem = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>E</p>,
};

export default DefaultItem;
