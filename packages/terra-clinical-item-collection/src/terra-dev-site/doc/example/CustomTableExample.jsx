import React from 'react';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import classNames from 'classnames/bind';
import styles from './CustomTableExample.scss';

const display1 = <ItemView.Display icon={<IconPerson />} text="Asif Khan" />;
const display2 = <ItemView.Display text="Care Position: Primary" />;
const display3 = <ItemView.Display text="Room 100A" />;
const display4 = <ItemView.Display text="Acuity: 5" />;
const display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;
const comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;
const startAccessory = <IconAlert />;
const endAccessory = <IconInformation />;

const cx = classNames.bind(styles);

const listDisplay = (
  <List role="listbox">
    <Item key="default">
      <ItemView
        displays={[
          <ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
        endAccessory={endAccessory}
      />
    </Item>
    <Item key="default">
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          <ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
        endAccessory={endAccessory}
        layout="twoColumns"
      />
    </Item>
    <Item key="default">
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        reserveStartAccessorySpace
        comment={comment}
        endAccessory={endAccessory}
      />
    </Item>
    <Item key="default">
      <ItemView
        displays={[
          display1,
          display2,
          <ItemView.Display text="Room 100A" textStyle="strikeThrough" />,
          display4,
          display5,
          display6,
        ]}
        reserveStartAccessorySpace
        comment={comment}
        endAccessory={endAccessory}
        layout="twoColumns"
      />
    </Item>
    <Item key="default">
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
      />
    </Item>
  </List>
);

const smallDisplay = (
  <div className={cx('table')}>
    <div id="row1" className={cx('row')}>
      <div className={cx('start-accessory')}>{startAccessory}</div>
      <div className={cx('display')}>{<ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />}</div>
      <div className={cx('display')}>{display2}</div>
      <div className={cx('display')}>{display3}</div>
      <div className={cx('display')}>{display4}</div>
      <div className={cx('display')}>{display5}</div>
      <div className={cx('display')}>{display6}</div>
      <div className={cx('comment')}>{comment}</div>
      <div className={cx('end-accessory')}>{endAccessory}</div>
    </div>
    <div id="row2" className={cx('row')}>
      <div className={cx('start-accessory')}>{startAccessory}</div>
      <div className={cx('display')}>{display1}</div>
      <div className={cx('display')}>{display2}</div>
      <div className={cx('display')}>{display3}</div>
      <div className={cx('display')}>{<ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />}</div>
      <div className={cx('display')}>{display5}</div>
      <div className={cx('display')}>{display6}</div>
      <div className={cx('comment')}>{comment}</div>
      <div className={cx('end-accessory')}>{endAccessory}</div>
    </div>
    <div id="row3" className={cx('row')}>
      <div className={cx('start-accessory')} />
      <div className={cx('display')}>{display1}</div>
      <div className={cx('display')}>{display2}</div>
      <div className={cx('display')}>{display3}</div>
      <div className={cx('display')}>{display4}</div>
      <div className={cx('display')}>{display5}</div>
      <div className={cx('display')}>{display6}</div>
      <div className={cx('comment')}>{comment}</div>
      <div className={cx('end-accessory')}>{endAccessory}</div>
    </div>
    <div id="row4" className={cx('row')}>
      <div className={cx('start-accessory')} />
      <div className={cx('display')}>{display1}</div>
      <div className={cx('display')}>{display2}</div>
      <div className={cx('display')}>{<ItemView.Display text="Room 100A" textStyle="strikeThrough" />}</div>
      <div className={cx('display')}>{display4}</div>
      <div className={cx('display')}>{display5}</div>
      <div className={cx('display')}>{display6}</div>
      <div className={cx('comment')}>{comment}</div>
      <div className={cx('end-accessory')}>{endAccessory}</div>
    </div>
    <div id="row5" className={cx('row')}>
      <div className={cx('start-accessory')}>{startAccessory}</div>
      <div className={cx('display')}>{display1}</div>
      <div className={cx('display')}>{display2}</div>
      <div className={cx('display')}>{display3}</div>
      <div className={cx('display')}>{display4}</div>
      <div className={cx('display')}>{display5}</div>
      <div className={cx('display')}>{display6}</div>
      <div className={cx('comment')}>{comment}</div>
      <div className={cx('end-accessory')} />
    </div>
  </div>
);

const CustomItemCollection = () => (
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    small={smallDisplay}
  />
);

export default CustomItemCollection;
