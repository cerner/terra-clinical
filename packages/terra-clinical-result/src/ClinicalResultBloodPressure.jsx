import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import Observation from './common/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Result Object with the clinical result data.
   */
  resultData: PropTypes.shape({
    /**
     *  Systolic Result for blood pressure.
     */
    systolic: observationPropShape,
    /**
     *  Diastolic Result for blood pressure.
     */
    diastolic: observationPropShape,
  }),
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Whether or not the text should be truncated in display. Restricts clinical result details each to one line.
   */
  isTruncated: PropTypes.bool,
};

const defaultProps = {
  resultData: {},
  hideUnit: false,
  isTruncated: false,
};

const ClinicalResultBloodPressure = (props) => {
  const {
    resultData,
    hideUnit,
    isTruncated,
    ...customProps
  } = props;

  const isEmpty = (str) => (!str || str.length === 0);

  const CompareTemplate = (s, d) => ({
    systolic: s,
    diastolic: d,
  });

  const compareUnits = new CompareTemplate(null, null);
  const compareConceptDisplays = new CompareTemplate(null, null);
  const compareDatetimeDisplays = new CompareTemplate(null, null);

  let hasModifiedIcon = false;
  let hasCommentIcon = false;
  let hasUnverifiedIcon = false;

  let iconGroupDisplayElement = null;
  let conceptDisplayElement = null;
  let datetimeDisplayElement = null;
  const decoratedResultDisplay = [];

  const hasSystolic = resultData.systolic;
  if (hasSystolic) {
    if (!isEmpty(resultData.systolic.result.unit)) compareUnits.systolic = resultData.systolic.result.unit.trim().toLowerCase();
    if (!isEmpty(resultData.systolic.conceptDisplay)) compareConceptDisplays.systolic = resultData.systolic.conceptDisplay.trim().toLowerCase();
    if (!isEmpty(resultData.systolic.datetimeDisplay)) compareDatetimeDisplays.systolic = resultData.systolic.datetimeDisplay.trim().toLowerCase();
    if (resultData.systolic.isModified) hasModifiedIcon = resultData.systolic.isModified;
    if (resultData.systolic.hasComment) hasCommentIcon = resultData.systolic.hasComment;
    if (resultData.systolic.isUnverified) hasUnverifiedIcon = resultData.systolic.isUnverified;
  }

  const hasDiastolic = resultData.diastolic;
  if (hasDiastolic) {
    if (!isEmpty(resultData.diastolic.result.unit)) compareUnits.diastolic = resultData.diastolic.result.unit.trim().toLowerCase();
    if (!isEmpty(resultData.diastolic.conceptDisplay)) compareConceptDisplays.diastolic = resultData.diastolic.conceptDisplay.trim().toLowerCase();
    if (!isEmpty(resultData.diastolic.datetimeDisplay)) compareDatetimeDisplays.diastolic = resultData.diastolic.datetimeDisplay.trim().toLowerCase();
    if (resultData.diastolic.isModified) hasModifiedIcon = resultData.diastolic.isModified;
    if (resultData.diastolic.hasComment) hasCommentIcon = resultData.diastolic.hasComment;
    if (resultData.diastolic.isUnverified) hasUnverifiedIcon = resultData.diastolic.isUnverified;
  }

  if (hasSystolic || hasDiastolic) {
    if (compareUnits.systolic === compareUnits.diastolic) {
      const systolicDisplay = <Observation key={`Observation-${resultData.systolic.eventId}`} eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit />;
      decoratedResultDisplay.push(systolicDisplay);
    } else {
      if (!hasSystolic) decoratedResultDisplay.push('--'); // TODO: change to correct display if systolic not present
      if (hasSystolic) {
        const systolicDisplay = <Observation key={`Observation-${resultData.systolic.eventId}`} eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit={hideUnit} />;
        decoratedResultDisplay.push(systolicDisplay);
      }
    }
    decoratedResultDisplay.push(<span key={`ObservationSeperator-${(hasSystolic) ? resultData.systolic.eventId : resultData.diastolic.eventId}`} className={cx('result-display-separator')}>/</span>);
    if (!hasDiastolic) decoratedResultDisplay.push('--'); // TODO: change to correct display if diastolic not present
    if (hasDiastolic) {
      const diastolicDisplay = <Observation key={`Observation-${resultData.diastolic.eventId}`} eventId={resultData.diastolic.eventId} result={resultData.diastolic.result} interpretation={resultData.diastolic.interpretation} hideUnit={hideUnit} />;
      decoratedResultDisplay.push(diastolicDisplay);
    }

    const modifiedIconElement = hasModifiedIcon ? (<IconModified className={cx('icon-modified')} />) : null;
    const commentIconElement = hasCommentIcon ? (<IconComment className={cx('icon-comment')} />) : null;
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

    if (compareConceptDisplays.systolic && compareConceptDisplays.diastolic) {
      if (compareConceptDisplays.systolic === compareConceptDisplays.diastolic) {
        conceptDisplayElement = <div className={cx('concept-display')}>{resultData.systolic.conceptDisplay}</div>;
      } else {
        conceptDisplayElement = (
          <div className={cx('concept-display')}>
            {resultData.systolic.conceptDisplay}
            {' / '}
            {resultData.diastolic.conceptDisplay}
          </div>
        );
      }
    } else if (compareConceptDisplays.systolic || compareConceptDisplays.diastolic) {
      const conceptDisplayValue = compareConceptDisplays.systolic ? resultData.systolic.conceptDisplay : resultData.diastolic.conceptDisplay;
      conceptDisplayElement = <div className={cx('concept-display')}>{conceptDisplayValue}</div>;
    }

    if (compareDatetimeDisplays.systolic && compareDatetimeDisplays.diastolic) {
      if (compareDatetimeDisplays.systolic === compareDatetimeDisplays.diastolic) {
        datetimeDisplayElement = <div className={cx('concept-display')}>{resultData.systolic.datetimeDisplay}</div>;
      } else {
        datetimeDisplayElement = (
          <div className={cx('concept-display')}>
            {resultData.systolic.datetimeDisplay}
            {' / '}
            {resultData.diastolic.datetimeDisplay}
          </div>
        );
      }
    } else if (compareDatetimeDisplays.systolic || compareDatetimeDisplays.diastolic) {
      const conceptDisplayValue = compareDatetimeDisplays.systolic ? resultData.systolic.datetimeDisplay : resultData.diastolic.datetimeDisplay;
      datetimeDisplayElement = <div className={cx('concept-display')}>{conceptDisplayValue}</div>;
    }
  }

  const clinicalresultClassnames = cx([
    'clinical-result',
    'blood-pressure-result',
    customProps.className,
  ]);

  const decoratedResultClassnames = cx([
    'decorated-result-display',
    { truncated: isTruncated },
  ]);

  return (
    <div {...customProps} className={clinicalresultClassnames}>
      <div className={decoratedResultClassnames}>
        <div className={cx('result-display')}>
          {decoratedResultDisplay}
          {isTruncated ? null : iconGroupDisplayElement}
        </div>
        {isTruncated ? iconGroupDisplayElement : null}
      </div>
      {conceptDisplayElement}
      {datetimeDisplayElement}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default ClinicalResultBloodPressure;
