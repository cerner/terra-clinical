import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './LabelValueView.module.scss';

const cx = classNamesBind.bind(styles);

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

const LabelValueView = ({
  label, textValue, children, ...customProps
}) => {
  let textValueSection;
  const theme = React.useContext(ThemeContext);
  const labelValueViewClass = classNames(
    cx(
      'label-value-view',
      theme.className,
    ),
    customProps.className,
  );
  if (!textValue && !children) {
    textValueSection = <div className={cx('value')}>--</div>;
  } else if (textValue) {
    textValueSection = <div className={cx('value')}>{textValue}</div>;
  }

  return (
    <dl {...customProps} className={labelValueViewClass}>
      <dt className={cx('label')}>{label}</dt>
      <dd className={cx('valueWrapper')}>
        {textValueSection}
        {children}
      </dd>
    </dl>
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

export default LabelValueView;
