import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';

import Item from './Item';
import ListView from './_ListView';
import TableView from './_TableView';
import './ItemCollection.scss';

const maxDisplays = 8;

const propTypes = {
  /**
   * The breakpoint to switch from a table view to a list view. Breakpoint options are tiny, small, medium, large, or huge.
   */
  breakpoint: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The items that will flex between either a list item or a table row.
   */
  children: PropTypes.node.isRequired,
  /**
  * Whether or not the item collection should create a layout to display a start accessory.
  */
  hasStartAccessory: PropTypes.bool,
  /**
  * The number of displays the item collection should create a layout for.
  */
  numberOfDisplays: PropTypes.number,
  /**
  * Whether or not the item collection should create a layout to display a comment.
  */
  hasComment: PropTypes.bool,
  /**
  * Whether or not the item collection should create a layout to display an end accessory.
  */
  hasEndAccessory: PropTypes.bool,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child isSelectable. The first
   * parameter returned is the event and the second parameter is the child key. Function is not applied if child is not selectable.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the list items should be divided.
   */
  isListDivided: PropTypes.bool,
  /**
   * Whether or not the table rows should be zebra striped.
   */
  isTablePadded: PropTypes.bool,
  /**
   * Whether or not the table cells should be padded.
   */
  isTableStriped: PropTypes.bool,
};

const defaultProps = {
  breakpoint: 'small',
  hasStartAccessory: false,
  numberOfDisplays: 0,
  hasComment: false,
  hasEndAccessory: false,
  onSelect: undefined,
  isListDivided: false,
  isTablePadded: false,
  isTableStriped: false,
};

const ItemCollection = (props) => {
  const {
    children,
    breakpoint,
    onSelect,
    hasStartAccessory,
    numberOfDisplays,
    hasComment,
    hasEndAccessory,
    isListDivided,
    isTablePadded,
    isTableStriped,
    ...customProps
  } = props;

  const displaysRequired = (numberOfDisplays < maxDisplays) ? numberOfDisplays : maxDisplays;
  const requiredElements = {
    hasStartAccessory,
    numberOfDisplays: displaysRequired,
    hasComment,
    hasEndAccessory,
  };

  const listDisplay = (
    <ListView
      requiredElements={requiredElements}
      onSelect={onSelect}
      isListDivided={isListDivided}
    >
      {children}
    </ListView>
  );

  const tableDisplay = (
    <TableView
      requiredElements={requiredElements}
      onSelect={onSelect}
      isTablePadded={isTablePadded}
      isTableStriped={isTableStriped}
    >
      {children}
    </TableView>
  );

  const breakpointDisplay = {};
  breakpointDisplay[breakpoint] = tableDisplay;

  return (
    <ResponsiveElement
      {...customProps}
      responsiveTo="parent"
      defaultElement={listDisplay}
      {...breakpointDisplay}
    />
  );
};

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

// Item Collection Building Blocks
ItemCollection.Item = Item;
ItemCollection.Comment = Item.Comment;
ItemCollection.Display = Item.Display;

export default ItemCollection;
