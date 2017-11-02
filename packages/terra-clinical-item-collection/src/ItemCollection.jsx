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
   * The styles to spread to the list. List style options are isDivided and hasChevrons.
   */
  listStyles: PropTypes.shape({
    isDivided: PropTypes.bool,
    hasChevrons: PropTypes.bool,
  }),
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   */
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain the provided layout.
   */
  requiredElements: PropTypes.shape({
    startAccessoryRequired: PropTypes.bool,
    displaysRequired: PropTypes.Number,
    commentRequired: PropTypes.bool,
    endAccessoryRequired: PropTypes.bool,
  }),
};

const defaultProps = {
  breakpoint: 'small',
  listStyles: undefined,
  tableStyles: undefined,
  requiredElements: { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true },
};

const ItemCollection = (props) => {
  const { children, breakpoint, requiredElements, listStyles, tableStyles } = props;

  const listDisplay = (<ListView listStyles={listStyles} requiredElements={requiredElements}>{children}</ListView>);
  const tableDisplay = (<TableView tableStyles={tableStyles} requiredElements={requiredElements}>{children}</TableView>);

  const breakpointDisplay = {};
  breakpointDisplay[breakpoint] = tableDisplay;

  return (
    <ResponsiveElement
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
