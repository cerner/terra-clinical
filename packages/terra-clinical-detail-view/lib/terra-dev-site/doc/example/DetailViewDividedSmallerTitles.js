'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraClinicalLabelValueView = require('terra-clinical-label-value-view');

var _terraClinicalLabelValueView2 = _interopRequireDefault(_terraClinicalLabelValueView);

var _terraClinicalItemDisplay = require('terra-clinical-item-display');

var _terraClinicalItemDisplay2 = _interopRequireDefault(_terraClinicalItemDisplay);

var _IconCritical = require('terra-icon/lib/icon/IconCritical');

var _IconCritical2 = _interopRequireDefault(_IconCritical);

var _IconPharmacyReview = require('terra-icon/lib/icon/IconPharmacyReview');

var _IconPharmacyReview2 = _interopRequireDefault(_IconPharmacyReview);

var _IconPharmacyReject = require('terra-icon/lib/icon/IconPharmacyReject');

var _IconPharmacyReject2 = _interopRequireDefault(_IconPharmacyReject);

var _IconGlasses = require('terra-icon/lib/icon/IconGlasses');

var _IconGlasses2 = _interopRequireDefault(_IconGlasses);

var _DetailView = require('terra-clinical-detail-view/lib/DetailView');

var _DetailView2 = _interopRequireDefault(_DetailView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detail1title = 'Indicators';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var detail1item1 = _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Immediate Priority', icon: _react2.default.createElement(_IconCritical2.default, null) });
var detail1item2 = _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Pharmacy Review', icon: _react2.default.createElement(_IconPharmacyReview2.default, null) });
var detail1item3 = _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Nurse Review', icon: _react2.default.createElement(_IconGlasses2.default, null) });
var detail1item4 = _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Pharmacy Reject', icon: _react2.default.createElement(_IconPharmacyReject2.default, null) });

var detail2title = 'Comments';
var detail2item1 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Order Comment', textValue: 'To be taken after lunch' });
var detail2item2 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Mar Notes', textValue: 'Using the med from last 2 months' });
var detail2item3 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Special Instructions', textValue: 'Never to be taken without eating' });
var detail2item4 = _react2.default.createElement(_terraClinicalLabelValueView2.default, { label: 'Admin Notes', textValue: 'Try med for 2 more months' });

var DetailViewDivided = function DetailViewDivided() {
  return _react2.default.createElement(
    'div',
    { style: { border: '3px dotted #d3d4d5' } },
    _react2.default.createElement(_DetailView2.default, {
      title: 'Multiple Ingredients',
      secondaryTitles: ['M. V. I. Adult 10 mL = 10 mL', 'Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL'],
      subtitles: ['30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT'],
      accessory: _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Ordered' }),
      details: [_react2.default.createElement(
        _DetailView2.default.DetailList,
        { title: detail1title, key: 'Indicators' },
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item1 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item2 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item3 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail1item4 })
      ), _react2.default.createElement(
        _DetailView2.default.DetailList,
        { title: detail2title, key: 'Comments' },
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item1 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item2 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item3 }),
        _react2.default.createElement(_DetailView2.default.DetailListItem, { item: detail2item4 })
      )],
      footer: 'Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM',
      isSmallerTitles: true
    })
  );
};

exports.default = DetailViewDivided;