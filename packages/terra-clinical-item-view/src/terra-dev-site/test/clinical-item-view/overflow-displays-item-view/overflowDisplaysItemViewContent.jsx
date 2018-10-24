import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemView from '../../../../ItemView';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const accessoryStart = id => <IconAlert id={id} />;
const accessoryEnd = id => <IconInformation id={id} />;
const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

export {
  displays,
  accessoryStart,
  accessoryEnd,
  comment,
};
