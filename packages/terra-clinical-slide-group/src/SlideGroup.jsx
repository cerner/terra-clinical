import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './SlideGroup.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const SlideGroup = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const SlideGroupClassNames = classNames([
    'terraClinical-SlideGroup',
    attributes.className,
  ]);

  return (<div {...attributes} className={SlideGroupClassNames} />)
};

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;

export default SlideGroup;
