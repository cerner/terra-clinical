import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function called once upon initial scroll of the scrollbar for a given movement event. Parameters: `onMoveStart()`
   */
  onMoveStart: PropTypes.func,
  /**
   * Function called once upon the end of scrolling of the scrollbar for a given movement event. Parameters: `onMoveEnd()`
   */
  onMoveEnd: PropTypes.func,
  /**
   * Function called upon movement of the scrollbar. Parameters: `onMove()`
   */
  onMove: PropTypes.func,
  /**
   * Function called with a reference to the Scrollbar's outer container element. Parameters: `refCallback(ref)`
   */
  refCallback: PropTypes.func,
  /**
   * Function called with a reference to the Scrollbar's scrollbar handle. Parameters: `scrollbarRefCallback(scrollbarRef)`
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
    const handleNode = data.node;

    handleNode.parentNode.classList.add(cx('dragging'));

    if (onMoveStart) {
      onMoveStart(event, data);
    }
  }

  handleDragStop(event, data) {
    const { onMoveEnd } = this.props;
    const handleNode = data.node;

    handleNode.parentNode.classList.remove(cx('dragging'));

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
          >
            <div
              className={cx('scrollbar-handle')}
            />
          </div>
        </DraggableCore>
      </div>
    );
  }
}

Scrollbar.propTypes = propTypes;

export default Scrollbar;
