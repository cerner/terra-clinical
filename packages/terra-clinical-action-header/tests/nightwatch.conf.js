/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// eslint-disable-next-line import/no-extraneous-dependencies
const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;
// eslint-disable-next-line import/no-extraneous-dependencies
const nightwatchConfiguration = require('terra-toolkit/lib/nightwatch.json');

module.exports = (settings => (
  testSettings(resolve('../../webpack.config'), settings)
))(nightwatchConfiguration);
