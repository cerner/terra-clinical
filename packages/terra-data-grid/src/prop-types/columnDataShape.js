import PropTypes from 'prop-types';

const columnDataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  initialWidth: PropTypes.number,
  minWidth: PropTypes.number,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  resizable: PropTypes.bool,
  component: PropTypes.node,
});

export default columnDataShape;
