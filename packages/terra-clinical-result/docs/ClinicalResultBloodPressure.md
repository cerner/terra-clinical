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
  /**
   * Result Object with the clinical result data.
   */
  resultData: PropTypes.shape({
    /**
     *  Systolic Result for blood pressure.
     */
    systolic: observationPropShape,
    /**
     *  Diastolic Result for blood pressure.
     */
    diastolic: observationPropShape,
  }),
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
    type: 'BLOODPRESSURE',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Blood Pressure Systolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '1577836800.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'low',
    type: 'BLOODPRESSURE',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Blood Pressure Diastolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  }
};

export default () => <ClinicalResultBloodPressure resultData={bloodpressureResultValue} hideUnit isTruncated />;

```
