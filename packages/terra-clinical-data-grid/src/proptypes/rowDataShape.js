import PropTypes from 'prop-types';
import cellDataShape from './cellDataShape';

const rowDataShape = PropTypes.shape({
  /**
   * An identifier for the row. This identifier should be unique across the set of rows provided to a given section.
   */
  id: PropTypes.string.isRequired,
  /**
   * A string identifier used to describe the row contents. This value will be used to contruct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,
  /**
   * A boolean indicating whether or not the row is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * A boolean indicating whether or not the row should render as selected.
   */
  isSelected: PropTypes.bool,
  /**
   * An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order of the `pinnedColumns` and `overflowColumns` props.
   */
  cells: PropTypes.arrayOf(cellDataShape),
  /**
   * The height for this row. This overrides the `DataGrid` `rowHeight` property. Any valid CSS height value is accepted (i.e. 50px, 3rem, etc.)
   */
  height: PropTypes.string,
});

export default rowDataShape;
