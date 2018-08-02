import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';

import { KEYCODES } from '../utils/utils';

import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the section in which the Cell will be rendered.
   */
  sectionId: PropTypes.string.isRequired,
  /**
   * String identifer of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,
  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  /**
   * String-formatted width that the Cell should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.string.isRequired,
  /**
   * Boolean indicating whether the Cell is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Boolean indicating whether the Cell is actively selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Function that will be called upon Cell selection. The `isSelectable` prop must be true for this function to be called.
   */
  onSelect: PropTypes.func,
  /**
   * Function that will be called upon the mouse entering the selectable region of the Cell. The `isSelectable` prop must be true for this function to be called.
   */
  onHoverStart: PropTypes.func,
  /**
   * Function that will be called upon the mouse leaving the selectable region of the Cell. The `isSelectable` prop must be true for this function to be called.
   */
  onHoverEnd: PropTypes.func,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
  /**
   * Function that will be called with a ref to the Cell's selectable element.
   */
  selectableRefCallback: PropTypes.func,
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTargetClick = this.handleTargetClick.bind(this);

    this.getCellStyles = memoize(this.getCellStyles);
  }

  /* eslint-disable class-methods-use-this */
  getCellStyles(width) {
    return {
      width,
    };
  }
  /* eslint-enable class-methods-use-this */

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      const { onSelect } = this.props;

      if (onSelect) {
        event.preventDefault();
        onSelect(this.props.sectionId, this.props.rowId, this.props.columnId);
      }
    }
  }

  handleTargetClick() {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(this.props.sectionId, this.props.rowId, this.props.columnId);
    }
  }

  render() {
    const {
      sectionId,
      rowId,
      columnId,
      isSelectable,
      isSelected,
      width,
      onSelect,
      children,
      selectableRefCallback,
      onHoverStart,
      onHoverEnd,
      ...customProps
    } = this.props;

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
      <div
        {...customProps}
        className={cx(['container', customProps.className])}
        style={this.getCellStyles(width)}
        aria-selected={isSelected}
      >
        <div
          className={cx(['content', { selectable: isSelectable, selected: isSelected }])}
          onClick={isSelectable ? this.handleTargetClick : undefined}
          onKeyDown={isSelectable ? this.handleKeyDown : undefined}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          tabIndex={isSelectable ? '0' : undefined}
          ref={selectableRefCallback}
        >
          {children}
        </div>
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
    );
  }
}

Cell.propTypes = propTypes;

export default Cell;
