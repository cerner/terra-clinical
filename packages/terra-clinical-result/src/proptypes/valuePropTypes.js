import PropTypes from 'prop-types';

const valueQuantityPropShape = PropTypes.shape({
  /**
   *  Numeric Value for an Observation Result
   */
  value: PropTypes.number.isRequired,
  /**
   *  Unit of Measure representation for an Observation Result
   */
  unit: PropTypes.string,
  /**
   *  Optional (FHIR) - System that defines coded unit form
   */
  system: PropTypes.string,
  /**
   *  Optional (FHIR) - Coded form of the unit
   */
  code: PropTypes.string,
});

const valueStringPropShape = PropTypes.shape({
  /**
   *  String Value for an Observation Result
   */
  value: PropTypes.string.isRequired,
});

const valueNullPropShape = PropTypes.shape({
  /**
   *  Using Object to set Null as Value for an Observation Result
   */
  value: PropTypes.object.isRequired,
});


export default {
  valueQuantityPropShape,
  valueStringPropShape,
  valueNullPropShape,
};
export {
  valueQuantityPropShape,
  valueStringPropShape,
  valueNullPropShape,
};
