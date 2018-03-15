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
  const attributes = Object.assign({}, customProps);
  const ResultViewClassNames = cx([
    'result-view',
    attributes.className,
  ]);

  return (<div {...attributes} className={ResultViewClassNames} />);
};

ResultView.propTypes = propTypes;
ResultView.defaultProps = defaultProps;

export default ResultView;
