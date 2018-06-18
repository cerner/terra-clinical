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

    this.scrollPosition = 0;
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(() => { this.updateScrollbarWidth(); });
    this.resizeObserver.observe(this.containerRef);

    this.updateScrollbarWidth();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.overflowWidth !== this.props.overflowWidth) {
      this.updateScrollbarWidth();
    }
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.containerRef);
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

    return Math.min(containerWidth, (containerWidth * containerWidth) / overflowWidth);
  }

  updateScrollbarWidth() {
    this.scrollbarRef.style.width = `${this.getScrollbarWidth()}px`;
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
