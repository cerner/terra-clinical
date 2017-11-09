import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemView from '../../lib/ItemView';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;

const views = () => (
  <div style={{ maxWidth: '700px' }}>
    <p>Applied width of 700px to show the start and end accessory alignment.</p>
    <h2>Start Acessory</h2>
    <ItemView startAccessory={<IconAlert id="StartAccessory" />} id="test-start-accessory" />
    <h2>End Acessory</h2>
    <ItemView endAccessory={<IconInformation id="EndAccessory" />} id="test-end-accessory" />
    <h2>Start and End Acessory</h2>
    <ItemView startAccessory={<IconAlert id="StartAccessory" />} endAccessory={<IconInformation id="EndAccessory" />} accessoryAlignment="alignTop" id="test-both-accessory-top" />
    <h2>Align Start Acessory</h2>
    <ItemView alignStartAccessory endAccessory={<IconInformation id="EndAccessory" />} accessoryAlignment="alignTop" displays={[display1]} id="test-align-start-accessory" />
    <h2>Align End Acessory</h2>
    <ItemView startAccessory={<IconAlert id="StartAccessory" />} alignEndAccessory accessoryAlignment="alignTop" displays={[display1]} id="test-align-end-accessory" />
    <h2>Scaled Start and End Acessory</h2>
    <ItemView accessoryScale="40px" startAccessory={<IconAlert id="StartAccessory" />} endAccessory={<IconInformation id="EndAccessory" />} accessoryAlignment="alignTop" id="test-accessory-scale" />
    <h2>Scaled Accessories with Font Size 100px (max-height and max-width is 60px)</h2>
    <ItemView startAccessory={<IconAlert />} endAccessory={<IconInformation />} id="test-both-scale" style={{ fontSize: '100px' }} />
  </div>
);

export default views;
