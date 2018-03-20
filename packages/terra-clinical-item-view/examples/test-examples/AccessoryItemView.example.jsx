import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemView from '../../lib/ItemView';

const display1 = <ItemView.Display text="Display for context" />;
const displays = [display1, display1, display1, display1, display1, display1];

const views = () => (
  <div style={{ maxWidth: '700px', border: '1px grey solid' }}>
    <p>Applied width of 700px to show the start and end accessory alignment.</p>
    <h2>Start Acessory</h2>
    <ItemView
      startAccessory={<IconAlert id="StartAccessory" />}
      id="test-start-accessory"
    />
    <h2>End Acessory</h2>
    <ItemView
      endAccessory={<IconInformation id="EndAccessory" />}
      id="test-end-accessory"
    />
    <h2>Start and End Acessory</h2>
    <ItemView
      startAccessory={<IconAlert id="StartAccessory2" />}
      displays={displays}
      endAccessory={<button id="EndAccessory2" size="medium">Disclose</button>}
      layout="twoColumns"
      accessoryAlignment="alignTop"
      id="test-both-accessory-top"
    />
    <h2>Reserve Start Acessory Space</h2>
    <ItemView
      reserveStartAccessorySpace
      displays={displays}
      endAccessory={<button id="EndAccessory3" size="medium">Disclose</button>}
      layout="twoColumns"
      id="test-reserve-start-accessory"
    />
    <h2>Start Accessory with Font Size 100px</h2>
    <ul><li><h4>The max-height and max-width of 40px is maintained</h4></li></ul>
    <ItemView startAccessory={<IconAlert />} id="test-scale" style={{ fontSize: '100px' }} />
  </div>
);

export default views;
