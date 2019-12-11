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
  resultData: observationPropShape,
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

const ClinicalResult = (props) => {
  const {
    resultData,
    hideUnit,
    isTruncated,
    ...customProps
  } = props;

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
    </div>
  );
};

ClinicalResult.propTypes = propTypes;
ClinicalResult.defaultProps = defaultProps;

export default ClinicalResult;
