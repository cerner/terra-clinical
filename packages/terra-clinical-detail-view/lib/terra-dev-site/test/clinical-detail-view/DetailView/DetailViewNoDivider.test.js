'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DetailView = require('../../../../DetailView');

var _DetailView2 = _interopRequireDefault(_DetailView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item = _react2.default.createElement(
  'p',
  null,
  'A Detail List Item'
);
var item2 = _react2.default.createElement(
  'p',
  null,
  'A Detail List Item to prove float concept when screen readjusts smaller.'
);
var accessoryElement = _react2.default.createElement(
  'p',
  null,
  ' A sample accessory container '
);

var DetailViewNoDivider = function DetailViewNoDivider() {
  return _react2.default.createElement(_DetailView2.default, {
    title: 'Header',
    secondaryTitles: ['secondaryTitle1', 'secondaryTitle2'],
    subtitles: ['Subtitle 1', 'Subtitle 2'],
    graph: _react2.default.createElement(
      'div',
      {
        style: {
          border: '1px solid black', height: '20em', width: '25em', marginBottom: '0.714rem'
        }
      },
      'This is where any visualizations would go'
    ),
    accessory: accessoryElement,
    details: [_react2.default.createElement(
      _DetailView2.default.DetailList,
      { title: 'Detail List Title', key: 'detailInfo-1' },
      _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
      _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
      _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item2 }),
      _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
      _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item })
    )],
    footer: 'Footer Text',
    isDivided: false,
    id: 'DetailView',
    isSmallerTitles: false
  });
};

exports.default = DetailViewNoDivider;