ChangeLog
=========

Unreleased
----------

3.15.0 - (April 14, 2020)
----------
### Changed
* Update wdio test configuration to use root wdio config

3.14.0 - (March 31, 2020)
----------
### Added
* Added wdio screenshots for clinical-lowlight-theme

3.13.0 - (March 24, 2020)
----------
### Changed
* Update docs to use MDX syntax

3.12.0 - (February 18, 2020)
----------
### Added
* Added clinical-lowlight-theme theming files

3.11.0 - (January 28, 2020)
----------
### Changed
* Update copyright to include 2020

3.10.0 - (January 22, 2020)
----------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

3.9.0 - (September 26, 2019)
----------
### Changed
* Minor dependency updates

3.8.0 - (September 19, 2019)
----------
### Changed
* Convert SCSS files to .module.scss

3.7.0 - (September 6, 2019)
----------
### Changed
* Removed inline styles from dev site components.
* Add comments for ESlint 6
* Cleaned up imports in examples and test files

3.6.0 - (August 14, 2019)
----------
### Changed
* Updated package.json test scripts

3.5.0 - (July 16, 2019)
----------
### Added
* iconAlignment prop

### Fixed
* Added missing primary text style and corresponding --terra-clinical-item-display-primary-color variable
* Added enumeration for valid text style values

3.4.0 - (June 11, 2019)
----------
### Removed
* Removed node_modules from .npmignore

3.3.0 - (March 26, 2019)
----------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release
* Update wdio spec to use Terra.describeViewports

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

### Fixed
Color Contrast Accessibility issue

3.2.0 - (February 5, 2019)
----------
### Changed
* Minor dependency updates

3.1.0 - (January 22, 2019)
----------
### Change
* Dependency updates

3.0.0 - (January 17, 2019)
----------
### Breaking Change
* Renamed css theming variables to fit linter standard.
* Added new css theming variables

### Added
* Changelog dev site doc page

2.15.0 - (November 21, 2018)
----------
### Changed
* Minor dependency updates

2.14.0 - (October 2, 2018)
----------
### Changed
* Disable cyclical depencency error per eslint v5 update. Logged issue: https://github.com/cerner/terra-clinical/issues/389

2.13.0 - (September 5, 2018)
----------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.12.0 - (August 30, 2018)
----------
### Changed
* Minor dependency updates

2.11.0 - (August 1, 2018)
----------
### Changed
* Added theming variables in Item Comment
* Added Webdriver I/O tests for Item Comment

2.10.1 - (July 25, 2018)
----------
### Changed
* Patch release

2.10.0 - (July 25, 2018)
----------
### Changed
* Minor updates

2.9.0 - (July 17, 2018)
----------
### Changed
* Minor updates

2.8.0 - (July 3, 2018)
----------
### Fixed
* Lint in doc page

2.7.0 - (June 28, 2018)
----------
### Added
* Added theming variables in Item Display

2.6.0 - (June 12, 2018)
----------
### Changed
* Conform to eslint updates

2.5.0 - (May 30, 2018)
----------
### Changed
* Moved examples to src

2.4.0 - (May 22, 2018)
----------
### Changed
* Minor dependency updates

2.3.0 - (May 1, 2018)
----------
### Changed
* Minor dependency updates

2.2.0 - (March 27, 2018)
----------
### Changed
* Converted nightwatch tests to wdio

2.1.0 - (March 6, 2018)
----------
### Changed
* Minor dependency updates

2.0.0 - (February 19, 2018)
----------
### Changed
* Update to React 16

1.7.0 - (February 19, 2018)
----------
### Changed
* Minor dependency updates

1.6.0 - (January 23, 2018)
-----------------
### Added
* Added `strong` textStyle & `isDisabled` prop.

1.5.0 - (November 29, 2017)
----------
### Fixed
* Fix IE10 truncation

1.4.0 - (September 26, 2017)
----------
### Changed
* Remove stylelint-disable selector-class-pattern
* Update class names to follow selector-class-pattern

1.3.0 - (September 1, 2017)
----------
### Changed
* Change dependency on terra-base to v2.0.0
* Update nightwatch tests and test scripts.

1.2.0 - (August 1, 2017)
----------
### Fixed
* Fixed icon styling to scale with font-size.

1.1.0 - (July 18, 2017)
----------
### Changed
* Converted component to use CSS modules
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
----------
Initial stable release
