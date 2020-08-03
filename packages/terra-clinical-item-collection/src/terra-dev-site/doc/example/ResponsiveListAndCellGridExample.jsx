import React from 'react';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import CellGrid, { Cell} from 'terra-cell-grid';
import classNames from 'classNames/bind';
import styles from './ResponsiveListAndCellGridExample.scss';

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

const cellGridDisplay = (
  <div className={cx('cellgrid-wrapper')}>
    <CellGrid className={cx('row')}>
      <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
      <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{<ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />}</Cell>
      <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
      <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
      <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
      <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
      <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
      <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
      <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
    </CellGrid>
    <CellGrid className={cx('row')}>
      <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
      <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
      <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
      <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
      <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{<ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />}</Cell>
      <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
      <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
      <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
      <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
    </CellGrid>
    <CellGrid className={cx('row')}>
      <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }} />
      <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
      <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
      <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
      <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
      <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
      <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
      <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
      <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
    </CellGrid>
    <CellGrid className={cx('row')}>
      <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
      <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
      <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
      <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{<ItemView.Display text="Room 100A" textStyle="strikeThrough" />}</Cell>
      <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
      <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
      <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
      <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
      <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
    </CellGrid>
    <CellGrid className={cx('row')}>
      <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
      <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
      <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
      <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
      <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
      <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
      <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
      <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
      <Cell className={cx('end-accessory')} className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }} />
    </CellGrid>
  </div>
);

const CustomItemCollection = () => (
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    small={cellGridDisplay}
  />
);

export default CustomItemCollection;
