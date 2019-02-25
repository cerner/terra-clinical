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
import styles from './OnsetPicker.module.scss';

const cx = classNames.bind(styles);

const GranularityOptions = {
  AGE: 'age',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
};

const DATE_FORMAT = 'YYYY-MM-DD';

const propTypes = {
  /**
   * The date unit of the age value. One of 'weeks', 'months', or 'years'.
   */
  ageUnit: PropTypes.oneOf([
    'weeks',
    'months',
    'years',
  ]),
  /**
   * The ISO 8601 **DATE ONLY** string representation of the birth date to calculate an onset date for the 'age' precision.
   * Also limits the earliest possible date that can be selected for an onset date for 'year', 'month', and 'date' precision.
   */
  birthdate: PropTypes.string.isRequired,

  /**
   * The granularity of the onset date. One of 'age', 'year', 'month', or 'date' is accepted.
   */
  granularity: PropTypes.oneOf([
    GranularityOptions.AGE,
    GranularityOptions.YEAR,
    GranularityOptions.MONTH,
    GranularityOptions.DATE,
  ]),

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
   * One of 'on/at', 'about', 'before', 'after', or 'unknown'.
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
   * The ISO 8601 **DATE ONLY** string representation of the onset date to view/modify.
   */
  onsetDate: PropTypes.string,

  /**
   * A callback function to execute when any value of the onsetDate is changed.
   * The first parameter is a Object that contains `precision`, `granularity`, `onsetDate`, and `ageUnit`.
   * `ageUnit` is only present if the granularity is 'age'.
   */
  onsetOnChange: PropTypes.func,
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
    this.handleOnsetUpdate = this.handleOnsetUpdate.bind(this);

    let ageValues;
    if (this.props.ageUnit) {
      ageValues = {
        age: this.props.onsetDate ? moment(this.props.onsetDate).diff(moment(this.props.birthdate), this.props.ageUnit) : undefined,
        ageUnit: this.props.ageUnit,
      };
    } else {
      ageValues = OnsetUtils.onsetToAge(this.props.birthdate, moment(this.props.onsetDate));
    }

    this.state = {
      granularity: this.props.granularity,
      precision: this.props.precision,
      onsetDate: this.props.onsetDate ? moment(this.props.onsetDate) : undefined,
      age: ageValues.age,
      ageUnit: ageValues.ageUnit,
    };
  }

  /**
   * Change state for granularity
   *
   * @param {granularity} - New granularity value
   */
  changeGranularity(granularity) {
    if (granularity === GranularityOptions.AGE) { // Calculate age values and update onsetDate to match age calculation
      this.setState((prevState) => {
        const ageValues = OnsetUtils.onsetToAge(this.props.birthdate, prevState.onsetDate);

        return {
          granularity,
          age: ageValues.age,
          ageUnit: ageValues.ageUnit,
          onsetDate: moment(this.props.birthdate).add(ageValues.age, ageValues.ageUnit),
        };
      }, this.handleOnsetUpdate);
    } else {
      this.setState({ granularity }, this.handleOnsetUpdate);
    }
  }

  /**
   * Change state for precision
   *
   * @param {precision} - New precision value
   */
  changePrecision(precision) {
    this.setState({ precision }, this.handleOnsetUpdate);
  }

  /**
   * Change state for the age when using AGE granularity, and update onset date
   *
   * @param {event} - Triggered change event
   */
  changeAge(event) {
    const age = Number(event.target.value);

    this.setState((prevState) => {
      // Check if date can be calculated
      const ageDate = Number.isInteger(age) && prevState.ageUnit
        ? moment(this.props.birthdate).add(age, prevState.ageUnit) : undefined;
      // Check if date is valid
      const validDate = ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment();

      return {
        age,
        onsetDate: validDate ? ageDate : undefined,
      };
    }, this.handleOnsetUpdate);
  }

  /**
   * Change state for age unit when using AGE granularity, and update onset date
   *
   * @param {ageUnit} - New ageUnit
   */
  changeAgeUnit(ageUnit) {
    this.setState((prevState) => {
      // Check if date can be calculated
      const ageDate = Number.isInteger(prevState.age) && ageUnit
        ? moment(this.props.birthdate).add(prevState.age, ageUnit) : undefined;
      // Check if date is valid
      const validDate = ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment();

      return {
        ageUnit,
        onsetDate: validDate ? ageDate : undefined,
      };
    }, this.handleOnsetUpdate);
  }

  /**
   * Update onset date when year changes
   *
   * @param {year} - New year value
   */
  changeYear(year) {
    this.setState((prevState) => {
      let newDate = prevState.onsetDate ? prevState.onsetDate.year(year) : moment().year(year);
      const newMonths = OnsetUtils.allowedMonths(this.context.intl, this.props.birthdate, newDate);

      // Check if new onset month is available, otherwise change month to first possible month
      if (newMonths.filter(month => parseInt(month.value, 10) === newDate.month()).length === 0) {
        newDate = moment(newDate).month(newMonths[0].value);
      }

      return { onsetDate: newDate };
    }, this.handleOnsetUpdate);
  }

  /**
   * Update onset date when month changes
   *
   * @param {month} - New month value
   */
  changeMonth(month) {
    this.setState(prevState => ({
      onsetDate: prevState.onsetDate ? prevState.onsetDate.month(month) : moment().month(month),
    }), this.handleOnsetUpdate);
  }

  /**
   * Update onset date when date changes
   *
   * @param {event} - Triggered change event
   * @param {date} - New date value
   */
  changeDate(event, date) {
    if (date === '') {
      this.setState({ onsetDate: undefined }, this.handleOnsetUpdate);
    } else {
      this.setState({ onsetDate: moment(date) }, this.handleOnsetUpdate);
    }
  }

  /**
   * Trigger supplied callback function with an object of the current state data
   */
  handleOnsetUpdate() {
    if (this.props.onsetOnChange === undefined) {
      return;
    }

    const onsetObject = {
      precision: this.state.precision,
      granularity: this.state.granularity,
      onsetDate: this.state.onsetDate ? this.state.onsetDate.format(DATE_FORMAT) : '',
    };

    if (this.state.granularity === GranularityOptions.AGE) {
      onsetObject.ageUnit = this.state.ageUnit;
    }

    this.props.onsetOnChange(onsetObject);
  }

  render() {
    const {
      ageUnit,
      birthdate,
      granularity,
      precision,
      precisionSet,
      onsetDate,
      onsetOnChange,
      ...customProps
    } = this.props;

    const { intl } = this.context;

    let granularitySelect = null;
    if (this.state.precision !== OnsetUtils.PrecisionOptions.UNKNOWN) {
      granularitySelect = (
        <SelectField
          className={cx('field-inline', 'granularity')}
          defaultValue={this.state.granularity}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.granularityLabel' })}
          labelAttrs={{
            id: `${this.props.id}-granularity-select-label`,
          }}
          onChange={this.changeGranularity}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.granularity' })}
          selectAttrs={{
            'aria-labelledby': `${this.props.id}-granularity-select-label`,
          }}
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
            'aria-labelledby': `${this.props.id}-age-input-label`,
          }}
          inputId={`${this.props.id}-age-input`}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.ageLabel' })}
          labelAttrs={{
            id: `${this.props.id}-age-input-label`,
          }}
          onChange={this.changeAge}
        />
      );

      ageUnitSelect = (
        <SelectField
          className={cx('field-inline', 'age-unit')}
          defaultValue={this.state.ageUnit}
          isLabelHidden
          label={intl.formatMessage({ id: 'Terra.onsetPicker.agePrecisionLabel' })}
          labelAttrs={{
            id: `${this.props.id}-age-unit-select-label`,
          }}
          onChange={this.changeAgeUnit}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.agePrecision' })}
          selectAttrs={{
            'aria-labelledby': `${this.props.id}-age-unit-select-label`,
          }}
          selectId={`${this.props.id}-age-unit-select`}
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
          labelAttrs={{
            id: `${this.props.id}-month-select-label`,
          }}
          isLabelHidden
          onChange={this.changeMonth}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.month' })}
          selectAttrs={{
            'aria-labelledby': `${this.props.id}-month-select-label`,
          }}
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
          className={cx('field-inline', 'year')}
          value={this.state.onsetDate ? this.state.onsetDate.year().toString() : undefined}
          label={intl.formatMessage({ id: 'Terra.onsetPicker.yearLabel' })}
          labelAttrs={{
            id: `${this.props.id}-year-select-label`,
          }}
          isLabelHidden
          onChange={this.changeYear}
          placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.year' })}
          selectAttrs={{
            'aria-labelledby': `${this.props.id}-year-select-label`,
          }}
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
          labelAttrs={{
            id: `${this.props.id}-date-input-label`,
          }}
        >
          <DatePicker
            inputAttributes={{
              'aria-labelledby': `${this.props.id}-date-input-label`,
            }}
            onChange={this.changeDate}
            minDate={this.props.birthdate}
            maxDate={moment().format(DATE_FORMAT)}
            selectedDate={this.state.onsetDate ? this.state.onsetDate.format(DATE_FORMAT) : undefined}
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
            labelAttrs={{
              id: `${this.props.id}-precision-select-label`,
            }}
            isLabelHidden
            onChange={this.changePrecision}
            placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.precision' })}
            selectAttrs={{
              'aria-labelledby': `${this.props.id}-precision-select-label`,
            }}
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
          </FieldSet>
        )}
      </div>
    );
  }
}

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;
OnsetPicker.contextTypes = contextTypes;

export default OnsetPicker;
