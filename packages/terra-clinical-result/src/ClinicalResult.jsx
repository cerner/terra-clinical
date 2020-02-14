import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import Observation from './common/observation/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
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
};

const defaultProps = {
  resultData: {},
  hideUnit: false,
  isTruncated: false,
  hasResultError: false,
  hasResultNoData: false,
};

const ClinicalResult = (props) => {
  const {
    resultData,
    hideUnit,
    isTruncated,
    hasResultError,
    hasResultNoData,
    ...customProps
  } = props;

  let clinicalResultDisplay = null;

  if (hasResultError || hasResultNoData) {
    clinicalResultDisplay = hasResultError ? (<ResultError />) : (<NoData />);
  } else {
    const modifiedIconElement = resultData.isModified ? (<IconModified className={cx('icon-modified')} />) : null;
    const commentIconElement = resultData.hasComment ? (<IconComment className={cx('icon-comment')} />) : null;
    const unverifiedIconElement = resultData.isUnverified ? (<IconUnverified className={cx('icon-unverified')} />) : null;
    const iconGroupModifiedComment = resultData.isModified || resultData.hasComment || resultData.isUnverified ? (
      <React.Fragment>
        {modifiedIconElement}
        {commentIconElement}
        {unverifiedIconElement}
      </React.Fragment>
    ) : null;

    const conceptDisplayElement = resultData.conceptDisplay ? (<div className={cx('concept-display')}>{resultData.conceptDisplay}</div>) : null;
    const datetimeDisplayElement = resultData.datetimeDisplay ? (<div className={cx('datetime-display')}>{resultData.datetimeDisplay}</div>) : null;

    const decoratedResultClassnames = cx([
      'decorated-result-display',
      { truncated: isTruncated },
    ]);

    clinicalResultDisplay = (
      <React.Fragment>
        <div className={decoratedResultClassnames}>
          <div className={cx('result-display')}>
            <Observation
              eventId={resultData.eventId}
              result={resultData.result}
              interpretation={resultData.interpretation}
              hideUnit={hideUnit}
            />
            {isTruncated ? null : iconGroupModifiedComment}
          </div>
          {isTruncated ? iconGroupModifiedComment : null}
        </div>
        {conceptDisplayElement}
        {datetimeDisplayElement}
      </React.Fragment>
    );
  }

  const clinicalResultClassnames = cx([
    'clinical-result',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={clinicalResultClassnames}>
      {clinicalResultDisplay}
    </div>
  );
};

ClinicalResult.propTypes = propTypes;
ClinicalResult.defaultProps = defaultProps;

export default ClinicalResult;
