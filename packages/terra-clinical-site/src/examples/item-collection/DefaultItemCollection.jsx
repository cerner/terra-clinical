import React from 'react';

import ItemCollection from 'terra-clinical-item-collection';
import ItemView from 'terra-clinical-item-view';

const display1 = <ItemView.Display text="display" style={{ color: 'red' }} />;
const display2 = <ItemView.Display text="display 2" textStyle="attention" />;
const display3 = <ItemView.Display icon={<img alt="G" />} text="display 3" />;
const display4 = <ItemView.Display icon={<img alt="G" />} text="ROW2 ITEM1" />;
const display5 = <ItemView.Display icon={<img alt="G" />} text="ROW2 ITEM2" textStyle="secondary" id="test-display-secondary" />;
const allDisplays = [display1, display2, display3, display1, display2, display3, display1, display2, display3, display1, display2, display3];
const row1 = { displays: allDisplays, comment: <ItemView.Comment text="test comment" />, itemStyles: { layout: 'twoColumns' } };
const row2 = { displays: [display4, display5] };
const columnWidths = { displayWidths: ['small', 'medium', 'small', 'small', 'small', 'small', 'small', 'small', 'small'] };


const DefaultItemCollection = () => (
  <ItemCollection
    columnWidths={columnWidths}
    tableStyles={{ isPadded: false, isStriped: false }}
    rows={[row1, row2]}
  />
);

export default DefaultItemCollection;


// itemStyles={{ layout: 'twoColumns' }}
