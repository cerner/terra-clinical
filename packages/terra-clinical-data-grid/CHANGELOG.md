Changelog
=========

Unreleased
----------

2.13.0 - (December 10, 2019)
------------------
### Changed
* Mark `intl` prop as private since it is retrieved from the context automatically by injectIntl.

2.12.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

### Removed
* Removed used keycodes file

2.11.0 - (September 19, 2019)
----------
### Added
* Added en-CA translations.

2.10.0 - (September 6, 2019)
----------
### Changed
* Removed inline styles from dev site components.
* Replaced Object.assign syntax with Object spread syntax
* Add comments for ESlint 6
* Cleaned up imports in examples and test files

### Fixed
* Fixed the 'resizeObserver loop limit exceeded' error with animation frames.

2.9.0 - (August 14, 2019)
----------
### Changed
* Minor dependency updates

2.8.0 - (July 30, 2019)
----------
### Added
* Added option to set a height on specific rows

### Changed
* Update tests for dev-site v6
* Updated package.json test scripts

### Removed
* Removed DEPENDENCIES.md file

2.7.0 - (July 16, 2019)
----------
### Changed
* Replaced inline stylings for terra-dev-site components with .scss files

### Added
* Added enumeration for valid column sort indicator values

### Fixed
* Fix issue with test consistency

2.6.0 - (June 11, 2019)
----------
### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Update data grid button navigation to communicate usage to users
* Update wdio spec to use Terra.describeViewports

### Removed
* Removed node_modules from .npmignore

2.5.0 - (May 7, 2019)
----------
### Changed
* Replaced local key code value with keycode-js

2.4.0 - (March 26, 2019)
----------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release
* Changed injectIntl, intlShape to be imported from react-intl
* Changed react-intl to be a peerDependency instead of a devDependency
* Updated lower bound for react-intl to ^2.8.0 to be consistent with changes in terra-core and terra-framework

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.3.0 - (February 26, 2019)
----------
### Added
* Added PropTypes for ariaLabel on Cell
* Added en-AU translations

### Changed
* Updated unmount implementation to cancel any pending animation frames

2.2.0 - (February 5, 2019)
----------
### Added
* Added attribute containing id on section headers

2.1.0 - (January 22, 2019)
----------
### Change
* Dependency updates

2.0.0 - (January 17, 2019)
----------
### Breaking Change
* Updated variable names to match new naming standard
* Added new variables for css theming

### Added
* Changelog dev site doc page

1.2.0 - (January 2, 2019)
-----------------
### Fixed
* Fixed paging logic when rows are being removed from the DataGrid

1.1.0 - (November 21, 2018)
-----------------
### Changed
* Updated row striping logic to be more consistent on a per-section basis
* Removed unnecessary logic when `fill` prop is not provided
* Added checkmark icons to row selection column

1.0.0 - (October 16, 2018)
-----------------
Initial stable release
