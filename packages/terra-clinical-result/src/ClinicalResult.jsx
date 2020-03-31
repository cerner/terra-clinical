import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import ClinicalResultDisplay from './_ClinicalResultDisplay';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import statusPropType from './proptypes/statusPropTypes';
import interpretationPropType from './proptypes/interpretationPropTypes';
import valueQuantityPropType from './proptypes/valuePropTypes';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A unique event identifier attached to the result data
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: valueQuantityPropType,
  /**
   * Interpretation of the Result, indicates Criticality
   */
  interpretation: interpretationPropType,
  /**
   * If Result has not been verified
   */
  isUnverified: PropTypes.bool,
  /**
   *  Display to show the full Result Name/Label Concept, e.g. `'Temperature Oral'`.
   */
  conceptDisplay: PropTypes.string,
  /**
   *  Display to show an appropriate clinically relevant documented datetime.
   */
  datetimeDisplay: PropTypes.string,
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Whether or not the text should be truncated in display. Restricts clinical result details each to one line.
   */
  isTruncated: PropTypes.bool,
  /**
   *  If the Result value has not been authenticated and committed to patient chart.
   */
  isModified: PropTypes.bool,
  /**
   *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
   */
  hasComment: PropTypes.bool,
  /**
   * Override that shows an Error display. Used when there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Override that shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
  /**
   * Enum for possible Result Statuses.
   * One of `'entered-in-error'`s.
   */
  status: statusPropType,
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
  result: {},
};

const ClinicalResult = (props) => {
  const {
    eventId,
    result,
    interpretation,
    hideUnit,
    isTruncated,
    isUnverified,
    isModified,
    hasComment,
    hasResultError,
    hasResultNoData,
    hideAccessoryDisplays,
    conceptDisplay,
    status,
    datetimeDisplay,
    ...customProps
  } = props;

  let clinicalResultDisplay;

  if (hasResultError) {
    clinicalResultDisplay = <ResultError />;
  } else if (hasResultNoData) {
    clinicalResultDisplay = <NoData />;
  } else {
    clinicalResultDisplay = (
      <ClinicalResultDisplay
        eventId={eventId}
        result={result}
        interpretation={interpretation}
        isUnverified={isUnverified}
        status={status}
        hideUnit={hideUnit}
        isTruncated={isTruncated}
        hideAccessoryDisplays={hideAccessoryDisplays}
        isModified={isModified}
        hasComment={hasComment}
        conceptDisplay={conceptDisplay}
        datetimeDisplay={datetimeDisplay}
      />
    );
  }

  const clinicalResultClassnames = cx([
    'clinical-result',
    { truncated: isTruncated },
  ]);

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
