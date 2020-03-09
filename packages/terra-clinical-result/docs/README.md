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

An example of a single clinical result value:
```jsx
import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

export default () => (
  <ClinicalResult
    eventId="1577836800"
    result={{
      value: '101.9',
      unit: 'degC',
    }}
    interpretation="critical"
    isNumeric
    conceptDisplay="Temperature Oral"
    datetimeDisplay="Nov 23, 2019 13:31:31"
    hideUnit
    isTruncated
    isUnverified
    isModified
    hasComment  
  />
);

```
