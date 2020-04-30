import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import Observation from './common/observation/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import {
  isEmpty,
  checkIsStatusInError,
  createResult,
  ConditionalWrapper
} from './common/utils';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

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
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
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

const createSystolicDisplay = (systolic, hideUnit, diastolicUnit, id) => {
  if (!Object.prototype.hasOwnProperty.call(systolic, 'noData')) {
    return <ResultError key={`Error-Systolic-${id}`} />;
  }
  if (systolic.noData) {
    return <NoData key={`NoData-Systolic-${id}`} />;
  }
  const systolicDisplay = (
    <ConditionalWrapper
      key={`del-Systolic-${systolic.eventId}`}
      condition={systolic.statusInError}
      wrapper={children => <del>{children}</del>}
    >
      <Observation
        key={`Observation-Systolic-${systolic.eventId}`}
        eventId={systolic.eventId}
        result={systolic.result}
        interpretation={!systolic.statusInError ? systolic.interpretation : null}
        isUnverified={systolic.isUnverified}
        hideUnit={hideUnit || ((systolic.cleanedUnit === diastolicUnit) && !systolic.statusInError)}
      />
    </ConditionalWrapper>
  );
  return systolicDisplay;
};

const createDiastolicDisplay = (diastolic, hideUnit, id) => {
  if (!Object.prototype.hasOwnProperty.call(diastolic, 'noData')) {
    return <ResultError key={`Error-Diastolic-${id}`} />;
  }
  if (diastolic.noData) {
    return <NoData key={`NoData-Diastolic-${id}`} />;
  }
  const diastolicDisplay = (
    <ConditionalWrapper
      key={`del-Diastolic-${diastolic.eventId}`}
      condition={diastolic.statusInError}
      wrapper={children => <del>{children}</del>}
    >
      <Observation
        key={`Observation-Diastolic-${diastolic.eventId}`}
        eventId={diastolic.eventId}
        result={diastolic.result}
        interpretation={!diastolic.statusInError ? diastolic.interpretation : null}
        isUnverified={diastolic.isUnverified}
        hideUnit={hideUnit}
      />
    </ConditionalWrapper>
  );
  return diastolicDisplay;
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

  let clinicalResultBloodPressureDisplay = null;

  if (hasResultError) {
    return <ResultError />;
  }
  if (hasResultNoData) {
    return <NoData />;
  }

  const systolicResult = createResult(systolic);
  const diastolicResult = createResult(diastolic);

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

  let iconGroupDisplayElement = null;
  const decoratedResultDisplay = [];
  if (systolic || diastolic) {
    decoratedResultDisplay.push(createSystolicDisplay(systolicResult, hideUnit, diastolicResult.cleanedUnit, id));
    decoratedResultDisplay.push(<span key={`Observation-Separator-${(systolic) ? systolic.eventId : diastolic.eventId}`} className={cx('result-display-separator')}>/</span>);
    decoratedResultDisplay.push(createDiastolicDisplay(diastolicResult, hideUnit, id));

    const modifiedIconElement = hasModifiedIcon && !hasUnverifiedIcon ? (<IconModified className={cx('icon-modified')} />) : null;
    const commentIconElement = hasCommentIcon && !hasUnverifiedIcon ? (<IconComment className={cx('icon-comment')} />) : null;
    const unverifiedIconElement = hasUnverifiedIcon ? (<IconUnverified className={cx('icon-unverified')} />) : null;
    if (hasModifiedIcon || hasCommentIcon || hasUnverifiedIcon) {
      iconGroupDisplayElement = (
        <React.Fragment>
          {modifiedIconElement}
          {commentIconElement}
          {unverifiedIconElement}
        </React.Fragment>
      );
    }
  }

  const decoratedResultClassnames = cx([
    'decorated-result-display',
    { truncated: isTruncated },
    { 'status-in-error': systolicResult.statusInError || diastolicResult.statusInError },
  ]);

  clinicalResultBloodPressureDisplay = (
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

  const clinicalResultClassnames = cx([
    'clinical-result',
    'blood-pressure-result',
    { truncated: isTruncated },
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${clinicalResultClassnames} ${customProps.className}` : clinicalResultClassnames}
    >
      {clinicalResultBloodPressureDisplay}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default injectIntl(ClinicalResultBloodPressure);
