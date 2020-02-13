# Terra Clinical Onset Picker Upgrade Guide

## Changes from 3.0 to 4.0

### Breaking Change
* Condensed onChange function props into a single prop (`onsetOnChange`) that returns an Object for the onsetDate.

## New Feature

* Added support for age units.

### Removed Props

* Removed prop `granularitySelectOnChange`
* Removed prop `precisionSelectOnChange`
* Removed prop `onsetDateInputOnChange`


### New Props
* New prop `ageUnit`
* New prop `onsetOnChange`

## Changes from 2.0 to 3.0

### Breaking Changes

* New required prop `id`
* Removed exported enums `OnsetPicker.Opts.Granularities` and `OnsetPicker.Opts.Precisions`
* Removed default prop values for `granularity` and `precision`
* `onChange` functions can now return blank values
* Visual updates from switching to `terra-form-field`, `terra-form-fieldset`, `terra-form-input`, and `terra-form-select`

### New Features

* CSS themeable variables

### Removed props

* Removed prop `granularitySelectName`
* Removed prop `precisionSelectName`
* Removed prop `precisionSelectName`

### CSS Variables

* --terra-clinical-onset-picker-field-margin-right
* --terra-clinical-onset-picker-field-margin-bottom
* --terra-clinical-onset-picker-precision-select-min-width
* --terra-clinical-onset-picker-granularity-select-min-width
* --terra-clinical-onset-picker-month-select-min-width
* --terra-clinical-onset-picker-age-granularity-select-min-width
* --terra-clinical-onset-picker-age-input-width