import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Cell from './Cell';
import ResizeHandle from './ResizeHandle';

import styles from './HeaderCell.scss';

const cx = classNames.bind(styles);

const propTypes = {
  columnId: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  isResizeable: PropTypes.bool,
  width: PropTypes.string,
  onCellClick: PropTypes.func,
  onResizeEnd: PropTypes.func,
  children: PropTypes.node,
};

class HeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(rowId, columnId) {
    const { onCellClick } = this.props;

    if (onCellClick) {
      onCellClick(columnId);
    }
  }

  render() {
    const { columnId, isSelectable, isSelected, isResizeable, width, children, onResizeEnd } = this.props;

    return (
      <Cell
        className={cx('header-cell')}
        width={width}
        columnId={columnId}
        isSelectable={isSelectable}
        isSelected={isSelected}
        onCellClick={this.handleCellClick}
        data-header-cell
      >
        {children}
        {isResizeable ? <ResizeHandle id={columnId} onResizeStop={onResizeEnd} /> : null }
      </Cell>
    );
  }
}

HeaderCell.propTypes = propTypes;

export default HeaderCell;
export { HeaderCell };
