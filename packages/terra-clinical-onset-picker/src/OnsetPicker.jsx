import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import Field from 'terra-form-field';
import FieldSet from 'terra-form-fieldset';
import InputField from 'terra-form-input/lib/InputField';
import SelectField from 'terra-form-select/lib/SelectField';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import OnsetUtils from './OnsetUtils';
import styles from './OnsetPicker.module.scss';

const cx = classNames.bind(styles);

const AgeUnits = {
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years',
};

const GranularityOptions = {
  AGE: 'age',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
};

const { PrecisionOptions } = OnsetUtils;

const DATE_FORMAT = 'YYYY-MM-DD';

const propTypes = {
  /**
   * The date unit of the age value. One of `weeks`, `months`, or `years`.
   */
  ageUnit: PropTypes.oneOf(['weeks', 'months', 'years']),
  /**
   * The ISO 8601 **DATE ONLY** string representation of the birth date to calculate an onset date for the `age` precision.
   * Also limits the earliest possible date that can be selected for an onset date for `year`, `month`, and `date` precision.
   */
  birthdate: PropTypes.string.isRequired,
  /**
   * The granularity of the onset date. One of `age`, `year`, `month`, or `date` is accepted.
   */
  granularity: PropTypes.oneOf(['age', 'year', 'month', 'date']),
  /**
   * The id of the onset picker. Used as the base for other required id/name in sub-components.
   */
  id: PropTypes.string.isRequired,
  /**
   * The precision of the onset date. This should be one of precisions passed to the precisionSet prop.
   * One of `on/at`, `about`, `before`, `after`, or `unknown`.
   */
  precision: PropTypes.oneOf(['on/at', 'about', 'before', 'after', 'unknown']),
  /**
   * The set of precisions that can be used with the onset picker.
   * Combination of `on/at`, `about`, `before`, `after`, and `unknown`.
   * Order of precisions determines order in precision select.
   */
  precisionSet: PropTypes.arrayOf(PropTypes.oneOf(['on/at', 'about', 'before', 'after', 'unknown'])),
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
  /**
   * Legend for the Onset Picker field group.
   */
  legend: PropTypes.string,
  /**
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  precisionSet: ['on/at', 'about', 'before', 'after', 'unknown'],
  isLegendHidden: false,
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

    let ageValues = {};
    if (this.props.ageUnit) {
      ageValues = {
        age: this.props.onsetDate ? moment(this.props.onsetDate).diff(moment(this.props.birthdate), this.props.ageUnit) : undefined,
        ageUnit: this.props.ageUnit,
      };
    } else if (this.props.onsetDate) {
      ageValues = OnsetUtils.onsetToAge(this.props.birthdate, moment(this.props.onsetDate));
    }

    const birthMoment = moment(props.birthdate).startOf('day');
    const currentMoment = moment().startOf('day');
    /* The granularity is added so that if 'age' is passed as granularity with invalid birthdate,
    then the granularity is set to default i.e 'undefined' */
    const granularity = (currentMoment.diff(birthMoment, 'weeks') !== 0 || this.props.granularity !== GranularityOptions.AGE) ? this.props.granularity : undefined;

    this.state = {
      granularity,
      precision: this.props.precision,
      onsetDate: this.props.onsetDate ? moment(this.props.onsetDate) : undefined,
      age: ageValues.age,
      ageUnit: ageValues.ageUnit,
      year: undefined,
      month: undefined,
    };
  }

  componentDidMount() {
    if (this.props.onsetDate) {
      const onsetMoment = moment(this.props.onsetDate);
      const onsetYear = moment().year(onsetMoment.year());
      const firstDayOfYear = onsetYear.startOf('year').format(DATE_FORMAT);
      const firstDayOfMonth = onsetYear.month(onsetMoment.month()).startOf('month')
        .format(DATE_FORMAT);
      if (this.props.granularity === GranularityOptions.YEAR && this.props.onsetDate === firstDayOfYear) {
        this.setState({
          granularity: GranularityOptions.YEAR,
        }, this.handleOnsetUpdate);
      } else if (this.props.granularity === GranularityOptions.MONTH && this.props.onsetDate === firstDayOfMonth) {
        this.setState({
          granularity: GranularityOptions.MONTH,
        }, this.handleOnsetUpdate);
      } else if (this.props.granularity === GranularityOptions.AGE && this.state.age && this.state.ageUnit) {
        this.setState({
          granularity: GranularityOptions.AGE,
        }, this.handleOnsetUpdate);
      } else {
        this.setState({
          granularity: GranularityOptions.DATE,
        }, this.handleOnsetUpdate);
      }
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
      onsetDate: this.state.onsetDate ? this.state.onsetDate.format(DATE_FORMAT) : undefined,
      onsetDateMetadata: this.state.onsetDateMetadata,
      granularity: this.state.precision !== PrecisionOptions.UNKNOWN ? this.state.granularity : '',
    };
    if (this.state.granularity === GranularityOptions.AGE && this.state.precision !== PrecisionOptions.UNKNOWN) {
      onsetObject.ageUnit = this.state.ageUnit;
    }

    this.props.onsetOnChange(onsetObject);
  }

  getYearInput(intl, id) {
    return (
      <SelectField
        className={cx('field-inline', 'year')}
        value={this.state.onsetDate ? this.state.onsetDate.year().toString() : undefined}
        label={intl.formatMessage({ id: 'Terra.onsetPicker.yearLabel' })}
        labelAttrs={{
          id: `${id}-year-select-label`,
        }}
        isLabelHidden
        onChange={this.changeYear}
        placeholder={intl.formatMessage({ id: 'Terra.onsetPicker.year' })}
        selectAttrs={{
          'aria-labelledby': `${id}-year-select-label`,
        }}
        selectId={`${id}-year-select`}
      >
        {OnsetUtils.allowedYears(this.state.granularity, this.state.month, this.props.birthdate)
          .map(year => <SelectField.Option value={year.value} display={year.display} key={year.value} />)}
      </SelectField>
    );
  }

  /**
   * Change state for granularity
   *
   * @param {granularity} - New granularity value
   */
  changeGranularity(granularity) {
    if (granularity !== this.state.granularity) {
    // RESET DATA IF GRANULARITY IS CHANGED.
      this.setState((prevState) => ({
        granularity,
        precision: prevState.precision,
        onsetDate: undefined,
        age: undefined,
        ageUnit: undefined,
        year: undefined,
        month: undefined,
      }),
      this.handleOnsetUpdate);
    }
  }

  /**
   * Change state for precision
   *
   * @param {precision} - New precision value
   */
  changePrecision(precision) {
    if (precision === PrecisionOptions.UNKNOWN) {
      this.setState(() => ({
        precision,
        onsetDate: undefined,
      }), this.handleOnsetUpdate);
    } else {
      this.setState({ precision }, this.handleOnsetUpdate);
    }
  }

  /**
   * Change state for the age when using AGE granularity, and update onset date
   *
   * @param {event} - Triggered change event
   */
  changeAge(event) {
    let age;
    if (event.target.value) {
      age = Number(event.target.value);
      this.setState((prevState) => {
      // Check if date can be calculated
        const momentBirthDate = moment(this.props.birthdate);
        let ageDate = moment(momentBirthDate).add(age, prevState.ageUnit);
        // Add 1 day to onset date if birthdate is a leap day or onset month has less days than birth month.
        if (Number.isInteger(age) && prevState.ageUnit) {
          if (ageDate.daysInMonth() < momentBirthDate.daysInMonth() && ageDate.format(DATE_FORMAT) === moment().year(ageDate.year()).month(ageDate.month()).endOf('month')
            .format(DATE_FORMAT)) {
            ageDate = ageDate.add('1', 'days');
          }
        } else {
          ageDate = undefined;
        }
        // Check if date is valid
        const validDate = ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment();

        return {
          age,
          onsetDate: validDate ? ageDate : undefined,
        };
      }, this.handleOnsetUpdate);
    } else {
      this.setState(() => ({
        age: undefined,
        onsetDate: undefined,
      }), this.handleOnsetUpdate);
    }
  }

  /**
   * Change state for age unit when using AGE granularity, and update onset date
   *
   * @param {ageUnit} - New ageUnit
   */
  changeAgeUnit(ageUnit) {
    const validAge = Number.isInteger(this.state.age);
    // Check if date can be calculated
    const momentBirthDate = moment(this.props.birthdate);
    let ageDate = moment(momentBirthDate).add(this.state.age, ageUnit);
    if (validAge && ageUnit) {
      if (ageDate.daysInMonth() < momentBirthDate.daysInMonth() && ageDate.format(DATE_FORMAT) === moment().year(ageDate.year()).month(ageDate.month()).endOf('month')
        .format(DATE_FORMAT)) {
        ageDate = ageDate.add('1', 'days');
      }
    } else {
      ageDate = undefined;
    }
    // Check if date is valid
    const validDate = (this.state.age !== undefined) ? (ageDate && ageDate >= moment(this.props.birthdate) && ageDate <= moment()) : false;
    this.setState(() => ({
      ageUnit,
      onsetDate: validDate ? ageDate : undefined,
    }), this.handleOnsetUpdate);
  }

  /**
   * Update onset date when year changes
   *
   * @param {year} - New year value
   */
  changeYear(year) {
    if (this.state.granularity === GranularityOptions.MONTH) {
      this.setState((prevState) => ({
        year,
        onsetDate: (prevState.month ? moment().month(prevState.month).year(year).startOf('month')
          : undefined),
      }), this.handleOnsetUpdate);
    } else {
      this.setState(() => {
        const newDate = moment().year(year).startOf('year');
        return { onsetDate: newDate };
      }, this.handleOnsetUpdate);
    }
  }

  /**
   * Update onset date when month changes
   *
   * @param {month} - New month value
   */
  changeMonth(month) {
    this.setState((prevState) => ({
      month,
      onsetDate: (prevState.year ? moment().month(month).year(prevState.year).startOf('month')
        : undefined),
    }), this.handleOnsetUpdate);
  }

  /**
   * Update onset date when date changes
   *
   * @param {event} - Triggered change event
   * @param {string} - New date input
   * @param {object} - Metadata about date
   */
  changeDate(event, _, metadata) {
    if (!metadata.isCompleteValue) {
      this.setState({ onsetDate: undefined, onsetDateMetadata: metadata }, this.handleOnsetUpdate);
    } else {
      this.setState({ onsetDate: moment(metadata.iSO), onsetDateMetadata: metadata }, this.handleOnsetUpdate);
    }
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
      legend,
      intl,
      isLegendHidden,
      ...customProps
    } = this.props;

    let granularitySelect = null;
    const granularityOptions = [];
    if (this.state.precision !== PrecisionOptions.UNKNOWN) {
      const birthMoment = moment(birthdate).startOf('day'); // startOf to clear time from values
      const currentMoment = moment().startOf('day');
      if (currentMoment.diff(birthMoment, 'weeks') !== 0) {
        granularityOptions.push(
          <SelectField.Option
            value={GranularityOptions.AGE}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.age' })}
            key={GranularityOptions.AGE}
          />,
        );
      }
      if ((currentMoment.diff(birthMoment, 'years') === 0 && currentMoment.year() !== birthMoment.year()) || (currentMoment.diff(birthMoment, 'years') !== 0)) {
        granularityOptions.push(
          <SelectField.Option
            value={GranularityOptions.YEAR}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.year' })}
            key={GranularityOptions.YEAR}
          />,
        );
      }
      if ((currentMoment.diff(birthMoment, 'months') === 0 && currentMoment.month() !== birthMoment.month()) || (currentMoment.diff(birthMoment, 'months') !== 0)) {
        granularityOptions.push(
          <SelectField.Option
            value={GranularityOptions.MONTH}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.month' })}
            key={GranularityOptions.MONTH}
          />,
        );
      }
      granularitySelect = (
        <SelectField
          className={cx('field-inline', 'granularity')}
          value={this.state.granularity}
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
          {granularityOptions}
          <SelectField.Option
            value={GranularityOptions.DATE}
            display={intl.formatMessage({ id: 'Terra.onsetPicker.date' })}
            key={GranularityOptions.DATE}
          />
        </SelectField>
      );
    }

    let ageInput;
    let ageUnitSelect;
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

    let monthSelect;
    if (this.state.granularity === GranularityOptions.MONTH) {
      monthSelect = (
        <React.Fragment>
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
            {OnsetUtils.allowedMonths(intl, this.props.birthdate, this.state.year)
              .map(month => <SelectField.Option value={month.value} display={month.display} key={month.value} />)}
          </SelectField>
          {this.getYearInput(intl, this.props.id)}
        </React.Fragment>
      );
    }
    let yearSelect;
    if (this.state.granularity === GranularityOptions.YEAR) {
      yearSelect = this.getYearInput(intl, this.props.id);
    }

    let dateSelect;
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
            onChangeRaw={this.changeDate}
            minDate={this.props.birthdate}
            maxDate={moment().format(DATE_FORMAT)}
            selectedDate={this.state.onsetDate ? this.state.onsetDate.format(DATE_FORMAT) : undefined}
            name={`${this.props.id}-date-input`}
          />
        </Field>
      );
    }
    const theme = this.context;

    return (
      <div id={this.props.id} {...customProps}>
        <FieldSet className={cx('fieldset', theme.className)} legend={legend} isLegendHidden={isLegendHidden}>
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
              .map(precisionEntry => <SelectField.Option value={precisionEntry.value} display={precisionEntry.display} key={precisionEntry.value} />)}
          </SelectField>

          {granularitySelect}

          {(this.state.precision !== PrecisionOptions.UNKNOWN) && (
            <div>
              {ageInput}
              {ageUnitSelect}
              {monthSelect}
              {yearSelect}
              {dateSelect}
            </div>
          )}
        </FieldSet>
      </div>
    );
  }
}

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;
OnsetPicker.contextType = ThemeContext;

export default injectIntl(OnsetPicker);
export {
  AgeUnits,
  GranularityOptions,
  PrecisionOptions,
};
