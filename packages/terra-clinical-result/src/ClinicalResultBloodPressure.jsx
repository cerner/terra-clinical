import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import { injectIntl } from 'react-intl';
import observationPropShape from './proptypes/observationPropTypes';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import BloodPressureDisplay from './_BloodPressureDisplay';
import { sanitizeResult } from './common/utils';
import styles from './ClinicalResult.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   *  Blood Pressure grouped result id
   */
  id: PropTypes.string,
  /**
   *  Systolic Result for blood pressure.
   */
  systolic: observationPropShape,
  /**
   *  Diastolic Result for blood pressure.
   */
  diastolic: observationPropShape,
  /**
   * Whether or not the unit of measure should be presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Whether or not the text should be truncated in display. Restricts clinical result details each to one line.
   */
  isTruncated: PropTypes.bool,
  /**
   * Whether or not there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Whether or not the result has a value for a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
  /**
   * @private
   * Used by Flowsheet Result Cell to hide icons because it displays them in different positions.
   */
  hideAccessoryDisplays: PropTypes.bool,
  /**
  * Internationalization object with translation APIs. Provided by `injectIntl`.
  */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  hideUnit: false,
  isTruncated: false,
  hasResultError: false,
  hasResultNoData: false,
  hideAccessoryDisplays: false,
};

const createConceptDisplays = (compareConceptDisplays) => {
  if (compareConceptDisplays.systolic && compareConceptDisplays.diastolic) {
    if (compareConceptDisplays.systolic === compareConceptDisplays.diastolic) {
      return <div className={cx('concept-display')}>{compareConceptDisplays.originalSystolic}</div>;
    }
    return (
      <div className={cx('concept-display')}>
        {compareConceptDisplays.originalSystolic}
        {' / '}
        {compareConceptDisplays.originalDiastolic}
      </div>
    );
  }
  if (compareConceptDisplays.systolic || compareConceptDisplays.diastolic) {
    const conceptDisplayValue = compareConceptDisplays.originalSystolic || compareConceptDisplays.originalDiastolic;
    return <div className={cx('concept-display')}>{conceptDisplayValue}</div>;
  }
  return null;
};

const createDatetimeDisplays = (compareDatetimeDisplays) => {
  if (compareDatetimeDisplays.systolic && compareDatetimeDisplays.diastolic) {
    if (compareDatetimeDisplays.systolic === compareDatetimeDisplays.diastolic) {
      return <div className={cx('datetime-display')}>{compareDatetimeDisplays.originalSystolic}</div>;
    }
    return (
      <div className={cx('datetime-display')}>
        {compareDatetimeDisplays.originalSystolic}
        {' / '}
        {compareDatetimeDisplays.originalDiastolic}
      </div>
    );
  }
  if (compareDatetimeDisplays.systolic || compareDatetimeDisplays.diastolic) {
    const conceptDisplayValue1 = compareDatetimeDisplays.originalSystolic || compareDatetimeDisplays.originalDiastolic;
    return <div className={cx('datetime-display')}>{conceptDisplayValue1}</div>;
  }
  return null;
};

const ClinicalResultBloodPressure = (props) => {
  const {
    id,
    systolic,
    diastolic,
    hideUnit,
    isTruncated,
    hasResultError,
    hasResultNoData,
    hideAccessoryDisplays,
    intl,
    ...customProps
  } = props;
  const theme = React.useContext(ThemeContext);

  if (hasResultError) {
    return <ResultError />;
  }
  if (hasResultNoData || (!systolic && !diastolic)) {
    return <NoData />;
  }

  const systolicResult = sanitizeResult(systolic);
  const diastolicResult = sanitizeResult(diastolic);

  const conceptDisplayElement = createConceptDisplays({
    originalSystolic: systolicResult.conceptDisplay,
    originalDiastolic: diastolicResult.conceptDisplay,
    systolic: systolicResult.cleanedConceptDisplay,
    diastolic: diastolicResult.cleanedConceptDisplay,
  });

  const datetimeDisplayElement = createDatetimeDisplays({
    originalSystolic: systolicResult.datetimeDisplay,
    originalDiastolic: diastolicResult.datetimeDisplay,
    systolic: systolicResult.cleanedDatetimeDisplay,
    diastolic: diastolicResult.cleanedDatetimeDisplay,
  });

  const hasModifiedIcon = (systolicResult.isModified) || (diastolicResult.isModified);
  const hasCommentIcon = (systolicResult.hasComment) || (diastolicResult.hasComment);
  const hasUnverifiedIcon = (systolicResult.isUnverified) || (diastolicResult.isUnverified);

  const decoratedResultDisplay = (
    <>
      <BloodPressureDisplay result={systolicResult} hideUnit={hideUnit} id={id} type="Systolic" diastolicUnit={diastolicResult.cleanedUnit} />
      <span key={`Observation-Separator-${(systolic) ? systolic.eventId : diastolic.eventId}`} className={cx('result-display-separator')}>/</span>
      <BloodPressureDisplay result={diastolicResult} hideUnit={hideUnit} id={id} type="Diastolic" />
    </>
  );

  const modifiedIconElement = hasModifiedIcon && !hasUnverifiedIcon ? (<IconModified className={cx('icon-modified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultModified' })} />) : null;
  const commentIconElement = hasCommentIcon && !hasUnverifiedIcon ? (<IconComment className={cx('icon-comment')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultComment' })} />) : null;
  const unverifiedIconElement = hasUnverifiedIcon ? (<IconUnverified className={cx('icon-unverified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultUnverified' })} />) : null;
  let iconGroupDisplayElement = null;
  if (hasModifiedIcon || hasCommentIcon || hasUnverifiedIcon) {
    iconGroupDisplayElement = (
      <React.Fragment>
        {modifiedIconElement}
        {commentIconElement}
        {unverifiedIconElement}
      </React.Fragment>
    );
  }

  const decoratedResultClassnames = cx([
    'decorated-result-display',
    { truncated: isTruncated },
    { 'status-in-error': systolicResult.statusInError || diastolicResult.statusInError },
  ]);

  const clinicalResultBloodPressureDisplay = (
    <React.Fragment>
      <div className={decoratedResultClassnames}>
        <div className={cx('result-display')}>
          {decoratedResultDisplay}
          {isTruncated ? null : !hideAccessoryDisplays && iconGroupDisplayElement}
        </div>
        {isTruncated ? !hideAccessoryDisplays && iconGroupDisplayElement : null}
      </div>
      {!hideAccessoryDisplays && conceptDisplayElement}
      {!hideAccessoryDisplays && datetimeDisplayElement}
    </React.Fragment>
  );

  const clinicalResultClassnames = classNames(
    cx(
      'clinical-result',
      'blood-pressure-result',
      { truncated: isTruncated },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <div
      {...customProps}
      className={clinicalResultClassnames}
    >
      {clinicalResultBloodPressureDisplay}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default injectIntl(ClinicalResultBloodPressure);
