import PropTypes from 'prop-types';

const interpretationPropOneOf = PropTypes.oneOf([
  'ABNORMAL',
  'CRITICAL',
  'HIGH',
  'LOW',
  'NORMAL',
]);

export default interpretationPropOneOf;
export {
  interpretationPropOneOf,
};
