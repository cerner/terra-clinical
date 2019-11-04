import PropTypes from 'prop-types';

/**
 * Enum for possible Result Statuses.
 * One of `'FINAL'`, `'INERROR'`.
 */
const statusPropOneOf = PropTypes.oneOf([
  'FINAL',
  'INERROR',
]);

export default statusPropOneOf;
export {
  statusPropOneOf,
};
