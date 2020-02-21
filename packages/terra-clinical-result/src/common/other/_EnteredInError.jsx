import React from 'react';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const EnteredInError = (props) => {
  const {
    ...customProps
  } = props;

  const templateClassnames = cx([
    'entered-in-error',
  ]);

  return (
    // TODO add i18n - in progress
    <span {...customProps} className={templateClassnames}>In Error</span>
  );
};

export default EnteredInError;
