import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './OtherTemplates.module.scss';

const cx = classNamesBind.bind(styles);

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

  const theme = React.useContext(ThemeContext);
  const templateClassnames = classNames(
    cx(
      'entered-in-error',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <span
      {...customProps}
      className={templateClassnames}
    >
      <span aria-label={intl.formatMessage({ id: 'Terra.clinicalResult.statusInErrorAria' })}>
        {intl.formatMessage({ id: 'Terra.clinicalResult.statusInError' })}
      </span>
    </span>
  );
};

EnteredInError.propTypes = propTypes;

export default injectIntl(EnteredInError);
