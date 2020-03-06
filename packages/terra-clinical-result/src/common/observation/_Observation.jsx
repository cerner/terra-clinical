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
  result: {},
};

const interpretationIndicatorMap = {
  critical: <IconCritical className={cx('icon-interpretation')} />,
  'critical-high': <IconCritical className={cx('icon-interpretation')} />,
  'critical-low': <IconCritical className={cx('icon-interpretation')} />,
  positive: <IconCritical className={cx('icon-interpretation')} />,
  abnormal: <IconAbnormal className={cx('icon-interpretation')} />,
  high: <IconHigh className={cx('icon-interpretation')} />,
  low: <IconLow className={cx('icon-interpretation')} />,
};

const interpretationTextClassMap = {
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

  const isValidValue = !!result.value;

  const interpretationLC = interpretation && interpretation.toLowerCase();

  const valueTextClasses = cx([
    'value',
    !isUnverified && interpretationTextClassMap[interpretationLC],
    { unverified: isUnverified },
  ]);

  const unitClassNames = cx([
    'unit',
    { 'unit-hidden': hideUnit },
  ]);

  const observationDisplay = () => {
    if (isValidValue) {
      return (
        <React.Fragment>
          <span
            {...customProps}
            className={customProps.className ? `${valueTextClasses} ${customProps.className}` : valueTextClasses}
          >
            {interpretation && !isUnverified && interpretationIndicatorMap[interpretationLC]}
            {result.value}
          </span>
          {result.unit ? (<span className={unitClassNames}>{result.unit}</span>) : null}
        </React.Fragment>
      );
    }
    return (<ResultError />);
  };

  return observationDisplay();
};

Observation.propTypes = propTypes;
Observation.defaultProps = defaultProps;

export default Observation;
