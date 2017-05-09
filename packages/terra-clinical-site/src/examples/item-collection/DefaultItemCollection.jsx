import React from 'react';

import ItemCollection from 'terra-clinical-item-collection';
import ItemDisplay from 'terra-clinical-item-display';

const display1 = <ItemDisplay text="display" style={{ color: 'red' }} />;
const display2 = <ItemDisplay text="display 2" textStyle="attention" />;
const display3 = <ItemDisplay icon={<img alt="G" />} text="display 3" />;
const display4 = <ItemDisplay icon={<img alt="G" />} text="ROW2 ITEM1" />;
const display5 = <ItemDisplay icon={<img alt="G" />} text="ROW2 ITEM2" textStyle="secondary" id="test-display-secondary" />;
const allDisplays = [display1, display2, display3, display1, display2, display3, display1, display2, display3, display1, display2, display3];
const row1 = { startAccessory: <ItemDisplay.Comment text="test comment" />, displays: allDisplays, comment: <ItemDisplay.Comment text="test comment" />, itemStyles: { layout: 'twoColumns' } };
const row2 = { displays: [display4, display5] };

const DefaultItemCollection = () => (
  <ItemCollection
    listStyles={{ isDivided: true }}
    tableStyles={{ isPadded: false, isStriped: false }}
    rows={[row1, row2]}
  />
);

export default DefaultItemCollection;


// itemStyles={{ layout: 'twoColumns' }}
