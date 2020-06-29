import React from 'react';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import Table from 'terra-table';
import classNames from 'classnames/bind';
import styles from '../../../ItemCollection.module.scss';

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
    <Item
      content={(
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
      )}
    />
    <Item
      content={(
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
      )}
    />
    <Item
      content={(
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
      )}
    />
    <Item
      content={(
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
      )}
    />
    <Item
      content={(
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
      )}
    />
  </List>
);

const tableDisplay = (
  <Table
    className={cx('table')}
    isPadded={false}
  >
    <colgroup>
      <col key="startAccessory" className={cx('start-accessory-column')} />
      <col key={1} />
      <col key={2} />
      <col key={3} />
      <col key={4} />
      <col key={5} />
      <col key={6} />
      <col key="comment" />
      <col key="endAccessory" />
    </colgroup>
    <Table.Rows>
      <Table.Row>
        <Table.Cell content={<IconAlert />} key="start_accessory" className={cx('content-accessory', 'content-accessory-align-center')} />
        <Table.Cell content={<ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />} key="display_1" className={cx('content-display')} />
        <Table.Cell content={display2} key="display_2" className={cx('content-display')} />
        <Table.Cell content={display3} key="display_3" className={cx('content-display')} />
        <Table.Cell content={display4} key="display_4" className={cx('content-display')} />
        <Table.Cell content={display5} key="display_5" className={cx('content-display')} />
        <Table.Cell content={display6} key="display_6" className={cx('content-display')} />
        <Table.Cell content={comment} key="comment" className={cx('content-comment')} />
        <Table.Cell content={<IconInformation />} key="end_accessory" className={cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory')} />
      </Table.Row>
      <Table.Row>
        <Table.Cell content={<IconAlert />} key="start_accessory" className={cx('content-accessory', 'content-accessory-align-center')} />
        <Table.Cell content={display1} key="display_1" className={cx('content-display')} />
        <Table.Cell content={display2} key="display_2" className={cx('content-display')} />
        <Table.Cell content={display3} key="display_3" className={cx('content-display')} />
        <Table.Cell content={<ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />} key="display_4" className={cx('content-display')} />
        <Table.Cell content={display5} key="display_5" className={cx('content-display')} />
        <Table.Cell content={display6} key="display_6" className={cx('content-display')} />
        <Table.Cell content={comment} key="comment" className={cx('content-comment')} />
        <Table.Cell content={<IconInformation />} key="end_accessory" className={cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory')} />
      </Table.Row>
      <Table.Row>
        <Table.Cell content=" " key="start_accessory" className={cx('content-accessory', 'content-accessory-align-center')} />
        <Table.Cell content={display1} key="display_1" className={cx('content-display')} />
        <Table.Cell content={display2} key="display_2" className={cx('content-display')} />
        <Table.Cell content={display3} key="display_3" className={cx('content-display')} />
        <Table.Cell content={display4} key="display_4" className={cx('content-display')} />
        <Table.Cell content={display5} key="display_5" className={cx('content-display')} />
        <Table.Cell content={display6} key="display_6" className={cx('content-display')} />
        <Table.Cell content={comment} key="comment" className={cx('content-comment')} />
        <Table.Cell content={<IconInformation />} key="end_accessory" className={cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory')} />
      </Table.Row>
      <Table.Row>
        <Table.Cell content=" " key="start_accessory" className={cx('content-accessory', 'content-accessory-align-center')} />
        <Table.Cell content={display1} key="display_1" className={cx('content-display')} />
        <Table.Cell content={display2} key="display_2" className={cx('content-display')} />
        <Table.Cell content={<ItemView.Display text="Room 100A" textStyle="strikeThrough" />} key="display_3" className={cx('content-display')} />
        <Table.Cell content={display4} key="display_4" className={cx('content-display')} />
        <Table.Cell content={display5} key="display_5" className={cx('content-display')} />
        <Table.Cell content={display6} key="display_6" className={cx('content-display')} />
        <Table.Cell content={comment} key="comment" className={cx('content-comment')} />
        <Table.Cell content={<IconInformation />} key="end_accessory" className={cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory')} />
      </Table.Row>
      <Table.Row>
        <Table.Cell content={<IconAlert />} key="start_accessory" className={cx('content-accessory', 'content-accessory-align-center')} />
        <Table.Cell content={display1} key="display_1" className={cx('content-display')} />
        <Table.Cell content={display2} key="display_2" className={cx('content-display')} />
        <Table.Cell content={display3} key="display_3" className={cx('content-display')} />
        <Table.Cell content={display4} key="display_4" className={cx('content-display')} />
        <Table.Cell content={display5} key="display_5" className={cx('content-display')} />
        <Table.Cell content={display6} key="display_6" className={cx('content-display')} />
        <Table.Cell content={comment} key="comment" className={cx('content-comment')} />
        <Table.Cell content=" " key="end_accessory" className={cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory')} />
      </Table.Row>
    </Table.Rows>
  </Table>
);

const CustomItemCollection = () => (
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    small={tableDisplay}
  />
);

export default CustomItemCollection;
