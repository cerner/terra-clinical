import React from 'react';
import Heading from 'terra-heading';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import ItemView from 'terra-clinical-item-view';

const display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;
const display2 = <ItemView.Display text="Care Position: Primary" />;
const display3 = <ItemView.Display text="Room 100A" />;
const display4 = <ItemView.Display text="Acuity: 5" />;
const display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;
const displays = [display1, display2, display3, display4, display5, display6];

export default () => (
  <div>
    <Heading id="heading" level={5}>Patient Information</Heading>
    <ItemView displays={displays} />
  </div>
);
