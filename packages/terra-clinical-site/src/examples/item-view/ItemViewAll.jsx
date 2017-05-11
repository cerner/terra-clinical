import React from 'react';

import ItemView from 'terra-clinical-item-view';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import IconTrophy from 'terra-icon/lib/icon/IconTrophy';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ItemView.Display text="display 3" />;
const display4 = <ItemView.Display text="display 4" />;
const display5 = <ItemView.Display text="display 5" />;

const displays = [display1, display2, display3, display4, display5];

const accessoryStart = <IconFlag />;
const accessoryEnd = <IconTrophy />;

const comment = <ItemView.Comment text="test comment" />;

export default () => <ItemView
  displays={displays}
  layout="twoColumns"
  isTruncated
  textEmphasis="start"
  startAccessory={accessoryStart}
  endAccessory={accessoryEnd}
  comment={comment}
/>;
