import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconLow from 'terra-icon/lib/icon/IconLow';
import IconAbnormal from 'terra-icon/lib/icon/IconAbnormal';
import interpretationPropType from '../../proptypes/interpretationPropTypes';
import { valueQuantityPropShape, valueStringPropShape, valueNullPropShape } from '../../proptypes/valuePropTypes';
import ResultError from '../other/_ResultError';
import NoData from '../other/_KnownNoData';
import styles from './Observation.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Interpretation of the Result, indicates Criticality
   */
  interpretation: interpretationPropType,
  /**
   * If Result has not been verified
   */
  isUnverified: PropTypes.bool,
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
};

const defaultProps = {
  eventId: undefined,
  result: {},
  interpretation: undefined,
  isUnverified: false,
  hideUnit: false,
};

const interpretationIndicators = {
  CRITICAL: <IconCritical className={cx('icon-interpretation')} />,
  EXTREMEHIGH: <IconCritical className={cx('icon-interpretation')} />,
  EXTREMELOW: <IconCritical className={cx('icon-interpretation')} />,
  PANICHIGH: <IconCritical className={cx('icon-interpretation')} />,
  PANICLOW: <IconCritical className={cx('icon-interpretation')} />,
  VABNORMAL: <IconCritical className={cx('icon-interpretation')} />,
  POSITIVE: <IconCritical className={cx('icon-interpretation')} />,
  ABNORMAL: <IconAbnormal className={cx('icon-interpretation')} />,
  HIGH: <IconHigh className={cx('icon-interpretation')} />,
  LOW: <IconLow className={cx('icon-interpretation')} />,
};

const Observation = (props) => {
  const {
    eventId,
    result,
    interpretation,
    isUnverified,
    hideUnit,
    ...customProps
  } = props;

  const isValidValue = !(result.value === null || !result.value);

  const valueTextClasses = cx([
    'value',
    { abnormal: interpretation === 'ABNORMAL' && !isUnverified },
    { low: interpretation === 'LOW' && !isUnverified },
    { high: interpretation === 'HIGH' && !isUnverified },
    { critical: interpretation === 'CRITICAL' && !isUnverified },
    { critical: interpretation === 'EXTREMEHIGH' && !isUnverified },
    { critical: interpretation === 'EXTREMELOW' && !isUnverified },
    { critical: interpretation === 'PANICHIGH' && !isUnverified },
    { critical: interpretation === 'PANICLOW' && !isUnverified },
    { critical: interpretation === 'VABNORMAL' && !isUnverified },
    { positive: interpretation === 'POSITIVE' && !isUnverified },
    { unverified: isUnverified },
  ]);

  const unitClassNames = cx([
    'unit',
    { 'unit-hidden': hideUnit },
  ]);

  const observationDisplay = () => {
    let valueDisplayElements;
    if (isValidValue) {
      valueDisplayElements = (
        <React.Fragment>
          <span {...customProps} className={valueTextClasses}>
            {interpretation && !isUnverified ? interpretationIndicators[interpretation.toUpperCase()] : null}
            {result.value}
          </span>
          {result.unit ? (<span className={unitClassNames}>{result.unit}</span>) : null}
        </React.Fragment>
      );
    } else if (result.value === null) {
      valueDisplayElements = (<NoData />);
    } else {
      valueDisplayElements = (<ResultError />);
    }
    return valueDisplayElements;
  };

  return observationDisplay();
};

Observation.propTypes = propTypes;
Observation.defaultProps = defaultProps;

export default Observation;
