import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ItemView from 'terra-clinical-item-view';
import List from 'terra-list';
import Table from 'terra-table';
import 'terra-base/lib/baseStyles';
import styles from './ItemCollection.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The display elements to be presented.
   */
  children: PropTypes.node,
  /**
   * The start accessory element to be presented.
   */
  startAccessory: PropTypes.element,
  /**
   * The comment element to be presented.
   */
  comment: PropTypes.element,
  /**
   * The end accessory element to be presented.
   */
  endAccessory: PropTypes.element,
  /**
   * Indicates weather or not the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * The styles to apply to the ItemView when represented as a list item. Styles options are layout, textEmphasis, isTruncated and accessoryAlignment.
   */
  itemStyles: PropTypes.shape({
    layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
    textEmphasis: PropTypes.oneOf(['default', 'start']),
    isTruncated: PropTypes.bool,
    accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  }),
};

function createListItem(elements, itemIndex, itemStyles) {
  const { startAccessory, children, comment, endAccessory, hasStartAccessory, hasEndAccessory, ...listItemProps } = elements;

  // hasStartAccessorySpacing={hasStartAccessory}
  // hasEndAccessorySpacing={hasEndAccessory}

  const listItemContent = (
    <ItemView
      startAccessory={startAccessory}
      displays={children}
      comment={comment}
      endAccessory={endAccessory}
      {...itemStyles}
    />
  );

  return (
    <List.Item key={itemIndex} content={listItemContent} {...listItemProps} />
  );
}

function createTableCell(content, keyValue, contentType) {
  return (<Table.Cell content={content} key={keyValue} className={cx(`content-${contentType}`)} />);
}

function createTableRow(elements, itemIndex) {
  const { startAccessory, children, comment, endAccessory, ...tableRowProps } = elements;

  let displayContent = [];
  displayContent = React.Children.map(children, (display, index) => {
    const displayKey = `display_${index + 1}`;
    return createTableCell(display, displayKey, 'display');
  });

  return (
    <Table.Row {...tableRowProps} key={itemIndex}>
      {startAccessory && createTableCell(startAccessory, 'start_accessory', 'accessory')}
      {displayContent}
      {comment && createTableCell(comment, 'comment', 'comment')}
      {endAccessory && createTableCell(endAccessory, 'end_accessory', 'accessory')}
    </Table.Row>
  );
}

const Item = (props) => {
  const { itemStyles, ...otherItemProps } = props;
  // The view and index values are set by the ListView & TableView components.
  const { view, index, ...elements } = otherItemProps;

  if (view === 'table') {
    return createTableRow(elements, index);
  }

  return createListItem(elements, index, itemStyles);
};

Item.propTypes = propTypes;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
