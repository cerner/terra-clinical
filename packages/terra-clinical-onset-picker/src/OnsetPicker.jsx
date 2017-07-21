import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import { injectIntl } from 'react-intl';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import NumberField from 'terra-form/lib/NumberField';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import SelectField from '/Users/dw034710/Repos/terra-core/packages/terra-form/src/SelectField';


const propTypes = {
  /**
   * The ISO 8601 string representation of the age date to calculate a onset date from.
   */
  birthdate: PropTypes.string.isRequired,

  /**
   * The granularity of the onset date. ABOUT, BEFORE, AFTER, and UNKOWN are accepted.
   */
  granularity: PropTypes.string,

  /**
   * The precision of the onset date. YEAR, MONTHYEAR, and DATE are accepted.
   */
  precision: PropTypes.string,

  /**
   * The ISO 8601 string representation of the onset date to view/modify.
   */
  onsetDate: PropTypes.string,

  /**
   * The i18n context passed down by the base component
   */
  intl: PropTypes.object.isRequired,
};

const defaultProps = {
  birthdate: undefined,
  granularity: 'MONTHYEAR',
  precision: 'ABOUT',
  onsetDate: moment().format('YYYY-MM-DD'),
  intl: undefined,
};

class OnsetPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      granularity: this.props.granularity,
      precision: this.props.precision,
      onsetDate: this.props.onsetDate,
      ageCalcCount: 1,
      ageCalcDuration: 'weeks',
    };

    // This binding is necessary to make `this` work in the callback
    this.changePrecision = this.changePrecision.bind(this);
    this.changeGranularity = this.changeGranularity.bind(this);
    this.changeAgeCalcCount = this.changeAgeCalcCount.bind(this);
    this.changeAgeCalcDuration = this.changeAgeCalcDuration.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.availableMonths = this.availableMonths.bind(this);
    this.availableYears = this.availableYears.bind(this);
    this.maxAgeCount = this.maxAgeCount.bind(this);
    this.allowedAgeDurations = this.allowedAgeDurations.bind(this);
    this.outputDate = this.outputDate.bind(this);
  }

  /*
   * Change state for precision
   */
  changePrecision(event) {
    this.setState({ precision: event.target.value });
  }

  /*
   * Change state for granularity
   */
  changeGranularity(event) {
    this.setState({ granularity: event.target.value });
  }

  /*
   * Change state for count when using age granularity, and update onset date
   */
  changeAgeCalcCount(event) {
    this.setState({
      ageCalcCount: Number(event.target.value),
      onsetDate: moment(this.props.birthdate).add(Number(event.target.value), this.state.ageCalcDuration).format('YYYY-MM-DD') });
  }

  /*
   * Change state for duration when using age granularity, and update onset date
   */
  changeAgeCalcDuration(event) {
    this.setState({
      ageCalcCount: 1,
      ageCalcDuration: event.target.value,
      onsetDate: moment(this.props.birthdate).add(1, event.target.value).format('YYYY-MM-DD') });
  }

  /*
   * Update onset date when year changes
   */
  changeYear(event) {
    this.setState({ onsetDate: moment(this.state.onsetDate).year(event.target.value).format('YYYY-MM-DD') });
  }

  /*
   * Update onset date when month changes
   */
  changeMonth(event) {
    this.setState({ onsetDate: moment(this.state.onsetDate).month(event.target.value).format('YYYY-MM-DD') });
  }

  /*
   * Update onset date when date changes
   */
  changeDate(event, date) {
    this.setState({ onsetDate: moment(date).format('YYYY-MM-DD') });
  }

  /*
   * Create object to pass to SelectField for month options
   * Filters out months before birth or after the current date.
   */
  availableMonths() {
    const start = moment(this.props.birthdate);
    const end = moment();
    const onsetYear = moment(this.state.onsetDate).year();
    let possibleMonths = [{ value: 0, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.january' }) },
                          { value: 1, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.february' }) },
                          { value: 2, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.march' }) },
                          { value: 3, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.april' }) },
                          { value: 4, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.may' }) },
                          { value: 5, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.june' }) },
                          { value: 6, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.july' }) },
                          { value: 7, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.august' }) },
                          { value: 8, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.september' }) },
                          { value: 9, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.october' }) },
                          { value: 10, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.november' }) },
                          { value: 11, display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.december' }) }];

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
  availableYears() {
    const start = moment(this.props.birthdate).year();
    const end = moment().year();

    return Array((end - start) + 1).fill(undefined).map(
      (x, idx) => {
        const year = start + idx;
        return { value: year, display: year };
      },
    );
  }

  /**
   * Calulcates maximum number allowed for each age duration.
   * Will use the lesser of power of two or the difference between birth for week/month.
   * Power of two for maximum weeks/months (8 weeks = 2 months, 24 months = 2 years)
   */
  maxAgeCount() {
    switch (this.state.ageCalcDuration) {
      case 'years':
        return moment().diff(moment(this.props.birthdate), 'years');
      case 'months': {
        const monthDiff = moment().diff(moment(this.props.birthdate), 'months');
        return monthDiff > 24 ? 24 : monthDiff;
      }
      default: {
        const weekDiff = moment().diff(moment(this.props.birthdate), 'weeks');
        return weekDiff > 8 ? 8 : weekDiff;
      }
    }
  }

  /*
   * Create object to pass to SelectField for age duration options.
   * Does not add durations that are not possible based on birth.
   */
  allowedAgeDurations() {
    const ageMoment = moment(this.props.birthdate);

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

  outputDate() {
    if (this.state.precision === 'UNKNOWN') {
      return this.state.precision;
    }

    switch (this.state.granularity) {
      case 'MONTHYEAR':
        return `${this.state.precision}  ${moment(this.state.onsetDate).format('MMM YYYY')}`;
      case 'YEAR':
        return `${this.state.precision} ${moment(this.state.onsetDate).format('YYYY')}`;
      case 'AGE':
        if (this.state.ageCalcDuration === 'years') {
          return `${this.state.precision} ${moment(this.state.onsetDate).format('YYYY')}`;
        } else if (this.state.ageCalcDuration === 'months') {
          return `${this.state.precision}  ${moment(this.state.onsetDate).format('MMM YYYY')}`;
        }
        return `${this.state.precision} ${moment(this.state.onsetDate).format('ll')}`;
      default:
        return `${this.state.precision} ${moment(this.state.onsetDate).format('ll')}`;
    }
  }

  render() {
    return (
      (<Fieldset className="terra-onset">

        {/* Precision */}
        <SelectField
          choices={[{ value: 'ABOUT', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.precisionAbout' }) },
                    { value: 'BEFORE', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.precisionBefore' }) },
                    { value: 'AFTER', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.precisionAfter' }) },
                    { value: 'UNKNOWN', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.precisionUnknown' }) }]}
          name="precision"
          defaultValue={this.state.precision}
          onChange={this.changePrecision}
          isInline
        />

        {/* Granularity */}
        { this.state.precision !== 'UNKNOWN' &&
          <SelectField
            choices={[{ value: 'MONTHYEAR', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.granularityMonthYear' }) },
                      { value: 'YEAR', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.granularityYear' }) },
                      { value: 'AGE', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.granularityAge' }) },
                      { value: 'DATE', display: this.props.intl.formatMessage({ id: 'Terra.onsetPicker.granularityDate' }) }]}
            name="granularity"
            defaultValue={this.state.granularity}
            onChange={this.changeGranularity}
            isInline
          />
        }

        {/* Age Calculation */}
        {this.state.granularity === 'AGE' && this.state.precision !== 'UNKNOWN' &&
          <Fieldset>
            {/* Count */}
            <NumberField
              min={1}
              max={this.maxAgeCount()}
              step={1}
              name="ageCalcCount"
              value={this.state.ageCalcCount}
              onChange={this.changeAgeCalcCount}
              isInline
            />
            {/* Duration */}
            <SelectField
              choices={this.allowedAgeDurations()}
              name="ageCalcDuration"
              defaultValue={this.state.ageCalcDuration}
              onChange={this.changeAgeCalcDuration}
              isInline
            />
          </Fieldset>
        }

        {/* Month & Month/Year */}
        { (this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR') && this.state.precision !== 'UNKNOWN' &&
          <Fieldset>
            { this.state.granularity === 'MONTHYEAR' &&
              <SelectField
                choices={this.availableMonths()}
                defaultValue={moment(this.state.onsetDate).month()}
                onChange={this.changeMonth}
                name="month"
                isInline
              />
            }

            <SelectField
              choices={this.availableYears()}
              defaultValue={moment(this.state.onsetDate).year()}
              name="year"
              onChange={this.changeYear}
              isInline
            />
          </Fieldset>
        }

        {/* Date */}
        { this.state.granularity === 'DATE' && this.state.precision !== 'UNKNOWN' &&
          <Field>
            <DatePicker
              onChange={this.changeDate}
              minDate={this.props.birthdate}
              maxDate={moment().format()}
              selectedDate={moment(this.state.onsetDate).format()}
              name="date"
            />
          </Field>
        }

        {/* Output */}
        <p>Age: {this.props.birthdate}</p>
        <p>Onset Date: {this.outputDate()}</p>
      </Fieldset>)
    );
  }
}

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;

export default injectIntl(OnsetPicker);
