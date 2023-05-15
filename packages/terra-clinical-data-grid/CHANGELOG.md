# Changelog

## Unreleased

## 2.40.0 - (April 21, 2023)

* Added
  * Added tabbing support for multiple grids on the same page.

* Added
  * Defined roles for better screen reader experience
  * New `labelRef` and `descriptionRef` props for allowing a consumer to define label and description of data-grid

## 2.39.0 - (March 29, 2023)

* Changed
  * Updated wdio screenshots.
  * Updated the examples for clinical-data-grid.

## 2.38.0 - (October 27, 2022)

* Fixed
  * Fixed staircasing issue due to precision loss in IE.

## 2.37.0 - (July 12, 2022)

* Fixed
  * Fixed section header caret icon size and position to match terra-section-header.

## 2.36.0 - (June 7, 2022)

* Fixed
  * Fixed section header resizing error limiting to pinned columns.

## 2.35.2 - (April 20, 2022)

* Fixed
  * Fixed `Cannot read property 'id' of undefined` error in `getFirstAndLastVisibleRowData` when all rows are set to `isDecorative`.

## 2.35.1 - (April 19, 2022)

* Changed
  * Updated how section header width resizing is applied. Corrects previous accidental change and incorrect wdio screenshots.
  * Updated column highlight first and last row detection for when a single row, and detecting empty and collapsed sections.

* Added
  * Added new row prop `isDecorative` to prevent column highlighting and interaction when consumers style rows as dividers.

## 2.35.0 - (March 25, 2022)

* Added
  * Added new prop `columnHighlightId` to highlight a column with style intended for use in timelines.

## 2.34.0 - (November 16, 2021)

* Changed
  * Updated wdio screenshots.

## 2.33.0 - (July 21, 2021)

* Changed
  * Updated Jest command
  * Updated `terra-clinical-item-view` from `v3.20.0` to `v4.4.0`.

## 2.32.0 - (March 25, 2021)

* Changed
  * Upgrade tests to terra-functional-testing and WebDriverIO v6

## 2.31.0 - (January 5, 2021)

* Changed
  * Removed reference to intlShape as it is no longer provided in later versions of react-intl
  * Updated translation placeholder variable to be compatible with later versions of react-intl

* Fixed
  * Fixed broken links in documentation.

* Changed
  * Updated the 'keycode-js' version from '^1.0.4' to '^3.1.0'.

## 2.30.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 2.29.0 - (November 10, 2020)

* Changed
  * Updated role to be `undefined` for non interactable cells.

* Changed
  * Removed terra-props-table dev dependency.

* Fixed
  * Fix new eslint rule error

## 2.28.0 - (August 11, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices and removed wdio tests for hover styles.

## 2.27.0 - (August 4, 2020)

* Changed
  * updated `master` references to `main`.
  * Update changelog formatting

## 2.26.0 - (June 23, 2020)

* Changed
  * Minor dependency updates

## 2.25.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.
  * Minor file changes to comply with eslint rules

* Removed
  * Removed unnecessary disable eslint rules

## 2.24.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 2.23.0 - (April 23, 2020)

* Changed
  * Minor dependency updates

## 2.22.0 - (April 14, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 2.21.0 - (March 31, 2020)

* Added
  * Added wdio screenshots for clinical-lowlight-theme

## 2.20.0 - (March 27, 2020)

* Changed
  * Minor dependency updates

## 2.19.0 - (March 24, 2020)

* Changed
  * Minor dependency updates

## 2.18.0 - (March 17, 2020)

* Changed
  * Update docs to use MDX syntax

## 2.17.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 2.16.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 2.15.0 - (January 22, 2020)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 2.14.0 - (January 17, 2020)

* Added
  * Added `verticalOverflowContainerRefCallback` prop to pass callback ref to `vertical-overflow-container`.
  * Added `horizontalOverflowContainerRefCallback` prop to pass callback ref to `horizontal-overflow-container`.

## 2.13.0 - (December 10, 2019)

* Changed
  * Mark `intl` prop as private since it is retrieved from the context automatically by injectIntl.

## 2.12.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

* Removed
  * Removed used keycodes file

## 2.11.0 - (September 19, 2019)

* Added
  * Added en-CA translations.

## 2.10.0 - (September 6, 2019)

* Changed
  * Removed inline styles from dev site components.
  * Replaced Object.assign syntax with Object spread syntax
  * Add comments for ESlint 6
  * Cleaned up imports in examples and test files

* Fixed
  * Fixed the 'resizeObserver loop limit exceeded' error with animation frames.

## 2.9.0 - (August 14, 2019)

* Changed
  * Minor dependency updates

## 2.8.0 - (July 30, 2019)

* Added
  * Added option to set a height on specific rows

* Changed
  * Update tests for dev-site v6
  * Updated package.json test scripts

* Removed
  * Removed DEPENDENCIES.md file

## 2.7.0 - (July 16, 2019)

* Changed
  * Replaced inline stylings for terra-dev-site components with .scss files

* Added
  * Added enumeration for valid column sort indicator values

* Fixed
  * Fix issue with test consistency

## 2.6.0 - (June 11, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update data grid button navigation to communicate usage to users
  * Update wdio spec to use Terra.describeViewports

* Removed
  * Removed node_modules from .npmignore

## 2.5.0 - (May 7, 2019)

* Changed
  * Replaced local key code value with keycode-js

## 2.4.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release
  * Changed injectIntl, intlShape to be imported from react-intl
  * Changed react-intl to be a peerDependency instead of a devDependency
  * Updated lower bound for react-intl to ^2.8.0 to be consistent with changes in terra-core and terra-framework

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 2.3.0 - (February 26, 2019)

* Added
  * Added PropTypes for ariaLabel on Cell
  * Added en-AU translations

* Changed
  * Updated unmount implementation to cancel any pending animation frames

## 2.2.0 - (February 5, 2019)

* Added
  * Added attribute containing id on section headers

## 2.1.0 - (January 22, 2019)

* Changed
  * Dependency updates

## 2.0.0 - (January 17, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Added new variables for css theming

* Added
  * Changelog dev site doc page

## 1.2.0 - (January 2, 2019)

* Fixed
  * Fixed paging logic when rows are being removed from the DataGrid

## 1.1.0 - (November 21, 2018)

* Changed
  * Updated row striping logic to be more consistent on a per-section basis
  * Removed unnecessary logic when `fill` prop is not provided
  * Added checkmark icons to row selection column

## 1.0.0 - (October 16, 2018)

Initial stable release
