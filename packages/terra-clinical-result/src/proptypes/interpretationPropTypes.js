import PropTypes from 'prop-types';

/**
 *  Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`)
 */
const interpretationPropType = PropTypes.oneOf([
  'critical',
  'critical-high',
  'critical-low',
  'positive',
  'abnormal',
  'high',
  'low',
  'normal',
]);

export default interpretationPropType;
