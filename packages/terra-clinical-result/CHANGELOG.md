# Changelog

## Unreleased

## 1.16.0 - (March 29, 2023)

* Changed
  * Updated wdio screenshots.

## 1.15.0 - (August 17, 2021)

* Fixed
  * Fixed incorrect prop descriptions.

## 1.14.0 - (July 21, 2021)

* Changed
  * Updated Jest command

## 1.13.0 - (March 25, 2021)

* Changed
  * Changed Flowsheet overflow style to better handle truncation
  * Upgrade tests to terra-functional-testing and WebDriverIO v6
  * Updated screenshots with elements that are out of bound

* Added
  * Added packaged themes and applying themes by context

## 1.12.0 - (January 5, 2021)

* Changed
  * Removed reference to intlShape as it is no longer provided in later versions of react-intl
  * Removed unused react-intl imports.

* Fixed
  * Fixed broken links in documentation.

## 1.11.0 - (November 10, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 1.10.0 - (August 25, 2020)

* Changed
  * Update browserslist-config-terra to @cerner/browserslist-config-terra v^3

## 1.9.0 - (August 4, 2020)

* Changed
  * Update changelog formatting

* Changed
  * Update wdio due to icon changes.

## 1.8.0 - (June 16, 2020)

* Changed
  * Changed the description of 'resultNoData' prop for observation prop types
  * Changed 'ClinicalResultBloodPressure' to return early if result has an Error or doesn't have data

* Added
  * Added to interpretation Bloodpressure test
  * Added single result bloodpressure test
  * Added Result hasError test
  * Added Result hasNoData test
  * Added Decorated Flowsheet test
  * Added Flowsheet hasError test
  * Added Flowsheet hasNoData test
  * Added Flowsheet numericOverflow test
  * Added '\_BloodPressureDisplay' component to reduce clutter in 'ClinicalResultBloodPressure'

* Removed
  * Removed unused test data
  * Removed default empty object prop from ClinicalResult and Observation.

## 1.7.0 - (June 9, 2020)

* Changed
  * Minor file changes to comply with eslint rules

## 1.6.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 1.5.0 - (April 22, 2020)

* Fixed
  * Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations caused error text to be improperly aligned.
  * Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations in an extra result caused the multiple result icon to still show interpretation color.

## 1.4.0 - (April 14, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 1.3.0 - (March 27, 2020)

* Fixed
  * Fixed alpha truncation issue with FlowsheetResultCell
  * Fixed misnamed class in ClinicalResultBloodPresure
  * Fixed extra display truncation issue in ClinicalResult and ClinicalResultBloodPresure

* Changed
  * Update docs to use mdx syntax.

## 1.2.0 - (March 17, 2020)

* Fixed
  * Fixed an alignment issue with FlowsheetResultCell that caused normal interpretation results to be aligned to the left.

## 1.1.0 - (March 10, 2020)

* Fixed
  * Fixed bug where ClinicalBloodPresure if provided both a systolic and diastolic object with `resultNoData` true, presented error result instead of no data result.

## 1.0.0 - (March 6, 2020)

* Initial stable release
