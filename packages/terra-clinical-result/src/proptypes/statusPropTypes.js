import PropTypes from 'prop-types';

/**
 * Enum for possible Result Statuses.
 * values mapped from http://hl7.org/fhir/2018Sep/valueset-observation-status.html
 */
const statusPropType = PropTypes.oneOf([
  'final',
  'entered-in-error',
]);

export default statusPropType;
