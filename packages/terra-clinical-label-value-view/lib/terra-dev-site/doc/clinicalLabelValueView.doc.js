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

var _LabelValueView = require('!raw-loader!../../../src/LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

var _LabelValueViewText = require('./example/LabelValueViewText');

var _LabelValueViewText2 = _interopRequireDefault(_LabelValueViewText);

var _LabelValueViewText3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/LabelValueViewText');

var _LabelValueViewText4 = _interopRequireDefault(_LabelValueViewText3);

var _LabelValueViewNode = require('./example/LabelValueViewNode');

var _LabelValueViewNode2 = _interopRequireDefault(_LabelValueViewNode);

var _LabelValueViewNode3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/LabelValueViewNode');

var _LabelValueViewNode4 = _interopRequireDefault(_LabelValueViewNode3);

var _LabelValueViewNodeCustom = require('./example/LabelValueViewNodeCustom');

var _LabelValueViewNodeCustom2 = _interopRequireDefault(_LabelValueViewNodeCustom);

var _LabelValueViewNodeCustom3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/LabelValueViewNodeCustom');

var _LabelValueViewNodeCustom4 = _interopRequireDefault(_LabelValueViewNodeCustom3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Label Value View with a Text Input',
      example: _react2.default.createElement(_LabelValueViewText2.default, null),
      source: _LabelValueViewText4.default
    }, {
      title: 'Label Value View with a Node Input',
      example: _react2.default.createElement(_LabelValueViewNode2.default, null),
      source: _LabelValueViewNode4.default
    }, {
      title: 'Label Value View with a Node Input (Custom)',
      example: _react2.default.createElement(_LabelValueViewNodeCustom2.default, null),
      source: _LabelValueViewNodeCustom4.default
    }],
    propsTables: [{
      componentName: 'Label Value View',
      componentSrc: _LabelValueView2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;