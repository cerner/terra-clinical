/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const nightwatchConfig = require('terra-toolkit/lib/nightwatch/nightwatch.config.js').default;
const webpackConfig = require('./packages/terra-clinical-site/webpack.config');
const getTestDirectories = require('terra-toolkit/lib/nightwatch/setup-helper.js').getTestDirectories;

let srcFolders;
const isRepoTest = !process.cwd().includes('/packages/');

if (isRepoTest) {
  srcFolders = getTestDirectories('lerna.json');
} else {
  srcFolders = getTestDirectories(process.cwd());
}

const config = nightwatchConfig(webpackConfig, srcFolders);

module.exports = config;
