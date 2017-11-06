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
   * the provided layout.
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
   * The styles to spread to the list. List style options are isDivided.
   */
  listStyles: PropTypes.shape({
    isDivided: PropTypes.bool,
  }),
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   */
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
};

const defaultProps = {
  breakpoint: 'small',
  requiredElements: { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true },
  onSelect: undefined,
  listStyles: {},
  tableStyles: {},
};

const ItemCollection = (props) => {
  const { children, breakpoint, onSelect, requiredElements, listStyles, tableStyles, ...customProps } = props;

  const listDisplay = (
    <ListView
      requiredElements={requiredElements}
      onSelect={onSelect}
      listStyles={listStyles}
    >
      {children}
    </ListView>
  );

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
