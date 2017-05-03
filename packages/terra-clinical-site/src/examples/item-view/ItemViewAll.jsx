import React from 'react';

import ItemView from 'terra-clinical-item-view';
import ItemComment from 'terra-clinical-item-comment';
import ItemDisplay from 'terra-clinical-item-display';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';


const display1 = <ItemDisplay text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ItemDisplay text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ItemDisplay text="display 3" />;
const display4 = <ItemDisplay text="display 4" />;
const display5 = <ItemDisplay text="display 5" />;

const displays = [display1, display2, display3, display4, display5];

const accessoryStart = <IconPanelLeft />;
const accessoryEnd = <IconPanelRight />;

const comment = <ItemComment text="test comment" />;

export default () => <ItemView
  displays={displays}
  layout="twoColumns"
  isTruncated
  textEmphasis="start"
  startAccessory={accessoryStart}
  endAccessory={accessoryEnd}
  comment={comment}
/>;
