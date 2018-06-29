import PropTypes from 'prop-types';

const cellDataShape = PropTypes.shape({
  columnId: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  content: PropTypes.node,
});

export default cellDataShape;

