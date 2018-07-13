import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Row.scss';

const cx = classNames.bind(styles);

const propTypes = {
  sectionId: PropTypes.string,
  rowId: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowStyles: {
        width: props.width,
        height: props.height,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rowStyles: {
        width: nextProps.width,
        height: nextProps.height,
      },
    });
  }

  render() {
    const { rowId, sectionId, width, height, isSelected, children, ...customProps } = this.props;
    const { rowStyles } = this.state;

    const rowClassName = cx(['row', { selected: isSelected }, customProps.className]);

    return (
      <div
        {...customProps}
        className={rowClassName}
        style={rowStyles}
        data-row
        data-row-id={rowId}
        data-section-id={sectionId}
      >
        {children}
      </div>
    );
  }
}

Row.propTypes = propTypes;

export default Row;
