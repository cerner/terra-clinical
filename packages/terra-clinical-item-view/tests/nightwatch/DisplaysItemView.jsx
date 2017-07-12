import React from 'react';
import ItemView from '../../lib/ItemView';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const views = () => (
  <div>
    <h2>One Column Layout</h2>
    <ItemView displays={displays} id="test-displays" />
    <br />
    <h2>Two Column Layout </h2>
    <ItemView displays={displays} layout="twoColumns" id="test-displays-two" />
    <br />
    <h2>Two Column Layout with Start TextEmphasis</h2>
    <ItemView displays={displays} layout="twoColumns" textEmphasis="start" id="test-displays-two-start" />
  </div>
);

export default views;
