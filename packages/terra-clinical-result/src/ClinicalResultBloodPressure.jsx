import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Observation from './common/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
// import { valueQuantityPropType, interpretationPropType } from './common/propTypes';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Result Object with the clinical result data.
   */
  resultData: PropTypes.shape({
    /**
     *  Systolic result for Blood Pressure
     */
    systolic: observationPropShape,
    /**
     *  Diastolic result for Blood Pressure
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

  const ResultClassNames = cx([
    'blood-pressure-result',
    customProps.className,
  ]);

  const isEmpty = (str) => (!str || str.length === 0);

  const decoratedResultDisplay = [];
  const systolicUnitCompare = resultData.systolic.result.unit.trim().toLowerCase();
  const diastolicUnitCompare = resultData.diastolic.result.unit.trim().toLowerCase();

  const checkforFullResult = () => {
    if (isEmpty(systolicUnitCompare) || isEmpty(diastolicUnitCompare)) {
      console.log('Unexpected Result.');
    } else {
      if (systolicUnitCompare === diastolicUnitCompare) {
        // console.log('the two match');
        const systolicDisplay = <Observation eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit />;
        decoratedResultDisplay.push(systolicDisplay);
      } else {
        // console.log('they don\'t match');
        const systolicDisplay = <Observation eventId={resultData.systolic.eventId} result={resultData.systolic.result} interpretation={resultData.systolic.interpretation} hideUnit={hideUnit} />;
        decoratedResultDisplay.push(systolicDisplay);
      }
      decoratedResultDisplay.push(<span className={cx('result-display-separator')}>/</span>);
      const diastolicDisplay = <Observation eventId={resultData.diastolic.eventId} result={resultData.diastolic.result} interpretation={resultData.diastolic.interpretation} hideUnit={hideUnit} />;
      decoratedResultDisplay.push(diastolicDisplay);
    }
  };
  checkforFullResult();

  const modifiedIconElement = resultData.isModified ? (<IconModified className={cx('icon-modified')} />) : null;
  const commentIconElement = resultData.hasComment ? (<IconComment className={cx('icon-comment')} />) : null;
  const iconGroupModifiedComment = resultData.isModified || resultData.hasComment ? (
    <React.Fragment>
      {modifiedIconElement}
      {commentIconElement}
    </React.Fragment>
  ) : null;

  const conceptDisplayElement = resultData.conceptDisplay ? (<div className={cx('concept-display')}>{resultData.conceptDisplay}</div>) : null;
  const datetimeDisplayElement = resultData.datetimeDisplay ? (<div className={cx('datetime-display')}>{resultData.datetimeDisplay}</div>) : null;

  const clinicalresultClassnames = cx([
    'clinical-result',
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
          {isTruncated ? null : iconGroupModifiedComment}
        </div>
        {isTruncated ? iconGroupModifiedComment : null}
      </div>
      {conceptDisplayElement}
      {datetimeDisplayElement}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default ClinicalResultBloodPressure;
