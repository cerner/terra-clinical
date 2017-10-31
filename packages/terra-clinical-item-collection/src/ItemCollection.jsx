import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';

import Item from './Item';
import Header from './Header';
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
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
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
  onChange: undefined,
  listStyles: undefined,
  tableStyles: undefined,
  requiredElements: { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true },
};

class ItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, selectedIndex) {
    this.setState({ selectedIndex });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const { children, breakpoint, requiredElements, listStyles, tableStyles } = this.props;

    const listDisplay = (<ListView onChange={this.handleOnChange} listStyles={listStyles} requiredElements={requiredElements}>{children}</ListView>);
    const tableDisplay = (<TableView onChange={this.handleOnChange} tableStyles={tableStyles} requiredElements={requiredElements}>{children}</TableView>);

    const breakpointDisplay = {};
    breakpointDisplay[breakpoint] = tableDisplay;

    return (
      <ResponsiveElement
        responsiveTo="parent"
        defaultElement={listDisplay}
        {...breakpointDisplay}
      />
    );
  }
}

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

// Item Collection Building Blocks
ItemCollection.Item = Item;
ItemCollection.Header = Header;
ItemCollection.Comment = Item.Comment;
ItemCollection.Display = Item.Display;

export default ItemCollection;
