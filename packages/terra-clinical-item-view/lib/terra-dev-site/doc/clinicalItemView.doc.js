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

var _ItemView = require('!raw-loader!../../../src/ItemView.jsx');

var _ItemView2 = _interopRequireDefault(_ItemView);

var _ItemViewStandard = require('./example/ItemViewStandard');

var _ItemViewStandard2 = _interopRequireDefault(_ItemViewStandard);

var _ItemViewStandard3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewStandard');

var _ItemViewStandard4 = _interopRequireDefault(_ItemViewStandard3);

var _ItemViewTwoColumn = require('./example/ItemViewTwoColumn');

var _ItemViewTwoColumn2 = _interopRequireDefault(_ItemViewTwoColumn);

var _ItemViewTwoColumn3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewTwoColumn');

var _ItemViewTwoColumn4 = _interopRequireDefault(_ItemViewTwoColumn3);

var _ItemViewTwoColumnStart = require('./example/ItemViewTwoColumnStart');

var _ItemViewTwoColumnStart2 = _interopRequireDefault(_ItemViewTwoColumnStart);

var _ItemViewTwoColumnStart3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewTwoColumnStart');

var _ItemViewTwoColumnStart4 = _interopRequireDefault(_ItemViewTwoColumnStart3);

var _ItemViewComment = require('./example/ItemViewComment');

var _ItemViewComment2 = _interopRequireDefault(_ItemViewComment);

var _ItemViewComment3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewComment');

var _ItemViewComment4 = _interopRequireDefault(_ItemViewComment3);

var _ItemViewAll = require('./example/ItemViewAll');

var _ItemViewAll2 = _interopRequireDefault(_ItemViewAll);

var _ItemViewAll3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewAll');

var _ItemViewAll4 = _interopRequireDefault(_ItemViewAll3);

var _ItemViewAllTopAligned = require('./example/ItemViewAllTopAligned');

var _ItemViewAllTopAligned2 = _interopRequireDefault(_ItemViewAllTopAligned);

var _ItemViewAllTopAligned3 = require('!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewAllTopAligned');

var _ItemViewAllTopAligned4 = _interopRequireDefault(_ItemViewAllTopAligned3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'ItemView - Default',
      example: _react2.default.createElement(_ItemViewStandard2.default, null),
      source: _ItemViewStandard4.default
    }, {
      title: 'ItemView - Two Column Layout',
      example: _react2.default.createElement(_ItemViewTwoColumn2.default, null),
      source: _ItemViewTwoColumn4.default
    }, {
      title: 'ItemView - Start Emphasis',
      example: _react2.default.createElement(_ItemViewTwoColumnStart2.default, null),
      source: _ItemViewTwoColumnStart4.default
    }, {
      title: 'ItemView - Comment',
      example: _react2.default.createElement(_ItemViewComment2.default, null),
      source: _ItemViewComment4.default
    }, {
      title: 'ItemView - All Elements',
      example: _react2.default.createElement(_ItemViewAll2.default, null),
      source: _ItemViewAll4.default
    }, {
      title: 'ItemView - All Elements Top Aligned',
      example: _react2.default.createElement(_ItemViewAllTopAligned2.default, null),
      source: _ItemViewAllTopAligned4.default
    }],
    propsTables: [{
      componentName: 'Item View',
      componentSrc: _ItemView2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;