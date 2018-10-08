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

var _ItemCollection = require('!raw-loader!../../../src/ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

var _Item = require('!raw-loader!../../../src/Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemCollectionExample = require('./example/ItemCollectionExample');

var _ItemCollectionExample2 = _interopRequireDefault(_ItemCollectionExample);

var _ItemCollectionExample3 = require('!raw-loader!./../../../src/terra-dev-site/doc/example/ItemCollectionExample');

var _ItemCollectionExample4 = _interopRequireDefault(_ItemCollectionExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-clinical/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Divided Detail View',
      example: _react2.default.createElement(_ItemCollectionExample2.default, null),
      source: _ItemCollectionExample4.default
    }],
    propsTables: [{
      componentName: 'Item Collection',
      componentSrc: _ItemCollection2.default
    }, {
      componentName: 'Item',
      componentSrc: _Item2.default
    }]
  });
};

exports.default = DocPage;