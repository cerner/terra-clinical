import PropTypes from 'prop-types';

const columnDataShape = PropTypes.shape({
  /**
   * An identifier for the column. This identifier should be unique across the set of columns provided to the DataGrid.
   */
  id: PropTypes.string.isRequired,
  /**
   * A number (in px) specifying the width of the column. If not provided, the DataGrid's default column width will be used.
   */
  width: PropTypes.number,
  /**
   * A boolean indicating whether or not the column header is selectable. If true, the DataGrid's `onColumnSelect` prop will
   * be called upon column header selection.
   */
  isSelectable: PropTypes.bool,
  /**
   * A boolean indicating whether or not the column header is resizable. If true, a resize indicator will be rendered over
   * the column header's contents, and the DataGrid's `onRequestColumnResize` function will be called upon interaction with
   * the resize indicator. The new width will be provided with the function call so that the column's width property can be updated as needed.
   */
  isResizable: PropTypes.bool,
  /**
   * A string of text to render within the column header. This text will follow standard truncation rules as necessary.
   * If a `component` value is specified, `text` will be ignored.
   */
  text: PropTypes.string,
  /**
   * A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * If a `component` value is specified, `sortIndicator` will be ignored.
   */
  sortIndicator: PropTypes.oneOf(['ascending', 'descending']),
  /**
   * A custom component to render within the column header. If provided, the `text` and `sortIndicator` values will be ignored.
   */
  component: PropTypes.node,
});

export default columnDataShape;
