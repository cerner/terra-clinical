'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraClinicalLabelValueView = require('terra-clinical-label-value-view');

var _terraClinicalLabelValueView2 = _interopRequireDefault(_terraClinicalLabelValueView);

var _DetailView = require('terra-clinical-detail-view/lib/DetailView');

var _DetailView2 = _interopRequireDefault(_DetailView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detail1title = 'Diabetes';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var detail1item1 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Age of onset', textValue: '38 years' });
var detail1item2 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Reviewed', textValue: '07/10/2012 10:00AM' });
var detail1item3 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Comments', textValue: '--' });

var detail2title = 'Hypertension';
var detail2item1 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Age of onset', textValue: '--' });
var detail2item2 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Reviewed', textValue: '07/10/2012 10:00AM' });
var detail2item3 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Comments', textValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)' });

var DetailViewDivided = function DetailViewDivided() {
  return _react2.default.createElement(
    'div',
    { style: { border: '3px dotted #d3d4d5' } },
    _react2.default.createElement(_DetailView2.default, {
      title: 'Mother',
      subtitles: ['Martha (58 years)', '[second line for subtitles]'],
      details: [_react2.default.createElement(
        _DetailView2.default.DetailList,
        { title: detail1title, key: 'order-info-1' },
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item1 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item2 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item3 })
      ), _react2.default.createElement(
        _DetailView2.default.DetailList,
        { title: detail2title, key: 'order-info-2' },
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item1 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item2 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item3 })
      )],
      footer: 'Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM'
    })
  );
};

exports.default = DetailViewDivided;