import PropTypes from 'prop-types';
import rowDataShape from './rowDataShape';

const sectionDataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isCollapsible: PropTypes.bool,
  headerText: PropTypes.string,
  headerStartAccessory: PropTypes.node,
  headerEndAccessory: PropTypes.node,
  headerComponent: PropTypes.node,
  rows: PropTypes.arrayOf(rowDataShape),
});

export default sectionDataShape;
