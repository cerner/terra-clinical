import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './LabelValueView.scss';

const cx = classNames.bind(styles);

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
  let textValueSection;
  if (!textValue && !children) {
    textValueSection = <div className={cx('value')}>--</div>;
  } else if (textValue) {
    textValueSection = <div className={cx('value')}>{textValue}</div>;
  }

  return (
    <div {...customProps} className={cx('label-value-view', customProps.className)}>
      <div className={cx('label')}>{label}</div>
      {textValueSection}
      {children}
    </div>
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

export default LabelValueView;
