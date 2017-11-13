import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';

import Item from './Item';
import ListView from './_ListView';
import TableView from './_TableView';
import './ItemCollection.scss';

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
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain
   * the provided layout.The elements expected to be displayed. Options are startAccessoryRequired (bool), displaysRequired
   * (number), commentRequired (bool), and endAccessoryRequired (bool).
   */
  requiredElements: PropTypes.shape({
    startAccessoryRequired: PropTypes.bool,
    displaysRequired: PropTypes.Number,
    commentRequired: PropTypes.bool,
    endAccessoryRequired: PropTypes.bool,
  }),
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
  requiredElements: { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true },
  onSelect: undefined,
  isListDivided: false,
  isTablePadded: false,
  isTableStriped: false,
};

const ItemCollection = (props) => {
  const { children, breakpoint, onSelect, requiredElements, isListDivided, isTablePadded, isTableStriped, ...customProps } = props;

  const listStyles = { isDivided: isListDivided };
  const listDisplay = (
    <ListView
      requiredElements={requiredElements}
      onSelect={onSelect}
      listStyles={listStyles}
    >
      {children}
    </ListView>
  );

  const tableStyles = { isPadded: isTablePadded, isStriped: isTableStriped };
  const tableDisplay = (
    <TableView
      requiredElements={requiredElements}
      onSelect={onSelect}
      tableStyles={tableStyles}
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
