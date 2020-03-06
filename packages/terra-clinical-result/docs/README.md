# Terra Clinical Result

The Terra Clinical Result package is a collection of standardized views for presenting clinical results documented to a Patient's Medical Chart,
such as Vital Signs, Laboratory Results, and Discretely Documented Values. It also includes additional supporting views where clinical results
are commonly displayed like flowsheets, result detail viewers, etc.

This default Clinical Result component is intended for displaying a single result value.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
```
$ npm install terra-clinical-result
```

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
<!-- AUTO-GENERATED-CONTENT:END -->

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)

## Usage Guide
The clinical result is constructed by providing structured object with a specific construction that follows a similar pattern to the [HL7 FHIR Observation](https://www.hl7.org/fhir/observation.html) standard.
```jsx
const observationPropShape = PropTypes.shape({
  /**
   *  Event ID for result
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: PropTypes.shape([
      /**
       *  Value for a single Observation Result. Either single string or array of string values for multi-alpha responses
       */
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      /**
       *  Unit of Measure representation for an Observation Result
       */
      unit: PropTypes.string,
  ]),
  /**
   * Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`).
   */
  interpretation: PropTypes.oneOf([
    'critical',
    'critical-high',
    'critical-low',
    'positive',
    'abnormal',
    'high',
    'low',
    'normal',
  ]),
  /**
   * Enum for possible Result Statuses.
   */
  status: PropTypes.oneOf([,
    'registered',
    'preliminary',
    'final',
    'amended',
    'corrected',
    'cancelled',
    'entered-in-error',
    'unknown'
  ]),
  /**
   *  Clinical datetime for the Result
   */
  performedDateTime: PropTypes.string,
  /**
   *  Last updated datetime for the Result
   */
  updateDateTime: PropTypes.string,
  /**
   *  If the Result type is Numeric, in flowsheet cell will switch to alternate view if cannot fully display value.
   */
  isTypeNumeric: PropTypes.bool,
  /**
   *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
   */
  isModified: PropTypes.bool,
  /**
   * If the Result value has an appended comment.
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
});
```


An example of a single clinical result value:
```jsx
import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const singleResultValue = {
  eventId: '1577836800',
  result: {
    value: '101.9',
    unit: 'degC',
  },
  interpretation: 'critical',
  isTypeNumeric: true,
  isModified: true,
  hasComment: true,
  isUnverified: true,
  conceptDisplay: 'Temperature Oral',
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
};

export default () => <ClinicalResult resultData={singleResultValue} hideUnit isTruncated />;

```
