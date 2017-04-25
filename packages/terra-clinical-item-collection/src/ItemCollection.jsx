import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import classNames from 'classnames';
import './ItemCollection.scss';

import getBreakpoint from './breakpoint';
import createListView from './CreateListView';
import createTableView from './CreateTableView';

const propTypes = {
  /**
  * The breakpoint to switch from a table view to a list view. Breakpoint options are 'tiny', 'small', 'medium', 'large', 'huge'.
  */
  breakpoint: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The widths to apply to the table columns. Widths options are 'tiny', 'small', 'medium', 'large', 'huge'.
   **/
  columnWidths: PropTypes.shape({
    startAccessoryWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    displayWidths: PropTypes.arrayOf(PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])),
    commentWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    endAccessoryWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  }).isRequired,
  /**
   * The item styles to spread to the table:
   *    isPadded: Whether or not the table cells should be padded.
   *    isStriped: Whether or not the rows should be zebra striped.
   **/
  itemStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The item styles to spread to the clincial items:
   *    layout: The column layout in which to present the displays.
   *    textEmphasis: The text color emphasis when using two columns.
   *    isTruncated: Whether or not all text on the view should be truncated.
   *    accessoryAlignment: The vertical alignment of the start and end accesories.
   **/
  tableStyles: PropTypes.shape({
    layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
    textEmphasis: PropTypes.oneOf(['default', 'start']),
    isTruncated: PropTypes.bool,
    accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  }),
  /**
   * The rows to display:
   *    startAccessory: The react element to be placed in the first column.
   *    displays:
   *    comment:
   *    endAccessory: The react element to be placed in the last column.
   **/
  rows: PropTypes.arrayOf(PropTypes.shape({
    startAccessory: PropTypes.element,
    displays: PropTypes.arrayOf(PropTypes.element),
    comment: PropTypes.element,
    endAccessory: PropTypes.element,
  })),
};

const defaultProps = {
  columnWidths: null,
  itemStyles: null,
  tableStyles: null,
  rows: [],
  breakpoint: 'small',
};

class ItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'table' };
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { this.handleResize(entries[0].contentRect.width); });
      this.resizeObserver.observe(this.container);
    } else {
      this.handleResize(window.innerWidth);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    } else {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node.parentNode;
  }

  handleResize(width) {
    let display;
    const breakpoint = getBreakpoint(this.props.breakpoint);
    if (width < breakpoint) {
      display = 'list';
    } else {
      display = 'table';
    }

    if (this.state.display !== display) {
      this.setState({ display });
    }
  }

  handleWindowResize() {
    this.handleResize(window.innerWidth);
  }

  render() {
    const { columnWidths, itemStyles, tableStyles, rows, breakpoint, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    attributes.className = classNames(['terraClinical-ItemCollection',
      attributes.className,
    ]);

    let collectionDisplay;
    if (this.state.display === 'table') {
      collectionDisplay = createTableView(columnWidths, rows, tableStyles);
    } else if (this.state.display === 'list') {
      collectionDisplay = createListView(rows, itemStyles);
    }

    return (
      <div {...attributes}>
        <h2>Item Collection - {this.state.display}</h2>
        {collectionDisplay}
      </div>
    );
  }
}

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

export default ItemCollection;
