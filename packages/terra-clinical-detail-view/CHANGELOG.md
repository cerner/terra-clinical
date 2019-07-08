ChangeLog
=========

Unreleased
----------
### Changed 
* Replaced inline stylings for terra-dev-site components with .scss files

### Changed
* Update wdio specs to use Terra.describeViewports

### Fixed
* Added max-width to DetailListItem resolving IE10 wrapping issue for label-value-views inside of detail-view-list.

3.5.0 - (June 11, 2019)
----------
### Removed
* Removed node_modules from .npmignore

3.4.0 - (March 26, 2019)
----------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.3.0 - (February 26, 2019)
----------
### Changed
* Minor dependency updates

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
* Renamed theming variables to match new lint standards

### Added
* Changelog dev site doc page

2.17.0 - (November 21, 2018)
----------
### Changed
* Minor dependency updates

2.16.0 - (October 8, 2018)
----------
### Changed
* Minor dependency updates

2.15.0 - (October 2, 2018)
----------
### Changed
* Formatting changes per eslint v5 update

2.14.0 - (September 5, 2018)
----------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.13.0 - (August 30, 2018)
----------
### Changed
* Minor dependency updates

2.12.0 - (August 1, 2018)
----------
### Changed
* Minor updates

2.11.1 - (July 25, 2018)
----------
### Changed
* Patch release

2.11.0 - (July 25, 2018)
----------
### Changed
* Minor updates

2.10.0 - (July 17, 2018)
----------
### Changed
* Minor updates

2.9.0 - (July 3, 2018)
----------
### Changed
* Minor updates

2.8.0 - (June 28, 2018)
----------
### Added
* Added word-wrap property to DetailView titles and subtitles
* Added test page for overflow text

### Fixed
* Lint in doc page

2.7.0 - (June 19, 2018)
----------
### Changed
* Minor updates

2.6.0 - (June 12, 2018)
----------
### Changed
* Conform to eslint updates
* Added theming variables in Detail View

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
### Added
* Added new props "secondaryTitles", "accessory", and "isSmallerTitles"

### Changed
* Updated spacing & text sizes
* Updated empty/none default prop values to undefined

2.2.0 - (March 27, 2018)
----------
### Changed
* Updated text sizes & colors

2.1.0 - (March 6, 2018)
----------
### Changed
* Minor dependency updates

2.0.0 - (February 19, 2018)
----------
### Changed
* Update to React 16

1.5.0 - (February 19, 2018)
----------
### Changed
* Minor dependency updates

1.4.0 - (September 26, 2017)
-----------------
### Changed
* Remove stylelint-disable selector-class-pattern

1.3.0 - (September 1, 2017)
-----------------
### Changed
* Change dependency on terra-base to v2.0.0
* Update nightwatch tests and test scripts.

1.2.0 - (August 16, 2017)
-----------------
### Changed
* Change data-class to be name spaced

### Fixes
* Fixed divider rendering for when graphic is not present which caused double dividers
* Fixed styling that applied padding-bottom on all children

1.1.1 - (July 27, 2017)
-----------------
* Updated spacing around react-docgen comments

1.1.0 - (July 18, 2017)
-----------------
### Changed
* Converted component to use CSS modules
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
-----------------
Initial stable release
