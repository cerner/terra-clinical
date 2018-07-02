import PropTypes from 'prop-types';
import rowDataShape from './rowDataShape';

const sectionDataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isCollapsible: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  text: PropTypes.string,
  startAccessory: PropTypes.node,
  endAccessory: PropTypes.node,
  component: PropTypes.node,
  rows: PropTypes.arrayOf(rowDataShape),
});

export default sectionDataShape;
