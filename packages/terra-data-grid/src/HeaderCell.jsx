import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import Cell from './Cell';
import ResizeHandle from './ResizeHandle';

import styles from './HeaderCell.scss';

const cx = classNames.bind(styles);

const propTypes = {
  columnId: PropTypes.string.isRequired,
  text: PropTypes.string,
  sortIndicator: PropTypes.oneOf(['ascending', 'descending']),
  isSelectable: PropTypes.bool,
  isResizable: PropTypes.bool,
  width: PropTypes.string,
  onCellClick: PropTypes.func,
  onResizeEnd: PropTypes.func,
  children: PropTypes.node,
  refCallback: PropTypes.func,
};

class HeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(sectionId, rowId, columnId) {
    const { onCellClick } = this.props;

    if (onCellClick) {
      onCellClick(columnId);
    }
  }

  render() {
    const { columnId, text, sortIndicator, isSelectable, isResizable, width, children, onResizeEnd, refCallback } = this.props;

    let content = children;
    if (!content && (text || sortIndicator)) {
      let sortIndicatorComponent;
      if (sortIndicator) {
        sortIndicatorComponent = (
          <div className={cx('sort-indicator')}>
            {sortIndicator === 'ascending' ? <IconCaretUp /> : null}
            {sortIndicator === 'descending' ? <IconCaretDown /> : null}
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
        className={cx('header-cell')}
        width={width}
        columnId={columnId}
        isSelectable={isSelectable}
        onCellClick={this.handleCellClick}
        refCallback={refCallback}
        data-header-cell
      >
        {content}
        {isResizable ? <ResizeHandle id={columnId} onResizeStop={onResizeEnd} /> : null }
      </Cell>
    );
  }
}

HeaderCell.propTypes = propTypes;

export default HeaderCell;
