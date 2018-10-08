'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _OnsetPicker = require('../../../OnsetPicker');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FiveYears = function (_React$Component) {
  _inherits(FiveYears, _React$Component);

  function FiveYears(props) {
    _classCallCheck(this, FiveYears);

    // Lock date to September 20, 2016
    var _this = _possibleConstructorReturn(this, (FiveYears.__proto__ || Object.getPrototypeOf(FiveYears)).call(this, props));

    _moment2.default.now = function () {
      return new Date(2016, 8, 20);
    };

    _this.state = {
      precision: _OnsetPicker2.default.Opts.Precisions.BEFORE,
      granularity: _OnsetPicker2.default.Opts.Granularities.YEAR,
      onsetDate: (0, _moment2.default)('2013-02-14')
    };

    _this.handleGranularity = _this.handleGranularity.bind(_this);
    _this.handlePrecision = _this.handlePrecision.bind(_this);
    _this.handleOnset = _this.handleOnset.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(FiveYears, [{
    key: 'handleGranularity',
    value: function handleGranularity(granularity) {
      this.setState({ granularity: granularity });
    }
  }, {
    key: 'handlePrecision',
    value: function handlePrecision(precision) {
      this.setState({ precision: precision });
    }
  }, {
    key: 'handleOnset',
    value: function handleOnset(onsetDate) {
      this.setState({ onsetDate: onsetDate });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState(function (prevState) {
        return {
          submittedData: {
            precision: prevState.precision,
            granularity: prevState.granularity,
            onsetDate: prevState.onsetDate
          }
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Onset picker with onChange handlers, birthdate of 2011-09-20 (5 years).'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Current date is locked to September 20, 2016'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Testing returns from handlers are correct, if they are the json object should get updated on changes.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Also tests age caps for months and years.'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(_OnsetPicker2.default, {
            birthdate: (0, _moment2.default)('2011-09-20').format(),
            granularity: this.state.granularity,
            granularitySelectName: 'test-granularity',
            granularitySelectOnChange: this.handleGranularity,
            precision: this.state.precision,
            precisionSelectName: 'test-precision',
            precisionSelectOnChange: this.handlePrecision,
            onsetDateInputName: 'test-onsetDate',
            onsetDateInputOnChange: this.handleOnset,
            onsetDate: (0, _moment2.default)(this.state.onsetDate).format()
          }),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          )
        ),
        _react2.default.createElement(
          'p',
          { 'data-test-json': true },
          JSON.stringify(this.state.submittedData)
        )
      );
    }
  }]);

  return FiveYears;
}(_react2.default.Component);

exports.default = FiveYears;