import React from 'react';
import ItemView from '../../lib/ItemView';

const accessoryStart = <img alt="Graphic Start" id="StartAccessory" />;
const accessoryEnd = <img alt="Graphic End" id="EndAccessory" />;

const views = () => (
  <div>
    <h2>Start Acessory</h2>
    <ItemView startAccessory={accessoryStart} id="test-start-accessory" />
    <h2>End Acessory</h2>
    <ItemView endAccessory={accessoryEnd} id="test-end-accessory" />
    <h2>Start and End Acessory</h2>
    <ItemView startAccessory={accessoryStart} endAccessory={accessoryEnd} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default views;
