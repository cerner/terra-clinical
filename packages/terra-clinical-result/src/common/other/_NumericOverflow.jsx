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

const NumericOverflow = (props) => {
  const {
    intl,
    ...customProps
  } = props;

  const templateClassnames = cx([
    'numeric-overflow',
  ]);

  return (
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      {intl.formatMessage({ id: 'Terra.clinicalResult.viewResults' })}
    </span>
  );
};

NumericOverflow.propTypes = propTypes;

export default injectIntl(NumericOverflow);

