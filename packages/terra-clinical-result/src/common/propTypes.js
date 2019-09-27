import PropTypes from 'prop-types';


const valueQuantityPropType = PropTypes.shape({
  /**
   *  Add description
   */
  value: PropTypes.string.isRequired,
  /**
   *  Add description
   */
  unit: PropTypes.string,
  /**
   *  Add description
   */
  system: PropTypes.string,
  /**
   *  Add description
   */
  code: PropTypes.string,
});


const interpretationPropType = PropTypes.oneOf([
  'CRITICAL',
  'ABNORMAL',
  'HIGH',
  'LOW',
  'NORMAL',
]);


export default {
  valueQuantityPropType,
  interpretationPropType,
};

export {
  valueQuantityPropType,
  interpretationPropType,
};
