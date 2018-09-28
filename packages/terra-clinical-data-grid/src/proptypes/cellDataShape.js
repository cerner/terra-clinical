import PropTypes from 'prop-types';

const cellDataShape = PropTypes.shape({
  /**
   * A column identifier for the cell. This identifier should be unique across the set of cells provided to a given row.
   */
  columnId: PropTypes.string.isRequired,
  /**
   * A boolean indicating whether or not the cell is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * A boolean indicating whether or not the cell should render as selected.
   */
  isSelected: PropTypes.bool,
  /**
   * A component to render within the cell.
   */
  component: PropTypes.node,
});

export default cellDataShape;
