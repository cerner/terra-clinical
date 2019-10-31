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

  const decoratedResultDisplay = [];

  const systolicUnitCompare = !isEmpty(resultData.systolic.result.unit) ? resultData.systolic.result.unit.trim().toLowerCase() : null;
  const diastolicUnitCompare = !isEmpty(resultData.diastolic.result.unit) ? resultData.diastolic.result.unit.trim().toLowerCase() : null;

  const createDecoratedResultDisplay = () => {
    if (systolicUnitCompare === diastolicUnitCompare) {
      const systolicDisplay = <Observation eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit />;
      decoratedResultDisplay.push(systolicDisplay);
    } else {
      const systolicDisplay = <Observation eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit={hideUnit} />;
      decoratedResultDisplay.push(systolicDisplay);
    }
    decoratedResultDisplay.push(<span className={cx('result-display-separator')}>/</span>);
    const diastolicDisplay = <Observation eventId={resultData.diastolic.eventId} result={resultData.diastolic.result} interpretation={resultData.diastolic.interpretation} hideUnit={hideUnit} />;
    decoratedResultDisplay.push(diastolicDisplay);

    return decoratedResultDisplay;
  };

  const hasModifiedIcon = (resultData.systolic.isModified || resultData.diastolic.isModified);
  const hasCommentIcon = (resultData.systolic.hasComment || resultData.diastolic.hasComment);
  const hasUnverifiedIcon = (resultData.systolic.isUnverified || resultData.diastolic.isUnverified);
  const modifiedIconElement = hasModifiedIcon ? (<IconModified className={cx('icon-modified')} />) : null;
  const commentIconElement = hasCommentIcon ? (<IconComment className={cx('icon-comment')} />) : null;
  const unverifiedIconElement = hasUnverifiedIcon ? (<IconUnverified className={cx('icon-unverified')} />) : null;
  const iconGroupModifiedComment = hasModifiedIcon || hasCommentIcon || hasUnverifiedIcon ? (
    <React.Fragment>
      {modifiedIconElement}
      {commentIconElement}
      {unverifiedIconElement}
    </React.Fragment>
  ) : null;

  let conceptDisplayElement;
  const systolicConceptDisplayCompare = !isEmpty(resultData.systolic.conceptDisplay) ? resultData.systolic.conceptDisplay.trim().toLowerCase() : null;
  const diastolicConceptDisplayCompare = !isEmpty(resultData.diastolic.conceptDisplay) ? resultData.diastolic.conceptDisplay.trim().toLowerCase() : null;

  let datetimeDisplayElement;
  const systolicDatetimeDisplayCompare = !isEmpty(resultData.systolic.datetimeDisplay) ? resultData.systolic.datetimeDisplay.trim().toLowerCase() : null;
  const diastolicDatetimeDisplayCompare = !isEmpty(resultData.diastolic.datetimeDisplay) ? resultData.diastolic.datetimeDisplay.trim().toLowerCase() : null;

  const createConceptDisplay = () => {
    if (systolicConceptDisplayCompare && diastolicConceptDisplayCompare) {
      if (systolicConceptDisplayCompare === diastolicConceptDisplayCompare) {
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
    } else if (systolicConceptDisplayCompare || diastolicConceptDisplayCompare) {
      const conceptDisplayValue = systolicConceptDisplayCompare ? resultData.systolic.conceptDisplay : resultData.diastolic.conceptDisplay;
      conceptDisplayElement = <div className={cx('concept-display')}>{conceptDisplayValue}</div>;
    }
    return conceptDisplayElement;
  };

  const createDatetimeDisplay = () => {
    if (systolicDatetimeDisplayCompare && diastolicDatetimeDisplayCompare) {
      if (systolicDatetimeDisplayCompare === diastolicDatetimeDisplayCompare) {
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
    } else if (systolicDatetimeDisplayCompare || diastolicDatetimeDisplayCompare) {
      const conceptDisplayValue = systolicDatetimeDisplayCompare ? resultData.systolic.datetimeDisplay : resultData.diastolic.datetimeDisplay;
      datetimeDisplayElement = <div className={cx('concept-display')}>{conceptDisplayValue}</div>;
    }
    return datetimeDisplayElement;
  };

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
          {createDecoratedResultDisplay()}
          {isTruncated ? null : iconGroupModifiedComment}
        </div>
        {isTruncated ? iconGroupModifiedComment : null}
      </div>
      {createConceptDisplay()}
      {createDatetimeDisplay()}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default ClinicalResultBloodPressure;
