import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';
import ResizeObserver from 'resize-observer-polyfill';

import styles from './Scrollbar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  overflowWidth: PropTypes.number,
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

    this.setContainerRef = this.setContainerRef.bind(this);
    this.setScrollbarRef = this.setScrollbarRef.bind(this);
    this.getScrollbarWidth = this.getScrollbarWidth.bind(this);
    this.updateScrollbarWidth = this.updateScrollbarWidth.bind(this);
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => { this.updateScrollbarWidth(); });
    this.resizeObserver.observe(this.containerRef);

    this.updateScrollbarWidth();

    this.scrollPosition = this.scrollbarRef.offsetLeft;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.overflowWidth !== this.props.overflowWidth) {
      this.updateScrollbarWidth();
    }

    this.scrollPosition = this.scrollbarRef.offsetLeft;
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.containerRef);
  }

  handleDragMove(event, data) {
    const node = data.node;

    const newPosition = this.scrollPosition + data.deltaX;
    const scrollbarWidth = this.scrollbarWidth;
    const containerWidth = this.containerRef.clientWidth;

    let finalPosition;
    if (newPosition < 0) {
      finalPosition = 0;
    } else if (newPosition > containerWidth - scrollbarWidth) {
      finalPosition = containerWidth - scrollbarWidth;
    } else {
      finalPosition = newPosition;
    }

    this.scrollPosition = finalPosition;

    const scrollerPositionRatio = finalPosition / (containerWidth - scrollbarWidth);

    requestAnimationFrame(() => {
      node.style.transform = `translateX(${finalPosition}px)`;

      if (this.props.onMove) {
        this.props.onMove(event, data, finalPosition, scrollerPositionRatio);
      }
    });
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

  setScrollbarRef(ref) {
    const { scrollbarRefCallback } = this.props;

    this.scrollbarRef = ref;

    if (scrollbarRefCallback) {
      scrollbarRefCallback(ref);
    }
  }

  setContainerRef(ref) {
    this.containerRef = ref;
  }

  getScrollbarWidth() {
    const { overflowWidth } = this.props;

    const containerWidth = this.containerRef.clientWidth;

    if (containerWidth === 0) {
      return 0;
    }

    const scrollbarWidth = Math.min(containerWidth, (containerWidth * containerWidth) / overflowWidth);// containerWidth / (Math.max(1, overflowWidth / containerWidth));
    return scrollbarWidth;
  }

  updateScrollbarWidth() {
    this.scrollbarWidth = this.getScrollbarWidth();

    this.scrollbarRef.style.width = `${this.scrollbarWidth}px`;
  }

  render() {
    return (
      <div
        className={cx('container')}
        ref={this.setContainerRef}
      >
        <DraggableCore
          onStart={this.handleDragStart}
          onStop={this.handleDragStop}
          onDrag={this.handleDragMove}
        >
          <div
            className={cx('scrollbar')}
            ref={this.setScrollbarRef}
          />
        </DraggableCore>
      </div>
    );
  }
}

Scrollbar.propTypes = propTypes;
Scrollbar.defaultProps = defaultProps;

export default Scrollbar;
