import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemView from '../../lib/ItemView';

const views = () => (
  <div>
    <h2>Start Acessory</h2>
    <ItemView startAccessory={<IconAlert id="StartAccessory" />} id="test-start-accessory" />
    <h2>End Acessory</h2>
    <ItemView endAccessory={<IconInformation id="EndAccessory" />} id="test-end-accessory" />
    <h2>Start and End Acessory</h2>
    <ItemView startAccessory={<IconAlert id="StartAccessory" />} endAccessory={<IconInformation id="EndAccessory" />} accessoryAlignment="alignTop" id="test-both-accessory-top" />
    <h2>Scaled Accessories with Font Size 100px (max-height and max-width is 60px)</h2>
    <ItemView startAccessory={<IconAlert />} endAccessory={<IconInformation />} id="test-both-scale" style={{ fontSize: '100px' }} />
  </div>
);

export default views;
