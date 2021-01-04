import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import memoize from 'memoize-one';
import { KEY_RETURN, KEY_SPACE } from 'keycode-js';

import styles from './Cell.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Accessible text provided for the Cell.
   */
  ariaLabel: PropTypes.string,
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
   * String-formatted width that the Cell should be rendered as. Values are suggested to be in `rem`s (ex `'5rem'`), but any valid CSS height value is accepted.
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
   * Parameters: `onSelect(sectionId, rowId, columnId)`
   */
  onSelect: PropTypes.func,
  /**
   * Function that will be called upon the mouse entering the selectable region of the Cell. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverStart(event)`
   */
  onHoverStart: PropTypes.func,
  /**
   * Function that will be called upon the mouse leaving the selectable region of the Cell. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverEnd(event)`
   */
  onHoverEnd: PropTypes.func,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
  /**
   * Function that will be called with a ref to the Cell's selectable element. Parameters: `selectableRefCallback(selectableRef)`
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

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
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

  /* eslint-disable class-methods-use-this */
  /**
   * This function is memoized in the constructor so that for a given width value, the same object reference will be returned.
   * This allows for repeat renders of the Cell to occur more efficiently if the width value has not changed between renders.
   */
  getCellStyles(width) {
    return {
      width,
    };
  }
  /* eslint-enable class-methods-use-this */

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
      ariaLabel,
      ...customProps
    } = this.props;

    /* eslint-disable react/forbid-dom-props, jsx-a11y/no-static-element-interactions */
    const theme = this.context;
    const role = isSelectable ? 'button' : undefined;
    const tabIndex = isSelectable ? '0' : undefined;
    return (
      <div
        {...customProps}
        className={classNames(cx('container', theme.className), customProps.className)}
        style={this.getCellStyles(width)}
        aria-selected={isSelected ? true : undefined}
      >
        <div
          role={role}
          className={cx(['content', { selectable: isSelectable, selected: isSelected }])}
          onClick={isSelectable ? this.handleTargetClick : undefined}
          onKeyDown={isSelectable ? this.handleKeyDown : undefined}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          tabIndex={tabIndex}
          ref={selectableRefCallback}
          aria-label={ariaLabel}
        >
          {children}
        </div>
      </div>
    );
    /* eslint-enable react/forbid-dom-props, jsx-a11y/no-static-element-interactions */
  }
}

Cell.propTypes = propTypes;
Cell.contextType = ThemeContext;

export default Cell;
