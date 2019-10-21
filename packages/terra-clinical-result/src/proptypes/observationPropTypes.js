import PropTypes from 'prop-types';
import { interpretationPropOneOf } from './interpretationPropTypes';
import { valueQuantityPropShape, valueStringPropShape } from './valuePropTypes';

const observationPropShape = PropTypes.shape({
  /**
   *  Add description
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: PropTypes.oneOfType([
    valueQuantityPropShape,
    valueStringPropShape,
  ]),
  /**
   *  Add description
   */
  interpretation: interpretationPropOneOf,
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
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
});

export default observationPropShape;
