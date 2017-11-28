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
   * When displayed as a list item, the column layout in which to present the displays.
   */
  listItemLayout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
   * When displayed as a list item, the text color emphasis when using the two columns layout.
   */
  listItemTextEmphasis: PropTypes.oneOf(['default', 'start']),
  /**
   * When displayed as a list item, whether or not all text should truncate.
   */
  isListItemTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accessories.
   */
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  /**
   * Whether or not the item is selectable. If true, the item is given list and table hover and focus styles, tabIndex
   * set to 0, and onClick and onKeyDown callbacks set to the onSelect function provided via Item Collection.
   */
  isSelectable: PropTypes.bool,
  /*
   * Whether or not the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * The view in which the item should be presented. Options are list or table and this will be set by the Item Collection component.
   */
  view: PropTypes.oneOf(['list', 'table']),
};

const defaultProps = {
  startAccessory: undefined,
  comment: undefined,
  endAccessory: undefined,
  accessoryAlignment: 'alignCenter',
  isListItemTruncated: false,
  isSelectable: false,
  isSelected: false,
  listItemLayout: 'oneColumn',
  listItemTextEmphasis: 'default',
  view: 'list',
};

function createListItem(elements, selectableProps, isSelected, itemViewStyles) {
  const { startAccessory, children, comment, endAccessory, hasStartAccessory, hasEndAccessory, ...listItemProps } = elements;

  const listItemContent = (
    <ItemView
      startAccessory={startAccessory}
      displays={React.Children.toArray(children)}
      comment={comment}
      endAccessory={endAccessory}
      reserveStartAccessorySpace={hasStartAccessory}
      {...itemViewStyles}
    />
  );

  return (
    <List.Item
      content={listItemContent}
      isSelected={isSelected}
      {...selectableProps}
      {...listItemProps}
    />
  );
}

function createTableCell(content, keyValue, contentType, accessoryAlignment) {
  const cellClassNames = cx(
    `content-${contentType}`,
    { 'content-accessory-align-center': (contentType.includes('accessory') && accessoryAlignment === 'alignCenter') },
    { 'content-accessory-align-top': (contentType.includes('accessory') && accessoryAlignment === 'alignTop') },
  );

  return (<Table.Cell content={content} key={keyValue} className={cellClassNames} />);
}

function createTableRow(elements, selectableProps, isSelected, accessoryAlignment) {
  const { startAccessory, children, comment, endAccessory, ...tableRowProps } = elements;

  const displayContent = React.Children.map(children, (display, index) => {
    const displayKey = `display_${index + 1}`;
    return createTableCell(display, displayKey, 'display');
  });

  return (
    <Table.Row isSelected={isSelected} {...selectableProps} {...tableRowProps}>
      {startAccessory && createTableCell(startAccessory, 'start_accessory', 'start-accessory', accessoryAlignment)}
      {displayContent}
      {comment && createTableCell(comment, 'comment', 'comment')}
      {endAccessory && createTableCell(endAccessory, 'end_accessory', 'end-accessory', accessoryAlignment)}
    </Table.Row>
  );
}

const Item = (props) => {
  const {
    accessoryAlignment,
    isListItemTruncated,
    isSelectable,
    isSelected,
    listItemLayout,
    listItemTextEmphasis,
    view,
    ...elements
  } = props;
  const selectableProps = isSelectable ? { isSelectable, tabIndex: 0 } : {};

  if (view === 'table') {
    return createTableRow(elements, selectableProps, isSelected, accessoryAlignment);
  }

  const itemViewStyles = { layout: listItemLayout, textEmphasis: listItemTextEmphasis, isTruncated: isListItemTruncated, accessoryAlignment };
  return createListItem(elements, selectableProps, isSelected, itemViewStyles);
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
