import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './LabelValueView.scss';

const propTypes = {
  /**
   * The label of the LabelValueView.
   */
  label: PropTypes.string.isRequired,
  /**
   *  Child component(s) to display underneath the label.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: '--',
};

const LabelValueView = ({ label, children, ...customProps }) => {
  const labelValueViewClassNames = classNames(
    'terraClinical-LabelValueView',
    { [`${customProps.className}`]: customProps.className },
  );

  return (
    <div {...customProps} className={labelValueViewClassNames}>
      <div className="terraClinical-LabelValueView-label">{label}</div>
      <div className="terraClinical-LabelValueView-value">{children}</div>
    </div>
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

export default LabelValueView;
