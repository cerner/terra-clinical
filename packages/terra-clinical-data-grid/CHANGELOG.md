Changelog
=========

Unreleased
----------
### Added
* Added enumeration for valid column sort indicator values

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
