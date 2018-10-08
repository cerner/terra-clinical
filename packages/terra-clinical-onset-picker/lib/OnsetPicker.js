'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _Field = require('terra-form/lib/Field');

var _Field2 = _interopRequireDefault(_Field);

var _Fieldset = require('terra-form/lib/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _NumberField = require('terra-form/lib/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

var _SelectField = require('terra-form/lib/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _OnsetUtils = require('./OnsetUtils');

var _OnsetUtils2 = _interopRequireDefault(_OnsetUtils);

var _OnsetPicker = require('./OnsetPicker.scss');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_OnsetPicker2.default);

var GranularityOptions = {
  AGE: 'age',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date'
};

var propTypes = {
  /**
   * The ISO 8601 string representation of the birth date to calculate an onset date for the AGE precision.
   * Also limits the earliest possible date that can be selected for an onset date for YEAR, MONTH, and DATE precision.
   */
  birthdate: _propTypes2.default.string.isRequired,

  /**
   * The granularity of the onset date. One of OnsetPicker.Opts.Granularities.AGE, OnsetPicker.Opts.Granularities.YEAR,
   * OnsetPicker.Opts.Granularities.MONTH, and OnsetPicker.Opts.Granularities.DATE are accepted.
   */
  granularity: _propTypes2.default.oneOf([GranularityOptions.AGE, GranularityOptions.YEAR, GranularityOptions.MONTH, GranularityOptions.DATE]),

  /**
   * Name of the granularity select. The name should be unique.
   */
  granularitySelectName: _propTypes2.default.string.isRequired,

  /**
   * A callback function to execute when a granularity is selected.
   * The first parameter is the changed granularity value.
   */
  granularitySelectOnChange: _propTypes2.default.func,

  /**
   * The precision of the onset date. This should be one of precisions passed to the precisionSet prop.
   */
  precision: _propTypes2.default.oneOf([_OnsetUtils2.default.PrecisionOptions.ONAT, _OnsetUtils2.default.PrecisionOptions.ABOUT, _OnsetUtils2.default.PrecisionOptions.BEFORE, _OnsetUtils2.default.PrecisionOptions.AFTER, _OnsetUtils2.default.PrecisionOptions.UNKNOWN]),

  /**
   * The set of precisions that can be used with the onset picker.
   * One of OnsetPicker.Opts.Precisions.ONAT, OnsetPicker.Opts.Precisions.ABOUT, OnsetPicker.Opts.Precisions.BEFORE,
   * OnsetPicker.Opts.Precisions.AFTER, OnsetPicker.Opts.Precisions.UNKNOWN.
   * Order of precisions determines order in precision select.
   */
  precisionSet: _propTypes2.default.arrayOf(_propTypes2.default.oneOf([_OnsetUtils2.default.PrecisionOptions.ONAT, _OnsetUtils2.default.PrecisionOptions.ABOUT, _OnsetUtils2.default.PrecisionOptions.BEFORE, _OnsetUtils2.default.PrecisionOptions.AFTER, _OnsetUtils2.default.PrecisionOptions.UNKNOWN])),

  /**
   * Name of the precision select. The name should be unique.
   */
  precisionSelectName: _propTypes2.default.string.isRequired,

  /**
   * A callback function to execute when a precision is selected.
   * The first parameter is the changed precision value.
   */
  precisionSelectOnChange: _propTypes2.default.func,

  /**
   * The ISO 8601 string representation of the onset date to view/modify. Defaults to current date.
   */
  onsetDate: _propTypes2.default.string,

  /**
   * Name of the onsetDate input. The name should be unique.
   */
  onsetDateInputName: _propTypes2.default.string.isRequired,

  /**
   * A callback function to execute when a onsetDate is changed.
   * The first parameter is the changed onsetDate value.
   */
  onsetDateInputOnChange: _propTypes2.default.func
};

var defaultProps = {
  granularity: 'month',
  precision: 'on/at',
  precisionSet: ['on/at', 'about', 'before', 'after', 'unknown']
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  }
};

var OnsetPicker = function (_React$Component) {
  _inherits(OnsetPicker, _React$Component);

  function OnsetPicker(props) {
    _classCallCheck(this, OnsetPicker);

    // This binding is necessary to make `this` work in the callback
    var _this = _possibleConstructorReturn(this, (OnsetPicker.__proto__ || Object.getPrototypeOf(OnsetPicker)).call(this, props));

    _this.changeGranularity = _this.changeGranularity.bind(_this);
    _this.changePrecision = _this.changePrecision.bind(_this);
    _this.changeAge = _this.changeAge.bind(_this);
    _this.changeAgeUnit = _this.changeAgeUnit.bind(_this);
    _this.changeYear = _this.changeYear.bind(_this);
    _this.changeMonth = _this.changeMonth.bind(_this);
    _this.changeDate = _this.changeDate.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);

    var ageValues = _OnsetUtils2.default.onsetToAge(_this.props.birthdate, (0, _moment2.default)(_this.props.onsetDate));

    _this.state = {
      granularity: _this.props.granularity,
      precision: _this.props.precision,
      onsetDate: _this.props.onsetDate ? (0, _moment2.default)(_this.props.onsetDate) : (0, _moment2.default)(),
      age: ageValues.age,
      ageUnit: ageValues.ageUnit
    };
    return _this;
  }

  /*
   * Change state for granularity
   */


  _createClass(OnsetPicker, [{
    key: 'changeGranularity',
    value: function changeGranularity(event) {
      var _this2 = this;

      var granularity = event.target.value;
      if (granularity === GranularityOptions.AGE) {
        // Calculate age values and update onsetDate to match age calculation
        this.setState(function (prevState) {
          var ageValues = _OnsetUtils2.default.onsetToAge(_this2.props.birthdate, prevState.onsetDate);

          return {
            age: ageValues.age,
            ageUnit: ageValues.ageUnit,
            onsetDate: (0, _moment2.default)(_this2.props.birthdate).add(ageValues.age, ageValues.ageUnit)
          };
        }, function () {
          return _this2.handleDateChange(_this2.state.onsetDate);
        });
      }
      this.setState({ granularity: granularity });

      if (this.props.granularitySelectOnChange) {
        this.props.granularitySelectOnChange(granularity);
      }
    }

    /*
     * Change state for precision
     */

  }, {
    key: 'changePrecision',
    value: function changePrecision(event) {
      this.setState({ precision: event.target.value });

      if (this.props.precisionSelectOnChange) {
        this.props.precisionSelectOnChange(event.target.value);
      }
    }

    /*
     * Change state for the age when using AGE granularity, and update onset date
     */

  }, {
    key: 'changeAge',
    value: function changeAge(event) {
      var _this3 = this;

      var age = Number(event.target.value);

      this.setState(function (prevState) {
        return {
          age: age,
          onsetDate: (0, _moment2.default)(_this3.props.birthdate).add(age, prevState.ageUnit)
        };
      }, function () {
        return _this3.handleDateChange(_this3.state.onsetDate);
      });
    }

    /*
     * Change state for duration when using age granularity, and update onset date
     */

  }, {
    key: 'changeAgeUnit',
    value: function changeAgeUnit(event) {
      var _this4 = this;

      var ageUnit = event.target.value;

      this.setState(function (prevState) {
        return {
          ageUnit: ageUnit,
          onsetDate: (0, _moment2.default)(_this4.props.birthdate).add(prevState.age, ageUnit)
        };
      }, function () {
        return _this4.handleDateChange(_this4.state.onsetDate);
      });
    }

    /*
     * Update onset date when year changes
     */

  }, {
    key: 'changeYear',
    value: function changeYear(event) {
      var _this5 = this;

      var year = event.target.value;
      this.setState(function (prevState) {
        return {
          onsetDate: prevState.onsetDate.year(year)
        };
      }, function () {
        var newDate = _this5.state.onsetDate;
        var newMonths = _OnsetUtils2.default.allowedMonths(_this5.context.intl, _this5.props.birthdate, newDate);

        // Check if new onset month is available, otherwise change month to first possible month
        if (newMonths.filter(function (month) {
          return parseInt(month.value, 10) === newDate.month();
        }).length === 0) {
          newDate = (0, _moment2.default)(newDate).month(newMonths[0].value);
        }

        _this5.handleDateChange(newDate);
      });
    }

    /*
     * Update onset date when month changes
     */

  }, {
    key: 'changeMonth',
    value: function changeMonth(event) {
      var _this6 = this;

      var month = event.target.value;

      this.setState(function (prevState) {
        return { onsetDate: prevState.onsetDate.month(month) };
      }, function () {
        return _this6.handleDateChange(_this6.state.onsetDate);
      });
    }

    /*
     * Update onset date when date changes
     */

  }, {
    key: 'changeDate',
    value: function changeDate(event, date) {
      var newDate = (0, _moment2.default)(date);

      this.setState({ onsetDate: newDate });
      this.handleDateChange(newDate);
    }

    /**
     * Handle passing formatted onsetDate to callback function
     */

  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      if (this.props.onsetDateInputOnChange) {
        this.props.onsetDateInputOnChange(date.format());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          birthdate = _props.birthdate,
          granularity = _props.granularity,
          granularitySelectName = _props.granularitySelectName,
          granularitySelectOnChange = _props.granularitySelectOnChange,
          precision = _props.precision,
          precisionSet = _props.precisionSet,
          precisionSelectName = _props.precisionSelectName,
          precisionSelectOnChange = _props.precisionSelectOnChange,
          onsetDate = _props.onsetDate,
          onsetDateInputName = _props.onsetDateInputName,
          onsetDateInputOnChange = _props.onsetDateInputOnChange,
          customProps = _objectWithoutProperties(_props, ['birthdate', 'granularity', 'granularitySelectName', 'granularitySelectOnChange', 'precision', 'precisionSet', 'precisionSelectName', 'precisionSelectOnChange', 'onsetDate', 'onsetDateInputName', 'onsetDateInputOnChange']);

      var intl = this.context.intl;


      var granularitySelect = null;
      if (this.state.precision !== _OnsetUtils2.default.PrecisionOptions.UNKNOWN) {
        granularitySelect = _react2.default.createElement(_SelectField2.default, {
          className: cx('field-inline'),
          options: [{ value: GranularityOptions.AGE, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityAge' }) }, { value: GranularityOptions.YEAR, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityYear' }) }, { value: GranularityOptions.MONTH, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityMonth' }) }, { value: GranularityOptions.DATE, display: intl.formatMessage({ id: 'Terra.onsetPicker.granularityDate' }) }],
          name: this.props.granularitySelectName,
          defaultValue: this.state.granularity,
          onChange: this.changeGranularity,
          isInline: true
        });
      }

      var ageSelect = null;
      var ageUnitSelect = null;
      if (this.state.granularity === GranularityOptions.AGE) {
        ageSelect = _react2.default.createElement(_NumberField2.default, {
          className: cx('field-inline'),
          'data-terra-clinical-onset-picker': 'age',
          min: 0,
          max: _OnsetUtils2.default.allowedAge(this.props.birthdate, this.state.ageUnit),
          step: 1,
          defaultValue: this.state.age,
          onChange: this.changeAge,
          isInline: true
        });

        ageUnitSelect = _react2.default.createElement(_SelectField2.default, {
          className: cx('field-inline'),
          'data-terra-clinical-onset-picker': 'age_unit',
          options: _OnsetUtils2.default.allowedAgeUnits(this.props.birthdate, intl),
          defaultValue: this.state.ageUnit.toString(),
          onChange: this.changeAgeUnit,
          isInline: true
        });
      }

      var monthSelect = null;
      if (this.state.granularity === GranularityOptions.MONTH) {
        monthSelect = _react2.default.createElement(_SelectField2.default, {
          className: cx('field-inline'),
          'data-terra-clinical-onset-picker': 'month',
          options: _OnsetUtils2.default.allowedMonths(intl, this.props.birthdate, this.state.onsetDate),
          defaultValue: this.state.onsetDate.month().toString(),
          onChange: this.changeMonth,
          isInline: true
        });
      }

      var yearSelect = null;
      if (this.state.granularity === GranularityOptions.YEAR || this.state.granularity === GranularityOptions.MONTH) {
        yearSelect = _react2.default.createElement(_SelectField2.default, {
          className: cx('field-inline'),
          'data-terra-clinical-onset-picker': 'year',
          options: _OnsetUtils2.default.allowedYears(this.props.birthdate),
          defaultValue: this.state.onsetDate.year().toString(),
          onChange: this.changeYear,
          isInline: true
        });
      }

      var dateSelect = null;
      if (this.state.granularity === GranularityOptions.DATE) {
        dateSelect = _react2.default.createElement(
          _Field2.default,
          { className: cx('field-inline'), isInline: true },
          _react2.default.createElement(_terraDatePicker2.default, {
            onChange: this.changeDate,
            minDate: this.props.birthdate,
            maxDate: (0, _moment2.default)().format(),
            selectedDate: this.state.onsetDate.format(),
            name: this.props.onsetDateInputName
          })
        );
      }

      return _react2.default.createElement(
        'div',
        _extends({ 'data-terra-clinical-onset-picker': true }, customProps),
        _react2.default.createElement(
          _Fieldset2.default,
          { className: cx('fieldset') },
          _react2.default.createElement(_SelectField2.default, {
            className: cx('field-inline'),
            options: _OnsetUtils2.default.allowedPrecisions(intl, this.props.precisionSet),
            name: this.props.precisionSelectName,
            defaultValue: this.state.precision,
            onChange: this.changePrecision,
            isInline: true
          }),
          granularitySelect
        ),
        this.state.precision !== _OnsetUtils2.default.PrecisionOptions.UNKNOWN && _react2.default.createElement(
          _Fieldset2.default,
          { className: cx('fieldset') },
          ageSelect,
          ageUnitSelect,
          monthSelect,
          yearSelect,
          dateSelect
        )
      );
    }
  }]);

  return OnsetPicker;
}(_react2.default.Component);

OnsetPicker.propTypes = propTypes;
OnsetPicker.defaultProps = defaultProps;
OnsetPicker.contextTypes = contextTypes;
OnsetPicker.Opts = {};
OnsetPicker.Opts.Precisions = _OnsetUtils2.default.PrecisionOptions;
OnsetPicker.Opts.Granularities = GranularityOptions;

exports.default = OnsetPicker;