# Terra Clinical Result Blood Pressure

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. This is specifically for Blood Pressure Vital Sign results.

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

The blood pressure result is constructed similarly to the single clinical result by providing structured object with a specific construction that follows a similar pattern to the [HL7 FHIR Observation Blood Pressure](https://www.hl7.org/fhir/observation-example-bloodpressure.html) example.
```jsx
/* ------ Structure for the resultData object for the Blood Pressure Result ------ */

resultData = {
  /**
   *  Blood Pressure grouped result id
   */
  id: PropTypes.string,
  /**
   *  Systolic Result for blood pressure.
   */
  systolic: {
    /**
     *  Event ID for result
     */
    eventId: PropTypes.string,
    /**
     *  Value and optional Unit of Measure for the Observation Result
     */
    result: {
        /**
         *  Value for a single Observation Result. Either single string or array of string values for multi-alpha responses
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        /**
         *  Unit of Measure representation for an Observation Result
         */
        unit: PropTypes.string,
    },
    /**
     *  Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`).
     */
    interpretation: PropTypes.oneOf([
      'critical', 'critical-high', 'critical-low', 'positive', 'abnormal', 'high', 'low', 'normal',
    ]),
    /**
     *  Enum for possible Result Statuses.
     */
    status: PropTypes.oneOf([,
      'final', 'entered-in-error',
    ]),
    /**
     *  If the Result value has not been authenticated and committed to patient chart.
     */
    isUnverified: PropTypes.bool,
    /**
     *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
     */
    isModified: PropTypes.bool,
    /**
     * If the Result value has an appended comment.
     */
    hasComment: PropTypes.bool,
    /**
     *  Display to show the full Result Name/Label Concept, e.g. `'Temperature Oral'`.
     */
    conceptDisplay: PropTypes.string,
    /**
     *  Display to show an appropriate clinically relevant documented datetime.
     */
    datetimeDisplay: PropTypes.string,
    /**
     * Shows a known "No Data" display. Used when there is known to be no value for only just the systolic result at a specific datetime.
     */
    resultNoData: PropTypes.bool,
  },
  /**
   *  Diastolic Result for blood pressure.
   */
  diastolic: {
    /**
     *  
     *    ... same as Systolic
     *
     */
  },
};

```


An example of a single blood pressure result value:
```jsx
import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '1577836800',
  systolic: {
    eventId: '1577836800.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'critical',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Blood Pressure',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '1577836800.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'low',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Blood Pressure',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  }
};

export default () => <ClinicalResultBloodPressure resultData={bloodpressureResultValue} hideUnit isTruncated />;

```
