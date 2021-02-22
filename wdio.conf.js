const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.npm_package_name !== 'terra-clinical') {
  wdioConfig.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

wdioConfig.specs = [
  './packages/terra-clinical-data-grid/tests/wdio/data-grid-spec.js',
  './packages/terra-clinical-detail-view/tests/wdio/*.js',
  './packages/terra-clinical-header/tests/wdio/*.js',
  './packages/terra-clinical-item-collection/tests/wdio/*.js',
  './packages/terra-clinical-item-display/tests/wdio/*.js',
];

exports.config = wdioConfig;
