import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './ResizeHandle.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
  onResizeStop: PropTypes.func,
};

class ResizeHandle extends React.Component {
  /**
   * Click events that occur on the ResizeHandle are not propagated.
   */
  static preventClickEvent(event) {
    event.stopPropagation();
  }

  constructor(props) {
    super(props);

    this.handleDragMove = this.handleDragMove.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragMove(event, data) {
    const node = data.node;

    this.resizeHandleDragPosition += data.deltaX;

    node.style.transform = `translate3d(${this.resizeHandleDragPosition}px, 0, 0)`;
  }

  handleDragStart(event, data) {
    const node = data.node;

    this.resizeHandleDragPosition = 0;

    node.classList.add(cx('dragging'));
  }

  handleDragStop(event, data) {
    const { id, onResizeStop } = this.props;
    const node = data.node;

    node.classList.remove(cx('dragging'));
    node.style.transform = '';

    if (onResizeStop) {
      onResizeStop(id, this.resizeHandleDragPosition);
    }
  }

  render() {
    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <DraggableCore
        onStart={this.handleDragStart}
        onStop={this.handleDragStop}
        onDrag={this.handleDragMove}
      >
        <div className={cx('resize-handle')} onClick={ResizeHandle.preventClickEvent} />
      </DraggableCore>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
}

ResizeHandle.propTypes = propTypes;

export default ResizeHandle;
