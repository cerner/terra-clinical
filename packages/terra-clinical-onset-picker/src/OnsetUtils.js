import moment from 'moment';

const maxWeeks = 8;
const maxMonths = 24;
const PrecisionOptions = {
  ONAT: 'on/at',
  ABOUT: 'about',
  BEFORE: 'before',
  AFTER: 'after',
  UNKNOWN: 'unknown',
};

class OnsetUtils {

  /*
   * Create object to pass to SelectField for month options
   * Filters out months before birth or after the current date.
   */
  static allowedMonths(intl, birthdate, onsetDate) {
    const start = moment(birthdate);
    const end = moment();
    const onsetYear = moment(onsetDate).year();
    let possibleMonths = [{ value: '0', display: intl.formatMessage({ id: 'Terra.onsetPicker.january' }) },
                          { value: '1', display: intl.formatMessage({ id: 'Terra.onsetPicker.february' }) },
                          { value: '2', display: intl.formatMessage({ id: 'Terra.onsetPicker.march' }) },
                          { value: '3', display: intl.formatMessage({ id: 'Terra.onsetPicker.april' }) },
                          { value: '4', display: intl.formatMessage({ id: 'Terra.onsetPicker.may' }) },
                          { value: '5', display: intl.formatMessage({ id: 'Terra.onsetPicker.june' }) },
                          { value: '6', display: intl.formatMessage({ id: 'Terra.onsetPicker.july' }) },
                          { value: '7', display: intl.formatMessage({ id: 'Terra.onsetPicker.august' }) },
                          { value: '8', display: intl.formatMessage({ id: 'Terra.onsetPicker.september' }) },
                          { value: '9', display: intl.formatMessage({ id: 'Terra.onsetPicker.october' }) },
                          { value: '10', display: intl.formatMessage({ id: 'Terra.onsetPicker.november' }) },
                          { value: '11', display: intl.formatMessage({ id: 'Terra.onsetPicker.december' }) }];

    // If populating months for the start or end year, exclude months before the starting date or after the ending date
    if (start.year() === onsetYear) {
      possibleMonths = possibleMonths.filter(month => month.value >= start.month());
    }

    if (end.year() === onsetYear) {
      possibleMonths = possibleMonths.filter(month => month.value <= end.month());
    }

    return possibleMonths;
  }

  /*
   * Create object to pass to SelectField for year options.
   * Populates birth year to current year.
   */
  static allowedYears(birthdate) {
    const start = moment(birthdate).year();
    const end = moment().year();

    return Array((end - start) + 1).fill(undefined).map(
      (x, idx) => {
        const year = start + idx;
        return { value: year.toString(), display: year.toString() };
      },
    );
  }

  /**
   * Calulcates maximum number allowed for each age duration.
   * Will use the lesser of power of two or the difference between birth for week/month.
   * Power of two for maximum weeks/months (8 weeks = 2 months, 24 months = 2 years)
   */
  static allowedAge(birthdate, ageUnit) {
    const birthMoment = moment(birthdate).startOf('day'); // startOf to clear time from values
    const currentMoment = moment().startOf('day');

    switch (ageUnit) {
      case 'years':
        return currentMoment.diff(birthMoment, 'years');
      case 'months': {
        const monthDiff = currentMoment.diff(birthMoment, 'months');
        return monthDiff > maxMonths ? maxMonths : monthDiff;
      }
      default: {
        const weekDiff = currentMoment.diff(birthMoment, 'weeks');
        return weekDiff > maxWeeks ? maxWeeks : weekDiff;
      }
    }
  }

  /*
   * Create object to pass to SelectField for age unit options.
   * Does not add durations that are not possible based on birth.
   */
  static allowedAgeUnits(birthdate) {
    const ageMoment = moment(birthdate).startOf('day'); // startOf to clear time from values
    const currentMoment = moment().startOf('day');

    if (currentMoment.diff(ageMoment, 'weeks') === 0) {
      return null;
    }

    const ageUnits = [{ value: 'weeks', display: 'Week(s)' }];

    // Do not add month option if less than a month old
    if (currentMoment.diff(ageMoment, 'months') > 0) {
      ageUnits.push({ value: 'months', display: 'Month(s)' });
    }

    // Do not add year option if less than a year old
    if (currentMoment.diff(ageMoment, 'years') > 0) {
      ageUnits.push({ value: 'years', display: 'Year(s)' });
    }

    return ageUnits;
  }

  /**
   * Converts onset date to a age value with loweset possible age unit (weeks, then months, then years).
   */
  static onsetToAge(birthdate, onsetDate) {
    const birthMoment = moment(birthdate).startOf('day'); // startOf to clear time from values
    const onsetMoment = moment(onsetDate).startOf('day');
    let ageDiff = onsetMoment.diff(birthMoment, 'weeks');

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
  static allowedPrecisions(intl, precisionSet) {
    const precisions = [];

    for (let i = 0; i < precisionSet.length; i += 1) {
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
}

OnsetUtils.PrecisionOptions = PrecisionOptions;

export default OnsetUtils;
