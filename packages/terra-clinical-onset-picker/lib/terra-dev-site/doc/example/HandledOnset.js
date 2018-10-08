'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _OnsetPicker = require('terra-clinical-onset-picker/lib/OnsetPicker');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var HandledOnsetExample = function (_React$Component) {
  _inherits(HandledOnsetExample, _React$Component);

  function HandledOnsetExample(props) {
    _classCallCheck(this, HandledOnsetExample);

    var _this = _possibleConstructorReturn(this, (HandledOnsetExample.__proto__ || Object.getPrototypeOf(HandledOnsetExample)).call(this, props));

    _this.state = {
      precision: _OnsetPicker2.default.Opts.Precisions.BEFORE,
      granularity: _OnsetPicker2.default.Opts.Granularities.YEAR,
      onsetDate: (0, _moment2.default)().subtract(2, 'years').format('YYYY-MM-DD')
    };

    _this.handleGranularity = _this.handleGranularity.bind(_this);
    _this.handlePrecision = _this.handlePrecision.bind(_this);
    _this.handleOnset = _this.handleOnset.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(HandledOnsetExample, [{
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
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(_OnsetPicker2.default, {
          birthdate: (0, _moment2.default)().subtract(6, 'years').format(),
          granularity: this.state.granularity,
          granularitySelectName: 'doogs-supplied-granularity',
          granularitySelectOnChange: this.handleGranularity,
          precision: this.state.precision,
          precisionSet: [_OnsetPicker2.default.Opts.Precisions.UNKNOWN, _OnsetPicker2.default.Opts.Precisions.AFTER, _OnsetPicker2.default.Opts.Precisions.BEFORE, _OnsetPicker2.default.Opts.Precisions.ONAT],
          precisionSelectName: 'doogs-supplied-precision',
          precisionSelectOnChange: this.handlePrecision,
          onsetDate: this.state.onsetDate,
          onsetDateInputName: 'doogs-supplied-onsetDate',
          onsetDateInputOnChange: this.handleOnset
        }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit'
        ),
        this.state.submittedData && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'Form was submitted with',
            JSON.stringify(this.state.submittedData)
          )
        )
      );
    }
  }]);

  return HandledOnsetExample;
}(_react2.default.Component);

exports.default = HandledOnsetExample;