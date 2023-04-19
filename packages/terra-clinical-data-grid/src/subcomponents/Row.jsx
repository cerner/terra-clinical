import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import memoize from 'memoize-one';

import styles from './Row.module.scss';

const cx = classNamesBind.bind(styles);

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
   * Boolean indicating whether the row should be styled with alternate background styling.
   */
  isStriped: PropTypes.bool,
  /**
   * Boolean indicating whether the row is allowed to show the column highlight style when the 'columnHighlightId' has been set.
   * `columnHighlightId` is used with combination of data attribute 'data-allow-column-highlight'
   * to allow column highlight only when row is non-interactable.
   */
  allowColumnHighlighting: PropTypes.bool,
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
      isStriped,
      allowColumnHighlighting,
      children,
      ...customProps
    } = this.props;
    const theme = this.context;

    const rowClass = classNames(
      cx([
        'row',
        { selected: isSelected, striped: isStriped },
        theme.className,
      ]),
      customProps.className,
    );

    /* eslint-disable react/forbid-dom-props */
    return (
      <div
        {...customProps}
        className={rowClass}
        style={this.getRowStyles(width, height)}
        data-row
        data-row-id={rowId}
        data-section-id={sectionId}
        data-allow-column-highlight={allowColumnHighlighting ? true : null}
        role="row"
      >
        {children}
      </div>
    );
    /* eslint-enable react/forbid-dom-props */
  }
}

Row.propTypes = propTypes;
Row.contextType = ThemeContext;

export default Row;
