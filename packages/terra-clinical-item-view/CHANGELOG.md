# Changelog

## Unreleased

## 4.6.0 - (March 29, 2023)

* Changed
  * Updated wdio screenshots.

## 4.5.0 - (July 21, 2021)

* Changed
  * Updated Jest command

## 4.4.0 - (March 25, 2021)

* Changed
  * Upgrade tests to terra-functional-testing and WebDriverIO v6

## 4.3.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 4.2.0 - (November 10, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 4.1.0 - (August 4, 2020)

* Changed
  * Update changelog formatting

## 4.0.0 - (June 23, 2020)

* Breaking
  * This is a breaking change to pull in an MVB of terra-clinical-item-display. Since item view exports item display, this also needs to be an MVB

## 3.20.1 - (June 23, 2020)

* Changed
  * Revert MVB of terra-clinical-item-display

## 3.20.0 - (June 23, 2020)

* Changed
  * Updated source file for changes in clinical-item-display
  * Update secondary colors to new rgba values.

## 3.19.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 3.18.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.17.0 - (April 23, 2020)

* Changed
  * Minor dependency updates

## 3.16.0 - (April 14, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 3.15.0 - (March 31, 2020)

* Added
  * Added wdio screenshots for clinical-lowlight-theme

## 3.14.0 - (March 27, 2020)

* Changed
  * Update docs to use mdx syntax.

## 3.13.0 - (March 24, 2020)

* Changed
  * Minor dependency updates

## 3.12.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.11.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.10.0 - (January 22, 2020)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.9.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.8.0 - (September 19, 2019)

* Changed
  * Convert SCSS files to .module.scss

## 3.7.0 - (September 6, 2019)

* Changed
  * Removed inline styles from dev site components.
  * Add comments for ESlint 6
  * Cleaned up imports in examples and test files

## 3.6.0 - (August 14, 2019)

* Changed
  * Jest snapshot updated for ItemDisplay's primary textStyle default prop.
  * Updated package.json test scripts

## 3.5.0 - (July 16, 2019)

* Fixed
  * Right-aligned text and icons using new prop in clinical-item-display

* Added
  * Added enumeration for valid layout, emphasis, and alignment values

## 3.4.0 - (June 11, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

* Removed
  * Removed node_modules from .npmignore

* Updated
  * Updated displays documentation

## 3.3.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.2.0 - (February 5, 2019)

* Changed
  * Minor dependency updates

## 3.1.0 - (January 22, 2019)

* Change
  * Dependency updates

## 3.0.0 - (January 17, 2019)

* Breaking Change
  * Renamed css theming variables to match linter standards.

* Added
  * Changelog dev site doc page

## 2.16.0 - (November 21, 2018)

* Changed
  * Minor dependency updates

## 2.15.0 - (October 2, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 2.14.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.13.0 - (August 30, 2018)

* Changed
  * Minor dependency updates

## 2.12.0 - (August 1, 2018)

* Changed
  * Minor updates

## 2.11.1 - (July 25, 2018)

* Changed
  * Patch release

## 2.11.0 - (July 25, 2018)

* Changed
  * Minor updates

## 2.10.0 - (July 17, 2018)

* Changed
  * Minor updates

## 2.9.0 - (July 3, 2018)

* Fixed
  * Accessibility in Accessory Item View example
  * Lint in doc page

## 2.8.0 - (June 28, 2018)

* Added
  * Added theming variables in Item View
  * Updated Inline-icon to use em instead of px

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
  * Minor dependency updates

## 2.3.0 - (April 20, 2018)

* Changed
  * Minor dependency updates

## 2.2.0 - (March 27, 2018)

* Changed
  * Converted nightwatch tests to wdio

## 2.1.0 - (March 6, 2018)

* Changed
  * Minor dependency updates

## 2.0.0 - (February 19, 2018)

* Changed
  * Update to React 16

## 1.7.0 - (February 19, 2018)

* Changed
  * Minor dependency updates

## 1.6.0 - (January 23, 2018)

* Changed
  * Coverted ItemView to be a functional component, removing static methods.

## 1.5.0 - (November 28, 2017)

* Added
  * Added reserveStartAccessorySpace to allow for proper spacing when a start accessory is not provided.

* Changed
  * Updated the start accessory's max-width to be 2.8571rem (40px) and removed max-height.
  * Updated the end accessory's max-width to be 20% and removed max-height.
  * startAccessory, comment and endAccessory props now accept node proptypes.

## 1.4.0 - (September 26, 2017)

* Changed
  * Remove stylelint-disable selector-class-pattern
  * Update class names to follow selector-class-pattern

## 1.3.0 - (September 1, 2017)

* Changed
  * Change dependency on terra-base to v2.0.0
  * Update nightwatch tests and test scripts.

## 1.2.0 - (July 27, 2017)

* Fixed
  * Fixed accessory styling to scale with font size.
  * Fixed truncation styling to correctly apply an ellipse.

* Changed
  * Updated Accessory nightwatch examples to include an icon.

## 1.1.0 - (July 18, 2017)

* Changed
  * Converted component to use CSS modules
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

## 1.0.0 - (June 28, 2017)

Initial stable release
