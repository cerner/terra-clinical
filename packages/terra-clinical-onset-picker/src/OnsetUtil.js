import moment from 'moment';

class OnsetUtil {

  /*
   * Create object to pass to SelectField for month options
   * Filters out months before birth or after the current date.
   */
  static availableMonths(intl, birthdate, onsetDate) {
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
  static availableYears(birthdate) {
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
  static maxAgeCount(birthdate, ageUnit) {
    switch (ageUnit) {
      case 'years':
        return moment().diff(moment(birthdate), 'years');
      case 'months': {
        const monthDiff = moment().diff(moment(birthdate), 'months');
        return monthDiff > 24 ? 24 : monthDiff;
      }
      default: {
        const weekDiff = moment().diff(moment(birthdate), 'weeks');
        return weekDiff > 8 ? 8 : weekDiff;
      }
    }
  }

  /*
   * Create object to pass to SelectField for age duration options.
   * Does not add durations that are not possible based on birth.
   */
  static allowedAgeDurations(birthdate) {
    const ageMoment = moment(birthdate);

    if (moment().diff(ageMoment, 'weeks') === 0) {
      return null;
    }

    const ageDurations = [{ value: 'weeks', display: 'Week(s)' }];

    // Do not add month option if less than a month old
    if (moment().diff(ageMoment, 'months') > 0) {
      ageDurations.push({ value: 'months', display: 'Month(s)' });
    }

    // Do not add year option if less than a month old
    if (moment().diff(ageMoment, 'years') > 0) {
      ageDurations.push({ value: 'years', display: 'Year(s)' });
    }

    return ageDurations;
  }

  /**
   * Returns a translated set of precisions to be used in the precision SelectField.
   */
  static allowedPrecisions(intl, precisionSet) {
    const precisions = [];

    for (let i = 0; i < precisionSet.length; i += 1) {
      switch (precisionSet[i]) {
        case 'ON/AT':
          precisions.push({ value: 'ON/AT', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionOnAt' }) });
          break;
        case 'ABOUT':
          precisions.push({ value: 'ABOUT', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAbout' }) });
          break;
        case 'BEFORE':
          precisions.push({ value: 'BEFORE', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionBefore' }) });
          break;
        case 'AFTER':
          precisions.push({ value: 'AFTER', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAfter' }) });
          break;
        case 'UNKNOWN':
          precisions.push({ value: 'UNKNOWN', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionUnknown' }) });
          break;
        default:
          break;
      }
    }
    return precisions;
  }
}

export default OnsetUtil;
