import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconLow from 'terra-icon/lib/icon/IconLow';
import IconAbnormal from 'terra-icon/lib/icon/IconAbnormal';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
// import observationPropShape from '../proptypes/observationPropTypes';
import { interpretationPropOneOf } from '../proptypes/interpretationPropTypes';
import { valueQuantityPropShape, valueStringPropShape, valueNullPropShape } from '../proptypes/valuePropTypes';
import styles from './Observation.module.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes.shape({
  /**
   *  Event ID
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: PropTypes.oneOfType([
    valueQuantityPropShape,
    valueStringPropShape,
    valueNullPropShape,
  ]),
  /**
   * Interpretaion of the Result, indicates Criticality
   */
  interpretation: interpretationPropOneOf,
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
});

const defaultProps = {
  eventId: undefined,
  result: {},
  interpretation: undefined,
  hideUnit: false,
  isTruncated: false,
};

const interpretationIndicators = {
  HIGH: <IconHigh className={cx('icon-interpretation')} />,
  LOW: <IconLow className={cx('icon-interpretation')} />,
  CRITICAL: <IconCritical className={cx('icon-interpretation')} />,
  ABNORMAL: <IconAbnormal className={cx('icon-interpretation')} />,
};

const Observation = (props) => {
  const {
    eventId,
    result,
    interpretation,
    hideUnit,
    isTruncated,
    ...customProps
  } = props;

  const isValidValue = !(result.value === null || !result.value);

  const valueTextClasses = cx([
    'value',
    { abnormal: isValidValue && interpretation === 'ABNORMAL' },
    { critical: isValidValue && interpretation === 'CRITICAL' },
    { high: isValidValue && interpretation === 'HIGH' },
    { low: isValidValue && interpretation === 'LOW' },
  ]);

  
  let valueText,valueIcon;

  const resultDisplay = () => {
    if (isValidValue) {
      valueText = result.value;
      valueIcon = interpretation ? interpretationIndicators[interpretation.toUpperCase()] : null;
    } else {
      valueText = result.value === null ? '--' : '-?-' ;  
    }
  };

  const valueDisplayElement = (
    <span className={valueTextClasses}>
      {resultDisplay()}
      {valueIcon}
      {valueText}
    </span>
  );

  const unitClassNames = cx([
    'unit',
    { 'unit-hidden': hideUnit },
  ]);
  const valueUnitElement = result.unit ? (<span className={unitClassNames}>{result.unit}</span>) : null;
  
  return (
    <React.Fragment>
      {valueDisplayElement}
      {valueUnitElement}
    </React.Fragment>
  );
};

Observation.propTypes = propTypes;
Observation.defaultProps = defaultProps;

export default Observation;
