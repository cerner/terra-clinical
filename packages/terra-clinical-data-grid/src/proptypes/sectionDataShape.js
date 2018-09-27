import PropTypes from 'prop-types';
import rowDataShape from './rowDataShape';

const sectionDataShape = PropTypes.shape({
  /**
   * An identifier for the section. This identifier should be unique across the set of sections provided to the DataGrid.
   */
  id: PropTypes.string.isRequired,
  /**
   * A boolean indicating whether or not the the section is collapsible. If true, the DataGrid's `onRequestSectionCollapse`
   * function will be called upon selection of the section header, and an icon indicating collapsibility will be rendered within the seaction header.
   */
  isCollapsible: PropTypes.bool,
  /**
   * A boolean indicating whether or not the section is collapsed. If true, the DataGrid will not render the contents of the section.
   */
  isCollapsed: PropTypes.bool,
  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,
  /**
   * A component to render within the section header's start accessory position. This will be rendered ahead of `text`.
   */
  startAccessory: PropTypes.node,
  /**
   * A component to render within the section header's end accessory position. This will be rendered behind `text`.
   */
  endAccessory: PropTypes.node,
  /**
   * A custom component to render within the section header. If provided, the `text`, `startAccessory`, and `endAccessory` values will be ignored.
   */
  component: PropTypes.node,
  /**
   * An array of row objects to be rendered within the section.
   */
  rows: PropTypes.arrayOf(rowDataShape),
});

export default sectionDataShape;
