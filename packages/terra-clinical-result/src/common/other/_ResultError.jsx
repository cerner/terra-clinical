import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import IconError from 'terra-icon/lib/icon/IconError';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const ResultError = (props) => {
  const {
    intl,
    ...customProps
  } = props;

  const templateClassnames = cx([
    'system-error',
  ]);

  return (
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      <IconError className={cx('icon-error')} aria-hidden='true' />
      {intl.formatMessage({id: 'Terra.clinicalResult.resultError'})}
    </span>
  );
};

ResultError.propTypes = propTypes;

export default injectIntl(ResultError);

