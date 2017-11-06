ChangeLog
=========

Unreleased
----------
* See Release Notes for Migration Guide

### Added
* onSelect, children, and requiredElements props
* Item Component to use as for Item Collection children

### Removed
* rows and onChange props

### Changed
* Item Collection layout is no longer rendered via the first row, but the requiredElements object
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
