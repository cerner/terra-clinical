import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ResultView.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ResultView = ({ name, ...customProps }) => {
  const ResultViewClassNames = cx([
    'result-view',
    customProps.className,
  ]);

  return (<div {...customProps} className={ResultViewClassNames}>{name}</div>);
};

ResultView.propTypes = propTypes;
ResultView.defaultProps = defaultProps;

export default ResultView;
