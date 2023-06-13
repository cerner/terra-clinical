import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import observationPropShape from './proptypes/observationPropTypes';
import Observation from './common/observation/_Observation';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import { ConditionalWrapper } from './common/utils';

const propTypes = {
  /**
   * Result for blood pressure
   */
  result: observationPropShape,
  /**
   * Whether or not the unit of measure should be presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Blood Pressure grouped result id
   */
  id: PropTypes.string,
  /**
   * What type the display is
   */
  type: PropTypes.string,
  /**
   * The cleaned unit of the diastolic display.
   */
  diastolicUnit: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const BloodPressureDisplay = ({
  result,
  hideUnit,
  id,
  type,
  diastolicUnit,
  intl,
}) => {
  const isValidValue = result?.result?.value;

  if (!result) {
    return <ResultError key={`Error-${type}-${id}`} />;
  }
  if (result.noData) {
    return <NoData key={`NoData-${type}-${id}`} />;
  }
  return (
    <ConditionalWrapper
      key={`del-${type}-${result.eventId}`}
      condition={result.statusInError}
      wrapper={children => (
        <span>
          <s aria-hidden="true">{children}</s>
          {isValidValue
            ? (
              <VisuallyHiddenText text={intl.formatMessage(
                { id: 'Terra.clinicalResult.statusInErrorStrikethrough' },
                { strikethroughResult: `${result.result.value} ${!hideUnit && result.result.unit ? result.result.unit : ''}` },
              )}
              />
            )
            : null}
        </span>
      )}
    >
      <Observation
        key={`Observation-${type}-${result.eventId}`}
        eventId={result.eventId}
        result={result.result}
        interpretation={!result.statusInError ? result.interpretation : null}
        isUnverified={result.isUnverified}
        hideUnit={hideUnit || ((result.cleanedUnit === diastolicUnit) && !result.statusInError)}
      />
    </ConditionalWrapper>
  );
};

BloodPressureDisplay.propTypes = propTypes;

export default injectIntl(BloodPressureDisplay);
