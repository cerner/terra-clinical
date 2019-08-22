import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import classNames from 'classnames/bind';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const display1 = <ItemView.Display text="Display for context" />;
const displays = [display1, display1, display1, display1, display1, display1];

const views = () => (
  <div className={cx('accessory-itemview-wrapper')}>
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
      endAccessory={<button type="button" id="EndAccessory2" size="medium">Disclose</button>}
      layout="twoColumns"
      accessoryAlignment="alignTop"
      id="test-both-accessory-top"
    />
    <h2>Reserve Start Acessory Space</h2>
    <ItemView
      reserveStartAccessorySpace
      displays={displays}
      endAccessory={<button type="button" id="EndAccessory3" size="medium">Disclose</button>}
      layout="twoColumns"
      id="test-reserve-start-accessory"
    />
    <h2>Start Accessory with Font Size 100px</h2>
    <ul><li><h3>The max-height and max-width of 40px is maintained</h3></li></ul>
    <ItemView startAccessory={<IconAlert />} id="test-scale" className={cx('itemview-fontsize')} />
  </div>
);

export default views;
