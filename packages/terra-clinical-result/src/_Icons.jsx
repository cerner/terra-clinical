import React from 'react';
import PropTypes from 'prop-types';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  If the Result value has not been authenticated and committed to patient chart.
   */
  isModified: PropTypes.bool,
  /**
   *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
   */
  hasComment: PropTypes.bool,
  /**
   * If Result has not been verified
   */
  isUnverified: PropTypes.bool,
  /**
  * Internationalization object with translation APIs. Provided by `injectIntl`.
  */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const Icons = ({
  isUnverified, isModified, hasComment, intl,
}) => (
  isUnverified ? (<IconUnverified className={cx('icon-unverified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultUnverified' })} />)
    : (
      <React.Fragment>
        {isModified ? (<IconModified className={cx('icon-modified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultModified' })} />) : null}
        {hasComment ? (<IconComment className={cx('icon-comment')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultComment' })} />) : null}
      </React.Fragment>
    )
);

Icons.propTypes = propTypes;

export default injectIntl(Icons);
