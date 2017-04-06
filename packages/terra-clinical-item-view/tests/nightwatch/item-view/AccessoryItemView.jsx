import React from 'react';

import ItemView from '../../../lib/ItemView';

const accessoryStart = <img alt="Graphic Start" />;
const accessoryEnd = <img alt="Graphic End" />;

const views = () => (
  <div>
    <ItemView startAccessory={accessoryStart} id="test-start-accessory" />
    <ItemView endAccessory={accessoryEnd} id="test-end-accessory" />
    <ItemView startAccessory={accessoryStart} endAccessory={accessoryEnd} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default views;
