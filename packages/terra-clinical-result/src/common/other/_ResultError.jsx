import React from 'react';
import IconError from 'terra-icon/lib/icon/IconError';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const ResultError = (props) => {
  const {
    ...customProps
  } = props;

  const templateClassnames = cx([
    'system-error',
  ]);

  return (
    // TODO add i18n - in progress
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      <IconError className={cx('icon-error')} />
      Error
    </span>
  );
};

export default ResultError;
