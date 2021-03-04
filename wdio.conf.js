const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

if (process.env.npm_package_name !== 'terra-clinical') {
  config.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

exports.config = config;
