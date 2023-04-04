import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import ThemeContext from 'terra-theme-context';
import Cell from './Cell';
import ResizeHandle from './ResizeHandle';
import { SortIndicators } from '../proptypes/columnDataShape';

import styles from './HeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the column in which the HeaderCell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  /**
   * String-formatted width that the HeaderCell should be rendered as. Values are suggested to be in `rem`s (ex `'5rem'`), but any valid CSS height value is accepted.
   */
  width: PropTypes.string.isRequired,
  /**
   * String text that will be rendered within the HeaderCell's default text region.
   */
  text: PropTypes.string,
  /**
   * String indicating the sort direction of the column. If provided, a sorting indicator will be
   * rendered within in the header. However, if custom children are also provided, the sorting indicator will
   * not be rendered.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),
  /**
   * Boolean indicating whether or not the HeaderCell is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Function that will be called when the HeaderCell is selected. The `isSelectable` prop must be true for
   * this function to be called.
   */
  onSelect: PropTypes.func,
  /**
   * Boolean indicating whether or not the HeaderCell is resizable. If true, a ResizeHandle will be rendered
   * over the HeaderCell's contents.
   */
  isResizable: PropTypes.bool,
  /**
   * Function that will be called upon the release of the ResizeHandle. The `isResizable` prop must be be true
   * for this function to be called. Parameters: `onResizeEnd(columnId, resizeDelta)`
   */
  onResizeEnd: PropTypes.func,
  /**
   * Content that will rendered within the HeaderCell. If provided, the `text` and `sortIndicator` props will be ignored.
   */
  children: PropTypes.node,
  /**
   * Function that will be called with a ref to the HeaderCell's selectable element. Parameters: `selectableRefCallback(selectableRef)`
   */
  selectableRefCallback: PropTypes.func,
};

class HeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellSelect = this.handleCellSelect.bind(this);
  }

  handleCellSelect(sectionId, rowId, columnId) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(columnId);
    }
  }

  render() {
    const {
      columnId,
      text,
      sortIndicator,
      isSelectable,
      isResizable,
      width,
      children,
      onResizeEnd,
      selectableRefCallback,
    } = this.props;

    let content = children;
    const theme = this.context;
    if (!content && (text || sortIndicator)) {
      let sortIndicatorComponent;
      if (sortIndicator) {
        sortIndicatorComponent = (
          <div className={cx('sort-indicator')}>
            {sortIndicator === SortIndicators.ASCENDING ? <IconCaretUp /> : null}
            {sortIndicator === SortIndicators.DESCENDING ? <IconCaretDown /> : null}
          </div>
        );
      }

      content = (
        <div className={cx('default-layout')}>
          <div className={cx('text')}>
            {text}
          </div>
          {sortIndicatorComponent}
        </div>
      );
    }

    return (
      <Cell
        className={cx('header-cell', theme.className)}
        sectionId=""
        rowId=""
        columnId={columnId}
        width={width}
        isSelectable={isSelectable}
        onSelect={this.handleCellSelect}
        selectableRefCallback={selectableRefCallback}
        aria-hidden={!content || undefined} // Using '|| undefined' to unset the attribute instead of setting it to false.
        role="columnheader"
      >
        {content}
        {isResizable ? <ResizeHandle id={columnId} onResizeStop={onResizeEnd} /> : null }
      </Cell>
    );
  }
}

HeaderCell.propTypes = propTypes;
HeaderCell.contextType = ThemeContext;

export default HeaderCell;
export { SortIndicators };
