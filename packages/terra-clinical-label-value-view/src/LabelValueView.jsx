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
  * Indicates if the LabelValueView is created inside a description list or not.
  * If it is not valued, it will take false as a default, meaning that is is not a child of a description list.
  */
  isChildOfDescriptionList: PropTypes.bool,
  /**
   *  Child component(s) to display underneath the label.
   */
  children: PropTypes.node,
};

const defaultProps = {
  textValue: '',
  children: undefined,
  isChildOfDescriptionList: false,
};

const LabelValueView = ({
  label, textValue, isChildOfDescriptionList, children, ...customProps
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
  const termDefinition = (
    <React.Fragment>
      <dt className={cx('label')}>{label}</dt>
      <dd className={cx('value-wrapper')}>
        {textValueSection}
        {children}
      </dd>
    </React.Fragment>
  );

  /**
   * If the LabelValueView is included by the consummer into a description list, then we just return the term and the definition.
   * Otherwise, we are sending the whole description list for the consumer to use.
   */
  if (isChildOfDescriptionList) {
    return (
      <React.Fragment>
        {termDefinition}
      </React.Fragment>
    );
  }

  return (
    <dl {...customProps} className={labelValueViewClass}>
      {termDefinition}
    </dl>
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

export default LabelValueView;
