import React from 'react';
import PropTypes from 'prop-types';
import { valueQuantityPropType, interpretationPropType } from './propTypes';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconLow from 'terra-icon/lib/icon/IconLow';
import IconAbnormal from 'terra-icon/lib/icon/IconAbnormal';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import classNames from 'classnames/bind';
import styles from './Observation.module.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes.shape({
  /**
   *  Add description
   */
  id: PropTypes.string,
  /**
   *  Add description
   */
  valueQuantity: valueQuantityPropType,
  /**
   *  Add description
   */
  interpretation: interpretationPropType,
  /**
   *  Add description
   */
  isModified: PropTypes.bool,
  /**
   *  Add description
   */
  hasComment: PropTypes.bool,
  /**
   *  Add description
   */
  conceptDisplay: PropTypes.string,
  /**
   *  Add description
   */
  datetimeDisplay: PropTypes.string,
  /**
   *  Add description
   */
  isTruncated: PropTypes.bool,
});

const defaultProps = {
  eventId: undefined,
  valueQuantity: {},
  interpretation: undefined,
  isModified: false,
  hasComment: false,
  conceptDisplay: undefined,
  datetimeDisplay: undefined,
  isTruncated: false,
};

const interpretationIndicators = {
  HIGH: <IconHigh className={cx('icon-interpretation')}/>,
  LOW: <IconLow className={cx('icon-interpretation')}/>,
  CRITICAL: <IconCritical className={cx('icon-interpretation')}/>,
  ABNORMAL: <IconAbnormal className={cx('icon-interpretation')}/>,
};

const Observation = (props) => {
  const {
    eventId,
    valueQuantity,
    interpretation,
    isModified,
    hasComment,
    conceptDisplay,
    datetimeDisplay,
    isTruncated,
    ...customProps
  } = props;

  const valueTextClasses = cx([
    'value',
    { 'critical': interpretation === 'CRITICAL' },
    { 'high': interpretation === 'HIGH' },
    { 'low': interpretation === 'LOW' },
    { 'low': interpretation === 'ABNORMAL' },
  ]);

  const valueText = valueQuantity.value || '--';
  const valueIcon = interpretation ? interpretationIndicators[interpretation.toUpperCase()] : null;
  const valueDisplayElement = (<span className={valueTextClasses}>{valueIcon}{valueText}</span>);
  const valueUnitElement = valueQuantity.unit ? (<span className={cx('unit')}>{valueQuantity.unit}</span>) : null;
  const modifiedIconElement = isModified ? (<IconModified className={cx('icon-modified')} />) : null;
  const commentIconElement = hasComment ? (<IconComment className={cx('icon-comment')} />) : null;
  const conceptDisplayElement =  conceptDisplay ? (<div className={cx('concept-display')}>{conceptDisplay}</div>) :  null;
  const datetimeDisplayElement =  datetimeDisplay ? (<div className={cx('datetime-display')}>{datetimeDisplay}</div>) :  null;

  const resultClassnames = cx([
    'result',
    customProps.className,
  ]);

  const decoratedResultClassnames = cx([
    'decorated-result-display',
    { 'truncated': isTruncated },
  ]);

  return (
    <div {...customProps} className={resultClassnames}>
      <div className={decoratedResultClassnames}>
        <div className={cx('result-display')}>
          {valueDisplayElement}
          {valueUnitElement}
        </div>
        {modifiedIconElement}
        {commentIconElement}
      </div>
      {conceptDisplayElement}
      {datetimeDisplayElement}
    </div>
  );
};

Observation.propTypes = propTypes;
Observation.defaultProps = defaultProps;

export default Observation;
