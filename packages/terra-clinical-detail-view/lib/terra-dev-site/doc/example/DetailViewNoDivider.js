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

var item1 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Start Date', textValue: '12/12/12 00:00AM' });
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var item2 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Stop Date', textValue: '12/12/12 10:00AM' });
var item3 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Collected By', textValue: 'Nuse Collect' });
var item4 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Priority', textValue: 'High' });

var DetailViewDivided = function DetailViewDivided() {
  return _react2.default.createElement(
    'div',
    { style: { border: '3px dotted #d3d4d5' } },
    _react2.default.createElement(_DetailView2.default, {
      title: 'Complete Blood Count Order',
      subtitles: ['Accession', '239493849'],
      details: [_react2.default.createElement(
        _DetailView2.default.DetailList,
        { title: 'Collection Details', key: 'order-info-2' },
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item1 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item2 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item3 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item4 })
      )],
      isDivided: false
    })
  );
};

exports.default = DetailViewDivided;