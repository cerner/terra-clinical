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

const KnownNoData = (props) => {
  const {
    intl,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const templateClassnames = classNames(
    cx(
      'no-data',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <span
      {...customProps}
      className={templateClassnames}
      aria-label={intl.formatMessage({ id: 'Terra.clinicalResult.resultNoData' })}
    >
      --
    </span>
  );
};

KnownNoData.propTypes = propTypes;

export default injectIntl(KnownNoData);
