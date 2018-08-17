import PropTypes from 'prop-types';
import cellDataShape from './cellDataShape';

const rowDataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  cells: PropTypes.arrayOf(cellDataShape),
});

export default rowDataShape;
