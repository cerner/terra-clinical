import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconLow from 'terra-icon/lib/icon/IconLow';
import IconAbnormal from 'terra-icon/lib/icon/IconAbnormal';
import interpretationPropType from '../../proptypes/interpretationPropTypes';
import valueQuantityPropType from '../../proptypes/valuePropTypes';
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
  critical: <IconCritical className={cx('icon-interpretation')} />,
  'critical-high': <IconCritical className={cx('icon-interpretation')} />,
  'critical-low': <IconCritical className={cx('icon-interpretation')} />,
  positive: <IconCritical className={cx('icon-interpretation')} />,
  abnormal: <IconAbnormal className={cx('icon-interpretation')} />,
  high: <IconHigh className={cx('icon-interpretation')} />,
  low: <IconLow className={cx('icon-interpretation')} />,
};

const verifiedValueTextClassMap = {
  critical: 'critical',
  'critical-high': 'critical',
  'critical-low': 'critical',
  positive: 'positive',
  abnormal: 'abnormal',
  high: 'high',
  low: 'low',
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
    !isUnverified && verifiedValueTextClassMap[interpretation],
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
          <span
            {...customProps}
            className={customProps.className ? `${valueTextClasses} ${customProps.className}` : valueTextClasses}
          >
            {interpretation && !isUnverified ? interpretationIndicators[interpretation.toLowerCase()] : null}
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
