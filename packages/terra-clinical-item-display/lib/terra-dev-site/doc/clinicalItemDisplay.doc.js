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

var _ItemDisplay = require('!raw-loader!../../../src/ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

var _ItemComment = require('!raw-loader!../../../src/ItemComment');

var _ItemComment2 = _interopRequireDefault(_ItemComment);

var _TextStyles = require('./example/TextStyles');

var _TextStyles2 = _interopRequireDefault(_TextStyles);

var _TextStyles3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/TextStyles');

var _TextStyles4 = _interopRequireDefault(_TextStyles3);

var _TextStylesDisabled = require('./example/TextStylesDisabled');

var _TextStylesDisabled2 = _interopRequireDefault(_TextStylesDisabled);

var _TextStylesDisabled3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/TextStylesDisabled');

var _TextStylesDisabled4 = _interopRequireDefault(_TextStylesDisabled3);

var _Icon = require('./example/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Icon3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/Icon');

var _Icon4 = _interopRequireDefault(_Icon3);

var _IconText = require('./example/IconText');

var _IconText2 = _interopRequireDefault(_IconText);

var _IconText3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/IconText');

var _IconText4 = _interopRequireDefault(_IconText3);

var _DefaultComment = require('./example/DefaultComment');

var _DefaultComment2 = _interopRequireDefault(_DefaultComment);

var _DefaultComment3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/DefaultComment');

var _DefaultComment4 = _interopRequireDefault(_DefaultComment3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Item Display: Text styles',
      example: _react2.default.createElement(_TextStyles2.default, null),
      source: _TextStyles4.default
    }, {
      title: 'Disabled Item Display: Text styles',
      example: _react2.default.createElement(_TextStylesDisabled2.default, null),
      source: _TextStylesDisabled4.default
    }, {
      title: 'Item Display: Icon',
      example: _react2.default.createElement(_Icon2.default, null),
      source: _Icon4.default
    }, {
      title: 'Item Display: Icon & Text',
      example: _react2.default.createElement(_IconText2.default, null),
      source: _IconText4.default
    }, {
      title: 'Comment Item Display',
      example: _react2.default.createElement(_DefaultComment2.default, null),
      source: _DefaultComment4.default
    }],
    propsTables: [{
      componentName: 'Item Display',
      componentSrc: _ItemDisplay2.default
    }, {
      componentName: 'Item Comment',
      componentSrc: _ItemComment2.default
    }]
  });
};

exports.default = DocPage;