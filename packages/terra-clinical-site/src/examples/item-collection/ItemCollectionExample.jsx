import React from 'react';

import ItemCollection from 'terra-clinical-item-collection';
import ItemDisplay from 'terra-clinical-item-display';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';

const display1 = <ItemDisplay icon={<IconPerson />} text="Asif Khan" />;
const display2 = <ItemDisplay text="Care Position: Primary" />;
const display3 = <ItemDisplay text="Room 100A" />;
const display4 = <ItemDisplay text="Acuity: 5" />;
const display5 = <ItemDisplay text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemDisplay text="End Time: 08-05-2016 16:00:00" />;
const comment = <ItemDisplay.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;

const startAccessory = <IconAlert />;
const endAccessory = <IconInformation />;

const row1 = {
  startAccessory,
  displays: [<ItemDisplay icon={<IconPerson />} text="Asif Khan" textStyle="attention" />, display2, display3, display4, display5, display6],
  comment,
  endAccessory,
};
const row2 = {
  startAccessory,
  displays: [display1, display2, display3, <ItemDisplay text="Acuity: 5" icon={<IconAttachment />} />, display5, display6],
  comment,
  itemStyles: { layout: 'twoColumns' },
};
const row3 = {
  displays: [display1, display2, display3, display4, display5, display6],
  comment,
  endAccessory,
};
const row4 = {
  displays: [display1, display2, <ItemDisplay text="Room 100A" textStyle="strikeThrough" />, display4, display5],
  comment,
  endAccessory,
};
const row5 = {
  startAccessory,
  displays: [display1, display2, display3, display4, display5, display6],
  comment,
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
