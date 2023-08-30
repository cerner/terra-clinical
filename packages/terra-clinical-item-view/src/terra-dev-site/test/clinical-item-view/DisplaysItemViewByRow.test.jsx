import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ItemView from '../../../ItemView';

const display1 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text" key="123" />;
const display2 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const views = () => (
  <div>
    <h2>Two Column Layout by Row </h2>
    <ItemView displays={displays} trueColumn={false} layout="twoColumns" id="test-displays-two-row" />
    <br />
    <h2>Two Column Layout by Row with Start TextEmphasis </h2>
    <ItemView displays={displays} trueColumn={false} layout="twoColumns" textEmphasis="start" id="test-displays-two-row-start" />
  </div>
);

export default views;
