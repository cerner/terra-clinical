import React from 'react';
import ItemCollection from '../../../ItemCollection';

const oneColumnItem = (
  <ItemCollection.Item
    startAccessory="S"
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory="E"
    listItemLayout="oneColumn"
  >
    <ItemCollection.Display text="Display 1: Shows one column layout." />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
    <ItemCollection.Display text="Display 4" />
    <ItemCollection.Display text="Display 5" />
  </ItemCollection.Item>
);

const twoColumnItem = (
  <ItemCollection.Item
    startAccessory="S"
    comment={<ItemCollection.Comment text="test comment" />}
    endAccessory="E"
    listItemLayout="twoColumns"
  >
    <ItemCollection.Display text="Display 1: Shows two column layout." />
    <ItemCollection.Display text="Display 2" />
    <ItemCollection.Display text="Display 3" />
    <ItemCollection.Display text="Display 4" />
    <ItemCollection.Display text="Display 5" />
  </ItemCollection.Item>
);

const LayoutDisplay = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={5}
    hasComment
    hasEndAccessory
    isTablePadded
  >
    {oneColumnItem}
    {twoColumnItem}
  </ItemCollection>
);

const AlignmentDisplay = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={5}
    hasComment
    hasEndAccessory
    isTablePadded
  >
    <ItemCollection.Item
      startAccessory="S"
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory="E"
      accessoryAlignment="alignTop"
    >
      <ItemCollection.Display text="Display 1: Shows top accessory alignment." />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
    </ItemCollection.Item>
    <ItemCollection.Item
      startAccessory="S"
      comment={<ItemCollection.Comment text="test comment" />}
      endAccessory="E"
    >
      <ItemCollection.Display text="Display 1: Shows center accessory alignment." />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
      <ItemCollection.Display text="Display 4" />
      <ItemCollection.Display text="Display 5" />
    </ItemCollection.Item>
  </ItemCollection>
);

const ItemStyles = () => (
  <div id="ItemStyles">
    <h3>List Item Layout - One Column vs Two Columns </h3>
    <LayoutDisplay />
    <br />
    <h3>Accessory Alignment - Top vs Center </h3>
    <AlignmentDisplay />
    <br />
  </div>
);

export default ItemStyles;
