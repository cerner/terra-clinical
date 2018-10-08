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

var _Header = require('!raw-loader!../../../src/Header');

var _Header2 = _interopRequireDefault(_Header);

var _TitleHeader = require('./example/TitleHeader');

var _TitleHeader2 = _interopRequireDefault(_TitleHeader);

var _TitleHeader3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/TitleHeader');

var _TitleHeader4 = _interopRequireDefault(_TitleHeader3);

var _ContentHeader = require('./example/ContentHeader');

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

var _ContentHeader3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ContentHeader');

var _ContentHeader4 = _interopRequireDefault(_ContentHeader3);

var _HeaderLongText = require('./example/HeaderLongText');

var _HeaderLongText2 = _interopRequireDefault(_HeaderLongText);

var _HeaderLongText3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/HeaderLongText');

var _HeaderLongText4 = _interopRequireDefault(_HeaderLongText3);

var _HeaderLongTextWithContent = require('./example/HeaderLongTextWithContent');

var _HeaderLongTextWithContent2 = _interopRequireDefault(_HeaderLongTextWithContent);

var _HeaderLongTextWithContent3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/HeaderLongTextWithContent');

var _HeaderLongTextWithContent4 = _interopRequireDefault(_HeaderLongTextWithContent3);

var _Subheader = require('./example/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Subheader3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/Subheader');

var _Subheader4 = _interopRequireDefault(_Subheader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Header With Title Only',
      example: _react2.default.createElement(_TitleHeader2.default, null),
      source: _TitleHeader4.default
    }, {
      title: 'Header With Content',
      example: _react2.default.createElement(_ContentHeader2.default, null),
      source: _ContentHeader4.default
    }, {
      title: 'Header With Long Title',
      example: _react2.default.createElement(_HeaderLongText2.default, null),
      source: _HeaderLongText4.default
    }, {
      title: 'Header With Long Title, Children, And Content',
      example: _react2.default.createElement(_HeaderLongTextWithContent2.default, null),
      source: _HeaderLongTextWithContent4.default
    }, {
      title: 'Subheader with content',
      example: _react2.default.createElement(_Subheader2.default, null),
      source: _Subheader4.default
    }],
    propsTables: [{
      componentName: 'Header',
      componentSrc: _Header2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;