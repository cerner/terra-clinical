# Terra Clinical Result Blood Pressure

The Clinical Result is a starndardized view for single result values added to a Patient's Medical Chart. This is specifically for Blood Pressure Vital Sign results.

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
 
<!-- Uncomment supported features.
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
-->

## Usage Guide
The basic result is constructed by providing structured object literal with a specific construction that follows a similar patter to HL7 FHIR Observation standard (https://www.hl7.org/fhir/observation.html).
```jsx
const observationPropShape = PropTypes.shape({
  /**
   * Result Object with the clinical result data.
   */
  resultData: PropTypes.shape({
    /**
     *  Systolic Result for blood pressure.
     */
    systolic: (see observationPropShape from clinical-result),
    /**
     *  Diastolic Result for blood pressure.
     */
    diastolic: (see observationPropShape from clinical-result),
  }),
});
```


The basic result is constructed by providing a structured object like:
```jsx
import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    type: 'BLOODPRESSURE',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Blood Pressure Systolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
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

## Clinical Result Props

|Prop Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**resultData**|a structured object as shown above|required|none|Result Object with the clinical result data.|
|**hideUnit**|bool|optional|false|Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.|
|**isTruncated**|bool|optional|false|Whether or not the text should be truncated in display. Restricts clinical result details each to one line.|
