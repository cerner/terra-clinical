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
  * A text to explain the topic of the LabelValueView.
  */
  topicTextId: PropTypes.string,
  /**
   *  Child component(s) to display underneath the label.
   */
  children: PropTypes.node,
};

const defaultProps = {
  textValue: '',
  children: undefined,
  isChildOfDescriptionList: false,
  topicTextId: undefined,
};

const LabelValueView = ({
  label, textValue, isChildOfDescriptionList, topicTextId, children, ...customProps
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
   * If LabelValueView is a child of a description list (<dl>), then just the term and definition are returned.
   * Otherwise, a description list encapsulating the term and definition is returned.
   * The reason for this is that <dt> and <dd> tags must always be children of a <dl> to be valid html.
   */
  if (isChildOfDescriptionList) {
    return (
      <React.Fragment>
        {termDefinition}
      </React.Fragment>
    );
  }

  if (topicTextId) {
    return (
      <dl {...customProps} className={labelValueViewClass} aria-labelledby={topicTextId}>
        {termDefinition}
      </dl>
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
