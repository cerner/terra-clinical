import PropTypes from 'prop-types';
import cellDataShape from './cellDataShape';

const rowDataShape = PropTypes.shape({
  /**
   * An identifier for the row. This identifier should be unique across the set of rows provided to a given section.
   */
  id: PropTypes.string.isRequired,
  /**
   * A string identifier used to describe the row contents. This value will be used to construct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,
  /**
   * A boolean to prevent the row from being interactive (selectable + selected), hides the column highlighting style in the row when `columnHighlightId` is valued,
   * and applies role="presentation" and aria-hidden="true" to hide from screen readers. Used for decorative rows like custom dividers.
   */
  isDecorative: PropTypes.bool,
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
   * The height for this row. This overrides the `DataGrid` `rowHeight` property. Values are suggested to be in `rem`s (ex `'5rem'`), but any valid CSS height value is accepted.
   */
  height: PropTypes.string,
});

export default rowDataShape;
