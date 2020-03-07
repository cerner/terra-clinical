import PropTypes from 'prop-types';

const valueQuantityPropType = PropTypes.shape({
  /**
   *  Value for a single Observation Result.
   *  can be either single string or array of string values for multi-alpha responses
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /**
   *  Unit of Measure representation for an Observation Result.
   */
  unit: PropTypes.string,
});

export default valueQuantityPropType;
