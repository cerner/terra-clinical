/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const nightwatchConfig = require('./node_modules/terra-toolkit/lib/nightwatch/nightwatch.config.js').default;
const webpackConfig = require('./packages/terra-clinical-site/webpack.config');
const getPackageTestDirectories = require('./node_modules/terra-toolkit/lib/nightwatch/setup-helper.js').getPackageTestDirectories;

let srcFolders;
const isRepoTest = !process.cwd().includes('/packages/');

if (isRepoTest) {
  srcFolders = getPackageTestDirectories('lerna.json');
} else {
  srcFolders = 'tests/nightwatch/';
}

const config = nightwatchConfig(webpackConfig, srcFolders);

module.exports = config;
