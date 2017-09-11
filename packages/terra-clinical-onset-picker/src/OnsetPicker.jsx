import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import NumberField from 'terra-form/lib/NumberField';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import SelectField from 'terra-form/lib/SelectField';


const propTypes = {
  /**
   * The ISO 8601 string representation of the birth date to calculate an onset date for the AGE precision.
   * Also limits the earliest possible date that can be selected for an onset date for YEAR, MONTH, and DATE precision.
   */
  birthdate: PropTypes.string.isRequired,

  /**
   * The granularity of the onset date. AGE, YEAR, MONTH, and DATE are accepted.
   */
  granularity: PropTypes.oneOf(['AGE', 'YEAR', 'MONTH', 'DATE']),

  /**
   * Name of the granularity select. The name should be unique.
   */
  granularitySelectName: PropTypes.string.isRequired,

  /**
   * A callback function to execute when a granularity is selected.
   * The first parameter is the event. The second parameter is the changed granularity value.
   */
  granularitySelectOnChange: PropTypes.func,

  /**
   * The precision of the onset date. ABOUT, BEFORE, AFTER, and UNKNOWN are accepted.
   */
  precision: PropTypes.oneOf(['ABOUT', 'BEFORE', 'AFTER', 'UNKNOWN']),

  /**
   * Name of the precision select. The name should be unique.
   */
  precisionSelectName: PropTypes.string.isRequired,

  /**
   * A callback function to execute when a precision is selected.
   * The first parameter is the event. The second parameter is the changed precision value.
   */
  precisionSelectOnChange: PropTypes.func,

  /**
   * The ISO 8601 string representation of the onset date to view/modify. Defaults to current date.
   */
  onsetDate: PropTypes.string,

  /**
   * Name of the onsetDate input. The name should be unique.
   */
  onsetDateInputName: PropTypes.string.isRequired,

  /**
   * A callback function to execute when a onsetDate is changed.
   * The first parameter is the event. The second parameter is the changed onsetDate value.
   */
  onsetDateInputOnChange: PropTypes.func,
};

const defaultProps = {
  birthdate: undefined,
  granularity: 'MONTH',
  granularitySelectName: undefined,
  granularitySelectOnChange: undefined,
  precision: 'ABOUT',
  precisionSelectName: undefined,
  precisionSelectOnChange: undefined,
  onsetDate: moment().format('YYYY-MM-DD'),
  onsetDateInputName: undefined,
  onsetDateInputOnChange: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
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
    this.changeGranularity = this.changeGranularity.bind(this);
    this.changePrecision = this.changePrecision.bind(this);
    this.changeAgeCalcCount = this.changeAgeCalcCount.bind(this);
    this.changeAgeCalcDuration = this.changeAgeCalcDuration.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.availableMonths = this.availableMonths.bind(this);
    this.availableYears = this.availableYears.bind(this);
    this.maxAgeCount = this.maxAgeCount.bind(this);
    this.allowedAgeDurations = this.allowedAgeDurations.bind(this);
  }

  /*
   * Change state for granularity
   */
  changeGranularity(event) {
    this.setState({ granularity: event.target.value });

    if (this.props.granularitySelectOnChange) {
      this.props.granularitySelectOnChange(event, event.target.value);
    }
  }

  /*
   * Change state for precision
   */
  changePrecision(event) {
    this.setState({ precision: event.target.value });

    if (this.props.precisionSelectOnChange) {
      this.props.precisionSelectOnChange(event, event.target.value);
    }
  }

  /*
   * Change state for count when using age granularity, and update onset date
   */
  changeAgeCalcCount(event) {
    const newDate = moment(this.props.birthdate).add(Number(event.target.value), this.state.ageCalcDuration).format('YYYY-MM-DD');

    this.setState({
      ageCalcCount: Number(event.target.value),
      onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Change state for duration when using age granularity, and update onset date
   */
  changeAgeCalcDuration(event) {
    const newDate = moment(this.props.birthdate).add(1, event.target.value).format('YYYY-MM-DD');

    this.setState({
      ageCalcCount: 1,
      ageCalcDuration: event.target.value,
      onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Update onset date when year changes
   */
  changeYear(event) {
    const newDate = moment(this.state.onsetDate).year(event.target.value).format('YYYY-MM-DD');

    this.setState({ onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Update onset date when month changes
   */
  changeMonth(event) {
    const newDate = moment(this.state.onsetDate).month(event.target.value).format('YYYY-MM-DD');

    this.setState({ onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Update onset date when date changes
   */
  changeDate(event, date) {
    const newDate = moment(date).format('YYYY-MM-DD');

    this.setState({ onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Create object to pass to SelectField for month options
   * Filters out months before birth or after the current date.
   *
   * intl - locale context to use for translations
   */
  availableMonths(intl) {
    const start = moment(this.props.birthdate);
    const end = moment();
    const onsetYear = moment(this.state.onsetDate).year();
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
  availableYears() {
    const start = moment(this.props.birthdate).year();
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

  render() {
    const {
      birthdate,
      granularity,
      granularitySelectName,
      granularitySelectOnChange,
      precision,
      precisionSelectName,
      precisionSelectOnChange,
      onsetDate,
      onsetDateInputName,
      onsetDateInputOnChange,
      ...customProps
    } = this.props;

    const intl = this.context.intl;

    let granularitySelect = null;
    if (this.state.precision !== 'UNKNOWN') {
      granularitySelect = (<SelectField
        options={[{ value: 'AGE', display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityAge' }) },
                  { value: 'YEAR', display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityYear' }) },
                  { value: 'MONTH', display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityMonth' }) },
                  { value: 'DATE', display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityDate' }) }]}
        name={this.props.granularitySelectName}
        defaultValue={this.state.granularity}
        onChange={this.changeGranularity}
        isInline
      />);
    }

    let ageCalcCountSelect = null;
    let ageCalcDurationSelect = null;
    if (this.state.granularity === 'AGE' && this.state.precision !== 'UNKNOWN') {
      ageCalcCountSelect = (<NumberField
        className="terra-OnsetPicker-ageCalcCount"
        min={1}
        max={this.maxAgeCount()}
        step={1}
        value={this.state.ageCalcCount.toString()}
        onChange={this.changeAgeCalcCount}
        isInline
      />);

      ageCalcDurationSelect = (<SelectField
        className="terra-OnsetPicker-ageCalcDuration"
        options={this.allowedAgeDurations()}
        defaultValue={this.state.ageCalcDuration.toString()}
        onChange={this.changeAgeCalcDuration}
        isInline
      />);
    }

    let monthSelect = null;
    if (this.state.granularity === 'MONTH' && this.state.precision !== 'UNKNOWN') {
      monthSelect = (<SelectField
        className="terra-OnsetPicker-month"
        options={this.availableMonths(intl)}
        defaultValue={moment(this.state.onsetDate).month().toString()}
        onChange={this.changeMonth}
        isInline
      />);
    }

    let yearSelect = null;
    if ((this.state.granularity === 'YEAR' || this.state.granularity === 'MONTH') && this.state.precision !== 'UNKNOWN') {
      yearSelect = (<SelectField
        className="terra-OnsetPicker-year"
        options={this.availableYears()}
        defaultValue={moment(this.state.onsetDate).year().toString()}
        onChange={this.changeYear}
        isInline
      />);
    }

    let dateSelect = null;
    if (this.state.granularity === 'DATE' && this.state.precision !== 'UNKNOWN') {
      dateSelect = (<Field>
        <DatePicker
          onChange={this.changeDate}
          minDate={this.props.birthdate}
          maxDate={moment().format('YYYY-MM-DD')}
          selectedDate={moment(this.state.onsetDate).format('YYYY-MM-DD')}
          name={this.props.onsetDateInputName}
        />
      </Field>);
    }

    return (
      (<div className="terra-OnsetPicker" {...customProps}>

        <Fieldset>
          {/* Precision */}
          <SelectField
            options={[{ value: 'ABOUT', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAbout' }) },
                      { value: 'BEFORE', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionBefore' }) },
                      { value: 'AFTER', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionAfter' }) },
                      { value: 'UNKNOWN', display: intl.formatMessage({ id: 'Terra.onsetPicker.precisionUnknown' }) }]}
            name={this.props.precisionSelectName}
            defaultValue={this.state.precision}
            onChange={this.changePrecision}
            isInline
          />

          {granularitySelect}
        </Fieldset>

        <Fieldset>
          {ageCalcCountSelect}
          {ageCalcDurationSelect}
          {monthSelect}
          {yearSelect}
          {dateSelect}
        </Fieldset>
      </div>)
    );
  }
}

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;
OnsetPicker.contextTypes = contextTypes;

export default OnsetPicker;
