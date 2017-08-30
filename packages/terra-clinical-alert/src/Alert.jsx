import React from 'react';
import PropTypes from 'prop-types';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import BaseAlert from 'terra-alert';
import 'terra-base/lib/baseStyles';

const AlertTypes = Object.assign({
  OUTSIDE_RECORDS: 'outsideRecords',
}, BaseAlert.Opts.Types);

const propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  action: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for an alert of type custom.
   */
  customIcon: PropTypes.element,
  /**
   * The status bar color to be used for an alert of type custom.
   */
  customStatusColor: PropTypes.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of Alert.Opts.Types.ALERT, Alert.Opts.Types.ERROR, Alert.Opts.Types.WARNING, Alert.Opts.Types.ADVISORY,
   * Alert.Opts.Types.INFO, Alert.Opts.Types.SUCCESS, Alert.Opts.Types.OUTSIDE_RECORDS, Alert.Opts.Types.CUSTOM.
   * Use the Alert.Opts.Types attribute of the Alert component for access to these type strings.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.ADVISORY,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
    AlertTypes.OUTSIDE_RECORDS,
    AlertTypes.CUSTOM,
  ]),
};

const defaultProps = {
  action: null,
  children: '',
  customIcon: null,
  customStatusColor: '',
  onDismiss: null,
  title: '',
  type: AlertTypes.ALERT,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const Alert = (
  {
    type,
    children,
    title,
    customIcon,
    customStatusColor,
    ...customProps
  }, {
    intl,
  },
) => {
  const attributes = Object.assign({}, customProps);
  let alertTitle = null;
  let typeToUse = type;
  let alertStatusColor;
  let alertIcon;

  switch (type) {
    case AlertTypes.OUTSIDE_RECORDS:
      alertTitle = intl.formatMessage({ id: 'Terra.Clinical.alert.outsideRecords' });
      typeToUse = AlertTypes.CUSTOM;
      alertIcon = (<IconDiamond />);
      alertStatusColor = '#78288c';
      attributes['data-terra-clinical-alert-type'] = AlertTypes.OUTSIDE_RECORDS;
      break;
    case AlertTypes.CUSTOM:
      alertTitle = title;
      alertIcon = customIcon;
      alertStatusColor = customStatusColor;
      break;
    default:
      alertIcon = null;
      alertStatusColor = null;
  }

  return (
    <BaseAlert
      {...attributes}
      type={typeToUse}
      title={title || alertTitle}
      customIcon={alertIcon}
      customStatusColor={alertStatusColor}
    >
      {children}
    </BaseAlert>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.contextTypes = contextTypes;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

export default Alert;
