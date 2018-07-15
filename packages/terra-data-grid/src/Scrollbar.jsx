import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './Scrollbar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function called once upon initial scroll of the scrollbar for a given movement event.
   */
  onMoveStart: PropTypes.func,
  /**
   * Function called once upon the end of scrolling of the scrollbar for a given movement event.
   */
  onMoveEnd: PropTypes.func,
  /**
   * Function called upon movement of the scrollbar.
   */
  onMove: PropTypes.func,
  /**
   * Function called with a reference to the Scrollbar's outer container element.
   */
  refCallback: PropTypes.func,
  /**
   * Function called with a reference to the Scrollbar's scrollbar handle.
   */
  scrollbarRefCallback: PropTypes.func,
};

class Scrollbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);

    this.scrollPosition = 0;
  }

  handleDragStart(event, data) {
    const { onMoveStart } = this.props;
    const node = data.node;

    node.parentNode.classList.add(cx('dragging'));

    if (onMoveStart) {
      onMoveStart(event, data);
    }
  }

  handleDragStop(event, data) {
    const { onMoveEnd } = this.props;
    const node = data.node;

    node.parentNode.classList.remove(cx('dragging'));

    if (onMoveEnd) {
      onMoveEnd(event, data);
    }
  }

  render() {
    const { onMove, refCallback, scrollbarRefCallback } = this.props;

    return (
      <div
        className={cx('container')}
        ref={refCallback}
      >
        <DraggableCore
          onStart={this.handleDragStart}
          onStop={this.handleDragStop}
          onDrag={onMove}
        >
          <div
            className={cx('scrollbar')}
            ref={scrollbarRefCallback}
          />
        </DraggableCore>
      </div>
    );
  }
}

Scrollbar.propTypes = propTypes;

export default Scrollbar;
