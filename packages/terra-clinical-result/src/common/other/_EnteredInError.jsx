import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const EnteredInError = (props) => {
  const {
    intl,
    ...customProps
  } = props;

  const templateClassnames = cx([
    'entered-in-error',
  ]);

  return (
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      <span aria-label={intl.formatMessage({ id: 'Terra.clinicalResult.statusInErrorAria' })}>
        {intl.formatMessage({ id: 'Terra.clinicalResult.statusInError' })}
      </span>
    </span>
  );
};

EnteredInError.propTypes = propTypes;

export default injectIntl(EnteredInError);
