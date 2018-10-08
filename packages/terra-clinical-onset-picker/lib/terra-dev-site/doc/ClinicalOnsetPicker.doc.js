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

var _OnsetPicker = require('!raw-loader!../../../src/OnsetPicker');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

var _DefaultOnset = require('./example/DefaultOnset');

var _DefaultOnset2 = _interopRequireDefault(_DefaultOnset);

var _DefaultOnset3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/DefaultOnset');

var _DefaultOnset4 = _interopRequireDefault(_DefaultOnset3);

var _HandledOnset = require('./example/HandledOnset');

var _HandledOnset2 = _interopRequireDefault(_HandledOnset);

var _HandledOnset3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/HandledOnset');

var _HandledOnset4 = _interopRequireDefault(_HandledOnset3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default with initialization',
      example: _react2.default.createElement(_DefaultOnset2.default, null),
      source: _DefaultOnset4.default
    }, {
      title: 'Onset picker with supplied data and handlers',
      example: _react2.default.createElement(_HandledOnset2.default, null),
      source: _HandledOnset4.default
    }],
    propsTables: [{
      componentName: 'Onset Picker',
      componentSrc: _OnsetPicker2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;