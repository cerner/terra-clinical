import React from 'react';

import ItemView from 'terra-clinical-item-view';
import ItemDisplay from 'terra-clinical-item-display';

const display1 = <ItemDisplay text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ItemDisplay text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ItemDisplay text="display 3" />;
const display4 = <ItemDisplay text="display 4" />;
const display5 = <ItemDisplay text="display 5" />;
const display6 = <ItemDisplay text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

export default () => <ItemView displays={displays} layout="twoColumns" textEmphasis="start" />;
