import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import statusPropType from './proptypes/statusPropTypes';
import interpretationPropType from './proptypes/interpretationPropTypes';
import valueQuantityPropType from './proptypes/valuePropTypes';
import Observation from './common/observation/_Observation';
import Icons from './_Icons';
import SecondaryDisplays from './_SecondaryDisplays';
import styles from './ClinicalResult.module.scss';
import { isEmpty, checkIsStatusInError, ConditionalWrapper } from './common/utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  Event ID
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
   * Enum for possible Result Statuses.
   * One of `'final'`, `'entered-in-error'`s.
   */
  status: statusPropType,
  /**
   * @private
   * Used by Flowsheet Result Cell to hide icons because it displays them in different positions.
   */
  hideAccessoryDisplays: PropTypes.bool,
};

const defaultProps = {
  result: {},
};

const ClinicalResultDisplay = ({
  eventId,
  result,
  interpretation,
  isUnverified,
  status,
  hideUnit,
  isTruncated,
  hideAccessoryDisplays,
  isModified,
  hasComment,
  conceptDisplay,
  datetimeDisplay,
}) => {
  const isStatusInError = !isEmpty(status) ? checkIsStatusInError(status) : false;
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
            key={`del-Observation-${eventId}`}
            condition={isStatusInError}
            wrapper={children => <del>{children}</del>}
          >
            <Observation
              key={`Observation-${eventId}`}
              eventId={eventId}
              result={result}
              interpretation={!isStatusInError ? interpretation : null}
              isUnverified={isUnverified}
              hideUnit={hideUnit}
            />
          </ConditionalWrapper>
          {isTruncated ? null : !hideAccessoryDisplays && <Icons isUnverified={isUnverified} isModified={isModified} hasComment={hasComment} />}
        </div>
        {isTruncated ? !hideAccessoryDisplays && <Icons isUnverified={isUnverified} isModified={isModified} hasComment={hasComment} /> : null}
      </div>
      {!hideAccessoryDisplays && <SecondaryDisplays conceptDisplay={conceptDisplay} datetimeDisplay={datetimeDisplay} />}
    </React.Fragment>
  );
};

ClinicalResultDisplay.propTypes = propTypes;
ClinicalResultDisplay.defaultProps = defaultProps;

export default ClinicalResultDisplay;
