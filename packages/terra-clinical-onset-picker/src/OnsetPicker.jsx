import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import NumberField from 'terra-form/lib/NumberField';
import DatePicker from 'terra-date-picker';
import SelectField from 'terra-form/lib/SelectField';
import OnsetUtils from './OnsetUtils';

const GranularityOptions = {
  AGE: 'age',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
};

const propTypes = {
  /**
   * The ISO 8601 string representation of the birth date to calculate an onset date for the AGE precision.
   * Also limits the earliest possible date that can be selected for an onset date for YEAR, MONTH, and DATE precision.
   */
  birthdate: PropTypes.string.isRequired,

  /**
   * The granularity of the onset date. One of OnsetPicker.Opts.Granularities.AGE, OnsetPicker.Opts.Granularities.YEAR,
   * OnsetPicker.Opts.Granularities.MONTH, and OnsetPicker.Opts.Granularities.DATE are accepted.
   */
  granularity: PropTypes.oneOf([
    GranularityOptions.AGE,
    GranularityOptions.YEAR,
    GranularityOptions.MONTH,
    GranularityOptions.DATE,
  ]),

  /**
   * Name of the granularity select. The name should be unique.
   */
  granularitySelectName: PropTypes.string.isRequired,

  /**
   * A callback function to execute when a granularity is selected.
   * The first parameter is the changed granularity value.
   */
  granularitySelectOnChange: PropTypes.func,

  /**
   * The precision of the onset date. This should be one of precisions passed to the precisionSet prop.
   */
  precision: PropTypes.oneOf([
    OnsetUtils.PrecisionOptions.ONAT,
    OnsetUtils.PrecisionOptions.ABOUT,
    OnsetUtils.PrecisionOptions.BEFORE,
    OnsetUtils.PrecisionOptions.AFTER,
    OnsetUtils.PrecisionOptions.UNKNOWN,
  ]),

  /**
   * The set of precisions that can be used with the onset picker.
   * One of OnsetPicker.Opts.Precisions.ONAT, OnsetPicker.Opts.Precisions.ABOUT, OnsetPicker.Opts.Precisions.BEFORE,
   * OnsetPicker.Opts.Precisions.AFTER, OnsetPicker.Opts.Precisions.UNKNOWN.
   * Order of precisions determines order in precision select.
   */
  precisionSet: PropTypes.arrayOf(PropTypes.oneOf([
    OnsetUtils.PrecisionOptions.ONAT,
    OnsetUtils.PrecisionOptions.ABOUT,
    OnsetUtils.PrecisionOptions.BEFORE,
    OnsetUtils.PrecisionOptions.AFTER,
    OnsetUtils.PrecisionOptions.UNKNOWN,
  ])),

  /**
   * Name of the precision select. The name should be unique.
   */
  precisionSelectName: PropTypes.string.isRequired,

  /**
   * A callback function to execute when a precision is selected.
   * The first parameter is the changed precision value.
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
   * The first parameter is the changed onsetDate value.
   */
  onsetDateInputOnChange: PropTypes.func,
};

const defaultProps = {
  birthdate: undefined,
  granularity: 'month',
  granularitySelectName: undefined,
  granularitySelectOnChange: undefined,
  precision: 'on/at',
  precisionSet: [
    'on/at',
    'about',
    'before',
    'after',
    'unknown',
  ],
  precisionSelectName: undefined,
  precisionSelectOnChange: undefined,
  onsetDate: undefined,
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

    // This binding is necessary to make `this` work in the callback
    this.changeGranularity = this.changeGranularity.bind(this);
    this.changePrecision = this.changePrecision.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeAgeUnit = this.changeAgeUnit.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    const ageValues = OnsetUtils.onsetToAge(this.props.birthdate, this.props.onsetDate);

    this.state = {
      granularity: this.props.granularity,
      precision: this.props.precision,
      onsetDate: this.props.onsetDate ? this.props.onsetDate : moment(),
      age: ageValues.age,
      ageUnit: ageValues.ageUnit,
    };
  }

  /*
   * Change state for granularity
   */
  changeGranularity(event) {
    if (event.target.value === GranularityOptions.AGE) { // Calculate age values and update onsetDate to match age calculation
      const ageValues = OnsetUtils.onsetToAge(this.props.birthdate, this.state.onsetDate);
      const newDate = moment(this.props.birthdate).add(ageValues.age, ageValues.ageUnit);

      this.setState({
        age: ageValues.age,
        ageUnit: ageValues.ageUnit,
        onsetDate: newDate,
      });

      this.handleDateChange(newDate);
    }
    this.setState({ granularity: event.target.value });

    if (this.props.granularitySelectOnChange) {
      this.props.granularitySelectOnChange(event.target.value);
    }
  }

  /*
   * Change state for precision
   */
  changePrecision(event) {
    this.setState({ precision: event.target.value });

    if (this.props.precisionSelectOnChange) {
      this.props.precisionSelectOnChange(event.target.value);
    }
  }

  /*
   * Change state for the age when using AGE granularity, and update onset date
   */
  changeAge(event) {
    const newDate = moment(this.props.birthdate).add(Number(event.target.value), this.state.ageUnit);

    this.setState({
      age: Number(event.target.value),
      onsetDate: newDate,
    });
    this.handleDateChange(newDate);
  }

  /*
   * Change state for duration when using age granularity, and update onset date
   */
  changeAgeUnit(event) {
    const newDate = moment(this.props.birthdate).add(this.state.age, event.target.value);

    this.setState({
      ageUnit: event.target.value,
      onsetDate: newDate,
    });
    this.handleDateChange(newDate);
  }

  /*
   * Update onset date when year changes
   */
  changeYear(event) {
    let newDate = moment(this.state.onsetDate).year(event.target.value);
    const newMonths = OnsetUtils.allowedMonths(this.context.intl, this.props.birthdate, newDate);

    // Check if new onset month is available, otherwise change month to first possible month
    if (newMonths.filter(month => parseInt(month.value, 10) === newDate.month()).length === 0) {
      newDate = moment(newDate).month(newMonths[0].value);
    }

    this.setState({
      onsetDate: newDate,
    });
    this.handleDateChange(newDate);
  }

  /*
   * Update onset date when month changes
   */
  changeMonth(event) {
    const newDate = moment(this.state.onsetDate).month(event.target.value);

    this.setState({ onsetDate: newDate });
    this.handleDateChange(newDate);
  }

  /*
   * Update onset date when date changes
   */
  changeDate(event, date) {
    const newDate = moment(date);

    this.setState({ onsetDate: newDate });
    this.handleDateChange(newDate);
  }

  /**
   * Handle passing formatted onsetDate to callback function
   */
  handleDateChange(date) {
    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(date.format());
    }
  }

  render() {
    const {
      birthdate,
      granularity,
      granularitySelectName,
      granularitySelectOnChange,
      precision,
      precisionSet,
      precisionSelectName,
      precisionSelectOnChange,
      onsetDate,
      onsetDateInputName,
      onsetDateInputOnChange,
      ...customProps
    } = this.props;

    const intl = this.context.intl;

    let granularitySelect = null;
    if (this.state.precision !== OnsetUtils.PrecisionOptions.UNKNOWN) {
      granularitySelect = (<SelectField
        options={[{ value: GranularityOptions.AGE, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityAge' }) },
                  { value: GranularityOptions.YEAR, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityYear' }) },
                  { value: GranularityOptions.MONTH, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityMonth' }) },
                  { value: GranularityOptions.DATE, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityDate' }) }]}
        name={this.props.granularitySelectName}
        defaultValue={this.state.granularity}
        onChange={this.changeGranularity}
        isInline
      />);
    }

    let ageSelect = null;
    let ageUnitSelect = null;
    if (this.state.granularity === GranularityOptions.AGE) {
      ageSelect = (<NumberField
        data-terra-clinical-onset-picker="age"
        min={0}
        max={OnsetUtils.allowedAge(this.props.birthdate, this.state.ageUnit)}
        step={1}
        defaultValue={this.state.age}
        onChange={this.changeAge}
        isInline
      />);

      ageUnitSelect = (<SelectField
        data-terra-clinical-onset-picker="age_unit"
        options={OnsetUtils.allowedAgeUnits(this.props.birthdate)}
        defaultValue={this.state.ageUnit.toString()}
        onChange={this.changeAgeUnit}
        isInline
      />);
    }

    let monthSelect = null;
    if (this.state.granularity === GranularityOptions.MONTH) {
      monthSelect = (<SelectField
        data-terra-clinical-onset-picker="month"
        options={OnsetUtils.allowedMonths(intl, this.props.birthdate, this.state.onsetDate)}
        defaultValue={moment(this.state.onsetDate).month().toString()}
        onChange={this.changeMonth}
        isInline
      />);
    }

    let yearSelect = null;
    if (this.state.granularity === GranularityOptions.YEAR || this.state.granularity === GranularityOptions.MONTH) {
      yearSelect = (<SelectField
        data-terra-clinical-onset-picker="year"
        options={OnsetUtils.allowedYears(this.props.birthdate)}
        defaultValue={moment(this.state.onsetDate).year().toString()}
        onChange={this.changeYear}
        isInline
      />);
    }

    let dateSelect = null;
    if (this.state.granularity === GranularityOptions.DATE) {
      dateSelect = (<Field>
        <DatePicker
          onChange={this.changeDate}
          minDate={this.props.birthdate}
          maxDate={moment().format()}
          selectedDate={moment(this.state.onsetDate).format()}
          name={this.props.onsetDateInputName}
        />
      </Field>);
    }

    return (
      (<div data-terra-clinical-onset-picker {...customProps}>

        <Fieldset>
          {/* Precision */}
          <SelectField
            options={OnsetUtils.allowedPrecisions(intl, this.props.precisionSet)}
            name={this.props.precisionSelectName}
            defaultValue={this.state.precision}
            onChange={this.changePrecision}
            isInline
          />

          {granularitySelect}
        </Fieldset>

        {(this.state.precision !== OnsetUtils.PrecisionOptions.UNKNOWN) &&
          <Fieldset>
            {ageSelect}
            {ageUnitSelect}
            {monthSelect}
            {yearSelect}
            {dateSelect}
          </Fieldset>
        }
      </div>)
    );
  }
}

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;
OnsetPicker.contextTypes = contextTypes;
OnsetPicker.Opts = {};
OnsetPicker.Opts.Precisions = OnsetUtils.PrecisionOptions;
OnsetPicker.Opts.Granularities = GranularityOptions;

export default OnsetPicker;
