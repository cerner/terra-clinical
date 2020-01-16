# Terra Clinical Flowsheet Result Cell

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. The flowsheet result cell is specifically for the grid display of a result collection, and can handle displaying an indication of multiple results.

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

The flowsheet cell for clinical results is constructed by providing the same structured object as the clinical result in an array, allowing for multiple results to be indicated in the same time cell.

Currently the Flowsheet expects an array of one or more results - and if there are multiple, it will display the first in the array, with an indication of additional results. Updates are in progress to also look at the performedDateTime value if provided to evaluate which result is the most recent to appropriately display, regardless of which order index position in the array it is.


```jsx
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result.
     */
    resultData: observationPropShape,
  })),
```


An example of a single clinical result value:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';

const singleResultValue = [
  {
    eventId: '111',
    result: {
      value: '101.9',
      unit: 'degC',
    },
    interpretation: 'CRITICAL',
    type: 'NUMERIC',
    performedDateTime: '2019-11-23T13:31:31+05:00',
    updateDateTime: '2019-11-23T13:31:31+05:00',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Temperature Oral',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
];

export default () => <FlowsheetResultCell resultDataSet={singleResultValue} />;

```


An example of mulitple clinical blood pressure result values:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const multipleResultBPValues = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      performedDateTime: '2020-10-10T11:11:00+05:00',
      updateDateTime: '2020-10-10T11:11:00+05:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
];

export default () => <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit />;

```

## Clinical Result Props

|Prop Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**resultDataSet**|an array of structured objects as shown above|required|none|Result Set with the clinical results data.|
|**hideUnit**|bool|optional|false|Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.|
|**paddingStyle**|enum|optional|'compact'|The padding styling to apply to the FLowsheet Cell. One of `'none'`, `'standard'`, `'compact'`.|
