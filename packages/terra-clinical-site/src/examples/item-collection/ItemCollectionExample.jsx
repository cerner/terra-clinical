import React from 'react';

import ItemCollection from 'terra-clinical-item-collection';
import ItemDisplay from 'terra-clinical-item-display';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';

const row1 = {
  startAccessory: <IconBookmark />,
  displays: [<ItemDisplay text="Display 1" textStyle="attention" />, <ItemDisplay text="Display 2" />, <ItemDisplay text="Display 3" />],
  comment: <ItemDisplay.Comment text="Comment" />,
  endAccessory: <IconAttachment />,
};
const row2 = {
  startAccessory: <IconBookmark />,
  displays: [<ItemDisplay text="Display 1" />, <ItemDisplay text="Display 2" />, <ItemDisplay text="Display 3" icon={<IconAttachment />} />],
  comment: <ItemDisplay.Comment text="Comment" />,
  itemStyles: { layout: 'twoColumns' },
};
const row3 = {
  displays: [<ItemDisplay text="Display 1" />, <ItemDisplay text="Display 2" icon={<IconAttachment />} />, <ItemDisplay text="Display 3" />],
  comment: <ItemDisplay.Comment text="Comment" />,
  endAccessory: <IconAttachment />,
};
const row4 = {
  startAccessory: <IconBookmark />,
  displays: [<ItemDisplay text="Display 1" />, <ItemDisplay text="Display 2" textStyle="strikeThrough" icon={<IconAttachment />} />, <ItemDisplay text="Display 3" />],
  comment: <ItemDisplay.Comment text="Comment" />,
  endAccessory: <IconAttachment />,
};
const row5 = {
  startAccessory: <IconBookmark />,
  displays: [<ItemDisplay text="Display 1" />, <ItemDisplay text="Display 2" />, <ItemDisplay text="Display 3" />],
  comment: <ItemDisplay.Comment text="Comment" />,
  itemStyles: { layout: 'twoColumns' },
};

const DefaultItemCollection = () => (
  <ItemCollection
    listStyles={{ isDivided: true }}
    tableStyles={{ isPadded: false, isStriped: false }}
    rows={[row1, row2, row3, row4, row5]}
  />
);

export default DefaultItemCollection;
