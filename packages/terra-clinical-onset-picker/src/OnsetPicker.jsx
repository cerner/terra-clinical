import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import NumberField from 'terra-form/lib/NumberField';
import DatePicker from 'terra-date-picker';
import SelectField from 'terra-form/lib/SelectField';
import OnsetUtil from './OnsetUtil';

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
   * The precision of the onset date. This value should be in the set of precisions passed to the precisionSet prop.
   */
  precision: PropTypes.oneOf(['ON/AT', 'ABOUT', 'BEFORE', 'AFTER', 'UNKNOWN']),

  /**
   * The set of precisions that can be used with the onset picker.
   * Can be from the set of precisions ON/AT, ABOUT, BEFORE, AFTER, and UNKNOWN.
   * Order of precisions determines order in precision select.
   */
  precisionSet: PropTypes.arrayOf(PropTypes.oneOf(['ON/AT', 'ABOUT', 'BEFORE', 'AFTER', 'UNKNOWN'])).isRequired,

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
  precision: 'ON/AT',
  precisionSet: ['ON/AT', 'ABOUT', 'BEFORE', 'AFTER', 'UNKNOWN'],
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
      age: 1,
      ageUnit: 'weeks',
    };

    // This binding is necessary to make `this` work in the callback
    this.changeGranularity = this.changeGranularity.bind(this);
    this.changePrecision = this.changePrecision.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeAgeUnit = this.changeAgeUnit.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
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
   * Change state for the age when using AGE granularity, and update onset date
   */
  changeAge(event) {
    const newDate = moment(this.props.birthdate).add(Number(event.target.value), this.state.ageUnit).format('YYYY-MM-DD');

    this.setState({
      age: Number(event.target.value),
      onsetDate: newDate });

    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(event, newDate);
    }
  }

  /*
   * Change state for duration when using age granularity, and update onset date
   */
  changeAgeUnit(event) {
    const newDate = moment(this.props.birthdate).add(1, event.target.value).format('YYYY-MM-DD');

    this.setState({
      age: 1,
      ageUnit: event.target.value,
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

    let ageSelect = null;
    let ageUnitSelect = null;
    if (this.state.granularity === 'AGE') {
      ageSelect = (<NumberField
        data-terra-clinical-onset-picker="age"
        min={1}
        max={OnsetUtil.allowedAge(this.props.birthdate, this.state.ageUnit)}
        step={1}
        value={this.state.age.toString()}
        onChange={this.changeAge}
        isInline
      />);

      ageUnitSelect = (<SelectField
        data-terra-clinical-onset-picker="age_unit"
        options={OnsetUtil.allowedAgeUnits(this.props.birthdate)}
        defaultValue={this.state.ageUnit.toString()}
        onChange={this.changeAgeUnit}
        isInline
      />);
    }

    let monthSelect = null;
    if (this.state.granularity === 'MONTH') {
      monthSelect = (<SelectField
        data-terra-clinical-onset-picker="month"
        options={OnsetUtil.allowedMonths(intl, this.props.birthdate, this.state.onsetDate)}
        defaultValue={moment(this.state.onsetDate).month().toString()}
        onChange={this.changeMonth}
        isInline
      />);
    }

    let yearSelect = null;
    if (this.state.granularity === 'YEAR' || this.state.granularity === 'MONTH') {
      yearSelect = (<SelectField
        data-terra-clinical-onset-picker="year"
        options={OnsetUtil.allowedYears(this.props.birthdate)}
        defaultValue={moment(this.state.onsetDate).year().toString()}
        onChange={this.changeYear}
        isInline
      />);
    }

    let dateSelect = null;
    if (this.state.granularity === 'DATE') {
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
      (<div data-terra-clinical-onset-picker {...customProps}>

        <Fieldset>
          {/* Precision */}
          <SelectField
            options={OnsetUtil.allowedPrecisions(intl, this.props.precisionSet)}
            name={this.props.precisionSelectName}
            defaultValue={this.state.precision}
            onChange={this.changePrecision}
            isInline
          />

          {granularitySelect}
        </Fieldset>

        {(this.state.precision !== 'UNKNOWN') &&
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

export default OnsetPicker;
