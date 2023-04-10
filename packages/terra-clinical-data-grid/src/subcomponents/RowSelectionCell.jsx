import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ThemeContext from 'terra-theme-context';
import Cell from './Cell';

import styles from './RowSelectionCell.module.scss';

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
   * String identifier of the column in which the RowSelectionCell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  /**
   * String-formatted width that the RowSelectionCell should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.string.isRequired,
  /**
   * Boolean indicating whether or not the RowSelectionCell is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Boolean indicating whether the RowSelectionCell is actively selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Function that will be called when the RowSelectionCell is selected. The `isSelectable` prop must be true for
   * this function to be called.
   */
  onSelect: PropTypes.func,
  /**
   * Function that will be called upon the mouse entering the selectable region of the RowSelectionCell. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverStart(event)`
   */
  onHoverStart: PropTypes.func,
  /**
   * Function that will be called upon the mouse leaving the selectable region of the RowSelectionCell. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverEnd(event)`
   */
  onHoverEnd: PropTypes.func,
  /**
   * Label for RowSelectionCell contents.
   */
  ariaLabel: PropTypes.string,
  /**
   * Function that will be called with a ref to the RowSelectionCell's selectable element. Parameters: `selectableRefCallback(selectableRef)`
   */
  selectableRefCallback: PropTypes.func,
};

class RowSelectionCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellSelect = this.handleCellSelect.bind(this);
  }

  handleCellSelect(sectionId, rowId) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(sectionId, rowId);
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
      selectableRefCallback,
      onHoverStart,
      onHoverEnd,
      ariaLabel,
    } = this.props;
    const theme = this.context;

    return (
      <Cell
        className={cx({ selectable: isSelectable, selected: isSelected }, theme.className)}
        sectionId={sectionId}
        rowId={rowId}
        columnId={columnId}
        width={width}
        isSelectable={isSelectable}
        onSelect={this.handleCellSelect}
        selectableRefCallback={selectableRefCallback}
        aria-hidden={!isSelectable || undefined}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        ariaLabel={ariaLabel}
        role="gridcell"
      >
        <div className={cx('icon-container')}>
          <div className={cx('icon')} />
        </div>
      </Cell>
    );
  }
}

RowSelectionCell.propTypes = propTypes;
RowSelectionCell.contextType = ThemeContext;

export default RowSelectionCell;
