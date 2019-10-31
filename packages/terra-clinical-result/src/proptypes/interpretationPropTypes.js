import PropTypes from 'prop-types';

/**
 *  Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`)
 */
const interpretationPropOneOf = PropTypes.oneOf([
  'CRITICAL',
  'EXTREMEHIGH',
  'EXTREMELOW',
  'PANICHIGH',
  'PANICLOW',
  'VABNORMAL',
  'POSITIVE',
  'ABNORMAL',
  'HIGH',
  'LOW',
  'NORMAL',
  'NEUTRAL',
]);

export default interpretationPropOneOf;
export {
  interpretationPropOneOf,
};
