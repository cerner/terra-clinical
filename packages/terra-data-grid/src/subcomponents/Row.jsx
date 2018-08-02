import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';

import styles from './Row.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the section in which the Row will be rendered.
   */
  sectionId: PropTypes.string.isRequired,
  /**
   * String identifier for the Row.
   */
  rowId: PropTypes.string.isRequired,
  /**
   * String-formatted width that the Row should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.string.isRequired,
  /**
   * String-formatted height that the Row should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  height: PropTypes.string.isRequired,
  /**
   * Boolean indicating whether or not the Row should render as selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Content to render within the Row.
   */
  children: PropTypes.node,
};

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.getRowStyles = memoize(this.getRowStyles);
  }

  /* eslint-disable class-methods-use-this */
  getRowStyles(width, height) {
    return {
      width,
      height,
    };
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const {
      rowId,
      sectionId,
      width,
      height,
      isSelected,
      children,
      ...customProps
    } = this.props;

    return (
      <div
        {...customProps}
        className={cx(['row', { selected: isSelected }, customProps.className])}
        style={this.getRowStyles(width, height)}
        data-row
        data-row-id={rowId}
        data-section-id={sectionId}
      >
        {children}
      </div>
    );
  }
}

Row.propTypes = propTypes;

export default Row;
