import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ItemView from 'terra-clinical-item-view';
import List from 'terra-list';
import Table from 'terra-table';
import 'terra-base/lib/baseStyles';
import Utils from './_ItemCollectionUtils';
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
   * Wether or not the item is selectable. If true, the item is given list and table hover and focus styles, tabIndex
   * set to 0, and onClick and onKeyDown callbacks set to the onSelect function provided via Item Collection.
   */
  isSelectable: PropTypes.bool,
  /*
   * Wether or not the item is selected.
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
  listItemStyles: {},
  isSelectable: false,
  isSelected: false,
  view: 'list',
};

function createSelectableProps(onSelect, itemKey) {
  const selectableProps = { isSelectable: true };
  selectableProps.tabIndex = 0;

  if (!itemKey) {
    /* eslint-disable no-console */
    console.error('Key is required for correct selectable implementation.');
    /* eslint-disable no-console */
  }

  if (onSelect) {
    selectableProps.onClick = (event) => {
      onSelect(event, itemKey);
    };

    selectableProps.onKeyDown = (event) => {
      if (event.nativeEvent.keyCode === Utils.KEYCODES.ENTER || event.nativeEvent.keyCode === Utils.KEYCODES.SPACE) {
        onSelect(event, itemKey);
      }
    };
  }

  return selectableProps;
}

function createListItem(elements, itemKey, selectableProps, isSelected, listItemStyles) {
  const { startAccessory, children, comment, endAccessory, hasStartAccessory, hasEndAccessory, ...listItemProps } = elements;
  // alignStartAccessory={hasStartAccessory}
  // alignEndAccessory={hasEndAccessory}

  const listItemContent = (
    <ItemView
      startAccessory={startAccessory}
      displays={React.Children.toArray(children)}
      comment={comment}
      endAccessory={endAccessory}
      {...listItemStyles}
    />
  );

  return (
    <List.Item
      key={itemKey}
      content={listItemContent}
      isSelected={isSelected}
      {...selectableProps}
      {...listItemProps}
    />
  );
}

function createTableCell(content, keyValue, contentType) {
  return (<Table.Cell content={content} key={keyValue} className={cx(`content-${contentType}`)} />);
}

function createTableRow(elements, itemKey, selectableProps, isSelected) {
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
    <Table.Row isSelected={isSelected} {...selectableProps} {...tableRowProps} key={itemKey}>
      {startAccessory && createTableCell(startAccessory, 'start_accessory', 'accessory')}
      {displayContent}
      {comment && createTableCell(comment, 'comment', 'comment')}
      {endAccessory && createTableCell(endAccessory, 'end_accessory', 'accessory')}
    </Table.Row>
  );
}

const Item = (props) => {
  const { view, isSelectable, isSelected, onSelect, listItemStyles, ...otherItemProps } = props;
  // The itemKey is set by the ListView & TableView components as the child.key value.
  const { itemKey, ...elements } = otherItemProps;

  const selectableProps = isSelectable ? createSelectableProps(onSelect, itemKey) : {};

  if (view === 'table') {
    return createTableRow(elements, itemKey, selectableProps, isSelected);
  }

  return createListItem(elements, itemKey, selectableProps, isSelected, listItemStyles);
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
