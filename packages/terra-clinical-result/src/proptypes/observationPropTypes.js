import PropTypes from 'prop-types';
import interpretationPropType from './interpretationPropTypes';
import statusPropType from './statusPropTypes';
import valueQuantityPropType from './valuePropTypes';

const observationPropShape = PropTypes.shape({
  /**
   *  Event ID for result
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: valueQuantityPropType,
  /**
   * Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`).
   * One of `'critical'`, `'critical-high'`, `'critical-low'`, `'positive'`, `'abnormal'`, `'high'`, `'low'`, `'normal'`.
   */
  interpretation: interpretationPropType,
  /**
   * Enum for possible Result Statuses.
   * One of `'final'`, `'entered-in-error'`s.
   */
  status: statusPropType,
  /**
   *  If the Result type is Numeric, in flowsheet cell will switch to alternate view if cannot fully display value.
   */
  isTypeNumeric: PropTypes.bool,
  /**
   *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
   */
  isModified: PropTypes.bool,
  /**
   *  If the Result value has an appended comment.
   */
  hasComment: PropTypes.bool,
  /**
   *  If the Result value has not been authenticated and committed to patient chart.
   */
  isUnverified: PropTypes.bool,
  /**
   *  Display to show the full Result Name/Label Concept, e.g. `'Temperature Oral'`.
   */
  conceptDisplay: PropTypes.string,
  /**
   *  Display to show an appropriate clinically relevant documented datetime.
   */
  datetimeDisplay: PropTypes.string,
  /**
   * Visually hides the unit of measure, e.g. when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * Shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  resultNoData: PropTypes.bool,
});

export default observationPropShape;
