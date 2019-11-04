# Terra Clinical Flowsheet Result Cell

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. The flowsheet result cell is specifically for the grid display of a result collection, and can handle displaying indicaiton of multiple results.

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

```


An example of mulitple clinical blood pressure result values:
```jsx

```

## Clinical Result Props

|Prop Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**resultDataSet**|an array of structured objects as shown above|required|none|Result Set with the clinical results data.|
|**hideUnit**|bool|optional|false|Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.|
|**paddingStyle**|enum|optional|'compact'|The padding styling to apply to the FLowsheet Cell. One of `'none'`, `'standard'`, `'compact'`.|
