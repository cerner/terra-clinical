ChangeLog
=========

Unreleased
-----------------
### Fixed
* Fixed alpha truncation issue with FlowsheetResultCell
* Fixed misnamed class in ClinicalResultBloodPresure
* Fixed extra display truncation issue in ClinicalResult and ClinicalResultBloodPresure
* ClinicalResultBloodPressure no longer truncates in FlowsheetResultCell

### Changed
* Update docs to use mdx syntax.

1.2.0 - (March 17, 2020)
----------
### Fixed
* Fixed an alignment issue with FlowsheetResultCell that caused normal interpretation results to be aligned to the left.

1.1.0 - (March 10, 2020)
----------
### Fixed
* Fixed bug where ClinicalBloodPresure if provided both a systolic and diastolic object with `resultNoData` true, presented error result instead of no data result.

1.0.0 - (March 6, 2020)
----------
* Initial stable release
