import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import DatePicker from 'terra-date-picker';
import Field from 'terra-form-field';
import FieldSet from 'terra-form-fieldset';
import InputField from 'terra-form-input/lib/InputField';
import SelectField from 'terra-form-select/lib/SelectField';
import OnsetUtils from './OnsetUtils';
import styles from './OnsetPicker.scss';

const cx = classNames.bind(styles);

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
   * A callback function to execute when a granularity is selected.
   * The first parameter is the changed granularity value.
   */
  granularitySelectOnChange: PropTypes.func,

  /**
   * The id of the onset picker. Used as the base for other required id/name in sub-components.
   */
  id: PropTypes.string.isRequired,

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
   * A callback function to execute when a precision is selected.
   * The first parameter is the changed precision value.
   */
  precisionSelectOnChange: PropTypes.func,

  /**
   * The ISO 8601 string representation of the onset date to view/modify. Defaults to current date.
   */
  onsetDate: PropTypes.string,

  /**
   * A callback function to execute when a onsetDate is changed.
   * The first parameter is the changed onsetDate value.
   */
  onsetDateInputOnChange: PropTypes.func,
};

const defaultProps = {
  precisionSet: [
    'on/at',
    'about',
    'before',
    'after',
    'unknown',
  ],
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

    this.changeGranularity = this.changeGranularity.bind(this);
    this.changePrecision = this.changePrecision.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeAgeUnit = this.changeAgeUnit.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    const ageValues = OnsetUtils.onsetToAge(this.props.birthdate, moment(this.props.onsetDate));

    this.state = {
      granularity: this.props.granularity,
      precision: this.props.precision,
      onsetDate: this.props.onsetDate ? moment(this.props.onsetDate) : undefined,
      age: ageValues.age,
      ageUnit: ageValues.ageUnit,
    };
  }

  /*
   * Change state for granularity
   */
  changeGranularity(value) {
    const granularity = value;
    if (granularity === GranularityOptions.AGE) { // Calculate age values and update onsetDate to match age calculation
      this.setState((prevState) => {
        const ageValues = OnsetUtils.onsetToAge(this.props.birthdate, prevState.onsetDate);

        return {
          age: ageValues.age,
          ageUnit: ageValues.ageUnit,
          onsetDate: moment(this.props.birthdate).add(ageValues.age, ageValues.ageUnit),
        };
      }, () => this.handleDateChange(this.state.onsetDate));
    }
    this.setState({ granularity });

    if (this.props.granularitySelectOnChange) {
      this.props.granularitySelectOnChange(granularity);
    }
  }

  /*
   * Change state for precision
   */
  changePrecision(value) {
    this.setState({ precision: value });

    if (this.props.precisionSelectOnChange) {
      this.props.precisionSelectOnChange(value);
    }
  }

  /*
   * Change state for the age when using AGE granularity, and update onset date
   */
  changeAge(event) {
    const age = Number(event.target.value);

    this.setState(prevState => {
      // Check if date can be calculated
      const ageDate = Number.isInteger(age) && prevState.ageUnit
        ? moment(this.props.birthdate).add(age, prevState.ageUnit) : undefined;
      // Check if date is valid
      const validDate = ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment();

      return {
        age,
        onsetDate: validDate ? ageDate : undefined,
      }
    }, () => this.handleDateChange(this.state.onsetDate));
  }

  /*
   * Change state for age unit when using AGE granularity, and update onset date
   */
  changeAgeUnit(value) {
    const ageUnit = value;

    this.setState(prevState => {
      // Check if date can be calculated
      const ageDate = Number.isInteger(prevState.age) && ageUnit
        ? moment(this.props.birthdate).add(prevState.age, ageUnit) : undefined;
      // Check if date is valid
      const validDate = ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment();

      return {
        ageUnit,
        onsetDate: validDate ? ageDate : undefined,
      }
    }, () => this.handleDateChange(this.state.onsetDate));
  }

  /*
   * Update onset date when year changes
   */
  changeYear(value) {
    const year = value;

    this.setState((prevState) => {
      let newDate = prevState.onsetDate ? prevState.onsetDate.year(year) : moment().year(year);
      const newMonths = OnsetUtils.allowedMonths(this.context.intl, this.props.birthdate, newDate);

      // Check if new onset month is available, otherwise change month to first possible month
      if (newMonths.filter(month => parseInt(month.value, 10) === newDate.month()).length === 0) {
        newDate = moment(newDate).month(newMonths[0].value);
      }

      return { onsetDate: newDate };
    }, () => this.handleDateChange(this.state.onsetDate));
  }

  /*
   * Update onset date when month changes
   */
  changeMonth(value) {
    const month = value;

    this.setState(prevState => ({
      onsetDate: prevState.onsetDate ? prevState.onsetDate.month(month) : moment().month(month),
    }), () => this.handleDateChange(this.state.onsetDate));
  }

  /*
   * Update onset date when date changes
   */
  changeDate(event, date) {
    if (date === '') {
      this.setState({ onsetDate: undefined }, () => this.handleDateChange(this.state.onsetDate));
    } else {
      this.setState({ onsetDate: moment(date) }, () => this.handleDateChange(this.state.onsetDate));
    }
  }

  /**
   * Handle passing formatted onsetDate to callback function
   *
   * @param {object} - Moment object or undefined
   */
  handleDateChange(date) {
    if (this.props.onsetDateInputOnChange) {
      this.props.onsetDateInputOnChange(date ? date.format() : '');
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

    const { intl } = this.context;

    let granularitySelect = null;
    if (this.state.precision !== OnsetUtils.PrecisionOptions.UNKNOWN) {
      granularitySelect = (
        <SelectField
          className={cx('field-inline', 'granularity')}
          defaultValue={this.state.granularity}
          onChange={this.changeGranularity}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.granularity' })}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.granularityLabel' })}
          selectId={`${this.props.id}-granularity-select`}
        >
          <SelectField.Option
            value={GranularityOptions.AGE}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.age' })}
            key={GranularityOptions.AGE}
          />
          <SelectField.Option
            value={GranularityOptions.YEAR}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.year' })}
            key={GranularityOptions.YEAR}
          />
          <SelectField.Option
            value={GranularityOptions.MONTH}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.month' })}
            key={GranularityOptions.MONTH}
          />
          <SelectField.Option
            value={GranularityOptions.DATE}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.date' })}
            key={GranularityOptions.DATE}
          />
        </SelectField>
      );
    }

    let ageInput = null;
    let ageUnitSelect = null;
    if (this.state.granularity === GranularityOptions.AGE) {
      ageInput = (
        <InputField
          className={cx('field-inline', 'age')}
          defaultValue={this.state.age}
          inputAttrs={{
            type: 'number',
            min: 0,
            max: OnsetUtils.allowedAge(this.props.birthdate, this.state.ageUnit),
            step: 1,
          }}
          inputId={`${this.props.id}-age-input`}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.ageLabel' })}
          onChange={this.changeAge}
        />
      );

      ageUnitSelect = (
        <SelectField
          className={cx('field-inline', 'age-unit')}
          defaultValue={this.state.ageUnit}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.agePrecisionLabel' })}
          onChange={this.changeAgeUnit}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.agePrecision' })}
          selectId={`${this.props.id}-age-precision-select`}
        >
          {OnsetUtils.allowedAgeUnits(this.props.birthdate, intl)
            .map(unit => <SelectField.Option value={unit.value} display={unit.display} key={unit.value} />)}
        </SelectField>
      );
    }

    let monthSelect = null;
    if (this.state.granularity === GranularityOptions.MONTH) {
      monthSelect = (
        <SelectField
          className={cx('field-inline', 'month')}
          value={this.state.onsetDate ? this.state.onsetDate.month().toString() : undefined}
          label={intl.formatMessage({ id: 'Terra.onsetPicker.monthLabel' })}
          isLabelHidden
          onChange={this.changeMonth}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.month' })}
          selectId={`${this.props.id}-month-select`}
        >
          {OnsetUtils.allowedMonths(intl, this.props.birthdate, this.state.onsetDate)
            .map(month => <SelectField.Option value={month.value} display={month.display} key={month.value} />)}
        </SelectField>
      );
    }

    let yearSelect = null;
    if (this.state.granularity === GranularityOptions.YEAR || this.state.granularity === GranularityOptions.MONTH) {
      yearSelect = (
        <SelectField
          className={cx('field-inline')}
          value={this.state.onsetDate ? this.state.onsetDate.year().toString() : undefined}
          label={intl.formatMessage({ id: 'Terra.onsetPicker.yearLabel' })}
          isLabelHidden
          onChange={this.changeYear}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.year' })}
          selectId={`${this.props.id}-year-select`}
        >
          {OnsetUtils.allowedYears(this.props.birthdate)
            .map(year => <SelectField.Option value={year.value} display={year.display} key={year.value} />)}
        </SelectField>
      );
    }

    let dateSelect = null;
    if (this.state.granularity === GranularityOptions.DATE) {
      dateSelect = (
        <Field
          className={cx('field-inline')}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.dateLabel' })}
        >
          <DatePicker
            onChange={this.changeDate}
            minDate={this.props.birthdate}
            maxDate={moment().format()}
            selectedDate={this.state.onsetDate ? this.state.onsetDate.format() : undefined}
            name={`${this.props.id}-date-input`}
          />
        </Field>
      );
    }

    return (
      <div id={this.props.id} {...customProps}>
        <FieldSet className={cx('fieldset')}>
          {/* Precision */}
          <SelectField
            className={cx('field-inline', 'precision')}
            defaultValue={this.state.precision}
            label={intl.formatMessage({ id: 'Terra.onsetPicker.precisionLabel' })}
            isLabelHidden
            onChange={this.changePrecision}
            placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.precision' })}
            selectId={`${this.props.id}-precision-select`}
          >
            {OnsetUtils.allowedPrecisions(intl, this.props.precisionSet)
              .map(prec => <SelectField.Option value={prec.value} display={prec.display} key={prec.value} />)}
          </SelectField>

          {granularitySelect}
        </FieldSet>

        {(this.state.precision !== OnsetUtils.PrecisionOptions.UNKNOWN) && (
          <FieldSet className={cx('fieldset')}>
            {ageInput}
            {ageUnitSelect}
            {monthSelect}
            {yearSelect}
            {dateSelect}
          </FieldSet>)
        }
      </div>
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
