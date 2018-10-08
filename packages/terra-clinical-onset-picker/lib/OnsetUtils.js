'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maxWeeks = 8;
var maxMonths = 24;
var PrecisionOptions = {
  ONAT: 'on/at',
  ABOUT: 'about',
  BEFORE: 'before',
  AFTER: 'after',
  UNKNOWN: 'unknown'
};

var OnsetUtils = function () {
  function OnsetUtils() {
    _classCallCheck(this, OnsetUtils);
  }

  _createClass(OnsetUtils, null, [{
    key: 'allowedMonths',

    /*
     * Create object to pass to SelectField for month options
     * Filters out months before birth or after the current date.
     */
    value: function allowedMonths(intl, birthdate, onsetDate) {
      var start = (0, _moment2.default)(birthdate);
      var end = (0, _moment2.default)();
      var onsetYear = onsetDate.year();
      var possibleMonths = [{ value: '0', display: intl.formatMessage({ id: 'Terra.onsetPicker.january' }) }, { value: '1', display: intl.formatMessage({ id: 'Terra.onsetPicker.february' }) }, { value: '2', display: intl.formatMessage({ id: 'Terra.onsetPicker.march' }) }, { value: '3', display: intl.formatMessage({ id: 'Terra.onsetPicker.april' }) }, { value: '4', display: intl.formatMessage({ id: 'Terra.onsetPicker.may' }) }, { value: '5', display: intl.formatMessage({ id: 'Terra.onsetPicker.june' }) }, { value: '6', display: intl.formatMessage({ id: 'Terra.onsetPicker.july' }) }, { value: '7', display: intl.formatMessage({ id: 'Terra.onsetPicker.august' }) }, { value: '8', display: intl.formatMessage({ id: 'Terra.onsetPicker.september' }) }, { value: '9', display: intl.formatMessage({ id: 'Terra.onsetPicker.october' }) }, { value: '10', display: intl.formatMessage({ id: 'Terra.onsetPicker.november' }) }, { value: '11', display: intl.formatMessage({ id: 'Terra.onsetPicker.december' }) }];

      // If populating months for the start or end year, exclude months before the starting date or after the ending date
      if (start.year() === onsetYear) {
        possibleMonths = possibleMonths.filter(function (month) {
          return month.value >= start.month();
        });
      }

      if (end.year() === onsetYear) {
        possibleMonths = possibleMonths.filter(function (month) {
          return month.value <= end.month();
        });
      }

      return possibleMonths;
    }

    /*
     * Create object to pass to SelectField for year options.
     * Populates birth year to current year.
     */

  }, {
    key: 'allowedYears',
    value: function allowedYears(birthdate) {
      var start = (0, _moment2.default)(birthdate).year();
      var end = (0, _moment2.default)().year();

      return Array(end - start + 1).fill(undefined).map(function (x, idx) {
        var year = start + idx;
        return { value: year.toString(), display: year.toString() };
      });
    }

    /**
     * Calulcates maximum number allowed for each age duration.
     * Will use the lesser of power of two or the difference between birth for week/month.
     * Power of two for maximum weeks/months (8 weeks = 2 months, 24 months = 2 years)
     */

  }, {
    key: 'allowedAge',
    value: function allowedAge(birthdate, ageUnit) {
      var birthMoment = (0, _moment2.default)(birthdate).startOf('day'); // startOf to clear time from values
      var currentMoment = (0, _moment2.default)().startOf('day');

      switch (ageUnit) {
        case 'years':
          return currentMoment.diff(birthMoment, 'years');
        case 'months':
          {
            var monthDiff = currentMoment.diff(birthMoment, 'months');
            return monthDiff > maxMonths ? maxMonths : monthDiff;
          }
        default:
          {
            var weekDiff = currentMoment.diff(birthMoment, 'weeks');
            return weekDiff > maxWeeks ? maxWeeks : weekDiff;
          }
      }
    }

    /*
     * Create object to pass to SelectField for age unit options.
     * Does not add durations that are not possible based on birth.
     */

  }, {
    key: 'allowedAgeUnits',
    value: function allowedAgeUnits(birthdate, intl) {
      var ageMoment = (0, _moment2.default)(birthdate).startOf('day'); // startOf to clear time from values
      var currentMoment = (0, _moment2.default)().startOf('day');

      if (currentMoment.diff(ageMoment, 'weeks') === 0) {
        return null;
      }

      var ageUnits = [{ value: 'weeks', display: intl.formatMessage({ id: 'Terra.onsetPicker.agePrecisionWeek' }) }];

      // Do not add month option if less than a month old
      if (currentMoment.diff(ageMoment, 'months') > 0) {
        ageUnits.push({ value: 'months', display: intl.formatMessage({ id: 'Terra.onsetPicker.agePrecisionMonth' }) });
      }

      // Do not add year option if less than a year old
      if (currentMoment.diff(ageMoment, 'years') > 0) {
        ageUnits.push({ value: 'years', display: intl.formatMessage({ id: 'Terra.onsetPicker.agePrecisionYear' }) });
      }

      return ageUnits;
    }

    /**
     * Converts onset date to a age value with loweset possible age unit (weeks, then months, then years).
     */

  }, {
    key: 'onsetToAge',
    value: function onsetToAge(birthdate, onsetDate) {
      var birthMoment = (0, _moment2.default)(birthdate).startOf('day'); // startOf to clear time from values
      var onsetMoment = onsetDate.startOf('day');
      var ageDiff = onsetMoment.diff(birthMoment, 'weeks');

      if (ageDiff > maxWeeks) {
        ageDiff = onsetMoment.diff(birthMoment, 'months');

        if (ageDiff > maxMonths) {
          return { age: onsetMoment.diff(birthMoment, 'years'), ageUnit: 'years' };
        }

        return { age: ageDiff, ageUnit: 'months' };
      }

      return { age: ageDiff, ageUnit: 'weeks' };
    }

    /**
     * Returns a translated set of precisions to be used in the precision SelectField.
     */

  }, {
    key: 'allowedPrecisions',
    value: function allowedPrecisions(intl, precisionSet) {
      var precisions = [];

      for (var i = 0; i < precisionSet.length; i += 1) {
        switch (precisionSet[i]) {
          case PrecisionOptions.ONAT:
            precisions.push({ value: PrecisionOptions.ONAT, display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionOnAt' }) });
            break;
          case PrecisionOptions.ABOUT:
            precisions.push({ value: PrecisionOptions.ABOUT, display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAbout' }) });
            break;
          case PrecisionOptions.BEFORE:
            precisions.push({ value: PrecisionOptions.BEFORE, display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionBefore' }) });
            break;
          case PrecisionOptions.AFTER:
            precisions.push({ value: PrecisionOptions.AFTER, display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAfter' }) });
            break;
          case PrecisionOptions.UNKNOWN:
            precisions.push({ value: PrecisionOptions.UNKNOWN, display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionUnknown' }) });
            break;
          default:
            break;
        }
      }
      return precisions;
    }
  }]);

  return OnsetUtils;
}();

OnsetUtils.PrecisionOptions = PrecisionOptions;

exports.default = OnsetUtils;