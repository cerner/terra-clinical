import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ItemView from '../../../ItemView';

const display1 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text" key="123" />;
const display2 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text display2 Text" key="124" />;
const displays = [display1, display2];

const views = () => (
  <div>
    <h2>One Column Layout</h2>
    <ItemView contentWidth="50%" displays={displays} id="test-displays" />
  </div>
);

export default views;
