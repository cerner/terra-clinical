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
  startAccessory: PropTypes.node,
  /**
   * The comment element to be presented.
   */
  comment: PropTypes.node,
  /**
   * The end accessory element to be presented.
   */
  endAccessory: PropTypes.node,
  /**
   * The styles to apply to the ItemView when represented as a list item. Styles options are layout, textEmphasis,
   * isTruncated and accessoryAlignment.
   */
  listItemStyles: PropTypes.shape({
    layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
    textEmphasis: PropTypes.oneOf(['default', 'start']),
    isTruncated: PropTypes.bool,
    accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  }),
  /**
   * The comment element to be presented.
   */
  view: PropTypes.oneOf(['list', 'table']),
};

const defaultProps = {
  startAccessory: undefined,
  comment: undefined,
  endAccessory: undefined,
  listItemStyles: {},
  view: 'list',
};

function createListItem(elements, itemStyles, itemIndex) {
  const { startAccessory, children, comment, endAccessory, hasStartAccessory, hasEndAccessory, ...listItemProps } = elements;
  // hasStartAccessorySpacing={hasStartAccessory}
  // hasEndAccessorySpacing={hasEndAccessory}

  const listItemContent = (
    <ItemView
      startAccessory={startAccessory}
      displays={React.Children.toArray(children)}
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

// QUESTION:
  // Does ITEM as a standalone component want to care about the maximun number of displays columns?
  // The max is 8 - determined by ItemView rendering.
  // When used in the ItemCollection, _createTableView handles the case of too many.

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
  const { listItemStyles, ...otherItemProps } = props;
  // The index value is set by the ListView & TableView components.
  const { view, index, ...elements } = otherItemProps;

  if (view === 'table') {
    return createTableRow(elements, index);
  }

  return createListItem(elements, listItemStyles, index);
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
