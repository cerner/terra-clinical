ChangeLog
=========
Unreleased
----------

3.23.0 - (January 22, 2019)
----------
### Changed
* Updated dependencies to fix major version bump issues

3.22.0 - (January 22, 2019)
----------
### Changed
* Updated dependencies to fix major version bump issues

3.21.0 - (January 17, 2019)
----------
### Changed
* Removed local wdio timeout from clinical-item-collection test

### Added
* Changelog dev site doc page

3.20.0 - (January 2, 2019)
-----------------
### Changed
* Updated readme to have logically nested headers.

3.19.0 - (November 21, 2018)
----------
### Changed
* Minor dependency updates

3.18.0 - (October 16, 2018)
-----------------
### Changed
* Updated prop descriptions in ItemCollections.jsx and Item.jsx.

3.17.0 - (October 2, 2018)
----------
### Changed
* Formatting changes per eslint v5 update

3.16.0 - (September 5, 2018)
----------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

3.15.0 - (August 30, 2018)
----------
### Changed
* Minor dependency updates

3.14.0 - (August 8, 2018)
----------
### Fixed
* Fixed list collections not being assigned the `listbox` role when they have a selectable child

3.13.0 - (August 1, 2018)
----------
### Changed
* Minor updates

3.12.0 - (July 26, 2018)
----------
### Changed
* Re-enabled ability to set custom props on Item Collection component
* Updated to use terra-responsive-element v3

3.11.1 - (July 25, 2018)
----------
### Changed
* Patch release

3.11.0 - (July 25, 2018)
----------
### Changed
* Minor updates

3.10.0 - (July 17, 2018)
----------
### Changed
* Minor updates

3.9.0 - (July 3, 2018)
----------
### Fixed
* Lint in doc page

3.8.0 - (June 28, 2018)
----------
### Changed
* Minor dependency updates

3.7.0 - (June 12, 2018)
----------
### Changed
* Conform to eslint updates

3.6.0 - (May 30, 2018)
----------
### Changed
* Moved examples to src

3.5.0 - (May 22, 2018)
----------
### Changed
* Minor dependency updates

3.4.0 - (May 1, 2018)
----------
### Changed
* Minor dependency updates

3.3.0 - (April 20, 2018)
----------
### Changed
* Minor dependency updates

3.2.0 - (March 27, 2018)
----------
### Changed
* Converted nightwatch tests to wdio

3.1.0 - (March 6, 2018)
----------
### Changed
* Minor dependency updates

3.0.0 - (February 19, 2018)
----------
### Changed
* Update to React 16

2.4.0 - (February 19, 2018)
----------
### Changed
* Minor dependency updates

2.3.0 - (January 23, 2018)
-----------------
### Changed
* Minor dependency updates

2.2.0 - (December 9, 2017)
----------
### Added
* showListItemChevron prop on the ItemCollection.Item component to allow list items to display a chevron.

### Changed
* Remove type check to pass all Item Collection generated properties that are passed to the Item Collection children

2.1.0 - (December 5, 2017)
-----------------
### Changed
* Pass down the Item Collection's view to allow for custom Item Collection components to know when to render as a list item or a table row.

2.0.0 - (November 29, 2017)
-----------------
* See [Release Notes](https://github.com/cerner/terra-clinical/releases/tag/terra-clinical-item-collection%402.0.0) for Migration Guide

### Added
* children prop and Item Component to be used as the children. The children prop replaces the rows prop.
* onSelect prop to enable the rending of a selectable item collection children
* hasStartAccessory, numberOfDisplays, hasComment, and hasEndAccessory props to construct the item collection layout.
* isListDivided prop, which replace the listStyles prop
* isTablePadded and isTableStriped props to replace the tableStyles prop.

### Removed
* rows, onChange, listStyles and tableStyles props

### Changed
* Item Collection layout is no longer rendered via the first row, but the hasStartAccessory, numberOfDisplays, hasComment, and hasEndAccessory props.
* Item Collection now initially renders as static. Additional props must be included for selectable Item Collections. See Selectable Readme for more information.

1.4.0 - (September 26, 2017)
-----------------
### Changed
* Fixed visual differences between list and table view
* Updated nightwatch tests to use expect syntax
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

1.1.1 - (July 27, 2017)
-----------------
* Updated spacing around react-docgen comments

1.1.0 - (July 18, 2017)
-----------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file
* Converted component to use CSS modules

1.0.0 - (June 28, 2017)
-----------------
Initial stable release
