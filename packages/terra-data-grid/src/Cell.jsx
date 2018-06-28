import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { KEYCODES } from './utils';

import styles from './Cell.scss';

const cx = classNames.bind(styles);

const propTypes = {
  sectionId: PropTypes.string,
  rowId: PropTypes.string,
  columnId: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  width: PropTypes.string,
  onCellClick: PropTypes.func,
  children: PropTypes.node,
  accessibilityId: PropTypes.number,
};

const accessibleElementsWithinCell = touchTargetElement => touchTargetElement.parentElement.querySelectorAll(`.${cx('content')} [data-grid-accessible]`);
const selectCell = (cellElement) => { cellElement.querySelector(`.${cx('touch-target')}`).click(); };

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTargetClick = this.handleTargetClick.bind(this);

    this.state = {
      widthStyle: { width: props.width },
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ widthStyle: { width: nextProps.width } });
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      const { onCellClick } = this.props;

      if (onCellClick) {
        event.preventDefault();
        onCellClick(this.props.rowId, this.props.columnId);
      }
    }
  }

  handleTargetClick() {
    const { onCellClick } = this.props;

    if (onCellClick) {
      onCellClick(this.props.rowId, this.props.columnId);
    }
  }

  render() {
    const { sectionId, rowId, columnId, isSelectable, isSelected, width, onCellClick, children, accessibilityId, ...customProps } = this.props;
    const { widthStyle } = this.state;

    const cellClassName = cx(['container', customProps.className]);

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        {...customProps}
        className={cellClassName}
        key={`${sectionId}-${rowId}-${columnId}`}
        style={widthStyle}
        aria-selected={isSelected}
        data-accessibility-id={accessibilityId}
        data-cell
        data-column-id={columnId}
        data-row-id={rowId}
        data-section-id={sectionId}
      >
        <div
          className={cx(['touch-target', { selectable: isSelectable, selected: isSelected }])}
          onClick={isSelectable ? this.handleTargetClick : undefined}
          onKeyDown={isSelectable ? this.handleKeyDown : undefined}
          tabIndex={isSelectable ? '0' : undefined}
        />
        <div className={cx('content')}>
          {children}
        </div>
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
}

Cell.propTypes = propTypes;

export default Cell;
export { accessibleElementsWithinCell, selectCell };
