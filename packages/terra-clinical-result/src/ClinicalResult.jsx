import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import Observation from './common/observation/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
import { isEmpty, checkIsStatusInError, ConditionalWrapper } from './common/utils';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Result Object with the clinical result data.
   */
  resultData: observationPropShape,
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Whether or not the text should be truncated in display. Restricts clinical result details each to one line.
   */
  isTruncated: PropTypes.bool,
  /**
   * Override that shows an Error display. Used when there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Override that shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  resultData: {},
  hideUnit: false,
  isTruncated: false,
  hasResultError: false,
  hasResultNoData: false,
};

const createIcons = (resultData) => (resultData.isUnverified
  ? (<IconUnverified className={cx('icon-unverified')} />)
  : (
    <React.Fragment>
      {resultData.isModified ? (<IconModified className={cx('icon-modified')} />) : null}
      {resultData.hasComment ? (<IconComment className={cx('icon-comment')} />) : null}
    </React.Fragment>
  )
);

const createSecondaryDisplays = (resultData) => (
  <React.Fragment>
    {resultData.conceptDisplay ? (<div className={cx('concept-display')}>{resultData.conceptDisplay}</div>) : null}
    {resultData.datetimeDisplay ? (<div className={cx('datetime-display')}>{resultData.datetimeDisplay}</div>) : null}
  </React.Fragment>
);

const createClinicalResultDisplay = (resultData, hideUnit, isTruncated) => {
  const isStatusInError = !isEmpty(resultData.status) ? checkIsStatusInError(resultData.status) : false;
  const decoratedResultClassnames = cx([
    'decorated-result-display',
    { truncated: isTruncated },
    { 'status-in-error': isStatusInError },
  ]);
  return (
    <React.Fragment>
      <div className={decoratedResultClassnames}>
        <div className={cx('result-display')}>
          <ConditionalWrapper
            key={`del-Observation-${resultData.eventId}`}
            condition={isStatusInError}
            wrapper={children => <del>{children}</del>}
          >
            <Observation
              key={`Observation-${resultData.eventId}`}
              eventId={resultData.eventId}
              result={resultData.result}
              interpretation={!isStatusInError ? resultData.interpretation : null}
              isUnverified={resultData.isUnverified}
              hideUnit={hideUnit}
            />
          </ConditionalWrapper>
          {isTruncated ? null : createIcons(resultData)}
        </div>
        {isTruncated ? createIcons(resultData) : null}
      </div>
      {createSecondaryDisplays(resultData)}
    </React.Fragment>
  );
};

const ClinicalResult = (props) => {
  const {
    resultData,
    hideUnit,
    isTruncated,
    hasResultError,
    hasResultNoData,
    intl,
    ...customProps
  } = props;

  let clinicalResultDisplay;

  if (hasResultError) {
    clinicalResultDisplay = <ResultError />;
  } else if (hasResultNoData) {
    clinicalResultDisplay = <NoData />;
  } else {
    clinicalResultDisplay = createClinicalResultDisplay(resultData, hideUnit, isTruncated);
  }

  const clinicalResultClassnames = cx('clinical-result');

  return (
    <div
      {...customProps}
      className={customProps.className ? `${clinicalResultClassnames} ${customProps.className}` : clinicalResultClassnames}
    >
      {clinicalResultDisplay}
    </div>
  );
};

ClinicalResult.propTypes = propTypes;
ClinicalResult.defaultProps = defaultProps;

export default injectIntl(ClinicalResult);