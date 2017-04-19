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
  * The text to be displayed underneath the label with the provided styling.
  */
  textValue: PropTypes.string,
  /**
   *  Child component(s) to display underneath the label.
   */
  children: PropTypes.node,
};

const defaultProps = {
  textValue: '',
  children: undefined,
};

const LabelValueView = ({ label, textValue, children, ...customProps }) => {
  const labelValueViewClassNames = classNames(
    'terraClinical-LabelValueView',
    { [`${customProps.className}`]: customProps.className },
  );

  let textValueSection;
  if (!textValue && !children) {
    textValueSection = <div className="terraClinical-LabelValueView-value">--</div>;
  } else if (textValue) {
    textValueSection = <div className="terraClinical-LabelValueView-value">{textValue}</div>;
  }

  return (
    <div {...customProps} className={labelValueViewClassNames}>
      <div className="terraClinical-LabelValueView-label">{label}</div>
      {textValueSection}
      {children}
    </div>
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

export default LabelValueView;
