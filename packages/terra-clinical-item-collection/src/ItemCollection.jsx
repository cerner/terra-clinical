import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';
import './ItemCollection.scss';

import createListView from './_CreateListView';
import createTableView from './_CreateTableView';

const propTypes = {
  /**
  * The breakpoint to switch from a table view to a list view. Breakpoint options are tiny, small, medium, large, or huge.
  */
  breakpoint: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   */
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The styles to spread to the list. List style options are isDivided and hasChevrons.
   */
  listStyles: PropTypes.shape({
    isDivided: PropTypes.bool,
    hasChevrons: PropTypes.bool,
  }),
  /**
   * The array of hashes to be displayed as rows. Each hash can contain a startAccessory, endAccessory,
   * comment, array of displays, isSelected, and a itemStyles hash. The item style options are layout,
   * textEmphasis, isTruncated and accessoryAlignment.
   */
  rows: PropTypes.arrayOf(PropTypes.shape({
    startAccessory: PropTypes.element,
    displays: PropTypes.arrayOf(PropTypes.element),
    comment: PropTypes.element,
    endAccessory: PropTypes.element,
    isSelected: PropTypes.bool,
    itemStyles: PropTypes.shape({
      layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
      textEmphasis: PropTypes.oneOf(['default', 'start']),
      isTruncated: PropTypes.bool,
      accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
    }),
  })),
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  listStyles: undefined,
  tableStyles: undefined,
  rows: [],
  breakpoint: 'small',
  onChange: undefined,
};

class ItemCollection extends React.Component {
  static selectedIndexFromRows(rows) {
    if (!rows || !rows.length) {
      return -1;
    }
    for (let i = 0; i < rows.length; i += 1) {
      if (rows[i].isSelected) {
        return i;
      }
    }
    return -1;
  }

  constructor(props) {
    super(props);
    this.state = { display: 'table', selectedIndex: ItemCollection.selectedIndexFromRows(this.props.rows) };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
    if (this.props.onChange) {
      this.props.onChange(event, selectedIndex);
    }
  }

  render() {
    const { listStyles, tableStyles, rows, breakpoint, ...customProps } = this.props;

    if (!rows || !rows.length) {
      return null;
    }

    const tableView = createTableView(rows, tableStyles, this.state.selectedIndex, this.handleSelection);
    const tableDisplay = (
      <div {...customProps} data-terra-clinical-item-collection-table-view className={customProps.className}>
        {tableView}
      </div>
    );

    const listView = createListView(rows, listStyles, this.state.selectedIndex, this.handleSelection);
    const listDisplay = (
      <div {...customProps} data-terra-clinical-item-collection-list-view className={customProps.className}>
        {listView}
      </div>
    );

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

export default ItemCollection;
