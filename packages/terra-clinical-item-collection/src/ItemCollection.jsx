import React from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import classNames from 'classnames';
import getBreakpoints from 'terra-responsive-element/lib/breakpoints';
import 'terra-base/lib/baseStyles';
import './ItemCollection.scss';

import createListView from './CreateListView';
import createTableView from './CreateTableView';

const propTypes = {
  /**
  * The breakpoint to switch from a table view to a list view. Breakpoint options are tiny, small, medium, large, or huge.
  */
  breakpoint: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   **/
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The styles to spread to the list. List style options are isDivided and hasChevrons.
   **/
  listStyles: PropTypes.shape({
    isDivided: PropTypes.bool,
    hasChevrons: PropTypes.bool,
  }),
  /**
   * The array of hashes to be displayed as rows. Each hash can contain a startAccessory, endAccessory,
   * comment, array of displays, isSelected, and a itemStyles hash. The item style options are layout,
   * textEmphasis, isTruncated and accessoryAlignment.
   **/
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
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => { this.handleResize(entries[0].contentRect.width); });
    this.resizeObserver.observe(this.container);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node.parentNode;
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
    if (this.props.onChange) {
      this.props.onChange(event, selectedIndex);
    }
  }

  handleResize(width) {
    let display;
    const breakpoints = getBreakpoints();
    if (width < breakpoints[this.props.breakpoint]) {
      display = 'list';
    } else {
      display = 'table';
    }

    if (this.state.display !== display) {
      this.setState({ display });
    }
  }

  render() {
    const { listStyles, tableStyles, rows, breakpoint, ...customProps } = this.props;

    if (!rows || !rows.length) {
      return null;
    }

    const attributes = Object.assign({}, customProps);
    attributes.className = classNames(['terraClinical-ItemCollection',
      `terraClinical-ItemCollection--${this.state.display}View`,
      attributes.className,
    ]);

    let collectionDisplay;
    if (this.state.display === 'table') {
      collectionDisplay = createTableView(rows, tableStyles, this.state.selectedIndex, this.handleSelection);
    } else if (this.state.display === 'list') {
      collectionDisplay = createListView(rows, listStyles, this.state.selectedIndex, this.handleSelection);
    }

    return (
      <div ref={this.setContainer} {...attributes}>
        {collectionDisplay}
      </div>
    );
  }
}

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

export default ItemCollection;
