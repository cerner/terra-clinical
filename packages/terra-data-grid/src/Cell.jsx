import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

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
};

class Cell extends React.Component {

  constructor(props) {
    super(props);

    this.handleTargetClick = this.handleTargetClick.bind(this);

    this.state = {
      widthStyle: { width: props.width },
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ widthStyle: { width: nextProps.width } });
  }

  handleTargetClick(event) {
    const { onCellClick } = this.props;

    const touchTargetNode = event.currentTarget;
    const containerNode = touchTargetNode.parentNode;

    if (onCellClick) {
      onCellClick(containerNode.getAttribute('data-row-id'), containerNode.getAttribute('data-column-id'));
    }
  }

  render() {
    const { sectionId, rowId, columnId, isSelectable, isSelected, children } = this.props;
    const { widthStyle } = this.state;

    return (
      <div
        key={`${sectionId}-${rowId}-${columnId}`}
        className={cx('container')}
        style={widthStyle}
        data-cell
        data-column-id={columnId}
        data-row-id={rowId}
        data-section-id={sectionId}
      >
        <div
          className={cx(['touch-target', { selectable: isSelectable, selected: isSelected }])}
          onClick={isSelectable ? this.handleTargetClick : undefined}
          tabIndex={isSelectable ? '0' : undefined}
        />
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    );
  }
}

Cell.propTypes = propTypes;

export default Cell;
