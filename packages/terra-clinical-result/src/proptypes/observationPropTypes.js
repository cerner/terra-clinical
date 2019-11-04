import PropTypes from 'prop-types';
import { interpretationPropOneOf } from './interpretationPropTypes';
import { resulttypePropOneOf } from './resulttypePropTypes';
import { statusPropOneOf } from './statusPropTypes';
import { valueQuantityPropShape, valueStringPropShape, valueNullPropShape } from './valuePropTypes';

const observationPropShape = PropTypes.shape({
  /**
   *  Event ID for result
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: PropTypes.oneOfType([
    valueQuantityPropShape,
    valueStringPropShape,
    valueNullPropShape,
  ]),
  /**
   * Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`).
   * One of `'CRITICAL'`, `'EXTREMEHIGH'`, `'EXTREMELOW'`, `'PANICHIGH'`, `'PANICLOW'`, `'VABNORMAL'`, `'POSITIVE'`, `'ABNORMAL'`, `'HIGH'`, `'LOW'`, `'NORMAL'`, `'NEUTRAL'`.
   */
  interpretation: interpretationPropOneOf,
  /**
   *  Enum for possible Result Types.
   * One of `'ALPHA'`, `'MULTIALPHA'`, `'FREETEXT'`, `'NUMERIC'`, `'BLOODPRESSURE'`, `'CALCULATION'`, `'DATE'`, `'DATETIME'`, `'TIME'`, `'PROVIDER'`.
   */
  type: resulttypePropOneOf,
  /**
   * Enum for possible Result Statuses.
   * One of `'registered'`, `'preliminary'`, `'final'`, `'amended'`, `'corrected'`, `'cancelled'`, `'entered-in-error'`, `'unknown'`.
   */
  status: statusPropOneOf,
  /**
   *  Clinical datetime for the Result (this may need to be renamed)
   */
  performedDateTime: PropTypes.instanceOf(Date),
  /**
   *  Last updated datetime for the Result (this may need to be renamed)
   */
  updateDateTime: PropTypes.instanceOf(Date),
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
});

export default observationPropShape;
