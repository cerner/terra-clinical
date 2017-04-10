import React from 'react';

import ItemView from 'terra-clinical-item-view';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ItemView.Display text="display 3" />;
const display4 = <ItemView.Display text="display 4" />;
const display5 = <ItemView.Display text="display 5" />;
const display6 = <ItemView.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

export default () => <ItemView displays={displays} layout="twoColumns" />;
