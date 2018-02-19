ChangeLog
=========

Unreleased
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
