import React from 'react';

import ItemView from 'terra-clinical-item-view';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ItemView.Display text="display 3" />;
const display4 = <ItemView.Display text="display 4" />;
const display5 = <ItemView.Display text="display 5" />;
const display6 = <ItemView.Display text="display 6" />;
const display7 = <ItemView.Display text="display 7" />;
const display8 = <ItemView.Display text="display 8" />;
const display9 = <ItemView.Display text="display 9" />;
const displays = [display1, display2, display3, display4, display5, display6, display7, display8, display9];

export default () => <ItemView displays={displays} layout="twoColumns" />;
