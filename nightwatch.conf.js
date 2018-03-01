/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const nightwatchConfig = require('terra-toolkit/lib/nightwatch/nightwatch.config.js').default;
const webpackConfig = require('./webpack.config');
const getPackageTestDirectories = require('terra-toolkit/lib/nightwatch/setup-helper.js').getPackageTestDirectories;

let srcFolders;
const isRepoTest = __dirname === process.cwd();

if (isRepoTest) {
  srcFolders = getPackageTestDirectories('lerna.json');
} else {
  srcFolders = 'tests/nightwatch/';
}

if (Array.isArray(srcFolders)) {
  srcFolders = srcFolders.filter(value => value !== 'packages/terra-clinical-error-view/tests/nightwatch' && value !== 'packages/terra-clinical-no-data-view/tests/nightwatch');
}

const config = nightwatchConfig(webpackConfig, srcFolders);

module.exports = config;
