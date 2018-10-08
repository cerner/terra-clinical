'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../package.json');

var _DetailView = require('!raw-loader!../../../src/DetailView');

var _DetailView2 = _interopRequireDefault(_DetailView);

var _DetailList = require('!raw-loader!../../../src/DetailList');

var _DetailList2 = _interopRequireDefault(_DetailList);

var _DetailListItem = require('!raw-loader!../../../src/DetailListItem');

var _DetailListItem2 = _interopRequireDefault(_DetailListItem);

var _DetailViewDivided = require('./example/DetailViewDivided');

var _DetailViewDivided2 = _interopRequireDefault(_DetailViewDivided);

var _DetailViewDivided3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/DetailViewDivided');

var _DetailViewDivided4 = _interopRequireDefault(_DetailViewDivided3);

var _DetailViewNoDivider = require('./example/DetailViewNoDivider');

var _DetailViewNoDivider2 = _interopRequireDefault(_DetailViewNoDivider);

var _DetailViewNoDivider3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/DetailViewNoDivider');

var _DetailViewNoDivider4 = _interopRequireDefault(_DetailViewNoDivider3);

var _DetailViewDividedSmallerTitles = require('./example/DetailViewDividedSmallerTitles');

var _DetailViewDividedSmallerTitles2 = _interopRequireDefault(_DetailViewDividedSmallerTitles);

var _DetailViewDividedSmallerTitles3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/DetailViewDividedSmallerTitles');

var _DetailViewDividedSmallerTitles4 = _interopRequireDefault(_DetailViewDividedSmallerTitles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Divided Detail View',
      example: _react2.default.createElement(_DetailViewDivided2.default, null),
      source: _DetailViewDivided4.default
    }, {
      title: 'Non-Divided Detail View',
      example: _react2.default.createElement(_DetailViewNoDivider2.default, null),
      source: _DetailViewNoDivider4.default
    }, {
      title: 'Divided Detail View with Smaller Titles',
      example: _react2.default.createElement(_DetailViewDividedSmallerTitles2.default, null),
      source: _DetailViewDividedSmallerTitles4.default
    }],
    propsTables: [{
      componentName: 'Detail View',
      componentSrc: _DetailView2.default
    }, {
      componentName: 'Detail List',
      componentSrc: _DetailList2.default
    }, {
      componentName: 'Detail List Item',
      componentSrc: _DetailListItem2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;