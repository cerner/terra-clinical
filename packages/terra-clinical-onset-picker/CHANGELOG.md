# Changelog

## Unreleased

## 4.32.0 - (March 29, 2023)

* Changed
  * Updated wdio screenshots.
  * Updated jest snapshots
  * Locking terra-form-fieldset due to a bug

## 4.31.1 - (April 19, 2022)

* Changed
  * Bump terra-date-picker dependency to 4.73.1 to ensure onChangeRaw gets called when date is selected from calendar.

## 4.31.0 - (November 16, 2021)

* Fixed
  * Updated so that onOnsetChange gets called when a complete invalid date is entered.

* Changed
  * Updated wdio screenshots.

## 4.30.0 - (September 21, 2021)

* Fixed
  * Updated several translation files due to feedback from the translations team

## 4.29.0 - (July 21, 2021)

* Changed
  * Updated Jest command
  * Updated Jest Snapshots
  * Updated `terra-form-input` from `v3.0.0` to `v4.15.0`.

## 4.28.0 - (March 25, 2021)

* Changed
  * Upgrade tests to terra-functional-testing and WebDriverIO v6

## 4.27.0 - (January 5, 2021)

* Changed
  * Removed reference to intlShape as it is no longer provided in later versions of react-intl

* Fixed
  * Fixed broken links in documentation.

## 4.26.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 4.25.0 - (November 10, 2020)

* Fixed
  * Fix new eslint rule error

## 4.24.0 - (September 29, 2020)

* Changed
  * Updated wdio screenshots to fix main build

## 4.23.0 - (August 4, 2020)

* Changed
  * Update jest tests due to theme change in icon.

* Changed
  * Update changelog formatting

## 4.22.0 - (June 16, 2020)

* Changed
  * Updated terra form dependency to next major version.
  * Disabled wdio axe color-contrast rule on placeholder examples for IE testing. This will be re-enabled when [issue #2992](https://github.com/cerner/terra-core/issues/2992) is resolved.

## 4.21.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.20.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.19.0 - (April 14, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 4.18.0 - (March 31, 2020)

* Added
  * Added wdio screenshots for clinical-lowlight-theme

## 4.17.0 - (March 17, 2020)

* Changed
  * Update docs to use mdx syntax.

## 4.16.0 - (February 18, 2020)

* Added
  * Added upgrade guide for `v3` to `v4`.
  * Added clinical-lowlight-theme wdio config file

## 4.15.0 - (February 11, 2020)

* Changed
  * Added logic to show default or `date` granularity initially.
  * Clear existing data when granularity is changed.
  * Set Onset date to first day of `month` or `year` as per chosen granularity.
  * Calculation for leap year corrected.

## 4.14.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 4.13.0 - (January 22, 2020)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 4.12.0 - (January 7, 2020)

* Added
  * Add upgrade guides to dev-site docs

* Fixed
  * Fixed `age-field` misalignment in IE.

## 4.11.0 - (December 10, 2019)

* Changed
  * Increased `min-width` of year dropdown to fit values and scrollbar.
  * Mark `intl` prop as private since it is retrieved from the context automatically by injectIntl.

## 4.10.0 - (November 7, 2019)

* Fixed
  * Removed age granularity from being populated for age less than a week.

## 4.9.0 - (October 3, 2019)

* Fixed
  * Unknown precision fixed to return blank onset date value.

## 4.8.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

* Removed
  * Removed terra-i18n as a dependency since it is not being used.

## 4.7.0 - (September 19, 2019)

* Changed
  * Bump terra-date-picker dependency to 4.0.0.

* Added
  * Added en-CA translations.

## 4.6.0 - (September 6, 2019)

* Changed
  * Blank Age granularity fixed to return a blank onset date value.
  * Replaced Object.assign syntax with Object spread syntax
  * Cleaned up imports in examples and test files

## 4.5.0 - (August 14, 2019)

* Changed
  * Update tests for dev-site v6
  * Updated package.json test scripts
  * Removed react legacy `contexttypes`. Updated to implement `formatMessage` to interface with `injectIntl`.

## 4.4.0 - (July 16, 2019)

* Added
  * Added enumeration for valid age unit, granularity, precision, and precision set values

## 4.3.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore

* Added
  * Documentation of violation scenarios.
  * Indicate in site examples what birthdate is set to.
  * Added legend and isLegendHidden prop to Onsetpicker field group.

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

## 4.2.0 - (April 16, 2019)

* Fixed
  * Regenerated failing jest snapshots due to select changes.

## 4.1.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release
  * Changed react-intl to be a peerDependency instead of a devDependency
  * Updated lower bound for react-intl to ^2.8.0 to be consistent with changes in terra-core and terra-framework

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 4.0.0 - (March 8, 2019)

* Breaking Change
  * Condensed onChange function props into a single prop that returns an Object for the onsetDate.
  * Removed prop `granularitySelectOnChange`
  * Removed prop `precisionSelectOnChange`
  * Removed prop `onsetDateInputOnChange`
  * New prop `ageUnit`
  * New prop `onsetOnChange`

## 3.4.0 - (February 26, 2019)

* Added
  * Added en-AU translations

## 3.3.0 - (February 5, 2019)

* Changed
  * Minor dependency updates

## 3.2.0 - (January 22, 2019)

* Change
  * Dependency updates

## 3.1.0 - (January 17, 2019)

* Added
  * Changelog dev site doc page

## 3.0.0 - (January 2, 2019)

* Breaking Change
  * Updated to use new form inputs and selects to support blank defaults - issue #256
  * Resolved crash from issue #396, now returns an empty string if date is blank
  * Condensed props for input/select id's to a shared base id value

## 2.15.0 - (November 21, 2018)

* Changed
  * Minor dependency updates

## 2.14.0 - (October 2, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 2.13.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2
  * Updated test screenshots including the datepicker component

## 2.12.0 - (August 30, 2018)

* Changed
  * Minor dependency updates

## 2.11.1 - (July 25, 2018)

* Changed
  * Patch release

## 2.11.0 - (July 25, 2018)

* Added
  * Added `sv` and `sv-SE` translations

## 2.10.0 - (July 3, 2018)

* Fixed
  * Lint in doc page

## 2.9.0 - (June 28, 2018)

* Changed
  * Minor dependency updates

## 2.8.0 - (June 19, 2018)

* Changed
  * Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

## 2.7.0 - (June 12, 2018)

* Changed
  * Conform to eslint updates

## 2.6.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 2.5.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 2.4.0 - (May 1, 2018)

* Changed
  * Run tests once per screen-size.

## 2.3.0 - (April 20, 2018)

* Changed
  * Translations for nl, nl-BE

## 2.2.0 - (March 27, 2018)

* Changed
  * Converted nightwatch tests to wdio

## 2.1.0 - (March 6, 2018)

* Changed
  * Minor dependency updates

## 2.0.0 - (February 19, 2018)

* Changed
  * Update to React 16

## 1.1.0 - (February 19, 2018)

* Changed
  * Minor dependency updates

## 1.0.0 - (December 9, 2017)

* Initial stable release
