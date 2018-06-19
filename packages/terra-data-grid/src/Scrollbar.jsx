import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './Scrollbar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  onMoveStart: PropTypes.func,
  onMoveEnd: PropTypes.func,
  onMove: PropTypes.func,
  scrollbarRefCallback: PropTypes.func,
};

const defaultProps = {
  overflowWidth: 0,
};

class Scrollbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDragMove = this.handleDragMove.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);

    this.scrollPosition = 0;
  }

  handleDragMove(event, data) {
    if (this.props.onMove) {
      this.props.onMove(event, data);
    }
  }

  handleDragStart(event, data) {
    const { onMoveStart } = this.props;
    const node = data.node;

    node.classList.add(cx('dragging'));

    if (onMoveStart) {
      onMoveStart(event, data);
    }
  }

  handleDragStop(event, data) {
    const { onMoveEnd } = this.props;
    const node = data.node;

    node.classList.remove(cx('dragging'));

    if (onMoveEnd) {
      onMoveEnd(event, data);
    }
  }

  render() {
    const { scrollbarRefCallback } = this.props;

    return (
      <div
        className={cx('container')}
      >
        <DraggableCore
          onStart={this.handleDragStart}
          onStop={this.handleDragStop}
          onDrag={this.handleDragMove}
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
Scrollbar.defaultProps = defaultProps;

export default Scrollbar;
