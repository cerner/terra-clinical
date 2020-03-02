import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
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

const KnownNoData = (props) => {
  const {
    intl,
    ...customProps
  } = props;

  const templateClassnames = cx([
    'no-data',
  ]);

  return (
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
      ariaLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultNoData' })}
    >
    --
    </span>
  );
};

KnownNoData.propTypes = propTypes;

export default injectIntl(KnownNoData);
