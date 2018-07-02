import PropTypes from 'prop-types';

const columnDataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  isSelectable: PropTypes.bool,
  isResizable: PropTypes.bool,
  text: PropTypes.string,
  sortIndicator: PropTypes.oneOf(['ascending', 'descending']),
  component: PropTypes.node,
});

export default columnDataShape;
