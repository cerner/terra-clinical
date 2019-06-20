import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';

import Item from './Item';
import ListView from './_ListView';
import TableView from './_TableView';
import './ItemCollection.scss';

const maxDisplays = 8;

const Breakpoints = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const propTypes = {
  /**
   * The breakpoint to switch from a table view to a list view.
   * Breakpoint options are `tiny`, `small`, `medium`, `large`, or `huge`.
   */
  breakpoint: PropTypes.oneOf([
    Breakpoints.TINY,
    Breakpoints.SMALL,
    Breakpoints.MEDIUM,
    Breakpoints.LARGE,
    Breakpoints.HUGE,
  ]),
  /**
   * The items that will flex between either a list item or a table row.
   */
  children: PropTypes.node.isRequired,
  /**
  * Whether or not the item collection's child items should display start accessories.
  * If *false*, `startAccessory` prop of each child item is set to `null` before it is rendered.
  */
  hasStartAccessory: PropTypes.bool,
  /**
  * The number of displays the item collection should display.
  * Array of child items is truncated to this length if there is more than one child.
  */
  numberOfDisplays: PropTypes.number,
  /**
  * Whether or not the item collection's child items should display comments.
  * If *false*, `comment` prop of each child item is set to `null` before it is rendered.
  */
  hasComment: PropTypes.bool,
  /**
  * Whether or not the item collection's child items should display an end accessories.
  * If *false*, `endAccessory` prop of each child item is set to `null` before it is rendered.
  */
  hasEndAccessory: PropTypes.bool,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child is selectable. The first
   * parameter returned is the event and the second parameter is the child key. Function is not applied if child is not selectable.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the list items should be divided.
   */
  isListDivided: PropTypes.bool,
  /**
   * Whether or not the table cells should be padded.
   */
  isTablePadded: PropTypes.bool,
  /**
   * Whether or not the table rows should be zebra striped.
   */
  isTableStriped: PropTypes.bool,
};

const defaultProps = {
  breakpoint: Breakpoints.SMALL,
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
    <div {...customProps}>
      <ResponsiveElement
        responsiveTo="parent"
        defaultElement={listDisplay}
        {...breakpointDisplay}
      />
    </div>
  );
};

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

// Item Collection Building Blocks
ItemCollection.Item = Item;
ItemCollection.Comment = Item.Comment;
ItemCollection.Display = Item.Display;

export default ItemCollection;
export { Breakpoints };
