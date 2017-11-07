import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed at the start of the header, placed before the title
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar
   */
  title: PropTypes.string,

  /**
   * Content to be displayed at the end of the header
   */
  endContent: PropTypes.element,

  /**
   * A Boolean indicating if element is a subheader.
   */
  isSubheader: PropTypes.bool,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
  isSubheader: false,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnResize = this.handleOnResize.bind(this);
    this.state = {
      startContentInitialWidth: undefined,
      endContentInitialWidth: undefined,
      startContentWidth: undefined,
      endContentWidth: undefined,
    };
  }

  componentDidMount() {
    // grab the initial full display widths of the end containers for reference
    // when resizing the end containers inside handleOnResize
    if (this.startContainerTarget) {
      this.state.startContentInitialWidth = this.startContainerTarget.offsetWidth;
    }
    if (this.endContainerTarget) {
      this.state.endContentInitialWidth = this.endContainerTarget.offsetWidth;
    }

    window.addEventListener('resize', this.handleOnResize);
    this.handleOnResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleOnResize);
  }

  handleOnResize() {
    // get the maxWidth of the start and end containers that is 40% of the header
    const containerWidth = this.containerTarget.offsetWidth;
    const fitMaxWidth = containerWidth * 0.4;

    if (this.startContainerTarget) {
      // set the start container to its initial width if can fit inside the 40% maxWidth
      // else set the start container to the maximum possible width it can be
      if (fitMaxWidth >= this.state.startContentInitialWidth) {
        this.state.startContentWidth = this.state.startContentInitialWidth;
      } else {
        this.state.startContentWidth = fitMaxWidth;
      }
    }

    if (this.endContainerTarget) {
      // set the end container to its initial width if can fit inside the 40% maxWidth
      // else set the end container to the maximum possible width it can be
      if (fitMaxWidth >= this.state.endContentInitialWidth) {
        this.state.endContentWidth = this.state.endContentInitialWidth;
      } else {
        this.state.endContentWidth = fitMaxWidth;
      }
    }

    this.forceUpdate();
  }

  render() {
    const { title, startContent, endContent, isSubheader, ...customProps } = this.props;

    let startElement;
    if (startContent) {
      const startElementStyle = {};
      if (this.state.startContentWidth !== undefined) {
        startElementStyle.width = this.state.startContentWidth;
      } else {
        // have the start element display at its top most width to be sized
        // down to 40% of the header if its width exceeds 40% on first load
        startElementStyle.maxWidth = '100%';
      }

      startElement = (
        <div
          className={cx('flex-end')}
          ref={(node) => { if (node !== null) { this.startContainerTarget = node; } }}
          style={startElementStyle}
        >{startContent}</div>
      );
      this.startContainerTarget = startElement;
    }

    let titleElement;
    if (title) {
      titleElement = (
        <div className={cx('title-container')}>
          <h1 className={cx('title')}>
            {title}
          </h1>
        </div>
      );
    }

    let endElement;
    if (endContent) {
      const endElementStyle = {};
      if (this.state.endContentWidth !== undefined) {
        endElementStyle.width = this.state.endContentWidth;
      } else {
        // have the end element display at its top most width to be sized
        // down to 40% of the header if its width exceeds 40% on first load
        endElementStyle.maxWidth = '100%';
      }

      endElement = (
        <div
          className={cx('flex-end')}
          ref={(node) => { if (node !== null) { this.endContainerTarget = node; } }}
          style={endElementStyle}
        >{endContent}</div>
      );

      this.endContainerTarget = endElement;
    }

    const headerClass = isSubheader ? 'flex-subheader' : 'flex-header';

    return (
      <header
        {...customProps}
        className={cx(headerClass, customProps.className)}
        ref={(node) => { if (node !== null) { this.containerTarget = node; } }}
      >
        {startElement}
        <div className={cx('flex-fill')}>
          {titleElement}
        </div>
        {endElement}
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
