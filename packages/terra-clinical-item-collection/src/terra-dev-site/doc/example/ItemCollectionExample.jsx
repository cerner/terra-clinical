import React from 'react';

import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemCollection from '../../../ItemCollection';

const display1 = <ItemCollection.Display icon={<IconPerson />} text="Asif Khan" />;
const display2 = <ItemCollection.Display text="Care Position: Primary" />;
const display3 = <ItemCollection.Display text="Room 100A" />;
const display4 = <ItemCollection.Display text="Acuity: 5" />;
const display5 = <ItemCollection.Display text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemCollection.Display text="End Time: 08-05-2016 16:00:00" />;
const comment = <ItemCollection.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;

const startAccessory = <IconAlert />;
const endAccessory = <IconInformation />;

const DefaultItemCollection = () => (
  <ItemCollection
    hasStartAccessory
    numberOfDisplays={6}
    hasComment
    hasEndAccessory
    isListDivided
    isTableStriped
  >
    <ItemCollection.Item
      startAccessory={startAccessory}
      comment={comment}
      endAccessory={endAccessory}
    >
      <ItemCollection.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />
      {display2}
      {display3}
      {display4}
      {display5}
      {display6}
    </ItemCollection.Item>
    <ItemCollection.Item
      startAccessory={startAccessory}
      comment={comment}
      endAccessory={endAccessory}
      listItemLayout="twoColumns"
    >
      {display1}
      {display2}
      {display3}
      <ItemCollection.Display text="Acuity: 5" icon={<IconAttachment />} />
      {display5}
      {display6}
    </ItemCollection.Item>
    <ItemCollection.Item
      comment={comment}
      endAccessory={endAccessory}
    >
      {display1}
      {display2}
      {display3}
      {display4}
      {display5}
      {display6}
    </ItemCollection.Item>
    <ItemCollection.Item
      comment={comment}
      endAccessory={endAccessory}
    >
      {display1}
      {display2}
      <ItemCollection.Display text="Room 100A" textStyle="strikeThrough" />
      {display4}
      {display5}
    </ItemCollection.Item>
    <ItemCollection.Item
      startAccessory={startAccessory}
      comment={comment}
      listItemLayout="twoColumns"
    >
      {display1}
      {display2}
      {display3}
      {display4}
      {display5}
      {display6}
    </ItemCollection.Item>
  </ItemCollection>
);

export default DefaultItemCollection;
